import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a project quote from Redcloud Systems.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Quote"
        title="Get a project quote"
        description="Share a few details and we'll come back with a plan, timeline, and price."
        breadcrumbs={[{ label: "Quote" }]}
      />
      <section className="container max-w-3xl py-16">
        <LeadForm
          formKey="quote"
          submitLabel="Request quote"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "company", label: "Company" },
            {
              name: "service",
              label: "Service needed",
              type: "select",
              required: true,
              options: services.map((s) => s.title),
            },
            {
              name: "budget",
              label: "Estimated budget",
              type: "select",
              options: ["< $10k", "$10k–$50k", "$50k–$150k", "$150k+"],
            },
            { name: "details", label: "Project details", type: "textarea", required: true },
          ]}
        />
      </section>
    </>
  );
}
