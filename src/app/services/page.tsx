import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';
import { 
  AgricultureIcon, 
  MiningIcon, 
  ConstructionIcon, 
  LogisticsIcon, 
  RetailIcon, 
  FoodIcon, 
  TelecomIcon, 
  CreativeIcon, 
  AdminIcon, 
  WarehouseIcon 
} from '../components/Icons';

const services = [
  {
    icon: <AgricultureIcon size={48} color="#2E7D32" />,
    title: "Agriculture & Forestry Services",
    description: "Crop production support (e.g., land preparation, irrigation systems), Animal production support (e.g., veterinary services, livestock care), Post-harvest activities (e.g., cleaning, packaging, storage), Seed processing for propagation, Forestry support services (e.g., reforestation, forest management)",
  },
  {
    icon: <MiningIcon size={48} color="#424242" />,
    title: "Mining & Quarrying Services",
    description: "Lignite mining, Stone, sand, and clay quarrying, Other mining & quarrying services (n.e.c.), Support services for mining operations (e.g., site surveying, logistics)"
  },
  {
    icon: <ConstructionIcon size={48} color="#1976D2" />,
    title: "Construction Services",
    description: "Building construction (residential, commercial), Road and infrastructure development, Civil engineering works, Material supply for construction (e.g., sand, stones, cement), Site preparation and excavation"
  },
  {
    icon: <LogisticsIcon size={48} color="#1565C0" />,
    title: "Logistics & Courier Services",
    description: "Courier delivery and transportation, Last-mile delivery for goods and documents"
  },
  {
    icon: <RetailIcon size={48} color="#FF6F00" />,
    title: "Wholesale & Supply Services",
    description: "Wholesale of agricultural raw materials & live animals, Wholesale of food, beverages & tobacco, Non-specialized wholesale trade, Retail of various goods (stores, markets, and online)"
  },
  {
    icon: <FoodIcon size={48} color="#D32F2F" />,
    title: "Food & Hospitality Services",
    description: "Restaurant and mobile food service, Catering and other food services"
  },
  {
    icon: <TelecomIcon size={48} color="#7B1FA2" />,
    title: "Telecommunication & IT Services",
    description: "Wireless telecommunications, Other telecom services (e.g., network setup), Information services & data solutions"
  },
  {
    icon: <CreativeIcon size={48} color="#C2185B" />,
    title: "Creative & Professional Services",
    description: "Graphic and brand design, Photography services, Scientific and technical consulting"
  },
  {
    icon: <AdminIcon size={48} color="#388E3C" />,
    title: "Administrative & Support Services",
    description: "General cleaning of buildings, Office support and document preparation, Photocopying and printing, Combined administrative service packages, Other business support services (customized B2B solutions)"
  },
  {
    icon: <WarehouseIcon size={48} color="#5D4037" />,
    title: "Renting Houses, Equipment & Vehicles",
    description: "Rental of residential and commercial houses, equipment leasing for construction and agriculture, vehicle rental services (cars, trucks, machinery), flexible short-term and long-term options, maintenance and support included."
  },
  {
    icon: <TelecomIcon size={48} color="#0288D1" />,
    title: "Software Development Solutions",
    description: "Custom software development, Web and mobile app solutions, IT consulting, System integration, Maintenance and support for digital platforms."
  },
  {
    icon: <ConstructionIcon size={48} color="#8D6E63" />,
    title: "Manufacturing Technology Services",
    description: "Automation and process optimization, Industrial equipment installation, Technology-driven manufacturing solutions, Maintenance and technical support for manufacturing operations."
  },
  {
    icon: <CreativeIcon size={48} color="#009688" />,
    title: "Business Analysis",
    description: "Business process analysis, Stakeholder interviews, Solution design, Strategic planning for business growth, Market and competitor analysis."
  },
  {
    icon: <AdminIcon size={48} color="#00BCD4" />,
    title: "Project Requirement Analysis",
    description: "Requirements gathering and documentation, Project scoping and feasibility studies, Functional and technical specifications, User stories and acceptance criteria, Collaboration with stakeholders."
  }
];

export default function Services() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(16px, 4vw, 24px)', paddingTop: 120 }}>
      <Navbar />
      
      <FadeIn delay={0.2}>
        <h1 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold', marginBottom: '2rem', padding: '0 16px' }}>Our Services</h1>
      </FadeIn>
      
      <FadeIn delay={0.4}>
        <p style={{ textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#666', marginBottom: '3rem', padding: '0 16px' }}>
          UNIQUE FORM BUSINESS COMPANY Ltd operates across 28 sectors. Here are our comprehensive services:
        </p>
      </FadeIn>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '24px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={0.6 + index * 0.1}>
            <div style={{
              background: '#f8f9fa',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }} className="service-card">
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '16px',
                transition: 'transform 0.3s ease'
              }} className="service-icon">
                {service.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '12px',
                color: '#1a237e'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#555', 
                lineHeight: '1.5',
                textAlign: 'left',
                flex: 1
              }}>
                {service.description}
              </p>

            </div>
          </FadeIn>
        ))}
      </div>
      
    </main>
  );
} 