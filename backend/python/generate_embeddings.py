from sentence_transformers import SentenceTransformer
import json

print("🔄 Cargando modelo...")

model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
)

# Cargar base de conocimiento
with open(
    "data/knowledge_base.json",
    "r",
    encoding="utf-8"
) as f:
    chunks = json.load(f)

# Extraer textos para embedding
texts = [
    chunk["texto_embedding"]
    for chunk in chunks
    if chunk.get("texto_embedding")
]

print(f"🔄 Generando embeddings para {len(texts)} registros...")

# Generar embeddings
embeddings = model.encode(
    texts,
    show_progress_bar=True,
    batch_size=32,
    convert_to_numpy=True
)

# Combinar datos originales + embedding
data = []

embedding_index = 0

for chunk in chunks:

    if not chunk.get("texto_embedding"):
        continue

    item = {
        **chunk,
        "embedding": embeddings[embedding_index].tolist()
    }

    data.append(item)

    embedding_index += 1

# Guardar resultado
with open(
    "data/data.json",
    "w",
    encoding="utf-8"
) as f:
    json.dump(
        data,
        f,
        indent=2,
        ensure_ascii=False
    )

print(
    f"✅ Embeddings generados correctamente para {len(data)} recomendaciones"
)