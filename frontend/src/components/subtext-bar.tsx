/** Centered supporting line shown directly under a page banner. */
export function SubtextBar({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-b border-ink-200 bg-ink-50">
      <div className="container py-8">
        <p className="mx-auto max-w-4xl text-center text-lg text-ink-600">{children}</p>
      </div>
    </section>
  );
}
