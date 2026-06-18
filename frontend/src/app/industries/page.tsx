import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
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
      <PageBanner
        icon="Globe"
        title="Industries"
        tagline="We bring patterns, compliance know-how, and integrations specific to your industry."
        breadcrumbs={[{ label: "Industries" }]}
        cta={{ label: "Get a Quote", href: "/quote", icon: <ArrowRight className="h-4 w-4" /> }}
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
