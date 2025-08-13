import React from "react";
import { MapPin, Clock, Users, Shield, CheckCircle, TrendingUp } from "lucide-react";

const QuickFacts = () => {
  const stats = [
    {
      icon: <TrendingUp size={32} />,
      number: "15+",
      label: "Years Experience",
      description: "Aerospace academia & aviation research"
    },
    {
      icon: <MapPin size={32} />,
      number: "3",
      label: "Global Markets",
      description: "India, UK & Estonia presence"
    },
    {
      icon: <CheckCircle size={32} />,
      number: "9",
      label: "Weeks Average",
      description: "Transaction completion time"
    },
    {
      icon: <Shield size={32} />,
      number: "100%",
      label: "Compliance",
      description: "DGCA, FAA & EASA standards"
    }
  ];

  const facts = [
    {
      icon: <Users size={24} />,
      text: "Serving private owners, operators, OEM brokers, and institutions"
    },
    {
      icon: <Shield size={24} />,
      text: "IADA‑style ethics: transparency, disclosure, and fiduciary duty"
    },
    {
      icon: <CheckCircle size={24} />,
      text: "Clean export documentation with zero surprises guarantee"
    }
  ];

  return (
    <section className="professional-section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="professional-content-container">
        {/* Stats Grid */}
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Delivering excellence across global aviation markets with proven expertise and unwavering commitment.
          </p>
        </div>
        
        <div className="grid-3 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="professional-card-feature text-center scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div style={{ 
                color: 'var(--gold-primary)', 
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              
              <div className="heading-1" style={{ 
                color: 'var(--navy-primary)', 
                marginBottom: '8px',
                fontSize: '3rem',
                fontWeight: '700'
              }}>
                {stat.number}
              </div>
              
              <div className="heading-3" style={{ marginBottom: '12px' }}>
                {stat.label}
              </div>
              
              <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Facts */}
        <div className="text-center mb-12">
          <h3 className="heading-1 mb-8">
            Why Choose AeroFyn
          </h3>
        </div>
        
        <div className="grid-3">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="professional-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div style={{ 
                  color: 'var(--navy-primary)', 
                  flexShrink: 0, 
                  marginTop: '4px',
                  padding: '12px',
                  background: 'var(--grey-50)',
                  borderRadius: '12px',
                  border: '2px solid var(--gold-primary)'
                }}>
                  {fact.icon}
                </div>
                <p className="body-medium" style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          background: 'var(--bg-primary)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <div className="heading-3 mb-6" style={{ color: 'var(--navy-primary)' }}>
            Certified & Compliant
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                padding: '8px',
                background: 'var(--gold-primary)',
                borderRadius: '8px',
                color: 'var(--navy-primary)'
              }}>
                <Shield size={24} />
              </div>
              <span className="body-medium" style={{ fontWeight: '600' }}>DGCA Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                padding: '8px',
                background: 'var(--gold-primary)',
                borderRadius: '8px',
                color: 'var(--navy-primary)'
              }}>
                <Shield size={24} />
              </div>
              <span className="body-medium" style={{ fontWeight: '600' }}>EASA Compliant</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                padding: '8px',
                background: 'var(--gold-primary)',
                borderRadius: '8px',
                color: 'var(--navy-primary)'
              }}>
                <Shield size={24} />
              </div>
              <span className="body-medium" style={{ fontWeight: '600' }}>FAA Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;