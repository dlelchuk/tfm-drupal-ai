const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const WEB_DIR = path.resolve(__dirname, "../../web");

/**
 * Devuelve la ruta absoluta de un archivo dentro de /web.
 */
function getWebFile(...segments) {
    return path.join(WEB_DIR, ...segments);
}

/**
 * Devuelve todos los archivos index.html del sitio.
 */
function getHtmlFiles() {
    return globSync("**/index.html", {
        cwd: WEB_DIR,
        absolute: true
    }).sort();
}

/**
 * Lee un archivo HTML.
 */
function readHtmlFile(file) {
    return fs.readFileSync(file, "utf8");
}

/**
 * Guarda un archivo HTML.
 */
function writeHtmlFile(file, content) {
    fs.writeFileSync(file, content, "utf8");
}

/**
 * Recorre todos los archivos HTML del sitio.
 */
function processHtmlFiles(callback) {
    for (const file of getHtmlFiles()) {
        const html = readHtmlFile(file);
        callback(file, html);
    }
}

module.exports = {
    WEB_DIR,
    getWebFile,
    getHtmlFiles,
    readHtmlFile,
    writeHtmlFile,
    processHtmlFiles
};