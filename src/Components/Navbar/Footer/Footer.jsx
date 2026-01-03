import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const footerSections = [
    {
      title: "🏢 COMPANY",
      links: [
        "Proactive Trading",
        "About Proactive Trading",
        "Why Choose Us",
        "Our Stores",
        "Careers",
        "Blog"
      ]
    },
    {
      title: "🛒 SHOP",
      links: [
        "All Products",
        "Smartphones",
        "Laptops & Computers",
        "Accessories",
        "Home Electronics",
        "New Arrivals"
      ]
    },
    {
      title: "📞 CUSTOMER SUPPORT",
      links: [
        "Help Center",
        "FAQs",
        "Order Tracking",
        "Shipping & Delivery",
        "Returns & Refunds",
        "Warranty Policy"
      ]
    },
    {
      title: "📜 LEGAL & POLICIES",
      links: [
        "Privacy Policy",
        "Terms & Conditions",
        "Cookie Policy",
        "Payment Policy",
        "User Agreement"
      ]
    }
  ];

  

  

  const socialLinks = [
    { icon: "📘", label: "Facebook", color: "#1877F2" },
    { icon: "📸", label: "Instagram", color: "#E4405F" },
    { icon: "📱", label: "Telegram", color: "#26A5E4" },
    { icon: "💬", label: "WhatsApp", color: "#25D366" },
    { icon: "▶️", label: "YouTube", color: "#FF0000" }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="company-intro">
            <div className="intro-content">
              <h2 className="footer-logo">
                <span className="logo-text">Proactive Trading</span>
                <span className="logo-shine"></span>
              </h2>
              <p className="company-description">
                Your trusted partner for cutting-edge technology solutions in Ethiopia.
                We provide comprehensive IT support, innovative business solutions,
                and premium electronics to power your digital journey.
              </p>
             
            </div>
          </div>

          <div className="footer-grid">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-column">
                <h3 className="footer-heading">
                  <span className="heading-icon">{section.title.split(' ')[0]}</span>
                  <span className="heading-text">{section.title.replace(section.title.split(' ')[0], '')}</span>
                </h3>
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="footer-link-item">
                      <a href="#" className="link-anchor">
                        <span className="link-arrow">→</span>
                        <span className="link-text">{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-column contact-column">
              <h3 className="footer-heading">
                <span className="heading-icon">📝</span>
                <span className="heading-text"> QUICK CONTACT</span>
              </h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    rows="3"
                  />
                </div>
                <button type="submit" className="form-button">
                  <span className="button-text">Send Message</span>
                  <span className="button-arrow">→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom-section">
          

            <div className="social-section">
              <h4 className="section-title">
                <span className="heading-icon">🌐</span> CONNECT WITH US
              </h4>
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.label}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-label">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="footer-container">
          <p className="copyright-text">
            © 2024 Proactive Trading. All rights reserved. | Designed with ❤️ for Ethiopia
          </p>
          <div className="copyright-links">
            <a href="#" className="copyright-link">Privacy Center</a>
            <a href="#" className="copyright-link">Cookies</a>
            <a href="#" className="copyright-link">Legal</a>
            <a href="#" className="copyright-link">Corporate Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
