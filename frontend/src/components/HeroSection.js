import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);

  // Respect reduced-motion and safely handle autoplay
  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce && videoRef.current) {
      videoRef.current.removeAttribute("autoplay");
      videoRef.current.pause();
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="professional-section-lg"
      style={{
        position: "relative",
        minHeight: "clamp(520px, 70vh, 840px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        background: "#0b1222", // fallback behind video
      }}
    >
      {/* Background video + poster fallback */}
      <div style={{ position: "absolute", inset: 0 }} aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-background"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(1.05) contrast(1.05)",
          }}
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(5,8,16,0.55), rgba(5,8,16,0.75) 40%, rgba(5,8,16,0.9))",
          }}
        />
      </div>

      {/* Content */}
      <div className="professional-content-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div className="grid-2" style={{ alignItems: "end", minHeight: "60vh" }}>
          <div className="hero-content fade-in" style={{ paddingTop: 24, paddingBottom: 24 }}>
            {/* Kicker */}
            <div style={{ marginBottom: 18, display: "flex", gap: 12 }}>
              <span
                style={{
                  padding: "8px 16px",
                  background: "rgba(212,175,55,0.9)",
                  borderRadius: 24,
                  color: "var(--navy-primary)",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  fontSize: 12,
                }}
              >
                Aircraft Sales & Acquisitions
              </span>
            </div>

            {/* Title + sub */}
            <h1 className="display-huge" style={{ marginBottom: 14, color: "var(--text-white)" }}>
              Bespoke Brokerage for <span style={{ color: "var(--gold-primary)" }}>Private Aviation</span>
            </h1>

            <p
              className="body-large"
              style={{
                marginBottom: 24,
                maxWidth: 760,
                color: "rgba(255,255,255,0.90)",
              }}
            >
              Off-market access, discreet negotiations, and end-to-end transaction support—whether you’re
              selling or sourcing your next aircraft.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
              <button className="btn-gold" onClick={() => scrollTo("portfolio")}>
                Browse Inventory
                <Arrow size={18} />
              </button>
              <a
                className="btn-outline"
                href="mailto:contact@aerofyn.com?subject=Sell%20My%20Aircraft"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(255,255,255,.55)",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: 10,
                  textDecoration: "none",
                  backdropFilter: "blur(2px)",
                }}
              >
                Sell Your Aircraft
              </a>
            </div>

            {/* Badges (trust points) */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <HeroBadge>Global network</HeroBadge>
              <HeroBadge>Off-market deals</HeroBadge>
              <HeroBadge>Ferry & delivery</HeroBadge>
              <HeroBadge>24/7 advisory</HeroBadge>
            </div>
          </div>

          {/* Right column intentionally left minimal (mirrors Global Jet spacious look) */}
          <div />
        </div>
      </div>

      {/* Scroll down chevron */}
      <a
        href="#portfolio"
        aria-label="Scroll to inventory"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("portfolio");
        }}
        style={{
          position: "absolute",
          left: "50%",
          bottom: 14,
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,.85)",
          textDecoration: "none",
          fontSize: 28,
        }}
      >
        ▾
      </a>
    </section>
  );
}

/* Small helpers (no external icon libs) */
function Arrow({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ marginLeft: 6 }} aria-hidden="true">
      <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HeroBadge({ children }) {
  return (
    <span
      style={{
        background: "rgba(255,255,255,.08)",
        border: "1px solid rgba(255,255,255,.18)",
        color: "rgba(255,255,255,.92)",
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}
