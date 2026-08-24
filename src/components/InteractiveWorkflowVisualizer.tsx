import React, { useState } from 'react';
import { 
  Zap, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Cpu, 
  ShieldCheck, 
  BellRing, 
  Database,
  Terminal,
  Activity,
  Code2
} from 'lucide-react';
import { motion } from 'motion/react';

interface WorkflowStep {
  id: string;
  system: string;
  action: string;
  icon: string;
  status: 'idle' | 'running' | 'success';
  latency: string;
  payload: string;
  details: string;
}

export const InteractiveWorkflowVisualizer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const initialSteps: WorkflowStep[] = [
    {
      id: "node-1",
      system: "Shopify Plus Webhook",
      action: "Order Created Event Trigger",
      icon: "Server",
      status: "idle",
      latency: "12ms",
      details: "Captures instant JSON payload with order total ($1,450.00), customer tags, and multi-location line items.",
      payload: `{
  "topic": "orders/create",
  "order_id": 984021482,
  "currency": "USD",
  "total_price": "1450.00",
  "customer": {
    "email": "executive@globaltier.com",
    "tier": "Enterprise"
  }
}`
    },
    {
      id: "node-2",
      system: "Zapier Certified Filter",
      action: "HMAC Verification & Idempotency",
      icon: "ShieldCheck",
      status: "idle",
      latency: "45ms",
      details: "Validates HMAC-SHA256 secret cryptographic header against Redis cache to guarantee zero duplicate execution.",
      payload: `{
  "hmac_valid": true,
  "idempotency_key": "order_984021482_hash_a8f92c",
  "filter_passed": true,
  "duplicate_detected": false
}`
    },
    {
      id: "node-3",
      system: "Python Cloud Code (Zapier)",
      action: "Lead Scoring & Data Normalization",
      icon: "Cpu",
      status: "idle",
      latency: "82ms",
      details: "Runs custom Python algorithm scoring customer lifetime value (CLV = 98) and calculates warehouse routing priority.",
      payload: `# Python Transformation Output
{
  "lead_score": 98,
  "routing_priority": "EXECUTIVE_WHITE_GLOVE",
  "preferred_warehouse": "US_EAST_DIST_01",
  "sla_commitment_hrs": 24
}`
    },
    {
      id: "node-4",
      system: "ERP / NetSuite Sync Bridge",
      action: "Distributed Inventory Allocation",
      icon: "Database",
      status: "idle",
      latency: "140ms",
      details: "Dispatches atomic multi-item stock reservation with BullMQ retry mechanism ensuring 99.99% accuracy.",
      payload: `{
  "erp_transaction_id": "NS-INV-2026-9918",
  "status": "STOCK_RESERVED",
  "warehouse_ack": true,
  "retry_attempts": 0
}`
    },
    {
      id: "node-5",
      system: "GoHighLevel CRM & Slack",
      action: "Instant Alert & Onboarding Trigger",
      icon: "BellRing",
      status: "idle",
      latency: "60ms",
      details: "Pushes VIP customer into GoHighLevel pipeline, sends custom SMS confirmation, and creates an automated Slack channel.",
      payload: `{
  "crm_contact_id": "ghl_cnt_884920",
  "slack_channel": "#client-vip-onboarding",
  "sms_dispatched": true,
  "total_pipeline_time_ms": 339
}`
    }
  ];

  const [steps, setSteps] = useState<WorkflowStep[]>(initialSteps);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    
    // Reset status
    const reset = steps.map(s => ({ ...s, status: 'idle' as const }));
    setSteps(reset);

    // Sequential step simulation
    initialSteps.forEach((_, idx) => {
      setTimeout(() => {
        setSteps(prev => prev.map((step, sIdx) => {
          if (sIdx === idx) return { ...step, status: 'running' };
          if (sIdx < idx) return { ...step, status: 'success' };
          return step;
        }));
        setActiveStepIndex(idx);
        setSelectedNodeIndex(idx);

        if (idx === initialSteps.length - 1) {
          setTimeout(() => {
            setSteps(prev => prev.map(s => ({ ...s, status: 'success' })));
            setIsRunning(false);
          }, 800);
        }
      }, (idx + 1) * 750);
    });
  };

  const getStepIcon = (iconName: string, status: string) => {
    const isSuccess = status === 'success';
    const isRunning = status === 'running';
    
    const colorClass = isSuccess ? 'text-emerald-400' : isRunning ? 'text-blue-400 animate-spin' : 'text-slate-400';

    switch (iconName) {
      case 'Server': return <Server className={`w-5 h-5 ${colorClass}`} />;
      case 'ShieldCheck': return <ShieldCheck className={`w-5 h-5 ${colorClass}`} />;
      case 'Cpu': return <Cpu className={`w-5 h-5 ${colorClass}`} />;
      case 'Database': return <Database className={`w-5 h-5 ${colorClass}`} />;
      case 'BellRing': return <BellRing className={`w-5 h-5 ${colorClass}`} />;
      default: return <Activity className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const activeSelectedNode = steps[selectedNodeIndex];

  return (
    <section id="automation-lab" className="py-24 relative overflow-hidden bg-[#090e1a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>LIVE AUTOMATION LAB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Enterprise Zapier &amp; API Pipeline Simulator
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2">
              Experience the sub-second telemetry of our custom automation architecture connecting e-commerce storefronts, serverless code, ERP backbones, and CRM routing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className={`px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                isRunning
                  ? 'bg-blue-600/40 text-blue-200 cursor-not-allowed border border-blue-500/30'
                  : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 active:scale-95'
              }`}
            >
              {isRunning ? (
                <>
                  <Activity className="w-4 h-4 animate-spin text-white" />
                  <span>Processing Pipeline...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run Live Automation Test</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Interactive Pipeline Node Graph */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl mb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {steps.map((step, idx) => {
              const isSelected = selectedNodeIndex === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedNodeIndex(idx)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/40'
                      : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  {/* Status indicator pill */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getStepIcon(step.icon, step.status)}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      step.status === 'success'
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                        : step.status === 'running'
                        ? 'bg-blue-950/60 text-blue-300 border-blue-500/40 animate-pulse'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      {step.status.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-slate-400 font-semibold mb-1">
                      STEP 0{idx + 1}
                    </div>
                    <h4 className="text-sm font-display font-bold text-white leading-snug mb-1">
                      {step.system}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {step.action}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500">Latency</span>
                    <span className="text-cyan-400 font-semibold">{step.latency}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connected Flow Arrow Bar */}
          <div className="hidden md:flex items-center justify-between px-6 pt-4 text-slate-700 text-xs font-mono">
            <span>START: Client Order Ingestion</span>
            <div className="h-0.5 flex-1 mx-4 bg-gradient-to-r from-blue-500/40 via-amber-500/40 to-emerald-500/40"></div>
            <span>COMPLETE: 100% Autonomous Telemetry</span>
          </div>

        </div>

        {/* Selected Step Inspector (Live JSON / Python Payload) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                Step {selectedNodeIndex + 1} Architecture Breakdown
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeSelectedNode.system}
              </span>
            </div>

            <h3 className="text-lg font-display font-bold text-white">
              {activeSelectedNode.action}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeSelectedNode.details}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Certified Execution:</span>
                <span className="text-emerald-400 font-semibold">Zapier + Python API</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Fault Tolerance:</span>
                <span className="text-blue-400 font-semibold">BullMQ Exponential Retry</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Average Step Latency:</span>
                <span className="text-amber-400 font-semibold">{activeSelectedNode.latency}</span>
              </div>
            </div>
          </div>

          {/* Right: Real-Time Payload Display */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Data Transformation Payload</span>
              </div>
              <span className="text-[11px] text-emerald-400">JSON / UTF-8</span>
            </div>

            <div className="p-4 overflow-x-auto text-[11px] font-mono text-slate-200 leading-relaxed max-h-[260px]">
              <pre>
                <code>{activeSelectedNode.payload}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
