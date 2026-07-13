import fs from 'fs';

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');

content = content.replace(/(["\d]|true|false)\s*\n\s*"/g, "$1,\n      \"");

fs.writeFileSync('src/data/componentsDB.ts', content);
