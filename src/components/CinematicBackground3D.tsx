import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Layers, RotateCcw, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CinematicBackground3DProps {
  interactive?: boolean;
  introActive?: boolean;
}

export type SceneMode = 'monolith' | 'lattice' | 'horizon';

export const CinematicBackground3D: React.FC<CinematicBackground3DProps> = ({ 
  interactive = true,
  introActive = false 
}) => {
  const { isLight, theme } = useTheme();
  const mountRef = useRef<HTMLDivElement>(null);
  const [sceneMode, setSceneMode] = useState<SceneMode>('monolith');
  const [isWireframe, setIsWireframe] = useState<boolean>(true);
  const [fps, setFps] = useState<number>(60);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // References to keep state across frame loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mainGroupRef = useRef<THREE.Group | null>(null);
  const introStateRef = useRef<boolean>(introActive);
  const scrollRef = useRef<{ y: number; targetY: number }>({
    y: 0,
    targetY: 0,
  });

  useEffect(() => {
    introStateRef.current = introActive;
  }, [introActive]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene setup based on theme
    const scene = new THREE.Scene();
    const bgColor = isLight ? 0xfafafa : 0x030303;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.035);
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, introStateRef.current ? 16 : 9);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isLight ? 1.0 : 1.2;
    rendererRef.current = renderer;

    // Clear previous children and mount canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Lighting (Chiaroscuro adapted to theme)
    const ambientColor = 0xffffff;
    const ambientLight = new THREE.AmbientLight(ambientColor, isLight ? 1.4 : 0.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isLight ? 1.6 : 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, isLight ? 1.0 : 1.8);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0xffffff, isLight ? 0.8 : 1.5, 12);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 5. Clean, Calm Ambient Dust/Particle layer
    const particlesCount = 400;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 30;
      posArray[i + 1] = (Math.random() - 0.5) * 30;
      posArray[i + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: isLight ? 0x71717a : 0x999999,
      transparent: true,
      opacity: isLight ? 0.25 : 0.25,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Main Monument Sculpture Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    mainGroupRef.current = mainGroup;

    // Build the geometries based on current mode
    buildSceneGeometry(sceneMode, isWireframe, isLight);

    // 6. Animation Loop (Scroll-reactive kinetic rotation)
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let lastFpsUpdate = 0;
    let frames = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // FPS calculation
      frames++;
      if (elapsedTime - lastFpsUpdate >= 1) {
        setFps(frames);
        frames = 0;
        lastFpsUpdate = elapsedTime;
      }

      // Smooth scroll interpolation (gentle damping)
      scrollRef.current.y += (scrollRef.current.targetY - scrollRef.current.y) * 0.025;
      const currentScroll = scrollRef.current.y;

      // Camera reveal transition
      const targetCamZ = introStateRef.current ? 13.0 : 8.5;
      camera.position.z += (targetCamZ - camera.position.z) * 0.025;
      camera.position.x = 0;
      camera.position.y = -currentScroll * 0.00018;

      // Scroll-driven sculpture transformation
      if (mainGroupRef.current) {
        const subtleIdle = elapsedTime * 0.0038;
        const scrollRotY = currentScroll * 0.00045;
        const scrollRotX = Math.sin(currentScroll * 0.00035) * 0.05;

        mainGroupRef.current.rotation.y = subtleIdle + scrollRotY;
        mainGroupRef.current.rotation.x = scrollRotX + 0.03;
        mainGroupRef.current.position.y = -currentScroll * 0.0001;
      }

      // Gentle ambient particle rotation
      particlesMesh.rotation.y = elapsedTime * 0.0007 + currentScroll * 0.00005;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Scroll and Resize Handlers
    const handleScroll = () => {
      scrollRef.current.targetY = window.scrollY || document.documentElement.scrollTop || 0;
    };

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current) return;
      const w = mountRef.current.clientWidth || window.innerWidth;
      const h = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [sceneMode, isWireframe, isLight]);

  const buildSceneGeometry = (mode: SceneMode, wireframe: boolean, light: boolean) => {
    if (!mainGroupRef.current) return;
    const group = mainGroupRef.current;

    // Clear existing children
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: light ? 0x71717a : 0xffffff,
      roughness: light ? 0.4 : 0.1,
      metalness: light ? 0.3 : 0.95,
      wireframe: wireframe,
      wireframeLinewidth: 1,
    });

    const darkInnerMaterial = new THREE.MeshStandardMaterial({
      color: light ? 0xe4e4e7 : 0x111111,
      roughness: light ? 0.9 : 0.4,
      metalness: light ? 0.1 : 0.8,
    });

    if (mode === 'monolith') {
      // 1. Central Morphing Icosahedron / Sculptural Core
      const outerGeo = new THREE.IcosahedronGeometry(2.4, 2);
      const outerMesh = new THREE.Mesh(outerGeo, chromeMaterial);
      group.add(outerMesh);

      // Inner solid core
      if (wireframe) {
        const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
        const innerMesh = new THREE.Mesh(innerGeo, darkInnerMaterial);
        group.add(innerMesh);
      }

      // Orbiting Equatorial Ring
      const ringGeo = new THREE.TorusGeometry(3.6, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({ 
        color: light ? 0xa1a1aa : 0xffffff, 
        transparent: true, 
        opacity: light ? 0.3 : 0.4 
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      group.add(ringMesh);

      const ringGeo2 = new THREE.TorusGeometry(4.2, 0.015, 16, 100);
      const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat);
      ringMesh2.rotation.y = Math.PI / 4;
      group.add(ringMesh2);
    } else if (mode === 'lattice') {
      // 2. Neural Lattice (Torus Knot & Data Nodes)
      const knotGeo = new THREE.TorusKnotGeometry(1.8, 0.35, 128, 32, 2, 3);
      const knotMesh = new THREE.Mesh(knotGeo, chromeMaterial);
      group.add(knotMesh);

      // Surrounding data node spheres
      const nodesCount = 24;
      for (let i = 0; i < nodesCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodesCount);
        const theta = Math.sqrt(nodesCount * Math.PI) * phi;
        const x = 3.2 * Math.cos(theta) * Math.sin(phi);
        const y = 3.2 * Math.sin(theta) * Math.sin(phi);
        const z = 3.2 * Math.cos(phi);

        const nodeGeo = new THREE.SphereGeometry(0.06, 12, 12);
        const nodeMat = new THREE.MeshBasicMaterial({ color: light ? 0x111111 : 0xffffff });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(x, y, z);
        group.add(nodeMesh);
      }
    } else if (mode === 'horizon') {
      // 3. Mathematical Wave Horizon / Plane of Code
      const planeGeo = new THREE.PlaneGeometry(8, 8, 36, 36);
      const pos = planeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vy = pos.getY(i);
        const z = Math.sin(vx * 1.5) * 0.4 + Math.cos(vy * 1.5) * 0.4;
        pos.setZ(i, z);
      }
      planeGeo.computeVertexNormals();

      const planeMesh = new THREE.Mesh(planeGeo, chromeMaterial);
      planeMesh.rotation.x = -Math.PI / 2.5;
      planeMesh.position.y = -0.5;
      group.add(planeMesh);

      // Monolithic Floating Pyramid Above
      const octaGeo = new THREE.OctahedronGeometry(1.2, 0);
      const octaMesh = new THREE.Mesh(octaGeo, darkInnerMaterial);
      octaMesh.position.y = 1.4;
      group.add(octaMesh);
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ThreeJS WebGL canvas mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Atmospheric Film Grain & Scanlines */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      <div className="absolute inset-0 subtle-scanlines pointer-events-none opacity-30" />
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />

      {/* Minimalist 3D Interactive Console (Bottom Left) */}
      <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-3">
        <div className={`mono-card px-3.5 py-2 rounded-xl flex items-center gap-3 text-[11px] font-mono transition-colors ${
          isLight ? 'text-neutral-700 bg-white/90 border-neutral-300' : 'text-neutral-400 bg-neutral-950/80 border-neutral-800'
        }`}>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isLight ? 'bg-black' : 'bg-white'}`} />
            <span className={isLight ? 'text-neutral-600' : 'text-neutral-200'}>3D CORE //</span>
            <span className={`uppercase font-bold ${isLight ? 'text-black' : 'text-white'}`}>{sceneMode}</span>
          </div>

          <div className={`h-3 w-px ${isLight ? 'bg-neutral-300' : 'bg-neutral-800'}`} />

          {/* Mode Switcher */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSceneMode('monolith')}
              className={`px-2 py-0.5 rounded text-[10px] transition-all cursor-pointer ${
                sceneMode === 'monolith' 
                  ? (isLight ? 'bg-black text-white font-bold' : 'bg-white text-black font-bold') 
                  : (isLight ? 'hover:text-black' : 'hover:text-white')
              }`}
            >
              01
            </button>
            <button
              onClick={() => setSceneMode('lattice')}
              className={`px-2 py-0.5 rounded text-[10px] transition-all cursor-pointer ${
                sceneMode === 'lattice' 
                  ? (isLight ? 'bg-black text-white font-bold' : 'bg-white text-black font-bold') 
                  : (isLight ? 'hover:text-black' : 'hover:text-white')
              }`}
            >
              02
            </button>
            <button
              onClick={() => setSceneMode('horizon')}
              className={`px-2 py-0.5 rounded text-[10px] transition-all cursor-pointer ${
                sceneMode === 'horizon' 
                  ? (isLight ? 'bg-black text-white font-bold' : 'bg-white text-black font-bold') 
                  : (isLight ? 'hover:text-black' : 'hover:text-white')
              }`}
            >
              03
            </button>
          </div>

          <div className={`h-3 w-px ${isLight ? 'bg-neutral-300' : 'bg-neutral-800'}`} />

          {/* Wireframe toggle */}
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
              isWireframe 
                ? (isLight ? 'text-black font-bold' : 'text-white') 
                : (isLight ? 'text-neutral-400' : 'text-neutral-500')
            }`}
            title="Toggle Wireframe Architecture"
          >
            <Layers className="w-3 h-3" />
            <span>{isWireframe ? 'WIREFRAME' : 'SOLID'}</span>
          </button>

          <div className={`h-3 w-px ${isLight ? 'bg-neutral-300' : 'bg-neutral-800'}`} />
          <span className={`text-[10px] ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`}>{fps} FPS</span>
        </div>
      </div>
    </div>
  );
};
