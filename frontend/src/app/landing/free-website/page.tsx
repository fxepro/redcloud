import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Smartphone,
  MapPin,
  Search,
  Mail,
  CreditCard,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Free Business Website — Redcloud Systems",
  description:
    "Get a professional business website at no cost. Contact form, mobile design, Google Maps, and basic SEO included. Pay only if you need advanced features.",
};

const included = [
  { icon: Globe,      title: "Single-Page Website",       body: "Clean, professional design that represents your business and builds trust from the first click." },
  { icon: Mail,       title: "Contact Form",               body: "Capture leads directly from your site. Submissions go straight to your inbox — no setup needed." },
  { icon: Smartphone, title: "Mobile Responsive",          body: "Looks and works perfectly on phones. Over 60% of local searches happen on mobile devices." },
  { icon: MapPin,     title: "Google Maps Integration",    body: "Show your location, service area, and hours. Customers can get directions without leaving your site." },
  { icon: Search,     title: "Basic SEO",                  body: "Properly tagged pages so Google can find and index your business. The foundation of local search." },
  { icon: CreditCard, title: "Hosting Consultation",       body: "We advise on the right hosting plan for your budget and traffic — no overpriced packages." },
];

const upgrades = [
  { title: "Appointment Booking",  body: "Let customers book online 24/7. Reduce phone tag and fill your calendar automatically." },
  { title: "CRM Integration",      body: "Every lead automatically logged in HubSpot, Zoho, or your CRM of choice." },
  { title: "Online Payments",      body: "Accept deposits, invoices, or full payments directly on your website." },
  { title: "Customer Portal",      body: "Give clients a login to view invoices, project updates, or service history." },
  { title: "E-commerce",           body: "Sell products or services online with a full shopping cart and checkout." },
];

const problems = [
  "Customers google you and find nothing — so they call your competitor",
  "You're relying on a Facebook page that you don't own or control",
  "Your current site looks outdated and embarrasses you to share it",
  "You're paying $200/mo for a website that doesn't generate a single lead",
  "Customers can't find your phone number, hours, or location easily",
  "You know you need a better online presence but don't know where to start",
];

const steps = [
  { n: "01", title: "Fill Out the Form",     body: "Tell us about your business — what you do, who you serve, and what you want the site to accomplish." },
  { n: "02", title: "We Design Your Site",   body: "Our team builds a clean, professional single-page website using your branding, content, and photos." },
  { n: "03", title: "You Review & Approve",  body: "We show you a preview. You give feedback. We make changes until you're happy — no rush." },
  { n: "04", title: "Go Live This Week",     body: "We launch your site, set up hosting, and hand you complete access. You own everything." },
];

const industries = [
  "Electricians", "Plumbers", "HVAC Contractors", "Landscapers",
  "Painters", "Roofers", "Consultants", "Therapists",
  "Accountants", "Photographers", "Personal Trainers", "Startups",
];

const formFields = [
  { name: "first_name",   label: "First Name",              required: true },
  { name: "last_name",    label: "Last Name",               required: true },
  { name: "email",        label: "Email Address",           type: "email" as const, required: true },
  { name: "phone",        label: "Phone Number",            type: "text" as const },
  { name: "business",     label: "Business Name",           required: true },
  { name: "industry",     label: "What type of business?",  required: true },
  { name: "description",  label: "What do you want your website to do for you?", type: "textarea" as const, full: true },
];

export default function FreeWebsitePage() {
  return (
    <>
      {/* ── Sections 1–3: Headline + Visual ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-sand-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="container relative grid items-center gap-16 py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
          {/* Left — headline */}
          <div>
            <p className="eyebrow">Free Business Website Initiative</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Get Your Business Online{" "}
              <span className="italic text-brand-600">This Week. Free.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-600">
              A professional website — contact form, mobile design, Google Maps, and basic SEO —
              at absolutely no cost. Pay only if you want advanced features.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#get-started" className="btn-primary px-8 py-4 text-base">
                Claim My Free Website <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/portfolio" className="btn-ghost px-8 py-4 text-base">
                See examples
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-500">
              No credit card. No contracts. No catch.
            </p>
          </div>

          {/* Right — Before → After */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Right Now</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Nothing</p>
              <p className="mt-1 text-sm text-ink-500">Online presence</p>
              <div className="mt-6 space-y-2.5 text-sm text-red-700">
                <p className="flex items-center gap-2"><span>✗</span> No website</p>
                <p className="flex items-center gap-2"><span>✗</span> No Google listing</p>
                <p className="flex items-center gap-2"><span>✗</span> Leads going elsewhere</p>
                <p className="flex items-center gap-2"><span>✗</span> Zero credibility online</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift">
                <ArrowRight className="h-5 w-5" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-600">Redcloud</p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600">This Week</p>
              <p className="mt-4 font-display text-4xl font-bold text-ink-900">Live</p>
              <p className="mt-1 text-sm text-ink-500">Professional website</p>
              <div className="mt-6 space-y-2.5 text-sm text-green-700">
                <p className="flex items-center gap-2"><span>✓</span> Mobile-ready design</p>
                <p className="flex items-center gap-2"><span>✓</span> Google Maps + hours</p>
                <p className="flex items-center gap-2"><span>✓</span> Contact form</p>
                <p className="flex items-center gap-2"><span>✓</span> Basic SEO setup</p>
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
                If You&apos;re Not Online, You&apos;re Invisible
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                97% of consumers search online before contacting a local business. If you don&apos;t
                have a professional web presence, those customers never reach you — they go
                straight to whoever shows up first.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                A Facebook page is not a website. A Google Business listing is not enough. You
                need a real home on the internet that you own and control.
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
            <p className="eyebrow">What&apos;s Included — Free</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Everything You Need to Get Found and Get Called</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              This isn&apos;t a template you fill out yourself. We design, build, and launch a
              real professional website for your business — built by developers, not a website
              builder bot.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              No hidden fees. No forced upsells. No lock-in contracts. If you want more features
              later, we offer paid upgrades — but the core site is yours, free.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {included.slice(0, 4).map((item) => (
              <div key={item.title} className="rounded-xl border border-ink-200 bg-sand-50 p-6">
                <item.icon className="h-6 w-6 text-brand-600" />
                <p className="mt-3 font-semibold text-ink-900">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Full Included Benefits ── */}
      <section className="bg-sand-100 py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What You Get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Six Things Included at Zero Cost</h2>
            </div>
            <p className="hidden max-w-sm text-right text-ink-600 lg:block">
              Plus optional paid upgrades when your business is ready to grow.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="card">
                <item.icon className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Upgrades */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-ink-900">Optional Paid Upgrades</h3>
            <p className="mt-2 text-ink-600">Add these when you&apos;re ready — no pressure, no timeline.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {upgrades.map((u) => (
                <div key={u.title} className="rounded-xl border border-ink-200 bg-white p-5">
                  <p className="font-semibold text-ink-900">{u.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: How It Works ── */}
      <section className="container py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Four Steps to a Live Website This Week</h2>
          </div>
          <p className="hidden max-w-sm text-right text-ink-600 lg:block">
            Most sites go live within 5–7 business days of your form submission.
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

      {/* ── Section 8: Proof (dark) ── */}
      <section className="bg-ink-950 py-28">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow !text-brand-300">Who It&apos;s For</p>
            <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">
              Built for Local Businesses That Need to Get Online Fast
            </h2>
            <blockquote className="mt-10 border-l-4 border-brand-500 pl-6">
              <p className="text-xl italic leading-relaxed text-cream">
                &ldquo;Every business deserves a professional online presence. The cost of a
                website should never be the reason a good business stays invisible.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-400">— Redcloud Systems</p>
            </blockquote>
          </div>
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-ink-400">Industries We Serve</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-ink-700 bg-ink-900 px-4 py-2 text-sm text-ink-300"
                >
                  {ind}
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-5">
              {[
                { value: "20+",  label: "Years experience" },
                { value: "250+", label: "Sites launched" },
                { value: "5–7",  label: "Days to go live" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink-800 bg-ink-900 p-6 text-center">
                  <p className="font-display text-4xl font-bold text-brand-400">{s.value}</p>
                  <p className="mt-2 text-xs text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: CTA + Form ── */}
      <section id="get-started" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div>
            <p className="eyebrow">Get Started — It&apos;s Free</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Claim Your Free Business Website</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Fill out the form and we&apos;ll get started immediately. No meetings required.
              No credit card. No contracts. Your site launches this week.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Professional design by real developers",
                "Mobile responsive from day one",
                "Contact form + Google Maps included",
                "Basic SEO setup included",
                "You own the site — no lock-in",
                "Live in 5–7 business days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-sand-200 bg-sand-100 p-6">
              <p className="text-sm font-semibold text-ink-900">Already have a website?</p>
              <p className="mt-1 text-sm text-ink-600">
                Get a{" "}
                <Link href="/landing/free-audit" className="text-brand-700 underline">
                  free digital audit
                </Link>{" "}
                instead — we&apos;ll show you exactly what to fix.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-10 shadow-lift lg:sticky lg:top-8">
            <h3 className="text-2xl font-semibold text-ink-900">Get Online This Week — Free</h3>
            <p className="mt-1 text-sm text-ink-500">We&apos;ll reach out within 1 business day to get started.</p>
            <div className="mt-6">
              <LeadForm
                formKey="free-website"
                fields={formFields}
                submitLabel="Claim My Free Website"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
