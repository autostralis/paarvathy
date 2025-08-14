import React from "react";

/**
 * MapRoutes.jsx
 * Elegant world-routes animation (no external libs).
 * - Arcs connect Europe ↔ India ↔ Emerging (SEA)
 * - Aircraft icons follow paths
 * - Destinations pulse into focus
 * - Respects prefers-reduced-motion
 *
 * Place inside a container (relative) — component uses responsive viewBox.
 */
const MapRoutes = ({
  width = "100%",
  height = 420,
}) => {
  // Coordinates within the 1200x600 viewBox (approx projection)
  const EUROPE = { x: 670, y: 180 };   // Europe/UK area
  const INDIA  = { x: 840, y: 300 };   // India area
  const SEA    = { x: 1020, y: 340 };  // SE Asia / Emerging markets

  // Helper: SVG quadratic bezier path between two points with a height factor
  const arcPath = (a, b, arc = 0.33) => {
    const cx = (a.x + b.x) / 2;
    const cy = Math.min(a.y, b.y) - Math.abs(a.x - b.x) * arc * 0.35; // arc height
    return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
  };

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        background:
          "radial-gradient(1200px 600px at 60% 40%, #0b152e 0%, #0b1325 42%, #080f1f 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <svg
        viewBox="0 0 1200 600"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gold gradient for arcs */}
          <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bda76a" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#bda76a" />
          </linearGradient>

          {/* Silver grid lines */}
          <linearGradient id="silverDim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cfd6e3" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#cfd6e3" stopOpacity="0.04" />
          </linearGradient>

          {/* Glow filter for arcs */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Pulse for destination markers */}
          <radialGradient id="pulseFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#d4af37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.0" />
          </radialGradient>

          {/* Tiny airplane icon (gold) */}
          <g id="planeIcon" transform="scale(0.9)">
            <path
              d="M0 0 L14 -4 L54 -2 L90 -14 L98 -8 L62 4 L24 8 L10 16 Z"
              fill="#d4af37"
              opacity="0.95"
            />
          </g>
        </defs>

        {/* Subtle grid */}
        <g opacity="0.5">
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={100 + i * 100}
              y1={40}
              x2={100 + i * 100}
              y2={560}
              stroke="url(#silverDim)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={60}
              y1={60 + i * 100}
              x2={1140}
              y2={60 + i * 100}
              stroke="url(#silverDim)"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* ----- ROUTE ARCS ----- */}
        <g filter="url(#softGlow)">
          {/* Europe -> India */}
          <path
            id="arc-eu-in"
            d={arcPath(EUROPE, INDIA, 0.38)}
            stroke="url(#goldStroke)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.95"
          />
          {/* India -> SEA (Emerging) */}
          <path
            id="arc-in-sea"
            d={arcPath(INDIA, SEA, 0.28)}
            stroke="url(#goldStroke)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.95"
          />
          {/* SEA -> Europe (closing loop) */}
          <path
            id="arc-sea-eu"
            d={arcPath(SEA, EUROPE, 0.34)}
            stroke="url(#goldStroke)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.85"
          />

          {/* Animated dashes moving along arcs (premium feel) */}
          <path
            d={arcPath(EUROPE, INDIA, 0.38)}
            stroke="#d4af37"
            strokeWidth="1.25"
            strokeDasharray="4 10"
            fill="none"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-140"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d={arcPath(INDIA, SEA, 0.28)}
            stroke="#d4af37"
            strokeWidth="1.25"
            strokeDasharray="4 10"
            fill="none"
            opacity="0.9"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-140"
              dur="4.5s"
              begin="0.4s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d={arcPath(SEA, EUROPE, 0.34)}
            stroke="#d4af37"
            strokeWidth="1.25"
            strokeDasharray="4 10"
            fill="none"
            opacity="0.85"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-140"
              dur="4.5s"
              begin="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* ----- AIRPLANES FOLLOWING ARCS ----- */}
        <g style={{ animation: "none" }}>
          <g>
            <use href="#planeIcon">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#arc-eu-in" />
              </animateMotion>
            </use>
          </g>
          <g opacity="0.95">
            <use href="#planeIcon">
              <animateMotion
                dur="7.5s"
                begin="0.6s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#arc-in-sea" />
              </animateMotion>
            </use>
          </g>
          <g opacity="0.9">
            <use href="#planeIcon">
              <animateMotion
                dur="9s"
                begin="1.2s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#arc-sea-eu" />
              </animateMotion>
            </use>
          </g>
        </g>

        {/* ----- DESTINATION PULSES ----- */}
        {[EUROPE, INDIA, SEA].map((p, i) => (
          <g key={i}>
            {/* outer soft pulse */}
            <circle cx={p.x} cy={p.y} r="18" fill="url(#pulseFill)">
              <animate
                attributeName="r"
                values="14;24;14"
                dur="2.8s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
              <animate
                attributeName="opacity"
                values="0.55;0.0;0.55"
                dur="2.8s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>
            {/* core marker */}
            <circle cx={p.x} cy={p.y} r="5" fill="#d4af37" />
            <circle
              cx={p.x}
              cy={p.y}
              r="8"
              fill="none"
              stroke="#cfd6e3"
              strokeOpacity="0.25"
            />
          </g>
        ))}

        {/* Labels */}
        <g fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Inter" fontSize="13">
          <text x={EUROPE.x + 8} y={EUROPE.y - 8} fill="#cfd6e3">Europe / UK</text>
          <text x={INDIA.x + 8} y={INDIA.y - 8} fill="#cfd6e3">India</text>
          <text x={SEA.x + 8} y={SEA.y - 8} fill="#cfd6e3">Emerging Markets</text>
        </g>

        {/* Reduce motion support */}
        <style>
          {`
            @media (prefers-reduced-motion: reduce) {
              animate, animateMotion { 
                animation: none !important;
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default MapRoutes;
