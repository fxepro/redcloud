import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Free Demo",
  description: "Book a free demo of Redcloud's AI automation solutions.",
};

export default function FreeDemoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Demo"
        title="See it in action"
        description="Book a free, no-obligation demo of our AI automation solutions."
        breadcrumbs={[{ label: "Free Demo" }]}
      />
      <section className="container max-w-3xl py-16">
        <LeadForm
          formKey="free-demo"
          submitLabel="Book free demo"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "email", label: "Work email", type: "email", required: true },
            { name: "company", label: "Company", required: true },
            { name: "interest", label: "What are you interested in?", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
