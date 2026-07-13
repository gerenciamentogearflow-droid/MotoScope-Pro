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
    if (c.multimeter && c.multimeter.teacherExplanation) {
      map.set(c.id, c.multimeter.teacherExplanation);
    }
  }

  const audioDir = path.join('public', 'audio', 'multimeter');
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  const distAudioDir = path.join('dist', 'audio', 'multimeter');
  if (!fs.existsSync(distAudioDir)) {
    fs.mkdirSync(distAudioDir, { recursive: true });
  }

  for (const [id, text] of map.entries()) {
    const outputPath = path.join(audioDir, `${id}.mp3`);
    if (fs.existsSync(outputPath)) {
      console.log(`Audio for ${id} already exists, skipping.`);
      continue;
    }
    
    console.log(`Generating multimeter audio for ${id}...`);
    try {
      await generateTTS(text, outputPath);
      fs.copyFileSync(outputPath, path.join(distAudioDir, `${id}.mp3`));
      console.log(`Successfully generated for ${id}`);
    } catch (e) {
      console.error(`Failed for ${id}:`, e);
    }
    await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
  }
}

main().catch(console.error);
