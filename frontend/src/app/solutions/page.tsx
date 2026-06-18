import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { CtaBanner } from "@/components/cta";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Nine outcome-focused solution packs — from AI transformation and revenue growth to compliance, cost optimization, and innovation.",
};

interface IncludeItem {
  label: string;
  href?: string;
}

interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
  includes: IncludeItem[];
  execQuestion: string;
  href: string;
  accent: string;
}

const solutions: Solution[] = [
  {
    id: "ai-transformation",
    icon: "Bot",
    title: "AI Transformation",
    description:
      "Transform operations through intelligent automation, digital workers, and AI-driven decision making.",
    includes: [
      { label: "AI Workforce",         href: "/landing/ai-workforce" },
      { label: "AI Operations",        href: "/landing/ai-operations" },
      { label: "AI Knowledge Systems", href: "/landing/ai-knowledge" },
      { label: "Business Automation",  href: "/landing/automation" },
      { label: "AI Voice Agents",      href: "/landing/ai-voice" },
      { label: "AI Customer Service",  href: "/landing/ai-customer-service" },
    ],
    execQuestion: "How do we scale without adding headcount?",
    href: "/solutions/ai-transformation",
    accent: "bg-accent-600",
  },
  {
    id: "revenue-growth",
    icon: "TrendingUp",
    title: "Revenue Growth",
    description:
      "Generate more leads, improve conversion rates, and increase customer lifetime value.",
    includes: [
      { label: "AI Sales",              href: "/landing/ai-sales" },
      { label: "AI Customer Service",   href: "/landing/ai-customer-service" },
      { label: "Digital Marketing",     href: "/services/digital-marketing" },
      { label: "Website Modernization", href: "/landing/wordpress" },
      { label: "Marketing Automation",  href: "/landing/automation" },
      { label: "Conversion Optimization" },
    ],
    execQuestion: "How do we grow revenue faster?",
    href: "/solutions/revenue-growth",
    accent: "bg-brand-600",
  },
  {
    id: "risk-security-compliance",
    icon: "Shield",
    title: "Risk, Security & Compliance",
    description:
      "Reduce risk, improve governance, and prepare for audits, regulations, and customer requirements.",
    includes: [
      { label: "HIPAA",                href: "/compliance/hipaa" },
      { label: "SOC 2",               href: "/compliance/soc2" },
      { label: "ISO 27001",           href: "/compliance/iso27001" },
      { label: "PCI DSS",             href: "/compliance/pci-dss" },
      { label: "NIST",                href: "/compliance/nist" },
      { label: "CMMC",                href: "/compliance/cmmc" },
      { label: "Security Assessments", href: "/landing/security-assessments" },
      { label: "Compliance Automation", href: "/landing/ai-compliance" },
    ],
    execQuestion: "How do we reduce organizational risk?",
    href: "/solutions/risk-security-compliance",
    accent: "bg-accent-800",
  },
  {
    id: "cost-optimization",
    icon: "PiggyBank",
    title: "Cost Optimization",
    description:
      "Reduce technology spend while improving performance and reliability.",
    includes: [
      { label: "Cloud Cost Reduction",      href: "/landing/cloud-cost" },
      { label: "Infrastructure Optimization" },
      { label: "Cloud Migration" },
      { label: "Legacy Modernization",      href: "/landing/legacy" },
      { label: "Performance Optimization",  href: "/landing/performance" },
      { label: "Free Digital Audit",        href: "/landing/free-audit" },
    ],
    execQuestion: "How do we lower costs without slowing growth?",
    href: "/solutions/cost-optimization",
    accent: "bg-green-600",
  },
  {
    id: "executive-intelligence",
    icon: "Eye",
    title: "Executive Intelligence",
    description:
      "Deliver real-time insights, market awareness, and strategic intelligence to leadership teams.",
    includes: [
      { label: "Executive Intelligence Platform", href: "/landing/executive-intelligence" },
      { label: "Competitive Intelligence" },
      { label: "Market Monitoring" },
      { label: "Regulatory Intelligence",    href: "/landing/ai-compliance" },
      { label: "AI Research Agents",         href: "/landing/ai-knowledge" },
      { label: "AI Operations Center",       href: "/landing/ai-operations" },
    ],
    execQuestion: "What should leadership know before competitors do?",
    href: "/solutions/executive-intelligence",
    accent: "bg-accent-700",
  },
  {
    id: "digital-modernization",
    icon: "RefreshCw",
    title: "Digital Modernization",
    description:
      "Modernize customer experiences, applications, platforms, and business systems.",
    includes: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "ERP Implementation",          href: "/services/erp-implementation" },
      { label: "Website Modernization",       href: "/landing/wordpress" },
      { label: "Website Care & Growth",       href: "/landing/care-growth" },
      { label: "Customer Portals" },
      { label: "SaaS Platforms",              href: "/landing/startup-mvp" },
    ],
    execQuestion: "How do we modernize the business for the next decade?",
    href: "/solutions/digital-modernization",
    accent: "bg-brand-700",
  },
  {
    id: "healthcare-transformation",
    icon: "HeartPulse",
    title: "Healthcare Transformation",
    description:
      "Healthcare AI, patient engagement, compliance, and operational modernization.",
    includes: [
      { label: "HIPAA Readiness",             href: "/compliance/hipaa" },
      { label: "Healthcare AI Assistants",    href: "/ai-solutions/healthcare-ai" },
      { label: "Compliance Monitoring",       href: "/landing/ai-compliance" },
      { label: "AI Knowledge Systems",        href: "/landing/ai-knowledge" },
      { label: "AI Voice Agents",             href: "/landing/ai-voice" },
      { label: "Patient Communication" },
    ],
    execQuestion:
      "How do we improve care while reducing administrative burden?",
    href: "/solutions/healthcare-transformation",
    accent: "bg-red-600",
  },
  {
    id: "digital-workforce",
    icon: "UserCog",
    title: "Digital Workforce Transformation",
    description:
      "Evolve your workforce for an AI-first economy through automation, reengineering, and change management.",
    includes: [
      { label: "AI Workforce Automation",     href: "/landing/ai-workforce" },
      { label: "AI Operations Center",        href: "/landing/ai-operations" },
      { label: "Business Automation",         href: "/landing/automation" },
      { label: "AI Knowledge Systems",        href: "/landing/ai-knowledge" },
      { label: "Process Reengineering" },
      { label: "Productivity Measurement" },
    ],
    execQuestion: "How does our workforce evolve in an AI-first economy?",
    href: "/solutions/digital-workforce",
    accent: "bg-accent-600",
  },
  {
    id: "innovation",
    icon: "Lightbulb",
    title: "Innovation & Emerging Technology",
    description:
      "Position your organization to capture future opportunities through AI strategy and emerging tech.",
    includes: [
      { label: "AI Strategy",                    href: "/ai-development" },
      { label: "Startup MVP Program",            href: "/landing/startup-mvp" },
      { label: "Proof-of-Concept Development",   href: "/landing/startup-mvp" },
      { label: "AI Content Factory",             href: "/landing/ai-content" },
      { label: "Emerging Technology Assessments" },
      { label: "Innovation Labs" },
    ],
    execQuestion:
      "What technologies will create our next competitive advantage?",
    href: "/solutions/innovation",
    accent: "bg-brand-500",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        icon="Layers"
        title="Solutions"
        tagline="Nine outcome-focused solution packs designed around the questions executives actually ask."
        breadcrumbs={[{ label: "Solutions" }]}
        cta={{ label: "Talk to a strategist", href: "/contact", icon: <ArrowRight className="h-4 w-4" /> }}
      />

      <SubtextBar>
        Every engagement starts with a business outcome — not a technology. Choose the pack that matches
        your priority and we&apos;ll map the right capabilities to get you there.
      </SubtextBar>

      {/* Solution cards */}
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((sol) => (
            <article
              key={sol.title}
              id={sol.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              {/* Accent bar + icon */}
              <div className={`${sol.accent} flex items-center gap-3 px-6 py-4`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white ring-1 ring-white/30">
                  <Icon name={sol.icon} className="h-5 w-5" />
                </span>
                <h2
                  className={`font-semibold text-white ${
                    sol.title.length > 24 ? "text-lg leading-snug" : "text-base"
                  }`}
                >
                  {sol.title}
                </h2>
              </div>

              <div className="flex flex-1 flex-col p-6">
                {/* Description */}
                <p className="text-sm leading-relaxed text-ink-600">{sol.description}</p>

                {/* Includes */}
                <div className="mt-5">
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-400">
                    Includes
                  </p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {sol.includes.map((item) => (
                      <li key={item.label} className="flex items-center gap-1.5 text-xs">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-accent-700 underline-offset-2 transition hover:underline"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-ink-500">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Executive question */}
                <div className="mt-5 flex-1 rounded-xl bg-ink-50 px-4 py-3">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-400">
                    Executive Question
                  </p>
                  <p className="text-sm font-semibold italic leading-snug text-ink-800">
                    &ldquo;{sol.execQuestion}&rdquo;
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={sol.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                >
                  Explore solution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Callout strip */}
      <section className="bg-ink-50">
        <div className="container py-14 text-center">
          <p className="eyebrow">Not sure where to start?</p>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl">
            We&apos;ll map the right solutions to your priorities
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            Most clients combine two or three solution packs. A 30-minute strategy call is all
            it takes to identify where AI and modernization will move the needle fastest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a strategy call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/quote" className="btn-ghost">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
