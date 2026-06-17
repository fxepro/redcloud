import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Eye, TrendingUp, Bell, BarChart3 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Executive Intelligence Program — Redcloud Systems",
  description:
    "AI-powered research and monitoring that delivers executive-grade intelligence daily — without an analyst on staff.",
};

const problems = [
  "Hours spent each week researching competitors manually",
  "Key market shifts discovered days late — after the damage is done",
  "Executives making decisions on stale or incomplete data",
  "No early warning system for industry news, regulatory changes, or risks",
  "Research scattered across emails, PDFs, and browser bookmarks",
  "No time to track what your top accounts are doing between calls",
];

const monitors = [
  { name: "Competitor Intelligence",    desc: "Track pricing changes, product launches, job postings, press releases, and executive moves across all competitors." },
  { name: "Market & Industry News",     desc: "AI monitors thousands of sources daily and surfaces only the signals relevant to your business and sector." },
  { name: "Regulatory & Compliance",   desc: "Early warning on policy changes, regulatory filings, and compliance updates before they become emergencies." },
  { name: "Account Monitoring",        desc: "Track your key accounts for signals — funding, leadership changes, expansions, and intent to buy or churn." },
  { name: "Brand & Reputation",        desc: "Monitor mentions, reviews, and sentiment across the web — know what's being said before it escalates." },
  { name: "Executive Daily Briefing",  desc: "A curated, AI-written intelligence report delivered to your inbox every morning — ready in under 5 minutes." },
];

const benefits = [
  { icon: Eye,        title: "See What's Coming",     body: "Know what competitors are doing, what the market is shifting toward, and what risks are building — before they hit you." },
  { icon: Bell,       title: "Always On Monitoring",  body: "AI watches hundreds of sources 24/7 so you don't have to. Important signals surface immediately, not days later." },
  { icon: TrendingUp, title: "Better Decisions",      body: "Executives make faster, more confident decisions when they have current intelligence — not gut feel and old reports." },
  { icon: BarChart3,  title: "No Analyst Required",   body: "Get enterprise-grade research output without hiring a team of analysts. AI does the work; you get the insight." },
];

const steps = [
  { n: "01", title: "Intelligence Scoping",  body: "We define what matters to you — competitors, markets, accounts, regulations — and configure the monitoring accordingly." },
  { n: "02", title: "Source Configuration", body: "We connect the news feeds, databases, web sources, and internal data streams relevant to your industry and goals." },
  { n: "03", title: "Briefing Design",       body: "We set up your daily executive briefing format — what's included, how it's structured, and where it's delivered." },
  { n: "04", title: "Live & Refine",         body: "Monitoring goes live and we refine signal quality over the first 30 days — reducing noise, elevating what matters." },
];

const formFields = [
  { name: "first_name",  label: "First Name",          required: true },
  { name: "last_name",   label: "Last Name",           required: true },
  { name: "email",       label: "Work Email",          type: "email" as const, required: true },
  { name: "company",     label: "Company Name",        required: true },
  {
    name: "role", label: "Your role",
    type: "select" as const, required: true,
    options: ["CEO / Founder", "COO", "CMO / VP Marketing", "VP Sales", "Strategy / Business Dev", "Other Executive"],
  },
  {
    name: "priority", label: "Top intelligence priority",
    type: "select" as const, required: true,
    options: ["Competitor monitoring", "Market & industry news", "Account tracking", "Regulatory alerts", "Brand monitoring", "All of the above"],
  },
  { name: "pain", label: "What decision are you trying to make better or faster with better intelligence?", type: "textarea" as const, full: true },
];

export default function ExecutiveIntelligenceLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: accent-200 (light teal blue from the core palette) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-200/40 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left */}
          <div>
            <p className="eyebrow">Executive Intelligence Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Know What Your Competitors Are Doing Before{" "}
              <span className="italic text-brand-600">They Do It to You.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We deploy AI research and monitoring agents that track your competitors, markets,
              accounts, and regulatory environment — then deliver a curated executive briefing
              to your inbox every morning.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Intelligence Audit <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/ai-solutions" className="btn-ghost px-8 py-4 text-base">
                See AI solutions
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before</p>
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">3 hrs</p>
              <p className="mt-1 text-sm text-ink-500">Weekly manual research time</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Competitors spotted days late</p>
                <p className="flex items-center gap-2"><span>✗</span> Decisions on stale data</p>
                <p className="flex items-center gap-2"><span>✗</span> No early warning system</p>
                <p className="flex items-center gap-2"><span>✗</span> Research buried in email</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">5 min</p>
              <p className="mt-1 text-sm text-ink-500">Daily briefing read time</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Competitor moves flagged instantly</p>
                <p className="flex items-center gap-2"><span>✓</span> Fresh intelligence every morning</p>
                <p className="flex items-center gap-2"><span>✓</span> Early warning on risks</p>
                <p className="flex items-center gap-2"><span>✓</span> One clean briefing — no noise</p>
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
                Your Competitors Have More Information Than You — And They&apos;re Using It.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Enterprise competitors employ teams of analysts to monitor the market, track
                competitors, and brief leadership daily. Smaller businesses make the same
                decisions on gut feel and occasional Google searches — and it shows.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                AI changes this equation. For the first time, businesses of any size can have
                enterprise-grade intelligence — without an analyst on the payroll.
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

      {/* ── Section 5: Solution + Monitor Types ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Your Own AI Intelligence Team. Delivered Every Morning.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We configure AI agents that continuously monitor the sources, signals, and entities
              that matter to your business — then synthesize everything into a concise executive
              briefing delivered to your inbox before the workday starts.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              No login required. No dashboard to check. Just the intelligence you need, in the
              format you want, when you need it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {monitors.map((m) => (
              <div key={m.name} className="rounded-xl border border-ink-200 bg-accent-50 p-6">
                <Eye className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{m.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      {/* accent-200 background — core palette light blue */}
      <section className="bg-accent-200/30 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Measured in decisions made faster, risks caught earlier, and competitive moves
              anticipated instead of reacted to.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Configured Once. Delivers Every Day.</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most clients receive their first AI briefing within 1–2 weeks of kickoff.
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
              Enterprise Intelligence. Without the Enterprise Budget.
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;The best executives don&apos;t react to the market — they anticipate it.
                AI-powered intelligence is how you stop reacting and start leading.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Executive Intelligence Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "24/7",  label: "Continuous monitoring — never misses a signal" },
              { value: "5 min", label: "Daily briefing read time — no noise, no filler" },
              { value: "1–2wk", label: "Average time from scoping to first daily briefing" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Intelligence Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll assess your current intelligence gaps — what you&apos;re missing on
              competitors, markets, and accounts — and show you exactly what an AI monitoring
              system would cover and deliver.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Competitive intelligence gap analysis",
                "Key signal and source recommendations",
                "Sample briefing format for your industry",
                "Setup timeline and cost estimate",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-accent-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Want to automate more than monitoring?</p>
              <p className="mt-1 text-sm text-ink-600">
                Combine with the{" "}
                <Link href="/landing/ai-workforce" className="text-brand-700 underline">
                  AI Workforce Program
                </Link>{" "}
                to act on intelligence automatically — not just receive it.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Audit</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="executive-intelligence-audit"
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
