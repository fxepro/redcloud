import Link from "next/link";
import { Cloud } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
        <Cloud className="h-5 w-5" />
      </span>
      <span className={`leading-none ${light ? "text-white" : "text-ink-900"}`}>
        Redcloud{" "}
        <span className="font-semibold text-brand-600">Systems</span>
      </span>
    </Link>
  );
}
