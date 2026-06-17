import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/cards";
import { CtaBanner } from "@/components/cta";
import { getPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on custom software, AI automation, and digital strategy.",
};

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="The Redcloud blog"
        description="Practical thinking on software engineering, AI automation, and growth."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="container py-16">
        {featured && (
          <div className="mb-12">
            <PostCard post={featured} featured />
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
