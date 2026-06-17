import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("eyebrow", center && "justify-center")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-4 text-balance text-3xl sm:text-4xl",
          light ? "!text-cream" : "!text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-ink-300" : "text-ink-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
