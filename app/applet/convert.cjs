const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Text colors
      content = content.replace(/text-white/g, 'text-zinc-900');
      content = content.replace(/text-zinc-100/g, 'text-zinc-900');
      content = content.replace(/text-zinc-200/g, 'text-zinc-800');
      content = content.replace(/text-zinc-300/g, 'text-zinc-700');
      content = content.replace(/text-zinc-400/g, 'text-zinc-600');
      content = content.replace(/text-zinc-500/g, 'text-zinc-500');
      
      // Backgrounds
      content = content.replace(/bg-zinc-900\/50/g, 'bg-white/80');
      content = content.replace(/bg-zinc-900\/40/g, 'bg-white/60');
      content = content.replace(/bg-zinc-900\/90/g, 'bg-white/95');
      content = content.replace(/bg-zinc-950\/50/g, 'bg-zinc-50/80');
      content = content.replace(/bg-zinc-950/g, 'bg-zinc-50');
      content = content.replace(/bg-zinc-900/g, 'bg-white');
      content = content.replace(/bg-zinc-800\/80/g, 'bg-zinc-100/80');
      content = content.replace(/bg-zinc-800\/60/g, 'bg-zinc-100/60');
      content = content.replace(/bg-zinc-800/g, 'bg-zinc-100');
      content = content.replace(/bg-zinc-700/g, 'bg-zinc-200');
      content = content.replace(/bg-black\/40/g, 'bg-white/40');
      content = content.replace(/bg-black\/60/g, 'bg-white/60');
      content = content.replace(/bg-black\/80/g, 'bg-white/80');
      
      // Borders
      content = content.replace(/border-white\/5/g, 'border-black/5');
      content = content.replace(/border-white\/10/g, 'border-black/10');
      content = content.replace(/border-white\/20/g, 'border-black/20');
      content = content.replace(/border-zinc-800/g, 'border-zinc-200');
      
      // Hovers
      content = content.replace(/hover:bg-white\/5/g, 'hover:bg-black/5');
      content = content.replace(/hover:bg-white\/10/g, 'hover:bg-black/10');
      content = content.replace(/hover:border-white\/10/g, 'hover:border-black/10');
      content = content.replace(/hover:border-white\/20/g, 'hover:border-black/20');
      content = content.replace(/hover:bg-zinc-800\/80/g, 'hover:bg-zinc-100/80');
      content = content.replace(/hover:bg-zinc-800\/60/g, 'hover:bg-zinc-100/60');
      content = content.replace(/hover:bg-zinc-800/g, 'hover:bg-zinc-200');
      
      // Special colored buttons: restore white text for colored buttons
      content = content.replace(/bg-blue-600([^>]*)text-zinc-900/g, 'bg-blue-600$1text-white');
      content = content.replace(/bg-rose-600([^>]*)font-bold/g, 'bg-rose-600 text-white font-bold');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir('./src/components');
console.log('Done replacing in components.');
