import json

from google import genai
from google.genai import types

from config import (
    CACHE_FILE,
    MODEL_NAME,
    PDF_FILE,
)


def load_cache():

    if not CACHE_FILE.exists():
        return None

    with open(CACHE_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_cache(cache_name):

    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(
            {
                "cache_name": cache_name
            },
            f,
            indent=2
        )


def get_or_create_cache(client):

    cache = load_cache()

    if cache:

        try:

            cached = client.caches.get(
                name=cache["cache_name"]
            )

            print("✓ Usando caché existente.")

            return cached

        except Exception:

            print("La caché ya no existe. Se creará una nueva.")

    print("Subiendo PDF...")

    uploaded_file = client.files.upload(
        file=str(PDF_FILE)
    )

    print("Creando caché (TTL: 7 días)...")

    cached = client.caches.create(
        model=MODEL_NAME,
        config=types.CreateCachedContentConfig(
            contents=[uploaded_file],
            ttl="604800s"
        )
    )

    save_cache(cached.name)

    print("✓ Caché creada.")

    return cached