import React from 'react';
import { 
  Compass, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface EngagementWorkflowProps {
  onInquire?: () => void;
}

export const EngagementWorkflow: React.FC<EngagementWorkflowProps> = ({ onInquire }) => {
  const steps = [
    {
      number: "01",
      title: "Strategy & Technical Audit",
      subtitle: "DISCOVERY & ARCHITECTURE",
      desc: "I analyze your current site performance, SEO visibility, and business funnels. I identify high-impact opportunities and map out a clear technical scope.",
      deliverables: [
        "Free 30-min strategy consultation",
        "Technical SEO & speed audit",
        "Architecture & platform recommendation",
        "Transparent timeline & sprint roadmap"
      ],
      icon: Compass
    },
    {
      number: "02",
      title: "Engineering & Conversion Sprints",
      subtitle: "DEVELOPMENT & INTEGRATION",
      desc: "I build your bespoke digital platform with clean, responsive code, mobile-first booking/checkout flows, and two-way CRM/Zapier automations.",
      deliverables: [
        "High-conversion mobile & desktop UI",
        "Custom Liquid / ACF / HubL development",
        "Schema markup & SEO copywriting structure",
        "Rigorous cross-browser QA testing"
      ],
      icon: Cpu
    },
    {
      number: "03",
      title: "Launch & Scaled ROI",
      subtitle: "DEPLOYMENT & GROWTH",
      desc: "I execute a zero-downtime launch, submit your clean sitemap to Google Search Console, and verify analytics tracking so your website immediately starts driving revenue.",
      deliverables: [
        "Zero-downtime DNS & domain switchover",
        "Google Search Console indexing validation",
        "GA4 & event attribution verification",
        "Ongoing operational & speed maintenance"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section className="space-y-12">
      
      {/* HEADER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            ENGAGEMENT METHODOLOGY // MY DELIVERY PROCESS
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 3-STEP SPRINTS ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase leading-tight">
              A Structured, High-Velocity Process.
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed mt-2 font-mono">
              Clear milestones, disciplined project management, and zero guesswork. From initial architecture discovery to high-impact launch.
            </p>
          </div>
        </div>
      </div>

      {/* 3 STEPS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <div
              key={idx}
              className="mono-card rounded-3xl p-8 border border-neutral-800 bg-neutral-950/70 hover:border-neutral-600 transition-all flex flex-col justify-between space-y-8 group relative overflow-hidden"
            >
              <div className="space-y-6">
                
                {/* Header: Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-syne font-extrabold text-neutral-600 group-hover:text-white transition-colors">
                    {step.number}
                  </div>
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-syne font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 font-light leading-relaxed font-mono">
                  {step.desc}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-900">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    Key Sprint Milestones:
                  </div>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] font-mono text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Step indicator footer */}
              <div className="text-[10px] font-mono text-neutral-500 pt-4 border-t border-neutral-900/80 flex items-center justify-between">
                <span>PHASE {step.number} OF 03</span>
                <span className="w-8 h-[1px] bg-neutral-800 group-hover:bg-neutral-600 transition-colors" />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
