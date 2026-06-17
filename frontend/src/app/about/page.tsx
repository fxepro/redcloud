import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CtaBanner } from "@/components/cta";
import { SectionHeading } from "@/components/section";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Redcloud Systems is a corporate software engineering company.",
};

const values = [
  { title: "Ship real software", body: "We measure success by what's running in production, not slideware." },
  { title: "Senior by default", body: "Experienced engineers and delivery leads on every engagement." },
  { title: "Transparent delivery", body: "Clear plans, weekly demos, and no surprise invoices." },
  { title: "Built to last", body: "Maintainable code, tests, and documentation you actually own." },
];

export default function AboutPage() {
  const about = getPageContent("about");
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineering partners for ambitious businesses"
        description="Redcloud Systems builds custom software and AI automation for companies that need software done right."
        breadcrumbs={[{ label: "About" }]}
      />
      <section className="container py-16">
        <div className="prose prose-ink max-w-3xl prose-headings:font-display prose-a:text-brand-700">
          {about?.html ? (
            <div dangerouslySetInnerHTML={{ __html: about.html }} />
          ) : (
            <>
              <p>
                We&apos;re a corporate software engineering company. We help
                organizations design, build, and operate the software that runs
                their business — from customer-facing products to internal
                platforms and AI automation.
              </p>
              <p>
                Our teams span product strategy, design, full-stack engineering,
                cloud, and AI. We work across a dozen industries and at every
                stage, from first MVP to enterprise scale.
              </p>
            </>
          )}
        </div>
      </section>
      <section className="bg-ink-50 py-16">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="What we value" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
