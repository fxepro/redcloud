import { notFound } from "next/navigation";
import { getPageContent } from "@/lib/content";
import { LegalPage } from "./legal";

/** WordPress-exported legal copy uses <strong> + plain newlines, not <p> tags. */
function formatLegacyHtml(html: string) {
  if (/<p[\s>]/i.test(html)) return html;
  return html
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => `<p>${block.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export function LegalContentPage({ slug }: { slug: string }) {
  const page = getPageContent(slug);
  if (!page?.html) notFound();

  return (
    <LegalPage title={page.title}>
      <div dangerouslySetInnerHTML={{ __html: formatLegacyHtml(page.html) }} />
    </LegalPage>
  );
}
