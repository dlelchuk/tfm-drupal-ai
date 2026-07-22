"use strict";

/**
 * Iconos del chat.
 */

const ChatIcons = (() => {
  const ICON_BASE = "/assets/chat/icons/";

  function create(src, alt = "") {
    const img = document.createElement("img");

    img.src = ICON_BASE + src;
    img.alt = alt;
    img.width = 20;
    img.height = 20;
    img.draggable = false;
    img.setAttribute("aria-hidden", alt === "");

    return img;
  }

  return {
    expand() {
      return create("maximize-2.svg");
    },

    collapse() {
      return create("minimize-2.svg");
    },

    newConversation() {
      return create("message-square-plus.svg");
    },
  };
})();