const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(
  `const DB_NAME = 'motoscope-audio-db-v9';`,
  `const DB_NAME = 'motoscope-audio-db-v10';`
);

code = code.replace(
`        const res = await fetch(\`/audio/\${audioId}.mp3\`);
        if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
          const rawBlob = await res.blob();
          const blob = new Blob([rawBlob], { type: 'audio/mp3' });`,
`        const res = await fetch(\`/audio/\${audioId}.mp3\`);
        if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
          const blob = await res.blob();`
);

code = code.replace(
`      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
        const rawBlob = await res.blob();
        const blob = new Blob([rawBlob], { type: 'audio/mp3' });`,
`      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok && !res.headers.get('content-type')?.includes('text/html')) {
        const blob = await res.blob();`
);

code = code.replace(
`        if (ttsRes.ok) {
          const rawBlob = await ttsRes.blob();
          const blob = new Blob([rawBlob], { type: 'audio/mp3' });`,
`        if (ttsRes.ok) {
          const blob = await ttsRes.blob();`
);

fs.writeFileSync('src/lib/audioPlayer.ts', code);
