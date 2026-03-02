import React from "react";
import {
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
  Wifi
} from "lucide-react";

const DataCenterPage = () => {
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
                <span className="brand-gradient block">Data Infrastructure</span>
                <span className="block text-[#12428B]">Supplier</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                High-performance servers are the core of enterprise innovation, 
                built to deliver real-time data processing and handle the most 
                demanding applications. Featuring advanced processors and 
                energy-efficient architectures for faster performance.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group">
                  Explore All Servers
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group">
                  <Phone size={18} />
                  Contact Sales
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">50+</div>
                  <div className="text-sm text-gray-500">Enterprise Clients</div>
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

            {/* Right Server Types Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Server, name: "Rack Servers", desc: "1U/2U/4U Density" },
                { icon: Grid, name: "Blade Servers", desc: "Modular Architecture" },
                { icon: HardDrive, name: "Storage Servers", desc: "Petabyte Scale" },
                { icon: Cpu, name: "GPU Servers", desc: "AI/ML Acceleration" },
                { icon: Zap, name: "Industrial Servers", desc: "Ruggedized Design" },
                { icon: Wifi, name: "Edge Servers", desc: "5G Ready" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="server-type-badge p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group">
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

      {/* Our Vendors */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Our Vendors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official distributors of world-leading server manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            {[
              { name: "HPE", logo: "https://1000logos.net/wp-content/uploads/2017/05/HPE-logo.png" },
              { name: "Dell", logo: "https://1000logos.net/wp-content/uploads/2017/05/Dell-Logo.png" },
              { name: "Cisco", logo: "https://1000logos.net/wp-content/uploads/2016/10/Cisco-Logo.png" },
              { name: "Lenovo", logo: "https://1000logos.net/wp-content/uploads/2017/05/Lenovo-logo.png" },
              { name: "IBM", logo: "https://1000logos.net/wp-content/uploads/2020/03/IBM-Logo.png" }
            ].map((vendor, idx) => (
              <div key={idx} className="vendor-card cursor-pointer bg-white p-6 rounded-xl shadow-sm">
                <img src={vendor.logo} alt={vendor.name} className="w-full h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Segments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Product Segments</span>
            </h2>
            <p className="text-xl text-gray-600">Specialized architectures for every workload</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "AI-Optimized Series",
                subtitle: "High-Density Compute",
                desc: "Accelerates machine learning with NVIDIA H100 GPUs.",
                color: "#3B82F6"
              },
              {
                icon: Server,
                title: "Cloud Density Series",
                subtitle: "Scalable Performance",
                desc: "Maximizes performance for cloud-native applications.",
                color: "#F97316"
              },
              {
                icon: Shield,
                title: "Mission-Critical Line",
                subtitle: "Unwavering Reliability",
                desc: "99.999% uptime for banking and healthcare.",
                color: "#E96D1C"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="server-card rounded-2xl p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#12428B] to-[${item.color}] rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4" style={{ color: item.color }}>{item.subtitle}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
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
            <p className="text-xl text-gray-600">Ready to discuss your infrastructure needs?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
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

          {/* Social Media */}
          <div className="mt-12 text-center">
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

export default DataCenterPage;