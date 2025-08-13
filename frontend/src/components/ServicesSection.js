import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plane, FileText, Shield, TrendingUp, Headphones, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Aircraft Sales & Acquisitions",
      icon: <Plane size={28} />,
      description: "End-to-end aircraft transaction management with global reach",
      shortDesc: "Complete buyer representation and seller mandate services from market scan to delivery",
      details: [
        "Buyer representation or exclusive seller mandate",
        "Mission fit analysis, market scan, shortlist & site visits", 
        "Offer strategy, LOI, escrow coordination & PSA support",
        "Pre‑purchase inspection planning with independent OEM/MRO partners",
        "Closing, acceptance, delivery flight & comprehensive handover"
      ],
      highlights: ["Global Market Access", "Independent PPIs", "Clean Documentation"]
    },
    {
      id: 2,
      title: "Delivery & Entry‑Into‑Service",
      icon: <Shield size={28} />,
      description: "Seamless aircraft delivery and service entry across jurisdictions",
      shortDesc: "Comprehensive delivery management with regulatory compliance expertise",
      details: [
        "PPI slotting with independent MROs or OEM service centers",
        "Ferry planning, permits, crew coordination & insurance",
        "Records review, DGCA/EASA conformity checks, customs brokerage", 
        "Initial CAMO liaison or operator onboarding support",
        "Post-delivery documentation and regulatory filings"
      ],
      highlights: ["Multi-Jurisdiction", "Clean Compliance", "Expert Coordination"]
    },
    {
      id: 3,
      title: "Compliance & Documentation Advisory",
      icon: <FileText size={28} />,
      description: "Regulatory compliance and documentation excellence",
      shortDesc: "Expert navigation of complex aviation regulations and documentation requirements",
      details: [
        "DGCA/EASA/FAA pathway mapping for registration & operations",
        "AD/SB status review, life‑limited parts tracking",
        "Secure digitization & indexing of logbooks and records",
        "Audit readiness and regulatory gap closure actions",
        "Ongoing compliance monitoring and advisory services"
      ],
      highlights: ["Multi-Authority", "Digital Records", "Audit Ready"]
    },
    {
      id: 4,
      title: "Valuation & Market Intelligence",
      icon: <TrendingUp size={28} />,
      description: "Data-driven market analysis and accurate aircraft valuations",
      shortDesc: "Comprehensive market intelligence and professional valuation services",
      details: [
        "Comparable sales analysis and inventory market scans",
        "Utilization modeling & total cost-of-ownership estimates",
        "Residual value projections for owners & lessors",
        "Quarterly policy watch on import/export rules and tax impacts",
        "Market trend analysis and investment advisory"
      ],
      highlights: ["Market Data", "Cost Analysis", "Investment Advisory"]
    },
    {
      id: 5,
      title: "Aviation Insurance Consulting",
      icon: <Headphones size={28} />,
      description: "Comprehensive insurance advisory and risk management",
      shortDesc: "Expert insurance consultation and claims support services",
      details: [
        "Hull & liability policy advisory and optimization",
        "Risk assessment and mitigation strategies",
        "Claims support and insurance company liaison",
        "Coverage analysis and policy recommendations"
      ],
      highlights: ["Risk Management", "Claims Support", "Policy Optimization"]
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? -1 : index);
  };

  return (
    <section id="services" className="professional-section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="professional-content-container">
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">
            Comprehensive Aviation Solutions
          </h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            From transaction to delivery and beyond, we provide end-to-end aviation services 
            with unmatched expertise and global reach.
          </p>
        </div>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="professional-card"
              style={{
                marginBottom: '24px',
                overflow: 'hidden',
                border: expandedService === index ? '2px solid var(--gold-primary)' : '1px solid var(--border-light)',
                background: expandedService === index ? 'var(--bg-primary)' : 'var(--bg-primary)'
              }}
            >
              {/* Service Header */}
              <div 
                onClick={() => toggleService(index)}
                style={{
                  padding: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  background: expandedService === index ? 'var(--bg-primary)' : 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flex: 1 }}>
                  <div style={{ 
                    color: expandedService === index ? 'var(--gold-primary)' : 'var(--navy-primary)',
                    padding: '16px',
                    background: expandedService === index ? 'var(--navy-primary)' : 'var(--grey-50)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="heading-2" style={{ 
                      marginBottom: '12px',
                      color: expandedService === index ? 'var(--navy-primary)' : 'var(--text-primary)'
                    }}>
                      {service.title}
                    </h3>
                    <p className="body-medium" style={{ 
                      color: 'var(--text-secondary)',
                      marginBottom: '16px',
                      fontWeight: '500'
                    }}>
                      {service.description}
                    </p>
                    {expandedService !== index && (
                      <p className="body-small" style={{ 
                        color: 'var(--text-muted)',
                        fontStyle: 'italic'
                      }}>
                        {service.shortDesc}
                      </p>
                    )}
                    
                    {/* Service Highlights */}
                    {expandedService !== index && (
                      <div style={{ 
                        display: 'flex', 
                        gap: '12px', 
                        marginTop: '16px',
                        flexWrap: 'wrap'
                      }}>
                        {service.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            style={{
                              padding: '4px 12px',
                              background: 'var(--gold-primary)',
                              color: 'var(--navy-primary)',
                              borderRadius: '16px',
                              fontSize: '12px',
                              fontWeight: '600',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={{ 
                  color: expandedService === index ? 'var(--gold-primary)' : 'var(--navy-primary)',
                  marginLeft: '24px'
                }}>
                  {expandedService === index ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                </div>
              </div>
              
              {/* Service Details */}
              {expandedService === index && (
                <div style={{
                  padding: '0 40px 40px 40px',
                  borderTop: '1px solid var(--border-light)',
                  animation: 'fadeIn 0.4s ease'
                }}>
                  <div style={{ paddingTop: '32px' }}>
                    <h4 className="heading-3 mb-6" style={{ color: 'var(--navy-primary)' }}>
                      What We Deliver
                    </h4>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                      {service.details.map((detail, detailIndex) => (
                        <div key={detailIndex} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '16px',
                          padding: '16px',
                          background: 'var(--bg-secondary)',
                          borderRadius: '8px',
                          border: '1px solid var(--border-light)'
                        }}>
                          <div style={{
                            color: 'var(--gold-primary)',
                            marginTop: '2px',
                            flexShrink: 0
                          }}>
                            <CheckCircle size={20} />
                          </div>
                          <span className="body-medium" style={{ 
                            color: 'var(--text-primary)',
                            fontWeight: '500'
                          }}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div style={{
                      marginTop: '32px',
                      padding: '24px',
                      background: 'var(--navy-primary)',
                      borderRadius: '12px',
                      textAlign: 'center'
                    }}>
                      <p className="body-medium mb-4" style={{ 
                        color: 'var(--text-white)',
                        marginBottom: '20px'
                      }}>
                        Ready to get started with {service.title.toLowerCase()}?
                      </p>
                      <button 
                        className="btn-gold"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Quote
                        <ChevronDown size={20} style={{ transform: 'rotate(-90deg)' }} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '60px 40px',
          background: 'var(--bg-primary)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)'
        }}>
          <h3 className="heading-1 mb-4" style={{ color: 'var(--navy-primary)' }}>
            Need a Custom Solution?
          </h3>
          <p className="body-large mb-8" style={{ 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Every aviation transaction is unique. Let us create a tailored approach 
            that fits your specific requirements and timeline.
          </p>
          
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discuss Your Needs
            <Plane size={20} />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @media (max-width: 768px) {
          .service-header {
            padding: 24px !important;
          }
          
          .service-details {
            padding: 0 24px 24px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;