import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function upload() {
  const audioDir = path.join(process.cwd(), 'public', 'audio');
  const files = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));

  for (const file of files) {
    const audioId = file.replace('.mp3', '');
    const filePath = path.join(audioDir, file);
    
    // Check if it exists
    const docRef = doc(db, 'audios', audioId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.log(`Uploading ${audioId} to Firestore...`);
      const buffer = fs.readFileSync(filePath);
      const base64data = `data:audio/mp3;base64,${buffer.toString('base64')}`;
      await setDoc(docRef, { data: base64data });
    } else {
      console.log(`${audioId} already exists in Firestore.`);
      // Force update for cdi-dc and cdi to make sure they are correct
      if (audioId.includes('cdi') || audioId.includes('ignition-coil-secondary')) {
         console.log(`Force updating ${audioId}...`);
         const buffer = fs.readFileSync(filePath);
         const base64data = `data:audio/mp3;base64,${buffer.toString('base64')}`;
         await setDoc(docRef, { data: base64data });
      }
    }
  }
  console.log("Done uploading.");
  process.exit(0);
}

upload().catch(console.error);
