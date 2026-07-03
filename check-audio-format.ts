import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function check() {
  const oldDoc = await getDoc(doc(db, 'audios', 'tps-phase-1'));
  const newDoc = await getDoc(doc(db, 'audios', 'cdi-dc-phase-1'));
  
  if (oldDoc.exists()) {
    console.log("Old (tps):", oldDoc.data().data.substring(0, 50));
  }
  if (newDoc.exists()) {
    console.log("New (cdi-dc):", newDoc.data().data.substring(0, 50));
  }
  process.exit(0);
}

check().catch(console.error);
