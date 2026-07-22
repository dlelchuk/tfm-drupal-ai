"use strict";

/**
 * HtmlNormalizer
 *
 * Realiza pequeñas transformaciones deterministas sobre el HTML generado
 * por el LLM antes de aplicar DOMPurify.
 *
 * Responsabilidades:
 * - Normalizar formato y espacios.
 * - Convertir URLs en enlaces.
 * - Convertir HTML a texto plano para el historial.
 *
 * No realiza tareas de seguridad. La sanitización corresponde a DOMPurify.
 */

const HtmlNormalizer = (() => {
  /**
   * Punto de entrada principal.
   */
  function normalize(html) {
    if (typeof html !== "string") {
      return "";
    }

    let result = html;

    result = cleanup(result);
    result = normalizeWhitespace(result);
    result = linkify(result);

    return result.trim();
  }

  /**
   * Convierte HTML a texto plano.
   * Se utiliza para almacenar el historial de conversación.
   */
  function toPlainText(html) {
    if (typeof html !== "string") {
      return "";
    }

    const div = document.createElement("div");
    div.innerHTML = html;

    return div.textContent || "";
  }

  /**
   * Limpieza básica del contenido.
   */
  function cleanup(html) {
    const div = document.createElement("div");
    div.innerHTML = html;

    // Eliminar párrafos vacíos
    div.querySelectorAll("p").forEach((p) => {
      const text = p.textContent.replace(/\u00A0/g, "").trim();

      const onlyBreaks =
        p.childNodes.length > 0 &&
        [...p.childNodes].every(
          (node) =>
            node.nodeName === "BR" ||
            (node.nodeType === Node.TEXT_NODE &&
              node.textContent.trim() === ""),
        );

      if (text === "" && onlyBreaks) {
        p.remove();
      }
    });

    return div.innerHTML;
  }

  /**
   * Normaliza espacios y líneas en blanco.
   */
  function normalizeWhitespace(html) {
    return html.replace(/\n{3,}/g, "\n\n");
  }

  /**
   * Convierte URLs en enlaces cuando todavía no forman parte
   * de un atributo href.
   */
  function linkify(html) {
    return html.replace(
      /(?<!href=")(https?:\/\/[^\s<]+)/gi,
      (url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
    );
  }

  return {
    normalize,
    toPlainText,
  };
})();
