import React from "react";
import { Search, List, FileSearch, Handshake, Truck, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Requirements",
      description: "Mission profile, budget, ownership timeline, and operational constraints analysis.",
      icon: <Search size={32} />,
      details: [
        "Comprehensive needs assessment",
        "Budget and timeline planning",
        "Operational requirements analysis",
        "Market opportunity evaluation"
      ],
      duration: "1-2 weeks"
    },
    {
      number: "02", 
      title: "Market Scan & Shortlist",
      description: "Global on/off-market inventory search across international channels.",
      icon: <List size={32} />,
      details: [
        "Global market inventory scan",
        "Off-market opportunities identification",
        "Comparative analysis preparation",
        "Shortlist creation and prioritization"
      ],
      duration: "2-3 weeks"
    },
    {
      number: "03",
      title: "Due Diligence",
      description: "Comprehensive records review, inspection scheduling, and independent MRO evaluations.",
      icon: <FileSearch size={32} />,
      details: [
        "Complete records and logbook review",
        "Independent MRO inspection coordination",
        "Technical evaluation and reporting",
        "Airworthiness verification"
      ],
      duration: "2-4 weeks"
    },
    {
      number: "04",
      title: "Negotiation & Documentation", 
      description: "LOI preparation, PSA development, escrow setup, and risk-aligned deal structuring.",
      icon: <Handshake size={32} />,
      details: [
        "Letter of Intent preparation",
        "Purchase agreement negotiation",
        "Escrow account establishment",
        "Legal documentation coordination"
      ],
      duration: "1-2 weeks"
    },
    {
      number: "05",
      title: "Delivery & Compliance",
      description: "Ferry coordination, customs clearance, registration, and comprehensive handover.",
      icon: <Truck size={32} />,
      details: [
        "Ferry flight planning and execution",
        "Customs and import documentation",
        "Registration and certification",
        "Final inspection and handover"
      ],
      duration: "1-3 weeks"
    },
    {
      number: "06",
      title: "Post‑Delivery Support",
      description: "Regulatory filings, records archival, and ongoing CAMO/MRO onboarding support.",
      icon: <HeadphonesIcon size={32} />,
      details: [
        "Regulatory compliance filings",
        "Digital records archival",
        "CAMO/MRO integration support",
        "Ongoing advisory services"
      ],
      duration: "Ongoing"
    }
  ];

  return (
    <section id="process" className="professional-section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="professional-content-container">
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">
            Our Proven Process
          </h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            A six-stage, documentation-first workflow optimized for India–EU aviation markets, 
            ensuring transparency and compliance at every step.
          </p>
        </div>

        {/* Process Overview */}
        <div style={{
          marginBottom: '80px',
          padding: '40px',
          background: 'var(--navy-primary)',
          borderRadius: '16px',
          textAlign: 'center',
          color: 'var(--text-white)'
        }}>
          <h3 className="heading-1 mb-4" style={{ color: 'var(--gold-primary)' }}>
            Average Timeline: 9-15 Weeks
          </h3>
          <p className="body-large" style={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            From initial consultation to final delivery, our streamlined process ensures 
            efficient transactions without compromising on thoroughness or compliance.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '80px'
        }}>
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="professional-card scale-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {/* Step Number Badge */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                right: '24px',
                background: 'var(--gold-primary)',
                color: 'var(--navy-primary)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
              }}>
                {step.number}
              </div>
              
              {/* Duration Badge */}
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                background: 'var(--navy-primary)',
                color: 'var(--gold-primary)',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {step.duration}
              </div>
              
              {/* Icon */}
              <div style={{
                color: 'var(--navy-primary)',
                marginBottom: '24px',
                marginTop: '32px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  padding: '20px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  border: '2px solid var(--gold-primary)'
                }}>
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h3 className="heading-2 mb-4" style={{ color: 'var(--navy-primary)' }}>
                  {step.title}
                </h3>
                
                <p className="body-medium mb-6" style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>

              {/* Details */}
              <div style={{ textAlign: 'left' }}>
                <h4 className="body-medium mb-4" style={{ 
                  fontWeight: '600',
                  color: 'var(--navy-primary)',
                  textAlign: 'center'
                }}>
                  Key Activities
                </h4>
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '12px',
                    marginBottom: '12px',
                    padding: '12px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '8px'
                  }}>
                    <CheckCircle size={16} style={{
                      color: 'var(--gold-primary)',
                      marginTop: '2px',
                      flexShrink: 0
                    }} />
                    <span className="body-small" style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Progress Arrow for non-last items */}
              {index < processSteps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'var(--gold-primary)',
                  display: window.innerWidth > 768 ? 'none' : 'block'
                }}>
                  <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Process Flow Visualization for Desktop */}
        <div style={{
          display: 'none',
          marginTop: '60px',
          position: 'relative',
          textAlign: 'center'
        }} className="desktop-only">
          <div style={{
            height: '4px',
            background: 'linear-gradient(90deg, var(--gold-primary), var(--navy-primary), var(--gold-primary))',
            maxWidth: '800px',
            margin: '0 auto',
            borderRadius: '2px',
            position: 'relative'
          }}>
            {[...Array(6)].map((_, index) => (
              <div key={index} style={{
                position: 'absolute',
                top: '50%',
                left: `${(index * 16) + 8}%`,
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                background: 'var(--gold-primary)',
                borderRadius: '50%',
                border: '3px solid var(--bg-secondary)',
                boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
              }} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '80px',
          padding: '60px',
          background: 'var(--bg-primary)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <h3 className="heading-1 mb-4" style={{ color: 'var(--navy-primary)' }}>
            Ready to Begin Your Transaction?
          </h3>
          <p className="body-large mb-8" style={{ 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Our proven process ensures transparency, compliance, and efficiency. 
            Let's discuss your aviation requirements and timeline.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Journey
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn-secondary"
              onClick={() => {
                // Handle schedule consultation
                console.log('Schedule consultation');
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-only {
            display: block !important;
          }
        }
        
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          
          .professional-card {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;