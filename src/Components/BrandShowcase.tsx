import { useState } from 'react';
import HP_Logo from '../assets/brandslogo/HP_Logo.png';
import Lenovo from '../assets/brandslogo/Lenovo.png';
import Dell from '../assets/brandslogo/Dell.png';
import ThinkPad from '../assets/brandslogo/ThinkPad.png';
import ZTE from '../assets/brandslogo/ZTE.png';
import Canon from '../assets/brandslogo/canon.jpg';
import Asus from '../assets/brandslogo/asus.png';
import Apple from '../assets/brandslogo/apple.png';
import Acer from '../assets/brandslogo/acer.png';
import SanDisk from '../assets/brandslogo/SanDisk.png';
import Epson from '../assets/brandslogo/epson.png';
import Huawei from '../assets/brandslogo/Huawei.png';
import BenQ from '../assets/brandslogo/benq.png';

const BrandShowcase = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const logos = [
    { id: 1, name: 'HP', image: HP_Logo },
    { id: 2, name: 'Lenovo', image: Lenovo },
    { id: 3, name: 'Dell', image: Dell },
    { id: 4, name: 'ThinkPad', image: ThinkPad },
    { id: 5, name: 'ZTE', image: ZTE },
    { id: 6, name: 'Canon', image: Canon },
    { id: 7, name: 'Asus', image: Asus },
    { id: 8, name: 'Apple', image: Apple },
    { id: 9, name: 'Acer', image: Acer },
    { id: 10, name: 'SanDisk', image: SanDisk },
    { id: 11, name: 'HP Duplicate', image: HP_Logo },
    { id: 12, name: 'Epson', image: Epson },
    { id: 13, name: 'Huawei', image: Huawei },
    { id: 14, name: 'BenQ', image: BenQ }
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-4">
            <span className="text-sm font-semibold text-orange-600">PREMIUM PARTNERSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Tech Brands
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full"></span>
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            We collaborate with the world's leading technology innovators
          </p>
        </div>

        <div className="relative py-8">
         
          <div className="logo-scroll">
            {duplicatedLogos.map((logo, index) => {
              const uniqueId = `${logo.id}-${index}`;
              const isHovered = hoveredId === uniqueId;

              return (
                <div
                  key={uniqueId}
                  className="logo-item"
                  onMouseEnter={() => setHoveredId(uniqueId)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className={`logo-card ${isHovered ? 'hovered' : ''}`}>
                    <div className="logo-placeholder">
                      <img 
                        src={logo.image} 
                        alt={logo.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">14+</div>
                <div className="text-xs sm:text-sm text-gray-600">Global Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Authentic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .logo-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .logo-scroll:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          padding: 0 1.5rem;
          min-width: 180px;
        }

        .logo-card {
          position: relative;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          border: 2px solid #e5e7eb;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-card:hover {
          border-color: #e5e7eb;
          box-shadow: none;
        }

        .logo-card.hovered {
          transform: scale(1.35);
          z-index: 20;
          border-color: #e5e7eb;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .logo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          transition: all 0.5s ease;
        }

        .logo-card.hovered .logo-placeholder {
          transform: none;
        }

        @media (max-width: 1024px) {
          .logo-scroll {
            animation-duration: 35s;
          }

          .logo-item {
            min-width: 160px;
            padding: 0 1rem;
          }

          .logo-card {
            height: 120px;
            padding: 1rem;
          }
        }

        @media (max-width: 768px) {
          .logo-scroll {
            animation-duration: 30s;
          }

          .logo-item {
            min-width: 140px;
            padding: 0 0.75rem;
          }

          .logo-card {
            height: 110px;
            padding: 0.75rem;
          }

          .logo-card.hovered {
            transform: scale(1.25);
          }
        }

        @media (max-width: 640px) {
          .logo-scroll {
            animation-duration: 25s;
          }

          .logo-item {
            min-width: 120px;
            padding: 0 0.5rem;
          }

          .logo-card {
            height: 100px;
            padding: 0.5rem;
          }

          .logo-card.hovered {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default BrandShowcase;