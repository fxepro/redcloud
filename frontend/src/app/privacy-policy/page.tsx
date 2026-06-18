import type { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import { LegalContentPage } from "../(legal)/legal-content-page";

const page = getPageContent("privacy-policy");

export const metadata: Metadata = {
  title: page?.title ?? "Privacy Policy",
  description: page?.excerpt,
};

export default function PrivacyPolicy() {
  return <LegalContentPage slug="privacy-policy" />;
}
