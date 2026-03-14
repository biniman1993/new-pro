import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  MessageCircle,
  Send,
  Music2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import footerBg from "../assets/footer-bg.webp";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();

    // Split path into base path and hash
    const [basePath, hash] = path.split("#");

    // Check if we're already on the target page
    if (
      location.pathname === basePath ||
      (basePath === "/" && location.pathname === "/")
    ) {
      if (hash) {
        // Scroll to the element with the hash
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Navigate to the new page
      navigate(path);
    }
  };

 const shopCategories = [
  { name: "Home", path: "/" },
  { name: "New Laptops", path: "/products/laptops" },
  { name: "New Desktops", path: "/products/desktops" },
  { name: "New Printers", path: "/products/printers" },
  { name: "Cisco Products", path: "/products/networking" },
];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Brand", path: "/brand" },
    { name: "Our Clients", path: "/about#clients" },
    { name: "Our Shop", path: "/contact#shop-gallery" },
  ];

  const support = [
    { name: "Head Office", path: "/contact#Office" },
    { name: "Shop Locations", path: "/contact#Contact" },
    { name: "Terms & Conditions", path: "/terms#terms" },
    { name: "Privacy Policy", path: "/terms#privacy" },
    { name: "Shipping and Returns", path: "/terms#shipping" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/proactivetradingeth",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/251911517628",
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/proactivetrading1",
    },
    {
      icon: Music2,
      label: "TikTok",
      href: "https://tiktok.com/@proactivetradingplc",
    },
  ];

  return (
    <>
      <style>{`
        .footer-wrapper {
          position: relative;
          overflow: hidden;
        }
        .footer-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .footer-overlay-1 {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #2a5da5, #143057, #143057);
          opacity: 0.7;
        }
        .footer-overlay-2 {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #143057, transparent);
          opacity: 0.4;
        }
        .footer-accent-bar {
          position: relative;
          height: 4px;
          background: linear-gradient(to right, #e67817, rgba(230,120,23,0.6), transparent);
        }
       .footer-content {
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.5rem 1.25rem; /* Changed from 3.5rem 1.25rem */
}
@media (min-width: 640px) { .footer-content { padding: 2rem 2rem; } } /* Changed from 4rem 2rem */
@media (min-width: 1024px) { .footer-content { padding: 2.5rem 2rem; } } /* Changed from 5rem 2rem */
      .footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* Changed from 2.5rem */
}
        @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 4fr 2fr 2fr 4fr; gap: 2rem; } }

        .footer-brand-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        @media (min-width: 640px) { .footer-brand-title { font-size: 1.875rem; } }
        .footer-brand-title span { color: #e67817; }

        .footer-desc {
          color: #b0bec5;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 20rem;
        }

        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #b0bec5;
          text-decoration: none;
          transition: color 0.3s;
          font-size: 0.875rem;
        }
        .footer-contact-link:hover { color: #e67817; }
        .footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 0.5rem;
          background: rgba(255,255,255,0.1);
          flex-shrink: 0;
          transition: background 0.3s;
        }
        .footer-contact-link:hover .footer-contact-icon {
          background: rgba(230,120,23,0.2);
        }

        .footer-social-row { display: flex; gap: 0.75rem; }
        .footer-social-btn {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b0bec5;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }
        .footer-social-btn:hover {
          background: #e67817;
          color: #ffffff;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 20px -4px rgba(230,120,23,0.4);
        }

        .footer-col-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-col-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #e67817;
          display: inline-block;
        }

        .footer-link-list { list-style: none; padding: 0; margin: 0; }
        .footer-link-list li { margin-bottom: 0.75rem; }
        .footer-link-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #b0bec5;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s;
          cursor: pointer;
        }
        .footer-link-item:hover { color: #e67817; }
        .footer-link-chevron {
          opacity: 0;
          margin-left: -1rem;
          color: #e67817;
          transition: all 0.3s;
        }
        .footer-link-item:hover .footer-link-chevron {
          opacity: 1;
          margin-left: 0;
        }

        .footer-newsletter {
          margin-top: 3rem;
          padding: 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .footer-newsletter-title {
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .footer-newsletter-row { display: flex; gap: 0.5rem; }
        .footer-newsletter-input {
          flex: 1;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          border-radius: 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.12);
          color: #ffffff;
          outline: none;
          transition: border-color 0.3s;
        }
        .footer-newsletter-input::placeholder { color: rgba(176,190,197,0.5); }
        .footer-newsletter-input:focus { border-color: rgba(230,120,23,0.5); }
        .footer-newsletter-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background: #e67817;
          color: #ffffff;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s;
          display: flex;
          align-items: center;
        }
        .footer-newsletter-btn:hover {
          filter: brightness(1.1);
          transform: scale(1.05);
          box-shadow: 0 4px 16px -2px rgba(230,120,23,0.5);
        }

        .footer-bottom {
  margin-top: 1.5rem; /* Changed from 3.5rem */
  padding-top: 1rem; /* Changed from 1.5rem */
  border-top: 1px solid rgba(255,255,255,0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem; /* Changed from 1rem */
}
        @media (min-width: 640px) { .footer-bottom { flex-direction: row; } }
        .footer-bottom-text {
          color: rgba(176,190,197,0.6);
          font-size: 0.75rem;
        }
        .footer-bottom-flag {
          color: rgba(176,190,197,0.4);
          font-size: 0.75rem;
        }
      `}</style>

      <footer className="footer-wrapper">
        {/* Background */}
        <img src={footerBg} alt="" className="footer-bg-img" />
        <div className="footer-overlay-1" />
        <div className="footer-overlay-2" />

        {/* Top Accent */}
        <div className="footer-accent-bar" />

        {/* Main Content */}
        <div className="footer-content">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <h2 className="footer-brand-title ">
                Proactive <span>Trading</span>
              </h2>
              <p className="footer-desc">
                Your trusted partner for cutting-edge technology solutions.
                Delivering premium electronics across Ethiopia.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <a href="tel:+251911517628" className="footer-contact-link">
                  <span className="footer-contact-icon">
                    <Phone size={16} />
                  </span>
                  +251911517628
                </a>
                <a
                  href="mailto:Pro2actives@gmail.com"
                  className="footer-contact-link"
                >
                  <span className="footer-contact-icon">
                    <Mail size={16} />
                  </span>
                  Pro2actives@gmail.com
                </a>
                <a href="#" className="footer-contact-link">
                  <span className="footer-contact-icon">
                    <MapPin size={16} />
                  </span>
                  Addis Ababa, Ethiopia
                </a>
              </div>

              <div className="footer-social-row">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="footer-social-btn"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="footer-col-title">
                <span className="footer-col-dot" />
                Menu
              </h3>
              <ul className="footer-link-list">
                {shopCategories.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="footer-link-item"
                    >
                      <ChevronRight size={14} className="footer-link-chevron" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="footer-col-title">
                <span className="footer-col-dot" />
                Company
              </h3>
              <ul className="footer-link-list">
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="footer-link-item"
                    >
                      <ChevronRight size={14} className="footer-link-chevron" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Newsletter */}
            <div>
              <h3 className="footer-col-title">
                <span className="footer-col-dot" />
                Contact
              </h3>
              <ul className="footer-link-list">
                {support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="footer-link-item"
                    >
                      <ChevronRight size={14} className="footer-link-chevron" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="footer-newsletter">
                <p className="footer-newsletter-title">
                  Stay updated with deals
                </p>
                <div className="footer-newsletter-row">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="footer-newsletter-input"
                  />
                  <button className="footer-newsletter-btn">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              © {currentYear} Proactive Trading. All rights reserved.
            </p>
            <p className="footer-bottom-flag">
              Delivering Technology Across Ethiopia 🇪🇹
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
