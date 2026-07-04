require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const healthRoutes = require("./routes/healthRoutes");
const chatRoutes = require("./routes/chatRoutes");

const { GoogleGenAI } = require("@google/genai");

const app = express();
const PORT = process.env.PORT || 3000;

// ========================================
// Configuración
// ========================================

const WEB_DIR = path.join(__dirname, "../web");

// Middleware
app.use(cors());
app.use(express.json());

// Servir el sitio web
app.use(express.static(WEB_DIR));
app.use("/api/health", healthRoutes);
app.use("/api/chat", chatRoutes);
// Cliente Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ========================================
// Frontend
// ========================================

app.get("/", (req, res) => {
  res.sendFile(path.join(WEB_DIR, "index.html"));
});

// ========================================
// API
// ========================================

// ----------------------------------------
// Chat simple
// ----------------------------------------

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Eres un asistente educativo claro.\n\nUsuario: ${message}`,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ----------------------------------------
// Chat RAG
// ----------------------------------------

app.post("/api/ask", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    console.log(`🟡 Mensaje: ${message}`);

    // ==========================
    // Búsqueda semántica
    // ==========================

    const response = await fetch(
      `http://python-api:8000/search?query=${encodeURIComponent(message)}`,
    );

    if (!response.ok) {
      throw new Error(`Error en python-api: ${response.status}`);
    }

    const searchResults = await response.json();

    const context = searchResults.map((result) => result.text).join("\n\n");

    // ==========================
    // Prompt
    // ==========================

    const prompt = `
Eres un asistente especializado en la elaboración de recursos educativos accesibles.

Responde únicamente utilizando la información del contexto.

Antes de responder, asegúrate de que el usuario ha indicado:
- materia;
- nivel educativo;
- tipo de recurso;
- tipo y nivel de discapacidad.

Si falta alguna de esas piezas de información, formula únicamente una pregunta natural para obtener la siguiente información necesaria.

Nunca inventes información.

Si la respuesta no puede obtenerse del contexto responde exactamente:

"No tengo suficiente información para responder."

Contexto:
${context}

Historial:
${history.map((h) => `${h.role}: ${h.content}`).join("\n")}

Usuario:
${message}
`;

    // ==========================
    // Gemini
    // ==========================

    const aiResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    res.json({
      reply: aiResponse.text,
      mode: "answer",
    });
  } catch (error) {
    console.error("🔥 ERROR /api/ask:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ========================================
// Inicio del servidor
// ========================================

app.listen(PORT, "0.0.0.0", () => {
  console.log("====================================");
  console.log("Servidor iniciado correctamente");
  console.log(`Frontend: http://localhost:${PORT}`);
  console.log(`API:      http://localhost:${PORT}/api`);
  console.log("====================================");
});
