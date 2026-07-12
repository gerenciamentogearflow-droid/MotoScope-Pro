import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import firebaseConfig from "./firebase-applet-config.json" assert { type: "json" };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function test() {
  try {
    const testRef = ref(storage, "test.txt");
    await uploadString(testRef, "hello world");
    const url = await getDownloadURL(testRef);
    console.log("Success! URL:", url);
  } catch (err) {
    console.error("Failed:", err);
  }
}

test();
