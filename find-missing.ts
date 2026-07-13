import { componentsDB } from './src/data/componentsDB';
import fs from 'fs';
import path from 'path';

for (const c of componentsDB) {
  if (c.detailedTeacherExplanation) {
     if (!fs.existsSync(path.join('public', 'audio', `${c.id}-explanation.mp3`))) {
         console.log('Missing audio for', c.id);
     }
  }
  if (c.isGroup && c.variants) {
     for (const v of c.variants) {
        if (v.detailedTeacherExplanation) {
           if (!fs.existsSync(path.join('public', 'audio', `${v.id}-explanation.mp3`))) {
              console.log('Missing audio for', v.id);
           }
        }
     }
  }
}
