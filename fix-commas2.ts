import fs from 'fs';

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

// remove lines that are just commas
content = content.replace(/^\s*,\s*$/gm, '');

fs.writeFileSync('src/data/componentsDB.ts', content);
