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

/** Point-membership test approximating a brain silhouette in a 0-100 viewBox. */
function inBrain(x: number, y: number) {
  const inLeft = inLobe(x, y, 37, 50, 25, 22, 0.4);
  const inRight = inLobe(x, y, 63, 50, 25, 22, 2.6);
  const inFrontal = inLobe(x, y, 50, 27, 19, 12, 4.8);
  const inStem = inLobe(x, y, 50, 80, 7, 11, 1.2);

  if (!(inLeft || inRight || inFrontal || inStem)) return false;

  // Longitudinal fissure: the groove between hemispheres, upper half only.
  const inGroove = Math.abs(x - 50) < 2.2 && y > 16 && y < 58;
  return !inGroove;
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

function buildParticles(
  count: number,
  seed: number,
  region: "brain" | "field"
): Particle[] {
  const rand = mulberry32(seed);
  const points: Array<{ x: number; y: number }> = [];

  if (region === "brain") {
    let attempts = 0;
    while (points.length < count && attempts < count * 60) {
      attempts++;
      const x = 8 + rand() * 84;
      const y = 6 + rand() * 84;
      if (inBrain(x, y)) points.push({ x, y });
    }
  } else {
    for (let i = 0; i < count; i++) {
      points.push({ x: rand() * 100, y: rand() * 100 });
    }
  }

  return points.map(({ x, y }) => ({
    x,
    y,
    size: 3 + rand() * 7,
    rotate: rand() * 360,
    color: PALETTE[Math.floor(rand() * PALETTE.length)],
    delay: rand() * 6,
    duration: 5 + rand() * 5,
    dx: (rand() - 0.5) * 10,
    dy: (rand() - 0.5) * 10,
  }));
}

const AMBIENT = buildParticles(55, 7, "field");
const CORE = buildParticles(230, 42, "brain");

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
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {CORE.map((p, i) => (
          <Triangle key={`c-${i}`} p={p} />
        ))}
      </svg>
    </div>
  );
}
