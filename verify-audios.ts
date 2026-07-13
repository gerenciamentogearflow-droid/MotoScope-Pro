import { componentsDB } from './src/data/componentsDB.js';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'audio');

let missing = false;

const extractAndCheck = (items) => {
  for (const comp of items) {
    if (comp.detailedTeacherExplanation) {
      const audioId = `${comp.id}-explanation`;
      const filePath = path.join(outputDir, `${audioId}.mp3`);
      if (!fs.existsSync(filePath)) {
        console.error(`Missing: ${audioId}`);
        missing = true;
      }
    }
    if (comp.variants) {
      extractAndCheck(comp.variants);
    }
  }
};

extractAndCheck(componentsDB);

if (!missing) {
  console.log("All explanation audios are present!");
}
