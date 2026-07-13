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
  try {
    await tts.ttsPromise(text, '/tmp/test-chunk.mp3');
    console.log("Success");
  } catch (e) {
    console.error(e);
  }
}
main();
