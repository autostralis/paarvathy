import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import QuickFacts from "./QuickFacts";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="professional-container">
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider"></div>
        <QuickFacts />
        <div className="section-divider"></div>
        <AboutSection />
        <div className="section-divider"></div>
        <ServicesSection />
        <div className="section-divider"></div>
        <PortfolioSection />
        <div className="section-divider"></div>
        <ProcessSection />
        <div className="section-divider"></div>
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;