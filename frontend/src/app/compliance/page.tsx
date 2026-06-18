import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Bell, Search, FileText, RefreshCw } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { CoreServices } from "@/components/offerings";
import { SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/cta";
import { LeadForm } from "@/components/lead-form";
import type { ServiceOffering } from "@/lib/types";

export const metadata: Metadata = {
  title: "Compliance Solutions — Redcloud Systems",
  description:
    "Reduce risk, improve security, and prepare for audits. HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC readiness programs plus AI-powered compliance automation.",
};

const heroImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80";

const features = [
  "Reduce risk and close compliance gaps",
  "Build the documentation auditors require",
  "Implement technical controls that satisfy frameworks",
  "Prepare for certification without expensive consultants",
  "Automate regulatory monitoring so nothing slips through",
  "Maintain compliance posture continuously — not just at audit time",
];

const compliancePrograms: ServiceOffering[] = [
  {
    title: "HIPAA Readiness",
    description: "Protect patient data and improve healthcare information security.",
    bullets: [
      "Risk analysis and gap assessment",
      "Privacy and security policy development",
      "Technical safeguards implementation",
    ],
  },
  {
    title: "SOC 2 Readiness",
    description: "Demonstrate security, availability, and operational maturity to enterprise customers.",
    bullets: [
      "Trust service criteria gap analysis",
      "Control design and implementation",
      "Evidence collection and audit prep",
    ],
  },
  {
    title: "ISO 27001",
    description: "Build a structured information security management system.",
    bullets: [
      "ISMS design and documentation",
      "Risk treatment planning",
      "Internal audit readiness",
    ],
  },
  {
    title: "PCI DSS Readiness",
    description: "Protect payment card data and secure your payment environment.",
    bullets: [
      "Cardholder data environment scoping",
      "Control gap assessment",
      "Remediation and QSA prep",
    ],
  },
  {
    title: "NIST Cybersecurity Framework",
    description: "Implement best-practice security controls and strengthen cyber resilience.",
    bullets: [
      "Framework tier assessment",
      "Core function implementation",
      "Continuous improvement roadmap",
    ],
  },
  {
    title: "CMMC Readiness",
    description: "Prepare for DoD cybersecurity requirements for defense contractors.",
    bullets: [
      "CMMC level scoping and gap analysis",
      "Practice and process implementation",
      "C3PAO assessment preparation",
    ],
  },
];

const automationServices = [
  {
    icon: Bell,
    name: "AI Compliance Monitoring",
    desc: "AI monitors every relevant regulatory body around the clock and alerts you the moment a change affects your business — with a plain-English summary and risk rating.",
    href: "/landing/ai-compliance",
    cta: "Learn more",
  },
  {
    icon: Search,
    name: "Security Assessments",
    desc: "A comprehensive review of your environment, systems, and operations — delivered as a risk summary, gap analysis, and prioritized remediation roadmap.",
    href: "#contact",
    cta: "Get an assessment",
  },
  {
    icon: FileText,
    name: "Policy & Documentation",
    desc: "We write and implement the policies, procedures, and operational controls required by your compliance framework — ready for auditor review.",
    href: "#contact",
    cta: "Get started",
  },
  {
    icon: RefreshCw,
    name: "Ongoing Compliance Support",
    desc: "Monthly monitoring, security improvements, documentation maintenance, and continuous improvement — so compliance doesn't decay after certification.",
    href: "#contact",
    cta: "Get started",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery Assessment",
    body: "We review your environment, systems, policies, and operations.",
    delivers: ["Risk summary", "Gap analysis", "Recommended roadmap"],
  },
  {
    n: "02",
    title: "Remediation & Implementation",
    body: "We implement required controls, documentation, and technical improvements.",
    delivers: ["MFA & identity management", "Access controls & logging", "Encryption & backups"],
  },
  {
    n: "03",
    title: "Readiness Review",
    body: "Before audits or assessments, we validate readiness and close remaining gaps.",
    delivers: ["Pre-audit checklist", "Evidence package", "Gap closure plan"],
  },
  {
    n: "04",
    title: "Continuous Improvement",
    body: "Compliance is ongoing — we help you maintain and improve your posture over time.",
    delivers: ["Monthly monitoring", "Policy updates", "Quarterly reviews"],
  },
];

const faqs = [
  {
    q: "Can you certify our compliance?",
    a: "No. Certification is performed by authorized auditors, assessors, or certification bodies. We help organizations prepare for those processes.",
  },
  {
    q: "How long does compliance readiness take?",
    a: "It depends on organizational size, complexity, and current maturity. Most projects show significant progress within 30–90 days.",
  },
  {
    q: "Do we need expensive compliance software?",
    a: "Not always. Many organizations achieve significant improvements using existing technology combined with process improvements.",
  },
  {
    q: "Can you help after certification?",
    a: "Yes. We provide ongoing monitoring, security improvements, documentation maintenance, and compliance support services.",
  },
];

const formFields = [
  { name: "first_name",  label: "First Name",                        required: true },
  { name: "last_name",   label: "Last Name",                         required: true },
  { name: "email",       label: "Work Email",                        type: "email" as const, required: true },
  { name: "company",     label: "Company Name",                      required: true },
  { name: "framework",   label: "Target framework (HIPAA, SOC 2, etc.)", type: "text" as const },
  { name: "challenge",   label: "What is your biggest compliance challenge?", type: "textarea" as const, full: true },
];

export default function CompliancePage() {
  return (
    <>
      <PageBanner
        icon="Shield"
        title="Compliance Solutions"
        tagline="Reduce risk, improve security, and prepare for audits — HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, and CMMC."
        breadcrumbs={[{ label: "Compliance" }]}
        cta={{ label: "Schedule Free Assessment", href: "#contact", icon: <ArrowRight className="h-4 w-4" /> }}
      />

      <SubtextBar>
        Whether you handle patient data, process payments, manage customer records, or prepare
        for enterprise contracts — we implement the technical controls, policies, and documentation
        needed to pass audits and build lasting confidence with customers and regulators.
      </SubtextBar>

      <MediaSplit image={heroImage} alt="Compliance and audit readiness" priority>
        <p className="eyebrow">Why it matters</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          Compliance is a competitive advantage
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-ink-600">
          <p>
            Organizations that invest in compliance win faster. Customers trust them more.
            Enterprise buyers close deals with them sooner. Regulators treat them better.
            Most businesses know they need to improve — they just don&apos;t know where to start
            or how to do it without breaking the budget.
          </p>
          <p>
            Red Cloud Systems provides practical compliance programs that align technology,
            processes, and documentation — without unnecessary complexity or expensive
            software licenses.
          </p>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm font-medium text-ink-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              {f}
            </li>
          ))}
        </ul>
        <Link href="#contact" className="btn-primary mt-8">
          Schedule Free Assessment <ArrowRight className="h-4 w-4" />
        </Link>
      </MediaSplit>

      {/* ── Compliance Programs ── */}
      <CoreServices
        items={compliancePrograms}
        eyebrow="Compliance solutions"
        title="Framework-specific readiness programs"
        action={
          <Link href="#contact" className="btn-primary">
            Schedule a free assessment
          </Link>
        }
      />

      {/* ── Compliance Automation ── */}
      <section className="container section">
        <SectionHeading
          eyebrow="Compliance automation"
          title="Reduce manual work. Maintain continuously."
          description="Compliance doesn't end at certification. These services keep your posture strong through automation, monitoring, and ongoing documentation support."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {automationServices.map((s) => (
            <div key={s.name} className="rounded-2xl border border-ink-200 bg-white p-8">
              <s.icon className="h-8 w-8 text-accent-700" />
              <h3 className="mt-4 text-xl font-semibold text-ink-900">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
              <Link
                href={s.href}
                className="mt-5 flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
              >
                {s.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="bg-ink-50 section">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title="Four steps to a stronger compliance posture"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-ink-200 bg-white p-8">
                <span className="font-display text-4xl font-bold text-accent-700">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
                <div className="mt-5 border-t border-ink-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Delivers</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.delivers.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-ink-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="container section">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Compliance is complex. Here are the questions we hear most often."
          />
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-ink-200 bg-white p-6">
                <p className="font-semibold text-ink-900">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment Form ── */}
      <section id="contact" className="bg-ink-50 section">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Free assessment"
                title="Schedule your free compliance assessment"
                description="Understand your risks. Identify your gaps. Build a practical roadmap — whether you're beginning your compliance journey or preparing for a major audit."
              />
              <ul className="mt-10 space-y-4">
                {[
                  "Risk summary and gap analysis delivered",
                  "Framework-specific recommendations",
                  "Practical roadmap — not a sales pitch",
                  "No obligation. No pressure.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-xl border border-accent-200 bg-accent-50 p-6">
                <p className="text-sm font-semibold text-ink-900">Need automated regulatory monitoring?</p>
                <p className="mt-1 text-sm text-ink-600">
                  See our{" "}
                  <Link href="/landing/ai-compliance" className="text-accent-700 underline">
                    AI Compliance & Policy Monitoring
                  </Link>{" "}
                  — real-time alerts when regulations change.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
              <h3 className="text-2xl font-semibold text-ink-900">Schedule a Free Assessment</h3>
              <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
              <div className="mt-6">
                <LeadForm
                  formKey="compliance-assessment"
                  fields={formFields}
                  submitLabel="Schedule My Free Assessment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
