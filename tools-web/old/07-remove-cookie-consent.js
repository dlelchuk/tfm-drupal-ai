const path = require("path");

const {
    processHtmlFiles,
    writeHtmlFile
} = require("./lib/files");

const {
    loadHtml,
    saveHtml,
    removeElements
} = require("./lib/cheerio");

const {
    printHeader,
    printSummary
} = require("./lib/logger");

const SCRIPT_NAME = path.basename(__filename, ".js");

const COOKIE_CONSENT_SELECTORS = {
    library: 'script[src*="webcmp.uni-graz.at/client/library"]',
    components: 'script[src*="webcmp.uni-graz.at/client/components"]'
};

let modifiedFiles = 0;
let removedElements = 0;

processHtmlFiles((file, html) => {

    const $ = loadHtml(html);

    const removed = removeElements($, COOKIE_CONSENT_SELECTORS);

    if (removed === 0) {
        return;
    }

    writeHtmlFile(file, saveHtml($));

    modifiedFiles++;
    removedElements += removed;

});

printHeader(SCRIPT_NAME);

printSummary({
    modifiedFiles,
    removedElements
});