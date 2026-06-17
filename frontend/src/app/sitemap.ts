import type { MetadataRoute } from "next";
import {
  getAiSolutions,
  getIndustries,
  getPortfolio,
  getPosts,
  getServices,
} from "@/lib/api";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://redcloudsystems.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, industries, ai, portfolio, posts] = await Promise.all([
    getServices(),
    getIndustries(),
    getAiSolutions(),
    getPortfolio(),
    getPosts(),
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/ai-solutions",
    "/ai-development",
    "/portfolio",
    "/blog",
    "/contact",
    "/quote",
    "/appointment",
    "/free-demo",
    "/privacy-policy",
    "/cookie-policy",
    "/website-terms-of-use",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...ai.map((a) => `/ai-solutions/${a.slug}`),
    ...portfolio.map((p) => `/portfolio/${p.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  return [...staticRoutes, ...dynamicRoutes];
}
