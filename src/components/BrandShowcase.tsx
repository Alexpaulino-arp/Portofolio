import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  X, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDS_DELIVERED, BrandClient } from '../data/brandData';
import { BrandLogoIcon } from './BrandLogoIcon';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface BrandShowcaseProps {
  onInquire?: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onInquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<BrandClient | null>(null);

  const categories = [
    'ALL',
    'E-Commerce & Retail',
    'B2B & Tech',
    'Professional Services',
    'Healthcare & Community',
    'Home & Lifestyle'
  ];

  const filteredBrands = useMemo(() => {
    return BRANDS_DELIVERED.filter((brand) => {
      const matchesCategory = selectedCategory === 'ALL' || brand.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleBrandClick = (brand: BrandClient) => {
    triggerInteractiveResonance('inspect');
    setSelectedBrand(brand);
  };

  const handleCategorySelect = (cat: string) => {
    triggerInteractiveResonance('click');
    setSelectedCategory(cat);
  };

  return (
    <section className="space-y-12">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            CLIENT PORTFOLIO // BRANDS I HAVE WORKED WITH
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 20+ WEBSITES DELIVERED ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase">
              BRANDS &amp; SITES DELIVERED.
            </h2>
            <p className="text-base text-neutral-300 font-light max-w-2xl leading-relaxed mt-2 font-mono">
              A curated collection of commercial websites, e-commerce storefronts, and digital platforms engineered, optimized, and managed for high-growth brands and organizations.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800">
              {BRANDS_DELIVERED.length} VERIFIED CLIENT BRANDS
            </span>
          </div>
        </div>
      </div>

      {/* 2. INFINITE LOGO MARQUEE TICKER */}
      <div className="relative overflow-hidden py-6 rounded-2xl bg-neutral-950 border border-neutral-900">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee gap-8 items-center">
          {/* Double list for smooth seamless loop */}
          {[...BRANDS_DELIVERED, ...BRANDS_DELIVERED].map((brand, i) => (
            <button
              key={`${brand.id}-${i}`}
              onClick={() => handleBrandClick(brand)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-500 hover:bg-neutral-850 text-neutral-300 hover:text-white transition-all cursor-pointer group flex-shrink-0"
            >
              <div className="w-24 h-9 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                <BrandLogoIcon id={brand.id} className="max-h-8 max-w-full object-contain" />
              </div>
              <span className="text-xs font-syne font-semibold whitespace-nowrap">
                {brand.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. CONTROLS: CATEGORIES & SEARCH */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === 'ALL' 
              ? BRANDS_DELIVERED.length 
              : BRANDS_DELIVERED.filter(b => b.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'mono-card text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${selectedCategory === cat ? 'text-neutral-700 font-bold' : 'text-neutral-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search brands or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* 4. BRANDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => handleBrandClick(brand)}
            className="mono-card rounded-2xl p-6 border border-neutral-800/90 hover:border-neutral-500 bg-neutral-950/70 hover:bg-neutral-900/40 transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            {/* Header: Logo Container + Category Badge */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-neutral-900">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                  {brand.category}
                </span>
                
                {brand.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-300 font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>FEATURED</span>
                  </span>
                )}
              </div>

              {/* Logo Area */}
              <div className="h-20 w-full flex items-center justify-center p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 mb-5 group-hover:border-neutral-700 group-hover:bg-neutral-850 text-neutral-200 group-hover:text-white transition-all shadow-inner">
                <BrandLogoIcon id={brand.id} className="max-h-12 w-auto max-w-[85%] object-contain" />
              </div>

              {/* Title & Platform */}
              <h3 className="text-xl font-syne font-bold text-white group-hover:text-neutral-100 transition-colors mb-1">
                {brand.name}
              </h3>
              
              <div className="text-xs font-mono text-neutral-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-neutral-500" />
                <span>{brand.platform}</span>
              </div>

              {/* Scope Description */}
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-5 line-clamp-3">
                {brand.scope}
              </p>
            </div>

            {/* Deliverables Tags & Footer */}
            <div className="space-y-4 pt-4 border-t border-neutral-900">
              <div className="flex flex-wrap gap-1.5">
                {brand.deliverables.slice(0, 3).map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    {del}
                  </span>
                ))}
                {brand.deliverables.length > 3 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-500 border border-neutral-800">
                    +{brand.deliverables.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors pt-1">
                <span className="flex items-center gap-1">
                  <span>View Project Scope</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-16 mono-card rounded-2xl border border-neutral-800 space-y-3">
          <p className="text-base text-neutral-300 font-mono">No brands match your current search.</p>
          <button
            onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 5. BRAND DETAIL MODAL */}
      <AnimatePresence>
        {selectedBrand && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl text-neutral-100 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-neutral-900 flex items-center justify-between gap-4 bg-neutral-900/30">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                    {selectedBrand.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    / CLIENT DELIVERABLE
                  </span>
                </div>

                <button
                  onClick={() => setSelectedBrand(null)}
                  className="p-2 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Logo Hero Card */}
                <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-center h-28 text-white">
                  <BrandLogoIcon id={selectedBrand.id} className="max-h-20 max-w-[70%] object-contain" />
                </div>

                {/* Brand Title & Platform */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white mb-1">
                    {selectedBrand.name}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    PLATFORM ARCHITECTURE: <span className="text-white">{selectedBrand.platform}</span>
                  </p>
                </div>

                {/* Scope Detail */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                    Project Scope &amp; Operations Focus
                  </div>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed p-4 rounded-xl bg-neutral-900/40 border border-neutral-850 font-mono">
                    {selectedBrand.scope}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                    Key Features &amp; Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedBrand.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-xs font-mono text-neutral-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-neutral-900 bg-neutral-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-neutral-400">
                  Delivered by Alexandre Paulino
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      setSelectedBrand(null);
                      if (onInquire) onInquire();
                    }}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
