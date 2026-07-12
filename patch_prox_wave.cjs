const fs = require('fs');
let content = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf-8');

const regex = /case "ignition-secondary-cdi":\n\s+\/\/ [^\n]*\n\s+return "[^\n]*";/;
const proxWave = `\n      case "ignition-secondary-cdi-prox":
        // Ignition Coil Secondary CDI (Proximity): Flat -> Spike UP -> Deep Spike DOWN -> Curve UP to zero with a small bump
        return "M 0 50 L 35 50 L 35.1 5 L 35.2 95 Q 38 60 45 55 Q 50 50 55 55 Q 60 60 65 50 L 100 50";`;

const match = content.match(regex);
if (match) {
  content = content.replace(regex, match[0] + proxWave);
}

fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', content);

// Now fix DB coordinates
let dbContent = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
dbContent = dbContent.replace(/id: 1,\n\s+title: "Disparo Induzido",\n\s+description: "Pico de tensão instantâneo captado pela variação do campo magnético.",\n\s+x: 35,\n\s+y: 80,\n\s+labelX: 20,\n\s+labelY: 90,/, 'id: 1,\n        title: "Disparo Induzido",\n        description: "Pico de tensão instantâneo captado pela variação do campo magnético.",\n        x: 35.1,\n        y: 5,\n        labelX: 25,\n        labelY: 15,');

dbContent = dbContent.replace(/id: 2,\n\s+title: "Pico Reverso",\n\s+description: "A inversão rápida do fluxo magnético joga a tensão para baixo.",\n\s+x: 40,\n\s+y: 10,\n\s+labelX: 25,\n\s+labelY: 20,/, 'id: 2,\n        title: "Pico Reverso",\n        description: "A inversão rápida do fluxo magnético joga a tensão para baixo.",\n        x: 35.2,\n        y: 95,\n        labelX: 25,\n        labelY: 85,');

dbContent = dbContent.replace(/id: 3,\n\s+title: "Recuperação e Queima",\n\s+description: "A ressonância suave enquanto a energia termina de se dissipar.",\n\s+x: 55,\n\s+y: 40,\n\s+labelX: 65,\n\s+labelY: 30,/, 'id: 3,\n        title: "Recuperação e Queima",\n        description: "A ressonância suave enquanto a energia termina de se dissipar.",\n        x: 45,\n        y: 55,\n        labelX: 55,\n        labelY: 45,');

fs.writeFileSync('src/data/componentsDB.ts', dbContent);

