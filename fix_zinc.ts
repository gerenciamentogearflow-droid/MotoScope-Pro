import * as fs from 'fs';
import * as path from 'path';

function fixZinc(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) fixZinc(full);
    else if (full.endsWith('.tsx')) {
      let content = fs.readFileSync(full, 'utf8');
      const original = content;

      content = content.replace(/bg-zinc-200\/50/g, 'bg-gray-300');
      content = content.replace(/bg-zinc-200/g, 'bg-gray-300');
      content = content.replace(/border-zinc-900\/30/g, 'border-gray-900\/10');
      content = content.replace(/from-zinc-700 to-zinc-900/g, 'from-gray-700 to-gray-900'); // for multimeter knob, keep darkish
      content = content.replace(/border-zinc-600\/50/g, 'border-gray-800');
      content = content.replace(/border-zinc-600/g, 'border-gray-400');
      content = content.replace(/text-zinc-950/g, 'text-gray-900');
      content = content.replace(/text-zinc-600/g, 'text-gray-500');

      if (original !== content) {
        fs.writeFileSync(full, content);
        console.log('Fixed zinc in', full);
      }
    }
  }
}
fixZinc('src');
