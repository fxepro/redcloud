import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { CoreServices } from "@/components/offerings";
import { LatestArticles } from "@/components/latest-articles";
import { CtaBanner } from "@/components/cta";
import { getIndustries, getIndustry, getPosts } from "@/lib/api";

export async function generateStaticParams() {
  return (await getIndustries()).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.tagline ?? industry.excerpt };
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [industry, posts] = await Promise.all([getIndustry(slug), getPosts()]);
  if (!industry) notFound();

  return (
    <>
      <PageBanner
        icon={industry.icon}
        title={industry.title}
        tagline={industry.tagline ?? industry.excerpt}
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
        cta={{ label: "Book an appointment", href: "/appointment", icon: <CalendarCheck className="h-4 w-4" /> }}
        tone="light"
      />

      {industry.subtext && <SubtextBar>{industry.subtext}</SubtextBar>}

      <MediaSplit image={industry.heroImage} alt={industry.title} priority>
        <p className="eyebrow">Why it matters</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          Every {industry.title} business needs…
        </h2>
        {industry.needs && (
          <ul className="mt-6 space-y-3">
            {industry.needs.map((n) => (
              <li key={n} className="flex items-start gap-3 text-ink-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        )}
        {industry.intro && <p className="mt-6 leading-relaxed text-ink-600">{industry.intro}</p>}
        {industry.stats && industry.stats.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-10">
            {industry.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-brand-600">{s.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-ink-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </MediaSplit>

      {industry.coreServices && (
        <CoreServices
          items={industry.coreServices}
          eyebrow="What we build"
          title={`Core services for ${industry.title.toLowerCase()}`}
          action={
            <Link href="/quote" className="btn-primary">
              Discuss your {industry.title.toLowerCase()} project
            </Link>
          }
        />
      )}

      <LatestArticles posts={posts} />

      <CtaBanner />
    </>
  );
}
