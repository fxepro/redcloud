import { cn } from "@/lib/utils";

export interface Step {
  n: string;
  title: string;
  body: string;
}

const TONES = {
  light: {
    grid: "bg-ink-200",
    cell: "bg-white",
    number: "font-display text-4xl font-bold text-accent-700",
    title: "text-xl text-ink-900",
    body: "text-sm leading-relaxed text-ink-600",
  },
  dark: {
    grid: "bg-ink-800",
    cell: "bg-ink-900",
    number: "font-display text-4xl font-bold text-brand-400",
    title: "text-xl text-cream",
    body: "text-sm leading-relaxed text-ink-400",
  },
  navy: {
    grid: "bg-accent-800",
    cell: "bg-accent-950",
    number: "font-display text-4xl text-brand-500",
    title: "text-xl !text-cream",
    body: "text-sm leading-relaxed text-ink-400",
  },
} as const;

export type StepGridTone = keyof typeof TONES;

/** Numbered process / how-it-works grid — single design-layer implementation. */
export function StepGrid({
  steps,
  tone = "light",
  className,
}: {
  steps: Step[];
  tone?: StepGridTone;
  className?: string;
}) {
  const t = TONES[tone];

  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-4",
        t.grid,
        className,
      )}
    >
      {steps.map((s) => (
        <div key={s.n} className={cn("p-8", t.cell)}>
          <span className={t.number}>{s.n}</span>
          <h3 className={cn("mt-4", t.title)}>{s.title}</h3>
          <p className={cn("mt-2", t.body)}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
