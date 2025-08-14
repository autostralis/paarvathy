import React, { useState } from "react";
import { Mail, MapPin, Send, Briefcase, Clock, CheckCircle } from "lucide-react";
import { mockData } from "../data/mock";

// Full country list (sorted)
const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde",
  "Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros",
  "Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea",
  "Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia",
  "Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North",
  "Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
  "Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania",
  "Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan",
  "Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
  "Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino",
  "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia",
  "Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay",
  "Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
].sort();

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",        // ← added
    service: "",
    aircraftType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",    // ← reset country
        service: "",
        aircraftType: "",
        timeline: "",
        budget: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: "Global Offices",
      details: [
        "India • Europe • United Kingdom",
        "Strategic presence across key aviation markets"
      ]
    },
    {
      icon: <Mail size={28} />,
      title: "Get In Touch",
      details: [
        "contact@aerofyn.com",
        "contact@aerofyn.com"
      ]
    }
  ];

  const responseTime = [
    { icon: <Clock size={20} />, text: "Initial response within 4 hours" },
    { icon: <CheckCircle size={20} />, text: "Detailed proposal within 24 hours" },
    { icon: <Briefcase size={20} />, text: "Dedicated account manager assigned" }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="professional-section">
        <div className="professional-content-container">
          <div style={{
            textAlign: 'center',
            padding: '120px 40px',
            background: 'var(--bg-secondary)',
            borderRadius: '16px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--gold-primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px'
            }}>
              <CheckCircle size={40} style={{ color: 'var(--navy-primary)' }} />
            </div>

            <h3 className="heading-1 mb-4" style={{ color: 'var(--navy-primary)' }}>
              Thank You for Your Interest!
            </h3>
            <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
              We've received your inquiry and will respond within 4 hours with a detailed consultation.
            </p>
            <p className="body-medium" style={{ color: 'var(--text-muted)' }}>
              Our aviation experts are already reviewing your requirements.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="professional-section">
      <div className="professional-content-container">
        <div className="text-center mb-16">
          <h2 className="display-medium mb-6">
            Start Your Aviation Journey
          </h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Ready to explore aviation opportunities? Connect with our experts for personalized 
            consultation and transparent guidance.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '80px' }}>
          {/* Contact Form */}
          <div className="slide-up">
            <div style={{
              padding: '40px',
              background: 'var(--bg-primary)',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h3 className="heading-1 mb-8" style={{ color: 'var(--navy-primary)' }}>
                Get Professional Consultation
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Personal Information */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  {/* Country dropdown (replaces Phone) */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: formData.country ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    >
                      <option value="" disabled>Select country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Aviation Specific Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: formData.service ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Aircraft Sales & Acquisitions">Aircraft Sales & Acquisitions</option>
                      <option value="Delivery & Entry-Into-Service">Delivery & Entry-Into-Service</option>
                      <option value="Compliance & Documentation">Compliance & Documentation</option>
                      <option value="Valuation & Market Intelligence">Valuation & Market Intelligence</option>
                      <option value="Aviation Insurance Consulting">Aviation Insurance Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Aircraft Type
                    </label>
                    <select
                      name="aircraftType"
                      value={formData.aircraftType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: formData.aircraftType ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    >
                      <option value="" disabled>Select aircraft type</option>
                      <option value="Business Jets">Business Jets</option>
                      <option value="Turboprops">Turboprops</option>
                      <option value="Helicopters">Helicopters</option>
                      <option value="Commercial Aircraft">Commercial Aircraft</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: formData.timeline ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    >
                      <option value="" disabled>Expected timeline</option>
                      <option value="Immediate (0-3 months)">Immediate (0-3 months)</option>
                      <option value="Short term (3-6 months)">Short term (3-6 months)</option>
                      <option value="Medium term (6-12 months)">Medium term (6-12 months)</option>
                      <option value="Long term (12+ months)">Long term (12+ months)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: 'var(--navy-primary)',
                      fontSize: '14px'
                    }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        border: '2px solid var(--border-light)',
                        borderRadius: '8px',
                        color: formData.budget ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    >
                      <option value="" disabled>Budget range</option>
                      <option value="Under $1M">Under $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $20M">$5M - $20M</option>
                      <option value="$20M - $50M">$20M - $50M</option>
                      <option value="Above $50M">Above $50M</option>
                      <option value="Confidential">Confidential</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: 'var(--navy-primary)',
                    fontSize: '14px'
                  }}>
                    Tell us about your requirements
                  </label>
                  <textarea
                    name="message"
                    placeholder="Share details about your aviation requirements, specific aircraft models of interest, operational needs, or any questions you may have..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--bg-secondary)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-12">
              <h3 className="heading-1 mb-8" style={{ color: 'var(--navy-primary)' }}>
                Connect With Our Experts
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} className="professional-card">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <div style={{
                        color: 'var(--gold-primary)',
                        padding: '16px',
                        background: 'var(--navy-primary)',
                        borderRadius: '12px'
                      }}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="heading-3 mb-3" style={{ color: 'var(--navy-primary)' }}>
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="body-medium" style={{
                            color: detailIndex === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                            marginBottom: '4px',
                            fontWeight: detailIndex === 0 ? '600' : '400'
                          }}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="professional-card-feature">
                <h4 className="heading-3 mb-6" style={{ color: 'var(--navy-primary)' }}>
                  Our Commitment to You
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {responseTime.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      background: 'var(--bg-primary)',
                      borderRadius: '8px'
                    }}>
                      <div style={{ color: 'var(--gold-primary)' }}>
                        {item.icon}
                      </div>
                      <span className="body-medium" style={{ fontWeight: '500' }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Section */}
              <div className="professional-card" style={{ marginTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    padding: '12px',
                    background: 'var(--gold-primary)',
                    borderRadius: '8px',
                    color: 'var(--navy-primary)'
                  }}>
                    <Briefcase size={24} />
                  </div>
                  <h4 className="heading-3">Join Our Team</h4>
                </div>

                <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Explore opportunities with a growing aviation advisory firm that values documentation
                  discipline and global excellence.
                </p>

                <p className="body-small" style={{
                  color: 'var(--gold-primary)',
                  fontWeight: '600'
                }}>
                  📧 contact@aerofyn.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder,
        textarea::placeholder,
        select {
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
