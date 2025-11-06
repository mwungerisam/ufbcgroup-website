'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f7fb', padding: '40px 16px' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 32, maxWidth: 560, width: '100%', textAlign: 'center', boxShadow: '0 12px 30px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}>
        <svg width="72" height="72" viewBox="0 0 24 24" fill="#e11d48" style={{ margin: '0 auto 12px' }}>
          <path d="M11.001 10h2v5h-2zm0-4h2v2h-2z"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A237E', marginBottom: 8 }}>Something went wrong</h1>
        <p style={{ color: '#4b5563', marginBottom: 16 }}>An unexpected error occurred. Please try again or return to the homepage.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button onClick={() => reset()} style={{ padding: '10px 16px', background: '#1A237E', color: '#fff', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Try again</button>
          <Link href="/" style={{ padding: '10px 16px', background: '#111827', color: '#fff', borderRadius: 8, textDecoration: 'none' }}>Go home</Link>
        </div>
      </div>
    </main>
  );
}
