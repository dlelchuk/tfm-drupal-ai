const fs = require('fs');

const inputPath = './data/texto.txt';
const outputPath = './data/chunks.json';

// Configuración
const CHUNK_SIZE = 500; // nº de palabras por chunk
const OVERLAP = 50;     // solapamiento entre chunks

function chunkText(text) {
  const words = text.split(/\s+/);

  const chunks = [];
  let i = 0;

  while (i < words.length) {
    const chunkWords = words.slice(i, i + CHUNK_SIZE);
    const chunk = chunkWords.join(' ');

    chunks.push(chunk);

    i += CHUNK_SIZE - OVERLAP;
  }

  return chunks;
}

function main() {
  const text = fs.readFileSync(inputPath, 'utf-8');

  // Limpieza básica
  const cleanText = text
    .replace(/\s+/g, ' ')   // espacios múltiples
    .replace(/\n+/g, '\n')  // saltos de línea
    .trim();

  const chunks = chunkText(cleanText);

  console.log(`Chunks generados: ${chunks.length}`);

  // Guardar en JSON
  const data = chunks.map((chunk, index) => ({
    id: index,
    text: chunk
  }));

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

  console.log("Chunks guardados en data/chunks.json");
}

main();