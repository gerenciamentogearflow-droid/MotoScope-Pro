import fs from 'fs';
import path from 'path';
import { componentsDB } from './src/data/componentsDB.ts';

async function run() {
  const { EdgeTTS } = await import('node-edge-tts');
  const tts = new EdgeTTS({
    voice: 'pt-BR-AntonioNeural',
    lang: 'pt-BR',
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
  });

  const extractAudios = (items: any[]) => {
    return items.flatMap(c => {
      const audios = c.waveformPhases ? c.waveformPhases.map((p: any) => ({
        id: `${c.id}-phase-${p.id}`,
        text: p.description
      })) : [];
      if (c.detailedTeacherExplanation) {
        audios.push({ id: `${c.id}-explanation`, text: c.detailedTeacherExplanation });
      }
      if (c.multimeter && c.multimeter.teacherExplanation) {
        audios.push({ id: `multimeter/${c.id}`, text: c.multimeter.teacherExplanation });
      }
      if (c.variants) {
        audios.push(...extractAudios(c.variants));
      }
      return audios;
    });
  };

  const expectedAudios = extractAudios(componentsDB);
  console.log(`Need to generate ${expectedAudios.length} audios...`);

  for (const { id, text } of expectedAudios) {
    if (!text) continue;
    const filePath = path.join(process.cwd(), 'public', 'audio', `${id}.mp3`);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      // console.log(`Skipping ${id}, already exists.`);
      continue;
    }
    
    console.log(`Generating ${id}...`);
    try {
      await tts.ttsPromise(text, filePath);
    } catch (e) {
      console.error(`Error generating ${id}:`, e);
    }
  }
  console.log('Done!');
}

run();
