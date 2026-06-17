import type { Metadata } from "next";
import { LegalPage } from "../(legal)/legal";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        This Cookie Policy describes how Redcloud Systems uses cookies and similar
        technologies. Final content will be migrated from the existing site.
      </p>
      <h2>What are cookies</h2>
      <p>Small text files stored on your device to help the site function and measure usage.</p>
      <h2>Managing cookies</h2>
      <p>You can control cookies through your browser settings at any time.</p>
    </LegalPage>
  );
}
