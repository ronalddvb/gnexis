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

/** Crinkled ellipse test: gives the ragged, gyrus-like edge of a brain lobe. */
function inLobe(
  x: number,
  y: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  waveSeed: number
) {
  const dx = x - cx;
  const dy = y - cy;
  const theta = Math.atan2(dy / ry, dx / rx);
  const wobble =
    1 +
    0.12 * Math.sin(theta * 5 + waveSeed) +
    0.07 * Math.sin(theta * 9 + waveSeed * 1.7) +
    0.04 * Math.sin(theta * 13 + waveSeed * 0.6);
  const nx = dx / (rx * wobble);
  const ny = dy / (ry * wobble);
  return nx * nx + ny * ny <= 1;
}

const LOBES = [
  { cx: 33, cy: 50, rx: 22, ry: 21, waveSeed: 0.4 },
  { cx: 67, cy: 50, rx: 22, ry: 21, waveSeed: 2.6 },
  { cx: 50, cy: 26, rx: 17, ry: 11, waveSeed: 4.8 },
  { cx: 50, cy: 81, rx: 6, ry: 10, waveSeed: 1.2 },
] as const;

function inGroove(x: number, y: number) {
  // Longitudinal fissure: the groove between hemispheres, upper portion only —
  // the lobes still read as one connected mass near the brainstem, like a real brain.
  return Math.abs(x - 50) < 5 && y > 12 && y < 66;
}

/** Point-membership test approximating a brain silhouette in a 0-100 viewBox. */
function inBrain(x: number, y: number) {
  const inside = LOBES.some((l) => inLobe(x, y, l.cx, l.cy, l.rx, l.ry, l.waveSeed));
  return inside && !inGroove(x, y);
}

function wobbleAt(theta: number, waveSeed: number) {
  return (
    1 +
    0.12 * Math.sin(theta * 5 + waveSeed) +
    0.07 * Math.sin(theta * 9 + waveSeed * 1.7) +
    0.04 * Math.sin(theta * 13 + waveSeed * 0.6)
  );
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

  // Trace each lobe's crinkled edge in a tight band so the silhouette reads
  // clearly as an outline, not a filled blob.
  const perLobe = Math.ceil(boundaryCount / LOBES.length);
  for (const l of LOBES) {
    for (let i = 0; i < perLobe; i++) {
      const theta = (i / perLobe) * Math.PI * 2 + rand() * 0.1;
      const band = 0.94 + rand() * 0.1;
      const w = wobbleAt(theta, l.waveSeed) * band;
      const x = l.cx + l.rx * w * Math.cos(theta);
      const y = l.cy + l.ry * w * Math.sin(theta);
      if (!inGroove(x, y)) points.push({ x, y, kind: "boundary" });
    }
  }

  // Very sparse interior fill for a faint haze, kept far lighter than the outline.
  let attempts = 0;
  while (points.length < boundaryCount + fillCount && attempts < fillCount * 60) {
    attempts++;
    const x = 8 + rand() * 84;
    const y = 6 + rand() * 84;
    if (inBrain(x, y)) points.push({ x, y, kind: "fill" });
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
      ? buildBrainPoints(rand, Math.round(count * 0.82), Math.round(count * 0.18))
      : Array.from({ length: count }, () => ({
          x: rand() * 100,
          y: rand() * 100,
          kind: "fill" as const,
        }));

  return points.map(({ x, y, kind }) => ({
    x,
    y,
    size: kind === "boundary" ? 4 + rand() * 5 : 1.5 + rand() * 2,
    rotate: rand() * 360,
    color: PALETTE[Math.floor(rand() * PALETTE.length)],
    delay: rand() * 6,
    duration: 5 + rand() * 5,
    dx: (rand() - 0.5) * 10,
    dy: (rand() - 0.5) * 10,
  }));
}

const AMBIENT = buildParticles(55, 7, "field");
const CORE = buildParticles(190, 42, "brain");

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
