import json

from config import (
    PDF_FILE,
    OUTPUT_DIR,
)

from gemini_client import GeminiCatalogExtractor


OUTPUT_INDEX = OUTPUT_DIR / "index.json"


PROMPT = """
Lee COMPLETAMENTE el documento PDF adjunto.

NO extraigas todavía los criterios completos.

Tu única tarea es construir un índice.

Devuelve EXCLUSIVAMENTE un array JSON.

Cada elemento debe tener EXACTAMENTE esta estructura:

{
    "id": 0,
    "pagina_inicio": 0,
    "pagina_fin": 0,
    "dimension": "",
    "subdimension": "",
    "inicio": ""
}

Donde:

- id:
    Numeración consecutiva empezando en 1.

- pagina_inicio:
    Primera página donde aparece la recomendación.

- pagina_fin:
    Última página donde aparece la recomendación.

- dimension:
    Nombre completo de la dimensión.

- subdimension:
    Nombre completo de la subdimensión.

- inicio:
    Primeras 10-15 palabras EXACTAS de la recomendación.

REGLAS IMPORTANTES

- Cada recomendación corresponde a UN elemento.
- No agrupes recomendaciones.
- No inventes recomendaciones.
- Mantén el orden exacto del documento.
- Devuelve únicamente JSON.
- No escribas markdown.
- No escribas comentarios.
"""


def main():

    extractor = GeminiCatalogExtractor()

    extractor.upload_pdf(PDF_FILE)

    print()
    print("Solicitando índice...")

    response = extractor.client.models.generate_content(
        model=extractor.client.models.list()[0].name if False else "gemini-2.5-flash",
        contents=[
            extractor.pdf,
            PROMPT
        ]
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

    index = json.loads(text)

    with open(
        OUTPUT_INDEX,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            index,
            f,
            ensure_ascii=False,
            indent=2
        )

    print()
    print(f"Índice generado correctamente.")
    print(f"Criterios encontrados: {len(index)}")
    print(f"Archivo: {OUTPUT_INDEX}")


if __name__ == "__main__":
    main()