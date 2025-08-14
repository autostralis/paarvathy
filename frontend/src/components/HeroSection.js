import React from "react";
import { ArrowRight, Play, Award, Globe, Shield } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoPlay = () => {
    // Handle video play functionality
    console.log('Playing promotional video');
  };

  return (
    <section className="professional-section-lg" style={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <video
        className="hero-background"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* Fallback image */}
        <img src="/hero-jet.jpg" alt="Aviation Background" />
      </video>
      
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      <div className="professional-content-container">
        <div className="grid-2" style={{ alignItems: 'center', minHeight: '70vh' }}>
          {/* Left Content */}
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
            
            <h1 className="display-huge" style={{ marginBottom: '24px', color: 'var(--text-white)' }}>
              Elevating Aviation
              <span style={{ color: 'var(--gold-primary)' }}> Excellence</span>
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
            
            <p className="body-medium" style={{ 
              marginBottom: '40px', 
              maxWidth: '520px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              From shortlist to handover, we de‑risk every step with independent pre‑purchase inspections, 
              neutral escrow, data‑led valuations, and audit‑ready records — ensuring zero surprises.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button className="btn-gold" onClick={handleContactClick}>
                Get Started
                <ArrowRight size={20} />
              </button>
              <button 
                className="btn-secondary" 
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

            {/* Trust Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
            {/* Floating Stats Cards */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px'
            }}>
              <div 
                className="floating"
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animationDelay: '0s'
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
                className="floating"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '5%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animationDelay: '2s'
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
                className="floating"
                style={{
                  position: 'absolute',
                  top: '60%',
                  right: '25%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '24px 32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animationDelay: '4s'
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
    </section>
  );
};

export default HeroSection;
