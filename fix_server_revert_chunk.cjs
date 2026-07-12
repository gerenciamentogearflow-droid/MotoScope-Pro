const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /\/\/ Split segments into chunks of 40 items[\s\S]*?res\.json\(\{ translatedSegments: allTranslated \}\);/;

const newTranslate = `      const prompt = \`Traduza os valores deste JSON para Português do Brasil. Mantenha os termos técnicos. Retorne APENAS um JSON.
      - Retorne APENAS um JSON válido.
      - O JSON deve conter as EXATAS mesmas chaves do objeto original.
      - Os valores devem ser as strings traduzidas.
      - Mantenha o contexto mecânico/técnico.
      - Mantenha abreviações técnicas padrão (ex: VDC, AC, RPM).
      
      Textos:
      \${JSON.stringify(segments)}\`;
      
      let response;
      let retries = 5;
      let delay = 2000;

      while (retries > 0) {
        try {
          response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { 
              temperature: 0.1,
              responseMimeType: "application/json"
            },
          });
          break;
        } catch (error: any) {
          retries--;
          if (retries === 0) throw error;
          const errorStr = String(error);
          if (errorStr.includes("503") || errorStr.includes("high demand") || errorStr.includes("UNAVAILABLE") || errorStr.includes("429") || errorStr.includes("Too Many Requests")) {
            console.warn(\`Gemini API error. Retrying in \${delay}ms...\`);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay = Math.min(delay * 2, 8000);
          } else {
            throw error;
          }
        }
      }

      let responseText = response!.text;
      let cleanedText = responseText.trim().replace(/^\\s*\`\`\`(?:json)?\\s*/i, "").replace(/\\s*\`\`\`\\s*$/i, "");
      
      try {
        const parsed = JSON.parse(cleanedText);
        res.json({ translatedSegments: parsed });
      } catch (e) {
        console.error("Failed to parse translated segments", e, cleanedText);
        res.status(500).json({ error: "Failed to parse translated segments" });
      }
`;

if (regex.test(code)) {
  code = code.replace(regex, newTranslate);
  fs.writeFileSync('server.ts', code);
  console.log("Replaced successfully!");
} else {
  console.log("Could not find block to replace");
}
