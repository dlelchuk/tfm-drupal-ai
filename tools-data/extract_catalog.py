import json
import time

from google import genai
from google.genai import types

from cache import get_or_create_cache
from config import (
    GEMINI_API_KEY,
    MODEL_NAME,
    OUTPUT_JSON,
    RAW_RESPONSE_JSON,
    TEMPERATURE,
    TEST_CRITERIA_LIMIT,
)
from logger import Logger
from models import Criterion


log = Logger()


def build_prompt():

    if TEST_CRITERIA_LIMIT > 0:

        return f"""
Lee completamente el documento PDF.

Extrae ÚNICAMENTE los primeros {TEST_CRITERIA_LIMIT} criterios.

REGLAS

- No inventes información.
- No omitas criterios.
- Mantén exactamente el orden del documento.
- Cada recomendación corresponde a un criterio.
- Si un criterio ocupa varias páginas, indica correctamente pagina_inicio y pagina_fin.
- categoria y ejemplo pueden ser null.
"""

    return """
Lee completamente el documento PDF.

Extrae TODOS los criterios del catálogo.

REGLAS

- No inventes información.
- No omitas criterios.
- Mantén exactamente el orden del documento.
- Cada recomendación corresponde a un criterio.
- Si un criterio ocupa varias páginas, indica correctamente pagina_inicio y pagina_fin.
- categoria y ejemplo pueden ser null.
"""


def save_json(path, data):

    with open(
        path,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            data,
            f,
            ensure_ascii=False,
            indent=2
        )


def main():

    log.step("Inicio")

    client = genai.Client(
        api_key=GEMINI_API_KEY
    )

    log.step("Context Cache")

    cache = get_or_create_cache(client)

    if TEST_CRITERIA_LIMIT > 0:
        log.info(
            f"Modo prueba ({TEST_CRITERIA_LIMIT} criterios)"
        )
    else:
        log.info("Extracción completa")

    start = time.perf_counter()

    log.step("Solicitando catálogo")

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=build_prompt(),
        config=types.GenerateContentConfig(
            cached_content=cache.name,
            temperature=TEMPERATURE,
            response_mime_type="application/json",
            response_schema=list[Criterion]
        )
    )

    elapsed = time.perf_counter() - start

    if response.parsed is None:
        raise RuntimeError(
            "Gemini no devolvió un catálogo válido."
        )

    log.success("Respuesta recibida")

    catalog = [
        item.model_dump()
        for item in response.parsed
    ]

    log.step("Guardando resultados")

    save_json(
        RAW_RESPONSE_JSON,
        response.text
    )

    log.success(
        f"raw_response.json guardado"
    )

    save_json(
        OUTPUT_JSON,
        catalog
    )

    log.success(
        f"catalog.json guardado ({len(catalog)} criterios)"
    )

    usage = getattr(
        response,
        "usage_metadata",
        None
    )

    log.step("Resumen")

    log.info(f"Modelo: {MODEL_NAME}")
    log.info(f"Tiempo: {elapsed:.2f} s")

    if usage:

        log.info(
            f"Prompt: {usage.prompt_token_count}"
        )

        log.info(
            f"Respuesta: {usage.candidates_token_count}"
        )

        log.info(
            f"Total: {usage.total_token_count}"
        )


if __name__ == "__main__":
    main()