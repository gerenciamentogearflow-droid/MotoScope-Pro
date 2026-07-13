const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(/public async play\(audioId: string, textToSpeak\?: string\) \{[\s\S]*?public stop\(\) \{/m, 
`public async play(audioId: string, textToSpeak?: string) {
    this.stop();
    let sound = this.cache[audioId];
    if (!sound) {
      // For playback, we prefer the direct URL. The browser / service worker will handle caching.
      // If IndexedDB has it, we could use it, but URL is safer for Howler.
      let srcUrl = \`/audio/\${audioId}.mp3\`;
      
      sound = new Howl({
        src: [srcUrl],
        html5: true, // html5 true is often better for standard mp3 files
        preload: true,
        format: ['mp3']
      });
      this.cache[audioId] = sound;
    }
    
    if (sound) {
      this.currentHowl = sound;
      sound.play();
    }
  }

  public stop() {`);

fs.writeFileSync('src/lib/audioPlayer.ts', code);
