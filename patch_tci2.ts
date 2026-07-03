import fs from 'fs';

const filePath = 'src/data/componentsDB.ts';
let code = fs.readFileSync(filePath, 'utf8');

const tciComponent = `  {
    id: "tci",
    name: "TCI (Ignição Transistorizada)",
    type: "actuator",
    shortDescription: "Módulo de ignição de motos injetadas ou modernas (controla a bobina por chaveamento negativo).",
    fullDescription:
      "O TCI (Transistor Controlled Ignition), muitas vezes integrado à ECM, controla o tempo de carregamento (dwell) e o momento do disparo da bobina de ignição. A bobina recebe 12V contínuos (pós-chave), e o TCI fornece o aterramento. Quando o TCI interrompe o aterramento, ocorre o colapso do campo magnético e a faísca é gerada.",
    oscilloscopeSetup: {
      timeDiv: "2ms a 5ms",
      voltageDiv: "50V a 100V (Atenção: picos podem chegar a 400V, use atenuador!)",
      triggerEdge: "Subida ou Descida",
      triggerMode: "Normal",
      triggerLevel: "30V a 50V",
    },
    connectionInstructions:
      "Conecte a garra jacaré preta ao negativo da bateria ou chassi. Conecte a ponta de prova (canal 1), OBRIGATORIAMENTE com atenuador (ex: 20:1), no fio de SINAL NEGATIVO (chaveado pela ECM/TCI) na Bobina de Ignição (geralmente Amarelo/Azul ou Rosa/Azul na Honda).",
    waveformExplanation:
      "A forma de onda do TCI mostra três fases: 1) A tensão cai a quase 0V (início do carregamento/dwell). 2) A tensão sobe bruscamente gerando um pico (disparo da faísca), podendo chegar a 400V. 3) A linha estabiliza no tempo de queima e depois oscila dissipando a energia.\\n\\nComportamento em Falhas:\\n• Sem tempo de Dwell (linha não desce pra zero): O módulo (TCI/ECM) não está chaveando o aterramento. Pode ser defeito no módulo, fiação rompida ou falta de sinal do CKP.\\n• Pico de disparo baixo (< 200V): Bobina de ignição em curto, vela carbonizada ou folga do eletrodo muito pequena.\\n• Tempo de queima muito curto: Mistura muito pobre, ou resistência secundária da bobina muito alta.",
    waveformPhases: [
      {
        id: 1,
        title: "Início do Carregamento (Dwell)",
        description: "O TCI aterra o primário da bobina, a tensão cai perto de 0V e o campo magnético começa a ser criado.",
        x: 20,
        y: 80,
        labelX: 10,
        labelY: 90,
      },
      {
        id: 2,
        title: "Pico de Disparo (Faísca)",
        description: "O TCI corta o aterramento. A tensão sobe bruscamente induzindo alta voltagem e gerando a centelha.",
        x: 40,
        y: 10,
        labelX: 30,
        labelY: 20,
      },
      {
        id: 3,
        title: "Tempo de Queima",
        description: "Duração da faísca na vela de ignição. Indica as condições de mistura e resistência do sistema secundário.",
        x: 55,
        y: 70,
        labelX: 65,
        labelY: 60,
      },
      {
        id: 4,
        title: "Oscilação Residual",
        description: "Dissipação da energia restante da bobina após a extinção da faísca.",
        x: 80,
        y: 75,
        labelX: 85,
        labelY: 50,
      }
    ],
    waveType: "ignition-coil",
    multimeter: {
      setting: "Tensão Contínua (DCV), Resistência (Ohms) e Dwell",
      instructions: "1. No fio de alimentação, confira se chega 12V pós-chave.\\n2. A resistência do primário costuma ser baixa (ex: 2 a 5 ohms).\\n3. Para medir o sinal chaveado com multímetro, é melhor usar duty cycle/Hz ou Peak Hold, mas o osciloscópio é a ferramenta ideal.",
      expectedValue: "12V no primário, resistência conforme manual, sinal de pulso na partida."
    },
    symptoms: [
      "Motor não pega (sem faísca)",
      "Falhas em alta rotação",
      "Cortes de ignição intermitentes",
      "Moto apaga quando esquenta"
    ],
  },
`;

code = code.replace(/export const componentsDB: ComponentData\[\] = \[/, 'export const componentsDB: ComponentData[] = [\n' + tciComponent);

fs.writeFileSync(filePath, code);
console.log("TCI component added.");
