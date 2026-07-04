const express = require("express");

const router = express.Router();

const SessionManager = require("../services/SessionManager");

// Crear una nueva sesión
router.post("/session", (req, res) => {

    const session = SessionManager.createSession();

    res.status(201).json({
        sessionId: session.id
    });

});

module.exports = router;