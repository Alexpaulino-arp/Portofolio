import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  Search,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface WebDevelopmentFAQProps {
  onInquire?: () => void;
}

export const WebDevelopmentFAQ: React.FC<WebDevelopmentFAQProps> = ({ onInquire }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqFilter, setFaqFilter] = useState<string>('ALL');

  const faqs = [
    {
      id: 1,
      category: 'CONVERSIONS & UX',
      question: "How do you ensure my website will convert visitors into paying clients or leads?",
      answer: "I engineer every website around customer psychology and frictionless user journeys. I implement high-visibility calls-to-action (CTAs), streamline mobile checkout or booking forms to 1–2 clicks, integrate verified social proof and client reviews, and eliminate navigation clutter. My focus is turning your passive traffic into active revenue and measurable conversions.",
      highlights: ["Frictionless 1-2 click booking & checkout", "Visual hierarchy guided by eye-tracking principles", "Lighthouse Core Web Vitals 95+"]
    },
    {
      id: 2,
      category: 'RESPONSIVENESS & SPEED',
      question: "Will my website be 100% mobile-responsive and fast on all devices?",
      answer: "Yes, without exception. Over 65% of modern commercial traffic originates on mobile devices. I adopt a strict mobile-first engineering approach, optimizing all images with next-gen formats (WebP/AVIF), deferring non-critical scripts, and conducting rigorous cross-browser testing on iOS Safari, Android Chrome, tablets, and 4K displays.",
      highlights: ["Sub-second page load times", "Responsive touch targets (48px+)", "Fluid typographic and spatial scaling"]
    },
    {
      id: 3,
      category: 'SEO & VISIBILITY',
      question: "How do you incorporate SEO directly into the web development process?",
      answer: "SEO is not an afterthought or plugin add-on—it is baked into the code structure from day one. I build semantic HTML5 structures, inject JSON-LD Schema markup (LocalBusiness, Organization, Product, Article), optimize meta tags and OpenGraph assets, create clean XML sitemaps, and design logical URL hierarchies that Google crawlers index with top authority.",
      highlights: ["JSON-LD Schema Markup embedded", "Top Google Search Console indexing hygiene", "High-intent keyword hierarchy mapping"]
    },
    {
      id: 4,
      category: 'FULL-SERVICE SCOPE',
      question: "What is included in your end-to-end web development service?",
      answer: "My engagement covers complete project management and technical execution: strategic discovery, UX wireframing, custom platform development (Shopify Plus, WordPress, HubSpot, Duda, Weblium), API & CRM automations (Zapier, Klaviyo, Stripe), content population, technical SEO setup, DNS domain governance, and post-launch monitoring with zero downtime.",
      highlights: ["End-to-end agile project governance", "Custom development & app integration", "Zero-downtime DNS deployment & QA"]
    },
    {
      id: 5,
      category: 'TIMELINES & PROCESS',
      question: "How long does it take to design, develop, and launch a custom website?",
      answer: "I deliver typical custom websites in structured 2 to 4-week sprints depending on platform complexity and integration scope. For high-volume Shopify stores with complex multi-warehouse inventory or enterprise HubSpot setups, timelines generally span 4 to 6 weeks. I provide every client with a detailed milestone schedule and direct weekly progress checkpoints.",
      highlights: ["2–4 weeks for standard custom platforms", "4–6 weeks for complex enterprise migrations", "Weekly live demo checkpoints"]
    },
    {
      id: 6,
      category: 'INTEGRATIONS & APIS',
      question: "Can you integrate my website with my existing CRM, ERP, and marketing tools?",
      answer: "Yes. I specialize in connecting websites with business operational ecosystems. I build two-way synchronizations with HubSpot CRM, GoHighLevel, Salesforce, Klaviyo, Mailchimp, Zapier, Stripe, Google Analytics 4, and custom REST API webhooks, ensuring all lead and customer data flows seamlessly into your sales pipeline without manual data entry.",
      highlights: ["Zapier & Make webhook orchestration", "Real-time CRM lead and deal sync", "Automated email onboarding sequences"]
    },
    {
      id: 7,
      category: 'AGENCY COMPARISON',
      question: "What makes your development approach different from standard generic agencies?",
      answer: "Unlike traditional agencies that pass you between disconnected junior developers and account reps, you work directly with me as your senior Digital Project Manager & Web Ops Lead with 10+ years of technical experience. I blend deep technical mastery (custom code, speed optimization, APIs) with commercial business acumen, delivering scalable systems built to outlast trends.",
      highlights: ["Direct senior technical leadership", "Custom code & No-Code mastery combined", "Zero fluff, metrics-driven accountability"]
    }
  ];

  const categories = ['ALL', 'CONVERSIONS & UX', 'RESPONSIVENESS & SPEED', 'SEO & VISIBILITY', 'INTEGRATIONS & APIS'];

  const filteredFaqs = faqs.filter(f => faqFilter === 'ALL' || f.category === faqFilter);

  const toggleFaq = (idx: number) => {
    triggerInteractiveResonance('inspect');
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="space-y-12">
      
      {/* HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 7 CORE ANSWERS ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase leading-tight">
              Web Development &amp; Architecture FAQs.
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed mt-2 font-mono">
              Transparent answers regarding conversion optimization, SEO architecture, platform integrations, timelines, and delivery standards.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400">
              ANSWERS VERIFIED
            </span>
          </div>
        </div>
      </div>

      {/* FILTER PILLS */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              triggerInteractiveResonance('click');
              setFaqFilter(cat);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              faqFilter === cat
                ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                : 'mono-card text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ACCORDION LIST */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.id}
              className={`mono-card rounded-2xl border transition-all overflow-hidden ${
                isOpen 
                  ? 'border-neutral-500 bg-neutral-900/50 shadow-lg' 
                  : 'border-neutral-850 bg-neutral-950/60 hover:border-neutral-700'
              }`}
            >
              {/* Question Click Bar */}
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <div className="space-y-1.5 pr-4">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    {faq.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-syne font-bold text-white leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <div className={`p-2 rounded-xl border flex-shrink-0 transition-transform duration-300 ${
                  isOpen 
                    ? 'bg-white text-black border-white rotate-180' 
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-neutral-850/80 space-y-4 text-neutral-300 font-mono text-xs sm:text-sm font-light leading-relaxed">
                      <p className="leading-relaxed">
                        {faq.answer}
                      </p>

                      {/* Highlights */}
                      <div className="pt-3 border-t border-neutral-900 flex flex-wrap gap-2">
                        {faq.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 text-[11px] font-mono text-neutral-300 border border-neutral-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

      {/* FOOTER CTA */}
      <div className="mono-card rounded-2xl p-6 border border-neutral-800 bg-neutral-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-neutral-400 text-center sm:text-left">
          Have a specific project question or custom platform requirement?
        </div>

        <button
          onClick={() => {
            triggerInteractiveResonance('click');
            if (onInquire) onInquire();
          }}
          className="px-6 py-2.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <span>Schedule Free Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
};
