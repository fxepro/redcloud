import Link from "next/link";
import { aiSolutions, industries, site } from "@/lib/content";
import { compliancePrograms } from "@/lib/compliance-data";
import { serviceCatalog } from "@/lib/services-data";
import { solutionDetails } from "@/lib/solutions-detail-data";
import { Logo } from "./logo";

interface FooterLink {
  label: string;
  href: string;
}

function FooterColumn({
  title,
  overviewHref,
  links,
  colSpan = 1,
  linkCols = 2,
}: {
  title: string;
  overviewHref?: string;
  links: FooterLink[];
  colSpan?: 1 | 2;
  linkCols?: 1 | 2;
}) {
  return (
    <div className={colSpan === 2 ? "lg:col-span-2" : undefined}>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {overviewHref && (
          <Link
            href={overviewHref}
            className="text-xs font-medium text-accent-300 hover:text-white"
          >
            View all →
          </Link>
        )}
      </div>
      <ul
        className={`mt-4 grid gap-x-4 gap-y-2 text-sm ${
          linkCols === 2 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-ink-400 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Free Demo", href: "/free-demo" },
];

const aiLinks: FooterLink[] = [
  { label: "AI Development", href: "/ai-development" },
  { label: "AI Solutions", href: "/ai-solutions" },
  ...aiSolutions.slice(0, 3).map((a) => ({
    label: a.title.replace(/ AI$/, ""),
    href: `/ai-solutions/${a.slug}`,
  })),
];

const complianceLinks: FooterLink[] = [
  ...compliancePrograms.map((p) => ({
    label: p.title.replace(/ Readiness$/, ""),
    href: `/compliance/${p.slug}`,
  })),
  { label: "AI Compliance Monitoring", href: "/landing/ai-compliance" },
  { label: "Security Assessments", href: "/landing/security-assessments" },
  { label: "Policy & Documentation", href: "/landing/policy-documentation" },
  { label: "Ongoing Compliance Support", href: "/landing/ongoing-compliance-support" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-ink-300">
      {/* Row 0 — brand + company */}
      <div className="container grid gap-10 pt-14 pb-10 lg:grid-cols-4 lg:items-start">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm text-ink-400">{site.description}</p>
          <p className="mt-2 text-sm text-ink-400">{site.email}</p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row 1 — solutions + services (4 columns) */}
      <div className="container grid gap-x-8 gap-y-10 border-t border-ink-800 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <FooterColumn
          title="Solutions"
          overviewHref="/solutions"
          colSpan={2}
          links={solutionDetails.map((s) => ({
            label: s.title,
            href: `/solutions/${s.slug}`,
          }))}
        />
        <FooterColumn
          title="Services"
          overviewHref="/services"
          colSpan={2}
          links={serviceCatalog.map((s) => ({ label: s.title, href: s.href }))}
        />
      </div>

      {/* Row 2 — industries · AI · compliance (5 columns) */}
      <div className="container grid gap-x-8 gap-y-10 border-t border-ink-800 py-10 sm:grid-cols-2 lg:grid-cols-5">
        <FooterColumn
          title="Industries"
          overviewHref="/industries"
          colSpan={2}
          links={industries.map((i) => ({
            label: i.title,
            href: `/industries/${i.slug}`,
          }))}
        />
        <FooterColumn
          title="AI"
          overviewHref="/ai-development"
          linkCols={1}
          links={aiLinks}
        />
        <FooterColumn
          title="Compliance"
          overviewHref="/compliance"
          colSpan={2}
          linkCols={2}
          links={complianceLinks}
        />
      </div>

      <div className="border-t border-ink-800">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            <Link href="/website-terms-of-use" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
