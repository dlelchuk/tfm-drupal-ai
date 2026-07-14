const path = require("path");

const {
    WEB_DIR,
    getHtmlFiles
} = require("./lib/files");

console.log("Directorio web:");
console.log(WEB_DIR);
console.log("");

const files = getHtmlFiles();

console.log(`Se encontraron ${files.length} archivos:\n`);

for (const file of files) {
    console.log(path.relative(WEB_DIR, file));
}