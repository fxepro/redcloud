import Image from "next/image";
import { SectionHeading } from "./section";

const R2 = "https://pub-c1b896623cec4178be9c45516dbfacfb.r2.dev/uploads/2024/11";

const cards = [
  {
    title: "Accelerated Time-to-Market",
    body: "With our streamlined processes and expert team, clients launch products faster, staying ahead of competitors.",
    image: `${R2}/kvistholt-photography-oZPwn40zCK4-unsplash.jpg`,
  },
  {
    title: "Enhanced Operational Efficiency",
    body: "We use task automation and improved workflow, allowing clients to focus on core business activities.",
    image: `${R2}/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg`,
  },
  {
    title: "Improved Scalability and Flexibility",
    body: "Our solutions are designed to grow with the client’s business, making it easy to adapt to changing demands.",
    image: `${R2}/johannes-plenio-FZpCcPss9to-unsplash.jpg`,
  },
  {
    title: "Stronger Security and Compliance",
    body: "Clients benefit from robust security practices, ensuring applications meet industry standards.",
    image: `${R2}/ales-nesetril-Im7lZjxeLhg-unsplash.jpg`,
  },
];

export function CustomerGrowth() {
  return (
    <section className="bg-sand-100 section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Why Redcloud"
          title="Customer growth and success"
          description="What our clients gain when they build with us."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
