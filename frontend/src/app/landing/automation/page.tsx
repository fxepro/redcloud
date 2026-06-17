import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Repeat, DollarSign, Shield, TrendingUp } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Business Automation Program — Redcloud Systems",
  description:
    "Eliminate repetitive manual work across your business. Automate workflows, reduce errors, and free your team for work that matters.",
};

const problems = [
  "Staff manually copying data between systems every day",
  "New customer onboarding takes days when it should take minutes",
  "Reports that should be automatic require hours of spreadsheet work",
  "Approval processes stuck in email chains for days",
  "Missed handoffs because nothing triggers the next step automatically",
  "Errors from copy-paste and manual data entry costing you customers",
];

const workflows = [
  { name: "Lead Routing & Onboarding",     desc: "New leads and customers automatically assigned, welcomed, and set up — without a single manual step." },
  { name: "Form Processing",               desc: "Form submissions trigger actions across your CRM, email, Slack, and internal systems instantly." },
  { name: "Approval & Review Workflows",   desc: "Requests route to the right approver, send reminders, and escalate if no response — automatically." },
  { name: "CRM & Database Sync",           desc: "Keep HubSpot, Salesforce, Zoho, and your internal systems in sync with no manual reconciliation." },
  { name: "Automated Reporting",           desc: "Scheduled reports pull live data, format it, and deliver it to your inbox — no spreadsheet required." },
  { name: "Email Campaign Automation",     desc: "Trigger personalized email sequences based on customer actions, status changes, or time delays." },
];

const benefits = [
  { icon: Repeat,      title: "Eliminate Manual Work",  body: "Every task that runs on rules — routing, updating, notifying, syncing — gets automated end to end." },
  { icon: Shield,      title: "Zero Human Error",       body: "Automated processes don't mistype, forget steps, or skip fields. Consistent, every time." },
  { icon: DollarSign,  title: "Reduce Operating Costs", body: "Redeploy staff from repetitive tasks to high-value work. Do more without growing headcount." },
  { icon: TrendingUp,  title: "Faster Operations",      body: "Processes that took days complete in minutes. Customers onboarded faster, deals closed sooner." },
];

const steps = [
  { n: "01", title: "Process Mapping",      body: "We document your current manual workflows, identify automation candidates, and rank by time savings and ROI." },
  { n: "02", title: "Integration Design",   body: "We design the automation logic and map integrations across your existing tools — CRM, email, ERP, and more." },
  { n: "03", title: "Build & Test",         body: "Automations are built, tested with real data, and validated before any live traffic runs through them." },
  { n: "04", title: "Deploy & Monitor",     body: "Go live with monitoring and alerting in place. We optimize and expand as new workflows are identified." },
];

const integrations = [
  "HubSpot", "Salesforce", "Zoho", "Google Workspace",
  "Microsoft 365", "Slack", "QuickBooks", "Stripe",
];

const formFields = [
  { name: "first_name",  label: "First Name",          required: true },
  { name: "last_name",   label: "Last Name",           required: true },
  { name: "email",       label: "Work Email",          type: "email" as const, required: true },
  { name: "company",     label: "Company Name",        required: true },
  {
    name: "process", label: "Which process costs your team the most time?",
    type: "select" as const, required: true,
    options: [
      "Customer onboarding",
      "Lead routing & follow-up",
      "Reporting & data exports",
      "Approvals & review workflows",
      "CRM / database updates",
      "Email campaigns",
      "Other",
    ],
  },
  { name: "pain", label: "Describe the manual process you most want to eliminate.", type: "textarea" as const, full: true },
];

export default function AutomationLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: brand-100 (light rose) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-100/50 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left */}
          <div>
            <p className="eyebrow">Business Automation Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Eliminate Repetitive Work Across Your Entire{" "}
              <span className="italic text-brand-600">Business.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We automate the manual, rule-based processes that eat your team&apos;s time — form
              processing, lead routing, CRM updates, reporting, and onboarding — so your people
              do the work only humans can do.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Process Audit <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/services/custom-software-development" className="btn-ghost px-8 py-4 text-base">
                See our work
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before</p>
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">3 days</p>
              <p className="mt-1 text-sm text-ink-500">Customer onboarding time</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Manual data entry daily</p>
                <p className="flex items-center gap-2"><span>✗</span> Errors in every handoff</p>
                <p className="flex items-center gap-2"><span>✗</span> Reports take hours to build</p>
                <p className="flex items-center gap-2"><span>✗</span> Approvals stuck in email</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">15 min</p>
              <p className="mt-1 text-sm text-ink-500">Customer onboarding time</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Zero manual data entry</p>
                <p className="flex items-center gap-2"><span>✓</span> Consistent, error-free handoffs</p>
                <p className="flex items-center gap-2"><span>✓</span> Reports delivered automatically</p>
                <p className="flex items-center gap-2"><span>✓</span> Approvals routed and tracked</p>
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
                Your Team Is Doing Work a System Should Be Doing.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Every hour your team spends copying data, chasing approvals, and building the
                same report again is an hour they&apos;re not growing the business. And the
                real cost isn&apos;t just the time — it&apos;s the errors, the delays, and the
                customers who feel that friction.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Manual processes don&apos;t scale. Automation does.
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

      {/* ── Section 5: Solution + Workflows ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Automate the Process. Keep the People for What Matters.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We map your existing workflows, identify every manual step that runs on rules, and
              replace it with automation that connects your existing tools — no rip and replace,
              no retraining, no disruption.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              The result is a business that operates faster, makes fewer errors, and scales
              without proportionally growing headcount.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {integrations.map((i) => (
                <span key={i} className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workflows.map((w) => (
              <div key={w.name} className="rounded-xl border border-ink-200 bg-brand-50 p-6">
                <Repeat className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{w.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-brand-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Measured in hours saved, errors eliminated, and operational costs reduced per month.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">From Process Map to Fully Automated</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most clients have their first workflow automated and live within 2–3 weeks.
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
              We Build Automation That Runs in Production — Not Just in Demos
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Every hour your team spends on manual tasks is an hour not spent on
                growth. We eliminate the manual work so your team can focus on what
                actually matters.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Business Automation Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",    label: "Years building enterprise integrations" },
              { value: "2–3wk",  label: "Average time from audit to first automation live" },
              { value: "250+",   label: "Active client installations across 12 industries" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Process Automation Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll map your most time-consuming manual processes, calculate the hours and
              cost they represent, and show you exactly what automation would look like — and
              what it would cost to build.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Manual process inventory and time-cost analysis",
                "Top automation opportunities ranked by ROI",
                "Integration map across your existing tools",
                "Build timeline and cost estimate",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-brand-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Looking for AI agents specifically?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/ai-workforce" className="text-brand-700 underline">
                  AI Workforce Program
                </Link>{" "}
                for agent-based automation, or{" "}
                <Link href="/landing/ai-sales" className="text-brand-700 underline">
                  AI Sales Automation
                </Link>{" "}
                for pipeline-specific work.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Audit</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="automation-audit"
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
