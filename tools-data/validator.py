from collections import defaultdict


def validate_catalog(catalog):
    """
    Ejecuta todas las validaciones del catálogo.

    Lanza RuntimeError únicamente cuando encuentra
    errores que invalidan el catálogo.
    """

    validate_not_empty(catalog)
    validate_ids(catalog)
    validate_pages(catalog)
    validate_required_fields(catalog)

    # Solo informa. No detiene el proceso.
    report_duplicates(catalog)


# ==========================================================
# Validaciones críticas
# ==========================================================

def validate_not_empty(catalog):

    if len(catalog) == 0:
        raise RuntimeError(
            "El catálogo está vacío."
        )


def validate_ids(catalog):

    expected = 1

    for item in catalog:

        if item["id"] != expected:

            raise RuntimeError(
                f"Se esperaba el id {expected}, "
                f"pero se encontró {item['id']}."
            )

        expected += 1


def validate_pages(catalog):

    for item in catalog:

        inicio = item["pagina_inicio"]
        fin = item["pagina_fin"]

        if inicio <= 0:

            raise RuntimeError(
                f"Criterio {item['id']}: "
                f"pagina_inicio inválida ({inicio})."
            )

        if fin <= 0:

            raise RuntimeError(
                f"Criterio {item['id']}: "
                f"pagina_fin inválida ({fin})."
            )

        if inicio > fin:

            raise RuntimeError(
                f"Criterio {item['id']}: "
                f"pagina_inicio ({inicio}) "
                f"es mayor que pagina_fin ({fin})."
            )


def validate_required_fields(catalog):

    for item in catalog:

        if not item["dimension"]["id"].strip():
            raise RuntimeError(
                f"Criterio {item['id']}: dimension.id vacío."
            )

        if not item["dimension"]["nombre"].strip():
            raise RuntimeError(
                f"Criterio {item['id']}: dimension.nombre vacío."
            )

        if not item["subdimension"]["id"].strip():
            raise RuntimeError(
                f"Criterio {item['id']}: subdimension.id vacío."
            )

        if not item["subdimension"]["nombre"].strip():
            raise RuntimeError(
                f"Criterio {item['id']}: subdimension.nombre vacío."
            )

        if not item["recomendacion"].strip():
            raise RuntimeError(
                f"Criterio {item['id']}: recomendacion vacía."
            )


# ==========================================================
# Advertencias
# ==========================================================

def report_duplicates(catalog):

    duplicates = defaultdict(list)

    for item in catalog:

        text = item["recomendacion"].strip()

        duplicates[text].append(item)

    repeated = {
        text: items
        for text, items in duplicates.items()
        if len(items) > 1
    }

    if not repeated:
        return

    print()
    print("=" * 70)
    print("ADVERTENCIA: RECOMENDACIONES DUPLICADAS")
    print("=" * 70)
    print()

    for index, (text, items) in enumerate(repeated.items(), start=1):

        print(f"Duplicado {index}")
        print("-" * 70)

        for item in items:

            print(
                f"ID {item['id']} | "
                f"Páginas {item['pagina_inicio']}-{item['pagina_fin']}"
            )

            print(
                f"Dimensión    : {item['dimension']['nombre']}"
            )

            print(
                f"Subdimensión : {item['subdimension']['nombre']}"
            )

            categoria = item["categoria"] or "-"

            print(
                f"Categoría    : {categoria}"
            )

            print()

        print("Texto:")
        print()
        print(text)
        print()
        print("=" * 70)
        print()