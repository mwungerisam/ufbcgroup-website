'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  status: 'draft' | 'published';
  description: string;
  imageUrl: string;
}

export default function PortfolioManagement() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch portfolio data from backend
  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      const res = await fetch('/api/admin?type=portfolio');
      const data = await res.json();
      setPortfolioItems(data);
      setLoading(false);
    };
    fetchPortfolio();
  }, []);

  const handleToggleFeatured = async (id: number) => {
  const updated = portfolioItems.map((item: PortfolioItem) =>
    item.id === id ? { ...item, featured: !item.featured } : item
  );
  setPortfolioItems(updated);
  const toggled = updated.find((item: PortfolioItem) => item.id === id);
  if (toggled) {
    await fetch('/api/admin', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'portfolio', item: toggled })
    });
  }
};

  const handleDeletePortfolio = async (id: number) => {
  if (confirm('Are you sure you want to delete this portfolio item?')) {
    setPortfolioItems((prev: PortfolioItem[]) => prev.filter((item: PortfolioItem) => item.id !== id));
    await fetch('/api/admin', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'portfolio', id })
    });
  }
};

  return (
    <main style={{ paddingTop: 120 }}>
      <Navbar isAdmin />
      
      <FadeIn delay={0.2}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ color: '#0d1333' }}>Portfolio Management</h1>
            <button style={{
              padding: '10px 20px',
              background: '#1976D2',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              + New Portfolio Item
            </button>
          </div>

          <div style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Project</th>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Category</th>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Status</th>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Featured</th>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolioItems.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover' }}
                        />
                        <div>
                          <div style={{ fontWeight: '600', marginBottom: '4px' }}>{item.title}</div>
                          <div style={{ color: '#666', fontSize: '14px' }}>{item.description}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px', color: '#666' }}>{item.category}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500',
                        background: item.status === 'published' ? '#d4edda' : '#fff3cd',
                        color: item.status === 'published' ? '#155724' : '#856404'
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500',
                        background: item.featured ? '#d4edda' : '#f8d7da',
                        color: item.featured ? '#155724' : '#721c24'
                      }}>
                        {item.featured ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{
                          padding: '6px 12px',
                          background: '#1A237E',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}>
                          Edit
                        </button>
                        {item.status === 'draft' && (
                          <button
                            onClick={() => handlePublishPortfolio(item.id)}
                            style={{
                              padding: '6px 12px',
                              background: '#2E7D32',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '12px'
                            }}
                          >
                            Publish
                          </button>
                        )}
                        <button
                          onClick={() => handleToggleFeatured(item.id)}
                          style={{
                            padding: '6px 12px',
                            background: item.featured ? '#f44336' : '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          {item.featured ? 'Unfeature' : 'Feature'}
                        </button>
                        <button
                          onClick={() => handleDeletePortfolio(item.id)}
                          style={{
                            padding: '6px 12px',
                            background: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          Delete
                        </button>
                        <a
                          href={`/portfolio/${item.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: '6px 12px',
                            background: '#1976D2',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            textDecoration: 'none',
                            display: 'inline-block'
                          }}
                        >
                          View
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Portfolio Statistics */}
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h4 style={{ color: '#0d1333', marginBottom: '8px' }}>Total Projects</h4>
              <div style={{ fontSize: '20.5em', fontWeight: 'bold', color: '#2E7D32' }}>
                {portfolioItems.length}
              </div>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h4 style={{ color: '#0d1333', marginBottom: '8px' }}>Published</h4>
              <div style={{ fontSize: '20.5em', fontWeight: 'bold', color: '#1976D2' }}>
                {portfolioItems.filter(p => p.status === 'published').length}
              </div>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h4 style={{ color: '#0d1333', marginBottom: '8px' }}>Featured</h4>
              <div style={{ fontSize: '20.5em', fontWeight: 'bold', color: '#D32F2F' }}>
                {portfolioItems.filter(p => p.featured).length}
              </div>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h4 style={{ color: '#0d1333', marginBottom: '8px' }}>Categories</h4>
              <div style={{ fontSize: '20.5em', fontWeight: 'bold', color: '#7B1FA2' }}>
                {new Set(portfolioItems.map(item => item.category)).size}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      
      <Footer />
    </main>
  );
} 