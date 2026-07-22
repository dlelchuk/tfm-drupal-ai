const AIService = require("../services/AIService");
const RagService = require("../services/RagService");
const PromptService = require("../services/PromptService");

async function ask(req, res) {
  try {
    let { message, history = [] } = req.body;

    const testMode = message.trimStart().startsWith("[TEST_HTML]");

    if (testMode) {
      message = message.replace(/^\s*\[TEST_HTML\]\s*/, "");
    }

    console.log(`🟡 Mensaje: ${message}`);

    // ==========================
    // Recuperación RAG
    // ==========================

    const criteria = testMode
      ? []
      : await RagService.search(message);

    // ==========================
    // Construcción del prompt
    // ==========================

    const prompt = PromptService.buildPrompt({
      message,
      history,
      criteria,
      testMode,
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