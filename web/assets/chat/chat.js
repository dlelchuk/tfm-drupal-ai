"use strict";

/**
 * Chat Widget
 */

const CHAT_BASE = "/assets/chat/";

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
  };

  let elements = {};

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

      window: document.getElementById("chat-window"),

      start: document.getElementById("chat-start"),

      messages: document.getElementById("chat-messages"),

      input: document.getElementById("chat-input"),

      send: document.getElementById("chat-send"),

      thinking: document.getElementById("chat-thinking"),

      newConversation: document.getElementById("chat-new"),

      modal: document.getElementById("chat-modal"),

      modalCancel: document.getElementById("chat-modal-cancel"),

      modalConfirm: document.getElementById("chat-modal-confirm"),
    };
  }

  // ---------------------------------------------------------------------
  // Mensajes
  // ---------------------------------------------------------------------

  function addMessage(role, text) {
    state.history.push({
      role,
      content: text,
    });

    const message = document.createElement("div");
    message.className = `chat-message chat-${role}`;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";

    bubble.textContent = text;

    message.appendChild(bubble);

    elements.messages.appendChild(message);

    elements.messages.scrollTop = elements.messages.scrollHeight;
  }

  function addUserMessage(text) {
    addMessage("user", text);
  }

  function addAssistantMessage(text) {
    addMessage("assistant", text);
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
      Math.min(elements.input.scrollHeight, 180) + "px";
  }

  // ---------------------------------------------------------------------
  // Respuesta simulada
  // ---------------------------------------------------------------------

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getAssistantResponse(message) {
    await sleep(2000);

    return `Respuesta simulada para:\n\n"${message}"`;
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
      const response = await getAssistantResponse(text);

      addAssistantMessage(response);
    } finally {
      setWaiting(false);

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
      "Hola. Soy el asistente del proyecto EQui-T. Puedo ayudarle a crear recursos educativos accesibles utilizando las recomendaciones del catálogo de criterios. ¿Sobre qué tipo de recurso desea trabajar?",
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
