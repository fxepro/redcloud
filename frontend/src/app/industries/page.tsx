import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { IndustryCard } from "@/components/cards";
import { CtaBanner } from "@/components/cta";
import { getIndustries } from "@/lib/api";

export const metadata: Metadata = {
  title: "Industries",
  description: "Software and AI expertise across 12 industries.",
};

export default async function IndustriesPage() {
  const industries = await getIndustries();
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Software expertise for your sector"
        description="We bring patterns, compliance know-how, and integrations specific to your industry."
        breadcrumbs={[{ label: "Industries" }]}
      />
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <IndustryCard key={i.slug} industry={i} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
