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
export async function submitLead(
  formKey: string,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; message: string }> {
  const endpoint = API ? `${API}/api/forms/${formKey}` : `/api/forms/${formKey}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { message?: string };
    if (!res.ok) {
      return { ok: false, message: data.message ?? "Something went wrong. Please try again." };
    }
    return { ok: true, message: data.message ?? "Thanks — we'll be in touch shortly." };
  } catch {
    return { ok: false, message: "Network error. Please try again." };
  }
}
