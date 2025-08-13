import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`professional-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="professional-content-container">
        <div className="flex-between">
          <a href="/" className="professional-logo-text">
            <img 
              src="/logo copy.png" 
              alt="AeroFyn" 
              className="professional-logo"
            />
            AeroFyn
          </a>
          
          <nav className="professional-nav">
            <a 
              href="#services" 
              className="professional-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="professional-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className="professional-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
            >
              Portfolio
            </a>
            <a 
              href="#process" 
              className="professional-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('process');
              }}
            >
              Process
            </a>
            <a 
              href="#contact" 
              className="professional-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--navy-primary)',
              cursor: 'pointer'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-6 shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              {['services', 'about', 'portfolio', 'process', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className="professional-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  style={{ fontSize: '18px', padding: '12px 0', textTransform: 'capitalize' }}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;