import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { ServiceCard } from "@/components/cards";
import { CtaBanner } from "@/components/cta";
import { getServices } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software development, AI automation, ERP, consulting and more.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageBanner
        icon="Layers"
        title="Engineering Services"
        tagline="From a single feature to a full platform — software that's built right and supported for the long run."
        breadcrumbs={[{ label: "Services" }]}
        cta={{ label: "Get a Quote", href: "/quote", icon: <ArrowRight className="h-4 w-4" /> }}
      />
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
