export const siteConfig = {
  // Basic Information
  name: "UNIQUE FORM BUSINESS COMPANY Ltd",
  shortName: "UFBC",
  description: "Leading multi-sectoral company in Rwanda offering comprehensive business solutions across 9 sectors including Agriculture, Construction, Logistics, and Technology.",
  
  // URLs
  url: "https://ufbcgroup.com",
  ogImage: "/logo.svg",
  
  // Contact Information
  contact: {
    phone: "+250 783 654 015",
    email: "ufbcltd@gmail.com",
    address: "Kigali, Rwanda",
    businessHours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 3:00 PM",
      sunday: "Closed"
    }
  },
  
  // Social Media
  social: {
  // linkedin: "https://www.linkedin.com/company/uniqueform-business", // removed
    instagram: "https://www.instagram.com/uniqueform_business",
    facebook: "https://www.facebook.com/uniqueformbusiness"
  },
  
  // Business Sectors
  sectors: [
    {
      name: "Agriculture & Forestry",
      code: "A0161, A0162, A0163, A0164, A0240",
      description: "Crop & animal production support, post-harvest & seed processing, forestry services",
      color: "#2E7D32"
    },
    {
      name: "Construction",
      code: "—",
      description: "Civil works, material supply, and structural design",
      color: "#1976D2"
    },
    {
      name: "Mining & Quarrying",
      code: "B0520, B0810, B0899, B0990",
      description: "Lignite mining, quarrying, other support",
      color: "#424242"
    },
    {
      name: "Wholesale & Retail",
      code: "G4620, G4630, G4690, G4719, G4799",
      description: "Agricultural, food & tobacco trade, non-specialized wholesale/retail",
      color: "#FF6F00"
    },
    {
      name: "Logistics",
      code: "H5320",
      description: "Courier services",
      color: "#1565C0"
    },
    {
      name: "Food Services",
      code: "I5610, I5629",
      description: "Restaurants, mobile food, catering",
      color: "#D32F2F"
    },
    {
      name: "Telecom & IT",
      code: "J6120, J6190, J6329",
      description: "Wireless, general telecom, info services",
      color: "#7B1FA2"
    },
    {
      name: "Creative & Professional Services",
      code: "M7410, M7420, M7490",
      description: "Design, photography, technical consulting",
      color: "#C2185B"
    },
    {
      name: "Admin & Support Services",
      code: "N8121, N8211, N8219, N8299",
      description: "Cleaning, office support, photocopying",
      color: "#388E3C"
    }
  ],
  
  // SEO Configuration
  seo: {
    titleTemplate: "%s | UNIQUE FORM BUSINESS COMPANY Ltd",
    defaultTitle: "UNIQUE FORM BUSINESS COMPANY Ltd - Multi-sectoral Business Solutions in Rwanda",
    additionalMetaTags: [
      {
        name: "keywords",
        content: "Rwanda business, multi-sectoral company, agriculture Rwanda, construction Rwanda, logistics East Africa, telecom services, food processing, mining services, retail solutions, professional services"
      }
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  },
  
  // Analytics Configuration
  analytics: {
    googleAnalyticsId: "GA_MEASUREMENT_ID", // Replace with your actual GA ID
    googleTagManagerId: "GTM-XXXXXXX" // Replace with your actual GTM ID
  },
  
  // Email Configuration
  email: {
    // Formspree Configuration
    formspree: {
      endpoint: "https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree endpoint
    },
    // EmailJS Configuration
    emailjs: {
      serviceId: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      userId: "YOUR_USER_ID" // Replace with your EmailJS user ID
    }
  },
  
  // Performance Configuration
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    preloadCriticalResources: true
  }
};

export type SiteConfig = typeof siteConfig; 