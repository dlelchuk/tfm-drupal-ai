from sentence_transformers import SentenceTransformer
import json

print("🔄 Cargando modelo...")
model = SentenceTransformer('all-MiniLM-L6-v2')

# cargar chunks
with open('data/chunks.json', 'r', encoding='utf-8') as f:
    chunks = json.load(f)

texts = [chunk["text"] for chunk in chunks]

print(f"🔄 Generando embeddings para {len(texts)} chunks...")

# generar embeddings (batch optimizado)
embeddings = model.encode(
    texts,
    show_progress_bar=True,
    batch_size=32
)

# combinar
data = []
for i, chunk in enumerate(chunks):
    data.append({
        "id": chunk.get("id", i),
        "text": chunk["text"],
        "embedding": embeddings[i].tolist(),
        "chunk_index": i   # 👈 mejora
    })

# guardar
with open('data/data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("✅ Embeddings generados correctamente")