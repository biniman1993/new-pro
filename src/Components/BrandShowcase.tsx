import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
// Import statements remain the same as your original code...

const BrandShowcase = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const logos = [
    { id: 1, name: 'HP', image: "/assets/brandslogo/HP_Logo.png" },
    { id: 2, name: 'Lenovo', image: "/assets/brandslogo/Lenovo.png" },
    { id: 3, name: 'Dell', image: "/assets/brandslogo/Dell.png" },
    { id: 4, name: 'ThinkPad', image: "/assets/brandslogo/ThinkPad.png" },
    { id: 5, name: 'ZTE', image: "/assets/brandslogo/ZTE.png" },
    { id: 6, name: 'Canon', image: "/assets/brandslogo/canon.jpg" },
    { id: 7, name: 'Asus', image: "/assets/brandslogo/asus.png" },
    { id: 8, name: 'Apple', image: "/assets/brandslogo/apple.png" },
    { id: 9, name: 'Acer', image: "/assets/brandslogo/acer.png" },
    { id: 10, name: 'SanDisk', image: "/assets/brandslogo/SanDisk.png" },
    { id: 11, name: 'HP Duplicate', image: "/assets/brandslogo/HP_Logo.png" },
    { id: 12, name: 'Epson', image: "/assets/brandslogo/epson.png" },
    { id: 13, name: 'Huawei', image: "/assets/brandslogo/Huawei.png" },
    { id: 14, name: 'BenQ', image: "/assets/brandslogo/benq.png" }
  ];

  // Duplicating for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full py-12 md:py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2a5da5] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ff7b16] rounded-full blur-[120px]"></div>
      </div>

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
                const uniqueId = `${logo.id}-${index}`;
                return (
                  <div
                    key={uniqueId}
                    className="logo-card-wrapper"
                    onMouseEnter={() => setHoveredId(uniqueId)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className={`logo-card ${hoveredId === uniqueId ? 'active' : ''}`}>
                      <img 
                        src={logo.image} 
                        alt={logo.name}
                        className="brand-img"
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
          padding: 0 12px; /* Gap control */
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
        }

        .brand-img {
          max-width: 100%;
          max-height: 100%;
          object-contain;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.4s ease;
        }

        /* Hover States */
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

        /* Tablet Adjustments */
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

        /* Desktop Adjustments */
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