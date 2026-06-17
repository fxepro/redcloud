import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="container py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-accent-950 px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow justify-center !text-brand-300">Let&apos;s build</p>
          <h2 className="mt-4 text-balance text-3xl !text-cream sm:text-4xl">
            Tell us what you&apos;re trying to build.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            We&apos;ll come back with a clear plan, an honest timeline, and a real
            price — no jargon, no runaround.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/free-demo" className="btn-light">
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
