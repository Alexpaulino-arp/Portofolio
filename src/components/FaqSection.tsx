import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Migration', 'Architecture', 'Automation', 'Leadership'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#090e1a] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>EXECUTIVE DUE DILIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            TECHNICAL &amp; STRATEGY QA.
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Transparent answers to technical architecture, reliability guarantees, and agency collaboration workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 border border-blue-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-xl bg-slate-900 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-blue-400' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-300 border-t border-slate-800/80 space-y-4">
                        <p className="leading-relaxed font-normal">
                          {faq.answer}
                        </p>

                        {faq.technicalDetails && (
                          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                            <span className="text-xs font-mono text-amber-400 font-semibold block">
                              Engineering Standard:
                            </span>
                            {faq.technicalDetails.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Question CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-display font-bold text-white">
              Have a specific technical constraint or legacy migration?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Direct access to Alexandre Paulino for an architectural discovery call.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Ask Alexandre Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
