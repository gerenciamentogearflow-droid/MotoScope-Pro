import { GoogleGenAI } from "@google/genai";

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const segments = {"1": "Hello", "2": "World"};
  const prompt = `Traduza os valores deste JSON para Português do Brasil. Mantenha os termos técnicos. Retorne APENAS um JSON.
      - Retorne APENAS um JSON válido.
      - O JSON deve conter as EXATAS mesmas chaves do objeto original.
      - Os valores devem ser as strings traduzidas.
      - Mantenha o contexto mecânico/técnico.
      - Mantenha abreviações técnicas padrão (ex: VDC, AC, RPM).
      
      Textos:
      ${JSON.stringify(segments)}`;
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
    config: { 
      temperature: 0.1
    },
  });
  console.log("RESPONSE TEXT:", response.text);
}
run().catch(console.error);
