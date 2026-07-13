const fs = require('fs');

const replacements = {
  "Efeito Hall (Injetada)": "Para o diagnóstico do Sensor CKP tipo Hall, a abordagem muda de Resistência para Tensão DC (na escala de 20V) porque este não é um sensor indutivo passivo, e sim um chip eletrônico (semicondutor) ativo que precisa de alimentação. Fisicamente, estamos medindo se o CDI ou a injeção está enviando os 5V ou 12V necessários para energizar o cristal de Efeito Hall. No pino de sinal, queremos ver uma comutação on/off nítida ao girar a roda. Se o multímetro aponta alimentação zerada, o problema não está no sensor, mas no chicote rompido ou na própria central com defeito de fonte interna. Se a alimentação está OK, mas o sinal não oscila ao girar o motor, significa que o semicondutor do chip queimou e o sensor entrou em colapso. O sensor Hall é extremamente sensível à voltagem instável; verifique picos de carga do retificador que costumam ser a causa principal da queima prematura deste componente em motos premium.",
  "ABS Indutivo": "Para o diagnóstico do Sensor ABS Indutivo da roda dentada, usamos a escala Ohms 2000. Este sensor é uma bobina com ímã permanente que detecta os recortes da roda fônica do freio. Medindo a resistência entre os dois pinos, buscamos valores em torno de 1000 a 2000 Ohms, confirmando que o filamento microscópico da bobina está contínuo. Leitura zerada: curto no filamento (fio fundiu). Leitura infinita: bobina se partiu. O sensor indutivo de ABS sofre com a extrema trepidação e pedradas na roda. Se a moto apresenta falha na luz do ABS apenas depois de cair num buraco (intermitente), há um micro-rompimento no chicote acompanhando a balança da suspensão. Você pode testá-lo girando a roda na escala ACV baixa: ele deve gerar uma minúscula voltagem (0.1V a 1V) confirmando que a indução está ocorrendo perfeitamente.",
  "ABS Hall": "Para o diagnóstico do Sensor ABS Hall (Sensor Ativo de Freio), configuramos o multímetro em Tensão DC 20V. Estes são sensores ativos, o que significa que internamente são circuitos complexos projetados para detectar as oscilações de fluxo magnético geradas pela roda fônica (dentes no freio) e transformá-las em uma tensão oscilante que sobe de 0 a 12V e retorna rapidamente ao mínimo. Quando testamos, primeiro garantimos a voltagem de alimentação (12V ou 5V), provando que o módulo do ABS não está com a alimentação elétrica cortada por um fusível. A dificuldade surge ao testar o sinal da roda girando: os multímetros não conseguem processar pulsos tão rápidos quanto um osciloscópio, por isso, só conseguimos ver uma tensão média. Porém, isso é suficiente. Se a tensão ficar cravada no zero com a roda girando rápido, o chip Hall no sensor rompeu ou a fiação foi mordida pela carenagem do garfo. Se tivermos a variação intermitente de sinal com a suspensão trabalhando, você diagnostica um chicote rompido na emenda flexível (do guidão e suspensão).",
  "1 Fase (Monofásico)": "Para o diagnóstico do Estator Monofásico (1 Fase), ajustamos o multímetro na Tensão Alternada ACV 200 e fazemos a medição de 'fogo contra o terra', pois apenas um fio traz a força bruta. O processo é ligar o motor e medir entre o fio de saída do estator e o chassi da moto. A produção deve saltar de 20V a mais de 60V com forte aceleração. Queda na leitura denuncia curtos parciais: o verniz das espiras sofreu derretimento prematuro e a força AC que deveria ir para a bateria está circulando pela carcaça do bloco do motor, fritando no processo. Estatores monofásicos trabalham no limite de tensão em motos antigas, o superaquecimento do banho de óleo causa fragilização das resinas de cobre, fazendo com que curtos ao chassi sejam os responsáveis por 90% das mortes desse modelo elétrico.",
  "Primário da Bobina (Injetada TCI)": "Para o diagnóstico primário da Bobina de Ignição em sistemas injeção (TCI), trabalhamos na escala restrita de 200 Ohms porque este circuito (o primário) possui baixíssima resistência (de 2 a 5 Ohms). Ele recebe 12 Volts direto da bateria e a injeção eletrônica fecha e abre o terra para carregar a bobina. Esse teste físico garante que não existe resistência adicional bloqueando o fluxo de 12V. Se medir zero absoluto, é um curto e o driver da ECU da injeção pode torrar pela ausência de barreira ôhmica. Se marcar valores altos (acima de 10 Ohms), a bobina sofreu severo estresse térmico ou oxidação nos terminais, e a central vai registrar um erro de ignição. Atenção extra aos terminais das bobinas caneta (direto na vela) em esportivas ou motos mais densas: a umidade entra pelos conectores pequenos de ignição que ressecam e causa oxidação nos terminais. Lixe levemente os pinos e insista numa aferição firme, a resistência do multímetro do mecânico precisa estar previamente calibrada em 0 Ohms antes desse teste de tão baixa resistência, senão acusará falhas fantasmas."
};

let content = fs.readFileSync('src/data/componentsDB.ts', 'utf8');
const unique = JSON.parse(fs.readFileSync('unique_explanations.json', 'utf8'));

let updated = 0;

for (const oldText of unique) {
  let replacementText = null;

  if (oldText.includes("do componente Efeito Hall (Injetada)")) {
    replacementText = replacements["Efeito Hall (Injetada)"];
  } else if (oldText.includes("do componente 1 Fase (Monofásico)")) {
    replacementText = replacements["1 Fase (Monofásico)"];
  } else if (oldText.includes("do componente Primário da Bobina (Injetada TCI)")) {
    replacementText = replacements["Primário da Bobina (Injetada TCI)"];
  } else if (oldText.includes("galera da oficina") && oldText.includes("ABS Indutivo")) {
    replacementText = replacements["ABS Indutivo"];
  } else if (oldText.includes("turma da mecânica") && oldText.includes("ABS Hall")) {
    replacementText = replacements["ABS Hall"];
  }

  if (replacementText) {
    const target = `"teacherExplanation": "${oldText}"`;
    const newStr = `"teacherExplanation": "${replacementText}"`;
    
    if (content.includes(target)) {
      content = content.replace(target, newStr);
      updated++;
      console.log("Updated specific text");
    } else {
      console.log("Could not find exact string:", target.substring(0, 50));
    }
  }
}

fs.writeFileSync('src/data/componentsDB.ts', content);
console.log(`Replaced ${updated} explanations`);
