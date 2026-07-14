import json
import time

from google import genai
from google.genai import types

from config import (
    GEMINI_API_KEY,
    PDF_FILE,
)

from models import Criterion


MODEL_NAME = "gemini-pro-latest"


def wait_until_ready(client, uploaded_file):

    print("Esperando a que Gemini procese el PDF...")

    while True:

        current = client.files.get(name=uploaded_file.name)

        state = current.state.name

        print(f"Estado: {state}")

        if state == "ACTIVE":
            return current

        if state == "FAILED":
            raise RuntimeError("Gemini no pudo procesar el PDF.")

        time.sleep(2)


def main():

    client = genai.Client(api_key=GEMINI_API_KEY)

    print("Subiendo PDF...")

    uploaded_file = client.files.upload(
        file=str(PDF_FILE)
    )

    uploaded_file = wait_until_ready(
        client,
        uploaded_file
    )

    prompt = """
Lee el documento completo.

Extrae ÚNICAMENTE el primer criterio del catálogo.

No inventes información.

Respeta exactamente el contenido del documento.
"""

    print()
    print("Solicitando primer criterio...")
    print()

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=[
            uploaded_file,
            prompt
        ],
        config=types.GenerateContentConfig(
            temperature=0,
            response_mime_type="application/json",
            response_schema=Criterion
        )
    )

    print("=" * 80)
    print("TIPO DE RESPUESTA")
    print("=" * 80)
    print(type(response.parsed))
    print()

    print("=" * 80)
    print("OBJETO PYDANTIC")
    print("=" * 80)
    print(response.parsed)
    print()

    print("=" * 80)
    print("DICT")
    print("=" * 80)

    data = response.parsed.model_dump()

    print(json.dumps(
        data,
        indent=2,
        ensure_ascii=False
    ))

    if hasattr(response, "usage_metadata"):

        print()
        print("=" * 80)
        print("USO")
        print("=" * 80)
        print(response.usage_metadata)


if __name__ == "__main__":
    main()