// Laptops - 8 different images
import laptop1 from "../../assets/laptop/Asu11.png";
import laptop2 from "../../assets/laptop/asus3.png";
import laptop3 from "../../assets/laptop/Asus4.png";
import laptop4 from "../../assets/laptop/Asu6.png";
import laptop5 from "../../assets/laptop/Hp3.png";
import laptop6 from "../../assets/laptop/Spec.png"; // You'll need to add this image
import laptop7 from "../../assets/laptop/Hp4.png"; // You'll need to add this image
import laptop8 from "../../assets/laptop/asus6.png"; // You'll need to add this image

// Printers - 8 different images
import printer1 from "../../assets/printer/p1.jpg";
import printer2 from "../../assets/printer/p2.jpg";
import printer3 from "../../assets/printer/p3.jpg";
import printer4 from "../../assets/printer/p4.jpg";
import printer5 from "../../assets/printer/p5.jpg";
import printer6 from "../../assets/printer/p4.jpg"; // You'll need to add this image
import printer7 from "../../assets/printer/p4.jpg"; // You'll need to add this image
import printer8 from "../../assets/printer/p4.jpg"; // You'll need to add this image

// Monitors - 8 different images
import monitor1 from "../../assets/monitor/mon2.png";
import monitor2 from "../../assets/monitor/mon2.jpg";
import monitor3 from "../../assets/monitor/mon3.jpg";
import monitor4 from "../../assets/monitor/mon4.jpg";
import monitor5 from "../../assets/monitor/mon5.jpg";
import monitor6 from "../../assets/monitor/mon5.jpg"; // You'll need to add this image
import monitor7 from "../../assets/monitor/mon5.jpg"; // You'll need to add this image
import monitor8 from "../../assets/monitor/mon5.jpg"; // You'll need to add this image

// Desktops - 8 different images
import desktop1 from "../../assets/desktop/Desk2.png";
import desktop2 from "../../assets/desktop/Desk.png";
import desktop3 from "../../assets/desktop/Del.png";
import desktop4 from "../../assets/desktop/de1.png";
import desktop5 from "../../assets/desktop/len.png";
import desktop6 from "../../assets/desktop/del4.png"; // You'll need to add this image
import desktop7 from "../../assets/desktop/gem.png"; // You'll need to add this image
import desktop8 from "../../assets/desktop/de7.png"; // You'll need to add this image

// Networking Equipment - 8 different images
import network1 from "../../assets/laptop/a.jpg"; // You'll need to add these images
import network2 from "../../assets/laptop/b.jpg";
import network3 from "../../assets/laptop/dell.png";
import network4 from "../../assets/laptop/c.jpg";
import network5 from "../../assets/laptop/c.jpg";
import network6 from "../../assets/laptop/c.jpg";
import network7 from "../../assets/laptop/c.jpg";
import network8 from "../../assets/laptop/c.jpg";

// Display Equipment - 8 different images
import display1 from "../../assets/monitor/mon1.png"; // You'll need to add these images
import display2 from "../../assets/monitor/mon2.jpg";
import display3 from "../../assets/monitor/mon3.jpg";
import display4 from "../../assets/monitor/mon4.jpg";
import display5 from "../../assets/monitor/mon5.jpg";
import display6 from "../../assets/monitor/mon4.jpg";
import display7 from "../../assets/monitor/mon2.jpg";
import display8 from "../../assets/monitor/mon1.png";

//=============================================
// LAPTOPS - 8 Products with 8 different images
//=============================================
export const laptopsData = [
  {
    id: 1,
    name: "ASUS ROG Strix G15",
    description: "High-performance gaming laptop",
    fullDescription:
      "Unleash elite gaming and multitasking power with the ASUS ROG Strix G15 (G513QR-ES96). Powered by an 8-core AMD Ryzen 9 processor and NVIDIA GeForce RTX 3070 8GB graphics, this machine delivers ultra-smooth 1080p gaming and demanding creative performance. Featuring a 15.6-inch Full HD display, 16GB DDR4 RAM, and a blazing-fast 1TB NVMe PCIe SSD, it is built for serious gamers and professionals who demand speed, precision, and reliability.",
    status: "In stock",
    image: laptop1,
    specs: [
      "AMD Ryzen 9 Processor ",
      "16GB DDR4 RAM (3200MHz)",
      "1TB M.2 NVMe PCIe 3.0 SSD",
      "15.6-inch Full HD (1920x1080) Display",
      "NVIDIA GeForce RTX 3070 8GB GDDR6",
      "WiFi 6 (802.11ax) & Bluetooth",
      "4× USB 3.0 Ports",
      "Up to 12 Hours Battery Life",
      "Windows 11 Home",
      "Original Black Finish",
    ],
  },
  {
    id: 2,
    name: "ASUS ROG Strix-G16 ",
    description: "Gamming laptop with 4K display",
    fullDescription:
      "ASUS ROG Strix-G16 Gaming Laptop - AMD Ryzen 9 8940HX (Up to 5.3 GHz), NVIDIA GeForce RTX 5070 Ti, 16 165Hz 300 nits Display, 64GB DDR5 RAM, 2TB SSD, WiFi 6E, Backlit KB, Win11 Pro, with Accessories",
    status: "In stock",
    image: laptop2,
    specs: [
      "AMD Ryzen 9 8940HX ",
      "16 Cores / 32 Threads/5.3GHz",
      "15.6-inch 4K UHD (3840x2160) IPS Display",
      "NVIDIA GeForce RTX 5070 Ti 12GB GDDR7",
      "DLSS 4 with AI Frame Generation",
      "Up to 64GB DDR5 5600MT/s RAM",
      "Up to 8TB M.2 PCIe NVMe SSD",
      "WiFi 6E & 2.5Gb Ethernet",
      "1× HDMI 2.1",
      "2× USB-C 4 & 2× USB-A 3.2",
      "Windows 11 Pro",
      "Weight: 5.51 lbs",
    ],
  },
  {
    id: 3,
    name: "ASUS TUF A15 FA506NFR",
    description: "Built for gamers and creators",
    fullDescription:
      "ASUS TUF A15 FA506NFR-HN090 Gaming Laptop, AMD Ryzen™ 7 7435HS, 16GB Ram, 512GB SSD, Nvidia RTX 2050 4GB, 15.6″ FHD 144Hz, Win11 pro, Graphite Black, Eng RGB Backlit (Upgraded)",
    status: "In stock",
    image: laptop3,
    specs: [
      "CPU AMD Ryzen 7",
      "16GB RAM with 512GB SSD",
      "NVIDIA GeForce RTX 2050 4GB",
      "Screen size 15.6 FHD 144Hz",
      "AMD Ryzen™ 7 7435HS",
      "1920x1080 Pixels Resolution",
      "	3.1 GHz Speed & 8 cores",
      "	Windows 11 Pro",
      "2.3 Kilograms",
      "48 Watt Hours Battery Life",
    ],
  },
  {
    id: 4,
    name: "Lenovo Gaming Laptop",
    description: "Powerful Gaming Performance ",
    fullDescription:
      "Lenovo LOQ 15 Gaming Laptop with 15.6” FHD 144Hz Display, AMD Ryzen 7-250 Processor, 16GB DDR5 RAM, 512GB SSD, NVIDIA GeForce RTX 5050 GPU 8GB GDDR7, White Backlit English Keyboard, Windows 11, Grey",
    status: "In stock",
    image: laptop4,
    specs: [
      "AMD Ryzen 7 Processor",
      "512GB SSD Storage",
      "NVIDIA GeForce RTX 5050 8GB GDDR7",
      "15.6-inch Full HD (1920x1080) 144Hz Display",
      "16GB DDR5 RAM (5600MHz)",
      "WiFi 6 & WiFi 5 Support (802.11ax/ac)",
      "2× USB 3.0 Ports",
      "White Backlit English Keyboard",
      "Windows 11 Home",
      "Weight: 3kg",
    ],
  },
  {
    id: 5,
    name: "HP EliteBook 840 G11",
    description: "Slim and reliable office Laptop",
    fullDescription:
      "HP - EliteBook 840 G11 Laptop 14.0 WUXGA (Intel Ultra 7 155U, 16GB DDR5, 512GB PCIe SSD, Win 11 Pro) w/USB Hub - Silver",
    status: "Available on backorder",
    image: laptop5,
    specs: [
     "Intel Core Ultra 7 155U ",
    "14-inch WUXGA (1920x1200)",
    "60Hz Refresh ,12-Core",
    "16GB DDR5 RAM",
    "512GB PCIe SSD",
    "Intel Integrated Graphics",
    "1× HDMI 2.1",
    "Backlit Keyboard",
    "Windows 11 Pro ",
    "Silver Finish (2025 Release)"
    ],
  },
  {
    id: 6,
    name: "HP Spectre x360 ",
    description: "Enjoy an impressive gaming experience",
    fullDescription:
      "HP Spectre x360 16-aa0172ng incl. Pen 16 Inch WQXGA IPS Touch 120Hz, Intel Core Ultra 7-155H, 16GB RAM, 1TB SSD, Windows 11",
    status: "In stock",
    image: laptop6,
    specs: [
      " Intel Core Ultra 7-155H",
      "16GB RAM, ",
      "120Hz Refresh Rate",
      "1TB SSD Storage",
      "16 Inch WQXGA IPS Touch Display",
      "Intel Integrated Graphics",
      "Convertible 360° Design",
      "HP Pen Included",
      "Bluetooth Connectivity",
      "Windows 11",
    ],
  },
  {
    id: 7,
    name: " HP Envy x360 2-in-1 Laptop",
    description: "Upgrade to enhance performance",
    fullDescription:
      "HP Envy x360 2-in-1 Laptop, 14.0\" Touchscreen FHD Display, Intel Core 7 150U Processor, 16GB RAM 512GB SSD, Bluebooth, Wi-Fi 6E, Fingerprint Reader, Backlit Keyboard, Windows 11 Pro, Silver(Upgraded)",
    status: "In stock",
    image: laptop7,
    specs: [
      "Touchscreen FHD Display",
      "16GB RAM 512GB SSD",
      "Intel Core 7 150U Processor",
      "Processor Speed: 5.4 GHz",
      "Bluetooth 5.2",
      "Wi-Fi 6E Support",
      "Fingerprint Reader",
      "Backlit Keyboard",
      "Intel Graphics",
      "Windows 11 Pro",
    ],
  },
  {
    id: 8,
    name: "HP 15 Laptop for Business",
    description: "Sleek and stylish premium laptop",
    fullDescription:
      "HP 15 Laptop for Business & Student, 15.6 FHD Micro-Edge Display, Intel Core i3-1215U up to 4.40GHz, 16GB RAM, 512GB NVMe SSD, 720p Webcam, Numpad, USB-C, Wi-Fi, FP Reader, PDG HDMI, Win 11 Pro",
    status: "In stock",
    image: laptop8,
    specs: [
      "Intel i3-1215U",
      "16GB RAM 512GB SSD ",
      "15.6 inches, 1920 x 1080 (FHD)",
      "Intel UHD Graphics for 12th Gen Intel Processors",
      "Up to 3.30 GHz with Intel Turbo Boost Technology",
      "6 Cores 8 Threads",
      "Windows 11 Home",
      "Fingerprint Power Button",
      "Omnisonic Speakers",
    ],
  },
];

//=============================================
// DESKTOPS - 8 Products with 8 different images
//=============================================
export const desktopData = [
  {
    id: 9,
    name: "HP All-in-One Desktop",
    description: "Business desktop computer ",
    fullDescription:
      "HP All-in-One Desktop AI 27-cr2075t PC, Windows 11 Home, 27-inch Touch screen, Intel® Core™ Ultra 7, 16GB RAM, 1TB SSD, FHD, Jet black",
    status: "In stock",
    image: desktop1,
    specs: [
      " 27-inch Touchscreen",
    "16GB DDR5-5600 RAM ",
    "1TB PCIe NVMe SSD",
    "Intel UHD Integrated Graphics",
    "Wi-Fi 6 (2x2) & Bluetooth 5.4",
    "HP True Vision 1080p IR Webcam with Dual Array Mics",
    "Dual 2W Speakers",
    "Height-adjustable Detachable Stand",
    "Jet Black Finish, Includes USB Keyboard & Mouse",
    "Windows 11 Home"
    ],
  },
  {
    id: 10,
    name: "HP Pro Tower 280 G9",
    description: "Modern Office desktop solution",
    fullDescription:
      "The HP Pro Tower 280 G9 is a compact and reliable desktop PC designed for office productivity and everyday tasks. Powered by the Intel Core i3-12100 processor (3.3GHz base, up to 4.3GHz turbo), 4GB DDR4 RAM, and a 256GB SSD, it delivers smooth performance for standard workflows. Integrated Intel UHD 730 graphics handle basic multimedia tasks. The system includes Intel H670 chipset motherboard, Realtek audio, 180W power supply, wired RJ-45 networking, Wi-Fi 6/Bluetooth 4.2, and comes with FreeDOS for flexible OS installation.",
    status: "In stock",
    image: desktop2,
    specs: [
      "Intel Core i3-12100 ",
    "4GB DDR4 RAM",
    "12M Cache, 3.3GHz - 4.3GHz",
    "256GB SSD Storage",
    "Intel UHD 730 Integrated Graphics",
    "Intel H670 Chipset Motherboard",
    "Realtek ALC3867 Audio Codec",
    "180W Power Supply",
    "1× RJ-45 Ethernet, Wi-Fi 6 & Bluetooth 4.2",
    "FreeDOS Operating System",
    "Compact Tower Form Factor"
    ],
  },
  {
    id: 11,
    name: "Dell Pro Tower Desktop",
    description: "Compact business desktop ",
    fullDescription:
      "High-performance desktop with up to 64GB DDR5 memory at 6400 MT/s, one M.2 SSD slot (expandable to two via Zoom card), three PCIe slots, and support for DisplayPort 1.4 and HDMI 2.1.",
    status: "In stock",
    image: desktop3,
    specs: [
      "Intel® Core™ i5-14500 vPro® ",
      "14 cores, up to 5.0GHz",
      "8GB RAM",
      "256 GB SSD, TLC",
      "Integrated Graphics",
      "Activate Your Microsoft 365",
      "Windows 11 Pro",
      
    ],
  },
  {
    id: 12,
    name: "Dell Optiplex 7020",
    description: "Exceptional multitasking performance",
    fullDescription:
      "Dell Optiplex 7020 SFF Business Desktop Computer, Intel Core I5-14500, 14Core, 20 Threads, up to 5GHz, 16GB RAM 512GB SSD, RJ-45 Ethernet, HDMI, DisplatPort, WIFI6, Bluetooth, DVD-RW, Windows 11 Pro",
    status: "In stock",
    image: desktop4,
    specs: [
      "14th Gen Intel Core i5 Pro",
      "8GB RAM",
      "256GB SSD",
      "CPU Speed	2.6 GHz (Base) up to 5.0 GHz (Turbo)",
      "7-Core GPU",
      "Intel Graphics",
      "Thunderbolt 4 Ports",
      "HDMI 2.0",
      "WiFi 6",
      "Bluetooth 5.0",
    ],
  },
  {
    id: 13,
    name: "Lenovo ThinkCentre M70t ",
    description: "Home desktop computer",
    fullDescription:
      "Lenovo ThinkCentre M70t Gen 5 12U0000LUS Desktop Computer - Intel Core i5 14th Gen i5-14500 - vPro Technology - 16 GB - 512 GB SSD - Tower - Black",
    status: "Available on backorder",
    image: desktop5,
    specs: [
      "Intel Core i5 14th Gen i5-14500r",
      "16 GB - 512 GB SSD ",
      "ThinkCentre M70t Gen 5",
      "Intel UHD Graphics 770",
      "802.11ax, Bluetooth",
      "Intel UHD Graphics 600",
      "USB 3.0 Ports",
      "HDMI Output",
      "VGA Port",
      "	DDR5 RAM",
      "3840x2160 Resolution",
      "Wired Keyboard & Mouse",
    ],
  },
  {
    id: 14,
    name: "Dell Tower Desktop",
    description: "Business, Education, Multimedia use",
    fullDescription:
      "The HP Pavilion All-in-One desktop combines powerful performance with a stunning display in a space-saving design.",
    status: "In stock",
    image: desktop6,
    specs: [
      "Intel Core Ultra 7-265",
      "32GB Memory",
      "1 TB SSD",
      "1TB M.2 SSD, 3.0 SD Card Reader",
      "23.8-inch FHD Touch",
      "UHD Graphics",
      "WiFi 6",
      "802.11ax, Bluetooth 5.2",
      "Wired Keyboard and Mouse",
      "Windows 11 Home",
    ],
  },
  {
    id: 15,
    name: "Walton AMD Ryzen Desktop",
    description: "High-performance gaming desktop",
    fullDescription:
      "Walton WDPC320G07 AMD Ryzen 3 3200G 8GB RAM 1TB HDD 128GB SSD Desktop PC, Windows 10 Pro, Black",
    status: "In stock",
    image: desktop7,
    specs: [
     "AMD Ryzen 3 3200G Processor",
    "8GB DDR4 RAM",
    "128GB SSD + 1TB HDD",
    "PCIe 4.0 for faster graphics bandwidth",
    "35MB GameCache memory for better game performance",
    "7nm processor technology for cool & quiet operation",
    "Integrated Graphics",
    "Ideal for home, office, and light gaming tasks"
    ],
  },
  {
    id: 16,
    name: "Walton WDPCG65041",
    description: "Professional workstation for creators",
    fullDescription:
      "Walton WDPCG65041 Intel PDC 8GB RAM 128GB SSD 1TB HDD Budget Friendly Brand PC, Windows 10 Pro, Black",
    status: "In stock",
    image: desktop8,
    specs: [
     "Intel Pentium Gold Processor",
    "8GB RAM",
    "128GB SSD + 1TB HDD",
    "Integrated Intel Graphics",
    "Intel Chipset Motherboard",
    "Reliable for office and everyday computing",
    "Dual storage for speed and capacity"
    ],
  },
];

//=============================================
// MONITORS - 8 Products with 8 different images
//=============================================
export const monitorData = [
  {
    id: 17,
    name: 'HP Series 5 27" FHD Monitor',
    description: "Ultra HD professional monitor perfect for home use, work, and entertainment!",
    fullDescription:
      "Experience stunning detail and color accuracy with this 4K professional monitor. Perfect for designers, editors, and power users.",
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
      "VESA Mount Compatible",
    ],
  },
  {
    id: 18,
    name: 'Samsung Curved 32"',
    description: "Curved gaming monitor with 144Hz refresh",
    fullDescription:
      "Immerse yourself in gaming with this curved monitor. The 144Hz refresh rate and QHD resolution deliver smooth, detailed visuals.",
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
      "Headphone Jack",
    ],
  },
  {
    id: 19,
    name: 'LG UltraWide 34"',
    description: "Ultrawide office monitor with USB-C",
    fullDescription:
      "Boost productivity with this ultrawide monitor. Perfect for multitasking with split-screen capabilities and excellent color accuracy.",
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
      "Height Adjustable Stand",
    ],
  },
  {
    id: 20,
    name: 'ASUS ProArt 27"',
    description: "Professional color monitor for creators",
    fullDescription:
      "Calman Verified professional monitor with factory-calibrated colors. Ideal for photography, video editing, and graphic design.",
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
      "Anti-Glare Coating",
    ],
  },
  {
    id: 21,
    name: 'HP 24" Business',
    description: "Reliable office monitor with VESA mount",
    fullDescription:
      "Essential monitor for everyday business use. Reliable, affordable, and versatile with multiple connectivity options.",
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
      "3 Year Warranty",
    ],
  },
  {
    id: 22,
    name: "Acer Predator X34",
    description: "Ultrawide gaming monitor",
    fullDescription:
      "The Acer Predator X34 delivers an immersive gaming experience with its ultrawide curved display and lightning-fast refresh rate.",
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
      "DisplayPort 1.4",
    ],
  },
  {
    id: 23,
    name: "BenQ PD3220U",
    description: "Designer monitor with Thunderbolt 3",
    fullDescription:
      "The BenQ PD3220U is specifically designed for designers and content creators who demand color accuracy and connectivity.",
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
      "Shading Hood",
    ],
  },
  {
    id: 24,
    name: "ViewSonic VP3881",
    description: "Professional ultrawide for creatives",
    fullDescription:
      "The ViewSonic VP3881 offers professional-grade color accuracy in a stunning ultrawide format for creative professionals.",
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
      "Pantone Validated",
    ],
  },
];

//=============================================
// PRINTERS - 8 Products with 8 different images
//=============================================
export const printerData = [
  {
    id: 25,
    name: "HP LaserJet Pro",
    description: "Laser printer for office with duplex printing",
    fullDescription:
      "Reliable monochrome laser printer for busy offices. Fast printing speeds and low cost per page.",
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
      "1 Year Warranty",
    ],
  },
  {
    id: 26,
    name: "Epson EcoTank",
    description: "Ink tank printer with high-yield ink",
    fullDescription:
      "Revolutionary ink tank system that saves money with high-yield ink bottles. Perfect for high-volume printing.",
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
      "Borderless Photo Printing",
    ],
  },
  {
    id: 27,
    name: "Canon PIXMA",
    description: "All-in-one inkjet printer with wireless",
    fullDescription:
      "Versatile all-in-one printer perfect for home and small office use. Great photo printing quality.",
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
      "CD/DVD Printing",
    ],
  },
  {
    id: 28,
    name: "Brother MFC-L2750",
    description: "Monochrome laser printer with automatic feeder",
    fullDescription:
      "Feature-rich monochrome laser multifunction printer for busy offices needing speed and reliability.",
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
      "Up to 3,000 Page Yield",
    ],
  },
  {
    id: 29,
    name: "Lexmark C3326",
    description: "Color laser printer with Ethernet port",
    fullDescription:
      "Affordable color laser printer for small workgroups needing vibrant color documents.",
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
      "1 Year On-Site Service",
    ],
  },
  {
    id: 30,
    name: "Xerox WorkCentre",
    description: "Multifunction printer for businesses",
    fullDescription:
      "The Xerox WorkCentre series delivers professional-quality printing, copying, scanning, and faxing in one device.",
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
      "2 Year Warranty",
    ],
  },
  {
    id: 31,
    name: "Kyocera ECOSYS",
    description: "Long-life cartridge system printer",
    fullDescription:
      "The Kyocera ECOSYS series features long-life components and low total cost of ownership for busy offices.",
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
      "3 Year Warranty",
    ],
  },
  {
    id: 32,
    name: "Ricoh SP C360DNw",
    description: "Color laser printer for workgroups",
    fullDescription:
      "The Ricoh SP C360DNw delivers vibrant color prints and fast speeds for small to medium workgroups.",
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
      "1 Year Warranty",
    ],
  },
];

//=============================================
// NETWORKING - 8 Products with 8 different images
//=============================================
export const networkingData = [
  {
    id: 33,
    name: "Cisco Router 1000",
    description: "Enterprise network router with advanced security",
    fullDescription:
      "Enterprise-grade router designed for businesses requiring reliable connectivity and advanced security features.",
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
      "5 Year Warranty",
    ],
  },
  {
    id: 34,
    name: "Cisco Switch 24-Port",
    description: "Managed network switch with PoE+",
    fullDescription:
      "Layer 2 managed switch perfect for business networks requiring PoE for phones, cameras, and access points.",
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
      "Limited Lifetime Warranty",
    ],
  },
  {
    id: 35,
    name: "Cisco Access Point",
    description: "Wireless access point with WiFi 6",
    fullDescription:
      "High-performance WiFi 6 access point for businesses needing fast, reliable wireless connectivity.",
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
      "Ceiling Mount Included",
    ],
  },
  {
    id: 36,
    name: "Cisco Firewall",
    description: "Network security appliance with threat protection",
    fullDescription:
      "Next-generation firewall providing advanced threat protection and secure connectivity for business networks.",
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
      "Cloud Management",
    ],
  },
  {
    id: 37,
    name: "Cisco IP Phone",
    description: "VoIP business phone with HD audio",
    fullDescription:
      "Enterprise-grade IP phone with crystal clear HD audio and advanced call features for business communications.",
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
      "2 Year Warranty",
    ],
  },
  {
    id: 38,
    name: "Ubiquiti UniFi AP",
    description: "Mesh WiFi access point",
    fullDescription:
      "The Ubiquiti UniFi access point provides seamless mesh WiFi coverage for homes and businesses.",
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
      "Wall/Ceiling Mount",
    ],
  },
  {
    id: 39,
    name: "Netgear Orbi Pro",
    description: "Business mesh WiFi system",
    fullDescription:
      "The Netgear Orbi Pro delivers reliable, high-performance mesh WiFi coverage for small to medium businesses.",
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
      "3 Year Warranty",
    ],
  },
  {
    id: 40,
    name: "TP-Link Omada",
    description: "SDN integrated networking system",
    fullDescription:
      "The TP-Link Omada system provides software-defined networking for easy management of business networks.",
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
      "Lifetime Warranty",
    ],
  },
];

//=============================================
// DISPLAY - 8 Products with 8 different images
//=============================================
export const displayData = [
  {
    id: 41,
    name: "LED Video Wall",
    description: "Commercial display screen for digital signage",
    fullDescription:
      "Professional LED video wall solution for impactful digital signage in retail, corporate, and public spaces.",
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
      "3 Year On-Site Warranty",
    ],
  },
  {
    id: 42,
    name: "Interactive Whiteboard",
    description: "Touch screen display for collaboration",
    fullDescription:
      "Interactive whiteboard that transforms meetings and classrooms with touch collaboration and annotation.",
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
      "Mobile Stand Included",
    ],
  },
  {
    id: 43,
    name: "Digital Signage",
    description: "Advertising display with content management",
    fullDescription:
      "Professional digital signage display for advertising and information sharing in retail and hospitality.",
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
      "3 Year Warranty",
    ],
  },
  {
    id: 44,
    name: "Video Conferencing",
    description: "Meeting room display with camera and mic",
    fullDescription:
      "All-in-one video conferencing solution for modern meeting rooms. Includes 4K camera and built-in microphone array.",
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
      "Wall Mount Included",
    ],
  },
  {
    id: 45,
    name: "Kiosk Display",
    description: "Self-service terminal with touch screen",
    fullDescription:
      "Interactive kiosk display for self-service applications in retail, hospitality, and public spaces.",
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
      "Optional Thermal Printer",
    ],
  },
  {
    id: 46,
    name: "Samsung QMR Series",
    description: "Professional signage display",
    fullDescription:
      "The Samsung QMR Series delivers stunning picture quality and reliability for professional signage applications.",
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
      "3 Year Warranty",
    ],
  },
  {
    id: 47,
    name: "LG Stretch Display",
    description: "Unique digital signage for retail",
    fullDescription:
      "The LG Stretch Display offers a unique form factor perfect for retail shelves and transportation information displays.",
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
      "Commercial Grade",
    ],
  },
  {
    id: 48,
    name: "NEC MultiSync",
    description: "Professional large format display",
    fullDescription:
      "The NEC MultiSync series offers professional-grade displays for demanding commercial environments.",
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
      "5 Year Warranty",
    ],
  },
];
