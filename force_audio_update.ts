import fs from 'fs';
import path from 'path';
import { componentsDB } from './src/data/componentsDB';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';
import { EdgeTTS } from 'node-edge-tts';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function forceUpdate() {
  const tts = new EdgeTTS({
    voice: 'pt-BR-AntonioNeural',
    lang: 'pt-BR',
    outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
  });

  const outputDir = path.join(process.cwd(), 'public', 'audio');
  
  const targets = [
    'ignition-coil-secondary',
    'ignition-coil',
    'ignition-coil-secondary-cdi',
    'ignition-coil-secondary-cdi-prox',
    'cdi-dc',
    'cdi-ac'
  ];

  for (const component of componentsDB) {
    if (!targets.includes(component.id) || !component.waveformPhases) continue;

    for (const phase of component.waveformPhases) {
      const audioId = `${component.id}-phase-${phase.id}`;
      const fileName = `${audioId}.mp3`;
      const filePath = path.join(outputDir, fileName);

      const plainTextDescription = phase.description.replace(/\*\*/g, '').replace(/\*/g, '');
      let textToSpeak = `${phase.title}. ${plainTextDescription}`;
      textToSpeak = textToSpeak.replace(/Dwell/gi, 'Duél');

      console.log(`Generating audio for ${audioId} with text: "${textToSpeak}"`);
      
      try {
        await tts.ttsPromise(textToSpeak, filePath);
        
        console.log(`Uploading ${audioId} to Firestore...`);
        const buffer = fs.readFileSync(filePath);
        const base64data = `data:audio/mp3;base64,${buffer.toString('base64')}`;
        await setDoc(doc(db, 'audios', audioId), { data: base64data });
        console.log(`Done for ${audioId}`);
      } catch(e) {
        console.error(`Failed for ${audioId}:`, e);
      }
    }
  }
  console.log("All targeted audio updated successfully.");
  process.exit(0);
}

forceUpdate().catch(console.error);
