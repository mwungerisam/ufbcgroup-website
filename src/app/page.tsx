import Image from 'next/image';
import Navbar from './components/Navbar';
import FadeIn from './components/FadeIn';
import { 
  AgricultureIcon, 
  ConstructionIcon, 
  MiningIcon, 
  RetailIcon, 
  LogisticsIcon, 
  FoodIcon, 
  TelecomIcon, 
  CreativeIcon, 
  AdminIcon 
} from './components/Icons';

const sectors = [
  {
    icon: <AgricultureIcon size={48} color="#2E7D32" />,
    title: "Agriculture & Forestry",
    description: "Crop & animal production support, post-harvest & seed processing, forestry services",
    codes: "A0161, A0162, A0163, A0164, A0240"
  },
  {
    icon: <ConstructionIcon size={48} color="#1976D2" />,
    title: "Construction",
    description: "Civil works, material supply, and structural design",
    codes: "—"
  },
  {
    icon: <MiningIcon size={48} color="#424242" />,
    title: "Mining & Quarrying",
    description: "Lignite mining, quarrying, other support",
    codes: "B0520, B0810, B0899, B0990"
  },
  {
    icon: <RetailIcon size={48} color="#FF6F00" />,
    title: "Wholesale & Retail",
    description: "Agricultural, food & tobacco trade, non-specialized wholesale/retail",
    codes: "G4620, G4630, G4690, G4719, G4799"
  },
  {
    icon: <LogisticsIcon size={48} color="#1565C0" />,
    title: "Logistics",
    description: "Courier services",
    codes: "H5320"
  },
  {
    icon: <FoodIcon size={48} color="#D32F2F" />,
    title: "Food Services",
    description: "Restaurants, mobile food, catering",
    codes: "I5610, I5629"
  },
  {
    icon: <TelecomIcon size={48} color="#7B1FA2" />,
    title: "Telecom & IT",
    description: "Wireless, general telecom, info services",
    codes: "J6120, J6190, J6329"
  },
  {
    icon: <CreativeIcon size={48} color="#C2185B" />,
    title: "Creative & Professional Services",
    description: "Design, photography, technical consulting",
    codes: "M7410, M7420, M7490"
  },
  {
    icon: <AdminIcon size={48} color="#388E3C" />,
    title: "Admin & Support Services",
    description: "Cleaning, office support, photocopying",
    codes: "N8121, N8211, N8219, N8299"
  }
];

export default function Home() {
  return (
    <main style={{ paddingTop: 120, minHeight: '100vh', background: '#000' }}>
      <Navbar />

      <FadeIn delay={0.2}>
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: 'clamp(32px, 6vw, 64px) 0', padding: '0 24px' }} className="hero-header">
          <Image
            src="/logo.svg"
            alt="UNIQUE FORM BUSINESS COMPANY Ltd Logo"
            width={120}
            height={120}
            priority
            style={{ display: 'block', margin: '0 auto clamp(16px, 3vw, 24px)', width: 'clamp(100px, 15vw, 160px)', height: 'clamp(100px, 15vw, 160px)', objectFit: 'contain' }}
          />
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: 12, textShadow: '0 2px 8px rgba(26,35,126,0.10)', letterSpacing: '-0.5px', lineHeight: 1.2, maxWidth: '900px', margin: '0 auto 12px' }}>UNIQUE FORM BUSINESS COMPANY Ltd</h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.375rem)', color: '#b0b3b8', marginBottom: 8, maxWidth: '700px', margin: '0 auto', lineHeight: 1.5 }}>Multi-sectoral expertise in Rwanda</p>
        </header>
      </FadeIn>

      {/* Commitment Message Section */}
      <FadeIn delay={0.3}>
        <section style={{
          background: 'linear-gradient(90deg, #1976D2 0%, #388E3C 100%)',
          color: '#fff',
          borderRadius: 'clamp(12px, 2vw, 20px)',
          maxWidth: '1000px',
          margin: 'clamp(32px, 5vw, 48px) auto',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 6px 30px rgba(26,35,126,0.15)',
          fontWeight: 500,
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          textAlign: 'center',
          letterSpacing: '0.01em',
          lineHeight: 1.6,
          width: 'calc(100% - 48px)'
        }} className="commitment-section">
          UNIQUE FORM BUSINESS COMPANY Ltd is committed to serving <span style={{fontWeight:700, textDecoration:'underline', textUnderlineOffset: '3px'}}>all clients equally</span> — whether it's a major construction contract, a large mining operation, a small retail delivery, or farming support. <br className="commitment-break" /><br className="commitment-break" />
          <span style={{fontWeight:600}}>No job is too big or too small:</span> We deliver high-level corporate solutions as well as community-based services, showing flexibility and dedication to every project size.
        </section>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(16px, 4vw, 40px) 24px' }} className="sectors-section">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 40px)', letterSpacing: '0.3px' }}>Our Business Sectors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 3vw, 32px)', maxWidth: '1200px', margin: '0 auto' }}>
            {sectors.map((sector, index) => (
              <FadeIn key={sector.title} delay={0.6 + index * 0.1}>
                <div style={{ background: '#f8fafc', borderRadius: 'clamp(12px, 2vw, 20px)', padding: 'clamp(20px, 3vw, 28px)', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'all 0.3s ease', border: '1px solid #e5e7eb' }} className="sector-card">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                    {sector.icon}
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 700, color: '#000', marginBottom: 12, letterSpacing: '0.2px' }}>{sector.title}</h3>
                  <p style={{ color: '#444', fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: 8, lineHeight: 1.5 }}>{sector.description}</p>
                  <div style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)', color: '#666', marginTop: 12, paddingTop: 12, borderTop: '1px solid #e5e7eb' }}>
                    <strong>Codes:</strong> {sector.codes}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Testimonials Section with Real Client Stories */}
      <section style={{ maxWidth: 1400, margin: 'clamp(40px, 8vw, 80px) auto', padding: '0 24px' }} className="testimonials-section">
  <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 16, letterSpacing: '0.5px' }}>Testimonials</h2>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap', gap: '8px' }}>
  {[...Array(5)].map((_, i) => (
    <svg key={i} width="clamp(20px, 4vw, 28px)" height="clamp(20px, 4vw, 28px)" viewBox="0 0 20 20" fill="#FFD700" style={{ marginRight: 2 }}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
  ))}
  <span style={{ marginLeft: 12, fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)', fontWeight: 600, color: '#FFD700' }}>+230 reviews</span>
</div>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto', justifyContent: 'center' }} className="testimonials-grid">
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="testimonial-card">
      <div style={{ width: 'clamp(52px, 8vw, 64px)', height: 'clamp(52px, 8vw, 64px)', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)' }}>JU</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center', gap: '2px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="clamp(18px, 2.5vw, 22px)" height="clamp(18px, 2.5vw, 22px)" viewBox="0 0 20 20" fill="#FFD700"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        ))}
      </div>
      <div style={{ color: '#1f2937', fontStyle: 'italic', marginBottom: 16, textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, fontWeight: 400 }}>
        "UFBC's professionalism and innovative approach have transformed our agro operations. Their expertise is unmatched in Rwanda."
      </div>
      <div style={{ color: '#111', fontWeight: 700, marginTop: 12, fontSize: 'clamp(1rem, 2vw, 1.1rem)', letterSpacing: '0.3px' }}>Jean Marie Uwimana</div>
      <div style={{ color: '#6b7280', fontSize: 'clamp(0.85rem, 1.8vw, 0.9375rem)', marginTop: '4px' }}>Director, Kigali EAgro Solutions</div>
    </div>
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="testimonial-card">
      <div style={{ width: 'clamp(52px, 8vw, 64px)', height: 'clamp(52px, 8vw, 64px)', borderRadius: '50%', background: '#f59e42', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)' }}>RJ</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center', gap: '2px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="clamp(18px, 2.5vw, 22px)" height="clamp(18px, 2.5vw, 22px)" viewBox="0 0 20 20" fill="#FFD700"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        ))}
      </div>
      <div style={{ color: '#1f2937', fontStyle: 'italic', marginBottom: 16, textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, fontWeight: 400 }}>
        "UFBC has been instrumental in supporting Tabagwe High School by providing quality food supplies and essential school materials. Their reliability and commitment to education are truly commendable."
      </div>
      <div style={{ color: '#111', fontWeight: 700, marginTop: 12, fontSize: 'clamp(1rem, 2vw, 1.1rem)', letterSpacing: '0.3px' }}>Rurangwa Joseph</div>
      <div style={{ color: '#6b7280', fontSize: 'clamp(0.85rem, 1.8vw, 0.9375rem)', marginTop: '4px' }}>Headmaster, Tabagwe High School</div>
    </div>
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="testimonial-card">
      <div style={{ width: 'clamp(52px, 8vw, 64px)', height: 'clamp(52px, 8vw, 64px)', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)' }}>AK</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center', gap: '2px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="clamp(18px, 2.5vw, 22px)" height="clamp(18px, 2.5vw, 22px)" viewBox="0 0 20 20" fill="#FFD700"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        ))}
      </div>
      <div style={{ color: '#1f2937', fontStyle: 'italic', marginBottom: 16, textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, fontWeight: 400 }}>
        "UFBC's integrated solutions and support have greatly advanced Rwanda's fertiliser sector. Highly recommended for any partnership."
      </div>
      <div style={{ color: '#111', fontWeight: 700, marginTop: 12, fontSize: 'clamp(1rem, 2vw, 1.1rem)', letterSpacing: '0.3px' }}>Anass KHANCHOUFI</div>
      <div style={{ color: '#6b7280', fontSize: 'clamp(0.85rem, 1.8vw, 0.9375rem)', marginTop: '4px' }}>Leader, Rwanda Fertiliser Company</div>
    </div>
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="testimonial-card">
      <div style={{ width: 'clamp(52px, 8vw, 64px)', height: 'clamp(52px, 8vw, 64px)', borderRadius: '50%', background: '#a21caf', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)' }}>AM</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center', gap: '2px' }}>
        {[...Array(4)].map((_, i) => (
          <svg key={i} width="clamp(18px, 2.5vw, 22px)" height="clamp(18px, 2.5vw, 22px)" viewBox="0 0 20 20" fill="#FFD700"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        ))}
      </div>
      <div style={{ color: '#1f2937', fontStyle: 'italic', marginBottom: 16, textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, fontWeight: 400 }}>
        "UFBC's support for our logistics operations has been seamless and reliable. Their team is always responsive."
      </div>
      <div style={{ color: '#111', fontWeight: 700, marginTop: 12, fontSize: 'clamp(1rem, 2vw, 1.1rem)', letterSpacing: '0.3px' }}>Alice Mukamana</div>
      <div style={{ color: '#6b7280', fontSize: 'clamp(0.85rem, 1.8vw, 0.9375rem)', marginTop: '4px' }}>Logistics Manager, East Africa Exports</div>
    </div>
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="testimonial-card">
      <div style={{ width: 'clamp(52px, 8vw, 64px)', height: 'clamp(52px, 8vw, 64px)', borderRadius: '50%', background: '#eab308', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)' }}>EN</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', justifyContent: 'center', gap: '2px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="clamp(18px, 2.5vw, 22px)" height="clamp(18px, 2.5vw, 22px)" viewBox="0 0 20 20" fill="#FFD700"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        ))}
      </div>
      <div style={{ color: '#1f2937', fontStyle: 'italic', marginBottom: 16, textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.6, fontWeight: 400 }}>
        "I appreciate UFBC's dedication to quality and detail in every construction project."
      </div>
      <div style={{ color: '#111', fontWeight: 700, marginTop: 12, fontSize: 'clamp(1rem, 2vw, 1.1rem)', letterSpacing: '0.3px' }}>Eric Niyonzima</div>
      <div style={{ color: '#6b7280', fontSize: 'clamp(0.85rem, 1.8vw, 0.9375rem)', marginTop: '4px' }}>Civil Engineer, Kigali Builders</div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <FadeIn delay={1.4}>
        <section style={{ maxWidth: 1000, margin: 'clamp(48px, 8vw, 80px) auto', padding: '0 clamp(16px, 4vw, 40px)' }} className="faq-section">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)', letterSpacing: '0.3px' }}>Frequently Asked Questions</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} className="faq-card">
              <h3 style={{ color: '#1A237E', marginBottom: 12, fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.2px' }}>
                What sectors does UFBC operate in?
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                UFBC operates across 9 major sectors: Agriculture & Forestry, Construction, Mining & Quarrying, 
                Wholesale & Retail, Logistics, Food Services, Telecom & IT, Creative & Professional Services, 
                and Admin & Support Services. This multi-sectoral approach allows us to provide comprehensive 
                solutions for diverse business needs.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} className="faq-card">
              <h3 style={{ color: '#1A237E', marginBottom: 12, fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.2px' }}>
                How can I get started with UFBC services?
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                Getting started is easy! You can contact us through our website, call our office directly, 
                or visit us in Kigali. We'll schedule a consultation to understand your specific needs and 
                provide a tailored solution. Our team will guide you through the entire process from 
                initial planning to project completion.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} className="faq-card">
              <h3 style={{ color: '#1A237E', marginBottom: 12, fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.2px' }}>
                Do you work with international clients?
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                Yes, we work with both local and international clients. Our logistics and export services 
                facilitate trade across East Africa and beyond. We have experience with international 
                standards and certifications, making us an ideal partner for businesses looking to 
                expand into the Rwandan and East African markets.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} className="faq-card">
              <h3 style={{ color: '#1A237E', marginBottom: 12, fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.2px' }}>
                What makes UFBC different from other companies?
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                Our multi-sectoral expertise, local knowledge, and commitment to sustainable development 
                set us apart. We combine international best practices with deep understanding of local 
                markets and regulations. Our integrated approach means clients can access multiple 
                services through one trusted partner, ensuring consistency and efficiency.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} className="faq-card">
              <h3 style={{ color: '#1A237E', marginBottom: 12, fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.2px' }}>
                How do you ensure quality in your projects?
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                Quality is our top priority. We maintain strict quality control processes, use certified 
                materials and equipment, and employ qualified professionals. All our projects follow 
                international standards and local regulations. We provide regular updates and maintain 
                open communication throughout the project lifecycle.
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }} className="faq-card">
              <h3 style={{ color: '#1A237E', marginBottom: 12, fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, letterSpacing: '0.2px' }}>
                What support do you provide after project completion?
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                We provide comprehensive post-project support including maintenance services, training 
                for your team, technical support, and ongoing consultation. Our relationship doesn't 
                end when the project is complete - we're committed to your long-term success and 
                available for any questions or additional needs.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
