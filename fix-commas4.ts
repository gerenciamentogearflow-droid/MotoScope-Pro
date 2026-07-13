import fs from 'fs';

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

const lines = content.split('\n');
for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i].trimEnd();
  const nextLine = lines[i+1].trimStart();
  if ((line.endsWith('"') || line.endsWith('true') || line.endsWith('false') || line.match(/\d$/)) && nextLine.startsWith('"')) {
     lines[i] = lines[i].replace(/\s*$/, ',$matched'); // replace end with , ? no
     // better to just add comma
     lines[i] = line + ',';
  }
}

fs.writeFileSync('src/data/componentsDB.ts', lines.join('\n'));
