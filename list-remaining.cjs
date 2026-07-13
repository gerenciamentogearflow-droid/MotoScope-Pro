const fs = require('fs');
const content = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');

const regex = /"id":\s*"([^"]+)"[\s\S]*?"teacherExplanation":\s*"Vamos analisar o diagnóstico eletrônico[^"]*"/g;
let match;
while ((match = regex.exec(content)) !== null) {
   console.log(match[1]);
}
