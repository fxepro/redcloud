import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  MessageSquare,
  Lock,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "AI Knowledge Assistant — Redcloud Systems",
  description:
    "Turn your company's PDFs, emails, and internal documents into instant answers. Private AI trained on your business knowledge — no data leaves your organization.",
};

const documentTypes = [
  "PDFs & manuals",
  "Word documents",
  "Emails & threads",
  "SharePoint sites",
  "Google Drive",
  "Internal portals",
  "Contracts & SOPs",
  "Training materials",
];

const problems = [
  "Employees spend hours searching for the right document or policy",
  "New hires take months to get up to speed because knowledge is scattered",
  "The same questions get asked over and over — wasting senior staff time",
  "Critical information lives in one person's head and walks out the door",
  "Customers wait while your team hunts through email threads for answers",
  "Compliance and policy changes don't reach everyone consistently",
];

const benefits = [
  {
    icon: MessageSquare,
    title: "Instant Answers",
    body: "Employees ask a question in plain English and get an answer in seconds — with the source document cited.",
  },
  {
    icon: Lock,
    title: "Fully Private",
    body: "Your data never leaves your infrastructure. The AI is trained on your documents and serves only your team.",
  },
  {
    icon: Clock,
    title: "Saves Hours Daily",
    body: "Eliminate the time spent searching, asking colleagues, or waiting for someone to find the right file.",
  },
  {
    icon: Users,
    title: "Scales Your Experts",
    body: "Your most experienced people's knowledge becomes available to everyone on the team, instantly.",
  },
  {
    icon: FileText,
    title: "Always Up to Date",
    body: "Add new documents and the AI learns immediately. Policy changes propagate to the whole organization at once.",
  },
  {
    icon: Zap,
    title: "Works Across Tools",
    body: "Embed the assistant in Slack, Teams, your intranet, or your website — wherever your team already works.",
  },
];

const exampleQueries = [
  { q: "What is our vacation policy for part-time employees?",    a: "Answered in 2 seconds · Source: HR Policy Manual v3.pdf" },
  { q: "Show me the latest pricing agreement with Acme Corp.",    a: "Answered in 2 seconds · Source: Acme Corp Contract 2025.docx" },
  { q: "What did we promise this customer about delivery times?", a: "Answered in 2 seconds · Source: Email thread Mar 14, 2025" },
  { q: "What are the safety protocols for floor 2 machinery?",    a: "Answered in 2 seconds · Source: Safety SOP Rev 7.pdf" },
];

const steps = [
  { n: "01", title: "Document Discovery",   body: "We inventory your existing documents, folders, and systems to understand what knowledge needs to be captured." },
  { n: "02", title: "AI Training",          body: "We ingest your documents into a private AI model. Your data stays in your environment — nothing goes to the cloud." },
  { n: "03", title: "Integration & Testing", body: "We connect the assistant to your preferred interface (Slack, Teams, intranet, or custom) and test accuracy." },
  { n: "04", title: "Launch & Expand",       body: "Go live with your team. Add more document sources over time to keep the assistant growing with your business." },
];

const industries = [
  { name: "Healthcare",     example: "\"What does our HIPAA policy say about patient data sharing?\"" },
  { name: "Manufacturing",  example: "\"Show me the maintenance checklist for press machine #4.\"" },
  { name: "Legal",          example: "\"What were the settlement terms in the Johnson case?\"" },
  { name: "Accounting",     example: "\"What is our standard engagement letter for audit clients?\"" },
  { name: "Construction",   example: "\"What are the safety requirements for this job site?\"" },
  { name: "Nonprofits",     example: "\"What are the grant reporting requirements for the XYZ fund?\"" },
];

const formFields = [
  { name: "first_name",  label: "First Name",               required: true },
  { name: "last_name",   label: "Last Name",                required: true },
  { name: "email",       label: "Work Email",               type: "email" as const, required: true },
  { name: "company",     label: "Company Name",             required: true },
  { name: "industry",    label: "Industry",                 required: true },
  { name: "team_size",   label: "Team Size",                type: "text" as const },
  { name: "docs",        label: "Where does your company knowledge currently live?", type: "textarea" as const, full: true },
];

export default function AIKnowledgePage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent-100/70 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">AI Knowledge Assistant</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Your Company Docs.{" "}
              <span className="italic text-accent-700">Answered Instantly.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              Stop watching employees burn hours searching for files, policies, and past
              agreements. We build a private AI assistant trained on your own documents —
              so your whole team gets expert answers in seconds.
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
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Before</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">45 min</p>
              <p className="mt-1 text-sm text-ink-500">Average search time</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> Dig through email threads</p>
                <p className="flex items-center gap-2"><span>✗</span> Ask 3 people for 1 answer</p>
                <p className="flex items-center gap-2"><span>✗</span> Wrong version of the doc</p>
                <p className="flex items-center gap-2"><span>✗</span> Knowledge walks out the door</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-700 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent-700">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">After</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">2 sec</p>
              <p className="mt-1 text-sm text-ink-500">AI answer with source cited</p>
              <div className="mt-6 space-y-2.5 text-sm text-accent-700">
                <p className="flex items-center gap-2"><span>✓</span> Plain-English question</p>
                <p className="flex items-center gap-2"><span>✓</span> Instant accurate answer</p>
                <p className="flex items-center gap-2"><span>✓</span> Source document linked</p>
                <p className="flex items-center gap-2"><span>✓</span> Always up to date</p>
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
                Your Most Valuable Asset Is Trapped in Files No One Can Find
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-200">
                Every business runs on knowledge — policies, procedures, contracts, pricing,
                history. But that knowledge is scattered across inboxes, shared drives, and
                the heads of your most experienced employees.
              </p>
              <p className="mt-4 leading-relaxed text-accent-300">
                When people can&apos;t find answers fast, they make decisions on incomplete
                information — or waste time bothering the one person who knows.
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

      {/* ── Section 5: Solution — Example Queries ── */}
      <section className="container py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">A Private AI That Knows Your Business Inside and Out</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              We build a custom AI assistant trained exclusively on your company&apos;s documents —
              policies, contracts, procedures, emails, and more. Employees ask questions in plain
              English and get accurate answers in seconds, with the source cited.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Your data never leaves your organization. The model is private, secure, and
              only accessible to your team.
            </p>
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink-700">Ingests documents from:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {documentTypes.map((d) => (
                  <span key={d} className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-sm text-accent-700">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {exampleQueries.map((item) => (
              <div key={item.q} className="rounded-xl border border-ink-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <p className="text-sm font-medium text-ink-900">&ldquo;{item.q}&rdquo;</p>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-accent-50 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600" />
                  <p className="text-xs text-accent-700">{item.a}</p>
                </div>
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
              <p className="eyebrow">What You Gain</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Ways It Changes How Your Team Works</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              The impact compounds — every employee benefits every day.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <b.icon className="h-8 w-8 text-accent-700" />
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
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to Your Private AI Assistant</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most implementations go live in 2–4 weeks.
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

      {/* ── Section 8: Proof — Industries ── */}
      <section className="bg-accent-900 py-28">
        <div className="container">
          <div className="mb-16 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow !text-accent-300">Industries We Serve</p>
              <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
                Every Industry Has Knowledge That Should Be Instant
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
              {[
                { value: "20+",    label: "Years engineering experience" },
                { value: "2 sec",  label: "Average AI response time" },
                { value: "100%",   label: "Private — your data stays yours" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-accent-700 bg-accent-800 p-6 text-center">
                  <p className="font-display text-4xl font-bold text-accent-300">{s.value}</p>
                  <p className="mt-2 text-xs text-accent-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-xl border border-accent-700 bg-accent-800 p-6">
                <p className="font-semibold text-cream">{ind.name}</p>
                <p className="mt-3 text-sm italic text-accent-300">{ind.example}</p>
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
            <h2 className="mt-4 text-3xl sm:text-4xl">See What a Private AI Could Do for Your Team</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Tell us about your business and where your knowledge currently lives. We&apos;ll walk
              you through what an AI knowledge assistant would look like for your specific
              situation — at no cost and no obligation.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Private — your data never leaves your organization",
                "Works with documents you already have",
                "Answers questions in plain English",
                "Cites the source document for every answer",
                "Connects to Slack, Teams, or your intranet",
                "Live in 2–4 weeks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-accent-200 bg-accent-50 p-6">
              <p className="text-sm font-semibold text-ink-900">Looking for AI that talks to customers?</p>
              <p className="mt-1 text-sm text-ink-600">
                See our{" "}
                <Link href="/landing/ai-customer-service" className="text-accent-700 underline">
                  AI Customer Service Program
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Schedule a Free Consultation</h3>
            <p className="mt-1 text-sm text-ink-500">We respond within 1 business day.</p>
            <div className="mt-6">
              <LeadForm
                formKey="ai-knowledge"
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
