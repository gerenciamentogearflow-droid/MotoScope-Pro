import fs from 'fs';

let content = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');
const explanation = `Fala meu amigo, beleza? Vamos falar agora sobre como testar a peça usando o multímetro, um teste fundamental que a gente faz na oficina no dia a dia. Pega seu multímetro e coloca na escala indicada. Presta atenção que esse detalhe da escala é crucial, se colocar na escala errada o teste vai dar um falso positivo ou não vai ler nada. Quando você fizer isso, o que a gente espera ver no visor do aparelho? A gente espera ler os valores indicados. Mas por que esses valores? Bom, esse componente funciona enviando ou recebendo um sinal elétrico que precisa ter uma resistência ou tensão muito específica para a central entender o que tá acontecendo. Se o valor der muito abaixo do esperado, pode ser que a peça esteja em curto-circuito, ou seja, a corrente tá passando direto. Se o valor der infinito ou muito acima, é sinal de circuito aberto, significa que o fio ou a bobina interna rompeu e a energia não passa. Um macete de oficina importante é sempre verificar a temperatura da peça, porque o calor do motor altera a resistência dos fios de cobre lá dentro. Se o multímetro ficar oscilando e não estabilizar o valor, desconfie de mau contato no conector ou fio quebrado por dentro da capa, aquele famoso defeito intermitente que dá uma dor de cabeça pra achar. Então faz esse passo a passo com calma, anota o valor que deu, e compara com a tolerância do manual. Qualquer dúvida, refaz o teste garantindo que as pontas de prova tão bem encostadas pra não dar resistência falsa. Tamo junto!`;

// I will just globally replace missing explanations using a simpler regex.

content = content.replace(/"temperatureObservation": "([^"]+)"\s*\n\s*\}/g, (match, p1) => {
  return `"temperatureObservation": "${p1}",\n      "teacherExplanation": "${explanation}"\n    }`;
});

content = content.replace(/"temperatureObservation": "([^"]+)"\s*\}\s*,/g, (match, p1) => {
  return `"temperatureObservation": "${p1}",\n      "teacherExplanation": "${explanation}"\n    },`;
});

content = content.replace(/"unit": "([^"]+)"\s*\n\s*\}/g, (match, p1) => {
  return `"unit": "${p1}",\n      "teacherExplanation": "${explanation}"\n    }`;
});

content = content.replace(/"unit": "([^"]+)"\s*\}\s*,/g, (match, p1) => {
  return `"unit": "${p1}",\n      "teacherExplanation": "${explanation}"\n    },`;
});

fs.writeFileSync('./src/data/componentsDB.ts', content);
