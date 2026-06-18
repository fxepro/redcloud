import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Database,
  BarChart3,
  MessageSquare,
  Zap,
  RefreshCw,
  Eye,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Operations Center — Redcloud Systems",
  description:
    "Real-time business intelligence across your CRM, ERP, accounting, inventory, and marketing systems. Ask your data questions in plain English — get instant answers.",
};

const dataSources = [
  "CRM (HubSpot, Salesforce, Zoho)",
  "ERP systems",
  "Accounting (QuickBooks, Xero)",
  "Inventory management",
  "Marketing platforms",
  "Support & ticketing",
  "E-commerce platforms",
  "Custom databases",
];

const benefits = [
  {
    icon: MessageSquare,
    title: "Ask In Plain English",
    body: "No SQL. No spreadsheets. Ask 'Which product line has the highest margin?' and get the answer in seconds.",
  },
  {
    icon: Database,
    title: "All Systems Connected",
    body: "CRM, ERP, accounting, inventory, and marketing data unified in one place — so answers reflect your full business, not one silo.",
  },
  {
    icon: Zap,
    title: "Instant Answers",
    body: "Stop waiting for your analyst to run a report. Get the answer in the meeting, not three days after.",
  },
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    body: "Live dashboards showing the KPIs that matter — revenue, margin, pipeline, churn, inventory — always current.",
  },
  {
    icon: RefreshCw,
    title: "Automated Reporting",
    body: "Weekly and monthly reports generated and distributed automatically — no manual assembly, no formatting work.",
  },
  {
    icon: Eye,
    title: "Anomaly Detection",
    body: "The AI flags unusual patterns — a sudden drop in orders, a spike in support tickets, an inventory shortfall — before they become crises.",
  },
];

const problems = [
  "Business decisions are made on gut feel because the data is too hard to access",
  "Getting a simple revenue report requires waiting 2 days for your analyst",
  "Each department has its own spreadsheet — and none of them agree with each other",
  "Leadership reviews are based on last month's data — by the time you see it, it's too late",
  "Your CRM says one thing, your accounting says another — no one knows which is right",
  "You have data everywhere but no single source of truth for how the business is actually performing",
];

const exampleQueries = [
  { q: "Why did sales drop this month?",                  a: "Compared to last 3 months · Source: CRM + Accounting" },
  { q: "Which customers are most profitable?",            a: "Ranked by margin and LTV · Source: CRM + QuickBooks" },
  { q: "What inventory should we reorder?",               a: "Based on velocity + lead time · Source: Inventory + Orders" },
  { q: "Where are leads getting stuck in the funnel?",    a: "Stage conversion analysis · Source: CRM pipeline" },
  { q: "Which marketing channel drives the best ROI?",   a: "Cost per acquisition by channel · Source: Marketing + CRM" },
  { q: "What's our cash position in 30 days?",           a: "Forecast model · Source: Accounting + AR/AP" },
];

const steps = [
  { n: "01", title: "Data Audit",         body: "We inventory all your data systems, identify the key metrics your business needs to run, and map the connections." },
  { n: "02", title: "Integration Build",  body: "We connect your systems — CRM, ERP, accounting, and more — into a unified data layer the AI can query in real time." },
  { n: "03", title: "AI Configuration",   body: "We configure your AI operations center with your KPIs, dashboards, alert thresholds, and reporting cadence." },
  { n: "04", title: "Go Live",            body: "Your team starts asking questions and gets answers. Dashboards populate. Reports go out automatically." },
];

const formFields = [
  { name: "first_name",  label: "First Name",                              required: true },
  { name: "last_name",   label: "Last Name",                               required: true },
  { name: "email",       label: "Work Email",                              type: "email" as const, required: true },
  { name: "company",     label: "Company Name",                            required: true },
  { name: "systems",     label: "What systems do you currently use? (CRM, ERP, accounting, etc.)", type: "textarea" as const, full: true },
  { name: "pain",        label: "What's the hardest business question for you to answer right now?", type: "textarea" as const, full: true },
];

export default function AIOperationsPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-sand-200/50 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">AI Operations Center</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Ask Your Business{" "}
              <span className="italic text-accent-700">Any Question.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Connect your CRM, ERP, accounting, inventory, and marketing systems into one
              AI-powered operations center. Ask any question about your business in plain
              English — and get the answer in seconds, not days.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#consult" className="btn-primary px-8 py-4 text-base">
                Schedule a Free Consultation <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/services" className="btn-ghost px-8 py-4 text-base">
                See our AI services
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Today</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">3 days</p>
              <p className="mt-1 text-sm text-ink-500">To get a custom report</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Request analyst</p>
                <p className="flex items-center gap-2"><span>✗</span> Wait for export</p>
                <p className="flex items-center gap-2"><span>✗</span> Reconcile spreadsheets</p>
                <p className="flex items-center gap-2"><span>✗</span> Data already stale</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">With AI Ops Center</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Seconds</p>
              <p className="mt-1 text-sm text-ink-500">Any question, any time</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Ask in plain English</p>
                <p className="flex items-center gap-2"><span>✓</span> Live cross-system data</p>
                <p className="flex items-center gap-2"><span>✓</span> Source cited</p>
                <p className="flex items-center gap-2"><span>✓</span> Always current</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Problem (navy dark) ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-accent-300" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">
                You Have More Data Than Ever — And Less Clarity
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Most businesses run on 5–10 systems that don&apos;t talk to each other. The
                result is data silos, conflicting reports, and leadership making high-stakes
                decisions on incomplete information.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                An AI operations center doesn&apos;t replace your systems. It sits on top of
                them — connecting the dots, surfacing the insights, and answering the
                questions that currently require a team of analysts to answer.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-xl border border-accent-700 bg-accent-800 px-5 py-4">
                  <span className="mt-0.5 shrink-0 text-brand-400">✗</span>
                  <p className="text-sm text-accent-200">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Example Queries ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">What It Looks Like</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Questions Your Business Should Be Able to Answer Instantly</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              These are real questions that most business owners can&apos;t answer quickly because
              the data lives in too many places. An AI operations center makes every one of
              these a 5-second query.
            </p>
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink-700">Connects to your existing systems:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dataSources.map((d) => (
                  <span key={d} className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-sm text-accent-700">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {exampleQueries.map((item) => (
              <div key={item.q} className="rounded-xl border border-ink-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <p className="text-sm font-medium text-ink-900">&ldquo;{item.q}&rdquo;</p>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-accent-50 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600" />
                  <p className="text-xs text-accent-700">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-accent-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Gain</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Capabilities That Change How You Run the Business</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Real-time intelligence — not end-of-month surprises.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <b.icon className="h-8 w-8 text-accent-700" />
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Live Operations Center</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Connected and operational in 3–6 weeks depending on data complexity.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-8">
              <span className="font-display text-4xl font-bold text-accent-700">{s.n}</span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 8: Proof ── */}
      <section className="bg-accent-900 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-accent-300">Why Redcloud</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              Built for Leaders Who Need Answers, Not More Dashboards
            </h2>
            <blockquote className="mt-10 border-l-4 border-accent-400 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Most BI tools give you more charts. We give you answers. There&apos;s
                a difference between a dashboard that shows data and an AI that tells you
                what the data means for your business.&rdquo;
              </p>
              <p className="mt-3 text-sm text-accent-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",   label: "Years engineering experience" },
              { value: "5–10",  label: "Avg systems connected per client" },
              { value: "3–6wk", label: "Typical go-live timeline" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-accent-700 bg-accent-800 p-8 text-center">
                <p className="font-display text-4xl font-bold text-accent-300">{s.value}</p>
                <p className="mt-3 text-sm text-accent-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA + Form ── */}
      <section id="consult" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Free Consultation</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Answers From Your Data — Starting This Month</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us what systems you run and what questions you can&apos;t currently answer
              fast enough. We&apos;ll show you what an AI operations center would look like
              for your business — and which questions you could answer on day one.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Connects all your existing systems — no migration required",
                "Plain-English questions — no SQL or analyst needed",
                "Live dashboards always current — not end-of-month",
                "Automated weekly and monthly reporting",
                "Anomaly alerts before problems become crises",
                "Operational in 3–6 weeks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-accent-200 bg-accent-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Need AI intelligence for your executive team?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/executive-intelligence" className="text-accent-700 underline">
                  Executive Intelligence Program
                </Link>{" "}
                for competitor, market, and geopolitical monitoring.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Free Consultation</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-operations"
                fields={formFields}
                submitLabel="Schedule My Free Consultation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
