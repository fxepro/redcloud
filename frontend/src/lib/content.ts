import type {
  AiSolution,
  Industry,
  NavItem,
  PageContent,
  PortfolioItem,
  Post,
  Service,
} from "./types";
import wp from "./wp-content.json";
import industryData from "./industries-data.json";
import aiData from "./ai-data.json";

// Real content extracted from the legacy WordPress site (Fusion shortcodes stripped).
const wpPosts = wp.posts as Post[];
const wpPortfolio = wp.portfolio as PortfolioItem[];
const wpPages = wp.pages as Record<string, PageContent>;

export function getPageContent(slug: string): PageContent | undefined {
  return wpPages[slug];
}

export const site = {
  name: "Redcloud Systems",
  tagline: "Custom software, AI automation, and engineering that ships.",
  description:
    "Redcloud Systems is a corporate software engineering company building custom software, AI automation, and digital products for businesses across industries.",
  email: "hello@redcloudsystems.com",
  phone: "+1 (000) 000-0000",
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: "Code2",
    excerpt:
      "Bespoke web, mobile, and platform engineering built around your business — not a template.",
    body: [
      "We design and build production software end to end: discovery, architecture, UI/UX, engineering, QA, and launch.",
      "Our teams work in modern stacks — TypeScript/React, Next.js, Laravel, Python — with CI/CD, automated tests, and observability baked in from day one.",
    ],
    features: [
      "Web & SaaS platforms",
      "Mobile (iOS / Android)",
      "API & systems integration",
      "Cloud-native architecture",
    ],
    offerings: [
      { title: "Web Application Development", description: "Responsive, scalable, and secure web-based applications.", bullets: ["Custom e-commerce platforms", "Business management dashboards", "SaaS platforms"] },
      { title: "Mobile Application Development", description: "Tailored apps for Android, iOS, and cross-platform use.", bullets: ["Productivity apps", "On-demand service platforms", "Enterprise mobile solutions"] },
      { title: "API Development & Integration", description: "Connect software systems and add functionality via APIs.", bullets: ["Payment gateways (Stripe, PayPal)", "Social media integrations", "Google Maps, AWS & third-party services"] },
      { title: "Legacy Software Modernization", description: "Upgrade outdated systems for performance, scale, and security.", bullets: ["Migrate on-premise systems to the cloud", "Replace legacy databases", "Re-platform without losing functionality"] },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    icon: "ClipboardList",
    excerpt:
      "Senior delivery leads who keep scope, budget, and timeline honest.",
    body: [
      "Every engagement gets a dedicated delivery lead and a transparent plan with clear milestones and weekly demos.",
      "We run agile sprints with you in the loop — no black boxes, no surprise invoices.",
    ],
    features: ["Agile delivery", "Milestone roadmaps", "Weekly demos", "Risk management"],
    offerings: [
      { title: "Project Planning & Scheduling", description: "Detailed roadmaps, timelines, and schedules that hit budget and time targets.", bullets: ["Goals, milestones & deliverables", "Gantt charts & resource plans", "Risk assessment & mitigation"] },
      { title: "Resource Management", description: "Optimize people, budget, and materials for project success.", bullets: ["Budget tracking & cost optimization", "Resource allocation planning", "Avoid over- and under-utilization"] },
      { title: "Monitoring & Reporting", description: "Track progress, performance, and KPIs with clear stakeholder updates.", bullets: ["Progress reports & dashboards", "Stakeholder status meetings", "Earned value analysis (EVA)"] },
      { title: "Risk & Issue Management", description: "Identify and resolve risks before they impact outcomes.", bullets: ["Risk register with contingencies", "Timely issue resolution", "Risk impact analysis"] },
    ],
  },
  {
    slug: "ongoing-support",
    title: "Managed Services",
    icon: "LifeBuoy",
    excerpt: "Proactive monitoring, maintenance, and ongoing support after launch.",
    body: [
      "Software is never done. We offer SLA-backed support, proactive monitoring, security patching, and a roadmap for continuous improvement.",
    ],
    features: ["SLA support", "24/7 monitoring", "Security patching", "Feature iteration"],
    offerings: [
      { title: "Proactive System Monitoring", description: "Catch and resolve issues before they impact operations.", bullets: ["Real-time performance tracking", "Automated anomaly & downtime alerts", "Periodic health checks & diagnostics"] },
      { title: "Maintenance & Updates", description: "Keep your software current, fast, and secure.", bullets: ["Security patches & updates", "Codebase optimization", "Database maintenance"] },
      { title: "Help Desk & Technical Support", description: "Prompt assistance for troubleshooting and fixes.", bullets: ["Ticket-based bug resolution", "Configuration & integration help", "Step-by-step user guidance"] },
      { title: "Website Care & Growth", description: "Ongoing website support, updates, and growth optimization.", bullets: ["Content updates and publishing", "Performance and SEO monitoring", "Security and uptime management"], href: "/landing/care-growth" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "Megaphone",
    excerpt: "Performance marketing and SEO that compounds with your product.",
    body: [
      "We pair engineering with growth — technical SEO, content, paid acquisition, and analytics that tie spend to revenue.",
    ],
    features: ["Technical SEO", "Paid acquisition", "Content strategy", "Analytics & attribution"],
    offerings: [
      { title: "Search Engine Optimization (SEO)", description: "Improve visibility and rankings to attract organic traffic.", bullets: ["Keyword research & on-page optimization", "Technical SEO audits & fixes", "Backlink building & competitor analysis"] },
      { title: "Pay-Per-Click (PPC) Advertising", description: "Targeted ad campaigns that maximize ROI.", bullets: ["Google & Bing Ads campaigns", "Social media ad campaigns", "A/B testing & conversion optimization"] },
      { title: "Social Media Marketing", description: "Build and engage your audience across platforms.", bullets: ["Tailored content strategies", "Influencer collaborations & contests", "Brand monitoring & feedback"] },
      { title: "Email Marketing & Analytics", description: "Nurture leads and measure what actually works.", bullets: ["Automated email sequences", "Audience segmentation", "Open, CTR & conversion reporting"] },
    ],
  },
  {
    slug: "erp-implementation",
    title: "ERP & Business Systems",
    icon: "Boxes",
    excerpt: "Implement and integrate ERP systems without the chaos.",
    body: [
      "From selection to rollout, we implement ERP platforms and integrate them with your existing tools so data flows cleanly across the business.",
    ],
    features: ["Platform selection", "Data migration", "Custom modules", "Staff training"],
    offerings: [
      { title: "Consultation & Needs Assessment", description: "Identify requirements and design a tailored ERP strategy.", bullets: ["Gap analysis of business processes", "Platform selection (SAP, Oracle, MS Dynamics)", "Phased implementation roadmap"] },
      { title: "System Design & Customization", description: "Configure ERP to match your workflows and goals.", bullets: ["Tailor finance, HR, inventory & CRM modules", "Custom dashboards & reports", "Role-based access controls"] },
      { title: "Deployment & Data Migration", description: "Go live with your data intact and integrated.", bullets: ["Cloud or on-premise installation", "Migrate historical data from legacy systems", "Integrate Salesforce, QuickBooks via APIs"] },
      { title: "Training & Ongoing Optimization", description: "Drive adoption and keep improving post-launch.", bullets: ["Role-specific training & manuals", "Post-deployment monitoring", "Add or scale modules as you grow"] },
    ],
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting",
    icon: "Compass",
    excerpt: "Architecture reviews, audits, and fractional CTO guidance.",
    body: [
      "Get senior engineering judgment on demand — architecture reviews, security audits, cloud cost optimization, and technology strategy.",
    ],
    features: ["Architecture review", "Security audit", "Cloud optimization", "Tech strategy"],
    offerings: [
      { title: "IT Infrastructure Optimization", description: "Find inefficiencies and improve scale and performance.", bullets: ["Server & storage utilization analysis", "Cloud migration strategy", "Disaster recovery & continuity planning"] },
      { title: "Technology Strategy Development", description: "A technology roadmap aligned to your business goals.", bullets: ["Digital transformation strategy", "Align tech investments to long-term goals", "IT initiative budgeting"] },
      { title: "Software Selection & Implementation", description: "Identify, evaluate, and roll out the right tools.", bullets: ["CRM, ERP, BI & analytics recommendations", "Cost-benefit analysis", "Vendor evaluation & negotiation"] },
      { title: "Emerging Technology Consulting", description: "Adopt AI, blockchain, and IoT for competitive advantage.", bullets: ["AI-driven automation solutions", "IoT integration for smart operations", "Blockchain use-case evaluation"] },
    ],
  },
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    icon: "Bot",
    excerpt: "Intelligent automation, digital workers, and AI-driven decision making.",
    body: [
      "We design, build, and deploy AI agents and automation that connect to your existing systems — planning multi-step tasks, executing across platforms, and running around the clock.",
      "From agentic workflows and RAG knowledge systems to voice agents and customer service automation, we help you scale output without scaling headcount.",
    ],
    features: [
      "Connects to your existing tools",
      "Multi-step autonomous workflows",
      "24/7 operation with guardrails",
      "Deployed in weeks, not months",
    ],
    offerings: [
      { title: "AI Workforce", description: "Digital workers that handle repetitive, high-volume tasks end to end.", bullets: ["Task automation across departments", "Human-in-the-loop approvals", "Measurable productivity gains"], href: "/landing/ai-workforce" },
      { title: "AI Operations Center", description: "Ask questions of your business data and get answers in seconds.", bullets: ["Unified data across systems", "Natural language queries", "Real-time operational insights"], href: "/landing/ai-operations" },
      { title: "AI Knowledge Systems", description: "Domain-specific assistants grounded in your own documents and data.", bullets: ["RAG over internal knowledge bases", "Private, secure deployments", "Instant answers for staff and customers"], href: "/landing/ai-knowledge" },
      { title: "AI Voice & Customer Service", description: "AI agents that answer calls, qualify leads, and resolve support requests.", bullets: ["24/7 call handling", "CRM and ticketing integration", "Consistent, on-brand responses"], href: "/landing/ai-voice" },
    ],
  },
  {
    slug: "compliance-security",
    title: "Compliance & Security",
    icon: "Shield",
    excerpt: "Reduce risk, improve governance, and prepare for audits and regulations.",
    body: [
      "Healthcare, finance, defense, and SaaS companies face growing pressure to demonstrate security maturity and regulatory readiness. We help you close gaps before an audit or breach forces your hand.",
      "From HIPAA and SOC 2 to ISO 27001, PCI DSS, NIST, and CMMC — we implement the technical and operational controls your organization needs, plus AI-powered compliance monitoring.",
    ],
    features: [
      "Gap assessments & remediation roadmaps",
      "Policy and documentation support",
      "Security controls implementation",
      "Ongoing compliance monitoring",
    ],
    offerings: [
      { title: "HIPAA Readiness", description: "Protect patient data and prepare for healthcare audits.", bullets: ["Security risk analysis", "Access controls & MFA", "HIPAA-compliant email"], href: "/compliance/hipaa" },
      { title: "SOC 2 & ISO 27001", description: "Demonstrate security maturity to enterprise customers.", bullets: ["Control gap assessments", "Policy development", "Audit preparation"], href: "/compliance/soc2" },
      { title: "PCI DSS & NIST", description: "Protect payment data and apply security best practices.", bullets: ["CDE scoping & segmentation", "Vulnerability management", "Risk treatment planning"], href: "/compliance/pci-dss" },
      { title: "Compliance Automation", description: "Never miss a regulatory change with AI-powered monitoring.", bullets: ["Automated regulatory alerts", "Policy gap detection", "Continuous compliance tracking"], href: "/landing/ai-compliance" },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    excerpt: "Cloud migration, cost optimization, and infrastructure that scales reliably.",
    body: [
      "Cloud spend grows faster than value when architecture isn't right-sized. We help you reduce costs, migrate confidently, and build infrastructure that performs under real-world load.",
      "From AWS cost optimization and legacy modernization to performance tuning and free digital audits — we make your infrastructure a competitive advantage, not a liability.",
    ],
    features: [
      "Cloud cost reduction",
      "Legacy-to-cloud migration",
      "Performance optimization",
      "Infrastructure monitoring",
    ],
    offerings: [
      { title: "Cloud Cost Reduction", description: "Cut AWS and cloud spend without sacrificing performance.", bullets: ["Right-sizing & reserved instances", "Unused resource cleanup", "Ongoing cost monitoring"], href: "/landing/cloud-cost" },
      { title: "Legacy Modernization", description: "Upgrade outdated systems for performance, scale, and security.", bullets: ["Cloud migration planning", "Database modernization", "Re-platform without losing functionality"], href: "/landing/legacy" },
      { title: "Performance Optimization", description: "Make applications faster, more reliable, and ready to scale.", bullets: ["Load testing & tuning", "CDN and caching strategy", "Database performance optimization"], href: "/landing/performance" },
      { title: "Free Digital Audit", description: "Identify gaps in security, performance, and infrastructure.", bullets: ["Security vulnerability scan", "Performance baseline", "Prioritized recommendations"], href: "/landing/free-audit" },
    ],
  },
  {
    slug: "executive-intelligence",
    title: "Executive Intelligence",
    icon: "Eye",
    excerpt: "Real-time insights, market awareness, and strategic intelligence for leadership.",
    body: [
      "Leadership teams need to know what's changing in their market, regulatory environment, and competitive landscape — before it shows up in quarterly results.",
      "We build executive intelligence platforms powered by AI research agents, competitive monitoring, and regulatory tracking that deliver briefings leadership can act on.",
    ],
    features: [
      "Competitive & market monitoring",
      "Regulatory intelligence",
      "AI-powered research agents",
      "Executive-ready briefings",
    ],
    offerings: [
      { title: "Executive Intelligence Platform", description: "A unified view of market, competitive, and regulatory signals.", bullets: ["Daily and weekly briefings", "Custom alert thresholds", "Leadership dashboard"], href: "/landing/executive-intelligence" },
      { title: "Competitive Intelligence", description: "Track competitor moves, pricing, and product launches.", bullets: ["Automated competitor monitoring", "Pricing and positioning analysis", "Win/loss intelligence"] },
      { title: "Regulatory Intelligence", description: "Stay ahead of regulatory changes that affect your business.", bullets: ["Automated regulatory tracking", "Impact assessment", "Compliance deadline alerts"], href: "/landing/ai-compliance" },
      { title: "AI Research Agents", description: "Agents that research, summarize, and deliver insights on demand.", bullets: ["Natural language research queries", "Source-cited summaries", "Grounded in your industry context"], href: "/landing/ai-knowledge" },
    ],
  },
];

export const industries: Industry[] = [
  { slug: "not-for-profits", title: "Not For Profits", icon: "HeartHandshake", excerpt: "Donor platforms, CRM, and automation for mission-driven teams.", body: ["We help nonprofits do more with less — donor management, fundraising platforms, and workflow automation."] },
  { slug: "automotive", title: "Automotive", icon: "Car", excerpt: "Dealer, fleet, and connected-vehicle software.", body: ["Inventory, DMS integrations, and customer experience tools for the automotive sector."] },
  { slug: "sports-management", title: "Sports Management", icon: "Trophy", excerpt: "Athlete, club, and event management platforms.", body: ["Scheduling, ticketing, and performance platforms for sports organizations."] },
  { slug: "real-estate", title: "Real Estate", icon: "Building2", excerpt: "Listing portals, CRM, and transaction tooling.", body: ["Property platforms, lead routing, and automation for brokerages and proptech."] },
  { slug: "startups", title: "Startups", icon: "Rocket", excerpt: "MVPs and scale-ups from idea to funding and beyond.", body: ["We build investable MVPs fast and scale them as you grow."] },
  { slug: "healthcare", title: "Healthcare", icon: "Stethoscope", excerpt: "Compliant, secure healthcare and telehealth software.", body: ["HIPAA-aware patient platforms, telehealth, and clinical workflow tools."] },
  { slug: "manufacturing", title: "Manufacturing", icon: "Factory", excerpt: "MES, IoT, and supply-chain digitization.", body: ["Connect the factory floor with software that streamlines production and supply chain."] },
  { slug: "education", title: "Education", icon: "GraduationCap", excerpt: "LMS, edtech, and student management systems.", body: ["Learning platforms and administration tools for schools and edtech companies."] },
  { slug: "entertainment", title: "Entertainment", icon: "Clapperboard", excerpt: "Streaming, ticketing, and media platforms.", body: ["Content, streaming, and audience platforms for media and entertainment."] },
  { slug: "hospitality", title: "Hospitality", icon: "UtensilsCrossed", excerpt: "Booking, POS, and guest-experience systems.", body: ["Reservations, point of sale, and guest engagement for hospitality brands."] },
  { slug: "logistics", title: "Logistics", icon: "Truck", excerpt: "TMS, tracking, and freight automation.", body: ["Shipment tracking, route optimization, and logistics automation."] },
  { slug: "finance", title: "Finance", icon: "Landmark", excerpt: "Fintech, payments, and compliance-grade systems.", body: ["Secure financial platforms, payments, and reporting built for compliance."] },
];

export const aiSolutions: AiSolution[] = [
  { slug: "real-estate-ai", title: "Real Estate AI", excerpt: "AI agents that qualify leads, schedule showings, and draft listings.", outcomes: ["24/7 lead qualification", "Automated showing scheduling", "AI-generated listings"] },
  { slug: "non-for-profit-ai", title: "Non-Profit AI", excerpt: "Automate donor outreach, grant research, and reporting.", outcomes: ["Donor segmentation", "Grant discovery", "Impact reporting"] },
  { slug: "automotive-ai", title: "Automotive AI", excerpt: "AI for service scheduling, pricing, and customer support.", outcomes: ["Service booking bots", "Dynamic pricing", "Support automation"] },
  { slug: "healthcare-ai", title: "Healthcare AI", excerpt: "Patient intake, triage, and documentation automation.", outcomes: ["Automated intake", "Triage assistance", "Clinical note drafting"] },
  { slug: "manufacturing-ai", title: "Manufacturing AI", excerpt: "Predictive maintenance and quality inspection.", outcomes: ["Predictive maintenance", "Visual QA", "Demand forecasting"] },
  { slug: "sports-management-ai", title: "Sports Management AI", excerpt: "Performance analytics and fan engagement automation.", outcomes: ["Performance insights", "Fan engagement", "Scheduling optimization"] },
  { slug: "start-ups-ai", title: "Startups AI", excerpt: "Ship AI features fast without a research team.", outcomes: ["AI MVP in weeks", "RAG & agents", "Cost-aware models"] },
  { slug: "education-ai", title: "Education AI", excerpt: "Tutoring agents, grading, and content generation.", outcomes: ["AI tutoring", "Automated grading", "Curriculum generation"] },
  { slug: "entertainment-ai", title: "Entertainment AI", excerpt: "Content recommendations and production automation.", outcomes: ["Personalization", "Content tagging", "Production tooling"] },
  { slug: "hospitality-ai", title: "Hospitality AI", excerpt: "Concierge bots and revenue optimization.", outcomes: ["AI concierge", "Revenue management", "Review automation"] },
  { slug: "finance-ai", title: "Finance AI", excerpt: "Fraud detection, underwriting, and document processing.", outcomes: ["Fraud detection", "Automated underwriting", "Document AI"] },
  { slug: "logistics-ai", title: "Logistics AI", excerpt: "Route optimization and shipment exception handling.", outcomes: ["Route optimization", "Exception handling", "Demand planning"] },
];

// Verified Unsplash hero image helper.
const ux = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

// Service banners + hero images.
const serviceMeta: Record<string, { tagline: string; subtext: string; img: string }> = {
  "custom-software-development": { tagline: "Custom software, engineered to ship and built to last.", subtext: "From web and mobile to APIs and legacy modernization, we design and build software around your business — not a template.", img: "1461749280684-dccba630e2f6" },
  "project-management": { tagline: "Senior delivery leadership that keeps projects on track.", subtext: "Transparent planning, weekly demos, and disciplined execution that protect your scope, budget, and timeline.", img: "1552664730-d307ca884978" },
  "ongoing-support": { tagline: "Keep your systems fast, secure, and always on.", subtext: "SLA-backed monitoring, maintenance, and enhancements that keep your platforms healthy long after launch.", img: "1581092921461-eab62e97a780" },
  "digital-marketing": { tagline: "Performance marketing that compounds with your product.", subtext: "SEO, paid acquisition, content, and analytics that tie every dollar of spend back to revenue.", img: "1460925895917-afdab827c52f" },
  "erp-implementation": { tagline: "Implement and integrate ERP — without the chaos.", subtext: "From platform selection to rollout and training, we make ERP work the way your business actually runs.", img: "1551288049-bebda4e38f71" },
  "technical-consulting": { tagline: "Senior engineering judgment, on demand.", subtext: "Architecture reviews, security audits, cloud optimization, and technology strategy from people who've shipped.", img: "1521737604893-d14cc237f11d" },
  "ai-transformation": { tagline: "Scale operations with intelligent automation and digital workers.", subtext: "AI agents, knowledge systems, and automation built into the tools you already use — deployed in weeks, not months.", img: "1620712943543-bcc4688e7485" },
  "compliance-security": { tagline: "Reduce risk and prepare for audits with confidence.", subtext: "HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, CMMC — plus security assessments and AI-powered compliance monitoring.", img: "1563013544-824ae1b704d3" },
  "cloud-infrastructure": { tagline: "Right-size cloud spend and build infrastructure that scales.", subtext: "Cost optimization, migration, legacy modernization, and performance tuning across AWS, Azure, and Google Cloud.", img: "1504639725590-34d0984388bd" },
  "executive-intelligence": { tagline: "Strategic intelligence leadership can act on.", subtext: "Competitive monitoring, regulatory tracking, and AI research agents that surface what matters before competitors do.", img: "1551288049-bebda4e38f71" },
};

// Attach real legacy page copy + banners to the structured service/AI definitions.
for (const s of services) {
  s.html = wpPages[s.slug]?.html;
  const m = serviceMeta[s.slug];
  if (m) {
    s.tagline = m.tagline;
    s.subtext = m.subtext;
    s.heroImage = ux(m.img);
  }
}
// AI vertical data: parsed use cases + hero images (reuse verified industry photos).
const aiImg: Record<string, string> = {
  "real-estate-ai": "1560518883-ce09059eeffa",
  "non-for-profit-ai": "1593113598332-cd288d649433",
  "automotive-ai": "1492144534655-ae79c964c9d7",
  "healthcare-ai": "1576091160550-2173dba999ef",
  "manufacturing-ai": "1565793298595-6a879b1d9492",
  "sports-management-ai": "1461896836934-ffe607ba8211",
  "start-ups-ai": "1522071820081-009f0129c71c",
  "education-ai": "1503676260728-1c00da094a0b",
  "entertainment-ai": "1489599849927-2ee91cede3ba",
  "hospitality-ai": "1566073771259-6a8506099945",
  "finance-ai": "1554224155-6726b3ff858f",
  "logistics-ai": "1586528116311-ad8dd3c8310d",
};
type AiData = { useCases: { category: string; tools: string[]; capabilities: string[] }[] };
const aidata = aiData as Record<string, AiData>;

for (const a of aiSolutions) {
  a.html = wpPages[a.slug]?.html;
  a.tagline = a.excerpt;
  const nice = a.title.replace(/ AI$/i, "");
  a.subtext = `The platforms, agents, and automations we deploy to bring AI to ${nice.toLowerCase()}.`;
  if (aiImg[a.slug]) a.heroImage = ux(aiImg[a.slug]);
  if (aidata[a.slug]) a.useCases = aidata[a.slug].useCases;
}

const industryMeta: Record<string, { tagline: string; subtext: string; img: string }> = {
  "not-for-profits": { tagline: "Technology that amplifies your mission — not your overhead.", subtext: "From donor management to impact reporting, we help mission-driven teams do more with less.", img: "1593113598332-cd288d649433" },
  automotive: { tagline: "Driving success in the automotive industry with advanced technical solutions.", subtext: "From dealership management to predictive maintenance, we deliver software that boosts operational efficiency and customer satisfaction.", img: "1492144534655-ae79c964c9d7" },
  "sports-management": { tagline: "Software that keeps athletes, clubs, and fans in sync.", subtext: "From scheduling to fan engagement, we build platforms that power modern sports organizations.", img: "1461896836934-ffe607ba8211" },
  "real-estate": { tagline: "Close more deals with software built for real estate.", subtext: "From listing portals to transaction tooling, we streamline how properties are marketed and sold.", img: "1560518883-ce09059eeffa" },
  startups: { tagline: "From idea to investable product — fast.", subtext: "We build MVPs that raise rounds and scale into full platforms as you grow.", img: "1522071820081-009f0129c71c" },
  healthcare: { tagline: "Secure, compliant software for modern healthcare.", subtext: "From patient intake to telehealth, we build tools that improve care and clinical efficiency.", img: "1576091160550-2173dba999ef" },
  manufacturing: { tagline: "Connect the factory floor to the cloud.", subtext: "From MES to IoT and supply chain, we digitize manufacturing for speed and visibility.", img: "1565793298595-6a879b1d9492" },
  education: { tagline: "Learning platforms that scale with your institution.", subtext: "From LMS to student management, we build edtech that engages learners and simplifies administration.", img: "1503676260728-1c00da094a0b" },
  entertainment: { tagline: "Platforms that captivate audiences at scale.", subtext: "From streaming to ticketing, we build the technology behind modern media and entertainment.", img: "1489599849927-2ee91cede3ba" },
  hospitality: { tagline: "Delight guests from booking to checkout.", subtext: "From reservations to point of sale, we build software that elevates the guest experience.", img: "1566073771259-6a8506099945" },
  logistics: { tagline: "Move freight smarter with connected software.", subtext: "From tracking to route optimization, we automate logistics for speed and reliability.", img: "1586528116311-ad8dd3c8310d" },
  finance: { tagline: "Compliance-grade software for financial services.", subtext: "From payments to underwriting, we build secure fintech that earns trust.", img: "1554224155-6726b3ff858f" },
};

type IData = {
  needs: string[];
  intro: string;
  stats: { value: string; label: string }[];
  coreServices: { title: string; description: string; bullets: string[] }[];
};
const idata = industryData as Record<string, IData>;

for (const i of industries) {
  i.html = wpPages[i.slug]?.html;
  const m = industryMeta[i.slug];
  if (m) {
    i.tagline = m.tagline;
    i.subtext = m.subtext;
    i.heroImage = ux(m.img);
  }
  const d = idata[i.slug];
  if (d) {
    i.needs = d.needs;
    i.intro = d.intro;
    i.stats = d.stats;
    i.coreServices = d.coreServices;
  }
}

export const portfolio: PortfolioItem[] = wpPortfolio;

export const portfolioCategories = [
  "All",
  ...Array.from(new Set(wpPortfolio.map((p) => p.category))).sort(),
];

export const posts: Post[] = wpPosts;

export const nav: NavItem[] = [
  {
    title: "Services",
    href: "/services",
    children: services.map((s) => ({ title: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: "Industries",
    href: "/industries",
    children: industries.map((i) => ({ title: i.title, href: `/industries/${i.slug}` })),
  },
  {
    title: "AI Solutions",
    href: "/ai-solutions",
    children: aiSolutions.map((a) => ({ title: a.title, href: `/ai-solutions/${a.slug}` })),
  },
  { title: "AI Development", href: "/ai-development" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];
