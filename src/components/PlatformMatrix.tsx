import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Globe, 
  Workflow, 
  Zap, 
  Check, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface PlatformMatrixProps {
  onInquire?: () => void;
}

export const PlatformMatrix: React.FC<PlatformMatrixProps> = ({ onInquire }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('shopify');

  const platforms = [
    {
      id: 'figma',
      name: 'Figma & Design Systems',
      category: 'UI/UX & Prototyping Architecture',
      tagline: 'Precision Wireframing, Responsive Prototypes & Production Design Tokens',
      desc: 'Architecting end-to-end design systems in Figma before touching code. From low-fidelity wireframes to pixel-perfect component variants, auto-layout tokens, and clickable user testing prototypes.',
      icon: Layers,
      stats: '100% Design-to-Code Parity',
      features: [
        'Atomic Design Systems with Modular Variants & Tokens',
        'Mobile, Tablet & Desktop Responsive Layout Specs',
        'Clickable High-Fidelity Prototypes for Stakeholder Sign-Off',
        'Developer Handoff with Exact CSS, Spacing & Typography Specs',
        'UX Journey Mapping & Information Architecture (IA)'
      ],
      bestFor: 'Founders, Product Teams, E-commerce redesigns, and scaling brands needing organized UI systems.'
    },
    {
      id: 'shopify',
      name: 'Shopify & Shopify Plus',
      category: 'E-Commerce Platform',
      tagline: 'Advanced E-Commerce Built for Scale and High Conversions',
      desc: 'Engineered for high-volume brands needing robust inventory management, multi-currency checkout, seamless payment gateways, and custom Liquid theme performance.',
      icon: ShoppingBag,
      stats: 'Global E-Commerce Dominance',
      features: [
        'Custom Shopify Liquid & OS 2.0 Theme Architecture',
        'Custom Checkout Extensibility & Shopify Functions',
        'Klaviyo & Post-Purchase Retention Automation',
        'Multi-Warehouse Inventory & ERP Synchronization',
        'Lighthouse Mobile Score 95+ with Zero Clutter'
      ],
      bestFor: 'Direct-to-consumer brands, retail merchants, scaling catalogs.'
    },
    {
      id: 'wordpress',
      name: 'WordPress & Headless CMS',
      category: 'Content & Corporate Platform',
      tagline: 'Unmatched Customizability and Total Data Ownership',
      desc: 'Custom-built WordPress architectures utilizing modern ACF (Advanced Custom Fields), bespoke Gutenberg blocks, and headless setups for limitless scaling.',
      icon: Globe,
      stats: '100% Content Control',
      features: [
        'Bespoke Gutenberg Block Architecture',
        'Advanced Custom Fields (ACF Pro) & Custom Post Types',
        'Enterprise Technical SEO & Schema Integration',
        'Hardened Security, Caching & Cloudflare CDN Tuning',
        'Effortless Editorial Content Management'
      ],
      bestFor: 'B2B companies, editorial publishers, complex service firms.'
    },
    {
      id: 'hubspot',
      name: 'HubSpot CMS & CRM Integration',
      category: 'Inbound Growth Platform',
      tagline: 'Connecting Marketing, Sales, and Web into One Unified Engine',
      desc: 'High-performing websites tightly coupled with HubSpot CRM, empowering real-time lead capture, smart personalized content, and automated nurturing pipelines.',
      icon: Workflow,
      stats: 'End-to-End Pipeline Sync',
      features: [
        'HubL Template & Custom Module Development',
        'Smart Content & Personalized User Journeys',
        'Two-Way CRM Synchronization & Deal Routing',
        'Closed-Loop Revenue & Conversion Analytics',
        'Automated Inbound Lead Qualification Workflows'
      ],
      bestFor: 'High-growth B2B SaaS, consultancies, lead-gen enterprises.'
    },
    {
      id: 'custom',
      name: 'Custom & Modern Stacks',
      category: 'High-Speed Web Architecture',
      tagline: 'Lightning Fast, High-Security, Bespoke Web Solutions',
      desc: 'Engineered using modern web frameworks (React, Next.js, Tailwind, Weblium) for instant page transitions, Core Web Vitals 99+, and rock-solid uptime.',
      icon: Zap,
      stats: '< 1s Page Load Times',
      features: [
        'Ultra-Clean React / TypeScript / Tailwind CSS Components',
        'Sub-Second Page Loads & Instant Mobile Rendering',
        'Bespoke API Integrations & Webhook Microservices',
        'Zero-Vulnerability Architecture with CDN Edge Delivery',
        'Automated CI/CD Deployment Pipelines'
      ],
      bestFor: 'Agile startups, modern brands, bespoke web utilities.'
    }
  ];

  const current = platforms.find(p => p.id === selectedPlatform) || platforms[0];

  return (
    <section className="space-y-12">
      
      {/* HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            SERVICES &amp; ARCHITECTURAL ENGINES // BUILT FOR RESULTS
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 4 CORE PLATFORMS ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase leading-tight">
              Web Design &amp; Development Platforms.
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed mt-2 font-mono">
              Whether you need high-conversion e-commerce, custom content hubs, or CRM-integrated engines, each solution is built for measurable commercial results.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            [ SELECT PLATFORM TO EXPLORE SPECIFICATIONS ]
          </div>
        </div>
      </div>

      {/* PLATFORM SELECTOR TABS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {platforms.map((p) => {
          const IconComp = p.icon;
          const isSelected = p.id === selectedPlatform;
          return (
            <button
              key={p.id}
              onClick={() => {
                triggerInteractiveResonance('click');
                setSelectedPlatform(p.id);
              }}
              className={`p-4 rounded-2xl border transition-all text-left flex items-start gap-3.5 cursor-pointer ${
                isSelected 
                  ? 'bg-neutral-900 border-white text-white shadow-lg' 
                  : 'bg-neutral-950/60 border-neutral-850 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <div className={`p-2.5 rounded-xl border flex-shrink-0 ${
                isSelected ? 'bg-white text-black border-white' : 'bg-neutral-900 text-neutral-400 border-neutral-800'
              }`}>
                <IconComp className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <div className="text-xs font-mono font-bold uppercase tracking-wider truncate">
                  {p.name.split('&')[0]}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 truncate">
                  {p.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* CURRENT PLATFORM DEEP DIVE CARD */}
      <div className="mono-card rounded-3xl p-8 sm:p-12 border border-neutral-800 bg-neutral-950/90 space-y-8">
        
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-neutral-900">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 inline-block">
              {current.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white pt-2">
              {current.name}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-mono font-light leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-1 self-start lg:min-w-[200px]">
            <div className="text-[10px] font-mono text-neutral-500 uppercase">Primary Advantage</div>
            <div className="text-sm font-syne font-bold text-white">{current.stats}</div>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-neutral-400 uppercase font-semibold">
            Included Technical &amp; Operational Capabilities:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-850 text-xs font-mono text-neutral-200">
                <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best For & Footer */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-400">
            <span className="text-neutral-500 uppercase">Recommended For:</span> <span className="text-neutral-200">{current.bestFor}</span>
          </div>

          <button
            onClick={() => {
              triggerInteractiveResonance('click');
              if (onInquire) onInquire();
            }}
            className="px-6 py-2.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Consult on {current.name.split('&')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
