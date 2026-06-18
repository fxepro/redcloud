import type { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import { LegalContentPage } from "../(legal)/legal-content-page";

const page = getPageContent("website-terms-of-use");

export const metadata: Metadata = {
  title: page?.title ?? "Website Terms of Use",
  description: page?.excerpt,
};

export default function TermsOfUse() {
  return <LegalContentPage slug="website-terms-of-use" />;
}
