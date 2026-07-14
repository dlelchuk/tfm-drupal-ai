const fs = require("fs");
const path = require("path");

const {
    readHtmlFile,
    writeHtmlFile
} = require("./lib/files");

const {
    loadHtml,
    saveHtml
} = require("./lib/cheerio");

const SCRIPT_NAME = path.basename(__filename, ".js");

const ROOT = path.join(__dirname, "..", "web");

const SOURCE = path.join(
    ROOT,
    "es",
    "eventos",
    "index.html"
);

const TARGET_DIR = path.join(
    ROOT,
    "es",
    "chat"
);

const TARGET = path.join(
    TARGET_DIR,
    "index.html"
);

const TEMPLATE = path.join(
    __dirname,
    "templates",
    "chat-content.html"
);

console.log("========================================");
console.log(SCRIPT_NAME);
console.log("========================================");

//--------------------------------------------------
// Crear carpeta
//--------------------------------------------------

fs.mkdirSync(TARGET_DIR, {
    recursive: true
});

//--------------------------------------------------
// Copiar página base
//--------------------------------------------------

fs.copyFileSync(SOURCE, TARGET);

//--------------------------------------------------
// Cargar HTML
//--------------------------------------------------

const html = readHtmlFile(TARGET);

const $ = loadHtml(html);

//--------------------------------------------------
// Título de la página
//--------------------------------------------------

$("title").text("Asistente IA");

//--------------------------------------------------
// Breadcrumb superior
//--------------------------------------------------

$(".breadline").html(`
<a href="/es/" title="EQui-T">EQui-T</a>
<span>Asistente IA</span>
`);

//--------------------------------------------------
// Menú lateral
//--------------------------------------------------

$("ul.sidebarmenu li")
    .removeClass("active");

$('ul.sidebarmenu a[href="/es/chat/"]')
    .closest("li")
    .addClass("active");

//--------------------------------------------------
// Menú horizontal
//--------------------------------------------------

$(".submenu li")
    .removeClass("active");

$('.submenu a[href="/es/chat/"]')
    .closest("li")
    .addClass("active");

//--------------------------------------------------
// Cabecera
//--------------------------------------------------

$(".advancedheader_teaser h1")
    .text("Asistente IA");

$(".advancedheader_teaser h2")
    .text("Consulte el catálogo de criterios mediante inteligencia artificial.");

//--------------------------------------------------
// Contenido
//--------------------------------------------------

const chatHtml = fs.readFileSync(
    TEMPLATE,
    "utf8"
);

const content = $(".col-md-9.contentsubpage");

if (!content.length) {
    throw new Error(
        "No se encontró '.col-md-9.contentsubpage'"
    );
}

content.html(chatHtml);

//--------------------------------------------------
// Guardar
//--------------------------------------------------

writeHtmlFile(
    TARGET,
    saveHtml($)
);

console.log("");
console.log("Página creada correctamente:");
console.log(path.relative(ROOT, TARGET));

console.log("");
console.log("========================================");
console.log("Finalizado.");
console.log("========================================");