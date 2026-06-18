import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Server,
  KeyRound,
  Database,
  Eye,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Security Assessments — Redcloud Systems",
  description:
    "Identify risks before they become incidents. Security assessments that reveal vulnerabilities, compliance gaps, and prioritized remediation — for audits, customers, and stronger defenses.",
};

const challenges = [
  "Security weaknesses often remain hidden until exploited",
  "Organizations frequently discover missing controls during audits",
  "Modern cloud environments introduce new security challenges",
  "Many organizations lack a clear understanding of risk exposure",
  "Enterprise customers increasingly require evidence of security maturity",
];

const assessAreas = [
  {
    icon: Server,
    title: "Infrastructure Security",
    body: "Servers, networks, cloud environments, and operational systems.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access Management",
    body: "User access, authentication, and privilege management.",
  },
  {
    icon: Database,
    title: "Data Protection",
    body: "Encryption, storage, transmission, and backup controls.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    body: "Logging, alerting, and visibility capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Readiness",
    body: "HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC alignment.",
  },
  {
    icon: ClipboardList,
    title: "Operational Security",
    body: "Policies, procedures, governance, and incident response.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery & Scoping",
    body: "We review your environment, systems, compliance obligations, and business context to define assessment scope.",
  },
  {
    n: "02",
    title: "Technical Assessment",
    body: "We evaluate infrastructure, access controls, data protection, monitoring, and operational security practices.",
  },
  {
    n: "03",
    title: "Risk & Gap Analysis",
    body: "Findings are analyzed for business impact, compliance implications, and remediation priority.",
  },
  {
    n: "04",
    title: "Report & Roadmap",
    body: "You receive an executive summary, risk register, and a practical remediation roadmap your team can act on.",
  },
];

const deliverables = [
  "Executive Risk Summary",
  "Risk Register",
  "Security Findings Report",
  "Prioritized Recommendations",
  "Compliance Gap Analysis",
  "Remediation Roadmap",
];

const outcomes = [
  "Better visibility into organizational risk",
  "Improved compliance readiness",
  "Stronger customer trust",
  "Faster audit preparation",
  "Clear security improvement priorities",
];

const formFields = [
  { name: "first_name", label: "First Name", required: true },
  { name: "last_name", label: "Last Name", required: true },
  { name: "email", label: "Work Email", type: "email" as const, required: true },
  { name: "company", label: "Company Name", required: true },
  { name: "industry", label: "Industry / Sector", required: true },
  {
    name: "drivers",
    label: "What is driving this assessment? (audit, customer review, compliance initiative, etc.)",
    type: "textarea" as const,
    full: true,
  },
];

export default function SecurityAssessmentsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-ink-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          <div>
            <p className="eyebrow">Security Assessments</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Identify Risks{" "}
              <span className="italic text-accent-700">Before They Become Incidents.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              You can&apos;t protect what you can&apos;t see. Redcloud Systems helps organizations
              understand where risks exist, how they impact the business, and what actions should
              be prioritized — whether you&apos;re preparing for compliance, customer reviews, or
              stronger cybersecurity defenses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#consult" className="btn-primary px-8 py-4 text-base">
                Schedule Security Assessment <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/free-demo" className="btn-ghost px-8 py-4 text-base">
                Request Risk Review
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Without Visibility</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Exposed</p>
              <p className="mt-1 text-sm text-ink-500">Security posture</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Unknown vulnerabilities</p>
                <p className="flex items-center gap-2"><span>✗</span> Compliance gaps discovered late</p>
                <p className="flex items-center gap-2"><span>✗</span> Limited risk visibility</p>
                <p className="flex items-center gap-2"><span>✗</span> Reactive incident response</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">With Assessment</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Clear</p>
              <p className="mt-1 text-sm text-ink-500">Prioritized roadmap</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Risks identified early</p>
                <p className="flex items-center gap-2"><span>✓</span> Compliance gaps mapped</p>
                <p className="flex items-center gap-2"><span>✓</span> Executive-ready reporting</p>
                <p className="flex items-center gap-2"><span>✓</span> Actionable remediation plan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common challenges ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-accent-300" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">
                You Can&apos;t Protect What You Can&apos;t See
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Most organizations believe they have a reasonable understanding of their security
                posture. Unfortunately, attackers, auditors, customers, and regulators often see
                things differently.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                Security assessments provide visibility into vulnerabilities, operational risks,
                compliance gaps, and areas requiring immediate attention — the foundation for
                informed decision-making.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {challenges.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-accent-700 bg-accent-800 px-5 py-4"
                >
                  <span className="mt-0.5 shrink-0 text-brand-400">✗</span>
                  <p className="text-sm text-accent-200">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What we assess (intro + preview) ── */}
      <section className="container py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">What We Assess</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">A Complete View of Your Security Posture</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We evaluate the technical, operational, and compliance dimensions that determine
              whether your organization is prepared for audits, customer security reviews, and
              real-world threats.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Whether you operate on-premises systems, cloud environments, or hybrid infrastructure,
              the assessment is scoped to your business — not a generic checklist.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {assessAreas.slice(0, 4).map((a) => (
              <div key={a.title} className="rounded-xl border border-ink-200 bg-ink-50 p-6">
                <a.icon className="h-6 w-6 text-accent-700" />
                <p className="mt-3 font-semibold text-ink-900">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All assessment areas ── */}
      <section className="bg-ink-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Assessment Scope</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Areas That Define Security Readiness</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              From infrastructure to governance — mapped to your compliance and business requirements.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assessAreas.map((a) => (
              <div key={a.title} className="card">
                <a.icon className="h-8 w-8 text-accent-700" />
                <h3 className="mt-4 text-xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{a.body}</p>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Clear Security Roadmap</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Practical assessments designed for leadership, IT, and compliance teams.
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

      {/* ── Outcomes ── */}
      <section className="bg-accent-900 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-accent-300">Outcomes</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              Visibility That Drives Better Decisions
            </h2>
            <blockquote className="mt-10 border-l-4 border-accent-400 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;The organizations that assess proactively spend less on incidents, move
                faster through audits, and win more enterprise deals.&rdquo;
              </p>
              <p className="mt-3 text-sm text-accent-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o}
                className="flex items-start gap-3 rounded-xl border border-accent-700 bg-accent-800 px-5 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                <p className="text-sm text-accent-100">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Form ── */}
      <section id="consult" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div>
            <p className="eyebrow">Schedule Your Assessment</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Gain a Clear Understanding of Your Security Posture
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us about your environment and what is driving the assessment. We&apos;ll scope
              the review, identify priority risks, and deliver a remediation roadmap your team
              can act on.
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
              <p className="text-sm font-semibold text-ink-900">Need continuous compliance monitoring?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/ai-compliance" className="text-accent-700 underline">
                  AI Compliance Monitoring Program
                </Link>{" "}
                for automated regulatory alerts, or explore{" "}
                <Link href="/compliance" className="text-accent-700 underline">
                  compliance readiness programs
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Security Assessment</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="security-assessments"
                fields={formFields}
                submitLabel="Schedule Assessment"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
