import Link from "next/link";
import { services, industries, site } from "@/lib/content";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-ink-300">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-ink-400">{site.description}</p>
          <p className="mt-4 text-sm text-ink-400">{site.email}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Industries</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="hover:text-white">
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/ai-solutions" className="hover:text-white">AI Solutions</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-white">Get a Quote</Link></li>
          </ul>
        </div>
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
