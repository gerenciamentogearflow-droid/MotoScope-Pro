const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(
  `const DB_NAME = 'motoscope-audio-db-v8';`,
  `const DB_NAME = 'motoscope-audio-db-v9';`
);

code = code.replace(
  `html5: true,`,
  `html5: false,`
);

code = code.replace(
`        const res = await fetch(\`/audio/\${audioId}.mp3\`);
        if (res.ok) {`,
`        const res = await fetch(\`/audio/\${audioId}.mp3\`);
        if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {`
);

code = code.replace(
`      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok) {`,
`      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {`
);

fs.writeFileSync('src/lib/audioPlayer.ts', code);
