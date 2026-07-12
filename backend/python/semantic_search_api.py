from fastapi import FastAPI
import json
import numpy as np
from sentence_transformers import SentenceTransformer, CrossEncoder
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

@app.get("/health")
def health():
    return {
        "status": "ok",
        "message": "Python API funcionando"
    }

# =============================
# CONFIGURACIÓN
# =============================
TOP_K = 8
RETRIEVAL_K = 25

# =============================
# CARGA GLOBAL (una sola vez)
# =============================
print("🔄 Cargando modelo...")
model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
)

print("🔄 Cargando Cross-Encoder...")
cross_encoder = CrossEncoder(
    "cross-encoder/ms-marco-MiniLM-L-6-v2"
)

print("🔄 Cargando embeddings...")
with open("data/data.json", "r", encoding="utf-8") as f:
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
cross_encoder.predict([("warmup", "warmup")])
print("✅ API lista")

# =============================
# ENDPOINT
# =============================
@app.get("/search")
def search(query: str):

    # -------- Cache --------
    if query in query_cache:
        query_embedding = query_cache[query]
    else:
        query_embedding = model.encode([query])
        query_cache[query] = query_embedding

    # -------- Primera etapa: recuperación por embeddings --------
    similarities = cosine_similarity(query_embedding, embeddings)[0]

    retrieval_k = min(RETRIEVAL_K, len(data))
    candidate_indices = similarities.argsort()[-retrieval_k:][::-1]

    # -------- Segunda etapa: re-ranking --------
    pairs = [
        (query, data[idx]["texto_embedding"])
        for idx in candidate_indices
    ]

    rerank_scores = cross_encoder.predict(pairs)

    reranked = sorted(
        zip(candidate_indices, rerank_scores),
        key=lambda x: x[1],
        reverse=True
    )

    # -------- Resultado final --------
    results = []

    for idx, rerank_score in reranked[:TOP_K]:

        item = data[idx]

        results.append({
            "id": item["id"],
            "dimension": item["dimension"],
            "subdimension": item["subdimension"],
            "categoria": item["categoria"],
            "recomendacion": item["recomendacion"],
            "ejemplo": item["ejemplo"],
            "texto_embedding": item["texto_embedding"],
            "embedding_score": float(similarities[idx]),
            "rerank_score": float(rerank_score)
        })

    print("\n===== RESULTADOS RERANKEADOS =====")

    for r in results:
        print(
            f"ID={r['id']} | "
            f"Emb={r['embedding_score']:.3f} | "
            f"Cross={r['rerank_score']:.3f}"
        )

    print("===============================\n")

    return results