
import monitor1 from "../assets/monitor/mon2.png";
import monitor2 from "../assets/monitor/mon4.png";
import monitor3 from "../assets/monitor/mon5.jpg";
import monitor4 from "../assets/monitor/mon5.png";
import monitor5 from "../assets/monitor/mon6.png";
import monitor6 from "../assets/monitor/mon7.png";
import monitor7 from "../assets/monitor/mon8.png";
import monitor8 from "../assets/monitor/mon9.png";


import network1 from "../assets/network/network1.png";
import network2 from "../assets/network/network2.png";
import network3 from "../assets/network/network3.png";
import network4 from "../assets/network/network4.png";
import network5 from "../assets/network/network5.png";
import network6 from "../assets/network/network6.png";
import network7 from "../assets/network/network7.png";
import network8 from "../assets/network/network8.png";
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
      name: 'Dell OptiPlex 7020 Tower Desktop',
      description: 'Modern business tower desktop designed for office productivity and enterprise performance.',
      count: 20,
      price: 1099,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i5-14500',
        '16GB DDR5 RAM',
        '512GB NVMe SSD',
        'Intel UHD Graphics',
        'Windows 11 Pro',
        '3 Year Warranty'
      ]
    },
    {
      id: 'bus-desk-2',
      name: 'Dell OptiPlex 7010 Tower Desktop',
      description: 'Reliable enterprise desktop tower ideal for everyday office work and multitasking.',
      count: 18,
      price: 899,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i7-12700',
        '16GB DDR4 RAM',
        '512GB SSD',
        'Intel UHD 770 Graphics',
        'Windows 11 Pro',
        '1 Year Warranty'
      ]
    },
    {
      id: 'bus-desk-3',
      name: 'Dell OptiPlex 7000 Tower Desktop',
      description: 'Powerful business desktop built for modern office workloads and high productivity.',
      count: 16,
      price: 1199,
      image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i7-13700',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'Intel UHD 770 Graphics',
        'Windows 11 Pro',
        'WiFi 6E'
      ]
    },
    {
      id: 'bus-desk-4',
      name: 'Dell OptiPlex 5000 Tower Desktop',
      description: 'Efficient business tower PC designed for daily office productivity and reliability.',
      count: 25,
      price: 999,
      image: 'https://images.unsplash.com/photo-1601737487795-dab272f52420?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i5-12500',
        '16GB DDR4 RAM',
        '512GB SSD',
        'Intel UHD 770 Graphics',
        'Windows 11 Pro',
        'Dell ProSupport'
      ]
    },
    {
      id: 'bus-desk-5',
      name: 'Dell Precision 3660 Tower Workstation',
      description: 'Professional workstation tower built for engineering, design, and heavy workloads.',
      count: 10,
      price: 1899,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i9-13900',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'NVIDIA RTX A2000',
        'Windows 11 Pro Workstation',
        'ISV Certified'
      ]
    },
    {
      id: 'bus-desk-6',
      name: 'Dell XPS 8950 Tower Desktop',
      description: 'High-performance premium desktop tower designed for creators and professionals.',
      count: 14,
      price: 1599,
      image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3f2?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i7-12700',
        '32GB DDR5 RAM',
        '1TB SSD',
        'NVIDIA RTX 3060',
        'Windows 11 Home',
        'WiFi 6 + Bluetooth'
      ]
    },
    {
      id: 'bus-desk-7',
      name: 'HP Elite Tower 800 G9 Desktop',
      description: 'Enterprise-class HP tower desktop designed for modern business productivity.',
      count: 15,
      price: 1149,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i5-14500',
        '16GB DDR5 RAM',
        '512GB SSD',
        'Intel UHD 770 Graphics',
        'Windows 11 Pro',
        'HP Security Suite'
      ]
    },
    {
      id: 'bus-desk-8',
      name: 'HP ProDesk 400 G9 Tower',
      description: 'Affordable business desktop tower for small companies and office productivity.',
      count: 22,
      price: 879,
      image: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i5-13500',
        '16GB RAM',
        '512GB SSD',
        'Intel UHD Graphics',
        'Windows 11 Pro',
        'WiFi + Bluetooth'
      ]
    },
    {
      id: 'bus-desk-9',
      name: 'HP EliteDesk 800 G6 Tower',
      description: 'Reliable business tower desktop widely used in offices and organizations.',
      count: 17,
      price: 799,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i7-10700',
        '16GB RAM',
        '512GB SSD',
        'Intel UHD 630',
        'Windows 10/11 Pro',
        'Business Security'
      ]
    },
    {
      id: 'bus-desk-10',
      name: 'Lenovo ThinkCentre M70t Gen 3 Tower',
      description: 'Reliable Lenovo tower desktop built for office productivity and business use.',
      count: 19,
      price: 899,
      image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3f2?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i5-12400',
        '16GB DDR4 RAM',
        '512GB NVMe SSD',
        'Intel UHD 730',
        'Windows 11 Pro',
        'TPM 2.0 Security'
      ]
    },
    {
      id: 'bus-desk-11',
      name: 'Lenovo ThinkCentre M90t Gen 3 Tower',
      description: 'High-performance business desktop designed for demanding office workloads.',
      count: 12,
      price: 1199,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i7-12700',
        '32GB RAM',
        '1TB SSD',
        'Intel UHD 770',
        'Windows 11 Pro',
        'ThinkShield Security'
      ]
    },
    {
      id: 'bus-desk-12',
      name: 'Lenovo ThinkCentre Neo 50t Tower',
      description: 'Affordable modern tower desktop suitable for small businesses and offices.',
      count: 21,
      price: 829,
      image: 'https://images.unsplash.com/photo-1601737487795-dab272f52420?auto=format&fit=crop&w=400&q=80',
      specs: [
        'Intel Core i5-13400',
        '16GB RAM',
        '512GB SSD',
        'Intel UHD Graphics',
        'Windows 11 Pro',
        'WiFi 6'
      ]
    }
  ]
},
"GamingDesktop": {
  name: 'Gaming Desktop',
  products: [
    {
      id: 'game-desk-1',
      name: 'ASUS ROG Strix G16 Gaming Desktop',
      description: 'Powerful gaming desktop built for high FPS performance and modern AAA games.',
      count: 10,
      price: 2599,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7-13700F',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'NVIDIA RTX 4070',
        'RGB Gaming Case',
        'Windows 11'
      ]
    },
    {
      id: 'game-desk-2',
      name: 'HP OMEN 40L Gaming Desktop',
      description: 'High-performance gaming system designed for competitive gaming and streaming.',
      count: 12,
      price: 2799,
      image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7-13700K',
        '32GB DDR5 RAM',
        '1TB SSD',
        'NVIDIA RTX 4070 Ti',
        'Liquid Cooling',
        'Windows 11'
      ]
    },
    {
      id: 'game-desk-3',
      name: 'Lenovo Legion T7 Gaming Desktop',
      description: 'Premium gaming tower built for ultra graphics performance and multitasking.',
      count: 8,
      price: 3499,
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i9-13900KF',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'NVIDIA RTX 4080',
        'RGB Lighting',
        'Windows 11'
      ]
    },
    {
      id: 'game-desk-4',
      name: 'MSI Aegis RS Gaming Desktop',
      description: 'Extreme gaming PC built for high refresh rate gaming and content creation.',
      count: 7,
      price: 3999,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i9-14900K',
        '64GB DDR5 RAM',
        '2TB NVMe SSD',
        'NVIDIA RTX 4090',
        'Liquid Cooling',
        'Windows 11'
      ]
    },
    {
      id: 'game-desk-5',
      name: 'Mid-Range RTX 4060 Gaming PC',
      description: 'Balanced gaming desktop perfect for 1080p and 1440p modern gaming.',
      count: 18,
      price: 1599,
      image: 'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5-13400F',
        '16GB DDR4 RAM',
        '1TB SSD',
        'NVIDIA RTX 4060',
        'RGB Fans',
        'Windows 11'
      ]
    },
    {
      id: 'game-desk-6',
      name: 'AMD Ryzen 7 Gaming Desktop',
      description: 'Modern AMD gaming system designed for smooth gaming and streaming.',
      count: 14,
      price: 1899,
      image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'AMD Ryzen 7 7800X3D',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'NVIDIA RTX 4070',
        'RGB Gaming Case',
        'Windows 11'
      ]
    }
  ]
},

 "AllinOnePC": {
  name: 'All-in-One PC',
  products: [
    {
      id: 'aio-1',
      name: 'HP 27" All-in-One (27-cr0028nh)',
      description: 'Modern 27-inch HP All-in-One desktop designed for productivity, entertainment, and office work.',
      count: 18,
      price: 1499,
      image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        '13th Gen Intel Core i5',
        '16GB DDR4 RAM',
        '1TB NVMe SSD',
        '27" FHD IPS Anti-Glare Display',
        'Intel Iris Xe Graphics',
        'Wi-Fi 6 + Bluetooth 5.3'
      ]
    },
    {
      id: 'aio-2',
      name: 'HP Pavilion 24 All-in-One',
      description: 'Elegant and compact all-in-one desktop perfect for home offices and productivity.',
      count: 16,
      price: 1199,
      image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5-13400T',
        '16GB RAM',
        '512GB SSD',
        '23.8" FHD IPS Display',
        'Intel UHD Graphics',
        'Windows 11 Home'
      ]
    },
    {
      id: 'aio-3',
      name: 'HP EliteOne 800 G9 All-in-One',
      description: 'Premium enterprise all-in-one desktop designed for business environments.',
      count: 10,
      price: 1899,
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7-13700',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        '27" QHD Display',
        'Intel Iris Xe Graphics',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'aio-4',
      name: 'HP 24 All-in-One Desktop',
      description: 'Affordable all-in-one PC designed for everyday computing and office tasks.',
      count: 22,
      price: 999,
      image: 'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i3-1315U',
        '8GB RAM',
        '512GB SSD',
        '23.8" Full HD Display',
        'Intel UHD Graphics',
        'Wi-Fi + Bluetooth'
      ]
    },
    {
      id: 'aio-5',
      name: 'Lenovo IdeaCentre AIO 3 27"',
      description: 'Modern Lenovo all-in-one PC with a large display ideal for work and multimedia.',
      count: 14,
      price: 1099,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'AMD Ryzen 5 7530U',
        '16GB RAM',
        '512GB SSD',
        '27" FHD IPS Display',
        'AMD Radeon Graphics',
        'Windows 11'
      ]
    },
    {
      id: 'aio-6',
      name: 'Dell Inspiron 27 All-in-One',
      description: 'Large screen all-in-one PC designed for productivity and family entertainment.',
      count: 12,
      price: 1299,
      image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7-1355U',
        '16GB RAM',
        '1TB SSD',
        '27" Full HD Display',
        'Intel Iris Xe Graphics',
        'Windows 11'
      ]
    }
  ]
},

 "MiniDesktop": {
    name: 'Mini Desktop',
    products: [
      {
        id: 'mini-1',
        name: 'Intel NUC 13 Pro',
        description: 'Premium compact desktop with Intel i5, ideal for office and business use',
        count: 18,
        price: 399,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5-1340P', '16GB RAM', '512GB SSD', 'Wi-Fi 6E', 'Quiet Operation']
      },
      {
        id: 'mini-2',
        name: 'Beelink SER5 Pro',
        description: 'AMD Ryzen 7 mini PC with excellent price-to-performance ratio',
        count: 25,
        price: 280,
        image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 7 5700X', '32GB RAM', '1TB SSD', '4K Support', 'VESA Mount']
      },
      {
        id: 'mini-3',
        name: 'ASUS ExpertCenter PN55',
        description: 'Latest AMD Ryzen AI mini PC with 96GB RAM support and dual 2.5G Ethernet',
        count: 12,
        price: 660,
        image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen AI 7', '32GB RAM', '512GB SSD', 'Wi-Fi 7', 'Dual 2.5G LAN']
      },
      {
        id: 'mini-4',
        name: 'Minisforum UM790 Pro',
        description: 'High-performance AMD Ryzen 9 mini PC for power users',
        count: 8,
        price: 400,
        image: 'https://images.pexels.com/photos/3829228/pexels-photo-3829228.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 9 7940HS', '32GB RAM', '1TB SSD', 'Dual NVMe', 'USB4']
      },
      {
        id: 'mini-5',
        name: 'GEEKOM A7 Max',
        description: 'Compact mini PC with AMD Ryzen 9 for content creation',
        count: 15,
        price: 450,
        image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 9', '32GB RAM', '1TB SSD', 'Wi-Fi 6E', '4K Triple Display']
      },
      {
        id: 'mini-6',
        name: 'HP EliteDesk 800 G1i',
        description: 'Business-class mini desktop with Intel Core Ultra 7 and AI acceleration',
        count: 22,
        price: 499,
        image: 'https://images.pexels.com/photos/2623538/pexels-photo-2623538.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel Core Ultra 7', '16GB RAM', '512GB SSD', 'TPM 2.0', 'HP Wolf Security']
      }
    ]
  },
"Workstation": {
  name: 'Workstation',
  products: [
    {
      id: 'work-1',
      name: 'Dell Precision 3660 Tower Workstation',
      description: 'Professional workstation designed for engineering, architecture, and 3D design workloads.',
      count: 9,
      price: 2899,
      image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i9-13900',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'NVIDIA RTX A2000',
        'Windows 11 Pro',
        'ISV Certified'
      ]
    },
    {
      id: 'work-2',
      name: 'Dell Precision 5820 Tower Workstation',
      description: 'Enterprise workstation built for heavy simulations, rendering, and engineering tasks.',
      count: 6,
      price: 3999,
      image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Xeon W-2245',
        '64GB ECC RAM',
        '2TB SSD',
        'NVIDIA RTX A4000',
        'Windows 11 Pro',
        'Expandable PCIe'
      ]
    },
    {
      id: 'work-3',
      name: 'HP Z2 G9 Tower Workstation',
      description: 'Modern HP workstation ideal for CAD, BIM modeling, and professional design workflows.',
      count: 10,
      price: 2599,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7-13700',
        '32GB DDR5 RAM',
        '1TB NVMe SSD',
        'NVIDIA RTX A2000',
        'Windows 11 Pro',
        'ECC Memory Support'
      ]
    },
    {
      id: 'work-4',
      name: 'HP Z4 G4 Workstation',
      description: 'High-performance workstation used for video editing, engineering simulations, and rendering.',
      count: 7,
      price: 4299,
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Xeon W-2295',
        '64GB ECC RAM',
        '2TB NVMe SSD',
        'NVIDIA RTX A4000',
        'Windows 11 Pro',
        'Professional Graphics'
      ]
    },
    {
      id: 'work-5',
      name: 'Lenovo ThinkStation P360 Tower',
      description: 'Reliable workstation tower designed for professional 3D design and engineering tasks.',
      count: 11,
      price: 2799,
      image: 'https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7-13700',
        '32GB DDR5 RAM',
        '1TB SSD',
        'NVIDIA RTX A2000',
        'Windows 11 Pro',
        'ISV Certification'
      ]
    },
    {
      id: 'work-6',
      name: 'Lenovo ThinkStation P520 Workstation',
      description: 'Professional workstation built for heavy rendering, simulations, and engineering workflows.',
      count: 5,
      price: 3599,
      image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Xeon W-2135',
        '64GB ECC RAM',
        '2TB SSD',
        'NVIDIA RTX A4000',
        'Windows 11 Pro',
        'Expandable Storage'
      ]
    }
  ]
},

 "BusinessLaptop": {
  name: 'Business Laptop',
  products: [
    {
      id: 'bus-lap-1',
      name: 'HP EliteBook 840 G10',
      description: 'Premium business laptop with professional performance and security.',
      count: 14,
      price: 2399,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1365U',
        '16GB RAM',
        '512GB SSD',
        '14" FHD Display',
        'Fingerprint Reader',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-2',
      name: 'HP ProBook 450 G10',
      description: 'Reliable business laptop with great performance for office workloads.',
      count: 18,
      price: 1999,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5‑1340U',
        '16GB RAM',
        '512GB SSD',
        '15.6" FHD Display',
        'Numeric Keypad',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-3',
      name: 'HP EliteBook 630 G10',
      description: 'Lightweight business laptop perfect for professionals on the go.',
      count: 12,
      price: 2199,
      image: 'https://images.pexels.com/photos/7102388/pexels-photo-7102388.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5‑1335U',
        '16GB RAM',
        '512GB SSD',
        '13.3" FHD Display',
        'Fast Charging',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-4',
      name: 'HP ProBook x360 440 G1',
      description: 'Convertible 2‑in‑1 business laptop ideal for presentations and meetings.',
      count: 9,
      price: 1899,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5‑1235U',
        '16GB RAM',
        '512GB SSD',
        '14" Touch Display',
        '360° Hinge',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-5',
      name: 'HP ProBook 440 G9',
      description: 'Balanced laptop for productivity and daily business use.',
      count: 17,
      price: 2099,
      image: 'https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1255U',
        '16GB RAM',
        '512GB SSD',
        '14" FHD Display',
        'Backlit Keyboard',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-6',
      name: 'HP EliteBook X G1a AI',
      description: 'High‑end business laptop with AI capabilities for productivity workflows.',
      count: 8,
      price: 2999,
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1355U',
        '32GB RAM',
        '1TB SSD',
        '14" FHD Display',
        'AI Software Suite',
        'Windows 11 Pro'
      ]
    },

    // ========== Other Brands ==========
    {
      id: 'bus-lap-7',
      name: 'Lenovo ThinkPad T16 Gen 1',
      description: 'Business classic with durable design and pro performance.',
      count: 11,
      price: 2299,
      image: 'https://images.pexels.com/photos/6449040/pexels-photo-6449040.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1365U',
        '16GB RAM',
        '512GB SSD',
        '16" WUXGA Display',
        'ThinkShield Security',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-8',
      name: 'Dell Latitude 7440',
      description: 'Enterprise‑grade Dell laptop designed for business users.',
      count: 13,
      price: 2499,
      image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1360P',
        '16GB RAM',
        '512GB SSD',
        '14" FHD Display',
        'ExpressCharge',
        'Windows 11 Pro'
      ]
    },
    {
      id: 'bus-lap-9',
      name: 'Samsung Galaxy Book3 Pro 360',
      description: 'Premium convertible laptop with AMOLED display and stylus support.',
      count: 7,
      price: 2699,
      image: 'https://images.pexels.com/photos/1181310/pexels-photo-1181310.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1360P',
        '16GB RAM',
        '1TB SSD',
        '15.6" AMOLED Display',
        '360° Hinge',
        'Wi‑Fi 6E'
      ]
    },

    // ========== Lenovo Additional ==========
    {
      id: 'bus-lap-10',
      name: 'Lenovo IdeaPad Slim 5 Pro',
      description: 'Affordable business laptop with strong performance.',
      count: 19,
      price: 1899,
      image: 'https://images.pexels.com/photos/708165/pexels-photo-708165.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'AMD Ryzen 7 7730U',
        '16GB RAM',
        '512GB SSD',
        '14" WQXGA Display',
        'Fingerprint Reader',
        'Windows 11 Home'
      ]
    },
    {
      id: 'bus-lap-11',
      name: 'Lenovo Yoga 7i',
      description: 'Flexible convertible business laptop for travel and work.',
      count: 15,
      price: 2099,
      image: 'https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5‑1355U',
        '16GB RAM',
        '512GB SSD',
        '14" Touch Display',
        '360° Hinge',
        'Windows 11'
      ]
    },
    {
      id: 'bus-lap-12',
      name: 'Lenovo ThinkBook 14s Gen 4',
      description: 'Business‑oriented laptop with sleek design and strong battery life.',
      count: 17,
      price: 1999,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑1360P',
        '16GB RAM',
        '512GB SSD',
        '14" FHD Display',
        'Fingerprint Reader',
        'Windows 11 Pro'
      ]
    }
  ]
},

 "StudentLaptop": {
  name: 'Student Laptop',
  products: [
    {
      id: 'stu-lap-1',
      name: 'HP 15s Laptop',
      description: 'Affordable and reliable everyday laptop for school and university use.',
      count: 48,
      price: 599,
      image: 'https://images.pexels.com/photos/3844584/pexels-photo-3844584.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i3',
        '8GB RAM',
        '256GB SSD',
        '15.6" Display',
        'Long Battery Life',
        'Windows 11'
      ]
    },
    {
      id: 'stu-lap-2',
      name: 'Lenovo IdeaPad 3',
      description: 'Lightweight student laptop with solid performance for study tasks.',
      count: 35,
      price: 649,
      image: 'https://images.pexels.com/photos/5099225/pexels-photo-5099225.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'AMD Ryzen 5',
        '8GB RAM',
        '512GB SSD',
        '15.6" FHD',
        'Slim & Portable',
        'Windows 11'
      ]
    },
    {
      id: 'stu-lap-3',
      name: 'Dell Inspiron 15',
      description: 'Durable everyday laptop perfect for homework, research, and study apps.',
      count: 30,
      price: 699,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5',
        '8GB RAM',
        '512GB SSD',
        '15.6" Display',
        'Dell Mobile Connect',
        'Windows 11'
      ]
    },
    {
      id: 'stu-lap-4',
      name: 'ASUS VivoBook 15',
      description: 'Good all‑round student laptop with stylish design and solid performance.',
      count: 26,
      price: 679,
      image: 'https://images.pexels.com/photos/5682656/pexels-photo-5682656.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i5',
        '8GB RAM',
        '256GB SSD',
        '15.6" Display',
        'NanoEdge Display',
        'Windows 11'
      ]
    },
    {
      id: 'stu-lap-5',
      name: 'Acer Aspire 5',
      description: 'Affordable laptop with good battery life and performance for students.',
      count: 33,
      price: 629,
      image: 'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'AMD Ryzen 3',
        '8GB RAM',
        '256GB SSD',
        '15.6" FHD',
        'Backlit Keyboard',
        'Windows 11 Home'
      ]
    },
    {
      id: 'stu-lap-6',
      name: 'HP Chromebook 14',
      description: 'Simple, lightweight Chromebook perfect for online classes and browsing.',
      count: 22,
      price: 449,
      image: 'https://images.pexels.com/photos/7116336/pexels-photo-7116336.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Chrome OS',
        '4GB RAM',
        '64GB eMMC',
        '14" HD Display',
        'Fast Boot',
        'Long Battery'
      ]
    }
  ]
},

 "UltrabookThinLight": {
    name: 'Ultrabook / Thin & Light',
    products: [
      {
        id: 'ultra-1',
        name: 'HP OmniBook Ultra 14',
        description: 'World\'s slimmest consumer notebook with AI acceleration and 85 TOPS NPU',
        count: 28,
        price: 1399,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Snapdragon X2 Elite', '32GB RAM', '1TB SSD', '3K OLED 120Hz', '5% Thinner Than MacBook Air']
      },
      {
        id: 'ultra-2',
        name: 'Apple MacBook Air M3',
        description: 'Fanless ultrabook with 3nm chip and 18-hour battery life',
        count: 45,
        price: 1099,
        image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Apple M3 Chip', '16GB RAM', '512GB SSD', '13.6" Liquid Retina', '18hr Battery']
      },
      {
        id: 'ultra-3',
        name: 'Dell XPS 13 Plus (9340)',
        description: 'Premium ultrabook with zero-bezel OLED and Intel Core Ultra 9',
        count: 32,
        price: 1499,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel Core Ultra 9', '32GB RAM', '1TB SSD', '13.4" OLED 1200 nits', 'Silent Fanless Design']
      },
      {
        id: 'ultra-4',
        name: 'Lenovo ThinkPad X1 Carbon Gen 12',
        description: 'Ultra-light carbon-fiber business ultrabook with Intel Core Ultra 7',
        count: 38,
        price: 1599,
        image: 'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel Core Ultra 7', '32GB RAM', '1TB SSD', '14" WUXGA IPS', '1.08kg Weight']
      },
      {
        id: 'ultra-5',
        name: 'ASUS Zenbook S 13 OLED',
        description: 'Ultra-slim OLED laptop with military-grade durability',
        count: 24,
        price: 1299,
        image: 'https://images.pexels.com/photos/4218960/pexels-photo-4218960.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel Core i9', '32GB RAM', '1TB SSD', '13.3" OLED 2.8K', '1.0kg Aluminum Body']
      },
      {
        id: 'ultra-6',
        name: 'Samsung Galaxy Book 4 Pro',
        description: 'Dynamic AMOLED 2X ultrabook with Intel Core Ultra 7',
        count: 19,
        price: 1199,
        image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel Core Ultra 7', '32GB RAM', '1TB SSD', '14" AMOLED 3K', '1.23kg Weight']
      }
    ]
  },

 "GamingLaptop": {
  name: 'Gaming Laptop',
  products: [
    {
      id: 'game-lap-1',
      name: 'ASUS ROG Strix G18',
      description: 'Top‑tier ASUS gaming laptop with stunning performance and advanced cooling.',
      count: 10,
      price: 3699,
      image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i9‑14900HX',
        'NVIDIA RTX 4090',
        '32GB DDR5 RAM',
        '1TB SSD',
        '18" 240Hz Display',
        'Aura RGB Keyboard'
      ]
    },
    {
      id: 'game-lap-2',
      name: 'ASUS ROG Zephyrus G16',
      description: 'Ultra‑slim ROG laptop with premium performance for gaming and content creation.',
      count: 12,
      price: 3299,
      image: 'https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i9‑13900H',
        'RTX 4080',
        '32GB RAM',
        '1TB SSD',
        '16" QHD 165Hz',
        'RGB Backlit'
      ]
    },
    {
      id: 'game-lap-3',
      name: 'ASUS ROG Strix G16',
      description: 'Balanced high‑performance ASUS gaming laptop with strong GPU power.',
      count: 15,
      price: 2999,
      image: 'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑13800H',
        'RTX 4070',
        '32GB RAM',
        '1TB SSD',
        '16" QHD 165Hz',
        'Advanced Cooling'
      ]
    },
    {
      id: 'game-lap-4',
      name: 'ASUS TUF Gaming A17',
      description: 'Durable ASUS gaming laptop with strong thermals and performance.',
      count: 20,
      price: 1799,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'AMD Ryzen 9 7945HX',
        'RTX 4060',
        '16GB RAM',
        '1TB SSD',
        '17.3" 144Hz',
        'Military‑Grade Build'
      ]
    },
    {
      id: 'game-lap-5',
      name: 'ASUS TUF Gaming F15',
      description: 'Mid‑range ASUS gaming laptop with solid FPS performance.',
      count: 25,
      price: 1599,
      image: 'https://images.pexels.com/photos/654317/pexels-photo-654317.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑13650HX',
        'RTX 4050',
        '16GB RAM',
        '512GB SSD',
        '15.6" 144Hz',
        'RGB Keyboard'
      ]
    },
    {
      id: 'game-lap-6',
      name: 'ASUS TUF Dash F15',
      description: 'Slim gaming laptop with long battery and competitive gaming power.',
      count: 22,
      price: 1499,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'Intel Core i7‑13620H',
        'RTX 4060',
        '16GB RAM',
        '1TB SSD',
        '15.6" 144Hz',
        'Thin & Lightweight'
      ]
    },

    // Additional 6 popular gaming laptops
    {
      id: 'game-lap-7',
      name: 'Alienware x16 R2',
      description: 'Premium gaming laptop with powerful GPU and signature design.',
      count: 8,
      price: 3899,
      image: 'https://images.pexels.com/photos/5089998/pexels-photo-5089998.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'RTX 4090',
        '32GB RAM',
        '1TB SSD',
        '16" 240Hz',
        'AlienFX Lighting'
      ]
    },
    {
      id: 'game-lap-8',
      name: 'MSI GE76 Raider',
      description: 'Gaming laptop with excellent thermals and desktop‑level power.',
      count: 9,
      price: 3499,
      image: 'https://images.pexels.com/photos/5682656/pexels-photo-5682656.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'RTX 4080',
        '32GB RAM',
        '1TB SSD',
        '17.3" 240Hz',
        'Cooler Boost Tech'
      ]
    },
    {
      id: 'game-lap-9',
      name: 'Razer Blade 16',
      description: 'Premium sleek gaming laptop with high refresh display.',
      count: 7,
      price: 3799,
      image: 'https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'RTX 4080',
        '32GB RAM',
        '1TB SSD',
        '16" 240Hz',
        'Per‑Key RGB'
      ]
    },
    {
      id: 'game-lap-10',
      name: 'Acer Predator Helios 18',
      description: 'Powerful gaming laptop with aggressive performance tuning.',
      count: 13,
      price: 2999,
      image: 'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'RTX 3070 Ti',
        '32GB RAM',
        '1TB SSD',
        '18" 165Hz',
        'AeroBlade Fans'
      ]
    },
    {
      id: 'game-lap-11',
      name: 'Dell G16',
      description: 'Great performance gaming laptop with good value balance.',
      count: 18,
      price: 1899,
      image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'RTX 4060',
        '16GB RAM',
        '1TB SSD',
        '16" 165Hz',
        'Dynamic Boost'
      ]
    },
    {
      id: 'game-lap-12',
      name: 'HP OMEN 16',
      description: 'Reliable gaming laptop with solid FPS performance for popular titles.',
      count: 20,
      price: 2399,
      image: 'https://images.pexels.com/photos/1181310/pexels-photo-1181310.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: [
        'RTX 3060',
        '16GB RAM',
        '1TB SSD',
        '16" 165Hz',
        'OMEN Temp Control'
      ]
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
      id: 'fhd-hp-1',
      name: 'HP Series 5 27" FHD Monitor',
      description: 'Ultra HD professional monitor with 27" IPS display',
      count: 35,
      price: 249,
      image: monitor1,
      specs: [
        '27" IPS, FHD',
        '300 nits Brightness',
        '5ms Response Time',
        '2x HDMI 1.4 Ports',
        '24W Power Consumption',
        'Tilt Adjustment: -5° to +25°',
        'Weight: 3.2 kg'
      ]
    },
    {
      id: 'fhd-hp-2',
      name: 'HP Series 3 Pro FHD Monitor',
      description: 'Modern 21.45" monitor with sleek design and 100Hz refresh rate',
      count: 42,
      price: 179,
      image: monitor2,
      specs: [
        '21.45" Full HD',
        '100Hz Refresh Rate',
        '5ms Response Time',
        '3-Sided Slim Bezel',
        'Anti-glare + Low Blue Light',
        'HDMI & VGA Ports',
        'VESA Mount Support'
      ]
    },
    {
      id: 'fhd-dell-1',
      name: 'Dell D2020H Monitor',
      description: '19.5" HD Monitor with TN panel for basic office use',
      count: 28,
      price: 139,
      image: monitor4,
      specs: [
        '19.5" HD (1366×768)',
        '60Hz Refresh Rate',
        'TN Panel',
        'HDMI & VGA Ports',
        'LED Backlit',
        'Compact Design',
        'Energy Efficient'
      ]
    },
    {
      id: 'fhd-asus-1',
      name: 'ASUS 24" FHD Monitor',
      description: '24-inch Full HD monitor with IPS panel for everyday use',
      count: 45,
      price: 159,
      image: monitor5,
      specs: [
        '24" FHD (1920x1080)',
        'IPS Panel',
        '250 nits Brightness',
        'HDMI & VGA Ports',
        'VESA Mount Compatible',
        'Built-in Speakers',
        '3 Year Warranty'
      ]
    },
    {
      id: 'fhd-samsung-1',
      name: 'SAMSUNG 34" ViewFinity Monitor',
      description: 'Ultra-WQHD monitor with 100Hz refresh rate and HDR10',
      count: 22,
      price: 449,
      image: monitor6,
      specs: [
        '34" Ultra-WQHD (3440x1440)',
        '100Hz Refresh Rate',
        '5ms Response Time',
        'HDR10 Support',
        'AMD FreeSync',
        'Eye Care Technology',
        'Borderless Design',
        'PIP/PBP Support'
      ]
    },
    {
      id: 'fhd-dell-2',
      name: 'Dell 34 Plus Curved Monitor',
      description: '34" USB-C curved monitor with 120Hz refresh rate for professionals',
      count: 18,
      price: 599,
      image: monitor7,
      specs: [
        '34" Curved (3440x1440)',
        '120Hz Refresh Rate',
        'VA Panel',
        'USB-C Connectivity',
        'AMD FreeSync Premium',
        '99% sRGB Coverage',
        '95% DCI-P3 Coverage',
        'Height Adjustable'
      ]
    },
    {
      id: 'fhd-acer-1',
      name: 'Acer 27" 4K Monitor',
      description: '27-inch professional monitor with 4K resolution for designers',
      count: 15,
      price: 499,
      image: monitor8,
      specs: [
        '27" 4K (3840x2160)',
        'IPS Panel',
        '100% sRGB',
        'Professional Color Accuracy',
        'Multiple Input Ports',
        'Ergonomic Stand',
        'VESA Mount Compatible'
      ]
    },
    {
      id: 'fhd-hp-3',
      name: 'HP Essential FHD Monitor',
      description: 'Affordable 21.5" Full HD monitor for home office',
      count: 55,
      price: 129,
      image: monitor2,
      specs: [
        '21.5" FHD (1920x1080)',
        '60Hz Refresh Rate',
        '5ms Response Time',
        'Anti-glare Coating',
        'Low Blue Light Mode',
        'HDMI & VGA Ports',
        'Energy Star Certified'
      ]
    },
    {
      id: 'fhd-dell-3',
      name: 'Dell Professional FHD Monitor',
      description: '24" business monitor with ergonomic stand and eye comfort',
      count: 38,
      price: 219,
      image: monitor4,
      specs: [
        '24" FHD (1920x1080)',
        '75Hz Refresh Rate',
        'IPS Panel',
        'Height Adjustable Stand',
        'USB Hub',
        'ComfortView Technology',
        '3-Year Warranty'
      ]
    },
    {
      id: 'fhd-asus-2',
      name: 'ASUS Eye Care Monitor',
      description: '24" FHD monitor with TÜV-certified eye care technology',
      count: 32,
      price: 149,
      image: monitor5,
      specs: [
        '24" FHD (1920x1080)',
        '75Hz Refresh Rate',
        'IPS Panel',
        'TÜV Flicker-free',
        'Low Blue Light',
        'VESA Mountable',
        'GamePlus Features'
      ]
    },
    {
      id: 'fhd-samsung-2',
      name: 'Samsung Essential FHD Monitor',
      description: '24" slim design monitor for home and office',
      count: 48,
      price: 159,
      image: monitor6,
      specs: [
        '24" FHD (1920x1080)',
        '75Hz Refresh Rate',
        'IPS Panel',
        'Game Mode',
        'Eco Saving Plus',
        'Eye Saver Mode',
        'Flicker Free'
      ]
    },
    {
      id: 'fhd-lg-1',
      name: 'LG 27" FHD IPS Monitor',
      description: '27-inch Full HD monitor with IPS display and AMD FreeSync',
      count: 40,
      price: 199,
      image: monitor3,
      specs: [
        '27" FHD (1920x1080)',
        '75Hz Refresh Rate',
        'IPS Panel',
        'AMD FreeSync',
        'OnScreen Control',
        'Reader Mode',
        'Flicker Safe'
      ]
    }
  ]
},
"2K4KMonitor": {
  name: '2K / 4K Premium Monitors',
  products: [
    {
      id: 'dell-4k-pro',
      name: 'Dell UltraSharp U3225QE',
      description: 'The world\'s first 32" 4K IPS Black monitor with Thunderbolt 4 hub.',
      count: 12,
      price: 749,
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['31.5"', '4K UHD (3840x2160)', '120Hz', 'IPS Black (2000:1 Contrast)', '98% DCI-P3']
    },
    {
      id: 'lg-2k-gaming',
      name: 'LG UltraGear 27GP850-B',
      description: 'Nano IPS gaming powerhouse with overclocked 180Hz refresh rate.',
      count: 25,
      price: 349,
      image: 'https://images.pexels.com/photos/7033923/pexels-photo-7033923.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['27"', '2K QHD (2560x1440)', '180Hz (OC)', 'Nano IPS', '1ms GtG']
    },
    {
      id: 'asus-proart-4k',
      name: 'ASUS ProArt PA279CV',
      description: 'Factory-calibrated 4K display designed for professional creative work.',
      count: 8,
      price: 499,
      image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['27"', '4K UHD (3840x2160)', '60Hz', 'Delta E < 2 Accuracy', '100% sRGB']
    },
    {
      id: 'samsung-g7-2k',
      name: 'Samsung Odyssey G7 (1000R)',
      description: 'Supreme 1000R curved screen for total immersive gaming.',
      count: 15,
      price: 599,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['32"', '2K QHD (2560x1440)', '240Hz', 'QLED Panel', 'HDR600']
    },
    {
      id: 'msi-4k-oled',
      name: 'MSI MPG 272URX QD-OLED',
      description: 'Stunning 4K QD-OLED panel with infinite contrast and 0.03ms response.',
      count: 6,
      price: 899,
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['27"', '4K UHD (3840x2160)', '240Hz', 'QD-OLED', '99% DCI-P3']
    },
    {
      id: 'benq-coding-4k',
      name: 'BenQ RD280U (Coding Series)',
      description: 'Specialized 4K monitor with a 3:2 aspect ratio perfect for developers.',
      count: 10,
      price: 599,
      image: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['28"', '4K+ (3840x2560)', '60Hz', 'Anti-Glare Fine-Coated', 'Coding Mode']
    }
  ]
},
"GamingMonitor": {
  name: 'Elite Gaming Monitors',
  products: [
    {
      id: 'rog-swift-oled',
      name: 'ASUS ROG Swift OLED PG27AQDP',
      description: 'The world\'s first 1440p 480Hz OLED monitor for elite competitive gaming.',
      count: 10,
      price: 999,
      image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['27"', '2560x1440', '480Hz', 'OLED Panel', '0.03ms Response']
    },
    {
      id: 'lg-ultragear-dual',
      name: 'LG UltraGear 32GS95UE',
      description: 'Revolutionary Dual-Mode: Switch between 4K/240Hz and 1080p/480Hz instantly.',
      count: 8,
      price: 1199,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['31.5"', '4K UHD / 1080p', '240Hz / 480Hz', 'WOLED', 'Pixel Sound']
    },
    {
      id: 'alienware-qd-oled',
      name: 'Alienware AW3423DWF',
      description: 'Voted best curved gaming monitor with stunning Quantum Dot OLED technology.',
      count: 12,
      price: 899,
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['34" Curved', '3440x1440', '165Hz', 'QD-OLED', 'Infinite Contrast']
    },
    {
      id: 'samsung-odyssey-g9',
      name: 'Samsung Odyssey OLED G9',
      description: 'Massive 49-inch super ultrawide for the ultimate racing and sim immersion.',
      count: 5,
      price: 1599,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['49" Curved', '5120x1440', '240Hz', 'QD-OLED', '0.03ms GtG']
    },
    {
      id: 'msi-mag-mini-led',
      name: 'MSI MAG 274UPDF Mini-LED',
      description: 'Punchy HDR-first choice with 4K detail and high-speed motion.',
      count: 15,
      price: 549,
      image: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['27"', '4K UHD', '160Hz', 'Mini-LED', 'DisplayHDR 1000']
    },
    {
      id: 'zowie-xl-esports',
      name: 'BenQ ZOWIE XL2566K',
      description: 'The definitive choice for CS2 and Valorant pros with DyAc⁺ technology.',
      count: 20,
      price: 599,
      image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['24.5"', '1920x1080', '360Hz', 'Fast TN Panel', 'DyAc⁺ Tech']
    }
  ]
},

 "CurvedMonitor": {
  name: 'Professional Curved & Flex Displays',
  products: [
    {
      id: 'lg-oled-flex',
      name: 'LG OLED Flex (LX3)',
      description: 'The ultimate tool for editors: A screen that transforms from flat to a 900R curve at the touch of a button.',
      count: 5,
      price: 2499,
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['42" Flexible OLED', '4K UHD', 'Flat to 900R Curve', '0.1ms Response', 'SAR Anti-Reflection']
    },
    {
      id: 'dell-ultrasharp-curved',
      name: 'Dell UltraSharp 40 Curved (U4025QW)',
      description: 'The world\'s first 5K2K 120Hz monitor. Massive horizontal space for 4K video timelines.',
      count: 12,
      price: 1999,
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['39.5" Curved', '5K2K (5120x2160)', '120Hz', 'IPS Black Tech', '99% DCI-P3']
    },
    {
      id: 'samsung-viewfinity-s9',
      name: 'Samsung ViewFinity S95VC',
      description: 'Designed for designers. A 1000R curve that matches the human field of view to reduce eye strain.',
      count: 18,
      price: 899,
      image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['34" Ultra-Wide', '3440x1440', '100Hz', 'Integrated KVM Switch', 'USB-C 90W Charging']
    },
    {
      id: 'benq-pd3420q',
      name: 'BenQ DesignVue PD3420Q',
      description: 'Mac-ready curved display with "M-Book" mode for perfect color syncing with MacBook Pros.',
      count: 10,
      price: 799,
      image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['34" WQHD', 'VESA HDR400', 'Calman Verified', 'Pantone Validated', 'Uniformity Tech']
    },
    {
      id: 'asus-proart-curved',
      name: 'ASUS ProArt PA34VCNV',
      description: 'Calibrated for professional video editing with a subtle 3800R curve for distortion-free viewing.',
      count: 7,
      price: 749,
      image: 'https://images.pexels.com/photos/434844/pexels-photo-434844.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['34.1" Curved', '21:9 Aspect Ratio', 'Delta E < 2', 'Daisy Chain Support', 'Calman Ready']
    },
    {
      id: 'viewsonic-colorpro',
      name: 'ViewSonic ColorPro VP3881a',
      description: 'Extra-large 38" canvas for colorists who need immersive depth and 10-bit color.',
      count: 9,
      price: 1099,
      image: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['38" WQHD+', '2300R Curve', 'HDR10 Support', '95% DCI-P3', 'Hardware Calibration']
    }
  ]
},
  "Modern4KTVs": {
    name: 'Modern 4K TVs',
    products: [
      // --- THE ETHIOPIAN FAVORITE: INFINIX ---
     
      // --- SAMSUNG SERIES ---
      {
        id: 'tv-sam-01',
        name: 'Samsung Crystal UHD 4K 65"',
        description: 'Ultra-slim AirSlim design that fits perfectly against the wall.',
        count: 12,
        price: 135000,
        image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch 4K', 'AirSlim Profile', 'Object Tracking Sound Lite', 'Tizen OS']
      },
      {
        id: 'tv-sam-02',
        name: 'Samsung QLED Q70C 75"',
        description: 'A massive 75-inch screen for the ultimate "Beto-tin Cinema" experience.',
        count: 5,
        price: 245000,
        image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['75-inch Quantum Dot', '120Hz Refresh Rate', 'Dual LED Backlight', 'Quantum HDR']
      },
      // --- LG SERIES ---
      {
        id: 'tv-lg-01',
        name: 'LG UQ8000 Series 55"',
        description: 'Famous for the "Magic Remote" and the best smart interface (webOS).',
        count: 20,
        price: 88500,
        image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['55-inch 4K', 'α5 Gen5 AI Processor', 'webOS Smart', 'Magic Remote Included']
      },
      {
        id: 'tv-lg-02',
        name: 'LG OLED C3 65"',
        description: 'The king of modern slim TVs. Thinner than a smartphone with perfect blacks.',
        count: 4,
        price: 295000,
        image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch Self-Lit OLED', 'Ultra-Thin Gallery Design', 'Dolby Vision IQ', 'HDMI 2.1']
      },
      // --- SONY SERIES ---
      {
        id: 'tv-sony-01',
        name: 'Sony Bravia X80K 65"',
        description: 'Known in Ethiopia for the best picture natural colors and durability.',
        count: 8,
        price: 185000,
        image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch 4K HDR', 'TRILUMINOS Pro Display', 'Google TV', 'Dolby Atmos']
      },
      // --- HISENSE & TCL (High Popularity in Addis) ---
      {
        id: 'tv-hi-01',
        name: 'Hisense A6 Series 45"',
        description: 'The best "Middle Size" TV for apartments in Addis. Great 4K quality.',
        count: 30,
        price: 42000,
        image: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['45-inch 4K UHD', 'Dolby Vision HDR', 'Game Mode Plus', 'VIDAA Smart OS']
      },
      {
        id: 'tv-tcl-01',
        name: 'TCL C645 QLED 55"',
        description: 'High-end QLED colors at a very competitive price.',
        count: 18,
        price: 64000,
        image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['55-inch QLED', 'Google TV', 'Dolby Vision/Atmos', 'Hands-free Voice Control']
      },

       {
        id: 'tv-inf-01',
        name: 'Infinix X5 Smart 4K TV 55"',
        description: 'The most popular choice in Ethiopia for price and performance. Features a frameless design and Android 11.',
        count: 45,
        price: 48500,
        image: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['55-inch 4K UHD', 'Frameless Design', 'Android TV', 'Anti-Blue Light Tech']
      },
      {
        id: 'tv-hi-02',
        name: 'Hisense U7H Quantum 65"',
        description: 'Top-tier brightness, excellent for bright living rooms.',
        count: 10,
        price: 110000,
        image: 'https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch Mini-LED', '120Hz Native', '600+ nits Brightness', 'Local Dimming']
      },
      // --- SPECIALTY SLIM & PREMIUM ---
      {
        id: 'tv-sam-03',
        name: 'Samsung The Frame 55"',
        description: 'Looks like a piece of art when off. Perfect for luxury home decor.',
        count: 6,
        price: 155000,
        image: 'https://images.pexels.com/photos/6312362/pexels-photo-6312362.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['55-inch Matte Display', 'Art Mode', 'Customizable Bezel', 'One Connect Box']
      },
      {
        id: 'tv-lg-03',
        name: 'LG NanoCell 75 Series 65"',
        description: 'Uses pure colors to deliver a crisp 4K image for football and sports.',
        count: 9,
        price: 105000,
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch NanoCell Tech', 'Local Dimming', 'AI Sound Pro', 'ThinQ AI']
      },
      {
        id: 'tv-xia-01',
        name: 'Xiaomi TV S Mini LED 65"',
        description: 'The newcomer that everyone is talking about. High specs for a lower price.',
        count: 15,
        price: 92000,
        image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch Mini LED', '144Hz Refresh', 'HyperOS', 'Aluminium Frame']
      }
    ]
  }
,

 // ========== NETWORKING SUBCATEGORIES ==========
"HomeNetworking": {
  name: 'Home Networking',
  products: [
    {
      id: 'huawei-ax6-pro',
      name: 'Huawei WiFi AX6 Pro',
      description: 'Ultra-fast WiFi 6+ router with 7200Mbps throughput and strong wall-penetration.',
      count: 15,
      price: 159,
      image: 'https://images.pexels.com/photos/4218544/pexels-photo-4218544.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['WiFi 6+', '7200 Mbps', '8 High-Gain Antennas', 'NFC One-Hop Connect', 'HarmonyOS Mesh+']
    },
    {
      id: 'tp-link-archer-ax72',
      name: 'TP-Link Archer AX72',
      description: 'Pro-grade Gigabit WiFi 6 router with 6-streams and extensive coverage for smart homes.',
      count: 20,
      price: 189,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      specs: ['WiFi 6', '5400 Mbps', '4x4 MU-MIMO', 'USB 3.0 Port', 'HomeShield Security']
    },
    {
      id: 'huawei-mesh-7',
      name: 'Huawei WiFi Mesh 7 (2-Pack)',
      description: 'Tri-band whole home coverage that handles 250+ devices with lightning speed.',
      count: 10,
      price: 329,
      image: 'https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['Tri-Band WiFi 6', '6600 Mbps', 'Coverage 6000 sq ft', 'HarmonyOS Mesh+', 'Visualized WiFi Diagnosis']
    },
    {
      id: 'tp-link-deco-x50',
      name: 'TP-Link Deco X50',
      description: 'AI-Driven Mesh system that learns your network environment to provide ideal WiFi.',
      count: 12,
      price: 299,
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['AX3000 WiFi 6', 'Ultra-Low Latency', 'Seamless Roaming', 'TP-Link HomeCare', 'Easy Setup']
    },
    {
      id: 'dlink-aquila-pro',
      name: 'D-Link AQUILA PRO AI M30',
      description: 'Eco-friendly AI-powered router designed for smart home optimization and reliability.',
      count: 14,
      price: 145,
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['WiFi 6', '3000 Mbps', '5 Internal Antennas', 'Voice Control (Alexa/Google)', 'WPA3 Encryption']
    },
    {
      id: 'huawei-b535-4g',
      name: 'Huawei 4G Router 3 Pro',
      description: 'Perfect for areas without fiber. Just insert a SIM card for high-speed 4G broadband.',
      count: 25,
      price: 125,
      image: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['Cat 7 4G LTE', '300 Mbps Download', 'Dual-Band WiFi', '4 Gigabit Ports', 'Plug & Play']
    }
  ]
},
// ========== NETWORKING SUBCATEGORIES ==========
"CommercialNetworking": {
  name: 'Commercial Networking',
  products: [
    {
      id: 'huawei-s5735-s48t4x',
      name: 'Huawei CloudEngine S5735-S48T4X',
      description: 'High-performance 48-port gigabit switch with 10G uplinks for enterprise core networks.',
      count: 5,
      price: 1450,
      image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['48 x GE Ports', '4 x 10GE SFP+ Uplinks', 'Stacking Support', 'Layer 3 Features', 'Silent Design']
    },
    {
      id: 'mikrotik-ccr2116',
      name: 'MikroTik Cloud Core Router CCR2116',
      description: 'Massive routing power with a 16-core CPU, perfect for ISPs and large-scale office traffic.',
      count: 3,
      price: 995,
      image: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['16-Core 2GHz CPU', '13 x Gigabit Ports', '4 x 10G SFP+ Ports', '16GB RAM', 'Dual Redundant PSU']
    },
    {
      id: 'tp-link-er8411',
      name: 'TP-Link Omada ER8411 VPN Router',
      description: 'Enterprise-grade 10G multi-WAN VPN router integrated with Omada SDN for central management.',
      count: 8,
      price: 549,
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['Dual 10G SFP+ Ports', '8 x GE RJ45 Ports', 'SSL/IPSec VPN', 'Centralized Cloud Management', 'Dual PSU']
    },
    {
      id: 'huawei-airengine-5761',
      name: 'Huawei AirEngine 5761-11 Access Point',
      description: 'Indoor WiFi 6 access point with smart antennas for high-density office environments.',
      count: 15,
      price: 380,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      specs: ['WiFi 6 (802.11ax)', '1.775 Gbps', 'Smart Antennas', 'PoE Support', 'Cloud Management']
    },
    {
      id: 'tp-link-sg3428xmp',
      name: 'TP-Link JetStream 24-Port PoE+ Switch',
      description: 'Full 24-port PoE+ managed switch with 10G uplinks, ideal for powering IP cameras and APs.',
      count: 10,
      price: 620,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['24 x PoE+ Ports', '384W Power Budget', '4 x 10G SFP+ Slots', 'L2+ Managed', 'Omada SDN Integrated']
    },
    {
      id: 'mikrotik-crs354',
      name: 'MikroTik CRS354-48G-4S+2Q+RM',
      description: 'A beast of a switch providing 48G ports and dual 40G QSFP+ ports for high-speed server racks.',
      count: 4,
      price: 799,
      image: 'https://images.pexels.com/photos/159201/server-data-center-rack-cabinet-159201.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['48 x GE Ports', '4 x 10G SFP+', '2 x 40G QSFP+', 'Dual PSU', 'L3 Hardware Offloading']
    }
  ]
},

 "NetworkAccessories": {
  name: 'Network Accessories',
  products: [
    {
      id: 'tp-link-ue306',
      name: 'TP-Link USB 3.0 to Gigabit Ethernet',
      description: 'High-speed foldable network adapter for ultrabooks and laptops without LAN ports.',
      count: 45,
      price: 29,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['USB 3.0', '10/100/1000 Mbps', 'Plug & Play', 'Nintendo Switch Support', 'Compact Design']
    },
    {
      id: 'ugreen-cat7-cable',
      name: 'UGREEN Cat7 Shielded 10Gbps Cable',
      description: 'Professional-grade high-speed SFTP Ethernet cable for 10Gbps networking.',
      count: 100,
      price: 15,
      image: 'https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['Cat7 (S/FTP)', '10Gbps Speed', '600MHz Frequency', 'Gold-Plated RJ45', 'Braided Jacket']
    },
    {
      id: 'huawei-5g-cpe-antenna',
      name: 'Huawei 5G External Antenna',
      description: 'Signal boosting antenna for Huawei 4G/5G routers to stabilize connection in weak areas.',
      count: 20,
      price: 85,
      image: 'https://images.pexels.com/photos/4218544/pexels-photo-4218544.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['High Gain 11dBi', '700-5000MHz Support', 'Dual SMA Connector', 'Weatherproof', 'Wall Mount Kit']
    },
    {
      id: 'tp-link-poe-injector',
      name: 'TP-Link TL-POE150S PoE Injector',
      description: 'Power your Access Points or IP Cameras via a single Ethernet cable without a PoE switch.',
      count: 30,
      price: 35,
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['IEEE 802.3af', 'Gigabit Speed', 'Auto-Determination', 'Up to 100m Range', 'Plug-and-Play']
    },
    {
      id: 'tplink-sfp-module',
      name: 'TP-Link 10G SFP+ Fiber Module',
      description: 'Connect your business switches over long distances with professional fiber optic modules.',
      count: 15,
      price: 120,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['10GBase-SR', 'Multi-Mode Fiber', 'LC/UPC Connector', 'Hot-Pluggable', 'Durable Metal Enclosure']
    },
    {
      id: 'ugreen-8in1-hub',
      name: 'UGREEN 8-in-1 USB-C Hub with LAN',
      description: 'The ultimate workstation dock with 4K HDMI and Gigabit Ethernet for Proactive professionals.',
      count: 25,
      price: 65,
      image: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['Gigabit RJ45', '4K 60Hz HDMI', '100W Power Delivery', 'SD/TF Card Slots', '3x USB 3.0']
    }
  ]
},

 "RoutersSwitches": {
  name: 'Routers & Switches',
  products: [
    {
      id: 'net-33',
      name: 'Cisco 1941-SEC/K9 Router',
      description: 'Modular router with hardware-based encryption and firewall',
      count: 5,
      price: 1250,
      image: network1,
      specs: ['Modular 2 EHWIC Slots', 'Hardware VPN', 'Cisco IOS Firewall', 'Gigabit Ethernet', 'IPv4/IPv6 Support']
    },
    {
      id: 'net-34',
      name: 'Cisco WS-C2960X-24PS-L',
      description: '24-Port Gigabit PoE+ managed switch with 370W budget',
      count: 8,
      price: 1899,
      image: network2,
      specs: ['24 PoE+ Ports', '370W Power Budget', '4 SFP Uplinks', 'Stackable', 'L2/L3 Managed']
    },
    {
      id: 'net-35',
      name: 'Cisco WS-C2960+48TC-L',
      description: '48-Port Gigabit switch with dual combo uplinks',
      count: 6,
      price: 1100,
      image: network3,
      specs: ['48 Gigabit Ports', '2 Combo Uplinks', '8K MAC Table', 'QoS Support', 'Energy Efficient']
    },
    {
      id: 'net-36',
      name: 'Cisco Aironet 1602i',
      description: 'Dual-band enterprise wireless access point with MIMO',
      count: 15,
      price: 245,
      image: network4,
      specs: ['Dual-Band 2.4/5GHz', '3x3 MIMO', 'PoE Powered', 'Beamforming', 'WPA2 Security']
    },
    {
      id: 'net-37',
      name: 'Cisco Catalyst 2960-48TC',
      description: 'Reliable 48-Port access switch with dual uplinks',
      count: 12,
      price: 750,
      image: network5,
      specs: ['48 Fast Ethernet Ports', '2 Gigabit Uplinks', 'Port Security', 'VLAN Support', '1U Rack Height']
    },
    {
      id: 'net-38',
      name: 'Cisco Next-Gen Firewall',
      description: 'Enterprise firewall with advanced threat protection',
      count: 4,
      price: 2100,
      image: network6,
      specs: ['IPS Protection', 'SSL Decryption', '8 Gigabit Ports', 'Site-to-Site VPN', 'Cloud Management']
    },
    {
      id: 'net-39',
      name: 'TP-Link Archer A7',
      description: 'Dual-band smart WiFi router with Alexa support',
      count: 25,
      price: 89,
      image: network7,
      specs: ['1750 Mbps Speed', '4 Gigabit LAN', '3 High-Gain Antennas', 'Alexa Ready', 'Tether App Control']
    },
    {
      id: 'net-40',
      name: 'Ubiquiti UniFi 6 AP',
      description: 'Enterprise WiFi 6 access point with mesh technology',
      count: 10,
      price: 199,
      image: network8,
      specs: ['WiFi 6 Standard', '2.4 Gbps Speed', '4x4 MIMO', 'Mesh Ready', 'PoE+ Support']
    }
  ]
},
  "CablesConnectors": {
  name: 'Cables & Connectors',
  products: [
    {
      id: 'cable-03',
      name: 'Ultra High Speed HDMI 2.1',
      description: 'Certified 8K HDMI cable for high-end graphics and gaming consoles.',
      count: 45,
      price: 35,
      image: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['8K@60Hz / 4K@120Hz', '48Gbps Bandwidth', 'Dynamic HDR', 'eARC Support', '2m Braided']
    },
    {
      id: 'cable-04',
      name: 'Cat8 Ethernet Cable (2000MHz)',
      description: 'The fastest copper networking cable for data centers and high-speed office backbones.',
      count: 60,
      price: 25,
      image: 'https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['40Gbps Speed', '2000MHz Frequency', 'S/FTP Shielded', 'Gold Plated RJ45', 'Weatherproof']
    },
    {
      id: 'cable-05',
      name: 'DisplayPort 1.4 to HDMI 2.1',
      description: 'Active adapter cable for connecting high-end Workstations to 4K monitors.',
      count: 30,
      price: 45,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['4K@144Hz Support', 'Uni-directional', 'Zinc Alloy Shell', 'Multi-layer Shielding', 'Plug & Play']
    },
    {
      id: 'cable-06',
      name: 'OM4 Multimode Fiber Patch',
      description: 'Aqua-jacketed high-speed fiber for local network switch linking.',
      count: 25,
      price: 55,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['10G/40G/100G Ready', 'LC-LC Duplex', '50/125 Micron', 'Low Insertion Loss', '3m Length']
    },
    {
      id: 'cable-07',
      name: 'USB-C Thunderbolt 4 Cable',
      description: 'The "everything cable" for power, data, and 8K video output.',
      count: 20,
      price: 75,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['40Gbps Data Transfer', '100W Power Delivery', 'Dual 4K Monitor Support', 'Intel Certified', '1m Length']
    },
    {
      id: 'cable-08',
      name: 'Industrial DB9 Serial to USB',
      description: 'Essential connector for configuring Cisco routers and industrial machinery.',
      count: 15,
      price: 30,
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['FTDI Chipset', 'RS232 Standard', 'Windows/Mac/Linux', 'Baud rate up to 1Mbps', '1.8m Length']
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
        id: 'biz-2026-1',
        name: 'Epson EB-X49 (2026 Edition)',
        description: 'The industry standard for Ethiopian offices; known for durability and high bulb life.',
        count: 15,
        price: 85000,
        image: 'https://images.pexels.com/photos/7677248/pexels-photo-7677248.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['3600 Lumens', 'XGA Resolution', '12,000h Lamp Life', 'Horizontal Keystone']
      },
      {
        id: 'biz-2026-2',
        name: 'ViewSonic PA503S High Brightness',
        description: 'Best-selling value projector for schools and NGOs in Addis Ababa.',
        count: 22,
        price: 48500,
        image: 'https://images.pexels.com/photos/7677249/pexels-photo-7677249.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4000 Lumens', 'SuperColor Tech', '15,000h Eco Mode', 'VGA/HDMI']
      },
      {
        id: 'biz-2026-3',
        name: 'Nebula Cosmos 4K SE',
        description: 'Premium laser projector for high-end executive boardrooms.',
        count: 5,
        price: 155000,
        image: 'https://images.pexels.com/photos/159211/headset-earphones-electronics-communications-159211.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['1800 ANSI Lumens', '4K UHD', 'Dolby Digital Plus', 'Android TV 11']
      }
    ]
  },

  "HomeCinemaProjector": {
    name: 'Home Cinema Projector',
    products: [
      {
        id: 'home-2026-1',
        name: 'Samsung The Freestyle 2nd Gen',
        description: 'The most famous lifestyle projector; 180-degree rotation for ceiling movies.',
        count: 12,
        price: 68000,
        image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Full HD 1080p', 'Smart Calibration', '360 Sound', 'Gaming Hub']
      },
      {
        id: 'home-2026-2',
        name: 'Hisense C2 Ultra Triple Laser',
        description: 'Premium "Laser TV" experience with incredible color for home theaters.',
        count: 4,
        price: 245000,
        image: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['3000 ANSI Lumens', '4K UHD', '110% BT.2020 Color', 'JBL Audio']
      },
      {
        id: 'home-2026-3',
        name: 'HY300 PRO Smart Projector',
        description: 'The most popular budget smart projector in the Ethiopian market.',
        count: 50,
        price: 14500,
        image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['720p Native (4K Support)', 'Android 13', '180° Rotatable', 'WiFi 6']
      }
    ]
  },

  "PortableProjector": {
    name: 'Portable Projector',
    products: [
      {
        id: 'port-2026-1',
        name: 'Borrego Smart 6 Mini',
        description: 'Top-trending portable Android projector in Addis Ababa electronics shops.',
        count: 35,
        price: 18500,
        image: 'https://images.pexels.com/photos/5077055/pexels-photo-5077055.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Android OS', 'Battery & Plug', 'Screen Mirroring', 'Compact Design']
      },
      {
        id: 'port-2026-2',
        name: 'Nebula Capsule 3 Laser',
        description: 'Soda-can sized high-tech laser projector for camping and travel.',
        count: 10,
        price: 92000,
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Laser Engine', '1080p', 'Built-in 2.5h Battery', '8W Speaker']
      },
      {
        id: 'port-2026-3',
        name: 'XGIMI MoGo 3 Pro',
        description: 'Elegant portable with integrated gimbal stand and Harman Kardon sound.',
        count: 8,
        price: 74000,
        image: 'https://images.pexels.com/photos/632125/pexels-photo-632125.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['450 ISO Lumens', 'ISA 2.0 Tech', 'Google TV', 'Metal Build']
      }
    ]
  },

  "ShortThrowProjector": {
    name: 'Short-Throw Projector',
    products: [
      {
        id: 'short-2026-1',
        name: 'Epson EpiqVision Ultra LS800',
        description: 'Ultra Short Throw that can sit just 10cm from the wall for a 100-inch screen.',
        count: 6,
        price: 410000,
        image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4000 Lumens', '4K PRO-UHD', 'Yamaha 2.1 Sound', '0.16 Throw Ratio']
      },
      {
        id: 'short-2026-2',
        name: 'BenQ X500i Gaming UST',
        description: 'Designed for Xbox/PS5 gamers; massive screen in tiny Addis bedrooms.',
        count: 3,
        price: 185000,
        image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['2200 ANSI Lumens', '4K HDR', '4ms Low Latency', 'Short Throw']
      },
      {
        id: 'short-2026-3',
        name: 'Hisense PX3-PRO Laser TV',
        description: 'The ultimate TV replacement with Triple Laser technology.',
        count: 2,
        price: 395000,
        image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['3000 Lumens', 'Dolby Vision', 'Google TV', 'Xbox Certified']
      }
    ]
  },

  "ProjectorAccessories": {
    name: 'Projector Accessories',
    products: [
      {
        id: 'acc-2026-1',
        name: 'Motorized 120-inch 4K Screen',
        description: 'Remote-controlled electric screen for professional setups.',
        count: 20,
        price: 42000,
        image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['120" Diagonal', 'RF Remote', 'Matte White 1.1 Gain', 'Quiet Motor']
      },
      {
        id: 'acc-2026-2',
        name: 'Universal Ceiling Hanger (1-Meter)',
        description: 'Heavy-duty steel mount for all major projector brands.',
        count: 100,
        price: 5500,
        image: 'https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Extendable 50-100cm', 'White Powder Coat', '30° Tilt', '360° Swivel']
      },
      {
        id: 'acc-2026-3',
        name: 'Ambient Light Rejecting (ALR) Fixed Screen',
        description: 'Special screen for using laser projectors in bright rooms.',
        count: 5,
        price: 58000,
        image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['100-inch Fixed', 'Thin Bezel', '90% Light Rejection', 'Enhances Contrast']
      }
    ]
  },

// ========== PRINTER SUBCATEGORIES ==========
  InkjetPrinter: {
    name: "Inkjet Printer",
    products: [
      {
        id: "inkjet-1",
        name: "HP DeskJet 2855e",
        description: "Affordable all-in-one inkjet printer for home use with wireless connectivity",
        count: 30,
        price: 89,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Inkjet Multifunction", "Print/Copy/Scan", "WiFi & Bluetooth", "HP Smart App", "Auto 2-Sided Printing", "60-Sheet Input Tray"],
      
      },
      {
        id: "inkjet-2",
        name: "Epson EcoTank ET-3252",
        description: "Cartridge-free all-in-one with massive page yield and ultra-low cost per page",
        count: 22,
        price: 299,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["EcoTank Inkjet System", "Print/Copy/Scan", "7,500 Pages Black Yield", "WiFi Direct", "1.44\" Color LCD", "Auto 2-Sided Printing"],
  
      },
      {
        id: "inkjet-3",
        name: "Canon PIXMA G3270",
        description: "MegaTank all-in-one printer with high-volume ink tanks for low-cost printing",
        count: 18,
        price: 229,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["MegaTank Ink System", "Print/Copy/Scan", "6,000 Pages Black", "WiFi & USB", "Borderless Photo Printing", "Rear Paper Feed"],
      
      },
      {
        id: "inkjet-4",
        name: "HP Envy Inspire 7955e",
        description: "Premium home inkjet with photo-quality output and smart features",
        count: 15,
        price: 199,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Print/Copy/Scan", "Auto 2-Sided Printing", "Photo Tray Included", "2.7\" Touchscreen", "HP+ Smart Printing", "Self-Healing WiFi"],
     
      },
      {
        id: "inkjet-5",
        name: "Epson Expression Home XP-4200",
        description: "Compact wireless all-in-one with voice-activated printing",
        count: 25,
        price: 99,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Print/Copy/Scan", "WiFi & WiFi Direct", "2.4\" LCD Screen", "Auto 2-Sided Printing", "Voice Activated", "100-Sheet Rear Tray"],
  
      },
      {
        id: "inkjet-6",
        name: "Canon PIXMA TR8620a",
        description: "All-in-one inkjet with fax, ADF and versatile connectivity for home office",
        count: 12,
        price: 249,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Print/Copy/Scan/Fax", "20-Sheet ADF", "4.3\" Touchscreen", "Dual Paper Trays", "Ethernet/WiFi/USB", "Auto 2-Sided Printing"],
 
      },
      {
        id: "inkjet-7",
        name: "Brother INKvestment MFC-J1205W",
        description: "Budget-friendly cartridge-based inkjet with high-yield inks",
        count: 20,
        price: 149,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Print/Copy/Scan", "High-Yield Cartridges", "WiFi & Mobile Print", "150-Sheet Tray", "1-Year Ink Included", "Compact Design"],
  
      },
    ],
  },
  LaserPrinter: {
    name: "Laser Printer",
    products: [
      {
        id: "laser-1",
        name: "HP LaserJet Pro 4303dw",
        description: "Color laser all-in-one with advanced security and mobile printing",
        count: 18,
        price: 699,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Color Laser Multifunction", "Print/Copy/Scan", "35 PPM", "Auto Duplex", "WiFi/Ethernet/USB", "4.3\" Touchscreen"],
       
      },
      {
        id: "laser-2",
        name: "HP 137fnw Printer",
        description: "Compact laser multifunction printer with fax and wireless connectivity",
        count: 25,
        price: 349,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser MFP", "Print/Copy/Scan/Fax", "20 PPM", "WiFi & Ethernet", "150-Sheet Input", "Manual Duplex"],
   
      },
      {
        id: "laser-3",
        name: "Brother HL-L2460DW",
        description: "Reliable monochrome laser printer with fast duplex printing",
        count: 30,
        price: 199,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "36 PPM", "Auto Duplex", "WiFi/USB", "250-Sheet Tray", "High-Yield Toner Ready"],
      
      },
      {
        id: "laser-4",
        name: "Canon imageCLASS LBP236dw",
        description: "Compact mono laser with mobile-ready wireless and fast output",
        count: 20,
        price: 249,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "40 PPM", "Auto Duplex", "WiFi Direct", "250-Sheet Cassette", "5-Line LCD"],

      },
      {
        id: "laser-5",
        name: "HP Color LaserJet Pro M255dw",
        description: "Fast color laser with best-in-class security for small teams",
        count: 15,
        price: 399,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Color Laser", "22 PPM", "Auto Duplex", "WiFi/Ethernet", "250-Sheet Tray", "2.7\" Touchscreen"],
 
      },
      {
        id: "laser-6",
        name: "Lexmark MS631dw",
        description: "Enterprise mono laser with heavy-duty cycle and cloud connectivity",
        count: 10,
        price: 549,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "50 PPM", "Auto Duplex", "WiFi/Ethernet/USB", "550-Sheet Tray", "Cloud Fax Ready"],
 
      },
      {
        id: "laser-7",
        name: "Samsung Xpress M2835DW",
        description: "Affordable mono laser with NFC tap-to-print technology",
        count: 22,
        price: 179,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "29 PPM", "Auto Duplex", "NFC Printing", "WiFi Direct", "250-Sheet Tray"],
      },
    ],
  },
  AllinOnePrinter: {
    name: "All-in-One Printer",
    products: [
      {
        id: "aio-1",
        name: "Canon Machine IR 2425i",
        description: "A3 monochrome laser multifunction printer for small to medium offices",
        count: 12,
        price: 1899,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Monochrome Laser MFP", "Print/Copy/Scan (Color Scan)", "25 PPM", "Duplex Printing", "Network Ready", "600x600 dpi", "USB/Ethernet", "550-Sheet Cassette"],
  
      },
      {
        id: "aio-2",
        name: "Canon Machine C3326i",
        description: "A3 color laser multifunction printer with 26ppm speed and advanced security",
        count: 8,
        price: 3499,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Color Laser Multifunctional", "Print/Copy/Scan/Send (Optional Fax)", "26 PPM Color & B/W", "Duplex & DADF", "7\" Touchscreen", "Secure Print", "WiFi/Ethernet/USB", "1200x1200 dpi", "550-Sheet Cassette x2", "Advanced Security Suite", "Cloud Connect Ready", "Mobile Print Support", "PDF/XPS Direct Print", "Dept. ID Management", "Universal Print Ready"],
  
      },
      {
        id: "aio-3",
        name: "Canon Machine 2945i",
        description: "High-speed A3 multifunction printer with 45ppm output for busy offices",
        count: 6,
        price: 2999,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Monochrome Laser MFP", "45 PPM Print Speed", "Duplex & RADF", "7\" Touchscreen", "Network Ready", "1200x1200 dpi", "550-Sheet Cassette x2", "Secure Print", "Cloud Ready"],
  
      },
      {
        id: "aio-4",
        name: "HP LaserJet Pro MFP M428fdw",
        description: "Advanced monochrome laser all-in-one with fax and enhanced security",
        count: 20,
        price: 549,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser MFP", "Print/Copy/Scan/Fax", "40 PPM", "Auto Duplex", "50-Sheet ADF", "2.7\" Touchscreen", "WiFi/Ethernet/USB", "250-Sheet Tray"],
  
      },
      {
        id: "aio-5",
        name: "Brother MFC-L8900CDW",
        description: "Business color laser all-in-one with advanced paper handling",
        count: 10,
        price: 799,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Color Laser MFP", "Print/Copy/Scan/Fax", "33 PPM", "Auto Duplex", "70-Sheet ADF", "WiFi/NFC/USB", "5\" Touchscreen", "250-Sheet Tray"],

      },
      {
        id: "aio-6",
        name: "Epson WorkForce Pro WF-4830",
        description: "Precision Core inkjet all-in-one for productive small workgroups",
        count: 15,
        price: 299,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["PrecisionCore Inkjet MFP", "Print/Copy/Scan/Fax", "25 PPM", "Auto Duplex", "50-Sheet ADF", "4.3\" Touchscreen", "WiFi/Ethernet/USB", "500-Sheet Capacity"],
      
      },
    ],
  },
  Scanners: {
    name: "Scanners",
    products: [
      {
        id: "scan-1",
        name: "Fujitsu ScanSnap iX1600",
        description: "High-speed wireless document scanner with touchscreen",
        count: 15,
        price: 449,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["40 PPM / 80 IPM", "Duplex Scanning", "50-Sheet ADF", "4.3\" Touchscreen", "WiFi/USB", "Cloud Direct Connect"],
    
      },
      {
        id: "scan-2",
        name: "Epson DS-530 II",
        description: "Color duplex document scanner with superior paper handling",
        count: 20,
        price: 379,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["35 PPM / 70 IPM", "Duplex Color", "50-Sheet ADF", "USB 3.0", "Twain/ISIS Support", "600 dpi Optical"],
   
      },
      {
        id: "scan-3",
        name: "Canon imageFORMULA DR-C225 II",
        description: "Compact desktop scanner with reliable feeding for mixed documents",
        count: 18,
        price: 329,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["25 PPM / 50 IPM", "Duplex Scanning", "30-Sheet Feeder", "USB 2.0", "CaptureOnTouch Software", "Compact Design"],
    
      },
      {
        id: "scan-4",
        name: "Brother ADS-4700W",
        description: "Professional wireless desktop scanner with high-speed duplex",
        count: 10,
        price: 499,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["40 PPM / 80 IPM", "Duplex Scanning", "80-Sheet ADF", "WiFi/Ethernet/USB", "4.3\" Touchscreen", "Scan to Cloud"],
      
      },
      {
        id: "scan-5",
        name: "Epson Perfection V600 Photo",
        description: "Flatbed photo scanner with film scanning capability",
        count: 25,
        price: 279,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["6400 dpi Optical", "Flatbed A4", "Film & Slide Holder", "USB 2.0", "Digital ICE Technology", "ReadyScan LED"],
     
      },
      {
        id: "scan-6",
        name: "Fujitsu ScanSnap iX100",
        description: "Ultra-portable battery-powered scanner for mobile professionals",
        count: 35,
        price: 229,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["5.2 sec/page", "Battery Powered", "WiFi & USB", "260g Ultra-Light", "GI Microprocessor", "Cloud Sync Ready"],
  
      },
    ],
  },
  PrinterAccessories: {
    name: "Printer Accessories",
    products: [
      {
        id: "acc-1",
        name: "HP 206A Toner Cartridge Set",
        description: "Original HP CMYK toner set for Color LaserJet Pro series",
        count: 50,
        price: 299,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "1,350 Pages Each", "Original HP", "LaserJet Compatible", "Smart Print Technology", "Easy Install"],
  
      },
      {
        id: "acc-2",
        name: "A4 Copy Paper Premium 5-Ream",
        description: "High-quality 80 GSM A4 paper, 2500 sheets for everyday printing",
        count: 200,
        price: 39,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["2500 Sheets (5 Reams)", "A4 Size", "80 GSM", "Bright White 104", "Acid Free", "Laser & Inkjet Compatible"],
    
      },
      {
        id: "acc-3",
        name: "USB Printer Cable 3m",
        description: "High-speed USB 2.0 A to B printer cable for reliable connection",
        count: 100,
        price: 12,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["USB 2.0 A-to-B", "3 Meter Length", "Gold Plated", "480 Mbps", "Universal Fit", "Shielded Cable"],

      },
      {
        id: "acc-4",
        name: "Printer Stand with Storage",
        description: "Rolling printer cart with paper storage shelf and cable management",
        count: 30,
        price: 89,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["2-Tier Design", "Rolling Casters", "Paper Storage Shelf", "Cable Management", "80 kg Capacity", "Steel Frame"],
  
      },
      {
        id: "acc-5",
        name: "Canon PG-245XL/CL-246XL Combo",
        description: "High-yield black and color ink cartridge combo pack for PIXMA printers",
        count: 45,
        price: 59,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black + Color Combo", "High Yield XL", "Original Canon", "PIXMA Compatible", "FINE Technology", "Easy Install"],
  
      },
      {
        id: "acc-6",
        name: "Wireless Print Server",
        description: "Share any USB printer over WiFi network with multiple devices",
        count: 20,
        price: 79,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["WiFi 802.11n", "USB 2.0 Port", "Multi-User Support", "Easy Web Setup", "Windows/Mac/Linux", "Compact Design"],
      },
    ],
  },
  DocumentPrinter: {
    name: "Document Printer",
    products: [
      {
        id: "doc-1",
        name: "HP LaserJet Enterprise M611dn",
        description: "High-speed enterprise mono laser with robust security features",
        count: 10,
        price: 899,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "65 PPM", "Auto Duplex", "Ethernet/USB", "550-Sheet Tray", "HP Sure Start Security"],

      },
      {
        id: "doc-2",
        name: "Xerox VersaLink B410DN",
        description: "Business mono laser with cloud connectivity and app-based workflow",
        count: 12,
        price: 549,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "50 PPM", "Auto Duplex", "WiFi/Ethernet", "550-Sheet Tray", "Xerox ConnectKey"],
    
      },
      {
        id: "doc-3",
        name: "Brother HL-L6400DW",
        description: "Workgroup mono laser with massive paper capacity and fast output",
        count: 8,
        price: 699,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "52 PPM", "Auto Duplex", "WiFi/Ethernet/USB", "570-Sheet Standard", "Up to 1610 Sheets"],
      },
      {
        id: "doc-4",
        name: "Canon imageCLASS LBP674Cdw",
        description: "Fast color laser with vibrant output for document-heavy offices",
        count: 14,
        price: 499,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Color Laser", "35 PPM", "Auto Duplex", "WiFi/Ethernet", "250-Sheet Cassette", "5\" Touchscreen"],
    
      },
      {
        id: "doc-5",
        name: "Lexmark B3442dw",
        description: "Compact mono laser ideal for small workgroups needing reliable output",
        count: 20,
        price: 249,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "42 PPM", "Auto Duplex", "WiFi/USB", "250-Sheet Tray", "Eco-Mode"],
      },
      {
        id: "doc-6",
        name: "Kyocera ECOSYS P3145dn",
        description: "Long-life mono laser with ultra-low running costs",
        count: 10,
        price: 599,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Monochrome Laser", "45 PPM", "Auto Duplex", "Ethernet/USB", "500-Sheet Tray", "100,000 Monthly Duty"],
      },
    ],
  },
  LargeFormatPrinter: {
    name: "Large Format Printer",
    products: [
      {
        id: "lf-1",
        name: "HP DesignJet T250 24\"",
        description: "Compact large-format printer for CAD and GIS applications",
        count: 8,
        price: 1099,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["24\" Wide Format", "Inkjet Technology", "WiFi/Ethernet/USB", "76 A1 Prints/Hour", "Auto Sheet Feeder", "HP Smart App"],
      
      },
      {
        id: "lf-2",
        name: "Canon imagePROGRAF TM-300",
        description: "36-inch large format printer for posters, CAD, and technical drawings",
        count: 5,
        price: 2299,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["36\" Wide Format", "5-Color Pigment Ink", "WiFi/Ethernet/USB", "3\" Touchscreen", "Hot-Swap Ink Tanks", "PosterArtist Lite"],
      
      },
      {
        id: "lf-3",
        name: "Epson SureColor T3475",
        description: "24-inch wireless wide-format printer for construction & architecture",
        count: 6,
        price: 1599,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["24\" Wide Format", "4-Color UltraChrome XD2", "WiFi/Ethernet", "4.3\" Touchscreen", "Auto Cutter", "Roll & Cut Sheet"],
       
      },
      {
        id: "lf-4",
        name: "HP DesignJet T650 36\"",
        description: "Space-saving 36-inch printer with 25-second D/A1 output",
        count: 4,
        price: 2499,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["36\" Wide Format", "25 sec/A1 Page", "WiFi/Ethernet/USB", "HP Click Software", "Auto Sheet Feeder", "Compact Stand"],
      
      },
      {
        id: "lf-5",
        name: "Canon imagePROGRAF PRO-1000",
        description: "17-inch professional photo printer with 12-color LUCIA PRO ink",
        count: 7,
        price: 1299,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["17\" Format", "12-Color LUCIA PRO", "WiFi/Ethernet/USB", "3\" LCD", "Vacuum Feeding System", "ICC Profile Support"],
     
      },
      {
        id: "lf-6",
        name: "Epson SureColor P900",
        description: "17-inch pro photo printer with UltraChrome PRO10 10-color ink",
        count: 5,
        price: 1199,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["17\" Format", "10-Color UltraChrome PRO10", "WiFi/Ethernet/USB", "4.3\" Touchscreen", "Carbon Black Ink", "Roll Paper Support"],
      
      },
    ],
  },
  IDCardPrinter: {
    name: "ID Card Printer",
    products: [
      {
        id: "id-1",
        name: "Fargo DTC1250e",
        description: "Single-sided direct-to-card printer for basic ID card needs",
        count: 15,
        price: 1199,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Single-Sided", "300 dpi", "USB Connection", "100 Card Hopper", "16 sec/card Color", "Edge-to-Edge Printing"],
      
      },
      {
        id: "id-2",
        name: "Zebra ZC300",
        description: "Dual-sided ID card printer with fast print speed and USB/Ethernet",
        count: 10,
        price: 1899,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Dual-Sided", "300 dpi", "USB/Ethernet", "200 Card Hopper", "10 sec/card Mono", "Smart Card Encoding"],
    
      },
      {
        id: "id-3",
        name: "Magicard 600",
        description: "Retransfer ID card printer with Holokote anti-counterfeit feature",
        count: 8,
        price: 2499,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Retransfer Technology", "600 dpi", "USB/Ethernet", "Holokote Watermark", "100 Card Hopper", "Dual-Sided Option"],
     
      },
      {
        id: "id-4",
        name: "Evolis Primacy 2",
        description: "High-performance dual-sided card printer for medium volume",
        count: 12,
        price: 2199,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Dual-Sided", "300 dpi", "USB/Ethernet/WiFi", "100 Card Feeder", "225 cards/hour", "Encoding Options"],
     
      },
      {
        id: "id-5",
        name: "Fargo HDP5000",
        description: "Retransfer printer for over-the-edge high-definition printing",
        count: 6,
        price: 3299,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["HDP Retransfer", "300 dpi", "USB/Ethernet", "200 Card Hopper", "Dual-Sided Standard", "Magnetic/Smart Encoding"],
      
      },
      {
        id: "id-6",
        name: "Zebra ZC100",
        description: "Entry-level single-sided card printer for basic ID and access cards",
        count: 20,
        price: 799,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Single-Sided", "300 dpi", "USB Connection", "100 Card Input", "Direct-to-Card", "Compact Design"],
     
      },
    ],
  },
  POSPrinter: {
    name: "POS Printer",
    products: [
      {
        id: "pos-1",
        name: "Epson TM-T88VI",
        description: "Industry-leading thermal receipt printer for retail and hospitality",
        count: 30,
        price: 449,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Receipt", "350 mm/sec", "USB/Ethernet/Serial", "Auto Cutter", "NFC Pairing", "Paper Saving Mode"],
     
      },
      {
        id: "pos-2",
        name: "Star TSP143IV",
        description: "Cloud-ready thermal receipt printer with multiple interfaces",
        count: 25,
        price: 399,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Receipt", "250 mm/sec", "WiFi/USB/Ethernet", "Auto Cutter", "CloudPRNT", "Splash-Proof"],
       
      },
      {
        id: "pos-3",
        name: "Bixolon SRP-350plusV",
        description: "High-speed POS receipt printer with advanced connectivity",
        count: 20,
        price: 349,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Receipt", "300 mm/sec", "USB/Ethernet", "Auto Cutter", "80mm Width", "Drop-In Paper Load"],
      
      },
      {
        id: "pos-4",
        name: "Citizen CT-S310II",
        description: "Reliable dual-interface thermal receipt printer for POS systems",
        count: 22,
        price: 279,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Receipt", "160 mm/sec", "USB/Serial", "Auto Cutter", "Compact Body", "Easy Maintenance"],
       
      },
      {
        id: "pos-5",
        name: "Epson TM-M30II",
        description: "Compact tablet-compatible receipt printer for modern POS setups",
        count: 18,
        price: 399,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Receipt", "250 mm/sec", "WiFi/Bluetooth/USB", "Auto Cutter", "Tablet Linking", "Top or Front Exit"],
      
      },
      {
        id: "pos-6",
        name: "Star mC-Print3",
        description: "Future-proof POS printer with all-in-one connectivity hub",
        count: 14,
        price: 499,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Receipt", "250 mm/sec", "USB-C/LAN/BT/WiFi", "Auto Cutter", "Peripheral Hub", "SteadyLAN Ethernet"],
      
      },
    ],
  },
  LabelPrinter: {
    name: "Label Printer",
    products: [
      {
        id: "label-1",
        name: "Zebra ZD421",
        description: "Desktop thermal transfer label printer for retail and healthcare",
        count: 20,
        price: 499,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Transfer/Direct", "4\" Print Width", "203 dpi", "USB/Ethernet/BT", "152 mm/sec", "Peeler Option"],
      
      },
      {
        id: "label-2",
        name: "Brother QL-820NWB",
        description: "Professional wireless label printer with color display",
        count: 25,
        price: 299,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Direct Thermal", "2.4\" Width", "300 dpi", "WiFi/BT/USB", "Color LCD", "Auto Cutter"],
      
      },
      {
        id: "label-3",
        name: "DYMO LabelWriter 550 Turbo",
        description: "High-speed USB/LAN label printer for shipping and organization",
        count: 30,
        price: 199,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Direct Thermal", "2.2\" Width", "300 dpi", "USB/Ethernet", "71 Labels/Minute", "No Ink Required"],
     
      },
      {
        id: "label-4",
        name: "TSC TE210",
        description: "Versatile desktop barcode label printer for warehouse and logistics",
        count: 18,
        price: 349,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Transfer/Direct", "4.25\" Width", "203 dpi", "USB/Ethernet/Serial", "152 mm/sec", "5\" Roll Capacity"],
      
      },
      {
        id: "label-5",
        name: "Zebra ZT411",
        description: "Industrial mid-range label printer for manufacturing and logistics",
        count: 8,
        price: 1299,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Industrial Thermal", "4\" Width", "300 dpi", "USB/ETH/BT/WiFi", "356 mm/sec", "Color Touchscreen"],
      
      },
      {
        id: "label-6",
        name: "Honeywell PC42t",
        description: "Affordable compact label printer for light-duty applications",
        count: 22,
        price: 249,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Thermal Transfer/Direct", "4\" Width", "203 dpi", "USB/Ethernet", "100 mm/sec", "Easy Load Design"],
      
      },
    ],
  },
  Photocopier: {
    name: "Photocopier",
    products: [
      {
        id: "copier-1",
        name: "Canon imageRUNNER 2630i",
        description: "A3 monochrome multifunction copier for medium workgroups",
        count: 8,
        price: 2499,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Mono Copier", "30 PPM", "Print/Copy/Scan", "Duplex & DADF", "7\" Touchscreen", "Secure Print"],
      
      },
      {
        id: "copier-2",
        name: "Ricoh IM C3010",
        description: "A3 color multifunction copier with smart operation panel",
        count: 5,
        price: 4299,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Color Copier", "30 PPM", "Print/Copy/Scan/Fax", "Auto Duplex", "10.1\" Smart Panel", "Cloud & Mobile Ready"],
     
      },
      {
        id: "copier-3",
        name: "Konica Minolta bizhub C250i",
        description: "A3 color MFP with AI-powered workflow and robust security",
        count: 6,
        price: 3999,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Color MFP", "25 PPM", "Print/Copy/Scan/Fax", "Auto Duplex", "10.1\" Panel", "MarketPlace Apps"],
      
      },
      {
        id: "copier-4",
        name: "Xerox AltaLink C8155",
        description: "A3 color multifunction printer with ConnectKey technology",
        count: 4,
        price: 5999,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Color MFP", "55 PPM", "Print/Copy/Scan/Fax", "Auto Duplex", "10\" Touchscreen", "ConnectKey Apps"],
      
      },
      {
        id: "copier-5",
        name: "Sharp MX-3071",
        description: "A3 color MFP with advanced document management",
        count: 7,
        price: 3499,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Color MFP", "30 PPM", "Print/Copy/Scan/Fax", "Auto Duplex", "10.1\" Touchscreen", "Cloud Portal Office"],
      
      },
      {
        id: "copier-6",
        name: "Canon imageRUNNER ADVANCE DX 6780i",
        description: "High-volume A3 mono copier for large enterprise departments",
        count: 3,
        price: 8999,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["A3 Mono MFP", "80 PPM", "Print/Copy/Scan/Fax", "Auto Duplex", "10.1\" Touchscreen", "Advanced Security"],
    
      },
    ],
  },
  Toner: {
    name: "Toner",
    products: [
      {
        id: "toner-1",
        name: "HP 58A Black LaserJet Toner",
        description: "Original HP black toner for LaserJet Pro M404/MFP M428 series",
        count: 60,
        price: 89,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black Toner", "3,000 Pages", "Original HP", "LaserJet Compatible", "JetIntelligence", "Anti-Fraud Tech"],
      
      },
      {
        id: "toner-2",
        name: "Canon 055H High-Yield CMYK Set",
        description: "High-capacity 4-color toner set for imageCLASS MF740/LBP660 series",
        count: 25,
        price: 399,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "High Yield", "Original Canon", "5,900 Pages Black", "imageCLASS Compatible", "Genuine Cartridge"],
      
      },
      {
        id: "toner-3",
        name: "Brother TN-760 High Yield",
        description: "High-yield black toner for Brother HL-L2390DW/MFC-L2710DW",
        count: 40,
        price: 69,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black Toner", "3,000 Pages", "Original Brother", "High Yield", "Easy Install", "Recycling Program"],
       
      },
      {
        id: "toner-4",
        name: "Samsung MLT-D116L",
        description: "High-yield toner for Xpress M2625/M2675/M2875 series",
        count: 35,
        price: 79,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black Toner", "3,000 Pages", "Original Samsung", "High Yield", "Xpress Compatible", "Easy Install"],
       
      },
      {
        id: "toner-5",
        name: "Lexmark 56F1H00 High Yield",
        description: "High-yield return program toner for MS/MX 321/421/521 series",
        count: 20,
        price: 149,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black Toner", "15,000 Pages", "Original Lexmark", "High Yield", "Return Program", "Unison Technology"],
      
      },
      {
        id: "toner-6",
        name: "Kyocera TK-1172",
        description: "Black toner kit for ECOSYS M2640idw/M2540dw printers",
        count: 30,
        price: 59,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black Toner", "7,200 Pages", "Original Kyocera", "ECOSYS Compatible", "Long Life", "Eco-Friendly"],
       
      },
    ],
  },
  InkTankPrinter: {
    name: "Ink Tank Printer",
    products: [
      {
        id: "tank-1",
        name: "Epson EcoTank L3250",
        description: "Wireless ink tank all-in-one with ultra-high page yield",
        count: 25,
        price: 249,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["EcoTank Ink System", "Print/Copy/Scan", "WiFi & WiFi Direct", "4,500 Pages Black", "7,500 Pages Color", "33 PPM Draft"],
      
      },
      {
        id: "tank-2",
        name: "Canon PIXMA G3270",
        description: "MegaTank inkjet for high-volume home and small office printing",
        count: 20,
        price: 229,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["MegaTank System", "Print/Copy/Scan", "WiFi/USB", "6,000 Pages Black", "7,700 Pages Color", "Borderless Photo"],
       
      },
      {
        id: "tank-3",
        name: "HP Smart Tank 615",
        description: "All-in-one ink tank with fax and ADF for productive offices",
        count: 15,
        price: 349,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Smart Tank System", "Print/Copy/Scan/Fax", "WiFi/BT", "35-Sheet ADF", "8,000 Pages Black", "2\" Mono LCD"],
      
      },
      {
        id: "tank-4",
        name: "Brother DCP-T820DW",
        description: "Refill tank all-in-one with auto duplex and WiFi for small offices",
        count: 18,
        price: 299,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Ink Tank System", "Print/Copy/Scan", "Auto Duplex", "WiFi/USB", "6,500 Pages Black", "20-Sheet ADF"],
      
      },
      {
        id: "tank-5",
        name: "Epson EcoTank L5290",
        description: "4-in-1 ink tank with ADF, fax, and Ethernet for busy offices",
        count: 12,
        price: 399,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["EcoTank 4-in-1", "Print/Copy/Scan/Fax", "30-Sheet ADF", "WiFi/Ethernet", "7,500 Pages Black", "1.44\" LCD"],
      
      },
      {
        id: "tank-6",
        name: "Canon PIXMA G7020",
        description: "MegaTank all-in-one with fax, ADF, Ethernet for small workgroups",
        count: 10,
        price: 379,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["MegaTank 4-in-1", "Print/Copy/Scan/Fax", "35-Sheet ADF", "WiFi/Ethernet/USB", "6,000 Pages Black", "Auto Duplex"],
      
      },
    ],
  },
  InkBottle: {
    name: "Ink Bottle",
    products: [
      {
        id: "ink-1",
        name: "Epson 003 Ink Bottle Set (CMYK)",
        description: "Original Epson 4-color ink bottle set for EcoTank printers",
        count: 80,
        price: 39,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "65ml Each Bottle", "Original Epson", "EcoTank Compatible", "Spill-Free Refill", "High Yield"],
       
      },
      {
        id: "ink-2",
        name: "Canon GI-21 Ink Bottle Set",
        description: "Original Canon 4-color ink bottles for MegaTank PIXMA printers",
        count: 60,
        price: 45,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "70ml Each", "Original Canon", "MegaTank Compatible", "Drip-Free Nozzle", "6,000+ Pages Black"],
      
      },
      {
        id: "ink-3",
        name: "HP GT52/GT53XL Ink Set",
        description: "Original HP ink bottles for Smart Tank series printers",
        count: 50,
        price: 49,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black + 3 Color", "GT53XL 135ml Black", "GT52 70ml Color", "Smart Tank Compatible", "Spill-Free Design", "Original HP"],
     
      },
      {
        id: "ink-4",
        name: "Brother BTD60BK/BT5000 Set",
        description: "Original Brother ink bottle set for DCP/MFC ink tank printers",
        count: 55,
        price: 35,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black + 3 Color", "108ml Black", "48.8ml Each Color", "Original Brother", "DCP/MFC Compatible", "Ultra High Yield"],
     
      },
      {
        id: "ink-5",
        name: "Epson 544 Black Ink Bottle",
        description: "High-capacity single black ink bottle for EcoTank L-series",
        count: 100,
        price: 12,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black Only", "65ml Bottle", "Original Epson", "4,500 Pages Yield", "EcoTank L-Series", "Spill-Free"],
     
      },
      {
        id: "ink-6",
        name: "Canon GI-71 Magenta Ink Bottle",
        description: "Individual magenta ink bottle for Canon MegaTank G-series",
        count: 70,
        price: 10,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Magenta Only", "70ml Bottle", "Original Canon", "7,700 Pages Yield", "G-Series Compatible", "Drip-Free Nozzle"],
      
      },
    ],
  },
  BarcodeScanner: {
    name: "Barcode Scanner",
    products: [
      {
        id: "barcode-1",
        name: "Zebra DS2208",
        description: "Versatile 1D/2D handheld barcode scanner for retail and office",
        count: 30,
        price: 149,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["1D/2D Scanning", "USB Corded", "Omnidirectional", "LED Aiming", "IP42 Rated", "Reads Mobile Screens"],
   
      },
      {
        id: "barcode-2",
        name: "Honeywell Voyager 1472g",
        description: "2D wireless barcode scanner with long-range Bluetooth",
        count: 25,
        price: 229,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["1D/2D Wireless", "Bluetooth 5.0", "10m Range", "USB Cradle", "16hr Battery", "Drop Tested 1.5m"],
     
      },
      {
        id: "barcode-3",
        name: "Datalogic QuickScan QD2590",
        description: "General-purpose 2D imager for retail POS applications",
        count: 20,
        price: 179,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["1D/2D Imager", "USB Corded", "Green Spot Technology", "IP42 Rated", "Multi-Interface", "EASEOFCARE Ready"],
      
      },
      {
        id: "barcode-4",
        name: "Zebra LI4278 Wireless",
        description: "Cordless 1D barcode scanner with Bluetooth for warehouses",
        count: 18,
        price: 299,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["1D Linear Imager", "Bluetooth Wireless", "100m Range", "72hr Battery", "Drop Proof 1.8m", "USB Cradle Included"],
      
      },
      {
        id: "barcode-5",
        name: "Honeywell Granit 1920i",
        description: "Ultra-rugged industrial 2D scanner for harsh environments",
        count: 10,
        price: 499,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["1D/2D Industrial", "USB Corded", "IP65 Rated", "3m Drop Spec", "-30 to 50°C", "DPM Capable"],
        
      },
      {
        id: "barcode-6",
        name: "Socket Mobile S740",
        description: "Pocket-sized 2D Bluetooth scanner for mobile POS and delivery",
        count: 22,
        price: 399,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["1D/2D Pocket Size", "Bluetooth LE", "16hr Battery", "iOS/Android/Win", "53g Ultra-Light", "Antimicrobial"],
     
      },
    ],
  },
  Ribbon: {
    name: "Ribbon",
    products: [
      {
        id: "ribbon-1",
        name: "Zebra 2300 Wax Ribbon",
        description: "Standard wax thermal transfer ribbon for paper labels",
        count: 100,
        price: 19,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Wax Formula", "110mm x 450m", "1\" Core", "CSO Winding", "Paper Labels", "Zebra Printers"],
    
      },
      {
        id: "ribbon-2",
        name: "Zebra 5095 Resin Ribbon",
        description: "Premium resin ribbon for synthetic and polyester labels",
        count: 50,
        price: 39,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Resin Formula", "110mm x 300m", "1\" Core", "Scratch Resistant", "Chemical Resistant", "Synthetic Labels"],
        
      },
      {
        id: "ribbon-3",
        name: "Fargo 045000 YMCKO Ribbon",
        description: "Full-color ribbon for Fargo DTC1250e/4250e ID card printers",
        count: 30,
        price: 79,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["YMCKO Full Color", "250 Prints/Roll", "DTC Series", "ID Card Printing", "Original Fargo", "Easy Load"],
       
      },
      {
        id: "ribbon-4",
        name: "Evolis R2011 YMCKO Ribbon",
        description: "Color ribbon for Evolis Primacy/Zenius card printers",
        count: 25,
        price: 69,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["YMCKO Full Color", "200 Prints/Roll", "Primacy/Zenius", "ID Card Printing", "Original Evolis", "High Quality"],
       
      },
      {
        id: "ribbon-5",
        name: "Zebra i-Series YMCKO Ribbon",
        description: "Color ribbon for Zebra ZC100/ZC300 card printers",
        count: 20,
        price: 89,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["YMCKO Full Color", "200 Prints/Roll", "ZC Series", "True Colours ix", "Original Zebra", "Dual-Sided Ready"],
      
      },
      {
        id: "ribbon-6",
        name: "Armor AWR1 Wax Ribbon",
        description: "Economy wax ribbon compatible with most desktop label printers",
        count: 80,
        price: 15,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Wax Formula", "110mm x 300m", "1\" Core", "Multi-Printer", "Paper Labels", "Economy Grade"],
        
      },
    ],
  },
  Cartridge: {
    name: "Cartridge",
    products: [
      {
        id: "cart-1",
        name: "HP 67XL Black/Color Combo",
        description: "High-yield original ink cartridge combo for DeskJet/Envy series",
        count: 40,
        price: 59,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black + Tri-Color", "High Yield XL", "Original HP", "DeskJet/Envy", "240 Pages Black", "200 Pages Color"],
     
      },
      {
        id: "cart-2",
        name: "Canon PG-275XL/CL-276XL",
        description: "High-yield black and color ink combo for PIXMA TS series",
        count: 35,
        price: 55,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Black + Tri-Color", "High Yield XL", "Original Canon", "PIXMA TS Series", "FINE Technology", "Easy Install"],
       
      },
      {
        id: "cart-3",
        name: "Epson 212XL CMYK Set",
        description: "High-capacity 4-pack ink cartridges for WorkForce/Expression",
        count: 30,
        price: 69,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "High Capacity XL", "Original Epson", "DURABrite Ultra", "WorkForce/XP", "Smudge Resistant"],
     
      },
      {
        id: "cart-4",
        name: "Brother LC3033 Super High Yield Set",
        description: "Super high-yield 4-color ink cartridge set for MFC-J series",
        count: 25,
        price: 89,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "Super High Yield", "Original Brother", "MFC-J Compatible", "1,500 Pages Black", "Innobella Ink"],
       
      },
      {
        id: "cart-5",
        name: "HP 962XL High Yield Set",
        description: "High-yield 4-pack for OfficeJet Pro 9010/9020 series",
        count: 20,
        price: 119,
        image: "https://images.pexels.com/photos/4210472/pexels-photo-4210472.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["CMYK 4-Pack", "High Yield XL", "Original HP", "OfficeJet Pro", "2,000 Pages Black", "PageWide Technology"],
      
      },
      {
        id: "cart-6",
        name: "Canon CLI-281XXL Set",
        description: "Extra high-yield 5-color ink set for PIXMA TS series",
        count: 18,
        price: 99,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["5-Color Pack", "Extra High Yield XXL", "Original Canon", "PIXMA TS/TR", "ChromaLife100+", "Photo Quality"],
     
      },
    ],
  },
  PrinterDrum: {
    name: "Printer Drum",
    products: [
      {
        id: "drum-1",
        name: "Brother DR-730 Drum Unit",
        description: "Original drum unit for Brother HL-L2350DW/MFC-L2710DW series",
        count: 20,
        price: 89,
        image: "https://images.pexels.com/photos/4210471/pexels-photo-4210471.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Drum Unit", "12,000 Pages", "Original Brother", "HL-L/MFC-L Series", "Easy Install", "Separate from Toner"],
    
      },
      {
        id: "drum-2",
        name: "HP 32A Imaging Drum",
        description: "Original imaging drum for LaserJet Pro M203/MFP M227 series",
        count: 15,
        price: 99,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Imaging Drum", "23,000 Pages", "Original HP", "LaserJet Pro", "CF232A", "Consistent Quality"],
     
      },
      {
        id: "drum-3",
        name: "Lexmark 56F0Z00 Drum",
        description: "Return program imaging unit for MS/MX 321/421/521 series",
        count: 12,
        price: 149,
        image: "https://images.pexels.com/photos/4210473/pexels-photo-4210473.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Imaging Unit", "60,000 Pages", "Original Lexmark", "MS/MX Series", "Return Program", "Unison Technology"],
        
      },
      {
        id: "drum-4",
        name: "Kyocera DK-1150 Drum Unit",
        description: "Drum kit for ECOSYS P2235/M2135/M2635/M2735 printers",
        count: 18,
        price: 79,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Drum Kit", "100,000 Pages", "Original Kyocera", "ECOSYS Series", "Long Life", "Easy Replace"],
      },
      {
        id: "drum-5",
        name: "Canon 049 Drum Unit",
        description: "Original drum unit for imageCLASS LBP113w/MF113w series",
        count: 22,
        price: 69,
        image: "https://images.pexels.com/photos/4210470/pexels-photo-4210470.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Drum Unit", "12,000 Pages", "Original Canon", "imageCLASS", "Consistent Output", "Easy Install"],
       
      },
      {
        id: "drum-6",
        name: "Samsung MLT-R116 Imaging Unit",
        description: "Original imaging unit for Xpress M2625/M2675/M2875 series",
        count: 16,
        price: 59,
        image: "https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["Imaging Unit", "9,000 Pages", "Original Samsung", "Xpress Series", "OPC Drum", "Reliable Performance"],
      },
    ],
  },
  PrinterPaper: {
    name: "Printer Paper",
    products: [
      {
        id: "paper-1",
        name: "HP Premium A4 Paper (5 Ream)",
        description: "Premium 80 GSM A4 paper for everyday laser and inkjet printing",
        count: 150,
        price: 35,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["2500 Sheets (5 Reams)", "A4 210x297mm", "80 GSM", "Brightness 166 CIE", "FSC Certified", "Laser & Inkjet"],
      },
      {
        id: "paper-2",
        name: "Canon Glossy Photo Paper GP-701",
        description: "Everyday glossy photo paper for vibrant photo prints",
        count: 80,
        price: 19,
        image: "https://images.pexels.com/photos/159291/pexels-photo-159291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["100 Sheets", "4x6 / A4 Size", "200 GSM Glossy", "Vivid Colors", "Instant Dry", "Inkjet Compatible"],
      },
      {
        id: "paper-3",
        name: "Hammermill Color Copy 28lb",
        description: "Premium heavy-weight paper for color laser presentations",
        count: 60,
        price: 29,
        image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["500 Sheets", "A4 / Letter Size", "105 GSM (28lb)", "100 Brightness", "Acid Free", "Color Laser Optimized"],
      },
      {
        id: "paper-4",
        name: "Epson Premium Matte Presentation",
        description: "Heavy-weight matte paper for professional presentations",
        count: 45,
        price: 25,
        image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["50 Sheets", "A4 / Letter Size", "167 GSM Matte", "Double-Sided", "Presentation Grade", "Inkjet Compatible"],
      },
      {
        id: "paper-5",
        name: "A3 Copy Paper 80 GSM (500 Sheets)",
        description: "Standard A3 multipurpose paper for large format copying",
        count: 40,
        price: 15,
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["500 Sheets", "A3 297x420mm", "80 GSM", "White", "Copier/Laser/Inkjet", "Ream Wrapped"],
      },
      {
        id: "paper-6",
        name: "HP Advanced Glossy Photo Paper",
        description: "Lab-quality glossy photo paper with instant-dry technology",
        count: 55,
        price: 22,
        image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=400",
        specs: ["50 Sheets", "4x6 / A4 Available", "250 GSM Glossy", "Instant Dry", "Smudge Resistant", "Fade Resistant"],
        
      },
    ],
  },
// ========== DIGITAL DISPLAY SUBCATEGORIES ==========

  "DigitalSignage": {
    name: 'Digital Signage',
    products: [
      {
        id: 'az-ds-55',
        name: 'Aztech Digital Signage Display 55"',
        description: 'Ultra-slim professional signage with Android 11 for 24/7 retail use.',
        count: 10,
        price: 145000,
        image: 'https://images.pexels.com/photos/5325617/pexels-photo-5325617.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['55-inch UHD', 'Android 11 Powered', '450 nits Brightness', 'WiFi/LAN CMS']
      },
      {
        id: 'lg-ds-65',
        name: 'LG SM5J Series 65"',
        description: 'High-performance LG webOS signage for welcome screens and ads.',
        count: 8,
        price: 210000,
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch IPS', 'webOS 6.0', 'Bezel-less Design', 'Built-in Speakers']
      },
      {
        id: 'sam-ds-50',
        name: 'Samsung QHB Series 50"',
        description: 'Premium Samsung display with non-glare technology for malls.',
        count: 12,
        price: 165000,
        image: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4K UHD', 'Tizen 6.5', '24/7 Operation', 'Slim Depth']
      },
      {
        id: 'az-ds-43',
        name: 'Aztech Wall-Mount Poster 43"',
        description: 'Digital poster style for restaurant menus and boutique ads.',
        count: 15,
        price: 95000,
        image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['43-inch Portrait', 'Auto-Loop USB', 'Tempered Glass', '1080p']
      },
      {
        id: 'lg-stretch-32',
        name: 'LG Ultra-Stretch 32"',
        description: 'Unique wide aspect ratio for narrow spaces and shelf advertising.',
        count: 5,
        price: 180000,
        image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['32:9 Aspect Ratio', 'Picture-by-Picture', 'LAN Daisy Chain', '700 nits']
      },
      {
        id: 'sam-vhr-55',
        name: 'Samsung Extreme Narrow Bezel',
        description: 'Flagship signage for high-end welcome lobbies.',
        count: 6,
        price: 285000,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['0.44mm Even Bezel', 'Calibration Pro', 'UHD Upscaling', 'Anti-Glare']
      }
    ]
  },

  "LEDVideoWall": {
    name: 'LED Video Wall',
    products: [
      {
        id: 'led-p2-indoor',
        name: 'P2.5 Fine Pitch LED Wall',
        description: 'Seamless indoor LED wall for command centers and luxury stages.',
        count: 4,
        price: 1250000,
        image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['P2.5 Pixel Pitch', 'Gold Wire LED', '3840Hz Refresh', 'Front Service']
      },
      {
        id: 'led-p4-outdoor',
        name: 'P4 Outdoor Advertising Wall',
        description: 'Bright, weatherproof billboard for exterior building ads.',
        count: 3,
        price: 2400000,
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['P4 Pitch', 'IP65 Weatherproof', '6500 nits', 'Remote Control']
      },
      {
        id: 'lg-v-wall-55',
        name: 'LG 55" Video Wall Panel',
        description: '0.88mm ultra-narrow bezel for seamless 4x4 matrix.',
        count: 16,
        price: 320000,
        image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['500 nits', 'FHD per panel', '24/7 Pro Grade', 'IPS Wide View']
      },
      {
        id: 'sam-wall-iwa',
        name: 'Samsung "The Wall" IWA',
        description: 'MicroLED technology for the ultimate executive lobby experience.',
        count: 2,
        price: 5800000,
        image: 'https://images.pexels.com/photos/5325617/pexels-photo-5325617.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['MicroLED Pitch', 'Black Seal Tech', 'AI Processing', 'HDR10+']
      },
      {
        id: 'az-curved-led',
        name: 'Aztech Curved LED Module',
        description: 'Flexible LED modules for creative curved pillars and designs.',
        count: 40,
        price: 45000,
        image: 'https://images.pexels.com/photos/159211/headset-earphones-electronics-communications-159211.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Flexible PCB', 'Magnetic Mount', 'P3 Resolution', 'Custom Shapes']
      },
      {
        id: 'vid-proc-4k',
        name: 'Novastar Video Processor',
        description: 'Central controller for managing large-scale LED screen inputs.',
        count: 10,
        price: 115000,
        image: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4K Input/Output', 'Multi-Window', 'Low Latency', 'Fiber Optic']
      }
    ]
  },

  "InteractiveDisplay": {
    name: 'Interactive Display',
    products: [
      {
        id: 'az-int-65',
        name: 'Aztech 65" Interactive Panel',
        description: 'All-in-one smart board for Ethiopian schools and conference rooms.',
        count: 15,
        price: 185000,
        image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4K UHD Touch', 'Android 11/13', '20 Point Touch', 'Built-in Whiteboard']
      },
      {
        id: 'lg-create-75',
        name: 'LG CreateBoard 75"',
        description: 'Premium interactive display with advanced screen sharing and cloud sync.',
        count: 6,
        price: 380000,
        image: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['75-inch UHD', 'LG ConnectedCare', 'USB-C DP Alt', 'Optional Slot-PC']
      },
      {
        id: 'sam-flip-85',
        name: 'Samsung Flip Pro 85"',
        description: 'The world-famous digital flipchart for high-end corporate brainstorming.',
        count: 4,
        price: 520000,
        image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['85-inch 4K', 'Writing latency 26ms', 'SmartView+', 'AirPlay 2']
      },
      {
        id: 'az-int-86',
        name: 'Aztech 86" Giant Interactive Display',
        description: 'Massive touch display for large auditoriums and lecture halls.',
        count: 5,
        price: 345000,
        image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['86-inch UHD', 'Dual OS (Win/Android)', 'Anti-glare Glass', '13MP Camera']
      },
      {
        id: 'lg-int-55',
        name: 'LG One:Quick Works 55"',
        description: 'Professional video conferencing display with built-in 4K camera and mic.',
        count: 7,
        price: 310000,
        image: 'https://images.pexels.com/photos/7677248/pexels-photo-7677248.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['All-in-one Video Conf', 'Directional Mic', 'In-cell Touch', 'Award-winning Design']
      },
      {
        id: 'sam-int-65-w',
        name: 'Samsung Interactive Board (WAC)',
        description: 'Reliable Android-based whiteboard for educational training centers.',
        count: 10,
        price: 240000,
        image: 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['65-inch 4K', 'Multi-device Cast', 'App Store Access', 'Tough Gorilla Glass']
      }
    ]
  },

  "Kiosk": {
    name: 'Kiosk',
    products: [
      {
        id: 'az-k-stand-55',
        name: 'Aztech Standing Kiosk 55"',
        description: 'Modern floor-standing digital totem for mall wayfinding.',
        count: 12,
        price: 165000,
        image: 'https://images.pexels.com/photos/3945665/pexels-photo-3945665.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['55-inch Touch', 'Android 11', 'Industrial Grade', 'Internal Cooling']
      },
      {
        id: 'lg-k-self-27',
        name: 'LG Self-Service Kiosk',
        description: 'Compact kiosk for hotel check-ins or bank queue management.',
        count: 20,
        price: 215000,
        image: 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['27-inch Touch', 'Receipt Printer', 'Payment Bracket', 'Epson Scanner']
      },
      {
        id: 'az-k-double-55',
        name: 'Aztech Double-Sided Kiosk',
        description: 'Show content on both sides; perfect for airport terminals.',
        count: 4,
        price: 295000,
        image: 'https://images.pexels.com/photos/3945665/pexels-photo-3945665.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Dual 55" Screens', 'Super Slim Design', 'Ultra-high Brightness', 'Scheduled Play']
      },
      {
        id: 'sam-k-4k-32',
        name: 'Samsung Kiosk (KM24A)',
        description: 'Global standard for fast-food ordering and retail ticketing.',
        count: 15,
        price: 145000,
        image: 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['24-inch Touch', 'Tizen OS', 'Knox Security', 'Counter/Stand Mount']
      },
      {
        id: 'az-k-outdoor-65',
        name: 'Aztech Outdoor Rugged Kiosk',
        description: 'Fully waterproof and sunlight-readable kiosk for street ads.',
        count: 3,
        price: 480000,
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['IP65 Rated', '2500 nits', 'Air Conditioned', 'IK10 Vandal Proof']
      },
      {
        id: 'az-k-horizontal',
        name: 'Aztech Table Kiosk 43"',
        description: 'Horizontal touch table for interactive museum exhibits.',
        count: 6,
        price: 135000,
        image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Table Height', '10 Point IR Touch', 'Sleek Curved Edges', 'PC Included']
      }
    ]
  },

  "AdvertisingDisplay": {
    name: 'Advertising Display',
    products: [
      {
        id: 'az-wall-60',
        name: 'Aztech Ultra-Slim Wall 60"',
        description: 'New 60-inch narrow bezel display for luxury showrooms.',
        count: 9,
        price: 158000,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['60-inch UHD', 'Metal Housing', 'Portrait/Landscape', 'Cloud CMS']
      },
      {
        id: 'lg-oled-show',
        name: 'LG Transparent OLED',
        description: 'Futuristic transparent display for premium product showcases.',
        count: 2,
        price: 1200000,
        image: 'https://images.pexels.com/photos/5325617/pexels-photo-5325617.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['38% Transparency', 'OLED Technology', 'FHD', 'Touch Optional']
      },
      {
        id: 'sam-window-55',
        name: 'Samsung Dual-Sided Window Display',
        description: 'High brightness for windows facing the sun + interior screen.',
        count: 5,
        price: 420000,
        image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['3000 nits Outdoor side', '1000 nits Indoor side', 'Fan-less', 'Wi-Fi']
      },
      {
        id: 'az-bar-type',
        name: 'Aztech Bar Signage 37"',
        description: 'Unique shelf-edge display for grocery and electronics pricing.',
        count: 25,
        price: 48000,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Stretched LCD', 'High Contrast', 'Serial Control', 'Ultra Wide']
      },
      {
        id: 'lg-welcome-86',
        name: 'LG Ultra-Large Welcome Screen',
        description: 'Giant 86-inch screen to replace traditional lobby posters.',
        count: 4,
        price: 590000,
        image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['86-inch UHD', 'IPS Panel', 'Crestron Connected', 'Split Screen']
      },
      {
        id: 'sam-omd-46',
        name: 'Samsung In-Window Display',
        description: 'Extra high brightness for shop windows in sunny areas.',
        count: 10,
        price: 215000,
        image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4000 nits Brightness', 'Polarized Sun-view', 'Tizen 4.0', 'IP5X Dust Proof']
      }
    ]
  }
,
// ========== HPE PROLIANT ML TOWER SERVERS ==========
"HPEProliantMLserver": {
  name: 'HPE ProLiant ML Tower Servers',
  products: [
    {
      id: 'hpe-ml30-g11',
      name: 'HPE ProLiant ML30 Gen11',
      description: 'The HPE ProLiant ML30 Gen11 server is a powerful yet affordable tower server designed for small offices and remote branch offices.',
      count: 10,
      price: 1299,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon E-2400', '16GB DDR5 ECC', '4 LFF Drive Bays', '350W Fixed PSU']
    },
    {
      id: 'hpe-ml110-g11',
      name: 'HPE ProLiant ML110 Gen11',
      description: 'The HPE ProLiant ML110 Gen11 server is an enhanced single processor tower with performance, expansion, and security at an affordable price.',
      count: 8,
      price: 2150,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon Silver 4410Y', '32GB RDIMM', '8 SFF Drive Bays', '800W Flex Slot PSU']
    },
    {
      id: 'hpe-ml350-g11',
      name: 'HPE ProLiant ML350 Gen11',
      description: 'The HPE ProLiant ML350 Gen11 is a powerful 2P tower server with optional rack-mountable chassis for enterprise-class performance.',
      count: 5,
      price: 3899,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Dual Intel Xeon Gold', '64GB DDR5', 'Up to 24 SFF Bays', 'Redundant Power']
    },
    {
      id: 'hpe-ml30-g10-plus',
      name: 'HPE ProLiant ML30 Gen10 Plus',
      description: 'A reliable enterprise-class tower server for entry-level workloads and file storage.',
      count: 12,
      price: 950,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon E-2314', '16GB RAM', '4 LFF Non-Hot Plug', 'iLO 5 Standard']
    },
    {
      id: 'hpe-microserver-gen10-plus',
      name: 'HPE ProLiant MicroServer Gen10 Plus v2',
      description: 'A compact, powerful, and affordable server that can be placed horizontally or vertically.',
      count: 20,
      price: 799,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Pentium or Xeon E', 'Compact Chassis', '4 Drive Bays', 'External Power Adaptor']
    },
    {
      id: 'hpe-ml110-g10',
      name: 'HPE ProLiant ML110 Gen10 (Refurbished)',
      description: 'Performance tower server for small to mid-sized businesses looking for value.',
      count: 4,
      price: 1499,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon Scalable', '32GB DDR4', '8 SFF Hot-Swap', 'Certified Renewed']
    }
  ]
},
// ========== HPE PROLIANT DL RACK SERVERS ==========
"HPEProliantDLserver": {
  name: 'HPE ProLiant DL Rack Servers',
  products: [
    {
      id: 'hpe-dl360-g10-plus',
      name: 'HPE ProLiant DL360 Gen10 Plus',
      description: 'A compact, high-performance 1U server designed for a wide range of workloads and diverse environments.',
      count: 7,
      price: 3499,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon Scalable 3rd Gen', '1U Rackmount', '8 SFF Drive Bays', 'High-Density Computing']
    },
    {
      id: 'hpe-dl360-g11',
      name: 'HPE ProLiant DL360 Gen11',
      description: 'A rack-optimized 1U dense solution that delivers exceptional compute performance and security for infrastructure.',
      count: 5,
      price: 4599,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon Scalable 4th/5th Gen', 'DDR5 Smart Memory', 'PCIe 5.0 Support', '1U Performance']
    },
    {
      id: 'hpe-dl380-g10-plus',
      name: 'HPE ProLiant DL380 Gen10 Plus',
      description: 'Adaptable for diverse workloads and environments, providing the perfect balance of expandability and scalability.',
      count: 9,
      price: 4299,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon Scalable 3rd Gen', '2U Rackmount', 'Up to 30 LFF Bays', 'Modular Chassis']
    },
    {
      id: 'hpe-dl380-g11',
      name: 'HPE ProLiant DL380 Gen11',
      description: 'A scalable 2U 2P solution that delivers exceptional compute performance and memory density for data-hungry workloads.',
      count: 4,
      price: 5899,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Dual Intel Xeon Scalable 4th Gen', '2U Rackmount', 'Advanced Security', 'GPU Optimized']
    },
    {
      id: 'hpe-dl325-g11',
      name: 'HPE ProLiant DL325 Gen11',
      description: 'A low-cost, 1U 1P solution delivering high-value performance for virtualization and software-defined storage.',
      count: 12,
      price: 2999,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['AMD EPYC 9004 Series', '1U Rackmount', 'Single Socket', 'High-Speed NVMe']
    },
    {
      id: 'hpe-dl560-g11',
      name: 'HPE ProLiant DL560 Gen11',
      description: 'High-density, 4-processor (4P) server for mission-critical workloads and large-scale virtualization.',
      count: 2,
      price: 12500,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Quad Intel Xeon Scalable', '2U Rackmount', 'Enterprise ERP/CRM', 'Massive Memory Capacity']
    }
  ]
},
// ========== HPE PROLIANT RL CLOUD-NATIVE SERVERS ==========
"HPEProliantRLserver": {
  name: 'HPE Proliant RL server',
  products: [
    {
      id: 'hpe-rl300-g11',
      name: 'HPE ProLiant RL300 Gen11',
      description: 'The HPE ProLiant RL300 Gen11 server delivers next-generation compute performance and power efficiency for cloud-native workloads.',
      count: 12,
      price: 3899,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Ampere Altra Max', 'Up to 128 Cores', '1U Rackmount', 'Cloud-Native Efficiency']
    },
    {
      id: 'hpe-rl300-g11-pro',
      name: 'HPE ProLiant RL300 Gen11 Performance',
      description: 'An upgraded RL300 configuration optimized for high-density scale-out computing and digital services.',
      count: 8,
      price: 5299,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Ampere Altra Max M128-30', '256GB RAM', 'NVMe Storage', 'Dual 100GbE NIC']
    },
    {
      id: 'hpe-dl325-g11-rl-alt',
      name: 'HPE ProLiant DL325 Gen11 (Cloud-Optimized)',
      description: 'A versatile 1U rack alternative for customers transitioning to high-efficiency cloud-native architectures.',
      count: 10,
      price: 3199,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['AMD EPYC 9004 Series', '1U Rackmount', 'Single Socket', 'Low Power Profile']
    }
  ]
},
// ========== HPE MODULAR / SYNERGY SERVERS ==========
"HPEModularServers": {
  name: 'HPE Modular Servers',
  products: [
    {
      id: 'hpe-sy-480-g11',
      name: 'HPE Synergy 480 Gen11 Compute Module',
      description: 'The HPE Synergy 480 Gen11 Compute module with 4th Generation Intel® Xeon® Scalable processors is a powerful, flexible resource for any workload.',
      count: 6,
      price: 6899,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Dual Intel Xeon Scalable 4th Gen', 'DDR5 Memory', 'Mezzanine Card Slots', 'HPE OneView Managed']
    },
    {
      id: 'hpe-sy-660-g10',
      name: 'HPE Synergy 660 Gen10 Compute Module',
      description: 'The HPE Synergy 660 Gen10 Compute Module delivers higher performance and scalability for demanding enterprise-class applications.',
      count: 4,
      price: 12500,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4-Socket (4P) Support', 'Intel Xeon Scalable 2nd Gen', 'High Memory Density', 'Mission-Critical Ready']
    },
    {
      id: 'hpe-sy-d3940',
      name: 'HPE Synergy D3940 Storage Module',
      description: 'The HPE Synergy D3940 Storage Module provides a fluid pool of storage resources for the composable infrastructure.',
      count: 3,
      price: 5499,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Up to 40 SFF Drive Bays', '12Gb/s SAS Connection', 'Hot-swappable Drives', 'Flexible Zoning']
    }
  ]
},
// ========== DELL EMC POWEREDGE TOWER SERVERS ==========
"DellEMCPowerEdgeTowerserver": {
  name: 'Dell EMC PowerEdge Tower server',
  products: [
    {
      id: 'dell-t360-tower',
      name: 'Dell PowerEdge T360 Tower Server',
      description: 'The 4.5U, single-socket PowerEdge T360 is a specially designed form factor for customers looking for enterprise-class features in a compact tower.',
      count: 12,
      price: 1899,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Intel Xeon E-2400', '4.5U Chassis', 'Single Socket (1P)', 'iDRAC9 Management']
    },
    {
      id: 'dell-t560-tower',
      name: 'Dell PowerEdge T560 Tower Server',
      description: 'The Dell PowerEdge T560 is a purpose-built, office-friendly server that delivers high-performance compute and massive storage expandability.',
      count: 7,
      price: 3599,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Dual Intel Xeon Scalable 4th Gen', 'Quiet Office Acoustics', 'Up to 12 LFF Bays', 'Optional GPU Support']
    }
  ]
},

"DellEMCPowerEdgeRackserver": {
  name: 'Dell EMC PowerEdge Rack server',
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

// ========== SERVER ACCESSORIES & COMPONENTS ==========
"ServerAccessories": {
  name: 'Server Accessories & Upgrades',
  products: [
    {
      id: 'hpe-ram-32gb',
      name: 'HPE 32GB DDR5 Smart Memory',
      description: 'High-speed server RAM optimized for HPE Gen11 ProLiant servers.',
      count: 50,
      price: 299,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['DDR5-4800', 'Registered ECC', 'Dual Rank', 'HPE Smart Auth']
    },
    {
      id: 'dell-ram-64gb',
      name: 'Dell 64GB DDR4 RDIMM',
      description: 'Enterprise-grade memory upgrade for PowerEdge 14th and 15th Gen servers.',
      count: 25,
      price: 450,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['DDR4-3200', '2Rx4 RDIMM', 'ECC Error Correction', 'Certified Dell Part']
    },
    {
      id: 'intel-xeon-gold',
      name: 'Intel Xeon Gold 6430 Processor',
      description: '32-Core high-performance CPU upgrade for modern data center workloads.',
      count: 10,
      price: 2199,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['32 Cores / 64 Threads', '2.1 GHz Base', 'Sapphire Rapids', 'LGA 4677']
    },
    {
      id: 'amd-epyc-9354',
      name: 'AMD EPYC 9354 CPU',
      description: 'High-density 32-core processor for cloud-native and virtualization servers.',
      count: 5,
      price: 2850,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['32 Cores', '3.25 GHz', 'Zen 4 Architecture', 'Socket SP5']
    },
    {
      id: 'hpe-1.2tb-sas',
      name: 'HPE 1.2TB SAS 12G HDD',
      description: 'Mission-critical 10K RPM hard drive for high-speed data access.',
      count: 100,
      price: 189,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['10,000 RPM', '12Gb/s Interface', 'SFF 2.5-inch', 'Hot-Plug Tray']
    },
    {
      id: 'dell-2tb-ssd',
      name: 'Dell 1.92TB Enterprise SSD',
      description: 'Read-intensive SATA solid state drive for fast application loading.',
      count: 40,
      price: 549,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['SATA 6Gbps', '1.92TB Capacity', 'Enterprise TLC', 'Power Loss Protection']
    },
    {
      id: 'hpe-rail-kit',
      name: 'HPE Easy Install Rail Kit',
      description: 'Universal rack-mount rails for DL360 and DL380 ProLiant servers.',
      count: 60,
      price: 125,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['2U/1U Compatible', 'Tool-less Install', 'Cable Management Arm', 'Steel Construction']
    },
    {
      id: 'dell-idrac-enterprise',
      name: 'Dell iDRAC9 Enterprise License',
      description: 'Software license key for full remote server management and power control.',
      count: 99,
      price: 399,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['Virtual Console', 'Remote Media', 'Power Capping', 'Email Alerting']
    }
  ]
},

// ========== SERVER RACK CABINETS (RACK UNITS) ==========
"DifferntRackUnits": {
  name: 'Server Rack Cabinets',
  products: [
    {
      id: 'rack-9u-wall',
      name: '9U Wall-Mount Server Cabinet',
      description: 'Compact 9U rack for networking gear and small servers in tight spaces.',
      count: 15,
      price: 349,
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['9U Height', 'Glass Front Door', 'Wall-Mountable', '19-inch Standard']
    },
    {
      id: 'rack-12u-floor',
      name: '12U Open Frame Rack',
      description: 'Desktop or floor-standing open rack for easy access to server cabling.',
      count: 10,
      price: 199,
      image: 'https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['12U Height', 'Open Air Flow', 'Heavy-Duty Steel', 'Mobile Casters']
    },
    {
      id: 'rack-18u-mid',
      name: '18U Mid-Size Office Rack',
      description: 'A professional sound-dampened cabinet for office environments.',
      count: 8,
      price: 599,
      image: 'https://images.pexels.com/photos/3671146/pexels-photo-3671146.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['18U Height', 'Locked Security', 'Built-in Fans', 'Cable Management']
    },
    {
      id: 'rack-22u-half',
      name: '22U Half-Height Server Rack',
      description: 'Ideal for medium-sized businesses needing space for 10+ rack servers.',
      count: 5,
      price: 799,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['22U Height', 'Floor Standing', 'Mesh Doors', 'Deep Profile (1000mm)']
    },
    {
      id: 'rack-27u-pro',
      name: '27U Professional Server Cabinet',
      description: 'A "Big" 27U rack designed for high-density storage and GPU servers.',
      count: 4,
      price: 950,
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['27U Height', 'Reinforced Frame', 'Side Access Panels', 'Grounding Wire']
    },
    {
      id: 'rack-42u-full',
      name: '42U Full-Size Enterprise Rack',
      description: 'The industry standard 42U data center cabinet for maximum scalability.',
      count: 12,
      price: 1499,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['42U Height', 'Full Perforation', 'Split Rear Doors', 'EIA-Standard']
    },
    {
      id: 'rack-48u-tall',
      name: '48U High-Capacity Data Center Rack',
      description: 'Extra-tall 48U cabinet for maximum server density in professional facilities.',
      count: 3,
      price: 1899,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['48U Height', 'Over-Height Design', 'Integrated Vertical PDU Mounts', '2000lb Capacity']
    },
    {
      id: 'rack-portable-4u',
      name: '4U Portable Flight Case Rack',
      description: 'Rugged, shock-proof rack for mobile servers and broadcasting on the go.',
      count: 20,
      price: 299,
      image: 'https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: ['4U Height', 'Rugged Outer Case', 'Shock Protection', 'Front/Rear Lids']
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
    "Modern4KTVs": "Monitor",
    
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
"DocumentPrinter": "Printer",
"LargeFormatPrinter": "Printer",
"IDCardPrinter": "Printer",
"POSPrinter": "Printer",
"LabelPrinter": "Printer",
"Photocopier": "Printer",
"Toner": "Printer",
"InkTankPrinter": "Printer",
"InkBottle": "Printer",
"BarcodeScanner": "Printer",
"Ribbon": "Printer",
"Cartridge": "Printer",
"PrinterDrum": "Printer",
"PrinterPaper": "Printer",
      // Digital Display subcategories
    "DigitalSignage": "DigitalDisplay",
    "LEDVideoWall": "DigitalDisplay",
    "InteractiveDisplay": "DigitalDisplay",
    "Kiosk": "DigitalDisplay",
    "AdvertisingDisplay": "DigitalDisplay",
    
       // Server subcategories - UPDATED
    "HPEProliantMLserver": "Server",
    "HPEProliantDLserver": "Server",
    "HPEProliantRLserver": "Server",
    "HPEModularServers": "Server",
    "DellEMCPowerEdgeTowerserver": "Server",
    "DellEMCPowerEdgeRackserver": "Server",
    "ServerAccessories": "Server",
    "DifferntRackUnits": "Server", };
  
  return subcategoryMap[subcategory] || subcategory;
};

// Function to get all subcategories for a main category
export const getSubcategories = (mainCategory: string): string[] => {
  const subcategoryGroups: Record<string, string[]> = {
    "Desktop": ["BusinessDesktop", "GamingDesktop", "AllinOnePC", "MiniDesktop", "Workstation"],
    "Laptop": ["BusinessLaptop", "StudentLaptop", "UltrabookThinLight", "GamingLaptop", "2in1ConvertibleLaptop"],
    "Monitor": ["FullHDMonitor", "2K4KMonitor", "GamingMonitor", "CurvedMonitor", "Modern4KTVs"],
    "Networking": ["HomeNetworking", "CommercialNetworking", "NetworkAccessories", "RoutersSwitches", "CablesConnectors"],
    "Accessories": ["KeyboardMouse", "Webcams", "Headphones", "USBHubs", "LaptopStands"],
      "Projector": ["BusinessProjector", "HomeCinemaProjector", "PortableProjector", "ShortThrowProjector", "ProjectorAccessories"], 
        "Printer": ["InkjetPrinter", "LaserPrinter", "AllinOnePrinter","Scanners",
          "PrinterAccessories","DocumentPrinter",
          "LargeFormatPrinter","IDCardPrinter", "POSPrinter","LabelPrinter",
    "Photocopier",
    "Toner",
    "InkTankPrinter",
    "InkBottle",
    "BarcodeScanner",
    "Ribbon",
    "Cartridge",
    "PrinterDrum",
    "PrinterPaper"],
      "DigitalDisplay": ["DigitalSignage", "LEDVideoWall", "InteractiveDisplay", "Kiosk",
         "AdvertisingDisplay", ], 
          "Server": [
    "HPEProliantMLserver",
    "HPEProliantDLserver",
    "HPEProliantRLserver",
    "HPEModularServers",
    "DellEMCPowerEdgeTowerserver",
    "DellEMCPowerEdgeRackserver",
    "ServerAccessories",
    "DifferntRackUnits",
  ],// ADD THI
  };
  
  return subcategoryGroups[mainCategory] || [];
};