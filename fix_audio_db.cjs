const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(
  `const DB_NAME = 'motoscope-audio-db-v7';`,
  `const DB_NAME = 'motoscope-audio-db-v8';`
);

code = code.replace(
  `html5: false,`,
  `html5: true,`
);

fs.writeFileSync('src/lib/audioPlayer.ts', code);
