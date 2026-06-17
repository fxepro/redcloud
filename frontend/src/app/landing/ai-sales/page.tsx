import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Target, Clock, Zap } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Sales Automation Program — Redcloud Systems",
  description:
    "Qualify leads automatically, follow up instantly, and close more deals — without adding sales headcount. Free assessment.",
};

const problems = [
  "Leads go cold while your team is tied up with existing accounts",
  "Sales reps spend 60% of their day on admin, not selling",
  "Unqualified leads waste your best closers' time",
  "No follow-up system means deals fall through the cracks",
  "Manual CRM updates mean data is always stale or missing",
  "Scaling revenue means hiring — costs rise faster than margin",
];

const automations = [
  { name: "Lead Scoring & Qualification",  desc: "AI scores every inbound lead by fit, intent, and urgency — so reps only talk to buyers, not browsers." },
  { name: "Instant Follow-Up Sequences",   desc: "Personalized outreach sent within seconds of a lead action — not hours or days later when they've moved on." },
  { name: "Meeting Booking Automation",    desc: "AI qualifies the lead and books the meeting in one flow — no back-and-forth email chains." },
  { name: "CRM Auto-Update",               desc: "Every call, email, and interaction logged automatically — your CRM stays current without manual data entry." },
  { name: "Pipeline Monitoring Agent",     desc: "Flags stalled deals, missed follow-ups, and at-risk opportunities before they slip through the cracks." },
  { name: "Outbound Prospecting Agent",    desc: "Researches prospects, personalizes outreach, and runs sequences across email and LinkedIn — at scale." },
];

const benefits = [
  { icon: Target,     title: "Only Qualified Leads",    body: "AI filters out tire-kickers before they hit your pipeline. Your team talks to buyers, not browsers." },
  { icon: Clock,      title: "Instant Response",        body: "Leads contacted within seconds of showing intent — when they're most likely to convert." },
  { icon: TrendingUp, title: "More Revenue, Same Team", body: "Scale pipeline without scaling headcount. AI handles the volume, your team handles the close." },
  { icon: Zap,        title: "Zero Slippage",           body: "No deal falls through the cracks. Every lead is tracked, followed up, and escalated automatically." },
];

const steps = [
  { n: "01", title: "Pipeline Audit",       body: "We map your current lead flow, identify where deals stall, and calculate where AI delivers fastest lift." },
  { n: "02", title: "Agent Design",         body: "We configure scoring models, sequences, CRM integrations, and escalation rules around your sales process." },
  { n: "03", title: "Pilot & Calibrate",    body: "Agent goes live on a segment of your pipeline — we measure conversion lift and tune behavior in real time." },
  { n: "04", title: "Full Deployment",      body: "Rolled out across your full pipeline with dashboards, alerts, and ongoing optimization built in." },
];

const integrations = ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Google Workspace", "Microsoft 365", "LinkedIn", "Slack"];

const formFields = [
  { name: "first_name",     label: "First Name",          required: true },
  { name: "last_name",      label: "Last Name",           required: true },
  { name: "email",          label: "Work Email",          type: "email" as const, required: true },
  { name: "company",        label: "Company Name",        required: true },
  {
    name: "crm",  label: "Current CRM",
    type: "select" as const,
    options: ["HubSpot", "Salesforce", "Zoho", "Pipedrive", "No CRM yet", "Other"],
  },
  {
    name: "leads_volume", label: "Monthly inbound lead volume",
    type: "select" as const, required: true,
    options: ["Under 50", "50–200", "200–500", "500–2,000", "2,000+"],
  },
  { name: "pain", label: "Where does your sales process break down today?", type: "textarea" as const, full: true },
];

export default function AiSalesLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: accent-100 (teal) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left */}
          <div>
            <p className="eyebrow">AI Sales Automation Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Qualify More Leads. Close More Deals.{" "}
              <span className="italic text-brand-600">Without Adding Headcount.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We deploy AI agents that qualify inbound leads, trigger instant follow-up, book
              meetings automatically, and keep your CRM current — so your sales team spends
              100% of their time selling.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Pipeline Audit <ArrowRight className="h-5 w-5" />
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">2 hrs</p>
              <p className="mt-1 text-sm text-ink-500">Average lead response time</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Reps qualify manually</p>
                <p className="flex items-center gap-2"><span>✗</span> Follow-up inconsistent</p>
                <p className="flex items-center gap-2"><span>✗</span> CRM always out of date</p>
                <p className="flex items-center gap-2"><span>✗</span> Deals stall with no alert</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">&lt; 60s</p>
              <p className="mt-1 text-sm text-ink-500">Average lead response time</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> AI qualifies instantly</p>
                <p className="flex items-center gap-2"><span>✓</span> Follow-up in seconds</p>
                <p className="flex items-center gap-2"><span>✓</span> CRM always current</p>
                <p className="flex items-center gap-2"><span>✓</span> Stalled deals flagged automatically</p>
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
                Your Leads Are Ready to Buy. Your Process Isn&apos;t Ready for Them.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Studies show that responding to a lead within 5 minutes makes you 100x more likely
                to connect. Most businesses respond in hours — or days. By then, the buyer has
                already moved on.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                And even when leads do get contacted, they often aren&apos;t qualified — so your
                best closers waste time with people who were never going to buy.
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

      {/* ── Section 5: Solution + Automations ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">AI Agents That Run Your Sales Process While Your Team Closes.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We deploy AI sales agents that integrate directly into your CRM and communication
              tools — qualifying leads, triggering follow-up, booking meetings, and keeping
              your pipeline clean without any manual effort.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Your reps wake up every morning to a clean, qualified, up-to-date pipeline with
              meetings already on the calendar. They just sell.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {integrations.map((i) => (
                <span key={i} className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {automations.map((a) => (
              <div key={a.name} className="rounded-xl border border-ink-200 bg-accent-50 p-6">
                <Target className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{a.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      {/* accent-100 background (page signature color) */}
      <section className="bg-accent-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Measured in qualified pipeline, meetings booked, and revenue closed per rep.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">From Pipeline Audit to Automated Revenue</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most clients see their first AI-qualified meeting booked within 2–3 weeks of kickoff.
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
              We Build Sales Automation That Converts — Not Just Notifies
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Responding within 5 minutes makes you 100x more likely to connect with a
                lead. AI makes that the floor, not the goal.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud AI Sales Automation Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "100x",   label: "More likely to connect when responding in under 5 min" },
              { value: "< 60s",  label: "AI lead response time — day or night" },
              { value: "2–3wk",  label: "Average time from audit to first AI-booked meeting" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Sales Pipeline Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll map your current lead flow, identify where deals stall and leads go cold,
              and show you exactly where AI can recover revenue you&apos;re currently leaving
              on the table.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Lead flow and conversion rate analysis",
                "Response time and follow-up gap report",
                "Top automation opportunities ranked by revenue impact",
                "CRM integration and agent design recommendation",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-accent-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Already have a CRM?</p>
              <p className="mt-1 text-sm text-ink-600">
                We integrate with HubSpot, Salesforce, Zoho, Pipedrive, and custom systems.
                No CRM yet?{" "}
                <Link href="/services/technical-consulting" className="text-brand-700 underline">
                  We can help you choose and set one up.
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Pipeline Audit</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-sales-audit"
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
