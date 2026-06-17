import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "./icon";
import { formatDate } from "@/lib/utils";
import type { AiSolution, Industry, PortfolioItem, Post, Service } from "@/lib/types";

/** Photo-backed card with a floating icon badge. */
function MediaCard({
  href,
  image,
  alt,
  icon,
  badgeClass,
  overlayClass,
  title,
  excerpt,
  cta,
  ctaClass,
}: {
  href: string;
  image?: string;
  alt: string;
  icon: string;
  badgeClass: string;
  overlayClass: string;
  title: string;
  excerpt: string;
  cta: string;
  ctaClass: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        {image && (
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayClass} to-transparent`} />
      </div>
      <div className="relative flex flex-1 flex-col p-6">
        <span
          className={`absolute -top-7 left-6 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lift ring-4 ring-white ${badgeClass}`}
        >
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-3 text-lg">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{excerpt}</p>
        <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${ctaClass}`}>
          {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <MediaCard
      href={`/services/${service.slug}`}
      image={service.heroImage}
      alt={service.title}
      icon={service.icon}
      badgeClass="bg-brand-600"
      overlayClass="from-ink-900/35"
      title={service.title}
      excerpt={service.excerpt}
      cta="Learn more"
      ctaClass="text-brand-700"
    />
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <MediaCard
      href={`/industries/${industry.slug}`}
      image={industry.heroImage}
      alt={industry.title}
      icon={industry.icon}
      badgeClass="bg-accent-900"
      overlayClass="from-accent-950/45"
      title={industry.title}
      excerpt={industry.excerpt}
      cta="Explore"
      ctaClass="text-accent-700"
    />
  );
}

export function AiCard({ item }: { item: AiSolution }) {
  return (
    <Link href={`/ai-solutions/${item.slug}`} className="card group flex flex-col">
      <h3 className="flex items-center justify-between text-lg">
        {item.title}
        <ArrowUpRight className="h-5 w-5 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{item.excerpt}</p>
    </Link>
  );
}

// Warm, varied gradient treatments instead of a flat placeholder
const tileGradients = [
  "from-brand-700 via-brand-600 to-accent-500",
  "from-ink-900 via-ink-800 to-brand-800",
  "from-accent-600 via-brand-600 to-brand-800",
  "from-brand-800 via-ink-800 to-ink-900",
];

export function PortfolioCard({ item, index = 0 }: { item: PortfolioItem; index?: number }) {
  const g = tileGradients[index % tileGradients.length];
  return (
    <Link href={`/portfolio/${item.slug}`} className="group flex flex-col">
      <div
        className={`relative flex aspect-[16/11] items-end overflow-hidden rounded-2xl bg-gradient-to-br ${g} p-6 shadow-soft transition group-hover:shadow-lift`}
      >
        {item.featuredImage && (
          <>
            <Image
              src={item.featuredImage}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
          </>
        )}
        <div className="absolute right-4 top-4 z-10 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {item.category}
        </div>
        <ArrowUpRight className="absolute bottom-5 right-5 z-10 h-6 w-6 text-white/80 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        <span className="relative z-10 font-display text-2xl font-medium text-white drop-shadow">
          {item.title}
        </span>
      </div>
      <h3 className="mt-4 text-lg">{item.title}</h3>
      <p className="mt-1 text-sm text-ink-600">{item.excerpt}</p>
    </Link>
  );
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`card group flex flex-col ${featured ? "sm:flex-row sm:items-stretch sm:gap-8" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-700 to-ink-900 ${
          featured ? "aspect-[16/10] w-full shrink-0 sm:w-1/2" : "mb-4 aspect-[16/9] w-full"
        }`}
      >
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-end p-5">
            <span className="font-display text-xl text-white/90">{post.category}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
          {post.category}
        </span>
        <h3 className={`mt-2 transition group-hover:text-brand-700 ${featured ? "text-2xl" : "text-lg"}`}>
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
        <p className="mt-4 text-xs text-ink-500">
          {formatDate(post.date)} · {post.readingTime} min read
        </p>
      </div>
    </Link>
  );
}
