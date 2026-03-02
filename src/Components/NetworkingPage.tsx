import React from "react";
import {
  Router,
 Network,
   Wifi,
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
  Server,
  HardDrive,
  Cpu,
  Grid
} from "lucide-react";

const NetworkingPage = () => {
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
        
        .brand-card {
          transition: all 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.7;
        }
        
        .brand-card:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: translateY(-5px);
        }
        
        .product-card {
          background: white;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .product-card:hover {
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

        .device-card {
          background: linear-gradient(135deg, #12428B10, #F9731610);
          border: 1px solid #F9731620;
          transition: all 0.3s ease;
        }
        
        .device-card:hover {
          border-color: #F97316;
          box-shadow: 0 20px 40px -12px rgba(249, 115, 22, 0.2);
          transform: translateY(-5px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#12428B]">
                  Welcome to Proactive Trading
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#12428B]">Ethiopia's Trusted</span>
                <span className="brand-gradient block">Networking & Infrastructure</span>
                <span className="block text-[#12428B]">Solutions Provider</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Complete networking solutions from world-leading brands - Cisco, Aruba, and D-Link. 
                From core switches to access points, we deliver secure, reliable connectivity for 
                businesses of all sizes.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group">
                  Explore Products
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group">
                  <Phone size={18} />
                  Contact Sales
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">200+</div>
                  <div className="text-sm text-gray-500">Networks Deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">50+</div>
                  <div className="text-sm text-gray-500">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">24/7</div>
                  <div className="text-sm text-gray-500">Tech Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Device Types Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Network, name: "Switches", desc: "Core, Distribution, Access" },
                { icon: Router, name: "Routers", desc: "Edge, Branch, Core" },
                { icon: Wifi, name: "Wireless APs", desc: "WiFi 6, 6E, 5G Ready" },
                { icon: Server, name: "Load Balancers", desc: "Application Delivery" },
                { icon: HardDrive, name: "Modems", desc: "Fiber, DSL, 5G" },
                { icon: Grid, name: "Accessories", desc: "SFP, Cables, Transceivers" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="device-card p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group">
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

     

      {/* Cisco Catalyst Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Cisco Catalyst Series</span>
            </h2>
            <p className="text-xl text-gray-600">Enterprise-grade switching for every layer</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                series: "C9600 Series",
                title: "Core Layer & Edge Services",
                desc: "Empowering core layer and edge services with higher speeds and scales."
              },
              {
                series: "C9500 Series",
                title: "Fixed Enterprise Core",
                desc: "Cisco's lead fixed enterprise core and aggregation switching platform."
              },
              {
                series: "C9400 Series",
                title: "Modular Enterprise Platform",
                desc: "Leading modular switching for access, distribution and core."
              },
              {
                series: "C9300 Series",
                title: "Security & Experience",
                desc: "Built to reimagine connection, reinforce security and redefine experience."
              },
              {
                series: "C9200 Series",
                title: "Intent-Based Networking",
                desc: "Extends intent-based networking everywhere."
              },
              {
                series: "C1000 Series",
                title: "Small Business",
                desc: "Fixed managed Gigabit Ethernet switches for SMBs and branch offices."
              }
            ].map((item, idx) => (
              <div key={idx} className="product-card rounded-xl p-6 cursor-pointer group">
                <h3 className="font-bold text-lg text-[#12428B] mb-1">{item.series}</h3>
                <p className="text-sm font-semibold text-[#F97316] mb-2">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg text-white font-semibold inline-flex items-center gap-2">
              View All Cisco Switches <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Aruba (HPE) Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Aruba Networking Solutions</span>
            </h2>
            <p className="text-xl text-gray-600">from HPE</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                series: "CX 10000 Series",
                title: "Data Center Switches",
                desc: "Best-of-breed data center L2/3 switching for modern data centers."
              },
              {
                series: "CX 84000 Series",
                title: "Campus Core & Aggregation",
                desc: "Serves as core/aggregation or leaf/spine topology for enterprise networks."
              },
              {
                series: "CX 6200 Series",
                title: "Stackable Access Switches",
                desc: "Ideal for branch offices, campuses, and SMB networks."
              }
            ].map((item, idx) => (
              <div key={idx} className="product-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#12428B]">{item.series}</h3>
                <p className="text-sm text-[#F97316] font-semibold mb-4">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg text-white font-semibold inline-flex items-center gap-2">
              Explore Aruba Series <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* D-Link Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">D-Link Solutions</span>
            </h2>
            <p className="text-xl text-gray-600">Reliable networking for SOHO & SMB</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                model: "DGS-F1016/F1024",
                title: "Unmanaged PoE Switches",
                desc: "Economical, plug-and-play Gigabit Ethernet solutions for SOHO and small/medium businesses."
              },
              {
                model: "DGS-1210-52MP",
                title: "Smart Managed Switch",
                desc: "Increased PoE output, advanced Layer 2 features, and multiple management interfaces."
              }
            ].map((item, idx) => (
              <div key={idx} className="product-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#12428B]">{item.model}</h3>
                <p className="text-sm text-[#F97316] font-semibold mb-4">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg text-white font-semibold inline-flex items-center gap-2">
              View D-Link Collection <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    

      {/* Let's Connect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Let's Connect</span>
            </h2>
            <p className="text-xl text-gray-600">Ready to build or upgrade your network?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Phone, title: "Call Us", info1: "+251 911 234 567", info2: "+251 116 789 012" },
              { icon: MapPin, title: "Visit Us", info1: "Bole Road, Addis Ababa", info2: "Zewditu Tower, 4th Floor" },
              { icon: Mail, title: "Email Us", info1: "sales@proactive-trading.com", info2: "support@proactive-trading.com" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="contact-card p-8 rounded-2xl text-center">
                  <Icon className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.info1}</p>
                  <p className="text-gray-600">{item.info2}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <button className="btn-primary px-10 py-5 rounded-xl text-white font-bold text-lg inline-flex items-center gap-3">
              <Phone size={20} />
              Book Free Network Consultation
            </button>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Follow us for latest tech updates</p>
            <div className="flex justify-center gap-6">
              <Facebook className="social-icon w-6 h-6 cursor-pointer" />
              <Linkedin className="social-icon w-6 h-6 cursor-pointer" />
              <Twitter className="social-icon w-6 h-6 cursor-pointer" />
              <Youtube className="social-icon w-6 h-6 cursor-pointer" />
              <Instagram className="social-icon w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkingPage;