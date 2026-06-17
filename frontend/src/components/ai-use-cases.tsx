import { CheckCircle2 } from "lucide-react";
import { Icon, iconForText } from "./icon";
import { SectionHeading } from "./section";
import type { AiUseCase } from "@/lib/types";

/** Gradient-header card: AI capabilities (check bullets) + the platforms we use (pills). */
function UseCaseCard({ useCase }: { useCase: AiUseCase }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center gap-3 bg-gradient-to-r from-accent-900 to-brand-800 px-6 py-5 text-white">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
          <Icon name={iconForText(useCase.category + " " + useCase.capabilities.join(" "))} className="h-5 w-5" />
        </span>
        <h3 className="text-lg !text-white">{useCase.category}</h3>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <ul className="space-y-2.5">
          {useCase.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {c}
            </li>
          ))}
        </ul>
        {useCase.tools.length > 0 && (
          <div className="mt-5 border-t border-ink-100 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Platforms we use
            </p>
            <div className="flex flex-wrap gap-2">
              {useCase.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AiUseCases({
  items,
  eyebrow = "Use cases",
  title = "Where AI delivers",
}: {
  items: AiUseCase[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-ink-50 section">
      <div className="container">
        <SectionHeading center eyebrow={eyebrow} title={title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((u) => (
            <UseCaseCard key={u.category} useCase={u} />
          ))}
        </div>
      </div>
    </section>
  );
}
