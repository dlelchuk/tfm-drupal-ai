import pandas as pd
import json

# Leer Excel
df = pd.read_excel(
    "Estructura.xlsx",
    header=1  # Ajusta si tus encabezados están en otra fila
)

# Eliminar columnas vacías creadas por Excel
df = df.loc[:, ~df.columns.str.contains("^Unnamed")]

# Eliminar filas completamente vacías
df = df.dropna(how="all")

resultado = []
contador = 1

for _, row in df.iterrows():

    # Convertir NaN a None (null en JSON)
    dimension_id = None if pd.isna(row["dimension_id"]) else str(row["dimension_id"]).strip()
    dimension = None if pd.isna(row["dimension"]) else str(row["dimension"]).strip()

    subdimension_id = None if pd.isna(row["subdimension_id"]) else str(row["subdimension_id"]).strip()
    subdimension = None if pd.isna(row["subdimension"]) else str(row["subdimension"]).strip()

    categoria_id = None if pd.isna(row["categoria_id"]) else str(row["categoria_id"]).strip()
    categoria = None if pd.isna(row["categoria"]) else str(row["categoria"]).strip()

    recomendacion = None if pd.isna(row["recomendacion"]) else str(row["recomendacion"]).strip()
    ejemplo = None if pd.isna(row["ejemplo"]) else str(row["ejemplo"]).strip()
    texto_embedding = None if pd.isna(row["texto_embedding"]) else str(row["texto_embedding"]).strip()

    item = {
        "id": contador,

        "dimension": {
            "id": dimension_id,
            "nombre": dimension
        },

        "subdimension": None if subdimension is None else {
            "id": subdimension_id,
            "nombre": subdimension
        },

        "categoria": None if categoria is None else {
            "id": categoria_id,
            "nombre": categoria
        },

        "recomendacion": recomendacion,

        "ejemplo": ejemplo,

        "texto_embedding": texto_embedding
    }

    resultado.append(item)
    contador += 1

# Exportar JSON
with open(
    "knowledge_base.json",
    "w",
    encoding="utf-8"
) as f:
    json.dump(
        resultado,
        f,
        ensure_ascii=False,
        indent=2
    )

print(f"Generados {len(resultado)} registros")