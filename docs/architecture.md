# Arquitectura del Asistente Inteligente para la Creación de REA Accesibles

## Objetivo

El sistema implementa un asistente conversacional basado en Retrieval-Augmented Generation (RAG) cuyo propósito es ayudar a docentes en la creación y adaptación de Recursos Educativos Abiertos (REA) accesibles, utilizando como fuente de conocimiento el marco EQui-T.

---

## Arquitectura general

Frontend
↓
Node.js (Express)
↓
ChatController
├── RagService
├── PromptService
└── AIService
↓
Gemini

RagService
↓
FastAPI
↓
Embeddings + CrossEncoder
↓
Knowledge Base

---

## Responsabilidades

### server.js

Responsable únicamente de:

- configuración
- middleware
- registro de rutas
- inicio del servidor

No contiene lógica de negocio.

---

### chatRoutes

Define los endpoints REST del asistente.

---

### ChatController

Coordina el flujo completo.

No implementa lógica de IA.

Su misión consiste únicamente en orquestar los distintos servicios.

---

### RagService

Se comunica con la API Python.

Obtiene los criterios relevantes.

No conoce Gemini.

No construye prompts.

---

### PromptService

Construye el contexto enviado al LLM.

Define completamente el comportamiento del asistente.

---

### AIService

Encapsula el acceso al modelo de lenguaje.

Permite sustituir Gemini por cualquier otro modelo sin modificar el resto del sistema.

---

### Python API

Responsable exclusivamente de la recuperación semántica.

No genera respuestas.

No conoce el prompt.

No conoce la conversación.

---

## Principio fundamental

Cada componente posee una única responsabilidad.

La arquitectura sigue el principio Single Responsibility Principle (SRP).