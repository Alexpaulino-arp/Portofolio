import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Cpu, Activity, RefreshCw } from 'lucide-react';

export type SceneMode = 'crystalline' | 'node-matrix' | 'seo-topology';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sceneMode, setSceneMode] = useState<SceneMode>('crystalline');
  const [fps, setFps] = useState<number>(60);
  const [activeNodesCount, setActiveNodesCount] = useState<number>(142);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b14, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Group to hold all dynamic objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.8);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x38bdf8, 3.5, 35);
    pointLightBlue.position.set(8, 10, 8);
    scene.add(pointLightBlue);

    const pointLightAmber = new THREE.PointLight(0xf59e0b, 2.5, 30);
    pointLightAmber.position.set(-8, -6, 5);
    scene.add(pointLightAmber);

    const pointLightIndigo = new THREE.PointLight(0x6366f1, 2.8, 30);
    pointLightIndigo.position.set(0, -8, -6);
    scene.add(pointLightIndigo);

    // Mode 1: Crystalline Core Object
    const crystalGroup = new THREE.Group();
    
    // Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, wireframeMat);
    crystalGroup.add(outerMesh);

    // Inner Glassy Core
    const innerGeo = new THREE.OctahedronGeometry(2.6, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e3a8a,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6,
      opacity: 0.85,
      transparent: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    crystalGroup.add(innerMesh);

    // Dynamic Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
    const ringGeo1 = new THREE.RingGeometry(5.2, 5.26, 64);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    crystalGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const ringGeo2 = new THREE.RingGeometry(6.0, 6.06, 64);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    crystalGroup.add(ringMesh2);

    mainGroup.add(crystalGroup);

    // Mode 2: Node Matrix (Enterprise API & Zapier Network)
    const nodeGroup = new THREE.Group();
    const nodeCount = 65;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const nodeMatBlue = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.8 });
    const nodeMatAmber = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.8 });

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 11
      );
      nodePositions.push(pos);
      const mesh = new THREE.Mesh(nodeGeo, i % 4 === 0 ? nodeMatAmber : nodeMatBlue);
      mesh.position.copy(pos);
      nodeGroup.add(mesh);
    }

    // Connect close nodes with line segments
    const linePositions: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 3.6) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.45 });
    const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    nodeGroup.add(linesMesh);

    // Mode 3: SEO & Core Web Vitals Topology Wave Mesh
    const topologyGroup = new THREE.Group();
    const topoWidth = 14;
    const topoHeight = 14;
    const topoSegments = 36;
    const topoGeo = new THREE.PlaneGeometry(topoWidth, topoHeight, topoSegments, topoSegments);
    topoGeo.rotateX(-Math.PI / 2.5);
    const topoMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      wireframe: true,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
      roughness: 0.3
    });
    const topoMesh = new THREE.Mesh(topoGeo, topoMat);
    topologyGroup.add(topoMesh);

    // Floating Data Packets (Orbiting particles)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePosArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePosArray[i] = (Math.random() - 0.5) * 24;
      particlePosArray[i + 1] = (Math.random() - 0.5) * 24;
      particlePosArray[i + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePosArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.8;
      mouseY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - lastFpsUpdate >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      // Smooth damping rotation toward mouse
      targetRotationY += (mouseX - targetRotationY) * 0.04;
      targetRotationX += (mouseY - targetRotationX) * 0.04;

      mainGroup.rotation.y = targetRotationY + elapsedTime * 0.12;
      mainGroup.rotation.x = targetRotationX + Math.sin(elapsedTime * 0.3) * 0.08;

      // Mode-specific animations
      if (crystalGroup.visible) {
        outerMesh.rotation.x = elapsedTime * 0.2;
        outerMesh.rotation.y = elapsedTime * 0.25;
        innerMesh.rotation.x = -elapsedTime * 0.35;
        innerMesh.rotation.z = elapsedTime * 0.18;
        ringMesh1.rotation.z = elapsedTime * 0.3;
        ringMesh2.rotation.z = -elapsedTime * 0.25;
      }

      if (nodeGroup.visible) {
        nodeGroup.rotation.y = elapsedTime * 0.15;
        nodeGroup.rotation.x = Math.cos(elapsedTime * 0.2) * 0.15;
      }

      if (topologyGroup.visible) {
        const positions = topoGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const u = positions.getX(i);
          const v = positions.getY(i);
          const z = Math.sin(u * 0.8 + elapsedTime * 2.5) * 0.7 + Math.cos(v * 0.8 + elapsedTime * 2) * 0.5;
          positions.setZ(i, z);
        }
        positions.needsUpdate = true;
      }

      // Particle floating
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Scene mode visibility controller
    const updateActiveScene = (mode: SceneMode) => {
      mainGroup.clear();
      if (mode === 'crystalline') {
        mainGroup.add(crystalGroup);
        crystalGroup.visible = true;
        nodeGroup.visible = false;
        topologyGroup.visible = false;
        setActiveNodesCount(142);
      } else if (mode === 'node-matrix') {
        mainGroup.add(nodeGroup);
        crystalGroup.visible = false;
        nodeGroup.visible = true;
        topologyGroup.visible = false;
        setActiveNodesCount(480);
      } else if (mode === 'seo-topology') {
        mainGroup.add(topologyGroup);
        crystalGroup.visible = false;
        nodeGroup.visible = false;
        topologyGroup.visible = true;
        setActiveNodesCount(256);
      }
    };

    updateActiveScene(sceneMode);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [sceneMode]);

  return (
    <div 
      className="relative w-full h-[520px] lg:h-[620px] rounded-2xl overflow-hidden glass-panel border border-slate-700/50 shadow-2xl flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80 text-xs font-mono text-slate-300 z-10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-400 font-semibold uppercase tracking-wider">3D WebGL Core Engine</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-blue-400">WebGL 2.0 ACES Filmic</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-slate-400">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>{fps} FPS</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{activeNodesCount} Vertices</span>
          </div>
          <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">
            {sceneMode.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 3D WebGL Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 top-[40px] bottom-[54px] w-full h-[calc(100%-94px)] cursor-grab active:cursor-grabbing"
      />

      {/* Floating subtle instructions */}
      <div className="absolute top-14 left-4 z-10 pointer-events-none hidden sm:block">
        <p className="text-[11px] font-mono text-slate-400/80 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800 backdrop-blur">
          {isHovered ? "✦ Hover & Move cursor to orient 3D core" : "✦ Interactive Real-Time 3D Simulation"}
        </p>
      </div>

      {/* Bottom Mode Switcher Controls */}
      <div className="z-10 px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 backdrop-blur-md">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <span className="text-slate-500">Render Mode:</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSceneMode('crystalline')}
            className={`px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              sceneMode === 'crystalline'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Crystalline Core</span>
          </button>

          <button
            onClick={() => setSceneMode('node-matrix')}
            className={`px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              sceneMode === 'node-matrix'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Zapier Matrix</span>
          </button>

          <button
            onClick={() => setSceneMode('seo-topology')}
            className={`px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              sceneMode === 'seo-topology'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>SEO Topology</span>
          </button>
        </div>
      </div>
    </div>
  );
};
