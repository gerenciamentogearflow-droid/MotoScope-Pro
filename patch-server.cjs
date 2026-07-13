const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

const replacement = `
      // We use import to load it dynamically
      const { EdgeTTS } = await import('node-edge-tts');
      
      const tts = new EdgeTTS({
        voice: 'pt-BR-AntonioNeural', // Male voice for PT-BR
        lang: 'pt-BR',
        outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
      });
      
      // chunk text to avoid timeout
      const chunks = text.match(/[^.!?]+[.!?]+/g) || [text];
      let currentChunk = "";
      let finalChunks = [];
      for (let c of chunks) {
        if (currentChunk.length + c.length > 500) {
           finalChunks.push(currentChunk);
           currentChunk = c;
        } else {
           currentChunk += c;
        }
      }
      if (currentChunk.trim().length > 0) finalChunks.push(currentChunk);
      
      let finalBuffer = Buffer.alloc(0);
      for (let i = 0; i < finalChunks.length; i++) {
         const tmpFile = \`\${filePath}.part\${i}\`;
         await tts.ttsPromise(finalChunks[i], tmpFile);
         if (fs.existsSync(tmpFile)) {
           const b = fs.readFileSync(tmpFile);
           finalBuffer = Buffer.concat([finalBuffer, b]);
           fs.unlinkSync(tmpFile);
         }
      }
      
      fs.writeFileSync(filePath, finalBuffer);
`;

serverCode = serverCode.replace(/const \{ EdgeTTS \} = await import\('node-edge-tts'\);[\s\S]*?await tts\.ttsPromise\(text, filePath\);/g, replacement);

fs.writeFileSync('server.ts', serverCode);
