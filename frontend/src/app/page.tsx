import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section";
import { ServiceCard, IndustryCard, PostCard, AiCard } from "@/components/cards";
import { CustomerGrowth } from "@/components/customer-growth";
import { CtaBanner } from "@/components/cta";
import { Reviews } from "@/components/reviews";
import { getServices, getIndustries, getPosts, getAiSolutions, getPortfolio } from "@/lib/api";
import { reviews, reviewSummary } from "@/lib/reviews";

const stats = [
  { value: "20+", label: "Years enterprise software experience" },
  { value: "15+", label: "Years consumer & small-business software" },
  { value: "250+", label: "Active customer installations" },
];

const steps = [
  { n: "01", title: "Discover", body: "We dig into your goals, users, and constraints, then map the fastest path to value." },
  { n: "02", title: "Design", body: "Architecture and UX you can see and react to — before a line of production code." },
  { n: "03", title: "Build", body: "Agile sprints with weekly demos, automated tests, and CI/CD from day one." },
  { n: "04", title: "Support", body: "We monitor, patch, and keep improving long after launch day." },
];

export default async function HomePage() {
  const [services, industries, posts, ai, portfolio] = await Promise.all([
    getServices(),
    getIndustries(),
    getPosts(),
    getAiSolutions(),
    getPortfolio(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent-100/70 blur-3xl" />
        <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow">Software Engineering · AI Automation</p>
            <h1 className="mt-5 text-5xl leading-[1.1] sm:text-6xl lg:text-7xl">
              Cut Costs. Deploy AI.<br />
              Modernize Operations.<br />
              <span className="italic text-brand-600">Ensure Compliance.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
              We help businesses reduce infrastructure spend, automate workflows,
              maintain compliance, and ship software that actually moves the needle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-primary">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                See our work
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["bg-brand-600", "bg-accent-500", "bg-accent-800", "bg-accent-300"].map((c, i) => (
                  <span key={i} className={`h-9 w-9 rounded-full ${c} ring-2 ring-cream`} />
                ))}
              </div>
              <p className="text-sm font-medium text-ink-600">
                250+ active installations across 12 industries
              </p>
            </div>
          </div>

          {/* Right: by-the-numbers panel */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-white/70 p-8 shadow-lift backdrop-blur">
              <p className="eyebrow">By the numbers</p>
              <div className="mt-6 space-y-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline gap-4 border-b border-ink-100 pb-5 last:border-0 last:pb-0"
                  >
                    <p className="font-display text-5xl text-brand-600">{s.value}</p>
                    <p className="text-sm font-medium text-ink-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-ink-200/60 bg-sand-100">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Selected clients
          </span>
          {portfolio.slice(0, 6).map((p) => (
            <span key={p.slug} className="font-display text-lg text-ink-400">
              {p.title}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Full-lifecycle engineering, built around outcomes"
          description="From strategy and design to launch and long-term support — one team that owns the result."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-accent-950">
        <div className="container py-24">
          <SectionHeading
            eyebrow="How we work"
            title="A simple, transparent process"
            description="No black boxes. You see progress every week and own everything we build."
            light
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-accent-800 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-accent-950 p-8">
                <span className="font-display text-4xl text-brand-500">{s.n}</span>
                <h3 className="mt-4 text-xl !text-cream">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-sand-100 py-24">
        <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="AI Solutions"
            title="Agentic AI, tuned to your vertical"
            description="Put AI to work on the repetitive, high-volume tasks slowing your team down."
          />
          <Link href="/ai-solutions" className="hidden shrink-0 items-center gap-1 font-semibold text-brand-700 sm:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ai.slice(0, 8).map((a, i) => (
            <AiCard key={a.slug} item={a} index={i} />
          ))}
        </div>
        </div>
      </section>

      {/* Industries */}
      <section>
        <div className="container py-24">
          <SectionHeading
            eyebrow="Industries"
            title="We speak your industry's language"
            description="Patterns, integrations, and compliance know-how specific to your sector."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <IndustryCard key={i.slug} industry={i} />
            ))}
          </div>
        </div>
      </section>

      <CustomerGrowth />

      {/* Reviews (manual — auto-hides until reviews are added) */}
      <Reviews reviews={reviews} summary={reviewSummary} />

      {/* Blog */}
      <section className="container py-24">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Insights" title="From the blog" />
          <Link href="/blog" className="hidden shrink-0 items-center gap-1 font-semibold text-brand-700 sm:flex">
            All posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
