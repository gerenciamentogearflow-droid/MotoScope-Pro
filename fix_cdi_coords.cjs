const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

content = content.replace(/x: 46,\s*y: 5,\s*labelX: 35,\s*labelY: 15,/, 'x: 35.2,\n        y: 5,\n        labelX: 25,\n        labelY: 15,');

fs.writeFileSync('src/data/componentsDB.ts', content);
