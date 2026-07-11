require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const RETRY_DELAY = 2000;
const MAX_ATTEMPTS_PER_MODEL = 2;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getModels() {
  const models = process.env.GEMINI_MODELS
    ?.split(",")
    .map((model) => model.trim())
    .filter(Boolean);

  if (!models || models.length === 0) {
    throw new Error(
      "La variable GEMINI_MODELS no está definida o está vacía.",
    );
  }

  return models;
}

async function callGemini(model, prompt) {
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  return response.text;
}

async function generateWithModel(model, prompt) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt++) {
    try {
      console.log(
        `[Gemini] Modelo: ${model} | Intento ${attempt}/${MAX_ATTEMPTS_PER_MODEL}`,
      );

      return await callGemini(model, prompt);
    } catch (error) {
      lastError = error;

      if (error.status !== 503) {
        throw error;
      }

      console.warn(
        `[Gemini] ${model} devolvió un 503 (Intento ${attempt}/${MAX_ATTEMPTS_PER_MODEL})`,
      );

      if (attempt < MAX_ATTEMPTS_PER_MODEL) {
        console.log(
          `[Gemini] Esperando ${RETRY_DELAY / 1000} segundos antes de reintentar...`,
        );

        await sleep(RETRY_DELAY);
      }
    }
  }

  throw lastError;
}

async function generate(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("La variable GEMINI_API_KEY no está definida.");
  }

  const models = getModels();

  let lastError;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];

    console.log(
      `[Gemini] Probando modelo ${i + 1}/${models.length}: ${model}`,
    );

    try {
      return await generateWithModel(model, prompt);
    } catch (error) {
      lastError = error;

      if (error.status !== 503) {
        throw error;
      }

      console.warn(
        `[Gemini] El modelo ${model} no está disponible. Probando el siguiente modelo...`,
      );
    }
  }

  throw lastError;
}

module.exports = {
  generate,
};