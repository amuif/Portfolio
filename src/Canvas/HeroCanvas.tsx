import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Particle({
  originalPosition,
  pointerPosition,
  disruptionRadius,
  maxDisruptionDistance,
}: {
  originalPosition: THREE.Vector3;
  pointerPosition: THREE.Vector3 | null;
  disruptionRadius: number;
  maxDisruptionDistance: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.scale.set(1, 1, 1);
    if (pointerPosition) {
      const dist = originalPosition.distanceTo(pointerPosition);
      if (dist < disruptionRadius) {
        // Calculate strength based on how close the pointer is to this particle
        const strength = (disruptionRadius - dist) / disruptionRadius;

        // Direction vector from center (0,0,0) to this particle's original position
        const direction = originalPosition.clone().normalize();

        // Calculate the target position by pushing the particle outward
        // proportionally to the strength and maxDisruptionDistance
        const target = originalPosition
          .clone()
          .addScaledVector(direction, strength * maxDisruptionDistance);

        // Smoothly move the particle towards the target position
        ref.current.position.lerp(target, 0.2);
        return; // exit early to avoid returning to original pos below
      }
    }
    // If pointer is not near, smoothly move the particle back to original position
    ref.current.position.lerp(originalPosition, 0.1);
  });

  return (
    <Sphere
      ref={ref}
      args={[0.05, 16, 16]} // particle radius fixed at 0.05 (no scaling happens)
      position={originalPosition}
    >
      <meshStandardMaterial color="white" />
    </Sphere>
  );
}

function BigSphereParticles({
  particleCount = 2000,
  radius = 6,
  disruptionRadius = 2,
  maxDisruptionDistance = 2,
}: {
  particleCount?: number;
  radius?: number;
  disruptionRadius?: number;
  maxDisruptionDistance?: number;
}) {
  const [pointerPos, setPointerPos] = useState<THREE.Vector3 | null>(null);

  // Precompute points evenly distributed on a sphere surface
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
    const phi = Math.PI * (1 + Math.sqrt(5)) * i;

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    points.push(new THREE.Vector3(x, y, z));
  }

  // Group ref for slow rotation
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Slowly rotate the whole sphere around Y axis
      groupRef.current.rotation.y += 0.001; // adjust speed here
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
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <BigSphereParticles
        disruptionRadius={5} // Hover effect radius (area around pointer)
        maxDisruptionDistance={5} // Max distance particles move outward on hover
      />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
