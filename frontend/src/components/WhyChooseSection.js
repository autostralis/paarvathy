import React from "react";
import { Crown, Globe, Shield, Scale, FileCheck } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Crown size={32} />,
      title: "Founder-Led Expertise",
      description: "Every transaction personally overseen by Manikandan Ranganathan, aerospace veteran with a deep global network."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach", 
      description: "Strategic presence in India, UK, and Estonia; alliances in EU, UAE, SE Asia."
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance First",
      description: "Full adherence to DGCA, FAA, and EASA requirements."
    },
    {
      icon: <Scale size={32} />,
      title: "Technical + Commercial Balance",
      description: "Detailed inspections matched with strong negotiation strategy."
    },
    {
      icon: <FileCheck size={32} />,
      title: "Documentation Discipline",
      description: "Standardized, audit‑ready records every time."
    }
  ];

  const markets = [
    {
      title: "Private Owners & UHNIs",
      description: "Confidential, time‑bound disposals & acquisitions with white‑glove coordination."
    },
    {
      title: "Fleet Operators", 
      description: "Mid‑life acquisitions, CAMO/MRO liaison, and documentation oversight."
    },
    {
      title: "Institutional Clients & OEMs",
      description: "Market entry strategy, asset valuation, and transaction structuring support."
    }
  ];

  return (
    <section className="pad-xxlarge">
      <div className="dark-content-container">
        {/* Why Choose AeroFyn */}
        <div style={{ marginBottom: '120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="display-large" style={{ marginBottom: '20px' }}>
              Why Choose AeroFyn
            </h2>
            <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Unmatched expertise, global reach, and unwavering commitment to excellence
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '40px'
          }}>
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="dark-hover dark-transition"
                style={{
                  padding: '40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  color: 'var(--brand-primary)',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {reason.icon}
                </div>
                
                <h3 className="heading-2" style={{ marginBottom: '16px' }}>
                  {reason.title}
                </h3>
                
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Markets Served */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="display-medium" style={{ marginBottom: '20px' }}>
              Markets Served
            </h2>
            <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Serving diverse clients across the aviation ecosystem
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {markets.map((market, index) => (
              <div 
                key={index}
                style={{
                  padding: '32px',
                  background: 'rgba(0, 255, 209, 0.05)',
                  border: '1px solid rgba(0, 255, 209, 0.2)',
                  borderRadius: '0px'
                }}
              >
                <h3 className="heading-3" style={{ 
                  marginBottom: '16px',
                  color: 'var(--brand-primary)'
                }}>
                  {market.title}
                </h3>
                
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: 1fr !important;
          }
          
          .markets-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;