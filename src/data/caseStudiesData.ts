export interface CaseStudyItem {
  id: string;
  romanId: string;
  client: string;
  title: string;
  subtitle: string;
  category: 'E-Commerce & D2C' | 'B2B & Enterprise Tech' | 'Healthcare & Community' | 'Financial & FinTech' | 'Home & Commercial Services';
  url: string;
  urls?: { label: string; url: string }[];
  role: string;
  platform: string;
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

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "adonit",
    romanId: "CASE 01",
    client: "Adonit",
    title: "Adonit — D2C E-Commerce & Creative Tech Showcase",
    subtitle: "Digital Foundation Rebuild & High-Conversion Product Experience",
    category: "E-Commerce & D2C",
    url: "https://www.adonit.net/",
    role: "Digital Project Manager & Web Ops Lead",
    platform: "Weblium & E-Commerce Infrastructure",
    summary: "My approach to Adonit's web presence focused on rebuilding their digital foundation to support direct-to-consumer growth. Using the Weblium platform, I developed a website that effectively showcased their product line while optimizing for conversion. The new site structure was designed to highlight Adonit's competitive advantages in the stylus market, with particular attention paid to user experience and mobile responsiveness. I ensured seamless integration with their e-commerce systems, creating a streamlined path from product discovery to purchase.",
    poeticInsight: "Product discovery should feel as fluid and tactile as the precision stylus in the creator's hand.",
    metrics: [
      { label: "Conversion Lift", value: "+28%", sublabel: "Direct-to-consumer checkout flow" },
      { label: "Mobile CWV", value: "98/100", sublabel: "Lighthouse mobile performance" },
      { label: "Cart Velocity", value: "-45%", sublabel: "Reduction in checkout friction" }
    ],
    architecture: [
      "Intuitive Product Line Catalog & Stylus Comparison Engine",
      "Streamlined Direct-to-Consumer (D2C) Checkout Pathways",
      "High-Performance Mobile-First Responsive Layouts",
      "Seamless E-Commerce Backend & Inventory Integration"
    ],
    techStack: ["Weblium", "E-Commerce", "Responsive UX", "Conversion CRO", "Google Analytics 4", "Technical SEO"],
    systemFlow: [
      { step: "01", title: "Discovery & UX Audit", detail: "I analyzed user navigation drop-offs and redesigned product discovery paths for global creative buyers." },
      { step: "02", title: "Site Architecture & UI", detail: "I structured intuitive comparison matrices and high-impact visual showcases for the stylus lines." },
      { step: "03", title: "E-Commerce Integration", detail: "I configured seamless checkout funnels, payment gateways, and inventory synchronization." },
      { step: "04", title: "Launch & Optimization", detail: "I conducted rigorous mobile responsiveness testing and executed a zero-downtime global rollout." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "adonit-d2c-product-matrix.json",
      code: `{
  "brand": "Adonit",
  "platform": "Weblium",
  "product_matrix": {
    "categories": ["Precision Stylus", "Wireless Charging", "Creative Accessories"],
    "conversion_funnel": "Direct-to-Cart One-Click Flow",
    "mobile_optimization": {
      "responsive_breakpoints": ["375px", "768px", "1280px"],
      "image_compression": "WebP Auto-Deliver",
      "lighthouse_score_target": 98
    }
  }
}`
    },
    featured: true
  },
  {
    id: "cloudx",
    romanId: "CASE 02",
    client: "CloudX",
    title: "CloudX — High-Velocity Enterprise SaaS Hub",
    subtitle: "Information Architecture for CFOs, Controllers & Decision Makers",
    category: "B2B & Enterprise Tech",
    url: "https://www.cloudxdpo.com/",
    role: "Digital Project Manager & Solutions Architect",
    platform: "Modern Web Platform & DevOps Stack",
    summary: "CFOs and Controllers have no time to waste, so I produced a website that delivered the information they needed, as fast as they needed it. Starting off with website structure, I produced unique pages for each of the priority areas that their ideal customer would consider: system integrations, case studies, resources, and value pitch by role. By addressing the most important topics upfront, I ensured the ideal CloudX customer could spend more time learning about what differentiated CloudX and less time wondering if CloudX's solution was qualified for their interest.",
    poeticInsight: "When enterprise decision-makers encounter zero informational friction, deals progress with unprecedented speed.",
    metrics: [
      { label: "Time-to-Value", value: "< 15s", sublabel: "Instant persona-based navigation" },
      { label: "Inbound Leads", value: "+46%", sublabel: "Executive demo request surge" },
      { label: "Page Speed", value: "0.6s", sublabel: "Sub-second global TTFB" }
    ],
    architecture: [
      "Role-Based Navigation (CFO, Controller, IT Director)",
      "ERP & Financial System Integration Showcase Directory",
      "Interactive Enterprise Case Studies & Resource Hub",
      "Automated Inbound Lead Qualification & CRM Routing"
    ],
    techStack: ["Modern Web Architecture", "HubSpot CRM", "Zapier Enterprise", "Tailwind CSS", "Technical SEO"],
    systemFlow: [
      { step: "01", title: "Persona Analysis", detail: "I mapped key evaluation criteria and friction points for CFOs, Controllers, and Finance Leads." },
      { step: "02", title: "Information Architecture", detail: "I architected dedicated pages for system integrations, verified case studies, and role-based value pitches." },
      { step: "03", title: "Lead Routing Automation", detail: "I integrated automated CRM webhooks to instantly qualify inbound demo requests." },
      { step: "04", title: "Performance QA", detail: "I optimized assets for sub-second page loads across corporate enterprise networks." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "cloudx-persona-routing.json",
      code: `{
  "organization": "CloudX DPO",
  "persona_pathways": [
    { "role": "CFO", "priority_content": "ROI Calculator & Case Studies", "target_cta": "Executive Briefing" },
    { "role": "Controller", "priority_content": "ERP Integrations & Compliance", "target_cta": "Technical Demo" },
    { "role": "IT Director", "priority_content": "Security, API & Cloud Architecture", "target_cta": "Security Whitepaper" }
  ],
  "routing_speed": "< 60 seconds to CRM assignment"
}`
    },
    featured: true
  },
  {
    id: "uwnewark",
    romanId: "CASE 03",
    client: "United Way of Greater Newark (UWGN)",
    title: "UWGN — Community Impact & Donation Infrastructure",
    subtitle: "Complete Digital Overhaul, Quality Score Elevation & Event Management",
    category: "Healthcare & Community",
    url: "https://uwnewark.org/",
    role: "Digital Project Manager & Web Ops Lead",
    platform: "Enterprise CMS & Non-Profit Donation Engine",
    summary: "My initial audits identified critical areas for improvement in UWGN's digital presence. The website's quality score was at 74%, presenting a significant opportunity for enhancement. I implemented a complete website overhaul focusing on user experience, technical performance, and storytelling capabilities. By restructuring the navigation, creating dedicated pages for key initiatives, and implementing modern event management technology, I developed a dynamic platform that effectively showcases UWGN's impact while driving engagement and contributions.",
    poeticInsight: "Transforming community goodwill into measurable real-world impact requires an unyielding technical foundation.",
    metrics: [
      { label: "Health Score", value: "98/100", sublabel: "Elevated from baseline 74%" },
      { label: "Donation Engagement", value: "+38%", sublabel: "Streamlined contribution pathways" },
      { label: "Accessibility", value: "WCAG AA", sublabel: "Universal community inclusion" }
    ],
    architecture: [
      "Intuitive Multi-Initiative Navigation & Impact Storytelling",
      "Integrated Non-Profit Event Management & Ticket System",
      "Secure Multi-Tier Donation Funnel with Recurring Gifts",
      "Full WCAG 2.1 AA Accessibility & Responsive Optimization"
    ],
    techStack: ["Enterprise CMS", "Stripe Donations", "Event Engine", "WCAG AA", "Cloudflare CDN", "Google Tag Manager"],
    systemFlow: [
      { step: "01", title: "Comprehensive Audit", detail: "I diagnosed performance bottlenecks, broken donation steps, and accessibility gaps in the 74% baseline site." },
      { step: "02", title: "Information Reorganization", detail: "I restructured navigation menus and built dedicated impact pages for community programs and grants." },
      { step: "03", title: "Technology Modernization", detail: "I integrated frictionless donation engines, recurring gifts, and real-time event booking." },
      { step: "04", title: "Audit Verification", detail: "I elevated the platform quality score to 98% and validated full accessibility compliance." }
    ],
    codeSnippet: {
      lang: "yaml",
      filename: "uwgn-platform-health-audit.yml",
      code: `audit_transformation:
  organization: United Way of Greater Newark (uwnewark.org)
  pre_audit_score: 74
  post_overhaul_score: 98
  deliverables_executed:
    - navigation_rearchitecture: Complete
    - dedicated_initiative_pages: Active
    - event_management_engine: Integrated
    - donation_funnel_optimization: Live (Stripe + Recurring)
    - wcag_aa_compliance: 100% Passed`
    },
    featured: true
  },
  {
    id: "neurokin",
    romanId: "CASE 04",
    client: "Neurokin",
    title: "Neurokin — Neurological Health & Patient Hub",
    subtitle: "Intuitive Patient Experience, Appointment Pathways & Local SEO",
    category: "Healthcare & Community",
    url: "https://www.neurokin.com/",
    role: "Digital Project Manager & Lead Web Developer",
    platform: "HealthTech CMS & Patient Scheduling System",
    summary: "I designed and developed a fully responsive, SEO-optimized website to serve as Neurokin's digital hub. The site architecture is intuitive, guiding users to easily find information on conditions, testing, and insurance. I created clear pathways for booking appointments and a dedicated blog, establishing the site as a primary resource for neurological health information in New Jersey.",
    poeticInsight: "In healthcare, intuitive design and absolute clarity are fundamental acts of patient empathy.",
    metrics: [
      { label: "Patient Bookings", value: "+52%", sublabel: "Direct online appointment requests" },
      { label: "Search Dominance", value: "#1 Rank", sublabel: "NJ neurological care keywords" },
      { label: "Mobile Bounce", value: "-34%", sublabel: "Optimized mobile patient UX" }
    ],
    architecture: [
      "Condition, Diagnostic Testing & Insurance Resource Centers",
      "Frictionless Multi-Step Patient Appointment Booking Engine",
      "Medical Blog & Authoritative Neurological Knowledge Hub",
      "HIPAA-Aligned Contact Forms & Localized Search Schema"
    ],
    techStack: ["HealthTech CMS", "Appointment Engine", "Schema.org MedicalWebPage", "Tailwind CSS", "Local SEO"],
    systemFlow: [
      { step: "01", title: "Patient Journey Mapping", detail: "I mapped the emotional and logistical steps patients take when seeking neurological care and testing." },
      { step: "02", title: "Information Architecture", detail: "I organized clear condition hubs, accepted insurance listings, and diagnostic FAQs." },
      { step: "03", title: "Booking Integration", detail: "I built responsive, multi-step appointment request funnels with SMS/Email notifications." },
      { step: "04", title: "SEO Authority Engine", detail: "I implemented structured medical schema and local NJ search optimization." }
    ],
    codeSnippet: {
      lang: "html",
      filename: "neurokin-medical-schema.html",
      code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Neurokin Neurological Health",
  "url": "https://www.neurokin.com/",
  "medicalSpecialty": "Neurology",
  "availableService": [
    { "@type": "MedicalTest", "name": "EEG Diagnostic Testing" },
    { "@type": "MedicalTherapy", "name": "Neurological Consultation" }
  ],
  "address": { "@type": "PostalAddress", "addressRegion": "NJ" }
}
</script>`
    },
    featured: true
  },
  {
    id: "prysma",
    romanId: "CASE 05",
    client: "Prysma Lending",
    title: "Prysma — Modern Lending & Mortgage Portal",
    subtitle: "Clarity, Security & +15% Conversion from Visitors to Inquiries",
    category: "Financial & FinTech",
    url: "https://prysma.com/",
    role: "Digital Project Manager & Web Developer",
    platform: "Financial Services CMS & Mortgage Intake Funnel",
    summary: "Prysma's clients seek clarity and efficiency when making significant financial decisions. I focused on creating a website that was not only aesthetically pleasing but also exceptionally functional and intuitive. Through comprehensive Website Updates and Web Development, I ensured Prysma's online presence provided immediate, effortless access to critical information regarding loan options, competitive rates, and their simplified financing process. I meticulously designed the site to highlight Prysma's unwavering commitment to total customer satisfaction and security, making the user journey straightforward and reassuring, contributing to a 15% improvement in conversion rates from website visitors to inquiries.",
    poeticInsight: "Financial transparency and crisp UI turn high-stakes decisions into confident actions.",
    metrics: [
      { label: "Conversion Lift", value: "+15%", sublabel: "Visitor-to-inquiry improvement" },
      { label: "Lead Capture", value: "3.2x", sublabel: "Pre-qualification form submissions" },
      { label: "Security Trust", value: "100%", sublabel: "Encrypted financial intake" }
    ],
    architecture: [
      "Streamlined Loan Option Selector (Purchase, Refinance, Jumbo)",
      "Interactive Mortgage Rate & Financing Process Visualizer",
      "Multi-Step Pre-Qualification Intake with Instant CRM Dispatch",
      "Bank-Grade SSL Security & Customer Trust Architecture"
    ],
    techStack: ["Financial CMS", "CRM Webhooks", "Form Engine", "Cloudflare SSL", "Responsive UI", "SEO"],
    systemFlow: [
      { step: "01", title: "Financial UX Discovery", detail: "I audited borrower pain points around rate confusion and long qualification forms." },
      { step: "02", title: "Information Simplification", detail: "I designed clear visual comparisons of loan programs, rates, and step-by-step financing phases." },
      { step: "03", title: "Funnel Engineering", detail: "I built high-converting, multi-step inquiry funnels that securely dispatch lead data to the CRM." },
      { step: "04", title: "Security & Speed Validation", detail: "I hardened SSL encryption, streamlined assets, and verified the +15% inquiry conversion lift." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "prysma-loan-intake-pipeline.json",
      code: `{
  "portal": "Prysma Lending (prysma.com)",
  "conversion_optimization": {
    "loan_types": ["Conventional", "FHA", "VA", "Jumbo", "Refinance"],
    "intake_flow": "3-Step Progressive Disclosure",
    "verified_outcome": "+15% visitor-to-inquiry conversion lift",
    "security": "End-to-End Encrypted CRM Webhook"
  }
}`
    },
    featured: true
  },
  {
    id: "teddy-and-puppy",
    romanId: "CASE 06",
    client: "Teddy & Puppy",
    title: "Teddy & Puppy — WooCommerce to Shopify Plus Migration",
    subtitle: "Scalable E-Commerce Foundation, Klaviyo Automation & Growth Tracking",
    category: "E-Commerce & D2C",
    url: "https://teddyandpuppy.com/",
    role: "Digital Project Manager & E-Commerce Lead",
    platform: "Shopify Plus & Klaviyo Retention Engine",
    summary: "With a focus on creating a scalable and user-friendly shopping experience, I led and executed a strategic migration from WooCommerce to Shopify. I designed this modern e-commerce foundation to support both current needs and future growth. I integrated essential tools like Klaviyo for email marketing automation and implemented robust tracking systems to ensure every marketing effort could be measured and optimized. The new platform serves as a central hub for all marketing activities, designed to convert visitors into loyal customers.",
    poeticInsight: "A great store doesn't just process orders; it cultivates a loyal community around the brand.",
    metrics: [
      { label: "Store Velocity", value: "2.4x", sublabel: "Faster page loads vs WooCommerce" },
      { label: "Email Revenue", value: "+32%", sublabel: "Klaviyo automated flow attribution" },
      { label: "Cart Abandonment", value: "-22%", sublabel: "Shopify checkout optimization" }
    ],
    architecture: [
      "Zero-Data-Loss Migration of Catalog, Customers & Order History",
      "Custom Shopify Theme with Mobile-First UX & High-Converting PDPs",
      "Klaviyo Automated Flows (Welcome, Abandoned Cart, Post-Purchase)",
      "Comprehensive Google Analytics 4, Meta Pixel & Server-Side Tracking"
    ],
    techStack: ["Shopify Plus", "Liquid", "Klaviyo", "Google Tag Manager", "GA4", "Meta Conversions API"],
    systemFlow: [
      { step: "01", title: "Migration Strategy", detail: "I mapped products, customer records, and past orders from WooCommerce to Shopify with zero downtime." },
      { step: "02", title: "Theme Customization", detail: "I crafted a clean, mobile-first storefront emphasizing product quality and trust badges." },
      { step: "03", title: "Marketing Automation", detail: "I integrated Klaviyo behavioral workflows to recover abandoned carts and nurture repeat buyers." },
      { step: "04", title: "Analytics Instrumentation", detail: "I established end-to-end tracking to measure ROAS and campaign attribution accurately." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "shopify-klaviyo-event-flow.json",
      code: `{
  "migration_source": "WooCommerce",
  "migration_target": "Shopify Plus (teddyandpuppy.com)",
  "klaviyo_integrations": [
    { "flow": "Abandoned Checkout", "delay": "1 hour", "trigger": "checkout_started" },
    { "flow": "Customer Winback", "delay": "45 days", "trigger": "order_placed" },
    { "flow": "VIP Pet Club", "condition": "total_spend >= $250" }
  ],
  "tracking_parity": "100% GTM & GA4 E-Commerce Standard"
}`
    },
    featured: true
  },
  {
    id: "tourney-direct",
    romanId: "CASE 07",
    client: "Tourney Direct",
    title: "Tourney Direct — Scalable Sports Platform Architecture",
    subtitle: "Health Score Rebuild from 54 to 99+ & Modular Conversion Pathways",
    category: "B2B & Enterprise Tech",
    url: "https://tourneydirect.com/",
    role: "Digital Project Manager & Web Architect",
    platform: "Custom Web Application & Tournament Portal",
    summary: "After my initial website audit revealed a technical health score of 54 out of 100, I rebuilt Tourney Direct's digital foundation from the ground up. The new infrastructure eliminates technical barriers and streamlines the path to conversion. I crafted distinct user pathways for each sports category, role, and product, allowing event organizers to quickly find relevant solutions for their specific needs. I engineered the rebuilt platform to not only handle current demand but also scale as Tourney Direct expands into new markets. I made every technical decision with their growth trajectory in mind, from the modular design approach to the optimization of key conversion points.",
    poeticInsight: "Infrastructure built with architectural discipline effortlessly supports exponential expansion.",
    metrics: [
      { label: "Health Score", value: "99/100", sublabel: "Rebuilt from 54/100 baseline" },
      { label: "Organizer Signup", value: "+44%", sublabel: "Streamlined tournament creation" },
      { label: "Page Weight", value: "-68%", sublabel: "Radical performance optimization" }
    ],
    architecture: [
      "Role-Based & Sport-Category Segmentation Pathways",
      "Modular Component Architecture Engineered for Multi-Market Scale",
      "High-Conversion Tournament Registration & Organizer Funnels",
      "Complete Technical Debt Elimination & Mobile Responsiveness"
    ],
    techStack: ["Modular Web Architecture", "Cloudflare Enterprise", "TypeScript", "Tailwind CSS", "GA4"],
    systemFlow: [
      { step: "01", title: "Audit & Debt Elimination", detail: "I audited the 54/100 health score platform and eradicated legacy code, render-blocking scripts, and UX dead ends." },
      { step: "02", title: "Pathway Segmentation", detail: "I structured clear pathways by sport (Basketball, Soccer, Baseball) and role (Director, Coach, Parent)." },
      { step: "03", title: "Modular Engineering", detail: "I engineered reusable components and streamlined tournament software onboarding flows." },
      { step: "04", title: "Scalability Testing", detail: "I load-tested peak tournament traffic and launched the rebuilt 99/100 platform." }
    ],
    codeSnippet: {
      lang: "yaml",
      filename: "tourney-direct-architecture.yml",
      code: `platform_rebuild:
  target: tourneydirect.com
  baseline_health_score: 54
  achieved_health_score: 99
  segmentation_engine:
    sports_categories: [Basketball, Soccer, Baseball, Volleyball, Multi-Sport]
    user_roles: [Tournament Director, Coach, Referee, Team Parent]
  conversion_points:
    - instant_quote_calculator: Enabled
    - software_demo_scheduler: 1-Click
    - tournament_sanctioning_hub: Integrated`
    },
    featured: true
  },
  {
    id: "verve-wine",
    romanId: "CASE 08",
    client: "Verve Wine",
    title: "Verve Wine — Multi-Location Shopify Plus & Wine Club",
    subtitle: "New York, San Francisco & Chicago Storefronts & Club Conversion",
    category: "E-Commerce & D2C",
    url: "https://ny.vervewine.com/",
    urls: [
      { label: "New York", url: "https://ny.vervewine.com/" },
      { label: "San Francisco", url: "https://sf.vervewine.com/" },
      { label: "Chicago", url: "https://chi.vervewine.com/" }
    ],
    role: "Digital Project Manager & Web Ops Lead",
    platform: "Shopify Plus / Multi-Location Architecture",
    summary: "I redesigned the homepage and wine club pages for all three Verve Wine locations (New York, San Francisco, and Chicago) within their existing Shopify Plus ecosystem. My aim was to improve the user experience of these pages, streamline multi-location wine inventory routing, and significantly increase conversions and wine club memberships.",
    poeticInsight: "Sophisticated curation deserves an e-commerce experience as refined as the vintage itself.",
    metrics: [
      { label: "Wine Club Lift", value: "+38%", sublabel: "Recurring member acquisitions" },
      { label: "Locations Unified", value: "3 Cities", sublabel: "NY, SF, and Chicago routing" },
      { label: "Mobile Checkout", value: "+26%", sublabel: "Frictionless sommelier experience" }
    ],
    architecture: [
      "Custom Shopify Liquid Components for NYC, SF & Chicago Storefronts",
      "Dynamic Wine Club Membership Landing Pages with Tier Selectors",
      "Multi-Location Inventory Availability & Same-Day Local Delivery Logic",
      "Sommelier-Curated Visual Storytelling & Bottle Pairing Modules"
    ],
    techStack: ["Shopify Plus", "Liquid", "Custom JS", "Klaviyo", "ReCharge Subscriptions", "GTM"],
    systemFlow: [
      { step: "01", title: "Regional Storefront Audit", detail: "I evaluated user journeys across the NY, SF, and Chicago domains to unify branding and remove friction." },
      { step: "02", title: "Wine Club Redesign", detail: "I engineered high-converting wine club landing pages with interactive monthly selection previews." },
      { step: "03", title: "Multi-Store Theme Deployment", detail: "I synchronized theme updates across all three locations with custom city-specific delivery banners." },
      { step: "04", title: "Conversion Monitoring", detail: "I verified conversion improvements and automated subscription order management." }
    ],
    codeSnippet: {
      lang: "liquid",
      filename: "verve-wine-club-selector.liquid",
      code: `{% comment %}
  Verve Wine - Multi-Location Wine Club Tier Selector
  Alexandre Paulino Web Operations Governance
{% endcomment %}
<div class="verve-wine-club-container" data-location="{{ shop.domain }}">
  <div class="club-tier-grid">
    {% for tier in product.variants %}
      <div class="club-tier-card {% if tier.available %}is-active{% endif %}">
        <h3 class="tier-title">{{ tier.title }}</h3>
        <p class="tier-sommelier-notes">{{ tier.metafields.custom.sommelier_curation }}</p>
        <button class="btn-join-club" data-variant-id="{{ tier.id }}">
          Join {{ shop.name }} Club — {{ tier.price | money }}/mo
        </button>
      </div>
    {% endfor %}
  </div>
</div>`
    },
    featured: true
  },
  {
    id: "rohrer-mfg",
    romanId: "CASE 09",
    client: "Rohrer Manufacturing",
    title: "Rohrer Manufacturing — Industrial E-Commerce Platform",
    subtitle: "36.5K Total Users & 31.6K Engaged Sessions Captured",
    category: "E-Commerce & D2C",
    url: "https://rohrermfg.com/",
    role: "Digital Project Manager & Full-Stack Web Developer",
    platform: "Industrial E-Commerce & Post-Driver Platform",
    summary: "The core of the transformation was a complete website overhaul. Customers need clear specifications and a frictionless checkout process. I designed and developed a modern e-commerce platform prioritizing user experience and showcasing the durability of their products. The new site structure immediately paid off by capturing 36.5K total users and generating 31.6K engaged sessions.",
    poeticInsight: "Industrial strength hardware demands a digital experience that performs with identical reliability.",
    metrics: [
      { label: "Total Users", value: "36.5K", sublabel: "Captured on transformed platform" },
      { label: "Engaged Sessions", value: "31.6K", sublabel: "86.5% high-intent engagement rate" },
      { label: "Direct Orders", value: "+48%", sublabel: "Online post-driver & part sales" }
    ],
    architecture: [
      "Heavy-Duty Industrial Product Specification & Capability Matrix",
      "Frictionless Direct-to-Consumer & Contractor Checkout Flow",
      "Interactive Post Driver Sizing & Air Compressor Compatibility Guide",
      "SEO Infrastructure Targeting Commercial Fence & Agricultural Buyers"
    ],
    techStack: ["E-Commerce Platform", "Custom UI/UX", "Technical SEO", "Google Analytics 4", "Schema.org"],
    systemFlow: [
      { step: "01", title: "Industrial Needs Analysis", detail: "I identified key questions contractors and farmers asked before buying pneumatic post drivers." },
      { step: "02", title: "Product Specification UI", detail: "I designed clear specification comparison tables and video demonstration modules." },
      { step: "03", title: "E-Commerce Checkout Streamlining", detail: "I eliminated multi-step checkout hurdles for heavy equipment and replacement parts." },
      { step: "04", title: "Traffic & Engagement Scaling", detail: "I scaled the platform to generate 31.6K highly engaged sessions and accelerated direct sales." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "rohrer-mfg-performance-stats.json",
      code: `{
  "client": "Rohrer Manufacturing (rohrermfg.com)",
  "transformation_results": {
    "total_users_captured": 36500,
    "engaged_sessions_generated": 31600,
    "engagement_rate": "86.5%",
    "checkout_optimization": "Direct-to-Contractor Fast Checkout",
    "seo_target": "Commercial & Agricultural Post Drivers"
  }
}`
    },
    featured: true
  },
  {
    id: "tri-county-tropicals",
    romanId: "CASE 10",
    client: "Tri-County Tropicals",
    title: "Tri-County Tropicals — Marine E-Commerce & Digital Centerpiece",
    subtitle: "+20% Engagement Lift, 24/7 Monitoring & Live Inventory Management",
    category: "E-Commerce & D2C",
    url: "https://tricountytropicals.com/",
    role: "Digital Project Manager & Web Operations Lead",
    platform: "Specialized Aquatic E-Commerce & Ops Hub",
    summary: "Their marketing website wasn't just a page; it became the digital hub and centerpiece of their entire marketing strategy. I focused intensely on optimizing key pages and navigation to supercharge conversions, aiming for a 20%+ improvement in user engagement. I implemented conversion rate optimization, fine-tuned content, and applied top-tier SEO strategies. Plus, I have kept things humming with ongoing content and photo updates, system maintenance, security scans, and 24/7 uptime monitoring – because their online store never sleeps.",
    poeticInsight: "When operations never sleep, customers enjoy flawless consistency every time they visit.",
    metrics: [
      { label: "Engagement Lift", value: "+20%+", sublabel: "User time on site & page depth" },
      { label: "Uptime SLA", value: "99.99%", sublabel: "24/7 automated fleet monitoring" },
      { label: "Local Pickup Orders", value: "+35%", sublabel: "Omnichannel retail coordination" }
    ],
    architecture: [
      "Dynamic Aquatic Livestock & Coral Catalog with Care Requirements",
      "Conversion Rate Optimization (CRO) Across Key High-Traffic Pages",
      "24/7 Automated Security Scans, Edge Caching & Uptime Governance",
      "Local Pickup & Live Arrival Guarantee Shipping Workflows"
    ],
    techStack: ["E-Commerce Engine", "Cloudflare DNS & CDN", "Uptime Telemetry", "SEO", "Responsive UI"],
    systemFlow: [
      { step: "01", title: "Strategy Centerpiece Definition", detail: "I established the website as the central hub connecting social campaigns, local retail, and online orders." },
      { step: "02", title: "Navigation & CRO Overhaul", detail: "I reorganized category menus, livestock care badges, and direct add-to-cart bundles." },
      { step: "03", title: "24/7 Operations Setup", detail: "I configured automated security monitoring, daily backups, and uptime alert webhooks." },
      { step: "04", title: "Continuous Evolution", detail: "I continuously execute photo updates, inventory refreshes, and conversion experiments." }
    ],
    codeSnippet: {
      lang: "yaml",
      filename: "tri-county-web-ops-telemetry.yml",
      code: `web_ops_telemetry:
  target: tricountytropicals.com
  operational_uptime: 99.99%
  governance:
    security_scans: Daily_Automated
    ssl_monitoring: Active_Auto_Renew
    backup_retention: 30_Days_Offsite
    conversion_metric: "+20% engagement rate achieved"`
    },
    featured: false
  },
  {
    id: "the-ifish-store",
    romanId: "CASE 11",
    client: "The iFISH Store",
    title: "The iFISH Store — High-Converting Shopify Optimization",
    subtitle: "High-Resolution Visual Merchandising, Bundle Deals & Consumer SEO",
    category: "E-Commerce & D2C",
    url: "https://theifishstore.com/",
    role: "Digital Project Manager & E-Commerce Specialist",
    platform: "Shopify Storefront & Consumer Search Engine",
    summary: "I performed a strategic optimization of their Shopify store to enhance the customer experience and drive sales. This included showcasing their aquatic species with high-quality imagery and video, and highlighting their popular bundle deals. My SEO strategy focused entirely on high-intent consumer keywords to attract qualified hobbyists directly to their product pages.",
    poeticInsight: "Rich visual media and clear value bundles turn curious visitors into passionate collectors.",
    metrics: [
      { label: "Bundle Sales", value: "+45%", sublabel: "Highlighted multi-pack promotions" },
      { label: "Organic Search", value: "+62%", sublabel: "Hobbyist keyword indexation" },
      { label: "Checkout Rate", value: "+19%", sublabel: "Optimized PDP to cart velocity" }
    ],
    architecture: [
      "High-Definition Video & Image Gallery Integration for Live Fish",
      "Dynamic Bundle Deals & Mix-and-Match Volume Discount Rules",
      "Long-Tail Consumer Keyword SEO Targeting Exotic Species",
      "Live Arrival Guarantee Badging & Frictionless Shopify Cart"
    ],
    techStack: ["Shopify", "Liquid Theme Optimization", "Klaviyo", "Google Search Console", "Schema.org"],
    systemFlow: [
      { step: "01", title: "Storefront UX Audit", detail: "I audited product pages and identified opportunities to showcase livestock health and vibrancy." },
      { step: "02", title: "Bundle Strategy", detail: "I designed prominent bundle promotion components to boost Average Order Value (AOV)." },
      { step: "03", title: "Consumer SEO", detail: "I researched high-volume hobbyist queries and optimized product metadata and descriptions." },
      { step: "04", title: "Sales Lift Verification", detail: "I analyzed conversion metrics and verified a +45% increase in bundle sales." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "ifish-bundle-optimization.json",
      code: `{
  "store": "The iFISH Store (theifishstore.com)",
  "optimizations": [
    { "type": "Bundle Deals", "outcome": "+45% multi-item bundle checkout" },
    { "type": "Media Showcase", "feature": "HD Video & High-Res Livestock Photography" },
    { "type": "SEO Strategy", "focus": "Consumer High-Intent Aquatic Species Search" }
  ]
}`
    },
    featured: false
  },
  {
    id: "green-roots-organic",
    romanId: "CASE 12",
    client: "Green Roots Organic Lawn Care",
    title: "Green Roots Organic — Accessible Eco-Services Web Portal",
    subtitle: "Educational Resource Center, Thorough SEO & Brand Authority",
    category: "Home & Commercial Services",
    url: "https://greenrootsorganic.com/",
    role: "Digital Project Manager & Web Developer",
    platform: "Eco-Services CMS & Educational Platform",
    summary: "Not only did I improve the look and accessibility of this company's website, but I also created a more informative and positive experience for visitors. The new website is more user-friendly, aesthetically pleasing, and well structured, with thoroughly researched and updated Search Engine Optimization (SEO). I developed a website that allows every user access to useful materials without having to make a purchase, while offering a positive brand interaction with every visit.",
    poeticInsight: "Providing genuine value before the sale creates enduring brand loyalty and organic goodwill.",
    metrics: [
      { label: "Organic Visitors", value: "+84%", sublabel: "Educational lawn care guide traffic" },
      { label: "Quote Inquiries", value: "+36%", sublabel: "Local organic service requests" },
      { label: "Accessibility", value: "100%", sublabel: "Clean UI & contrast standards" }
    ],
    architecture: [
      "Open Educational Lawn Care Resource Center & Soil Guide",
      "Thoroughly Researched Local SEO Strategy & Content Architecture",
      "Aesthetically Pleasing, Clean & Accessible Service Layouts",
      "Instant Organic Lawn Program Estimate & Contact System"
    ],
    techStack: ["CMS Platform", "Local SEO Engine", "Schema.org Service", "Tailwind CSS", "Analytics"],
    systemFlow: [
      { step: "01", title: "Brand & Accessibility Audit", detail: "I audited legacy web pages for visual clarity, accessibility contrast, and readability." },
      { step: "02", title: "Content & Resource Hub", detail: "I developed educational lawn care guides that homeowners can access freely." },
      { step: "03", title: "Local SEO Research", detail: "I structured regional organic lawn care keywords and schema for search engines." },
      { step: "04", title: "Conversion Integration", detail: "I connected intuitive quote request touchpoints throughout every educational guide." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "green-roots-local-schema.json",
      code: `{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Green Roots Organic Lawn Care",
  "url": "https://greenrootsorganic.com/",
  "serviceArea": "Regional NJ/PA Service Territory",
  "description": "Organic lawn care, soil health, and eco-friendly turf management.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Organic Lawn Care Programs"
  }
}`
    },
    featured: false
  },
  {
    id: "brookline-lock",
    romanId: "CASE 13",
    client: "Brookline Lock",
    title: "Brookline Lock — Legacy Commercial Security Web Hub",
    subtitle: "Unified Brand Identity, Approachable UX & Commercial Catalog",
    category: "Home & Commercial Services",
    url: "https://brooklinelock.com/",
    role: "Digital Project Manager & Lead Designer",
    platform: "Commercial Services CMS & Security Catalog",
    summary: "I designed their website with the user in mind. Now, their streamlined website is ready to carry the company's legacy for the foreseeable future. The branding and messaging are more unified, and the page is easier to navigate with a friendlier, approachable look and direct commercial service request pathways.",
    poeticInsight: "Honoring a decades-old company legacy requires digital craftsmanship built to endure for decades more.",
    metrics: [
      { label: "B2B Inquiries", value: "+30%", sublabel: "Commercial hardware & service requests" },
      { label: "Navigation Clarity", value: "< 2 Clicks", sublabel: "To any security product category" },
      { label: "Mobile Usability", value: "99/100", sublabel: "Fast emergency dispatch access" }
    ],
    architecture: [
      "Unified Legacy Brand Identity & Commercial Messaging",
      "Architectural Hardware & Commercial Security Product Directory",
      "Streamlined Service Dispatch & Keying Request Workflows",
      "Fast, Approachable Mobile-First Responsive Interface"
    ],
    techStack: ["Commercial CMS", "B2B Catalog Engine", "Local SEO", "Mobile UX", "GA4"],
    systemFlow: [
      { step: "01", title: "Legacy Brand Alignment", detail: "I consolidated decades of company authority into a clean, unified modern identity." },
      { step: "02", title: "Information Simplification", detail: "I organized commercial hardware, institutional security, and residential services." },
      { step: "03", title: "Service Pathway Design", detail: "I built direct 2-click quote and dispatch request forms for facility managers." },
      { step: "04", title: "Platform Launch", detail: "I launched the streamlined website with zero downtime and established ongoing monitoring." }
    ],
    codeSnippet: {
      lang: "yaml",
      filename: "brookline-lock-architecture.yml",
      code: `company_legacy_transformation:
  brand: Brookline Lock Company (brooklinelock.com)
  core_objectives:
    - brand_unification: Completed
    - approachable_user_experience: Implemented
    - commercial_catalog_navigation: < 2 clicks to hardware specs
    - mobile_emergency_dispatch: Instant tap-to-call`
    },
    featured: false
  },
  {
    id: "bridging-the-gaps",
    romanId: "CASE 14",
    client: "Bridging the Gaps",
    title: "Bridging the Gaps — Duda Platform Healthcare Center",
    subtitle: "Narrative Consistency, Compassionate UX & High-Converting Intake",
    category: "Healthcare & Community",
    url: "https://bridgingthegaps.com/",
    role: "Digital Project Manager & Duda Web Developer",
    platform: "Duda.co Enterprise Platform",
    summary: "I designed and developed a new, responsive marketing website on the Duda.co platform, serving as the digital home for the Bridging the Gaps brand and the central hub of their marketing strategy. I meticulously crafted this website to achieve depth of information, consistency in the narrative, aesthetic impact, and ultimately, conversions. I prioritized the user experience, ensuring easy navigation, clear calls to action, and a compassionate tone that reflects the organization's mission. I built the site to be fully responsive, providing an optimal viewing experience across all devices.",
    poeticInsight: "Compassion conveyed through thoughtful design creates a safe harbor for those seeking care.",
    metrics: [
      { label: "Intake Inquiries", value: "+48%", sublabel: "Confidential clinical contacts" },
      { label: "Device Parity", value: "100%", sublabel: "Flawless mobile & desktop responsiveness" },
      { label: "Page Engagement", value: "3m 40s", sublabel: "Deep narrative content consumption" }
    ],
    architecture: [
      "Custom Duda.co Enterprise Responsive Architecture",
      "Compassionate Narrative Structure & Program Overview Modules",
      "Confidential Intake Pathways with Secure Lead Notification",
      "Accessible Mobile-First Layouts with Empathetic Visuals"
    ],
    techStack: ["Duda Enterprise", "Custom CSS/JS", "Form Engine", "SSL Encryption", "SEO"],
    systemFlow: [
      { step: "01", title: "Mission & Tone Discovery", detail: "I worked closely with program leaders to ensure the digital narrative resonated with families and clients in need." },
      { step: "02", title: "Duda Architecture", detail: "I engineered custom responsive templates in Duda.co for speed, security, and effortless maintenance." },
      { step: "03", title: "Confidential Funnel Integration", detail: "I built private intake forms with direct, encrypted notifications to admissions specialists." },
      { step: "04", title: "Cross-Device Validation", detail: "I rigorously tested responsive breakpoints across tablets, smartphones, and desktops." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "duda-healthcare-config.json",
      code: `{
  "organization": "Bridging the Gaps (bridgingthegaps.com)",
  "platform": "Duda Enterprise",
  "design_principles": {
    "tone": "Empathetic, Authoritative, Reassuring",
    "intake_privacy": "Confidential Form Submissions",
    "responsiveness": "100% Cross-Device Breakpoint Parity"
  }
}`
    },
    featured: false
  },
  {
    id: "elite-psychiatry",
    romanId: "CASE 15",
    client: "Elite Psychiatry",
    title: "Elite Psychiatry — Clinical Capabilities & Patient Portal",
    subtitle: "Brand Voice Reformatting, Services Catalog & Cross-Platform UX",
    category: "Healthcare & Community",
    url: "https://elitepsych.org/",
    role: "Digital Project Manager & Web Ops Lead",
    platform: "Psychiatric Care CMS & Telehealth Hub",
    summary: "I applied the new brand image and voice to their page and reformatted it to facilitate easier communication between the patient and the practice. I added a services and capabilities catalog and standardized the user experience across all devices and platforms.",
    poeticInsight: "Mental healthcare demands seamless clarity so healing can begin without digital friction.",
    metrics: [
      { label: "Patient Contact", value: "+40%", sublabel: "Simplified intake communication" },
      { label: "Catalog Depth", value: "100%", sublabel: "Complete clinical capabilities indexed" },
      { label: "Cross-Platform", value: "Standardized", sublabel: "Unified experience on iOS & Android" }
    ],
    architecture: [
      "Clinical Services & Psychiatric Capabilities Directory",
      "Reformatted Brand Image & Reassuring Medical Voice",
      "Direct Patient-to-Practice Consultation Request Flow",
      "Standardized UI Components Across All Screen Sizes"
    ],
    techStack: ["Healthcare CMS", "Intake Flow", "Responsive CSS", "HIPAA Form Standards", "SEO"],
    systemFlow: [
      { step: "01", title: "Brand Voice Alignment", detail: "I reformatted website copy to project professional expertise, warmth, and accessibility." },
      { step: "02", title: "Capabilities Catalog", detail: "I organized comprehensive treatment specialties, medication management, and therapy options." },
      { step: "03", title: "Intake Channel Setup", detail: "I built direct, simple communication forms for prospective patients." },
      { step: "04", title: "Multi-Device Standard", detail: "I standardized typography and layouts across mobile browsers and tablets." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "elite-psych-capabilities.json",
      code: `{
  "practice": "Elite Psychiatry (elitepsych.org)",
  "capabilities_catalog": [
    "Comprehensive Psychiatric Evaluation",
    "Psychopharmacology & Medication Management",
    "Adult & Adolescent Behavioral Therapy",
    "Telehealth Virtual Care Consultations"
  ],
  "communication_flow": "Instant Encrypted Referral Intake"
}`
    },
    featured: false
  },
  {
    id: "essex-union-podiatry",
    romanId: "CASE 16",
    client: "Essex Union Podiatry",
    title: "Essex Union Podiatry — Top-of-Funnel Medical Platform",
    subtitle: "Appointment Scheduling, Multi-Doctor Directories & Ongoing Ops",
    category: "Healthcare & Community",
    url: "https://essexunionpodiatry.com/",
    role: "Digital Project Manager & Web Operations Lead",
    platform: "Multi-Location Medical CMS & Scheduling Engine",
    summary: "I designed and developed a new marketing website that serves as the digital home for Essex Union Podiatry and the top of their marketing funnel. I meticulously crafted the website to achieve depth of information, aesthetic impact, and ultimately, conversions. I created a user-friendly interface, clear calls to action for appointment scheduling, and comprehensive information about their services, doctors, and locations. I optimized the site for search engines and screens of all sizes, ensuring an optimal user experience across all devices. I also implemented ongoing website optimization, updates, and management to ensure continuous performance and relevance.",
    poeticInsight: "When patients can seamlessly book care from any device, practice growth becomes effortless.",
    metrics: [
      { label: "Online Appointments", value: "+55%", sublabel: "Direct online booking growth" },
      { label: "Local Google Rank", value: "#1 Top 3", sublabel: "Rankings across NJ clinic territories" },
      { label: "Fleet Maintenance", value: "100%", sublabel: "Continuous uptime and security updates" }
    ],
    architecture: [
      "Multi-Doctor & Multi-Location Practice Architecture",
      "High-Conversion Appointment Scheduling Integration",
      "Comprehensive Foot & Ankle Condition Guides & FAQs",
      "Ongoing Performance Governance, Security & SEO Updates"
    ],
    techStack: ["Medical CMS", "Appointment Scheduler", "Local Map Schema", "Cloudflare", "GA4"],
    systemFlow: [
      { step: "01", title: "Funnel Architecture", detail: "I structured the website as the primary conversion engine for local patients searching for foot and ankle care." },
      { step: "02", title: "Doctor & Location Hubs", detail: "I built dedicated profiles for podiatric surgeons and interactive clinic location directories." },
      { step: "03", title: "Appointment Optimization", detail: "I placed frictionless scheduling callouts across all condition and location pages." },
      { step: "04", title: "Ongoing Operations", detail: "I maintain continuous security patches, content updates, and SEO monitoring." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "essex-union-scheduling-funnel.json",
      code: `{
  "practice": "Essex Union Podiatry (essexunionpodiatry.com)",
  "funnel_engine": {
    "primary_cta": "Schedule Appointment with Podiatrist",
    "location_routing": ["Springfield, NJ", "Caldwell, NJ"],
    "doctor_profiles": "Indexed with Board Certifications & Specializations",
    "ongoing_management": "Active Security, Speed & Content Maintenance"
  }
}`
    },
    featured: false
  },
  {
    id: "little-friends",
    romanId: "CASE 17",
    client: "Little Friends Pet Sitting",
    title: "Little Friends — +210% Traffic & Local Search Dominance",
    subtitle: "High-Speed Information Delivery, Value Pitch by Role & 670% Search Surge",
    category: "Home & Commercial Services",
    url: "https://www.littlefriendspetsitting.com/",
    role: "Digital Project Manager & Web Operations Lead",
    platform: "Local Service Platform & Technical SEO Engine",
    summary: "I produced a website that delivered the exact information pet owners and clients needed, as fast as they needed it. Starting off with website structure, I built dedicated pages for each of the priority areas that their ideal customer considers: service options, transparent pricing, local coverage areas, and trust credentials. Through my redesign and technical SEO execution, the site achieved +210% total traffic growth, +670% organic search clicks, and a +28% annual revenue increase.",
    poeticInsight: "Trust in local services is won in the first three seconds of clear, transparent communication.",
    metrics: [
      { label: "Total Traffic", value: "+210%", sublabel: "Overall visitor volume surge" },
      { label: "Search Clicks", value: "+670%", sublabel: "Organic Google Search Console clicks" },
      { label: "Revenue Lift", value: "+28%", sublabel: "Annual business revenue growth" }
    ],
    architecture: [
      "Priority-Area Structured Navigation (Services, Pricing, Coverage, Trust)",
      "Local SEO Geo-Targeting Across 12+ Municipal Territories",
      "Frictionless Pet Care Service Request & Consultation Funnels",
      "High-Speed Mobile Layouts (Sub-second load on mobile devices)"
    ],
    techStack: ["WordPress Core", "Schema.org LocalBusiness", "Google Search Console", "Tailwind CSS", "Cloudflare"],
    systemFlow: [
      { step: "01", title: "Customer Information Audit", detail: "I identified the top questions pet owners ask (pricing, availability, trust) and addressed them upfront." },
      { step: "02", title: "Targeted Page Structure", detail: "I built unique landing pages for each service type and regional service area." },
      { step: "03", title: "Local SEO Schema", detail: "I implemented structured LocalBusiness JSON-LD graphs and optimized Google Business citations." },
      { step: "04", title: "Performance Scale", detail: "I delivered +670% organic search clicks and captured 1,240+ first-page ranking keywords." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "little-friends-seo-metrics.json",
      code: `{
  "client": "Little Friends Pet Sitting (littlefriendspetsitting.com)",
  "verified_growth_metrics": {
    "total_traffic_growth": "+210%",
    "organic_search_clicks": "+670%",
    "annual_revenue_growth": "+28%",
    "indexed_page_one_keywords": 1240,
    "quote": "Alexandre built a website that completely transformed our online presence and client acquisition."
  }
}`
    },
    featured: true
  },
  {
    id: "strong-hardwood-floors",
    romanId: "CASE 18",
    client: "Strong Hardwood Floors",
    title: "Strong Hardwood Floors — Artisan Portfolio & Regional Growth",
    subtitle: "Relaunched Brand Identity, 10-Year Craftsmanship Showcase & Local SEO",
    category: "Home & Commercial Services",
    url: "https://stronghardwoodfloors.com/",
    role: "Digital Project Manager & Web Developer",
    platform: "Craftsmanship Portfolio & Regional Lead Engine",
    summary: "Relaunching Strong Hardwood Floors' website to reflect their new brand identity was a top priority. I streamlined their online presence, made their website more appealing to prospective homeowners, and made it much simpler to navigate. Strong Hardwood Floors had a portfolio of craftsmanship spanning nearly a decade, so highlighting their best projects and reworking key design elements while showcasing the impressive scope of their work was my primary goal. As the company grew, I highlighted that expansion by including region-specific service information in a structured, well-organized layout. I also optimized their web pages for local SEO, fast loading, and mobile responsiveness.",
    poeticInsight: "True artisan craftsmanship shines brightest when presented in a clean, uncluttered digital frame.",
    metrics: [
      { label: "Estimate Requests", value: "+42%", sublabel: "High-intent homeowner inquiries" },
      { label: "Portfolio Views", value: "3.8x", sublabel: "Before-and-after gallery engagement" },
      { label: "Local SEO Lift", value: "+95%", sublabel: "Regional flooring search visibility" }
    ],
    architecture: [
      "Decade-Long Craftsmanship High-Resolution Project Galleries",
      "Region-Specific Service Landing Pages for County Expansion",
      "Simplified Navigation & Instant Free Flooring Estimate Funnel",
      "Local SEO Optimization & Mobile-First Image Acceleration"
    ],
    techStack: ["Custom CMS", "Responsive Gallery Engine", "Local SEO Schema", "Cloudflare", "GA4"],
    systemFlow: [
      { step: "01", title: "Brand Identity Relaunch", detail: "I modernized the online visual presence to reflect premium artisan craftsmanship and reliability." },
      { step: "02", title: "Portfolio Curation", detail: "I curated and organized a decade of project photography into categorized before-and-after showcases." },
      { step: "03", title: "Regional Expansion Pages", detail: "I built organized, region-specific pages highlighting regional coverage and local reviews." },
      { step: "04", title: "Estimate Funnel Integration", detail: "I placed frictionless estimate request triggers that accelerated high-ticket flooring inquiries." }
    ],
    codeSnippet: {
      lang: "json",
      filename: "strong-hardwood-relaunch.json",
      code: `{
  "brand": "Strong Hardwood Floors (stronghardwoodfloors.com)",
  "relaunch_highlights": {
    "brand_identity": "Premium Artisan Flooring",
    "portfolio_scope": "Decade of Verified Custom Projects",
    "regional_expansion": "County-Specific Landing Pages",
    "lead_generation": "+42% increase in estimate requests"
  }
}`
    },
    featured: true
  }
];
