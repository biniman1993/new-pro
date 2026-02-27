import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Laptop, Monitor, Network, Printer, 
  Tv, Cpu, ArrowRight 
} from "lucide-react";

interface Product {
  name: string;
  count: string;
  icon: React.ReactNode;
}

interface TopProductsProps {
  onViewMore?: (category: string) => void;
}

const products: Product[] = [
  { name: "Laptop", count: "38 products", icon: <Laptop size={26} /> },
  { name: "Desktop", count: "42 products", icon: <Cpu size={26} /> },
  { name: "Monitor", count: "42 products", icon: <Monitor size={26} /> },
  { name: "Networking", count: "21 products", icon: <Network size={26} /> },
  { name: "Printer", count: "68 products", icon: <Printer size={26} /> },
  { name: "Display", count: "68 products", icon: <Tv size={26} /> },
];

export default function TopProducts({ onViewMore }: TopProductsProps) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleProductClick = (productName: string) => {
    // Call the onViewMore prop with the category name
    // This will trigger the scrollToSection function in App.jsx
    if (onViewMore) {
      onViewMore(productName);
    }
  };

  const handleViewAllClick = () => {
    navigate("/Catalog");
  };

  return (
    <div className="relative w-full bg-[#ffffff] overflow-hidden py-10 md:py-16 px-3">
      {/* Background Glows (Bard style subtle gradients) */}
      
      <div className="relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } font-extrabold text-2xl md:text-4xl lg:text-5xl text-[#0a0e27]`}
          >
            Most Popular <span className="text-[#ff7b16]">Products</span>
          </h2>
          <div className={`mt-3 h-1 w-20 mx-auto bg-[#ff7b16] rounded-full transition-all duration-1000 delay-300 ${visible ? "scale-x-100" : "scale-x-0"}`} />
        </div>

        {/* GRID LOGIC: 
            grid-cols-3 = 3 cards per row on mobile (creates 2 rows for 6 items)
            sm:grid-cols-6 = Force 6 cards in 1 row for tablets, small laptops, and desktops
        */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(item.name)}
              className={`group relative flex flex-col items-center p-3 md:p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 cursor-pointer ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {/* Modern Icon Box */}
              <div className="mb-2 p-2 md:p-3 rounded-lg bg-gray-50 text-[#1c4c97] group-hover:bg-[#1c4c97] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                {item.icon}
              </div>

              {/* Text - Smaller font for tighter grid */}
              <h3 className="text-[10px] md:text-sm font-bold text-gray-800 text-center line-clamp-1 group-hover:text-[#ff7b16] transition-colors uppercase tracking-tight">
                {item.name}
              </h3>
              
              <p className="hidden md:block text-[9px] text-gray-500 mt-1 font-medium">
                {item.count}
              </p>

              {/* Minimal Hover Indicator */}
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
                <ArrowRight size={14} className="text-[#ff7b16]" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button
            onClick={handleViewAllClick}
            className="group relative px-7 py-3 bg-gradient-to-r from-[#1c4c97] to-[#07162e] text-white font-bold rounded-full overflow-hidden shadow-lg transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            <span className="relative z-10">Explore All Categories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b16] to-[#07162e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}