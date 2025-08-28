# Vynl Docker & Deployment Guide

## 🐳 Dockerized Development & Production

Vynl runs both its FastAPI backend and Next.js frontend in Docker containers, alongside a Postgres database.

---

## Quickstart

```sh
cd docker
docker-compose up --build
```

- Visit `http://localhost:3000` for the frontend.
- Backend API at `http://localhost:8000`.
- Postgres DB at `localhost:5432` (see docker-compose for creds).

---

## Directory Structure

- **frontend/**: Next.js (React, TypeScript)
- **backend/**: FastAPI (Python)
- **database/**: Postgres init SQL & Alembic migrations
- **docker/**: Dockerfile & Compose files

---

## Development Tips

- Hot-reload: Mounts code in containers for quick dev.
- To add new dependencies:
  - **Backend:** Update `backend/requirements.txt`, then rebuild backend container.
  - **Frontend:** Run `npm install <package>` in `frontend/`, then rebuild frontend container.

---

## Customization

- **Environment Variables:** Edit `docker-compose.yml` for secrets, ports, etc.
- **Database:** Edit `database/init.sql` for schema changes.

---

## Production

- Use a process manager (like `pm2` or `gunicorn`) for stability.
- Consider a reverse proxy (nginx, Caddy) for HTTPS in prod.
