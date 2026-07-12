import fs from 'fs';
import path from 'path';
import { componentsDB } from './src/data/componentsDB';

async function generate() {
  const { EdgeTTS } = await import('node-edge-tts');
  const tts = new EdgeTTS({
    voice: 'pt-BR-AntonioNeural',
    lang: 'pt-BR',
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
  });

  const outputDir = path.join(process.cwd(), 'public', 'audio');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const component of componentsDB) {
    if (!component || !component.waveformPhases) continue;
    
    for (const phase of component.waveformPhases) {
      const audioId = `${component.id}-phase-${phase.id}`;
      const fileName = `${audioId}.mp3`;
      const filePath = path.join(outputDir, fileName);

      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        continue;
      }

      const plainTextDescription = phase.description.replace(/\*\*/g, '').replace(/\*/g, '');
      let textToSpeak = `${phase.title}. ${plainTextDescription}`;
      textToSpeak = textToSpeak.replace(/Dwell/gi, 'Duél');

      console.log(`Generating ${fileName}...`);
      try {
        await tts.ttsPromise(textToSpeak, filePath);
      } catch(e) {
        console.error(`Failed for ${fileName}:`, e);
      }
    }
  }
  console.log("Done generating all audio!");
}

generate();
