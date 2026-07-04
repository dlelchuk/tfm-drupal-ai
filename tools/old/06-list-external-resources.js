const path = require("path");

const {
    processHtmlFiles
} = require("./lib/files");

const {
    loadHtml
} = require("./lib/cheerio");

const SCRIPT_NAME = path.basename(__filename, ".js");

const resources = {
    css: new Set(),
    js: new Set(),
    images: new Set(),
    iframes: new Set(),
    other: new Set()
};

const domains = new Map();

processHtmlFiles((file, html) => {

    const $ = loadHtml(html);

    collect($, 'link[rel="stylesheet"][href]', "href", resources.css);
    collect($, "script[src]", "src", resources.js);
    collect($, "img[src]", "src", resources.images);
    collect($, "iframe[src]", "src", resources.iframes);
    collect($, "source[src]", "src", resources.other);

});

printHeader();
printSection("CSS", resources.css);
printSection("JavaScript", resources.js);
printSection("Imágenes", resources.images);
printSection("IFrames", resources.iframes);
printSection("Otros", resources.other);
printDomains();

function collect($, selector, attribute, target) {

    $(selector).each((_, element) => {

        const url = $(element).attr(attribute);

        if (!url || !url.startsWith("http")) {
            return;
        }

        target.add(url);

        try {

            const hostname = new URL(url).hostname;

            domains.set(
                hostname,
                (domains.get(hostname) || 0) + 1
            );

        } catch {

            // Ignorar URLs inválidas

        }

    });

}

function printHeader() {

    console.log("");
    console.log("========================================");
    console.log(SCRIPT_NAME);
    console.log("========================================");

}

function printSection(title, items) {

    console.log("");
    console.log(title);
    console.log("-".repeat(title.length));

    if (items.size === 0) {

        console.log("(ninguno)");
        return;

    }

    [...items]
        .sort()
        .forEach(item => console.log(item));

}

function printDomains() {

    console.log("");
    console.log("Dominios");
    console.log("---------");

    if (domains.size === 0) {

        console.log("(ninguno)");
        return;

    }

    [...domains.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([domain, count]) => {

            console.log(`${domain} (${count})`);

        });

}