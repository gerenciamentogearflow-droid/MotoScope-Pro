const fs = require('fs');

let displayCode = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf-8');
const regexDisplay = /case "ignition-secondary-cdi":\s*\/\/[^\n]*\s*return "[^\n]*";/m;
const newWave = `case "ignition-secondary-cdi":
        // CDI Secondary (Pinça): Instant Spike -> Short noisy burn line -> Ringing -> 0kV
        return "M 0 60 L 20 60 L 20.5 5 L 21 80 L 22 45 L 23 55 L 24 48 L 25 52 L 26 49 L 28 85 L 30 40 L 32 70 L 34 55 L 37 60 L 100 60";`;

if (regexDisplay.test(displayCode)) {
  displayCode = displayCode.replace(regexDisplay, newWave);
  fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', displayCode);
  console.log("Updated OscilloscopeDisplay.tsx for CDI Secondary");
}

let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const idx = db.findIndex(c => c.id === 'ignition-coil-secondary-cdi');
if (idx !== -1) {
  db[idx].waveformExplanation = "O gráfico do **Secundário do CDI** (motos carburadas) captura a altíssima tensão induzida no cabo de vela. Diferente do sistema TCI (injetadas), o CDI descarrega a energia do capacitor no primário instantaneamente, sem tempo de carregamento (Dwell).\n\n• **Tensão de Disparo (Spike)**: A tensão sobe quase instantaneamente para 20kV-30kV, gerando a centelha inicial para romper o ar.\n• **Tempo de Queima Curto**: Como a energia de um CDI é despejada muito rapidamente, a linha de queima dura muito pouco tempo (frequentemente menos de 0.5ms) e possui muita oscilação.\n• **Oscilações Residuais**: Dissipação da energia restante após a queima.";
  db[idx].waveformPhases = [
    {
      "id": 1,
      "title": "Tensão de Disparo (Spike)",
      "description": "Pico instantâneo gerado pela descarga do capacitor do CDI. Não há 'Dwell' antes.",
      "x": 20.5,
      "y": 5,
      "labelX": 10,
      "labelY": 15
    },
    {
      "id": 2,
      "title": "Tempo de Queima (Burn Line)",
      "description": "Período muito curto e ruidoso onde a faísca está ocorrendo.",
      "x": 24,
      "y": 48,
      "labelX": 35,
      "labelY": 35
    },
    {
      "id": 3,
      "title": "Oscilações Finais",
      "description": "Ressonância para dissipar a energia remanescente após a faísca apagar.",
      "x": 30,
      "y": 40,
      "labelX": 45,
      "labelY": 80
    }
  ];
  fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
  console.log("Updated componentsDB.ts for CDI Secondary");
}
