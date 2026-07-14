from google import genai

from config import GEMINI_API_KEY
from cache import get_or_create_cache


def main():

    client = genai.Client(
        api_key=GEMINI_API_KEY
    )

    cache = get_or_create_cache(client)

    print()
    print("Resultado:")
    print(cache)


if __name__ == "__main__":
    main()