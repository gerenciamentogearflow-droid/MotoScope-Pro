const fs = require('fs');
let code = fs.readFileSync('src/data/componentsDB.ts', 'utf8');
const counts = (code.match(/"detailedTeacherExplanation":/g) || []).length;
console.log(`Found ${counts} detailedTeacherExplanations`);
