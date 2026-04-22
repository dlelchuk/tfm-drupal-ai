require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// 🧠 Endpoint del chat
app.post('/chat', (req, res) => {
  const { message } = req.body;

  console.log('Mensaje recibido:', message);

  // Respuesta simulada (luego irá OpenAI aquí)
  res.json({
    reply: `Has dicho: ${message}`
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});