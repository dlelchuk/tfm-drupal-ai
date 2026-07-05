const AIService = require("../services/AIService");
const RagService = require("../services/RagService");
const PromptService = require("../services/PromptService");

async function ask(req, res) {
  try {
    const { message, history = [] } = req.body;

    console.log(`🟡 Mensaje: ${message}`);

    // ==========================
    // Recuperación RAG
    // ==========================

    const criteria = await RagService.search(message);

    // ==========================
    // Construcción del prompt
    // ==========================

    const prompt = PromptService.buildPrompt({
      message,
      history,
      criteria,
    });

    // ==========================
    // Generación de respuesta
    // ==========================

    const reply = await AIService.generate(prompt);

    res.json({
      reply,
      mode: "answer",
    });
  } catch (error) {
    console.error("🔥 ERROR /api/ask:", error);

    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  ask,
};