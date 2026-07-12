const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

content = content.replace(/id: "estator",\n    name: "Estator \(Gerador\)",/, 'id: "estator",\n    name: "Estator (Gerador)",\n    isGroup: true,\n    variants: [\n      { id: "estator-1f", name: "1 Fase (Monofásico)" },\n      { id: "estator-2f", name: "2 Fases (Bifásico)" },\n      { id: "estator-3f", name: "3 Fases (Trifásico)" }\n    ],');

fs.writeFileSync('src/data/componentsDB.ts', content);
