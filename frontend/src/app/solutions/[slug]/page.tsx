import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/cta";
import { getSolutionDetail, solutionDetails } from "@/lib/solutions-detail-data";

export function generateStaticParams() {
  return solutionDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionDetail(slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.tagline };
}

export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionDetail(slug);
  if (!solution) notFound();

  return (
    <>
      <PageBanner
        icon={solution.icon}
        title={solution.title}
        tagline={solution.tagline}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
        cta={{
          label: solution.introCtas[0]?.label ?? "Get started",
          href: solution.introCtas[0]?.href ?? "/contact",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        tone="light"
      />

      <SubtextBar>{solution.subtext}</SubtextBar>

      {/* Intro — editorial split, not the service MediaSplit pattern */}
      <section className="container section">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl">{solution.introHeadline}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink-600">
              {solution.introBody.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {solution.introCtas.map((cta, i) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={i === 0 ? "btn-primary" : "btn-ghost"}
                >
                  {cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
            <Image
              src={solution.heroImage}
              alt={solution.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* The AI Opportunity */}
      <section className="bg-sand-100 section">
        <div className="container">
          <SectionHeading center title={solution.opportunity.title} description={solution.opportunity.intro} />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {solution.opportunity.examples.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-ink-700 shadow-soft">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-medium text-ink-800">
            {solution.opportunity.closing}
          </p>
        </div>
      </section>

      {/* What it means */}
      <section className="container section">
        <SectionHeading
          center
          title={solution.meaning.title}
          description={solution.meaning.intro}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solution.meaning.outcomes.map((o) => (
            <article
              key={o.title}
              className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-ink-900">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{o.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Framework */}
      <section className="bg-accent-950 section">
        <div className="container">
          <SectionHeading center light title={solution.framework.title} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solution.framework.phases.map((phase, i) => (
              <article key={phase.title} className="rounded-2xl bg-accent-900/80 p-6 ring-1 ring-white/10">
                <span className="font-display text-3xl text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl !text-cream">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{phase.description}</p>
                {phase.items.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-ink-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="container section">
        <SectionHeading center title={solution.deliverables.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solution.deliverables.items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-ink-200/70 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-1.5 text-xs text-ink-600">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                    {b}
                  </li>
                ))}
              </ul>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Metrics — optional */}
      {solution.metrics && (
        <section className="bg-accent-50 section">
          <div className="container">
            <SectionHeading center title={solution.metrics.title} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {solution.metrics.items.map((m) => (
                <article key={m.title} className="rounded-xl bg-white p-5 shadow-soft">
                  <h3 className="font-semibold text-ink-900">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights — optional deliverables list */}
      {solution.highlights && (
        <section className="container section">
          <SectionHeading center title={solution.highlights.title} />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.highlights.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-ink-200/70 bg-white px-5 py-4 text-sm font-medium text-ink-800 shadow-soft"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Industries / audience */}
      <section className="bg-ink-50 section">
        <div className="container">
          <SectionHeading
            center
            eyebrow={solution.industriesEyebrow ?? "Industries"}
            title={solution.industriesTitle ?? "Industries we support"}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.industries.map((ind) => (
              <article key={ind.title} className="rounded-xl bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-ink-900">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{ind.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="container section">
        <SectionHeading center title="Why organizations choose Redcloud Systems" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {solution.whyChoose.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {solution.faqs.length > 0 && (
        <section className="bg-sand-50 section">
          <div className="container">
            <SectionHeading center eyebrow="FAQ" title="Common questions" />
            <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-200 rounded-2xl border border-ink-200/70 bg-white shadow-soft">
              {solution.faqs.map((faq) => (
                <div key={faq.question} className="p-6">
                  <h3 className="font-semibold text-ink-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing */}
      <section className="banner-surface">
        <div className="container section text-center">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl text-white sm:text-4xl">
            {solution.closing.title}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-white/80">
            {solution.closing.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container section">
        <div className="mx-auto max-w-3xl rounded-2xl border border-ink-200/70 bg-white p-8 shadow-lift sm:p-10">
          <SectionHeading center title={solution.finalCta.title} />
          <p className="mx-auto mt-2 max-w-xl text-center text-ink-600">
            Discover where AI can create the greatest impact in your organization.
          </p>
          <ul className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
            {solution.finalCta.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-ink-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {solution.finalCta.ctas.map((cta, i) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={i === 0 ? "btn-primary" : "btn-ghost"}
              >
                {cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
