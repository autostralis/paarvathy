import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Mark items as representative examples and keep values confidential by default
  const portfolioItems = [
    {
      id: 1,
      title: "Citation CJ3",
      category: "business-jets",
      image: "/inventory-cj3.webp",
      description: "Light jet acquisition advisory for a European flight department.",
      details: "Illustrative case: sourcing, technical due diligence, and EASA conformity plan.",
      value: "Confidential",
      year: "Representative",
      representative: true,
    },
    {
      id: 2,
      title: "Pilatus PC-12",
      category: "turboprops",
      image: "/inventory-pc12.jpg",
      description: "Single-engine turboprop advisory for corporate shuttle operations.",
      details: "Illustrative case: operational profile design, PPI support, delivery oversight.",
      value: "Confidential",
      year: "Representative",
      representative: true,
    },
    {
      id: 3,
      title: "Bell 407",
      category: "helicopters",
      image: "/inventory-bell407.webp",
      description: "Helicopter use-case design for offshore & utility tasks.",
      details: "Illustrative case: regulatory pathway across multiple jurisdictions.",
      value: "Confidential",
      year: "Representative",
      representative: true,
    },
    {
      id: 4,
      title: "Global 7500",
      category: "business-jets",
      image: "/bombardier-challenger-global-7500-1.jpg.webp",
      description: "Ultra-long-range mission planning and procurement advisory.",
      details: "Illustrative case: long-range delivery planning and compliance roadmap.",
      value: "Confidential",
      year: "Representative",
      representative: true,
    },
    {
      id: 5,
      title: "Challenger 350",
      category: "business-jets",
      image: "/bombardier-challenger-global-7500-2.jpg.webp",
      description: "Mid-size jet fleet evaluation for corporate flight department.",
      details: "Illustrative case: documentation review and accelerated close support.",
      value: "Confidential",
      year: "Representative",
      representative: true,
    },
    {
      id: 6,
      title: "Aviation Consulting",
      category: "consulting",
      image: "/csm_g5000__4__resized_ac666d14e0.jpg",
      description: "Fleet modernization and lifecycle cost modeling.",
      details: "Illustrative case: long-term CAPEX/OPEX modeling and implementation roadmap.",
      value: "Confidential",
      year: "Representative",
      representative: true,
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "business-jets", label: "Business Jets" },
    { id: "turboprops", label: "Turboprops" },
    { id: "helicopters", label: "Helicopters" },
    { id: "consulting", label: "Consulting" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="professional-section">
      <div className="professional-content-container">
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">Representative Projects</h2>
          <p
            className="body-large"
            style={{ maxWidth: "780px", margin: "0 auto", color: "var(--text-secondary)" }}
          >
            A selection of illustrative assignments and case studies to demonstrate scope and
            capability. Specific tombstones and transaction particulars are shared under NDA upon request.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                border: "2px solid var(--border-light)",
                background:
                  activeFilter === filter.id ? "var(--navy-primary)" : "var(--bg-primary)",
                color:
                  activeFilter === filter.id ? "var(--text-white)" : "var(--text-secondary)",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="professional-card scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                overflow: "hidden",
                padding: "0",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* "Representative" Badge (left) */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "6px 12px",
                    background: "var(--gold-primary)",
                    color: "var(--navy-primary)",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.representative ? "Representative" : item.year}
                </div>

                {/* Value Badge (right) */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    padding: "6px 12px",
                    background: "rgba(30, 41, 59, 0.9)",
                    color: "var(--text-white)",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {item.value || "Confidential"}
                </div>

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.8) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="portfolio-overlay"
                />
              </div>

              {/* Content */}
              <div style={{ padding: "32px" }}>
                <h3 className="heading-3 mb-4" style={{ color: "var(--navy-primary)" }}>
                  {item.title}
                </h3>

                <p className="body-medium mb-4" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>

                <p
                  className="body-small mb-6"
                  style={{ color: "var(--text-muted)", fontStyle: "italic" }}
                >
                  {item.details}
                </p>

                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "none",
                    border: "none",
                    color: "var(--gold-primary)",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "12px";
                    e.currentTarget.style.color = "var(--navy-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "8px";
                    e.currentTarget.style.color = "var(--gold-primary)";
                  }}
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            marginTop: "80px",
            padding: "60px",
            background: "var(--navy-primary)",
            borderRadius: "16px",
            textAlign: "center",
            color: "var(--text-white)",
          }}
        >
          <h3 className="heading-1 mb-4" style={{ color: "var(--text-white)" }}>
            Request Our Verified Deal Sheet
          </h3>
          <p
            className="body-large mb-8"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "680px",
              margin: "0 auto 32px",
            }}
          >
            We share tombstones and detailed transaction credentials under NDA. Speak with our
            team to receive a tailored portfolio relevant to your mission profile.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-gold" href="mailto:contact@aerofyn.com?subject=Request%20Deal%20Sheet%20(NDA)">
              Request Deal Sheet
              <ArrowRight size={20} />
            </a>
            <button
              className="btn-secondary"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "var(--text-white)",
              }}
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ExternalLink size={20} />
              View All Services
            </button>
          </div>

          <p
            className="body-small"
            style={{
              marginTop: "20px",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "12px",
            }}
          >
            *All project examples shown above are representative only. Specific client names and
            financial details are confidential.
          </p>
        </div>
      </div>

      <style jsx>{`
        .professional-card:hover .portfolio-overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
