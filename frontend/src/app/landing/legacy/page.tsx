import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Layers, Shield, TrendingUp, Zap } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Legacy Application Modernization Program — Redcloud Systems",
  description:
    "Modernize outdated software without losing your data, your users, or your business continuity. Free legacy assessment.",
};

const problems = [
  "Outdated software no longer supported by the vendor",
  "Developers who built the system have left — nobody understands it",
  "Can't hire for the old tech stack — talent has moved on",
  "Security patches can't be applied without breaking something",
  "Integration with modern tools is impossible or prohibitively expensive",
  "The system works — but it's a single point of failure nobody wants to touch",
];

const modernizations = [
  { name: "PHP & Legacy Web Apps",      desc: "Migrate aging PHP codebases to modern Laravel, Next.js, or headless architectures without losing business logic." },
  { name: "Internal Portals & Tools",   desc: "Replace brittle internal systems with clean, maintainable platforms your team will actually want to use." },
  { name: "Legacy Databases",           desc: "Migrate from outdated database engines to modern, scalable PostgreSQL or cloud-native alternatives." },
  { name: "On-Premise to Cloud",        desc: "Lift, shift, and modernize on-premise systems to cloud infrastructure — with reduced cost and improved reliability." },
  { name: "Monolith Decomposition",     desc: "Break large, tangled codebases into maintainable services or modules — without a risky big-bang rewrite." },
  { name: "API Layer Extraction",       desc: "Wrap legacy systems in modern APIs so new tools can integrate without touching the old code underneath." },
];

const benefits = [
  { icon: Shield,     title: "Eliminate Security Risk",   body: "Get off unsupported software and close the vulnerabilities that legacy systems accumulate year after year." },
  { icon: Zap,        title: "Restore Velocity",          body: "Modern stacks move faster. New features that took months to build take days. Hiring becomes possible again." },
  { icon: Layers,     title: "Full Ownership",            body: "Clean, documented, maintainable code your team understands — no more depending on one person who holds all the knowledge." },
  { icon: TrendingUp, title: "Future-Ready Architecture", body: "Built to integrate with modern tools, AI systems, and cloud infrastructure — not just to replicate the old behavior." },
];

const steps = [
  { n: "01", title: "Legacy Audit",         body: "We assess your codebase, infrastructure, and business logic — documenting what exists, what it does, and what the migration path looks like." },
  { n: "02", title: "Modernization Plan",   body: "A phased roadmap that de-risks the migration — identifying what to rewrite, what to wrap, and what can be retired entirely." },
  { n: "03", title: "Parallel Build",       body: "The new system is built and validated alongside the old one — your business never goes offline waiting for a rewrite to finish." },
  { n: "04", title: "Cutover & Handoff",    body: "Traffic migrated in controlled stages. Full documentation, runbooks, and team training delivered at handoff." },
];

const formFields = [
  { name: "first_name",   label: "First Name",         required: true },
  { name: "last_name",    label: "Last Name",          required: true },
  { name: "email",        label: "Work Email",         type: "email" as const, required: true },
  { name: "company",      label: "Company Name",       required: true },
  {
    name: "stack", label: "Current tech stack / platform",
    type: "select" as const, required: true,
    options: ["PHP / legacy web app", "Internal portal or admin tool", "On-premise server software", "Legacy database system", "Old SaaS / custom platform", "Not sure — need an assessment"],
  },
  {
    name: "urgency", label: "How urgent is the modernization?",
    type: "select" as const,
    options: ["Critical — system is failing or at risk", "High — blocking growth and new hires", "Medium — planning ahead", "Exploring options"],
  },
  { name: "pain", label: "What is the biggest risk or cost your legacy system creates today?", type: "textarea" as const, full: true },
];

export default function LegacyLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: ink-100 (cool grey) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/30 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left */}
          <div>
            <p className="eyebrow">Legacy Application Modernization Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Modernize Outdated Software Without Losing Your{" "}
              <span className="italic text-brand-600">Data, Your Users, or Your Business.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We replace aging, unsupported applications with modern, maintainable systems —
              preserving your business logic and data while eliminating the risk, cost, and
              technical debt that legacy software accumulates.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Legacy Assessment <ArrowRight className="h-5 w-5" />
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
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Legacy</p>
              <p className="mt-1 text-sm text-ink-500">PHP / unsupported stack</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> No vendor support</p>
                <p className="flex items-center gap-2"><span>✗</span> Can't hire for the stack</p>
                <p className="flex items-center gap-2"><span>✗</span> Security patches break things</p>
                <p className="flex items-center gap-2"><span>✗</span> Can't integrate modern tools</p>
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
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Modern</p>
              <p className="mt-1 text-sm text-ink-500">Clean, supported stack</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Fully supported & documented</p>
                <p className="flex items-center gap-2"><span>✓</span> Easy to hire and onboard</p>
                <p className="flex items-center gap-2"><span>✓</span> Automated security updates</p>
                <p className="flex items-center gap-2"><span>✓</span> Integrates with any modern tool</p>
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
                Legacy Software Doesn&apos;t Stay Still — It Gets More Expensive Every Year You Keep It.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Every year you run on legacy software, the risk compounds. Security vulnerabilities
                accumulate. The vendor ecosystem moves on. The developers who understand it retire
                or leave. And the cost to finally migrate gets higher.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                The best time to modernize was five years ago. The second best time is now —
                before a security incident, a key departure, or a vendor end-of-life forces
                your hand in an emergency.
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

      {/* ── Section 5: Solution + What We Modernize ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Replace the Risk. Keep the Business Logic.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We don&apos;t just rewrite code — we preserve everything your business depends on.
              Every rule, every workflow, every edge case your team has learned over years gets
              carried forward into a clean, modern system.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              We run old and new systems in parallel until confidence is absolute — so your
              business never stops, no data is lost, and no user notices the switch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {modernizations.map((m) => (
              <div key={m.name} className="rounded-xl border border-ink-200 bg-ink-50 p-6">
                <Layers className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{m.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      <section className="bg-ink-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Measured in security risk eliminated, developer velocity restored, and technical debt retired.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Audit. Plan. Build in Parallel. Cut Over.</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Zero downtime. Zero data loss. Your business never stops running.
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
              We&apos;ve Seen Every Version of Legacy. We Know How to Get Out.
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;The goal isn&apos;t just to modernize the code — it&apos;s to give your team
                back the ability to move fast, hire confidently, and build without fear of
                breaking something.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Legacy Modernization Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",   label: "Years modernizing enterprise and SMB applications" },
              { value: "0",     label: "Business disruptions during our parallel migration process" },
              { value: "250+",  label: "Active installations across 12 industries" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Legacy Application Assessment</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll assess your current system, document the risks and costs of staying on it,
              and give you a clear modernization path — with realistic timelines and cost estimates.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Codebase and infrastructure risk assessment",
                "Business logic and data dependency mapping",
                "Recommended modernization approach (rewrite vs. wrap vs. migrate)",
                "Phased roadmap with timeline and cost estimates",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Just slow, not outdated?</p>
              <p className="mt-1 text-sm text-ink-600">
                If your system is modern but underperforming, see the{" "}
                <Link href="/landing/performance" className="text-brand-700 underline">
                  Performance Optimization Program
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Assessment</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="legacy-assessment"
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
