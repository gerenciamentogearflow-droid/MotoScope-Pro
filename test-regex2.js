const fs = require('fs');
const content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');
const regex = /"teacherExplanation":\s*"(?:[^"\\]|\\.)*"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log("Matched length:", match[0].length);
}
