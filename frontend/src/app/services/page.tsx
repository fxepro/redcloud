import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SubtextBar } from "@/components/subtext-bar";
import { CtaBanner } from "@/components/cta";
import { Icon } from "@/components/icon";
import { serviceCatalog } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI transformation, compliance, cloud infrastructure, custom software, ERP, executive intelligence, marketing, and managed services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        icon="Layers"
        title="Services"
        tagline="Eight core service lines — from AI and compliance to cloud, software, ERP, and ongoing support."
        breadcrumbs={[{ label: "Services" }]}
        cta={{ label: "Get a Quote", href: "/quote", icon: <ArrowRight className="h-4 w-4" /> }}
      />

      <SubtextBar>
        We deliver full-lifecycle engineering across AI, security, infrastructure, and business systems —
        one team that owns the outcome from strategy through launch and beyond.
      </SubtextBar>

      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {serviceCatalog.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`${service.accent} flex items-center gap-3 px-6 py-4`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white ring-1 ring-white/30">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="text-base font-semibold text-white">
                  <Link href={service.href} className="hover:underline">
                    {service.title}
                  </Link>
                </h2>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-ink-600">{service.description}</p>

                <div className="mt-5">
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-400">
                    Includes
                  </p>
                  <ul className="space-y-1.5">
                    {service.includes.map((item) => (
                      <li key={item.label} className="flex items-center gap-1.5 text-xs">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-accent-700 underline-offset-2 transition hover:underline"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-ink-500">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                >
                  Explore service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink-50">
        <div className="container py-14 text-center">
          <p className="eyebrow">Need a combination?</p>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl">
            Most engagements span two or three service lines
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            AI transformation often pairs with compliance. Modernization usually needs managed services.
            Tell us your priority and we&apos;ll scope the right mix.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-primary">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
