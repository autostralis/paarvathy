import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

const PLACEHOLDER = "/placeholder-jet.jpg"; // optional placeholder in /public

export default function PortfolioSection() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const res = await fetch("/inventory.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancel) setItems(Array.isArray(json.items) ? json.items : []);
      } catch (e) {
        if (!cancel) setErr(e.message || "Failed to load inventory");
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => { cancel = true; };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(items.map(i => i.category).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(i => {
      const catOk = cat === "all" || i.category === cat;
      const text = `${i.make || ""} ${i.model || ""} ${i.variant || ""}`.toLowerCase();
      const qOk = !q || text.includes(q);
      return catOk && qOk && (i.status ?? "for-sale") !== "sold";
    });
  }, [items, cat, query]);

  if (loading) {
    return (
      <section id="portfolio" className="professional-section">
        <div className="professional-content-container">Loading inventory…</div>
      </section>
    );
  }
  if (err) {
    return (
      <section id="portfolio" className="professional-section">
        <div className="professional-content-container" style={{ color: "var(--error, #b91c1c)" }}>
          Error: {err}
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="professional-section">
      <div className="professional-content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">Aircraft Inventory</h2>
          <p className="body-large" style={{ maxWidth: 780, margin: "0 auto", color: "var(--text-secondary)" }}>
            Browse currently available aircraft across categories.
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search make/model…"
            style={{
              padding: "12px 14px",
              border: "1px solid var(--border-light)",
              borderRadius: 8,
              minWidth: 220
            }}
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            style={{ padding: "12px 14px", borderRadius: 8 }}
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c === "all" ? "All Categories" : toTitle(c)}
              </option>
            ))}
          </select>
          <a className="btn-gold" href="#contact">List Your Aircraft</a>
        </div>

        {/* Grid */}
        <div className="grid-3">
          {filtered.map((i, index) => (
            <article
              key={i.id || `${i.make}-${i.model}-${index}`}
              className="professional-card scale-in"
              style={{ overflow: "hidden", padding: 0, animationDelay: `${index * 0.06}s` }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <img
                  src={(i.images && i.images[0]) || PLACEHOLDER}
                  alt={`${i.make || ""} ${i.model || ""}`.trim()}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* Always show "Call for price" */}
                <div style={{ position: "absolute", top: 12, right: 12 }}>
                  <Badge dark>Call for price</Badge>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 20 }}>
                <h3 className="heading-3" style={{ marginBottom: 6, color: "var(--navy-primary)" }}>
                  {i.make} {i.model}{i.variant ? ` ${i.variant}` : ""}
                </h3>

                {/* Year only */}
                <div className="body-small" style={{ color: "var(--text-muted)", marginBottom: 12 }}>
                  {i.year || ""}
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                  {num(i.seats) && <Pill>{i.seats} seats</Pill>}
                  {num(i.range_nm) && <Pill>{i.range_nm} nm</Pill>}
                  {num(i.speed_knots) && <Pill>{i.speed_knots} kt</Pill>}
                  {num(i.total_time_hours) && <Pill>{num(i.total_time_hours).toLocaleString()} hrs TT</Pill>}
                </div>

                {/* Only Enquire */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a
                    className="btn-gold"
                    href={`mailto:contact@aerofyn.com?subject=${encodeURIComponent(
                      `Inquiry: ${i.make} ${i.model}${i.variant ? " " + i.variant : ""}`
                    )}`}
                  >
                    Enquire
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 80,
            padding: 60,
            background: "var(--navy-primary)",
            borderRadius: 16,
            textAlign: "center",
            color: "var(--text-white)"
          }}
        >
          <h3 className="heading-1 mb-4" style={{ color: "var(--text-white)" }}>
            Can’t find your exact spec?
          </h3>
          <p className="body-large mb-8" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 680, margin: "0 auto 32px" }}>
            Tell us your mission profile—range, seats, budget—and we’ll source curated off-market options.
          </p>
          <a className="btn-gold" href="mailto:contact@aerofyn.com?subject=Aircraft%20Sourcing%20Request">
            Request Sourcing
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function toTitle(s) {
  return String(s || "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}
function Badge({ children, dark }) {
  return (
    <span
      style={{
        background: dark ? "rgba(0,0,0,0.65)" : "rgba(212,175,55,0.18)",
        color: dark ? "#fff" : "var(--gold-primary)",
        padding: "6px 10px",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700
      }}
    >
      {children}
    </span>
  );
}
function Pill({ children }) {
  return (
    <span
      style={{
        background: "rgba(212,175,55,0.15)",
        color: "var(--gold-primary)",
        padding: "4px 8px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600
      }}
    >
      {children}
    </span>
  );
}
