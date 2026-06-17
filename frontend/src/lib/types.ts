export interface NavChild {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  children?: NavChild[];
}

export interface ServiceOffering {
  title: string;
  description: string;
  bullets: string[];
}

export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  icon: string; // lucide icon name
  body: string[];
  features: string[];
  offerings?: ServiceOffering[]; // the 4 "core services" shown as cards
  html?: string; // real page content from the legacy site
  tagline?: string;
  subtext?: string;
  heroImage?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Industry {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  body: string[];
  html?: string;
  // rich industry-page fields
  tagline?: string;
  subtext?: string;
  heroImage?: string;
  needs?: string[];
  intro?: string;
  stats?: Stat[];
  coreServices?: ServiceOffering[];
}

export interface AiUseCase {
  category: string;
  tools: string[];
  capabilities: string[];
}

export interface AiSolution {
  slug: string;
  title: string;
  excerpt: string;
  outcomes: string[];
  html?: string;
  tagline?: string;
  subtext?: string;
  heroImage?: string;
  useCases?: AiUseCase[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  description?: string;
  url?: string;
  content?: string;
  featuredImage?: string;
}

export interface PageContent {
  title: string;
  html: string;
  excerpt: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  content?: string;
  featuredImage?: string;
}
