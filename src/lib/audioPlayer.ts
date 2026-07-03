import { Howl } from 'howler';

class AudioPlayer {
  private currentHowl: Howl | null = null;
  private cache: Record<string, Howl> = {};

  public play(url: string) {
    this.stop();

    let sound = this.cache[url];
    if (!sound) {
      sound = new Howl({
        src: [url],
        html5: false, // Force Web Audio API (downloads fully, avoids iOS 206 Partial Content SW bug)
        preload: true,
      });
      this.cache[url] = sound;
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
