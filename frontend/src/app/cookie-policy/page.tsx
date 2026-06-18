import type { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import { LegalContentPage } from "../(legal)/legal-content-page";

const page = getPageContent("cookie-policy");

export const metadata: Metadata = {
  title: page?.title ?? "Cookie Policy",
  description: page?.excerpt,
};

export default function CookiePolicy() {
  return <LegalContentPage slug="cookie-policy" />;
}
