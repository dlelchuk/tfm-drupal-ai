const path = require("path");

const {
    processHtmlFiles,
    writeHtmlFile
} = require("./lib/files");

const {
    loadHtml,
    saveHtml,
    removeElements,
    appendScript
} = require("./lib/cheerio");

const {
    printHeader,
    printSummary
} = require("./lib/logger");

const SCRIPT_NAME = path.basename(__filename, ".js");

const MAIN_SCRIPT_SELECTORS = {
    mainScript: 'script[src*="Main_Home_2022.js"]'
};

let modifiedFiles = 0;
let removedElements = 0;

processHtmlFiles((file, html) => {

    const $ = loadHtml(html);

    const removed = removeElements($, MAIN_SCRIPT_SELECTORS);

    if (removed === 0) {
        return;
    }

    appendScript($, "/assets/js/main.js");

    writeHtmlFile(file, saveHtml($));

    modifiedFiles++;
    removedElements += removed;

});

printHeader(SCRIPT_NAME);

printSummary({
    modifiedFiles,
    removedElements
});