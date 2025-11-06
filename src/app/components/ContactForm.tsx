'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

const services = [
  "Agriculture & Forestry",
  "Construction",
  "Mining & Quarrying",
  "Wholesale & Retail",
  "Logistics",
  "Food Services",
  "Telecom & IT",
  "Creative & Professional Services",
  "Admin & Support Services",
  "Other"
];

interface ContactFormProps {
  onSuccess?: (userMessage: string) => void;
  onError?: () => void;
}

export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Option 1: Formspree (uncomment and configure)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Option 2: EmailJS (uncomment and configure)
      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');

      // Use our custom API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      const result = await response.json();
      
      setSubmitStatus('success');
      if (onSuccess) {
        onSuccess(formData.message);
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      if (onError) {
        onError();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const inputBaseStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e0e0e0',
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'inherit',
    color: '#1a1a1a',
    backgroundColor: '#ffffff',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const inputFocusStyle: React.CSSProperties = {
    border: '2px solid #1A237E',
    boxShadow: '0 0 0 3px rgba(26, 35, 126, 0.1)',
  };

  const inputErrorStyle: React.CSSProperties = {
    border: '2px solid #D32F2F',
    backgroundColor: '#fff5f5',
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <label 
            htmlFor="name" 
            style={{ 
              display: 'block',
              fontWeight: 600, 
              color: '#1A237E',
              marginBottom: 8,
              fontSize: 15
            }}
          >
            Name <span style={{ color: '#D32F2F' }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            style={{
              ...inputBaseStyle,
              ...(errors.name ? inputErrorStyle : {}),
            }}
            onFocus={(e) => {
              if (!errors.name) {
                e.currentTarget.style.border = '2px solid #1A237E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 35, 126, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!errors.name) {
                e.currentTarget.style.border = '2px solid #e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          />
          {errors.name && (
            <p style={{ color: '#D32F2F', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="email" 
            style={{ 
              display: 'block',
              fontWeight: 600, 
              color: '#1A237E',
              marginBottom: 8,
              fontSize: 15
            }}
          >
            Email <span style={{ color: '#D32F2F' }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="your.email@example.com"
            style={{
              ...inputBaseStyle,
              ...(errors.email ? inputErrorStyle : {}),
            }}
            onFocus={(e) => {
              if (!errors.email) {
                e.currentTarget.style.border = '2px solid #1A237E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 35, 126, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!errors.email) {
                e.currentTarget.style.border = '2px solid #e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          />
          {errors.email && (
            <p style={{ color: '#D32F2F', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {errors.email}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="phone" 
            style={{ 
              display: 'block',
              fontWeight: 600, 
              color: '#1A237E',
              marginBottom: 8,
              fontSize: 15
            }}
          >
            Phone <span style={{ color: '#D32F2F' }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="+250 123 456 789"
            style={{
              ...inputBaseStyle,
              ...(errors.phone ? inputErrorStyle : {}),
            }}
            onFocus={(e) => {
              if (!errors.phone) {
                e.currentTarget.style.border = '2px solid #1A237E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 35, 126, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!errors.phone) {
                e.currentTarget.style.border = '2px solid #e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          />
          {errors.phone && (
            <p style={{ color: '#D32F2F', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {errors.phone}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="company" 
            style={{ 
              display: 'block',
              fontWeight: 600, 
              color: '#1A237E',
              marginBottom: 8,
              fontSize: 15
            }}
          >
            Company <span style={{ color: '#D32F2F' }}>*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            required
            placeholder="Your company name"
            style={{
              ...inputBaseStyle,
              ...(errors.company ? inputErrorStyle : {}),
            }}
            onFocus={(e) => {
              if (!errors.company) {
                e.currentTarget.style.border = '2px solid #1A237E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 35, 126, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!errors.company) {
                e.currentTarget.style.border = '2px solid #e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          />
          {errors.company && (
            <p style={{ color: '#D32F2F', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {errors.company}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="service" 
            style={{ 
              display: 'block',
              fontWeight: 600, 
              color: '#1A237E',
              marginBottom: 8,
              fontSize: 15
            }}
          >
            Service <span style={{ color: '#D32F2F' }}>*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            style={{
              ...inputBaseStyle,
              ...(errors.service ? inputErrorStyle : {}),
              cursor: 'pointer',
            }}
            onFocus={(e) => {
              if (!errors.service) {
                e.currentTarget.style.border = '2px solid #1A237E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 35, 126, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!errors.service) {
                e.currentTarget.style.border = '2px solid #e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <option value="" style={{ color: '#999' }}>Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service} style={{ color: '#1a1a1a' }}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p style={{ color: '#D32F2F', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {errors.service}
            </p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="message" 
            style={{ 
              display: 'block',
              fontWeight: 600, 
              color: '#1A237E',
              marginBottom: 8,
              fontSize: 15
            }}
          >
            Message <span style={{ color: '#D32F2F' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            placeholder="Tell us about your inquiry..."
            style={{
              ...inputBaseStyle,
              ...(errors.message ? inputErrorStyle : {}),
              resize: 'vertical',
              minHeight: 120,
              fontFamily: 'inherit',
            }}
            onFocus={(e) => {
              if (!errors.message) {
                e.currentTarget.style.border = '2px solid #1A237E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 35, 126, 0.1)';
              }
            }}
            onBlur={(e) => {
              if (!errors.message) {
                e.currentTarget.style.border = '2px solid #e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          />
          {errors.message && (
            <p style={{ color: '#D32F2F', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              {errors.message}
            </p>
          )}
        </div>
        
        {submitStatus === 'success' && (
          <div style={{ 
            padding: '16px', 
            background: '#4CAF50', 
            color: 'white', 
            borderRadius: 8, 
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontWeight: 500
          }}>
            <span style={{ fontSize: 20 }}>✓</span>
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div style={{ 
            padding: '16px', 
            background: '#f44336', 
            color: 'white', 
            borderRadius: 8, 
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontWeight: 500
          }}>
            <span style={{ fontSize: 20 }}>✕</span>
            <span>Failed to send message. Please try again later.</span>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '16px 32px',
            background: isSubmitting ? '#9fa8da' : '#1A237E',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            marginTop: 8,
            transition: 'all 0.2s ease',
            boxShadow: isSubmitting ? 'none' : '0 2px 8px rgba(26, 35, 126, 0.2)',
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = '#283593';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 35, 126, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = '#1A237E';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 35, 126, 0.2)';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
} 