import { CASE_STUDIES, CaseStudyItem } from './caseStudiesData';

export interface ArchiveItem {
  id: string;
  romanId: string;
  title: string;
  subtitle: string;
  category: string;
  year?: string;
  client: string;
  role: string;
  platform?: string;
  url?: string;
  urls?: { label: string; url: string }[];
  summary: string;
  poeticInsight: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  architecture: string[];
  techStack: string[];
  systemFlow: {
    step: string;
    title: string;
    detail: string;
  }[];
  codeSnippet: {
    lang: string;
    filename: string;
    code: string;
  };
  liveUpdateNotice?: string;
  featured?: boolean;
}

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  statement: string;
  poeticNote: string;
  technologies: string[];
}

export interface PhilosophyQuote {
  quote: string;
  author: string;
  role: string;
}

export interface ArsenalItem {
  id: string;
  name: string;
  type: string;
  experience: string;
  tags: string[];
}

export const ARCHIVE_WORKS: ArchiveItem[] = CASE_STUDIES.map((c) => ({
  ...c,
  year: "2022 — 2025",
  liveUpdateNotice: c.liveUpdateNotice || "Live platform undergoes continuous updates and operational evolution; live appearance and features may differ from the initial project launch."
}));

export const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "DIGITAL PROJECT MANAGEMENT",
    subtitle: "Agile Precision, Zero-Downtime Delivery & Cross-Functional Governance",
    statement: "I translate complex enterprise business requirements into disciplined sprint cycles, maintaining 100% on-time release records across global Shopify Plus and custom web platforms.",
    poeticNote: "Architectural discipline is the unseen gravity that holds every high-velocity digital launch in balance.",
    technologies: ["Linear / Jira Sprint Management", "Technical Scoping & PRDs", "Cross-Functional QA & UAT", "Risk Mitigation & Escalation Protocols", "Zero-Downtime Go-Live Governance"]
  },
  {
    number: "02",
    title: "WEB OPERATIONS & INFRASTRUCTURE",
    subtitle: "High-Availability Fleet Management, Core Web Vitals & Enterprise Security",
    statement: "I manage 100+ production domains, enforcing 99.99% uptime SLAs, SSL governance, automated off-site backups, and sub-second Lighthouse Core Web Vitals performance.",
    poeticNote: "Resilient infrastructure never sleeps; it runs as a silent, unyielding foundation beneath every customer transaction.",
    technologies: ["Shopify Plus & Enterprise CMS", "Cloudflare Enterprise CDN & WAF", "Core Web Vitals Optimization (98+)", "Continuous Security & Uptime Monitoring", "Domain & DNS Architecture"]
  },
  {
    number: "03",
    title: "AUTOMATION & WORKFLOW SYSTEMS",
    subtitle: "CRM Ecosystems, Webhook Ingestion & Autonomous Business Logic",
    statement: "I construct zero-data-loss automation matrices interconnecting Shopify, Stripe, HubSpot, GoHighLevel, and Slack, eliminating manual operational friction.",
    poeticNote: "When business operations flow autonomously, teams focus purely on strategic leverage and revenue generation.",
    technologies: ["Zapier Multi-Branch Workflows", "HubSpot & GoHighLevel Pipelines", "Custom Webhooks & REST API Integrations", "Python & Node.js Middleware", "Automated Financial & CRM Sync"]
  },
  {
    number: "04",
    title: "CONVERSION ARCHITECTURE & SEO",
    subtitle: "High-Converting UX, Data-Driven Funnels & Dominant Organic Visibility",
    statement: "I architect data-driven conversion pathways and local SEO structures that transform casual visitors into loyal customers, driving verified traffic surges up to +670%.",
    poeticNote: "True craftsmanship lies in removing every trace of friction between human intention and digital completion.",
    technologies: ["Conversion Rate Optimization (CRO)", "Technical SEO & Schema.org JSON-LD", "Google Tag Manager & GA4", "Mobile-First UX/UI Engineering", "Multi-Location Regional Strategy"]
  }
];

export const PHILOSOPHY_QUOTES: PhilosophyQuote[] = [
  {
    quote: "A modern web application is not just a digital brochure; it is the core operational nervous system of an organization. When infrastructure, automation, and user experience converge with mathematical precision, growth becomes an inevitable outcome.",
    author: "Alexandre Paulino",
    role: "Digital Project Manager & Web Operations Lead"
  },
  {
    quote: "True project leadership means translating complex technical friction into effortless user clarity and measurable commercial velocity.",
    author: "Alexandre Paulino",
    role: "Digital Project Manager & Web Operations Lead"
  },
  {
    quote: "Zero downtime is not a milestone—it is a continuous operational discipline maintained through relentless testing, clean code, and proactive monitoring.",
    author: "Alexandre Paulino",
    role: "Digital Project Manager & Web Operations Lead"
  }
];

export const MASTERED_ARSENAL: ArsenalItem[] = [
  { id: "figma", name: "Figma UX/UI & Wireframes", type: "Wireframing & UI/UX Systems", experience: "9+ Years", tags: ["Design Systems", "Auto-Layout", "Low-Fi Wireframes", "Hi-Fi Prototypes", "Interactive Specs"] },
  { id: "shopify", name: "Shopify Plus & Liquid", type: "E-Commerce Architecture", experience: "8+ Years", tags: ["Shopify Plus", "Liquid", "Functions", "Theme 2.0"] },
  { id: "wordpress", name: "WordPress & WooCommerce", type: "CMS & Platform Ops", experience: "10+ Years", tags: ["WordPress Core", "WooCommerce", "ACF Pro", "WP-CLI"] },
  { id: "hubspot", name: "HubSpot CRM & CMS", type: "RevOps & Inbound Funnels", experience: "7+ Years", tags: ["HubSpot CMS", "Workflows", "Custom Properties", "API"] },
  { id: "gohighlevel", name: "GoHighLevel (GHL)", type: "Marketing Automation", experience: "5+ Years", tags: ["Snapshots", "Pipelines", "Funnels", "Twilio Sync"] },
  { id: "duda", name: "Duda Enterprise", type: "High-Speed Web CMS", experience: "6+ Years", tags: ["Duda Flex", "Client Portals", "White-Label", "Speed Ops"] },
  { id: "weblium", name: "Weblium Platform", type: "Modern Agile CMS", experience: "4+ Years", tags: ["D2C Showcases", "Fast Prototyping", "Responsive UX"] },
  { id: "zapier", name: "Zapier Enterprise & Webhooks", type: "Integration Middleware", experience: "8+ Years", tags: ["Multi-Branch Zaps", "Python Steps", "Webhooks", "JSON"] },
  { id: "tailwind", name: "Tailwind CSS & TypeScript", type: "Modern Frontend Stack", experience: "7+ Years", tags: ["Tailwind", "React", "TypeScript", "Vite"] },
  { id: "seo", name: "Technical SEO & Schema", type: "Organic Authority & Search", experience: "10+ Years", tags: ["Schema.org", "Core Web Vitals", "GSC", "Screaming Frog"] },
  { id: "analytics", name: "Google Analytics 4 & GTM", type: "Measurement & Attribution", experience: "9+ Years", tags: ["GA4", "Google Tag Manager", "DataLayer", "Conversion CAPI"] },
  { id: "cloudflare", name: "Cloudflare & DNS Ops", type: "Security & Edge CDN", experience: "8+ Years", tags: ["WAF", "SSL/TLS", "Edge Rules", "DNS Routing"] },
  { id: "project-management", name: "Linear, Jira & Agile Ops", type: "Sprint Governance", experience: "10+ Years", tags: ["Scrum / Agile", "PRD Scoping", "QA / UAT", "Risk Management"] }
];
