import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import { componentsDB } from './src/data/componentsDB';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const filePath = './src/data/componentsDB.ts';

  const components: any[] = [];
  const extract = (comps: any[]) => {
    for (const c of comps) {
      if (c.multimeter) components.push(c);
      if (c.variants) extract(c.variants);
    }
  };
  extract(componentsDB);

  for (const comp of components) {
    if (!comp.multimeter) continue;

    const prompt = `Você é um engenheiro eletrônico e mecânico focado em motos.
Escreva a explicação técnica em áudio (formato de texto corrido, sem tópicos, sem introduções/saudações tipo 'fala galera' ou 'olá') para o teste do componente: ${comp.name}.

Dados reais do teste para você explicar:
- Escala do Multímetro: ${comp.multimeter.setting}
- Instruções: ${comp.multimeter.instructions}
- Valores Esperados: ${comp.multimeter.expectedValues}

Regras:
1. Comece direto no assunto técnico, ex: "Para o diagnóstico do ${comp.name}, a escala de ${comp.multimeter.setting} é utilizada porque..."
2. Explique a função e a engenharia do componente (o que ele faz na moto).
3. Explique detalhadamente a engenharia por trás da escala escolhida e o que está sendo medido fisicamente (ex: resistência da bobina em ohms, queda de tensão do semicondutor, tensão de pico gerada).
4. Explique a falha técnica: o que significa se o valor lido for muito baixo (curto-circuito interno, isolamento rompido) ou infinito/muito alto (circuito aberto, fio partido).
5. Inclua dicas avançadas de engenharia: como a temperatura do motor afeta a resistência (expansão térmica), teste intermitente a quente vs frio, e verificação de oxidação de conectores.
6. Apenas texto puro. Sem quebras por marcadores (asteriscos). Texto profundo (duração de 1 a 2 minutos lendo).`;

    console.log(`Generating for ${comp.id}...`);
    let success = false;
    let text = '';
    while (!success) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.0-flash',
          contents: prompt
        });
        text = response.text?.replace(/"/g, '\\"').replace(/\n/g, '\\n') || "";
        success = true;
      } catch (e: any) {
        console.error("Rate limit. Waiting 10s...", e.message);
        await new Promise(r => setTimeout(r, 10000));
      }
    }

    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    const idIndex = fileContent.indexOf(`"id": "${comp.id}"`);
    if (idIndex !== -1) {
       const multiIndex = fileContent.indexOf('"multimeter":', idIndex);
       if (multiIndex !== -1 && multiIndex < idIndex + 3000) {
           const teacherRegex = /"teacherExplanation":\s*"Vamos analisar o diagnóstico eletrônico[^"]*"/;
           const blockStr = fileContent.substring(multiIndex, multiIndex + 2500);
           const match = teacherRegex.exec(blockStr);
           if (match) {
               const absoluteStart = multiIndex + match.index;
               const absoluteEnd = absoluteStart + match[0].length;
               
               fileContent = fileContent.substring(0, absoluteStart) +
                             `"teacherExplanation": "${text}"` +
                             fileContent.substring(absoluteEnd);
               fs.writeFileSync(filePath, fileContent);
               console.log(`Replaced for ${comp.id}`);
           } else {
               console.log(`Teacher explanation not found in block for ${comp.id}`);
           }
       }
    }

    // wait 3 seconds to avoid rate limits
    await new Promise(r => setTimeout(r, 3000));
  }
  
  console.log("Finished all!");
}

main().catch(console.error);
