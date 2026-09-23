"use client";

import dynamic from "next/dynamic";

const BrainScene = dynamic(
  () => import("./BrainScene").then((m) => m.BrainScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-full bg-electric-iris/10 blur-3xl" />
    ),
  }
);

export function BrainVisual() {
  return (
    <div
      className="relative aspect-square w-full max-w-[560px]"
      aria-hidden="true"
    >
      <BrainScene />
    </div>
  );
}
