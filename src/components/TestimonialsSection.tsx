import React, { useState } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Star, 
  Sparkles,
  Building,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>EXECUTIVE ENDORSEMENTS & TRUST</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              TRUSTED BY INNOVATORS.
            </h2>
          </div>

          {/* Navigation arrow controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-500 px-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Background oversized quote mark */}
              <Quote className="absolute top-6 right-8 w-32 h-32 text-blue-500/5 pointer-events-none -rotate-12" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Author Bio & Verified Result */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500/40 shadow-xl"
                    />
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">
                        {current.author}
                      </h3>
                      <p className="text-xs text-blue-400 font-mono font-medium">
                        {current.role}
                      </p>
                      <p className="text-xs text-slate-400">
                        {current.company}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Verified Technical Outcome:
                    </div>
                    <div className="text-base font-display font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      <span>{current.verifiedMetric}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {current.stackTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: The Quote */}
                <div className="lg:col-span-8 lg:border-l lg:border-slate-800 lg:pl-10 space-y-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-display font-medium leading-relaxed italic">
                    "{current.quote}"
                  </p>

                  <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Direct C-Suite &amp; Founder Endorsement</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
