#!/usr/bin/env node
/**
 * Crawl internal links and report broken responses.
 *
 * Usage (dev server must be running):
 *   npm run dev          # terminal 1
 *   npm run check-links  # terminal 2
 *
 * Production:
 *   npm run check-links:prod
 *   node scripts/check-links.mjs https://redcloudsystems.com
 *
 * Options:
 *   BASE_URL env var, or --base https://example.com  (default http://127.0.0.1:3000)
 *   MAX_PAGES=500
 */

const argBase = process.argv.find((a) => a.startsWith("--base="))?.slice(7)
  ?? (process.argv[2]?.startsWith("http") ? process.argv[2] : undefined);
const BASE_URL = (argBase ?? process.env.BASE_URL ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const MAX_PAGES = Number(process.env.MAX_PAGES ?? 500);

const SKIP_PREFIXES = ["/api/", "/_next/", "/icon.png", "/favicon"];
const SKIP_EXTENSIONS = /\.(png|jpe?g|gif|webp|svg|ico|pdf|zip|xml|txt|woff2?)$/i;

function normalizeUrl(href, current) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }
  try {
    const url = new URL(href, current);
    if (url.origin !== new URL(BASE_URL).origin) return null;
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

function shouldSkip(pathname) {
  if (SKIP_EXTENSIONS.test(pathname)) return true;
  return SKIP_PREFIXES.some((p) => pathname.startsWith(p));
}

function extractLinks(html, pageUrl) {
  const links = new Set();
  const re = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const normalized = normalizeUrl(match[1], pageUrl);
    if (!normalized) continue;
    const { pathname } = new URL(normalized);
    if (shouldSkip(pathname)) continue;
    links.add(normalized);
  }
  return links;
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    const contentType = res.headers.get("content-type") ?? "";
    const isHtml = contentType.includes("text/html");
    let html = "";
    if (isHtml) html = await res.text();
    return { url, status: res.status, ok: res.ok, html, isHtml };
  } catch (err) {
    return {
      url,
      status: 0,
      ok: false,
      html: "",
      isHtml: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function main() {
  console.log(`Checking internal links at ${BASE_URL}\n`);

  const queue = [BASE_URL + "/"];
  const seen = new Set();
  const broken = [];
  const checked = [];

  while (queue.length > 0 && seen.size < MAX_PAGES) {
    const url = queue.shift();
    if (!url || seen.has(url)) continue;
    seen.add(url);

    const result = await checkUrl(url);
    checked.push(result);

    const label = result.status ? `${result.status}` : "ERR";
    process.stdout.write(`[${label}] ${url}\n`);

    if (!result.ok) {
      broken.push(result);
      continue;
    }

    if (result.isHtml && result.html) {
      for (const link of extractLinks(result.html, url)) {
        if (!seen.has(link) && !queue.includes(link)) queue.push(link);
      }
    }
  }

  console.log(`\nChecked ${checked.length} page(s).`);

  if (broken.length === 0) {
    console.log("No broken internal links found.");
    process.exit(0);
  }

  console.log(`\nBroken links (${broken.length}):`);
  for (const b of broken) {
    const detail = b.error ? ` — ${b.error}` : "";
    console.log(`  ${b.status || "ERR"} ${b.url}${detail}`);
  }
  process.exit(1);
}

main();
