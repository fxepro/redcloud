import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Brand banner for the top of a page.
 * - tone="dark"  → navy→red, white text (section / landing pages)
 * - tone="light" → light-blue, dark text (second-level / detail pages)
 * The look lives here only.
 */
export function PageBanner({
  icon,
  title,
  tagline,
  breadcrumbs,
  cta,
  tone = "dark",
}: {
  icon?: string;
  title: string;
  tagline?: string;
  breadcrumbs?: Crumb[];
  cta?: { label: string; href: string; icon?: ReactNode };
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <section className={light ? "banner-surface-light" : "banner-surface"}>
      {light ? (
        <>
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        </>
      ) : (
        <>
          <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
        </>
      )}

      <div className="container relative section">
        {breadcrumbs && (
          <nav className={cn("mb-6 flex items-center gap-1 text-sm", light ? "text-ink-500" : "text-white/60")}>
            <Link href="/" className={light ? "hover:text-accent-700" : "hover:text-white"}>Home</Link>
            {breadcrumbs.map((b) => (
              <span key={b.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {b.href ? (
                  <Link href={b.href} className={light ? "hover:text-accent-700" : "hover:text-white"}>{b.label}</Link>
                ) : (
                  <span className={light ? "text-ink-700" : "text-white/90"}>{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {icon && (
              <span
                className={cn(
                  "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1",
                  light ? "bg-white text-accent-700 ring-accent-200" : "bg-white/10 text-white ring-white/20",
                )}
              >
                <Icon name={icon} className="h-7 w-7" />
              </span>
            )}
            <h1 className={cn("text-balance text-4xl sm:text-5xl", !light && "!text-white")}>{title}</h1>
            {tagline && (
              <p className={cn("mt-4 text-lg", light ? "text-ink-600" : "text-white/80")}>{tagline}</p>
            )}
          </div>
          {cta &&
            (cta.href.startsWith("http") ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("shrink-0", light ? "btn-primary" : "btn-light")}
              >
                {cta.icon}
                {cta.label}
              </a>
            ) : (
              <Link href={cta.href} className={cn("shrink-0", light ? "btn-primary" : "btn-light")}>
                {cta.icon}
                {cta.label}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
