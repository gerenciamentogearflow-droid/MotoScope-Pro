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
        text: `Parte ${p.id}. ${p.title}. ${p.description}`
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

  function cleanTextForPronunciation(text: string): string {
    let cleaned = text.replace(/\*\*/g, '').replace(/\*/g, '');
    cleaned = cleaned.replace(/Dwell/gi, 'Duél');
    cleaned = cleaned.replace(/\bCKP\b/gi, 'Cê Ka Pê');
    cleaned = cleaned.replace(/\bTPS\b/gi, 'Tê Pê Ésse');
    cleaned = cleaned.replace(/\bMAP\b/gi, 'Mê Á Pê');
    cleaned = cleaned.replace(/\bCDI\b/gi, 'Cê Dê Í');
    cleaned = cleaned.replace(/\bABS\b/gi, 'Á Bê Ésse');
    cleaned = cleaned.replace(/\bAC\b/gi, 'A Cê');
    cleaned = cleaned.replace(/\bDC\b/gi, 'Dê Cê');
    cleaned = cleaned.replace(/\b1F\b/gi, 'monofásico');
    cleaned = cleaned.replace(/\b2F\b/gi, 'bifásico');
    cleaned = cleaned.replace(/\b3F\b/gi, 'trifásico');
    return cleaned;
  }

  for (const { id, text } of expectedAudios) {
    if (!text) continue;
    const filePath = path.join(process.cwd(), 'public', 'audio', `${id}.mp3`);
    const distFilePath = path.join(process.cwd(), 'dist', 'audio', `${id}.mp3`);
    
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.mkdirSync(path.dirname(distFilePath), { recursive: true });
    
    const textToSpeak = cleanTextForPronunciation(text);
    console.log(`Generating ${id}...`);
    try {
      await tts.ttsPromise(textToSpeak, filePath);
      // Copy to dist too
      fs.copyFileSync(filePath, distFilePath);
      console.log(`Done for ${id}`);
    } catch (e) {
      console.error(`Error generating ${id}:`, e);
    }
    
    // Tiny delay to be safe
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All audios generated and copied successfully!');
}

run();
