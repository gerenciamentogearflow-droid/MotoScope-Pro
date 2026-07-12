const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

const regexDesc = /A onda do secundário em motos carburadas \(com sistema CDI\) reflete a descarga capacitiva instantânea[\s\S]*?induzindo imediatamente a alta tensão no secundário\./;

const newDesc = "A onda do secundário em motos carburadas (com sistema CDI) apresenta uma diferença considerável em relação às motos injetadas. Como estamos apenas capturando a indução do cabo de vela (prendendo a pinça indutiva/capacitiva sobre ele), o sinal exibirá exatamente o comportamento induzido pela descarga capacitiva: um disparo repentino sem Dwell (tempo de carregamento prévio) e uma linha de queima com fortes oscilações, refletindo a dissipação ultrarrápida da energia do CDI.";

content = content.replace(regexDesc, newDesc);

fs.writeFileSync('src/data/componentsDB.ts', content);
