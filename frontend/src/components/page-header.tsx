import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlurOrbs } from "./decorative";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/70 bg-sand-100">
      <BlurOrbs preset="page-header" />
      <div className="container relative py-16 lg:py-20">
        {breadcrumbs && (
          <nav className="mb-5 flex items-center gap-1 text-sm text-ink-500">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {breadcrumbs.map((b) => (
              <span key={b.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {b.href ? (
                  <Link href={b.href} className="hover:text-brand-600">{b.label}</Link>
                ) : (
                  <span className="text-ink-700">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-balance text-4xl sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">{description}</p>
        )}
      </div>
    </section>
  );
}
