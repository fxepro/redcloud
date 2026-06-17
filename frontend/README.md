# Redcloud Systems — Frontend (Next.js)

Public marketing site for Redcloud Systems. Next.js 15 (App Router) + TypeScript + Tailwind CSS, deployed on **Netlify**, consuming the Laravel API (on Railway) for content and form submissions.

## Architecture

- **Content layer** lives in `src/lib/api.ts`. When `NEXT_PUBLIC_API_URL` is set it fetches from the Laravel backend; otherwise it serves the bundled seed content in `src/lib/content.ts`, so the site builds and runs standalone.
- **Forms** post to `POST {API}/api/forms/{key}` via `submitLead()`. With no API configured they resolve optimistically for local testing.
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
npm install
cp .env.example .env.local   # optional; set NEXT_PUBLIC_API_URL to use the Laravel backend
npm run dev                  # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Environment

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_API_URL` | Laravel API base (Railway). Empty = use bundled seed content. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata/sitemap. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile key for form spam protection. |
