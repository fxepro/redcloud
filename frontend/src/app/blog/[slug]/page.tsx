import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/cards";
import { CtaBanner } from "@/components/cta";
import { formatDate } from "@/lib/utils";
import { getPost, getPosts, getRelatedPosts } from "@/lib/api";

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const related = await getRelatedPosts(post);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />
      <article className="container py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-ink-500">
            By {post.author} · {formatDate(post.date)} · {post.readingTime} min read
          </p>
          {post.featuredImage && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="prose prose-ink mt-8 max-w-none">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p className="lead">{post.excerpt}</p>
                <p>
                  This article will be published with the full content migrated
                  from the existing site. The backend importer maps each post&apos;s
                  body, categories, tags, and featured image automatically.
                </p>
              </>
            )}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-ink-50 py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-ink-900">Related posts</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBanner />
    </>
  );
}
