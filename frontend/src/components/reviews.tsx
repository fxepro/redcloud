import { Star } from "lucide-react";
import { SectionHeading } from "./section";
import type { Review } from "@/lib/reviews";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-accent-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-current" : "text-ink-200"}`} />
      ))}
    </div>
  );
}

const AVATAR = ["bg-brand-600", "bg-accent-600", "bg-accent-800", "bg-brand-700", "bg-accent-500"];

export function Reviews({
  reviews,
  summary,
}: {
  reviews: Review[];
  summary: { rating: number; url: string };
}) {
  if (reviews.length === 0) return null;

  return (
    <section className="container section">
      <SectionHeading
        center
        eyebrow="Reviews"
        title="What our clients say"
        description={`Rated ${summary.rating.toFixed(1)} out of 5 from ${reviews.length} Google review${reviews.length > 1 ? "s" : ""}`}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="card flex flex-col">
            <Stars n={r.rating} />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">“{r.text}”</p>
            <div className="mt-5 flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR[i % AVATAR.length]}`}
              >
                {r.author.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">{r.author}</p>
                {(r.role || r.when) && (
                  <p className="text-xs text-ink-500">
                    {[r.role, r.when].filter(Boolean).join(" · ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 text-sm">
        <span className="font-semibold text-ink-500">Reviews from Google</span>
        <a
          href={summary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-700 hover:text-brand-800"
        >
          See all reviews on Google →
        </a>
      </div>
    </section>
  );
}
