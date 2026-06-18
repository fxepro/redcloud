import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { CoreServices } from "@/components/offerings";
import { CtaBanner } from "@/components/cta";
import { compliancePrograms, getComplianceProgram } from "@/lib/compliance-data";

export function generateStaticParams() {
  return compliancePrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getComplianceProgram(slug);
  if (!program) return {};
  return { title: program.title, description: program.tagline };
}

export default async function ComplianceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getComplianceProgram(slug);
  if (!program) notFound();

  return (
    <>
      {/* Banner — light tone: second-level page */}
      <PageBanner
        icon={program.icon}
        title={program.title}
        tagline={program.tagline}
        breadcrumbs={[
          { label: "Compliance", href: "/compliance" },
          { label: program.title },
        ]}
        cta={{
          label: program.ctaLabel,
          href: "/contact",
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        tone="light"
      />

      {/* Who we help */}
      <SubtextBar>{program.subtext}</SubtextBar>

      {/* Challenges + hero image */}
      <MediaSplit image={program.heroImage} alt={program.title} priority>
        <p className="eyebrow">Common challenges</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          What keeps {program.title.split(" ")[0]} teams up at night
        </h2>
        <p className="mt-4 leading-relaxed text-ink-600">
          {program.whoWeHelp}
        </p>
        <ul className="mt-6 space-y-3">
          {program.challenges.map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm text-ink-700">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {c}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-8">
          {program.ctaLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </MediaSplit>

      {/* Services */}
      <CoreServices
        items={program.services}
        eyebrow="Our services"
        title={`${program.title} services`}
        action={
          <Link href="/contact" className="btn-primary">
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      {/* Benefits */}
      <section className="banner-surface">
        <div className="container section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-white/70">Why it matters</p>
            <h2 className="mt-4 text-balance text-3xl text-white sm:text-4xl">
              What you gain from {program.title}
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {program.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl bg-white/10 p-5 text-white ring-1 ring-white/10"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                <span className="text-sm font-medium leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-light">
              {program.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
