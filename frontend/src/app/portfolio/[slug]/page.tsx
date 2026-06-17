import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { PortfolioCard } from "@/components/cards";
import { SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/cta";
import { getPortfolio, getPortfolioItem } from "@/lib/api";

export async function generateStaticParams() {
  return (await getPortfolio()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [item, all] = await Promise.all([getPortfolioItem(slug), getPortfolio()]);
  if (!item) notFound();

  const more = [
    ...all.filter((p) => p.slug !== item.slug && p.category === item.category),
    ...all.filter((p) => p.slug !== item.slug && p.category !== item.category),
  ].slice(0, 3);

  return (
    <>
      <PageBanner
        title={item.title}
        tagline={item.excerpt}
        breadcrumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: item.title }]}
        tone="light"
        cta={
          item.url
            ? { label: "Visit site", href: item.url, icon: <ExternalLink className="h-4 w-4" /> }
            : undefined
        }
      />

      <section className="container section">
        <div className="mx-auto max-w-4xl">
          {item.featuredImage && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.featuredImage}
              alt={item.title}
              className="w-full rounded-2xl border border-ink-200 shadow-soft"
            />
          )}
          <div className="mt-10">
            <p className="eyebrow">{item.category}</p>
            <h2 className="mt-3 text-balance text-3xl sm:text-4xl">About {item.title}</h2>
            {item.description && (
              <div className="prose prose-ink mt-4 max-w-none">
                <p>{item.description}</p>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              {item.url && (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit website <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <Link href="/quote" className="btn-ghost">
                Start a project like this
              </Link>
            </div>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="bg-ink-50 section">
          <div className="container">
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="More work" title="Explore the portfolio" />
              <Link href="/portfolio" className="hidden shrink-0 items-center gap-1 font-semibold text-brand-700 sm:flex">
                View all <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p, i) => (
                <PortfolioCard key={p.slug} item={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
