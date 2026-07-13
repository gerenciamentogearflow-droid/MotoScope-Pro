import fs from 'fs';
import path from 'path';
import { componentsDB } from './src/data/componentsDB';
import { EdgeTTS } from 'node-edge-tts';

async function generateAllPhaseAudios() {
  const tts = new EdgeTTS({
    voice: 'pt-BR-AntonioNeural',
    lang: 'pt-BR',
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
  });
  const outputDir = path.join(process.cwd(), 'public', 'audio');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // extract all variants too
  const allComponents = [];
  for (const c of componentsDB) {
    if (c.isGroup && c.variants) {
      allComponents.push(...c.variants);
    } else {
      allComponents.push(c);
    }
  }

  let count = 0;
  for (const component of allComponents) {
    if (!component.waveformPhases) continue;
    for (const phase of component.waveformPhases) {
      const audioId = `${component.id}-phase-${phase.id}`;
      const fileName = `${audioId}.mp3`;
      const filePath = path.join(outputDir, fileName);
      const plainTextDescription = phase.description.replace(/\*\*/g, '').replace(/\*/g, '');
      let textToSpeak = `Parte ${phase.id}. ${phase.title}. ${plainTextDescription}`;
      textToSpeak = textToSpeak.replace(/Dwell/gi, 'Duél');
      textToSpeak = textToSpeak.replace(/CKP/gi, 'C K P');
      textToSpeak = textToSpeak.replace(/TPS/gi, 'T P S');
      textToSpeak = textToSpeak.replace(/MAP/gi, 'M A P');
      
      console.log(`Generating audio for ${audioId} with text: "${textToSpeak}"`);
      
      try {
        await tts.ttsPromise(textToSpeak, filePath);
        console.log(`Done for ${audioId}`);
        count++;
      } catch(e) {
        console.error(`Failed for ${audioId}:`, e);
      }
      
      // Delay to avoid hitting rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  console.log(`Generated ${count} phase audios successfully.`);
  process.exit(0);
}

generateAllPhaseAudios().catch(console.error);
