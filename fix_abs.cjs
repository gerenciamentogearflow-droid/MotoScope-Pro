const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

// Fix the variant
content = content.replace('{ id: "abs-indutivo",\n    hidden: true,, name: "Passivo (Indutivo - Analógico)" }', '{ id: "abs-indutivo", name: "Passivo (Indutivo - Analógico)" }');

// We also need to add hidden: true back to the actual abs-indutivo component if it's missing
content = content.replace(/\{\n\s+id: "abs-indutivo"\n\s+name: "Sensor ABS - Indutivo",/, '{\n    id: "abs-indutivo",\n    hidden: true,\n    name: "Sensor ABS - Indutivo",');

fs.writeFileSync('src/data/componentsDB.ts', content);
