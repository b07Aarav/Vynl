vynl/
├── frontend/                # Next.js frontend
│   ├── pages/               # Routes
│   ├── components/          # Reusable UI parts
│   ├── styles/              # Tailwind / CSS
│   ├── utils/               # Helpers
│   └── public/              # Static assets
│
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/             # API routes (mood, playlists, auth)
│   │   ├── core/            # Config & constants
│   │   ├── models/          # DB models (SQLAlchemy)
│   │   ├── services/        # Spotify API, AI mood detection
│   │   ├── schemas/         # Pydantic validation
│   │   └── main.py          # App entrypoint
│   ├── tests/               # Unit tests
│   └── requirements.txt
│
├── database/
│   ├── migrations/          # Alembic migrations
│   └── init.sql             # Schema setup
│
├── docs/                    # Documentation
│   └── README.md
│
└── docker/                  # Docker setup for dev/prod
    ├── docker-compose.yml
    └── Dockerfile
