# Dockerfile for Vynl Backend (FastAPI) and Frontend (Next.js)
# Multi-stage build for efficiency

# ----------- Backend (FastAPI) -----------
FROM python:3.11-slim as backend

WORKDIR /backend

# Install Python dependencies
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code
COPY backend/app ./app

# ----------- Frontend (Next.js) -----------
FROM node:20-alpine as frontend

WORKDIR /frontend

# Install frontend dependencies
COPY frontend/package.json frontend/tsconfig.json ./
COPY frontend/package-lock.json ./ # If present
RUN npm install

# Build Next.js app
COPY frontend ./
RUN npm run build

# ----------- Final Stage (Combined) -----------
FROM python:3.11-slim

# Backend
WORKDIR /app/backend
COPY --from=backend /backend/app ./app
COPY --from=backend /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=backend /usr/local/bin/uvicorn /usr/local/bin/uvicorn

# Frontend
WORKDIR /app/frontend
COPY --from=frontend /frontend/.next ./.next
COPY --from=frontend /frontend/public ./public
COPY --from=frontend /frontend/node_modules ./node_modules
COPY --from=frontend /frontend/package.json ./package.json

# System utilities
WORKDIR /app
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Expose ports
EXPOSE 8000    # FastAPI backend
EXPOSE 3000    # Next.js frontend

# Start both services (production ready: use process manager)
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port 8000 & cd frontend && npm run start"]