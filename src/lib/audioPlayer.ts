import { Howl } from 'howler';
import { collection, doc, getDoc, getDocs, getDocFromServer } from 'firebase/firestore';
import { db } from './firebase';
import { openDB } from 'idb';
import { componentsDB } from '../data/componentsDB';

const DB_NAME = 'motoscope-audio-db-v2';
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
    const expectedAudios = componentsDB.flatMap(c => 
      c.waveformPhases ? c.waveformPhases.map(p => `${c.id}-phase-${p.id}`) : []
    );

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
        // Use getDocFromServer to bypass local cache, ensuring we get the new data
        const docRef = doc(db, 'audios', audioId);
        const docSnap = await getDocFromServer(docRef);
        
        if (docSnap.exists()) {
          const dataUri = docSnap.data().data;
          if (dataUri) {
            await localDb.put(STORE_NAME, dataUri, audioId);
          }
        } else {
          console.warn(`Audio ${audioId} not found on server during sync.`);
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
  private currentHowl: Howl | null = null;
  private cache: Record<string, Howl> = {};

  public async play(audioId: string) {
    this.stop();

    let sound = this.cache[audioId];
    if (!sound) {
      try {
        let dataUri: string | undefined;
        
        // 1. Try to get from local IndexedDB first
        const localDb = await getAudioDB();
        const cachedDataUri = await localDb.get(STORE_NAME, audioId);
        
        if (cachedDataUri) {
          dataUri = cachedDataUri;
        } else {
          // 2. If not found locally, fetch from Firestore
          const docRef = doc(db, 'audios', audioId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            dataUri = docSnap.data().data;
            // Save to local IndexedDB for future use
            if (dataUri) {
              await localDb.put(STORE_NAME, dataUri, audioId);
            }
          } else {
            console.warn(`Audio ${audioId} not found in database. Trying local fallback...`);
            dataUri = `/audio/${audioId}.mp3`;
          }
        }

        if (dataUri) {
          sound = new Howl({
            src: [dataUri],
            html5: false, // Force Web Audio API
            preload: true,
          });
          this.cache[audioId] = sound;
        }
      } catch (err) {
        console.error("Failed to fetch audio:", err);
        return;
      }
    }

    if (sound) {
      this.currentHowl = sound;
      sound.play();
    }
  }

  public stop() {
    if (this.currentHowl) {
      this.currentHowl.stop();
      this.currentHowl = null;
    }
  }
}

export const globalAudioPlayer = new AudioPlayer();
