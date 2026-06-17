import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CtaBanner } from "@/components/cta";
import { PortfolioGrid } from "./portfolio-grid";
import { getPortfolio } from "@/lib/api";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected work across SaaS, startups, corporate, edtech and more.",
};

export default async function PortfolioPage() {
  const items = await getPortfolio();
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud of"
        description="A selection of platforms, products, and tools we've designed and engineered."
        breadcrumbs={[{ label: "Portfolio" }]}
      />
      <section className="container py-16">
        <PortfolioGrid items={items} />
      </section>
      <CtaBanner />
    </>
  );
}
