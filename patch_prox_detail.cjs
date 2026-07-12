const fs = require('fs');

// 1. Update SVG
let displayContent = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf-8');
const regexDisplay = /case "ignition-secondary-cdi-prox":\s*\/\/[^\n]*\s*return "[^\n]*";/m;
const newWave = `case "ignition-secondary-cdi-prox":
        // Ignition Coil Secondary CDI (Proximity): Flat -> Spike UP -> Deep Spike DOWN -> Curve UP (Burn Time) -> Second Spark/Dip -> Return to zero
        return "M 0 50 L 35 50 L 35.1 5 L 35.2 95 Q 40 55 52 55 L 54 65 Q 58 50 65 50 L 100 50";`;
if (regexDisplay.test(displayContent)) {
  displayContent = displayContent.replace(regexDisplay, newWave);
  fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', displayContent);
}

// 2. Update DB
let dbContent = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const regexDb = /id: "ignition-coil-secondary-cdi-prox"[\s\S]*?waveType: "ignition-secondary-cdi-prox",/;
const newDbContent = `id: "ignition-coil-secondary-cdi-prox",
    hidden: true,
    name: "Bobina de Ignição (Secundário) - Carburada (Aproximação)",
    type: "actuator",
    shortDescription: "Sinal induzido capturado aproximando a ponta de prova do cabo de vela.",
    fullDescription: "Em motos carburadas (CDI), outra forma de capturar o sinal do secundário é simplesmente aproximando a ponta de prova comum (sem pinça) do cabo de vela. Como estamos pegando apenas a indução eletromagnética que vaza do cabo, o sinal tem um formato característico: um pico acentuado, seguido do tempo de queima e ressonâncias (como a segunda faísca) da bobina.",
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
    waveformExplanation: \`O gráfico por **Aproximação** capta a interferência eletromagnética gerada pela alta tensão do cabo de vela, revelando detalhes cruciais que a pinça capacitiva às vezes mascara.

• **Pico de Disparo Inicial**: O primeiro salto, extremamente rápido, representa a descarga principal do capacitor do CDI no primário, que induz a alta tensão para o centelhamento.
• **Pico Reverso e Tempo de Queima**: Após o disparo, o campo magnético inverte bruscamente. A curva suave que se forma após esse pico reverso representa o **Tempo de Queima da Faísca**. Durante essa rampa (que tenta retornar ao zero), a energia está sendo dissipada entre os eletrodos da vela.
• **Segunda Faísca / Oscilações Residuais**: É muito comum em sistemas CDI observarmos uma segunda oscilação (um novo "solavanco" para baixo no gráfico) logo após a queima principal. Isso ocorre devido a múltiplas descargas do CDI (estratégia multispark) ou pelo 'ringing' indutivo da bobina dissipando o resto da energia. A presença dessas oscilações finais atesta a boa saúde do enrolamento da bobina.\`,
    waveformPhases: [
      {
        id: 1,
        title: "Pico de Disparo Inicial",
        description: "Salto de tensão extremamente rápido gerado pela descarga do capacitor do CDI.",
        x: 35.1,
        y: 5,
        labelX: 25,
        labelY: 15,
      },
      {
        id: 2,
        title: "Pico Reverso e Início da Queima",
        description: "A inversão rápida do fluxo magnético joga a tensão para baixo. A partir daqui inicia o tempo de queima.",
        x: 35.2,
        y: 95,
        labelX: 25,
        labelY: 85,
      },
      {
        id: 3,
        title: "Tempo de Queima da Faísca",
        description: "Rampa suave onde a energia está sendo dissipada (queima da mistura) entre os eletrodos da vela.",
        x: 45,
        y: 60,
        labelX: 45,
        labelY: 80,
      },
      {
        id: 4,
        title: "Segunda Faísca / Oscilações",
        description: "Oscilação secundária típica de CDIs (multispark) e ressonância final que atesta a saúde da bobina.",
        x: 54,
        y: 65,
        labelX: 65,
        labelY: 75,
      }
    ],
    waveType: "ignition-secondary-cdi-prox",`;

if (regexDb.test(dbContent)) {
  dbContent = dbContent.replace(regexDb, newDbContent);
  fs.writeFileSync('src/data/componentsDB.ts', dbContent);
}
