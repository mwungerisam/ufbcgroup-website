"use client";
import React from "react";

const faqs = [
  {
    question: "Is UFBC legally registered?",
    answer: "Yes. Our Registration Certificate (RC) number is 108584133. Our Tax Identification Number (TIN) is 108584133. We are fully registered and certified to operate in Rwanda."
  },
  {
    question: "What does UFBC stand for?",
  answer: "UFBC stands for UNIQUE FORM BUSINESS COMPANY Ltd. We are a legally registered multi-sectoral company based in Kigali, Rwanda, operating across 28 sectors."
  },
  {
    question: "What services and sectors do you offer?",
    answer: "We provide services in Construction, Mining & Quarrying, Agriculture & Forestry, Logistics & Courier, Wholesale & Supply, Food & Hospitality, Telecommunication & IT, Creative & Professional, Administrative & Support, Renting, Software Development, Manufacturing Technology, Business Analysis, and Project Requirement Analysis."
  },
  {
    question: "How can I contact UFBC?",
    answer: "You can reach us at ufbcltd@gmail.com or +250 783 654 015. You can also use our contact page for more options."
  },
  {
    question: "Where are you located?",
  answer: "We are based in Kigali, Rwanda. Our office is open for business inquiries."
  },
  {
    question: "Who is the CEO or founder of UFBC?",
    answer: "UNIQUE FORM BUSINESS COMPANY Ltd was founded and is owned by Joseph Musorini. He leads the company as CEO, supported by a professional management team."
  },
  {
    question: "What are your business hours?",
    answer: "Our business hours are Monday to Friday, 8:00 AM to 5:00 PM. You can contact us anytime via email."
  },
  {
    question: "Do you offer food or hospitality services?",
    answer: "Yes, we provide food services including catering and mobile restaurants."
  },
  {
    question: "Do you offer cleaning or office admin services?",
    answer: "We offer cleaning, photocopying, and office administrative services."
  },
  {
    question: "When was UFBC founded?",
    answer: "UNIQUE FORM BUSINESS COMPANY Ltd was founded in 2019 by Joseph Musorini."
  },
  {
    question: "How many employees or sectors do you have?",
    answer: "UFBC operates across 28 sectors and offers a wide range of services. Our team consists of dedicated professionals in each sector."
  },
  {
    question: "Do you offer software development or IT services?",
    answer: "Yes, we offer software development solutions, including web and mobile apps, IT consulting, and system integration."
  },
  {
    question: "Do you offer rental services?",
    answer: "We provide rental services for houses, equipment, and vehicles with flexible options and support."
  },
  {
    question: "What is your mission, vision, or values?",
    answer: "Our mission is to deliver innovative, reliable, and sustainable business solutions. Our vision is to be a leader in multi-sectoral services in Rwanda. Our values include integrity, excellence, and customer focus."
  },
  {
    question: "Do you have any awards or certifications?",
    answer: "UFBC is recognized for excellence and holds all necessary certifications for operation in Rwanda."
  },
  {
    question: "Who are your partners or clients?",
    answer: "We work with a wide range of partners and clients in Rwanda and beyond. Contact us for partnership opportunities."
  },
  {
    question: "Do you have testimonials or reviews?",
    answer: "UFBC is proud to have received positive testimonials from our clients and partners. For specific testimonials, please visit our website or contact us for references."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods. For details, please contact our office or visit the contact page."
  },
  {
    question: "How can I get support or help?",
    answer: "Our support team is ready to assist you. Reach out via email, phone, or our contact page."
  },
  {
    question: "Are there job opportunities at UFBC?",
    answer: "For career opportunities at UFBC, please check our website or contact us directly."
  },
  {
    question: "How much do your services cost? Can I get a quote?",
    answer: "Pricing for our services depends on your specific needs. Please contact us for a detailed quote or use our contact page to request a quotation."
  },
  {
    question: "What are your COVID-19 safety measures?",
    answer: "UFBC follows all recommended COVID-19 safety measures to protect our clients and staff, including sanitization, distancing, and remote services where possible."
  },
  {
    question: "Do you have sustainability or environmental policies?",
    answer: "UFBC is committed to sustainability and environmentally friendly practices in all our operations."
  },
  {
    question: "Are you involved in community or social responsibility?",
    answer: "UFBC actively participates in community development and social responsibility initiatives in Rwanda."
  },
  {
    question: "What languages do you speak?",
    answer: "Our team speaks English, Kinyarwanda, and French to serve a diverse range of clients."
  },
  {
    question: "Do you work outside Rwanda?",
    answer: "UFBC primarily operates in Rwanda but is open to international partnerships and projects. Contact us for details."
  },
  {
    question: "How do I book a service or appointment?",
    answer: "To book a service or schedule an appointment, please use our contact page or call us directly."
  },
  {
    question: "What is your refund or cancellation policy?",
    answer: "Our refund and cancellation policies are client-friendly. For details, please contact our office or refer to our terms and conditions."
  }
];

export default function FAQPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 16px' }}>
      <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, color: '#1A237E', marginBottom: 32 }}>
        Frequently Asked Questions (FAQ)
      </h1>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,40,80,0.08)', padding: 32 }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ marginBottom: 28 }}>
            <div style={{ fontWeight: 600, fontSize: 20, color: '#1A237E', marginBottom: 6 }}>
              {faq.question}
            </div>
            <div style={{ fontSize: 17, color: '#222', lineHeight: 1.6 }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
