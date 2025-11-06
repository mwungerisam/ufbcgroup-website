'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FadeIn from '../../components/FadeIn';

interface BlogPost {
  id: number;
  title: string;
  status: 'draft' | 'published';
  date: string;
  views: number;
  excerpt: string;
}

export default function AdminBlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    { id: 1, title: 'Sample Post', status: 'draft', date: '2025-01-01', views: 0, excerpt: 'Example excerpt' },
  ]);

  const publish = (id: number) => {
    setBlogPosts(prev => prev.map(p => (p.id === id ? { ...p, status: 'published' } : p)));
  };

  const remove = (id: number) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <main style={{ paddingTop: 120 }}>
      <Navbar isAdmin />
      <FadeIn delay={0.2}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ color: '#1A237E' }}>Blog Management</h1>
            <button style={{ padding: '10px 20px', background: '#2E7D32', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}
              onClick={() => setBlogPosts(prev => [...prev, { id: Date.now(), title: 'New Post', status: 'draft', date: new Date().toISOString().slice(0,10), views: 0, excerpt: 'Draft excerpt' }])}
            >
              + New Blog Post
            </button>
          </div>

          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: 16, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Title</th>
                  <th style={{ padding: 16, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Status</th>
                  <th style={{ padding: 16, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Date</th>
                  <th style={{ padding: 16, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Views</th>
                  <th style={{ padding: 16, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogPosts.map(post => (
                  <tr key={post.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: 16 }}>
                      <div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>{post.title}</div>
                        <div style={{ color: '#666', fontSize: 14 }}>{post.excerpt}</div>
                      </div>
                    </td>
                    <td style={{ padding: 16 }}>
                      <span style={{ padding: '4px 8px', borderRadius: 12, fontSize: 12, fontWeight: 500, background: post.status === 'published' ? '#d4edda' : '#fff3cd', color: post.status === 'published' ? '#155724' : '#856404' }}>
                        {post.status}
                      </span>
                    </td>
                    <td style={{ padding: 16, color: '#666' }}>{post.date}</td>
                    <td style={{ padding: 16, color: '#666' }}>{post.views}</td>
                    <td style={{ padding: 16 }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {post.status === 'draft' && (
                          <button onClick={() => publish(post.id)} style={{ padding: '6px 12px', background: '#2E7D32', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}>Publish</button>
                        )}
                        <button onClick={() => remove(post.id)} style={{ padding: '6px 12px', background: '#f44336', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </FadeIn>
      <Footer />
    </main>
  );
}