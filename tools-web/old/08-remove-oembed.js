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

const OEMBED_SELECTORS = {
    bundle: 'script[src*="oembed.uni-graz.at"]'
};

let modifiedFiles = 0;
let removedElements = 0;

processHtmlFiles((file, html) => {

    const $ = loadHtml(html);

    const removed = removeElements($, OEMBED_SELECTORS);

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