import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Citation CJ3",
      category: "business-jets",
      image: "/inventory-cj3.webp",
      description: "Light business jet acquisition for European client",
      details: "Completed in 8 weeks with full EASA compliance",
      value: "$4.2M",
      year: "2024"
    },
    {
      id: 2,
      title: "Pilatus PC-12",
      category: "turboprops",
      image: "/inventory-pc12.jpg",
      description: "Single-engine turboprop for corporate operations",
      details: "Comprehensive pre-purchase inspection and delivery",
      value: "$5.8M",
      year: "2024"
    },
    {
      id: 3,
      title: "Bell 407",
      category: "helicopters",
      image: "/inventory-bell407.webp",
      description: "Multi-purpose helicopter for offshore operations",
      details: "Complex regulatory approval across three jurisdictions",
      value: "$3.1M",
      year: "2023"
    },
    {
      id: 4,
      title: "Global 7500",
      category: "business-jets",
      image: "/bombardier-challenger-global-7500-1.jpg.webp",
      description: "Ultra-long-range business jet transaction",
      details: "Full-service delivery from Canada to India",
      value: "$65M",
      year: "2023"
    },
    {
      id: 5,
      title: "Challenger 350",
      category: "business-jets",
      image: "/bombardier-challenger-global-7500-2.jpg.webp",
      description: "Mid-size business jet for corporate fleet",
      details: "Accelerated transaction with clean documentation",
      value: "$18M",
      year: "2024"
    },
    {
      id: 6,
      title: "Aviation Consulting",
      category: "consulting",
      image: "/csm_g5000__4__resized_ac666d14e0.jpg",
      description: "Fleet modernization strategy consultation",
      details: "Comprehensive analysis and implementation roadmap",
      value: "Confidential",
      year: "2024"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'business-jets', label: 'Business Jets' },
    { id: 'turboprops', label: 'Turboprops' },
    { id: 'helicopters', label: 'Helicopters' },
    { id: 'consulting', label: 'Consulting' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="professional-section">
      <div className="professional-content-container">
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">
            Recent Transactions
          </h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Explore our portfolio of successful aircraft transactions and aviation consulting projects, 
            showcasing our expertise across diverse aircraft categories and markets.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid var(--border-light)',
                background: activeFilter === filter.id ? 'var(--navy-primary)' : 'var(--bg-primary)',
                color: activeFilter === filter.id ? 'var(--text-white)' : 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
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
                overflow: 'hidden',
                padding: '0'
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '6px 12px',
                  background: 'var(--gold-primary)',
                  color: 'var(--navy-primary)',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {item.year}
                </div>

                {/* Value Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '6px 12px',
                  background: 'rgba(30, 41, 59, 0.9)',
                  color: 'var(--text-white)',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)'
                }}>
                  {item.value}
                </div>

                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.8) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                className="portfolio-overlay"
                />
              </div>

              {/* Content */}
              <div style={{ padding: '32px' }}>
                <h3 className="heading-3 mb-4" style={{ color: 'var(--navy-primary)' }}>
                  {item.title}
                </h3>
                
                <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
                
                <p className="body-small mb-6" style={{ 
                  color: 'var(--text-muted)',
                  fontStyle: 'italic'
                }}>
                  {item.details}
                </p>

                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold-primary)',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.gap = '12px';
                    e.target.style.color = 'var(--navy-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.gap = '8px';
                    e.target.style.color = 'var(--gold-primary)';
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
        <div style={{
          marginTop: '80px',
          padding: '60px',
          background: 'var(--navy-primary)',
          borderRadius: '16px',
          textAlign: 'center',
          color: 'var(--text-white)'
        }}>
          <h3 className="heading-1 mb-4" style={{ color: 'var(--text-white)' }}>
            Ready to Start Your Aviation Transaction?
          </h3>
          <p className="body-large mb-8" style={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Join our portfolio of successful transactions. From initial consultation to final delivery, 
            we ensure a seamless and transparent process.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn-gold"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Transaction
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn-secondary"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'var(--text-white)'
              }}
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ExternalLink size={20} />
              View All Services
            </button>
          </div>
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