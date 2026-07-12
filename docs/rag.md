# Arquitectura RAG

## Objetivo

El sistema implementa una arquitectura Retrieval-Augmented Generation (RAG) cuyo objetivo es recuperar las recomendaciones más relevantes de la base de conocimiento antes de solicitar la generación de una respuesta al modelo de lenguaje.

La recuperación se realiza en dos etapas para maximizar la cobertura de resultados relevantes y mejorar su precisión.

---

## Pipeline

```
Consulta del usuario
        │
        ▼
Embedding de la consulta
        │
        ▼
Similitud del coseno
        │
        ▼
Top 25 candidatos
        │
        ▼
CrossEncoder
        │
        ▼
Re-ranking
        │
        ▼
Top 8 criterios
        │
        ▼
Construcción del prompt
        │
        ▼
Gemini
```

---

## Primera etapa: recuperación

Modelo:

`sentence-transformers/paraphrase-multilingual-mpnet-base-v2`

Responsabilidad:

- generar el embedding de la consulta;
- calcular la similitud del coseno con todos los embeddings almacenados;
- recuperar los candidatos más relevantes.

El objetivo de esta etapa es maximizar el *recall*, recuperando un conjunto amplio de recomendaciones potencialmente relevantes.

---

## Segunda etapa: re-ranking

Modelo:

`cross-encoder/ms-marco-MiniLM-L-6-v2`

Responsabilidad:

- evaluar conjuntamente la consulta y cada criterio recuperado;
- recalcular la relevancia de cada candidato;
- ordenar los resultados según su relevancia semántica.

El objetivo de esta etapa es incrementar la precisión de los resultados finales.

---

## Contexto enviado al modelo de lenguaje

Cada criterio mantiene toda su estructura original:

- dimensión;
- subdimensión;
- categoría;
- recomendación;
- ejemplo.

El sistema nunca envía únicamente frases aisladas o fragmentos de texto descontextualizados.

---

## Separación de responsabilidades

La API RAG es responsable exclusivamente de recuperar información relevante.

No conoce:

- el historial de conversación;
- el prompt;
- el modelo de lenguaje;
- la respuesta final generada para el usuario.

La generación de la respuesta corresponde exclusivamente al backend.

---

## Mejoras futuras

La arquitectura permite incorporar futuras mejoras sin modificar el resto del sistema, por ejemplo:

- boosting mediante metadatos;
- detección de intención del usuario;
- filtros por categorías;
- compresión del contexto antes de enviarlo al modelo de lenguaje.