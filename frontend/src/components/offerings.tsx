import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Icon, iconForText } from "./icon";
import { SectionHeading } from "./section";
import type { ServiceOffering } from "@/lib/types";

/** A single gradient-header offering card. */
export function OfferingCard({ offering }: { offering: ServiceOffering }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center gap-3 bg-gradient-to-r from-accent-900 to-brand-800 px-6 py-5 text-white">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
          <Icon name={iconForText(offering.title + " " + offering.description)} className="h-5 w-5" />
        </span>
        <h3 className="text-lg !text-white">{offering.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-ink-600">{offering.description}</p>
        <ul className="mt-4 space-y-2.5">
          {offering.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {b}
            </li>
          ))}
        </ul>
        {offering.href && (
          <Link
            href={offering.href}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

/** Section wrapping the 4 core-service offering cards. */
export function CoreServices({
  items,
  eyebrow = "What we deliver",
  title = "Core services",
  action,
}: {
  items: ServiceOffering[];
  eyebrow?: string;
  title?: string;
  action?: React.ReactNode;
}) {
  return (
    <section className="bg-ink-50 section">
      <div className="container">
        <SectionHeading center eyebrow={eyebrow} title={title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((o) => (
            <OfferingCard key={o.title} offering={o} />
          ))}
        </div>
        {action && <div className="mt-10 text-center">{action}</div>}
      </div>
    </section>
  );
}
