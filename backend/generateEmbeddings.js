require('dotenv').config();

const fs = require('fs');
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const inputPath = './data/chunks.json';
const outputPath = './data/embeddings.json';

async function generateEmbeddings() {
  const chunks = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  const results = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    console.log(`Procesando chunk ${i + 1}/${chunks.length}`);

    try {
      const response = await ai.models.embedContent({
        model: "text-embedding-004",
        contents: chunk.text
      });

      const embedding = response.embedding.values;

      results.push({
        id: chunk.id,
        text: chunk.text,
        embedding: embedding
      });

    } catch (error) {
      console.error("Error en chunk:", i, error.message);
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log("Embeddings guardados en data/embeddings.json");
}

generateEmbeddings();