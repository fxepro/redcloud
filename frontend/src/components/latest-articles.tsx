import { SectionHeading } from "./section";
import { PostCard } from "./cards";
import type { Post } from "@/lib/types";

/** "Latest news & articles" section — three most recent posts. */
export function LatestArticles({
  posts,
  eyebrow = "Insights",
  title = "Latest news & articles",
}: {
  posts: Post[];
  eyebrow?: string;
  title?: string;
}) {
  if (posts.length === 0) return null;
  return (
    <section className="container section">
      <SectionHeading center eyebrow={eyebrow} title={title} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
