import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const filePath = './src/data/componentsDB.ts';
  let fileContent = fs.readFileSync(filePath, 'utf8');

  const regex = /"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/g;
  let matches = [...fileContent.matchAll(regex)];
  
  console.log(`Found ${matches.length} items to update.`);
  
  for (let i = 0; i < matches.length; i++) {
     fileContent = fs.readFileSync(filePath, 'utf8');
     const matchRegex = /"id":\s*"([^"]+)"[\s\S]*?"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/;
     const match = matchRegex.exec(fileContent);
     if (!match) continue;
     
     const id = match[1];
     console.log(`Generating for ${id}...`);
     
     const oldExplanation = match[0].split('"teacherExplanation":')[1].trim().slice(1, -1);
     const prompt = `Reescreva a seguinte explicação técnica de um teste de multímetro de motocicleta.
Aja como um engenheiro mecânico especialista em diagnóstico eletrônico de motos.

Regras:
1. NÃO use saudações ou introduções informais (ex: "Fala galera", "Beleza"). Comece imediatamente com a análise técnica.
2. Explique a engenharia do componente e como ele funciona eletricamente.
3. Explique o PORQUÊ da escala de multímetro escolhida e o que está sendo medido fisicamente.
4. Explique o significado de desvios dos valores esperados (curto-circuito, circuito aberto).
5. Dê instruções avançadas sobre defeitos intermitentes e influência da temperatura térmica.
6. Apenas texto puro. Nenhuma formatação como negrito (*), itálico, etc. Mantenha o texto contínuo e aprofundado, com 1 a 2 minutos de duração falada.

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
             console.log("Error. Retrying in 10 seconds...", e.message);
             await new Promise(r => setTimeout(r, 10000));
          }
      }

      if (explanation) {
         fileContent = fileContent.replace(match[0], match[0].replace(/"teacherExplanation":\s*"Fala meu amigo, beleza\?[^"]*"/, `"teacherExplanation": "${explanation}"`));
         fs.writeFileSync(filePath, fileContent);
         console.log(`Updated ${id}!`);
      }
      
      await new Promise(r => setTimeout(r, 2000)); // 2 second delay
  }
}

main().catch(console.error);
