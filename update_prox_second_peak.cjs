const fs = require('fs');

let dbCode = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');
const arrayStr = dbCode.replace('export const componentsDB = ', '').replace(/;\n$/, '');
const db = JSON.parse(arrayStr);

const idx = db.findIndex(c => c.id === 'ignition-coil-secondary-cdi-prox');
if (idx !== -1) {
  db[idx].waveformExplanation = "O gráfico capturado por **Aproximação** revela a interferência eletromagnética gerada pela alta tensão do cabo de vela, mostrando detalhes físicos da descarga capacitiva.\n\n• **Pico de Disparo Inicial**: O primeiro grande salto ocorre no momento exato em que o capacitor do CDI (já carregado pelo estator ou bateria) é descarregado instantaneamente no primário da bobina. Isso induz a alta tensão necessária para romper a resistência do ar na vela.\n\n• **Pico Reverso e Tempo de Queima**: Imediatamente após o rompimento da faísca, a tensão sofre uma inversão brusca e vai para a parte negativa do gráfico. A rampa suave que tenta subir de volta à linha zero é o **Tempo de Queima da Faísca**. É neste momento que a mistura ar-combustível está sendo inflamada.\n\n• **O Segundo Pico (Ressonância LC)**: Você notará que, após a queima, surge um segundo pico ou oscilação menor. **Por que isso acontece sem que o CDI precise ser recarregado?** Isso ocorre devido ao efeito de **Ressonância LC (Circuito Tanque)**. A bobina de ignição (Indutor - L) e o capacitor do CDI (Capacitor - C) formam um circuito elétrico fechado. Quando a energia principal da faísca termina, a energia magnética que sobrou na bobina colapsa e retorna pelo fio, recarregando o capacitor internamente de forma invertida por uma fração de milissegundo. O capacitor, então, descarrega essa energia de volta na bobina, gerando esse segundo pico indutivo (o \"repique\"). A energia fica \"batendo e voltando\" (ringing) entre a bobina e o CDI até se dissipar. A presença clara desse segundo pico é um excelente indicativo: mostra que o enrolamento da bobina está saudável e não possui curtos internos (que matariam essa ressonância).";
  
  db[idx].waveformPhases = [
    {
      id: 1,
      title: "Pico de Disparo Inicial",
      description: "Salto de tensão rápido gerado pela descarga do capacitor do CDI.",
      x: 35.1,
      y: 5,
      labelX: 25,
      labelY: 15,
    },
    {
      id: 2,
      title: "Pico Reverso e Início",
      description: "A inversão rápida do fluxo magnético joga a tensão para baixo.",
      x: 35.2,
      y: 95,
      labelX: 20,
      labelY: 90,
    },
    {
      id: 3,
      title: "Tempo de Queima",
      description: "Rampa suave (em direção ao zero) onde a energia é dissipada em forma de faísca.",
      x: 43,
      y: 63,
      labelX: 35,
      labelY: 75,
    },
    {
      id: 4,
      title: "O Segundo Pico (Ressonância)",
      description: "A energia restante bate e volta entre a bobina e o CDI, gerando o segundo pico sem nova recarga externa.",
      x: 52,
      y: 50,
      labelX: 62,
      labelY: 40,
    }
  ];
  fs.writeFileSync('src/data/componentsDB.ts', 'export const componentsDB = ' + JSON.stringify(db, null, 2) + ';\n');
  console.log("Updated componentsDB.ts");
} else {
  console.log("Not found in db");
}

let displayCode = fs.readFileSync('src/components/OscilloscopeDisplay.tsx', 'utf-8');
const regexDisplay = /case "ignition-secondary-cdi-prox":\s*\/\/[^\n]*\s*return "[^\n]*";/m;
const newWave = `case "ignition-secondary-cdi-prox":
        // Ignition Coil Secondary CDI (Proximity): Flat -> Spike UP -> Deep Spike DOWN -> Curve UP (Burn Time) -> Second Peak UP -> Second Dip DOWN -> Return to zero
        return "M 0 50 L 35 50 L 35.1 5 L 35.2 95 Q 38 65 50 60 L 52 50 L 55 68 Q 60 50 68 50 L 100 50";`;
if (regexDisplay.test(displayCode)) {
  displayCode = displayCode.replace(regexDisplay, newWave);
  fs.writeFileSync('src/components/OscilloscopeDisplay.tsx', displayCode);
  console.log("Updated OscilloscopeDisplay.tsx");
}

