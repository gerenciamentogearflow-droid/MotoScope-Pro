import { Howl } from 'howler';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { openDB } from 'idb';

const DB_NAME = 'motoscope-audio-db';
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
            console.warn(`Audio ${audioId} not found in database.`);
            return;
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
