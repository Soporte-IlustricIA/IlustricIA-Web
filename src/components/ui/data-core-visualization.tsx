import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNodes({ count = 60 }: { count?: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 12;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f2ff" // Neon Cyan
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function NeuralConnections({ count = 60 }: { count?: number }) {
  const lines = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    const linePairs: number[] = [];
    for (let i = 0; i < count; i++) {
      const x1 = positions[i * 3];
      const y1 = positions[i * 3 + 1];
      const z1 = positions[i * 3 + 2];

      const distances = [];
      for (let j = 0; j < count; j++) {
        if (i === j) continue;
        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];
        const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
        distances.push({ index: j, distance: d });
      }

      distances.sort((a, b) => a.distance - b.distance);
      
      for (let k = 0; k < 3; k++) {
        const neighbor = distances[k];
        if (neighbor.distance < 5) {
          linePairs.push(x1, y1, z1);
          linePairs.push(positions[neighbor.index * 3], positions[neighbor.index * 3 + 1], positions[neighbor.index * 3 + 2]);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePairs, 3));
    return geometry;
  }, [count]);

  const ref = useRef<THREE.LineSegments>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <lineSegments ref={ref} geometry={lines}>
      <lineBasicMaterial color="#ff00ff" transparent opacity={0.3} linewidth={2} />
    </lineSegments>
  );
}

function FloatingParticles({ count = 200 }: { count?: number }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function DataCoreVisualization() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <NeuralNodes count={40} />
        <NeuralConnections count={40} />
        <FloatingParticles count={300} />
      </Canvas>
    </div>
  );
}
