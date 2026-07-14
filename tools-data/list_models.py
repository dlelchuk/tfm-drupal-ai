from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class Dimension(BaseModel):

    model_config = ConfigDict(extra="forbid")

    id: str = Field(
        description="Código corto de la dimensión."
    )

    nombre: str = Field(
        description="Nombre completo de la dimensión."
    )


class Subdimension(BaseModel):

    model_config = ConfigDict(extra="forbid")

    id: str = Field(
        description="Código corto de la subdimensión."
    )

    nombre: str = Field(
        description="Nombre completo de la subdimensión."
    )


class Criterion(BaseModel):

    model_config = ConfigDict(extra="forbid")

    id: int

    pagina_inicio: int

    pagina_fin: int

    dimension: Dimension

    subdimension: Subdimension

    categoria: Optional[str] = None

    recomendacion: str

    ejemplo: Optional[str] = None