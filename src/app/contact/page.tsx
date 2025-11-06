'use client';

import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faIdCard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';

function FeedbackWithCopy() {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null, message?: string, userMessage?: string }>({ type: null });

  return (
    <>
      <div aria-live="polite" style={{ minHeight: 32, marginBottom: 8 }}>
        {feedback.type === 'success' && (
          <div style={{ color: '#43A047', display: 'flex', alignItems: 'center', gap: 12 }}>
            {feedback.message || 'Your message has been sent!'}
            <button
              style={{
                background: '#1A237E',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '4px 14px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
              onClick={() => {
                if (feedback.userMessage) {
                  navigator.clipboard.writeText(feedback.userMessage);
                  alert('Message copied to clipboard!');
                }
              }}
              disabled={!feedback.userMessage}
            >
              Keep a copy
            </button>
          </div>
        )}
        {feedback.type === 'error' && (
          <div style={{ color: '#D32F2F' }}>There was an error sending your message.</div>
        )}
      </div>
      <ContactForm 
        onSuccess={(userMessage: string) => setFeedback({ type: 'success', message: 'Your message has been sent!', userMessage })}
        onError={() => setFeedback({ type: 'error' })}
      />
    </>
  );
}

export default function Contact() {
  return (
    <main style={{ paddingTop: 120, background: '#101114', minHeight: '100vh' }}>
      <Navbar />
      <FadeIn delay={0.2}>
        <header style={{ textAlign: 'center', margin: '2.5rem 0 2rem 0' }}>
          <h1 style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem', letterSpacing: 1, padding: '0 16px' }}>
            Contact UNIQUE FORM BUSINESS COMPANY Ltd
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#b0b3b8', maxWidth: 650, margin: '0 auto', lineHeight: 1.7, padding: '0 16px' }}>
            We value your inquiries, partnership requests, and feedback. Please use the form below or our contact details to reach out. Our team will respond promptly and professionally.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 40, marginBottom: 56 }} className="contact-grid">
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', padding: 'clamp(20px, 4vw, 32px)', marginBottom: 16 }}>
              <h2 style={{ color: '#1A237E', marginBottom: 18, fontWeight: 600, fontSize: '1.35rem' }}>Contact Information</h2>
              <div style={{ marginBottom: 18, fontSize: '1rem', color: '#444' }}>
                <p style={{ marginBottom: 14 }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 8, color: '#1A237E' }} />
                  <strong>Address:</strong> Kigali, Rwanda
                </p>
                <p style={{ marginBottom: 14 }}>
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8, color: '#1A237E' }} />
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+250783654015" style={{ color: '#90caf9', textDecoration: 'none' }}>+250 783 654 015</a>
                </p>
                <p style={{ marginBottom: 14 }}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8, color: '#1A237E' }} />
                  <strong>Email:</strong>{' '}
                  <a href="mailto:ufbcltd@gmail.com" style={{ color: '#90caf9', textDecoration: 'none' }}>ufbcltd@gmail.com</a>
                </p>
                <p style={{ marginBottom: 14 }}>
                  <FontAwesomeIcon icon={faClock} style={{ marginRight: 8, color: '#1A237E' }} />
                  <strong>Business Hours:</strong><br />
                  <span style={{ color: '#666' }}>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 3:00 PM</span>
                </p>
                <p style={{ marginBottom: 14 }}>
                  <FontAwesomeIcon icon={faIdCard} style={{ marginRight: 8, color: '#1A237E' }} />
                  <a
                    href="/ufbc-contact.vcf"
                    download="UFBC.vcf"
                    style={{ color: '#1A237E', textDecoration: 'underline', fontWeight: 500 }}
                  >
                    Download vCard
                  </a>
                </p>
              </div>
              <div style={{ marginTop: 18 }}>
                <h3 style={{ color: '#1A237E', marginBottom: 10, fontWeight: 500, fontSize: '1.1rem' }}>Connect with Us</h3>
                <div style={{ display: 'flex', gap: 16 }}>
                  {/* LinkedIn link removed */}
                  <a href="https://instagram.com/ufbc.com" target="_blank" rel="noopener noreferrer" style={{ color: '#D32F2F', fontWeight: 500 }}>
                    <FontAwesomeIcon icon={faInstagram} style={{ marginRight: 6 }} /> Instagram
                  </a>
                  <a href="https://twitter.com/ufbc_rw" target="_blank" rel="noopener noreferrer" style={{ color: '#1A91DA', fontWeight: 500 }}>
                    <FontAwesomeIcon icon={faTwitter} style={{ marginRight: 6 }} /> Twitter
                  </a>
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', padding: 'clamp(20px, 4vw, 32px)', marginBottom: 16 }}>
              <h2 style={{ color: '#1A237E', marginBottom: 18, fontWeight: 600, fontSize: '1.35rem' }}>Our Services</h2>
              <p style={{ color: '#444', marginBottom: 18, fontSize: '1rem' }}>
                We offer comprehensive solutions across 9 business sectors:
              </p>
              <ul style={{ color: '#555', lineHeight: 1.7, fontSize: '1rem', paddingLeft: 18 }}>
                <li>Agriculture & Forestry</li>
                <li>Construction</li>
                <li>Mining & Quarrying</li>
                <li>Wholesale & Retail</li>
                <li>Logistics</li>
                <li>Food Services</li>
                <li>Telecom & IT</li>
                <li>Creative & Professional Services</li>
                <li>Admin & Support Services</li>
              </ul>
            </div>
          </div>

          {/* FAQ / Why Contact Us */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', padding: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
            <h2 style={{ color: '#1A237E', marginBottom: 18, fontWeight: 600, fontSize: '1.35rem', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: 8 }} />
              Why Contact Us?
            </h2>
            <ul style={{ color: '#444', fontSize: '1rem', lineHeight: 1.7, maxWidth: 650, margin: '0 auto', paddingLeft: 18 }}>
              <li>Get tailored solutions for your business needs.</li>
              <li>Request partnership or collaboration details.</li>
              <li>Ask about our services or get a custom quote.</li>
              <li>Provide feedback to help us improve.</li>
              <li>Reach our support team for quick assistance.</li>
            </ul>
          </div>

          {/* Contact Form with Feedback and Keep a Copy Button */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', padding: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
            <h2 style={{ color: '#1A237E', marginBottom: 18, fontWeight: 600, fontSize: '1.35rem', textAlign: 'center' }}>Send Us a Message</h2>
            <FeedbackWithCopy />
          </div>
        </section>
      </FadeIn>

      {/* Google Map Embed */}
      <FadeIn delay={1.0}>
        <section style={{ maxWidth: 1200, margin: '3rem auto 0', padding: '0 24px 4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 24, color: '#fff', fontWeight: 600, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', padding: '0 16px' }}>Our Location</h2>
          <div style={{ width: '100%', height: 'clamp(300px, 50vh, 450px)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', background: '#e5e7eb' }}>
            <iframe
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kigali%2C%20Rwanda%20(UFBC)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - UFBC Location in Kigali, Rwanda"
            ></iframe>
          </div>
          <p style={{ textAlign: 'center', marginTop: 16, color: '#b0b3b8', fontSize: '0.9rem' }}>
            <a 
              href="https://www.google.com/maps/place/Kigali,+Rwanda/@-1.944363,30.061629,13z/data=!3m1!4b1!4m5!3m4!1s0x19dca4258edb9e1d:0x3e8e1e8c6e8c6e8c!8m2!3d-1.9441!4d30.0619"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#90caf9', textDecoration: 'underline' }}
            >
              Open in Google Maps
            </a>
          </p>
        </section>
      </FadeIn>
    </main>
  );
}