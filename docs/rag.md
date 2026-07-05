# Arquitectura RAG

## Objetivo

Maximizar la recuperación de recomendaciones relevantes minimizando la pérdida de información.

El objetivo principal del sistema no es únicamente obtener el criterio más parecido, sino reducir al máximo la probabilidad de dejar fuera recomendaciones importantes.

---

## Pipeline

Usuario

↓

Embedding de la consulta

↓

Recuperación de candidatos mediante similitud coseno

↓

Top 25 candidatos

↓

CrossEncoder

↓

Re-ranking

↓

Top 8 criterios

↓

Prompt

↓

Gemini

---

## Primera etapa

Modelo:

sentence-transformers/paraphrase-multilingual-mpnet-base-v2

Responsabilidad:

Maximizar Recall.

---

## Segunda etapa

Modelo:

cross-encoder/ms-marco-MiniLM-L-6-v2

Responsabilidad:

Incrementar precisión.

El CrossEncoder evalúa simultáneamente la consulta y cada criterio recuperado.

---

## Contexto enviado al LLM

Cada criterio mantiene toda su estructura:

- dimensión
- subdimensión
- categoría
- recomendación
- ejemplo

Nunca se envían únicamente frases aisladas.

---

## Mejoras futuras

- Boosting mediante metadatos.
- Análisis previo de intención.
- Filtros por categoría.
- Context Compression.