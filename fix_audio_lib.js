const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(
`        const res = await fetch(\`/audio/\${audioId}.mp3\`);
        if (res.ok && res.headers.get('content-type')?.includes('audio/')) {
          const blob = await res.blob();`,
`        const res = await fetch(\`/audio/\${audioId}.mp3\`);
        if (res.ok) {
          const rawBlob = await res.blob();
          const blob = new Blob([rawBlob], { type: 'audio/mp3' });`
);

code = code.replace(
`      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok && res.headers.get('content-type')?.includes('audio/')) {
        const blob = await res.blob();`,
`      const res = await fetch(\`/audio/\${audioId}.mp3\`);
      if (res.ok) {
        const rawBlob = await res.blob();
        const blob = new Blob([rawBlob], { type: 'audio/mp3' });`
);

code = code.replace(
`        if (ttsRes.ok) {
          const blob = await ttsRes.blob();`,
`        if (ttsRes.ok) {
          const rawBlob = await ttsRes.blob();
          const blob = new Blob([rawBlob], { type: 'audio/mp3' });`
);

fs.writeFileSync('src/lib/audioPlayer.ts', code);
