# Backend API

Laravel API for this product. Sits alongside **`frontend/`** at the repo root — not inside it.

## Role

| Responsibility | Notes |
| -------------- | ----- |
| Form ingestion | `POST /api/forms/{formKey}` — validate, email, optionally persist |
| Content API | Posts, services, industries, portfolio (optional; frontend can use bundled seed until live) |
| Auth / admin | Future CMS or dashboard |
| Mail & jobs | SMTP, queues, webhooks — never in the static frontend |

## Status

Scaffold pending. The frontend currently runs standalone with seed content in
`frontend/src/lib/content.ts` and optional form handling via
`frontend/src/app/api/forms/` or Web3Forms.

When this app is live, set on the frontend:

```env
NEXT_PUBLIC_API_URL=https://your-api.example.com
```

## Conventions (when scaffolded)

```
backend/
├── app/Http/Controllers/Api/
├── routes/api.php          # All /api/* routes
├── .env.example
└── README.md               # This file
```

- JSON responses with `{ "message": "…" }` for form success/errors
- CORS enabled for the Netlify frontend origin
- Deploy separately (e.g. Railway) from `frontend/`

## Develop (after scaffold)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan serve   # http://localhost:8000
```

Run frontend in a second terminal from `frontend/` with
`NEXT_PUBLIC_API_URL=http://localhost:8000`.
