import type { CSSProperties } from "react";

const PALETTE = ["#8052ff", "#ffb829", "#15846e", "#a78bfa", "#5b8cff", "#ff6fd8"];

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Particle = {
  x: number;
  y: number;
  size: number;
  rotate: number;
  color: string;
  delay: number;
  duration: number;
  dx: number;
  dy: number;
};

function buildParticles(count: number, seed: number): Particle[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    size: 4 + rand() * 14,
    rotate: rand() * 360,
    color: PALETTE[Math.floor(rand() * PALETTE.length)],
    delay: rand() * 6,
    duration: 5 + rand() * 5,
    dx: (rand() - 0.5) * 16,
    dy: (rand() - 0.5) * 16,
  }));
}

const AMBIENT = buildParticles(60, 7);
const CORE = buildParticles(90, 42);

function Triangle({ p }: { p: Particle }) {
  const style: CSSProperties & Record<"--dx" | "--dy", string> = {
    "--dx": `${p.dx.toFixed(2)}px`,
    "--dy": `${p.dy.toFixed(2)}px`,
    animation: `gnexis-drift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
  };

  return (
    <polygon
      points={`${p.size / 2},0 ${p.size},${p.size} 0,${p.size}`}
      fill="none"
      stroke={p.color}
      strokeWidth="1.2"
      transform={`translate(${p.x}% ${p.y}%) rotate(${p.rotate})`}
      style={style}
    />
  );
}

export function ParticleField() {
  return (
    <div
      className="relative aspect-square w-full max-w-[560px] motion-reduce:[&_polygon]:!animate-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {AMBIENT.map((p, i) => (
          <Triangle key={`a-${i}`} p={p} />
        ))}
      </svg>
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 45%, black 55%, transparent 100%)",
        }}
      >
        {CORE.map((p, i) => (
          <Triangle key={`c-${i}`} p={p} />
        ))}
      </svg>
    </div>
  );
}
