import * as fs from 'fs';
import * as path from 'path';

function fixWhite(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) fixWhite(full);
    else if (full.endsWith('.tsx')) {
      let content = fs.readFileSync(full, 'utf8');
      const original = content;

      content = content.replace(/hover:bg-white\/5/g, 'hover:bg-gray-100');
      content = content.replace(/bg-white\/60/g, 'bg-white'); // simpler clean background
      content = content.replace(/bg-white\/20/g, 'bg-white');
      
      if (original !== content) {
        fs.writeFileSync(full, content);
        console.log('Fixed white in', full);
      }
    }
  }
}
fixWhite('src');
