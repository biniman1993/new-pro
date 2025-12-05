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
  }
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
    
    // Add other categories as needed
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
  };
  
  return subcategoryGroups[mainCategory] || [];
};