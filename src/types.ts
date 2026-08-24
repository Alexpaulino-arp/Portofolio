export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  detail: string;
  icon: string;
  trend: string;
}

export interface TimelineMilestone {
  year: string;
  role: string;
  companyContext: string;
  headline: string;
  description: string;
  highlights: string[];
  techPillars: string[];
  stage: 'engineering' | 'operations' | 'executive';
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  gradient: string;
  deliverables: string[];
  technologies: string[];
  impactMetric: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  stack: string[];
  summary: string;
  challenge: string;
  solutionArchitecture: string[];
  results: {
    label: string;
    value: string;
    desc: string;
  }[];
  schemaSnippets?: string;
  automationDiagram?: string;
  codeSnippet?: {
    language: string;
    fileName: string;
    code: string;
  };
  imageType: 'shopify-erp' | 'zapier-automation' | 'nextjs-seo' | 'cms-fleet';
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  investment: string;
  billingType: string;
  idealFor: string;
  keyDeliverables: string[];
  technicalSpecs: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  verifiedMetric: string;
  stackTags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'Migration' | 'Architecture' | 'Automation' | 'Leadership';
  answer: string;
  technicalDetails?: string[];
}

export interface WorkflowNode {
  id: string;
  label: string;
  system: string;
  action: string;
  status: 'idle' | 'running' | 'success';
  payloadSample?: string;
}
