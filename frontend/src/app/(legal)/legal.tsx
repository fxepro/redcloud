import { PageHeader } from "@/components/page-header";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} breadcrumbs={[{ label: title }]} />
      <section className="container py-16">
        <div className="prose prose-ink max-w-3xl">
          <p className="text-sm text-ink-500">Last updated: {new Date().getFullYear()}</p>
          {children}
        </div>
      </section>
    </>
  );
}
