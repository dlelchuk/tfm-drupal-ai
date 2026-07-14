from typing import Optional

from pydantic import BaseModel, Field


class Dimension(BaseModel):
    id: str = Field(
        description="Código corto de la dimensión, por ejemplo DI."
    )

    nombre: str = Field(
        description="Nombre completo de la dimensión."
    )


class Subdimension(BaseModel):
    id: str = Field(
        description="Código corto de la subdimensión."
    )

    nombre: str = Field(
        description="Nombre completo de la subdimensión."
    )


class Criterion(BaseModel):

    id: int = Field(
        description="Número consecutivo del criterio."
    )

    pagina_inicio: int = Field(
        description="Primera página donde aparece el criterio."
    )

    pagina_fin: int = Field(
        description="Última página donde aparece el criterio."
    )

    dimension: Dimension

    subdimension: Subdimension

    categoria: Optional[str] = Field(
        default=None,
        description="Categoría si existe."
    )

    recomendacion: str = Field(
        description="Texto completo de la recomendación."
    )

    ejemplo: Optional[str] = Field(
        default=None,
        description="Ejemplo asociado a la recomendación."
    )