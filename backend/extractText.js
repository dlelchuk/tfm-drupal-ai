const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf');

const filePath = './data/documento.pdf';

async function extractText() {
  try {
    const data = new Uint8Array(fs.readFileSync(filePath));

    const loadingTask = pdfjsLib.getDocument({ data });
    const pdf = await loadingTask.promise;

    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      const strings = content.items.map(item => item.str);
      fullText += strings.join(' ') + '\n\n';
    }

    console.log("Texto extraído:\n");
    console.log(fullText);

    fs.writeFileSync('./data/texto.txt', fullText);

    console.log("\nTexto guardado en data/texto.txt");

  } catch (error) {
    console.error("Error extrayendo texto:", error);
  }
}

extractText();