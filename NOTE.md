vynl/
├── frontend/                # Next.js frontend
│   ├── app/                 # App Router (preferred over `pages/`)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── playlist/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/          # Navbar, MoodSelector, PlaylistCard, etc.
│   ├── lib/                 # frontend utilities (moods.ts, API helpers)
│   ├── public/              # Static assets (logo, icons)
│   ├── styles/              # Tailwind configs (if extra)
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/             # mood, playlists, auth
│   │   ├── core/            # config, constants
│   │   ├── models/          # SQLAlchemy
│   │   ├── services/        # Spotify API, AI mood detection
│   │   ├── schemas/         # Pydantic schemas
│   │   └── main.py          # FastAPI entrypoint
│   ├── tests/               # pytest unit tests
│   └── requirements.txt
│
├── database/
│   ├── migrations/          # Alembic migrations
│   └── init.sql             # schema setup
│
├── docs/
│   └── README.md
│
└── docker/                  # Docker setup
    ├── docker-compose.yml
    └── Dockerfile
