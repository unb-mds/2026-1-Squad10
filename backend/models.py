from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, List
from datetime import date

class Parlamentar(SQLModel, table=True):
    __tablename__ = "parlamentares"
    id_parlamentar: int = Field(primary_key=True)
    nome: str
    # Deixamos partido e UF como opcionais, pois a API de autores nao fornece isso na primeira busca
    partido: Optional[str] = Field(default="ND") 
    uf: Optional[str] = Field(default="ND")

    proposicoes: List["Proposicao"] = Relationship(back_populates="autor")

class Proposicao(SQLModel, table=True):
    __tablename__ = "proposicoes"
    id_proposicao: Optional[int] = Field(default=None, primary_key=True)
    id_externo: int = Field(index=True, unique=True)
    
    # Chave estrangeira ligando ao Parlamentar
    id_autor: Optional[int] = Field(default=None, foreign_key="parlamentares.id_parlamentar")
    
    tipo: str
    numero: int
    ano: int
    ementa: str
    tema: str = "Protecao Infantil Digital"
    data_apresentacao: Optional[date] = None

    autor: Optional[Parlamentar] = Relationship(back_populates="proposicoes")