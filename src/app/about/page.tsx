import Navbar from '../components/Navbar';

export default function About() {
  return (
    <main style={{ paddingTop: 120, minHeight: '100vh', background: '#000' }} className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col items-center" style={{ background: '#000000', border: '1px solid #1a1a1a', padding: 'clamp(20px, 4vw, 40px)', margin: '0 16px' }}>

      <Navbar />
      <section className="mb-8 w-full flex flex-col items-center text-center">
        <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: 24, textAlign: 'center', textShadow: '0 2px 8px rgba(26,35,126,0.10)', letterSpacing: '-1px' }}>
          About UNIQUE FORM BUSINESS COMPANY Ltd
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: '#e5e5e5', marginTop: 32, marginBottom: 16, maxWidth: 600, textAlign: 'center' }}>
          <strong style={{ color: '#fff' }}>UNIQUE FORM BUSINESS COMPANY Ltd (UFBC)</strong> is a fully registered, multi-sectoral enterprise headquartered in Kigali, Rwanda. Operating across 28 diverse sectors, UFBC delivers expert solutions in agriculture, mining, telecommunications, wholesale, logistics, food services, administrative support, creative services, construction, and more.
        </p>
      </section>
      <section className="mb-8">
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 24 }}>Our Mission</h2>
        <p style={{ color: '#e5e5e5', fontSize: 16 }}>
          To drive sustainable growth and innovation across Rwanda and beyond by delivering exceptional, integrated solutions in every sector we serve.
        </p>
      </section>
      <section className="mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 24 }}>Our Vision</h2>
        <p style={{ color: '#e5e5e5', fontSize: 16 }}>
          To be the leading multi-sectoral business partner, renowned for integrity, excellence, and transformative impact in Africa.
        </p>
      </section>
      <section className="mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 24 }}>Our Core Values</h2>
        <ul style={{ listStyle: 'disc', color: '#e5e5e5', textAlign: 'center', maxWidth: 600, margin: '0 auto', fontSize: 16 }}>
          <li><strong style={{ color: '#fff' }}>Integrity:</strong> We uphold the highest standards of ethics and transparency in all our operations.</li>
          <li><strong style={{ color: '#fff' }}>Excellence:</strong> We strive for quality and continuous improvement in every project.</li>
          <li><strong style={{ color: '#fff' }}>Innovation:</strong> We embrace creativity and forward-thinking solutions.</li>
          <li><strong style={{ color: '#fff' }}>Collaboration:</strong> We believe in teamwork and strong partnerships with our clients and communities.</li>
          <li><strong style={{ color: '#fff' }}>Sustainability:</strong> We are committed to responsible and impactful growth.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 24 }}>Registration & Compliance</h2>
        <ul style={{ color: '#e5e5e5', textAlign: 'center', maxWidth: 600, margin: '0 auto', fontSize: 16 }}>
          <li><strong style={{ color: '#fff' }}>Registration Certificate (RC):</strong> 108584133 / 473161</li>
          <li><strong style={{ color: '#fff' }}>Tax Identification Number (TIN):</strong> 108584133</li>
          <li><strong style={{ color: '#fff' }}>Compliance:</strong> Fully compliant with all Rwandan business and tax regulations</li>
        </ul>
      </section>
      <section className="mb-8 w-full flex flex-col items-center text-center">
        <p style={{ color: '#e5e5e5', textAlign: 'center', maxWidth: 600, margin: '0 auto', fontSize: 16 }}>
          For official documentation, partnership opportunities, or further information, please contact us. We are committed to transparency, integrity, and excellence in every sector we serve.
        </p>
      </section>
      <section className="mb-8">
        <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 24 }}>Companies We Have Invested In</h2>
        <ul style={{ listStyle: 'disc', color: '#e5e5e5', textAlign: 'center', maxWidth: 600, margin: '0 auto', fontSize: 16 }}>
          <li><strong style={{ color: '#fff' }}>MJ & SONS COMPANY Ltd</strong></li>
          <li><strong style={{ color: '#fff' }}>KANANI RESTAURANT</strong></li>
          <li><strong style={{ color: '#fff' }}>TOP CONSTRUCTION AND SUPPLY COMPANY Ltd</strong></li>
        </ul>
      </section>
      <section className="mb-8 w-full flex flex-col items-center text-center mt-8">
        <p style={{ color: '#e5e5e5', fontWeight: 500, textAlign: 'center', marginBottom: 8 }}>Scan our QR code to visit our website:</p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=svg&data=https%3A%2F%2Fufbcgroup.com"
          alt="QR code for https://ufbcgroup.com"
          width={150}
          height={150}
          loading="lazy"
          decoding="async"
          className="rounded shadow mx-auto"
          style={{ width: 150, height: 150 }}
        />
      </section>
          </div>
    </main>
  );
}