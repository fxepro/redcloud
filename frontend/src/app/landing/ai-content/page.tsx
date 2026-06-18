import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  PenTool,
  Mail,
  Share2,
  FileText,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Content & Marketing Factory — Redcloud Systems",
  description:
    "Generate blog posts, newsletters, social media, and more at scale. AI-powered content creation with a Research → Draft → Review → Publish workflow — largely automated.",
};

const contentTypes = [
  { icon: PenTool,    title: "Blog Posts",            body: "SEO-optimized long-form articles researched, drafted, and formatted — ready for your editor's final pass." },
  { icon: Mail,       title: "Newsletters",           body: "Weekly or monthly email newsletters curated and written from your latest content, news, and offers." },
  { icon: Share2,     title: "Social Media",          body: "Platform-specific posts for LinkedIn, Instagram, X, and Facebook — with copy, hooks, and hashtags." },
  { icon: FileText,   title: "Product Descriptions",  body: "Compelling, benefit-led product and service descriptions at any volume — consistent tone, zero writer's block." },
  { icon: Megaphone,  title: "Press Releases",        body: "Professionally formatted press releases for announcements, launches, and milestones — ready to distribute." },
  { icon: TrendingUp, title: "Landing Pages",         body: "Conversion-focused landing page copy for campaigns, offers, and launches — built to the proven formula." },
];

const problems = [
  "You know content marketing works but never have time to actually produce content",
  "Your blog has 3 posts from 2021 and your social media went dark last quarter",
  "A freelance writer costs $500/article and takes 2 weeks to deliver",
  "Your competitors are publishing weekly — you're barely managing monthly",
  "Content gets started but never finished — stuck in drafts and review queues forever",
  "You have no system: each piece starts from scratch, inconsistent in tone and quality",
];

const workflow = [
  {
    step: "Research",
    desc: "AI researches your topic, competitors, top-ranking content, and your own company knowledge base to inform every piece.",
  },
  {
    step: "Draft",
    desc: "A full draft is generated — headline, structure, body, CTAs — in your brand voice, on brief, ready for review.",
  },
  {
    step: "Review",
    desc: "Your team reviews a near-finished draft. Edits take minutes, not hours. You stay in control without doing the heavy lifting.",
  },
  {
    step: "Publish",
    desc: "Content is formatted for your CMS, scheduled to your social channels, and distributed to your email list — automatically.",
  },
];

const steps = [
  { n: "01", title: "Content Audit",       body: "We review your existing content, brand voice, audience, and goals to establish the foundation for your content strategy." },
  { n: "02", title: "System Build",        body: "We configure your AI content pipeline — research sources, tone of voice, templates, approval workflows, and distribution channels." },
  { n: "03", title: "First Production Run", body: "We produce a full month of content across all formats. You review, approve, and see the system in action." },
  { n: "04", title: "Ongoing Delivery",    body: "Content is produced continuously on your schedule. You spend minutes reviewing instead of hours writing." },
];

const volumeComparison = [
  { metric: "Blog posts per month",      manual: "1–2",   ai: "8–12"  },
  { metric: "Social posts per month",    manual: "4–8",   ai: "30–60" },
  { metric: "Newsletters per month",     manual: "0–1",   ai: "4"     },
  { metric: "Hours spent on content",    manual: "20–40", ai: "2–4"   },
  { metric: "Cost per blog post",        manual: "$300–500", ai: "$30–50" },
];

const formFields = [
  { name: "first_name",  label: "First Name",                    required: true },
  { name: "last_name",   label: "Last Name",                     required: true },
  { name: "email",       label: "Work Email",                    type: "email" as const, required: true },
  { name: "company",     label: "Company Name",                  required: true },
  { name: "website",     label: "Website / Blog URL",            type: "text" as const },
  { name: "formats",     label: "What content formats do you need most?", type: "textarea" as const, full: true },
];

export default function AIContentPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-sand-100/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">AI Content & Marketing Factory</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Publish More.{" "}
              <span className="italic text-brand-600">Write Less.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Blog posts, newsletters, social content, and landing pages — produced at scale
              with an AI-powered workflow that handles the research, drafting, and
              distribution while your team focuses on approvals and strategy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#consult" className="btn-primary px-8 py-4 text-base">
                Schedule a Free Consultation <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/services" className="btn-ghost px-8 py-4 text-base">
                See our AI services
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Manual Today</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">1–2</p>
              <p className="mt-1 text-sm text-ink-500">Blog posts per month</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> 20–40 hrs writing</p>
                <p className="flex items-center gap-2"><span>✗</span> $300–500 per article</p>
                <p className="flex items-center gap-2"><span>✗</span> 2-week freelancer turnaround</p>
                <p className="flex items-center gap-2"><span>✗</span> Social media goes dark</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-600">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600">With AI Factory</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">8–12</p>
              <p className="mt-1 text-sm text-ink-500">Blog posts per month</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> 2–4 hrs reviewing</p>
                <p className="flex items-center gap-2"><span>✓</span> $30–50 per article</p>
                <p className="flex items-center gap-2"><span>✓</span> Same-day turnaround</p>
                <p className="flex items-center gap-2"><span>✓</span> 30–60 social posts/mo</p>
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
                Your Competitors Are Publishing. You&apos;re Still Drafting.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Content marketing is the highest-ROI channel for most B2B businesses —
                but it only works if you actually publish consistently. Most companies
                know this and still struggle because the production burden is too high.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                AI doesn&apos;t replace your voice or your expertise. It removes the 80% of
                content work that is research, formatting, and repetitive drafting —
                so your team spends time on the 20% that actually requires a human.
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

      {/* ── Section 5: Workflow ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Workflow</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Research → Draft → Review → Publish</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Every piece of content moves through a structured pipeline. AI handles the
              time-intensive stages. Your team stays in control at the review gate — but
              that review takes minutes, not hours, because the draft is already 90%
              of the way there.
            </p>
          </div>
          <div className="space-y-4">
            {workflow.map((w, i) => (
              <div key={w.step} className="flex items-start gap-5 rounded-xl border border-ink-200 bg-sand-50 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-ink-900">{w.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Content Types ── */}
      <section className="bg-sand-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What We Produce</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Content Formats. One Integrated System.</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              All formats produced from the same brand voice — consistent across every channel.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contentTypes.map((c) => (
              <div key={c.title} className="card">
                <c.icon className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volume Comparison ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Numbers</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Manual vs. AI-Powered Production</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              The difference isn&apos;t marginal — it&apos;s an order of magnitude. The same
              marketing budget produces 5–10x more content output with an AI pipeline
              than with traditional freelance or in-house writing.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink-200 bg-ink-50">
                  <th className="px-5 py-4 text-left font-semibold text-ink-700">Metric</th>
                  <th className="px-5 py-4 text-center font-semibold text-red-600">Manual</th>
                  <th className="px-5 py-4 text-center font-semibold text-brand-600">AI Factory</th>
                </tr>
              </thead>
              <tbody>
                {volumeComparison.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-ink-50"}>
                    <td className="px-5 py-4 text-ink-700">{row.metric}</td>
                    <td className="px-5 py-4 text-center text-red-600">{row.manual}</td>
                    <td className="px-5 py-4 text-center font-semibold text-brand-700">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 7: How It Works ── */}
      <section className="bg-ink-950 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow !text-brand-300">How It Works</p>
              <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">Four Steps to a Running Content Machine</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-400 lg:block">
              From audit to first published batch — typically 2–3 weeks.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink-800 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-ink-900 p-8">
                <span className="font-display text-4xl font-bold text-brand-400">{s.n}</span>
                <h3 className="mt-4 text-xl text-cream">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA + Form ── */}
      <section id="consult" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Free Consultation</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Start Publishing at Scale This Month</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us what content you need and where your current process breaks down.
              We&apos;ll show you exactly what an AI content pipeline would look like for
              your business — and what the first month of output would include.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Blog, social, email, and landing pages — all formats",
                "Your brand voice and tone — preserved in every piece",
                "Research-backed content that ranks and converts",
                "Review takes minutes — not hours",
                "Scales up or down with your campaigns",
                "First batch delivered within 2–3 weeks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-sand-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Need AI to power your sales outreach too?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/ai-sales" className="text-brand-700 underline">
                  AI Sales Automation Program
                </Link>{" "}
                for lead qualification and outbound sequences.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Free Consultation</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-content"
                fields={formFields}
                submitLabel="Schedule My Free Consultation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
