import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import * as dotenv from "dotenv";
import multer from "multer";
import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import { jsonrepair } from "jsonrepair";

// Load environment variables for local development
dotenv.config();

const upload = multer({ dest: 'uploads/' });

import os from "os";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/extract-manual", upload.single("manual"), async (req, res) => {
    res.setHeader("Content-Type", "application/x-ndjson");
    res.setHeader("Transfer-Encoding", "chunked");

    const sendUpdate = (status: string, progress: number, data?: any, error?: string) => {
      res.write(JSON.stringify({ status, progress, data, error }) + "\n");
    };

    try {
      if (!req.file) {
        sendUpdate("Erro", 0, null, "No file uploaded");
        return res.end();
      }

      if (!process.env.GEMINI_API_KEY) {
        sendUpdate("Erro", 0, null, "GEMINI_API_KEY is not set");
        return res.end();
      }

      sendUpdate("Iniciando conexão com a IA...", 5);
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Upload the file to Gemini File API
      sendUpdate("Enviando arquivo PDF para análise (isso pode demorar um pouco)...", 20);
      const fileResult = await ai.files.upload({
        file: req.file.path,
        config: {
          mimeType: req.file.mimetype,
        }
      });

      console.log(`Uploaded file ${fileResult.name}`);
      
      // Delete the file locally after uploading to Gemini
      sendUpdate("Limpando cache temporário...", 35);
      fs.unlinkSync(req.file.path);

      // Extract diagnostic data
      const prompt = `
Você é um especialista em mecânica avançada de motocicletas e diagnóstico eletrônico.
LEIA TODOS OS DADOS DO MANUAL INTEIRO. Analise minuciosamente este manual de serviço de motocicleta (em PDF) e extraia TODOS os parâmetros e tolerâncias RELEVANTES PARA DIAGNÓSTICO E MANUTENÇÃO AVANÇADA, com foco extremo nos sistemas eletrônicos e de injeção.

É MANDATÓRIO que você encontre e extraia as seguintes informações se existirem no manual (procure em todas as páginas, especialmente nas seções "PGM-FI", "Injeção", "Sistema Elétrico" e "Especificações/Manutenção"):
- Taxa de compressão do cilindro (Pressão de compressão do motor em psi, kPa ou kgf/cm2)
- Pressão da Bomba de Combustível (Pressão de linha, vazão, tensão)
- Bico Injetor (Resistência, voltagem, tempo de injeção)
- Sensor MAP (Pressão Absoluta do Coletor) - Voltagem de saída, resistência, pressão
- Sensor IAT (Temperatura do Ar de Admissão) - Voltagem, resistência x temperatura
- Sensor TPS (Posição da Borboleta) - Voltagem (totalmente fechado e totalmente aberto), resistência
- Sensor de Inclinação (Bank Angle Sensor / Sensor de Tombo) - Voltagem de saída (normal e inclinado), resistência
- Sensor ECT / EOT (Temperatura do Motor/Óleo) - Voltagem, resistência x temperatura
- Sensor CKP (Sensor de Posição do Virabrequim / Bobina de Pulso) - Resistência, voltagem de pico mínima
- Sonda Lambda (Sensor de O2) - Voltagem, resistência do aquecedor
- Válvula IACV / FID (Atuador de Marcha Lenta) - Resistência, voltagem
- Bobina de Ignição (Resistência primária e secundária sem cachimbo, voltagem de pico mínima)
- Sistema de Carga: Estator e Regulador/Retificador (Resistência das bobinas do estator, voltagem de carga a 5000rpm, fuga de corrente da bateria)
- Folga de válvulas de admissão e escape (com motor frio)

O QUE IGNORAR ABSOLUTAMENTE (NÃO EXTRAIA DADOS GENÉRICOS OU MECÂNICOS INTERNOS):
- Diâmetro e curso do pistão, anéis de segmento, cilindro, pino do pistão
- Dimensões do virabrequim, biela, embreagem, bomba de óleo (folgas internas)
- Dimensões gerais (Comprimento, Largura, Altura, Peso, Distância entre eixos)
- Capacidades e volumes (Óleo do motor, Fluido de freio, Líquido de arrefecimento, Capacidade do tanque)
- Relação de marchas, transmissão final, pinhão, coroa
- Especificações de chassi, suspensão (curso, óleo de bengala) e freios (espessura de disco, lona) a menos que sejam testes elétricos do ABS.
- Torques de aperto
- Ferramentas especiais
- Tamanho e pressão de pneus
- Informações sobre lâmpadas, buzinas e fusíveis.

Sua saída deve ser estritamente em JSON, seguindo esta estrutura TypeScript:

{
  "name": "Nome do Modelo da Motocicleta (ex: CB 300R 2010)",
  "tables": [
    {
      "name": "Nome da Seção (ex: SISTEMA DE INJEÇÃO, SISTEMA ELÉTRICO, CABEÇOTE/VÁLVULAS)",
      "rows": [
        {
          "localizacao": "Peça ou componente (ex: Folga da válvula de admissão, Bobina de ignição - Primário, Sensor CKP)",
          "padrao": "Valor padrão com unidade (ex: 0,10 mm ± 0,03 mm, 2.5 a 3.2 Ohms a 20°C)",
          "tipo": "Sigla do tipo de teste (AL = Alimentação, RS = Resistência, PV = Pulso de Voltagem, CC = Continuidade, MM = Medida/Milímetro, PR = Pressão, VZ = Vazão)"
        }
      ]
    }
  ],
  "extractionReport": {
    "found": ["Lista dos componentes principais solicitados que você CONSEGUIU encontrar e extrair com sucesso"],
    "missing": ["Lista dos componentes principais solicitados que você NÃO CONSEGUIU encontrar no PDF"]
  }
}

REGRAS CRÍTICAS:
1. NÃO invente dados. Se não estiver no manual, coloque em "missing" no extractionReport.
2. NÃO RESUMA! Extraia TODOS OS DADOS DE SENSORES E ATUADORES DE INJEÇÃO ELETRÔNICA, um por um.
3. Agrupe as informações logicamente em seções ("tables"). O modelo da moto deve ser identificado na capa ou primeiras páginas.
4. Para o "tipo", tente inferir o mais adequado de acordo com a unidade:
   - Ohms (Ω) -> "RS" (Resistência)
   - Volts (V) -> "AL" (Alimentação/Tensão) ou "PV" (Pulso/Pico)
   - mm / in -> "MM" (Medida Dimensional/Folga - ex: folga de válvula)
   - kPa / psi / bar / kgf/cm² -> "PR" (Pressão - ex: bomba, compressão)
   - ml/min / L/h -> "VZ" (Vazão - ex: bomba)
   - Continuidade -> "CC"
5. ATENÇÃO MÁXIMA E EXAUSTIVA ao capítulo de Injeção Eletrônica (PGM-FI/FI) e Sistema de Carga/Elétrico. Você DEVE extrair dezenas de parâmetros se o manual for completo.
6. Procure ativamente pelos sensores TPS, MAP, IAT, EOT, CKP, IACV, Sonda Lambda, Estator, e Bomba de Combustível. Eles SÃO OBRIGATÓRIOS. A Taxa de Compressão e Pressão da Bomba de Combustível são sua prioridade absoluta.
7. Retorne APENAS o JSON válido.
`;

      let responseText = "";
      try {
        console.log("File result:", JSON.stringify(fileResult));
        sendUpdate("A IA está lendo o PDF e procurando parâmetros mecânicos (etapa demorada)...", 50);
        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: [
            {
              fileData: {
                fileUri: fileResult.uri,
                mimeType: fileResult.mimeType || req.file.mimetype,
              }
            },
            { text: prompt }
          ],
          config: {
            temperature: 0.2,
            maxOutputTokens: 8192,
            responseSchema: {
              type: "OBJECT",
              properties: {
                name: {
                  type: "STRING",
                  description: "Nome do Modelo da Motocicleta (ex: CB 300R 2010)"
                },
                tables: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      name: { type: "STRING" },
                      rows: {
                        type: "ARRAY",
                        items: {
                          type: "OBJECT",
                          properties: {
                            localizacao: { type: "STRING" },
                            padrao: { type: "STRING" },
                            tipo: { type: "STRING" }
                          },
                          required: ["localizacao", "padrao", "tipo"]
                        }
                      }
                    },
                    required: ["name", "rows"]
                  }
                },
                extractionReport: {
                  type: "OBJECT",
                  properties: {
                    found: {
                      type: "ARRAY",
                      items: { type: "STRING" }
                    },
                    missing: {
                      type: "ARRAY",
                      items: { type: "STRING" }
                    }
                  },
                  required: ["found", "missing"]
                }
              },
              required: ["name", "tables", "extractionReport"]
            }
          }
        });

        responseText = response.text || "";
        sendUpdate("Leitura concluída. Limpando dados da IA...", 80);
      } finally {
        // Cleanup Gemini File regardless of success/failure
        try {
          await ai.files.delete({ name: fileResult.name });
        } catch (e) {
          console.error("Failed to delete Gemini file:", e);
        }
      }

      if (!responseText) {
        sendUpdate("Erro", 80, null, "No text returned from Gemini");
        return res.end();
      }

      sendUpdate("Formatando dados extraídos...", 90);
      // Strip markdown block formatting if Gemini included it despite instructions
      let cleanedText = responseText.trim();
      cleanedText = cleanedText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");

      let parsedData;
      try {
        parsedData = JSON.parse(cleanedText);
      } catch (e) {
        // Attempt to repair JSON if the model produced invalid syntax
        try {
          const repaired = jsonrepair(cleanedText);
          parsedData = JSON.parse(repaired);
        } catch (repairError) {
          console.error("Original JSON parse error:", e);
          console.error("JSON repair error:", repairError);
          throw new Error("Falha ao analisar a resposta da IA como JSON, mesmo após reparo. A IA pode ter retornado muitos dados ou dados formatados incorretamente.");
        }
      }
      
      // Ensure ID exists
      const modelName = parsedData?.name || "Modelo Desconhecido";
      parsedData.name = modelName;
      parsedData.id = modelName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

      sendUpdate("Processamento finalizado com sucesso!", 100, parsedData);
      res.end();
    } catch (error) {
      console.error("Error extracting manual:", error);
      sendUpdate("Erro", 0, null, String(error));
      res.end();
    }
  });

  app.post("/api/manual-chat/upload", upload.single("manual"), async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "No file uploaded" });
      if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: "GEMINI_API_KEY is not set" });
      
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const fileResult = await ai.files.upload({
        file: req.file.path,
        config: { mimeType: req.file.mimetype }
      });
      fs.unlinkSync(req.file.path);

      res.json({ fileUri: fileResult.uri, mimeType: fileResult.mimeType || req.file.mimetype, name: fileResult.name });
    } catch (e: any) {
      console.error("Error uploading to Gemini:", e);
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/manual-chat/message", async (req, res) => {
    try {
      const { fileUri, mimeType, message, history } = req.body;
      if (!fileUri || !message) {
        return res.status(400).json({ error: "Missing fileUri or message" });
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `Você é um assistente de IA estritamente focado e especialista no manual fornecido em anexo.
Aja como um mecânico experiente, falando em português de forma natural e amigável, mas EXTREMAMENTE TÉCNICA E PRECISA.
Regras inquebráveis:
1. ATERRAMENTO TOTAL: Responda APENAS E EXCLUSIVAMENTE com base nas informações contidas no documento PDF anexado. É TERMINANTEMENTE PROIBIDO inventar informações, adivinhar, usar conhecimentos prévios ou deduzir dados técnicos.
2. Se a informação NÃO estiver no PDF, diga APENAS: "Não encontrei essa informação no manual enviado."
3. Seja consistente. Sempre forneça a mesma resposta técnica baseada no manual.
4. OBRIGATÓRIO: Ao final de toda resposta, você DEVE citar a página exata do PDF de onde tirou a informação. ATENÇÃO MÁXIMA: A página deve ser o ÍNDICE ABSOLUTO da página do arquivo PDF (começando em 1, onde a capa é a página 1). NÃO use o número impresso no rodapé da página.
5. OBRIGATÓRIO: Para garantir que encontraremos a página correta caso o índice falhe, forneça também um trecho curto e ÚNICO (cerca de 5 a 10 palavras seguidas) copiado EXATAMENTE como está no texto original do PDF. Evite copiar textos de tabelas com formatação complexa.
Use EXATAMENTE este formato nas últimas linhas (sem formatação markdown ao redor destas tags):
[Página X]
[Citação: "trecho exato copiado do manual"]`;

      const mappedContents = (history || []).map((h: any) => ({
        role: h.role,
        parts: [{ text: h.text }]
      }));

      mappedContents.push({
        role: "user",
        parts: [{ text: message }]
      });

      // Inject the file in the first user message
      if (mappedContents.length > 0 && mappedContents[0].role === "user") {
          mappedContents[0].parts.unshift({ fileData: { fileUri, mimeType: mimeType || "application/pdf" } });
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: mappedContents,
        config: {
          systemInstruction: prompt,
          temperature: 0.1,
          topP: 0.4
        }
      });
      
      res.json({ text: response.text });
    } catch (e: any) {
      console.error("Error generating manual chat response:", e);
      res.status(500).json({ error: e.message });
    }
  });

  // Generate TTS Audio on the fly using node-edge-tts
  app.get("/api/tts", async (req, res) => {
    try {
      const id = req.query.id as string;
      const text = req.query.text as string;
      if (!text || !id) {
        return res.status(400).json({ error: "Missing 'text' or 'id' in query." });
      }

      // Check if file already exists in tmp dir
      const outputDir = path.join(os.tmpdir(), 'moto-audio');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      const fileName = `${id}.mp3`;
      const filePath = path.join(outputDir, fileName);

      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        // Return cached file
        return res.sendFile(filePath);
      }

      // We use import to load it dynamically
      const { EdgeTTS } = await import('node-edge-tts');
      
      const tts = new EdgeTTS({
        voice: 'pt-BR-AntonioNeural', // Male voice for PT-BR
        lang: 'pt-BR',
        outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
      });
      
      await tts.ttsPromise(text, filePath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        return res.sendFile(filePath);
      } else {
        return res.status(500).json({ error: "No audio generated by the model." });
      }
    } catch (error: any) {
      console.error("Error generating TTS:", error);
      return res.status(500).json({ error: "Internal server error during TTS generation: " + error.message });
    }
  });

  app.post("/api/tts", async (req, res) => {
    try {
      const { text, id } = req.body;
      if (!text || !id) {
        return res.status(400).json({ error: "Missing 'text' or 'id' in request body." });
      }

      // Check if file already exists in tmp dir
      const outputDir = path.join(os.tmpdir(), 'moto-audio');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      const fileName = `${id}.mp3`;
      const filePath = path.join(outputDir, fileName);

      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        // Return cached file
        return res.sendFile(filePath);
      }

      // We use import to load it dynamically
      const { EdgeTTS } = await import('node-edge-tts');
      
      const tts = new EdgeTTS({
        voice: 'pt-BR-AntonioNeural', // Male voice for PT-BR
        lang: 'pt-BR',
        outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
      });
      
      await tts.ttsPromise(text, filePath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        return res.sendFile(filePath);
      } else {
        return res.status(500).json({ error: "No audio generated by the model." });
      }
    } catch (error: any) {
      console.error("Error generating TTS:", error);
      return res.status(500).json({ error: "Internal server error during TTS generation: " + error.message });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
