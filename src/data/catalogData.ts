export interface Product {
  id: string;
  name: string;
  description: string;
  count: number;
  price?: number;
  image: string;
  specs?: string[];
}

export interface Category {
  name: string;
  products: Product[];
  icon?: string;
}

export const catalogData: Record<string, Category> = {
  // ========== DESKTOP SUBCATEGORIES ==========
  "BusinessDesktop": {
    name: 'Business Desktop',
    products: [
      {
        id: 'bus-desk-1',
        name: 'Business Desktop Pro',
        description: 'Professional desktop for office and corporate use',
        count: 24,
        price: 2499,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '16GB RAM', '512GB SSD', 'Windows 11 Pro', 'Business Warranty']
      },
      {
        id: 'bus-desk-2',
        name: 'Corporate Workstation',
        description: 'High-performance business desktop with enterprise features',
        count: 18,
        price: 2999,
        image: 'https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i9', '32GB RAM', '1TB SSD', 'Dual Monitor Support', 'TPM 2.0']
      },
      {
        id: 'bus-desk-3',
        name: 'Office Desktop Standard',
        description: 'Reliable desktop for everyday office tasks',
        count: 45,
        price: 1299,
        image: 'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '16GB RAM', '256GB SSD', 'Windows 11', 'WiFi 6']
      },
      {
        id: 'bus-desk-4',
        name: 'Financial Desktop',
        description: 'Optimized for financial applications and data processing',
        count: 12,
        price: 3499,
        image: 'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '64GB RAM', '2TB SSD', 'Quad Monitor', 'Financial Software']
      }
    ]
  },

  "GamingDesktop": {
    name: 'Gaming Desktop',
    products: [
      {
        id: 'game-desk-1',
        name: 'Gaming Desktop Elite',
        description: 'High-performance system for gaming and graphics work',
        count: 15,
        price: 4299,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i9', '32GB RAM', '1TB SSD', 'RTX 4080', 'RGB Lighting']
      },
      {
        id: 'game-desk-2',
        name: 'Extreme Gaming PC',
        description: 'Ultimate gaming machine for 4K gaming',
        count: 8,
        price: 5299,
        image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 9', '64GB RAM', '2TB NVMe', 'RTX 4090', 'Liquid Cooling']
      },
      {
        id: 'game-desk-3',
        name: 'Mid-Range Gaming PC',
        description: 'Great performance for 1440p gaming',
        count: 22,
        price: 1899,
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '16GB RAM', '512GB SSD', 'RTX 4060', 'Air Cooling']
      }
    ]
  },

  "AllinOnePC": {
    name: 'All-in-One PC',
    products: [
      {
        id: 'aio-1',
        name: 'Business All-in-One',
        description: 'Sleek all-in-one for modern offices',
        count: 20,
        price: 1999,
        image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['23.8" Display', 'Intel i5', '16GB RAM', '512GB SSD', 'Webcam']
      },
      {
        id: 'aio-2',
        name: 'Creative All-in-One',
        description: 'High-resolution AIO for designers',
        count: 10,
        price: 2499,
        image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27" 4K Display', 'Intel i7', '32GB RAM', '1TB SSD', 'Touch Screen']
      }
    ]
  },

  "MiniDesktop": {
    name: 'Mini Desktop',
    products: [
      {
        id: 'mini-1',
        name: 'Mini PC Compact',
        description: 'Compact desktop solution for space-constrained environments',
        count: 18,
        price: 599,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '8GB RAM', '256GB SSD', 'Ultra Compact', 'WiFi 6']
      },
      {
        id: 'mini-2',
        name: 'Media Center Mini PC',
        description: 'Perfect for home theater and media streaming',
        count: 25,
        price: 449,
        image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 3', '8GB RAM', '256GB SSD', '4K Output', 'HDMI 2.1']
      }
    ]
  },

  "Workstation": {
    name: 'Workstation',
    products: [
      {
        id: 'work-1',
        name: 'Creative Workstation',
        description: 'Optimized for video editing, 3D rendering, and design work',
        count: 8,
        price: 3899,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 9', '64GB RAM', '2TB SSD', 'RTX 4070', 'Color Accurate']
      },
      {
        id: 'work-2',
        name: 'Engineering Workstation',
        description: 'Professional workstation for CAD and engineering',
        count: 6,
        price: 4599,
        image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel Xeon', '128GB RAM', '4TB SSD', 'RTX A5000', 'ECC Memory']
      }
    ]
  },

  // ========== LAPTOP SUBCATEGORIES ==========
  "BusinessLaptop": {
    name: 'Business Laptop',
    products: [
      {
        id: 'bus-lap-1',
        name: 'Business Laptop Pro',
        description: 'Lightweight laptop for professional business travel',
        count: 20,
        price: 1899,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '16GB RAM', '512GB SSD', '14" Display', 'Fingerprint Reader']
      },
      {
        id: 'bus-lap-2',
        name: 'Enterprise Laptop',
        description: 'Secure laptop for corporate environments',
        count: 15,
        price: 2199,
        image: 'https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '32GB RAM', '1TB SSD', '15.6"', 'Smart Card Reader']
      }
    ]
  },

  "StudentLaptop": {
    name: 'Student Laptop',
    products: [
      {
        id: 'stu-lap-1',
        name: 'Student Budget Laptop',
        description: 'Affordable laptop perfect for students and basic computing',
        count: 40,
        price: 599,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 5', '8GB RAM', '256GB SSD', '15.6"', 'Student Discount']
      },
      {
        id: 'stu-lap-2',
        name: 'Campus Laptop',
        description: 'Durable laptop for college students',
        count: 30,
        price: 799,
        image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '12GB RAM', '512GB SSD', '14"', 'Backlit Keyboard']
      }
    ]
  },

  "UltrabookThinLight": {
    name: 'Ultrabook / Thin & Light',
    products: [
      {
        id: 'ultra-1',
        name: 'Ultrabook Slim',
        description: 'Ultra-thin, lightweight laptop for mobile professionals',
        count: 25,
        price: 1499,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '8GB RAM', '512GB SSD', '13.3" Ultra Slim', '2.5lbs']
      },
      {
        id: 'ultra-2',
        name: 'Premium Ultrabook',
        description: 'High-end ultrabook with premium materials',
        count: 12,
        price: 1999,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '16GB RAM', '1TB SSD', '14" OLED', 'Aluminum Body']
      }
    ]
  },

  "GamingLaptop": {
    name: 'Gaming Laptop',
    products: [
      {
        id: 'game-lap-1',
        name: 'Gaming Laptop Beast',
        description: 'Powerhouse laptop for demanding gaming and applications',
        count: 12,
        price: 2899,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['RTX 4090', '32GB RAM', '1TB SSD', '17" 144Hz', 'RGB Keyboard']
      },
      {
        id: 'game-lap-2',
        name: 'Mid-Range Gaming Laptop',
        description: 'Great gaming performance at reasonable price',
        count: 28,
        price: 1499,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['RTX 4060', '16GB RAM', '512GB SSD', '15.6" 144Hz', 'Cooling System']
      }
    ]
  },

  "2in1ConvertibleLaptop": {
    name: '2-in-1 Convertible Laptop',
    products: [
      {
        id: 'conv-1',
        name: 'Convertible Pro',
        description: 'Premium 2-in-1 for work and creativity',
        count: 18,
        price: 1699,
        image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '16GB RAM', '512GB SSD', '13.5" Touch', 'Pen Included']
      },
      {
        id: 'conv-2',
        name: 'Budget Convertible',
        description: 'Affordable 2-in-1 for students',
        count: 35,
        price: 899,
        image: 'https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '8GB RAM', '256GB SSD', '14" Touch', '360 Hinge']
      }
    ]
  },

  // ========== MONITOR SUBCATEGORIES ==========
  "FullHDMonitor": {
    name: 'Full HD Monitor',
    products: [
      {
        id: 'fhd-1',
        name: '24" Full HD Monitor',
        description: 'Crisp 1080p display for everyday use',
        count: 50,
        price: 199,
        image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['24"', '1920x1080', '75Hz', 'IPS Panel', 'HDMI/VGA']
      },
      {
        id: 'fhd-2',
        name: '27" Full HD Monitor',
        description: 'Large screen for productivity',
        count: 30,
        price: 299,
        image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27"', '1920x1080', '60Hz', 'VA Panel', 'Built-in Speakers']
      }
    ]
  },

  "2K4KMonitor": {
    name: '2K / 4K Monitor',
    products: [
      {
        id: '4k-1',
        name: '27" 4K UHD Monitor',
        description: 'Ultra HD display for creative work',
        count: 22,
        price: 499,
        image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27"', '3840x2160', '60Hz', 'IPS Panel', '99% sRGB']
      },
      {
        id: '2k-1',
        name: '32" 2K QHD Monitor',
        description: 'High-resolution monitor for productivity',
        count: 18,
        price: 399,
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['32"', '2560x1440', '75Hz', 'VA Panel', 'FreeSync']
      }
    ]
  },

  "GamingMonitor": {
    name: 'Gaming Monitor',
    products: [
      {
        id: 'game-mon-1',
        name: 'Gaming Monitor Elite',
        description: 'High-performance system for gaming and graphics work',
        count: 15,
        price: 4299,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27"', '2560x1440', '240Hz', 'IPS Panel', '1ms Response']
      },
      {
        id: 'game-mon-2',
        name: 'Curved Gaming Monitor',
        description: 'Immersive curved display for gaming',
        count: 20,
        price: 349,
        image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27" Curved', '1920x1080', '165Hz', 'VA Panel', 'FreeSync Premium']
      }
    ]
  },

  "CurvedMonitor": {
    name: 'Curved Monitor',
    products: [
      {
        id: 'curv-1',
        name: '32" Curved Monitor',
        description: 'Immersive curved display for work and entertainment',
        count: 25,
        price: 349,
        image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['32" Curved', '2560x1440', '144Hz', 'VA Panel', '1500R Curvature']
      }
    ]
  },

  "ProfessionalColorAccurateMonitor": {
    name: 'Professional / Color-Accurate Monitor',
    products: [
      {
        id: 'pro-mon-1',
        name: 'Creative Monitor',
        description: 'Optimized for video editing, 3D rendering, and design work',
        count: 8,
        price: 899,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27"', '3840x2160', '60Hz', 'IPS Panel', '100% Adobe RGB']
      },
      {
        id: 'pro-mon-2',
        name: 'Photo Editing Monitor',
        description: 'Color accurate monitor for photographers',
        count: 12,
        price: 699,
        image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['24"', '2560x1440', '75Hz', 'IPS Panel', 'Calibration Ready']
      }
    ]
  },

  // ========== NETWORKING SUBCATEGORIES ==========
  "HomeNetworking": {
    name: 'Home Networking',
    products: [
      {
        id: 'home-net-1',
        name: 'WiFi 6 Router',
        description: 'High-speed WiFi 6 router for seamless connectivity',
        count: 22,
        price: 299,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['WiFi 6E', 'Tri-Band', '3.6 Gbps', 'Mesh Ready', '4 LAN Ports']
      },
      {
        id: 'home-net-2',
        name: 'Mesh WiFi System',
        description: 'Whole home coverage with seamless roaming',
        count: 15,
        price: 399,
        image: 'https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['3-Pack', 'WiFi 6', 'Coverage 6000 sq ft', 'Easy Setup', 'Parental Controls']
      }
    ]
  },

  "CommercialNetworking": {
    name: 'Commercial Networking',
    products: [
      {
        id: 'com-net-1',
        name: 'Business Switch 48-Port',
        description: 'Managed network switch for enterprise environments',
        count: 5,
        price: 1299,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['48 Gigabit', 'Layer 3', 'PoE Support', 'VLAN', 'Rack Mount']
      },
      {
        id: 'com-net-2',
        name: 'Enterprise Router',
        description: 'High-performance router for business networks',
        count: 8,
        price: 899,
        image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Dual WAN', 'VPN Support', 'Firewall', 'QoS', '19" Rackmount']
      }
    ]
  },

  "NetworkAccessories": {
    name: 'Network Accessories',
    products: [
      {
        id: 'net-acc-1',
        name: 'USB Network Adapter',
        description: 'Fast USB network adapter for laptops and desktops',
        count: 35,
        price: 49,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Gigabit Ethernet', 'USB 3.0', 'Plug & Play', 'Compact', 'Windows/Mac']
      },
      {
        id: 'net-acc-2',
        name: 'Network Cable Set',
        description: 'Complete set of network cables',
        count: 60,
        price: 39,
        image: 'https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Cat6 Ethernet', '6 Cables', '3ft-10ft Lengths', 'Snagless Connectors']
      }
    ]
  },

  "RoutersSwitches": {
    name: 'Routers & Switches',
    products: [
      {
        id: 'router-1',
        name: 'PoE Network Switch',
        description: 'Compact PoE switch for powering IP cameras and devices',
        count: 14,
        price: 399,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['8 PoE Ports', '30W Per Port', 'Managed', 'Compact', 'Fanless']
      },
      {
        id: 'router-2',
        name: 'Gaming Router',
        description: 'Optimized for low latency gaming',
        count: 18,
        price: 249,
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['WiFi 6', 'Gaming Mode', 'QoS', '4 Antennas', 'Mobile App']
      }
    ]
  },

  "CablesConnectors": {
    name: 'Cables & Connectors',
    products: [
      {
        id: 'cable-1',
        name: 'Fiber Optic Cable Kit',
        description: 'High-speed fiber optic cable kit for networking',
        count: 50,
        price: 89,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['100m Length', 'Single Mode', 'LC-LC Connectors', 'High Durability']
      },
      {
        id: 'cable-2',
        name: 'HDMI Cable Premium',
        description: 'High-speed HDMI cable for 4K/8K',
        count: 45,
        price: 29,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['8K Support', '48Gbps', '6ft Length', 'Gold Plated', 'Braided']
      }
    ]
  },
// ========== ACCESSORIES SUBCATEGORIES ==========
"KeyboardMouse": {
  name: 'Keyboard & Mouse',
  products: [
    {
      id: 'keyboard-1',
      name: 'Mechanical Gaming Keyboard',
      description: 'RGB mechanical keyboard with customizable keys',
      count: 25,
      price: 129,
      image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Mechanical Switches', 'RGB Backlit', 'USB-C', 'Macro Keys']
    },
    {
      id: 'keyboard-2',
      name: 'Wireless Keyboard & Mouse Combo',
      description: 'Silent wireless keyboard and mouse set for office',
      count: 40,
      price: 79,
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Wireless 2.4GHz', 'Long Battery Life', 'Silent Keys', 'Plug & Play']
    }
  ]
},

"Webcams": {
  name: 'Webcams',
  products: [
    {
      id: 'webcam-1',
      name: '4K Webcam Pro',
      description: 'Ultra HD webcam for professional video calls',
      count: 18,
      price: 149,
      image: 'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4K Resolution', 'Auto Focus', 'Built-in Mic', 'Privacy Cover']
    },
    {
      id: 'webcam-2',
      name: 'Streaming Webcam',
      description: 'High-quality webcam for streaming and content creation',
      count: 22,
      price: 199,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['1080p 60fps', 'Wide Angle', 'Low Light Correction', 'Tripod Mount']
    }
  ]
},

"Headphones": {
  name: 'Headphones',
  products: [
    {
      id: 'headphone-1',
      name: 'Wireless Noise Cancelling Headphones',
      description: 'Premium over-ear headphones with active noise cancellation',
      count: 15,
      price: 299,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Active Noise Cancelling', '30hr Battery', 'Bluetooth 5.0', 'Foldable']
    },
    {
      id: 'headphone-2',
      name: 'Gaming Headset Pro',
      description: 'Surround sound gaming headset with microphone',
      count: 30,
      price: 129,
      image: 'https://images.pexels.com/photos/3945665/pexels-photo-3945665.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['7.1 Surround', 'Noise-cancelling Mic', 'RGB Lights', 'Memory Foam']
    }
  ]
},

"USBHubs": {
  name: 'USB Hubs',
  products: [
    {
      id: 'hub-1',
      name: 'USB-C Hub 7-in-1',
      description: 'Multi-port USB-C hub for laptops and tablets',
      count: 35,
      price: 49,
      image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['HDMI 4K', 'USB 3.0', 'SD/TF Card', 'Ethernet Port']
    },
    {
      id: 'hub-2',
      name: 'Powered USB 3.0 Hub',
      description: '10-port powered USB hub for multiple devices',
      count: 20,
      price: 69,
      image: 'https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['10 Ports', 'Individual Switches', '12V Power Adapter', 'Data Transfer']
    }
  ]
},

"LaptopStands": {
  name: 'Laptop Stands',
  products: [
    {
      id: 'stand-1',
      name: 'Adjustable Laptop Stand',
      description: 'Ergonomic aluminum laptop stand with adjustable height',
      count: 28,
      price: 59,
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Aluminum Alloy', '8 Height Adjustments', 'Portable', 'Heat Dissipation']
    },
    {
      id: 'stand-2',
      name: 'Cooling Laptop Stand',
      description: 'Laptop stand with built-in cooling fans',
      count: 18,
      price: 39,
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Dual Cooling Fans', '3 Speed Settings', 'Ergonomic Angle', 'USB Powered']
    }
  ]
},
  // ========== PROJECTOR SUBCATEGORIES ==========
"BusinessProjector": {
  name: 'Business Projector',
  products: [
    {
      id: 'biz-proj-1',
      name: 'Conference Room Projector',
      description: 'High-brightness projector for business presentations',
      count: 12,
      price: 1299,
      image: 'https://images.pexels.com/photos/7677248/pexels-photo-7677248.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4000 Lumens', 'WXGA Resolution', 'HDMI/VGA Inputs', 'Ceiling Mountable']
    },
    {
      id: 'biz-proj-2',
      name: 'Meeting Room Laser Projector',
      description: 'Laser projector with long lifespan for meeting rooms',
      count: 8,
      price: 1899,
      image: 'https://images.pexels.com/photos/7677249/pexels-photo-7677249.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Laser Light Source', '20,000 Hours', 'Wireless Connectivity', 'Built-in Speaker']
    }
  ]
},

"HomeCinemaProjector": {
  name: 'Home Cinema Projector',
  products: [
    {
      id: 'home-proj-1',
      name: '4K Home Theater Projector',
      description: 'Ultra HD projector for immersive home cinema experience',
      count: 15,
      price: 2499,
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4K UHD', 'HDR10 Support', '2400 Lumens', 'Cinema Color Mode']
    },
    {
      id: 'home-proj-2',
      name: 'Full HD Smart Projector',
      description: 'Smart projector with Android TV and streaming apps',
      count: 22,
      price: 899,
      image: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['1080p Full HD', 'Android TV', 'Built-in Apps', 'Auto Focus']
    }
  ]
},

"PortableProjector": {
  name: 'Portable Projector',
  products: [
    {
      id: 'portable-proj-1',
      name: 'Pocket-Sized Portable Projector',
      description: 'Ultra-compact projector for on-the-go presentations',
      count: 30,
      price: 299,
      image: 'https://images.pexels.com/photos/5077055/pexels-photo-5077055.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Pocket Size', 'Built-in Battery', 'HDMI & USB-C', 'Wireless Screen Mirroring']
    },
    {
      id: 'portable-proj-2',
      name: 'Outdoor Portable Projector',
      description: 'Water-resistant projector for outdoor movie nights',
      count: 18,
      price: 499,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['IPX4 Water Resistant', '10000mAh Battery', 'Bluetooth Speaker', 'Carrying Case Included']
    }
  ]
},

"ShortThrowProjector": {
  name: 'Short-Throw Projector',
  products: [
    {
      id: 'short-proj-1',
      name: 'Ultra Short Throw Laser Projector',
      description: 'Project large images from very close distance to wall',
      count: 10,
      price: 2999,
      image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Ultra Short Throw', 'Laser Light Source', '4K Resolution', 'Wall Mount Included']
    },
    {
      id: 'short-proj-2',
      name: 'Interactive Short Throw Projector',
      description: 'Short throw projector with interactive touch capabilities',
      count: 6,
      price: 3499,
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Interactive Touch', '0.25 Throw Ratio', 'Built-in Whiteboard', 'Educational Software']
    }
  ]
},

"ProjectorAccessories": {
  name: 'Projector Accessories',
  products: [
    {
      id: 'acc-proj-1',
      name: 'Universal Projector Ceiling Mount',
      description: 'Adjustable ceiling mount for all projector types',
      count: 45,
      price: 89,
      image: 'https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Universal Fit', 'Adjustable Arms', 'Cable Management', 'Easy Installation']
    },
    {
      id: 'acc-proj-2',
      name: 'Projector Screen 100-inch',
      description: 'Motorized projector screen with remote control',
      count: 25,
      price: 199,
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['100-inch Diagonal', 'Motorized Operation', 'Remote Control', 'Wall/Ceiling Mount']
    },
    {
      id: 'acc-proj-3',
      name: 'HDMI Extension Cable Set',
      description: 'High-speed HDMI cables for projector setup',
      count: 60,
      price: 39,
      image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4K 60Hz Support', '15ft Length', 'Gold Plated Connectors', 'Braided Cable']
    }
  ]
},
// ========== PRINTER SUBCATEGORIES ==========
"InkjetPrinter": {
  name: 'Inkjet Printer',
  products: [
    {
      id: 'inkjet-1',
      name: 'Color Inkjet Printer Pro',
      description: 'High-quality color printing for home and office',
      count: 25,
      price: 299,
      image: 'https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Color Printing', 'WiFi Connect', 'Mobile Print', 'Compact Design']
    },
    {
      id: 'inkjet-2',
      name: 'Photo Inkjet Printer',
      description: 'Professional photo printing with 6-color system',
      count: 15,
      price: 499,
      image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['6-Color System', 'Photo Quality', 'Borderless Printing', 'CD/DVD Printing']
    }
  ]
},

"LaserPrinter": {
  name: 'Laser Printer',
  products: [
    {
      id: 'laser-1',
      name: 'Monochrome Laser Printer',
      description: 'Fast black & white printing for office use',
      count: 30,
      price: 399,
      image: 'https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['30 PPM', '1200x1200 dpi', '250-Sheet Tray', 'Ethernet']
    },
    {
      id: 'laser-2',
      name: 'Color Laser Printer',
      description: 'Professional color laser printing',
      count: 18,
      price: 699,
      image: 'https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Color Laser', '28 PPM', 'Auto Duplex', 'WiFi Direct']
    }
  ]
},

"AllinOnePrinter": {
  name: 'All-in-One Printer',
  products: [
    {
      id: 'aio-1',
      name: 'Multifunction Printer',
      description: 'Print, scan, copy, and fax all-in-one',
      count: 35,
      price: 349,
      image: 'https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Print/Scan/Copy/Fax', 'ADF', 'Wireless', 'Mobile App']
    },
    {
      id: 'aio-2',
      name: 'EcoTank All-in-One',
      description: 'Ink tank system with super high yield',
      count: 22,
      price: 599,
      image: 'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['EcoTank System', '7500 pages', 'Auto Document Feeder', 'Cloud Print']
    }
  ]
},

"Scanners": {
  name: 'Scanners',
  products: [
    {
      id: 'scan-1',
      name: 'Document Scanner Pro',
      description: 'High-speed document scanner for office',
      count: 20,
      price: 499,
      image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['40 PPM', 'Duplex Scanning', 'ADF 50 Sheets', 'USB 3.0']
    },
    {
      id: 'scan-2',
      name: 'Portable Scanner',
      description: 'Compact scanner for mobile professionals',
      count: 40,
      price: 199,
      image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Portable', 'Battery Powered', 'WiFi', 'SD Card Slot']
    }
  ]
},

"PrinterAccessories": {
  name: 'Printer Accessories',
  products: [
    {
      id: 'acc-print-1',
      name: 'Printer Paper Bundle',
      description: 'High-quality A4 paper for printing',
      count: 100,
      price: 29,
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['500 Sheets', 'A4 Size', '80 GSM', 'Bright White']
    },
    {
      id: 'acc-print-2',
      name: 'Ink Cartridge Set',
      description: 'Original ink cartridges for printers',
      count: 60,
      price: 49,
      image: 'https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['CMYK Set', 'High Yield', 'Original', 'Easy Install']
    }
  ]
},

"LabelPrinter": {
  name: 'Label Printer',
  products: [
    {
      id: 'label-1',
      name: 'Thermal Label Printer',
      description: 'High-speed label printing for retail',
      count: 25,
      price: 299,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Thermal Direct', '4x6 Labels', '150mm/s', 'USB/Ethernet']
    }
  ]
},

"BarcodeScanner": {
  name: 'Barcode Scanner',
  products: [
    {
      id: 'barcode-1',
      name: 'Wireless Barcode Scanner',
      description: '2D barcode scanner for inventory',
      count: 35,
      price: 199,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['2D Scanning', 'Wireless', '5000mAh Battery', 'USB Charging']
    }
  ]
},

"PrinterPaper": {
  name: 'Printer Paper',
  products: [
    {
      id: 'paper-1',
      name: 'Premium Photo Paper',
      description: 'Glossy photo paper for high-quality prints',
      count: 80,
      price: 19,
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['50 Sheets', 'Glossy Finish', 'A4 Size', '260 GSM']
    }
  ]
},
// ========== DIGITAL DISPLAY SUBCATEGORIES ==========
"LEDDigitalDisplay": {
  name: 'LED Digital Display',
  products: [
    {
      id: 'led-1',
      name: 'P3 Indoor LED Display',
      description: 'High-resolution indoor LED screen for retail',
      count: 12,
      price: 4999,
      image: 'https://images.pexels.com/photos/5325617/pexels-photo-5325617.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['P3 Pixel Pitch', 'Indoor Use', '1920x1080', 'Wall Mount']
    },
    {
      id: 'led-2',
      name: 'Outdoor LED Billboard',
      description: 'Weatherproof LED display for outdoor advertising',
      count: 8,
      price: 12999,
      image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Weatherproof IP65', '5000 nits', '10x5 Meters', 'Remote Management']
    }
  ]
},

"VideoWallPanels": {
  name: 'Video Wall Panels',
  products: [
    {
      id: 'video-1',
      name: '4K Video Wall Display',
      description: 'Seamless 4K video wall for control rooms',
      count: 6,
      price: 8999,
      image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4x4 Configuration', '4K Resolution', 'Bezel-less', 'Video Processor']
    },
    {
      id: 'video-2',
      name: 'LCD Video Wall System',
      description: 'Professional video wall system for command centers',
      count: 4,
      price: 15999,
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['55" Panels', '2x2 Matrix', 'HDMI/DVI Inputs', 'Rack Mount']
    }
  ]
},

"AdvertisingDisplays": {
  name: 'Advertising Displays',
  products: [
    {
      id: 'ad-1',
      name: 'Digital Advertising Screen',
      description: 'Standalone digital advertising display',
      count: 20,
      price: 2999,
      image: 'https://images.pexels.com/photos/395132/pexels-photo-395132.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['55" Display', 'Media Player', 'Scheduling Software', 'Stand Included']
    },
    {
      id: 'ad-2',
      name: 'Menu Board Display',
      description: 'Digital menu board for restaurants',
      count: 25,
      price: 1499,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['32" Touch Screen', 'Menu Software', 'Cloud Updates', 'Easy CMS']
    }
  ]
},

"IndoorDisplay": {
  name: 'Indoor Display',
  products: [
    {
      id: 'indoor-1',
      name: 'Corporate Lobby Display',
      description: 'Professional display for corporate lobbies',
      count: 18,
      price: 3499,
      image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['65" 4K', 'Portrait/Landscape', 'Corporate CMS', 'Remote Management']
    },
    {
      id: 'indoor-2',
      name: 'Retail Shelf Display',
      description: 'Compact display for retail shelf edges',
      count: 35,
      price: 799,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['10.1" Screen', 'Battery Powered', 'WiFi', 'Content Management']
    }
  ]
},

"OutdoorDisplay": {
  name: 'Outdoor Display',
  products: [
    {
      id: 'outdoor-1',
      name: 'Weatherproof Outdoor Display',
      description: 'Sunlight readable outdoor display',
      count: 10,
      price: 5999,
      image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['IP66 Rating', '2500 nits', 'Temperature Controlled', 'Vandal Proof']
    },
    {
      id: 'outdoor-2',
      name: 'Bus Stop Display',
      description: 'Public transportation information display',
      count: 15,
      price: 4499,
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Weatherproof', 'Real-time Updates', 'Solar Option', 'Municipal Grade']
    }
  ]
},

"InteractiveFlatPanel": {
  name: 'Interactive Flat Panel',
  products: [
    {
      id: 'ifp-1',
      name: '86" Interactive Flat Panel',
      description: 'Large interactive display for classrooms and boardrooms',
      count: 8,
      price: 6999,
      image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['86" 4K', '20-point Touch', 'Android/Windows', 'Built-in Apps']
    },
    {
      id: 'ifp-2',
      name: 'Interactive Meeting Display',
      description: 'Collaborative display for team meetings',
      count: 12,
      price: 4999,
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['65" Touch', 'Wireless Sharing', 'Whiteboard Software', 'Video Conferencing']
    }
  ]
},

"InteractiveWhiteBoard": {
  name: 'Interactive White Board',
  products: [
    {
      id: 'iwb-1',
      name: 'Smart Interactive Whiteboard',
      description: 'Interactive whiteboard for education',
      count: 22,
      price: 2999,
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['78" Surface', 'Electromagnetic Pen', 'Educational Software', 'Wall Mount']
    }
  ]
},

"VideoWall": {
  name: 'Video Wall',
  products: [
    {
      id: 'vw-1',
      name: 'LED Video Wall Solution',
      description: 'Complete LED video wall package',
      count: 5,
      price: 24999,
      image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['3x3 Configuration', 'P2.5 LED', 'Video Processor', 'Installation Service']
    }
  ]
},

"Signage": {
  name: 'Signage',
  products: [
    {
      id: 'signage-1',
      name: 'Digital Signage Player',
      description: 'Media player for digital signage networks',
      count: 40,
      price: 299,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4K Output', 'Scheduling', 'Remote Management', 'Multiple Zones']
    },
    {
      id: 'signage-2',
      name: 'Digital Signage Software',
      description: 'Cloud-based signage management software',
      count: 50,
      price: 99,
      image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Cloud CMS', 'Unlimited Displays', 'Templates', 'Analytics']
    }
  ]
},

"Kiosk": {
  name: 'Kiosk',
  products: [
    {
      id: 'kiosk-1',
      name: 'Interactive Information Kiosk',
      description: 'Touch screen kiosk for public information',
      count: 15,
      price: 3999,
      image: 'https://images.pexels.com/photos/3945665/pexels-photo-3945665.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['32" Touch', 'Weatherproof', 'Standing Height', 'Custom Software']
    },
    {
      id: 'kiosk-2',
      name: 'Self-Service Kiosk',
      description: 'Retail self-checkout kiosk',
      count: 20,
      price: 5499,
      image: 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Payment Ready', 'Barcode Scanner', 'Receipt Printer', 'Inventory Sync']
    }
  ]
},
// ========== SERVER SUBCATEGORIES ==========
"ApplicationServers": {
  name: 'Application Servers',
  products: [
    {
      id: 'app-server-1',
      name: 'Enterprise Application Server',
      description: 'Rackmount server for business applications',
      count: 8,
      price: 8999,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['2x Intel Xeon', '128GB RAM', '8x HDD Bays', 'Redundant PSU']
    },
    {
      id: 'app-server-2',
      name: 'Web Hosting Server',
      description: 'Optimized server for web hosting',
      count: 12,
      price: 5999,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['AMD EPYC', '64GB RAM', 'SSD Storage', '1U Rackmount']
    }
  ]
},

"GPUServers": {
  name: 'GPU Servers',
  products: [
    {
      id: 'gpu-server-1',
      name: 'AI/ML GPU Server',
      description: 'High-performance server with multiple GPUs for AI',
      count: 5,
      price: 24999,
      image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4x RTX A6000', '256GB RAM', 'Dual Xeon', 'Liquid Cooling']
    },
    {
      id: 'gpu-server-2',
      name: 'Rendering Server',
      description: 'GPU server for 3D rendering and VFX',
      count: 6,
      price: 18999,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['8x RTX 4090', '512GB RAM', 'Threadripper Pro', '4U Chassis']
    }
  ]
},

"StorageServers": {
  name: 'Storage Servers',
  products: [
    {
      id: 'storage-server-1',
      name: 'NAS Storage Server',
      description: 'Network-attached storage for business',
      count: 15,
      price: 4999,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['12 Bay', '128TB Capacity', '10GbE', 'RAID Support']
    },
    {
      id: 'storage-server-2',
      name: 'SAN Storage Array',
      description: 'Enterprise storage area network',
      count: 4,
      price: 34999,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['24 Bay', '384TB Raw', 'Fibre Channel', 'Dual Controllers']
    }
  ]
},

"BladeServers": {
  name: 'Blade Servers',
  products: [
    {
      id: 'blade-1',
      name: 'Blade Server System',
      description: 'Complete blade server chassis with modules',
      count: 3,
      price: 29999,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['10 Blade Slots', 'Shared Power', 'Modular Design', 'Management Module']
    },
    {
      id: 'blade-2',
      name: 'Blade Server Module',
      description: 'Individual blade server for chassis',
      count: 10,
      price: 3999,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Dual Xeon', '64GB RAM', '2x SSD', 'Hot-swappable']
    }
  ]
},

"NetworkAttachedStorageNAS": {
  name: 'Network Attached Storage (NAS)',
  products: [
    {
      id: 'nas-1',
      name: '4-Bay NAS System',
      description: 'Small business NAS with 4 drive bays',
      count: 25,
      price: 899,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4 Bays', '64TB Max', 'Dual LAN', 'RAID 0/1/5/6/10']
    },
    {
      id: 'nas-2',
      name: 'Enterprise NAS',
      description: 'High-performance NAS for enterprise',
      count: 8,
      price: 4999,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['12 Bays', '192TB', '10GbE x2', 'SSD Cache Support']
    }
  ]
},

"IPSANStorage": {
  name: 'IP SAN Storage',
  products: [
    {
      id: 'ipsan-1',
      name: 'IP SAN Storage System',
      description: 'iSCSI SAN storage for virtualization',
      count: 6,
      price: 12999,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['24 Bays', 'iSCSI Target', 'Dual Controllers', 'Snapshot Support']
    }
  ]
},

"DirectAttachedStorageDAS": {
  name: 'Direct Attached Storage (DAS)',
  products: [
    {
      id: 'das-1',
      name: 'Thunderbolt DAS',
      description: 'High-speed direct attached storage',
      count: 18,
      price: 1299,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4 Bays', 'Thunderbolt 3', 'Hardware RAID', '40Gbps']
    },
    {
      id: 'das-2',
      name: 'USB-C DAS Enclosure',
      description: 'External storage enclosure',
      count: 30,
      price: 299,
      image: 'https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['2 Bay', 'USB 3.2 Gen 2', 'Tool-less Design', '10Gbps']
    }
  ]
},

"ServerAccessories": {
  name: 'Server Accessories',
  products: [
    {
      id: 'server-acc-1',
      name: 'Server Rails Kit',
      description: 'Rackmount rails for servers',
      count: 50,
      price: 199,
      image: 'https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Universal Fit', 'Tool-less', 'Adjustable Depth', 'Quick Release']
    },
    {
      id: 'server-acc-2',
      name: 'Server PDU',
      description: 'Power distribution unit for racks',
      count: 25,
      price: 299,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['24 Ports', 'Metered', 'Remote Management', '19" Rackmount']
    }
  ]
},
};

// Helper functions
export const getAllCategories = () => Object.keys(catalogData);
export const getCategoryProducts = (category: string) => catalogData[category]?.products || [];

// Function to get main category from subcategory
export const getMainCategory = (subcategory: string): string => {
  const subcategoryMap: Record<string, string> = {
    // Desktop subcategories
    "BusinessDesktop": "Desktop",
    "GamingDesktop": "Desktop",
    "AllinOnePC": "Desktop",
    "MiniDesktop": "Desktop",
    "Workstation": "Desktop",
    
    // Laptop subcategories
    "BusinessLaptop": "Laptop",
    "StudentLaptop": "Laptop",
    "UltrabookThinLight": "Laptop",
    "GamingLaptop": "Laptop",
    "2in1ConvertibleLaptop": "Laptop",
    
    // Monitor subcategories
    "FullHDMonitor": "Monitor",
    "2K4KMonitor": "Monitor",
    "GamingMonitor": "Monitor",
    "CurvedMonitor": "Monitor",
    "ProfessionalColorAccurateMonitor": "Monitor",
    
    // Networking subcategories
    "HomeNetworking": "Networking",
    "CommercialNetworking": "Networking",
    "NetworkAccessories": "Networking",
    "RoutersSwitches": "Networking",
    "CablesConnectors": "Networking",
    
     // Accessories subcategories
    
    "KeyboardMouse": "Accessories",
    "Webcams": "Accessories",
    "Headphones": "Accessories",
    "USBHubs": "Accessories",
    "LaptopStands": "Accessories",

      // Projector subcategories
    "BusinessProjector": "Projector",
    "HomeCinemaProjector": "Projector",
    "PortableProjector": "Projector",
    "ShortThrowProjector": "Projector",
    "ProjectorAccessories": "Projector",

     // Printer subcategories
    "InkjetPrinter": "Printer",
    "LaserPrinter": "Printer",
    "AllinOnePrinter": "Printer",
    "Scanners": "Printer",
    "PrinterAccessories": "Printer",
    "LabelPrinter": "Printer",
    "BarcodeScanner": "Printer",
    "PrinterPaper": "Printer",
      // Digital Display subcategories
    "LEDDigitalDisplay": "DigitalDisplay",
    "VideoWallPanels": "DigitalDisplay",
    "AdvertisingDisplays": "DigitalDisplay",
    "IndoorDisplay": "DigitalDisplay",
    "OutdoorDisplay": "DigitalDisplay",
    "InteractiveFlatPanel": "DigitalDisplay",
    "InteractiveWhiteBoard": "DigitalDisplay",
    "VideoWall": "DigitalDisplay",
    "Signage": "DigitalDisplay",
    "Kiosk": "DigitalDisplay",
      // Server subcategories
    "ApplicationServers": "Server",
    "GPUServers": "Server",
    "StorageServers": "Server",
    "BladeServers": "Server",
    "NetworkAttachedStorageNAS": "Server",
    "IPSANStorage": "Server",
    "DirectAttachedStorageDAS": "Server",
    "ServerAccessories": "Server",
  };
  
  return subcategoryMap[subcategory] || subcategory;
};

// Function to get all subcategories for a main category
export const getSubcategories = (mainCategory: string): string[] => {
  const subcategoryGroups: Record<string, string[]> = {
    "Desktop": ["BusinessDesktop", "GamingDesktop", "AllinOnePC", "MiniDesktop", "Workstation"],
    "Laptop": ["BusinessLaptop", "StudentLaptop", "UltrabookThinLight", "GamingLaptop", "2in1ConvertibleLaptop"],
    "Monitor": ["FullHDMonitor", "2K4KMonitor", "GamingMonitor", "CurvedMonitor", "ProfessionalColorAccurateMonitor"],
    "Networking": ["HomeNetworking", "CommercialNetworking", "NetworkAccessories", "RoutersSwitches", "CablesConnectors"],
    "Accessories": ["KeyboardMouse", "Webcams", "Headphones", "USBHubs", "LaptopStands"],
      "Projector": ["BusinessProjector", "HomeCinemaProjector", "PortableProjector", "ShortThrowProjector", "ProjectorAccessories"], 
        "Printer": ["InkjetPrinter", "LaserPrinter", "AllinOnePrinter",  "All-in-One Printer","Scanners",
          "Printer Accessories","Document Printer",
          "Large Format Printer","ID Card Printer", "POS Printer","Label Printer",
    "Photocopier",
    "Toner",
    "Ink Tank Printer",
    "Ink Bottle",
    "Barcode Scanner",
    "Ribbon",
    "Cartridge",
    "Printer Drum",
    "Printer Paper"],
      "DigitalDisplay": ["LEDDigitalDisplay", "VideoWallPanels", "AdvertisingDisplays", "IndoorDisplay",
         "OutdoorDisplay", "InteractiveFlatPanel", "InteractiveWhiteBoard", "VideoWall", "Signage", "Kiosk"], 
          "Server": ["ApplicationServers", "GPUServers", "StorageServers", "BladeServers", "NetworkAttachedStorageNAS", 
            "IPSANStorage", "DirectAttachedStorageDAS", "ServerAccessories"],// ADD THI
  };
  
  return subcategoryGroups[mainCategory] || [];
};