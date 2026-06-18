import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Rocket,
  Code2,
  Users,
  DollarSign,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Startup MVP Program — Redcloud Systems",
  description:
    "Launch your SaaS, marketplace, or customer portal in 30–60 days. Production-ready MVP built on Next.js, Laravel, and Railway. Validate your idea before burning your runway.",
};

const buildTypes = [
  {
    icon: Code2,
    title: "SaaS Platforms",
    body: "Subscription products with auth, billing, dashboards, and user management — built to scale from day one.",
  },
  {
    icon: Users,
    title: "Marketplaces",
    body: "Two-sided platforms connecting buyers and sellers, with listings, payments, reviews, and dispute handling.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Portals",
    body: "Secure client-facing portals for invoices, project tracking, document sharing, and communication.",
  },
  {
    icon: Zap,
    title: "Internal Business Tools",
    body: "Custom operations tools that replace spreadsheets and legacy software — built exactly to your process.",
  },
];

const problems = [
  "You have a validated idea but a development agency quoted you $200k and 12 months",
  "You hired a freelancer who disappeared 3 months in with half a product",
  "You're burning runway on a full team before knowing if the core product works",
  "Your current no-code tool is hitting walls — you need real infrastructure",
  "You need to show investors or customers a working product, not a prototype",
  "You can't afford to wait 6 months to find out if your core assumptions are wrong",
];

const benefits = [
  { icon: Rocket,      title: "30–60 Day Delivery",      body: "A working, deployed product in 30–60 days — not 6 months. Ship fast, learn fast, iterate." },
  { icon: Code2,       title: "Production-Ready Code",   body: "Not a prototype. Real architecture, real security, real scalability — code you can build on for years." },
  { icon: DollarSign,  title: "Fraction of the Cost",    body: "Modern tooling and an efficient process cuts cost dramatically vs. traditional agency or in-house teams." },
  { icon: Users,       title: "Full Ownership",          body: "You own the code, the repo, the infrastructure. No vendor lock-in. Take it anywhere." },
  { icon: ShieldCheck, title: "Built to Scale",          body: "Architecture designed for growth. Adding features later is straightforward — no costly rewrites." },
  { icon: Zap,         title: "Rapid Iteration",         body: "After launch, we keep moving. Bug fixes, feature additions, and pivots happen in days — not sprints." },
];

const stack = [
  { name: "Next.js",      role: "Frontend & API" },
  { name: "Laravel",      role: "Backend / APIs" },
  { name: "PostgreSQL",   role: "Database" },
  { name: "Railway",      role: "Infrastructure" },
  { name: "Cloudflare",   role: "CDN & Security" },
];

const steps = [
  { n: "01", title: "Scoping Sprint",      body: "One week. We define exactly what gets built: user stories, flows, data model, and technical architecture. No surprises." },
  { n: "02", title: "Core Build",          body: "We build the critical path — the features your MVP must have to validate the idea. Nothing more, nothing less." },
  { n: "03", title: "QA & Staging",        body: "Full QA on a live staging environment. You test every feature before a single user sees it." },
  { n: "04", title: "Launch & Iterate",    body: "Deploy to production. Real users. Real data. We stay with you for the iteration cycles that follow launch." },
];

const timeline = [
  { week: "Week 1",    milestone: "Scoping, architecture, and technical design complete" },
  { week: "Weeks 2–4", milestone: "Core features built and running in development" },
  { week: "Week 5",    milestone: "QA, staging deployment, and your review cycle" },
  { week: "Week 6–8",  milestone: "Launch to production — real users, live data" },
];

const formFields = [
  { name: "first_name",  label: "First Name",                        required: true },
  { name: "last_name",   label: "Last Name",                         required: true },
  { name: "email",       label: "Work Email",                        type: "email" as const, required: true },
  { name: "company",     label: "Company / Startup Name",            required: true },
  { name: "product",     label: "Describe what you want to build",   type: "textarea" as const, full: true, required: true },
  { name: "stage",       label: "Current stage (idea / mockup / partial build)", type: "text" as const },
  { name: "timeline",    label: "Target launch date",                type: "text" as const },
];

export default function StartupMVPPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">Startup MVP Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Launch Your Product{" "}
              <span className="italic text-brand-600">In 30–60 Days.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              SaaS platforms, marketplaces, customer portals, and internal tools — built
              production-ready on a modern stack in a fraction of the time and cost of a
              traditional agency. Validate your idea before burning your runway.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#scope" className="btn-primary px-8 py-4 text-base">
                Schedule a Free Scoping Call <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/portfolio" className="btn-ghost px-8 py-4 text-base">
                See our work
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Traditional Agency</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">6–12 mo</p>
              <p className="mt-1 text-sm text-ink-500">To a working product</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> $100k–$500k budget</p>
                <p className="flex items-center gap-2"><span>✗</span> Months before user feedback</p>
                <p className="flex items-center gap-2"><span>✗</span> Scope creep &amp; overruns</p>
                <p className="flex items-center gap-2"><span>✗</span> You don&apos;t own the IP</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-600">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Redcloud MVP</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">30–60 days</p>
              <p className="mt-1 text-sm text-ink-500">To a live product</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Fraction of agency cost</p>
                <p className="flex items-center gap-2"><span>✓</span> Real users in 2 months</p>
                <p className="flex items-center gap-2"><span>✓</span> Fixed scope, fixed timeline</p>
                <p className="flex items-center gap-2"><span>✓</span> You own everything</p>
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
                Most Startups Die Before They Ever Ship
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                The number one startup killer isn&apos;t bad ideas — it&apos;s taking too long
                to validate them. Every month you spend building without user feedback is
                a month you could be pivoting, iterating, or declaring victory.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Speed to market is a competitive advantage. The team that ships first —
                even with a smaller feature set — wins the learning curve.
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

      {/* ── Section 5: What We Build ── */}
      <section className="container py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">What We Build</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Product Categories. One Proven Process.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Whether you&apos;re building a SaaS product, a marketplace, or a custom business
              tool — the approach is the same: define the critical path, build it right,
              ship it fast, iterate from real feedback.
            </p>
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink-700">Technology stack:</p>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {stack.map((s) => (
                  <div key={s.name} className="rounded-xl border border-ink-200 bg-accent-50 p-3 text-center">
                    <p className="text-xs font-bold text-accent-700">{s.name}</p>
                    <p className="mt-1 text-xs text-ink-500">{s.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {buildTypes.map((b) => (
              <div key={b.title} className="rounded-xl border border-ink-200 bg-accent-50 p-6">
                <b.icon className="h-6 w-6 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{b.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-accent-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Why Redcloud</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Reasons Founders Choose Us</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              We&apos;ve built production software for 20+ years — not demos.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ── Section 7: How It Works + Timeline ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Phases. One Delivered Product.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Every engagement runs through the same disciplined process — scoping, build,
              QA, launch. No surprises, no scope creep, no missed deadlines.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink-200 sm:grid-cols-2">
              {steps.map((s) => (
                <div key={s.n} className="bg-white p-7">
                  <span className="font-display text-3xl font-bold text-brand-600">{s.n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Timeline</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Week by Week to Launch</h2>
            <div className="mt-8 space-y-4">
              {timeline.map((t, i) => (
                <div key={t.week} className="flex items-start gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-1 h-10 w-px bg-ink-200" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-semibold text-ink-500">{t.week}</p>
                    <p className="mt-1 text-base text-ink-900">{t.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Proof ── */}
      <section className="bg-ink-950 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-brand-300">Why Redcloud</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              20+ Years Engineering Experience. Startup Speed.
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Most startups don&apos;t fail because the idea was bad. They fail because
                they took too long to find out. We build fast enough that you still have
                runway left to iterate.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",     label: "Years engineering experience" },
              { value: "30–60",   label: "Days to MVP" },
              { value: "100%",    label: "Code ownership — yours" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-ink-800 bg-ink-900 p-8 text-center">
                <p className="font-display text-5xl font-bold text-brand-400">{s.value}</p>
                <p className="mt-3 text-sm text-ink-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA + Form ── */}
      <section id="scope" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Free Scoping Call</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Tell Us What You Want to Build</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Describe your product idea and where you are today. We&apos;ll tell you
              honestly whether an MVP can be delivered in 30–60 days, what it would take,
              and what a realistic scope looks like — at no cost.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Free scoping call — no obligation",
                "Fixed scope, fixed timeline, no surprises",
                "Production-ready — not a prototype",
                "You own the code, repo, and infrastructure",
                "Next.js, Laravel, PostgreSQL, Railway stack",
                "Live in 30–60 days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-accent-200 bg-accent-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Already have a product — need to modernize it?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/legacy" className="text-accent-700 underline">
                  Legacy Application Modernization Program
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Free Scoping Call</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="startup-mvp"
                fields={formFields}
                submitLabel="Schedule My Free Scoping Call"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
