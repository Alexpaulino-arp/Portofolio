export interface BrandClient {
  id: string;
  name: string;
  category: 'E-Commerce & Retail' | 'B2B & Tech' | 'Professional Services' | 'Healthcare & Community' | 'Home & Lifestyle';
  platform: string;
  deliverables: string[];
  scope: string;
  year?: string;
  featured?: boolean;
}

export const BRANDS_DELIVERED: BrandClient[] = [
  {
    id: "verve-wine",
    name: "Verve Wine & Spirits",
    category: "E-Commerce & Retail",
    platform: "Shopify Plus / Custom E-Commerce",
    deliverables: ["Shopify Plus Storefront", "Inventory Sync", "Checkout Customization", "Klaviyo Retention"],
    scope: "Engineered premium wine & spirits e-commerce experience with multi-location inventory routing, subscription club features, and high-speed mobile performance.",
    featured: true
  },
  {
    id: "adonit",
    name: "Adonit",
    category: "E-Commerce & Retail",
    platform: "Global Shopify Store / Custom Tech E-Commerce",
    deliverables: ["Global Storefront", "Multi-Currency Checkout", "Core Web Vitals 99+", "App Integrations"],
    scope: "Managed website operations and e-commerce optimization for internationally acclaimed digital stylus and creative tech hardware brand.",
    featured: true
  },
  {
    id: "united-way",
    name: "United Way",
    category: "Healthcare & Community",
    platform: "Enterprise CMS / Web Operations",
    deliverables: ["Donation Funnel Integration", "Accessibility WCAG AA", "Cloud Infrastructure", "CMS Fleet Management"],
    scope: "Delivered web maintenance, accessibility compliance, and donation flow optimization for historic community impact and humanitarian organization.",
    featured: true
  },
  {
    id: "office-evolution",
    name: "Office Evolution",
    category: "B2B & Tech",
    platform: "Multi-Location CMS / HubSpot Integration",
    deliverables: ["Multi-Location Directory", "HubSpot CRM Booking", "Local SEO Infrastructure", "Lead Capture Funnels"],
    scope: "Coordinated web operations and lead generation architecture for nationwide flexible executive workspace and coworking franchise network.",
    featured: true
  },
  {
    id: "cloudx",
    name: "CloudX",
    category: "B2B & Tech",
    platform: "Modern Web Platform / DevOps Stack",
    deliverables: ["SaaS Product Landing", "Interactive Tech Demos", "Zapier Enterprise Matrix", "Technical SEO"],
    scope: "Architected modern, high-conversion cloud computing services website with automated client onboarding workflows and technical documentation hubs.",
    featured: true
  },
  {
    id: "prysma",
    name: "Prysma Lending",
    category: "Professional Services",
    platform: "Financial Services CMS / Custom Funnels",
    deliverables: ["Mortgage Application Funnel", "CRM Webhook Integration", "Security Compliance", "Speed Optimization"],
    scope: "Designed and launched secure lending and mortgage services platform with multi-step pre-qualification forms and automated lead dispatch.",
    featured: true
  },
  {
    id: "neurokin",
    name: "Neurokin",
    category: "Healthcare & Community",
    platform: "HealthTech CMS / Custom Funnel",
    deliverables: ["Patient Portal Integration", "HIPAA-Aligned Forms", "Educational Content Hub", "Mobile-First UX"],
    scope: "Built empathetic, accessible HealthTech web experience supporting neurodivergent care, patient resources, and streamlined specialist scheduling.",
    featured: true
  },
  {
    id: "beinhaker",
    name: "Beinhaker Law",
    category: "Professional Services",
    platform: "WordPress Core / Legal Operations",
    deliverables: ["Legal Practice Hub", "Automated Consultation Scheduler", "SEO Content Architecture", "Security Hardening"],
    scope: "Constructed comprehensive business and estate law firm web platform with automated client intake pipelines and local search dominance.",
    featured: false
  },
  {
    id: "bridging-the-gaps",
    name: "Bridging the Gaps",
    category: "Healthcare & Community",
    platform: "Healthcare CMS / Resource Center",
    deliverables: ["Clinical Intake Workflows", "Resource Directory", "Speed & Security Optimization", "Mobile Responsiveness"],
    scope: "Managed digital presence, confidential client contact channels, and program informational hubs for established healthcare and recovery institute.",
    featured: false
  },
  {
    id: "brookline-lock",
    name: "Brookline Lock Company",
    category: "Professional Services",
    platform: "Commercial Services CMS / Fleet Hub",
    deliverables: ["Commercial Product Catalog", "Service Dispatch Request Flow", "Technical SEO", "Local Map Schema"],
    scope: "Engineered commercial security and architectural hardware website featuring emergency service booking and extensive B2B product catalogs.",
    featured: false
  },
  {
    id: "certified-contract-solutions",
    name: "Certified Contract Solutions (CCS)",
    category: "B2B & Tech",
    platform: "B2B Enterprise Portal / CRM Integration",
    deliverables: ["B2B RFQ Submissions", "HubSpot Sales Pipeline", "Contract Management Showcase", "Fleet Maintenance"],
    scope: "Developed commercial facilities and contracting solutions web portal with integrated Request for Quote (RFQ) automated workflows.",
    featured: false
  },
  {
    id: "green-roots-organic",
    name: "Green Roots Organic",
    category: "Home & Lifestyle",
    platform: "Eco Services Web Portal / Custom Quoting",
    deliverables: ["Custom Quote Calculator", "Automated Lead Routing", "Regional Service Pages", "Core Web Vitals 99+"],
    scope: "Built eco-friendly lawn care and organic landscaping platform with interactive square-footage pricing estimates and instant booking.",
    featured: false
  },
  {
    id: "ice-hunters",
    name: "Ice Hunters",
    category: "E-Commerce & Retail",
    platform: "Shopify Storefront / Outdoor Apparel",
    deliverables: ["Custom Theme Development", "Visual Merchandising", "Fast Cart & Checkout", "Social Proof Integration"],
    scope: "Launched high-impact outdoor sporting apparel e-commerce store with dynamic lookbooks, sizing guides, and flash sale countdown infrastructure.",
    featured: false
  },
  {
    id: "linecity",
    name: "Linecity",
    category: "B2B & Tech",
    platform: "Tech Infrastructure CMS / Product Matrix",
    deliverables: ["Interactive Product Specs", "Technical Documentation Hub", "CRM API Integration", "Global CDN Setup"],
    scope: "Designed sleek, minimalist technology infrastructure and software website with responsive interactive product showcases.",
    featured: false
  },
  {
    id: "little-friends",
    name: "Little Friends",
    category: "Home & Lifestyle",
    platform: "Child Development & Education CMS",
    deliverables: ["Parent Enrollment Portals", "Class Calendar Systems", "Mobile Optimization", "Community Newsletter Sync"],
    scope: "Created warm, accessible, and friendly education website for child development programs with online enrollment inquiries.",
    featured: false
  },
  {
    id: "maxx-save",
    name: "Maxx Save Discount Store & Furniture",
    category: "E-Commerce & Retail",
    platform: "Retail Catalog & Furniture E-Commerce",
    deliverables: ["Large Scale Catalog Sync", "Local Delivery Radius Calculator", "Financing Integration", "Store Locator"],
    scope: "Architected heavy-inventory retail furniture catalog and discount warehouse storefront with local delivery logistics calculator.",
    featured: false
  },
  {
    id: "strong-hardwood-floors",
    name: "Strong Hardwood Floors",
    category: "Home & Lifestyle",
    platform: "Craftsmanship Portfolio / Estimator",
    deliverables: ["High-Res Project Galleries", "Material Selection Guide", "Instant Estimate Form", "Google Business SEO"],
    scope: "Delivered premium artisan hardwood flooring portfolio website highlighting custom installations, finish selectors, and instant estimation.",
    featured: false
  },
  {
    id: "teddy-and-puppy",
    name: "Teddy + Puppy & Co.",
    category: "E-Commerce & Retail",
    platform: "Boutique Pet Care & E-Commerce",
    deliverables: ["Shopify Boutique Theme", "Recurring Subscription Box", "Grooming Scheduler", "Loyalty Rewards"],
    scope: "Crafted delightful boutique pet care brand e-commerce storefront with recurring treat subscriptions and automated grooming appointment booking.",
    featured: false
  },
  {
    id: "tourney-direct",
    name: "Tourney Direct",
    category: "Professional Services",
    platform: "Sports Tournament SaaS / Web Platform",
    deliverables: ["Live Bracket Display", "Team Registration Engine", "Payment Processing", "Automated SMS Alerts"],
    scope: "Architected comprehensive sports tournament management web application with live score updates, automated scheduling, and team registration.",
    featured: false
  },
  {
    id: "tri-county-tropicals",
    name: "Tri-County Tropicals",
    category: "E-Commerce & Retail",
    platform: "Specialty Marine & Aquatic E-Commerce",
    deliverables: ["Live Stock Updates", "Temperature-Controlled Shipping Rules", "Species Care Guides", "Local Pickup Scheduler"],
    scope: "Constructed specialized exotic aquatic and tropical fish store website with live inventory availability and custom shipping logic.",
    featured: false
  },
  {
    id: "rohrer-mfg",
    name: "Rohrer Manufacturing",
    category: "E-Commerce & Retail",
    platform: "Industrial E-Commerce / Post Driver Hub",
    deliverables: ["Specification Matrix", "Direct Checkout Flow", "Contractor Sizing Guide", "Technical SEO"],
    scope: "Designed and developed modern industrial e-commerce platform capturing 36.5K users and 31.6K engaged sessions.",
    featured: true
  },
  {
    id: "the-ifish-store",
    name: "The iFISH Store",
    category: "E-Commerce & Retail",
    platform: "Shopify Storefront / Aquatic D2C",
    deliverables: ["High-Res Visual Merchandising", "Bundle Promotions (+45%)", "Consumer SEO", "Live Arrival Trust"],
    scope: "Executed high-converting Shopify optimization with bundle promotions and consumer SEO targeting aquatic hobbyists.",
    featured: false
  },
  {
    id: "elite-psychiatry",
    name: "Elite Psychiatry",
    category: "Healthcare & Community",
    platform: "Psychiatric CMS / Patient Care Portal",
    deliverables: ["Capabilities Catalog", "Standardized Mobile UX", "Intake Workflows", "Brand Voice Alignment"],
    scope: "Reformatted brand voice, added clinical capabilities catalog, and standardized patient intake across all devices.",
    featured: false
  },
  {
    id: "essex-union-podiatry",
    name: "Essex Union Podiatry",
    category: "Healthcare & Community",
    platform: "Medical CMS / Multi-Location Scheduler",
    deliverables: ["Online Booking Engine (+55%)", "Doctor & Location Hubs", "Local Map SEO (#1 Rank)", "Ongoing Web Ops"],
    scope: "Engineered top-of-funnel marketing website and continuous web operations driving +55% online appointment growth.",
    featured: false
  }
];
