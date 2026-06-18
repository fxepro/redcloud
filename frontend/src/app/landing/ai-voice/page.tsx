import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Clock,
  CalendarCheck,
  TrendingUp,
  Mic,
  PhoneOff,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Voice Agents — Redcloud Systems",
  description:
    "An AI receptionist that answers every call, schedules appointments, and qualifies leads 24/7. Never miss a lead again.",
};

const capabilities = [
  {
    icon: Phone,
    title: "Answer Every Call",
    body: "Your AI receptionist picks up on the first ring — at 2am on a Sunday or during your busiest hour. Every caller gets a response.",
  },
  {
    icon: ArrowRight,
    title: "Route Intelligently",
    body: "The AI asks the right questions and routes calls to the right person, department, or voicemail — instantly and accurately.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Appointments",
    body: "Callers book directly into your calendar. No back-and-forth. No double bookings. No phone tag.",
  },
  {
    icon: Mic,
    title: "Collect Information",
    body: "Gather caller name, contact info, reason for calling, and any other data you need — before a human ever gets involved.",
  },
  {
    icon: TrendingUp,
    title: "Qualify Leads",
    body: "Ask your qualification questions automatically. Hot leads get flagged and fast-tracked. Tire-kickers are handled efficiently.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    body: "Your business never sleeps. After-hours calls are handled the same way as business-hours calls — professionally.",
  },
];

const problems = [
  "You miss calls during busy periods and lose leads to competitors who answer",
  "After-hours calls go to voicemail — and most callers don't leave a message",
  "Your front desk spends hours answering the same basic questions repeatedly",
  "New staff take weeks to train on call scripts and routing procedures",
  "High call volume strains your team and leads to rushed, inconsistent experiences",
  "You have no data on call volume, patterns, or missed opportunity costs",
];

const steps = [
  { n: "01", title: "Voice Design",         body: "We map your call flows — how calls should be answered, routed, and what information to collect for your business." },
  { n: "02", title: "AI Configuration",     body: "We build and train your voice agent on your business, your FAQs, your services, and your brand voice." },
  { n: "03", title: "Integration",          body: "We connect to your phone system, calendar, and CRM. Works with your existing number — no migration required." },
  { n: "04", title: "Live & Learning",      body: "Your AI agent goes live. It improves with every call and we monitor quality to keep responses accurate." },
];

const industries = [
  {
    name: "Healthcare",
    calls: ["Appointment scheduling", "Insurance verification questions", "Prescription refill routing", "After-hours triage"],
  },
  {
    name: "Legal",
    calls: ["New client intake", "Case status inquiries", "Document request routing", "Consultation booking"],
  },
  {
    name: "Home Services",
    calls: ["Service request intake", "Estimate scheduling", "Emergency routing", "Quote follow-up"],
  },
  {
    name: "Real Estate",
    calls: ["Property inquiry intake", "Showing scheduling", "Agent routing", "Open house information"],
  },
  {
    name: "Professional Services",
    calls: ["Client intake", "Appointment booking", "FAQ handling", "Referral routing"],
  },
];

const formFields = [
  { name: "first_name",    label: "First Name",                  required: true },
  { name: "last_name",     label: "Last Name",                   required: true },
  { name: "email",         label: "Work Email",                  type: "email" as const, required: true },
  { name: "phone",         label: "Business Phone Number",       type: "text" as const, required: true },
  { name: "company",       label: "Company Name",                required: true },
  { name: "industry",      label: "Industry",                    required: true },
  { name: "call_volume",   label: "Approx. calls per week",      type: "text" as const },
  { name: "pain",          label: "What's your biggest challenge with inbound calls?", type: "textarea" as const, full: true },
];

export default function AIVoicePage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-sand-200/60 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">AI Voice Agents</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Never Miss A Lead{" "}
              <span className="italic text-brand-600">Again.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              An AI receptionist that answers every call, routes customers, schedules
              appointments, and qualifies leads — 24 hours a day, 7 days a week, at a
              fraction of the cost of a full-time employee.
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
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Right Now</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Missed</p>
              <p className="mt-1 text-sm text-ink-500">Calls after hours</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><PhoneOff className="h-4 w-4 shrink-0" /> Goes to voicemail</p>
                <p className="flex items-center gap-2"><PhoneOff className="h-4 w-4 shrink-0" /> Caller doesn&apos;t leave message</p>
                <p className="flex items-center gap-2"><PhoneOff className="h-4 w-4 shrink-0" /> Lead calls competitor</p>
                <p className="flex items-center gap-2"><PhoneOff className="h-4 w-4 shrink-0" /> Revenue lost forever</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-600">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600">With AI Agent</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Answered</p>
              <p className="mt-1 text-sm text-ink-500">Every call, every time</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> Picks up on first ring</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> Qualifies the lead</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> Books appointment</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> Logs to your CRM</p>
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
                Every Unanswered Call Is a Lead Walking to Your Competitor
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Studies show that 85% of callers who can&apos;t reach a business on the first
                try will not call back. They move on — usually to whoever is listed next in
                search results.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                Your team is stretched. Lunch breaks, evenings, weekends, and holidays all
                create windows where leads fall through the cracks. A voice AI closes those
                windows permanently.
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
            <h2 className="mt-4 text-3xl sm:text-4xl">An AI Receptionist That Never Calls in Sick</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We deploy a custom AI voice agent trained on your business — your services,
              your FAQs, your call flows. It speaks naturally, handles common requests,
              and transfers to a human only when genuinely needed.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              It works with your existing phone number and plugs directly into your calendar
              and CRM. You keep your number — we add intelligence to it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.slice(0, 4).map((c) => (
              <div key={c.title} className="rounded-xl border border-ink-200 bg-sand-50 p-6">
                <c.icon className="h-6 w-6 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{c.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.body}</p>
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
              <p className="eyebrow">Full Capabilities</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Things Your AI Receptionist Does</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Handles the repetitive work so your team can focus on high-value conversations.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="card">
                <c.icon className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.body}</p>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Live AI Receptionist</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most deployments go live within 2–3 weeks.
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

      {/* ── Section 8: Proof — Industries ── */}
      <section className="bg-ink-950 py-28">
        <div className="container">
          <div className="mb-16 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow !text-brand-300">Industries We Serve</p>
              <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
                Built for Every Business That Runs on Inbound Calls
              </h2>
              <blockquote className="mt-8 border-l-4 border-brand-500 pl-6">
                <p className="text-lg italic leading-relaxed text-cream">
                  &ldquo;85% of callers who can&apos;t reach a business on the first try
                  will not call back.&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-400">— Industry research</p>
              </blockquote>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {[
                { value: "24/7",  label: "Availability" },
                { value: "< 1s",  label: "Answer time" },
                { value: "85%",   label: "Callers won't call back if missed" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink-800 bg-ink-900 p-6 text-center">
                  <p className="font-display text-4xl font-bold text-brand-400">{s.value}</p>
                  <p className="mt-2 text-xs text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-ink-800 bg-ink-900 p-6">
                <p className="font-semibold text-cream">{ind.name}</p>
                <ul className="mt-4 space-y-2">
                  {ind.calls.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-ink-400">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                      {c}
                    </li>
                  ))}
                </ul>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Stop Losing Leads to Voicemail</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us about your call volume and business, and we&apos;ll show you exactly how
              an AI voice agent would work for your specific situation. Free consultation,
              no obligation.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Works with your existing phone number",
                "Integrates with your calendar and CRM",
                "Trained on your services and FAQs",
                "Transfers to humans when needed",
                "24/7 coverage — including holidays",
                "Live in 2–3 weeks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-sand-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Need AI for website chat too?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/ai-customer-service" className="text-brand-700 underline">
                  AI Customer Service Program
                </Link>{" "}
                for web chat, SMS, and email automation.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Never Miss Another Call</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-voice"
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
