"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PALETTE = ["#8052ff", "#ffb829", "#15846e", "#a78bfa", "#5b8cff", "#ff6fd8"];

function gaussian(angle: number, center: number, width: number) {
  const d = Math.atan2(Math.sin(angle - center), Math.cos(angle - center));
  return Math.exp(-(d * d) / (2 * width * width));
}

function buildBrainGeometry() {
  const geo = new THREE.IcosahedronGeometry(2.15, 3);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = v.clone().normalize();
    const polar = Math.acos(n.y);
    const azimuth = Math.atan2(n.z, n.x);

    let r = 1;
    // central longitudinal fissure across the top, front-to-back
    r -= 0.34 * gaussian(azimuth, Math.PI / 2, 0.32) * Math.max(0, 1 - polar / 1.55);
    r -= 0.34 * gaussian(azimuth, -Math.PI / 2, 0.32) * Math.max(0, 1 - polar / 1.55);
    // secondary sulci
    r -= 0.1 * gaussian(azimuth, 1.1, 0.3) * gaussian(polar, 1.1, 0.55);
    r -= 0.1 * gaussian(azimuth, -1.9, 0.3) * gaussian(polar, 1.3, 0.55);
    // brainstem tail
    r += 0.6 * gaussian(polar, Math.PI - 0.1, 0.16) * gaussian(azimuth, 0, 0.5);

    const stretched = v.clone();
    stretched.x *= 1.05;
    stretched.z *= 1.16;
    stretched.y *= 0.94;
    stretched.multiplyScalar(r);
    pos.setXYZ(i, stretched.x, stretched.y, stretched.z);
  }

  geo.computeVertexNormals();
  return geo;
}

function useCameraAim() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, -0.3, 0);
  }, [camera]);
}

function ParticleAccents() {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    let seed = 7;
    const rand = () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    return Array.from({ length: 55 }, (_, i) => {
      const r = 3.3 + rand() * 1.1;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      return {
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.8,
          r * Math.cos(phi),
        ] as [number, number, number],
        size: 0.045 + rand() * 0.05,
        color: PALETTE[i % PALETTE.length],
      };
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y -= 0.0015;
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <tetrahedronGeometry args={[p.size]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}
    </group>
  );
}

export function BrainMesh() {
  useCameraAim();
  const geo = useMemo(() => buildBrainGeometry(), []);
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.004;
    if (wireRef.current) wireRef.current.rotation.y += 0.004;
  });

  return (
    <>
      <ambientLight color={0x404060} intensity={1.1} />
      <pointLight color={0x8052ff} intensity={28} distance={20} position={[4, 3, 5]} />
      <pointLight color={0xffb829} intensity={14} distance={20} position={[-4, -1, 3]} />
      <pointLight color={0x5b8cff} intensity={10} distance={20} position={[0, -4, -3]} />

      <mesh ref={meshRef} geometry={geo}>
        <meshPhysicalMaterial
          color={0x8052ff}
          flatShading
          metalness={0.25}
          roughness={0.35}
          emissive={0x2a1866}
          emissiveIntensity={0.5}
          clearcoat={0.4}
          clearcoatRoughness={0.5}
          transparent
          opacity={0.95}
        />
      </mesh>
      <mesh ref={wireRef} geometry={geo} scale={1.004}>
        <meshBasicMaterial color={0xd9ccff} wireframe transparent opacity={0.35} />
      </mesh>

      <ParticleAccents />
    </>
  );
}
