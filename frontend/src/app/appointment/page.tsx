import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule a call with Redcloud Systems.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointment"
        title="Book a call"
        description="Pick a time that works and we'll send a calendar invite."
        breadcrumbs={[{ label: "Appointment" }]}
      />
      <section className="container max-w-3xl py-16">
        <LeadForm
          formKey="appointment"
          submitLabel="Request appointment"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "preferred_date", label: "Preferred date", type: "text" },
            { name: "topic", label: "What would you like to discuss?", type: "textarea", required: true },
          ]}
        />
      </section>
    </>
  );
}
