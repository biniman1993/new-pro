import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./TopMenu.css";

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
]
,
    Projector: [
      "Business Projector",
      "Home Cinema Projector",
      "Portable Projector",
      "Short-Throw Projector",
      "Projector Accessories"
    ],
    "Components": [
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
    "RAM"],
     // ... other categories ...
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
    "Server": [
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

  return (
    <div 
      className={`topmenu ${isVisible ? 'topmenu-visible' : 'topmenu-hidden'}`} 
      onMouseLeave={() => setHoveredItem(null)}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredItem(item)}
            onClick={() => handleMainCategoryClick(item)}
            className={hoveredItem === item ? "active" : ""}
          >
            {item}
            {hoveredItem === item && (
              <div 
                className="dropdown-menu show"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="dropdown-content">
                  {menuData[item].map((subcategory, idx) => (
                    <div
                      key={idx}
                      className="dropdown-card"
                      style={{ animationDelay: `${idx * 0.03}s` }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent parent click
                        handleSubcategoryClick(item, subcategory);
                      }}
                    >
                      <div className="dropdown-card-icon">
                      
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
                      <span className="dropdown-card-text">{subcategory}</span>
                      <div className="dropdown-card-hover"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMenu;