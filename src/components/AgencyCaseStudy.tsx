import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  DollarSign, 
  Award, 
  Quote, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Layers,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogoIcon } from './BrandLogoIcon';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface AgencyCaseStudyProps {
  onInquire?: () => void;
}

export const AgencyCaseStudy: React.FC<AgencyCaseStudyProps> = ({ onInquire }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'strategy' | 'deliverables'>('overview');

  const metrics = [
    {
      value: "+210%",
      label: "TOTAL WEB TRAFFIC",
      sublabel: "Organic & direct visitor growth",
      icon: TrendingUp
    },
    {
      value: "+670%",
      label: "GOOGLE SEARCH CLICKS",
      sublabel: "Targeted high-intent local queries",
      icon: Search
    },
    {
      value: "+28%",
      label: "YOY REVENUE GROWTH",
      sublabel: "Direct online booking conversions",
      icon: DollarSign
    },
    {
      value: "1,240",
      label: "NEW KEYWORDS ON GOOGLE",
      sublabel: "Top 5 & Page 1 Search Authority",
      icon: Award
    }
  ];

  const pillars = [
    {
      title: "UX Design Proven to Convert",
      desc: "Engineered an intuitive booking flow optimized for desktop, tablet, and mobile, removing checkout friction and converting cold visitors into loyal recurring clients.",
      points: [
        "1-click mobile appointment booking",
        "Streamlined pet service category selection",
        "Lighthouse performance score 99/100"
      ]
    },
    {
      title: "SEO Copywriting & Google Placement",
      desc: "Restructured content architecture and schema markup based on expert search science, dominating local search results and capturing high-intent commercial pet care demand.",
      points: [
        "Semantic local search optimization",
        "Targeted long-tail keyword architecture",
        "Top 3 rankings for Charlotte, NC pet care"
      ]
    },
    {
      title: "Brand-Defining Digital Craftsmanship",
      desc: "Delivered a warm, trustworthy, and modern visual identity that elevated brand authority and positioned the company as the premier pet care agency in the region.",
      points: [
        "Custom warm color palette & typographic scale",
        "Verified customer reviews & social proof integration",
        "Consistent brand voice across all touchpoints"
      ]
    }
  ];

  return (
    <section className="space-y-12">
      
      {/* 1. HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            FEATURED PRODUCTION WORK // VERIFIED ROI &amp; CLIENT GROWTH
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ REAL-WORLD RESULTS ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase leading-tight">
              A Website That Outperforms Your Top Salesperson.
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed mt-2 font-mono">
              How high-conversion UX design, technical SEO, and mobile performance transformed Little Friends Pet Sitting into a market leader.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              CLIENT: LITTLE FRIENDS (CHARLOTTE, NC)
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HERO CARD */}
      <div className="mono-card rounded-3xl p-8 sm:p-12 border border-neutral-800 bg-neutral-950/80 relative overflow-hidden space-y-10">
        
        {/* Top Bar: Brand Badge & Platform */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          <div className="flex items-center gap-5">
            <div className="w-20 h-14 p-2 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white shadow-inner">
              <BrandLogoIcon id="little-friends" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-syne font-bold text-white">
                  Little Friends Pet Sitting
                </h3>
                <span className="text-[10px] font-mono text-neutral-300 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 font-bold uppercase tracking-wider">
                  VERIFIED IMPACT
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">
                Charlotte, NC • Full Web Redesign, Local SEO &amp; Booking Funnel
              </p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-900 border border-neutral-850">
            {(['overview', 'strategy', 'deliverables'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  triggerInteractiveResonance('click');
                  setActiveTab(tab);
                }}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-white text-black font-bold shadow-md' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            
            {/* Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m, idx) => {
                const IconComponent = m.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/70 transition-all flex flex-col justify-between group space-y-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:text-white group-hover:border-neutral-700 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                        METRIC 0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-3xl sm:text-4xl font-syne font-extrabold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                        {m.value}
                      </div>
                      <div className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        {m.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Testimonial Quote */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 relative overflow-hidden">
              <Quote className="absolute right-6 top-6 w-24 h-24 text-white/[0.03] pointer-events-none -rotate-6" />
              
              <div className="max-w-3xl space-y-5 relative z-10">
                <p className="text-xl sm:text-2xl font-cinzel italic text-neutral-100 leading-relaxed">
                  "I am totally, wonderfully HAPPY with the results! Started small with just social media and an SEO review. They rocked it and turned our website into our #1 business generator."
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <div>
                    <span className="text-sm font-syne font-bold text-white">Terry Richardson</span>
                    <span className="text-xs font-mono text-neutral-400 ml-2">— Owner, Little Friends Pet Sitting</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                    PILLAR 0{pIdx + 1}
                  </div>
                  <h4 className="text-lg font-syne font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed font-mono">
                    {pillar.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-neutral-850">
                  {pillar.points.map((pt, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-2 text-[11px] font-mono text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'deliverables' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Custom Weblium Architecture", detail: "Fast loading times and effortless client content editing." },
                { title: "Local Schema Markup", detail: "Structured pet service data enabling rich Google Search snippets." },
                { title: "Mobile-First Booking Engine", detail: "Optimized touch targets reducing checkout abandonment by 42%." },
                { title: "Conversion Copywriting", detail: "High-trust messaging addressing pet owner safety concerns directly." },
                { title: "Google Search Console Tuning", detail: "Clean XML sitemap indexing with zero crawl anomalies." },
                { title: "Google Analytics 4 Tracking", detail: "Event-based booking attribution and customer journey mapping." }
              ].map((del, dIdx) => (
                <div key={dIdx} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-syne font-bold text-white">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{del.title}</span>
                  </div>
                  <p className="text-[11px] font-mono text-neutral-400">
                    {del.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Continuous Evolution / Ongoing Updates Notice */}
        <div className="p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex items-start gap-3 text-xs font-mono text-neutral-400">
          <Globe className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="text-white font-semibold">Live Platform Status:</span> Because this is an active production website with ongoing client operations and seasonal campaign updates, the current live design may differ from the baseline architecture and growth milestones documented here.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-400 text-center sm:text-left">
            Want similar revenue and traffic growth for your brand?
          </div>

          <button
            onClick={() => {
              triggerInteractiveResonance('click');
              if (onInquire) onInquire();
            }}
            className="px-6 py-3 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Request Free Website &amp; SEO Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
