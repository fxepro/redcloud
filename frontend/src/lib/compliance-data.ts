import type { ServiceOffering } from "./types";

export interface ComplianceProgram {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  subtext: string;
  heroImage: string;
  whoWeHelp: string;
  challenges: string[];
  services: ServiceOffering[];
  benefits: string[];
  ctaLabel: string;
}

export const compliancePrograms: ComplianceProgram[] = [
  {
    slug: "hipaa",
    icon: "HeartPulse",
    title: "HIPAA Readiness",
    tagline: "Protect patient data, reduce risk, and strengthen your security posture.",
    subtext:
      "We help healthcare providers, clinics, telehealth organizations, medical billing companies, and health-tech vendors implement the technical and operational controls needed to support HIPAA readiness.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    whoWeHelp:
      "Healthcare organizations face increasing pressure to protect sensitive patient information while meeting evolving regulatory requirements. Redcloud Systems helps you close the gaps before an audit or breach forces your hand.",
    challenges: [
      "Unsecured email communications",
      "Weak access controls and missing MFA",
      "Missing or incomplete audit logs",
      "Inadequate backup and disaster recovery",
      "Unvetted vendor and Business Associate agreements",
      "Lack of documented policies and procedures",
    ],
    services: [
      {
        title: "HIPAA Gap Assessments",
        description:
          "Identify where your organization falls short of HIPAA requirements.",
        bullets: [
          "Evaluate technical, administrative, and physical safeguards",
          "Prioritized findings and remediation roadmap",
          "Benchmarked against OCR audit protocol",
        ],
      },
      {
        title: "Security Risk Analysis",
        description: "A comprehensive assessment of risks to ePHI — required by the HIPAA Security Rule.",
        bullets: [
          "Identify, assess, and document vulnerabilities",
          "Probability and impact scoring",
          "Actionable risk management plan",
        ],
      },
      {
        title: "HIPAA-Compliant Email",
        description: "Secure email and messaging that protects every patient communication.",
        bullets: [
          "Encrypted email platform setup",
          "BAA-ready vendor selection",
          "Staff training on secure messaging",
        ],
      },
      {
        title: "Access Control & MFA",
        description: "Limit access to ePHI based on role and need.",
        bullets: [
          "Role-based access controls (RBAC)",
          "Multi-factor authentication deployment",
          "Privileged access reviews",
        ],
      },
      {
        title: "Encryption & Data Protection",
        description: "Protect ePHI at rest and in transit across every system.",
        bullets: [
          "Full-disk and database encryption",
          "Secure data transmission protocols",
          "Key management best practices",
        ],
      },
      {
        title: "Audit Logging & Monitoring",
        description: "Detect unauthorized access and policy violations before they escalate.",
        bullets: [
          "SIEM and log aggregation setup",
          "Real-time alerts on suspicious activity",
          "Audit trail ready for OCR investigations",
        ],
      },
      {
        title: "Vendor Risk Reviews",
        description: "Ensure your Business Associates meet HIPAA requirements.",
        bullets: [
          "BAA review and execution",
          "Vendor security questionnaires",
          "Third-party risk scoring",
        ],
      },
      {
        title: "Policy & Documentation Support",
        description: "Develop the policies and procedures HIPAA demands.",
        bullets: [
          "Privacy, security, and breach notification policies",
          "Staff training materials and sign-off tracking",
          "Incident response plan",
        ],
      },
    ],
    benefits: [
      "Improved security posture across all ePHI systems",
      "Reduced operational and regulatory risk",
      "Greater confidence during OCR audits",
      "Stronger patient trust and retention",
    ],
    ctaLabel: "Schedule Your HIPAA Readiness Assessment",
  },
  {
    slug: "soc2",
    icon: "BadgeCheck",
    title: "SOC 2 Readiness",
    tagline: "Demonstrate security and operational maturity to enterprise customers.",
    subtext:
      "We guide SaaS companies, cloud service providers, and technology vendors through SOC 2 Type I and Type II readiness — so an audit becomes a formality, not a fire drill.",
    heroImage:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    whoWeHelp:
      "Enterprise buyers and procurement teams increasingly require SOC 2 reports before signing. Redcloud Systems helps you build the controls and evidence needed to pass — and maintain compliance continuously.",
    challenges: [
      "No formal security policies or control documentation",
      "Inadequate access management and offboarding",
      "Missing vendor risk management processes",
      "Lack of incident response and change management plans",
      "Inconsistent logging and monitoring",
      "No continuous compliance monitoring in place",
    ],
    services: [
      {
        title: "Readiness Assessment",
        description: "Evaluate your current controls against SOC 2 Trust Service Criteria.",
        bullets: [
          "Gap analysis across all five Trust Service Categories",
          "Control mapping and remediation roadmap",
          "Realistic timeline to audit-ready",
        ],
      },
      {
        title: "Policy Development",
        description: "Build the documented policies auditors expect to see.",
        bullets: [
          "Information security and acceptable use policies",
          "Change management and SDLC procedures",
          "Incident response and business continuity plans",
        ],
      },
      {
        title: "Access & Identity Controls",
        description: "Enforce least-privilege access across your entire stack.",
        bullets: [
          "Access provisioning and de-provisioning workflows",
          "MFA and SSO enforcement",
          "Quarterly access reviews",
        ],
      },
      {
        title: "Vendor Management Program",
        description: "Track and assess third-party risk systematically.",
        bullets: [
          "Vendor inventory and criticality tiers",
          "Security questionnaires and contract reviews",
          "Ongoing vendor risk monitoring",
        ],
      },
      {
        title: "Logging & Monitoring",
        description: "Create the evidence trail auditors need.",
        bullets: [
          "SIEM setup and log retention policies",
          "Alerting on security-relevant events",
          "Evidence collection automation",
        ],
      },
      {
        title: "Audit Coordination",
        description: "Manage the auditor relationship and evidence submission.",
        bullets: [
          "Auditor liaison and scheduling",
          "Evidence package preparation",
          "Management response to findings",
        ],
      },
    ],
    benefits: [
      "SOC 2 Type I or Type II report in hand",
      "Unblock enterprise sales cycles faster",
      "Consistent, repeatable security controls",
      "Continuous compliance — not just point-in-time",
    ],
    ctaLabel: "Schedule Your SOC 2 Readiness Assessment",
  },
  {
    slug: "iso27001",
    icon: "Globe",
    title: "ISO 27001",
    tagline: "Build a structured information security management system that scales.",
    subtext:
      "We help organizations design, implement, and certify an ISO 27001-compliant Information Security Management System (ISMS) — from initial scoping through certification audit.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    whoWeHelp:
      "ISO 27001 is the global standard for information security. Whether you're pursuing certification to win international contracts or to mature your internal security program, Redcloud Systems builds your ISMS the right way from the start.",
    challenges: [
      "No formal ISMS or risk treatment process",
      "Undocumented assets and data flows",
      "Inconsistent security controls across teams",
      "No internal audit program",
      "Leadership buy-in without a clear business case",
      "Scope uncertainty before certification",
    ],
    services: [
      {
        title: "ISMS Scoping & Gap Analysis",
        description: "Define the boundaries of your ISMS and identify what needs to be built.",
        bullets: [
          "Asset inventory and data flow mapping",
          "Gap analysis against Annex A controls",
          "Implementation roadmap and resourcing plan",
        ],
      },
      {
        title: "Risk Assessment & Treatment",
        description: "Identify information security risks and select appropriate controls.",
        bullets: [
          "ISO 27001-aligned risk methodology",
          "Risk register development",
          "Risk treatment plan and Statement of Applicability",
        ],
      },
      {
        title: "Policy & Control Implementation",
        description: "Build the documentation and controls your ISMS requires.",
        bullets: [
          "Core ISMS policies and procedures",
          "Annex A control implementation",
          "Evidence-collection workflows",
        ],
      },
      {
        title: "Internal Audit Program",
        description: "Prepare your team to self-assess and continuously improve.",
        bullets: [
          "Internal audit schedule and methodology",
          "Audit checklist and report templates",
          "Corrective action tracking",
        ],
      },
      {
        title: "Management Review Support",
        description: "Facilitate leadership engagement required by the standard.",
        bullets: [
          "Management review agenda and inputs",
          "KPI reporting for security performance",
          "Continual improvement planning",
        ],
      },
      {
        title: "Certification Audit Support",
        description: "Guide you through Stage 1 and Stage 2 certification audits.",
        bullets: [
          "Auditor liaison and document submission",
          "Nonconformity response management",
          "Post-certification surveillance planning",
        ],
      },
    ],
    benefits: [
      "Internationally recognized security certification",
      "Structured risk management across the organization",
      "Competitive advantage in global procurement",
      "Foundation for ongoing security improvement",
    ],
    ctaLabel: "Schedule Your ISO 27001 Readiness Assessment",
  },
  {
    slug: "pci-dss",
    icon: "CreditCard",
    title: "PCI DSS Readiness",
    tagline: "Protect payment card data and reduce the scope of your cardholder environment.",
    subtext:
      "We help merchants, payment processors, and service providers achieve and maintain PCI DSS compliance — reducing scope, strengthening controls, and preparing for QSA assessments.",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    whoWeHelp:
      "Any business that stores, processes, or transmits cardholder data must comply with PCI DSS. Redcloud Systems helps you scope your cardholder data environment correctly, implement required controls, and navigate the assessment process.",
    challenges: [
      "Unclear cardholder data environment (CDE) scope",
      "Unencrypted storage or transmission of card data",
      "Weak network segmentation",
      "Missing vulnerability management processes",
      "Inadequate access controls and monitoring",
      "Incomplete incident response for card data breaches",
    ],
    services: [
      {
        title: "CDE Scoping & Gap Analysis",
        description: "Define your cardholder data environment and identify control gaps.",
        bullets: [
          "Data flow mapping for card data",
          "Scope reduction strategies",
          "Gap analysis against PCI DSS v4.0",
        ],
      },
      {
        title: "Network Segmentation",
        description: "Isolate the CDE to reduce compliance burden and attack surface.",
        bullets: [
          "Firewall rule review and hardening",
          "Segmentation testing methodology",
          "Network topology documentation",
        ],
      },
      {
        title: "Encryption & Tokenization",
        description: "Protect card data at rest and in transit.",
        bullets: [
          "Point-to-point encryption (P2PE) guidance",
          "Tokenization implementation",
          "Key management procedures",
        ],
      },
      {
        title: "Vulnerability Management",
        description: "Identify and remediate vulnerabilities before attackers do.",
        bullets: [
          "Quarterly internal and external scans",
          "Annual penetration testing",
          "Patch management policy",
        ],
      },
      {
        title: "Access Control & Monitoring",
        description: "Restrict and track access to cardholder data.",
        bullets: [
          "Least-privilege access controls",
          "MFA for all CDE access",
          "Log monitoring and alerting",
        ],
      },
      {
        title: "SAQ & QSA Preparation",
        description: "Prepare documentation and evidence for your annual assessment.",
        bullets: [
          "SAQ selection and completion",
          "Evidence package preparation",
          "QSA liaison and audit support",
        ],
      },
    ],
    benefits: [
      "Validated PCI DSS compliance status",
      "Reduced scope and compliance overhead",
      "Lower risk of card data breaches and fines",
      "Increased trust from payment brands and banks",
    ],
    ctaLabel: "Schedule Your PCI DSS Readiness Assessment",
  },
  {
    slug: "nist",
    icon: "Lock",
    title: "NIST Framework",
    tagline: "Apply security best practices and build cyber resilience across your organization.",
    subtext:
      "We help organizations adopt the NIST Cybersecurity Framework (CSF) and NIST SP 800-53 controls — building a risk-based security program aligned to industry best practices.",
    heroImage:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    whoWeHelp:
      "The NIST framework is widely adopted across federal contractors, critical infrastructure operators, and commercial organizations seeking a structured approach to managing cybersecurity risk. Redcloud Systems translates the framework into practical, operational security controls.",
    challenges: [
      "No formal cybersecurity risk management process",
      "Disconnected security tools without a governing framework",
      "Gaps in asset visibility and inventory",
      "Reactive security posture — responding to incidents, not preventing them",
      "Difficulty demonstrating security maturity to stakeholders",
      "Preparing for FedRAMP or CMMC without a NIST foundation",
    ],
    services: [
      {
        title: "CSF Current State Assessment",
        description: "Measure your current security posture against the NIST CSF core functions.",
        bullets: [
          "Maturity scoring across Identify, Protect, Detect, Respond, Recover",
          "Heat map of gaps and priorities",
          "Target state definition",
        ],
      },
      {
        title: "Risk Management Program",
        description: "Build a structured, repeatable approach to managing cyber risk.",
        bullets: [
          "Risk register and risk tolerance definition",
          "Control selection from NIST SP 800-53",
          "Risk treatment and acceptance workflows",
        ],
      },
      {
        title: "Asset & Inventory Management",
        description: "Know what you have before you can protect it.",
        bullets: [
          "Hardware and software asset inventory",
          "Data classification program",
          "Shadow IT discovery",
        ],
      },
      {
        title: "Detect & Respond Capabilities",
        description: "Build the monitoring and response capabilities the framework requires.",
        bullets: [
          "SIEM and threat detection setup",
          "Incident response plan and playbooks",
          "Tabletop exercises and IR drills",
        ],
      },
      {
        title: "Resilience & Recovery Planning",
        description: "Ensure your organization can recover from cyber events quickly.",
        bullets: [
          "Business continuity and DR planning",
          "Backup and recovery testing",
          "Recovery time and point objectives",
        ],
      },
      {
        title: "Framework Roadmap & Reporting",
        description: "Communicate security progress to leadership and stakeholders.",
        bullets: [
          "Executive dashboard and KPI reporting",
          "Annual framework review cadence",
          "Board-level cybersecurity briefings",
        ],
      },
    ],
    benefits: [
      "Structured, risk-based cybersecurity program",
      "Improved visibility across the entire attack surface",
      "Faster, more confident incident response",
      "Ready for FedRAMP, CMMC, and other framework overlays",
    ],
    ctaLabel: "Schedule Your NIST Framework Assessment",
  },
  {
    slug: "cmmc",
    icon: "Building2",
    title: "CMMC Readiness",
    tagline: "Meet DoD cybersecurity requirements and protect Controlled Unclassified Information.",
    subtext:
      "We help defense contractors, subcontractors, and suppliers in the Defense Industrial Base prepare for CMMC 2.0 certification — protecting CUI and qualifying for DoD contracts.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    whoWeHelp:
      "CMMC 2.0 is now a contractual requirement for defense contractors at all tiers of the supply chain. If your organization handles CUI or is pursuing DoD contracts, Redcloud Systems helps you achieve the right CMMC level and maintain it.",
    challenges: [
      "Unclear scope — what is CUI and where does it live?",
      "Gaps in NIST SP 800-171 implementation",
      "No System Security Plan (SSP) or Plan of Action & Milestones (POA&M)",
      "Inadequate access controls for CUI systems",
      "Subcontractor and supply chain risk exposure",
      "Uncertainty around C3PAO assessment process",
    ],
    services: [
      {
        title: "CUI Scoping & Discovery",
        description: "Identify where CUI flows in your organization and define your assessment boundary.",
        bullets: [
          "CUI inventory and data flow mapping",
          "Enclave design to reduce scope",
          "CUI marking and handling procedures",
        ],
      },
      {
        title: "NIST SP 800-171 Gap Assessment",
        description: "Evaluate your current controls against all 110 NIST 800-171 practices.",
        bullets: [
          "Control-by-control assessment",
          "SPRS score calculation",
          "Prioritized remediation roadmap",
        ],
      },
      {
        title: "SSP & POA&M Development",
        description: "Build the core documentation CMMC assessors require.",
        bullets: [
          "System Security Plan (SSP) authoring",
          "Plan of Action & Milestones (POA&M)",
          "Supporting artifacts and evidence library",
        ],
      },
      {
        title: "Technical Control Implementation",
        description: "Implement the security controls required by your CMMC level.",
        bullets: [
          "Access control and MFA enforcement",
          "Endpoint detection and response (EDR)",
          "Audit logging and SIEM for CUI systems",
        ],
      },
      {
        title: "Supply Chain Risk Management",
        description: "Extend CMMC requirements to your subcontractors and suppliers.",
        bullets: [
          "Subcontractor CUI flow assessment",
          "Contractual flow-down requirements",
          "Supplier security questionnaires",
        ],
      },
      {
        title: "C3PAO Assessment Prep",
        description: "Prepare your team and documentation for the third-party assessment.",
        bullets: [
          "Mock assessment and walkthrough",
          "Evidence package organization",
          "Assessor liaison and scheduling",
        ],
      },
    ],
    benefits: [
      "CMMC Level 2 or Level 3 certification achieved",
      "Qualified to bid on DoD contracts requiring CUI handling",
      "Documented security posture with SPRS score",
      "Reduced supply chain risk for your prime contractor",
    ],
    ctaLabel: "Schedule Your CMMC Readiness Assessment",
  },
];

export function getComplianceProgram(slug: string): ComplianceProgram | undefined {
  return compliancePrograms.find((p) => p.slug === slug);
}
