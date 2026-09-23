"use client";

import { Canvas } from "@react-three/fiber";
import { BrainMesh } from "./BrainMesh";

export function BrainScene() {
  return (
    <Canvas
      camera={{ position: [0, 3.2, 7.8], fov: 36 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <BrainMesh />
    </Canvas>
  );
}
