import type { Metadata } from "next";
import { LegalPage } from "../(legal)/legal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how Redcloud Systems collects, uses, and
        protects the information you provide through this website. Final content
        will be migrated from the existing site.
      </p>
      <h2>Information we collect</h2>
      <p>Contact details you submit through our forms, and standard analytics data.</p>
      <h2>How we use it</h2>
      <p>To respond to enquiries, deliver services, and improve our website.</p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent via our contact page.</p>
    </LegalPage>
  );
}
