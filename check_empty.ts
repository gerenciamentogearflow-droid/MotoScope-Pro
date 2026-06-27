import * as fs from 'fs';
import * as path from 'path';

const file = path.join(process.cwd(), 'src/data/hondaPinouts.ts');
let content = fs.readFileSync(file, 'utf8');

const regex = /id:\s*"([^"]+)",[\s\S]*?pinout:\s*\[\]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1]);
}
