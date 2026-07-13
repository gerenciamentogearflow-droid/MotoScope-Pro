const fs = require('fs');

const filePath = './src/data/componentsDB.ts';
let content = fs.readFileSync(filePath, 'utf8');

const regex = /"id":\s*"([^"]+)"[\s\S]*?"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/g;
let match;
let matches = [];
while ((match = regex.exec(content)) !== null) {
   matches.push(match);
}

for (const m of matches) {
   const block = m[0];
   const id = m[1];
   
   // We need to extract name, setting, instructions, expectedValues from the text around this block
   // Let's find the object bounds for this ID.
   const idIndex = content.indexOf(`"id": "${id}"`);
   if (idIndex === -1) continue;
   const nextIdIndex = content.indexOf(`"id": "`, idIndex + 10);
   const limit = nextIdIndex !== -1 ? nextIdIndex : content.length;
   
   const componentText = content.substring(idIndex, limit);
   
   const nameMatch = componentText.match(/"name":\s*"([^"]+)"/);
   const settingMatch = componentText.match(/"setting":\s*"([^"]+)"/);
   const instMatch = componentText.match(/"instructions":\s*"([^"]+)"/);
   const expMatch = componentText.match(/"expectedValues":\s*"([^"]+)"/);
   
   const name = nameMatch ? nameMatch[1] : id;
   const setting = settingMatch ? settingMatch[1] : "escala recomendada no manual";
   const instructions = instMatch ? instMatch[1] : "Siga os passos de conexão e leitura";
   const expected = expMatch ? expMatch[1] : "os valores dentro da tolerância do fabricante";

   const newExplanation = `Vamos analisar o diagnóstico eletrônico do componente ${name}. Este é um elemento crítico do sistema, e o teste com multímetro é o método mais direto para avaliar sua integridade física e elétrica. Comece configurando o seu multímetro exatamente na escala de ${setting}. Essa precisão na escala é mandatória porque estamos medindo grandezas específicas onde a margem de erro pode ocultar um defeito sutil. O procedimento correto é o seguinte: ${instructions}. Ao realizar a leitura, você deve observar no display o seguinte comportamento: ${expected}. Mas o que esses números significam do ponto de vista da engenharia? Quando a leitura cai drasticamente ou tende a zero, estamos diante de um curto-circuito. Isso significa que o isolamento interno, geralmente de verniz nos fios de cobre, derreteu ou rompeu, fazendo a corrente procurar o caminho mais curto, inutilizando a peça. Por outro lado, se o multímetro registrar resistência infinita ou não apresentar variação de tensão, o circuito está aberto. Basicamente, o filamento ou a bobina interna se partiu, bloqueando totalmente o fluxo elétrico. Um ponto avançado de atenção na oficina: o calor extremo do motor causa a expansão térmica dos materiais. Uma bobina que passa perfeitamente no teste com o motor frio pode abrir o circuito e falhar assim que atinge a temperatura de trabalho. Se o defeito do cliente for intermitente, sempre refaça este teste com a motocicleta quente. Além disso, se os valores no visor estiverem oscilando loucamente, verifique a oxidação nos conectores ou fios rompidos por dentro da capa de isolamento. Nunca condene a peça antes de inspecionar os contatos.`;

   const teacherRegex = /"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/;
   content = content.replace(block, block.replace(teacherRegex, `"teacherExplanation": "${newExplanation}"`));
   
   console.log("Updated", id);
}

fs.writeFileSync(filePath, content);
