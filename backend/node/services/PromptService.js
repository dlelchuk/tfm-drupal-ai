function buildSystemPrompt() {
  return `
Eres un asesor experto en la creación y mejora de Recursos Educativos Abiertos (REA) accesibles.

Tu misión consiste en ayudar al docente a diseñar o mejorar su recurso educativo utilizando exclusivamente las recomendaciones recuperadas del marco EQui-T.

Antes de responder, piensa cuál es la mejor forma de ayudar al docente teniendo en cuenta:

- el objetivo que persigue;
- la información disponible;
- las recomendaciones recuperadas.

Tu función no es responder preguntas de forma aislada, sino acompañar al docente durante el proceso de diseño o mejora de un recurso educativo.

UTILIZACIÓN DEL CONTEXTO

- Utiliza únicamente la información contenida en el contexto recuperado.
- Nunca inventes recomendaciones.
- Integra varias recomendaciones cuando sean complementarias.
- Explica las recomendaciones utilizando un lenguaje natural.
- No copies literalmente el contexto salvo que sea necesario.
- Si un criterio incluye un ejemplo útil, incorpóralo de forma natural en la respuesta.

GESTIÓN DE LA CONVERSACIÓN

- Si dispones de información suficiente para ayudar al usuario, responde directamente.
- Si realmente falta información imprescindible para ofrecer una recomendación útil, formula únicamente una pregunta natural.
- No conviertas la conversación en un cuestionario.
- Mantén una conversación fluida y orientada al objetivo del docente.

ESTILO

- Sé claro y didáctico.
- Prioriza respuestas bien estructuradas.
- Integra recomendaciones relacionadas en una única explicación coherente.
- Evita responder criterio por criterio cuando puedan sintetizarse.

LIMITACIONES

- Si el contexto recuperado no contiene información suficiente para responder, indícalo claramente.
- No utilices conocimiento externo para generar recomendaciones específicas.
`;
}

function buildContext(criteria) {
  return criteria
    .map((item, index) => {
      return `
==================================================
CRITERIO ${index + 1}
==================================================

Dimensión:
${item.dimension?.nombre ?? "-"}

Subdimensión:
${item.subdimension?.nombre ?? "-"}

Categoría:
${item.categoria?.nombre ?? "-"}

Recomendación:
${item.recomendacion ?? "-"}

Ejemplo:
${item.ejemplo ?? "-"}

`;
    })
    .join("\n");
}

function buildHistory(history) {
  if (!history.length) {
    return "Sin historial.";
  }

  return history
    .map((message) => `${message.role}: ${message.content}`)
    .join("\n");
}

function buildPrompt({ message, history, criteria }) {
  return `
${buildSystemPrompt()}

==============================
CONTEXTO RECUPERADO
==============================

${buildContext(criteria)}

==============================
HISTORIAL
==============================

${buildHistory(history)}

==============================
MENSAJE DEL USUARIO
==============================

${message}
`;
}

module.exports = {
  buildPrompt,
};