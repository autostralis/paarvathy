import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Award, Globe, Shield } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [parallax, setParallax] = useState({ y: 0, scale: 1 });
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(Math.max((0 - rect.top) / vh, 0), 1);
      const y = progress * 60;
      const scale = 1 + progress * 0.06;
      setParallax({ y, scale });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleParallaxMouse = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({ x: nx * 16, y: ny * 16 });
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoPlay = () => {
    console.log('Playing promotional video');
  };

  return (
    <section ref={sectionRef} onMouseMove={handleParallaxMouse} className="professional-section-lg" style={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <video
        className="hero-background intro-anim"
        autoPlay
        muted
        loop
        playsInline
        style={{ transform: `translateY(${parallax.y}px) scale(${parallax.scale})` }}
      >
        <source src="/background.mp4" type="video/mp4" />
        <img src="/hero-jet.jpg" alt="Aviation Background" />
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="professional-content-container">
        <div className="grid-2" style={{ alignItems: 'center', minHeight: '70vh' }}>
          <div className="hero-content fade-in">
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(212, 175, 55, 0.9)',
                borderRadius: '24px',
              }}>
                <span style={{ 
                  color: 'var(--navy-primary)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '12px'
                }}>
                  Global Aviation Advisory & Transaction Services
                </span>
              </div>
            </div>
            
            <h1 className="display-huge hero-title" style={{ marginBottom: '24px', color: 'var(--text-white)' }}>
              Elevating Aviation<span className="hero-excellence"> Excellence</span>
            </h1>
            
            <p className="body-large" style={{ 
              marginBottom: '24px', 
              maxWidth: '540px', 
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '400'
            }}>
              AeroFyn delivers trusted, transparent aircraft sales, leasing, and compliance solutions — 
              connecting India, Europe, and emerging markets with world-class aviation expertise.
            </p>
            
            <p className="body-medium trust-sub" style={{ 
              marginBottom: '40px', 
              maxWidth: '520px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              From shortlist to handover, we de‑risk every step with independent pre‑purchase inspections, 
              neutral escrow, data‑led valuations, and audit‑ready records — ensuring zero surprises.
            </p>
            
            <div className="cta-wrap" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button className="btn-gold cta" onClick={handleContactClick}>
                Get Started
                <ArrowRight size={20} />
              </button>
              <button 
                className="btn-secondary cta-secondary" 
                onClick={handleVideoPlay}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--text-white)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <Play size={20} />
                Watch Our Story
              </button>
            </div>

            <div className="trust-indicators" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
              <div className="ti" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '8px',
                  background: 'rgba(212, 175, 55, 0.2)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Award size={20} style={{ color: 'var(--gold-primary)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-white)', fontWeight: '600', fontSize: '16px' }}>
                    15+ Years
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                    Experience
                  </div>
                </div>
              </div>
              
              <div className="ti" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '8px',
                  background: 'rgba(212, 175, 55, 0.2)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Globe size={20} style={{ color: 'var(--gold-primary)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-white)', fontWeight: '600', fontSize: '16px' }}>
                    Global Reach
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                    India • Europe • UK
                  </div>
                </div>
              </div>
              
              <div className="ti" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '8px',
                  background: 'rgba(212, 175, 55, 0.2)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Shield size={20} style={{ color: 'var(--gold-primary)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-white)', fontWeight: '600', fontSize: '16px' }}>
                    IADA Ethics
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                    Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Key Stats */}
          <div style={{ 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}>
            <div className="stats-wrap" style={{ position: 'relative', width: '100%', height: '460px' }}>
              <div 
                className="floating stat-card"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '6%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animationDelay: '0s',
                  transform: `translate3d(${cardTilt.x}px, ${cardTilt.y}px, 0)`,
                  zIndex: 3, maxWidth: '340px'
                }}
              >
                <div className="heading-2" style={{ color: 'var(--navy-primary)', marginBottom: '8px' }}>
                  9 Weeks
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
                  Average Transaction Time
                </div>
              </div>

              <div 
                className="floating stat-card"
                style={{
                  position: 'absolute',
                  bottom: '24%',
                  left: '6%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animationDelay: '2s',
                  transform: `translate3d(${-cardTilt.x * 0.8}px, ${-cardTilt.y * 0.8}px, 0)`,
                  zIndex: 2, maxWidth: '340px'
                }}
              >
                <div className="heading-2" style={{ color: 'var(--gold-primary)', marginBottom: '8px' }}>
                  100%
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
                  Compliance Rate
                </div>
              </div>

              <div 
                className="floating stat-card"
                style={{
                  position: 'absolute',
                  top: '64%',
                  right: '28%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animationDelay: '4s',
                  transform: `translate3d(${cardTilt.x * 0.6}px, ${cardTilt.y * 0.6}px, 0)`,
                  zIndex: 1, maxWidth: '340px'
                }}
              >
                <div className="heading-2" style={{ color: 'var(--navy-primary)', marginBottom: '8px' }}>
                  Global
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
                  Market Coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
          will-change: transform;
          transition: transform 0.2s ease-out;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9,13,23,0.15) 0%, rgba(9,13,23,0.45) 40%, rgba(9,13,23,0.75) 100%);
          pointer-events: none;
        }
        .fade-in { animation: fadeUp 800ms ease-out both; }
        .floating { animation: floatY 6s ease-in-out infinite alternate; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translate3d(0, 18px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes floatY {
          0% { transform: translate3d(0, 0px, 0); }
          100% { transform: translate3d(0, -14px, 0); }
        }
        .btn-gold, .btn-secondary { position: relative; z-index: 1; }
        @media (max-width: 1280px) { .stats-wrap { height: 420px; } }
        @media (max-width: 1024px) { .stats-wrap { height: 380px; } .stat-card { max-width: 320px; } }
        @media (max-width: 900px) {
          .stats-wrap { height: auto; display: flex; flex-direction: column; align-items: center; gap: 16px; padding-top: 8px; }
          .stat-card { position: relative !important; top: auto !important; right: auto !important; bottom: auto !important; left: auto !important; transform: none !important; width: min(92%, 360px); }
        }
        .hero-title {}
        .hero-excellence { color: var(--gold-primary); }
        .intro-anim {}
        .cta-wrap { }
        .cta, .cta-secondary { transform: translateX(-12px); opacity: 0; animation: ctaIn 700ms cubic-bezier(.2,.7,.3,1) 300ms forwards; }
        .cta-secondary { animation-delay: 450ms; }
        @keyframes ctaIn { to { transform: translateX(0); opacity: 1; } }
        .cta:hover, .cta-secondary:hover { box-shadow: 0 0 32px 8px rgba(212,175,55,0.25); }
        .ti {}
      `}</style>
    </section>
  );
};

export default HeroSection;
