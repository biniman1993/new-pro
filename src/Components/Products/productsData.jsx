// Laptops - 8 different images
import laptop1 from '../../assets/laptop/asus.png';
import laptop2 from '../../assets/laptop/a.jpg';
import laptop3 from '../../assets/laptop/hp.jpg';
import laptop4 from '../../assets/laptop/lap3.jpg';
import laptop5 from '../../assets/laptop/dell.png';
import laptop6 from '../../assets/laptop/lap3.jpg';    // You'll need to add this image
import laptop7 from '../../assets/laptop/lap3.jpg';    // You'll need to add this image
import laptop8 from '../../assets/laptop/lap3.jpg';    // You'll need to add this image

// Printers - 8 different images
import printer1 from '../../assets/printer/p1.jpg';
import printer2 from '../../assets/printer/p2.jpg';
import printer3 from '../../assets/printer/p3.jpg';
import printer4 from '../../assets/printer/p4.jpg';
import printer5 from '../../assets/printer/p5.jpg';
import printer6 from '../../assets/printer/p4.jpg';    // You'll need to add this image
import printer7 from '../../assets/printer/p4.jpg';    // You'll need to add this image
import printer8 from '../../assets/printer/p4.jpg';    // You'll need to add this image

// Monitors - 8 different images
import monitor1 from '../../assets/monitor/mon1.png';
import monitor2 from '../../assets/monitor/mon2.jpg';
import monitor3 from '../../assets/monitor/mon3.jpg';
import monitor4 from '../../assets/monitor/mon4.jpg';
import monitor5 from '../../assets/monitor/mon5.jpg';
import monitor6 from '../../assets/monitor/mon5.jpg';  // You'll need to add this image
import monitor7 from '../../assets/monitor/mon5.jpg';  // You'll need to add this image
import monitor8 from '../../assets/monitor/mon5.jpg';  // You'll need to add this image

// Desktops - 8 different images
import desktop1 from '../../assets/desktop/dck1.jpg';
import desktop2 from '../../assets/desktop/dck2.jpg';
import desktop3 from '../../assets/desktop/dck3.jpg';
import desktop4 from '../../assets/desktop/dck3.jpg';
import desktop5 from '../../assets/desktop/dck2.jpg';
import desktop6 from '../../assets/desktop/dck2.jpg';  // You'll need to add this image
import desktop7 from '../../assets/desktop/dck2.jpg';  // You'll need to add this image
import desktop8 from '../../assets/desktop/dck2.jpg';  // You'll need to add this image

// Networking Equipment - 8 different images
import network1 from '../../assets/laptop/a.jpg';  // You'll need to add these images
import network2 from '../../assets/laptop/b.jpg';
import network3 from '../../assets/laptop/dell.png';
import network4 from '../../assets/laptop/c.jpg';
import network5 from '../../assets/laptop/c.jpg';
import network6 from '../../assets/laptop/c.jpg';
import network7 from '../../assets/laptop/c.jpg';
import network8 from '../../assets/laptop/c.jpg';

// Display Equipment - 8 different images
import display1 from '../../assets/monitor/mon1.png';  // You'll need to add these images
import display2 from '../../assets/monitor/mon2.jpg';
import display3 from '../../assets/monitor/mon3.jpg';
import display4 from '../../assets/monitor/mon4.jpg';
import display5 from '../../assets/monitor/mon5.jpg';
import display6 from '../../assets/monitor/mon4.jpg';
import display7 from '../../assets/monitor/mon2.jpg';
import display8 from '../../assets/monitor/mon1.png';

//=============================================
// LAPTOPS - 8 Products with 8 different images
//=============================================
export const laptopsData = [
  { 
    id: 1, 
    name: "ASUS ROG Strix G15", 
    description: "Ultra-slim gaming laptop",
    fullDescription: "Experience ultimate gaming performance with the ASUS ROG Strix G15. Featuring cutting-edge technology and premium build quality, this laptop delivers exceptional gaming and productivity experiences.",
    status: "In stock", 
    image: laptop1,
    specs: [
      "Intel i7 Processor",
      "16GB RAM",
      "1TB NVMe SSD",
      "NVIDIA RTX 3050 4GB",
      "15.6-inch FHD 144Hz Display",
      "RGB Backlit Keyboard",
      "WiFi 6 (802.11ax)",
      "Bluetooth 5.2",
      "90Wh Battery",
      "Windows 11 Home"
    ]
  },
  { 
    id: 2, 
    name: "Dell XPS 15", 
    description: "Premium business laptop with 4K display",
    fullDescription: "The Dell XPS 15 combines stunning design with powerful performance. Perfect for professionals who demand the best in mobility and productivity.",
    status: "In stock", 
    image: laptop2,
    specs: [
      "Intel i9 Processor",
      "32GB DDR5 RAM",
      "2TB NVMe SSD",
      "4K Touch Display",
      "NVIDIA RTX 3050 Ti",
      "Thunderbolt 4 Ports",
      "Carbon Fiber Build",
      "86Wh Battery",
      "Windows 11 Pro",
      "Fingerprint Reader"
    ]
  },
  { 
    id: 3, 
    name: "HP Spectre x360", 
    description: "Convertible 2-in-1 premium laptop",
    fullDescription: "Versatile 2-in-1 design meets exceptional performance. The HP Spectre x360 adapts to your needs, whether you're working, creating, or streaming.",
    status: "In stock", 
    image: laptop3,
    specs: [
      "Intel i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "360° Hinge",
      "13.5-inch OLED Touch Display",
      "Intel Iris Xe Graphics",
      "Thunderbolt 4",
      "WiFi 6E",
      "HP Pen Support",
      "Backlit Keyboard"
    ]
  },
  { 
    id: 4, 
    name: "Lenovo ThinkPad X1", 
    description: "Business-class laptop",
    fullDescription: "Engineered for business professionals, the ThinkPad X1 offers enterprise-grade security, durability, and performance in an ultra-portable design.",
    status: "In stock", 
    image: laptop4,
    specs: [
      "Intel i5 Processor",
      "8GB RAM",
      "256GB SSD",
      "Military Grade Durability",
      "14-inch FHD Anti-Glare",
      "Intel UHD Graphics",
      "Fingerprint Reader",
      "IR Camera",
      "4G LTE Support",
      "Spill-Resistant Keyboard"
    ]
  },
  { 
    id: 5, 
    name: "MSI Modern 14", 
    description: "Lightweight laptop for creators",
    fullDescription: "Designed for creators on the go, the MSI Modern 14 combines portability with power for content creation and everyday productivity.",
    status: "Available on backorder", 
    image: laptop5,
    specs: [
      "Intel i7 11th Gen",
      "16GB RAM",
      "512GB SSD",
      "FHD IPS Display",
      "Iris Xe Graphics",
      "USB-C Port",
      "HDMI Output",
      "Fingerprint Reader",
      "WiFi 6",
      "1.3kg Lightweight"
    ]
  },
  { 
    id: 6, 
    name: "Acer Swift 3", 
    description: "Thin and light everyday laptop",
    fullDescription: "The Acer Swift 3 is perfect for students and professionals who need a reliable, portable laptop for everyday tasks.",
    status: "In stock", 
    image: laptop6,
    specs: [
      "AMD Ryzen 7",
      "16GB RAM",
      "512GB SSD",
      "14-inch FHD Display",
      "Radeon Graphics",
      "Backlit Keyboard",
      "WiFi 6",
      "Fingerprint Reader",
      "USB-C Port",
      "Windows 11 Home"
    ]
  },
  { 
    id: 7, 
    name: "Razer Blade 15", 
    description: "Premium gaming laptop",
    fullDescription: "The Razer Blade 15 sets the standard for premium gaming laptops with its sleek design and powerful performance.",
    status: "In stock", 
    image: laptop7,
    specs: [
      "Intel i7 12th Gen",
      "32GB RAM",
      "1TB SSD",
      "NVIDIA RTX 3070",
      "15.6-inch QHD 240Hz",
      "Per-Key RGB Keyboard",
      "Thunderbolt 4",
      "WiFi 6E",
      "Vapor Chamber Cooling",
      "Windows 11 Pro"
    ]
  },
  { 
    id: 8, 
    name: "Microsoft Surface Laptop 5", 
    description: "Sleek and stylish premium laptop",
    fullDescription: "The Microsoft Surface Laptop 5 combines elegant design with exceptional performance for the ultimate Windows experience.",
    status: "In stock", 
    image: laptop8,
    specs: [
      "Intel i7 12th Gen",
      "16GB RAM",
      "512GB SSD",
      "13.5-inch Touch Display",
      "Intel Iris Xe Graphics",
      "Aluminum Body",
      "Removable SSD",
      "Windows 11 Home",
      "Fingerprint Power Button",
      "Omnisonic Speakers"
    ]
  }
];

//=============================================
// DESKTOPS - 8 Products with 8 different images
//=============================================
export const desktopData = [
  { 
    id: 9, 
    name: "Dell OptiPlex", 
    description: "Business desktop computer with enterprise features",
    fullDescription: "Reliable, secure, and manageable business desktop solution for corporate environments. Built for productivity and easy IT management.",
    status: "In stock", 
    image: desktop1,
    specs: [
      "Intel i5 Processor",
      "8GB RAM",
      "256GB SSD",
      "Windows 11 Pro",
      "Intel UHD Graphics",
      "DVD-RW Drive",
      "USB 3.2 Ports",
      "DisplayPort",
      "RJ-45 Ethernet",
      "3 Year Warranty"
    ]
  },
  { 
    id: 10, 
    name: "HP ProDesk", 
    description: "Compact office desktop solution",
    fullDescription: "Space-saving desktop designed for business efficiency. Perfect for office environments where reliability and performance matter.",
    status: "In stock", 
    image: desktop2,
    specs: [
      "Intel i3 Processor",
      "4GB RAM",
      "1TB HDD",
      "Windows 11 Home",
      "Intel UHD Graphics 630",
      "USB-C Port",
      "VGA Port",
      "HDMI Output",
      "WiFi 5",
      "Energy Star Certified"
    ]
  },
  { 
    id: 11, 
    name: "Lenovo ThinkCentre", 
    description: "Compact business desktop with WiFi 6",
    fullDescription: "Small form factor desktop that delivers big performance. Ideal for modern offices with limited space but high computing needs.",
    status: "In stock", 
    image: desktop3,
    specs: [
      "Intel i5 Processor",
      "8GB RAM",
      "512GB SSD",
      "WiFi 6",
      "Intel UHD Graphics 730",
      "Bluetooth 5.2",
      "USB 3.2 Gen 2",
      "DisplayPort",
      "Kensington Lock",
      "TPM 2.0 Security"
    ]
  },
  { 
    id: 12, 
    name: "Apple Mac Mini", 
    description: "Compact desktop with Apple M1 chip",
    fullDescription: "Big power in a tiny package. The Mac Mini with M1 chip revolutionizes what a small desktop computer can do.",
    status: "In stock", 
    image: desktop4,
    specs: [
      "Apple M1 Chip",
      "8GB RAM",
      "256GB SSD",
      "macOS Monterey",
      "7-Core GPU",
      "16-Core Neural Engine",
      "Thunderbolt 4 Ports",
      "HDMI 2.0",
      "WiFi 6",
      "Bluetooth 5.0"
    ]
  },
  { 
    id: 13, 
    name: "Acer Aspire TC", 
    description: "Home desktop computer with DVD writer",
    fullDescription: "Versatile desktop for home use. Perfect for family computing, homework, and everyday tasks with room to grow.",
    status: "Available on backorder", 
    image: desktop5,
    specs: [
      "Intel i3 Processor",
      "4GB RAM",
      "1TB HDD",
      "DVD Writer",
      "Intel UHD Graphics 600",
      "USB 3.0 Ports",
      "HDMI Output",
      "VGA Port",
      "Multi-format Card Reader",
      "Wired Keyboard & Mouse"
    ]
  },
  { 
    id: 14, 
    name: "HP Pavilion Desktop", 
    description: "All-in-one desktop for home use",
    fullDescription: "The HP Pavilion All-in-One desktop combines powerful performance with a stunning display in a space-saving design.",
    status: "In stock", 
    image: desktop6,
    specs: [
      "Intel i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "23.8-inch FHD Touch",
      "Intel Iris Xe Graphics",
      "Built-in Webcam",
      "Wireless Keyboard/Mouse",
      "WiFi 6",
      "Bluetooth 5.2",
      "Windows 11 Home"
    ]
  },
  { 
    id: 15, 
    name: "Alienware Aurora R15", 
    description: "High-performance gaming desktop",
    fullDescription: "The Alienware Aurora R15 is built for gamers who demand the absolute best performance and customization options.",
    status: "In stock", 
    image: desktop7,
    specs: [
      "Intel i9 13th Gen",
      "32GB DDR5 RAM",
      "2TB NVMe SSD",
      "NVIDIA RTX 4080",
      "Liquid Cooling",
      "1000W PSU",
      "Custom RGB Lighting",
      "WiFi 6E",
      "Windows 11 Pro",
      "Tool-less Entry"
    ]
  },
  { 
    id: 16, 
    name: "Dell Precision Workstation", 
    description: "Professional workstation for creators",
    fullDescription: "The Dell Precision Workstation delivers the power and reliability needed for demanding professional applications.",
    status: "In stock", 
    image: desktop8,
    specs: [
      "Intel Xeon Processor",
      "64GB ECC RAM",
      "4TB NVMe SSD",
      "NVIDIA RTX A4000",
      "Thunderbolt 3",
      "Dual 10GbE LAN",
      "RAID Support",
      "Windows 11 Pro for Workstations",
      "ISV Certified",
      "5 Year Warranty"
    ]
  }
];

//=============================================
// MONITORS - 8 Products with 8 different images
//=============================================
export const monitorData = [
  { 
    id: 17, 
    name: "Dell 27\" 4K Monitor", 
    description: "Ultra HD professional monitor with IPS panel",
    fullDescription: "Experience stunning detail and color accuracy with this 4K professional monitor. Perfect for designers, editors, and power users.",
    status: "In stock", 
    image: monitor1,
    specs: [
      "27-inch Display",
      "3840x2160 4K",
      "IPS Panel",
      "60Hz Refresh",
      "350 nits Brightness",
      "1000:1 Contrast Ratio",
      "HDMI 2.0 Ports",
      "DisplayPort 1.4",
      "USB-C with Power Delivery",
      "VESA Mount Compatible"
    ]
  },
  { 
    id: 18, 
    name: "Samsung Curved 32\"", 
    description: "Curved gaming monitor with 144Hz refresh",
    fullDescription: "Immerse yourself in gaming with this curved monitor. The 144Hz refresh rate and QHD resolution deliver smooth, detailed visuals.",
    status: "In stock", 
    image: monitor2,
    specs: [
      "32-inch Curved",
      "2560x1440 QHD",
      "144Hz Refresh",
      "1ms Response",
      "VA Panel",
      "3000:1 Contrast",
      "AMD FreeSync Premium",
      "HDR10 Support",
      "HDMI 2.0 + DisplayPort",
      "Headphone Jack"
    ]
  },
  { 
    id: 19, 
    name: "LG UltraWide 34\"", 
    description: "Ultrawide office monitor with USB-C",
    fullDescription: "Boost productivity with this ultrawide monitor. Perfect for multitasking with split-screen capabilities and excellent color accuracy.",
    status: "In stock", 
    image: monitor3,
    specs: [
      "34-inch UltraWide",
      "3440x1440",
      "IPS Panel",
      "USB-C Port",
      "75Hz Refresh",
      "5ms Response",
      "300 nits Brightness",
      "HDR10",
      "Built-in Speakers",
      "Height Adjustable Stand"
    ]
  },
  { 
    id: 20, 
    name: "ASUS ProArt 27\"", 
    description: "Professional color monitor for creators",
    fullDescription: "Calman Verified professional monitor with factory-calibrated colors. Ideal for photography, video editing, and graphic design.",
    status: "In stock", 
    image: monitor4,
    specs: [
      "27-inch 4K",
      "100% sRGB",
      "Calman Verified",
      "Delta E<2",
      "IPS Panel",
      "400 nits Brightness",
      "Thunderbolt 3 Ports",
      "USB Hub",
      "Ergotech Stand",
      "Anti-Glare Coating"
    ]
  },
  { 
    id: 21, 
    name: "HP 24\" Business", 
    description: "Reliable office monitor with VESA mount",
    fullDescription: "Essential monitor for everyday business use. Reliable, affordable, and versatile with multiple connectivity options.",
    status: "Available on backorder", 
    image: monitor5,
    specs: [
      "24-inch Display",
      "1920x1080 FHD",
      "VESA Mount",
      "HDMI Port",
      "IPS Panel",
      "250 nits Brightness",
      "VGA Port",
      "Built-in Speakers",
      "Energy Star Certified",
      "3 Year Warranty"
    ]
  },
  { 
    id: 22, 
    name: "Acer Predator X34", 
    description: "Ultrawide gaming monitor",
    fullDescription: "The Acer Predator X34 delivers an immersive gaming experience with its ultrawide curved display and lightning-fast refresh rate.",
    status: "In stock", 
    image: monitor6,
    specs: [
      "34-inch Curved Ultrawide",
      "3440x1440",
      "180Hz Refresh",
      "0.5ms Response",
      "NVIDIA G-Sync",
      "HDR400",
      "OLED Panel",
      "RGB Lighting",
      "HDMI 2.1",
      "DisplayPort 1.4"
    ]
  },
  { 
    id: 23, 
    name: "BenQ PD3220U", 
    description: "Designer monitor with Thunderbolt 3",
    fullDescription: "The BenQ PD3220U is specifically designed for designers and content creators who demand color accuracy and connectivity.",
    status: "In stock", 
    image: monitor7,
    specs: [
      "32-inch 4K",
      "95% P3 Color",
      "Thunderbolt 3",
      "Hotkey Puck",
      "IPS Panel",
      "Factory Calibrated",
      "HDR10",
      "KVM Switch",
      "SD Card Reader",
      "Shading Hood"
    ]
  },
  { 
    id: 24, 
    name: "ViewSonic VP3881", 
    description: "Professional ultrawide for creatives",
    fullDescription: "The ViewSonic VP3881 offers professional-grade color accuracy in a stunning ultrawide format for creative professionals.",
    status: "In stock", 
    image: monitor8,
    specs: [
      "38-inch Curved",
      "3840x1600",
      "IPS Panel",
      "100% sRGB",
      "Thunderbolt 3",
      "Hardware Calibration",
      "USB-C Hub",
      "Dual Speakers",
      "Height Adjustable",
      "Pantone Validated"
    ]
  }
];

//=============================================
// PRINTERS - 8 Products with 8 different images
//=============================================
export const printerData = [
  { 
    id: 25, 
    name: "HP LaserJet Pro", 
    description: "Laser printer for office with duplex printing",
    fullDescription: "Reliable monochrome laser printer for busy offices. Fast printing speeds and low cost per page.",
    status: "In stock", 
    image: printer1,
    specs: [
      "Laser Printer",
      "30 ppm Speed",
      "Duplex Print",
      "WiFi Connect",
      "250-Sheet Input",
      "Monthly Duty 20,000 Pages",
      "Mobile Printing",
      "Ethernet Port",
      "USB 2.0",
      "1 Year Warranty"
    ]
  },
  { 
    id: 26, 
    name: "Epson EcoTank", 
    description: "Ink tank printer with high-yield ink",
    fullDescription: "Revolutionary ink tank system that saves money with high-yield ink bottles. Perfect for high-volume printing.",
    status: "In stock", 
    image: printer2,
    specs: [
      "EcoTank System",
      "Color Printing",
      "Scanner",
      "Copier",
      "WiFi Direct",
      "2.4-inch Touch Screen",
      "Up to 2 Years Ink Included",
      "Fax Capability",
      "Automatic Document Feeder",
      "Borderless Photo Printing"
    ]
  },
  { 
    id: 27, 
    name: "Canon PIXMA", 
    description: "All-in-one inkjet printer with wireless",
    fullDescription: "Versatile all-in-one printer perfect for home and small office use. Great photo printing quality.",
    status: "In stock", 
    image: printer3,
    specs: [
      "Inkjet Printer",
      "Print/Scan/Copy",
      "Wireless",
      "Mobile Print",
      "5-Color Ink System",
      "4x6 Photo Printing",
      "Auto Document Feeder",
      "2-Way Paper Feed",
      "Memory Card Slot",
      "CD/DVD Printing"
    ]
  },
  { 
    id: 28, 
    name: "Brother MFC-L2750", 
    description: "Monochrome laser printer with automatic feeder",
    fullDescription: "Feature-rich monochrome laser multifunction printer for busy offices needing speed and reliability.",
    status: "In stock", 
    image: printer4,
    specs: [
      "Monochrome Laser",
      "50 ppm Speed",
      "Automatic Feeder",
      "Network Ready",
      "Duplex Printing",
      "Color Scanning",
      "Fax Capability",
      "3.7-inch Touch Screen",
      "AirPrint Support",
      "Up to 3,000 Page Yield"
    ]
  },
  { 
    id: 29, 
    name: "Lexmark C3326", 
    description: "Color laser printer with Ethernet port",
    fullDescription: "Affordable color laser printer for small workgroups needing vibrant color documents.",
    status: "Available on backorder", 
    image: printer5,
    specs: [
      "Color Laser",
      "26 ppm Speed",
      "1200x1200 dpi",
      "Ethernet Port",
      "250-Sheet Input",
      "Duplex Printing",
      "USB Port",
      "Monthly Duty 3,000 Pages",
      "Energy Star Certified",
      "1 Year On-Site Service"
    ]
  },
  { 
    id: 30, 
    name: "Xerox WorkCentre", 
    description: "Multifunction printer for businesses",
    fullDescription: "The Xerox WorkCentre series delivers professional-quality printing, copying, scanning, and faxing in one device.",
    status: "In stock", 
    image: printer6,
    specs: [
      "Color Multifunction",
      "35 ppm Speed",
      "Duplex Print/Scan",
      "Touch Screen Interface",
      "Cloud Connectivity",
      "Security Features",
      "Mobile Printing",
      "550-Sheet Capacity",
      "Finishing Options",
      "2 Year Warranty"
    ]
  },
  { 
    id: 31, 
    name: "Kyocera ECOSYS", 
    description: "Long-life cartridge system printer",
    fullDescription: "The Kyocera ECOSYS series features long-life components and low total cost of ownership for busy offices.",
    status: "In stock", 
    image: printer7,
    specs: [
      "Monochrome Printer",
      "45 ppm Speed",
      "Long-Life Drum",
      "Low Cost Per Page",
      "Duplex Standard",
      "Optional Paper Trays",
      "Network Ready",
      "Secure Print",
      "Mobile Support",
      "3 Year Warranty"
    ]
  },
  { 
    id: 32, 
    name: "Ricoh SP C360DNw", 
    description: "Color laser printer for workgroups",
    fullDescription: "The Ricoh SP C360DNw delivers vibrant color prints and fast speeds for small to medium workgroups.",
    status: "In stock", 
    image: printer8,
    specs: [
      "Color Laser",
      "30 ppm Color",
      "30 ppm B&W",
      "Duplex Standard",
      "WiFi Direct",
      "NFC Printing",
      "2.8-inch Touch Panel",
      "Cloud Support",
      "Security Features",
      "1 Year Warranty"
    ]
  }
];

//=============================================
// NETWORKING - 8 Products with 8 different images
//=============================================
export const networkingData = [
  { 
    id: 33, 
    name: "Cisco Router 1000", 
    description: "Enterprise network router with advanced security",
    fullDescription: "Enterprise-grade router designed for businesses requiring reliable connectivity and advanced security features.",
    status: "In stock", 
    image: network1,
    specs: [
      "Gigabit Ethernet",
      "VPN Support",
      "Firewall",
      "Dual WAN",
      "QoS Support",
      "IPv6 Ready",
      "VLAN Support",
      "SNMP Management",
      "1U Rack Mountable",
      "5 Year Warranty"
    ]
  },
  { 
    id: 34, 
    name: "Cisco Switch 24-Port", 
    description: "Managed network switch with PoE+",
    fullDescription: "Layer 2 managed switch perfect for business networks requiring PoE for phones, cameras, and access points.",
    status: "In stock", 
    image: network2,
    specs: [
      "24 Ports",
      "PoE+ Support",
      "Layer 2 Managed",
      "SFP Slots",
      "370W PoE Budget",
      "VLAN Support",
      "IGMP Snooping",
      "SNMP v3",
      "Rack Mountable",
      "Limited Lifetime Warranty"
    ]
  },
  { 
    id: 35, 
    name: "Cisco Access Point", 
    description: "Wireless access point with WiFi 6",
    fullDescription: "High-performance WiFi 6 access point for businesses needing fast, reliable wireless connectivity.",
    status: "In stock", 
    image: network3,
    specs: [
      "WiFi 6",
      "MU-MIMO",
      "Cloud Managed",
      "Dual Band",
      "OFDMA Technology",
      "4x4 MIMO",
      "PoE Powered",
      "2.5G Ethernet Port",
      "Multiple SSIDs",
      "Ceiling Mount Included"
    ]
  },
  { 
    id: 36, 
    name: "Cisco Firewall", 
    description: "Network security appliance with threat protection",
    fullDescription: "Next-generation firewall providing advanced threat protection and secure connectivity for business networks.",
    status: "In stock", 
    image: network4,
    specs: [
      "Threat Protection",
      "VPN Support",
      "Intrusion Prevention",
      "URL Filtering",
      "Application Control",
      "SSL Inspection",
      "High Availability",
      "8 Gigabit Ports",
      "1U Form Factor",
      "Cloud Management"
    ]
  },
  { 
    id: 37, 
    name: "Cisco IP Phone", 
    description: "VoIP business phone with HD audio",
    fullDescription: "Enterprise-grade IP phone with crystal clear HD audio and advanced call features for business communications.",
    status: "Available on backorder", 
    image: network5,
    specs: [
      "PoE Supported",
      "HD Audio",
      "LCD Display",
      "Gigabit Ethernet",
      "Speakerphone",
      "Headset Port",
      "Multiple Line Keys",
      "XML Applications",
      "Wall Mountable",
      "2 Year Warranty"
    ]
  },
  { 
    id: 38, 
    name: "Ubiquiti UniFi AP", 
    description: "Mesh WiFi access point",
    fullDescription: "The Ubiquiti UniFi access point provides seamless mesh WiFi coverage for homes and businesses.",
    status: "In stock", 
    image: network6,
    specs: [
      "WiFi 6",
      "Mesh Technology",
      "4x4 MIMO",
      "160MHz Channel",
      "PoE Powered",
      "UniFi Controller",
      "Guest Network",
      "Band Steering",
      "Weather Resistant",
      "Wall/Ceiling Mount"
    ]
  },
  { 
    id: 39, 
    name: "Netgear Orbi Pro", 
    description: "Business mesh WiFi system",
    fullDescription: "The Netgear Orbi Pro delivers reliable, high-performance mesh WiFi coverage for small to medium businesses.",
    status: "In stock", 
    image: network7,
    specs: [
      "Tri-Band Mesh",
      "WiFi 6",
      "6Gbps Speed",
      "Dedicated Backhaul",
      "2.5G Ports",
      "Guest Network",
      "VLAN Support",
      "VPN Support",
      "Advanced Security",
      "3 Year Warranty"
    ]
  },
  { 
    id: 40, 
    name: "TP-Link Omada", 
    description: "SDN integrated networking system",
    fullDescription: "The TP-Link Omada system provides software-defined networking for easy management of business networks.",
    status: "In stock", 
    image: network8,
    specs: [
      "SDN Integrated",
      "WiFi 6",
      "Central Management",
      "Mesh Support",
      "PoE Switches",
      "VPN Router",
      "Cloud Access",
      "VLAN Support",
      "Captive Portal",
      "Lifetime Warranty"
    ]
  }
];

//=============================================
// DISPLAY - 8 Products with 8 different images
//=============================================
export const displayData = [
  { 
    id: 41, 
    name: "LED Video Wall", 
    description: "Commercial display screen for digital signage",
    fullDescription: "Professional LED video wall solution for impactful digital signage in retail, corporate, and public spaces.",
    status: "In stock", 
    image: display1,
    specs: [
      "LED Display",
      "Full HD",
      "Outdoor Rated",
      "IP65 Waterproof",
      "5000 nits Brightness",
      "High Contrast Ratio",
      "24/7 Operation",
      "Content Management Software",
      "Modular Design",
      "3 Year On-Site Warranty"
    ]
  },
  { 
    id: 42, 
    name: "Interactive Whiteboard", 
    description: "Touch screen display for collaboration",
    fullDescription: "Interactive whiteboard that transforms meetings and classrooms with touch collaboration and annotation.",
    status: "In stock", 
    image: display2,
    specs: [
      "86-inch Display",
      "4K Resolution",
      "Touch Screen",
      "Android OS",
      "20-Point Multi-Touch",
      "Built-in Whiteboard App",
      "Screen Mirroring",
      "Wireless Presentation",
      "HDMI + USB Ports",
      "Mobile Stand Included"
    ]
  },
  { 
    id: 43, 
    name: "Digital Signage", 
    description: "Advertising display with content management",
    fullDescription: "Professional digital signage display for advertising and information sharing in retail and hospitality.",
    status: "In stock", 
    image: display3,
    specs: [
      "55-inch Display",
      "Full HD",
      "24/7 Operation",
      "Content Management",
      "700 nits Brightness",
      "Built-in Media Player",
      "Scheduled Playback",
      "Remote Management",
      "VESA Mount Compatible",
      "3 Year Warranty"
    ]
  },
  { 
    id: 44, 
    name: "Video Conferencing", 
    description: "Meeting room display with camera and mic",
    fullDescription: "All-in-one video conferencing solution for modern meeting rooms. Includes 4K camera and built-in microphone array.",
    status: "In stock", 
    image: display4,
    specs: [
      "4K Camera",
      "Built-in Mic",
      "Zoom Certified",
      "Android System",
      "65-inch 4K Display",
      "8-Mic Array",
      "20W Speakers",
      "Wireless Sharing",
      "HDMI + USB-C",
      "Wall Mount Included"
    ]
  },
  { 
    id: 45, 
    name: "Kiosk Display", 
    description: "Self-service terminal with touch screen",
    fullDescription: "Interactive kiosk display for self-service applications in retail, hospitality, and public spaces.",
    status: "Available on backorder", 
    image: display5,
    specs: [
      "Touch Screen",
      "Stand Included",
      "Payment Ready",
      "Weather Proof",
      "32-inch Display",
      "Full HD Resolution",
      "Android 11 OS",
      "4GB RAM + 64GB Storage",
      "WiFi + Ethernet",
      "Optional Thermal Printer"
    ]
  },
  { 
    id: 46, 
    name: "Samsung QMR Series", 
    description: "Professional signage display",
    fullDescription: "The Samsung QMR Series delivers stunning picture quality and reliability for professional signage applications.",
    status: "In stock", 
    image: display6,
    specs: [
      "65-inch 4K",
      "QLED Technology",
      "Non-Glare Panel",
      "24/7 Operation",
      "Tizen OS",
      "MagicINFO Support",
      "Dynamic Refresh Rate",
      "Built-in Speakers",
      "IP5x Rating",
      "3 Year Warranty"
    ]
  },
  { 
    id: 47, 
    name: "LG Stretch Display", 
    description: "Unique digital signage for retail",
    fullDescription: "The LG Stretch Display offers a unique form factor perfect for retail shelves and transportation information displays.",
    status: "In stock", 
    image: display7,
    specs: [
      "58:9 Aspect Ratio",
      "Full HD",
      "Ultra-Stretch Design",
      "700 nits Brightness",
      "IPS Panel",
      "webOS Smart Platform",
      "Content Management",
      "Video Wall Capability",
      "VESA Mount",
      "Commercial Grade"
    ]
  },
  { 
    id: 48, 
    name: "NEC MultiSync", 
    description: "Professional large format display",
    fullDescription: "The NEC MultiSync series offers professional-grade displays for demanding commercial environments.",
    status: "In stock", 
    image: display8,
    specs: [
      "49-inch Display",
      "4K Resolution",
      "IPS Panel",
      "24/7 Operation",
      "Open Modular Platform",
      "Built-in Compute",
      "Tile Matrix Support",
      "DisplayPort 1.4",
      "HDMI 2.0",
      "5 Year Warranty"
    ]
  }
];