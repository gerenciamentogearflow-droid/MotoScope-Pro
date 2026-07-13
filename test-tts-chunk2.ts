import { EdgeTTS } from 'node-edge-tts';
import fs from 'fs';

async function main() {
  const text = "Um texto bem longo. ".repeat(100);
  const tts = new EdgeTTS({
    voice: 'pt-BR-AntonioNeural',
    lang: 'pt-BR',
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
  });
  console.log("Generating...");
  
  // split text into chunks of 1000 chars roughly by sentence.
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
  
  console.log("Total chunks: ", finalChunks.length);
  
  let finalBuffer = Buffer.alloc(0);
  
  for (let i = 0; i < finalChunks.length; i++) {
     console.log("Chunk", i);
     const tmpFile = `/tmp/chunk-${i}.mp3`;
     await tts.ttsPromise(finalChunks[i], tmpFile);
     const b = fs.readFileSync(tmpFile);
     finalBuffer = Buffer.concat([finalBuffer, b]);
  }
  
  fs.writeFileSync('/tmp/test-chunk2.mp3', finalBuffer);
  console.log("Success");
}
main();
