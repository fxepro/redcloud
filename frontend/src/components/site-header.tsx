"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { services, industries, aiSolutions } from "@/lib/content";
import { Icon } from "./icon";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface MegaItem {
  icon?: string;
  title: string;
  desc?: string;
  href: string;
}
interface Mega {
  cols: string;
  overview: { label: string; href: string };
  items: MegaItem[];
}

const MEGA: Record<string, Mega> = {
  Services: {
    cols: "sm:grid-cols-2 lg:grid-cols-3",
    overview: { label: "All services", href: "/services" },
    items: services.map((s) => ({
      icon: s.icon,
      title: s.title,
      desc: s.excerpt,
      href: `/services/${s.slug}`,
    })),
  },
  Industries: {
    cols: "sm:grid-cols-3 lg:grid-cols-4",
    overview: { label: "All industries", href: "/industries" },
    items: industries.map((i) => ({
      icon: i.icon,
      title: i.title,
      desc: i.excerpt,
      href: `/industries/${i.slug}`,
    })),
  },
  "AI Solutions": {
    cols: "sm:grid-cols-3 lg:grid-cols-4",
    overview: { label: "AI Solutions overview", href: "/ai-solutions" },
    items: aiSolutions.map((a) => ({
      icon: "Cpu",
      title: a.title,
      desc: a.excerpt,
      href: `/ai-solutions/${a.slug}`,
    })),
  },
};

const TOP: { title: string; href: string; mega?: string }[] = [
  { title: "Services", href: "/services", mega: "Services" },
  { title: "Industries", href: "/industries", mega: "Industries" },
  { title: "AI Solutions", href: "/ai-solutions", mega: "AI Solutions" },
  { title: "AI Development", href: "/ai-development" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = open ? MEGA[open] : null;

  const openMenu = (m: string | null) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(m);
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-cream/85 backdrop-blur-md">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {TOP.map((item) =>
              item.mega ? (
                <div
                  key={item.title}
                  onMouseEnter={() => openMenu(item.mega!)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
                      open === item.mega ? "text-brand-600" : "text-ink-700 hover:text-brand-600",
                    )}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn("h-4 w-4 transition", open === item.mega && "rotate-180")}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  onMouseEnter={() => openMenu(null)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-600"
                >
                  {item.title}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="text-sm font-medium text-ink-700 hover:text-brand-600">
              Contact
            </Link>
            <Link href="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setMobile((v) => !v)} aria-label="Toggle menu">
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Full-width mega panel */}
      {active && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={() => openMenu(open)}
          onMouseLeave={scheduleClose}
        >
          <div className="border-t border-ink-200 bg-white shadow-lift">
            <div className="container py-7">
              <div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {open}
                </span>
                <Link
                  href={active.overview.href}
                  onClick={() => setOpen(null)}
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  {active.overview.label} →
                </Link>
              </div>
              <div className={cn("grid gap-x-6 gap-y-1", active.cols)}>
                {active.items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(null)}
                    className="group/i flex items-start gap-3 rounded-xl p-3 transition hover:bg-accent-50"
                  >
                    {it.icon && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 ring-1 ring-accent-100 transition group-hover/i:bg-accent-100">
                        <Icon name={it.icon} className="h-5 w-5" />
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink-900 transition group-hover/i:text-brand-700">
                        {it.title}
                      </span>
                      {it.desc && (
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink-500 line-clamp-2">
                          {it.desc}
                        </span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={cn("border-t border-ink-200 lg:hidden", mobile ? "block" : "hidden")}>
        <nav className="container flex flex-col gap-1 py-4">
          {TOP.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 font-medium text-ink-800"
                onClick={() => setMobile(false)}
              >
                {item.title}
              </Link>
              {item.mega && (
                <div className="ml-3 border-l border-ink-200 pl-3">
                  {MEGA[item.mega].items.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-md px-3 py-1.5 text-sm text-ink-600"
                      onClick={() => setMobile(false)}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/quote" className="btn-primary mt-3" onClick={() => setMobile(false)}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
