export interface ServiceInclude {
  label: string;
  href?: string;
}

export interface ServiceCatalogItem {
  id: string;
  icon: string;
  title: string;
  excerpt: string;
  description: string;
  includes: ServiceInclude[];
  href: string;
  accent: string;
}

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    id: "ai-transformation",
    icon: "Bot",
    title: "AI Transformation",
    excerpt: "Intelligent automation, digital workers, and AI-driven decision making.",
    description:
      "Design, build, and deploy AI agents and automation that connect to your existing systems — scaling output without scaling headcount.",
    includes: [
      { label: "AI Workforce", href: "/landing/ai-workforce" },
      { label: "AI Operations", href: "/landing/ai-operations" },
      { label: "AI Knowledge Systems", href: "/landing/ai-knowledge" },
      { label: "Business Automation", href: "/landing/automation" },
      { label: "AI Voice Agents", href: "/landing/ai-voice" },
      { label: "AI Customer Service", href: "/landing/ai-customer-service" },
    ],
    href: "/services/ai-transformation",
    accent: "bg-accent-600",
  },
  {
    id: "compliance-security",
    icon: "Shield",
    title: "Compliance & Security",
    excerpt: "Reduce risk, improve governance, and prepare for audits and regulations.",
    description:
      "HIPAA, SOC 2, ISO 27001, PCI DSS, NIST, CMMC — plus security assessments and AI-powered compliance monitoring.",
    includes: [
      { label: "HIPAA Readiness", href: "/compliance/hipaa" },
      { label: "SOC 2 Readiness", href: "/compliance/soc2" },
      { label: "ISO 27001", href: "/compliance/iso27001" },
      { label: "PCI DSS", href: "/compliance/pci-dss" },
      { label: "NIST Framework", href: "/compliance/nist" },
      { label: "CMMC Readiness", href: "/compliance/cmmc" },
      { label: "Compliance Automation", href: "/landing/ai-compliance" },
    ],
    href: "/services/compliance-security",
    accent: "bg-accent-800",
  },
  {
    id: "cloud-infrastructure",
    icon: "Cloud",
    title: "Cloud & Infrastructure",
    excerpt: "Cloud migration, cost optimization, and infrastructure that scales reliably.",
    description:
      "Right-size cloud spend, modernize legacy infrastructure, and build platforms that perform under real-world load.",
    includes: [
      { label: "Cloud Cost Reduction", href: "/landing/cloud-cost" },
      { label: "Cloud Migration" },
      { label: "Infrastructure Optimization" },
      { label: "Legacy Modernization", href: "/landing/legacy" },
      { label: "Performance Optimization", href: "/landing/performance" },
      { label: "Free Digital Audit", href: "/landing/free-audit" },
    ],
    href: "/services/cloud-infrastructure",
    accent: "bg-accent-700",
  },
  {
    id: "custom-software-development",
    icon: "Code2",
    title: "Custom Software Development",
    excerpt: "Bespoke web, mobile, and platform engineering built around your business.",
    description:
      "From discovery through launch — web apps, mobile products, APIs, and legacy modernization with modern stacks and CI/CD from day one.",
    includes: [
      { label: "Web Application Development", href: "/services/custom-software-development" },
      { label: "Mobile Application Development", href: "/services/custom-software-development" },
      { label: "API Development & Integration", href: "/services/custom-software-development" },
      { label: "Legacy Software Modernization", href: "/services/custom-software-development" },
    ],
    href: "/services/custom-software-development",
    accent: "bg-brand-600",
  },
  {
    id: "erp-business-systems",
    icon: "Boxes",
    title: "ERP & Business Systems",
    excerpt: "Implement, integrate, and optimize ERP and core business platforms.",
    description:
      "Platform selection, rollout, data migration, and integration — so ERP works the way your business actually runs.",
    includes: [
      { label: "Consultation & Needs Assessment", href: "/services/erp-implementation" },
      { label: "System Design & Customization", href: "/services/erp-implementation" },
      { label: "Deployment & Data Migration", href: "/services/erp-implementation" },
      { label: "Training & Ongoing Optimization", href: "/services/erp-implementation" },
    ],
    href: "/services/erp-implementation",
    accent: "bg-brand-700",
  },
  {
    id: "executive-intelligence",
    icon: "Eye",
    title: "Executive Intelligence",
    excerpt: "Real-time insights, market awareness, and strategic intelligence for leadership.",
    description:
      "Competitive monitoring, regulatory tracking, and AI research agents that surface what leadership needs to know — before competitors do.",
    includes: [
      { label: "Executive Intelligence Platform", href: "/landing/executive-intelligence" },
      { label: "Competitive Intelligence" },
      { label: "Market Monitoring" },
      { label: "Regulatory Intelligence", href: "/landing/ai-compliance" },
      { label: "AI Research Agents", href: "/landing/ai-knowledge" },
      { label: "Executive Briefings" },
    ],
    href: "/services/executive-intelligence",
    accent: "bg-accent-700",
  },
  {
    id: "digital-marketing",
    icon: "Megaphone",
    title: "Digital Marketing",
    excerpt: "Performance marketing that compounds with your product and revenue goals.",
    description:
      "SEO, paid acquisition, content, and analytics — tied back to leads, conversion, and measurable ROI.",
    includes: [
      { label: "Search Engine Optimization (SEO)", href: "/services/digital-marketing" },
      { label: "Pay-Per-Click (PPC) Advertising", href: "/services/digital-marketing" },
      { label: "Social Media Marketing", href: "/services/digital-marketing" },
      { label: "Email Marketing & Analytics", href: "/services/digital-marketing" },
    ],
    href: "/services/digital-marketing",
    accent: "bg-brand-500",
  },
  {
    id: "managed-services",
    icon: "LifeBuoy",
    title: "Managed Services",
    excerpt: "Proactive monitoring, maintenance, and ongoing support after launch.",
    description:
      "SLA-backed support, security patching, performance monitoring, and continuous improvement — so your systems stay healthy long after go-live.",
    includes: [
      { label: "Proactive Monitoring", href: "/services/ongoing-support" },
      { label: "Maintenance & Updates", href: "/services/ongoing-support" },
      { label: "Help Desk & Support", href: "/services/ongoing-support" },
      { label: "Website Care & Growth", href: "/landing/care-growth" },
    ],
    href: "/services/ongoing-support",
    accent: "bg-green-600",
  },
];
