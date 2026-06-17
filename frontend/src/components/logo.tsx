import Link from "next/link";
import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Redcloud Systems">
      <Image
        src={light ? "/logo-white.png" : "/logo-web.png"}
        alt="Redcloud Systems"
        width={400}
        height={126}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
