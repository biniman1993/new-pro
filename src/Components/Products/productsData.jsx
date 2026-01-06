import imgA from '../../assets/laptop/asu.jpg';
import imgB from '../../assets/laptop/a.jpg';
import imgC from '../../assets/laptop/hp.jpg';
import imgD from '../../assets/laptop/lap3.jpg';
import imgE from '../../assets/laptop/dell.png';

//printer
import imgpa from '../../assets/printer/p1.jpg';
import imgpb from '../../assets/printer/p2.jpg';
import imgpc from '../../assets/printer/p3.jpg';
import imgpd from '../../assets/printer/p4.jpg';
import imgpe from '../../assets/printer/p5.jpg';

//monitor
import imgma from '../../assets/monitor/mon1.png';
import imgmb from '../../assets/monitor/mon2.jpg';
import imgmc from '../../assets/monitor/mon3.jpg';
import imgmd from '../../assets/monitor/mon4.jpg';
import imgme from '../../assets/monitor/mon5.jpg';

//desktop
import imgda from '../../assets/desktop/dck1.jpg';
import imgdb from '../../assets/desktop/dck2.jpg';
import imgdc from '../../assets/desktop/dck3.jpg';
import imgdd from '../../assets/desktop/dck4.jpg';
import imgde from '../../assets/desktop/dck5.jpg';

// Laptops Data
export const laptopsData = [
  { 
    id: 1, 
    name: "Asus ZenBook Pro", 
    description: "Ultra-slim laptop with OLED display",
    status: "In stock", 
    price: "$1,299.99", 
    image: imgA,
    specs: ["Intel i7 Processor", "16GB RAM", "1TB SSD", "NVIDIA RTX 3050"]
  },
  { 
    id: 2, 
    name: "Dell XPS 15", 
    description: "Premium business laptop",
    status: "In stock", 
    price: "$1,499.99", 
    image: imgE,
    specs: ["Intel i9 Processor", "32GB RAM", "2TB SSD", "4K Touch Display"]
  },
  { 
    id: 3, 
    name: "HP Spectre x360", 
    description: "Convertible 2-in-1 laptop",
    status: "In stock", 
    price: "$1,199.99", 
    image: imgC,
    specs: ["Intel i7 Processor", "16GB RAM", "512GB SSD", "360° Hinge"]
  },
  { 
    id: 4, 
    name: "Lenovo ThinkPad X1", 
    description: "Business-class laptop",
    status: "In stock", 
    price: "$1,399.99", 
    image: imgD,
    specs: ["Intel i5 Processor", "8GB RAM", "256GB SSD", "Military Grade"]
  },
  { 
    id: 5, 
    name: "MSI Modern 14", 
    description: "Lightweight gaming laptop",
    status: "Available on backorder", 
    price: "$999.99", 
    image: imgB,
    specs: ["Intel i7 11th Gen", "16GB RAM", "512GB SSD", "FHD IPS Display"]
  },
  { 
    id: 5, 
    name: "MSI Modern 14", 
    description: "Lightweight gaming laptop",
    status: "Available on backorder", 
    price: "$999.99", 
    image: imgB,
    specs: ["Intel i7 11th Gen", "16GB RAM", "512GB SSD", "FHD IPS Display"]
  },{ 
    id: 5, 
    name: "MSI Modern 14", 
    description: "Lightweight gaming laptop",
    status: "Available on backorder", 
    price: "$999.99", 
    image: imgB,
    specs: ["Intel i7 11th Gen", "16GB RAM", "512GB SSD", "FHD IPS Display"]
  },{ 
    id: 5, 
    name: "MSI Modern 14", 
    description: "Lightweight gaming laptop",
    status: "Available on backorder", 
    price: "$999.99", 
    image: imgB,
    specs: ["Intel i7 11th Gen", "16GB RAM", "512GB SSD", "FHD IPS Display"]
  }
];

// Desktop Computers
export const gamingProductsData = [
  { 
    id: 6, 
    name: "Dell OptiPlex", 
    description: "Business desktop computer",
    status: "In stock", 
    price: "$899.99", 
    image: imgda,
    specs: ["Intel i5 Processor", "8GB RAM", "256GB SSD", "Windows 11 Pro"]
  },
  { 
    id: 7, 
    name: "HP ProDesk", 
    description: "Office desktop solution",
    status: "In stock", 
    price: "$799.99", 
    image: imgdb,
    specs: ["Intel i3 Processor", "4GB RAM", "1TB HDD", "Windows 11 Home"]
  },
  { 
    id: 8, 
    name: "Lenovo ThinkCentre", 
    description: "Compact business desktop",
    status: "In stock", 
    price: "$749.99", 
    image: imgdc,
    specs: ["Intel i5 Processor", "8GB RAM", "512GB SSD", "WiFi 6"]
  },
  { 
    id: 9, 
    name: "Apple Mac Mini", 
    description: "Mini desktop computer",
    status: "In stock", 
    price: "$699.99", 
    image: imgdd,
    specs: ["Apple M1 Chip", "8GB RAM", "256GB SSD", "macOS Monterey"]
  },
  { 
    id: 10, 
    name: "Acer Aspire TC", 
    description: "Home desktop computer",
    status: "Available on backorder", 
    price: "$599.99", 
    image: imgde,
    specs: ["Intel i3 Processor", "4GB RAM", "1TB HDD", "DVD Writer"]
  },{ 
    id: 8, 
    name: "Lenovo ThinkCentre", 
    description: "Compact business desktop",
    status: "In stock", 
    price: "$749.99", 
    image: imgdc,
    specs: ["Intel i5 Processor", "8GB RAM", "512GB SSD", "WiFi 6"]
  },
  { 
    id: 9, 
    name: "Apple Mac Mini", 
    description: "Mini desktop computer",
    status: "In stock", 
    price: "$699.99", 
    image: imgdd,
    specs: ["Apple M1 Chip", "8GB RAM", "256GB SSD", "macOS Monterey"]
  },
  { 
    id: 10, 
    name: "Acer Aspire TC", 
    description: "Home desktop computer",
    status: "Available on backorder", 
    price: "$599.99", 
    image: imgde,
    specs: ["Intel i3 Processor", "4GB RAM", "1TB HDD", "DVD Writer"]
  }
];

// Monitors
export const officeProductsData = [
  { 
    id: 11, 
    name: "Dell 27\" 4K Monitor", 
    description: "Ultra HD professional monitor",
    status: "In stock", 
    price: "$399.99", 
    image: imgma,
    specs: ["27-inch Display", "3840x2160 4K", "IPS Panel", "60Hz Refresh"]
  },
  { 
    id: 12, 
    name: "Samsung Curved 32\"", 
    description: "Curved gaming monitor",
    status: "In stock", 
    price: "$349.99", 
    image: imgmb,
    specs: ["32-inch Curved", "2560x1440 QHD", "144Hz Refresh", "1ms Response"]
  },
  { 
    id: 13, 
    name: "LG UltraWide 34\"", 
    description: "Ultrawide office monitor",
    status: "In stock", 
    price: "$449.99", 
    image: imgmc,
    specs: ["34-inch UltraWide", "3440x1440", "IPS Panel", "USB-C Port"]
  },
  { 
    id: 14, 
    name: "ASUS ProArt 27\"", 
    description: "Professional color monitor",
    status: "In stock", 
    price: "$599.99", 
    image: imgmd,
    specs: ["27-inch 4K", "100% sRGB", "Calman Verified", "Delta E<2"]
  },
  { 
    id: 15, 
    name: "HP 24\" Business", 
    description: "Office monitor",
    status: "Available on backorder", 
    price: "$199.99", 
    image: imgme,
    specs: ["24-inch Display", "1920x1080 FHD", "VESA Mount", "HDMI Port"]
  },  { 
    id: 13, 
    name: "LG UltraWide 34\"", 
    description: "Ultrawide office monitor",
    status: "In stock", 
    price: "$449.99", 
    image: imgmc,
    specs: ["34-inch UltraWide", "3440x1440", "IPS Panel", "USB-C Port"]
  },
  { 
    id: 14, 
    name: "ASUS ProArt 27\"", 
    description: "Professional color monitor",
    status: "In stock", 
    price: "$599.99", 
    image: imgmd,
    specs: ["27-inch 4K", "100% sRGB", "Calman Verified", "Delta E<2"]
  },
  { 
    id: 15, 
    name: "HP 24\" Business", 
    description: "Office monitor",
    status: "Available on backorder", 
    price: "$199.99", 
    image: imgme,
    specs: ["24-inch Display", "1920x1080 FHD", "VESA Mount", "HDMI Port"]
  }
];

// Networking Equipment
export const CiscoProductsData = [
  { 
    id: 16, 
    name: "Cisco Router 1000", 
    description: "Enterprise network router",
    status: "In stock", 
    price: "Call for Price", 
    image: imgA,
    specs: ["Gigabit Ethernet", "VPN Support", "Firewall", "Dual WAN"]
  },
  { 
    id: 17, 
    name: "Cisco Switch 24-Port", 
    description: "Managed network switch",
    status: "In stock", 
    price: "Call for Price", 
    image: imgB,
    specs: ["24 Ports", "PoE+ Support", "Layer 2 Managed", "SFP Slots"]
  },
  { 
    id: 18, 
    name: "Cisco Access Point", 
    description: "Wireless access point",
    status: "In stock", 
    price: "Call for Price", 
    image: imgC,
    specs: ["WiFi 6", "MU-MIMO", "Cloud Managed", "Dual Band"]
  },
  { 
    id: 19, 
    name: "Cisco Firewall", 
    description: "Network security appliance",
    status: "In stock", 
    price: "Call for Price", 
    image: imgD,
    specs: ["Threat Protection", "VPN Support", "Intrusion Prevention", "URL Filtering"]
  },
  { 
    id: 20, 
    name: "Cisco IP Phone", 
    description: "VoIP business phone",
    status: "Available on backorder", 
    price: "Call for Price", 
    image: imgE,
    specs: ["PoE Supported", "HD Audio", "LCD Display", "Gigabit Ethernet"]
  }, { 
    id: 18, 
    name: "Cisco Access Point", 
    description: "Wireless access point",
    status: "In stock", 
    price: "Call for Price", 
    image: imgC,
    specs: ["WiFi 6", "MU-MIMO", "Cloud Managed", "Dual Band"]
  },
  { 
    id: 19, 
    name: "Cisco Firewall", 
    description: "Network security appliance",
    status: "In stock", 
    price: "Call for Price", 
    image: imgD,
    specs: ["Threat Protection", "VPN Support", "Intrusion Prevention", "URL Filtering"]
  },
  { 
    id: 20, 
    name: "Cisco IP Phone", 
    description: "VoIP business phone",
    status: "Available on backorder", 
    price: "Call for Price", 
    image: imgE,
    specs: ["PoE Supported", "HD Audio", "LCD Display", "Gigabit Ethernet"]
  }
];

// Printers
export const printersProductsData = [
  { 
    id: 21, 
    name: "HP LaserJet Pro", 
    description: "Laser printer for office",
    status: "In stock", 
    price: "$299.99", 
    image: imgpb,
    specs: ["Laser Printer", "30 ppm Speed", "Duplex Print", "WiFi Connect"]
  },
  { 
    id: 22, 
    name: "Epson EcoTank", 
    description: "Ink tank printer",
    status: "In stock", 
    price: "$399.99", 
    image: imgpc,
    specs: ["EcoTank System", "Color Printing", "Scanner", "Copier"]
  },
  { 
    id: 23, 
    name: "Canon PIXMA", 
    description: "All-in-one printer",
    status: "In stock", 
    price: "$199.99", 
    image: imgpe,
    specs: ["Inkjet Printer", "Print/Scan/Copy", "Wireless", "Mobile Print"]
  },
  { 
    id: 24, 
    name: "Brother MFC-L2750", 
    description: "Monochrome laser printer",
    status: "In stock", 
    price: "$349.99", 
    image: imgpd,
    specs: ["Monochrome Laser", "50 ppm Speed", "Automatic Feeder", "Network Ready"]
  },
  { 
    id: 25, 
    name: "Lexmark C3326", 
    description: "Color laser printer",
    status: "Available on backorder", 
    price: "$449.99", 
    image: imgpa,
    specs: ["Color Laser", "26 ppm Speed", "1200x1200 dpi", "Ethernet Port"]
  }, { 
    id: 23, 
    name: "Canon PIXMA", 
    description: "All-in-one printer",
    status: "In stock", 
    price: "$199.99", 
    image: imgpe,
    specs: ["Inkjet Printer", "Print/Scan/Copy", "Wireless", "Mobile Print"]
  },
  { 
    id: 24, 
    name: "Brother MFC-L2750", 
    description: "Monochrome laser printer",
    status: "In stock", 
    price: "$349.99", 
    image: imgpd,
    specs: ["Monochrome Laser", "50 ppm Speed", "Automatic Feeder", "Network Ready"]
  },
  { 
    id: 25, 
    name: "Lexmark C3326", 
    description: "Color laser printer",
    status: "Available on backorder", 
    price: "$449.99", 
    image: imgpa,
    specs: ["Color Laser", "26 ppm Speed", "1200x1200 dpi", "Ethernet Port"]
  }
];

// Display Equipment
export const displayProductsData = [
  { 
    id: 26, 
    name: "LED Video Wall", 
    description: "Commercial display screen",
    status: "In stock", 
    price: "Call for Price", 
    image: imgA,
    specs: ["LED Display", "Full HD", "Outdoor Rated", "IP65 Waterproof"]
  },
  { 
    id: 27, 
    name: "Interactive Whiteboard", 
    description: "Touch screen display",
    status: "In stock", 
    price: "Call for Price", 
    image: imgB,
    specs: ["86-inch Display", "4K Resolution", "Touch Screen", "Android OS"]
  },
  { 
    id: 28, 
    name: "Digital Signage", 
    description: "Advertising display",
    status: "In stock", 
    price: "Call for Price", 
    image: imgC,
    specs: ["55-inch Display", "Full HD", "24/7 Operation", "Content Management"]
  },
  { 
    id: 29, 
    name: "Video Conferencing", 
    description: "Meeting room display",
    status: "In stock", 
    price: "Call for Price", 
    image: imgD,
    specs: ["4K Camera", "Built-in Mic", "Zoom Certified", "Android System"]
  },
  { 
    id: 30, 
    name: "Kiosk Display", 
    description: "Self-service terminal",
    status: "Available on backorder", 
    price: "Call for Price", 
    image: imgE,
    specs: ["Touch Screen", "Stand Included", "Payment Ready", "Weather Proof"]
  },{ 
    id: 28, 
    name: "Digital Signage", 
    description: "Advertising display",
    status: "In stock", 
    price: "Call for Price", 
    image: imgC,
    specs: ["55-inch Display", "Full HD", "24/7 Operation", "Content Management"]
  },
  { 
    id: 29, 
    name: "Video Conferencing", 
    description: "Meeting room display",
    status: "In stock", 
    price: "Call for Price", 
    image: imgD,
    specs: ["4K Camera", "Built-in Mic", "Zoom Certified", "Android System"]
  },
  { 
    id: 30, 
    name: "Kiosk Display", 
    description: "Self-service terminal",
    status: "Available on backorder", 
    price: "Call for Price", 
    image: imgE,
    specs: ["Touch Screen", "Stand Included", "Payment Ready", "Weather Proof"]
  }
];