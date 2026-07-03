import fs from 'fs';

const filePath = 'src/data/componentsDB.ts';
let code = fs.readFileSync(filePath, 'utf8');

// Rename existing CDI to CDI AC
code = code.replace(/name: "CDI \\(Ignição Capacitiva\\)"/, 'name: "CDI AC (Ignição Capacitiva)"');

const cdiDcComponent = `  {
    id: "cdi-dc",
    name: "CDI DC (Ignição Capacitiva)",
    type: "actuator",
    shortDescription: "Módulo de ignição alimentado pela bateria (12V) que descarrega energia na bobina.",
    fullDescription:
      "O CDI DC (Corrente Contínua) possui um conversor interno que eleva os 12V da bateria para cerca de 200V a 400V, armazenando em um capacitor. Ao receber o sinal do CKP, ele descarrega essa energia instantaneamente no primário da bobina de ignição, gerando a faísca. A grande diferença para o CDI AC é que a alimentação vem da bateria pós-chave e não do estator.",
    oscilloscopeSetup: {
      timeDiv: "5ms a 10ms",
      voltageDiv: "50V a 100V (Atenção: picos podem passar de 200V, use atenuador!)",
      triggerEdge: "Subida",
      triggerMode: "Normal",
      triggerLevel: "20V a 50V",
    },
    connectionInstructions:
      "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1) se não suportar altas tensões, no fio que vai do CDI para a Bobina de Ignição.",
    waveformExplanation:
      "A forma de onda de saída do CDI DC para a bobina é semelhante à do CDI AC: um pico de tensão positivo de curtíssima duração, seguido de oscilações amortecidas.\\n\\nComportamento em Falhas:\\n• Sem pico de tensão: Verifique se chegam 12V no CDI (pós-chave). Sem bateria carregada, o CDI DC não funciona.\\n• Oscilação muito curta: Curto no primário da bobina de ignição ou fuga de corrente no sistema de ignição.",
    waveformPhases: [
      {
        id: 1,
        title: "Disparo do Capacitor",
        description: "O CDI libera a energia armazenada (elevada a partir dos 12V) para o primário da bobina de ignição.",
        x: 20,
        y: 20,
        labelX: 10,
        labelY: 10,
      },
      {
        id: 2,
        title: "Oscilação Amortecida",
        description: "Dissipação da energia restante no circuito da bobina após o disparo principal.",
        x: 30,
        y: 60,
        labelX: 40,
        labelY: 80,
      }
    ],
    waveType: "cdi",
    multimeter: {
      setting: "Tensão Contínua (DCV) e Pico de Tensão (Peak Hold)",
      instructions: "1. No fio de alimentação do CDI, meça tensão contínua (deve ter próximo de 12V).\\n2. No fio de saída para a bobina, use adaptador de Pico (Peak Hold) para capturar o pico de disparo na partida.",
      expectedValue: "Alimentação 12V constante (DCV). Disparo com pico alto na partida (Peak)."
    },
    symptoms: [
      "Motor não pega se a bateria estiver descarregada",
      "Cortes em aceleração caso haja queda de tensão 12V",
      "Moto apaga subitamente"
    ],
  },
`;

code = code.replace(/export const componentsDB: ComponentData\[\] = \[/, 'export const componentsDB: ComponentData[] = [\n' + cdiDcComponent);

fs.writeFileSync(filePath, code);
console.log("CDI DC added.");
