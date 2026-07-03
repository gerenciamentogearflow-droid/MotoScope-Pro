import { Howl } from 'howler';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

class AudioPlayer {
  private currentHowl: Howl | null = null;
  private cache: Record<string, Howl> = {};

  public async play(audioId: string) {
    this.stop();

    let sound = this.cache[audioId];
    if (!sound) {
      try {
        const docRef = doc(db, 'audios', audioId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const dataUri = docSnap.data().data;
          sound = new Howl({
            src: [dataUri],
            html5: false, // Force Web Audio API
            preload: true,
          });
          this.cache[audioId] = sound;
        } else {
          console.warn(`Audio ${audioId} not found in database.`);
          return;
        }
      } catch (err) {
        console.error("Failed to fetch audio from database:", err);
        return;
      }
    }

    this.currentHowl = sound;
    sound.play();
  }

  public stop() {
    if (this.currentHowl) {
      this.currentHowl.stop();
      this.currentHowl = null;
    }
  }
}

export const globalAudioPlayer = new AudioPlayer();
