import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { CoreServices } from "@/components/offerings";
import { SectionHeading } from "@/components/section";
import { AiCard } from "@/components/cards";
import { LatestArticles } from "@/components/latest-articles";
import { CtaBanner } from "@/components/cta";
import { getPosts, getAiSolutions } from "@/lib/api";
import type { ServiceOffering } from "@/lib/types";

export const metadata: Metadata = {
  title: "AI Development",
  description:
    "Custom AI agents, automation, and integration built into the tools you already use.",
};

const heroImage =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80";

const features = [
  "Connects to your existing tools — no rebuild required",
  "Handles complex multi-step workflows end to end",
  "Operates 24/7 with zero downtime",
  "Scales without adding headcount",
  "Fully customized to your business processes",
  "Deployed in weeks, not months",
];

const offerings: ServiceOffering[] = [
  {
    title: "Agentic AI Workflows",
    description: "Autonomous agents that plan and execute multi-step tasks end to end.",
    bullets: [
      "Plan, act, and self-verify across steps",
      "Trigger from events, schedules, or chat",
      "Human-in-the-loop approvals where needed",
    ],
  },
  {
    title: "AI Integration",
    description: "Plug AI directly into the platforms you already run.",
    bullets: [
      "WordPress, enterprise ERP, and major CRMs",
      "Payment, email, and data systems via APIs",
      "No rebuild — agents work with your stack",
    ],
  },
  {
    title: "Custom Models & RAG",
    description: "Domain-specific assistants grounded in your own data.",
    bullets: [
      "Retrieval over your docs and knowledge base",
      "Private, secure deployments",
      "Tuned to your terminology and tone",
    ],
  },
  {
    title: "AI Automation & Ops",
    description: "Keep AI reliable, measured, and cost-aware in production.",
    bullets: [
      "Monitoring, evaluations, and guardrails",
      "Cost and latency optimization",
      "Continuous improvement after launch",
    ],
  },
];

export default async function AiDevelopmentPage() {
  const [posts, ai] = await Promise.all([getPosts(), getAiSolutions()]);

  return (
    <>
      <PageBanner
        icon="Cpu"
        title="AI Development"
        tagline="Custom AI agents and automation, built into the tools you already use."
        breadcrumbs={[{ label: "AI Development" }]}
        cta={{ label: "Book a free demo", href: "/free-demo", icon: <ArrowRight className="h-4 w-4" /> }}
      />

      <SubtextBar>
        We design, build, and integrate AI that does real work — planning multi-step
        tasks, connecting to your systems, and running around the clock.
      </SubtextBar>

      <MediaSplit image={heroImage} alt="AI development" priority>
        <p className="eyebrow">What it does</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          Your most capable digital team member
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-ink-600">
          <p>
            An AI agent built by Redcloud Systems can plan a multi-step task, connect
            to your existing software, and execute every step — filling forms, sending
            emails, updating records, routing leads — then loop back to verify the
            results. All without a human clicking anything.
          </p>
          <p>
            Think of it as a highly capable digital team member that works across every
            platform you already use, never sleeps, never makes data-entry errors, and
            scales instantly as your business grows.
          </p>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
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

      <CoreServices
        items={offerings}
        eyebrow="What we build"
        title="AI development services"
        action={
          <Link href="/quote" className="btn-primary">
            Scope your AI project
          </Link>
        }
      />

      {/* AI Solutions by Industry */}
      <section className="container section">
        <SectionHeading
          center
          eyebrow="By industry"
          title="AI solutions by industry"
          description="Explore how we apply AI in your sector — tailored agents, automations, and outcomes built for the way your business actually works."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ai.map((a, i) => (
            <AiCard key={a.slug} item={a} index={i} />
          ))}
        </div>
      </section>

      <LatestArticles posts={posts} />

      <CtaBanner />
    </>
  );
}
