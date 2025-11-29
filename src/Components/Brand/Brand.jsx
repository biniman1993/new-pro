import { ArrowRight } from 'lucide-react';
import './Brand.css';

const Brand = () => {
  const brands = [
    { id: 1, name: 'Apple', color: '#555555' },
    { id: 2, name: 'Microsoft', color: '#00A4EF' },
    { id: 3, name: 'Google', color: '#4285F4' },
    { id: 4, name: 'Dell', color: '#0066B2' },
    { id: 5, name: 'HP', color: '#0096D6' },
    { id: 6, name: 'Lenovo', color: '#E10000' },
    { id: 7, name: 'Cisco', color: '#1BA0D7' },
    { id: 8, name: 'IBM', color: '#002B55' },
    { id: 9, name: 'Amazon', color: '#FF9900' },
    { id: 10, name: 'Intel', color: '#0071C5' },
    { id: 11, name: 'NVIDIA', color: '#76B900' },
    { id: 12, name: 'AMD', color: '#ED1C24' },
    { id: 13, name: 'Oracle', color: '#F80000' },
    { id: 14, name: 'Vmware', color: '#3D80B3' },
    { id: 15, name: 'Red Hat', color: '#EE0000' },
    { id: 16, name: 'Ubuntu', color: '#DD4814' },
    { id: 17, name: 'Fortinet', color: '#EE3124' },
    { id: 18, name: 'Palo Alto', color: '#1F7BA0' },
    { id: 19, name: 'Cloudflare', color: '#F6821F' },
    { id: 20, name: 'MongoDB', color: '#10AA50' },
    { id: 21, name: 'Docker', color: '#2496ED' },
    { id: 22, name: 'Kubernetes', color: '#326CE5' },
    { id: 23, name: 'Salesforce', color: '#00A1DF' },
    { id: 24, name: 'Adobe', color: '#FF0000' },
    { id: 25, name: 'Autodesk', color: '#0696D7' },
    { id: 26, name: 'SAP', color: '#00A4EF' },
    { id: 27, name: 'Tableau', color: '#E97627' },
    { id: 28, name: 'Atlassian', color: '#0052CC' },
    { id: 29, name: 'Jira', color: '#0052CC' },
    { id: 30, name: 'Slack', color: '#E01E5A' }
  ];

  return (
    <div className="brand-page">
      {/* New TechCatalog-style Header */}
      <header className="relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] z-0" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c4c97]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our <span className="text-[#ff7b16]">Brands</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light mb-8">
            Discover the latest high-performance technology curated for professionals and enthusiasts.
          </p>
          
          {/* Additional Container at Top */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-white text-base md:text-lg leading-relaxed">
              MBUZZ has developed long-lasting partnerships with leading technology vendors, allowing us to provide best-in-class products and services to our clients. Spanning the entire technology spectrum, our vendors are market trailblazers in information technology, mobile, security, and networking solutions. We drive partner success through our expert on-the-ground vendor knowledge, leveraging our specialized pre-sales solution teams, as well as access to programs and resources.
            </p>
          </div>
        </div>
      </header>

      {/* Rest of your existing code remains the same */}
      <section className="brands-section">
        <div className="brands-container">
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.id} className="brand-card">
                <div className="brand-logo" style={{ borderColor: brand.color }}>
                  <span className="logo-text" style={{ color: brand.color }}>
                    {brand.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <p className="brand-name">{brand.name}</p>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-gradient-blob blob-1"></div>
          <div className="cta-gradient-blob blob-2"></div>
          <div className="cta-gradient-blob blob-3"></div>
        </div>

        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together & Boost Your Technology Success!</h2>
          <button className="cta-button">
            <span className="button-text">Get Started</span>
            <ArrowRight className="button-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Brand;