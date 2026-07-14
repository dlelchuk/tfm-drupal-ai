import json
import time

from sentence_transformers import SentenceTransformer

from config import (
    OUTPUT_JSON,
    BACKEND_DATA_FILE,
    EMBEDDING_MODEL,
    EMBEDDING_BATCH_SIZE,
)
from logger import Logger


log = Logger()


def build_embedding_text(item):

    parts = []

    parts.append(
        f"Dimensión: {item['dimension']['nombre']}"
    )

    parts.append(
        f"Subdimensión: {item['subdimension']['nombre']}"
    )

    if item.get("categoria"):

        parts.append(
            f"Categoría: {item['categoria']}"
        )

    parts.append("")

    parts.append("Recomendación:")

    parts.append(
        item["recomendacion"]
    )

    if item.get("ejemplo"):

        parts.append("")
        parts.append("Ejemplo:")
        parts.append(item["ejemplo"])

    return "\n".join(parts)


def main():

    log.step("Cargando catálogo")

    with open(
        OUTPUT_JSON,
        "r",
        encoding="utf-8"
    ) as f:

        catalog = json.load(f)

    log.info(
        f"Criterios: {len(catalog)}"
    )

    log.step("Cargando modelo")

    model = SentenceTransformer(
        EMBEDDING_MODEL
    )

    texts = [
        build_embedding_text(item)
        for item in catalog
    ]

    log.step("Generando embeddings")

    start = time.perf_counter()

    embeddings = model.encode(
        texts,
        batch_size=EMBEDDING_BATCH_SIZE,
        show_progress_bar=True,
        convert_to_numpy=True
    )

    elapsed = time.perf_counter() - start

    data = []

    for item, embedding, text in zip(
        catalog,
        embeddings,
        texts
    ):

        data.append({

            **item,

            "texto_embedding": text,

            "embedding": embedding.tolist()

        })

    log.step("Guardando resultado")

    with open(
        BACKEND_DATA_FILE,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            data,
            f,
            ensure_ascii=False,
            indent=2
        )

    log.success(
        f"Archivo generado: {BACKEND_DATA_FILE}"
    )

    log.step("Resumen")

    log.info(
        f"Modelo: {EMBEDDING_MODEL}"
    )

    log.info(
        f"Registros: {len(data)}"
    )

    log.info(
        f"Tiempo: {elapsed:.2f} s"
    )


if __name__ == "__main__":
    main()