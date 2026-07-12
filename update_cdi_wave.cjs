const fs = require('fs');

// Update OscilloscopeDisplay.tsx
let displayCode = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf-8');
const regexDisplay = /case "ignition-secondary-cdi":\s*\/\/[^\n]*\s*return "[^\n]*";/m;
const newWave = `case "ignition-secondary-cdi":
        // Ignition Coil Secondary CDI (Pinça): Flat -> Negative Dip -> Slow Ramp UP -> Sharp Spark Spike -> Short Burn Line -> Ringing -> 0kV
        return "M 0 80 L 15 80 L 15.5 90 L 34 70 L 34.5 5 L 35 45 L 40 50 L 40.5 30 L 42 90 L 44 70 L 47 85 L 50 75 L 55 80 L 100 80";`;

if (regexDisplay.test(displayCode)) {
  displayCode = displayCode.replace(regexDisplay, newWave);
  fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', displayCode);
  console.log("Updated OscilloscopeDisplay.tsx");
} else {
  console.log("Could not find ignition-secondary-cdi in OscilloscopeDisplay.tsx");
}

// Update componentsDB.ts
let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const idx = db.findIndex(c => c.id === 'ignition-coil-secondary-cdi');
if (idx !== -1) {
  db[idx].waveformPhases = [
    {
      "id": 1,
      "title": "Início do Carregamento",
      "description": "Momento em que o módulo inicia o carregamento magnético (queda inicial).",
      "x": 15.5,
      "y": 90,
      "labelX": 15.5,
      "labelY": 95
    },
    {
      "id": 2,
      "title": "Rampa de Carga (Dwell)",
      "description": "Subida lenta (rampa) onde a energia se acumula antes do disparo.",
      "x": 25,
      "y": 75,
      "labelX": 25,
      "labelY": 65
    },
    {
      "id": 3,
      "title": "Tensão de Disparo (Spike)",
      "description": "Pico alto e fino (20kV a 25kV) para romper a resistência do ar na vela.",
      "x": 34.5,
      "y": 5,
      "labelX": 25,
      "labelY": 15
    },
    {
      "id": 4,
      "title": "Ombro de Queima Curto",
      "description": "Linha de queima (burn line) curta e levemente inclinada (0.6ms a 1.2ms).",
      "x": 37.5,
      "y": 48,
      "labelX": 45,
      "labelY": 35
    },
    {
      "id": 5,
      "title": "Oscilações Finais",
      "description": "Ressonância após o término da faísca. Indica boa saúde da bobina.",
      "x": 47,
      "y": 85,
      "labelX": 55,
      "labelY": 85
    }
  ];
  fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
  console.log("Updated componentsDB.ts");
} else {
  console.log("Not found in db");
}

