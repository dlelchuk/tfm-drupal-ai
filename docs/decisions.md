# Decisiones de diseño

## Arquitectura

Se adopta una arquitectura basada en servicios independientes.

Motivo:

Separar responsabilidades, reducir el acoplamiento y facilitar el mantenimiento y la evolución del sistema.

---

## Recuperación de información (RAG)

La recuperación se implementa en dos etapas:

Embeddings

+

CrossEncoder

Motivo:

Maximizar la recuperación de recomendaciones relevantes y mejorar la precisión de los resultados antes de construir el prompt.

---

## Modelo de lenguaje

Gemini se utiliza exclusivamente para la generación de respuestas.

No participa en la recuperación de información.

Motivo:

Separar el proceso de recuperación del proceso de generación para reducir alucinaciones y garantizar que las recomendaciones procedan de la base de conocimiento.

---

## API de recuperación

Toda la recuperación semántica se implementa en una API independiente desarrollada con FastAPI.

Motivo:

Aprovechar el ecosistema de bibliotecas de Machine Learning de Python y desacoplar la lógica RAG del backend principal.

---

## Backend

Node.js coordina el flujo completo de la conversación.

Motivo:

Centralizar la orquestación del sistema, la gestión de sesiones y la comunicación entre los distintos componentes.

---

## Prompt

El prompt se construye dinámicamente para cada consulta.

Motivo:

Adaptar el contexto enviado al modelo de lenguaje a la conversación y a las recomendaciones recuperadas.

---

## Despliegue

La aplicación se distribuye mediante contenedores Docker independientes.

El acceso desde Internet se realiza mediante Cloudflare Tunnel.

Motivo:

Facilitar el despliegue, aislar los distintos servicios y publicar la aplicación sin necesidad de abrir puertos en el router.

---

## Filosofía del asistente

El objetivo del sistema no es responder preguntas generales sobre accesibilidad.

Su finalidad consiste en acompañar al docente durante el proceso de creación y adaptación de Recursos Educativos Abiertos accesibles utilizando las recomendaciones del marco EQui-T.

---

## Principios de diseño

- Separación de responsabilidades.
- Modularidad.
- Bajo acoplamiento.
- Alta cohesión.
- Responsabilidad única (Single Responsibility Principle).