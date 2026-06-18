import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Search,
  Shield,
  TrendingUp,
  DollarSign,
  Monitor,
  BarChart3,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Free Digital Audit — Redcloud Systems",
  description:
    "Uncover hidden performance, SEO, security, and cost issues in your business. Free 10–15 page report with actionable recommendations. No obligation.",
};

const auditAreas = [
  {
    icon: Monitor,
    title: "Website Performance",
    body: "Page speed, Core Web Vitals, mobile experience, and load time bottlenecks that are costing you visitors.",
  },
  {
    icon: TrendingUp,
    title: "SEO Health",
    body: "Technical SEO gaps, missing metadata, broken links, and ranking opportunities your competitors are exploiting.",
  },
  {
    icon: Shield,
    title: "Security Assessment",
    body: "Vulnerabilities, outdated software, exposed endpoints, and risks that could take your business offline.",
  },
  {
    icon: DollarSign,
    title: "Hosting & Cloud Costs",
    body: "Overpaying for infrastructure? We identify savings of 40–80% that most businesses don't know exist.",
  },
  {
    icon: Search,
    title: "User Experience",
    body: "Friction points, confusing navigation, and conversion killers that cause visitors to leave without acting.",
  },
  {
    icon: BarChart3,
    title: "Conversion Rates",
    body: "Where your funnel leaks, what's preventing leads from converting, and quick wins to fix it now.",
  },
];

const problems = [
  "You don't know if your site is fast or slow — you just know it feels slow",
  "Your hosting bill has crept up but you're afraid to touch anything",
  "You've been told your SEO is 'fine' — but organic traffic keeps declining",
  "A security incident would shut your business down and you have no plan",
  "Leads visit your site but don't call — and you don't know why",
  "You suspect you're paying for tools and servers you don't actually need",
];

const steps = [
  { n: "01", title: "Submit the Form", body: "Tell us your website and what you're most concerned about. Takes 2 minutes." },
  { n: "02", title: "We Run the Audit", body: "Our team analyzes your site across 6 dimensions using professional-grade tools." },
  { n: "03", title: "You Get the Report", body: "A 10–15 page PDF covering every finding, ranked by impact, with specific action items." },
  { n: "04", title: "Optional Strategy Call", body: "If you want to discuss the findings, we'll walk you through them — no sales pressure." },
];

const reportIncludes = [
  "Performance scores with benchmarks vs. competitors",
  "Prioritized list of issues by revenue impact",
  "Security risk summary with severity ratings",
  "Cloud/hosting cost analysis and savings estimate",
  "Top 3 quick wins you can implement immediately",
  "No obligation. No upsell. Just the truth.",
];

const formFields = [
  { name: "first_name", label: "First Name",    required: true },
  { name: "last_name",  label: "Last Name",     required: true },
  { name: "email",      label: "Work Email",    type: "email" as const, required: true },
  { name: "company",    label: "Company Name",  required: true },
  { name: "website",    label: "Website URL",   type: "text" as const, full: true, required: true },
  { name: "concern",    label: "What's your biggest digital concern right now?", type: "textarea" as const, full: true },
];

export default function FreeDigitalAuditPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">Free Digital Audit</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Find The Hidden Revenue{" "}
              <span className="italic text-accent-700">In Your Business.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Most businesses are losing leads, overpaying for hosting, and sitting on unfixed
              security risks — without knowing it. Our free audit surfaces every issue with a
              clear, prioritized action plan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Claim Your Free Audit <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/services" className="btn-ghost px-8 py-4 text-base">
                See our services
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before Audit</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Unknown</p>
              <p className="mt-1 text-sm text-ink-500">Business health status</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Slow pages, unknown cause</p>
                <p className="flex items-center gap-2"><span>✗</span> Security vulnerabilities</p>
                <p className="flex items-center gap-2"><span>✗</span> Overpaying for hosting</p>
                <p className="flex items-center gap-2"><span>✗</span> Losing leads, no idea why</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">After Audit</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Clarity</p>
              <p className="mt-1 text-sm text-ink-500">10–15 page action plan</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Every issue identified</p>
                <p className="flex items-center gap-2"><span>✓</span> Ranked by revenue impact</p>
                <p className="flex items-center gap-2"><span>✓</span> Cost savings quantified</p>
                <p className="flex items-center gap-2"><span>✓</span> Quick wins listed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Problem (navy dark) ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <AlertTriangle className="h-10 w-10 text-accent-300" />
              <h2 className="mt-6 text-3xl !text-cream sm:text-4xl">
                You Can&apos;t Fix What You Can&apos;t See
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Most business owners know something isn&apos;t quite right — the phone doesn&apos;t ring
                enough, the site feels slow, the hosting bill is climbing. But without data,
                every decision is a guess.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                The problems that hurt your business most are the ones you don&apos;t know you have.
                A free audit changes that in 24–48 hours.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-xl border border-accent-700 bg-accent-800 px-5 py-4">
                  <span className="mt-0.5 shrink-0 text-brand-400">✗</span>
                  <p className="text-sm text-accent-200">{p}</p>
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
            <p className="eyebrow">What We Audit</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Six Areas That Determine Your Digital Health</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Our audit covers every layer of your digital presence — from the code to the cost.
              We don&apos;t just run a tool and email you a score. We analyze what the data means
              for your business and translate it into plain English.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              The result is a 10–15 page report you can hand to your team and act on immediately.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {auditAreas.slice(0, 4).map((a) => (
              <div key={a.title} className="rounded-xl border border-ink-200 bg-accent-50 p-6">
                <a.icon className="h-6 w-6 text-accent-700" />
                <p className="mt-3 font-semibold text-ink-900">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits (all 6 audit areas) ── */}
      <section className="bg-accent-50 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What&apos;s In The Report</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Areas. One Clear Action Plan.</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Ranked by revenue impact — so you know exactly where to start.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {auditAreas.map((a) => (
              <div key={a.title} className="card">
                <a.icon className="h-8 w-8 text-accent-700" />
                <h3 className="mt-4 text-xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{a.body}</p>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Clear Action Plan</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            From form submission to your finished report — typically 24–48 hours.
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

      {/* ── Section 8: Proof (navy dark) ── */}
      <section className="bg-accent-900 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-accent-300">Why Redcloud</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              We Find Problems Others Miss — Then We Fix Them
            </h2>
            <blockquote className="mt-10 border-l-4 border-accent-400 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Most businesses are 3–5 improvements away from meaningfully more leads
                and meaningfully lower costs. The audit finds those improvements.&rdquo;
              </p>
              <p className="mt-3 text-sm text-accent-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "20+",  label: "Years engineering experience" },
              { value: "250+", label: "Active client installations" },
              { value: "12",   label: "Industries served" },
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
      <section id="audit" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Free Report</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Claim Your Free Digital Audit</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Submit your website URL and we&apos;ll return a comprehensive report covering all
              six areas — with specific, prioritized action items your team can act on immediately.
            </p>
            <ul className="mt-10 space-y-4">
              {reportIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-accent-200 bg-accent-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Not ready yet?</p>
              <p className="mt-1 text-sm text-ink-600">
                Browse our{" "}
                <Link href="/services" className="text-accent-700 underline">
                  services overview
                </Link>{" "}
                or{" "}
                <Link href="/portfolio" className="text-accent-700 underline">
                  view client results
                </Link>{" "}
                first.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Audit Report</h3>
            <p className="mt-1 text-sm text-ink-500">Report delivered within 24–48 hours.</p>
            <div className="mt-6">
              <LeadForm
                formKey="free-digital-audit"
                fields={formFields}
                submitLabel="Claim My Free Audit"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
