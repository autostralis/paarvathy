import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

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
    <>
      <section
        className="professional-section-lg"
        style={{
          position: "relative",
          minHeight: "clamp(520px, 70vh, 840px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          color: "#fff",
          background: "#0b1222",
        }}
      >
        {/* Background video */}
        <div style={{ position: "absolute", inset: 0 }} aria-hidden="true">
          <video
            ref={videoRef}
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
        <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="grid-2" style={{ alignItems: "end", minHeight: "60vh" }}>
            <div style={{ paddingTop: 24, paddingBottom: 24 }}>
              <div style={{ marginBottom: 18 }}>
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

              <h1 style={{ marginBottom: 14, color: "var(--text-white)" }}>
                Bespoke Brokerage for <span style={{ color: "var(--gold-primary)" }}>Private Aviation</span>
              </h1>

              <p style={{ marginBottom: 24, maxWidth: 760, color: "rgba(255,255,255,0.90)" }}>
                Off-market access, discreet negotiations, and end-to-end transaction support.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
                <button className="btn-gold" onClick={() => scrollTo("portfolio")}>
                  Browse Inventory
                </button>
                <button
                  className="btn-outline"
                  onClick={() => setShowModal(true)}
                  style={{
                    border: "1px solid rgba(255,255,255,.55)",
                    color: "#fff",
                    padding: "12px 18px",
                    borderRadius: 10,
                  }}
                >
                  ▶ Watch Our Story
                </button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
          onClick={() => setShowModal(false)}
        >
          <video
            controls
            autoPlay
            style={{
              maxWidth: "90%",
              maxHeight: "80%",
              boxShadow: "0 0 30px rgba(0,0,0,0.6)",
            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
}
