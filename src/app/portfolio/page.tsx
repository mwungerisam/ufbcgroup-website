'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  longDescription?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Construction",
    description: "State-of-the-art office complex featuring sustainable design, smart building technology, and premium office spaces.",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80",
    longDescription: "A LEED Gold certified office complex designed with sustainable materials, energy-efficient systems, and modern amenities. Features include smart climate control, solar panel integration, and premium office spaces that prioritize employee wellbeing and productivity."
  },
  {
    id: 2,
    title: "Agricultural Innovation Facility",
    category: "Agriculture",
    description: "Comprehensive agricultural facility combining modern farming techniques with advanced irrigation and climate-controlled systems.",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80",
    longDescription: "An innovative agricultural hub integrating precision farming, IoT sensors, automated irrigation systems, and climate-controlled greenhouses. This facility demonstrates cutting-edge agricultural technology while maintaining sustainable practices."
  },
  {
    id: 3,
    title: "Digital Infrastructure Network",
    category: "Technology",
    description: "Digital infrastructure project connecting regions with high-speed fiber optic networks and wireless solutions.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    longDescription: "Comprehensive digital infrastructure deployment featuring high-speed fiber optic networks, wireless communication towers, and data center facilities. This project brings advanced connectivity solutions to enhance business operations and digital transformation."
  },
  {
    id: 4,
    title: "Logistics Distribution Hub",
    category: "Logistics",
    description: "Modern logistics hub with automated sorting, climate-controlled storage, and real-time tracking systems.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    longDescription: "A state-of-the-art logistics facility featuring automated sorting systems, climate-controlled warehouses, and integrated real-time tracking technology. Designed to optimize supply chain operations with maximum efficiency and accuracy."
  },
  {
    id: 5,
    title: "Creative Arts Complex",
    category: "Professional Services",
    description: "Multi-purpose creative facility with design studios, photography labs, exhibition spaces, and professional training centers.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80",
    longDescription: "A comprehensive creative complex housing design studios, photography labs, exhibition galleries, and professional training facilities. This space fosters innovation and supports creative professionals with state-of-the-art equipment and collaborative environments."
  },
  {
    id: 6,
    title: "Food Processing Plant",
    category: "Food Services",
    description: "Food processing facility specializing in local agricultural products, advanced equipment, and export certification standards.",
    imageUrl: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop&q=80",
    longDescription: "Modern food processing facility equipped with advanced processing machinery, quality control systems, and export certification capabilities. The facility processes local agricultural products while maintaining the highest standards of food safety and quality."
  },
  {
    id: 7,
    title: "Enterprise ERP System",
    category: "Technology",
    description: "Custom ERP software deployment integrating inventory, HR, and finance modules for seamless business operations.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    longDescription: "Comprehensive enterprise resource planning system implementation featuring integrated modules for inventory management, human resources, financial accounting, and customer relationship management. Custom-tailored to optimize business processes."
  },
  {
    id: 8,
    title: "Smart Automation Systems",
    category: "Technology",
    description: "Smart automation for food packaging with IoT sensors, predictive maintenance, and quality assurance systems.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
    longDescription: "Advanced automation solution incorporating IoT sensors, machine learning algorithms, and predictive maintenance capabilities. The system optimizes packaging operations while ensuring quality control and reducing operational costs."
  },
  {
    id: 9,
    title: "Sustainable Residential Development",
    category: "Construction",
    description: "Eco-friendly residential complex featuring solar energy systems, rainwater harvesting, and sustainable building practices.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    longDescription: "Environmentally conscious residential development integrating solar panel systems, rainwater harvesting, waste management solutions, and sustainable building materials. Designed to minimize environmental impact while providing modern living spaces."
  },
  {
    id: 10,
    title: "Industrial Quarry Operations",
    category: "Mining & Quarrying",
    description: "Modernized quarry facility with advanced crushing, screening, and haulage systems for efficient material extraction.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80",
    longDescription: "Upgraded quarry operations featuring state-of-the-art crushing equipment, automated screening systems, and optimized haulage operations. The facility maintains high safety standards while maximizing production efficiency and environmental compliance."
  }
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedItem]);

  return (
    <main style={{ paddingTop: 120, minHeight: '100vh', background: '#000000' }}>
      <Navbar />
      
      <FadeIn delay={0.2}>
        <header style={{ 
          textAlign: 'center', 
          margin: '3rem 0 4rem',
          padding: '0 24px'
        }}>
          <h1 style={{ 
            color: '#ffffff', 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Our Portfolio
          </h1>
          <p style={{ 
            maxWidth: 700, 
            margin: '0 auto', 
            color: '#a1a1aa',
            fontSize: '1.125rem',
            lineHeight: 1.6
          }}>
            Showcasing excellence across multiple sectors with innovative solutions and professional execution
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section style={{ 
          maxWidth: 1400, 
          margin: '0 auto', 
          padding: '0 24px 4rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {portfolioItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(26, 35, 126, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
              >
                <div 
                  className="portfolio-image-container"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    background: '#e2e8f0'
                  }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(26, 35, 126, 0.9)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {item.category}
                  </div>
                </div>
                
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    color: '#1A237E',
                    marginBottom: '12px',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                  <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#1A237E',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}>
                    View Details
                    <span style={{ marginLeft: '8px', fontSize: '1.2em' }}>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '24px',
            overflow: 'auto'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: '#1A237E',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="900px"
              />
            </div>
            
            <div style={{ padding: '40px' }}>
              <div style={{
                background: '#1A237E',
                color: '#fff',
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                {selectedItem.category}
              </div>
              
              <h2 style={{
                color: '#1A237E',
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '16px',
                lineHeight: 1.2
              }}>
                {selectedItem.title}
              </h2>
              
              <p style={{
                color: '#475569',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                {selectedItem.description}
              </p>
              
              {selectedItem.longDescription && (
                <p style={{
                  color: '#64748b',
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}>
                  {selectedItem.longDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
