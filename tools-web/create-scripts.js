// create-scripts.js

const fs = require("fs");
const path = require("path");

const files = [
    "01-add-chat-menu.js",
    "02-create-chat-page.js",
    "03-add-chat-assets.js",
    "04-update-footer.js",
    "05-remove-unused-pages.js"
];

for (const file of files) {

    const filePath = path.join(__dirname, file);

    if (fs.existsSync(filePath)) {
        console.log(`Ya existe: ${file}`);
        continue;
    }

    fs.writeFileSync(
        filePath,
`const path = require("path");

const SCRIPT_NAME = path.basename(__filename, ".js");

console.log(SCRIPT_NAME);
`,
        "utf8"
    );

    console.log(`Creado: ${file}`);
}