const cheerio = require("cheerio");

/**
 * Carga un documento HTML en Cheerio.
 */
function loadHtml(html) {
    return cheerio.load(html, {
        decodeEntities: false
    });
}

/**
 * Convierte el DOM nuevamente a HTML.
 */
function saveHtml($) {
    return $.html();
}

/**
 * Cuenta los elementos encontrados para cada selector.
 *
 * Ejemplo:
 * {
 *   searchButton: ".bt_topitem.searchbtn",
 *   searchBox: ".searchboxcontainer"
 * }
 */
function countElements($, selectors) {

    const result = {};

    for (const [name, selector] of Object.entries(selectors)) {
        result[name] = $(selector).length;
    }

    return result;

}

/**
 * Elimina los elementos correspondientes a los selectores.
 *
 * Recibe un objeto:
 * {
 *   nombre: "selector"
 * }
 *
 * Devuelve el número total de elementos eliminados.
 */
function removeElements($, selectors) {

    let removed = 0;

    for (const selector of Object.values(selectors)) {

        const elements = $(selector);

        removed += elements.length;

        elements.remove();

    }

    return removed;

}

/**
 * Añade un bloque HTML al final del <body>.
 */
function appendToBody($, html) {

    $("body").append(html);

}

/**
 * Añade un script al final del <body>.
 * Si ya existe un script con el mismo src, no hace nada.
 */
function appendScript($, src) {

    if ($(`script[src="${src}"]`).length > 0) {
        return false;
    }

    appendToBody(
        $,
        `<script src="${src}"></script>`
    );

    return true;

}

/**
 * Añade una hoja de estilos al <head>.
 * Si ya existe un link con el mismo href, no hace nada.
 */
function appendStyle($, href) {

    if ($(`link[href="${href}"]`).length > 0) {
        return false;
    }

    $("head").append(
        `<link rel="stylesheet" href="${href}">`
    );

    return true;

}

/**
 * Comprueba si existe al menos un elemento para un selector.
 */
function exists($, selector) {

    return $(selector).length > 0;

}

module.exports = {
    loadHtml,
    saveHtml,
    countElements,
    removeElements,
    appendToBody,
    appendScript,
    appendStyle,
    exists
};