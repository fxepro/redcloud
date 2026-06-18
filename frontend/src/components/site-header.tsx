"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { industries, aiSolutions } from "@/lib/content";
import { serviceCatalog } from "@/lib/services-data";
import { Icon } from "./icon";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface MegaItem {
  icon?: string;
  title: string;
  desc?: string;
  href: string;
}
interface MegaSection {
  title: string;
  items: MegaItem[];
  wide?: boolean;
}
interface Mega {
  cols: string;
  overview: { label: string; href: string };
  items?: MegaItem[];
  sections?: MegaSection[];
}

const MEGA: Record<string, Mega> = {
  Solutions: {
    cols: "lg:grid-cols-3",
    overview: { label: "All solutions", href: "/solutions" },
    sections: [
      {
        title: "Grow & Transform",
        items: [
          { icon: "Bot",        title: "AI Transformation",       desc: "Scale operations with intelligent automation and digital workers.",   href: "/solutions/ai-transformation" },
          { icon: "TrendingUp", title: "Revenue Growth",           desc: "More leads, better conversion, higher customer lifetime value.",       href: "/solutions/revenue-growth" },
          { icon: "RefreshCw",  title: "Digital Modernization",    desc: "Modernize apps, platforms, and business systems for the next decade.", href: "/solutions/digital-modernization" },
        ],
      },
      {
        title: "Protect & Optimize",
        items: [
          { icon: "Shield",     title: "Risk, Security & Compliance", desc: "Reduce risk and prepare for audits, regulations, and customers.",   href: "/solutions/risk-security-compliance" },
          { icon: "PiggyBank",  title: "Cost Optimization",           desc: "Cut technology spend while improving performance and reliability.", href: "/solutions/cost-optimization" },
          { icon: "HeartPulse", title: "Healthcare Transformation",   desc: "AI, compliance, and operational modernization for healthcare.",      href: "/solutions/healthcare-transformation" },
        ],
      },
      {
        title: "Lead & Innovate",
        items: [
          { icon: "Eye",        title: "Executive Intelligence",          desc: "Real-time insights and strategic intelligence for leadership.",     href: "/solutions/executive-intelligence" },
          { icon: "UserCog",    title: "Digital Workforce Transformation", desc: "Evolve your workforce for an AI-first economy.",                  href: "/solutions/digital-workforce" },
          { icon: "Lightbulb",  title: "Innovation & Emerging Technology", desc: "Position for future opportunities through AI strategy.",         href: "/solutions/innovation" },
        ],
      },
    ],
  },
  Services: {
    cols: "sm:grid-cols-2 lg:grid-cols-4",
    overview: { label: "All services", href: "/services" },
    items: serviceCatalog.map((s) => ({
      icon: s.icon,
      title: s.title,
      desc: s.excerpt,
      href: s.href,
    })),
  },
  Industries: {
    cols: "sm:grid-cols-3 lg:grid-cols-4",
    overview: { label: "All industries", href: "/industries" },
    items: industries.map((i) => ({
      icon: i.icon,
      title: i.title,
      desc: i.excerpt,
      href: `/industries/${i.slug}`,
    })),
  },
  "AI Solutions": {
    cols: "sm:grid-cols-3 lg:grid-cols-4",
    overview: { label: "AI Solutions overview", href: "/ai-solutions" },
    items: aiSolutions.map((a) => ({
      icon: "Cpu",
      title: a.title,
      desc: a.excerpt,
      href: `/ai-solutions/${a.slug}`,
    })),
  },
  AI: {
    cols: "lg:grid-cols-3",
    overview: { label: "AI overview", href: "/ai-development" },
    sections: [
      {
        title: "AI Development",
        items: [
          { icon: "Bot",          title: "Agentic AI Workflows",  desc: "Autonomous agents that plan and execute multi-step tasks end to end.",  href: "/ai-development#agentic" },
          { icon: "Plug",         title: "AI Integration",         desc: "Plug AI directly into the platforms you already run.",                   href: "/ai-development#integration" },
          { icon: "BrainCircuit", title: "Custom Models & RAG",    desc: "Domain-specific assistants grounded in your own data.",                  href: "/ai-development#custom-models" },
          { icon: "Cog",          title: "AI Automation & Ops",    desc: "Keep AI reliable, measured, and cost-aware in production.",              href: "/ai-development#automation" },
          { icon: "Rocket",       title: "Startup MVP Program",    desc: "Go from idea to live product in 30–60 days at a fraction of the cost.",  href: "/landing/startup-mvp" },
        ],
      },
      {
        title: "AI Solutions by Industry",
        wide: true,
        items: aiSolutions.map((a) => ({
          icon: "Cpu",
          title: a.title.replace(/ AI$/, ""),
          desc: a.excerpt,
          href: `/ai-solutions/${a.slug}`,
        })),
      },
    ],
  },
  Compliance: {
    cols: "lg:grid-cols-2",
    overview: { label: "Compliance overview", href: "/compliance" },
    sections: [
      {
        title: "Compliance Solutions",
        items: [
          { icon: "HeartPulse",    title: "HIPAA Readiness",            desc: "Protect patient data and healthcare information.",                 href: "/compliance/hipaa" },
          { icon: "BadgeCheck",    title: "SOC 2 Readiness",            desc: "Demonstrate security and operational maturity.",                   href: "/compliance/soc2" },
          { icon: "Globe",         title: "ISO 27001",                  desc: "Structured information security management.",                      href: "/compliance/iso27001" },
          { icon: "CreditCard",    title: "PCI DSS Readiness",          desc: "Protect payment card data and payment systems.",                   href: "/compliance/pci-dss" },
          { icon: "Lock",          title: "NIST Framework",             desc: "Security best practices and cyber resilience.",                    href: "/compliance/nist" },
          { icon: "Building2",     title: "CMMC Readiness",             desc: "DoD cybersecurity requirements for defense contractors.",          href: "/compliance/cmmc" },
        ],
      },
      {
        title: "Compliance Automation",
        items: [
          { icon: "Bell",          title: "AI Compliance Monitoring",   desc: "Never miss a regulatory change — automated alerts.",              href: "/landing/ai-compliance" },
          { icon: "Search",        title: "Security Assessments",       desc: "Identify vulnerabilities and compliance gaps.",                    href: "/landing/security-assessments" },
          { icon: "FileText",      title: "Policy & Documentation",     desc: "Develop policies, procedures, and operational controls.",          href: "/landing/policy-documentation" },
          { icon: "RefreshCw",     title: "Ongoing Compliance Support", desc: "Maintain and improve your compliance posture over time.",          href: "/landing/ongoing-compliance-support" },
        ],
      },
    ],
  },
};

const TOP: { title: string; href: string; mega?: string }[] = [
  { title: "Solutions", href: "/solutions", mega: "Solutions" },
  { title: "Services", href: "/services", mega: "Services" },
  { title: "Industries", href: "/industries", mega: "Industries" },
  { title: "AI", href: "/ai-development", mega: "AI" },
  { title: "Compliance", href: "/compliance", mega: "Compliance" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = open ? MEGA[open] : null;

  const openMenu = (m: string | null) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(m);
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-cream/85 backdrop-blur-md">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {TOP.map((item) =>
              item.mega ? (
                <div
                  key={item.title}
                  onMouseEnter={() => openMenu(item.mega!)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
                      open === item.mega ? "text-brand-600" : "text-ink-700 hover:text-brand-600",
                    )}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn("h-4 w-4 transition", open === item.mega && "rotate-180")}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  onMouseEnter={() => openMenu(null)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-600"
                >
                  {item.title}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="text-sm font-medium text-ink-700 hover:text-brand-600">
              Contact
            </Link>
            <Link href="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setMobile((v) => !v)} aria-label="Toggle menu">
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Full-width mega panel */}
      {active && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={() => openMenu(open)}
          onMouseLeave={scheduleClose}
        >
          <div className="border-t border-ink-200 bg-white shadow-lift">
            <div className="container py-7">
              <div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {open}
                </span>
                <Link
                  href={active.overview.href}
                  onClick={() => setOpen(null)}
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  {active.overview.label} →
                </Link>
              </div>

              {/* Sectioned layout (e.g. Compliance, AI) */}
              {active.sections ? (
                <div className={cn("grid gap-x-10", active.cols)}>
                  {active.sections.map((sec) => (
                    <div key={sec.title} className={sec.wide ? "lg:col-span-2" : undefined}>
                      <p className="mb-2 px-3 text-xs font-bold uppercase tracking-[0.14em] text-accent-700">
                        {sec.title}
                      </p>
                      <div className={cn("grid gap-y-0.5", sec.wide && "sm:grid-cols-2")}>
                        {sec.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={() => setOpen(null)}
                            className="group/i flex items-start gap-3 rounded-xl p-3 transition hover:bg-accent-50"
                          >
                            {it.icon && (
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 ring-1 ring-accent-100 transition group-hover/i:bg-accent-100">
                                <Icon name={it.icon} className="h-5 w-5" />
                              </span>
                            )}
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-ink-900 transition group-hover/i:text-brand-700">
                                {it.title}
                              </span>
                              {it.desc && (
                                <span className="mt-0.5 block text-xs leading-relaxed text-ink-500 line-clamp-2">
                                  {it.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Default flat layout */
                <div className={cn("grid gap-x-6 gap-y-1", active.cols)}>
                  {active.items?.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpen(null)}
                      className="group/i flex items-start gap-3 rounded-xl p-3 transition hover:bg-accent-50"
                    >
                      {it.icon && (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 ring-1 ring-accent-100 transition group-hover/i:bg-accent-100">
                          <Icon name={it.icon} className="h-5 w-5" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink-900 transition group-hover/i:text-brand-700">
                          {it.title}
                        </span>
                        {it.desc && (
                          <span className="mt-0.5 block text-xs leading-relaxed text-ink-500 line-clamp-2">
                            {it.desc}
                          </span>
                        )}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={cn("border-t border-ink-200 lg:hidden", mobile ? "block" : "hidden")}>
        <nav className="container flex flex-col gap-1 py-4">
          {TOP.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 font-medium text-ink-800"
                onClick={() => setMobile(false)}
              >
                {item.title}
              </Link>
              {item.mega && (
                <div className="ml-3 border-l border-ink-200 pl-3">
                  {MEGA[item.mega].sections
                    ? MEGA[item.mega].sections!.map((sec) => (
                        <div key={sec.title}>
                          <p className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-700">
                            {sec.title}
                          </p>
                          {sec.items.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block rounded-md px-3 py-1.5 text-sm text-ink-600"
                              onClick={() => setMobile(false)}
                            >
                              {c.title}
                            </Link>
                          ))}
                        </div>
                      ))
                    : MEGA[item.mega].items?.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-ink-600"
                          onClick={() => setMobile(false)}
                        >
                          {c.title}
                        </Link>
                      ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/quote" className="btn-primary mt-3" onClick={() => setMobile(false)}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
