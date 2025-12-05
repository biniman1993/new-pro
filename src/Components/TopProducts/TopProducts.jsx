import React, { useEffect, useRef, useState } from "react";
import laptopImg from "../../assets/logo/laptoplogo.png";
import projectorImg from "../../assets/logo/desktoplogo.png";
import displayImg from "../../assets/logo/monitorlogo.png";
import panelImg from "../../assets/logo/networkinglogo.png";
import officeImg from "../../assets/logo/printerlogo.png";

const products = [
  { name: "Laptop", count: "38 products", img: laptopImg },
  { name: "Desktop", count: "42 products", img: projectorImg },
  { name: "Monitor", count: "42 products", img: displayImg },
  { name: "Networking", count: "21 products", img: panelImg },
  { name: "Printer", count: "68 products", img: officeImg },
  { name: "Display", count: "68 products", img: officeImg },
];

export default function TopProducts({ onViewMore }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
 <h2 
  className={`mb-4 transition-all duration-700 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{
    background: 'linear-gradient(135deg, #1c4174 0%, #1a437c 50%, #ff7b16 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 800,
    fontSize: '3rem'
  }}
>
  Most Popular Products
</h2>
          <div 
            className={`h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-blue-600 to-orange-500 rounded-full transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 80 + 400}ms`,
              }}
            >
              {/* Image Container */}
<div className="h-30 md:h-38 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
  <img 
    src={item.img} 
    alt={item.name}
    className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
  />
  
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <button
    onClick={() => onViewMore && onViewMore(item.name)}
    className="px-4 py-2 bg-white text-[#ffffff] font-semibold rounded-lg border-2 border-[#ffffff] backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
  >
    View More
  </button>
</div>
</div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">{item.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => onViewMore && onViewMore("All")}
          >
            View All Categories
          </button>
          
        </div>
      </div>
    </div>
  );
}