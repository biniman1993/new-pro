import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuData = {
    Desktop: [
      "Business Desktop",
      "Gaming Desktop", 
      "All-in-One PC",
      "Mini Desktop",
      "Workstation"
    ],
    Laptop: [
      "Business Laptop",
      "Student Laptop",
      "Ultrabook / Thin & Light",
      "Gaming Laptop",
      "2-in-1 Convertible Laptop"
    ],
    Monitor: [
      "Full HD Monitor",
      "2K / 4K Monitor",
      "Gaming Monitor",
      "Curved Monitor",
      "Professional / Color-Accurate Monitor"
    ],
    Networking: [
      "Home Networking",
      "Commercial Networking",
      "Network Accessories",
      "Routers & Switches",
      "Cables & Connectors"
    ],
    Accessories: [
      "Keyboard & Mouse",
      "Webcams",
      "Headphones",
      "USB Hubs",
      "Laptop Stands"
    ],
    Printer: [
      "Inkjet Printer",
      "Laser Printer",
      "All-in-One Printer",
      "Scanners",
      "Printer Accessories",
      "Document Printer",
      "Large Format Printer",
      "ID Card Printer",
      "POS Printer",
      "Label Printer",
      "Photocopier",
      "Toner",
      "Ink Tank Printer",
      "Ink Bottle",
      "Barcode Scanner",
      "Ribbon",
      "Cartridge",
      "Printer Drum",
      "Printer Paper"
    ],
    Projector: [
      "Business Projector",
      "Home Cinema Projector",
      "Portable Projector",
      "Short-Throw Projector",
      "Projector Accessories"
    ],
    Components: [
      "Processor",
      "CPU Cooler",
      "Water / Liquid Cooling",
      "Motherboard",
      "Graphics Card",
      "Power Supply",
      "Casing",
      "Casing Cooler",
      "Optical Disk Drive",
      "Vertical Graphics Card Holder",
      "RAM"
    ],
    "Digital Display": [
      "LED Digital Display",
      "Video Wall Panels",
      "Advertising Displays",
      "Indoor Display",
      "Outdoor Display",
      "Interactive Flat Panel",
      "Interactive White Board",
      "Video Wall",
      "Signage",
      "Kiosk"
    ],
    Server: [
      "Application Servers",
      "GPU Servers",
      "Storage Servers",
      "Blade Servers",
      "Network Attached Storage (NAS)",
      "IP SAN Storage",
      "Direct Attached Storage (DAS)",
      "Server Accessories"
    ],
  };

  const menuItems = Object.keys(menuData);

  // Function to convert subcategory name to URL-friendly format
  const formatSubcategoryName = (name) => {
    return name
      .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '') // Remove special characters
      .replace(/\s+/g, '') // Remove spaces
      .replace(/\//g, '') // Remove slashes
      .replace(/&/g, 'and'); // Replace & with 'and'
  };

  const handleMainCategoryClick = (category) => {
    // When clicking main category, navigate to its first subcategory
    const firstSubcategory = menuData[category][0];
    const formattedSubcategory = formatSubcategoryName(firstSubcategory);
    navigate(`/Catalog/${formattedSubcategory}`);
  };

  const handleSubcategoryClick = (mainCategory, subcategory) => {
    // When clicking subcategory, navigate to that specific subcategory
    const formattedSubcategory = formatSubcategoryName(subcategory);
    navigate(`/Catalog/${formattedSubcategory}`);
  };

  // Hide on tablet (md) and below, show on lg and above
  if (window.innerWidth < 1024) {
    return null;
  }

  return (
    <div 
      className={`hidden lg:block fixed top-16 left-0 w-full z-40 
       bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] py-1
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex justify-center">
        <ul className="flex gap-6 list-none m-0 px-6 whitespace-nowrap relative capitalize">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredItem(item)}
              onClick={() => handleMainCategoryClick(item)}
              className={`relative text-white text-sm font-medium cursor-pointer 
                px-3 py-2 rounded transition-all duration-300
                ${hoveredItem === item ? 'text-orange-400' : ''}
                hover:text-orange-400`}
            >
              <span className="relative z-10">{item}</span>
              {/* Animated underline */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 
                w-4/5 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded
                transition-transform duration-300 origin-center
                ${hoveredItem === item ? 'scale-x-100' : 'scale-x-0'}`} />
              
              {hoveredItem === item && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 
                    mt-2 z-50 min-w-[280px] max-w-[800px] w-max"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={`bg-gradient-to-br from-white/98 to-gray-50/98 
                    backdrop-blur-xl p-3 rounded-lg shadow-2xl shadow-black/30
                    ${menuData[item].length > 5 ? 
                      'grid grid-cols-2 gap-3 w-[550px] max-h-96 overflow-y-auto' : 
                      'grid grid-cols-1 gap-2.5 w-[280px] max-h-96 overflow-y-auto'}`}
                  >
                    {menuData[item].map((subcategory, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg
                          bg-gradient-to-br from-white/90 to-gray-50/90
                          border border-orange-400/10 cursor-pointer relative
                          overflow-hidden opacity-0 translate-y-[-8px]
                          animate-[cardSlideIn_0.4s_ease-out_forwards]
                          hover:translate-x-1 hover:scale-[1.02]
                          hover:bg-gradient-to-br hover:from-white hover:to-orange-50
                          hover:border-orange-400/40
                          hover:shadow-lg hover:shadow-orange-400/25
                          hover:ring-1 hover:ring-orange-400/20
                          transition-all duration-300`}
                        style={{ animationDelay: `${idx * 0.03}s` }}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent parent click
                          handleSubcategoryClick(item, subcategory);
                        }}
                      >
                        {/* Card Icon */}
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 
                          flex items-center justify-center text-white flex-shrink-0
                          transition-all duration-300 group-hover:rotate-360 group-hover:scale-110
                          group-hover:shadow-lg group-hover:shadow-orange-400/50">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {/* Card Text */}
                        <span className="text-sm font-medium text-gray-900 flex-1
                          group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600
                          group-hover:bg-clip-text group-hover:text-transparent
                          transition-all duration-300">
                          {subcategory}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TopMenu;