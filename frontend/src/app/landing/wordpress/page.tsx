import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Shield, Zap, DollarSign } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "WordPress Modernization Program — Redcloud Systems",
  description:
    "Turn your slow, insecure WordPress website into a lightning-fast modern platform. Free assessment. No obligation.",
};

const problems = [
  "Slow page loads driving visitors away",
  "Plugin conflicts breaking your site",
  "Security vulnerabilities putting you at risk",
  "High maintenance costs eating your budget",
  "Poor mobile performance hurting conversions",
  "Low PageSpeed scores killing your SEO rankings",
];

const benefits = [
  { icon: Zap,          title: "Faster Load Times", body: "Pages that load in under 1 second — not 6. Better experience, better rankings, more revenue." },
  { icon: TrendingUp,   title: "More Leads",         body: "Faster sites convert better. Every second of load time costs you conversions and revenue." },
  { icon: DollarSign,   title: "Lower Costs",        body: "Cut hosting and maintenance bills. No more paying for plugins that break everything." },
  { icon: Shield,       title: "Better Security",    body: "Eliminate the WordPress attack surface. No plugins, no known exploits, no emergency patches." },
];

const steps = [
  { n: "01", title: "Free Website Audit",    body: "We analyze your existing site and identify performance, security, and SEO gaps. No cost, no commitment." },
  { n: "02", title: "Migration Plan",        body: "A detailed roadmap with exact timelines, deliverables, and expected outcomes — before any work begins." },
  { n: "03", title: "Platform Conversion",   body: "Content, images, branding, and SEO are preserved while we rebuild on a modern, fast architecture." },
  { n: "04", title: "Launch & Support",      body: "We handle deployment, QA, and DNS cutover — then monitor and support you post-launch." },
];

const auditIncludes = [
  "PageSpeed and Core Web Vitals analysis",
  "Security vulnerability assessment",
  "SEO technical audit",
  "Cost-to-modernize estimate",
  "No obligation. No pressure.",
];

const formFields = [
  { name: "first_name", label: "First Name",    required: true },
  { name: "last_name",  label: "Last Name",     required: true },
  { name: "email",      label: "Work Email",    type: "email" as const, required: true },
  { name: "company",    label: "Company Name",  required: true },
  { name: "website",    label: "Current Website URL", type: "text" as const, full: true },
  { name: "pain",       label: "What is your biggest frustration with your current website?", type: "textarea" as const, full: true },
];

export default function WordPressLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline + CTA */}
          <div>
            <p className="eyebrow">Website Modernization Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Turn Your Slow WordPress Site Into A{" "}
              <span className="italic text-brand-600">Lightning-Fast Modern Platform.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We help businesses modernize legacy technology, reduce operating costs, and stop
              losing leads to slow, insecure platforms — without disrupting daily business.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Claim Your Free Audit <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/portfolio" className="btn-ghost px-8 py-4 text-base">
                See our work
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before</p>
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">6–12s</p>
              <p className="mt-1 text-sm text-ink-500">Average page load</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Plugin conflicts monthly</p>
                <p className="flex items-center gap-2"><span>✗</span> Security patches weekly</p>
                <p className="flex items-center gap-2"><span>✗</span> $300+/mo maintenance</p>
                <p className="flex items-center gap-2"><span>✗</span> Poor mobile scores</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">&lt; 1s</p>
              <p className="mt-1 text-sm text-ink-500">Average page load</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Zero plugin dependencies</p>
                <p className="flex items-center gap-2"><span>✓</span> Automated security</p>
                <p className="flex items-center gap-2"><span>✓</span> Lower hosting costs</p>
                <p className="flex items-center gap-2"><span>✓</span> Perfect mobile scores</p>
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
                Is Your WordPress Site Holding Your Business Back?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Most WordPress sites degrade over time. More plugins. More conflicts. More cost.
                Meanwhile your competitors are getting faster and your customers are leaving before
                your page even loads.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                These problems cost you visitors, leads, and revenue every single day you leave them
                unaddressed.
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

      {/* ── Section 5: Solution ── */}
      <section className="container py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Modernize Without Starting Over</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Redcloud Systems converts your WordPress site into a lightning-fast modern platform —
              preserving your content, branding, and SEO while eliminating everything that slows
              you down.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              We don&apos;t just swap your theme. We rebuild the foundation using modern
              architecture that&apos;s faster, more secure, and costs less to run — without taking
              your site offline or losing a single page of content.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Content & SEO preserved", sub: "Every page, every URL, every ranking signal migrated intact." },
              { label: "Branding kept exactly", sub: "Same look and feel — just faster, cleaner, and modern." },
              { label: "Zero downtime cutover", sub: "We switch the DNS when the new site is fully tested and live." },
              { label: "Full ownership", sub: "You own the code, the repo, and the infrastructure. No lock-in." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-ink-200 bg-sand-100 p-6">
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-sand-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              We measure success by business outcomes — not the technology stack underneath.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card">
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Modern Platform</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            From audit to launch — a clear, predictable process with no surprises.
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
              We Focus On Business Outcomes — Not Technology Buzzwords
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Build platforms that load faster, rank higher, convert better, and cost less
                to maintain.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Systems mission</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",  label: "Years engineering experience" },
              { value: "250+", label: "Active client installations" },
              { value: "12",   label: "Industries served" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Claim Your Free Website Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll review your site and deliver a clear report covering performance,
              security, SEO, and exactly what it would take to modernize.
            </p>
            <ul className="mt-10 space-y-4">
              {auditIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Not ready to talk?</p>
              <p className="mt-1 text-sm text-ink-600">
                Read our{" "}
                <Link href="/services/custom-software-development" className="text-brand-700 underline">
                  services overview
                </Link>{" "}
                or{" "}
                <Link href="/portfolio" className="text-brand-700 underline">
                  view client work
                </Link>{" "}
                first.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Audit</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="wordpress-audit"
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
