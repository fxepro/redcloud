/**
 * Site knowledge for the chat assistant, built from the same data the pages render.
 * Deterministic output (no dates/random) so the system prompt stays prompt-cacheable.
 */
import { site, services, industries, aiSolutions } from "@/lib/content";
import { compliancePrograms } from "@/lib/compliance-data";
import { solutionDetails } from "@/lib/solutions-detail-data";

/** Campaign programs (generated from each /landing page's metadata). */
const landingPrograms = [
  { href: "/landing/ai-compliance", title: "AI Compliance & Policy Monitoring", summary: "Never miss a regulatory change. AI monitors regulations, compliance requirements, and policy changes across your industry \u2014 and alerts you the moment something affects your business." },
  { href: "/landing/ai-content", title: "AI Content & Marketing Factory", summary: "Generate blog posts, newsletters, social media, and more at scale. AI-powered content creation with a Research \u2192 Draft \u2192 Review \u2192 Publish workflow \u2014 largely automated." },
  { href: "/landing/ai-customer-service", title: "AI Customer Service Program", summary: "Deploy AI agents that answer customer questions instantly \u2014 24/7, across chat and voice. Free assessment. No obligation." },
  { href: "/landing/ai-knowledge", title: "AI Knowledge Assistant", summary: "Turn your company's PDFs, emails, and internal documents into instant answers. Private AI trained on your business knowledge \u2014 no data leaves your organization." },
  { href: "/landing/ai-operations", title: "AI Operations Center", summary: "Real-time business intelligence across your CRM, ERP, accounting, inventory, and marketing systems. Ask your data questions in plain English \u2014 get instant answers." },
  { href: "/landing/ai-sales", title: "AI Sales Automation Program", summary: "Qualify leads automatically, follow up instantly, and close more deals \u2014 without adding sales headcount. Free assessment." },
  { href: "/landing/ai-voice", title: "AI Voice Agents", summary: "An AI receptionist that answers every call, schedules appointments, and qualifies leads 24/7. Never miss a lead again." },
  { href: "/landing/ai-workforce", title: "AI Workforce Program", summary: "Deploy AI employees that work 24/7 so your team can focus on growth. Free AI workflow assessment. No obligation." },
  { href: "/landing/automation", title: "Business Automation Program", summary: "Eliminate repetitive manual work across your business. Automate workflows, reduce errors, and free your team for work that matters." },
  { href: "/landing/care-growth", title: "Website Care & Growth Plan", summary: "Your outsourced web team. Monthly plans covering updates, security monitoring, backups, SEO improvements, performance monitoring, and content updates." },
  { href: "/landing/cloud-cost", title: "Cloud Cost Reduction Program", summary: "Cut your AWS bill by up to 80% without breaking your application. Free cloud cost audit. No obligation." },
  { href: "/landing/executive-intelligence", title: "Executive Intelligence Program", summary: "AI-powered research and monitoring that delivers executive-grade intelligence daily \u2014 without an analyst on staff." },
  { href: "/landing/free-audit", title: "Free Digital Audit", summary: "Uncover hidden performance, SEO, security, and cost issues in your business. Free 10\u201315 page report with actionable recommendations. No obligation." },
  { href: "/landing/free-website", title: "Free Business Website", summary: "Get a professional business website at no cost. Contact form, mobile design, Google Maps, and basic SEO included. Pay only if you need advanced features." },
  { href: "/landing/legacy", title: "Legacy Application Modernization Program", summary: "Modernize outdated software without losing your data, your users, or your business continuity. Free legacy assessment." },
  { href: "/landing/ongoing-compliance-support", title: "Ongoing Compliance Support", summary: "Compliance is not a project \u2014 it's a continuous program. Ongoing support for HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC to maintain audit readiness and security maturity." },
  { href: "/landing/performance", title: "Performance Optimization Program", summary: "Slow applications cost you users, revenue, and search rankings. We diagnose and fix performance problems across your entire stack." },
  { href: "/landing/policy-documentation", title: "Policy & Documentation", summary: "Build the governance foundation behind compliance. Practical policies, procedures, and operational documentation for HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC readiness." },
  { href: "/landing/security-assessments", title: "Security Assessments", summary: "Identify risks before they become incidents. Security assessments that reveal vulnerabilities, compliance gaps, and prioritized remediation \u2014 for audits, customers, and stronger defenses." },
  { href: "/landing/startup-mvp", title: "Startup MVP Program", summary: "Launch your SaaS, marketplace, or customer portal in 30\u201360 days. Production-ready MVP built on Next.js, Laravel, and Railway. Validate your idea before burning your runway." },
  { href: "/landing/wordpress", title: "WordPress Modernization Program", summary: "Turn your slow, insecure WordPress website into a lightning-fast modern platform. Free assessment. No obligation." },
];

const offeringLines = (items?: { title: string; description: string }[]) =>
  (items ?? []).map((o) => `    - ${o.title}: ${o.description}`).join("\n");

function buildKnowledge(): string {
  const parts: string[] = [];

  parts.push(`## Company
${site.name} — ${site.tagline}
${site.description}
Contact email: ${site.email}
Locations: based in ${site.locations.join(" and ")}. Serves clients nationwide: after an initial call, the team can meet clients in person anywhere in the US. No street address is published — if asked for one, say this and offer /appointment or email.
Phone: not published — direct people to email or /appointment.`);

  parts.push(
    "## Services\n" +
      services
        .map(
          (s) =>
            `- ${s.title} (/services/${s.slug}): ${s.tagline ?? s.excerpt}\n` +
            offeringLines(s.offerings),
        )
        .join("\n"),
  );

  parts.push(
    "## Solutions (business outcomes)\n" +
      solutionDetails.map((s) => `- ${s.title} (/solutions/${s.slug}): ${s.tagline}`).join("\n"),
  );

  parts.push(
    "## Compliance programs\n" +
      compliancePrograms
        .map(
          (c) =>
            `- ${c.title} (/compliance/${c.slug}): ${c.tagline} Who we help: ${c.whoWeHelp}\n` +
            offeringLines(c.services),
        )
        .join("\n"),
  );

  parts.push(
    "## AI solutions by industry\n" +
      aiSolutions
        .map((a) => `- ${a.title} (/ai-solutions/${a.slug}): ${a.excerpt} Outcomes: ${a.outcomes.join(", ")}.`)
        .join("\n"),
  );

  parts.push(
    "## Industries served\n" +
      industries.map((i) => `- ${i.title} (/industries/${i.slug}): ${i.tagline ?? i.excerpt}`).join("\n"),
  );

  parts.push(
    "## Programs and offers\n" +
      landingPrograms.map((p) => `- ${p.title} (${p.href}): ${p.summary}`).join("\n"),
  );

  parts.push(`## Key pages
- Get a quote: /quote
- Book an appointment / consultation: /appointment
- Free demo: /free-demo
- Contact: /contact
- Free digital audit: /landing/free-audit
- Portfolio (case studies): /portfolio
- Blog: /blog
- About: /about`);

  return parts.join("\n\n");
}

export const siteKnowledge = buildKnowledge();
