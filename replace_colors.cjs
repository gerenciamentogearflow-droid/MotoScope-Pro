const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-zinc-900': 'bg-gray-50',
  'bg-zinc-950': 'bg-white',
  'bg-zinc-800/50': 'bg-white',
  'bg-zinc-800/40': 'bg-white',
  'bg-zinc-800/10': 'bg-gray-100/50',
  'bg-zinc-800/5': 'bg-gray-100/30',
  'bg-zinc-800': 'bg-white',
  'bg-zinc-700/50': 'bg-gray-200',
  'bg-zinc-700': 'bg-gray-200',
  'text-zinc-100': 'text-gray-900',
  'text-zinc-200/60': 'text-gray-600',
  'text-zinc-200': 'text-gray-800',
  'text-zinc-300': 'text-gray-700',
  'text-zinc-400': 'text-gray-600',
  'text-zinc-500': 'text-gray-500',
  'border-zinc-800': 'border-gray-200',
  'border-zinc-700/50': 'border-gray-200',
  'border-zinc-700': 'border-gray-300',
  'border-white/5': 'border-black/5',
  'border-white/10': 'border-black/10',
  'border-white/20': 'border-black/20',
  'cyan-400/50': 'red-600/50',
  'cyan-500/10': 'red-600/10',
  'cyan-500/20': 'red-600/20',
  'cyan-500/30': 'red-600/30',
  'cyan-500/5': 'red-600/5',
  'cyan-500/80': 'red-600/80',
  'cyan-400': 'red-600',
  'cyan-500': 'red-600',
  'cyan-600': 'red-700',
  'cyan-200': 'red-400',
  'cyan-50': 'red-50',
  'shadow-cyan-600/15': 'shadow-red-600/15',
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const [key, value] of Object.entries(replacements)) {
        if (content.includes(key)) {
          content = content.split(key).join(value);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('src');
