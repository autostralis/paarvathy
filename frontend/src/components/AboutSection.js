import React from "react";
import { Target, Eye, Users, Award, Globe, Heart, Plane, Shield, TrendingUp, FileText, Truck } from "lucide-react";

const AboutSection = () => {
  const specializations = [
    {
      icon: <Plane size={20} />,
      text: "Aircraft Sales & Acquisitions"
    },
    {
      icon: <Shield size={20} />,
      text: "Aviation Insurance Consulting"
    },
    {
      icon: <TrendingUp size={20} />,
      text: "Valuation & Appraisal"
    },
    {
      icon: <FileText size={20} />,
      text: "Regulatory Compliance"
    },
    {
      icon: <Truck size={20} />,
      text: "Delivery & Transition Management"
    }
  ];

  const missionPoints = [
    {
      icon: <Target size={20} />,
      text: "Deliver seamless aircraft transactions"
    },
    {
      icon: <Users size={20} />,
      text: "Offer comprehensive consulting services"
    },
    {
      icon: <Heart size={20} />,
      text: "Build long-term partnerships"
    },
    {
      icon: <Shield size={20} />,
      text: "Maintain confidentiality, compliance, and professionalism"
    }
  ];

  const values = [
    {
      icon: <Award size={28} />,
      title: "Excellence",
      description: "Uncompromising standards in every transaction and service delivery"
    },
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      description: "Transparent processes with full disclosure and ethical practices"
    },
    {
      icon: <Globe size={28} />,
      title: "Global Reach",
      description: "Worldwide network enabling seamless cross-border transactions"
    }
  ];

  return (
    <section id="about" className="professional-section">
      <div className="professional-content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">
            About AeroFyn
          </h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Independent aviation consultancy delivering world-class transaction services 
            with unmatched expertise and global reach.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: '120px' }}>
          {/* Left Column - About Us */}
          <div className="slide-up">
            <h3 className="heading-1 mb-8">
              Our Story
            </h3>
            
            <p className="body-large mb-6" style={{ fontWeight: '500', lineHeight: '1.7' }}>
              AeroFyn is an independent aviation consultancy and brokerage founded on the principle 
              that every aircraft transaction deserves world-class expertise and unwavering integrity.
            </p>
            
            <p className="body-medium mb-8" style={{ lineHeight: '1.7' }}>
              We solve a critical challenge in aviation transactions: misaligned expectations between 
              technical reality, regulatory requirements, and commercial timelines. Our approach ensures 
              complete transparency and zero surprises throughout the entire process.
            </p>

            <h4 className="heading-3 mb-6" style={{ color: 'var(--navy-primary)' }}>
              Our Specializations
            </h4>
            
            <div style={{ marginBottom: '40px' }}>
              {specializations.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  marginBottom: '16px',
                  padding: '16px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  transition: 'all 0.3s ease'
                }}
                className="professional-hover"
                >
                  <div style={{
                    color: 'var(--gold-primary)',
                    padding: '8px',
                    background: 'var(--navy-primary)',
                    borderRadius: '8px'
                  }}>
                    {item.icon}
                  </div>
                  <span className="body-medium" style={{ fontWeight: '500' }}>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div style={{
              padding: '32px',
              background: 'var(--navy-primary)',
              borderRadius: '12px',
              color: 'var(--text-white)'
            }}>
              <h4 className="heading-3 mb-4" style={{ color: 'var(--gold-primary)' }}>
                Our Commitment
              </h4>
              <p className="body-medium" style={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7'
              }}>
                As a single-threaded owner for every deal, we coordinate MROs, crews, and legal counsel 
                while ensuring documentation discipline — treating records like assets with no loose ends.
              </p>
            </div>
          </div>

          {/* Right Column - Vision & Mission */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Vision */}
            <div className="professional-card-feature mb-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  padding: '16px',
                  background: 'var(--gold-primary)',
                  borderRadius: '12px',
                  color: 'var(--navy-primary)'
                }}>
                  <Eye size={28} />
                </div>
                <h3 className="heading-1">Vision</h3>
              </div>
              
              <p className="body-medium" style={{ 
                fontStyle: 'italic', 
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                fontWeight: '500',
                fontSize: '18px'
              }}>
                "To be the most agile and client‑trusted aviation transaction partner in emerging 
                and mature markets alike — transforming the global aircraft sales experience through 
                knowledge, transparency, and dedication."
              </p>
            </div>

            {/* Mission */}
            <div className="professional-card-feature mb-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  padding: '16px',
                  background: 'var(--navy-primary)',
                  borderRadius: '12px',
                  color: 'var(--gold-primary)'
                }}>
                  <Target size={28} />
                </div>
                <h3 className="heading-1">Mission</h3>
              </div>
              
              <div>
                {missionPoints.map((point, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    marginBottom: '16px',
                    padding: '16px',
                    background: 'var(--bg-primary)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div style={{
                      color: 'var(--gold-primary)',
                      padding: '6px',
                      background: 'var(--grey-50)',
                      borderRadius: '6px'
                    }}>
                      {point.icon}
                    </div>
                    <span className="body-medium" style={{ fontWeight: '500' }}>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="heading-1 mb-6">
            Our Core Values
          </h3>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            The principles that guide every decision and define our approach to aviation excellence.
          </p>
        </div>

        <div className="grid-3 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="professional-card scale-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div style={{
                color: 'var(--gold-primary)',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '24px',
                padding: '20px',
                background: 'var(--navy-primary)',
                borderRadius: '16px',
                width: 'fit-content',
                margin: '0 auto 24px'
              }}>
                {value.icon}
              </div>
              
              <h4 className="heading-3 mb-4" style={{ color: 'var(--navy-primary)' }}>
                {value.title}
              </h4>
              
              <p className="body-medium" style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div style={{
          padding: '60px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 className="heading-1 mb-6" style={{ color: 'var(--navy-primary)' }}>
            Leadership Excellence
          </h3>
          <p className="body-large mb-8" style={{ 
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Every transaction is personally overseen by Manikandan Ranganathan, aerospace veteran 
            with 15+ years of experience and a deep global network spanning India, Europe, and beyond.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={24} style={{ color: 'var(--gold-primary)' }} />
              <span className="body-medium" style={{ fontWeight: '600' }}>Aerospace Academia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Globe size={24} style={{ color: 'var(--gold-primary)' }} />
              <span className="body-medium" style={{ fontWeight: '600' }}>Global Network</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Users size={24} style={{ color: 'var(--gold-primary)' }} />
              <span className="body-medium" style={{ fontWeight: '600' }}>Industry Veterans</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;