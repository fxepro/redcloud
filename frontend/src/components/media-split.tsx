import Image from "next/image";

/** Image on the left, arbitrary content on the right. Used for page hero rows. */
export function MediaSplit({
  image,
  alt,
  priority,
  children,
}: {
  image?: string;
  alt: string;
  priority?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="container section">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-950/40 to-transparent" />
          </div>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
}
