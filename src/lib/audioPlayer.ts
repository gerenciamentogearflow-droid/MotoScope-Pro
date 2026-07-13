
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { openDB } from 'idb';
import { componentsDB } from '../data/componentsDB';

const DB_NAME = 'motoscope-audio-db-v17';
const STORE_NAME = 'audios';

async function getAudioDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

export async function syncAudiosForOffline(onProgress?: (progress: number) => void) {
  try {
    const localDb = await getAudioDB();
    
    // Determine expected audios from componentsDB
    const extractAudios = (items) => {
      return items.flatMap(c => {
        const audios = c.waveformPhases ? c.waveformPhases.map(p => `${c.id}-phase-${p.id}`) : [];
        if (c.detailedTeacherExplanation) {
          audios.push(`${c.id}-explanation`);
        }
        if (c.multimeter && c.multimeter.teacherExplanation) {
          audios.push(`multimeter/${c.id}`);
        }
        if (c.variants) {
          audios.push(...extractAudios(c.variants));
        }
        return audios;
      });
    };
    const expectedAudios = extractAudios(componentsDB);

    const existingKeys = await localDb.getAllKeys(STORE_NAME);
    const missingAudios = expectedAudios.filter(id => !existingKeys.includes(id as string));

    if (missingAudios.length === 0) {
      console.log('All audios are already synced for offline use.');
      if (onProgress) onProgress(100);
      return;
    }

    let processed = 0;
    const total = missingAudios.length;

    for (const audioId of missingAudios) {
      try {
        // Fetch from local public/audio directory
        const res = await fetch(`/audio/${audioId}.mp3`);
        if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
          const blob = await res.blob();
          await localDb.put(STORE_NAME, blob, audioId);
        } else {
          // If not found statically, try to generate it via TTS
          console.warn(`Audio ${audioId} not found locally during sync. Trying TTS...`);
          // Find textToSpeak for this audioId
          let text = "";
          if (audioId.startsWith("multimeter/")) {
            const compId = audioId.replace("multimeter/", "");
            const comp = componentsDB.find(c => c.id === compId) || componentsDB.flatMap(c => c.variants || []).find(v => v.id === compId);
            if (comp && comp.multimeter && comp.multimeter.teacherExplanation) text = comp.multimeter.teacherExplanation;
          } else if (audioId.endsWith("-explanation")) {
            const compId = audioId.replace("-explanation", "");
            const comp = componentsDB.find(c => c.id === compId) || componentsDB.flatMap(c => c.variants || []).find(v => v.id === compId);
            if (comp && comp.detailedTeacherExplanation) text = comp.detailedTeacherExplanation;
          } else if (audioId.includes("-phase-")) {
            const parts = audioId.split("-phase-");
            const compId = parts[0];
            const phaseId = parseInt(parts[1], 10);
            const comp = componentsDB.find(c => c.id === compId) || componentsDB.flatMap(c => c.variants || []).find(v => v.id === compId);
            if (comp && comp.waveformPhases) {
              const phase = comp.waveformPhases.find(p => p.id === phaseId);
              if (phase && phase.description) text = phase.description;
            }
          }
          if (text) {
            const ttsRes = await fetch('/api/tts', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: audioId, text })
            });
            if (ttsRes.ok) {
              const blob = await ttsRes.blob();
              await localDb.put(STORE_NAME, blob, audioId);
            }
          }
        }
      } catch (err) {
        console.warn(`Failed to sync audio ${audioId}:`, err);
      }
      processed++;
      if (onProgress) {
        onProgress(Math.round((processed / total) * 100));
      }
    }
    console.log(`Synced ${missingAudios.length} missing audios to local IndexedDB for offline use.`);
  } catch (err) {
    console.error("Failed to sync audios:", err);
  }
}

class AudioPlayer {
  private currentAudio: HTMLAudioElement | null = null;
  private cache: Record<string, HTMLAudioElement> = {};

  public async play(audioId: string, textToSpeak?: string) {
    this.stop();
    window.dispatchEvent(new CustomEvent('motoscope:global-play'));

    try {
      let sound = this.cache[audioId];

      if (!sound) {
        let srcUrl = `/audio/${audioId}.mp3`;
        try {
          const dataUri = await getAudioDataUri(audioId, textToSpeak);
          if (dataUri) {
            srcUrl = dataUri;
          }
        } catch (err) {
          console.error("Failed to get audio data URI", err);
        }

        sound = new Audio(srcUrl);
        this.cache[audioId] = sound;
      }

      this.currentAudio = sound;
      await sound.play();
    } catch (err) {
      console.error("Audio play error:", err);
    }
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }
}


export const globalAudioPlayer = new AudioPlayer();

export async function getAudioDataUri(audioId: string, textToSpeak?: string): Promise<string | undefined> {
  try {
    const localDb = await getAudioDB();
    const cachedData = await localDb.get(STORE_NAME, audioId);
    
    // 1. Prioritize native static file streaming if available
    try {
      const headRes = await fetch(`/audio/${audioId}.mp3`, { method: 'HEAD' });
      if (headRes.ok && !headRes.headers.get('content-type')?.includes('text/html')) {
        // Asynchronously cache it if it's missing from IndexedDB
        if (!cachedData) {
          fetch(`/audio/${audioId}.mp3`)
            .then(r => r.blob())
            .then(b => localDb.put(STORE_NAME, b, audioId))
            .catch(() => {});
        }
        return `/audio/${audioId}.mp3`;
      }
    } catch (e) {
      // Ignore network errors, proceed to fallback
    }

    // 2. Fallback to IndexedDB cache
    if (cachedData) {
      if (typeof cachedData === 'string' && cachedData.startsWith('data:')) {
        let dataUri = cachedData;
        if (dataUri.startsWith('data:application/octet-stream;base64,')) {
          dataUri = dataUri.replace('data:application/octet-stream;base64,', 'data:audio/mp3;base64,');
        }
        return dataUri;
      } else if (cachedData instanceof Blob) {
        return URL.createObjectURL(new Blob([cachedData], { type: 'audio/mpeg' }));
      }
    }

    // 3. Fallback to generating via TTS API
    if (textToSpeak) {
      console.warn(`Audio ${audioId} not found statically. Generating via TTS API...`);
      const ttsRes = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: audioId, text: textToSpeak })
      });
      
      if (ttsRes.ok) {
        const blob = await ttsRes.blob();
        await localDb.put(STORE_NAME, blob, audioId);
        return URL.createObjectURL(new Blob([blob], { type: 'audio/mpeg' }));
      }
    }
    
    return undefined;
  } catch (err) {
    console.error("Failed to get audio data URI:", err);
    return undefined;
  }
}
