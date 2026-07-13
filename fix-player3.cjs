const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(/motoscope-audio-db-v\d+/g, 'motoscope-audio-db-v7');

fs.writeFileSync('src/lib/audioPlayer.ts', code);
