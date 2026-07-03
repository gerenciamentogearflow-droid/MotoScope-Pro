const fs = require('fs');
const file = 'src/data/componentsDB.ts';
let code = fs.readFileSync(file, 'utf8');
const cdiComponent = `  {
    id: "cdi",
    name: "CDI (Ignição Capacitiva)",
    type: "actuator",
    shortDescription: "Módulo de ignição de motos carburadas (descarrega energia na bobina).",
    fullDescription:
      "O CDI (Capacitor Discharge Ignition) armazena a energia gerada pela bobina de força do estator em um capacitor interno e, ao receber o sinal do sensor de pulso (CKP), descarrega essa energia instantaneamente no primário da bobina de ignição, gerando a faísca na vela.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "50V a 100V (Atenção: picos podem passar de 200V, use atenuador!)",
      triggerEdge: "Subida",
      triggerMode: "Normal",
      triggerLevel: "20V a 50V",
    },
    connectionInstructions:
      "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1) se não suportar altas tensões, no fio que vai do CDI para a Bobina de Ignição (geralmente Preto/Amarelo na Honda).",
    waveformExplanation:
      "A forma de onda do CDI é um pico de tensão extremamente alto e de curtíssima duração. É a descarga do capacitor. Logo após o pico principal, podem ocorrer algumas oscilações amortecidas. Diferente da ignição TCI (indutiva), não há o longo tempo de 'dwell' (carregamento) antes do disparo, a subida de tensão é instantânea.",
    waveformPhases: [
      {
        id: 1,
        title: "Disparo do Capacitor",
        description: "O momento exato em que o CDI libera a energia (100V a 400V) para o primário da bobina de ignição.",
        x: 20,
        y: 20,
        labelX: 10,
        labelY: 10,
      },
      {
        id: 2,
        title: "Oscilação Amortecida",
        description: "Dissipação da energia restante entre a bobina e o capacitor após a faísca.",
        x: 30,
        y: 60,
        labelX: 40,
        labelY: 80,
      }
    ],
    waveType: "cdi",
    multimeter: {
      setting: "Pico de Tensão (Peak Hold) em VDC ou Multímetro com Adaptador de Pico",
      instructions: "1. Conecte a ponta preta ao terra (chassi ou negativo da bateria).\\n2. Conecte a ponta vermelha no fio de saída do CDI para a bobina de ignição (ex: Preto/Amarelo).\\n3. Dê partida no motor (start ou pedal).",
      expectedValues: "Mínimo de 100V de pico (varia conforme o modelo e estado do estator).",
      variesByModel: true,
    },
  },
`;
code = code.replace(/}\s*];$/, '}'+cdiComponent+'];');
fs.writeFileSync(file, code);
