import React from "react";
import { useNavigate } from "react-router-dom";

import {
  // Core icons you're using
  Server,
  Cpu,
  HardDrive,
  Shield,
  Zap,
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Grid,
  Wifi,

  // Valid replacements
  Monitor, // instead of Desktop, Workstation, Display, Screen
  Tv, // instead of Display, Screen
  Settings,
  Gamepad2,
  Router,
  Presentation,
  Smartphone,
  Tablet,
  Headphones,
  Keyboard,
  Mouse,
  Printer, // instead of Scanner, Fax
  Camera,
  Speaker,
  Mic,
  Video,
  Box,
  Network, // instead of Switch, Gateway
  Lock,
  Cloud,
  Database, // instead of Storage
  Activity,
  Layers,
  Boxes,
  Megaphone,
  ScreenShare,
  MonitorSmartphone,
  PanelTop,
  LayoutDashboard,
  Airplay,
  Bluetooth,
  Radio,
  Satellite,
  Cable,
  Usb,
  Laptop,
  Tag, // instead of Label
  Barcode,
  QrCode,
  CreditCard,
  Wallet,
  CircleDollarSign, // instead of Yen
  Bitcoin,
  Play, // for MonitorPlay functionality
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const DataCenterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Custom Styles */}
      <style>{`
        .brand-gradient {
          background: linear-gradient(135deg, #12428B 0%, #3B82F6 50%, #F97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #12428B 0%, #2a5da5 100%);
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #2a5da5 0%, #F97316 100%);
          box-shadow: 0 20px 40px -12px rgba(249, 115, 22, 0.4);
          transform: scale(1.02);
        }
        
        .btn-secondary {
          border: 2px solid #12428B;
          color: #12428B;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          border-color: #F97316;
          color: #F97316;
          background: rgba(249, 115, 22, 0.05);
        }
        
        .vendor-card {
          transition: all 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.7;
        }
        
        .vendor-card:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: translateY(-5px);
        }
        
        .server-card {
          background: white;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .server-card:hover {
          border-color: #F97316;
          box-shadow: 0 20px 40px -12px rgba(18, 66, 139, 0.2);
          transform: translateY(-5px);
        }
        
        .contact-card {
          background: white;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          border-color: #12428B;
          box-shadow: 0 20px 40px -12px rgba(18, 66, 139, 0.15);
          transform: translateY(-5px);
        }
        
        .social-icon {
          transition: all 0.3s ease;
          color: #64748b;
        }
        
        .social-icon:hover {
          color: #F97316;
          transform: translateY(-3px);
        }

        .server-type-badge {
          background: linear-gradient(135deg, #12428B10, #F9731610);
          border: 1px solid #F9731620;
        }
      `}</style>

      {/* SECTION 1: Data Center Infrastructure */}
      <section className="py-16 md:py-24 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#12428B]">
                  Enterprise Solutions
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#12428B]">Ethiopia's Trusted</span>
                <span className="brand-gradient block">
                  Data Infrastructure
                </span>
                <span className="block text-[#12428B]">Supplier</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Premium supplier of HPE ProLiant, Dell PowerEdge, and Cisco UCS
                servers - from rackmount and blade systems to storage arrays and
                virtualization solutions for modern data centers.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/Catalog/ApplicationServers")}
                  className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group"
                >
                  Explore All Servers
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+251911517628")}
                  className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  Contact Sales
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">50+</div>
                  <div className="text-sm text-gray-500">
                    Enterprise Clients
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">500+</div>
                  <div className="text-sm text-gray-500">Servers Deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">24/7</div>
                  <div className="text-sm text-gray-500">Tech Support</div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Server,
                  name: "Rack Servers",
                  desc: "1U/2U/4U Density",
                },
                {
                  icon: Grid,
                  name: "Blade Servers",
                  desc: "Modular Architecture",
                },
                {
                  icon: HardDrive,
                  name: "Storage Servers",
                  desc: "Petabyte Scale",
                },
                { icon: Cpu, name: "GPU Servers", desc: "AI/ML Acceleration" },
                {
                  icon: Zap,
                  name: "Industrial Servers",
                  desc: "Ruggedized Design",
                },
                { icon: Wifi, name: "Edge Servers", desc: "5G Ready" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="server-type-badge p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <Icon className="w-8 h-8 text-[#12428B] mb-3 group-hover:text-[#F97316] transition-colors" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Modern Laptops & Gaming */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#12428B]">
                  Performance & Power
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#12428B]">Ethiopia's Premier</span>
                <span className="brand-gradient block">Laptops & Gaming</span>
                <span className="block text-[#12428B]">Destination</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Powerful and reliable laptops designed for work and personal
                use, with next-gen Intel and Ryzen processors, premium 4K
                screens, and enterprise-level security from top brands including
                Dell, HP, Lenovo, and ASUS ROG.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/Catalog/ApplicationServers")}
                  className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group"
                >
                  Explore All Laptops
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+251911517628")}
                  className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  Gaming Inquiry
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">1000+</div>
                  <div className="text-sm text-gray-500">Laptops Sold</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">15+</div>
                  <div className="text-sm text-gray-500">Global Brands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">
                    1 Year
                  </div>
                  <div className="text-sm text-gray-500">Warranty</div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Laptop,
                  name: "Business Laptops",
                  desc: "Dell Latitude, HP EliteBook",
                },
                {
                  icon: Gamepad2,
                  name: "Gaming Laptops",
                  desc: "ASUS ROG, MSI, Alienware",
                },
                {
                  icon: Cpu,
                  name: "Mobile Workstations",
                  desc: "Dell Precision, HP ZBook",
                },
                {
                  icon: Monitor,
                  name: "Ultrabooks",
                  desc: "XPS, ThinkPad X1, MacBook",
                },
                {
                  icon: Tablet,
                  name: "2-in-1 Convertibles",
                  desc: "Surface Pro, Lenovo Yoga",
                },
                {
                  icon: Smartphone,
                  name: "Student Laptops",
                  desc: "Chromebooks, Budget PCs",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="server-type-badge p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <Icon className="w-8 h-8 text-[#12428B] mb-3 group-hover:text-[#F97316] transition-colors" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Cisco Routers & Switches */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#12428B]">
                  Networking Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#12428B]">Ethiopia's Premier</span>
                <span className="brand-gradient block">Cisco Networking</span>
                <span className="block text-[#12428B]">Partner</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Complete Cisco networking solutions including enterprise
                routers, managed switches, high-performance access points,
                advanced firewalls, and essential accessories for secure
                business connectivity.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/Catalog/HomeNetworking")}
                  className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group"
                >
                  Explore Networking
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+251911517628")}
                  className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  Network Assessment
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">200+</div>
                  <div className="text-sm text-gray-500">Networks Deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">
                    Certified
                  </div>
                  <div className="text-sm text-gray-500">CCIE Engineers</div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Router,
                  name: "Enterprise Routers",
                  desc: "ISR 4000, ASR 1000",
                },
                {
                  icon: Network,
                  name: "Managed Switches",
                  desc: "Catalyst 9000, Nexus",
                },
                {
                  icon: Wifi,
                  name: "Wireless APs",
                  desc: "Wi-Fi 6/6E, Meraki",
                },
                {
                  icon: Shield,
                  name: "Security Firewalls",
                  desc: "ASA, Firepower, FTD",
                },
                {
                  icon: Router,
                  name: "Network Gateways",
                  desc: "Branch, Industrial IoT",
                },
                {
                  icon: Cable,
                  name: "Modules & Cables",
                  desc: "SFPs, Transceivers",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="server-type-badge p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <Icon className="w-8 h-8 text-[#12428B] mb-3 group-hover:text-[#F97316] transition-colors" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Digital Display & Signage */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#12428B]">
                  Visual Communication
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#12428B]">Ethiopia's Leading</span>
                <span className="brand-gradient block">Digital Signage</span>
                <span className="block text-[#12428B]">Solutions</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Premium interactive touch displays, dynamic digital signage, and
                professional presentation solutions for modern offices, retail
                spaces, educational institutions, and hospitality environments.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/Catalog/LEDDigitalDisplay")}
                  className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group"
                >
                  Explore Signage
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+251911517628")}
                  className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  Free Consultation
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">500+</div>
                  <div className="text-sm text-gray-500">
                    Displays Installed
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">
                    Retail
                  </div>
                  <div className="text-sm text-gray-500">
                    Education, Hospitality
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">CMS</div>
                  <div className="text-sm text-gray-500">Cloud Management</div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Tv,
                  name: "Interactive Displays",
                  desc: "Touch, 4K UHD, Smart",
                },
                {
                  icon: LayoutDashboard,
                  name: "Video Walls",
                  desc: "Narrow Bezel, LED",
                },
                {
                  icon: Megaphone,
                  name: "Menu Boards",
                  desc: "Restaurant, QSR",
                },
                {
                  icon: Presentation,
                  name: "Kiosks",
                  desc: "Self-Service, Wayfinding",
                },
                {
                  icon: ScreenShare,
                  name: "LED Screens",
                  desc: "Indoor/Outdoor",
                },
                {
                  icon: Play,
                  name: "Signage Players",
                  desc: "Android, Linux, Cloud",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="server-type-badge p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <Icon className="w-8 h-8 text-[#12428B] mb-3 group-hover:text-[#F97316] transition-colors" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Modern TV & Boards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#12428B]">
                  Smart Collaboration
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#12428B]">Ethiopia's Premium</span>
                <span className="brand-gradient block">
                  Conference Solutions
                </span>
                <span className="block text-[#12428B]">Provider</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Smart conference room solutions with interactive whiteboards,
                large format 4K displays, and wireless presentation systems for
                seamless collaboration in modern workspaces and boardrooms.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/Catalog/VideoWall")}
                  className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group"
                >
                  Explore Solutions
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+251911517628")}
                  className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  Room Design
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">300+</div>
                  <div className="text-sm text-gray-500">
                    Boardrooms Equipped
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">
                    Seamless
                  </div>
                  <div className="text-sm text-gray-500">Collaboration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">Smart</div>
                  <div className="text-sm text-gray-500">Meeting Tech</div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: PanelTop,
                  name: "Interactive Boards",
                  desc: "Smart, Whiteboard, 4K",
                },
                {
                  icon: Tv,
                  name: "Conference TVs",
                  desc: "Large Format, Commercial",
                },
                {
                  icon: Airplay,
                  name: "Wireless Presentation",
                  desc: "AirPlay, Miracast, App",
                },
                {
                  icon: LayoutDashboard,
                  name: "Wall Mounts",
                  desc: "Motorized, Fixed",
                },
                {
                  icon: Speaker,
                  name: "Soundbars",
                  desc: "Built-in Mic, Speakers",
                },
                {
                  icon: Bluetooth,
                  name: "Collaboration",
                  desc: "Software, Camera, Mic",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="server-type-badge p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <Icon className="w-8 h-8 text-[#12428B] mb-3 group-hover:text-[#F97316] transition-colors" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenterPage;
