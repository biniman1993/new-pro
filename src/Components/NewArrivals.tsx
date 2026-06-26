import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

// Import local images
import img1 from '../assets/1p.webp';
import img2 from '../assets/2p.webp';
import img3 from '../assets/3p.webp';
import img4 from '../assets/4p.webp';
import img5 from '../assets/5p.webp';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  phoneLink: string;
  whatsappLink: string;
  telegramLink: string;
}

interface NewArrivalsProps {
  products?: Product[];
  title?: string;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ 
  products,
  title = "New Arrivals" 
}) => {
const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Canon imageRUNNER 2945i',
    description: 'A3 Monochrome Laser Multifunction Printer with 45ppm print speed, 7" touchscreen, 1200x1200 dpi resolution, 100-sheet DADF, duplex printing, AirPrint & Mopria support, 1.6GHz dual-core processor, 2GB RAM, 64GB storage, and up to 2,300 sheet paper capacity.',
    image: img1,
    phoneLink: 'tel:+251911517628',
    whatsappLink: 'https://wa.me/251911517628',
    telegramLink: 'https://t.me/tibe2581'
  },
  {
    id: 2,
    name: 'Canon imageRUNNER 2945i',
    description: 'High-speed A3 MFP with 45 ppm copy speed, 5.3 seconds first-copy-out time, 600x600 dpi copy resolution, up to 999 copies, 25%-400% zoom, and advanced copy features including N on 1, ID Card Copy, and Skip Blank Pages.',
    image: img2,
    phoneLink: 'tel:+251911517628',
    whatsappLink: 'https://wa.me/251911517628',
    telegramLink: 'https://t.me/tibe2581'
  },
  {
    id: 3,
    name: 'Canon imageRUNNER 2945i',
    description: 'Professional scanning solution with 70/70 ipm scan speed, 600x600 dpi resolution, 100-sheet DADF, scan to email, network folder, USB, and cloud services (uniFLOW Online). Supports Searchable PDF, PDF/A, XPS, and Office Open XML formats.',
    image: img3,
    phoneLink: 'tel:+251911517628',
    whatsappLink: 'https://wa.me/251911517628',
    telegramLink: 'https://t.me/tibe2581'
  },
  {
    id: 4,
    name: 'Canon imageRUNNER 2945i',
    description: 'Advanced fax capabilities with Super G3 33.6 kbps modem, up to 30,000 pages memory, 200 speed dials, sequential broadcast to 256 addresses, and secure features like Confidential Mailbox and Memory Backup.',
    image: img4,
    phoneLink: 'tel:+251911517628',
    whatsappLink: 'https://wa.me/251911517628',
    telegramLink: 'https://t.me/tibe2581'
  },
  {
    id: 5,
    name: 'Canon imageRUNNER 2945i',
    description: 'Enterprise security features including User Authentication, Department ID, TLS 1.3, IPSec, IEEE802.1X, SNMPv3, Firewall, Secure Print, Encrypted PDF, Device Signature, Audit Log, and Remote Management 2FA.',
    image: img5,
    phoneLink: 'tel:+251911517628',
    whatsappLink: 'https://wa.me/251911517628',
    telegramLink: 'https://t.me/tibe2581'
  }
];

  const displayProducts = products && products.length > 0 ? products : defaultProducts;
  
  // Triple the products for seamless infinite scroll
  const tickerProducts = [...displayProducts, ...displayProducts, ...displayProducts];

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2a5da5]/10 rounded-full mb-3">
            <span className="w-2 h-2 bg-[#ff7b16] rounded-full animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2a5da5]">
              Fresh Stock
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* CSS Animation Styles */}
        <style>{`
          @keyframes scrollRightToLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }

          .animate-scroll {
            animation: scrollRightToLeft 30s linear infinite;
            width: max-content;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          /* Mask gradient for smooth fade edges */
          .mask-gradient-edges {
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        `}</style>

        {/* Smooth Right-to-Left Infinite Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden mask-gradient-edges">
          <div className="flex gap-5 w-max animate-scroll py-4">
            {tickerProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-[260px] sm:w-[280px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col flex-shrink-0 group"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a5da5]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-[#2a5da5] transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed min-h-[3.5rem]">
                      {product.description}
                    </p>
                  </div>

                  {/* Modern Connect Buttons Grid */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-50">
                    <a
                      href={product.phoneLink}
                      className="flex items-center justify-center p-2 bg-[#2a5da5]/5 text-[#2a5da5] hover:bg-[#2a5da5] hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
                      title="Call Now"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={product.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href={product.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
                      title="Telegram"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewArrivals;