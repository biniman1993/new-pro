import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // NEW LINE 1: Add selected category state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Data mapping
  const menuData: Record<string, string[]> = {
    Desktop: [
      "Business Desktop",
      "Gaming Desktop",
      "All-in-One PC",
      "Mini Desktop",
      "Workstation",
    ],
    Laptop: [
      "Business Laptop",
      "Student Laptop",
      "Ultrabook / Thin & Light",
      "Gaming Laptop",
      "2-in-1 Convertible Laptop",
    ],
    Monitor: [
      "Full HD Monitor",
      "2K / 4K Monitor",
      "Gaming Monitor",
      "Curved Monitor",
      "Modern 4K TVs",
    ],
    Networking: [
      "Home Networking",
      "Commercial Networking",
      "Network Accessories",
      "Routers & Switches",
      "Cables",
    ],
     Server: [
      "HPE Proliant ML server",
      "HPE Proliant DL server",
      "HPE Proliant RL server",
      "HPE Modular Servers",
      "Dell EMC PowerEdge Tower server",
      "Dell EMC PowerEdge Rack server",
      "Server Accessories",
      "Differnt Rack Units",
    ],
   "Printer": [
  "InkjetPrinter",
  "LaserPrinter", 
  "AllinOnePrinter",
  "Scanners",
  "PrinterAccessories",
  "DocumentPrinter",
  "LargeFormatPrinter",
  "IDCardPrinter",
  "POSPrinter",
  "LabelPrinter",
  "Photocopier",
  "Toner",
  "InkTankPrinter",
  "InkBottle",
  "BarcodeScanner",
  "Ribbon",
  "Cartridge",
  "PrinterDrum",
  "PrinterPaper"
],
    Projector: [
      "Business Projector",
      "Home Cinema Projector",
      "Portable Projector",
      "Short Throw Projector",
      "Projector Accessories",
    ],
   
   "Digital Display": [
    "Digital Signage",
  "LED Video Wall",
  "Interactive Display", 
  "Kiosk",
  "Advertising Display"
],
     Accessories: [
      "Keyboard & Mouse",
      "Webcams",
      "Headphones",
      "USB Hubs",
      "Laptop Stands",
    ],
   
  };

  // Define pages where dropdown text should be white
  const whiteTextPages = ['/about', '/shop', '/brand', '/contact'];
  
  // Check if current path starts with any of these pages
  const isWhiteTextPage = whiteTextPages.some(page => 
    location.pathname.startsWith(page)
  );

  const menuItems = Object.keys(menuData);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // NEW EFFECT: Clear selected category when leaving catalog pages
  useEffect(() => {
    // If current path doesn't include '/catalog' (case insensitive), clear selection
    if (!location.pathname.toLowerCase().includes('/catalog')) {
      setSelectedCategory(null);
    }
  }, [location.pathname]);

  const formatSubcategoryName = (name: string) => {
    return name.replace(/[&/\\#,+()$~%.'":*?<>{} ]/g, "");
  };

  // NEW LINE 2: Update handleNavigation to set selected category
  const handleNavigation = (category: string, sub?: string) => {
    setSelectedCategory(category); // ← THIS LINE ADDED
    const target = sub || menuData[category][0];
    navigate(`/Catalog/${formatSubcategoryName(target)}`);
  };

  return (
    <nav
      className={`fixed  md:top-[65px] lg:top-[64.5px] xl:top-[65px] left-0 w-full z-[100] h-[45px] flex items-center justify-center
        transition-all duration-300 ease-in-out font-['Inter'] font-semibold uppercase tracking-wider
        bg-gradient-to-r from-[#2a5da5] to-[#143057]
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        hidden lg:flex overflow-visible`}
    >
      <ul className="flex  md:gap-[25px] lg:gap-[25px] xl:gap-[30px] px-[25px] list-none m-0 relative h-full items-center overflow-visible">
        {menuItems.map((item) => (
          <li
            key={item}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleNavigation(item)}
            // NEW LINE 3: Update className to include selected state
            className={`relative py-2 px-2.5 text-[14px] font-medium cursor-pointer transition-colors duration-300 normal-case overflow-visible
              ${hoveredItem === item || selectedCategory === item ? "text-[#ff9800]" : "text-white"}`}
          >
            {item}

            {/* Animated Underline */}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#ff9800] to-[#F97316] transition-all duration-300 ease-out
                ${hoveredItem === item || selectedCategory === item ? "w-4/5 scale-x-100" : "w-0 scale-x-0"}`}
            />

            {/* Dropdown Container */}
            {hoveredItem === item && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[1000] ">
                <div
                  className={`bg-white/98 backdrop-blur-[20px] p-3 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.3),0_4px_20px_rgba(255,152,0,0.15)]
                    grid gap-3 max-h-[400px] overflow-y-auto
                    ${menuData[item].length > 5 ? "grid-cols-2 w-[550px]" : "grid-cols-1 w-[280px]"}`}
                >
                  {menuData[item].map((sub, idx) => (
                    <div
                      key={sub}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation(item, sub);
                      }}
                      className="group flex items-center gap-3 p-2.5 rounded-[10px] border border-[#ffffff1a] bg-transparent transition-all duration-300 
                        hover:translate-x-1 hover:scale-[1.02] hover:border-[#ff980066] hover:shadow-[0_6px_20px_rgba(255,152,0,0.25)]
                        animate-cardSlideIn cursor-pointer"
                      style={{
                        animationDelay: `${idx * 0.08}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {/* Icon Box */}
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff9800] to-[#ff6b35] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>

                      <span className={`text-[14px] font-semibold transition-all duration-300 group-hover:text-[#F97316] ${
                        isWhiteTextPage ? 'text-white' : 'text-gray-800'
                      }`}>
                        {sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Updated Animations for smooth top-to-bottom appearance */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes dropdownFadeIn {
          from { 
            opacity: 0; 
            transform: translateX(-50%) translateY(-15px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
          }
        }
        
        @keyframes cardSlideIn {
          0% { 
            opacity: 0.3; 
            transform: translateY(-20px) scale(0.95);
            filter: blur(2px);
          }
          30% { 
            opacity: 0.7; 
            transform: translateY(-8px) scale(0.98);
            filter: blur(1px);
          }
          70% { 
            opacity: 0.9; 
            transform: translateY(-2px) scale(0.99);
            filter: blur(0px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        
        /* Ensure dropdown containers are visible */
        .overflow-visible {
          overflow: visible !important;
        }
        
        /* Ensure the dropdown appears above other elements */
        .z-\\[1000\\] {
          z-index: 1000 !important;
        }
        
        /* Animation fill mode fix */
        .animate-cardSlideIn {
          animation-fill-mode: forwards !important;
          animation-timing-function: cubic-bezier(0.2, 0.9, 0.3, 1.1) !important;
          animation-duration: 0.6s !important;
        }
        
        .animate-dropdownFadeIn {
          animation-duration: 0.4s !important;
          animation-timing-function: ease-out !important;
        }
      `,
        }}
      />
    </nav>
  );
};

export default TopMenu;