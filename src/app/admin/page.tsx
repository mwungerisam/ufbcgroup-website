'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple password check (in production, use proper authentication)
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'ufbc2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
    
    setIsLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <main style={{paddingTop: '120px'}}>
        <Navbar />
        <div style={{maxWidth: '400px', margin: '4rem auto', padding: '24px'}}>
          <FadeIn delay={0.2}>
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e0'
            }}>
              <h1 style={{ textAlign: 'center', color: '#1A237E', marginBottom: '24px' }}>
                UFBC Admin Dashboard
              </h1>
              <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px',
                      color: '#222'
                    }}
                    placeholder="Enter admin password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#1A237E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    opacity: isLoading ? 0.7 : 1
                  }}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <p style={{
                textAlign: 'center',
                marginTop: '16px',
                fontSize: '14px',
                color: '#666'
              }}>
                Demo password: ufbc2024
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
    );
  }

  return (
    <main style={{paddingTop: '120px'}}>
      <Navbar />
      
      <FadeIn delay={0.2}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ color: '#1A237E' }}>Admin Dashboard</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              style={{
                padding: '8px 16px',
                background: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>

          {/* Overview Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e0'
            }}>
              <h3 style={{ color: '#1A237E', marginBottom: '12px' }}>Total Visitors</h3>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2E7D32' }}>
                1,250
              </div>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
                Last 30 days
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e0'
            }}>
              <h3 style={{ color: '#1A237E', marginBottom: '12px' }}>Page Views</h3>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#1976D2' }}>
                3,400
              </div>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
                Last 30 days
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e0'
            }}>
              <h3 style={{ color: '#1A237E', marginBottom: '12px' }}>Contact Submissions</h3>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#D32F2F' }}>
                45
              </div>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
                Last 30 days
              </p>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e0'
            }}>
              <h3 style={{ color: '#1A237E', marginBottom: '12px' }}>Published Content</h3>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#7B1FA2' }}>
                12
              </div>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
                Blog posts + Portfolio items
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ color: '#1A237E', marginBottom: '16px' }}>Quick Actions</h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => router.push('/admin/blog')}
                style={{
                  padding: '12px 24px',
                  background: '#2E7D32',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                + New Blog Post
              </button>
              <button
                onClick={() => router.push('/admin/portfolio')}
                style={{
                  padding: '12px 24px',
                  background: '#1976D2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                + New Portfolio Item
              </button>
              <button
                onClick={() => router.push('/admin/analytics')}
                style={{
                  padding: '12px 24px',
                  background: '#D32F2F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                View Analytics
              </button>
              <button
                onClick={() => router.push('/admin/settings')}
                style={{
                  padding: '12px 24px',
                  background: '#7B1FA2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Site Settings
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 style={{ color: '#1A237E', marginBottom: '16px' }}>Recent Activity</h2>
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontWeight: '600' }}>Latest Blog Post Published</span>
                <span style={{ color: '#666', fontSize: '14px' }}>2 hours ago</span>
              </div>
              <p style={{ color: '#666', marginBottom: '16px' }}>
                Food Services Innovation: From Farm to Table Excellence
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontWeight: '600' }}>New Contact Form Submission</span>
                <span style={{ color: '#666', fontSize: '14px' }}>1 hour ago</span>
              </div>
              <p style={{ color: '#666', marginBottom: '16px' }}>
                Inquiry from Kigali Business Center about construction services
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '600' }}>Portfolio Item Updated</span>
                <span style={{ color: '#666', fontSize: '14px' }}>3 hours ago</span>
              </div>
              <p style={{ color: '#666' }}>
                Rwanda Agricultural Innovation Hub" marked as featured
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
} 