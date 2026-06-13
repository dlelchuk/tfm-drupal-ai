const fs = require('fs');

// Leer archivos actuales
const chunks = JSON.parse(fs.readFileSync('./data/chunks.json', 'utf-8'));
const embeddings = JSON.parse(fs.readFileSync('./data/embeddings.json', 'utf-8'));

// Validación básica
if (chunks.length !== embeddings.length) {
  throw new Error("Chunks y embeddings no tienen la misma longitud");
}

// Unificar
const merged = chunks.map((chunk, i) => ({
  id: chunk.id || i,
  text: chunk.text,
  embedding: embeddings[i].embedding || embeddings[i]
}));

// Guardar nuevo archivo
fs.writeFileSync('./data/data.json', JSON.stringify(merged, null, 2));

console.log("✅ data.json generado correctamente");