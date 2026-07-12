# Arquitectura del Asistente Inteligente para la Creación de REA Accesibles

## Objetivo

El sistema implementa un asistente conversacional basado en Retrieval-Augmented Generation (RAG) cuyo propósito es ayudar a docentes en la creación y adaptación de Recursos Educativos Abiertos (REA) accesibles, utilizando como fuente de conocimiento el marco EQui-T.

La arquitectura se ha diseñado siguiendo una estrategia modular basada en la separación de responsabilidades, facilitando el mantenimiento, la evolución del sistema y la sustitución independiente de sus componentes.

---

## Arquitectura lógica

```
Usuario
    │
    ▼
Frontend
    │
    ▼
Node.js (Express)
    │
    ▼
ChatController
    ├── RagService
    ├── PromptService
    ├── AIService
    └── SessionManager
          │
          ├──────────────► FastAPI (RAG)
          │                     │
          │                     ▼
          │          Embeddings + CrossEncoder
          │                     │
          │                     ▼
          │             Base de conocimiento
          │
          └──────────────► Gemini
```

---

## Arquitectura de despliegue

La aplicación se ejecuta mediante contenedores Docker independientes.

```
Internet
    │
    ▼
Cloudflare
    │
    ▼
Cloudflare Tunnel
    │
    ▼
Backend (Node.js)
    │
    ▼
Python API (FastAPI)
```

Cloudflare Tunnel publica el backend en Internet sin necesidad de abrir puertos en el router ni exponer directamente la dirección IP del servidor.

---

## Responsabilidades

### Frontend

Implementa la interfaz de usuario del asistente.

Recoge las consultas del usuario y muestra las respuestas generadas por el sistema.

No contiene lógica de inteligencia artificial.

---

### server.js

Responsable únicamente de:

- configuración del servidor;
- registro del middleware;
- definición de rutas;
- publicación del frontend;
- inicio de la aplicación.

No contiene lógica de negocio.

---

### ChatController

Coordina el flujo completo de cada conversación.

Su responsabilidad consiste en orquestar los distintos servicios del sistema.

No implementa algoritmos de recuperación ni generación de respuestas.

---

### RagService

Gestiona la comunicación con la API Python.

Solicita la recuperación de los criterios más relevantes y devuelve los resultados al controlador.

No conoce el modelo de lenguaje.

No construye prompts.

---

### PromptService

Construye dinámicamente el prompt enviado al modelo de lenguaje.

Integra:

- el comportamiento del asistente;
- el contexto recuperado;
- el historial de conversación;
- la consulta del usuario.

---

### AIService

Gestiona la comunicación con Gemini.

Su responsabilidad incluye:

- enviar el prompt al modelo de lenguaje;
- gestionar reintentos cuando un modelo no está disponible;
- seleccionar automáticamente el siguiente modelo configurado cuando se produce un error temporal.

---

### SessionManager

Administra las sesiones de conversación.

Mantiene:

- historial de mensajes;
- estadísticas básicas;
- tiempo de actividad;
- limpieza automática de sesiones inactivas.

---

### Python API

Implementa exclusivamente la recuperación semántica.

Su responsabilidad incluye:

- generar el embedding de la consulta;
- recuperar candidatos mediante similitud del coseno;
- aplicar re-ranking mediante CrossEncoder;
- devolver los criterios más relevantes.

No conoce la conversación.

No construye prompts.

No genera respuestas.

---

### Base de conocimiento

Contiene las recomendaciones del marco EQui-T junto con sus embeddings previamente calculados.

Los embeddings se generan offline y se cargan en memoria durante el inicio de la aplicación para minimizar el tiempo de respuesta de las consultas.

---

## Principios de diseño

La arquitectura sigue los siguientes principios:

- separación de responsabilidades;
- modularidad;
- bajo acoplamiento;
- alta cohesión;
- responsabilidad única (Single Responsibility Principle).

Cada componente posee una función claramente definida y puede evolucionar de forma independiente sin afectar al resto del sistema.