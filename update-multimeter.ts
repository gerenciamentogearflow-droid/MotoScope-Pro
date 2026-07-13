import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import { componentsDB } from './src/data/componentsDB.ts';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  let fileContent = fs.readFileSync('./src/data/componentsDB.ts', 'utf8');

  const flattenComps = (items) => {
    return items.flatMap(c => c.variants ? [c, ...flattenComps(c.variants)] : [c]);
  };
  const allComps = flattenComps(componentsDB);

  for (const comp of allComps) {
    if (comp.multimeter && !comp.multimeter.teacherExplanation) {
      console.log(`Generating for ${comp.id}...`);
      
      const prompt = `Você é um instrutor de mecânica de motos super experiente. Crie um áudio de "Aulão" (texto) explicando de forma MUITO PROFUNDA E DETALHADA sobre o teste com MULTÍMETRO para a peça: "${comp.name}".
O teste recomendado pelo manual usa a configuração: ${comp.multimeter.setting}.
Instruções: ${comp.multimeter.instructions}.
Valores Esperados: ${comp.multimeter.expectedValues}.

Crie um texto com linguagem falada, direta e amigável (como se estivesse gravando um áudio no WhatsApp), explicando não só os passos do teste, mas O PORQUÊ de cada coisa. Explique o funcionamento elétrico básico, possíveis defeitos (o que significa se der valor X ou Y), e os macetes de oficina. Não use formatação como ** ou *. O texto deve ser longo, de 1 a 2 minutos de fala.`;

      let response;
      try {
        response = await ai.models.generateContent({
          model: 'gemini-2.0-flash',
          contents: prompt,
        });
      } catch (e) {
        console.error(e);
        break;
      }

      const explanation = response.text?.replace(/"/g, '\\"').replace(/\n/g, '\\n') || "";

      const idIndex = fileContent.indexOf(`"id": "${comp.id}"`);
      if (idIndex !== -1) {
        const multiIndex = fileContent.indexOf('"multimeter": {', idIndex);
        if (multiIndex !== -1 && multiIndex < idIndex + 5000) {
          let braceCount = 0;
          let insertIndex = -1;
          for (let i = multiIndex + '"multimeter": {'.length; i < fileContent.length; i++) {
            if (fileContent[i] === '{') braceCount++;
            if (fileContent[i] === '}') {
              if (braceCount === 0) {
                insertIndex = i;
                break;
              }
              braceCount--;
            }
          }
          if (insertIndex !== -1) {
            fileContent = fileContent.substring(0, insertIndex) + `,\n      "teacherExplanation": "${explanation}"\n    ` + fileContent.substring(insertIndex);
            console.log(`Updated ${comp.id}`);
            fs.writeFileSync('./src/data/componentsDB.ts', fileContent);
          }
        }
      }
      
      await new Promise(r => setTimeout(r, 4000));
    }
  }
}

main().catch(console.error);
