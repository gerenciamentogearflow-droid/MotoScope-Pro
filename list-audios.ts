import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function list() {
  const audiosCollection = collection(db, 'audios');
  const snap = await getDocs(audiosCollection);
  snap.docs.forEach(doc => console.log(doc.id));
  process.exit(0);
}

list().catch(console.error);
