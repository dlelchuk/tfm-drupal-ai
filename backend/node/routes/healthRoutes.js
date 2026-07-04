const express = require("express");

const router = express.Router();

// Health Check
router.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend funcionando"
  });
});

module.exports = router;