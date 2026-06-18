import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ClipboardList,
  BookOpen,
  Siren,
  KeyRound,
  Building2,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Policy & Documentation — Redcloud Systems",
  description:
    "Build the governance foundation behind compliance. Practical policies, procedures, and operational documentation for HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC readiness.",
};

const whyItMatters = [
  "Reduce operational risk",
  "Improve consistency across teams",
  "Meet compliance requirements",
  "Support employee training",
  "Demonstrate accountability",
  "Improve audit readiness",
];

const docServices = [
  {
    icon: Shield,
    title: "Security Policies",
    body: "Establish organizational security expectations and responsibilities.",
  },
  {
    icon: ClipboardList,
    title: "Operational Procedures",
    body: "Define repeatable processes for day-to-day operations.",
  },
  {
    icon: BookOpen,
    title: "Compliance Documentation",
    body: "Support HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC initiatives.",
  },
  {
    icon: Siren,
    title: "Incident Response Plans",
    body: "Prepare for cybersecurity incidents and operational disruptions.",
  },
  {
    icon: KeyRound,
    title: "Access Control Policies",
    body: "Define how systems and information are protected.",
  },
  {
    icon: Building2,
    title: "Vendor Management Procedures",
    body: "Reduce third-party risk and improve accountability.",
  },
];

const frameworks = [
  "HIPAA",
  "SOC 2",
  "ISO 27001",
  "PCI DSS",
  "NIST Cybersecurity Framework",
  "CMMC",
];

const steps = [
  {
    n: "01",
    title: "Discovery & Gap Review",
    body: "We review existing documentation, operational practices, and compliance obligations to identify gaps.",
  },
  {
    n: "02",
    title: "Policy Development",
    body: "We draft policies and procedures aligned with your frameworks, operations, and audit requirements.",
  },
  {
    n: "03",
    title: "Implementation Alignment",
    body: "Documentation is refined to reflect how your organization actually works — not generic templates.",
  },
  {
    n: "04",
    title: "Audit Readiness Review",
    body: "Final review ensures documentation supports audits, customer reviews, and ongoing governance.",
  },
];

const outcomes = [
  "Stronger governance",
  "Improved compliance readiness",
  "Better audit preparation",
  "Reduced organizational risk",
  "Improved operational consistency",
  "Clear employee guidance",
];

const formFields = [
  { name: "first_name", label: "First Name", required: true },
  { name: "last_name", label: "Last Name", required: true },
  { name: "email", label: "Work Email", type: "email" as const, required: true },
  { name: "company", label: "Company Name", required: true },
  { name: "framework", label: "Compliance framework (HIPAA, SOC 2, ISO 27001, etc.)", required: true },
  {
    name: "needs",
    label: "What documentation do you need help with?",
    type: "textarea" as const,
    full: true,
  },
];

export default function PolicyDocumentationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-ink-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          <div>
            <p className="eyebrow">Policy & Documentation</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Build The Governance Foundation{" "}
              <span className="italic text-accent-700">Behind Compliance.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Technology alone does not create compliance. Redcloud Systems helps organizations
              develop practical documentation — policies, procedures, governance practices, and
              operational controls that support security, compliance, and audit readiness.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#consult" className="btn-primary px-8 py-4 text-base">
                Schedule a Compliance Consultation <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/free-demo" className="btn-ghost px-8 py-4 text-base">
                Request Documentation Review
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Without Documentation</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Exposed</p>
              <p className="mt-1 text-sm text-ink-500">Governance posture</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Outdated or missing policies</p>
                <p className="flex items-center gap-2"><span>✗</span> Inconsistent processes</p>
                <p className="flex items-center gap-2"><span>✗</span> Audit findings & gaps</p>
                <p className="flex items-center gap-2"><span>✗</span> Unclear employee guidance</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">With Documentation</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Ready</p>
              <p className="mt-1 text-sm text-ink-500">Audit-ready governance</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Clear policies & procedures</p>
                <p className="flex items-center gap-2"><span>✓</span> Framework-aligned controls</p>
                <p className="flex items-center gap-2"><span>✓</span> Consistent operations</p>
                <p className="flex items-center gap-2"><span>✓</span> Stronger audit posture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why documentation matters ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-accent-300" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">Why Documentation Matters</h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Every major compliance framework requires documented policies, procedures,
                governance practices, and operational controls. Many organizations either have
                no documentation or rely on outdated policies that no longer reflect how the
                business actually operates.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                Without documentation, even strong technical controls may fail compliance reviews.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {whyItMatters.map((item) => (
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

      {/* ── Documentation services (preview) ── */}
      <section className="container py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">Documentation Services</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Governance That Reflects How You Operate</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Our goal is not to create binders that sit on shelves. We help create documentation
              that reflects real-world operations and supports everyday decision-making.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {docServices.slice(0, 4).map((d) => (
              <div key={d.title} className="rounded-xl border border-ink-200 bg-ink-50 p-6">
                <d.icon className="h-6 w-6 text-accent-700" />
                <p className="mt-3 font-semibold text-ink-900">{d.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All documentation services ── */}
      <section className="bg-ink-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What We Develop</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Documentation Capabilities</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Practical documentation aligned to your compliance frameworks and operations.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docServices.map((d) => (
              <div key={d.title} className="card">
                <d.icon className="h-8 w-8 text-accent-700" />
                <h3 className="mt-4 text-xl">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{d.body}</p>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to Audit-Ready Documentation</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            From gap review to implementation-aligned policies your team can actually use.
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

      {/* ── Framework support ── */}
      <section className="bg-accent-900 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-accent-300">Framework Support</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              Documentation Aligned to the Frameworks You Need
            </h2>
            <blockquote className="mt-10 border-l-4 border-accent-400 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Auditors don&apos;t evaluate intentions — they evaluate evidence. Strong
                documentation turns good security practices into demonstrable compliance.&rdquo;
              </p>
              <p className="mt-3 text-sm text-accent-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div>
            <p className="mb-6 text-sm text-accent-300">Our documentation programs support:</p>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-accent-600 bg-accent-800 px-4 py-2 text-sm font-medium text-accent-100"
                >
                  {f}
                </span>
              ))}
            </div>
            <ul className="mt-10 space-y-3">
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
            <p className="eyebrow">Build a Stronger Foundation</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Whether You&apos;re Preparing for an Audit or Building Long-Term Compliance
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Strong documentation is essential. Tell us your framework and where you are today —
              we&apos;ll help you build policies and procedures that support audit readiness and
              everyday operations.
            </p>
            <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Need a security assessment first?</p>
              <p className="mt-1 text-sm text-ink-600">
                Start with our{" "}
                <Link href="/landing/security-assessments" className="text-accent-700 underline">
                  Security Assessments Program
                </Link>{" "}
                or explore{" "}
                <Link href="/compliance" className="text-accent-700 underline">
                  framework-specific readiness programs
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Consultation</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="policy-documentation"
                fields={formFields}
                submitLabel="Schedule Consultation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
