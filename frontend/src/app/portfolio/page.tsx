import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
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
      <PageBanner
        icon="FolderOpen"
        title="Portfolio"
        tagline="A selection of platforms, products, and tools we've designed and engineered."
        breadcrumbs={[{ label: "Portfolio" }]}
        cta={{ label: "Start a project", href: "/quote", icon: <ArrowRight className="h-4 w-4" /> }}
      />
      <section className="container py-16">
        <PortfolioGrid items={items} />
      </section>
      <CtaBanner />
    </>
  );
}
