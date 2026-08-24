import { 
  MetricCard, 
  TimelineMilestone, 
  ServiceItem, 
  CaseStudy, 
  PricingTier, 
  Testimonial, 
  FaqItem 
} from '../types';

export const PERSONAL_INFO = {
  name: "Alexandre Paulino",
  title: "Full-Stack Web Operations Manager & CTO",
  email: "alexandrepaulino.arp@gmail.com",
  location: "Available Globally / Remote & Hybrid",
  yearsExperience: "4+ Years Agency Technical Leadership",
  coreTagline: "WEB DEVELOPMENT ENGINEERING & CTO STRATEGY",
  subHeadline: "I engineer scalable, high-performance digital core platforms and complex Zapier workflows, blending technical SEO with deep experience in front-end and back-end execution for platforms like Shopify, WordPress, and Duda.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const HERO_SNIPPETS = [
  {
    tab: "Shopify ERP Sync",
    file: "shopify-erp-sync.ts",
    lang: "typescript",
    code: `// High-throughput Webhook & Queue handler for Shopify Plus
import { NextRequest, NextResponse } from 'next/server';
import { Queue } from 'bullmq';
import { verifyHmac } from '@/lib/crypto';

const erpQueue = new Queue('erp-inventory-sync', {
  connection: { host: process.env.REDIS_HOST, port: 6379 }
});

export async function POST(req: NextRequest) {
  const hmac = req.headers.get('x-shopify-hmac-sha256');
  const rawBody = await req.text();
  
  if (!verifyHmac(rawBody, hmac, process.env.SHOPIFY_WEBHOOK_SECRET)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  await erpQueue.add('sync-order', {
    orderId: payload.id,
    lineItems: payload.line_items,
    customerEmail: payload.email,
    timestamp: Date.now()
  }, { attempts: 5, backoff: { type: 'exponential', delay: 2000 } });

  return NextResponse.json({ received: true, queue: 'enqueued' }, { status: 200 });
}`
  },
  {
    tab: "Zapier Enterprise Webhook",
    file: "enterprise-automation.py",
    lang: "python",
    code: `# Zapier Code By Zapier - Advanced Data Normalization & Multi-Branching
import requests
import json
import hashlib

raw_payload = input_data.get('webhook_body')
parsed = json.loads(raw_payload)

# Transform lead payload & deduplicate CRM entity
lead_hash = hashlib.sha256(parsed['email'].strip().lower().encode()).hexdigest()

crm_headers = {
    "Authorization": f"Bearer {input_data.get('CRM_API_KEY')}",
    "Content-Type": "application/json"
}

response = requests.post(
    "https://api.gohighlevel.com/v1/contacts/upsert",
    headers=crm_headers,
    json={
        "email": parsed['email'],
        "phone": parsed.get('phone'),
        "customFields": {"lead_score": 94, "routing_tier": "Enterprise"}
    }
)

output = {"status": "dispatched", "contact_id": response.json().get('id'), "hash": lead_hash}`
  },
  {
    tab: "Technical SEO Schema",
    file: "structured-data.jsonld",
    lang: "json",
    code: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alexandrepaulino.dev/#website",
      "url": "https://alexandrepaulino.dev",
      "name": "Alexandre Paulino | Full-Stack Web Operations & CTO",
      "inLanguage": "en-US",
      "publisher": { "@type": "Person", "name": "Alexandre Paulino" }
    },
    {
      "@type": "TechArticle",
      "headline": "Zero-Downtime Multi-Platform CMS & Core Web Vitals Optimization",
      "author": { "@type": "Person", "name": "Alexandre Paulino" },
      "proficiencyLevel": "Expert",
      "about": ["Technical SEO", "Shopify Plus", "Next.js", "Server Migrations"]
    }
  ]
}`
  }
];

export const METRIC_CARDS: MetricCard[] = [
  {
    id: "leadership",
    value: "4+ Years",
    label: "Agency Leadership",
    detail: "Directing multi-disciplinary engineering, QA, and web ops squads across 40+ client accounts.",
    icon: "ShieldCheck",
    trend: "CTO & Web Operations"
  },
  {
    id: "enterprise-projects",
    value: "20+ Major",
    label: "Enterprise Deployments",
    detail: "Shopify Plus, Next.js headless builds, multi-brand WordPress engines, and custom APIs.",
    icon: "Boxes",
    trend: "$100M+ GMV throughput"
  },
  {
    id: "zapier-certified",
    value: "500k+/mo",
    label: "Zapier Automations",
    detail: "Certified automation architect building self-healing multi-tier Zapier & webhook workflows.",
    icon: "Cpu",
    trend: "Zero-Data-Loss Pipeline"
  },
  {
    id: "managed-platforms",
    value: "12+ Ecosystems",
    label: "Platforms Managed",
    detail: "Shopify, WordPress Core, Duda Enterprise, GoHighLevel, Vercel, AWS Lambda, Cloudflare.",
    icon: "Layers",
    trend: "99.99% High Availability"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2024 – Present",
    role: "Chief Technology Officer & Web Operations Director",
    companyContext: "Agency Executive Leadership",
    headline: "Scaling Digital Core Systems & High-Velocity Automation",
    description: "Spearheaded technical architecture, agency delivery pipelines, and enterprise automation infrastructure. Directed full-stack engineers and technical SEO specialists to deliver high-converting web applications for global brands.",
    highlights: [
      "Engineered automated Zapier & custom webhook middleware managing 500,000+ data transformations monthly.",
      "Architected headless Shopify Plus and high-performance Next.js architectures with sub-second TTFB.",
      "Unified technical SEO standard operating procedures achieving consistent 95+ Core Web Vitals scores."
    ],
    techPillars: ["Next.js", "Shopify Plus", "Enterprise Zapier", "Cloudflare Workers", "AWS Lambda"],
    stage: "executive"
  },
  {
    year: "2022 – 2024",
    role: "Head of Web Development & Technical Operations",
    companyContext: "Digital Growth & Scale Agency",
    headline: "Multi-Platform CMS Operations & Complex API Integrations",
    description: "Built the agency's web operations playbook from the ground up. Standardized deployment pipelines across WordPress, Shopify, Duda, and GoHighLevel CRM infrastructure.",
    highlights: [
      "Led 25+ successful multi-tier platform migrations without single organic search rank drop or downtime.",
      "Built custom bi-directional API bridges between e-commerce stores, ERPs (NetSuite/SAP), and CRM pipelines.",
      "Implemented enterprise speed optimization routines slashing average LCP from 4.2s to 1.1s across all active clients."
    ],
    techPillars: ["WordPress VIP", "Duda API", "GoHighLevel CRM", "REST/GraphQL", "Docker"],
    stage: "operations"
  },
  {
    year: "2020 – 2022",
    role: "Senior Full-Stack Developer & Technical SEO Specialist",
    companyContext: "High-Growth E-Commerce & SaaS Consultancy",
    headline: "Full-Stack Code Craftsmanship & Structured Data Mastery",
    description: "Developed custom web applications, React front-ends, and bespoke CMS themes while engineering advanced JSON-LD structured data hierarchies and technical site speed engines.",
    highlights: [
      "Created scalable theme frameworks used across 60+ production client sites.",
      "Implemented automated Schema.org markup engines driving triple-digit organic rich snippet impressions.",
      "Authored custom automation scripts in Python and Node.js for automated web quality assurance audits."
    ],
    techPillars: ["React.js", "PHP / Node.js", "Technical Schema", "PostgreSQL", "Tailwind CSS"],
    stage: "engineering"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-management",
    title: "Technical Web Management & Infrastructure",
    category: "DevOps & Core Stability",
    shortDesc: "End-to-end management of complex CMS environments, zero-downtime database migrations, and high-availability server strategy.",
    longDesc: "Flawless technical operations for mission-critical digital properties. We establish enterprise monitoring, automated database backups, version-controlled staging environments, and high-performance CDN caching layers.",
    icon: "Server",
    gradient: "from-blue-600 to-cyan-500",
    deliverables: [
      "Zero-Downtime Multi-Platform Migrations (Shopify, WordPress, Duda)",
      "High-Availability Cloud Hosting (AWS, Vercel, Cloudflare, WP Engine)",
      "Comprehensive Database Health Audits & Query Optimization",
      "Automated Staging & CI/CD Deployment Pipelines",
      "24/7 Security Patching, Penetration Testing & WAF Rules"
    ],
    technologies: ["Cloudflare Enterprise", "AWS Lambda", "Docker", "Duda API", "MySQL/PostgreSQL"],
    impactMetric: "99.99% Guaranteed SLA Uptime"
  },
  {
    id: "fullstack-dev",
    title: "Custom Full-Stack Development & Architecture",
    category: "Software Engineering",
    shortDesc: "Custom Next.js/React web applications, bespoke API synchronization layers, and headless e-commerce platforms engineered for speed.",
    longDesc: "Engineering bespoke web software that outpaces off-the-shelf templates. From custom Shopify checkout extensions and GraphQL middleware to robust Node.js microservices that withstand Black Friday traffic surges.",
    icon: "Code2",
    gradient: "from-indigo-600 to-blue-500",
    deliverables: [
      "Headless Next.js / React Web Applications & PWAs",
      "Custom Shopify Plus Liquid & Checkout Extensibility Apps",
      "High-Performance Custom WordPress Core & Plugin Engineering",
      "Bi-directional REST & GraphQL API Middleware Integration",
      "Microservice Endpoints with Redis Caching & Queue Management"
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Node.js", "Shopify Storefront API", "Tailwind"],
    impactMetric: "Sub-50ms Microservice Latency"
  },
  {
    id: "automation-engineering",
    title: "Workplace Automation Engineering (Zapier Certified)",
    category: "Workflow Automation",
    shortDesc: "Enterprise-grade Zapier architecture, GoHighLevel pipeline integrations, and custom Python/Node webhook data processors.",
    longDesc: "Eliminate manual friction and operational bottlenecks across your executive, sales, and fulfillment teams. We engineer resilient, multi-step automation matrices with automated error recovery and audit logging.",
    icon: "Zap",
    gradient: "from-amber-500 to-orange-600",
    deliverables: [
      "Multi-Branching Enterprise Zapier Workflow Architecture",
      "GoHighLevel (GHL) CRM & Lead Routing Orchestration",
      "Custom Webhook Handlers with Secret Authentication & Re-try Queues",
      "ERP / Inventory / Financial Synchronization (NetSuite, QuickBooks, Xero)",
      "Automated Slack / Email Executive Intelligence Alerts & Daily Digests"
    ],
    technologies: ["Zapier Certified", "Python Webhooks", "GoHighLevel API", "Make / Integromat", "BullMQ"],
    impactMetric: "400+ Hours Saved / Month"
  },
  {
    id: "technical-seo",
    title: "Technical SEO Infrastructure & Core Web Vitals",
    category: "Search Infrastructure",
    shortDesc: "Scientific search engine crawling optimization, comprehensive JSON-LD Schema markup, and speed audits that unlock organic scale.",
    longDesc: "Transforming SEO from guesswork into hard engineering. We optimize DOM complexity, critical CSS rendering paths, server response times, and semantic graph indexing so search bots understand and prioritize your site.",
    icon: "SearchCheck",
    gradient: "from-emerald-500 to-teal-600",
    deliverables: [
      "Advanced Multi-Entity JSON-LD Structured Data Schema Hierarchies",
      "Core Web Vitals Optimization (LCP < 1.2s, INP < 50ms, CLS = 0.00)",
      "Server Migration SEO & 1-to-1 301 Redirect Matrix Management",
      "Crawl Budget & Server Log Analysis for Enterprise Catalogs",
      "Dynamic Pre-rendering & Edge SSR for Javascript-Heavy Applications"
    ],
    technologies: ["Schema.org Graph", "Google Search Console API", "Lighthouse CI", "Edge Workers", "Screaming Frog"],
    impactMetric: "99+ Lighthouse Score Across All Metrics"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "shopify-erp-sync",
    title: "Enterprise Shopify Plus & Multi-Warehouse ERP Synchronization",
    clientCategory: "Global E-Commerce Omnichannel Retailer ($48M Annual GMV)",
    stack: ["Shopify Plus", "Next.js", "Redis / BullMQ", "GraphQL API", "AWS Lambda"],
    summary: "Re-architected real-time inventory and fulfillment synchronization across 4 international logistics hubs and Shopify Plus storefront, eliminating order oversells and saving $320k in manual discrepancy reconciliation.",
    challenge: "The client suffered from frequent inventory oversells during flash sales due to legacy batch ERP syncs running with 45-minute delays, resulting in customer service bottlenecks and negative reviews.",
    solutionArchitecture: [
      "Constructed a sub-second webhook ingestion queue using AWS Lambda and Redis caching.",
      "Implemented idempotent GraphQL batch mutations ensuring zero duplicate order pushes.",
      "Engineered automated fallback circuit-breakers that isolate degraded warehouse endpoints without halting customer checkout."
    ],
    results: [
      { label: "Sync Latency", value: "900ms", desc: "Down from 45 min batch lag" },
      { label: "Inventory Accuracy", value: "99.99%", desc: "Zero oversells over 12 months" },
      { label: "Black Friday Throughput", value: "14,200 req/min", desc: "100% uptime with zero error spikes" }
    ],
    codeSnippet: {
      language: "typescript",
      fileName: "inventory-sync-worker.ts",
      code: `// Resilient BullMQ Worker with Exponential Backoff and State Locking
export const inventoryWorker = new Worker('inventory-sync', async (job) => {
  const { sku, delta, warehouseId } = job.data;
  const lock = await acquireDistributedLock(\`sku:\${sku}\`, 5000);
  
  try {
    const currentStock = await erpClient.getAvailableStock(sku, warehouseId);
    await shopifyGraphQL.mutate(SET_INVENTORY_LEVELS_MUTATION, {
      inventoryItemId: job.data.shopifyInventoryItemId,
      locationId: job.data.locationGid,
      available: currentStock
    });
    return { success: true, updatedStock: currentStock };
  } finally {
    await releaseDistributedLock(lock);
  }
}, { concurrency: 25 });`
    },
    imageType: "shopify-erp"
  },
  {
    id: "workplace-automation-matrix",
    title: "Multi-Tier Workplace Automation & Lead Routing Engine",
    clientCategory: "Enterprise B2B Technology Agency & Financial Advisory",
    stack: ["Zapier Certified", "Python", "GoHighLevel CRM", "Webhooks", "Slack API"],
    summary: "Built an autonomous enterprise workflow matrix connecting lead acquisition channels, qualification algorithms, contract generation, and project onboarding pipelines.",
    challenge: "Sales executives were losing up to 48 hours manually qualifying leads, copying form inputs into multiple spreadsheets, and creating duplicate contract documents across fragmented tools.",
    solutionArchitecture: [
      "Engineered a 14-step Zapier automation path incorporating custom Python enrichment scripts.",
      "Integrated instant lead scoring and round-robin calendar assignment inside GoHighLevel CRM.",
      "Automated client portal provisioning, Slack war-room generation, and dynamic DocuSign contract dispatching within 30 seconds of lead qualification."
    ],
    results: [
      { label: "Lead Response Time", value: "< 45 sec", desc: "Reduced from 4.8 hours average" },
      { label: "Monthly Time Saved", value: "420 Hours", desc: "Equating to $68,000/mo operational cost savings" },
      { label: "Lead-to-Call Conversion", value: "+38.4%", desc: "Direct result of instant speed-to-lead routing" }
    ],
    codeSnippet: {
      language: "python",
      fileName: "lead_scoring_algorithm.py",
      code: `# Multi-factor lead qualification & routing logic
def calculate_lead_tier(lead_data):
    revenue = int(lead_data.get('annual_revenue', 0))
    team_size = int(lead_data.get('employee_count', 1))
    intent_signals = lead_data.get('visited_pages', [])
    
    score = 0
    if revenue >= 5000000: score += 45
    elif revenue >= 1000000: score += 25
    
    if team_size >= 50: score += 30
    elif team_size >= 15: score += 15
    
    if any('/enterprise' in p for p in intent_signals): score += 25
    
    tier = "VIP_STRATEGIC" if score >= 80 else "GROWTH" if score >= 50 else "STANDARD"
    return {"score": score, "tier": tier, "route_to": "exec_direct" if score >= 80 else "sales_pool"}`
    },
    imageType: "zapier-automation"
  },
  {
    id: "headless-nextjs-technical-seo",
    title: "Headless Next.js Migration & High-Performance Technical SEO",
    clientCategory: "National B2B Industrial Equipment Catalog (25,000+ SKUs)",
    stack: ["Next.js 15 App Router", "TypeScript", "JSON-LD Graph", "Cloudflare Edge", "Algolia"],
    summary: "Re-platformed a slow legacy monolithic site to a blistering Next.js headless frontend paired with granular Schema.org graph markup and edge SSR caching.",
    challenge: "The client had suffered severe organic traffic erosion due to poor Core Web Vitals (LCP > 5.5s), bloated HTML payloads, and incomplete structured data across 25,000 product pages.",
    solutionArchitecture: [
      "Engineered Next.js Static Site Generation (SSG) with On-Demand Incremental Static Regeneration (ISR).",
      "Authored a unified Schema.org graph generator producing nested Product, AggregateRating, and BreadcrumbList schemas.",
      "Optimized asset pipelines to eliminate layout shifts (CLS 0.00) and achieve sub-1s First Contentful Paint globally."
    ],
    results: [
      { label: "Lighthouse Performance", value: "100 / 100", desc: "Up from 28/100 on legacy monolith" },
      { label: "Organic Search Revenue", value: "+312%", desc: "Within 6 months post-migration" },
      { label: "Server Response (TTFB)", value: "38ms", desc: "Cached globally via Cloudflare Edge" }
    ],
    codeSnippet: {
      language: "typescript",
      fileName: "schema-graph-generator.ts",
      code: `// High-Precision Multi-Entity Schema Generator for 25k Catalog
export function generateProductSchemaGraph(product: ProductData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": \`\${BASE_URL}/products/\${product.slug}#product\`,
        "name": product.name,
        "sku": product.sku,
        "mpn": product.mpn,
        "brand": { "@type": "Brand", "name": product.brandName },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Industrial Direct" }
        }
      }
    ]
  };
}`
    },
    imageType: "nextjs-seo"
  },
  {
    id: "cms-fleet-infrastructure",
    title: "Multi-Tenant Duda & WordPress Agency CMS Fleet Modernization",
    clientCategory: "Fast-Paced Digital Agency Managing 120+ Client Properties",
    stack: ["Duda Enterprise API", "WordPress VIP", "Docker", "GitHub Actions", "WP-CLI"],
    summary: "Consolidated a sprawling agency fleet of over 120 disparate website properties into a centralized, automated deployment and maintenance ecosystem.",
    challenge: "The agency was spending over 150 hours every month performing manual plugin updates, vulnerability scans, and ad-hoc client content tweaks across mixed CMS platforms.",
    solutionArchitecture: [
      "Constructed a custom Node.js orchestration dashboard leveraging the Duda REST API and WP-CLI.",
      "Automated continuous visual regression testing using Headless Chrome in GitHub Actions prior to auto-deploying core updates.",
      "Implemented a standardized multi-region backup and disaster recovery system with one-click rollbacks."
    ],
    results: [
      { label: "Maintenance Overhead", value: "-82%", desc: "Saved 120+ engineering hours/mo" },
      { label: "Deployment Velocity", value: "10x Faster", desc: "Zero-touch automated rollout" },
      { label: "Security Incident Rate", value: "0 Incidents", desc: "Across 120+ properties over 2 years" }
    ],
    imageType: "cms-fleet"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "fixed-sprint",
    name: "Strategic Technical Sprint",
    tagline: "Fixed-scope surgical execution for critical platforms and urgent milestones.",
    investment: "$4,500 – $12,500",
    billingType: "Per Project / Milestone",
    idealFor: "Founders & Agencies needing immediate high-impact technical remediation or platform migration.",
    popular: false,
    keyDeliverables: [
      "Complete Technical SEO & Core Web Vitals Overhaul (95+ score guarantee)",
      "Zero-Downtime Multi-Platform Migration (Shopify, WordPress, Duda)",
      "Complex Custom API Integration or Webhook Middleware Development",
      "Database Architecture & Performance Optimization Sprint",
      "Executive Technical Architecture Blueprint & Handover Documentation"
    ],
    technicalSpecs: [
      "2-4 Week Turnaround",
      "Dedicated GitHub Branch & Staging Environment",
      "30 Days Post-Deployment Warranty & Bug Guarantee",
      "Video Walkthrough & Code Documentation"
    ]
  },
  {
    id: "fractional-cto",
    name: "Fractional CTO & Web Operations",
    tagline: "High-level technical leadership, engineering oversight, and proactive architecture.",
    investment: "$6,500 / month",
    billingType: "Monthly Retainer (Quarterly Commit)",
    idealFor: "Growing agencies & 7-8 figure brands that require an elite technical director without full-time C-suite overhead.",
    popular: true,
    badge: "Most Strategic ROI",
    keyDeliverables: [
      "Strategic Technical Roadmap & Architecture Governance",
      "Direct Oversight of In-House & Agency Dev Squads",
      "Zapier & Enterprise Automation Infrastructure Management",
      "High-Availability Hosting, CDN & Security Monitoring (99.99% SLA)",
      "Weekly Executive Technical Strategy Syncs & Priority Slack Channel"
    ],
    technicalSpecs: [
      "Priority SLA Response (< 2 Hours)",
      "Unlimited Architecture Reviews",
      "Quarterly Infrastructure Audits & Scaling Roadmaps",
      "Vendor & Third-Party Tech Stack Negotiations"
    ]
  },
  {
    id: "automation-enterprise",
    name: "Enterprise Automation Matrix",
    tagline: "Full-scale Zapier, CRM & ERP workflow automation for scaling operations.",
    investment: "$5,000 – $18,000",
    billingType: "Scoped Build + Retainer",
    idealFor: "Businesses losing thousands of hours to manual data entry, lead leakage, or disparate software systems.",
    popular: false,
    keyDeliverables: [
      "End-to-End Zapier Certified Multi-Step Workflow Ecosystem",
      "GoHighLevel (GHL) CRM Lead Routing & Instant Speed-to-Lead Engines",
      "Custom Python/Node.js Webhook Data Parsers & Transformation Scripts",
      "Automated Billing, Invoicing, and Multi-Warehouse Inventory Sync",
      "Real-Time Executive Slack Dashboard & Error Alert Telemetry"
    ],
    technicalSpecs: [
      "Resilient Fallback Queues (Zero Data Loss)",
      "Complete Data Schema Dictionary",
      "Staff Training & Video Operating Manuals",
      "60 Days Error Monitoring & Fine-Tuning"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "founder-1",
    author: "Marcus Vance",
    role: "Founder & Chief Executive Officer",
    company: "OmniCore Retail Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Alexandre's expertise in both development and workflow automation transformed how our business operates online. His technical leadership is unmatched. When we faced a massive Black Friday surge with complex Shopify-to-ERP syncs, his architecture didn't drop a single order.",
    verifiedMetric: "$48M E-Commerce Stability",
    stackTags: ["Shopify Plus", "ERP Sync", "Technical Architecture"]
  },
  {
    id: "agency-owner-2",
    author: "Elena Rostova",
    role: "Managing Director & Partner",
    company: "Apex Media & Growth Agency",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "Finding a CTO who truly grasps both hardcore full-stack engineering and strategic agency client delivery is nearly impossible. Alexandre managed 120+ client sites, eliminated our technical debt, and brought our Core Web Vitals to a spotless 99+. He is our secret weapon.",
    verifiedMetric: "120+ Web Properties Managed",
    stackTags: ["Web Operations", "Technical SEO", "Duda/WordPress"]
  },
  {
    id: "coo-3",
    author: "David Chen",
    role: "Chief Operating Officer",
    company: "Vanguard Tech Ventures",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "The Zapier and CRM automation matrix Alexandre constructed saved our team over 400 hours of manual labor in the very first month. His ability to translate executive business goals into rock-solid, automated technical systems is world-class.",
    verifiedMetric: "420 hrs/mo Saved",
    stackTags: ["Zapier Certified", "CRM Pipelines", "Python Webhooks"]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How do you approach a complex multi-platform migration without downtime or SEO loss?",
    category: "Migration",
    answer: "Every migration follows a strict 6-phase engineering protocol: 1) Complete crawl inventory and historical URL mapping, 2) Staging environment parity build with identical Schema.org structures, 3) 1-to-1 301 redirect rule matrix with wildcard fallbacks, 4) Off-peak database delta synchronization, 5) DNS TTL reduction to 300s followed by seamless Cloudflare proxy cutover, and 6) Real-time automated 404 log monitoring and Google Search Console indexing acceleration.",
    technicalDetails: [
      "Zero downtime via dual-write database synchronization",
      "Automated Screaming Frog & Search Console verification",
      "100% preservation of historical backlink equity"
    ]
  },
  {
    id: "faq-2",
    question: "What is your stack recommendation for a modern high-converting e-commerce build?",
    category: "Architecture",
    answer: "For enterprise scalability and rapid conversion, I typically recommend Shopify Plus paired with a headless Next.js frontend (utilizing the Shopify Storefront GraphQL API) deployed on Vercel or Cloudflare Edge. This architecture decouples the checkout security of Shopify from the sub-50ms page load speeds and custom UI flexibility of Next.js, directly boosting conversion rates by 15-30% while retaining full catalog management simplicity.",
    technicalDetails: [
      "Headless Next.js 15 App Router with ISR caching",
      "Shopify Plus Checkout Extensibility & Native Pay",
      "Algolia / Meilisearch for instant predictive product queries"
    ]
  },
  {
    id: "faq-3",
    question: "Do you provide managed hosting, infrastructure monitoring, and SLA guarantees?",
    category: "Architecture",
    answer: "Yes. Under the Managed CTO & Web Operations engagement, I oversee your entire server infrastructure, CDN caching policies (Cloudflare Enterprise / AWS CloudFront), automated daily multi-region snapshot backups, and 24/7 uptime monitoring with instant PagerDuty telemetry. We maintain a 99.99% availability SLA.",
    technicalDetails: [
      "Multi-region failover and automated health-check rerouting",
      "WAF & DDOS mitigation at edge tier",
      "Continuous Core Web Vitals regression testing in CI/CD"
    ]
  },
  {
    id: "faq-4",
    question: "How do you ensure Zapier and business automations do not fail or drop mission-critical leads?",
    category: "Automation",
    answer: "Standard non-technical automations fail when APIs experience transient timeouts. As a Zapier Certified architect, I design self-healing architectures: incorporating custom Python/Node.js validation steps, exponential backoff retries, dedicated Redis error queues (BullMQ), and instant webhook anomaly alerts to executive Slack channels. If an external CRM is down, the lead payload is safely queued and automatically re-dispatched upon recovery.",
    technicalDetails: [
      "Idempotency keys preventing duplicate record creation",
      "Dead-letter queues for unhandled edge cases",
      "Automated payload checksum verification (HMAC-SHA256)"
    ]
  },
  {
    id: "faq-5",
    question: "How does the Fractional CTO engagement integrate with our existing team?",
    category: "Leadership",
    answer: "I integrate seamlessly as your technical leader and strategic partner. I run weekly engineering standups, establish clear PR review guidelines and QA checklists, mentor junior/mid-level developers, interface directly with stakeholders during executive meetings, and evaluate external tech vendors to prevent costly architectural missteps.",
    technicalDetails: [
      "Direct integration into your Slack/Discord and Jira/Linear boards",
      "Code review standards and automated linting enforcement",
      "Monthly executive tech roadmap and budget forecasting"
    ]
  }
];
