const fs = require('fs');
let fileContent = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');
const matchRegex = /"id":\s*"([^"]+)"[\s\S]*?"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/;
const match = matchRegex.exec(fileContent);
if (match) {
    console.log("Matched:", match[1]);
} else {
    console.log("No match!");
}
