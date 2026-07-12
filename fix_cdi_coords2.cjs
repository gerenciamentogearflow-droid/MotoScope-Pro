const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

content = content.replace(/x: 36.5,\s*y: 40,\s*labelX: 50,\s*labelY: 35,/, 'x: 37.5,\n        y: 30,\n        labelX: 48,\n        labelY: 25,');

fs.writeFileSync('src/data/componentsDB.ts', content);
