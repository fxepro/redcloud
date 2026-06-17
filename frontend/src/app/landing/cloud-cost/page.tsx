import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingDown, Gauge, Lock, HeartHandshake } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Cloud Cost Reduction Program — Redcloud Systems",
  description:
    "Cut your AWS bill by up to 80% without breaking your application. Free cloud cost audit. No obligation.",
};

const problems = [
  "AWS bills that grow every month with no clear reason",
  "Reserved instances and savings plans you barely understand",
  "Over-provisioned servers sitting idle 90% of the time",
  "Surprise charges from data transfer and API calls",
  "DevOps time wasted managing complex AWS infrastructure",
  "Vendor lock-in making it impossible to switch or negotiate",
];

const benefits = [
  { icon: TrendingDown,   title: "Cut Bills by Up to 80%",    body: "Move from complex, unpredictable AWS pricing to flat, transparent monthly billing on Railway." },
  { icon: Gauge,          title: "Same Performance",          body: "No degradation in speed or reliability. Your app runs the same — just at a fraction of the cost." },
  { icon: Lock,           title: "Zero Downtime Migration",   body: "We run old and new infrastructure in parallel until everything is verified and stable." },
  { icon: HeartHandshake, title: "Simpler to Manage",         body: "Your team spends less time on infrastructure and more time shipping features that matter." },
];

const steps = [
  { n: "01", title: "Free Cost Audit",       body: "We analyze your current AWS spend, identify waste, and calculate exactly how much you could save." },
  { n: "02", title: "Migration Blueprint",   body: "A detailed plan mapping every service, dependency, and cutover step — with expected savings at each stage." },
  { n: "03", title: "Parallel Migration",    body: "We build and validate the new infrastructure while your existing setup stays live and untouched." },
  { n: "04", title: "Cutover & Monitoring",  body: "DNS and traffic shifted when everything is confirmed stable. We monitor for 30 days post-migration." },
];

const formFields = [
  { name: "first_name",    label: "First Name",          required: true },
  { name: "last_name",     label: "Last Name",           required: true },
  { name: "email",         label: "Work Email",          type: "email" as const, required: true },
  { name: "company",       label: "Company Name",        required: true },
  { name: "monthly_spend", label: "Approximate Monthly AWS Spend", type: "select" as const, required: true,
    options: ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000 – $20,000", "$20,000+"] },
  { name: "pain",          label: "What is your biggest frustration with your current cloud setup?", type: "textarea" as const, full: true },
];

export default function CloudCostLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: brand-50 (light red) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-100/50 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline + CTA */}
          <div>
            <p className="eyebrow">Cloud Cost Reduction Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Cut Your AWS Bill By Up To 80% Without{" "}
              <span className="italic text-brand-600">Breaking Your Application.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We migrate businesses off expensive, over-complicated AWS infrastructure to
              modern, transparent cloud platforms — without downtime, without risk, without
              disrupting daily operations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Cost Audit <ArrowRight className="h-5 w-5" />
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">$2,500</p>
              <p className="mt-1 text-sm text-ink-500">Monthly AWS bill</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Unpredictable pricing</p>
                <p className="flex items-center gap-2"><span>✗</span> 12 services to manage</p>
                <p className="flex items-center gap-2"><span>✗</span> DevOps hours wasted</p>
                <p className="flex items-center gap-2"><span>✗</span> Idle over-provisioning</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">$500</p>
              <p className="mt-1 text-sm text-ink-500">Monthly cloud bill</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Flat predictable pricing</p>
                <p className="flex items-center gap-2"><span>✓</span> One dashboard</p>
                <p className="flex items-center gap-2"><span>✓</span> Zero DevOps overhead</p>
                <p className="flex items-center gap-2"><span>✓</span> Right-sized resources</p>
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
                AWS Was Built for Amazon. Not for Your Business.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                AWS is powerful — but it&apos;s also one of the most expensive and complex cloud
                platforms ever built. Most businesses are paying for services they don&apos;t need,
                capacity they don&apos;t use, and complexity they can&apos;t justify.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Every month you stay on an oversized plan is money leaving your business for no
                reason. There is a better way.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Move Smart. Pay Less. Keep Everything Running.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Redcloud Systems migrates your infrastructure to modern, right-sized cloud platforms
              with transparent, predictable pricing — without touching your codebase or taking
              anything offline.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              We run old and new infrastructure in parallel, verify every service is working
              correctly, then cut over cleanly. Your team notices lower bills. Your users notice
              nothing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "No application changes",   sub: "We migrate the infrastructure — not the code. Your app runs exactly as it does today." },
              { label: "Parallel environments",    sub: "Both platforms run side-by-side until we verify the new setup is stable and complete." },
              { label: "Transparent pricing",      sub: "Flat monthly billing with no surprise charges from data transfer, API calls, or idle resources." },
              { label: "Full infrastructure docs", sub: "You get documented architecture, runbooks, and full ownership of everything we build." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-ink-200 bg-brand-50 p-6">
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      {/* brand-50 background (page signature color) */}
      <section className="bg-brand-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              We measure success by dollars saved and uptime maintained — not cloud certifications.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Leaner Cloud</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            From audit to cutover — a clear process with no surprises and no downtime.
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
              We&apos;ve Moved Businesses Off Expensive Infrastructure Before
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Our goal is simple: reduce your cloud spend, simplify your stack, and give
                your team back the hours they were spending on infrastructure.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "80%",  label: "Average cloud cost reduction" },
              { value: "250+", label: "Active client installations" },
              { value: "20+",  label: "Years infrastructure experience" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Cloud Cost Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll analyze your current AWS spend and show you exactly how much you could
              save — with a clear migration path and no obligation to proceed.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Full AWS spend breakdown by service",
                "Idle and over-provisioned resource report",
                "Cost-to-migrate estimate",
                "Projected monthly savings after migration",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-brand-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Not on AWS?</p>
              <p className="mt-1 text-sm text-ink-600">
                We also reduce costs on{" "}
                <Link href="/services/technical-consulting" className="text-brand-700 underline">
                  GCP, Azure, and DigitalOcean
                </Link>
                . The audit is the same.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Audit</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="cloud-cost-audit"
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
