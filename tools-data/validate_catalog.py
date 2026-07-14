import json

from config import OUTPUT_JSON
from logger import Logger
from validator import validate_catalog


log = Logger()


def main():

    log.step("Validación del catálogo")

    if not OUTPUT_JSON.exists():

        raise FileNotFoundError(
            f"No existe {OUTPUT_JSON}"
        )

    with open(
        OUTPUT_JSON,
        "r",
        encoding="utf-8"
    ) as f:

        catalog = json.load(f)

    log.info(
        f"Criterios cargados: {len(catalog)}"
    )

    validate_catalog(catalog)

    log.success(
        "Validación finalizada."
    )


if __name__ == "__main__":
    main()