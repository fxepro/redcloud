import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { AiUseCases } from "@/components/ai-use-cases";
import { LatestArticles } from "@/components/latest-articles";
import { CtaBanner } from "@/components/cta";
import { getAiSolution, getAiSolutions, getPosts } from "@/lib/api";

export async function generateStaticParams() {
  return (await getAiSolutions()).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getAiSolution(slug);
  if (!item) return {};
  return { title: item.title, description: item.tagline ?? item.excerpt };
}

export default async function AiDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [item, posts] = await Promise.all([getAiSolution(slug), getPosts()]);
  if (!item) notFound();
  const nice = item.title.replace(/ AI$/i, "");

  return (
    <>
      <PageBanner
        icon="Cpu"
        title={item.title}
        tagline={item.tagline ?? item.excerpt}
        breadcrumbs={[{ label: "AI Solutions", href: "/ai-solutions" }, { label: item.title }]}
        cta={{ label: "Book a free demo", href: "/free-demo", icon: <ArrowRight className="h-4 w-4" /> }}
        tone="light"
      />

      {item.subtext && <SubtextBar>{item.subtext}</SubtextBar>}

      <MediaSplit image={item.heroImage} alt={item.title} priority>
        <p className="eyebrow">The opportunity</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          What AI does for {nice.toLowerCase()}
        </h2>
        <p className="mt-4 leading-relaxed text-ink-600">
          We bring agentic AI to {nice.toLowerCase()} — automating repetitive work,
          surfacing insights from your data, and plugging into the platforms your team
          already uses. Here&apos;s what you can expect.
        </p>
        <ul className="mt-6 space-y-3">
          {item.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 text-ink-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
        <Link href="/free-demo" className="btn-primary mt-8">
          Book a free demo <ArrowRight className="h-4 w-4" />
        </Link>
      </MediaSplit>

      {item.useCases && item.useCases.length > 0 && (
        <AiUseCases
          items={item.useCases}
          eyebrow="Use cases"
          title={`Where AI delivers in ${nice.toLowerCase()}`}
        />
      )}

      <LatestArticles posts={posts} />

      <CtaBanner />
    </>
  );
}
