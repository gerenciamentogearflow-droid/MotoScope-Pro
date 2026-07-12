const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

// Update Variants
content = content.replace(
  /variants: \[\n\s+\{ id: "ignition-coil-secondary", name: "Injetada \(TCI\)" \},\n\s+\{ id: "ignition-coil-secondary-cdi", name: "Carburada \(CDI\)" \}\n\s+\]/,
  `variants: [\n      { id: "ignition-coil-secondary", name: "Injetada (TCI)" },\n      { id: "ignition-coil-secondary-cdi", name: "Carburada (CDI) - Pinça Capacitiva" },\n      { id: "ignition-coil-secondary-cdi-prox", name: "Carburada (CDI) - Aproximação" }\n    ]`
);

// We need to find the end of ignition-coil-secondary-cdi and inject the new object
// Let's use string replace with a known tail of ignition-coil-secondary-cdi
const regexTail = /waveType: "ignition-secondary-cdi",\n\s+multimeter: \{[\s\S]*?\}\n\s+\},/m;

const proxComponent = `
  {
    id: "ignition-coil-secondary-cdi-prox",
    hidden: true,
    name: "Bobina de Ignição (Secundário) - Carburada (Aproximação)",
    type: "actuator",
    shortDescription: "Sinal induzido capturado aproximando a ponta de prova do cabo de vela.",
    fullDescription: "Em motos carburadas (CDI), outra forma de capturar o sinal do secundário é simplesmente aproximando a ponta de prova comum (sem pinça) do cabo de vela. Como estamos pegando apenas a indução eletromagnética que vaza do cabo, o sinal tem um formato característico: um pico acentuado seguido de uma ressonância diferente da pinça capacitiva.",
    oscilloscopeSetup: {
      timeDiv: "1ms a 2ms",
      voltageDiv: "500mV a 1V (pois é apenas indução do campo)",
      triggerEdge: "Subida ou Descida",
      triggerMode: "Normal",
      triggerLevel: "Varia (ajuste conforme a amplitude captada)",
      coupling: "DC",
      axis: "Y/T"
    },
    connectionInstructions: "Utilize a ponta de prova padrão do osciloscópio (canal 1). Aterre a garra preta no chassi ou negativo da bateria. Aproxime a ponta positiva do cabo de vela, sem perfurar ou desencapar. Mova a ponta até encontrar o melhor sinal.",
    waveformExplanation: \`O gráfico por **Aproximação** capta a interferência eletromagnética gerada pela alta tensão.

• **Pico Inicial**: Um salto muito rápido, representando o disparo capacitivo do CDI.
• **Descida Profunda**: Após o pico, há uma descida brusca (muitas vezes indo a um valor negativo profundo).
• **Rampa de Recuperação**: Uma curva suave de retorno ao zero, contendo as ressonâncias da queima.\`,
    waveformPhases: [
      {
        id: 1,
        title: "Disparo Induzido",
        description: "Pico de tensão instantâneo captado pela variação do campo magnético.",
        x: 35,
        y: 80,
        labelX: 20,
        labelY: 90,
      },
      {
        id: 2,
        title: "Pico Reverso",
        description: "A inversão rápida do fluxo magnético joga a tensão para baixo.",
        x: 40,
        y: 10,
        labelX: 25,
        labelY: 20,
      },
      {
        id: 3,
        title: "Recuperação e Queima",
        description: "A ressonância suave enquanto a energia termina de se dissipar.",
        x: 55,
        y: 40,
        labelX: 65,
        labelY: 30,
      }
    ],
    waveType: "ignition-secondary-cdi-prox",
    multimeter: {
      setting: "OHM_20K",
      instructions: "Com o multímetro em Ohms 20k, meça a resistência do enrolamento secundário da bobina (entre a saída de alta tensão e o pino do primário ou a carcaça).",
      expectedValues: "Geralmente entre 3 kΩ e 15 kΩ dependendo da moto carburada (consulte o manual).",
      variesByModel: true,
      minValue: 3000,
      maxValue: 15000,
      unit: "Ω",
    }
  },`;

const match = content.match(regexTail);
if (match) {
  content = content.replace(regexTail, match[0] + proxComponent);
} else {
  console.log("Could not find tail");
}

fs.writeFileSync('src/data/componentsDB.ts', content);
