import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { MediaSplit } from "@/components/media-split";
import { CoreServices } from "@/components/offerings";
import { LatestArticles } from "@/components/latest-articles";
import { CtaBanner } from "@/components/cta";
import { getService, getServices, getPosts } from "@/lib/api";

export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.tagline ?? service.excerpt };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, posts] = await Promise.all([getService(slug), getPosts()]);
  if (!service) notFound();

  return (
    <>
      <PageBanner
        icon={service.icon}
        title={service.title}
        tagline={service.tagline ?? service.excerpt}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        cta={{ label: "Get a Quote", href: "/quote", icon: <ArrowRight className="h-4 w-4" /> }}
        tone="light"
      />

      {service.subtext && <SubtextBar>{service.subtext}</SubtextBar>}

      <MediaSplit image={service.heroImage} alt={service.title} priority>
        <p className="eyebrow">The service</p>
        <h2 className="mt-3 text-balance text-3xl sm:text-4xl">
          Engineering {service.title.toLowerCase()} that delivers
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-ink-600">
          {service.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm font-medium text-ink-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              {f}
            </li>
          ))}
        </ul>
        <Link href="/quote" className="btn-primary mt-8">
          Get a Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </MediaSplit>

      {service.offerings && <CoreServices items={service.offerings} />}

      <LatestArticles posts={posts} />

      <CtaBanner />
    </>
  );
}
