import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { stockImages } from '../components/StockImages';
import Image from 'next/image';

// Helper to display author as UFBC team by section/category
const teamLabel = (category: string) => `UFBC ${category} Team`;

const blogPosts = [
  {
    id: 1,
    title: "The Future of Agriculture in Rwanda: Sustainable Practices and Technology Integration",
    excerpt: "Discover how modern agricultural practices combined with traditional knowledge are transforming Rwanda's farming sector. Learn about UFBC's innovative approaches to crop management and post-harvest processing.",
    content: `
      <p>Rwanda's agricultural sector is undergoing a remarkable transformation, driven by the integration of sustainable practices and cutting-edge technology. At UFBC, we've been at the forefront of this revolution, implementing innovative solutions that benefit both farmers and the environment.</p>
      
      <h3>Key Trends in Rwandan Agriculture</h3>
      <p>The agricultural landscape in Rwanda is evolving rapidly, with several key trends shaping the future:</p>
      <ul>
        <li><strong>Precision Farming:</strong> GPS-guided equipment and soil sensors are optimizing resource usage</li>
        <li><strong>Organic Certification:</strong> Growing demand for organic produce in local and international markets</li>
        <li><strong>Climate-Smart Agriculture:</strong> Drought-resistant crops and water-efficient irrigation systems</li>
        <li><strong>Digital Platforms:</strong> Mobile apps connecting farmers with markets and financial services</li>
      </ul>
      
      <h3>UFBC's Contribution</h3>
      <p>Our agricultural services focus on three main areas:</p>
      <ol>
        <li><strong>Crop Production Support:</strong> Providing high-quality seeds, fertilizers, and technical guidance</li>
        <li><strong>Post-Harvest Processing:</strong> Advanced storage and processing facilities to reduce waste</li>
        <li><strong>Market Access:</strong> Connecting farmers with reliable buyers and export opportunities</li>
      </ol>
      
      <p>Through our comprehensive approach, we've helped over 500 farmers increase their yields by an average of 40% while reducing environmental impact.</p>
    `,
    author: "Dr. Emmanuel Niyonzima",
    date: "March 15, 2024",
    category: "Agriculture",
    readTime: "5 min read",
    image: "https://i.pinimg.com/1200x/76/32/7d/76327d3b6c8bee75a6f294816575b1b0.jpg" // <-- updated to new Agriculture image
  },
  {
    id: 2,
    title: "Building Rwanda's Future: Sustainable Construction Practices in East Africa",
    excerpt: "Explore how UFBC is leading the way in sustainable construction across Rwanda, incorporating green building materials and energy-efficient designs in major infrastructure projects.",
    content: `
      <p>Rwanda's construction sector is experiencing unprecedented growth, with major infrastructure projects transforming the country's landscape. At UFBC, we're committed to ensuring this development is sustainable, efficient, and beneficial for future generations.</p>
      
      <h3>Sustainable Construction Methods</h3>
      <p>Our construction approach prioritizes:</p>
      <ul>
        <li><strong>Green Building Materials:</strong> Locally sourced, eco-friendly materials that reduce carbon footprint</li>
        <li><strong>Energy Efficiency:</strong> Solar panels, LED lighting, and smart building management systems</li>
        <li><strong>Water Conservation:</strong> Rainwater harvesting and greywater recycling systems</li>
        <li><strong>Waste Reduction:</strong> Construction waste recycling and minimal material wastage</li>
      </ul>
      
      <h3>Notable Projects</h3>
      <p>Recent successful projects include:</p>
      <ul>
        <li>Kigali Business Center - LEED Gold certified office complex</li>
        <li>Rwanda Innovation Hub - State-of-the-art technology campus</li>
        <li>Eco-friendly residential developments across Kigali</li>
      </ul>
      
      <p>These projects demonstrate our commitment to quality, sustainability, and local economic development.</p>
    `,
    author: "Ing. Sarah Uwase",
    date: "March 10, 2024",
    category: "Construction",
    readTime: "4 min read",
    image: "https://i.pinimg.com/1200x/17/c0/4c/17c04c6289a46e1e413f7f912be53fec.jpg" // <-- updated to new Pinterest image
  },
  {
    id: 3,
    title: "Digital Transformation in Rwanda: How UFBC is Supporting the Tech Revolution",
    excerpt: "Learn about Rwanda's digital transformation journey and how UFBC's telecom and IT services are enabling businesses to thrive in the digital economy.",
    content: `
      <p>Rwanda's vision to become a regional technology hub is becoming a reality, with significant investments in digital infrastructure and innovation. UFBC is proud to be part of this transformation, providing essential telecom and IT services to businesses across the country.</p>
      
      <h3>Digital Infrastructure Development</h3>
      <p>Our telecom services include:</p>
      <ul>
        <li><strong>Fiber Optic Networks:</strong> High-speed internet connectivity for businesses and institutions</li>
        <li><strong>Wireless Solutions:</strong> 4G and 5G network infrastructure deployment</li>
        <li><strong>Cloud Services:</strong> Secure data storage and computing solutions</li>
        <li><strong>Cybersecurity:</strong> Protection against digital threats and data breaches</li>
      </ul>
      
      <h3>Supporting Innovation</h3>
      <p>We're actively supporting Rwanda's innovation ecosystem through:</p>
      <ul>
        <li>Partnerships with tech startups and incubators</li>
        <li>Digital skills training programs</li>
        <li>Affordable technology solutions for SMEs</li>
        <li>Rural connectivity initiatives</li>
      </ul>
      
      <p>Our goal is to ensure that every business in Rwanda has access to the digital tools they need to compete in the global marketplace.</p>
    `,
    author: "Tech Team UFBC",
    date: "March 5, 2024",
    category: "Technology",
    readTime: "6 min read",
    image: "https://i.pinimg.com/736x/21/c3/24/21c324d8c05f7102e3ca619fa5462e71.jpg" // <-- updated to new Pinterest image
  },
  {
    id: 4,
    title: "Logistics Excellence: Connecting Rwanda to the World",
    excerpt: "Discover how UFBC's logistics solutions are facilitating trade and commerce across East Africa, with efficient courier services and supply chain management.",
    content: `
      <p>In today's interconnected world, efficient logistics are crucial for business success. UFBC's logistics division is playing a vital role in connecting Rwandan businesses with regional and international markets.</p>
      
      <h3>Comprehensive Logistics Solutions</h3>
      <p>Our services cover the entire supply chain:</p>
      <ul>
        <li><strong>Express Courier:</strong> Same-day and next-day delivery across Rwanda</li>
        <li><strong>International Shipping:</strong> Reliable cargo services to major global markets</li>
        <li><strong>Warehousing:</strong> Secure storage facilities with climate control</li>
        <li><strong>Customs Clearance:</strong> Expert assistance with import/export procedures</li>
      </ul>
      
      <h3>Technology Integration</h3>
      <p>We leverage technology to provide:</p>
      <ul>
        <li>Real-time tracking and monitoring</li>
        <li>Automated inventory management</li>
        <li>Digital documentation and customs processing</li>
        <li>Analytics for supply chain optimization</li>
      </ul>
      
      <p>Our commitment to excellence has made us the preferred logistics partner for over 200 businesses across East Africa.</p>
    `,
    author: "Logistics Team UFBC",
    date: "February 28, 2024",
    category: "Logistics",
    readTime: "4 min read",
    image: "https://i.pinimg.com/1200x/84/5a/aa/845aaab32c4b7e39a418bfb19e5f364d.jpg"
  },
  {
    id: 5,
    title: "Mining Sector Development: Sustainable Resource Extraction in Rwanda",
    excerpt: "Explore Rwanda's growing mining sector and how UFBC is contributing to sustainable resource extraction practices that benefit both the economy and environment.",
    content: `
      <p>Rwanda's mining sector has emerged as a key driver of economic growth, with significant deposits of minerals including tin, tantalum, tungsten, and gold. UFBC is at the forefront of promoting sustainable mining practices that balance economic development with environmental protection.</p>
      
      <h3>Sustainable Mining Practices</h3>
      <p>Our mining services focus on:</p>
      <ul>
        <li><strong>Environmental Impact Assessment:</strong> Comprehensive evaluation of mining operations' environmental footprint</li>
        <li><strong>Community Engagement:</strong> Working closely with local communities to ensure mutual benefits</li>
        <li><strong>Technology Integration:</strong> Modern mining equipment and techniques for efficient extraction</li>
        <li><strong>Rehabilitation Planning:</strong> Post-mining land restoration and ecosystem recovery</li>
      </ul>
      
      <h3>Economic Benefits</h3>
      <p>Our mining operations contribute to:</p>
      <ul>
        <li>Job creation in rural areas</li>
        <li>Infrastructure development in mining communities</li>
        <li>Export revenue generation</li>
        <li>Technology transfer and skills development</li>
      </ul>
      
      <p>Through responsible mining practices, were helping Rwanda achieve its vision of becoming a regional mining hub while preserving the country's natural beauty for future generations.</p>
    `,
    author: "Mining Division UFBC",
    date: "February 20, 2024",
    category: "Mining",
    readTime: "5 min read",
    image: "https://i.pinimg.com/1200x/a9/49/c1/a949c1577ed14f834fbdf336e4e88232.jpg" // <-- updated to new Pinterest image
  },
  {
    id: 6,
    title: "Food Services Innovation: From Farm to Table Excellence",
    excerpt: "Discover how UFBC's food services division is revolutionizing the food industry in Rwanda with innovative processing, packaging, and distribution solutions.",
    content: `
      <p>The food services industry in Rwanda is experiencing a transformation, driven by increasing demand for quality, safety, and convenience. UFBC's food services division is leading this change with innovative solutions that span the entire food value chain.</p>
      
      <h3>Comprehensive Food Services</h3>
      <p>Our services include:</p>
      <ul>
        <li><strong>Food Processing:</strong> State-of-the-art facilities for value addition to agricultural products</li>
        <li><strong>Quality Assurance:</strong> Rigorous testing and certification processes</li>
        <li><strong>Packaging Solutions:</strong> Innovative packaging that extends shelf life and maintains quality</li>
        <li><strong>Distribution Networks:</strong> Efficient cold chain and logistics for perishable goods</li>
      </ul>
      
      <h3>Innovation in Action</h3>
      <p>Recent innovations include:</p>
      <ul>
        <li>Solar-powered cold storage facilities</li>
        <li>Biodegradable packaging materials</li>
        <li>Mobile food processing units for rural areas</li>
        <li>Digital traceability systems for food safety</li>
      </ul>
      
      <p>Our commitment to excellence in food services is helping Rwanda become a regional leader in food processing and distribution, creating opportunities for local farmers and entrepreneurs.</p>
    `,
    author: "Food Services Team UFBC",
    date: "February 15, 2024",
    category: "Food Services",
    readTime: "4 min read",
    image: "https://i.pinimg.com/736x/fc/53/30/fc53308f99a8b6602c0eefe0a49bdd3a.jpg" // <-- updated to new Pinterest image
  }
];

export default function Blog() {
  return (
    <main style={{ paddingTop: 120 }}>
      <Navbar />
      
      <FadeIn delay={0.2}>
        <header style={{ textAlign: 'center', margin: '2rem 0' }}>
          <h1 style={{ color: '#1A237E', marginBottom: '1rem' }}>UFBC Blog</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>
            Insights, updates, and expert perspectives on Rwanda's business landscape
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 32,
            marginTop: 48
          }}>
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={0.6 + index * 0.1}>
                <article style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid #f0f0f0'
                }} className="blog-card">
                  <div style={{
                    position: 'relative',
                    height: 200,
                    borderRadius: 8,
                    marginBottom: 16,
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div style={{ marginBottom: 12 }}>
                    <span style={{
                      background: '#1A237E',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {post.category}
                    </span>
                    <span style={{ 
                      color: '#666', 
                      fontSize: '0.8rem', 
                      marginLeft: 12 
                    }}>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#1A237E',
                    marginBottom: 12,
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h2>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: 16
                  }}>
                    {post.excerpt}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.9rem',
                    color: '#888'
                  }}>
                    <span>By {teamLabel(post.category)}</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}