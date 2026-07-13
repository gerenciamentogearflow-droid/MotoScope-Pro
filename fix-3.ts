import fs from 'fs';
import { componentsDB } from './src/data/componentsDB.ts';

async function main() {
  let fileContent = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');
  
  const idsToFix = ["ignition-coil", "abs-indutivo", "estator-3f"];

  const flattenComps = (items) => {
    return items.flatMap(c => c.variants ? [c, ...flattenComps(c.variants)] : [c]);
  };
  const allComps = flattenComps(componentsDB);
  
  for (const comp of allComps) {
    if (idsToFix.includes(comp.id)) {
      if (comp.multimeter && !comp.multimeter.teacherExplanation) {
        const explanation = `Fala meu amigo, beleza? Vamos falar agora sobre como testar a peça ${comp.name} usando o multímetro, um teste fundamental que a gente faz na oficina no dia a dia. Pega seu multímetro e coloca na escala de ${comp.multimeter.setting}. Presta atenção que esse detalhe da escala é crucial, se colocar na escala errada o teste vai dar um falso positivo ou não vai ler nada. O procedimento que o manual pede é o seguinte: ${comp.multimeter.instructions}. Quando você fizer isso, o que a gente espera ver no visor do aparelho? A gente espera ler os seguintes valores: ${comp.multimeter.expectedValues}. Mas por que esses valores? Bom, esse componente funciona enviando ou recebendo um sinal elétrico que precisa ter uma resistência ou tensão muito específica para a central entender o que tá acontecendo. Se o valor der muito abaixo do esperado, pode ser que a peça esteja em curto-circuito, ou seja, a corrente tá passando direto. Se o valor der infinito ou muito acima, é sinal de circuito aberto, significa que o fio ou a bobina interna rompeu e a energia não passa. Um macete de oficina importante é sempre verificar a temperatura da peça, porque o calor do motor altera a resistência dos fios de cobre lá dentro. Se o multímetro ficar oscilando e não estabilizar o valor, desconfie de mau contato no conector ou fio quebrado por dentro da capa, aquele famoso defeito intermitente que dá uma dor de cabeça pra achar. Então faz esse passo a passo com calma, anota o valor que deu, e compara com a tolerância do manual. Qualquer dúvida, refaz o teste garantindo que as pontas de prova tão bem encostadas pra não dar resistência falsa. Tamo junto!`.replace(/"/g, '\\"').replace(/\n/g, '\\n');
        
        const settingString = `"${comp.multimeter.setting}"`;
        const settingIndex = fileContent.indexOf(settingString);
        
        if (settingIndex !== -1) {
           const multiIndex = fileContent.lastIndexOf('"multimeter": {', settingIndex);
           if (multiIndex !== -1) {
              const insertPos = multiIndex + '"multimeter": {'.length;
              // Add only if not already added
              if (!fileContent.substring(multiIndex, settingIndex).includes('"teacherExplanation"')) {
                fileContent = fileContent.substring(0, insertPos) + `\n      "teacherExplanation": "${explanation}",` + fileContent.substring(insertPos);
                console.log(`Updated ${comp.id}`);
              }
           }
        } else {
           console.log(`Setting not found for ${comp.id}`);
        }
      }
    }
  }
  fs.writeFileSync('./src/data/componentsDB.ts', fileContent);
}
main().catch(console.error);
