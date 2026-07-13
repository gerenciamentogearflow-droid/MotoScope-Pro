const fs = require('fs');
let fileContent = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');
const regex = /"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/g;
let matches = [...fileContent.matchAll(regex)];
console.log(`Found ${matches.length}`);

const matchRegex = /"id":\s*"([^"]+)"[\s\S]*?"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/;
const match = matchRegex.exec(fileContent);
if (match) console.log(match[1]);
