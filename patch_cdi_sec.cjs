const fs = require('fs');
let content = fs.readFileSync('src/data/componentsDB.ts', 'utf-8');

const regexExplanation = /O gráfico do \*\*Secundário \(CDI\)\*\* é a leitura real da alta tensão que vai para a vela em motos carburadas\.[\s\S]*?Revela a saúde interna da bobina\.\`/;

const newExplanation = `\`O gráfico do **Secundário (CDI)** apresenta uma diferença significativa em relação às motos injetadas (TCI) porque estamos capturando apenas a indução do cabo da vela.

Ao conectar a ponta de prova (pinça capacitiva/indutiva) no cabo da vela de uma moto carburada, a captação por indução revela como o sinal do CDI realmente se comporta:

• **Ausência de Dwell (Carregamento Lento)**: Como o sistema é por Descarga Capacitiva (CDI), a energia é enviada do módulo para a bobina instantaneamente, sem o tempo de carregamento magnético (Dwell) da injeção.
• **Pico de Indução (Spike)**: A indução inicial rompe a resistência do ar na vela, gerando um pico agudo e repentino.
• **Linha de Queima e Oscilações Intensas**: Diferente da injeção que mantém uma "linha" reta enquanto a faísca queima, o CDI exibe oscilações fortes e rápidas durante a descarga capacitiva e o ringing indutivo. A queima da faísca ocorre durante essa rápida dissipação de energia.\``;

content = content.replace(regexExplanation, newExplanation);

// Update coordinates
content = content.replace(/x: 40,\s*y: 80,\s*labelX: 25,\s*labelY: 90,/, 'x: 35,\n        y: 80,\n        labelX: 20,\n        labelY: 90,');
content = content.replace(/x: 46,\s*y: 5,\s*labelX: 35,\s*labelY: 15,/, 'x: 35.2,\n        y: 5,\n        labelX: 25,\n        labelY: 15,');
content = content.replace(/x: 52,\s*y: 45,\s*labelX: 60,\s*labelY: 45,/, 'x: 36.5,\n        y: 40,\n        labelX: 50,\n        labelY: 35,');

fs.writeFileSync('src/data/componentsDB.ts', content);
