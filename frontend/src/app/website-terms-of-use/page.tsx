import type { Metadata } from "next";
import { LegalPage } from "../(legal)/legal";

export const metadata: Metadata = { title: "Website Terms of Use" };

export default function TermsOfUse() {
  return (
    <LegalPage title="Website Terms of Use">
      <p>
        These Terms of Use govern your use of the Redcloud Systems website. Final
        content will be migrated from the existing site.
      </p>
      <h2>Acceptable use</h2>
      <p>Use the site lawfully and do not attempt to disrupt or misuse it.</p>
      <h2>Intellectual property</h2>
      <p>All content is owned by Redcloud Systems unless otherwise stated.</p>
    </LegalPage>
  );
}
