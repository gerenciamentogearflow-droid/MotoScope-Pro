const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(/public async play\(audioId: string, textToSpeak\?: string\) \{[\s\S]*?public stop\(\) \{/m, 
`public async play(audioId: string, textToSpeak?: string) {
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

  public stop() {`);

code = code.replace(/\\`/g, '`').replace(/\\\$/g, '$');

fs.writeFileSync('src/lib/audioPlayer.ts', code);
