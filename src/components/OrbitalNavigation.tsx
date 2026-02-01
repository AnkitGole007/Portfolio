'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls, Float, MeshDistortMaterial, Sphere, Ring } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';

interface PlanetData {
  name: string;
  href: string;
  color: string;
  emissive: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  tilt: number;
  external?: boolean;
}

const planets: PlanetData[] = [
  {
    name: 'About',
    href: '/about',
    color: '#60a5fa',
    emissive: '#3b82f6',
    orbitRadius: 3.2,
    orbitSpeed: 0.4,
    size: 0.35,
    tilt: 0,
  },
  {
    name: 'Projects',
    href: '/projects',
    color: '#a78bfa',
    emissive: '#8b5cf6',
    orbitRadius: 4.0,
    orbitSpeed: 0.32,
    size: 0.4,
    tilt: 0.15,
  },
  {
    name: 'Experience',
    href: '/experience',
    color: '#34d399',
    emissive: '#10b981',
    orbitRadius: 4.8,
    orbitSpeed: 0.25,
    size: 0.38,
    tilt: -0.1,
  },
  {
    name: 'Skills',
    href: '/skills',
    color: '#fbbf24',
    emissive: '#f59e0b',
    orbitRadius: 5.5,
    orbitSpeed: 0.2,
    size: 0.32,
    tilt: 0.2,
  },
  {
    name: 'Achievements',
    href: '/achievements',
    color: '#f472b6',
    emissive: '#ec4899',
    orbitRadius: 6.2,
    orbitSpeed: 0.16,
    size: 0.36,
    tilt: -0.05,
  },
  {
    name: 'Contact',
    href: '/contact',
    color: '#22d3ee',
    emissive: '#06b6d4',
    orbitRadius: 6.9,
    orbitSpeed: 0.12,
    size: 0.3,
    tilt: 0.1,
  },
];

const socialPlanets: PlanetData[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/AnkitGole007',
    color: '#e2e8f0',
    emissive: '#94a3b8',
    orbitRadius: 7.8,
    orbitSpeed: 0.09,
    size: 0.28,
    tilt: 0.25,
    external: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ankit-gole',
    color: '#38bdf8',
    emissive: '#0ea5e9',
    orbitRadius: 8.5,
    orbitSpeed: 0.07,
    size: 0.26,
    tilt: -0.15,
    external: true,
  },
];

// Orbit ring component
function OrbitRing({ radius, tilt }: { radius: number; tilt: number }) {
  return (
    <Ring
      args={[radius - 0.02, radius + 0.02, 128]}
      rotation={[Math.PI / 2 + tilt, 0, 0]}
    >
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </Ring>
  );
}

// Individual planet component
function Planet({ data, index }: { data: PlanetData; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  // Calculate initial position based on index for even distribution
  const initialAngle = useMemo(() => (index / planets.length) * Math.PI * 2, [index]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      const angle = initialAngle + time * data.orbitSpeed;
      groupRef.current.position.x = Math.cos(angle) * data.orbitRadius;
      groupRef.current.position.z = Math.sin(angle) * data.orbitRadius;
      groupRef.current.position.y = Math.sin(angle) * data.tilt * data.orbitRadius * 0.3;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
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
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh
          ref={meshRef}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.3 : 1}
        >
          <sphereGeometry args={[data.size, 64, 64]} />
          <MeshDistortMaterial
            color={data.color}
            emissive={data.emissive}
            emissiveIntensity={hovered ? 1.2 : 0.4}
            roughness={0.2}
            metalness={0.8}
            distort={hovered ? 0.3 : 0.15}
            speed={2}
          />
        </mesh>

        {/* Glow effect */}
        <Sphere args={[data.size * 1.5, 32, 32]} scale={hovered ? 1.4 : 1}>
          <meshBasicMaterial
            color={data.emissive}
            transparent
            opacity={hovered ? 0.25 : 0.1}
          />
        </Sphere>

        {/* Planet label */}
        <Text
          position={[0, data.size + 0.4, 0]}
          fontSize={0.25}
          color={hovered ? '#ffffff' : 'rgba(255,255,255,0.7)'}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {data.name}
        </Text>
      </Float>
    </group>
  );
}

// Central sun (profile representation)
function CentralSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      {/* Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          distort={0.2}
          speed={3}
        />
      </mesh>

      {/* Inner glow */}
      <Sphere args={[1.4, 32, 32]} ref={glowRef}>
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[1.8, 32, 32]}>
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.08}
        />
      </Sphere>

      {/* Corona effect */}
      <Sphere args={[2.2, 32, 32]}>
        <meshBasicMaterial
          color="#fcd34d"
          transparent
          opacity={0.04}
        />
      </Sphere>
    </group>
  );
}

// Stars background
function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Camera controller for auto-rotation
function CameraController() {
  const { camera } = useThree();

  useFrame((state) => {
    // Gentle camera wobble
    camera.position.y = 8 + Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
  });

  return null;
}

// Scene component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#fbbf24" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a78bfa" />

      {/* Stars background */}
      <Stars />

      {/* Central sun */}
      <CentralSun />

      {/* Orbit rings */}
      {planets.map((planet) => (
        <OrbitRing key={`ring-${planet.name}`} radius={planet.orbitRadius} tilt={planet.tilt} />
      ))}
      {socialPlanets.map((planet) => (
        <OrbitRing key={`ring-${planet.name}`} radius={planet.orbitRadius} tilt={planet.tilt} />
      ))}

      {/* Planets */}
      {planets.map((planet, i) => (
        <Planet key={planet.name} data={planet} index={i} />
      ))}
      {socialPlanets.map((planet, i) => (
        <Planet key={planet.name} data={planet} index={i + planets.length} />
      ))}

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={8}
        maxDistance={25}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <CameraController />
    </>
  );
}

export default function OrbitalNavigation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 12, 18], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>

      {/* Instruction overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="glass rounded-full px-6 py-3 flex items-center gap-3">
          <span className="text-white/50 text-sm">Drag to explore</span>
          <span className="text-white/30">•</span>
          <span className="text-white/50 text-sm">Click planets to navigate</span>
        </div>
      </div>
    </div>
  );
}
