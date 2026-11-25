import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaPanel } from "./decorative";

export function CtaBanner() {
  return (
    <section className="container py-20">
      <CtaPanel>
        <div className="mx-auto max-w-2xl text-center">
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
      </CtaPanel>
    </section>
  );
}
