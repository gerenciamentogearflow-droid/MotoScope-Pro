
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { openDB } from 'idb';
import { componentsDB } from '../data/componentsDB';

const DB_NAME = 'motoscope-audio-db-v21';
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
              if (blob.size > 0 && !blob.type.includes('text/html')) {
                await localDb.put(STORE_NAME, blob, audioId);
              }
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
  private activeUtterance: SpeechSynthesisUtterance | null = null;

  public async play(audioId: string, textToSpeak?: string) {
    this.stop();
    window.dispatchEvent(new CustomEvent('motoscope:global-play'));

    try {
      let sound = this.cache[audioId];

      if (!sound) {
        let srcUrl: string | undefined = undefined;
        try {
          srcUrl = await getAudioDataUri(audioId, textToSpeak);
        } catch (err) {
          console.error("Failed to get audio data URI", err);
        }

        if (!srcUrl) {
          if (textToSpeak) {
            this.playSynthesis(textToSpeak);
          }
          return;
        }

        sound = new Audio(srcUrl);
        this.cache[audioId] = sound;
      }

      this.currentAudio = sound;
      
      try {
        await sound.play();
      } catch (playErr) {
        console.warn(`AudioPlayer: play failed for ${audioId}. Trying SpeechSynthesis:`, playErr);
        if (textToSpeak) {
          this.playSynthesis(textToSpeak);
        }
      }
    } catch (err) {
      console.error("Audio play error:", err);
      if (textToSpeak) {
        this.playSynthesis(textToSpeak);
      }
    }
  }

  private playSynthesis(text: string) {
    try {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/\*\*/g, '').replace(/\*/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'pt-BR';
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang.startsWith('pt-BR')) || voices.find(v => v.lang.startsWith('pt'));
      if (ptVoice) {
        utterance.voice = ptVoice;
      }
      this.activeUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("AudioPlayer SpeechSynthesis failed:", e);
    }
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    try {
      window.speechSynthesis.cancel();
      this.activeUtterance = null;
    } catch (e) {
      // Ignore
    }
  }
}


export const globalAudioPlayer = new AudioPlayer();

export async function getAudioDataUri(audioId: string, textToSpeak?: string): Promise<string | undefined> {
  try {
    const localDb = await getAudioDB();
    const cachedData = await localDb.get(STORE_NAME, audioId);
    
    // 1. Check if we already have a valid audio stored in IndexedDB cache (Local-First/Offline-First)
    if (cachedData) {
      if (typeof cachedData === 'string' && cachedData.startsWith('data:')) {
        let dataUri = cachedData;
        if (dataUri.startsWith('data:application/octet-stream;base64,')) {
          dataUri = dataUri.replace('data:application/octet-stream;base64,', 'data:audio/mp3;base64,');
        }
        return dataUri;
      } else if (cachedData instanceof Blob) {
        if (cachedData.size > 0 && !cachedData.type.includes('text/html')) {
          return URL.createObjectURL(new Blob([cachedData], { type: 'audio/mpeg' }));
        } else {
          // If cached data is empty or invalid HTML error, clean it up
          await localDb.delete(STORE_NAME, audioId);
        }
      }
    }

    // 2. If not in IndexedDB, fetch the static file using standard GET.
    // Converting it to a Blob and saving it to IndexedDB eliminates the Safari HTTP Range requests bug.
    try {
      const res = await fetch(`/audio/${audioId}.mp3`);
      if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
        const blob = await res.blob();
        if (blob.size > 0 && !blob.type.includes('text/html')) {
          await localDb.put(STORE_NAME, blob, audioId);
          return URL.createObjectURL(new Blob([blob], { type: 'audio/mpeg' }));
        }
      }
    } catch (e) {
      console.warn(`Static audio fetch failed for ${audioId} (possibly offline or dynamic file):`, e);
    }

    // 3. Fallback: generate via server-side TTS API
    if (textToSpeak) {
      console.warn(`Audio ${audioId} not found statically. Generating via TTS API...`);
      try {
        const ttsRes = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: audioId, text: textToSpeak })
        });
        
        if (ttsRes.ok) {
          const blob = await ttsRes.blob();
          if (blob.size > 0 && !blob.type.includes('text/html')) {
            await localDb.put(STORE_NAME, blob, audioId);
            return URL.createObjectURL(new Blob([blob], { type: 'audio/mpeg' }));
          }
        }
      } catch (e) {
        console.error(`TTS generation failed for ${audioId}:`, e);
      }
    }
    
    // 4. Fallback final: se temos texto para falar, retornamos undefined para acionar a síntese de voz nativa.
    // Caso contrário, tentamos o path relativo original.
    if (textToSpeak) {
      return undefined;
    }
    return `/audio/${audioId}.mp3`;
  } catch (err) {
    console.error("Failed to get audio data URI:", err);
    if (textToSpeak) {
      return undefined;
    }
    return `/audio/${audioId}.mp3`;
  }
}
