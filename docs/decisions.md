# Decisiones de diseño

## Arquitectura

Se adopta una arquitectura basada en servicios independientes.

Motivo:

Reducir acoplamiento y facilitar mantenimiento.

---

## RAG

Se utiliza recuperación en dos etapas:

Embeddings

+

CrossEncoder

Motivo:

Incrementar Recall sin sacrificar Precisión.

---

## LLM

Gemini actúa únicamente como generador de lenguaje.

No participa en la recuperación.

---

## Python

Toda la recuperación semántica se implementa en Python.

Motivo:

Disponibilidad de bibliotecas de Machine Learning.

---

## Node.js

Node coordina el flujo completo.

No implementa algoritmos de recuperación.

---

## Prompt

El prompt se genera dinámicamente.

Nunca se almacena como texto fijo.

---

## Filosofía del asistente

El objetivo del sistema no es responder preguntas sobre accesibilidad.

Su objetivo consiste en acompañar al docente durante la creación de un recurso educativo accesible.

---

## Principios de diseño

- Separación de responsabilidades.
- Modularidad.
- Componentes intercambiables.
- Bajo acoplamiento.
- Alta cohesión.

---

## Evolución prevista

1. Boosting por metadatos.

2. Detección de intención del usuario.

3. Recuperación híbrida.

4. Compresión del contexto.

5. Memoria conversacional persistente.