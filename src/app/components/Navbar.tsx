"use client";
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const admin = pathname ? pathname.startsWith('/admin') : false;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Handle clicks outside menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: '#1A237E',
        color: '#fff',
        fontWeight: 500,
        fontSize: 18,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem clamp(1rem, 4vw, 2rem)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo and Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo.svg" alt="Company Logo" width={48} height={48} />
          <span style={{ color: '#fff', fontWeight: 700, marginLeft: 12, fontSize: 20 }}>
            UFBC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          {admin ? (
            <>
              <Link href="/admin" style={{ color: '#fff', textDecoration: 'none' }}>Admin Home</Link>
              <Link href="/admin/analytics" style={{ color: '#fff', textDecoration: 'none' }}>Analytics</Link>
              <Link href="/admin/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
              <Link href="/admin/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</Link>
              <Link href="/admin/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
              <Link href="/admin/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</Link>
            </>
          ) : (
            <>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About & Compliance</Link>
              <Link href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
              <Link href="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</Link>
              <Link href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
              <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact / Request Service</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px'
          }} className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          aria-label="Mobile navigation menu"
          style={{
          background: '#1A237E',
          borderTop: '1px solid #3949ab',
          padding: '1rem 0'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '0 2rem'
          }}>
            {admin ? (
              <>
                <Link href="/admin" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Admin Home</Link>
                <Link href="/admin/analytics" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Analytics</Link>
                <Link href="/admin/services" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Services</Link>
                <Link href="/admin/portfolio" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Portfolio</Link>
                <Link href="/admin/blog" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Blog</Link>
                <Link href="/admin/settings" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Settings</Link>
              </>
            ) : (
              <>
                <Link href="/" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Home</Link>
                <Link href="/about" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>About & Compliance</Link>
                <Link href="/services" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Services</Link>
                <Link href="/portfolio" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Portfolio</Link>
                <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Blog</Link>
                <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem 0', fontSize: '16px' }} onClick={closeMobileMenu}>Contact / Request Service</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}