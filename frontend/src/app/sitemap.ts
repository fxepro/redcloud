import type { MetadataRoute } from "next";
import {
  getAiSolutions,
  getIndustries,
  getPortfolio,
  getPosts,
  getServices,
} from "@/lib/api";
import { compliancePrograms } from "@/lib/compliance-data";
import { solutionDetails } from "@/lib/solutions-detail-data";

const landingPages = [
  "wordpress",
  "cloud-cost",
  "performance",
  "legacy",
  "startup-mvp",
  "care-growth",
  "ai-workforce",
  "ai-customer-service",
  "ai-sales",
  "automation",
  "executive-intelligence",
  "ai-knowledge",
  "ai-compliance",
  "ai-content",
  "ai-voice",
  "ai-operations",
  "free-audit",
  "free-website",
  "security-assessments",
  "policy-documentation",
  "ongoing-compliance-support",
];

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
    "/solutions",
    "/compliance",
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
    ...solutionDetails.map((s) => `/solutions/${s.slug}`),
    ...compliancePrograms.map((c) => `/compliance/${c.slug}`),
    ...landingPages.map((slug) => `/landing/${slug}`),
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  return [...staticRoutes, ...dynamicRoutes];
}
