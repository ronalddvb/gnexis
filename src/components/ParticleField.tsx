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

// Brain silhouette as a single closed radial curve (0-100 viewBox, centered ~50,44).
// Cauliflower-textured wobble + a top notch (hemisphere split) + a narrow bottom
// tail (brainstem) + slight temporal-lobe flares on the lower sides.
const BRAIN_CX = 50;
const BRAIN_CY = 44;
const BRAIN_RX = 38;
const BRAIN_RY = 27;

function angularDistance(theta: number, center: number) {
  return Math.atan2(Math.sin(theta - center), Math.cos(theta - center));
}

function gaussianBump(theta: number, center: number, width: number) {
  const d = angularDistance(theta, center);
  return Math.exp(-(d * d) / (2 * width * width));
}

function brainRadiusAt(theta: number) {
  let r =
    1 +
    0.055 * Math.sin(3 * theta + 0.4) +
    0.04 * Math.sin(7 * theta + 1.7) +
    0.025 * Math.sin(12 * theta + 0.9);

  r -= 0.32 * gaussianBump(theta, -Math.PI / 2, 0.22); // top notch
  r += 0.85 * gaussianBump(theta, Math.PI / 2, 0.1); // brainstem tail
  r += 0.1 * gaussianBump(theta, Math.PI / 2 - 0.9, 0.18); // temporal flare (l)
  r += 0.1 * gaussianBump(theta, Math.PI / 2 + 0.9, 0.18); // temporal flare (r)

  return r;
}

function brainPoint(theta: number, radiusScale = 1) {
  const r = brainRadiusAt(theta) * radiusScale;
  return {
    x: BRAIN_CX + BRAIN_RX * r * Math.cos(theta),
    y: BRAIN_CY + BRAIN_RY * r * Math.sin(theta),
  };
}

function insideBrain(x: number, y: number) {
  const theta = Math.atan2((y - BRAIN_CY) / BRAIN_RY, (x - BRAIN_CX) / BRAIN_RX);
  const normalizedR = Math.hypot((x - BRAIN_CX) / BRAIN_RX, (y - BRAIN_CY) / BRAIN_RY);
  return normalizedR <= brainRadiusAt(theta);
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

function buildBrainPoints(rand: () => number, boundaryCount: number, fillCount: number) {
  const points: Array<{ x: number; y: number; kind: "boundary" | "fill" }> = [];

  // Trace the silhouette in a tight band so the outline reads clearly.
  for (let i = 0; i < boundaryCount; i++) {
    const theta = (i / boundaryCount) * Math.PI * 2 + rand() * (Math.PI / boundaryCount);
    const band = 0.95 + rand() * 0.08;
    const { x, y } = brainPoint(theta, band);
    points.push({ x, y, kind: "boundary" });
  }

  // Very sparse interior fill for a faint haze.
  let attempts = 0;
  while (points.length < boundaryCount + fillCount && attempts < fillCount * 60) {
    attempts++;
    const x = BRAIN_CX - BRAIN_RX + rand() * BRAIN_RX * 2;
    const y = BRAIN_CY - BRAIN_RY + rand() * (BRAIN_RY * 2 + 14);
    if (insideBrain(x, y)) points.push({ x, y, kind: "fill" });
  }

  return points;
}

function buildParticles(
  count: number,
  seed: number,
  region: "brain" | "field"
): Particle[] {
  const rand = mulberry32(seed);
  const points: Array<{ x: number; y: number; kind: "boundary" | "fill" }> =
    region === "brain"
      ? buildBrainPoints(rand, Math.round(count * 0.78), Math.round(count * 0.22))
      : Array.from({ length: count }, () => ({
          x: rand() * 100,
          y: rand() * 100,
          kind: "fill" as const,
        }));

  return points.map(({ x, y, kind }) => ({
    x,
    y,
    size: kind === "boundary" ? 3.5 + rand() * 4 : 1.5 + rand() * 2,
    rotate: rand() * 360,
    color: PALETTE[Math.floor(rand() * PALETTE.length)],
    delay: rand() * 6,
    duration: 5 + rand() * 5,
    dx: (rand() - 0.5) * 10,
    dy: (rand() - 0.5) * 10,
  }));
}

const AMBIENT = buildParticles(55, 7, "field");
const CORE = buildParticles(210, 42, "brain");

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
      strokeWidth="1.1"
      transform={`translate(${p.x} ${p.y}) rotate(${p.rotate})`}
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
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {CORE.map((p, i) => (
          <Triangle key={`c-${i}`} p={p} />
        ))}
      </svg>
    </div>
  );
}
