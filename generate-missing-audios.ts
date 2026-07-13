import { componentsDB } from './src/data/componentsDB';
import * as fs from 'fs';
import * as path from 'path';

// Load edge-tts dynamically
async function generateTTS(text: string, outputPath: string) {
  const { EdgeTTS } = await import('node-edge-tts');
  const tts = new EdgeTTS({
    voice: 'pt-BR-AntonioNeural',
    lang: 'pt-BR',
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
  });
  await tts.ttsPromise(text, outputPath);
}

async function main() {
  const map = new Map<string, string>();
  
  for (const c of componentsDB) {
    if (c.isGroup) {
      if (c.detailedTeacherExplanation) {
         map.set(c.id, c.detailedTeacherExplanation);
      }
      if (c.variants) {
        for (const v of c.variants) {
          if (v.detailedTeacherExplanation) {
             map.set(v.id, v.detailedTeacherExplanation);
          }
        }
      }
    } else {
      if (c.detailedTeacherExplanation) {
         map.set(c.id, c.detailedTeacherExplanation);
      }
    }
  }

  for (const [id, text] of map.entries()) {
    console.log(`Generating audio for ${id}...`);
    try {
      await generateTTS(text, path.join('public', 'audio', `${id}-explanation.mp3`));
      // Also copy to dist to avoid full rebuild if possible
      fs.copyFileSync(path.join('public', 'audio', `${id}-explanation.mp3`), path.join('dist', 'audio', `${id}-explanation.mp3`));
      console.log(`Successfully generated for ${id}`);
    } catch (e) {
      console.error(`Failed for ${id}:`, e);
    }
    await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
  }
}

main().catch(console.error);
