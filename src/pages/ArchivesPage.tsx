import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  Code2,
  Filter,
  ExternalLink,
  Search,
  Globe,
  Sparkles,
  Layers,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';
import { ARCHIVE_WORKS, ArchiveItem } from '../data/monochromeData';
import { BRANDS_DELIVERED } from '../data/brandData';
import { BrandLogoIcon } from '../components/BrandLogoIcon';
import { ArtifactModal } from '../components/ArtifactModal';
import { ActivePage } from '../components/CinematicNavigation';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface ArchivesPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const ArchivesPage: React.FC<ArchivesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArtifact, setSelectedArtifact] = useState<ArchiveItem | null>(null);

  const categories = [
    'ALL', 
    'E-Commerce & D2C', 
    'B2B & Enterprise Tech', 
    'Healthcare & Community', 
    'Financial & FinTech',
    'Home & Commercial Services'
  ];

  const handleCategorySelect = (cat: string) => {
    triggerInteractiveResonance('click');
    setSelectedCategory(cat);
  };

  const handleInspect = (work: ArchiveItem) => {
    triggerInteractiveResonance('inspect');
    setSelectedArtifact(work);
  };

  const filteredWorks = useMemo(() => {
    return ARCHIVE_WORKS.filter((work) => {
      const matchesCategory = selectedCategory === 'ALL' || work.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        work.title.toLowerCase().includes(query) ||
        work.client.toLowerCase().includes(query) ||
        work.subtitle.toLowerCase().includes(query) ||
        work.summary.toLowerCase().includes(query) ||
        work.techStack.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative z-10 pt-28 pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-20 text-neutral-100">
      
      {/* 1. PAGE HEADER */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            PAGE 03 // MY WORKS &amp; DELIVERED CLIENT PLATFORMS
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 18 PRODUCTION DELIVERIES ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-neutral-900 pb-10">
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tighter uppercase text-white leading-none">
              PROVEN <br />
              <span className="text-neutral-400 font-cinzel italic font-normal lowercase tracking-normal">
                my works.
              </span>
            </h1>
          </div>

          <div className="max-w-xl space-y-3">
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              Every project detailed below reflects real-world digital execution and client delivery—from high-volume Shopify Plus migrations and Weblium D2C rebuilds to multi-branch automation pipelines, medical scheduling portals, and technical SEO engines.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="text-emerald-400">● 18 Live Platforms</span>
              <span>•</span>
              <span>100% First-Person Engineering &amp; PM Narrative</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'mono-card text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 18 delivered projects..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs font-mono"
              >
                clear
              </button>
            )}
          </div>
        </div>

        {/* Client Brands Ticker */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2">
            <span>CLIENT ROSTER // SITES &amp; BRANDS DELIVERED</span>
            <span>{BRANDS_DELIVERED.length} VERIFIED ENTERPRISES</span>
          </div>
          <div className="relative overflow-hidden py-3 rounded-xl bg-neutral-950/80 border border-neutral-900">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="flex w-max animate-marquee gap-8 items-center">
              {[...BRANDS_DELIVERED, ...BRANDS_DELIVERED].map((b, bIdx) => (
                <div key={`${b.id}-${bIdx}`} className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors">
                  <div className="w-14 h-7 flex items-center justify-center p-1 rounded bg-neutral-900/60">
                    <BrandLogoIcon id={b.id} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-syne font-medium whitespace-nowrap">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PRODUCTION WORKS GRID (18 Projects) */}
      <section className="space-y-8">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-900">
          <span>SHOWING {filteredWorks.length} OF {ARCHIVE_WORKS.length} DELIVERED WORKS</span>
          {selectedCategory !== 'ALL' && <span>FILTER: {selectedCategory}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mono-card rounded-3xl p-7 sm:p-9 border border-neutral-800 hover:border-neutral-500 transition-all flex flex-col justify-between group relative overflow-hidden bg-neutral-950/60"
            >
              {/* Top Header & Brand Identity */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6 pb-4 border-b border-neutral-900">
                  <div className="flex items-center gap-2.5">
                    <span className="text-white font-bold tracking-widest">{work.romanId}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400">
                      {work.category}
                    </span>
                  </div>

                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="w-3 h-3 text-emerald-400" />
                      <span className="underline decoration-neutral-700 underline-offset-2">Live Site</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Brand Logo & Client Badge */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-16 h-10 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white shrink-0">
                    <BrandLogoIcon id={work.id} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400 font-semibold">{work.client}</div>
                    <div className="text-[11px] font-mono text-neutral-500">{work.platform || 'Production Web Stack'}</div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-xl sm:text-2xl font-syne font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                  {work.title}
                </h2>
                <p className="text-xs font-mono text-neutral-400 mb-5 leading-relaxed">
                  {work.subtitle}
                </p>

                {/* First-Person Case Study Narrative */}
                <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-900 mb-6">
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {work.summary}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-900 mb-6">
                  {work.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-tight truncate">{m.label}</div>
                      <div className="text-lg font-syne font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {work.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-900/90 text-neutral-400 border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Continuous Evolution / Ongoing Updates Notice */}
                <div className="p-3 rounded-2xl bg-neutral-900/40 border border-neutral-900 mb-6 flex items-start gap-2.5 text-[11px] font-mono text-neutral-400">
                  <RefreshCw className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <span className="text-neutral-300 font-semibold">Evolution Notice:</span> Live website may differ from initial deployment due to ongoing client updates &amp; continuous web operations.
                  </p>
                </div>
              </div>

              {/* Bottom Inspect Action & Live Link */}
              <div className="pt-5 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-neutral-500">
                  ROLE: <span className="text-neutral-300 font-semibold">{work.role}</span>
                </span>

                <div className="flex items-center gap-2">
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white font-mono text-xs border border-neutral-800 transition-all flex items-center gap-1.5"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    onClick={() => handleInspect(work)}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Inspect Blueprint</span>
                    <Code2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-neutral-950 border border-neutral-900 space-y-3">
            <p className="text-sm font-mono text-neutral-400">No delivered works match your current filter or search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-mono border border-neutral-800 hover:bg-neutral-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. INTERACTIVE AUTONOMOUS PIPELINE TELEMETRY LAB */}
      <section className="border-t border-neutral-900 pt-16 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono text-neutral-500 tracking-[0.2em] uppercase">
            LIVE ARTIFACT SIMULATION //
          </span>
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white tracking-tight uppercase">
            AUTONOMOUS WORKFLOW TELEMETRY.
          </h2>
          <p className="text-sm text-neutral-400 font-light max-w-2xl">
            Simulate a high-speed multi-stage Zapier webhook ingestion and Python algorithmic lead routing pipeline in real-time.
          </p>
        </div>

        <div className="mono-card rounded-3xl p-6 sm:p-10 border border-neutral-800 bg-neutral-950 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-neutral-500">
                <span>NODE 01</span>
                <span className="text-neutral-300">● ACTIVE</span>
              </div>
              <div className="text-sm font-syne font-bold text-white">Webhook Ingress</div>
              <div className="text-[11px] text-neutral-400">Shopify &amp; Stripe HMAC Listener</div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-neutral-500">
                <span>NODE 02</span>
                <span className="text-neutral-300">● 14ms</span>
              </div>
              <div className="text-sm font-syne font-bold text-white">Python Normalization</div>
              <div className="text-[11px] text-neutral-400">SHA256 Fingerprint &amp; Score</div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-neutral-500">
                <span>NODE 03</span>
                <span className="text-neutral-300">● DISPATCHED</span>
              </div>
              <div className="text-sm font-syne font-bold text-white">CRM Entity Upsert</div>
              <div className="text-[11px] text-neutral-400">HubSpot / GHL Two-Way Sync</div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-neutral-500">
                <span>NODE 04</span>
                <span className="text-neutral-300">● INSTANT</span>
              </div>
              <div className="text-sm font-syne font-bold text-white">Executive War Room</div>
              <div className="text-[11px] text-neutral-400">Slack &amp; Contract Auto-Gen</div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-black border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>STATUS: TELEMETRY STREAM NOMINAL (99.99% THROUGHPUT)</span>
            </div>
            <div className="text-neutral-500">
              500,000+ TRANSACTIONS / MONTH GOVERNED
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-syne font-bold text-white">
            Need an Experienced Digital PM &amp; Web Ops Architect?
          </h3>
          <p className="text-sm text-neutral-400 font-light">
            Deploy scalable e-commerce infrastructure, automated CRM funnels, and enterprise web operations.
          </p>
        </div>

        <button
          onClick={() => {
            triggerInteractiveResonance('nav');
            onNavigate('transmission');
          }}
          className="px-8 py-4 rounded-2xl bg-white text-black font-syne font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center gap-3 cursor-pointer shrink-0 shadow-lg shadow-white/10"
        >
          <span>Initiate Transmission</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Deep Blueprint Modal */}
      <ArtifactModal
        item={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
        onInquire={() => onNavigate('transmission')}
      />

    </div>
  );
};
