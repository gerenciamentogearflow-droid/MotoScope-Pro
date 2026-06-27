import fs from 'fs';
let content = fs.readFileSync('src/data/hondaPinouts.ts', 'utf8');
content = content.replace(/name: "(?!Honda )([^"]+)"/g, 'name: "Honda $1"');
content = content.replace(/name: "Honda Módulo de Injeção Eletrônica \(ECM\)"/g, 'name: "Módulo de Injeção Eletrônica (ECM)"'); // Ensure module name is not prefixed
fs.writeFileSync('src/data/hondaPinouts.ts', content);
