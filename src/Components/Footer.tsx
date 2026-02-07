import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopCategories = [
    { name: 'Laptops', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Networking', href: '#' },
     { name: 'New Arival', href: '#' },
  ];

  const company = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Profile', href: '#' },
    { name: 'Brand', href: '#' },
    { name: 'Store ', href: '#' },
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
  ];

  const legal = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .footer-link:hover {
          color: #e67817;
          transform: translateX(4px);
        }

        .social-icon-btn:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <footer className="bg-gradient-to-b from-[#091a49] to-[#163868] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
            {/* Brand & Contact Section */}
            <div className="col-span-1 lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-[#e67817] to-[#e67817] bg-clip-text text-transparent">
                  Proactive Trading
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your trusted partner for cutting-edge technology solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="tel:+251911123456" className="flex items-center gap-3 text-gray-300 hover:text-[#e67817] transition-colors group">
                  <Phone size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+251 911 123 456</span>
                </a>
                <a href="mailto:info@proactivetrading.et" className="flex items-center gap-3 text-gray-300 hover:text-[#e67817] transition-colors group">
                  <Mail size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">info@proactive.et</span>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Follow Us</h3>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="social-icon-btn w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-[#e67817] hover:to-[#e67817] flex items-center justify-center transition-all duration-300"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Shop Categories */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#e67817] after:to-[#e67817]">
                Categories
              </h3>
              <ul className="space-y-3">
                {shopCategories.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="footer-link text-gray-300 text-sm hover:text-[#e67817] transition-all duration-300">
                      → {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#e67817] after:to-[#e67817]">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="footer-link text-gray-300 text-sm hover:text-[#e67817] transition-all duration-300">
                      → {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#e67817] after:to-[#e67817]">
                Support
              </h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="footer-link text-gray-300 text-sm hover:text-[#e67817] transition-all duration-300">
                      → {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Location */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#e67817] after:to-[#e67817]">
                Legal
              </h3>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="footer-link text-gray-300 text-sm hover:text-[#e67817] transition-all duration-300">
                      → {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 mt-4 text-[#e67817] text-sm font-semibold hover:text-[#e67817] transition-colors group">
                <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                <span>Find Location</span>
              </a>
            </div>
          </div>

          {/* Divider */}

         
        </div>

        {/* Top Border Accent */}
      </footer>
    </>
  );
};

export default Footer;
