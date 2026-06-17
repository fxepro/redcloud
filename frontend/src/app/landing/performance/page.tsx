import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Gauge, TrendingUp, DollarSign, Shield } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Performance Optimization Program — Redcloud Systems",
  description:
    "Slow applications cost you users, revenue, and search rankings. We diagnose and fix performance problems across your entire stack.",
};

const problems = [
  "Users abandoning because pages and features load too slowly",
  "High server costs from inefficient queries and poor caching",
  "Poor Core Web Vitals dragging down search engine rankings",
  "Database queries that take seconds when they should take milliseconds",
  "APIs that can't handle load — breaking under peak traffic",
  "Mobile performance far worse than desktop — losing half your audience",
];

const optimizations = [
  { name: "Core Web Vitals & SEO",       desc: "Achieve 90+ Lighthouse scores. Fix LCP, CLS, and FID to recover rankings and stop losing organic traffic." },
  { name: "Database Query Optimization", desc: "Index analysis, query rewrites, and caching strategies that reduce response times from seconds to milliseconds." },
  { name: "API & Backend Performance",   desc: "Profile and optimize your API layer — eliminate bottlenecks, add caching, and prepare for 10x traffic spikes." },
  { name: "Image & Asset Delivery",      desc: "Modern formats, lazy loading, and CDN configuration that shave seconds off initial load — especially on mobile." },
  { name: "Infrastructure Right-Sizing", desc: "Match your server and cloud resources to actual load — stop overpaying for capacity you don't use." },
  { name: "Load Testing & Capacity",     desc: "Simulate traffic spikes before they happen in production and find the breaking points before your users do." },
];

const benefits = [
  { icon: Gauge,       title: "Faster at Every Layer",  body: "Frontend, backend, database, and infrastructure — we optimize the full stack, not just the surface." },
  { icon: TrendingUp,  title: "Higher Rankings",        body: "Google uses Core Web Vitals as a ranking signal. Faster apps rank higher and get more organic traffic." },
  { icon: DollarSign,  title: "Lower Infrastructure Cost", body: "Efficient code needs less compute. Performance optimization often pays for itself in reduced server bills." },
  { icon: Shield,      title: "More Reliable Under Load", body: "Optimized systems handle traffic spikes without degrading. No more 3am alerts when you hit the news." },
];

const steps = [
  { n: "01", title: "Performance Audit",    body: "We run a full-stack diagnostic — frontend, backend, database, and infrastructure — and produce a prioritized fix list with expected impact." },
  { n: "02", title: "Fix Roadmap",          body: "Findings organized by effort and impact. Quick wins identified for immediate deployment while larger optimizations are scoped." },
  { n: "03", title: "Implementation",       body: "We execute the fixes — query rewrites, caching layers, CDN config, asset optimization, and code-level improvements." },
  { n: "04", title: "Validate & Monitor",   body: "Before/after benchmarks documented. Monitoring in place to catch regressions and track improvements over time." },
];

const formFields = [
  { name: "first_name",  label: "First Name",         required: true },
  { name: "last_name",   label: "Last Name",          required: true },
  { name: "email",       label: "Work Email",         type: "email" as const, required: true },
  { name: "company",     label: "Company Name",       required: true },
  {
    name: "layer", label: "Where is the biggest performance problem?",
    type: "select" as const, required: true,
    options: ["Frontend / page load speed", "Database / query performance", "API / backend response times", "Infrastructure / scaling", "Mobile performance", "Not sure — need a full audit"],
  },
  { name: "pain", label: "Describe the performance problem costing you the most right now.", type: "textarea" as const, full: true },
];

export default function PerformanceLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: sand-200 (warm neutral, deeper than sand-100) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-200 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left */}
          <div>
            <p className="eyebrow">Performance Optimization Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Every Second Your App Is Slow,{" "}
              <span className="italic text-brand-600">You&apos;re Losing Users and Revenue.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We diagnose and fix performance problems across your entire stack — frontend, API,
              database, and infrastructure — so your application is fast, reliable, and ready to
              scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Performance Audit <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/services/technical-consulting" className="btn-ghost px-8 py-4 text-base">
                See our work
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before</p>
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">42</p>
              <p className="mt-1 text-sm text-ink-500">Lighthouse performance score</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> 6s+ load times</p>
                <p className="flex items-center gap-2"><span>✗</span> High bounce rate</p>
                <p className="flex items-center gap-2"><span>✗</span> Poor search rankings</p>
                <p className="flex items-center gap-2"><span>✗</span> Crashes under load</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-600">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600">After</p>
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">90+</p>
              <p className="mt-1 text-sm text-ink-500">Lighthouse performance score</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Sub-second load times</p>
                <p className="flex items-center gap-2"><span>✓</span> Lower bounce rate</p>
                <p className="flex items-center gap-2"><span>✓</span> Improved search rankings</p>
                <p className="flex items-center gap-2"><span>✓</span> Scales under peak traffic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Problem ── */}
      <section className="bg-ink-950 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-brand-400" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">
                Slow Applications Don&apos;t Just Frustrate Users — They Cost You Money.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Amazon found that every 100ms of latency costs 1% in revenue. Google drops pages
                from search results when Core Web Vitals are poor. Users abandon apps that don&apos;t
                respond in under 3 seconds.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Performance isn&apos;t a nice-to-have. It&apos;s a business-critical metric that
                directly affects revenue, acquisition, and retention.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-xl border border-ink-800 bg-ink-900 px-5 py-4">
                  <span className="mt-0.5 shrink-0 text-brand-400">✗</span>
                  <p className="text-sm text-ink-300">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Solution + Optimization Areas ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Full-Stack Performance — Diagnosed, Fixed, Monitored.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We start with a comprehensive performance audit across every layer of your
              stack — then execute fixes in priority order, from quick wins to deep architectural
              improvements.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Every engagement ends with documented before/after benchmarks and monitoring in
              place — so you can see exactly what improved and catch regressions before users do.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {optimizations.map((o) => (
              <div key={o.name} className="rounded-xl border border-ink-200 bg-sand-100 p-6">
                <Gauge className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{o.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-sand-200 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Measured in load time, Lighthouse score, bounce rate, infrastructure cost, and uptime.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card bg-white">
                <b.icon className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: How It Works ── */}
      <section className="container py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Audit. Fix. Validate. Monitor.</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most clients see measurable performance improvements within the first sprint.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-8">
              <span className="font-display text-4xl font-bold text-brand-600">{s.n}</span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 8: Proof ── */}
      <section className="bg-accent-950 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-brand-300">Why Redcloud</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              We Fix the Whole Stack — Not Just What&apos;s Easy to Measure
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Every 100ms of latency costs 1% in revenue. We&apos;ve seen clients recover
                significant organic traffic and conversion rate within weeks of an optimization
                sprint.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Performance Optimization Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "90+",    label: "Target Lighthouse score for every engagement" },
              { value: "100ms",  label: "Latency reduction = 1% revenue gain (Amazon research)" },
              { value: "20+",    label: "Years optimizing applications across every stack" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-accent-800 bg-accent-900 p-8 text-center">
                <p className="font-display text-5xl font-bold text-brand-400">{s.value}</p>
                <p className="mt-3 text-sm text-ink-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA + Form ── */}
      <section id="audit" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Free Assessment</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Performance Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll run a full diagnostic across your stack and deliver a prioritized list
              of performance fixes — with expected impact and effort estimates for each.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Full Lighthouse and Core Web Vitals report",
                "Backend and database query profiling",
                "Infrastructure utilization analysis",
                "Prioritized fix list with effort and impact estimates",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Need more than optimization?</p>
              <p className="mt-1 text-sm text-ink-600">
                If your application is fundamentally outdated, see the{" "}
                <Link href="/landing/legacy" className="text-brand-700 underline">
                  Legacy Modernization Program
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Audit</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="performance-audit"
                fields={formFields}
                submitLabel="Schedule A Free Consultation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
