from datetime import datetime
from enum import Enum
import time


class Level(Enum):
    INFO = "INFO"
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    ERROR = "ERROR"


class Logger:

    def __init__(self):
        self.start = time.perf_counter()

    def _elapsed(self):

        elapsed = time.perf_counter() - self.start

        minutes = int(elapsed // 60)
        seconds = elapsed % 60

        if minutes == 0:
            return f"+{seconds:06.3f}s"

        return f"+{minutes:02d}:{seconds:06.3f}"

    def _print(self, level: Level, message: str):

        now = datetime.now().strftime("%H:%M:%S")

        print(
            f"{now} │ {self._elapsed():>10} │ {level.value:<7} │ {message}"
        )

    def step(self, title: str):

        print()
        print("─" * 90)
        self.info(title)
        print("─" * 90)

    def info(self, message: str):
        self._print(Level.INFO, message)

    def success(self, message: str):
        self._print(Level.SUCCESS, message)

    def warning(self, message: str):
        self._print(Level.WARNING, message)

    def error(self, message: str):
        self._print(Level.ERROR, message)