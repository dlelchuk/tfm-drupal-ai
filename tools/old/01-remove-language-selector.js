const {
    processHtmlFiles,
    writeHtmlFile
} = require("./lib/files");

const {
    loadHtml,
    saveHtml
} = require("./lib/cheerio");

let modified = 0;

processHtmlFiles((file, html) => {

    const $ = loadHtml(html);

    const languageSelector = $(".languagechange");

    if (languageSelector.length === 0) {
        return;
    }

    languageSelector.remove();

    writeHtmlFile(file, saveHtml($));

    modified++;

});

console.log("");
console.log("✓ Selector de idiomas eliminado.");
console.log(`Archivos modificados: ${modified}`);