const express = require("express");

const router = express.Router();

const SessionManager = require("../services/SessionManager");
const ChatController = require("../controllers/ChatController");

// ----------------------------------------
// Crear una nueva sesión
// ----------------------------------------

router.post("/session", (req, res) => {
  const session = SessionManager.createSession();

  res.status(201).json({
    sessionId: session.id,
  });
});

// ----------------------------------------
// Chat RAG
// ----------------------------------------

router.post("/ask", ChatController.ask);

module.exports = router;