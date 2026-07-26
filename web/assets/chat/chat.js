"use strict";

/**
 * Chat Widget
 */

const CHAT_TRANSITION_DURATION = 180;

const CHAT_BASE = "/assets/chat/";
/* global HtmlNormalizer */

const ChatWidget = (() => {
  // ---------------------------------------------------------------------
  // Estado
  // ---------------------------------------------------------------------

  const state = {
    sessionId: null,

    active: false,

    waitingResponse: false,

    thinkingTimer: null,

    history: [],

    expander: false,
  };

  let elements = {};

  let previousFocus = null;

  // ---------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------

  async function loadHtml(file) {
    const response = await fetch(CHAT_BASE + file);

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${CHAT_BASE}${file}`);
    }

    return response.text();
  }

  function cacheElements() {
    elements = {
      welcome: document.getElementById("chat-welcome"),

      widget: document.getElementById("chat-widget"),

      window: document.getElementById("chat-window"),

      start: document.getElementById("chat-start"),

      messages: document.getElementById("chat-messages"),

      input: document.getElementById("chat-input"),

      send: document.getElementById("chat-send"),

      thinking: document.getElementById("chat-thinking"),

      newConversation: document.getElementById("chat-new"),

      expand: document.getElementById("chat-expand"),

      focusBackdrop: document.getElementById("chat-focus-backdrop"),

      modal: document.getElementById("chat-modal"),

      modalCancel: document.getElementById("chat-modal-cancel"),

      modalConfirm: document.getElementById("chat-modal-confirm"),
    };
  }

  // ---------------------------------------------------------------------
  // Mensajes
  // ---------------------------------------------------------------------

  function addMessage(role, text, renderHtml = false) {
    const message = document.createElement("div");
    message.className = `chat-message chat-${role}`;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";

    if (renderHtml) {
      const normalized = HtmlNormalizer.normalize(text);

      const sanitized = DOMPurify.sanitize(normalized, {
        ALLOWED_TAGS: [
          "p",
          "br",
          "strong",
          "b",
          "em",
          "i",
          "u",
          "ul",
          "ol",
          "li",
          "blockquote",
          "code",
          "pre",
          "a",
        ],
        ALLOWED_ATTR: ["href", "title", "target", "rel"],
        ALLOW_DATA_ATTR: false,
        ALLOW_ARIA_ATTR: false,
        FORBID_TAGS: [
          "style",
          "script",
          "iframe",
          "object",
          "embed",
          "form",
          "input",
          "button",
          "textarea",
          "select",
          "svg",
          "math",
        ],
      });

      bubble.innerHTML = sanitized;

      bubble.querySelectorAll("a").forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });

      state.history.push({
        role,
        content: HtmlNormalizer.toPlainText(sanitized),
      });
    } else {
      bubble.textContent = text;

      state.history.push({
        role,
        content: text,
      });
    }

    message.appendChild(bubble);

    elements.messages.appendChild(message);

    elements.messages.scrollTop = elements.messages.scrollHeight;
  }

  function addUserMessage(text) {
    addMessage("user", text, false);
  }

  function addAssistantMessage(text) {
    addMessage("assistant", text, true);
  }

  function createAssistantMessage() {
    const message = document.createElement("div");
    message.className = "chat-message chat-assistant";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";

    message.appendChild(bubble);

    elements.messages.appendChild(message);

    elements.messages.scrollTop = elements.messages.scrollHeight;

    return bubble;
  }

  function renderAssistantBubble(bubble, text) {
    const normalized = HtmlNormalizer.normalize(text);

    const sanitized = DOMPurify.sanitize(normalized, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "ul",
        "ol",
        "li",
        "blockquote",
        "code",
        "pre",
        "a",
      ],
      ALLOWED_ATTR: ["href", "title", "target", "rel"],
      ALLOW_DATA_ATTR: false,
      ALLOW_ARIA_ATTR: false,
      FORBID_TAGS: [
        "style",
        "script",
        "iframe",
        "object",
        "embed",
        "form",
        "input",
        "button",
        "textarea",
        "select",
        "svg",
        "math",
      ],
    });

    bubble.innerHTML = sanitized;

    bubble.querySelectorAll("a").forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    elements.messages.scrollTop = elements.messages.scrollHeight;
  }

  // ---------------------------------------------------------------------
  // Estado de espera
  // ---------------------------------------------------------------------

  function setWaiting(waiting) {
    state.waitingResponse = waiting;

    elements.input.disabled = waiting;

    elements.send.disabled = waiting;

    elements.send.textContent = waiting ? "Esperando..." : "Enviar";

    elements.thinking.hidden = !waiting;

    if (waiting) {
      let dots = 0;

      elements.thinking.textContent = "Pensando";

      state.thinkingTimer = setInterval(() => {
        dots = (dots + 1) % 4;

        elements.thinking.textContent = "Pensando" + ".".repeat(dots);
      }, 300);
    } else {
      clearInterval(state.thinkingTimer);

      state.thinkingTimer = null;

      elements.thinking.textContent = "Pensando...";
    }
  }

  // ---------------------------------------------------------------------
  // Ajuste automático del textarea
  // ---------------------------------------------------------------------

  function resizeInput() {
    elements.input.style.height = "auto";

    elements.input.style.height =
      Math.min(elements.input.scrollHeight, CHAT_TRANSITION_DURATION) + "px";
  }

  // ---------------------------------------------------------------------
  // Envío de mensajes
  // ---------------------------------------------------------------------

  async function sendMessage() {
    if (state.waitingResponse) {
      return;
    }

    const text = elements.input.value.trim();

    if (!text) {
      return;
    }

    addUserMessage(text);

    elements.input.value = "";
    resizeInput();

    setWaiting(true);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: state.history,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      const bubble = createAssistantMessage();

      let reply = "";
      let firstChunk = true;

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        if (firstChunk) {
          firstChunk = false;
          setWaiting(false);
        }

        reply += decoder.decode(value, {
          stream: true,
        });

        renderAssistantBubble(bubble, reply);
      }

      state.history.push({
        role: "assistant",
        content: HtmlNormalizer.toPlainText(reply),
      });
    } catch (error) {
      console.error(error);

      addAssistantMessage(
        "<p>Se produjo un error al contactar con el asistente.</p>",
      );
    } finally {
      if (state.waitingResponse) {
        setWaiting(false);
      }

      elements.input.focus();
    }
  }

  // ---------------------------------------------------------------------
  // Conversación
  // ---------------------------------------------------------------------

  function startConversation() {
    state.active = true;

    state.history = [];

    elements.welcome.hidden = true;

    elements.window.hidden = false;

    addAssistantMessage(
      "<p>Hola. Soy el asistente del proyecto EQui-T. Puedo ayudarle a crear recursos educativos accesibles utilizando las recomendaciones del catálogo de criterios. ¿Sobre qué tipo de recurso desea trabajar?</p>",
    );

    elements.input.focus();
    resizeInput();
  }

  function showModal() {
    if (!state.active) {
      return;
    }

    elements.modal.hidden = false;
  }

  function hideModal() {
    elements.modal.hidden = true;
  }

  function resetConversation() {
    state.sessionId = null;

    state.active = false;

    state.waitingResponse = false;

    state.history = [];

    elements.messages.replaceChildren();

    elements.input.value = "";

    resizeInput();

    elements.input.disabled = false;

    elements.send.disabled = false;

    elements.thinking.hidden = true;

    elements.window.hidden = true;

    elements.welcome.hidden = false;

    hideModal();
  }

  // ---------------------------------------------------------------------
  // Modo expandido
  // ---------------------------------------------------------------------

  /**
   * Actualiza el icono y los atributos del botón de expandir.
   */
  function updateExpandButton() {
    const expanded = state.expanded;

    elements.expand.replaceChildren(
      expanded ? ChatIcons.collapse() : ChatIcons.expand(),
    );

    elements.expand.title = expanded
      ? "Salir del modo expandido"
      : "Expandir chat";

    elements.expand.setAttribute(
      "aria-label",
      expanded ? "Salir del modo expandido" : "Expandir chat",
    );

    elements.expand.setAttribute("aria-expanded", String(expanded));
  }
  /**
   * Obtiene los elementos enfocables del chat.
   */
  function getFocusableElements() {
    return elements.widget.querySelectorAll(
      'button:not([disabled]), textarea:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
  }
  /**
   * Mantiene el foco dentro del diálogo expandido.
   */
  function trapFocus(event) {
    if (!state.expanded || event.key !== "Tab") {
      return;
    }

    const focusable = [...getFocusableElements()];

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();

        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();

        first.focus();
      }
    }
  }
  /**
   * Activa el modo expandido.
   */
  function expandChat() {
    if (state.expanded) {
      return;
    }

    state.expanded = true;

    previousFocus = document.activeElement;

    state.scrollY = window.scrollY;

    document.body.classList.add("chat-expanded");

    elements.widget.classList.add("chat-expanded");

    elements.focusBackdrop.hidden = false;

    requestAnimationFrame(() => {
      elements.focusBackdrop.classList.add("chat-visible");
    });

    elements.widget.setAttribute("role", "dialog");
    elements.widget.setAttribute("aria-modal", "true");

    updateExpandButton();

    elements.input.focus();
  }
  /**
   * Desactiva el modo expandido.
   */
  function collapseChat() {
    if (!state.expanded) {
      return;
    }

    state.expanded = false;

    document.body.classList.remove("chat-expanded");

    window.scrollTo({
      top: state.scrollY,
      behavior: "instant",
    });

    elements.widget.classList.remove("chat-expanded");

    elements.focusBackdrop.classList.remove("chat-visible");

    const onTransitionEnd = () => {
      elements.focusBackdrop.hidden = true;

      elements.focusBackdrop.removeEventListener(
        "transitionend",
        onTransitionEnd,
      );
    };

    elements.focusBackdrop.addEventListener("transitionend", onTransitionEnd);

    elements.widget.removeAttribute("role");
    elements.widget.removeAttribute("aria-modal");

    updateExpandButton();

    if (previousFocus) {
      try {
        previousFocus.focus({
          preventScroll: true,
        });
      } catch {
        previousFocus.focus();
      }
    }
  }
  /**
   * Alterna el modo expandido.
   */
  function toggleExpand() {
    if (state.expanded) {
      collapseChat();
    } else {
      expandChat();
    }
  }

  // ---------------------------------------------------------------------
  // Eventos
  // ---------------------------------------------------------------------

  function bindEvents() {
    elements.start.addEventListener("click", startConversation);

    elements.send.addEventListener("click", sendMessage);

    elements.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();

        sendMessage();
      }
    });

    elements.input.addEventListener("input", resizeInput);

    elements.newConversation.addEventListener("click", showModal);

    elements.modalCancel.addEventListener("click", hideModal);

    elements.modalConfirm.addEventListener("click", resetConversation);

    elements.expand.addEventListener("click", toggleExpand);

    elements.focusBackdrop.addEventListener("click", collapseChat);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        collapseChat();

        return;
      }

      trapFocus(event);
    });
  }

  // ---------------------------------------------------------------------
  // Inicialización
  // ---------------------------------------------------------------------

  async function loadInterface() {
    const container = document.getElementById("chat-app");

    if (!container) {
      throw new Error("No existe #chat-app");
    }

    container.innerHTML = await loadHtml("chat-content.html");

    cacheElements();

    elements.expand.appendChild(ChatIcons.expand());

    elements.newConversation.appendChild(ChatIcons.newConversation());

    updateExpandButton();

    bindEvents();
  }

  return {
    async start() {
      try {
        await loadInterface();

        console.log("Chat inicializado.");
      } catch (error) {
        console.error(error);
      }
    },
  };
})();

document.addEventListener("DOMContentLoaded", () => ChatWidget.start());
