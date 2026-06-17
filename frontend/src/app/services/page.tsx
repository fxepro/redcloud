import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
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
      <PageHeader
        eyebrow="Services"
        title="Engineering services that move the needle"
        description="From a single feature to a full platform, we deliver software that's built right and supported for the long run."
        breadcrumbs={[{ label: "Services" }]}
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
