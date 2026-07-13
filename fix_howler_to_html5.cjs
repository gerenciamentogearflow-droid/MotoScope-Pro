const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(
`import { Howl } from 'howler';`,
``
);

const howlerClassStr = `class AudioPlayer {
  private currentHowl: Howl | null = null;
  private cache: Record<string, Howl> = {};

  public async play(audioId: string, textToSpeak?: string) {
    this.stop();

    let sound = this.cache[audioId];
    if (!sound) {
      let srcUrl = \`/audio/\${audioId}.mp3\`;
      try {
        const dataUri = await getAudioDataUri(audioId, textToSpeak);
        if (dataUri) {
          srcUrl = dataUri;
        }
      } catch (err) {
        console.error("Failed to get audio data URI for Howler", err);
      }
      
      sound = new Howl({
        src: [srcUrl],
        html5: false,
        preload: true,
        format: ['mp3'],
        onloaderror: (id, err) => console.error("Howler load error", err),
        onplayerror: (id, err) => {
          console.error("Howler play error", err);
          sound?.once('unlock', () => sound?.play());
        }
      });
      this.cache[audioId] = sound;
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
}`;

const html5ClassStr = `class AudioPlayer {
  private currentAudio: HTMLAudioElement | null = null;
  private cache: Record<string, HTMLAudioElement> = {};

  public async play(audioId: string, textToSpeak?: string) {
    this.stop();

    try {
      let sound = this.cache[audioId];

      if (!sound) {
        let srcUrl = \`/audio/\${audioId}.mp3\`;
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
}`;

if (code.includes('class AudioPlayer')) {
  // We use regex to replace the class
  code = code.replace(/class AudioPlayer \{[\s\S]*?\}\n\}\n/m, html5ClassStr + '\n\n');
}

fs.writeFileSync('src/lib/audioPlayer.ts', code);
