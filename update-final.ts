import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const filePath = './src/data/componentsDB.ts';

  for (let attempt = 0; attempt < 16; attempt++) {
     let fileContent = fs.readFileSync(filePath, 'utf8');
     const matchRegex = /"id":\s*"([^"]+)"[\s\S]*?"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/;
     const match = matchRegex.exec(fileContent);
     if (!match) {
        console.log("No more items to update!");
        break;
     }
     
     const id = match[1];
     console.log(`Generating for ${id}...`);
     
     const oldExplanation = match[0].split('"teacherExplanation":')[1].trim().slice(1, -1);
     const prompt = `Reescreva a seguinte explicação técnica de um teste de multímetro de motocicleta. Aja como um engenheiro mecânico especialista em diagnóstico eletrônico de motos.
Regras:
1. NÃO use saudações ou introduções informais (ex: "Fala galera", "Beleza"). Comece com a análise técnica.
2. Explique a engenharia do componente e como ele funciona eletricamente.
3. Explique o PORQUÊ da escala de multímetro escolhida e o que está sendo medido fisicamente.
4. Explique o significado de desvios dos valores esperados (curto-circuito, circuito aberto).
5. Dê instruções avançadas sobre defeitos intermitentes e influência da temperatura térmica.
6. Apenas texto puro (sem negritos). Mantenha longo para um áudio aprofundado (1 minuto falado).

Texto original:
${oldExplanation}`;

      let success = false;
      let explanation = "";
      while (!success) {
          try {
            const response = await ai.models.generateContent({
              model: 'gemini-1.5-flash',
              contents: prompt,
            });

            explanation = response.text?.replace(/"/g, '\\"').replace(/\n/g, '\\n') || "";
            success = true;
          } catch (e: any) {
             console.log("Rate limited! Sleeping 30s...", e.status);
             await new Promise(r => setTimeout(r, 30000));
          }
      }

      if (explanation) {
         fileContent = fileContent.replace(match[0], match[0].replace(/"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/, `"teacherExplanation": "${explanation}"`));
         fs.writeFileSync(filePath, fileContent);
         console.log(`Updated ${id}!`);
      }
      
      // Sleep 5 seconds to avoid rate limits (12 RPM)
      await new Promise(r => setTimeout(r, 5000));
  }
}

main().catch(console.error);
