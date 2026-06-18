import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Redcloud Systems is a boutique firm committed to creating high-impact digital assets in the cloud, on-premise, and on mobile devices.",
};

const r2 = "https://pub-c1b896623cec4178be9c45516dbfacfb.r2.dev/uploads";

const successCards = [
  {
    img: `${r2}/2024/11/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg`,
    title: "Accelerated Time-to-Market",
    body: "With our streamlined processes and expert team, clients launch products faster, staying ahead of competitors.",
  },
  {
    img: `${r2}/2024/11/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.jpg`,
    title: "Enhanced Operational Efficiency",
    body: "We use task automation and improved workflows, allowing clients to focus on core business activities.",
  },
  {
    img: `${r2}/2024/11/thisisengineering-mvbtVeRVJzg-unsplash.jpg`,
    title: "Improved Scalability and Flexibility",
    body: "Our solutions are designed to grow with your business, making it easy to adapt to changing demands.",
  },
  {
    img: `${r2}/2024/11/thisisengineering-32PpagSzeGs-unsplash.jpg`,
    title: "Stronger Security and Compliance",
    body: "Clients benefit from robust security practices, ensuring applications meet industry standards.",
  },
];

const pillars = [
  {
    title: "Infrastructure Design",
    body: "Expertise in infrastructure design ensures robust, scalable, and secure foundations for software systems, enabling businesses to handle growth and operational demands effortlessly.",
  },
  {
    title: "Open Source Software",
    body: "Leveraging open source tools reduces costs while promoting flexibility and innovation, with faster improvements, enhanced security, and tailored solutions.",
  },
  {
    title: "Solution Centricity",
    body: "A focus on solving specific business challenges ensures that technology aligns with customer goals, delivering practical, impactful results.",
  },
  {
    title: "Platform Agnostic",
    body: "Expertise in platform-agnostic solutions enables businesses to work across diverse environments, avoiding vendor lock-in and ensuring long-term value.",
  },
];

const history = [
  {
    year: "2001",
    eyebrow: "early years in the software industry",
    title: "Silicon Valley Is Cool And All",
    body: "Starting my career working at industry leaders like Apple, Oracle, Cisco, and General Electric provided unparalleled opportunities to learn, innovate, and grow. Apple taught me design and customer-centric technology. Oracle showed the significance of enterprise-grade solutions. Cisco deepened expertise in networking and infrastructure. At GE, I embraced innovation across diverse industrial sectors. These experiences shaped my ability to navigate complex challenges and contribute to transformative projects.",
  },
  {
    year: "2008",
    eyebrow: "move to Colorado",
    title: "Enterprise to Consumer Markets",
    body: "Moving to Colorado for college was a transformative experience. During the challenging market conditions of 2008, I adapted my skills to meet consumer needs, navigating uncertainty with resilience and creativity. This period taught me to identify opportunities amidst adversity, crafting solutions that delivered value despite economic constraints. Colorado's dynamic environment and supportive networks fueled my growth and expertise.",
  },
  {
    year: "2013",
    eyebrow: "the challenge of the times",
    title: "Founding Redcloud Systems",
    body: "Redcloud Systems was founded to empower nonprofits through tailored consulting focused on WordPress development and Salesforce. Recognizing the unique challenges nonprofits face, we built intuitive WordPress websites and end-to-end CRM solutions to optimize donor management, automate workflows, and generate impactful analytics. Redcloud draws inspiration from a majestic 14,000-foot peak — strength, resilience, and the boundless potential of cloud technology.",
  },
  {
    year: "2016",
    label: "To Date",
    eyebrow: "custom software development for all",
    title: "Establishment and Beyond",
    body: "Redcloud Systems expanded into serving startups and enterprises, helping businesses move from legacy systems to modern, scalable cloud infrastructures on AWS and Google Cloud. Expanding into SugarCRM, we deliver tailored CRM solutions that enhance customer engagement and drive data-driven decision-making. We now offer custom software across PHP, Ruby, and modern JavaScript frameworks — empowering everyone to embrace cutting-edge technology and stay ahead of the competition.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        icon="Users"
        title="About Redcloud Systems"
        tagline="Engineering partners for ambitious businesses — building what's next since 2013."
        breadcrumbs={[{ label: "About" }]}
        cta={{ label: "Talk to us", href: "/contact", icon: <ArrowRight className="h-4 w-4" /> }}
      />

      {/* Intro + Manifesto */}
      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              We are committed to creating the technologies and products of tomorrow.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Redcloud Systems is a boutique firm committed to creating high-impact digital assets
              that run on-premise, in the cloud, and on mobile devices. Our mission is to help you
              bring your ideas to life through visionary design, cutting-edge development, and
              end-to-end support.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              We make ideas come to life through the greatest consumer and business enabler of this
              century — technology. We transform innovative concepts into tangible, functional
              solutions that solve real-world challenges.
            </p>
          </div>
          <div className="flex items-start justify-center lg:justify-end">
            <div className="rounded-2xl border-2 border-brand-600 bg-brand-50 p-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
                The Manifesto
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink-500">
                The New Era
              </p>
              <p className="mt-4 font-display text-7xl font-bold text-brand-600">2024</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                A new chapter in technology-driven business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Dark Banner */}
      <section className="overflow-hidden bg-accent-950">
        <div className="container grid items-center gap-0 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-full">
            <Image
              src={`${r2}/2024/07/about-campaign-5.jpg`}
              alt="Redcloud Systems team"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="px-8 py-16 lg:px-14 lg:py-20">
            <p className="eyebrow !text-brand-300">Together We Rise</p>
            <h2 className="mt-4 text-balance text-3xl !text-cream sm:text-4xl lg:text-5xl">
              We Help Businesses Grow 10x Through The Smartest Combinations And Boldest Strokes Of
              New Century Technology.
            </h2>
            <p className="mt-6 leading-relaxed text-ink-300">
              By leveraging technology — the most powerful tool of this century — we enable both
              consumers and businesses to achieve their goals with efficiency, scalability, and
              precision. Our mission is to bridge the gap between vision and reality, creating
              impactful digital experiences that drive growth and innovation.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Growth and Success */}
      <section className="container py-20">
        <p className="eyebrow text-center">Software Engineering for Everyone</p>
        <h2 className="mt-4 text-center text-3xl sm:text-4xl">Customer Growth and Success</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {successCards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-ink-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach / Pillars */}
      <section className="bg-sand-100 py-20">
        <div className="container grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Software development transforms industries.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-600">
              From{" "}
              <strong>Real Estate</strong> to <strong>Healthcare</strong>, <strong>Nonprofits</strong>{" "}
              to <strong>Manufacturing</strong> — we deliver tailored solutions that meet unique
              challenges. Partnerships with leading platforms like{" "}
              <strong>AWS, Salesforce, Google Cloud</strong>, and <strong>Jira</strong> provide
              access to best-in-class technologies, ensuring seamless scalability and robust
              infrastructure.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              These collaborations deliver tailored, integrated systems that foster growth,
              efficiency, and exceptional customer experiences across every industry we serve.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-ink-200 bg-white p-6 shadow-soft"
              >
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
                <h3 className="mt-3 font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redcloud History */}
      <section className="container py-20">
        <p className="eyebrow text-center">Our Story</p>
        <h2 className="mt-4 text-center text-3xl sm:text-4xl">Redcloud History</h2>
        <div className="mt-14 space-y-0 divide-y divide-ink-200">
          {history.map((item) => (
            <div
              key={item.year}
              className="grid gap-8 py-12 lg:grid-cols-3 lg:gap-14"
            >
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-600">{item.body}</p>
              </div>
              <div className="flex items-center lg:justify-end">
                <div className="text-right">
                  <p className="font-display text-7xl font-bold text-brand-600">{item.year}</p>
                  {item.label && (
                    <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-ink-500">
                      {item.label}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us In Our Mission */}
      <section className="bg-accent-950 py-20">
        <div className="container max-w-2xl text-center">
          <p className="eyebrow justify-center !text-brand-300">Get Involved</p>
          <h2 className="mt-4 text-3xl !text-cream sm:text-4xl">Join Us In Our Mission</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-300">
            Together We Rise: Software Engineering for Everyone. Send us a message and let&apos;s
            build something great.
          </p>
          <LeadForm
            formKey="about-mission"
            tone="dark"
            className="mt-10 text-left"
            submitLabel="Join the Mission"
            fields={[
              { name: "first_name", label: "First name", required: true },
              { name: "last_name", label: "Last name", required: true },
              { name: "email", label: "Email address", type: "email", required: true, full: true },
              { name: "message", label: "Your message", type: "textarea", required: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
