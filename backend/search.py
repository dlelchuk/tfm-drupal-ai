import sys
import json
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# =============================
# CONFIG
# =============================
DATA_PATH = "data/data.json"
TOP_K = 3

# =============================
# VALIDAR INPUT
# =============================
if len(sys.argv) < 2:
    print(json.dumps({"error": "No query provided"}))
    sys.exit(1)

query = sys.argv[1]

# =============================
# CARGAR MODELO
# =============================
model = SentenceTransformer('all-MiniLM-L6-v2')

# =============================
# CARGAR EMBEDDINGS
# =============================
with open(DATA_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

embeddings = np.array([item["embedding"] for item in data])
texts = [item["text"] for item in data]

# =============================
# EMBEDDING QUERY
# =============================
query_embedding = model.encode([query])

# =============================
# SIMILITUD COSENO
# =============================
similarities = cosine_similarity(query_embedding, embeddings)[0]

# =============================
# TOP K RESULTADOS
# =============================
top_indices = similarities.argsort()[-TOP_K:][::-1]

results = []
for idx in top_indices:
    results.append({
        "text": texts[idx],
        "score": float(similarities[idx])
    })

# =============================
# OUTPUT (IMPORTANTE: SOLO JSON)
# =============================
print(json.dumps(results, ensure_ascii=False))