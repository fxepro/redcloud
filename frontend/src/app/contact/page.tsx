import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Redcloud Systems.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you're building and we'll get back to you within one business day."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="container grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeadForm
            formKey="contact"
            submitLabel="Send message"
            fields={[
              { name: "name", label: "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "company", label: "Company" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "message", label: "How can we help?", type: "textarea", required: true },
            ]}
          />
        </div>
        <aside className="space-y-6">
          <div className="card">
            <h3 className="font-semibold text-ink-900">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-ink-700">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-600" /> {site.email}</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-600" /> {site.phone}</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-600" /> Remote-first, worldwide</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
