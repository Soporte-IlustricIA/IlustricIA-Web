import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

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

function Core({ count = 1000, radius = 1.5 }: { count?: number; radius?: number }) {
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
          color="#06b6d4" // Cyan-500
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Surface({ count = 2000, radius = 1.8 }: { count?: number; radius?: number }) {
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
          color="#3b82f6" // Blue-500
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Halo({ count = 800, minRadius = 2.0, maxRadius = 3.5 }: { count?: number; minRadius?: number; maxRadius?: number }) {
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
          color="#60a5fa" // Blue-400
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
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

export default function SystemGlobe() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#000', 5, 12]} />
        <ambientLight intensity={0.5} />
        
        {/* Inner Core Swarm */}
        <Core count={300} radius={1.2} />
        
        {/* Main Globe Surface Swarm */}
        <Surface count={1500} radius={1.6} />
        
        {/* Outer Halo Swarm */}
        <Halo count={600} minRadius={1.8} maxRadius={3.0} />
        
        {/* Connecting Data Threads */}
        <DataThreads count={60} radius={1.4} />
      </Canvas>
    </div>
  );
}
