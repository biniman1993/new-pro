import { ArrowRight } from 'lucide-react';
import './Brand.css';

const Brand = () => {
  const brands = [
  // --- Major Tech & Computers ---
  { id: 1, name: 'Apple', color: '#555555' },
  { id: 2, name: 'Microsoft', color: '#00A4EF' },
  { id: 3, name: 'Google', color: '#4285F4' },
  { id: 4, name: 'Dell', color: '#0066B2' },
  { id: 5, name: 'HP', color: '#0096D6' },
  { id: 6, name: 'Lenovo', color: '#E10000' },
  { id: 7, name: 'Acer', color: '#83B81A' },
  { id: 8, name: 'ASUS', color: '#0F4C81' },
  { id: 9, name: 'MSI', color: '#CC0000' },
  { id: 10, name: 'iBUYPOWER', color: '#D50000' },
  { id: 11, name: 'CyberPowerPC', color: '#FF4F00' },
  { id: 12, name: 'NZXT', color: '#6E00FF' },
  { id: 13, name: 'Gigabyte', color: '#0066FF' },
  { id: 14, name: 'Predator', color: '#00BCD4' },
  { id: 15, name: 'AORUS', color: '#FF6600' },
  { id: 16, name: 'Meta Quest', color: '#123456' },

  // --- CPU, GPU, Motherboard, PC Components ---
  { id: 17, name: 'Intel', color: '#0071C5' },
  { id: 18, name: 'AMD', color: '#ED1C24' },
  { id: 19, name: 'NVIDIA', color: '#76B900' },
  { id: 20, name: 'ASRock', color: '#B30000' },
  { id: 21, name: 'EVGA', color: '#333333' },
  { id: 22, name: 'Sapphire', color: '#0033A0' },
  { id: 23, name: 'PNY', color: '#FFD700' },
  { id: 24, name: 'XFX', color: '#222222' },
  { id: 25, name: 'Zotac', color: '#FFCC00' },
  { id: 26, name: 'Corsair', color: '#FFD700' },
  { id: 27, name: 'G.SKILL', color: '#E60012' },
  { id: 28, name: 'Crucial', color: '#0096D6' },
  { id: 29, name: 'Kingston', color: '#CC0000' },
  { id: 30, name: 'Patriot Memory', color: '#003399' },
  { id: 31, name: 'Samsung', color: '#1428A0' },
  { id: 32, name: 'SK hynix', color: '#FF6600' },
  { id: 33, name: 'Team Group', color: '#333333' },
  { id: 34, name: 'Seagate', color: '#00A3E0' },
  { id: 35, name: 'Western Digital', color: '#005195' },
  { id: 36, name: 'SeaSonic', color: '#004C99' },
  { id: 37, name: 'Thermaltake', color: '#FF6600' },
  { id: 38, name: 'Fractal Design', color: '#000000' },
  { id: 39, name: 'Lian Li', color: '#666666' },
  { id: 40, name: 'In Win', color: '#CC0000' },
  { id: 41, name: 'Cooler Master', color: '#7014E8' },
  { id: 42, name: 'be quiet!', color: '#FFA500' },

  // --- Networking ---
  { id: 43, name: 'Cisco', color: '#1BA0D7' },
  { id: 44, name: 'Netgear', color: '#5225A0' },
  { id: 45, name: 'TP-Link', color: '#00BFA5' },
  { id: 46, name: 'Ubiquiti', color: '#0099FF' },
  { id: 47, name: 'Synology', color: '#222222' },
  { id: 48, name: 'Grandstream', color: '#0047AB' },
  { id: 49, name: 'APC', color: '#008000' },

  // --- Printers & Scanners ---
  { id: 50, name: 'Canon', color: '#CC0000' },
  { id: 51, name: 'Epson', color: '#003399' },
  { id: 52, name: 'Brother', color: '#0000AA' },
  { id: 53, name: 'Kodak', color: '#FFCC00' },
  { id: 54, name: 'Fujitsu', color: '#C70039' },

  // --- Accessories ---
  { id: 55, name: 'Logitech', color: '#00B8FC' },
  { id: 56, name: 'Razer', color: '#00FF00' },
  { id: 57, name: 'HyperX', color: '#CC0000' },
  { id: 58, name: 'Creative Labs', color: '#000000' },
  { id: 59, name: 'Jabra', color: '#FFCC00' },
  { id: 60, name: 'Beyerdynamic', color: '#003399' },
  { id: 61, name: 'Elgato', color: '#2244FF' },
  { id: 62, name: 'ROCCAT', color: '#00ADEF' },

  // --- Gaming & Consoles ---
  { id: 63, name: 'PlayStation', color: '#003791' },
  { id: 64, name: 'Nintendo', color: '#E60012' },
  { id: 65, name: 'Xbox', color: '#107C10' },
  { id: 66, name: 'Bandai Namco', color: '#FF4C00' },
  { id: 67, name: 'Capcom', color: '#001F5B' },
  { id: 68, name: 'Ubisoft', color: '#000000' },

  // --- Software ---
  { id: 69, name: 'Adobe', color: '#FF0000' },
  { id: 70, name: 'BitDefender', color: '#B80000' },
  { id: 71, name: 'Norton', color: '#FFD100' },
  { id: 72, name: 'Acronis', color: '#00285C' },
  { id: 73, name: 'ESET', color: '#00A3CC' },

  // --- Displays & Digital Signage ---
  { id: 74, name: 'Samsung Display', color: '#1428A0' },
  { id: 75, name: 'LG Display', color: '#A50034' },
  { id: 76, name: 'Azetec Display', color: '#444444' },
  { id: 77, name: 'Digital Signage', color: '#222222' }
];


  return (
    <div className="brand-page">
      {/* New TechCatalog-style Header */}
      <header className="relative overflow-hidden mb-8 mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] z-0" />
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c4c97]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our <span className="text-[#ff7b16]">Brands</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light mb-8">
            Discover the latest high-performance technology curated for professionals and enthusiasts.
          </p>
          
         
        </div>
      </header>
<section > 
 {/* Additional Container at Top */}
<div className="-mt-[70px] bg-white backdrop-blur-sm  rounded-2xl p-6 md:p-8 max-w-5xl mx-auto ">    
   <p className="text-black text-base md:text-lg leading-relaxed">
              MBUZZ has developed long-lasting partnerships with leading technology vendors, allowing us to provide best-in-class products and services to our clients. Spanning the entire technology spectrum, our vendors are market trailblazers in information technology, mobile, security, and networking solutions. We drive partner success through our expert on-the-ground vendor knowledge, leveraging our specialized pre-sales solution teams, as well as access to programs and resources.
            </p>
          </div>
</section>
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