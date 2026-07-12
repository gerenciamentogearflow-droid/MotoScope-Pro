import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = `Return a JSON list of translated text segments from this image. Translate to Brazilian Portuguese.
For each segment, provide:
- "text": The translated text.
- "box_2d": The bounding box [ymin, xmin, ymax, xmax] using normalized coordinates 0-1000.`;
  
  // Just testing the prompt format with a dummy image (a small white square)
  const dummyImage = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          inlineData: {
            mimeType: "image/png",
            data: dummyImage
          }
        },
        prompt
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}

run();
