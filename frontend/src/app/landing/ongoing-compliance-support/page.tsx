import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Activity,
  FileText,
  CalendarCheck,
  ClipboardCheck,
  Shield,
  Bell,
  Building2,
  Users,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Ongoing Compliance Support — Redcloud Systems",
  description:
    "Compliance is not a project — it's a continuous program. Ongoing support for HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC to maintain audit readiness and security maturity.",
};

const continuousNeeds = [
  "Review controls",
  "Update documentation",
  "Monitor risks",
  "Assess vendors",
  "Train employees",
  "Prepare for audits",
  "Respond to changes",
];

const supportServices = [
  {
    icon: Activity,
    title: "Compliance Monitoring",
    body: "Track the health of your compliance program.",
  },
  {
    icon: FileText,
    title: "Documentation Maintenance",
    body: "Keep policies and procedures current.",
  },
  {
    icon: CalendarCheck,
    title: "Quarterly Compliance Reviews",
    body: "Review controls, risks, and improvement opportunities.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Preparation",
    body: "Support assessments, reviews, and certification efforts.",
  },
  {
    icon: Shield,
    title: "Security Reviews",
    body: "Identify emerging risks and vulnerabilities.",
  },
  {
    icon: Bell,
    title: "Regulatory Monitoring",
    body: "Stay informed about changing requirements.",
  },
  {
    icon: Building2,
    title: "Vendor Risk Reviews",
    body: "Evaluate third-party security and compliance risks.",
  },
];

const frameworks = ["HIPAA", "SOC 2", "ISO 27001", "PCI DSS", "NIST", "CMMC"];

const steps = [
  {
    n: "01",
    title: "Program Baseline",
    body: "We review your current compliance posture, frameworks, documentation, and operational controls.",
  },
  {
    n: "02",
    title: "Support Plan",
    body: "We define ongoing activities — monitoring, reviews, documentation maintenance, and audit preparation.",
  },
  {
    n: "03",
    title: "Continuous Execution",
    body: "Regular reviews, updates, and risk assessments keep your program aligned with how the business operates.",
  },
  {
    n: "04",
    title: "Improve & Adapt",
    body: "Findings and regulatory changes drive ongoing improvements — not one-time fixes before audits.",
  },
];

const outcomes = [
  "Reduced compliance burden",
  "Improved audit readiness",
  "Stronger governance",
  "Better risk visibility",
  "More consistent operations",
  "Increased confidence",
];

const formFields = [
  { name: "first_name", label: "First Name", required: true },
  { name: "last_name", label: "Last Name", required: true },
  { name: "email", label: "Work Email", type: "email" as const, required: true },
  { name: "company", label: "Company Name", required: true },
  { name: "framework", label: "Primary compliance framework", required: true },
  {
    name: "situation",
    label: "Tell us about your current compliance program and support needs",
    type: "textarea" as const,
    full: true,
  },
];

export default function OngoingComplianceSupportPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-ink-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          <div>
            <p className="eyebrow">Ongoing Compliance Support</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Compliance Is Not A Project.{" "}
              <span className="italic text-accent-700">It&apos;s A Continuous Program.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Staying compliant is often harder than becoming compliant. Redcloud Systems provides
              ongoing support that helps organizations maintain security, governance, and operational
              maturity long after initial implementation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#consult" className="btn-primary px-8 py-4 text-base">
                Schedule a Compliance Review <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/free-demo" className="btn-ghost px-8 py-4 text-base">
                Request Ongoing Support Information
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Without Support</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Drift</p>
              <p className="mt-1 text-sm text-ink-500">Compliance posture</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Controls fall out of date</p>
                <p className="flex items-center gap-2"><span>✗</span> Documentation becomes stale</p>
                <p className="flex items-center gap-2"><span>✗</span> New risks go unnoticed</p>
                <p className="flex items-center gap-2"><span>✗</span> Audit surprises return</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">With Ongoing Support</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Sustained</p>
              <p className="mt-1 text-sm text-ink-500">Continuous program</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Active monitoring & reviews</p>
                <p className="flex items-center gap-2"><span>✓</span> Current documentation</p>
                <p className="flex items-center gap-2"><span>✓</span> Proactive risk management</p>
                <p className="flex items-center gap-2"><span>✓</span> Audit-ready operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why ongoing support matters ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-accent-300" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">Why Ongoing Support Matters</h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Many organizations successfully complete readiness initiatives, audits, or certification
                efforts — then systems change, employees leave, processes evolve, new risks emerge,
                and regulations change. Without ongoing attention, compliance programs gradually weaken.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                Ongoing support reduces administrative burden while improving long-term compliance outcomes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {continuousNeeds.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-accent-700 bg-accent-800 px-5 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                  <p className="text-sm text-accent-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="container py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">Ongoing Support Services</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Maintain Momentum After Certification</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              The most successful compliance programs are not driven by audits — they are driven by
              continuous improvement. We help organizations maintain momentum, improve security maturity,
              and strengthen compliance programs over time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportServices.slice(0, 4).map((s) => (
              <div key={s.title} className="rounded-xl border border-ink-200 bg-ink-50 p-6">
                <s.icon className="h-6 w-6 text-accent-700" />
                <p className="mt-3 font-semibold text-ink-900">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All services ── */}
      <section className="bg-ink-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What We Provide</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Seven Ongoing Support Capabilities</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              From monitoring to audit prep — a program built for long-term compliance value.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((s) => (
              <div key={s.title} className="card">
                <s.icon className="h-8 w-8 text-accent-700" />
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="container py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to Continuous Compliance</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            A structured program — not ad-hoc firefighting before every audit.
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

      {/* ── Compliance as a service + frameworks ── */}
      <section className="bg-accent-900 py-28">
        <div className="container grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-accent-300">Compliance as a Service</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">Your Compliance Partner</h2>
            <p className="mt-5 text-lg leading-relaxed text-accent-200">
              Many organizations cannot justify hiring compliance managers, security managers, or
              governance specialists full time. We provide access to experienced resources without
              the overhead of building an internal compliance team.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-accent-700 bg-accent-800 px-5 py-4">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
              <p className="text-sm text-accent-100">
                Expert support for HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC — without
                expanding headcount.
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent-400">
              Supported frameworks
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {frameworks.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-accent-600 bg-accent-800 px-4 py-2 text-sm font-medium text-accent-100"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Outcomes</p>
            <ul className="mt-6 space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-center gap-3 text-accent-100">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-300" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA + Form ── */}
      <section id="consult" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div>
            <p className="eyebrow">Maintain Your Compliance Advantage</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Keep Your Compliance Investment Delivering Value
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Whether you&apos;re managing HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, or CMMC initiatives,
              ongoing support helps ensure your program stays strong as your organization evolves.
            </p>
            <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Explore related programs</p>
              <p className="mt-1 text-sm text-ink-600">
                <Link href="/landing/policy-documentation" className="text-accent-700 underline">
                  Policy & Documentation
                </Link>
                {" · "}
                <Link href="/landing/security-assessments" className="text-accent-700 underline">
                  Security Assessments
                </Link>
                {" · "}
                <Link href="/landing/ai-compliance" className="text-accent-700 underline">
                  AI Compliance Monitoring
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Compliance Review</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ongoing-compliance-support"
                fields={formFields}
                submitLabel="Schedule Compliance Review"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
