const fs = require('fs');
let content = fs.readFileSync('src/data/oscilloscopeCourse.ts', 'utf-8');

const regex = /Em motos carburadas com ignição por CDI, a fase de carregamento \(Dwell\) não é visível de forma prolongada no gráfico do secundário. O CDI descarrega o capacitor repentinamente, gerando uma subida de tensão quase instantânea para o disparo \(Spike\), seguida pela linha de queima e oscilações\./;

const newText = "Em motos carburadas com ignição por CDI, há uma diferença considerável. Como o osciloscópio está apenas capturando a **indução do cabo de vela** através da pinça, o sinal exibe o comportamento da descarga capacitiva: ausência total do tempo de carregamento (Dwell), seguido de um pico de tensão de disparo muito rápido e linhas de queima com fortes oscilações instantâneas.";

content = content.replace(regex, newText);

fs.writeFileSync('src/data/oscilloscopeCourse.ts', content);
