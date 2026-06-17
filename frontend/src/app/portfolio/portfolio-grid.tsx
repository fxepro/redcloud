"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/cards";
import { portfolioCategories } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/lib/types";

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {portfolioCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              active === c
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink-200 bg-white text-ink-700 hover:border-ink-300",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <PortfolioCard key={item.slug} item={item} index={i} />
        ))}
      </div>
    </>
  );
}
