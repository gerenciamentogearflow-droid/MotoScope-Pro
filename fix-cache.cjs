const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(/motoscope-audio-db-v4/g, 'motoscope-audio-db-v5');
code = code.replace(/!res.headers.get\('content-type'\)\?.includes\('text\/html'\)/g, "res.headers.get('content-type')?.includes('audio/')");

fs.writeFileSync('src/lib/audioPlayer.ts', code);
