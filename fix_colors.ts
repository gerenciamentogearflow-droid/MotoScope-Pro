import * as fs from 'fs';
import * as path from 'path';

function fixColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/text-orange-400/g, 'text-orange-600');
  content = content.replace(/bg-orange-500\/10/g, 'bg-orange-600\/10');
  content = content.replace(/border-orange-500\/20/g, 'border-orange-600\/20');
  
  content = content.replace(/text-purple-400/g, 'text-purple-600');
  content = content.replace(/bg-purple-500\/10/g, 'bg-purple-600\/10');
  content = content.replace(/border-purple-500\/20/g, 'border-purple-600\/20');
  content = content.replace(/text-purple-100/g, 'text-purple-700');
  
  content = content.replace(/text-rose-400/g, 'text-rose-600');
  content = content.replace(/bg-rose-500\/10/g, 'bg-rose-600\/10');
  content = content.replace(/border-rose-500\/20/g, 'border-rose-600\/20');
  content = content.replace(/text-rose-100/g, 'text-rose-700');

  content = content.replace(/text-emerald-400/g, 'text-emerald-600');
  content = content.replace(/bg-emerald-500\/10/g, 'bg-emerald-600\/10');
  content = content.replace(/border-emerald-500\/20/g, 'border-emerald-600\/20');
  content = content.replace(/text-emerald-100/g, 'text-emerald-700');

  content = content.replace(/text-blue-400/g, 'text-blue-600');
  content = content.replace(/bg-blue-500\/10/g, 'bg-blue-600\/10');
  content = content.replace(/border-blue-500\/20/g, 'border-blue-600\/20');
  content = content.replace(/text-blue-100/g, 'text-blue-700');

  content = content.replace(/text-cyan-400/g, 'text-red-600');
  content = content.replace(/text-cyan-200/g, 'text-red-600');
  content = content.replace(/text-cyan-100/g, 'text-red-700');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed colors in', filePath);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixColorsInFile(fullPath);
    }
  }
}

processDir('src');
