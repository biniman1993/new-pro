import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

// Import all images from assets folder
import hpLogo from '../assets/brandslogo/HP_Logo.png';
import lenovoLogo from '../assets/brandslogo/Lenovo.png';
import dellLogo from '../assets/brandslogo/Dell.png';
import thinkpadLogo from '../assets/brandslogo/ThinkPad.png';
import zteLogo from '../assets/brandslogo/ZTE.png';
import canonLogo from '../assets/brandslogo/canon.jpg';
import asusLogo from '../assets/brandslogo/asus.png';
import appleLogo from '../assets/brandslogo/apple.png';
import acerLogo from '../assets/brandslogo/Acer.png';
import sandiskLogo from '../assets/brandslogo/SanDisk.png';
import vaioLogo from '../assets/brandslogo/Vaio.png';
import epsonLogo from '../assets/brandslogo/epson.png';
import huaweiLogo from '../assets/brandslogo/Huawei.png';
import benqLogo from '../assets/brandslogo/benq.png';
import lgLogo from '../assets/brandslogo/LG.png';
import nokiaLogo from '../assets/brandslogo/NOKIA.png';
import msiLogo from '../assets/brandslogo/MSI.png';
import apcLogo from '../assets/brandslogo/apc.png';
import hikvisionLogo from '../assets/brandslogo/Hikvision.png';
import logitechLogo from '../assets/brandslogo/Logitech.jpg';

const BrandShowcase = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const logos = [
    { id: 1, name: 'HP', image: hpLogo },
    { id: 2, name: 'Lenovo', image: lenovoLogo },
    { id: 3, name: 'Dell', image: dellLogo },
    { id: 4, name: 'ThinkPad', image: thinkpadLogo },
    { id: 5, name: 'ZTE', image: zteLogo },
    { id: 6, name: 'Canon', image: canonLogo },
    { id: 7, name: 'Asus', image: asusLogo },
    { id: 8, name: 'Apple', image: appleLogo },
    { id: 9, name: 'Acer', image: acerLogo },
    { id: 10, name: 'SanDisk', image: sandiskLogo },
    { id: 11, name: 'Vaio', image: vaioLogo },
    { id: 12, name: 'Epson', image: epsonLogo },
    { id: 13, name: 'Huawei', image: huaweiLogo },
    { id: 14, name: 'BenQ', image: benqLogo },
    { id: 15, name: 'LG', image: lgLogo },
    { id: 16, name: 'NOKIA', image: nokiaLogo },
    { id: 17, name: 'MSI', image: msiLogo },
    { id: 18, name: 'APC', image: apcLogo },
    { id: 19, name: 'Hikvision', image: hikvisionLogo },
    { id: 20, name: 'Logitech', image: logitechLogo }
  ];

  // Duplicating for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full py-12 md:py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Element */}
     

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2a5da5]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-[#2a5da5] tracking-widest uppercase">Global Partnerships</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our Trusted <span className="text-[#ff7b16]">Tech Brands</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#ff7b16] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Logo Slider Container */}
        <div className="relative group">
          {/* Fading Edges Overlay */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-20"></div>

          <div className="logo-scroll-container py-10">
            <div className="logo-track">
              {duplicatedLogos.map((logo, index) => {
                // Create unique identifiers for duplicated items
                const uniqueKey = `logo-${logo.id}-${index}`;
                const uniqueHoverId = `hover-${logo.id}-${index}`;
                
                return (
                  <div
                    key={uniqueKey}
                    className="logo-card-wrapper"
                    onMouseEnter={() => setHoveredId(uniqueHoverId)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className={`logo-card ${hoveredId === uniqueHoverId ? 'active' : ''}`}>
                      <img 
                        src={logo.image} 
                        alt={logo.name}
                        className="brand-img"
                        onError={(e) => {
                          console.error(`Failed to load: ${logo.name}`);
                          // Hide broken image and show text fallback
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          
                          // Add text fallback
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-text')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-text';
                            fallback.textContent = logo.name;
                            fallback.style.fontSize = '14px';
                            fallback.style.fontWeight = 'bold';
                            fallback.style.color = '#666';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modern Action Button */}
        <div className="mt-10 text-center">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1c4c97] text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95 shadow-xl hover:shadow-[#2a5da5]/20">
            <span className="relative z-10">Explore All Brands</span>
            <ChevronRight className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300" size={20} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style>{`
        .logo-scroll-container {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .logo-track {
          display: flex;
          width: fit-content;
          animation: infiniteScroll 40s linear infinite;
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        .logo-card-wrapper {
          flex-shrink: 0;
          padding: 0 12px;
        }

        .logo-card {
          width: 120px;
          height: 80px;
          background: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .brand-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        
          transition: all 0.4s ease;
        }

        .fallback-text {
          width: 100%;
          text-align: center;
        }

        .logo-card.active {
          transform: translateY(-10px) scale(1.15);
          border-color: #ff7b16;
          box-shadow: 0 20px 25px -5px rgba(255, 123, 22, 0.15);
          z-index: 50;
        }

        .logo-card.active .brand-img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (min-width: 768px) {
          .logo-card {
            width: 180px;
            height: 110px;
            padding: 25px;
          }
          .logo-card-wrapper {
            padding: 0 20px;
          }
        }

        @media (min-width: 1024px) {
          .logo-card {
            width: 220px;
            height: 130px;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandShowcase;