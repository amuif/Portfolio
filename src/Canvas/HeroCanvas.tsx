import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Loader } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleProps {
  originalPosition: THREE.Vector3;
  pointerPosition: THREE.Vector3 | null;
  disruptionRadius: number;
  maxDisruptionDistance: number;
}

function Particle({
  originalPosition,
  pointerPosition,
  disruptionRadius,
  maxDisruptionDistance,
}: ParticleProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;

    // Fix scale to 1
    ref.current.scale.set(1, 1, 1);

    if (pointerPosition) {
      const dist = originalPosition.distanceTo(pointerPosition);
      if (dist < disruptionRadius) {
        const strength = (disruptionRadius - dist) / disruptionRadius;
        const direction = originalPosition.clone().normalize();
        const target = originalPosition
          .clone()
          .addScaledVector(direction, strength * maxDisruptionDistance);
        ref.current.position.lerp(target, 0.2);
        return;
      }
    }

    // Return to original position
    ref.current.position.lerp(originalPosition, 0.1);
  });

  return (
    <Sphere
      ref={ref}
      args={[0.05, 16, 16]} // radius, widthSegments, heightSegments
      position={originalPosition}
    >
      <meshStandardMaterial color="white" />
    </Sphere>
  );
}

interface BigSphereParticlesProps {
  particleCount?: number;
  radius?: number;
  disruptionRadius?: number;
  maxDisruptionDistance?: number;
}

function BigSphereParticles({
  particleCount = 2000,
  radius = 6,
  disruptionRadius = 2,
  maxDisruptionDistance = 2,
}: BigSphereParticlesProps) {
  const [pointerPos, setPointerPos] = useState<THREE.Vector3 | null>(null);

  const points: THREE.Vector3[] = [];
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
    const phi = Math.PI * (1 + Math.sqrt(5)) * i;

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    points.push(new THREE.Vector3(x, y, z));
  }

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        if (e.point) {
          setPointerPos(e.point.clone());
        }
      }}
      onPointerOut={() => setPointerPos(null)}
    >
      {points.map((pos, i) => (
        <Particle
          key={i}
          originalPosition={pos}
          pointerPosition={pointerPos}
          disruptionRadius={disruptionRadius}
          maxDisruptionDistance={maxDisruptionDistance}
        />
      ))}
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <BigSphereParticles disruptionRadius={5} maxDisruptionDistance={5} />
        </Suspense>
        <OrbitControls enableZoom />
      </Canvas>
      <Loader />
    </>
  );
}
