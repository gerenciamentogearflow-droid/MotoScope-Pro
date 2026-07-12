const fs = require('fs');

let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const phases = [
  {
    "id": 1,
    "title": "Início do Carregamento (Fechamento)",
    "description": "Momento em que o módulo aterra o circuito primário para iniciar o carregamento.",
    "x": 15.5,
    "y": 90,
    "labelX": 15.5,
    "labelY": 95
  },
  {
    "id": 2,
    "title": "Tempo de Carregamento (Dwell)",
    "description": "A energia está se acumulando magneticamente na bobina antes do disparo.",
    "x": 31,
    "y": 80,
    "labelX": 31,
    "labelY": 70
  },
  {
    "id": 3,
    "title": "Tensão de Disparo (Spike)",
    "description": "A força necessária para romper a resistência do ar na vela. O pico sobe até romper a folga.",
    "x": 45.5,
    "y": 5,
    "labelX": 35,
    "labelY": 15
  },
  {
    "id": 4,
    "title": "Linha de Queima (Burn Line)",
    "description": "O momento exato em que a faísca está acesa queimando a mistura ar-combustível. Deve ser plana.",
    "x": 52,
    "y": 45,
    "labelX": 52,
    "labelY": 25
  },
  {
    "id": 5,
    "title": "Pendente e Ressonância",
    "description": "O final da queima. A faísca apaga e a energia restante se dissipa gerando oscilações (sinal de bobina boa).",
    "x": 62.5,
    "y": 80,
    "labelX": 75,
    "labelY": 80
  }
];

// Update ignition-coil-secondary
const idx1 = db.findIndex(c => c.id === 'ignition-coil-secondary');
if (idx1 !== -1) {
  // Preserve descriptions if possible, but the coordinates and titles are what matter
  db[idx1].waveformPhases = JSON.parse(JSON.stringify(phases));
  db[idx1].waveformPhases[0].title = "Pico de Fechamento";
  db[idx1].waveformPhases[0].description = "Pequena oscilação (geralmente negativa) gerada no momento exato em que o módulo aterra o circuito primário para iniciar o carregamento.";
  db[idx1].waveformPhases[1].title = "Carregamento (Dwell Secundário)";
  db[idx1].waveformPhases[1].description = "Espelho do primário. A energia está se acumulando na bobina. O tempo deve ser igual ao do primário.";
  db[idx1].waveformPhases[2].title = "Tensão de Disparo (Spike)";
  db[idx1].waveformPhases[2].description = "É a força necessária para romper a resistência do ar na vela. O pico sobe até romper a folga (geralmente de 10kV a 15kV). Picos acima de 20kV indicam folga excessiva ou cabos ruins. Picos muito curtos indicam curto-circuito.";
  db[idx1].waveformPhases[3].title = "Linha de Queima (Burn Line)";
  db[idx1].waveformPhases[3].description = "O momento exato em que a faísca está acesa queimando a mistura ar-combustível. Deve durar entre 1.0ms e 2.0ms e ser o mais plana possível. Oscilações fortes aqui indicam mistura incorreta, bico sujo ou turbulência na câmara.";
}

// Update ignition-coil-secondary-cdi
const idx2 = db.findIndex(c => c.id === 'ignition-coil-secondary-cdi');
if (idx2 !== -1) {
  db[idx2].waveformPhases = JSON.parse(JSON.stringify(phases));
  db[idx2].waveformPhases[0].title = "Início do Carregamento";
  db[idx2].waveformPhases[0].description = "Momento em que o módulo aterra o primário da bobina. Muitas vezes gera uma pequena oscilação para baixo.";
  db[idx2].waveformPhases[1].title = "Tempo de Carregamento (Dwell)";
  db[idx2].waveformPhases[1].description = "A energia está se acumulando magneticamente na bobina antes do disparo.";
  db[idx2].waveformPhases[2].title = "Tensão de Disparo (Spike)";
  db[idx2].waveformPhases[2].description = "A força necessária para romper a resistência do ar na vela. O pico sobe até romper a folga.";
  db[idx2].waveformPhases[3].title = "Linha de Queima (Burn Time)";
  db[idx2].waveformPhases[3].description = "O tempo exato em que a faísca está acesa queimando a mistura ar-combustível. Deve ser o mais plana possível.";
  db[idx2].waveformPhases[4].title = "Ressonância Residual";
  db[idx2].waveformPhases[4].description = "A energia que sobrou na bobina se dissipa gerando oscilações. Sinal de que a bobina está boa.";
}

fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
console.log("Updated coordinates");

