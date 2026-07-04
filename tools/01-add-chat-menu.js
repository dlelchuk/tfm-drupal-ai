const path = require("path");

const { processHtmlFiles, writeHtmlFile } = require("./lib/files");

const { loadHtml, saveHtml } = require("./lib/cheerio");

const SCRIPT_NAME = path.basename(__filename, ".js");

const CHAT_URL = "/es/chat/";

let modifiedFiles = 0;
let skippedFiles = 0;

console.log("========================================");
console.log(SCRIPT_NAME);
console.log("========================================");

processHtmlFiles((file, html) => {
  // Ignorar el index raíz (solo redirección)
  if (file.endsWith(path.join("web", "index.html"))) {
    skippedFiles++;
    return;
  }

  const $ = loadHtml(html);

  console.log("================================");
  console.log(file);
  console.log("body:", $("body").length);
  console.log("headersidebar:", $(".headersidebar").length);
  console.log("sidebarmenu:", $(".sidebarmenu").length);
  console.log("ul:", $("ul").length);

  // Buscar EXCLUSIVAMENTE el menú lateral
  const sidebarMenu = $("ul.sidebarmenu").first();

  if (sidebarMenu.length === 0) {
    console.log(`⚠ Sin sidebarmenu: ${path.relative(process.cwd(), file)}`);
    skippedFiles++;
    return;
  }

  // Ya existe
  if (sidebarMenu.find(`a[href="${CHAT_URL}"]`).length > 0) {
    skippedFiles++;
    return;
  }

  sidebarMenu.append(`
<li class="">
  <a href="${CHAT_URL}" title="Asistente IA">
    Asistente IA
  </a>
</li>`);

  writeHtmlFile(file, saveHtml($));

  modifiedFiles++;

  console.log(`✔ ${path.relative(process.cwd(), file)}`);
});

console.log("");
console.log(`Archivos modificados : ${modifiedFiles}`);
console.log(`Archivos omitidos    : ${skippedFiles}`);
console.log("========================================");
