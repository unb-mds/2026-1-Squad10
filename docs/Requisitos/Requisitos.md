## Controle de Versões

| Autor(a)                         | Detalhamento                                           | Versão | Data       |
| -------------------------------- | ------------------------------------------------------ | ------ | ---------- |
| Danielly Mendes e Carlos Gabriel | Criação do documento e coleta de requisitos funcionais | 1.0    | 10/04/2026 |
| Danielly Mendes                           | Revisão de personas e balanceamento das user stories   | 1.1    | 22/04/2026 |

---

# 1. Visão Geral

## Objetivo

Desenvolver uma plataforma para monitorar, classificar e analisar proposições legislativas relacionadas à proteção de crianças e adolescentes no ambiente digital.

## Escopo

O sistema irá coletar dados da API de Dados Abertos da Câmara dos Deputados, extrair o inteiro teor das proposições, classificá-las por subtema e apresentar visualizações analíticas em um dashboard interativo.

## Temas Principais

* Cyberbullying
* Proteção de dados de menores
* Exploração sexual online
* Controle parental
* Regulação de plataformas digitais
* Exposição a conteúdo nocivo

---

# 2. Personas

## Persona Principal

### Articuladora de ONG

* Atua na defesa dos direitos de crianças e adolescentes
* Precisa monitorar projetos de lei
* Busca identificar ameaças ou oportunidades legislativas
* Necessita identificar parlamentares aliados
* Utiliza o sistema para planejamento de advocacy

---

## Persona Secundária

### Pesquisador Acadêmico / Jornalista de Dados

* Analisa tendências legislativas ao longo do tempo
* Busca identificar crescimento ou queda de temas
* Precisa gerar relatórios quantitativos
* Deseja descobrir novos temas emergentes
* Utiliza gráficos e séries temporais para estudos

---

# 3. User Stories

## US01 – Descoberta pelo Inteiro Teor

Como articuladora de ONG, quero que o sistema classifique as leis lendo o texto completo delas, para que eu consiga identificar ameaças à segurança digital de menores mesmo quando não estão explícitas na ementa.

### Critérios de Aceitação

* O sistema deve analisar o inteiro teor do documento
* Deve classificar mesmo quando o tema não aparece na ementa
* Deve exibir o resultado no dashboard

---

## US02 – Mapeamento de Aliados

Como articuladora de ONG, quero visualizar um ranking dos deputados e partidos com mais proposições sobre proteção infantil online, para saber com quem devo agendar reuniões.

### Critérios de Aceitação

* Deve permitir seleção por subtema
* Deve ordenar parlamentares por número de proposições
* Deve permitir visualizar partidos mais ativos

---

## US03 – Análise Temporal

Como pesquisador acadêmico/jornalista de dados, quero visualizar a evolução temporal das proposições por tema, para identificar tendências e novos assuntos emergentes.

### Critérios de Aceitação

* Deve apresentar gráfico por ano
* Deve permitir filtrar por subtema
* Deve mostrar crescimento ou queda de propostas

---

# 4. Requisitos Funcionais (RF)

| ID   | Descrição                 | Prioridade  |
| ---- | ------------------------- | ----------- |
| RF01 | Extrair metadados da API  | Must Have   |
| RF02 | Extrair inteiro teor      | Must Have   |
| RF03 | Classificar por subtema   | Must Have   |
| RF04 | Exibir dashboard          | Must Have   |
| RF05 | Ranking de parlamentares  | Must Have   |
| RF06 | Ranking de partidos       | Must Have   |
| RF07 | Gráfico temporal          | Should Have |
| RF08 | Filtro por subtema        | Should Have |
| RF09 | Descoberta de novos temas | Could Have  |

---

## Must Have

RF01: O sistema deve extrair diariamente os metadados das proposições legislativas pela API da Câmara.
RF02: O sistema deve obter o link do inteiro teor das proposições.
RF03: O sistema deve extrair o texto completo das proposições (PDF/TXT).
RF04: O sistema deve classificar as proposições por subtema utilizando palavras-chave e NLP.
RF05: O sistema deve exibir um dashboard com o volume de proposições por subtema.
RF06: O sistema deve apresentar ranking de parlamentares mais ativos.

## Should Have

RF07: O sistema deve apresentar ranking de partidos mais ativos.
RF08: O sistema deve exibir gráfico de evolução temporal das proposições.
RF09: O sistema deve permitir filtro por subtema.

## Could Have

RF10: O sistema deve identificar automaticamente novos temas emergentes.

## Won't Have (MVP)

RF11: O sistema não terá integração com a API do Senado nesta versão.

---

# Rastreabilidade Requisitos ↔ Personas

| Requisito | Persona               |
| --------- | --------------------- |
| RF01      | Sistema               |
| RF02      | Sistema               |
| RF03      | Articuladora de ONG   |
| RF04      | Articuladora de ONG   |
| RF05      | Articuladora de ONG   |
| RF06      | Articuladora de ONG   |
| RF07      | Pesquisador Acadêmico |
| RF08      | Pesquisador Acadêmico |
| RF09      | Pesquisador Acadêmico |
| RF10      | Pesquisador Acadêmico |

---

# 5. Critérios de Aceitação (Gherkin)

## Cenário: Classificação pelo inteiro teor

Dado que uma proposição não cita o tema na ementa
Quando o sistema analisa o texto completo
Então ela deve ser classificada corretamente

---

## Cenário: Visualização de ranking

Dado que estou no dashboard
Quando seleciono o subtema "Cyberbullying"
Então o sistema deve mostrar deputados ordenados por número de proposições

---

## Cenário: Análise temporal

Dado que o pesquisador acessa o dashboard
Quando seleciona um subtema
Então deve visualizar a evolução das proposições ao longo do tempo

---

# 6. Arquitetura (Visão Geral)

## Pipeline de Dados

* Extração de dados via API (Câmara/Senado)
* Download do inteiro teor das proposições
* Processamento com técnicas de NLP
* Classificação por temas e subtemas
* Armazenamento estruturado (banco de dados)

## Camada de Visualização

* Dashboard interativo
* Gráficos de volume por subtema
* Rankings de parlamentares
* Filtros por período, tema e deputado

## Princípio Arquitetural

* Separação entre processamento de dados e visualização
* Melhora de desempenho e escalabilidade
* Facilita manutenção e evolução do sistema

---

# 7. Definição de MVP

O MVP será considerado completo quando atender aos seguintes pontos:

## Integração com API

* [ ] Extração de dados da API
* [ ] Download do inteiro teor
* [ ] Processamento com NLP
* [ ] Armazenamento dos dados

## Dashboard

* [ ] Dados coletados e disponíveis
* [ ] Proposições classificadas por subtema
* [ ] Visualização do volume por subtema
* [ ] Ranking de parlamentares disponível

## Critério Geral

O sistema deve permitir análise básica de proposições legislativas com base em temas e subtemas, apresentando os dados de forma clara no dashboard.

---

# 8. Estrutura de Documentação

```
/docs
├── requisitos.md
├── arquitetura.md
├── user-stories.md
├── guia-instalacao.md
```

---

# 9. Glossário

* NLP: Processamento de Linguagem Natural
* API: Interface de Programação de Aplicações
* MVP: Produto Mínimo Viável
* Dashboard: Painel visual de dados
