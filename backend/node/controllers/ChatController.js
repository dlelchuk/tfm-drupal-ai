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

    const ragStart = Date.now();

    const criteria = testMode ? [] : await RagService.search(message);

    console.log(`⏱️ RAG: ${Date.now() - ragStart} ms`);

    // ==========================
    // Construcción del prompt
    // ==========================

    const promptStart = Date.now();

    const prompt = PromptService.buildPrompt({
      message,
      history,
      criteria,
      testMode,
    });

    console.log(`📚 Criterios RAG: ${criteria.length}`);

    console.log(`📝 Prompt: ${prompt.length} caracteres`);

    console.log(`⏱️ Prompt: ${Date.now() - promptStart} ms`);

    // ==========================
    // Streaming
    // ==========================

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const streamStart = Date.now();

    let firstChunk = true;
    let chunkCount = 0;
    let totalChars = 0;

    for await (const chunk of AIService.generateStream(prompt)) {
      if (firstChunk) {
        firstChunk = false;

        console.log(`⏱️ Primer chunk: ${Date.now() - streamStart} ms`);
      }

      chunkCount++;
      totalChars += chunk.length;

      res.write(chunk);
    }

    console.log(`📦 Chunks: ${chunkCount}`);
    console.log(`📝 Caracteres generados: ${totalChars}`);
    console.log(
      `📏 Tamaño medio del chunk: ${(totalChars / chunkCount).toFixed(1)} caracteres`,
    );

    res.end();
  } catch (error) {
    console.error("🔥 ERROR /api/ask:", error);

    if (!res.headersSent) {
      res.status(500).json({
        error: error.message,
      });
    } else {
      res.end();
    }
  }
}

module.exports = {
  ask,
};
