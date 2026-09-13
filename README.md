# NUVA — Guardiões da Luz

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?logo=tailwindcss&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-ec5990?logo=reacthookform&logoColor=white)

Front-end da NUVA, plataforma de gamificação do Challenge SoulUp que transforma ações sustentáveis (missões de
energia, água, floresta e resíduos) em SoulCoins, convertidos em crédito real na conta de luz.

Este repositório é a **Sprint 03** da disciplina Front-End Design Engineering (FIAP), que migra o site estático
das sprints anteriores (HTML + CSS + JS puro) para uma Single Page Application em **React + Vite + TypeScript**.

**Repositório:** https://github.com/MatheusC0625/sprint3-nuva-react
**Vídeo de demonstração:** https://www.youtube.com/watch?v=MDmqCaZMIq8

## Nota sobre continuidade solo do projeto

O grupo original desta disciplina era formado por Lucas Kaftan, Matheus Iumati Ruas, Lucas Luque Cabral,
Vinicius Silveira Espósito e Matheus Costa, responsáveis pelo site estático (HTML/CSS/JS) entregue na Sprint 2.

A partir da Sprint 3, os demais integrantes deixaram de participar da disciplina. Com conhecimento e
autorização do Scrum Master da turma e do próprio grupo, o desenvolvimento passou a ser conduzido
individualmente por mim, **Matheus Costa (RM 573146)**.

Deixo registrado que:

- Todo o código desta Sprint (migração para React, Vite, TypeScript, Tailwind CSS, React Router e React Hook
  Form) foi desenvolvido exclusivamente por mim, sem apoio, contribuição de código ou consulta aos demais
  integrantes do grupo original.
- Não houve plágio nem reaproveitamento de entregas de terceiros ou de outros grupos: a única base reaproveitada
  é o site estático já entregue por este mesmo grupo na Sprint 2, cuja migração/evolução é justamente o objetivo
  desta etapa.
- Estou à disposição para esclarecer qualquer dúvida sobre a autoria individual deste trabalho junto ao
  professor ou à coordenação do curso.

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/) — navegação em SPA, rotas estáticas e dinâmicas
- [React Hook Form](https://react-hook-form.com/) — formulário de contato com validação tipada

## Estrutura de pastas

```
src/
├── components/    # componentes reutilizáveis (Header, Footer, Layout, Card, Button, MemberCard, PageTitle)
├── pages/         # uma página por rota (Home, Sobre, Solucao, Integrantes, IntegranteDetalhe, Faq, Contato)
├── data/          # dados estáticos tipados (integrantes, perguntas frequentes)
├── types/         # tipos TypeScript compartilhados
├── assets/        # imagens
├── App.tsx        # definição das rotas
├── main.tsx       # ponto de entrada
└── index.css      # tema Tailwind (cores, fontes) importado dos estilos originais do projeto
```

### Vídeo de demonstração

[Link do vídeo no YouTube](https://www.youtube.com/watch?v=MDmqCaZMIq8)

### Instalação e execução

Pré-requisitos: [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

### Rotas disponíveis

| Rota                  | Página                                    |
| ---------------------- | ------------------------------------------ |
| `/`                    | Home                                       |
| `/sobre`                | Sobre a NUVA                               |
| `/solucao`              | A Solução (problema, como funciona, diferenciais) |
| `/integrantes`          | Lista de integrantes (com busca por nome)  |
| `/integrantes/:id`      | Detalhe de um integrante (rota dinâmica)   |
| `/faq`                  | Perguntas frequentes (acordeão)            |
| `/contato`              | Formulário de contato (React Hook Form)    |

## Integrantes

<img src="https://github.com/MatheusC0625.png" alt="Foto de Matheus Costa" width="100" height="100" style="border-radius: 50%;" />

**Matheus Costa** — RM 573146 — Turma 1TDSPV
[GitHub](https://github.com/MatheusC0625) · [LinkedIn](https://www.linkedin.com/in/matheusrodrigues06/)

## Contato

- **E-mail:** stsycosta@gmail.com
- **GitHub:** [github.com/MatheusC0625](https://github.com/MatheusC0625)
- **LinkedIn:** [linkedin.com/in/matheusrodrigues06](https://www.linkedin.com/in/matheusrodrigues06/)
