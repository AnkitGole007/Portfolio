'use client';

import { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere, Ring } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

interface PlanetData {
  name: string;
  href: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  tilt: number;
  external?: boolean;
}

const planets: PlanetData[] = [
  { name: 'About', href: '/about', color: '#60a5fa', orbitRadius: 3.2, orbitSpeed: 0.4, size: 0.35, tilt: 0 },
  { name: 'Projects', href: '/projects', color: '#a78bfa', orbitRadius: 4.0, orbitSpeed: 0.32, size: 0.4, tilt: 0.15 },
  { name: 'Experience', href: '/experience', color: '#34d399', orbitRadius: 4.8, orbitSpeed: 0.25, size: 0.38, tilt: -0.1 },
  { name: 'Skills', href: '/skills', color: '#fbbf24', orbitRadius: 5.5, orbitSpeed: 0.2, size: 0.32, tilt: 0.2 },
  { name: 'Achievements', href: '/achievements', color: '#f472b6', orbitRadius: 6.2, orbitSpeed: 0.16, size: 0.36, tilt: -0.05 },
  { name: 'Contact', href: '/contact', color: '#22d3ee', orbitRadius: 6.9, orbitSpeed: 0.12, size: 0.3, tilt: 0.1 },
];

const socialPlanets: PlanetData[] = [
  { name: 'GitHub', href: 'https://github.com/AnkitGole007', color: '#e2e8f0', orbitRadius: 7.8, orbitSpeed: 0.09, size: 0.28, tilt: 0.25, external: true },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ankit-gole', color: '#38bdf8', orbitRadius: 8.5, orbitSpeed: 0.07, size: 0.26, tilt: -0.15, external: true },
];

// Optimized orbit ring
function OrbitRing({ radius, tilt }: { radius: number; tilt: number }) {
  return (
    <mesh rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <ringGeometry args={[radius - 0.015, radius + 0.015, 64]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Optimized planet with standard material
function Planet({ data, index, totalPlanets }: { data: PlanetData; index: number; totalPlanets: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const initialAngle = useMemo(() => (index / totalPlanets) * Math.PI * 2, [index, totalPlanets]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      const angle = initialAngle + time * data.orbitSpeed;
      groupRef.current.position.x = Math.cos(angle) * data.orbitRadius;
      groupRef.current.position.z = Math.sin(angle) * data.orbitRadius;
      groupRef.current.position.y = Math.sin(angle) * data.tilt * data.orbitRadius * 0.3;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(hovered ? 1.5 : 1.2);
    }
  });

  const handleClick = () => {
    if (data.external) {
      window.open(data.href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(data.href);
    }
  };

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Planet core */}
        <mesh
          ref={meshRef}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.25 : 1}
        >
          <sphereGeometry args={[data.size, 32, 32]} />
          <meshStandardMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Glow effect - simple sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[data.size * 1.3, 16, 16]} />
          <meshBasicMaterial color={data.color} transparent opacity={hovered ? 0.2 : 0.08} />
        </mesh>

        {/* Label */}
        <Text
          position={[0, data.size + 0.35, 0]}
          fontSize={0.22}
          color={hovered ? '#ffffff' : 'rgba(255,255,255,0.6)'}
          anchorX="center"
          anchorY="middle"
        >
          {data.name}
        </Text>
      </Float>
    </group>
  );
}

// Optimized central sun
function CentralSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) meshRef.current.rotation.y += 0.002;
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.08 + 1;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.6, 16, 16]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.12} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.0, 16, 16]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

// Optimized stars - reduced count
function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(600 * 3); // Reduced from 2000 to 600
    for (let i = 0; i < 600; i++) {
      const radius = 40 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(() => {
    if (starsRef.current) starsRef.current.rotation.y += 0.00005;
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.12} color="#ffffff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

// Scene component
function Scene() {
  const allPlanets = [...planets, ...socialPlanets];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#fbbf24" />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#60a5fa" />

      <Stars />
      <CentralSun />

      {allPlanets.map((planet) => (
        <OrbitRing key={`ring-${planet.name}`} radius={planet.orbitRadius} tilt={planet.tilt} />
      ))}

      {allPlanets.map((planet, i) => (
        <Planet key={planet.name} data={planet} index={i} totalPlanets={allPlanets.length} />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={8}
        maxDistance={20}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.25}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export default function OrbitalNavigation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 10, 16], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="glass rounded-full px-5 py-2.5 flex items-center gap-3">
          <span className="text-white/40 text-xs">Drag to explore</span>
          <span className="text-white/20">•</span>
          <span className="text-white/40 text-xs">Click planets to navigate</span>
        </div>
      </div>
    </div>
  );
}
