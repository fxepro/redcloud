import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Bell,
  Shield,
  FileSearch,
  Clock,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Compliance & Policy Monitoring — Redcloud Systems",
  description:
    "Never miss a regulatory change. AI monitors regulations, compliance requirements, and policy changes across your industry — and alerts you the moment something affects your business.",
};

const monitored = [
  { icon: Shield,      title: "Regulations",             body: "Federal, state, and local regulatory changes tracked in real time across the agencies that govern your industry." },
  { icon: FileSearch,  title: "Compliance Requirements", body: "Requirements, thresholds, and deadlines that affect your operations, licenses, and certifications." },
  { icon: RefreshCw,   title: "Policy Changes",          body: "Updates to industry standards, best practices, and internal policy frameworks — from both regulators and trade bodies." },
  { icon: Bell,        title: "Automated Alerts",        body: "Instant notifications the moment a change is detected that could affect your business — with a plain-English summary." },
  { icon: BarChart3,   title: "Risk Scoring",            body: "Each alert includes a severity rating and recommended action — so you know what needs urgent attention." },
  { icon: Clock,       title: "Audit Trail",             body: "A complete log of every regulatory change and your team's response — ready for audits, board reviews, or regulators." },
];

const problems = [
  "A regulatory change slips through and you find out from a regulator — not your team",
  "Staff manually check government websites and agency bulletins — inconsistently",
  "A missed compliance deadline results in fines, penalties, or license suspension",
  "Legal counsel bills you $500/hr to read regulations you could have been alerted to automatically",
  "Policy updates reach some departments but not others — creating internal inconsistency",
  "You only discover a compliance gap during an audit — when it's too late to fix quietly",
];

const steps = [
  { n: "01", title: "Scope Definition",     body: "We map the regulatory landscape for your industry — the agencies, standards bodies, and jurisdictions that affect your business." },
  { n: "02", title: "AI Configuration",     body: "We configure your monitoring profile: which regulations to watch, alert thresholds, and delivery preferences for your team." },
  { n: "03", title: "Integration & Alerts", body: "Alerts delivered via email, Slack, or your compliance platform — with plain-English summaries and direct links to source documents." },
  { n: "04", title: "Ongoing Monitoring",   body: "The system runs continuously. You receive a weekly digest plus immediate alerts for high-priority changes." },
];

const industries = [
  {
    name: "Healthcare",
    bodies: ["HIPAA", "CMS", "FDA", "State Health Departments", "Joint Commission"],
  },
  {
    name: "Finance & Banking",
    bodies: ["CFPB", "OCC", "FDIC", "SEC", "FINRA", "State regulators"],
  },
  {
    name: "Insurance",
    bodies: ["NAIC", "State Insurance Commissioners", "DOL", "CMS"],
  },
  {
    name: "Government Contractors",
    bodies: ["FAR/DFARS", "CMMC", "FedRAMP", "GSA", "OMB"],
  },
  {
    name: "Manufacturing",
    bodies: ["OSHA", "EPA", "CPSC", "ISO standards", "Industry-specific bodies"],
  },
];

const deliverables = [
  "Daily or weekly regulatory digest — your choice of cadence",
  "Immediate push alerts for high-severity changes",
  "Plain-English summaries — no legal jargon",
  "Risk severity rating with each alert",
  "Full audit trail for compliance documentation",
  "Monthly compliance landscape report for leadership",
];

const formFields = [
  { name: "first_name",   label: "First Name",                    required: true },
  { name: "last_name",    label: "Last Name",                     required: true },
  { name: "email",        label: "Work Email",                    type: "email" as const, required: true },
  { name: "company",      label: "Company Name",                  required: true },
  { name: "industry",     label: "Industry / Sector",             required: true },
  { name: "regulators",   label: "Which regulatory bodies affect your business?", type: "textarea" as const, full: true },
];

export default function AICompliancePage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-ink-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">AI Compliance & Policy Monitoring</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Never Miss A{" "}
              <span className="italic text-accent-700">Regulatory Change.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              AI monitors regulations, compliance requirements, and policy changes across
              every agency that affects your business — and alerts you the moment something
              changes, before it becomes a problem.
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
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Without Monitoring</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Exposed</p>
              <p className="mt-1 text-sm text-ink-500">Compliance posture</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Missed rule changes</p>
                <p className="flex items-center gap-2"><span>✗</span> Fines & penalties</p>
                <p className="flex items-center gap-2"><span>✗</span> Reactive — not proactive</p>
                <p className="flex items-center gap-2"><span>✗</span> Found out during audits</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">With AI Monitoring</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Protected</p>
              <p className="mt-1 text-sm text-ink-500">Continuous coverage</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Instant change alerts</p>
                <p className="flex items-center gap-2"><span>✓</span> Risk rated &amp; summarized</p>
                <p className="flex items-center gap-2"><span>✓</span> Full audit trail</p>
                <p className="flex items-center gap-2"><span>✓</span> Always ahead of auditors</p>
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
                Regulatory Fines Don&apos;t Care That You Didn&apos;t Know
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Regulators issue hundreds of changes every year. Most businesses learn about
                them from a peer, a consultant invoice, or worse — a compliance notice. By
                then, the damage is already done.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                Manual monitoring doesn&apos;t scale. Legal retainers are expensive. And your
                compliance staff can only watch so many sources at once. AI does it
                continuously, across every relevant channel, without missing anything.
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

      {/* ── Section 5: Solution ── */}
      <section className="container py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">AI That Reads Regulations So You Don&apos;t Have To</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We configure an AI monitoring system scoped to your industry and jurisdiction.
              It watches every relevant regulatory body, standards organization, and government
              agency around the clock — and surfaces only the changes that matter to your
              business.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Each alert comes with a plain-English summary, a severity rating, and a link
              to the source — so your team can act immediately, not spend hours decoding
              legalese.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {monitored.slice(0, 4).map((m) => (
              <div key={m.title} className="rounded-xl border border-ink-200 bg-ink-50 p-6">
                <m.icon className="h-6 w-6 text-accent-700" />
                <p className="mt-3 font-semibold text-ink-900">{m.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-ink-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Layers of Compliance Protection</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              From daily digests to instant alerts — full coverage across your regulatory landscape.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {monitored.map((m) => (
              <div key={m.title} className="card">
                <m.icon className="h-8 w-8 text-accent-700" />
                <h3 className="mt-4 text-xl">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.body}</p>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to Continuous Compliance Coverage</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Fully configured and monitoring within 2 weeks.
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

      {/* ── Section 8: Proof — Industries ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="mb-16 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow !text-accent-300">Industries We Cover</p>
              <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
                Every Regulated Industry. Every Relevant Agency.
              </h2>
              <blockquote className="mt-8 border-l-4 border-accent-400 pl-6">
                <p className="text-lg italic leading-relaxed text-cream">
                  &ldquo;The average regulated business is subject to changes from 12+ agencies.
                  No compliance team can manually track all of them, all of the time.&rdquo;
                </p>
                <p className="mt-2 text-sm text-accent-400">— Redcloud Systems</p>
              </blockquote>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {[
                { value: "24/7",  label: "Monitoring coverage" },
                { value: "12+",   label: "Avg agencies per business" },
                { value: "< 1hr", label: "Alert delivery time" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-accent-700 bg-accent-800 p-6 text-center">
                  <p className="font-display text-4xl font-bold text-accent-300">{s.value}</p>
                  <p className="mt-2 text-xs text-accent-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-accent-700 bg-accent-800 p-6">
                <p className="font-semibold text-cream">{ind.name}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ind.bodies.map((b) => (
                    <span key={b} className="rounded-full border border-accent-600 bg-accent-700/50 px-3 py-1 text-xs text-accent-200">
                      {b}
                    </span>
                  ))}
                </div>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Ahead of Your Next Regulatory Change</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us your industry and the regulatory bodies that affect you. We&apos;ll show
              you exactly what a monitoring system would look like for your business and what
              it would have caught in the last 90 days.
            </p>
            <ul className="mt-10 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Need broader executive intelligence?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/executive-intelligence" className="text-accent-700 underline">
                  Executive Intelligence Program
                </Link>{" "}
                for competitor monitoring, market trends, and M&A tracking.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Free Consultation</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-compliance"
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
