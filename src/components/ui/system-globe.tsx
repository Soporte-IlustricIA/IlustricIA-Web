import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../ThemeProvider';

// --- Helper Functions ---

// Generate random points in a sphere volume
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

// Generate random points on a sphere surface (for the main globe shell)
function generateSurfacePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

// Generate random points in a spherical shell (for the halo)
function generateShellPoints(count: number, minRadius: number, maxRadius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = minRadius + Math.random() * (maxRadius - minRadius);
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

// --- Components ---

function Core({ count = 1000, radius = 1.5, isDark = true }: { count?: number; radius?: number; isDark?: boolean }) {
  const points = useMemo(() => generateSpherePoints(count, radius), [count, radius]);
  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? "#06b6d4" : "#0891b2"} // Cyan-500 vs Cyan-600
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.6 : 0.8}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>
    </group>
  );
}

function Surface({ count = 2000, radius = 1.8, isDark = true }: { count?: number; radius?: number; isDark?: boolean }) {
  const points = useMemo(() => generateSurfacePoints(count, radius), [count, radius]);
  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? "#3b82f6" : "#2563eb"} // Blue-500 vs Blue-600
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.8 : 0.9}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>
    </group>
  );
}

function Halo({ count = 800, minRadius = 2.0, maxRadius = 3.5, isDark = true }: { count?: number; minRadius?: number; maxRadius?: number; isDark?: boolean }) {
  const points = useMemo(() => generateShellPoints(count, minRadius, maxRadius), [count, minRadius, maxRadius]);
  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? "#60a5fa" : "#3b82f6"} // Blue-400 vs Blue-500
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.4 : 0.6}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>
    </group>
  );
}

function DataThreads({ count = 40, radius = 1.5 }: { count?: number; radius?: number }) {
  const linesGeometry = useMemo(() => {
    const points: number[] = [];
    for (let i = 0; i < count; i++) {
      // Point A
      const r1 = radius * Math.cbrt(Math.random());
      const theta1 = Math.random() * 2 * Math.PI;
      const phi1 = Math.acos(2 * Math.random() - 1);
      const x1 = r1 * Math.sin(phi1) * Math.cos(theta1);
      const y1 = r1 * Math.sin(phi1) * Math.sin(theta1);
      const z1 = r1 * Math.cos(phi1);

      // Point B (nearby to keep lines short-ish, or random for chaos)
      const r2 = radius * Math.cbrt(Math.random());
      const theta2 = Math.random() * 2 * Math.PI;
      const phi2 = Math.acos(2 * Math.random() - 1);
      const x2 = r2 * Math.sin(phi2) * Math.cos(theta2);
      const y2 = r2 * Math.sin(phi2) * Math.sin(theta2);
      const z2 = r2 * Math.cos(phi2);

      points.push(x1, y1, z1);
      points.push(x2, y2, z2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }, [count, radius]);

  const ref = useRef<THREE.LineSegments>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <lineSegments ref={ref} geometry={linesGeometry}>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.2} linewidth={1} />
      </lineSegments>
    </group>
  );
}

function InteractiveGroup({ hovered, mouse, children }: { hovered: boolean; mouse: React.MutableRefObject<number[]>; children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly scale
      const targetScale = hovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Smoothly rotate towards mouse
      const targetRotationY = mouse.current[0] * 0.3;
      const targetRotationX = -mouse.current[1] * 0.3;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function SystemGlobe() {
  const [hovered, setHovered] = useState(false);
  const mouse = useRef([0, 0]);
  const { theme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = [
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    ];
  };

  return (
    <div 
      className="w-full h-full absolute inset-0 z-0 pointer-events-auto cursor-crosshair"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => {
        hovered && setHovered(false);
        mouse.current = [0, 0];
      }}
      onMouseMove={onMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={[isDark ? '#000' : '#fff', 5, 12]} />
        <ambientLight intensity={hovered ? 1.2 : 0.5} />
        <pointLight position={[mouse.current[0] * 5, mouse.current[1] * 5, 3]} intensity={hovered ? 15 : 0} color="#29ABE2" />
        
        <InteractiveGroup hovered={hovered} mouse={mouse}>
          {/* Inner Core Swarm */}
          <Core count={hovered ? 150 : 100} radius={1.2} isDark={isDark} />
          
          {/* Main Globe Surface Swarm */}
          <Surface count={hovered ? 800 : 500} radius={1.6} isDark={isDark} />
          
          {/* Outer Halo Swarm */}
          <Halo count={hovered ? 300 : 200} minRadius={1.8} maxRadius={3.0} isDark={isDark} />
          
          {/* Connecting Data Threads */}
          <DataThreads count={hovered ? 30 : 20} radius={1.4} />
        </InteractiveGroup>
      </Canvas>
    </div>
  );
}
