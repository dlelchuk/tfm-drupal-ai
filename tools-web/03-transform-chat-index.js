#!/usr/bin/env node

/**
 * 03-transform-chat-index.js
 *
 * Transforma la página /es/chat/index.html.
 *
 * - Sustituye la imagen principal.
 * - Inserta el contenedor del chat.
 * - Añade chat.css.
 * - Añade chat.js.
 */

const {
    getWebFile,
    readHtmlFile,
    writeHtmlFile
} = require("./lib/files");

const {
    loadHtml,
    saveHtml,
    appendStyle,
    appendScript
} = require("./lib/cheerio");

const logger = require("./lib/logger");

logger.printHeader("03-transform-chat-index");

const page = getWebFile("es", "chat", "index.html");

const html = readHtmlFile(page);
const $ = loadHtml(html);

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

const header = $(".advancedheader_wrapper").first();

if (!header.length) {
    throw new Error("No se encontró .advancedheader_wrapper");
}

header.attr(
    "style",
    "background-image:url('/assets/img/chat.png');"
);

/* -------------------------------------------------------------------------- */
/* Contenedor del chat                                                        */
/* -------------------------------------------------------------------------- */

const content = $(".col-md-9.contentsubpage");

if (!content.length) {
    throw new Error("No se encontró .contentsubpage");
}

content.html(`
<div id="chat-app"></div>
`);

/* -------------------------------------------------------------------------- */
/* Recursos                                                                    */
/* -------------------------------------------------------------------------- */

appendStyle($, "/assets/chat/chat.css");
appendScript($, "/assets/chat/chat.js");

/* -------------------------------------------------------------------------- */

writeHtmlFile(
    page,
    saveHtml($)
);

logger.printSummary({
    modifiedFiles: 1,
    removedElements: 0
});