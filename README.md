# AI Project Mentor

AI Project Mentor is a beginner-friendly full-stack training workspace for turning software requirements into practical development tasks.

## Objective

Create and manage software projects, track task progress, and use a mock AI mentor to break requirements into frontend, backend, database, and testing work.

## Technology stack

- HTML5, CSS3, JavaScript ES6+
- React with functional components and hooks
- Vite
- React Router DOM
- Axios service layer prepared for FastAPI
- Lucide icons

## Current frontend features

- Responsive dashboard with project progress and task summaries
- Project cards with create, edit, view, and delete flows
- Project details with task progress and status updates
- Task table with search, project/priority/status filters, CRUD actions, and validation
- AI Mentor page with a structured mock GPT-OSS recommendation
- AI History page with filters, detail view, and deletion
- Reusable loading, error, success, empty-state, modal, badge, and confirmation UI
- Mock data runs fully in the browser without a backend

## Planned backend technologies

The future backend will use Python, FastAPI, SQL Server, and Ollama Cloud with a GPT-OSS model. AI credentials and database credentials will remain on the backend and will never be placed in this frontend.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Folder structure

- `src/components/Common` — reusable UI elements
- `src/components/Layout` — sidebar, header, and shared page shell
- `src/context` — in-memory application state and CRUD actions
- `src/data/mockData.js` — realistic sample projects, tasks, and AI history
- `src/pages` — route-level screens
- `src/services/api.js` — Axios functions prepared for FastAPI endpoints
- `src/styles/global.css` — shared responsive design system

## Environment variables

Copy `.env.example` to `.env` for local development:

- `VITE_API_BASE_URL` — future FastAPI base URL, defaulting to `http://127.0.0.1:8000`
- `VITE_USE_MOCK_DATA` — keeps the current frontend in mock-data mode when set to `true`

No AI keys, database credentials, or connection strings belong in this frontend.

## Future FastAPI integration plan

The prepared service file maps to the planned health, dashboard, project, task, AI plan, next-task, and AI history endpoints. When the Python backend is ready, set `VITE_USE_MOCK_DATA=false`, connect page loading and mutation actions to the service helpers, and keep Ollama calls inside FastAPI.
