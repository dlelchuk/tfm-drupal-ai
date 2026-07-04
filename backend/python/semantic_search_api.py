from fastapi import FastAPI
import json
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

# =============================
# CARGA GLOBAL (una sola vez)
# =============================
print("🔄 Cargando modelo...")
model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
)

print("🔄 Cargando embeddings...")
with open('data/data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

embeddings = np.array([item["embedding"] for item in data])

# =============================
# CACHE EN RAM
# =============================
query_cache = {}

# =============================
# WARMUP (clave)
# =============================
print("🔥 Warmup del modelo...")
model.encode(["warmup"])
print("✅ API lista")

# =============================
# ENDPOINT
# =============================
@app.get("/search")
def search(query: str, top_k: int = 3):

    # -------- cache --------
    if query in query_cache:
        query_embedding = query_cache[query]
    else:
        query_embedding = model.encode([query])
        query_cache[query] = query_embedding

    # -------- similitud --------
    similarities = cosine_similarity(query_embedding, embeddings)[0]

    top_indices = similarities.argsort()[-top_k:][::-1]

    results = []

    for idx in top_indices:

        item = data[idx]

        results.append({
            "id": item["id"],
            "dimension": item["dimension"],
            "subdimension": item["subdimension"],
            "categoria": item["categoria"],
            "recomendacion": item["recomendacion"],
            "ejemplo": item["ejemplo"],
            "texto_embedding": item["texto_embedding"],
            "score": float(similarities[idx])
        })

    return results