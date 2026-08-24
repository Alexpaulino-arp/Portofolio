import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Calculator,
  Layers,
  Clock,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data/portfolioData';

interface PricingSectionProps {
  onOpenConsultation: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenConsultation }) => {
  // Interactive ROI Calculator State
  const [teamSize, setTeamSize] = useState<number>(18);
  const [monthlyOrdersOrTasks, setMonthlyOrdersOrTasks] = useState<number>(45000);
  const [avgHourlyCost, setAvgHourlyCost] = useState<number>(65);

  // Computed ROI
  const estimatedHoursSaved = Math.round((monthlyOrdersOrTasks / 120) * 0.85);
  const estimatedMonthlyDollarsSaved = Math.round(estimatedHoursSaved * avgHourlyCost);
  const annualSavings = estimatedMonthlyDollarsSaved * 12;

  return (
    <section id="partnership" className="py-24 relative overflow-hidden bg-[#090e1a] border-t border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENGAGEMENT FRAMEWORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            STRATEGIC TECHNICAL PARTNERSHIP.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Predictable, high-throughput technical leadership and surgical engineering execution tailored for founders, CEOs, and scaling agencies.
          </p>
        </div>

        {/* 3 Pricing Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PRICING_TIERS.map((tier, idx) => {
            const isPopular = tier.popular;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`glass-panel rounded-3xl p-8 relative flex flex-col justify-between border transition-all duration-300 ${
                  isPopular
                    ? 'border-blue-500 bg-slate-900/90 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/60 lg:-translate-y-2'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-mono text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{tier.badge || "RECOMMENDED"}</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <div className="text-xs font-mono text-blue-400 font-semibold mb-1">
                      MODEL 0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 mb-6">
                    <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      {tier.investment}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {tier.billingType}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="text-xs text-slate-300 mb-6 p-3 rounded-xl bg-blue-950/20 border border-blue-500/20">
                    <span className="font-semibold text-blue-300">Ideal For: </span>
                    {tier.idealFor}
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    {tier.keyDeliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="pt-6 border-t border-slate-800/80 space-y-2 mb-6">
                    {tier.technicalSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className={`w-full py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                    }`}
                  >
                    <span>Engage {tier.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Interactive Automation & Operations ROI Calculator */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE ROI &amp; EFFICIENCY CALCULATOR</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            Calculate Your Organization's Operational Leverage
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mb-8">
            See how much operational expenditure and manual employee hours our automated Zapier workflows and managed web operations eliminate.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Sliders */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-300">Active Team / Squad Size:</span>
                  <span className="text-blue-400 font-bold">{teamSize} People</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="80"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-300">Monthly Orders / API Sync Tasks:</span>
                  <span className="text-cyan-400 font-bold">{monthlyOrdersOrTasks.toLocaleString()} Events</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={monthlyOrdersOrTasks}
                  onChange={(e) => setMonthlyOrdersOrTasks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-300">Blended Employee Hourly Cost:</span>
                  <span className="text-amber-400 font-bold">${avgHourlyCost} / hour</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={avgHourlyCost}
                  onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

            </div>

            {/* Right ROI Results Callout Card */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Monthly Hours Saved</div>
                  <div className="text-3xl font-display font-extrabold text-cyan-300 mt-1">
                    {estimatedHoursSaved} hrs
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Direct labor reclaimed</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Annual OPEX Savings</div>
                  <div className="text-3xl font-display font-extrabold text-emerald-400 mt-1">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Estimated direct ROI</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-300">
                  Ready to capture these efficiencies in your business?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-bold tracking-wider uppercase shadow-lg shadow-blue-600/30 whitespace-nowrap cursor-pointer"
                >
                  Book Scoping Call
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
