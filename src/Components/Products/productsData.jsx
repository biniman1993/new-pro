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
import printer1 from "../../assets/printer/printer1.png";
import printer2 from "../../assets/printer/Printer2.png";
import printer3 from "../../assets/printer/printer3.png";
import printer4 from "../../assets/printer/printer4.png";
import printer5 from "../../assets/printer/p4.jpg";
import printer6 from "../../assets/printer/printer5.png"; // You'll need to add this image
import printer7 from "../../assets/printer/epson.png"; // You'll need to add this image
import printer8 from "../../assets/printer/printer6.png"; // You'll need to add this image

// Monitors - 8 different images
import monitor1 from "../../assets/monitor/mon2.png";
import monitor2 from "../../assets/monitor/mon4.png";
import monitor3 from "../../assets/monitor/mon5.jpg";
import monitor4 from "../../assets/monitor/mon5.png";
import monitor5 from "../../assets/monitor/mon6.png";
import monitor6 from "../../assets/monitor/mon7.png"; // You'll need to add this image
import monitor7 from "../../assets/monitor/mon8.png"; // You'll need to add this image
import monitor8 from "../../assets/monitor/mon9.png"; // You'll need to add this image

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
import network1 from "../../assets/network/network1.png"; // You'll need to add these images
import network2 from "../../assets/network/network2.png";
import network3 from "../../assets/network/network3.png";
import network4 from "../../assets/network/network4.png";
import network5 from "../../assets/network/network5.png";
import network6 from "../../assets/network/network6.png";
import network7 from "../../assets/network/network7.png";
import network8 from "../../assets/network/network8.png";

// Display Equipment - 8 different images
import display1 from "../../assets/monitor/disp1.png"; // You'll need to add these images
import display2 from "../../assets/monitor/disp2.png";
import display3 from "../../assets/monitor/disp3.png";
import display4 from "../../assets/monitor/disp4.png";
import display5 from "../../assets/monitor/disp5.png";
import display6 from "../../assets/monitor/disp6.png";
import display7 from "../../assets/monitor/disp7.png";
import display8 from "../../assets/monitor/disp8.png";

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
    description: "Ultra HD professional monitor ",
    fullDescription:
      "Experience stunning detail and color accuracy with this 4K professional monitor. Perfect for designers, editors, and power users.",
    status: "In stock",
    image: monitor1,
    specs: [
      "Display: 27\" IPS, FHD",
      "Brightness: 300 nits",
      "Response Time: 5ms GtG",
      "Ports: 2x HDMI 1.4",
      "Power: 24W max",
      "Tilt Adjustment: -5° to +25°",
      "HDMI 2.0 Ports",
      "Weight: 3.2 kg",
     
    ],
  },
  {
    id: 18,
    name: 'HP Series 3 Pro FHD Monitor',
    description: "Modern monitor with sleek design",
    fullDescription:
      "Immerse yourself in gaming with this curved monitor. The 144Hz refresh rate and QHD resolution deliver smooth, detailed visuals.",
    status: "In stock",
    image: monitor2,
    specs: [
      "100Hz refresh rate",
      "21.45 inch Full HD",
      "5ms response time",
      "3-sided slim",
      "Anti-glare + Low Blue Light",
      "HDMI & VGA ports",
      "VESA mount support",
      "HDR10 Support",
      "HDMI 2.0 + DisplayPort",
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
    name: 'Dell D2020H Monitor',
    description: "Professional color monitor for creators",
    fullDescription:
      "Dell 19.5 inch (49.5 cm) LED Backlit Computer Monitor - HD, TN Panel with VGA & HDMI Port - D2020H (Black)",
    status: "In stock",
    image: monitor4,
    specs: [
      "19.5″ HD (1366×768)",
      "Refresh Rate: 60Hz",
      "Resolution: HD+ (1600 x 900)",
      "Ports: HDMI, VGA",
      "Thunderbolt 3 Ports",
      "USB Hub",
      
    ],
  },
  {
    id: 21,
    name: 'ASUS ROG Strix 34',
    description: " Gaming monitor with 175Hz refresh rate",
    fullDescription:
      "ASUS ROG Strix 34” Ultrawide QD-OLED HDR Gaming Monitor (XG34WCDG) - 3440x1440, 175Hz, 0.03ms, OLED Care Pro, True 10-bit, G-SYNC Compatible, DisplayWidget, Extreme Low Motion Blur, 1 yr Warranty",
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
    name: "SAMSUNG 34 Monitor",
    description: "Ultrawide gaming monitor",
    fullDescription:
      "SAMSUNG 34\" ViewFinity S50GC Series Ultra-WQHD Monitor, 100Hz, 5ms, HDR10, AMD FreeSync, Eye Care, Borderless Design, PIP, PBP, LS34C502GANXZA, 2023, Black",
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
    name: "Dell 34 Plus Monitor",
    description: "Designer monitor with Thunderbolt 3",
    fullDescription:
      "Dell 34 Plus USB-C Curved Monitor - S3425DW - 34-inch (3440 x 1440) up to 120 Hz 21:9 Display, VA Panel, AMD FreeSync Premium, 99% sRGB, 95% DCI-P3",
    status: "In stock",
    image: monitor7,
    specs: [
      "34-inch 4K",
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
    name: "acer 27 Inch Monitor",
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
    name: "Canon Machine IR 2425i",
    description: "A3 monochrome laser multifunction printer for small to medium offices",
    fullDescription: "The Canon imageRUNNER 2425i is a compact A3 monochrome laser MFP designed for small to medium offices with significant printing and scanning volumes. Features a 7-inch color touchscreen and automatic document feeder.",
    status: "In stock",
    image: printer1, // This should be your printer1.png file
    specs: [
      "A3 Monochrome Laser MFP",
      "Print/Copy/Scan (Color Scan)",
      "25 ppm Print Speed (A4)",
      "7-inch Color Touch Screen",
      "2GB RAM, 30GB eMMC",
      "600×600 dpi Resolution",
      "Auto Document Feeder (50 sheets)",
      "250-Sheet Cassette + 80-Sheet Multipurpose",
      "USB, Ethernet, Wi-Fi",
      "1 Year Warranty (up to 65,000 pages)",
    ],
  },
{
  id: 26,
  name: "Canon Machine C3326i",
  description: "A3 color laser multifunction printer with 26ppm speed and advanced security",
  fullDescription: "The Canon imageRUNNER C3326i is a high-performance A3 color laser MFP designed for small to medium offices. Features a 7-inch intuitive touchscreen, robust security features, and versatile finishing options for enhanced productivity.",
  status: "In stock",
  image: printer2, // This should be your printer2.png file
  specs: [
    "A3 Color Laser Multifunctional",
    "Print/Copy/Scan/Send (Optional Fax)",
    "26 ppm Print Speed (Black & Color, A4)",
    "7.0 sec First Copy (Black), 8.7 sec (Color)",
    "7-inch TFT LCD WVGA Color Touch Panel",
    "2.0 GB RAM + 64 GB eMMC Storage",
    "100-sheet Duplexing Automatic Document Feeder",
    "70 ipm Scan Speed (1-sided, 300 dpi)",
    "1,200-sheet Standard Paper Capacity (2x550 + 100 MP Tray)",
    "1,200 x 1,200 dpi Print Resolution",
    "AirPrint, Mopria, Canon PRINT Business Compatible",
    "Wireless LAN, Ethernet, USB 2.0",
    "Warm-up Time: 4 seconds (Quick Startup)",
    "Monthly Duty Cycle: Up to 50,000 Pages",
    "Weight: Approx. 74.7 kg including toner",
  ],
},
  {
    id: 27,
    name: "Canon Machine 2945i",
    description: "High-speed A3 multifunction printer with 45ppm output",
    fullDescription: "The Canon imageRUNNER 2945i is a powerful A3 monochrome MFP designed for high-volume office environments. Delivers exceptional performance with 45ppm speeds and advanced document handling capabilities.",
    status: "In stock",
    image: printer3, // This should be your printer3.png file
    specs: [
      "A3 Monochrome Laser MFP",
      "45 ppm Print Speed",
      "5.3 sec First Copy Time",
      "Print/Copy/Scan/Fax (Optional)",
      "2GB RAM, 64GB eMMC",
      "100-sheet Dual Pass ADF",
      "550-Sheet Drawers x2",
      "100-Sheet Multipurpose Tray",
      "Up to 1,200 dpi Resolution",
      "Ethernet, USB, Optional Wi-Fi",
    ],
  },
  {
    id: 28,
    name: "HP 137fnw Printer",
    description: "Compact laser multifunction printer with fax and wireless",
    fullDescription: "The HP Laser MFP 137fnw is a space-saving 4-in-1 printer perfect for small offices. Combines print, copy, scan, and fax capabilities with reliable wireless connectivity.",
    status: "In stock",
    image: printer4, // This should be your printer4.png file
    specs: [
      "Monochrome Laser MFP",
      "Print/Copy/Scan/Fax",
      "20 ppm Print Speed",
      "8.3 sec First Page Out",
      "150-Sheet Input Tray",
      "40-sheet ADF",
      "2-Line LCD Display",
      "Wi-Fi, Ethernet, USB",
      "Monthly Duty: 10,000 Pages",
      "Apple AirPrint, Mopria, Wi-Fi Direct",
    ],
  },
  {
    id: 29,
    name: "HP LaserJet Pro 4303dw",
    description: "Color laser all-in-one with advanced security and mobile printing",
    fullDescription: "This HP Color LaserJet Pro MFP delivers vibrant color prints with fast performance. Built-in security features protect sensitive data, while mobile printing options provide flexibility for modern workflows.",
    status: "In stock",
    image: printer5, // This should be your printer5.png file
    specs: [
      "Color Laser Multifunction",
      "Print/Copy/Scan",
      "33 ppm Black & Color",
      "50,000 Pages Monthly Duty",
      "4.3-inch Touchscreen",
      "Auto Duplex Printing",
      "50-sheet ADF",
      "250-sheet Tray + 50-sheet Multipurpose",
      "Gigabit Ethernet, Wi-Fi, USB",
      "HP Auto-On/Auto-Off Technology",
    ],
  },
  {
    id: 30,
    name: "HP DeskJet 2855e",
    description: "Affordable all-in-one inkjet printer for home use",
    fullDescription: "The HP DeskJet 2855e is a reliable and affordable inkjet printer perfect for everyday home printing, copying, and scanning. Compact design with easy mobile setup.",
    status: "In stock",
    image: printer6, // This should be your printer6.png file
    specs: [
      "Inkjet Multifunction",
      "Print/Copy/Scan",
      "7.5 ppm Black, 5.5 ppm Color",
      "Up to 4800 dpi Color Resolution",
      "60-sheet Input Tray",
      "35-sheet Output Tray",
      "USB 2.0",
      "HP Smart App Compatible",
      "Monthly Duty: 1,000 Pages",
      "Energy Star Certified",
    ],
  },
  {
    id: 31,
    name: "Epson EcoTank 3252",
    description: "Cartridge-free all-in-one with massive page yield",
    fullDescription: "The Epson EcoTank ET-3252 eliminates cartridges with high-capacity ink tanks. Includes up to 2 years of ink in the box, delivering incredible savings for high-volume home or office printing.",
    status: "In stock",
    image: printer7, // This should be your printer7.png file
    specs: [
      "EcoTank Inkjet System",
      "Print/Copy/Scan",
      "33 ppm Black, 15 ppm Color",
      "Up to 4,500 Black / 7,500 Color Pages Included",
      "150-sheet Cassette",
      "30-sheet ADF",
      "1.44-inch Color Display",
      "Wi-Fi, Wi-Fi Direct, USB",
      "Borderless Photo Printing",
      "2 Years of Ink Included",
    ],
  },
  {
    id: 32,
    name: "HP LaserJet Pro M428fdw",
    description: "HP LaserJet Pro MFP M428fdwlaser printer with advanced features",
    fullDescription: "The HP LaserJet Pro MFP M428fdw delivers fast, high-quality monochrome printing for professional environments. Enhanced security features and intuitive touchscreen streamline workflows.",
    status: "In stock",
    image: printer8, // This should be your printer8.png file
    specs: [
      "Monochrome Laser MFP",
      "Print/Copy/Scan",
      "33 ppm Print Speed",
      "9.5 sec First Page Out",
      "4.3-inch Touchscreen",
      "512MB Memory",
      "50-sheet ADF, 250-sheet Tray",
      "Auto Duplex Printing",
      "Gigabit Ethernet, Wi-Fi, USB",
      "HP Wolf Security Protection",
    ],
  },
];

//=============================================
// NETWORKING - 8 Products with 8 different images
//=============================================
export const networkingData = [
  {
    id: 33,
    name: "Cisco 1941-SEC/K9 Router",
    description: "Modular router with hardware-based encryption and firewall",
    fullDescription: "The Cisco 1941-SEC/K9 is a modular, multi-service router designed for enterprise and branch office deployments. Features hardware-based encryption acceleration, integrated firewall, and supports a wide range of wired and wireless connectivity options including Serial, T1/E1, xDSL, and Gigabit Ethernet [citation:1][citation:8].",
    status: "In stock",
    image: network1, // This should be your net1.png file
    specs: [
      "Modular Router with 2 EHWIC + 1 ISM Slots",
      "2 x 10/100/1000BASE-T Gigabit Ethernet Ports",
      "512 MB DRAM + 256 MB Compact Flash",
      "Hardware-Accelerated VPN (DES, 3DES, AES-256)",
      "Cisco IOS Firewall with Zone-Based Policy",
      "IPv4, IPv6, OSPF, EIGRP, BGP Routing Support",
      "IPSec VPN, DMVPN, Easy VPN Server",
      "QoS, PBR, NBAR Traffic Management",
      "Dual USB 2.0 Ports + Console/AUX Ports",
      "1U Rack-Mountable, 5.4 kg [citation:1]",
    ],
  },
  {
    id: 34,
    name: "Cisco WS-C2960X-24PS-L",
    description: "24-Port Gigabit PoE+ managed switch with 370W budget",
    fullDescription: "The Cisco Catalyst 2960X-24PS-L is a stackable Gigabit Ethernet switch with Power over Ethernet Plus (PoE+), delivering 370W of PoE budget for VoIP phones, cameras, and wireless access points. Features enterprise-class Layer 2 and Layer 3 capabilities with advanced security [citation:2][citation:5].",
    status: "In stock",
    image: network2, // This should be your net2.png file
    specs: [
      "24 x 10/100/1000 PoE+ Ports + 4 x SFP Uplinks",
      "370W PoE Budget (supports IEEE 802.3at/af)",
      "216 Gbps Switching Capacity, 95.2 Mpps Forwarding",
      "Cisco IOS LAN Base Software",
      "FlexStack-Plus Stacking (Up to 8 Switches)",
      "512 MB DRAM, 128 MB Flash Memory",
      "802.1X, BPDU Guard, DHCP Snooping Security",
      "VLAN, STP, RSTP, MSTP, IGMP Snooping",
      "SNMP, CLI, Web UI Management",
      "Limited Lifetime Warranty [citation:2][citation:5]",
    ],
  },
  {
    id: 35,
    name: "Cisco WS-C2960+48TC-L Switch",
    description: "48-Port Gigabit switch with 2 combo uplinks",
    fullDescription: "The Cisco Catalyst 2960 Plus 48TC-L is a reliable 48-port Gigabit Ethernet switch for enterprise access deployments. Features 2 dual-purpose uplink ports (10/100/1000BASE-T or SFP) and delivers essential intelligent services for secure business operations [citation:4][citation:7].",
    status: "In stock",
    image: network3, // This should be your net3.png file
    specs: [
      "48 x 10/100/1000 Ethernet Ports",
      "2 x Combo Uplink Ports (RJ-45/SFP)",
      "13.6 Gbps Backplane, 10.1 Mpps Forwarding Rate",
      "64 MB DRAM, 8K MAC Address Table",
      "VLAN, Port Aggregation, QoS Support",
      "Network Access Control (NAC)",
      "Web Browser, SNMP, CLI Management",
      "IEEE 802.1x, ACLs, Port Security",
      "1U Rack-Mountable, 3.6 kg [citation:4]",
      "Energy-Efficient Ethernet (802.3az)",
    ],
  },
  {
    id: 36,
    name: "Cisco Aironet 1602i",
    description: "Dual-band 802.11n wireless access point with integrated antennas",
    fullDescription: "The Cisco Aironet 1602i is an enterprise-class, entry-level 802.11n access point with integrated antennas, designed for small and medium business networks. Features 3x3 MIMO technology with two spatial streams and ClientLink 2.0 for improved coverage and performance [citation:3][citation:10].",
    status: "In stock",
    image: network4, // This should be your net4.png file
    specs: [
      "Dual-Band 2.4 GHz & 5 GHz Concurrent Radios",
      "3x3 MIMO with 2 Spatial Streams (300 Mbps PHY Rate)",
      "Integrated Inverted-F Antennas (4 dBi Peak Gain)",
      "10/100/1000BASE-T Ethernet Port (PoE 802.3af)",
      "256 MB DRAM, 32 MB Flash",
      "ClientLink 2.0 BeamForming Technology",
      "CleanAir Express Spectrum Intelligence",
      "WPA2, 802.1X, AES Encryption",
      "Multiple SSIDs, VLAN Tagging",
      "Controller-Based or Cloud-Managed Options [citation:3][citation:10]",
    ],
  },
  {
    id: 37,
    name: "Cisco WS-C2960-48TC-L 2960",
    description: "48-Port 10/100 switch with dual gigabit uplinks",
    fullDescription: "The Cisco Catalyst 2960-48TC-L is a proven, reliable access switch featuring 48 Fast Ethernet ports and 2 dual-purpose gigabit uplinks. Provides entry-level intelligent services with integrated security, QoS, and network management capabilities [citation:4][citation:7].",
    status: "In stock",
    image: network5, // This should be your net5.png file
    specs: [
      "48 x 10/100 Fast Ethernet Ports",
      "2 x Dual-Purpose Uplinks ",
      "6.8 Gbps Backplane, 10.1 Mpps Forwarding",
      "64 MB DRAM, 8K MAC Address Table",
      "VLAN Support (Up to 255 VLANs)",
      "IEEE 802.1x, Port Security, ACLs",
      "QoS with 4 Egress Queues",
      "Web, SNMP, CLI Management",
      "Standard 1U Rack Height",
      "AC 100-240V, 45W Power Consumption [citation:7]",
    ],
  },
  {
  id: 38,
  name: "Cisco Firewall (Next-Gen) protection ",
  description: "Enterprise next-generation firewall with advanced threat protection",
  fullDescription: "The Cisco Next-Generation Firewall provides enterprise-grade security with advanced threat protection, intrusion prevention, and application visibility. Ideal for businesses needing robust network security and VPN connectivity.",
  status: "In stock",
  image: network6, // This should be your network6.png file
  specs: [
    "Next-Generation Firewall (NGFW)",
    "Intrusion Prevention System (IPS)",
    "Application Visibility & Control",
    "SSL/TLS Decryption & Inspection",
    "Site-to-Site & Remote VPN",
    "URL Filtering & Content Security",
    "8 x Gigabit Ethernet Ports",
    "High Availability Support",
    "1U Rack-Mountable",
    "Cloud-Based Management",
  ],
},
{
  id: 39,
  name: "TP-Link AC1750 Smart WiFi Router (Archer A7)",
  description: "Dual-band gigabit wireless router with Alexa support and 1.75Gbps speed",
  fullDescription: "The TP-Link Archer A7 is a budget-friendly AC1750 dual-band router featuring 450 Mbps on 2.4GHz and 1300 Mbps on 5GHz bands. With three external antennas, QoS, and parental controls, it delivers reliable whole-home coverage up to 2,500 sq ft. Ideal for 4K streaming and everyday use.",
  status: "In stock",
  image: network7, // This should be your network7.png file
  specs: [
    "AC1750 Dual-Band Wi-Fi ",
    "(450 Mbps 2.4GHz + 1300 Mbps 5GHz)",
    "3× External High-Gain Antennas for Long Range Coverage",
    "Qualcomm CPU (750 MHz) with 128 MB RAM & 16 MB Flash",
    "4× Gigabit LAN Ports + 1× Gigabit WAN Port",
    "1× USB 2.0 Port for Media Sharing (FTP, Samba, Media Server)",
    "Works with Amazon Alexa & IFTTT for Voice Control",
    "QoS (Quality of Service) for Bandwidth Prioritization",
    "Parental Controls with URL Filtering & Time Restrictions",
    "VPN Server Support (OpenVPN, PPTP)",
    "Guest Network Access (2.4GHz & 5GHz Separate SSIDs)",
    "IPv4 & IPv6 Protocol Support",
    "SPI Firewall, Access Control, IP & MAC Binding Security",
    "TP-Link Tether App for Easy Setup & Remote Management",
    "2 Year Warranty with 24/7 Technical Support",
  ],
},
{
  id: 40,
  name: "Ubiquiti UniFi 6 AP (Access Point)",
  description: "Enterprise WiFi 6 access point with mesh technology",
  fullDescription: "The Ubiquiti UniFi 6 Access Point delivers high-performance WiFi 6 connectivity with mesh technology, 4x4 MIMO, and seamless roaming. Perfect for businesses needing reliable, scalable wireless coverage.",
  status: "In stock",
  image: network8, // This should be your network8.png file
  specs: [
    "WiFi 6 (802.11ax) Technology",
    "Up to 2.4 Gbps Aggregate Throughput",
    "4x4 MIMO on 5 GHz, 2x2 MIMO on 2.4 GHz",
    "Mesh Technology for Seamless Roaming",
    "PoE+ Powered (802.3at)",
    "OFDMA for Better Efficiency",
    "UniFi Controller Managed",
    "Multiple SSIDs with VLAN Tagging",
    "Weather-Resistant Casing",
    "Wall/Ceiling Mount Included",
  ],
},
];
//=============================================
// DISPLAY - 8 Products with 8 different images
//=============================================
export const displayData = [
  {
    id: 41,
    name: "AZTECH Digital Display",
    description: "📺 AZTECH Digital Signage 55 Interactive Display Panel – Android 11 Powered!",
    fullDescription:
      "Professional 55-inch interactive display panel powered by Android 11. Perfect for digital signage, interactive presentations, and business applications requiring touch functionality.",
    status: "In stock",
    image: display1,
    specs: [
      "55-inch Interactive Display",
      "Android 11 Operating System",
      "Full HD Resolution",
      "10-Point Multi-Touch",
      "Built-in Media Player",
      "WiFi + Ethernet Connectivity",
      "HDMI + USB Ports",
      "Content Management Software",
      "VESA Mount Compatible",
      "Remote Management Capability",
    ],
  },
  {
    id: 42,
    name: "Huawei IdeaHub B3",
    description: "IHB3-86SA – 86\" Smart Interactive Meeting Board",
    fullDescription:
      "The Huawei IdeaHub B3 (Model: IHB3-86SA) is an 86-inch smart interactive meeting board designed for seamless collaboration in modern meeting rooms and boardrooms.",
    status: "In stock",
    image: display2,
    specs: [
      "86-inch Interactive Display",
      "IHB3-86SA Model",
      "4K Ultra HD Resolution",
      "Built-in 4K Camera",
      "12-Mic Array",
      "Built-in Speakers",
      "Wireless Screen Sharing",
      "Touch Writing Technology",
      "Huawei Cloud Meeting Ready",
      "Dual-band WiFi",
    ],
  },
  {
    id: 43,
    name: "LG Digital Signage",
    description: "Professional Commercial Display for Digital Signage",
    fullDescription:
      "LG professional digital signage display delivering stunning visuals and reliability for commercial environments, retail spaces, and corporate communications.",
    status: "In stock",
    image: display3,
    specs: [
      "55-inch Display",
      "4K Resolution",
      "IPS Panel Technology",
      "webOS Smart Platform",
      "24/7 Operation",
      "700 nits Brightness",
      "Content Management Software",
      "Built-in Media Player",
      "VESA Mount Compatible",
      "Commercial Grade",
    ],
  },
  {
    id: 44,
    name: "Samsung Video Wall System",
    description: "Modular LED Display for Impactful Visual Experiences",
    fullDescription:
      "Samsung professional LED video wall system designed for creating immersive visual experiences in retail, corporate lobbies, and public spaces with seamless modular design.",
    status: "In stock",
    image: display4,
    specs: [
      "Modular LED Design",
      "Seamless Video Wall",
      "High Brightness",
      "Wide Viewing Angle",
      "24/7 Operation Capable",
      "Content Management System",
      "Ultra-Slim Cabinet Design",
      "Easy Installation",
      "Low Power Consumption",
      "MagicINFO Compatible",
    ],
  },
  {
    id: 45,
    name: "Samsung  Displays",
    description: "Samsung Interactive Displays Touch Screen Display for Collaboration and Engagement",
    fullDescription:
      "Samsung interactive display with multi-touch technology, perfect for classrooms, meeting rooms, and interactive spaces requiring engaging digital experiences.",
    status: "Available on backorder",
    image: display5,
    specs: [
      "65-inch Interactive Display",
      "4K UHD Resolution",
      "20-Point Multi-Touch",
      "Tizen OS",
      "Built-in Writing Software",
      "Screen Mirroring",
      "Wireless Connectivity",
      "HDMI + USB Ports",
      "Mobile Device Integration",
      "VESA Mount Compatible",
    ],
  },
  {
    id: 46,
    name: "LG Commercial Monitors",
    description: "UltraStretch and High-Brightness Commercial Displays",
    fullDescription:
      "LG commercial monitors designed for specialized applications including retail signage, transportation displays, and professional environments requiring reliable 24/7 operation.",
    status: "In stock",
    image: display6,
    specs: [
      "49-inch UltraStretch Display",
      "Full HD Resolution",
      "700 nits Brightness",
      "IPS Panel Technology",
      "24/7 Operation",
      "webOS Smart Platform",
      "Video Wall Capability",
      "Tile Matrix Support",
      "DisplayPort + HDMI Inputs",
      "RS232 Control",
    ],
  },
  {
    id: 47,
    name: "Conference Room Displays",
    description: "Professional Samsung Conference Room Displays  for Meeting and Board Rooms",
    fullDescription:
      "Samsung professional displays optimized for conference rooms and boardrooms, offering seamless integration with collaboration tools and stunning visual clarity.",
    status: "In stock",
    image: display7,
    specs: [
      "75-inch Display",
      "4K UHD Resolution",
      "Non-Glare Panel",
      "Tizen OS",
      "Wireless Screen Sharing",
      "MagicINFO Support",
      "Built-in Speakers",
      "Multiple Connectivity Options",
      "VESA Mount Compatible",
      "Business Ready Features",
    ],
  },
  {
    id: 48,
    name: "LG LED Video Wall System",
    description: "Premium Direct-View LED Display for Indoor Signage",
    fullDescription:
      "LG premium direct-view LED video wall system delivering exceptional brightness and color accuracy for high-impact indoor signage applications.",
    status: "In stock",
    image: display8,
    specs: [
      "Direct-View LED Technology",
      "Fine Pixel Pitch",
      "Seamless Modular Design",
      "High Brightness",
      "Wide Color Gamut",
      "24/7 Operation",
      "Content Management Ready",
      "Easy Maintenance",
      "Low Power Consumption",
      "Commercial Warranty",
    ],
  },
];
