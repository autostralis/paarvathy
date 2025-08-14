// Mock data for AeroFyn Aviation Advisory website
// This file contains static data to simulate backend responses during development

export const mockData = {
  company: {
    name: "AeroFyn",
    tagline: "Global Aviation Advisory & Transaction Services",
    description: "Delivers trusted, transparent aircraft sales, leasing, and compliance solutions — connecting India, Europe, and emerging markets with world-class aviation expertise.",
    website: "www.aerofyn.com",
    email: "contact@aerofyn.com",
    careers_email: "careers@aerofyn.com",
    phone: "", // (Your Number Here)
    locations: ["India", "Europe", "UK"]
  },

  services: [
    {
      id: 1,
      title: "Aircraft Sales & Acquisitions",
      description: "Complete buyer representation and seller mandate services",
      details: [
        "Buyer representation or exclusive seller mandate",
        "Mission fit, market scan, shortlist & site visits", 
        "Offer strategy, LOI, escrow coordination & PSA support",
        "Pre‑purchase inspection planning and oversight with independent OEM/MRO partners",
        "Closing, acceptance, delivery flight & handover"
      ]
    },
    {
      id: 2,
      title: "Delivery & Entry‑Into‑Service",
      description: "Comprehensive delivery and service entry management",
      details: [
        "PPI slotting with independent MROs or OEM service centers",
        "Ferry planning, permits, crew & insurance",
        "Records review, DGCA/EASA conformity checks, customs brokerage", 
        "Initial CAMO liaison or operator onboarding"
      ]
    },
    {
      id: 3,
      title: "Compliance & Documentation Advisory",
      description: "Regulatory compliance and documentation management",
      details: [
        "DGCA/EASA/FAA pathway mapping for registration & operations",
        "AD/SB status review, life‑limited parts tracking",
        "Secure digitization & indexing of logbooks",
        "Audit readiness and regulatory gap closure actions"
      ]
    },
    {
      id: 4,
      title: "Valuation & Market Intelligence",
      description: "Data-driven market analysis and valuation services",
      details: [
        "Comparable sales, inventory scans & time‑on‑market analytics",
        "Utilization modeling & cost-of-ownership estimates",
        "Residual value projections for owners & lessors",
        "Quarterly policy watch on import/export rules and tax impacts"
      ]
    },
    {
      id: 5,
      title: "Aviation Insurance Consulting",
      description: "Comprehensive insurance advisory and support",
      details: [
        "Hull & liability policy advisory",
        "Risk assessment & claims support"
      ]
    }
  ],

  quickFacts: [
    "Registered in India | Virtual Offices in UK & Estonia",
    "15+ years in aerospace academia & aviation research",
    "Serving private owners, operators, OEM brokers, and institutions",
    "IADA‑style ethics: transparency, disclosure, and fiduciary duty",
    "Transactions closed in as little as 9 weeks with clean export docs"
  ],

  whyChooseUs: [
    {
      title: "Founder-Led Expertise",
      description: "Every transaction personally overseen by Manikandan Ranganathan, aerospace veteran with a deep global network."
    },
    {
      title: "Global Reach", 
      description: "Strategic presence in India, UK, and Estonia; alliances in EU, UAE, SE Asia."
    },
    {
      title: "Compliance First",
      description: "Full adherence to DGCA, FAA, and EASA requirements."
    },
    {
      title: "Technical + Commercial Balance",
      description: "Detailed inspections matched with strong negotiation strategy."
    },
    {
      title: "Documentation Discipline",
      description: "Standardized, audit‑ready records every time."
    }
  ],

  marketsServed: [
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
  ],

  processSteps: [
    {
      number: "01",
      title: "Discovery & Requirements",
      description: "Mission profile, budget, ownership timeline, and constraints."
    },
    {
      number: "02", 
      title: "Market Scan & Shortlist",
      description: "On/off-market inventory search across global channels."
    },
    {
      number: "03",
      title: "Due Diligence",
      description: "Records review, inspection slotting, and independent MRO evaluations."
    },
    {
      number: "04",
      title: "Negotiation & Documentation", 
      description: "LOI, PSA, escrow setup; risk-aligned deal structure."
    },
    {
      number: "05",
      title: "Delivery & Compliance",
      description: "Ferry, customs, registration, and handover pack."
    },
    {
      number: "06",
      title: "Post‑Delivery Support",
      description: "Regulatory filings, archival of records, CAMO/MRO onboarding."
    }
  ],

  vision: "To be the most agile and client‑trusted aviation transaction partner in emerging and mature markets alike — transforming the global aircraft sales experience through knowledge, transparency, and dedication.",

  mission: [
    "Deliver seamless aircraft transactions",
    "Offer comprehensive consulting services",
    "Build long-term partnerships", 
    "Maintain confidentiality, compliance, and professionalism"
  ],

  careers: {
    openings: [
      {
        title: "Business Development & Client Relations",
        location: "Remote – India/EU",
        type: "Full-time"
      },
      {
        title: "Technical Documentation Associate", 
        location: "Chennai – Hybrid",
        type: "Full-time"
      }
    ]
  },

  // Mock form submission handler
  submitContactForm: (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock form submission:", formData);
        resolve({
          success: true,
          message: "Thank you for your inquiry! We'll get back to you within 24 hours."
        });
      }, 1000);
    });
  },

  // Mock newsletter subscription
  subscribeNewsletter: (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock newsletter subscription:", email);
        resolve({
          success: true,
          message: "Successfully subscribed to our newsletter!"
        });
      }, 500);
    });
  }
};

export default mockData;
