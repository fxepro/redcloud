# Redcloud Systems

Two-app monorepo:

| Folder | Stack | Deploy |
| ------ | ----- | ------ |
| [`frontend/`](frontend/) | Next.js 15, TypeScript, Tailwind | Netlify |
| [`backend/`](backend/) | Laravel API (scaffold pending) | Railway (planned) |

Design and UI rules: [`docs/frontend-design-layout-standard.md`](docs/frontend-design-layout-standard.md) (primary). Legacy token detail: [`docs/design-system.md`](docs/design-system.md).

```bash
cd frontend && npm install && npm run dev
```

When the API is live: set `NEXT_PUBLIC_API_URL` in `frontend/.env.local` to the backend origin.
