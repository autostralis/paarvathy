import { motion } from "framer-motion";

const routes = [
  { from: [300, 200], to: [600, 220] }, // India to Europe
  { from: [300, 200], to: [700, 350] }, // India to Emerging
];

export default function AeroFynHeroSection() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px 40px",
      backgroundColor: "#0c2544",
      color: "#f2c94c",
      minHeight: "450px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      gap: "40px"
    }}>
      {/* Text Content Box */}
      <div style={{ maxWidth: "480px" }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: "24px",
          color: "#f2c94c"
        }}>
          AeroFyn delivers trusted, transparent aircraft sales, leasing, and compliance solutions — connecting India, Europe, and emerging markets with world-class aviation expertise.
        </h1>
        <p style={{
          fontSize: "1.1rem",
          lineHeight: 1.5,
          color: "#dcdcdc"
        }}>
          From shortlist to handover, we de‑risk every step with independent pre‑purchase inspections, neutral escrow, data‑led valuations, and audit‑ready records — ensuring zero surprises.
        </p>
      </div>

      {/* Animated Flight Map */}
      <svg viewBox="0 0 800 400" style={{ width: "50%", height: "auto" }}>
        {/* Stylized map background */}
        <ellipse cx="400" cy="200" rx="380" ry="170" fill="#1a354d" />
        {routes.map(({ from, to }, i) => (
          <motion.path
            key={i}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.7 }}
            stroke="#f2c94c"
            strokeWidth="2"
            fill="none"
            d={`M${from[0]},${from[1]} Q${(from[0] + to[0]) / 2},100 ${to[0]},${to[1]}`}
          />
        ))}
        {/* Aircraft icon gliding animation */}
        <motion.image
          href="/aircraft-icon.svg"
          x="305"
          y="202"
          initial={{ x: 305 }}
          animate={{ x: 600 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          width={28}
          height={28}
        />
      </svg>
    </section>
  );
}
