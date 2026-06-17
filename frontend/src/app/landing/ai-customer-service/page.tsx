import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, ThumbsUp, DollarSign, PhoneCall } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Customer Service Program — Redcloud Systems",
  description:
    "Deploy AI agents that answer customer questions instantly — 24/7, across chat and voice. Free assessment. No obligation.",
};

const problems = [
  "Support tickets pile up overnight and on weekends",
  "Customers wait hours for answers to simple questions",
  "Agents spend 80% of their time on the same 20 questions",
  "High staff turnover means constant retraining costs",
  "Scaling support means hiring — costs grow with volume",
  "One bad support experience kills a customer relationship",
];

const channels = [
  { name: "Live Chat",         desc: "Instant answers on your website and app — no wait time, no queue." },
  { name: "Voice (Phone)",     desc: "AI handles inbound calls, qualifies intent, and routes or resolves without hold music." },
  { name: "Email Triage",      desc: "Reads, categorizes, and drafts responses to inbound emails — your team reviews and sends." },
  { name: "SMS & WhatsApp",    desc: "Meet customers on the channels they actually use, with consistent automated responses." },
  { name: "Help Center Copilot", desc: "AI trained on your documentation answers questions before a ticket is ever opened." },
  { name: "Agent Assist",      desc: "Real-time suggestions for your human agents — faster resolutions, fewer escalations." },
];

const benefits = [
  { icon: Clock,      title: "Instant Response",       body: "Zero wait time. Every customer gets an answer in seconds — at 3am on a Sunday or peak Monday morning." },
  { icon: ThumbsUp,   title: "Higher Satisfaction",    body: "Fast, accurate answers improve CSAT scores and reduce churn from frustrated customers." },
  { icon: DollarSign, title: "Lower Support Costs",    body: "Deflect 60–80% of tier-1 tickets with AI — shrink your support headcount without cutting quality." },
  { icon: PhoneCall,  title: "Seamless Escalation",    body: "When AI can't resolve it, the handoff to a human is smooth — with full context already captured." },
];

const steps = [
  { n: "01", title: "Knowledge Audit",      body: "We inventory your FAQs, support docs, policies, and past tickets to build the AI's knowledge base." },
  { n: "02", title: "Agent Configuration",  body: "We configure tone, escalation rules, channel integrations, and fallback behavior to match your brand." },
  { n: "03", title: "Pilot Deployment",     body: "Agent launches on one channel first — we monitor conversations, tune responses, and measure deflection rates." },
  { n: "04", title: "Full Rollout",         body: "Once performance is validated, we expand across all channels and hand you a fully documented system." },
];

const formFields = [
  { name: "first_name",    label: "First Name",           required: true },
  { name: "last_name",     label: "Last Name",            required: true },
  { name: "email",         label: "Work Email",           type: "email" as const, required: true },
  { name: "company",       label: "Company Name",         required: true },
  {
    name: "tickets_volume", label: "Monthly support ticket volume",
    type: "select" as const, required: true,
    options: ["Under 100", "100–500", "500–2,000", "2,000–10,000", "10,000+"],
  },
  {
    name: "channels", label: "Primary support channels today",
    type: "select" as const,
    options: ["Email only", "Phone only", "Live chat", "Email + phone", "Multiple channels"],
  },
  { name: "pain", label: "What is your biggest customer service pain point right now?", type: "textarea" as const, full: true },
];

export default function AiCustomerServiceLandingPage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Subheadline + Before/After ── */}
      {/* Signature color: ink-50 (cool grey) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left */}
          <div>
            <p className="eyebrow">AI Customer Service Program</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Answer Every Customer Question Instantly —{" "}
              <span className="italic text-brand-600">24/7, Across Chat and Voice.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              We deploy AI customer service agents that handle inbound questions, resolve tier-1
              issues, and escalate seamlessly — so your team focuses on complex problems, not
              the same questions they answered yesterday.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary px-8 py-4 text-base">
                Get Your Free Assessment <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/ai-solutions" className="btn-ghost px-8 py-4 text-base">
                See AI solutions
              </Link>
            </div>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before</p>
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">4 hrs</p>
              <p className="mt-1 text-sm text-ink-500">Average first response time</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Closed nights & weekends</p>
                <p className="flex items-center gap-2"><span>✗</span> Same questions every day</p>
                <p className="flex items-center gap-2"><span>✗</span> Ticket backlog every Monday</p>
                <p className="flex items-center gap-2"><span>✗</span> High agent turnover</p>
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
              <p className="mt-4 font-display text-5xl font-bold text-ink-900">&lt; 5s</p>
              <p className="mt-1 text-sm text-ink-500">Average first response time</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Always on — 24/7/365</p>
                <p className="flex items-center gap-2"><span>✓</span> 60–80% tickets deflected</p>
                <p className="flex items-center gap-2"><span>✓</span> Zero Monday backlogs</p>
                <p className="flex items-center gap-2"><span>✓</span> Scales with no new hires</p>
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
                Every Hour a Customer Waits Is a Chance They Leave.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Customers expect answers in seconds — not hours. When they don&apos;t get them,
                they don&apos;t wait. They go to a competitor who does respond, and they never
                come back.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Meanwhile your support team is overwhelmed answering the same questions on
                repeat — leaving no bandwidth for the complex issues that actually need a human.
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

      {/* ── Section 5: Solution + Channels ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">AI Agents Trained On Your Business, Deployed On Every Channel.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We build AI customer service agents trained on your documentation, policies, and
              past support history — then deploy them across every channel your customers use.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              When the AI can&apos;t resolve an issue, it escalates with full context already
              captured — so your human agents never start from zero.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <div key={c.name} className="rounded-xl border border-ink-200 bg-ink-50 p-6">
                <PhoneCall className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{c.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Benefits ── */}
      {/* ink-100 background (deeper cool grey) */}
      <section className="bg-ink-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Results, Not Features</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Measured in response time, ticket deflection, CSAT scores, and support cost per ticket.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">From Audit to Live in Weeks</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most clients have their AI support agent live on a primary channel within 3–4 weeks.
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
              We Build Support Systems That Actually Deflect — Not Just Demo Well
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Answer every customer question instantly — 24/7 — without adding a single
                person to your support team.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud AI Customer Service Program</p>
            </blockquote>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { value: "< 5s",   label: "Average AI first response time" },
              { value: "60–80%", label: "Tier-1 ticket deflection rate" },
              { value: "3–4wk",  label: "Average time from audit to live" },
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Get Your Free Customer Service AI Assessment</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We&apos;ll analyze your current support volume, identify your highest-deflection
              opportunities, and show you exactly what an AI agent would handle — and what it
              would cost to deploy.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Support volume and ticket category breakdown",
                "Deflection opportunity analysis",
                "Channel and integration recommendations",
                "Cost-to-deploy and projected savings estimate",
                "No obligation. No pressure.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Already using a helpdesk?</p>
              <p className="mt-1 text-sm text-ink-600">
                We integrate with Zendesk, Intercom, Freshdesk, HubSpot, and custom systems.{" "}
                <Link href="/services/custom-software-development" className="text-brand-700 underline">
                  See integrations
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Your Free Assessment</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-customer-service-assessment"
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
