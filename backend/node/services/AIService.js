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
  const models = process.env.GEMINI_MODELS?.split(",")
    .map((model) => model.trim())
    .filter(Boolean);

  if (!models || models.length === 0) {
    throw new Error("La variable GEMINI_MODELS no está definida o está vacía.");
  }

  return models;
}

// ---------------------------------------------------------------------
// Generación normal
// ---------------------------------------------------------------------

async function callGemini(model, prompt) {
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  return response.text;
}

// ---------------------------------------------------------------------
// Generación en streaming
// ---------------------------------------------------------------------

async function* callGeminiStream(model, prompt) {
  const t0 = Date.now();

  const stream = await ai.models.generateContentStream({
    model,
    contents: prompt,
  });

  console.log(`⏱️ generateContentStream(): ${Date.now() - t0} ms`);

  let first = true;

  for await (const chunk of stream) {
    if (first) {
      first = false;

      console.log(`⏱️ Primer chunk del iterador: ${Date.now() - t0} ms`);
    }

    if (chunk.text) {
      yield chunk.text;
    }
  }
}

// ---------------------------------------------------------------------
// Reintentos (respuesta completa)
// ---------------------------------------------------------------------

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

// ---------------------------------------------------------------------
// Reintentos (stream)
// ---------------------------------------------------------------------

async function* generateStreamWithModel(model, prompt) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt++) {
    try {
      console.log(
        `[Gemini] Modelo: ${model} | Intento ${attempt}/${MAX_ATTEMPTS_PER_MODEL}`,
      );

      yield* callGeminiStream(model, prompt);

      return;
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

// ---------------------------------------------------------------------
// API pública (respuesta completa)
// ---------------------------------------------------------------------

async function generate(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("La variable GEMINI_API_KEY no está definida.");
  }

  const models = getModels();

  let lastError;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];

    console.log(`[Gemini] Probando modelo ${i + 1}/${models.length}: ${model}`);

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

// ---------------------------------------------------------------------
// API pública (stream)
// ---------------------------------------------------------------------

async function* generateStream(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("La variable GEMINI_API_KEY no está definida.");
  }

  console.log(`📝 Enviando ${prompt.length} caracteres al modelo`);

  const models = getModels();

  let lastError;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];

    console.log(`[Gemini] Probando modelo ${i + 1}/${models.length}: ${model}`);

    try {
      yield* generateStreamWithModel(model, prompt);

      return;
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
  generateStream,
};
