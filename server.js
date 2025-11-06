const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Site info endpoint
app.get('/api/siteinfo', (req, res) => {
  res.json({
    companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'UFBCLTD',
    companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'ufbcltd@gmail.com',
    companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+250 783 654 015',
    companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Kigali, Rwanda'
  });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ ok: true, message: 'Message received (email sending disabled)' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});