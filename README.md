# 🏛️ Sistema de Monitoramento Legislativo

![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql&logoColor=white)

---

Plataforma voltada ao **monitoramento de dados legislativos com foco na proteção infanto-juvenil no ambiente digital**.  
O sistema coleta, processa e disponibiliza informações relevantes, permitindo análise estruturada e apoio à tomada de decisão em políticas públicas.

---

## ⚙️ Tecnologias

**Frontend**
- React

**Backend**
- FastAPI (Python)

**Banco de Dados**
- PostgreSQL

**Infraestrutura**
- Docker
- Docker Compose

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Docker  
- Docker Compose  

### Execução rápida

```bash
# 1. Clone o repositório
git clone https://github.com/unb-mds/2026-1-Squad10

# 2. Acesse o diretório
cd 2026-1-Squad10

# 3. Suba a aplicação
docker-compose up --build




## 🧪 Ambiente de Testes

Este projeto possui testes automatizados básicos configurados tanto para o Backend quanto para o Frontend.

### Como rodar os testes do Backend (FastAPI)
1. Navegue até a pasta do backend:
   ```bash
   cd backend

2. Certifique-se de que o seu ambiente virtual (venv) está ativo.
    para liberar a trava de segurança do Windows, use o comando:
        Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
    para ativar o venv, use o comando:
        venv\Scripts\activate

3. Execute o comando:
    pytest

**Como rodar os testes do Frontend (React)**

1. Navegue até a pasta do frontend:
    cd frontend

2. Execute o comando:
    npm test
