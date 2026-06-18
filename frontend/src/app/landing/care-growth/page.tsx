import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Shield,
  TrendingUp,
  RefreshCw,
  HardDrive,
  Search,
  FileEdit,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Website Care & Growth Plan — Redcloud Systems",
  description:
    "Your outsourced web team. Monthly plans covering updates, security monitoring, backups, SEO improvements, performance monitoring, and content updates.",
};

const services = [
  {
    icon: RefreshCw,
    title: "Updates & Maintenance",
    body: "Platform, plugin, and dependency updates applied and tested — keeping your site current, stable, and compatible.",
  },
  {
    icon: Shield,
    title: "Security Monitoring",
    body: "24/7 monitoring for threats, intrusions, and vulnerabilities. Incidents addressed before they become outages.",
  },
  {
    icon: HardDrive,
    title: "Backups",
    body: "Automated daily backups stored offsite. Full restore capability in minutes if anything ever goes wrong.",
  },
  {
    icon: TrendingUp,
    title: "SEO Improvements",
    body: "Monthly on-page SEO work — title tags, meta descriptions, internal linking, and technical fixes that compound over time.",
  },
  {
    icon: Search,
    title: "Performance Monitoring",
    body: "Lighthouse and Core Web Vitals tracked monthly. Performance regressions caught and fixed before they cost you rankings.",
  },
  {
    icon: FileEdit,
    title: "Content Updates",
    body: "Text, images, team pages, service listings, pricing — updated promptly without a support ticket queue.",
  },
];

const problems = [
  "Your site hasn't been updated in 6 months because no one has time to deal with it",
  "You get a call that your site is down — and you have no idea when it happened or why",
  "A plugin update broke something and it took 3 days to notice and fix",
  "You're paying a developer $150/hr to change a phone number or update an address",
  "Your site has never been backed up — one bad update away from losing everything",
  "Your competitors are ranking above you because their site is actively maintained",
];

const plans = [
  {
    name: "Essential",
    price: "$299/mo",
    description: "Core protection for small business sites",
    includes: [
      "Monthly updates & patches",
      "Weekly automated backups",
      "Security monitoring",
      "Monthly performance report",
      "Up to 2 content updates/mo",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$599/mo",
    description: "Active maintenance and SEO for growing businesses",
    includes: [
      "Everything in Essential",
      "Daily backups",
      "Monthly SEO improvements",
      "Core Web Vitals optimization",
      "Up to 6 content updates/mo",
      "Priority support",
      "Quarterly strategy review",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "Full outsourced web team for established businesses",
    includes: [
      "Everything in Growth",
      "Unlimited content updates",
      "Monthly blog post",
      "A/B testing",
      "Conversion rate optimization",
      "Dedicated account manager",
      "Monthly video call",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

const steps = [
  { n: "01", title: "Site Onboarding",    body: "We audit your current site, set up monitoring, configure backups, and document everything we need to manage it properly." },
  { n: "02", title: "Baseline Work",      body: "We fix any critical issues identified in the audit — security gaps, performance problems, outdated plugins — in week one." },
  { n: "03", title: "Monthly Cycle",      body: "Every month: updates applied, backups verified, performance checked, SEO work done, content updates handled." },
  { n: "04", title: "Quarterly Review",   body: "We meet to review what was done, what improved, and what opportunities exist to grow traffic and conversions further." },
];

const formFields = [
  { name: "first_name",  label: "First Name",                    required: true },
  { name: "last_name",   label: "Last Name",                     required: true },
  { name: "email",       label: "Work Email",                    type: "email" as const, required: true },
  { name: "company",     label: "Company Name",                  required: true },
  { name: "website",     label: "Website URL",                   type: "text" as const, required: true, full: false },
  { name: "platform",    label: "Platform (WordPress, Next.js, Webflow, other)", type: "text" as const },
  { name: "pain",        label: "What's the biggest headache with maintaining your site today?", type: "textarea" as const, full: true },
];

export default function CareGrowthPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-sand-200/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">Website Care & Growth Plan</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Your Website.{" "}
              <span className="italic text-accent-700">Professionally Managed.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Stop firefighting your own website. A monthly plan that covers updates,
              security, backups, SEO, performance, and content — handled by a team
              that treats your site like it&apos;s their own.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#plans" className="btn-primary px-8 py-4 text-base">
                See Plans & Pricing <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/landing/free-audit" className="btn-ghost px-8 py-4 text-base">
                Get a free site audit first
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">DIY Today</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Reactive</p>
              <p className="mt-1 text-sm text-ink-500">Always fixing, never improving</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Site goes down, you find out late</p>
                <p className="flex items-center gap-2"><span>✗</span> No backups until it&apos;s too late</p>
                <p className="flex items-center gap-2"><span>✗</span> $150/hr for small changes</p>
                <p className="flex items-center gap-2"><span>✗</span> SEO slowly declining</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">Care Plan</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Proactive</p>
              <p className="mt-1 text-sm text-ink-500">Maintained, monitored, growing</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> 24/7 monitoring &amp; alerts</p>
                <p className="flex items-center gap-2"><span>✓</span> Daily backups offsite</p>
                <p className="flex items-center gap-2"><span>✓</span> Flat monthly rate</p>
                <p className="flex items-center gap-2"><span>✓</span> SEO improving monthly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Problem (dark) ── */}
      <section className="bg-ink-950 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-brand-400" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">
                Your Website Is a Business Asset — Are You Treating It Like One?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Most businesses spend good money building a website — then leave it to
                slowly degrade. Outdated plugins, no backups, declining SEO, and no one
                monitoring whether it&apos;s even up.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Your website works for your business 24/7. It deserves the same attention
                you give any other critical business system — ongoing maintenance, monitoring,
                and continuous improvement.
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

      {/* ── Section 5: Services ── */}
      <section className="container py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">What&apos;s Covered</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Six Things Handled Every Month</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Everything your site needs to stay healthy and keep improving.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card">
              <s.icon className="h-8 w-8 text-accent-700" />
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: Plans ── */}
      <section id="plans" className="bg-sand-100 py-28">
        <div className="container">
          <div className="text-center">
            <p className="eyebrow">Plans & Pricing</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Simple Monthly Plans. No Contracts.</h2>
            <p className="mt-4 text-lg text-ink-600">Cancel anytime. No setup fees. Start within 48 hours.</p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-accent-500 bg-accent-900 text-cream ring-2 ring-accent-500"
                    : "border-ink-200 bg-white"
                }`}
              >
                {plan.highlight && (
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-300">
                    Most Popular
                  </p>
                )}
                <p className={`text-xl font-semibold ${plan.highlight ? "text-cream" : "text-ink-900"}`}>
                  {plan.name}
                </p>
                <p className={`mt-1 text-sm ${plan.highlight ? "text-accent-300" : "text-ink-500"}`}>
                  {plan.description}
                </p>
                <p className={`mt-6 font-display text-5xl font-bold ${plan.highlight ? "text-cream" : "text-ink-900"}`}>
                  {plan.price}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 ${plan.highlight ? "text-accent-300" : "text-accent-700"}`} />
                      <span className={`text-sm ${plan.highlight ? "text-accent-200" : "text-ink-700"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "border border-ink-300 text-ink-700 hover:bg-ink-50"
                  }`}
                >
                  {plan.cta}
                </a>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Onboard Once. We Handle the Rest.</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Up and running within 48 hours of signing up.
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

      {/* ── Section 8: Proof ── */}
      <section className="bg-accent-900 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-accent-300">Why Redcloud</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              We Treat Your Website Like a Business Asset, Not a Side Task
            </h2>
            <blockquote className="mt-10 border-l-4 border-accent-400 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Most businesses can&apos;t justify a full-time web developer. But they
                absolutely need one. That&apos;s the gap a Care Plan fills — senior-level
                attention at a fraction of the cost.&rdquo;
              </p>
              <p className="mt-3 text-sm text-accent-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",    label: "Years engineering experience" },
              { value: "250+",   label: "Active client installations" },
              { value: "48hr",   label: "Onboarding turnaround" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-accent-700 bg-accent-800 p-8 text-center">
                <p className="font-display text-5xl font-bold text-accent-300">{s.value}</p>
                <p className="mt-3 text-sm text-accent-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA + Form ── */}
      <section id="contact" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Get Started</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Stop Maintaining Your Site. Let Us Do It.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us about your site and what&apos;s been frustrating you most. We&apos;ll
              recommend the right plan and have you onboarded within 48 hours.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "No contracts — cancel anytime",
                "No setup fees",
                "Onboarded within 48 hours",
                "Works with WordPress, Next.js, Webflow, and more",
                "Flat monthly rate — no surprise invoices",
                "Dedicated team that knows your site",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-sand-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Not sure where to start?</p>
              <p className="mt-1 text-sm text-ink-600">
                Get a{" "}
                <Link href="/landing/free-audit" className="text-accent-700 underline">
                  free digital audit
                </Link>{" "}
                first — we&apos;ll show you exactly what needs attention on your site.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Started Today</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="care-growth"
                fields={formFields}
                submitLabel="Get Started"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
