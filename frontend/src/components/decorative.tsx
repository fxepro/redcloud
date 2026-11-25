import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Blur-orb presets — the only place orb markup lives. */
const BLUR_ORB_PRESETS = {
  campaign: [
    "-left-32 -top-32 h-[32rem] w-[32rem] bg-accent-200/40",
    "-right-24 top-16 h-80 w-80 bg-brand-100/50",
  ],
  "site-home": [
    "-left-40 -top-40 h-[28rem] w-[28rem] bg-mist-300/60",
    "-right-32 top-20 h-96 w-96 bg-accent-400/25",
  ],
  "banner-light": [
    "-right-24 -top-24 h-96 w-96 bg-accent-200/50",
    "-bottom-32 left-1/4 h-72 w-72 bg-brand-200/30",
  ],
  "banner-dark": ["-right-20 -top-24 h-96 w-96 bg-brand-600/40"],
  "page-header": [
    "-right-24 -top-24 h-80 w-80 bg-brand-200/40",
    "-bottom-32 left-1/3 h-72 w-72 bg-accent-200/30",
  ],
  cta: [
    "-left-20 top-0 h-72 w-72 bg-brand-600/30",
    "-right-16 bottom-0 h-72 w-72 bg-accent-500/20",
  ],
} as const;

export type BlurOrbPreset = keyof typeof BLUR_ORB_PRESETS;

export function BlurOrbs({ preset }: { preset: BlurOrbPreset }) {
  return (
    <>
      {BLUR_ORB_PRESETS[preset].map((position, i) => (
        <div
          key={i}
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-full blur-3xl",
            position,
          )}
        />
      ))}
    </>
  );
}

/** Campaign hero background gradients — token names only. */
export const CAMPAIGN_GRADIENTS = {
  accent: "from-accent-50 to-white",
  mist: "from-mist-200 via-mist-100 to-white",
  "accent-strong": "from-accent-100 to-white",
  "accent-muted": "from-accent-200/40 to-white",
  ink: "from-ink-50 to-white",
  "ink-strong": "from-ink-100 to-white",
  brand: "from-brand-50 to-white",
  "brand-strong": "from-brand-100 to-white",
  sand: "from-sand-100 to-white",
  "sand-light": "from-sand-50 to-white",
  "sand-deep": "from-sand-200 to-white",
} as const;

export type CampaignGradient = keyof typeof CAMPAIGN_GRADIENTS;

/** Wrapper for campaign landing heroes and site home hero. */
export function CampaignHero({
  gradient = "accent",
  orbPreset = "campaign",
  children,
}: {
  gradient?: CampaignGradient;
  orbPreset?: BlurOrbPreset;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b",
        CAMPAIGN_GRADIENTS[gradient],
      )}
    >
      <BlurOrbs preset={orbPreset} />
      {children}
    </section>
  );
}

/** Dark CTA capsule with built-in orbs. */
export function CtaPanel({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-accent-950 px-8 py-16 sm:px-16">
      <BlurOrbs preset="cta" />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Rotating line patterns for card headers and image-less tiles. */
const PATTERNS = ["pattern-circuit", "pattern-grid", "pattern-diagonal", "pattern-rings"] as const;

/** Navy base tints, rotated alongside the pattern so neighbouring cards differ. */
const PATTERN_TINTS = [
  "from-accent-950 via-accent-900 to-accent-800",
  "from-ink-950 via-accent-950 to-accent-900",
  "from-accent-950 via-accent-900 to-brand-900",
  "from-navy-950 via-accent-950 to-accent-800",
] as const;

/**
 * Dark patterned surface: navy gradient + line pattern + brand glow.
 * `index` picks the pattern/tint so adjacent cards never look identical.
 * Optional `image` is laid underneath as a duotone photo.
 */
export function PatternPanel({
  index = 0,
  image,
  className,
  children,
}: {
  index?: number;
  image?: string;
  className?: string;
  children?: ReactNode;
}) {
  const pattern = PATTERNS[index % PATTERNS.length];
  const tint = PATTERN_TINTS[index % PATTERN_TINTS.length];
  return (
    <div className={cn("relative isolate overflow-hidden bg-gradient-to-br text-white", tint, className)}>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        />
      )}
      <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 opacity-[0.09]", pattern)} />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 -z-10 h-40 w-40 rounded-full bg-brand-600/30 blur-3xl"
      />
      {children}
    </div>
  );
}
