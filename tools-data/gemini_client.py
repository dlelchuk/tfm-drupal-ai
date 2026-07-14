from google import genai
from google.genai import types

from config import (
    GEMINI_API_KEY,
    MODEL_NAME,
    TEMPERATURE,
)

from models import Criterion


class GeminiCatalogExtractor:

    def __init__(self):

        self.client = genai.Client(
            api_key=GEMINI_API_KEY
        )

        self.pdf = None

    # ==========================================================
    # Subir PDF
    # ==========================================================

    def upload_pdf(self, pdf_path):

        print()
        print("Subiendo PDF a Gemini...")

        self.pdf = self.client.files.upload(
            file=str(pdf_path)
        )

        print("PDF subido correctamente.")
        print(f"URI: {self.pdf.uri}")

    # ==========================================================
    # Extraer un bloque
    # ==========================================================

    def extract_batch(
        self,
        start_id: int,
        end_id: int
    ):

        prompt = f"""
Lee EXCLUSIVAMENTE el documento PDF adjunto.

Extrae EXACTAMENTE los criterios comprendidos entre los números
{start_id} y {end_id}.

IMPORTANTE

- No inventes información.
- No omitas criterios.
- Respeta exactamente la numeración del documento.
- Si el documento termina antes del criterio {end_id},
  devuelve únicamente los criterios existentes.
"""

        response = self.client.models.generate_content(
            model=MODEL_NAME,
            contents=[
                self.pdf,
                prompt
            ],
            config=types.GenerateContentConfig(
                temperature=TEMPERATURE,
                response_mime_type="application/json",
                response_schema=list[Criterion]
            )
        )

        if response.parsed is None:
            raise RuntimeError(
                "Gemini no devolvió un JSON válido."
            )

        return [
            item.model_dump()
            for item in response.parsed
        ]