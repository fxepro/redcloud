import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { CoreServices } from "@/components/offerings";
import { SectionHeading } from "@/components/section";
import { AiCard } from "@/components/cards";
import { CtaBanner } from "@/components/cta";
import { getAiSolutions } from "@/lib/api";
import type { ServiceOffering } from "@/lib/types";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Agentic AI and automation tailored to twelve industries — grounded in your data, integrated with your tools, and measured on real outcomes.",
};

const heroImage =
  "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1200&q=80";

const valueProps = [
  "Industry-specific, not one-size-fits-all",
  "Plugs into your existing stack",
  "Grounded in your own data (RAG)",
  "Production-grade, not pilots",
];

const pillars: ServiceOffering[] = [
  {
    title: "Built for your vertical",
    description: "Every solution is shaped by your industry's workflows, data, and compliance needs.",
    bullets: ["Sector-specific models and prompts", "Workflow mapping with your team", "Compliance-aware by design"],
  },
  {
    title: "Integrated, not bolted on",
    description: "Agents work inside the tools you already run.",
    bullets: ["Connects to CRM, ERP, and data systems", "API-first integration", "No rebuild required"],
  },
  {
    title: "Measured on outcomes",
    description: "We target ROI you can see — not demos.",
    bullets: ["Clear success metrics up front", "Track time and cost saved", "Iterate on real usage"],
  },
  {
    title: "Production-grade & secure",
    description: "Reliable AI you can trust in day-to-day operations.",
    bullets: ["Monitoring, evals, and guardrails", "Private, secure deployments", "Ongoing support and optimization"],
  },
];

export default async function AiSolutionsPage() {
  const ai = await getAiSolutions();

  return (
    <>
      <PageBanner
        icon="Cpu"
        title="AI Solutions"
        tagline="AI automation tuned to the way your industry actually works."
        breadcrumbs={[{ label: "AI Solutions" }]}
        cta={{ label: "Book a free demo", href: "/free-demo", icon: <ArrowRight className="h-4 w-4" /> }}
      />

      <SubtextBar>
        We build agentic AI and automation for twelve industries — grounded in your
        data, plugged into your tools, and measured on real outcomes.
      </SubtextBar>

      <MediaSplit image={heroImage} alt="AI solutions" priority>
        <p className="eyebrow">The approach</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          AI built around your business — and your industry
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-ink-600">
          <p>
            Generic AI tools don&apos;t know your business. We build AI that does —
            trained on your data, mapped to your workflows, and integrated with the
            systems your team already uses every day.
          </p>
          <p>
            From lead qualification to document processing to predictive insights, our
            solutions take on the repetitive, high-volume work that slows your team
            down — so your people can focus on what matters.
          </p>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {valueProps.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm font-medium text-ink-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              {f}
            </li>
          ))}
        </ul>
        <Link href="/free-demo" className="btn-primary mt-8">
          Book a free demo <ArrowRight className="h-4 w-4" />
        </Link>
      </MediaSplit>

      <CoreServices items={pillars} eyebrow="Why Redcloud" title="What sets our AI apart" />

      {/* Verticals — lead into the individual industry AI pages */}
      <section className="container section">
        <SectionHeading
          center
          eyebrow="By industry"
          title="AI solutions by industry"
          description="Explore how we apply AI in your sector — each with tailored agents, automations, and outcomes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ai.map((a) => (
            <AiCard key={a.slug} item={a} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
