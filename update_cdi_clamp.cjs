const fs = require('fs');

let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const idx = db.findIndex(c => c.id === 'ignition-coil-secondary-cdi');
if (idx !== -1) {
  db[idx].waveformExplanation = "O gráfico do **Secundário com Pinça Capacitiva** captura a alta tensão que vai para a vela. Em muitas motos carburadas (especialmente as que utilizam sistema TCI a bateria, muitas vezes chamado erroneamente de CDI), você observará claramente o tempo de carregamento da bobina.\n\n• **Carregamento (Dwell)**: É o tempo em que o módulo aterra a bobina para carregá-la magneticamente.\n• **Tensão de Disparo (Spike)**: É a voltagem colossal gerada para romper a resistência do ar e pular a faísca.\n• **Linha de Queima (Burn Line)**: Mostra o exato momento e o tempo que a faísca ficou acesa queimando a mistura.\n• **Oscilações Residuais**: Revela a saúde interna da bobina após o fim da faísca.";
  
  db[idx].waveType = "ignition-secondary";
  
  db[idx].waveformPhases = [
    {
      "id": 1,
      "title": "Início do Carregamento",
      "description": "Momento em que o módulo aterra o primário da bobina. Muitas vezes gera uma pequena oscilação para baixo.",
      "x": 15.5,
      "y": 85,
      "labelX": 15.5,
      "labelY": 95
    },
    {
      "id": 2,
      "title": "Tempo de Carregamento (Dwell)",
      "description": "A energia está se acumulando magneticamente na bobina antes do disparo.",
      "x": 30,
      "y": 80,
      "labelX": 30,
      "labelY": 70
    },
    {
      "id": 3,
      "title": "Tensão de Disparo (Spike)",
      "description": "A força necessária para romper a resistência do ar na vela. O pico sobe até romper a folga.",
      "x": 35.2,
      "y": 5,
      "labelX": 25,
      "labelY": 15
    },
    {
      "id": 4,
      "title": "Linha de Queima (Burn Time)",
      "description": "O tempo exato em que a faísca está acesa queimando a mistura ar-combustível. Deve ser o mais plana possível.",
      "x": 52,
      "y": 45,
      "labelX": 52,
      "labelY": 25
    },
    {
      "id": 5,
      "title": "Ressonância Residual",
      "description": "A energia que sobrou na bobina se dissipa gerando oscilações. Sinal de que a bobina está boa.",
      "x": 62.5,
      "y": 85,
      "labelX": 75,
      "labelY": 85
    }
  ];
  fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
  console.log("Updated ignition-coil-secondary-cdi in componentsDB.ts");
} else {
  console.log("Not found in db");
}

