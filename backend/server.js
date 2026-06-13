require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Inicializar cliente Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// -----------------------------
// Endpoint de prueba
// -----------------------------
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// -----------------------------
// Endpoint /chat (opcional)
// -----------------------------
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",   //model: "gemini-3-flash-preview"
      contents: `Eres un asistente educativo claro.\n\nUsuario: ${message}`,
    });

    res.json({ reply: response.text });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -----------------------------
// Endpoint /ask (RAG optimizado)
// -----------------------------
app.post('/ask', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    console.log("🟡 Mensaje:", message);

    // =============================
    // 1. BÚSQUEDA SEMÁNTICA (rápido)
    // =============================
    const response = await fetch(
      `http://python-api:8000/search?query=${encodeURIComponent(message)}`
    );

    if (!response.ok) {
      throw new Error(`Error en python-api: ${response.status}`);
    }

    const searchResults = await response.json();

    const context = searchResults.map(r => r.text).join("\n\n");

    // =============================
    // 2. GENERACIÓN (UNA sola llamada)
    // =============================
    const prompt = `
Eres un asistente especializado en la elaboración de recursos educativos accesibles.

Usa el siguiente contexto para responder.

Para cada pregunta, responde de forma clara y concisa. Si el contexto no tiene la información necesaria, di "No tengo suficiente información para responder".
No inventes respuestas.
Solo puedes responder usando la información proporcionada en el contexto.
Antes de responder, debes asegurarte de que el usuario ha indicado la materia, el nivel educativo, el tipo de recurso que desea y el tipo y nivel de discapacidad de la audiencia; pero no le pidas una lista de información, sino que haz preguntas en donde le pidas las piezas de información faltantes de forma natural a medida que la conversación avanza. Tampoco le pidas esta información en el saludo.
Si el usuario no ha dado suficiente información,
haz una pregunta de aclaración.

Si la respuesta no está en el contexto, di:
"No tengo suficiente información para responder".

Contexto:
${context}

Historial:
${history.map(h => `${h.role}: ${h.content}`).join("\n")}

Usuario:
${message}
`;

    const aiResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",   //model: "gemini-3-flash-preview"
      contents: prompt,
    });

    const reply = aiResponse.text;

    res.json({
      reply,
      mode: "answer" // opcional mantener siempre "answer"
    });

  } catch (error) {
    console.error("🔥 ERROR /ask:", error);

    res.status(500).json({
      error: error.message
    });
  }
});

// -----------------------------
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});