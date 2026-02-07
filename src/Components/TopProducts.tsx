import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define TypeScript interfaces
interface Product {
  name: string;
  count: string;
  img: string;
}

interface TopProductsProps {
  onViewMore?: (category: string) => void;
}

// Import your images or use placeholders
const laptopImg = "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400";
const desktopImg = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400";
const monitorImg = "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400";
const networkingImg = "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400";
const printerImg = "https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=400";
const displayImg = "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=400";

const products: Product[] = [
  { name: "Laptop", count: "38 products", img: laptopImg },
  { name: "Desktop", count: "42 products", img: desktopImg },
  { name: "Monitor", count: "42 products", img: monitorImg },
  { name: "Networking", count: "21 products", img: networkingImg },
  { name: "Printer", count: "68 products", img: printerImg },
  { name: "Display", count: "68 products", img: displayImg },
];

export default function TopProducts({ onViewMore }: TopProductsProps) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleClick = () => {
    onViewMore && onViewMore("All");
    navigate("/Catalog");
  };

  const handleProductClick = (productName: string) => {
    onViewMore && onViewMore(productName);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-white overflow-hidden py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Blurred Glow Elements - Responsive */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#0d428b] rounded-full filter blur-[120px] sm:blur-[150px] opacity-20 z-0 -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] bg-[#2a5da5] rounded-full filter blur-[150px] sm:blur-[180px] opacity-30 z-0 translate-x-1/4"></div>

      {/* All content */}
      <div className="relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`mb-3 sm:mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: "linear-gradient(135deg, #1c4174 0%, #1a437c 50%, #ff7b16 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              lineHeight: "1.2",
            }}
          >
            Most Popular Products
          </h2>

          <div
            className={`h-1 w-20 sm:w-24 md:w-32 mx-auto bg-gradient-to-r from-blue-600 to-orange-500 rounded-full transition-all duration-700 delay-200 ${
              visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        {/* Products Grid - Responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-100 overflow-hidden transition-all duration-500 cursor-pointer ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${(hoveredIndex === index && !isTouchDevice) ? '-translate-y-2 shadow-xl' : 'hover:-translate-y-1 hover:shadow-lg'}`}
              style={{
                transitionDelay: `${index * 80 + 400}ms`,
              }}
              onMouseEnter={() => !isTouchDevice && setHoveredIndex(index)}
              onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
              onClick={() => handleProductClick(item.name)}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 150)}
            >
              {/* Image Box - Responsive height */}
              <div className="h-28 sm:h-36 md:h-30 lg:h-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain p-3 sm:p-4 md:p-6 transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/200x150/1c4c97/FFFFFF?text=${item.name}`;
                  }}
                />
                
                {/* View More Overlay - Always visible on mobile, hover on desktop */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#1c4c97]/90 to-[#0a0e27]/90 flex items-center justify-center transition-all duration-300 ${
                  (hoveredIndex === index || isTouchDevice) ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-[#1c4c97] font-semibold rounded-lg border-2 border-white transform transition-all duration-300 hover:bg-white/90 hover:scale-105 text-xs sm:text-sm md:text-base"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(item.name);
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1 group-hover:text-[#1c4c97] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-8 sm:mt-12 md:mt-16 transition-all duration-700 delay-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3.5 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group text-sm sm:text-base md:text-lg"
            onClick={handleClick}
            style={{
              background: 'linear-gradient(135deg, #1c4c97 0%, #0a0e27 100%)',
              boxShadow: '0 10px 30px rgba(28, 76, 151, 0.4)',
            }}
          >
            <span className="relative z-10">View All Categories</span>
            
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b16] to-[#e47325] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}