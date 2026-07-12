const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

content = content.replace("``O gráfico", "`O gráfico");

fs.writeFileSync('src/data/componentsDB.ts', content);
