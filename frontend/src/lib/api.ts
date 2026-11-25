import {
  aiSolutions,
  industries,
  portfolio,
  posts,
  services,
} from "./content";
import type { AiSolution, Industry, PortfolioItem, Post, Service } from "./types";

const API = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

/**
 * Thin content gateway. When NEXT_PUBLIC_API_URL is set we fetch from the
 * Laravel backend (Railway); otherwise we serve the bundled seed content so the
 * frontend runs and builds standalone.
 */
async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  if (!API) return fallback;
  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate: 300 } });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

// Services
export async function getServices(): Promise<Service[]> {
  return fetchJson("/api/services", services);
}
export async function getService(slug: string): Promise<Service | undefined> {
  const all = await getServices();
  return all.find((s) => s.slug === slug);
}

// Industries
export async function getIndustries(): Promise<Industry[]> {
  return fetchJson("/api/industries", industries);
}
export async function getIndustry(slug: string): Promise<Industry | undefined> {
  const all = await getIndustries();
  return all.find((i) => i.slug === slug);
}

// AI solutions
export async function getAiSolutions(): Promise<AiSolution[]> {
  return fetchJson("/api/ai-solutions", aiSolutions);
}
export async function getAiSolution(slug: string): Promise<AiSolution | undefined> {
  const all = await getAiSolutions();
  return all.find((a) => a.slug === slug);
}

// Portfolio
export async function getPortfolio(): Promise<PortfolioItem[]> {
  return fetchJson("/api/portfolio", portfolio);
}
export async function getPortfolioItem(slug: string): Promise<PortfolioItem | undefined> {
  const all = await getPortfolio();
  return all.find((p) => p.slug === slug);
}

// Blog
export async function getPosts(): Promise<Post[]> {
  const all = await fetchJson("/api/posts", posts);
  return [...all].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
export async function getPost(slug: string): Promise<Post | undefined> {
  const all = await getPosts();
  return all.find((p) => p.slug === slug);
}
export async function getRelatedPosts(post: Post): Promise<Post[]> {
  const all = await getPosts();
  return all.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
}

/** Submit a lead form to the Laravel backend or the built-in Next.js handler. */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const humanize = (key: string) =>
  key
    .split(/[-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

/**
 * Submit a lead form.
 * Web3Forms' free plan only accepts browser-side submissions (server-side needs Pro),
 * so this posts straight from the visitor's browser. The access key is public by design:
 * it can only deliver mail to the inbox registered for it.
 */
export async function submitLead(
  formKey: string,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; message: string }> {
  const thanks = "Thanks — we'll be in touch shortly.";

  if (payload._hp) return { ok: true, message: thanks }; // honeypot: silently drop bots

  const email = String(payload.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // A future backend (NEXT_PUBLIC_API_URL) takes over delivery when configured.
  if (API) {
    try {
      const res = await fetch(`${API}/api/forms/${formKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      return res.ok
        ? { ok: true, message: data.message ?? thanks }
        : { ok: false, message: data.message ?? "Something went wrong. Please try again." };
    } catch {
      return { ok: false, message: "Network error. Please try again." };
    }
  }

  if (!WEB3FORMS_KEY) {
    console.error("[forms] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not configured");
    return {
      ok: false,
      message: "Form delivery is not configured yet. Please email hello@redcloudsystems.com directly.",
    };
  }

  const fields = Object.fromEntries(
    Object.entries(payload).filter(
      ([key, value]) => !key.startsWith("_") && value != null && String(value).trim() !== "",
    ),
  );
  const name = String(payload.name ?? payload.first_name ?? "").trim();

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `[Redcloud] ${humanize(formKey)} — ${name || email}`,
        from_name: name || "Website visitor",
        form_key: formKey,
        page: typeof window !== "undefined" ? window.location.pathname : undefined,
        ...fields,
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      console.error("[forms] Web3Forms error:", data.message ?? res.status);
      return { ok: false, message: "Something went wrong. Please try again or email hello@redcloudsystems.com." };
    }
    return { ok: true, message: thanks };
  } catch {
    return { ok: false, message: "Network error. Please try again." };
  }
}
