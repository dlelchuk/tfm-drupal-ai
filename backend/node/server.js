require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const healthRoutes = require("./routes/healthRoutes");
const chatRoutes = require("./routes/chatRoutes");

const AIService = require("./services/AIService");

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
app.use("/api", chatRoutes);

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
// Chat simple (sin RAG)
// ----------------------------------------

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await AIService.generate(
      `Eres un asistente educativo claro.\n\nUsuario: ${message}`,
    );

    res.json({
      reply,
    });
  } catch (error) {
    console.error(error);

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