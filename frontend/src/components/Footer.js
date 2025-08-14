import React from "react";
import { Plane, Mail, Phone, MapPin, ExternalLink, Award, Globe, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Aircraft Sales", href: "#services" },
    { name: "Delivery Services", href: "#services" },
    { name: "Compliance Advisory", href: "#services" },
    { name: "Market Intelligence", href: "#services" },
    { name: "Insurance Consulting", href: "#services" }
  ];

  const companyLinks = [
    { name: "About AeroFyn", href: "#about" },
    { name: "Our Process", href: "#process" },
    // { name: "Recent Transactions", href: "#portfolio" },
    { name: "Global Presence", href: "#about" },
    { name: "Leadership Team", href: "#about" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Compliance Statement", href: "/compliance" }
  ];

  const certifications = [
    { name: "DGCA Certified", icon: <Shield size={16} /> },
    { name: "EASA Compliant", icon: <Award size={16} /> },
    { name: "FAA Standards", icon: <Globe size={16} /> }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ 
      background: 'var(--navy-primary)', 
      color: 'var(--text-white)',
      position: 'relative'
    }}>
      {/* Top Section */}
      <div style={{ 
        padding: '80px 0 60px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="professional-content-container">
          <div className="grid-2" style={{ gap: '80px', alignItems: 'flex-start' }}>
            {/* Left Column - Company Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <img 
                  src="/logo copy.png" 
                  alt="AeroFyn" 
                  style={{ height: '48px', width: 'auto' }}
                />
                <h3 className="heading-1" style={{ color: 'var(--gold-primary)' }}>
                  AeroFyn
                </h3>
              </div>
              
              <p className="body-large" style={{ 
                marginBottom: '32px', 
                maxWidth: '480px',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7'
              }}>
                Trusted aviation consultancy delivering transparent aircraft sales, leasing, 
                and compliance solutions across India, Europe, and emerging markets.
              </p>
              
              {/* Contact Information */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={18} style={{ color: 'var(--gold-primary)' }} />
                  <span className="body-small" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    India • Europe • United Kingdom
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} style={{ color: 'var(--gold-primary)' }} />
                  <a 
                    href="mailto:contact@aerofyn.com"
                    className="body-small" 
                    style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
                  >
                    contact@aerofyn.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} style={{ color: 'var(--gold-primary)' }} />
                  <a 
                    href="tel:" 
                    className="body-small" 
                    style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
                    aria-label="Phone number hidden"
                  >
                    <span style={{ display: 'none' }}>(Your Number Here)</span>
                  </a>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="body-medium mb-4" style={{ 
                  fontWeight: '600',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '14px'
                }}>
                  Certified & Compliant
                </h4>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  {certifications.map((cert, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ color: 'var(--gold-primary)' }}>
                        {cert.icon}
                      </div>
                      <span className="body-small" style={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: '500'
                      }}>
                        {cert.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Links */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '40px' 
            }}>
              {/* Services */}
              <div>
                <h4 className="heading-3 mb-6" style={{ color: 'var(--gold-primary)' }}>
                  Our Services
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="body-small"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        fontWeight: '400'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--gold-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="heading-3 mb-6" style={{ color: 'var(--gold-primary)' }}>
                  Company
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {companyLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="body-small"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        fontWeight: '400'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--gold-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 className="heading-3 mb-6" style={{ color: 'var(--gold-primary)' }}>
                  Legal
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="body-small"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        fontWeight: '400'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--gold-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '60px 0',
        background: 'rgba(212, 175, 55, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="professional-content-container">
          <div style={{ textAlign: 'center' }}>
            <h3 className="heading-1 mb-4" style={{ color: 'var(--gold-primary)' }}>
              Ready to Start Your Aviation Journey?
            </h3>
            <p className="body-large mb-8" style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              Connect with our aviation experts for personalized consultation and transparent guidance.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="btn-gold"
                onClick={() => scrollToSection('#contact')}
              >
                Get Started Today
                <ExternalLink size={20} />
              </button>
              <button 
                className="btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'var(--text-white)'
                }}
                onClick={() => scrollToSection('#portfolio')}
              >
                <Plane size={20} />
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: '32px 0' }}>
        <div className="professional-content-container">
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p className="body-small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                © {currentYear} AeroFyn Aviation Advisory. All rights reserved.
              </p>
              <p className="body-small" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px' }}>
                Professional aviation services with global reach and local expertise.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <span className="body-small" style={{ 
                color: 'var(--gold-primary)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '12px'
              }}>
                🌐 www.aerofyn.com
              </span>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(212, 175, 55, 0.2)',
                borderRadius: '20px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <span className="body-small" style={{ 
                  color: 'var(--gold-primary)',
                  fontWeight: '600',
                  fontSize: '12px'
                }}>
                  Available 24/7 for Urgent Matters
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
          }
          
          .footer-links-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
