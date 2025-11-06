'use client';

import Link from 'next/link';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer style={{
      background: '#1a237e',
      color: '#ffffff',
      padding: 'clamp(2rem, 5vw, 3rem) 0 clamp(1.5rem, 4vw, 2rem) 0',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 20px'
      }} className="footer-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2rem'
        }} className="footer-grid">
          {/* Company Info */}
          <div style={{ maxWidth: '100%' }}>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              UNIQUE FORM BUSINESS COMPANY Ltd
            </h3>
            <p style={{
              color: '#e3f2fd',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Your trusted partner for comprehensive business solutions in Rwanda. We deliver excellence across multiple sectors including construction, logistics, real estate, and business consulting.
            </p>
            <p style={{
              color: '#bbdefb',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              Building the future, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/" 
                  style={{
                    color: '#e3f2fd',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/about" 
                  style={{
                    color: '#e3f2fd',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/services" 
                  style={{
                    color: '#e3f2fd',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/portfolio" 
                  style={{
                    color: '#e3f2fd',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/blog" 
                  style={{
                    color: '#e3f2fd',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/contact" 
                  style={{
                    color: '#e3f2fd',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Contact Information
            </h4>
            <div style={{
              fontSize: '0.9rem',
              color: '#e3f2fd',
              lineHeight: 1.8
            }}>
              <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-envelope" style={{ color: '#bbdefb', fontSize: '1.1rem' }}></i>
                <span><strong>Email:</strong></span>
                <a href="mailto:ufbcltd@gmail.com" style={{
                  color: '#bbdefb',
                  textDecoration: 'none',
                  marginLeft: '0.5rem'
                }}>
                  ufbcltd@gmail.com
                </a>
              </p>
              <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-phone" style={{ color: '#bbdefb', fontSize: '1.1rem' }}></i>
                <span><strong>Phone:</strong></span>
                <a href="tel:+250783654015" style={{
                  color: '#bbdefb',
                  textDecoration: 'none',
                  marginLeft: '0.5rem'
                }}>
                  +250 783 654 015
                </a>
              </p>
              <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-location-dot" style={{ color: '#bbdefb', fontSize: '1.1rem' }}></i>
                <span><strong>Address:</strong></span>
                <span style={{ marginLeft: '0.5rem' }}>Kigali, Rwanda</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Follow Us
            </h4>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <a
                href="https://www.facebook.com/profile.php?id=61579910422121"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '40px',
                  textAlign: 'center',
                  lineHeight: '40px',
                  fontSize: '1.7rem',
                  color: '#1877F2',
                }}
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a 
                href="https://www.instagram.com/ufbcgroup.rw/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '40px',
                  textAlign: 'center',
                  lineHeight: '40px',
                  fontSize: '1.7rem',
                  color: '#E1306C',
                }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://x.com/ufbcltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '40px',
                  textAlign: 'center',
                  lineHeight: '40px',
                  fontSize: '1.7rem',
                  color: '#1DA1F2',
                }}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <p style={{
              fontSize: '0.8rem',
              color: '#bbdefb',
              lineHeight: 1.5
            }}>
              Stay connected with us for the latest updates, industry insights, and business opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#bbdefb',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <p>
            &copy; {new Date().getFullYear()} UNIQUE FORM BUSINESS COMPANY Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            Registered in Rwanda | Business Registration: 108584133
          </p>
        </div>
      </div>
    </footer>
  );
}