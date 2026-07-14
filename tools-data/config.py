from pathlib import Path
from dotenv import load_dotenv
import os

# ==========================================================
# Variables de entorno
# ==========================================================

load_dotenv()

# ==========================================================
# Directorios
# ==========================================================

BASE_DIR = Path(__file__).parent

INPUT_DIR = BASE_DIR / "input"
OUTPUT_DIR = BASE_DIR / "output"
CACHE_DIR = BASE_DIR / "cache"

INPUT_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)
CACHE_DIR.mkdir(exist_ok=True)

# ==========================================================
# Archivos
# ==========================================================

PDF_FILE = INPUT_DIR / "ES_EQui-T_Recommendations_final.pdf"

OUTPUT_JSON = OUTPUT_DIR / "catalog.json"

RAW_RESPONSE_JSON = OUTPUT_DIR / "raw_response.json"

CACHE_FILE = CACHE_DIR / "gemini_cache.json"

BACKEND_DATA_FILE = Path(
    r"C:\Users\danie\tfm-AI\backend\data\data.json"
)

# ==========================================================
# Gemini
# ==========================================================

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

MODEL_NAME = "gemini-pro-latest"

TEMPERATURE = 0

# ==========================================================
# Embeddings
# ==========================================================

EMBEDDING_MODEL = (
    "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
)

EMBEDDING_BATCH_SIZE = 32

# ==========================================================
# Extracción
# ==========================================================

# 0 = catálogo completo
# N = primeros N criterios
TEST_CRITERIA_LIMIT = 0

# ==========================================================
# Validaciones
# ==========================================================

if not GEMINI_API_KEY:
    raise RuntimeError(
        "No se encontró GEMINI_API_KEY en el archivo .env."
    )

if not PDF_FILE.exists():
    raise FileNotFoundError(
        f"No existe el PDF: {PDF_FILE}"
    )