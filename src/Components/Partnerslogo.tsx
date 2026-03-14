import { useState } from 'react';
import addis from '../assets/awardlogo/addis.webp';
import cbe1 from '../assets/awardlogo/cbe1.webp';
import def from '../assets/awardlogo/def.webp';
import ethoair from '../assets/awardlogo/ethoair.webp';
import helth from '../assets/awardlogo/helth.webp';
import image from '../assets/awardlogo/image.webp';
import insa from '../assets/awardlogo/insa.webp';
import prim from '../assets/awardlogo/prim.webp';
import trad from '../assets/awardlogo/trad.webp';

const Partnerslogo = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const logos = [
    { id: 1, name: 'Addis', image: addis },
    { id: 2, name: 'CBE', image: cbe1 },
    { id: 3, name: 'Defense', image: def },
    { id: 4, name: 'Ethiopian Airlines', image: ethoair },
    { id: 5, name: 'Health', image: helth },
    { id: 6, name: 'Image', image: image },
    { id: 7, name: 'INSA', image: insa },
    { id: 8, name: 'Prime', image: prim },
    { id: 9, name: 'Trade', image: trad }
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-16 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative py-8 overflow-visible">
          
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
                    <img 
                      src={logo.image} 
                      alt={logo.name}
                      className="logo-image"
                    />
                  </div>
                </div>
              );
            })}
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
          animation: scroll 30s linear infinite;
          will-change: transform;
          overflow: visible !important;
        }

        .logo-scroll:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          padding: 0 1.5rem;
          min-width: 200px;
          position: relative;
          z-index: 1;
        }

        .logo-card {
          position: relative;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          border: 2px solid #f3f4f6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible !important;
          z-index: 10;
        }

        .logo-card:hover {
          border-color: #ea580c;
          box-shadow: 0 20px 40px rgba(234, 88, 12, 0.1);
          z-index: 50 !important;
        }

        .logo-card.hovered {
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
          transform: scale(1.35);
          z-index: 100 !important;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .logo-card:hover .logo-image {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .logo-scroll {
            animation-duration: 25s;
          }

          .logo-item {
            min-width: 180px;
            padding: 0 1rem;
          }

          .logo-card {
            height: 120px;
            padding: 1rem;
          }
          
          .logo-card.hovered {
            transform: scale(1.3);
          }
        }

        @media (max-width: 768px) {
          .logo-scroll {
            animation-duration: 20s;
          }

          .logo-item {
            min-width: 150px;
            padding: 0 0.75rem;
          }

          .logo-card {
            height: 100px;
            padding: 0.75rem;
          }

          .logo-card.hovered {
            transform: scale(1.25);
          }
        }

        @media (max-width: 640px) {
          .logo-scroll {
            animation-duration: 15s;
          }

          .logo-item {
            min-width: 130px;
            padding: 0 0.5rem;
          }

          .logo-card {
            height: 90px;
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

export default Partnerslogo;