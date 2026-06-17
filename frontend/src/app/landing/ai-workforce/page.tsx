import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, TrendingUp, DollarSign, Cpu } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Workforce Program — Redcloud Systems",
  description:
    "Deploy AI employees that work 24/7 so your team can focus on growth. Free AI workflow assessment. No obligation.",
};

const problems = [
  "Your team wastes hours on repetitive, low-value tasks every day",
  "Manual processes create bottlenecks that slow every department",
  "Human error in data entry, reporting, and follow-up costs you deals",
  "Hiring more people doesn't scale — costs compound faster than output",
  "Leads go cold while staff are tied up with admin work",
  "Competitors are already using AI — and pulling ahead",
];

const benefits = [
  { icon: Clock,       title: "Works 24/7",           body: "AI agents don't sleep, take vacations, or call in sick. Tasks get done around the clock, every day." },
  { icon: TrendingUp,  title: "Scales Instantly",     body: "Handle 10x the volume without hiring. AI agents scale up in minutes, not months." },
  { icon: DollarSign,  title: "Reduces Labor Costs",  body: "Automate the repetitive work your team hates — and redeploy them to higher-value activities." },
  { icon: Cpu,         title: "Zero Human Error",     body: "Consistent, rules-based execution on every task. No missed follow-ups, no data entry mistakes." },
];

const steps = [
  { n: "01", title: "Workflow Discovery",  body: "We map your current operations and identify the highest-value tasks to automate first — where AI delivers fastest ROI." },
  { n: "02", title: "Agent Design",        body: "We design and scope an AI agent tailored to your workflow, systems, and business rules — not a generic chatbot." },
  { n: "03", title: "Deployment",          body: "Agent goes live in your existing tools — CRM, email, Slack, ERP, or custom systems — with full integration testing." },
  { n: "04", title: "Monitor & Improve",   body: "We track agent performance, refine behavior, and expand automation as new opportunities emerge." },
];

const useCases = [
  { role: "Lead Qualification Agent",    desc: "Scores, enriches, and routes inbound leads 24/7 — before a human ever picks up the phone." },
  { role: "Customer Service Agent",      desc: "Handles tier-1 support tickets, answers FAQs, and escalates complex issues to your team." },
  { role: "Data Entry & Reporting Agent",desc: "Extracts, transforms, and loads data between systems automatically — eliminating manual spreadsheet work." },
  { role: "Follow-Up & Outreach Agent",  desc: "Sends personalized follow-ups at the right time, in the right channel, without manual intervention." },
  { role: "Research & Monitoring Agent", desc: "Tracks competitors, news, and market signals — and delivers a daily briefing to your inbox." },
  { role: "Scheduling & Dispatch Agent", desc: "Books meetings, assigns tasks, and routes work to the right person based on availability and priority." },
];

const formFields = [
  { name: "first_name", label: "First Name",    required: true },
  { name: "last_name",  label: "Last Name",     required: true },
  { name: "email",      label: "Work Email",    type: "email" as const, required: true },
  { name: "company",    label: "Company Name",  required: true },
  {
    name: "use_case", label: "What task would you most like to automate?",
    type: "select" as const, required: true,
    options: [
      "Lead qualification & routing",
      "Customer service & support",
      "Data entry & reporting",
      "Sales follow-up & outreach",
      "Research & market monitoring",
      "Scheduling & dispatch",
      "Other",
    ],
  },
  { name: "pain", label: "Describe the manual process costing you the most time right now.", type: "textarea" as const, full: true },
];

export default function AiWorkforceLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: sand-100 (warm neutral) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline + CTA */}
          <div>
            <p className="eyebrow">AI Workforce Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Deploy AI Employees That Work 24/7 So Your Team Can{" "}
              <span className="italic text-brand-600">Focus On Growth.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We design, build, and deploy AI agents into your existing workflows — automating
              repetitive operations so your team spends time on work that actually moves
              the business forward.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free AI Assessment <ArrowRight className="h-5 w-5" />
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">3 FTEs</p>
              <p className="mt-1 text-sm text-ink-500">Doing manual work</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> 8-hour coverage only</p>
                <p className="flex items-center gap-2"><span>✗</span> Human error in every task</p>
                <p className="flex items-center gap-2"><span>✗</span> Bottlenecks at capacity</p>
                <p className="flex items-center gap-2"><span>✗</span> Hard to scale up fast</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">1 Agent</p>
              <p className="mt-1 text-sm text-ink-500">Running 24/7</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> 24/7 continuous operation</p>
                <p className="flex items-center gap-2"><span>✓</span> Consistent, zero-error output</p>
                <p className="flex items-center gap-2"><span>✓</span> Scales to any volume</p>
                <p className="flex items-center gap-2"><span>✓</span> Costs a fraction of headcount</p>
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
                Your Best People Are Buried in Work That Shouldn&apos;t Require a Human.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Data entry. Lead follow-up. Report generation. Scheduling. Customer FAQs. These
                tasks eat 40–60% of your team&apos;s time — and none of them require human
                judgment. They just require someone to do them.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                While your people are stuck in the weeds, your competitors are deploying AI to do
                the same work faster, cheaper, and without error.
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

      {/* ── Section 5: Solution + Use Cases ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">AI Agents Built For Your Workflow — Not a Generic Demo.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We don&apos;t sell off-the-shelf chatbots. We design and deploy AI agents that
              integrate directly into your existing systems — your CRM, your inbox, your ERP —
              and execute your specific business processes.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Every agent is built around your rules, your data, and your workflows. The result is
              automation that actually works in production — not a pilot that never ships.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.role} className="rounded-xl border border-ink-200 bg-sand-100 p-6">
                <Cpu className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{u.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      {/* sand-200 background (slightly deeper warm neutral) */}
      <section className="bg-sand-200 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              We measure success by hours saved, errors eliminated, and revenue recovered.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">From Discovery to Deployed Agent</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most clients have their first agent live within 4–6 weeks.
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
              We Build AI That Ships — Not Pilots That Stall
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Deploy AI Employees That Work 24/7 So Your Team Can Focus On
                Growth.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud AI Workforce Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "24/7",  label: "Agent uptime — no sick days, no holidays" },
              { value: "4–6wk", label: "Average time from discovery to live agent" },
              { value: "12",    label: "Industries where we've deployed AI agents" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free AI Workflow Assessment</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll map your current operations, identify your highest-value automation
              opportunities, and show you exactly what an AI agent would do — and what it would
              cost.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Workflow audit — where your team spends most time",
                "Top 3 automation opportunities ranked by ROI",
                "Agent design recommendation for your use case",
                "Timeline and cost estimate to go live",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Want to see AI in your industry first?</p>
              <p className="mt-1 text-sm text-ink-600">
                Browse{" "}
                <Link href="/ai-solutions" className="text-brand-700 underline">
                  AI solutions by vertical
                </Link>{" "}
                — from healthcare to logistics to finance.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Assessment</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-workforce-assessment"
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
