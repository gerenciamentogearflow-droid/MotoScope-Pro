const fs = require('fs');
const path = require('path');

const replacements = {
  'rgba(6,182,212': 'rgba(220,38,38',
  'bg-red-600 hover:bg-red-600': 'bg-red-600 hover:bg-red-500',
  'bg-red-600 disabled:opacity-50 disabled:hover:bg-red-600 text-black': 'bg-red-600 disabled:opacity-50 disabled:hover:bg-red-600 text-white',
  'text-gray-900 mb-2': 'text-gray-900 mb-2 font-bold',
  'border border-black/5': 'border border-gray-200/60 shadow-sm',
  'bg-gray-100/30': 'bg-gray-50',
  'hover:bg-white/10': 'hover:bg-gray-100',
  'bg-white/80': 'bg-white',
  'hover:bg-gray-200/80': 'hover:bg-gray-50',
  'border-black/5': 'border-gray-200/80',
  'hover:border-black/10': 'hover:border-red-600/30 hover:shadow-red-600/10 hover:shadow-lg',
  'bg-white border border-gray-200/80': 'bg-white border border-gray-200 shadow-sm',
  'bg-gray-100/50 border border-gray-200/80 p-8 rounded-3xl': 'bg-white border border-gray-200 shadow-sm p-8 rounded-3xl',
  'border-t border-black/5': 'border-t border-gray-200'
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
