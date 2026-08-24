import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  CheckCircle2, 
  Layers, 
  FileText, 
  Palette, 
  Code2, 
  Workflow, 
  Rocket, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Play, 
  Pause, 
  RotateCcw,
  Check,
  ShieldCheck,
  Zap,
  Sliders,
  Terminal,
  Cpu,
  MousePointer,
  ExternalLink,
  ChevronRight,
  X,
  Maximize2,
  Info,
  Sparkle
} from 'lucide-react';
import { TechArsenalLogo } from './TechArsenalLogo';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface ProjectManagementPipeline3DProps {
  onInquire?: () => void;
}

export interface PipelineStage {
  id: string;
  number: string;
  shortName: string;
  title: string;
  category: string;
  iconId: string;
  timeframe: string;
  goal: string;
  managerRole: string;
  deliverables: string[];
  governanceGates: string[];
  tools: { id: string; name: string; role: string }[];
  artifactType: 'prd' | 'wireframe' | 'design_tokens' | 'copy_seo' | 'code_arch' | 'crm_workflow' | 'qa_launch' | 'growth_sprint';
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'stage-01',
    number: '01',
    shortName: 'Scoping & PRD',
    title: 'Demand Framing & Strategic PRD',
    category: 'INCEPTION & BACKLOG ARCHITECTURE',
    iconId: 'jira',
    timeframe: 'Days 1 — 3',
    goal: 'Translate business goals into structured user stories, technical specifications, and prioritized sprint epics with zero ambiguity.',
    managerRole: 'As Web Project Manager, I audit stakeholder requirements, define the technical scope, establish timeline gates, and configure the project workspace in Jira/Linear with clear acceptance criteria.',
    deliverables: [
      'Comprehensive Technical PRD (Product Requirement Document)',
      'Agile Sprint Backlog with Story Points & Acceptance Criteria',
      'Architecture & Third-Party Integration Feasibility Matrix',
      'Milestone Timeline & Stakeholder Communication Plan'
    ],
    governanceGates: [
      'Scope sign-off with clear out-of-scope boundaries',
      'API rate-limits & technical feasibility confirmed',
      'Jira / Linear board initialized with sprint epics'
    ],
    tools: [
      { id: 'jira', name: 'Jira / Linear', role: 'Sprint Backlog & Story Mapping' },
      { id: 'notion', name: 'Notion', role: 'PRD, Specs & Documentation' },
      { id: 'figma', name: 'FigJam', role: 'Stakeholder Discovery & Flowcharts' }
    ],
    artifactType: 'prd'
  },
  {
    id: 'stage-02',
    number: '02',
    shortName: 'UX Wireframing',
    title: 'UX Architecture & Low-Fi Wireframing',
    category: 'INFORMATION ARCHITECTURE & USER FLOW',
    iconId: 'figma',
    timeframe: 'Days 4 — 7',
    goal: 'Establish conversion-first information architecture, content hierarchy, and friction-free user journeys before applying visual styling.',
    managerRole: 'I construct low-fidelity wireframes in Figma to validate layout structure, click triggers, navigational hierarchy, and responsive layout behavior with stakeholders.',
    deliverables: [
      'Complete Mobile & Desktop Low-Fidelity Wireframes in Figma',
      'Information Architecture (IA) & Global Sitemap Tree',
      'Conversion Flowchart (Homepage → Catalog → Cart / Booking)',
      'Interactive Clickable Lo-Fi Prototype for User Journey Validation'
    ],
    governanceGates: [
      'Figma wireframe review & layout sign-off',
      'Mobile thumb-zone & navigation accessibility approved',
      'Conversion CTA hierarchy verified without visual noise'
    ],
    tools: [
      { id: 'figma', name: 'Figma', role: 'Low-Fi Wireframing & Auto-Layout' },
      { id: 'analytics', name: 'Hotjar / GA4 Data', role: 'Historic Drop-Off Benchmarking' },
      { id: 'notion', name: 'Notion', role: 'Information Architecture Spec' }
    ],
    artifactType: 'wireframe'
  },
  {
    id: 'stage-03',
    number: '03',
    shortName: 'UI Design & Tokens',
    title: 'UI Design & Scalable Design System',
    category: 'VISUAL CRAFT & INTERFACE SYSTEMS',
    iconId: 'figma',
    timeframe: 'Days 8 — 14',
    goal: 'Craft a bespoke, high-contrast visual identity and scalable Figma design system with strict component tokens, typography scales, and responsive variants.',
    managerRole: 'I build pixel-perfect UI designs in Figma utilizing auto-layout, atomic component variants, design tokens (spacing, typography, color), and interactive states for flawless developer handoff.',
    deliverables: [
      'Figma Production UI with Full Responsive Breakpoints (Mobile, Tablet, Desktop)',
      'Atomic Design System (Typography Scale, Color Tokens, Input States)',
      'Interactive High-Fidelity Prototype with Micro-interactions',
      'Developer Handoff Guide with CSS Properties & Asset Exports'
    ],
    governanceGates: [
      'WCAG AA Color Contrast Compliance (4.5:1 minimum)',
      'Design Token nomenclature aligned with CSS variables',
      'Interactive states (hover, focus, active, disabled) documented'
    ],
    tools: [
      { id: 'figma', name: 'Figma Auto-Layout', role: 'Component Variants & Design Tokens' },
      { id: 'tailwind', name: 'Tailwind CSS Tokens', role: 'Design-to-Code Variable Alignment' }
    ],
    artifactType: 'design_tokens'
  },
  {
    id: 'stage-04',
    number: '04',
    shortName: 'Copy & SEO',
    title: 'Conversion Copywriting & Semantic SEO',
    category: 'CONTENT STRATEGY & ORGANIC POSITIONING',
    iconId: 'seo',
    timeframe: 'Days 10 — 16',
    goal: 'Write persuasive, high-converting copy mapped directly to Figma wireframes, fully optimized for Google Search Console and Schema.org rich snippets.',
    managerRole: 'I structure all website copy into clear content matrices, pairing commercial value propositions with semantic heading tags (H1-H4), metadata, and Schema JSON-LD.',
    deliverables: [
      'Complete Content & Copy Matrix aligned to Figma frames',
      'Keyword Mapping & On-Page SEO Architecture (Titles, Metas, Alt tags)',
      'Structured Data Blueprint (Schema.org Organization, Product, FAQ)',
      'Brand Voice & Microcopy Rules for Forms and Checkout'
    ],
    governanceGates: [
      'Zero placeholder text (Lorem Ipsum eliminated)',
      'Exact keyword insertion without keyword stuffing',
      'Structured data tested via Google Rich Results Test'
    ],
    tools: [
      { id: 'seo', name: 'Google Search Console', role: 'Search Intent & Query Clustering' },
      { id: 'notion', name: 'Notion Content Matrix', role: 'Copy Versioning & Field Mapping' }
    ],
    artifactType: 'copy_seo'
  },
  {
    id: 'stage-05',
    number: '05',
    shortName: 'Engineering & Code',
    title: 'Modular Code & Platform Engineering',
    category: 'CLEAN CODE & CMS ARCHITECTURE',
    iconId: 'shopify',
    timeframe: 'Days 15 — 26',
    goal: 'Develop a fast, modular, zero-bloat platform across Shopify Liquid, WordPress ACF, HubSpot HubL, or Custom React Stacks.',
    managerRole: 'I lead and execute the development sprint, enforcing clean component architecture, asset optimization, strict version control in GitHub, and zero reliance on heavy third-party plugins.',
    deliverables: [
      'Clean, Modular Theme / Template Architecture (Liquid / ACF / React)',
      'Custom Reusable Sections & Gutenberg / Theme 2.0 Blocks',
      'Zero-Bloat Asset Pipeline with WebP Images & Tree-Shaken CSS',
      'Staging Deployment with Continuous Git Version Control'
    ],
    governanceGates: [
      'Zero console warnings or JavaScript errors',
      'Modular code separation (no monolithic 2,000-line templates)',
      'Mobile performance verified on physical iOS & Android devices'
    ],
    tools: [
      { id: 'shopify', name: 'Shopify / WordPress / HubSpot', role: 'Core Platform CMS' },
      { id: 'github', name: 'GitHub & CI/CD', role: 'Branch Protection & Version Control' },
      { id: 'tailwind', name: 'Tailwind / Modern CSS', role: 'Responsive Layout Framework' }
    ],
    artifactType: 'code_arch'
  },
  {
    id: 'stage-06',
    number: '06',
    shortName: 'CRM & Automations',
    title: 'CRM, Automation & Data Ecosystem',
    category: 'OPERATIONAL INTEGRATION & REVOPS',
    iconId: 'zapier',
    timeframe: 'Days 22 — 28',
    goal: 'Connect website forms, e-commerce checkout, and booking triggers directly to CRM pipelines, email flows, and team communication channels.',
    managerRole: 'I architect automated data pipelines using Zapier, webhooks, and native APIs, ensuring every lead and transaction is instantly captured in HubSpot, Klaviyo, or GoHighLevel with zero data loss.',
    deliverables: [
      'Multi-Branch Zapier & Webhook Pipelines with Error Handling',
      'HubSpot / GoHighLevel CRM Lead Ingestion & Pipeline Routing',
      'Klaviyo E-Commerce Post-Purchase & Abandoned Cart Flows',
      'Google Tag Manager (GTM) Server-Side & GA4 E-Commerce Events'
    ],
    governanceGates: [
      'End-to-end sandbox test with live transaction verification',
      'Lead deduplication & custom CRM property validation',
      'Failover notification alerts configured in Slack'
    ],
    tools: [
      { id: 'zapier', name: 'Zapier Enterprise', role: 'Multi-Step Webhook Logic' },
      { id: 'hubspot', name: 'HubSpot / GHL', role: 'CRM Pipeline & Lead Routing' },
      { id: 'klaviyo', name: 'Klaviyo / GTM', role: 'Retention Flows & Event Tracking' }
    ],
    artifactType: 'crm_workflow'
  },
  {
    id: 'stage-07',
    number: '07',
    shortName: 'QA & Zero-Downtime',
    title: 'Pre-Flight QA & Zero-Downtime Launch',
    category: 'QUALITY ASSURANCE & DEPLOYMENT GOVERNANCE',
    iconId: 'cloudflare',
    timeframe: 'Days 28 — 32',
    goal: 'Execute a 100+ point quality assurance audit and execute a flawless, zero-downtime DNS switchover with 98+ Core Web Vitals.',
    managerRole: 'I manage the pre-flight checklist, conducting cross-browser device testing, speed optimization, 301 redirect mapping, SSL certificate binding, and real-time sitemap submission to Google Search Console.',
    deliverables: [
      '100+ Point Cross-Browser & Device QA Audit Report',
      'Comprehensive 301 Redirect Matrix for SEO Link Equity Preservation',
      '98+ Lighthouse Core Web Vitals Audit on Mobile & Desktop',
      'Zero-Downtime DNS Cutover & Google Search Console Verification'
    ],
    governanceGates: [
      'Zero 404 errors via automated link crawl (Screaming Frog)',
      'Sub-second Largest Contentful Paint (LCP < 1.2s)',
      'DNS TTL lowered 48h prior for instant propagation'
    ],
    tools: [
      { id: 'cloudflare', name: 'Cloudflare Edge CDN', role: 'DNS, SSL & Zero-Downtime Routing' },
      { id: 'seo', name: 'Lighthouse & Screaming Frog', role: 'Speed & Broken Link Audit' }
    ],
    artifactType: 'qa_launch'
  },
  {
    id: 'stage-08',
    number: '08',
    shortName: 'Growth & Sprints',
    title: 'Post-Launch Growth & Continuous Sprints',
    category: 'WEBOPS & REVENUE OPTIMIZATION',
    iconId: 'linear',
    timeframe: 'Ongoing / Bi-Weekly Sprints',
    goal: 'Continuously monitor user heatmaps, run CRO A/B experiments, maintain 99.99% uptime, and deliver iterative feature enhancements.',
    managerRole: 'I maintain active operational stewardship of the digital platform, organizing bi-weekly sprint cycles based on conversion analytics, uptime telemetry, and commercial growth goals.',
    deliverables: [
      'Bi-Weekly Agile Sprint Reviews & Velocity Tracking',
      'Conversion Rate Optimization (CRO) Heatmap & Funnel Reports',
      'Automated 24/7 Uptime & Security Vulnerability Monitoring',
      'Proactive Maintenance, Backup Backups & Performance Tuning'
    ],
    governanceGates: [
      '99.99% Monthly Uptime SLA strictly maintained',
      'Bi-weekly backlog grooming with prioritized ROI score',
      'Immediate 1-hour critical response escalation protocol'
    ],
    tools: [
      { id: 'linear', name: 'Linear / Jira', role: 'Ongoing Sprint Task Management' },
      { id: 'analytics', name: 'GA4 & Clarity', role: 'Heatmap & Funnel Drop-off Tracking' }
    ],
    artifactType: 'growth_sprint'
  }
];

export const ProjectManagementPipeline3D: React.FC<ProjectManagementPipeline3DProps> = ({ onInquire }) => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [isPlayingTour, setIsPlayingTour] = useState<boolean>(false);
  const [activeDossierTab, setActiveDossierTab] = useState<'blueprint' | 'artifact' | 'tools'>('artifact');
  const [isWireframeMode, setIsWireframeMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [floatingBadgePos, setFloatingBadgePos] = useState<{ x: number; y: number }>({ x: 50, y: 35 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodesGroupRef = useRef<THREE.Group | null>(null);
  const nodeMeshesRef = useRef<THREE.Mesh[]>([]);
  const isInteractingRef = useRef<boolean>(false);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const activeStage = PIPELINE_STAGES[activeStageIdx];

  // Auto tour player
  useEffect(() => {
    let timer: any;
    if (isPlayingTour) {
      timer = setInterval(() => {
        setActiveStageIdx(prev => (prev + 1) % PIPELINE_STAGES.length);
        triggerInteractiveResonance('inspect');
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlayingTour, activeStageIdx]);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Three.js 3D Isometric Pipeline Scene Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Check light mode
    const isLight = document.documentElement.classList.contains('theme-light');

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 7.5, 13);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 1.4 : 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isLight ? 1.6 : 2.2);
    dirLight1.position.set(6, 12, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(isLight ? 0x999999 : 0x4444ff, isLight ? 0.8 : 1.2);
    dirLight2.position.set(-6, -4, -6);
    scene.add(dirLight2);

    // 5. Build 3D Pipeline Nodes & Connecting Conduit
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);
    nodesGroupRef.current = nodesGroup;
    nodeMeshesRef.current = [];

    // Subtle Grid Floor
    const gridHelper = new THREE.GridHelper(24, 24, isLight ? 0xd4d4d8 : 0x262626, isLight ? 0xe4e4e7 : 0x141414);
    gridHelper.position.y = -1.2;
    nodesGroup.add(gridHelper);

    // Node Positions in a dynamic S-curve / isometric runway
    const nodePositions: THREE.Vector3[] = [
      new THREE.Vector3(-7.0, -0.4, 3.2),  // 01. PRD
      new THREE.Vector3(-5.0, 0.1, 1.4),   // 02. Wireframe
      new THREE.Vector3(-3.0, 0.4, -0.4),  // 03. UI Design
      new THREE.Vector3(-1.0, 0.2, -1.8),  // 04. Copy & SEO
      new THREE.Vector3(1.0, 0.4, -1.8),   // 05. Code
      new THREE.Vector3(3.0, 0.2, -0.4),   // 06. CRM
      new THREE.Vector3(5.0, -0.1, 1.4),   // 07. QA / Launch
      new THREE.Vector3(7.0, -0.4, 3.2),   // 08. Growth
    ];

    // Geometries for each stage token
    const tokenGeometries = [
      new THREE.BoxGeometry(0.8, 0.8, 0.8), // PRD Cube
      new THREE.OctahedronGeometry(0.65, 0), // Wireframe Octahedron
      new THREE.IcosahedronGeometry(0.65, 0), // UI Gem
      new THREE.ConeGeometry(0.55, 0.9, 5), // Copy Diamond
      new THREE.TorusGeometry(0.5, 0.2, 16, 32), // Code Ring
      new THREE.CylinderGeometry(0.55, 0.55, 0.4, 6), // CRM Hexagon
      new THREE.TetrahedronGeometry(0.7, 0), // QA Shield Pyramid
      new THREE.DodecahedronGeometry(0.6, 0), // Growth Polyhedron
    ];

    // Build Connecting Curve & Tube
    const curve = new THREE.CatmullRomCurve3(nodePositions);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x71717a : 0xffffff,
      transparent: true,
      opacity: isLight ? 0.4 : 0.6,
      wireframe: true
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    nodesGroup.add(tubeMesh);

    // Create 8 Platform Nodes
    nodePositions.forEach((pos, idx) => {
      const stageContainer = new THREE.Group();
      stageContainer.position.copy(pos);

      // Base Pedestal
      const baseGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.25, 32);
      const baseMat = new THREE.MeshStandardMaterial({
        color: isLight ? 0xffffff : 0x171717,
        roughness: 0.2,
        metalness: isLight ? 0.1 : 0.8,
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.y = -0.5;
      stageContainer.add(baseMesh);

      // Glowing Base Ring
      const ringGeo = new THREE.TorusGeometry(0.98, 0.025, 16, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isLight ? 0x18181b : 0xffffff,
        transparent: true,
        opacity: idx === activeStageIdx ? 0.9 : 0.25,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = -0.4;
      stageContainer.add(ringMesh);

      // Floating Token Mesh
      const tokenGeo = tokenGeometries[idx] || new THREE.BoxGeometry(0.7, 0.7, 0.7);
      const tokenMat = new THREE.MeshStandardMaterial({
        color: isLight ? (idx === activeStageIdx ? 0x000000 : 0x71717a) : (idx === activeStageIdx ? 0xffffff : 0x888888),
        metalness: isLight ? 0.3 : 0.9,
        roughness: 0.15,
        wireframe: isWireframeMode
      });
      const tokenMesh = new THREE.Mesh(tokenGeo, tokenMat);
      tokenMesh.position.y = 0.4;
      tokenMesh.userData = { stageIdx: idx, initialY: 0.4 };
      stageContainer.add(tokenMesh);

      nodeMeshesRef.current.push(tokenMesh);
      nodesGroup.add(stageContainer);
    });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Floating & rotating animation for token nodes
      nodeMeshesRef.current.forEach((mesh, idx) => {
        mesh.rotation.y += 0.015;
        mesh.rotation.x += 0.008;

        // Hover bobbing
        const isCurrent = idx === activeStageIdx;
        mesh.position.y = 0.4 + Math.sin(elapsedTime * 2 + idx) * (isCurrent ? 0.15 : 0.06);
        
        // Scale up active node
        const targetScale = isCurrent ? 1.35 : 0.95;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      });

      // Gentle interactive camera sway with mouse
      if (cameraRef.current && nodesGroupRef.current) {
        const targetCamX = (mouseRef.current.x * 2.5);
        const targetCamY = 7.5 + (mouseRef.current.y * 1.5);
        cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, targetCamX, 0.05);
        cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetCamY, 0.05);
        cameraRef.current.lookAt(0, 0, 0);

        // Project active node's 3D position to 2D screen percentage for the floating overlay box
        const targetNodePos = nodePositions[activeStageIdx].clone();
        targetNodePos.y += 1.4; // Hover slightly above node token
        targetNodePos.project(cameraRef.current);

        const screenX = Math.max(10, Math.min(90, ((targetNodePos.x + 1) / 2) * 100));
        const screenY = Math.max(15, Math.min(85, ((-targetNodePos.y + 1) / 2) * 100));
        setFloatingBadgePos({ x: screenX, y: screenY });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!canvas || !renderer || !camera) return;
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeStageIdx, isWireframeMode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseRef.current = { x, y };
  };

  const handleSelectStage = (idx: number) => {
    setActiveStageIdx(idx);
    triggerInteractiveResonance('inspect');
  };

  const handleOpenStageModal = (idx?: number) => {
    if (typeof idx === 'number') {
      setActiveStageIdx(idx);
    }
    setIsModalOpen(true);
    triggerInteractiveResonance('click');
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    const camera = cameraRef.current;
    const scene = sceneRef.current;
    if (!canvas || !camera || !scene) return;

    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(nodeMeshesRef.current, true);
    if (intersects.length > 0) {
      const clickedMesh = intersects[0].object;
      const stageIdx = clickedMesh.userData?.stageIdx;
      if (typeof stageIdx === 'number') {
        handleOpenStageModal(stageIdx);
      }
    }
  };

  const handleNextStage = () => {
    const nextIdx = (activeStageIdx + 1) % PIPELINE_STAGES.length;
    handleSelectStage(nextIdx);
  };

  const handlePrevStage = () => {
    const prevIdx = (activeStageIdx - 1 + PIPELINE_STAGES.length) % PIPELINE_STAGES.length;
    handleSelectStage(prevIdx);
  };

  return (
    <section className="space-y-12">
      
      {/* 1. HEADER & HIGH-LEVEL GOAL */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            END-TO-END METHODOLOGY // 3D DEMAND PIPELINE
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 8-STAGE GOVERNANCE ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase">
              HOW I ORGANIZE DEMANDS <br />
              <span className="text-neutral-400 font-cinzel italic font-normal tracking-normal capitalize">
                From Wireframe to Code, CRM &amp; Scale
              </span>
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed">
              As a Web Project Manager &amp; Operations Lead, I manage digital initiatives through a disciplined 8-stage lifecycle. Each demand progresses through rigorous quality gates—from initial PRD framing and Figma wireframes to custom coding, multi-branch CRM automations, zero-downtime deployment, and post-launch sprint growth.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl mono-card border border-neutral-800 bg-neutral-950/80">
              <div className="text-[10px] font-mono text-neutral-500 uppercase">METHODOLOGY</div>
              <div className="text-sm font-syne font-bold text-white">Agile Sprints + Gate QA</div>
            </div>
            <div className="px-4 py-2.5 rounded-xl mono-card border border-neutral-800 bg-neutral-950/80">
              <div className="text-[10px] font-mono text-neutral-500 uppercase">CORE DESIGN SUITE</div>
              <div className="text-sm font-syne font-bold text-white">Figma Token Systems</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE 3D WEBGL PIPELINE CANVAS */}
      <div className="relative rounded-3xl mono-card border border-neutral-800 overflow-hidden bg-neutral-950/90 shadow-2xl">
        
        {/* Top Control Bar inside 3D Canvas */}
        <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-auto">
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-mono text-neutral-300 font-semibold uppercase tracking-wider">
              3D Interactive Stage Map: Phase {activeStage.number} of 08
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlayingTour(!isPlayingTour)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border transition-all cursor-pointer ${
                isPlayingTour 
                  ? 'bg-white text-black border-white shadow-lg' 
                  : 'bg-neutral-900/90 text-neutral-300 hover:text-white border-neutral-800 hover:border-neutral-600'
              }`}
              title={isPlayingTour ? 'Pause automated tour' : 'Play automated stage tour'}
            >
              {isPlayingTour ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlayingTour ? 'PAUSE TOUR' : 'AUTO TOUR'}</span>
            </button>

            <button
              onClick={() => setIsWireframeMode(!isWireframeMode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all cursor-pointer ${
                isWireframeMode 
                  ? 'bg-neutral-800 text-white border-neutral-500' 
                  : 'bg-neutral-900/90 text-neutral-400 hover:text-white border-neutral-800'
              }`}
              title="Toggle 3D Wireframe / Shaded view"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{isWireframeMode ? 'SOLID' : '3D WIRE'}</span>
            </button>
          </div>
        </div>

        {/* 3D Canvas Container with Floating Dynamic 3D Box */}
        <div 
          className="w-full h-80 sm:h-96 md:h-[400px] relative cursor-pointer"
          onMouseMove={handleMouseMove}
          onClick={handleCanvasClick}
        >
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* FLOATING 3D ACTIVE STAGE CALLOUT BOX (Anchored to 3D node) */}
          <div 
            style={{ 
              left: `${floatingBadgePos.x}%`, 
              top: `${floatingBadgePos.y}%`,
              transform: 'translate(-50%, -100%)'
            }}
            className="absolute z-30 pointer-events-auto transition-all duration-150 ease-out cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenStageModal(activeStageIdx);
            }}
          >
            {/* Box Surface */}
            <div className="relative p-3.5 sm:p-4 rounded-2xl bg-neutral-950/95 backdrop-blur-xl border border-white/40 shadow-2xl text-white min-w-[240px] sm:min-w-[280px] max-w-xs space-y-2 group-hover:border-white group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300">
              
              {/* Top Row: Phase Pill & Timeframe */}
              <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-white text-black">
                    PHASE {activeStage.number}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  {activeStage.timeframe}
                </span>
              </div>

              {/* Title & Category */}
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-syne font-bold text-white group-hover:text-neutral-100 transition-colors leading-snug">
                  {activeStage.title}
                </div>
                <div className="text-[10px] font-mono text-neutral-400 line-clamp-1">
                  {activeStage.category}
                </div>
              </div>

              {/* Action Callout Button */}
              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-white font-semibold group-hover:text-neutral-200">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-white" />
                  View Stage Dossier
                </span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>

              {/* Pointer Indicator Pin linking directly down to 3D node */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-950 border-r border-b border-white/40 rotate-45 group-hover:border-white" />
            </div>
          </div>
          
          {/* Bottom helper caption */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-center">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest bg-neutral-950/80 px-3.5 py-1.5 rounded-full border border-neutral-800/80 backdrop-blur-md flex items-center gap-2">
              <MousePointer className="w-3 h-3 text-white" />
              Click floating card or 3D node to inspect complete workflow
            </span>
          </div>
        </div>

        {/* 3. EIGHT-STAGE PROGRESS SCRUBBER & BUTTON STRIP */}
        <div className="border-t border-neutral-800/80 bg-neutral-950/95 p-3 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {PIPELINE_STAGES.map((stage, sIdx) => {
              const isActive = sIdx === activeStageIdx;
              const isPast = sIdx < activeStageIdx;

              return (
                <button
                  key={stage.id}
                  onClick={() => handleSelectStage(sIdx)}
                  className={`relative p-3 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between space-y-2 border cursor-pointer group ${
                    isActive
                      ? 'bg-white text-black border-white shadow-xl scale-[1.03] z-10'
                      : isPast
                      ? 'bg-neutral-900/80 text-neutral-300 border-neutral-800 hover:border-neutral-600'
                      : 'bg-neutral-950/60 text-neutral-400 border-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-300'
                    }`}>
                      {stage.number}
                    </span>
                    <div className={`w-4 h-4 ${isActive ? 'text-black' : 'text-neutral-500 group-hover:text-white'}`}>
                      <TechArsenalLogo id={stage.iconId} className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <div className={`text-xs font-syne font-bold leading-snug line-clamp-1 ${
                      isActive ? 'text-black' : 'text-white group-hover:text-neutral-200'
                    }`}>
                      {stage.shortName}
                    </div>
                    <div className={`text-[10px] font-mono line-clamp-1 ${
                      isActive ? 'text-neutral-700' : 'text-neutral-500'
                    }`}>
                      {stage.timeframe}
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className={`h-1 w-full rounded-full transition-all ${
                    isActive ? 'bg-black' : isPast ? 'bg-neutral-600' : 'bg-neutral-900'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Stepper Navigation Buttons & Modal Trigger */}
          <div className="flex items-center justify-between pt-4 px-2">
            <button
              onClick={handlePrevStage}
              className="px-4 py-2 rounded-xl mono-card text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS PHASE</span>
            </button>

            <button
              onClick={() => handleOpenStageModal(activeStageIdx)}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono text-white font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Maximize2 className="w-3.5 h-3.5 text-white" />
              <span>OPEN STAGE {activeStage.number} DOSSIER</span>
            </button>

            <button
              onClick={handleNextStage}
              className="px-4 py-2 rounded-xl mono-card text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>NEXT PHASE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* 4. ACTIVE STAGE DEEP-DIVE DOSSIER & INTERACTIVE SIMULATOR (INLINE VIEW) */}
      <div className="mono-card rounded-3xl p-6 sm:p-10 border border-neutral-800 relative overflow-hidden bg-neutral-950 space-y-8">
        
        {/* Stage Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold text-white">
                PHASE {activeStage.number}
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                {activeStage.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-syne font-bold text-white tracking-tight">
              {activeStage.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed pt-1">
              {activeStage.goal}
            </p>
          </div>

          {/* Timeframe & Modal Action */}
          <div className="flex lg:flex-col items-center lg:items-end gap-3 lg:gap-2">
            <button
              onClick={() => handleOpenStageModal(activeStageIdx)}
              className="px-4 py-2 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open in Modal</span>
            </button>
            <div className="text-right">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">ESTIMATED CYCLE</div>
              <div className="text-base font-syne font-bold text-white">{activeStage.timeframe}</div>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs inside the Dossier */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveDossierTab('artifact');
              triggerInteractiveResonance('click');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              activeDossierTab === 'artifact'
                ? 'bg-white text-black border-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border-neutral-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE STAGE ARTIFACT</span>
          </button>

          <button
            onClick={() => {
              setActiveDossierTab('blueprint');
              triggerInteractiveResonance('click');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              activeDossierTab === 'blueprint'
                ? 'bg-white text-black border-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border-neutral-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>GOVERNANCE &amp; DELIVERABLES</span>
          </button>

          <button
            onClick={() => {
              setActiveDossierTab('tools');
              triggerInteractiveResonance('click');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              activeDossierTab === 'tools'
                ? 'bg-white text-black border-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border-neutral-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>TOOLING &amp; ECOSYSTEM</span>
          </button>
        </div>

        {/* DOSSIER CONTENT: TAB 1 (INTERACTIVE ARTIFACT SIMULATOR) */}
        {activeDossierTab === 'artifact' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Live Simulator // Visualizing Alexandre's Output at Phase {activeStage.number}
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                [ Interactive Production Sandbox ]
              </span>
            </div>

            {/* Render Specific Interactive Artifact based on Phase */}
            {activeStage.artifactType === 'prd' && <PrdBacklogSimulator />}
            {activeStage.artifactType === 'wireframe' && <FigmaWireframeSimulator />}
            {activeStage.artifactType === 'design_tokens' && <FigmaDesignTokensSimulator />}
            {activeStage.artifactType === 'copy_seo' && <CopySeoMatrixSimulator />}
            {activeStage.artifactType === 'code_arch' && <ModularCodeSimulator />}
            {activeStage.artifactType === 'crm_workflow' && <CrmWorkflowSimulator />}
            {activeStage.artifactType === 'qa_launch' && <QaLaunchSimulator />}
            {activeStage.artifactType === 'growth_sprint' && <GrowthSprintSimulator />}
          </div>
        )}

        {/* DOSSIER CONTENT: TAB 2 (BLUEPRINT & DELIVERABLES) */}
        {activeDossierTab === 'blueprint' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column: Manager Role & Deliverables */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  MY ROLE AS WEB MANAGER
                </div>
                <p className="text-sm text-neutral-300 font-light leading-relaxed p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                  {activeStage.managerRole}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  VERIFIED DELIVERABLES ({activeStage.deliverables.length})
                </div>
                <div className="space-y-2">
                  {activeStage.deliverables.map((item, dIdx) => (
                    <div 
                      key={dIdx} 
                      className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3 text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Governance Gates & Quality Criteria */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  NON-NEGOTIABLE GOVERNANCE GATES
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Before advancing to the next phase, each project demand must satisfy these operational checkpoints:
                </p>
                <div className="space-y-2">
                  {activeStage.governanceGates.map((gate, gIdx) => (
                    <div 
                      key={gIdx} 
                      className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3 text-sm text-neutral-200"
                    >
                      <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{gate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire CTA block */}
              <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs font-syne font-bold text-white">Need structured management for your project?</div>
                  <div className="text-[11px] font-mono text-neutral-400">Let's map out your project sprints and deliverables.</div>
                </div>
                {onInquire && (
                  <button
                    onClick={onInquire}
                    className="px-5 py-2.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer whitespace-nowrap"
                  >
                    Discuss Scope
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

        {/* DOSSIER CONTENT: TAB 3 (TOOLS & ECOSYSTEM) */}
        {activeDossierTab === 'tools' && (
          <div className="space-y-6">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              TECHNOLOGIES &amp; PLATFORMS DEPLOYED AT PHASE {activeStage.number}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {activeStage.tools.map((tool, tIdx) => (
                <div 
                  key={tIdx} 
                  className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-start gap-4 hover:border-neutral-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-neutral-800 flex items-center justify-center text-white shrink-0">
                    <TechArsenalLogo id={tool.id} className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-syne font-bold text-white">{tool.name}</div>
                    <div className="text-xs font-mono text-neutral-400 leading-relaxed">{tool.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="text-white font-bold">Web Manager Guarantee:</span> All tool workflows are pre-configured with standardized templates, ensuring zero setup latency and direct stakeholder transparency.
            </div>
          </div>
        )}

        {/* CRITICAL EMPHASIZED DISCLAIMER ON ADAPTABILITY */}
        <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              ⚠️ Modular Delivery Framework // Tailored To Your Needs
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            Please note that this 8-stage pipeline represents a comprehensive end-to-end governance architecture. Because <strong>every project has distinct timelines, scopes, budgets, and technology stacks</strong>, this management workflow can be fully adapted, streamlined, or restructured to precisely align with your business goals.
          </p>
        </div>

      </div>

      {/* 5. FULL STAGE PROCESS MODAL POPUP DIALOG */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-neutral-700 shadow-2xl p-6 sm:p-8 space-y-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all cursor-pointer z-20"
              title="Close (ESC)"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Stage Header Info */}
            <div className="space-y-3 pb-6 border-b border-neutral-800 pr-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white text-black font-mono font-bold text-xs">
                  STAGE {activeStage.number} OF 08
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  {activeStage.category}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  • Average Cycle: <strong className="text-white">{activeStage.timeframe}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-syne font-bold text-white tracking-tight">
                {activeStage.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {activeStage.goal}
              </p>
            </div>

            {/* Grid: Manager Role, Deliverables, Quality Gates & Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Manager Role & Deliverables */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-white" />
                    HOW I LEAD THIS STAGE (MANAGEMENT)
                  </div>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                    {activeStage.managerRole}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    VERIFIED DELIVERABLES ({activeStage.deliverables.length})
                  </div>
                  <div className="space-y-2">
                    {activeStage.deliverables.map((item, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3 text-sm text-neutral-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Governance Gates & Tooling */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    QUALITY GATES &amp; GOVERNANCE (QA)
                  </div>
                  <div className="space-y-2">
                    {activeStage.governanceGates.map((gate, gIdx) => (
                      <div 
                        key={gIdx} 
                        className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3 text-sm text-neutral-200"
                      >
                        <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{gate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-white" />
                    TOOLS &amp; ECOSYSTEM
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.tools.map((tool, tIdx) => (
                      <div 
                        key={tIdx} 
                        className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-black border border-neutral-800 flex items-center justify-center text-white shrink-0">
                          <TechArsenalLogo id={tool.id} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-syne font-bold text-white">{tool.name}</div>
                          <div className="text-[10px] font-mono text-neutral-400 line-clamp-1">{tool.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Live Interactive Artifact Simulator */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-white" />
                  LIVE ARTIFACT SIMULATOR
                </span>
                <span className="text-[10px] font-mono text-neutral-500">[ Production Sandbox ]</span>
              </div>
              <div>
                {activeStage.artifactType === 'prd' && <PrdBacklogSimulator />}
                {activeStage.artifactType === 'wireframe' && <FigmaWireframeSimulator />}
                {activeStage.artifactType === 'design_tokens' && <FigmaDesignTokensSimulator />}
                {activeStage.artifactType === 'copy_seo' && <CopySeoMatrixSimulator />}
                {activeStage.artifactType === 'code_arch' && <ModularCodeSimulator />}
                {activeStage.artifactType === 'crm_workflow' && <CrmWorkflowSimulator />}
                {activeStage.artifactType === 'qa_launch' && <QaLaunchSimulator />}
                {activeStage.artifactType === 'growth_sprint' && <GrowthSprintSimulator />}
              </div>
            </div>

            {/* CRITICAL EMPHASIZED DISCLAIMER ON ADAPTABILITY */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-700/90 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  ⚠️ Modular Delivery Framework // Tailored To Your Needs
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Please note that this 8-stage pipeline represents a comprehensive end-to-end governance architecture. Because <strong>every project has distinct timelines, scopes, budgets, and technology stacks</strong>, this management workflow can be fully adapted, streamlined, or restructured to precisely align with your business goals.
              </p>
            </div>

            {/* Modal Actions Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectStage((activeStageIdx - 1 + PIPELINE_STAGES.length) % PIPELINE_STAGES.length)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>PREVIOUS STAGE</span>
                </button>
                <button
                  onClick={() => handleSelectStage((activeStageIdx + 1) % PIPELINE_STAGES.length)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 hover:text-white transition-all cursor-pointer"
                >
                  Close
                </button>
                {onInquire && (
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      onInquire();
                    }}
                    className="px-5 py-2 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
                  >
                    Inquire About My Project →
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

/* =========================================================================
   INTERACTIVE ARTIFACT SIMULATOR SUB-COMPONENTS
   ========================================================================= */

// 1. PRD & Backlog Gantt Simulator
const PrdBacklogSimulator: React.FC = () => {
  const [epics, setEpics] = useState([
    { id: 'EPIC-101', title: 'Architecture Scoping & Security Baseline', status: 'COMPLETED', progress: 100, owner: 'Alexandre P.' },
    { id: 'EPIC-102', title: 'Figma Auto-Layout UX & UI Design Tokens', status: 'IN PROGRESS', progress: 65, owner: 'Alexandre P.' },
    { id: 'EPIC-103', title: 'Shopify Liquid Custom Sections & OS 2.0', status: 'QUEUED', progress: 0, owner: 'Alexandre P.' },
    { id: 'EPIC-104', title: 'Klaviyo & HubSpot Two-Way CRM Sync', status: 'QUEUED', progress: 0, owner: 'Alexandre P.' },
  ]);

  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Jira / Linear Sprint Backlog Matrix</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">Sprint 01 // Velocity: 48 pts</span>
      </div>

      <div className="space-y-2.5">
        {epics.map((epic) => (
          <div key={epic.id} className="p-3.5 rounded-xl bg-black/60 border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-300">{epic.id}</span>
                <span className="text-xs font-syne font-bold text-white">{epic.title}</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-500">Lead: {epic.owner}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32 bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-white h-full transition-all" style={{ width: `${epic.progress}%` }} />
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                epic.status === 'COMPLETED' ? 'bg-neutral-800 text-white font-bold' :
                epic.status === 'IN PROGRESS' ? 'bg-white text-black font-bold' :
                'bg-neutral-900 text-neutral-500 border border-neutral-800'
              }`}>
                {epic.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. Figma Low-Fi Wireframe Simulator
const FigmaWireframeSimulator: React.FC = () => {
  const [wireframeLayout, setWireframeLayout] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Figma Low-Fidelity Information Architecture (IA)</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWireframeLayout('desktop')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono ${wireframeLayout === 'desktop' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}
          >
            DESKTOP FRAME
          </button>
          <button
            onClick={() => setWireframeLayout('mobile')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono ${wireframeLayout === 'mobile' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}
          >
            MOBILE FRAME
          </button>
        </div>
      </div>

      {/* Wireframe Mockup Canvas */}
      <div className="p-4 rounded-xl bg-black border border-neutral-800 flex justify-center">
        <div className={`transition-all duration-300 border-2 border-dashed border-neutral-700 rounded-xl p-4 space-y-3 bg-neutral-950 ${
          wireframeLayout === 'desktop' ? 'w-full max-w-2xl' : 'w-64'
        }`}>
          {/* Header Skeleton */}
          <div className="flex items-center justify-between p-2 rounded border border-neutral-800 bg-neutral-900/50">
            <div className="w-16 h-3 bg-neutral-700 rounded" />
            <div className="flex gap-2">
              <div className="w-10 h-2 bg-neutral-800 rounded" />
              <div className="w-10 h-2 bg-neutral-800 rounded" />
              <div className="w-12 h-4 bg-white/80 rounded" />
            </div>
          </div>

          {/* Hero Section Skeleton */}
          <div className="p-6 rounded border border-neutral-800 bg-neutral-900/30 text-center space-y-3">
            <div className="w-3/4 h-5 bg-neutral-700 rounded mx-auto" />
            <div className="w-1/2 h-3 bg-neutral-800 rounded mx-auto" />
            <div className="flex justify-center gap-3 pt-2">
              <div className="w-24 h-6 bg-white rounded text-[9px] font-mono text-black font-bold flex items-center justify-center">PRIMARY CTA</div>
              <div className="w-24 h-6 border border-neutral-700 rounded text-[9px] font-mono text-neutral-400 flex items-center justify-center">SECONDARY</div>
            </div>
          </div>

          {/* 3-Column Bento Skeleton */}
          <div className={`grid gap-2 ${wireframeLayout === 'desktop' ? 'grid-cols-3' : 'grid-cols-1'}`}>
            <div className="p-3 rounded border border-neutral-800 bg-neutral-900/40 h-20 flex flex-col justify-between">
              <div className="w-8 h-8 rounded bg-neutral-800" />
              <div className="w-16 h-2 bg-neutral-700 rounded" />
            </div>
            <div className="p-3 rounded border border-neutral-800 bg-neutral-900/40 h-20 flex flex-col justify-between">
              <div className="w-8 h-8 rounded bg-neutral-800" />
              <div className="w-16 h-2 bg-neutral-700 rounded" />
            </div>
            <div className="p-3 rounded border border-neutral-800 bg-neutral-900/40 h-20 flex flex-col justify-between">
              <div className="w-8 h-8 rounded bg-neutral-800" />
              <div className="w-16 h-2 bg-neutral-700 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Figma Design System & Tokens Simulator
const FigmaDesignTokensSimulator: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Figma Design Tokens &amp; Component Variants</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">Tokens: 64 defined</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Token Column 1: Color Palette */}
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-3">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">COLOR SYSTEM TOKENS</div>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-1.5 rounded bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-black border border-neutral-700" />
                <span className="text-white">--surface-obsidian</span>
              </div>
              <span className="text-neutral-500">#030303</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-white" />
                <span className="text-white">--surface-pure</span>
              </div>
              <span className="text-neutral-500">#FFFFFF</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-neutral-800" />
                <span className="text-white">--border-subtle</span>
              </div>
              <span className="text-neutral-500">#262626</span>
            </div>
          </div>
        </div>

        {/* Token Column 2: Typography Hierarchy */}
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-3">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">TYPOGRAPHY SCALE</div>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-1.5 rounded bg-neutral-900">
              <div className="text-white font-syne font-bold text-sm">Syne Bold (H1-H3)</div>
              <div className="text-[10px] text-neutral-500">Display Headings // 32-72px</div>
            </div>
            <div className="p-1.5 rounded bg-neutral-900">
              <div className="text-white font-cinzel italic text-sm">Cinzel Serif (Subheads)</div>
              <div className="text-[10px] text-neutral-500">Editorial Emphasis // 18-28px</div>
            </div>
            <div className="p-1.5 rounded bg-neutral-900">
              <div className="text-white font-mono text-xs">JetBrains Mono (Telemetry)</div>
              <div className="text-[10px] text-neutral-500">Technical Specs // 10-13px</div>
            </div>
          </div>
        </div>

        {/* Token Column 3: Component Variants */}
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-3">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">ATOMIC BUTTON VARIANTS</div>
          <div className="space-y-2 text-xs">
            <button className="w-full py-2 rounded-lg bg-white text-black font-syne font-bold text-xs uppercase tracking-wider">
              Primary Solid
            </button>
            <button className="w-full py-2 rounded-lg bg-neutral-900 text-white border border-neutral-700 font-mono text-xs uppercase tracking-wider">
              Secondary Outline
            </button>
            <div className="text-center text-[10px] font-mono text-neutral-500">
              Auto-Layout: 16px Padding // 12px Radius
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Copywriting & SEO Matrix Simulator
const CopySeoMatrixSimulator: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Copywriting &amp; Schema.org Structured Data Matrix</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">SEO Schema: 100% Valid</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Copy Mapping */}
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-2 text-xs">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">HOMEPAGE CONTENT ARCHITECTURE</div>
          <div className="p-2 rounded bg-neutral-900 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500">&lt;H1&gt; TAG</span>
            <p className="text-white font-bold">Industrial Post Drivers &amp; Hydraulic Fencing Equipment</p>
          </div>
          <div className="p-2 rounded bg-neutral-900 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500">&lt;VALUE PROPOSITION / HOOK&gt;</span>
            <p className="text-neutral-300">Engineered for commercial contractors. Drive 1 post every 30 seconds with zero operator fatigue.</p>
          </div>
          <div className="p-2 rounded bg-neutral-900 space-y-1">
            <span className="text-[10px] font-mono text-neutral-500">&lt;CTA MICROCOPY&gt;</span>
            <p className="text-white font-mono">Order Today // Free Freight Shipping Across North America</p>
          </div>
        </div>

        {/* Structured Data JSON */}
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-2 font-mono text-xs">
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider">SCHEMA.ORG JSON-LD GENERATOR</div>
          <pre className="p-3 rounded bg-neutral-950 text-neutral-300 text-[11px] overflow-x-auto leading-relaxed border border-neutral-800">
{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pneumatic Post Driver 2026",
  "brand": { "@type": "Brand", "name": "Rohrer Mfg" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "InStock"
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

// 5. Modular Code & Architecture Simulator
const ModularCodeSimulator: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Modular Theme Architecture &amp; Component Tree</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">Shopify OS 2.0 / ACF Pro</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-2">
          <div className="text-[10px] text-neutral-400 uppercase">DIRECTORY COMPONENT TREE</div>
          <div className="space-y-1 text-neutral-300 text-[11px]">
            <div>📁 /sections</div>
            <div className="pl-4">├── 📄 hero-high-conversion.liquid</div>
            <div className="pl-4">├── 📄 bento-features-matrix.liquid</div>
            <div className="pl-4">└── 📄 dynamic-booking-drawer.liquid</div>
            <div>📁 /snippets</div>
            <div className="pl-4">├── 📄 product-variant-picker.liquid</div>
            <div className="pl-4">└── 📄 schema-structured-data.liquid</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-2">
          <div className="text-[10px] text-neutral-400 uppercase">MODULAR LIQUID SECTION SCHEMA</div>
          <pre className="p-2 rounded bg-neutral-950 text-neutral-300 text-[10px] leading-relaxed overflow-x-auto">
{`{% schema %}
{
  "name": "Bento Feature Grid",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading" }
  ],
  "blocks": [
    { "type": "card", "name": "Feature Card" }
  ],
  "presets": [{ "name": "Bento Feature Grid" }]
}
{% endschema %}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

// 6. CRM & Automation Workflow Simulator
const CrmWorkflowSimulator: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    { num: '01', name: 'Trigger Event', desc: 'Customer submits custom quote or orders on Shopify', tool: 'Shopify / Webhook' },
    { num: '02', name: 'Zapier Logic Router', desc: 'Validate payload, calculate Lead Score, deduplicate data', tool: 'Zapier Enterprise' },
    { num: '03', name: 'CRM Deal Creation', desc: 'Create Contact + Deal in HubSpot / GHL pipeline', tool: 'HubSpot CRM' },
    { num: '04', name: 'Instant Nurture & Alert', desc: 'Trigger Klaviyo email series + send Slack alert to sales', tool: 'Klaviyo + Slack' }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Automated Pipeline &amp; Two-Way CRM Routing</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">Zero Data Loss SLA</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((s, idx) => (
          <div 
            key={s.num} 
            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
              activeStep === idx 
                ? 'bg-white text-black border-white shadow-lg' 
                : 'bg-black/60 text-neutral-300 border-neutral-800 hover:border-neutral-600'
            }`}
            onClick={() => setActiveStep(idx)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                activeStep === idx ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-300'
              }`}>
                STEP {s.num}
              </span>
              <span className={`text-[10px] font-mono ${activeStep === idx ? 'text-neutral-700' : 'text-neutral-500'}`}>
                {s.tool}
              </span>
            </div>
            <div className="font-syne font-bold text-xs mb-1">{s.name}</div>
            <div className={`text-[11px] leading-relaxed ${activeStep === idx ? 'text-neutral-800' : 'text-neutral-400'}`}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. QA & Zero-Downtime Launch Simulator
const QaLaunchSimulator: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Google Lighthouse 99+ Speed &amp; DNS Cutover Monitor</span>
        </div>
        <span className="text-[11px] font-mono text-white font-bold bg-neutral-800 px-2 py-0.5 rounded">STATUS: GREEN</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-center space-y-1">
          <div className="text-3xl font-syne font-extrabold text-white">99</div>
          <div className="text-[10px] font-mono text-neutral-400 uppercase">PERFORMANCE</div>
          <div className="text-[9px] font-mono text-neutral-500">LCP: 0.8s</div>
        </div>
        <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-center space-y-1">
          <div className="text-3xl font-syne font-extrabold text-white">100</div>
          <div className="text-[10px] font-mono text-neutral-400 uppercase">ACCESSIBILITY</div>
          <div className="text-[9px] font-mono text-neutral-500">WCAG AA Pass</div>
        </div>
        <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-center space-y-1">
          <div className="text-3xl font-syne font-extrabold text-white">100</div>
          <div className="text-[10px] font-mono text-neutral-400 uppercase">BEST PRACTICES</div>
          <div className="text-[9px] font-mono text-neutral-500">HTTPS &amp; CSP</div>
        </div>
        <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-center space-y-1">
          <div className="text-3xl font-syne font-extrabold text-white">100</div>
          <div className="text-[10px] font-mono text-neutral-400 uppercase">SEO SCORE</div>
          <div className="text-[9px] font-mono text-neutral-500">Structured Schema</div>
        </div>
      </div>
    </div>
  );
};

// 8. Growth & Sprint Simulator
const GrowthSprintSimulator: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-bold text-white uppercase">Post-Launch Telemetry &amp; CRO Sprint Cycles</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">99.99% Uptime Verified</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-1">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">MONTHLY UPTIME SLA</div>
          <div className="text-xl font-syne font-bold text-white">99.99%</div>
          <div className="text-[11px] font-mono text-neutral-400">Cloudflare Edge Health</div>
        </div>
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-1">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">SPRINT VELOCITY</div>
          <div className="text-xl font-syne font-bold text-white">24 Story Pts</div>
          <div className="text-[11px] font-mono text-neutral-400">Bi-Weekly Releases</div>
        </div>
        <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-1">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">CONVERSION GAIN</div>
          <div className="text-xl font-syne font-bold text-white">+38.4%</div>
          <div className="text-[11px] font-mono text-neutral-400">CRO A/B Checkout Test</div>
        </div>
      </div>
    </div>
  );
};
