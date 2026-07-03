import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function test() {
  const docRef = doc(db, 'audios', 'cdi-dc-phase-1');
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    console.log("Audio exists! size:", snap.data().data.length);
  } else {
    console.log("Audio not found!");
  }
  process.exit(0);
}

test().catch(console.error);
