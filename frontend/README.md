# Frontend

Public UI for this product. **Next.js 15** (App Router) + TypeScript + Tailwind CSS,
deployed on **Netlify**.

> This repo is a two-folder monorepo: **`frontend/`** (this app) and **`backend/`** (Laravel API).
> See root `docs/design-system.md` for layout rules. Do not assume every project uses Next.js —
> only that UI lives under `frontend/` and API under `backend/`.

## Architecture

- **Content layer** lives in `src/lib/api.ts`. When `NEXT_PUBLIC_API_URL` points at **`backend/`**, content is fetched from the API; otherwise bundled seed in `src/lib/content.ts`.
- **Forms** post via `submitLead()` to **`backend/`** (`POST /api/forms/{key}`) when configured; interim fallback: `src/app/api/forms/` or Web3Forms.
- **SEO**: per-page metadata, `sitemap.ts`, `robots.ts`. Slugs mirror the existing WordPress URLs for redirect-free SEO continuity.

## Routes

| Path | Description |
|---|---|
| `/` | Home |
| `/services` + `/services/[slug]` | 6 services |
| `/industries` + `/industries/[slug]` | 12 industries |
| `/ai-solutions` + `/ai-solutions/[slug]` | 12 AI verticals |
| `/portfolio` + `/portfolio/[slug]` | Filterable case studies |
| `/blog` + `/blog/[slug]` | Blog + related posts |
| `/about`, `/contact` | Company pages |
| `/quote`, `/appointment`, `/free-demo` | Lead-capture forms |
| `/privacy-policy`, `/cookie-policy`, `/website-terms-of-use` | Legal |

## Develop

```bash
cd frontend
npm install
cp .env.example .env.local   # optional; set NEXT_PUBLIC_API_URL to backend/
npm run dev                  # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Environment

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_API_URL` | **`backend/`** API base. Empty = bundled seed content + frontend form fallback. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata/sitemap. |
| `WEB3FORMS_ACCESS_KEY` | Web3Forms access key (free at web3forms.com). Delivers form submissions to your inbox. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile key for form spam protection. |
