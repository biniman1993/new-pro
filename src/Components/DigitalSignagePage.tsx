import React from "react";
import {
  Monitor,
  Tv,
  Layout,
  Grid,
  MapPin,
  Building2,
  School,
  ShoppingBag,
  Hotel,
  Wifi,
  Zap,
  ChevronRight,
  Phone,
  MapPin as MapPinIcon,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Users,
  Image,
  Video,
  Award
} from "lucide-react";

const DigitalSignagePage = () => {
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
        
        .display-card {
          background: linear-gradient(135deg, #12428B10, #F9731610);
          border: 1px solid #F9731620;
          transition: all 0.3s ease;
        }
        
        .display-card:hover {
          border-color: #F97316;
          box-shadow: 0 20px 40px -12px rgba(249, 115, 22, 0.2);
          transform: translateY(-5px);
        }

        .industry-card {
          background: white;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .industry-card:hover {
          border-color: #12428B;
          box-shadow: 0 20px 40px -12px rgba(18, 66, 139, 0.15);
          transform: translateY(-5px);
        }

        .tech-badge {
          background: linear-gradient(135deg, #12428B10, #F9731610);
          border: 1px solid #12428B30;
          border-radius: 100px;
          padding: 0.5rem 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: #12428B;
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
                <span className="block text-[#12428B]">Ethiopia's Premier</span>
                <span className="brand-gradient block">Digital Display & Signage</span>
                <span className="block text-[#12428B]">Solutions Provider</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                From government institutions to corporate offices, retail spaces to educational facilities—we deliver cutting-edge digital signage solutions from world-leading brands like Samsung, LG, Philips, and NEC. Transform how you communicate, engage, and inform.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group">
                  Explore Solutions
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group">
                  <Phone size={18} />
                  Get Consultation
                </button>
              </div>

              <div className="flex gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">500+</div>
                  <div className="text-sm text-gray-500">Screens Installed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">50+</div>
                  <div className="text-sm text-gray-500">Government Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#12428B]">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Display Types Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Tv, name: "Video Walls", desc: "Multi-screen arrays" },
                { icon: Monitor, name: "Interactive Kiosks", desc: "Touch & self-service" },
                { icon: Layout, name: "Menu Boards", desc: "Digital restaurant displays" },
                { icon: MapPin, name: "Wayfinding", desc: "Interactive directories" },
                { icon: Grid, name: "LED Screens", desc: "High-brightness outdoor" },
                { icon: Monitor, name: "Conference Room", desc: "Meeting room signage" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="display-card p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group">
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

      {/* Our Display Brands */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Leading Display Brands</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the world's most trusted display manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Samsung", logo: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-logo.png" },
              { name: "LG", logo: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo.png" },
              { name: "Philips", logo: "https://1000logos.net/wp-content/uploads/2021/04/Philips-logo.png" },
              { name: "NEC", logo: "https://1000logos.net/wp-content/uploads/2021/02/NEC-logo.png" },
              { name: "Sharp", logo: "https://1000logos.net/wp-content/uploads/2023/04/Sharp-Logo.png" },
              { name: "Sony", logo: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo.png" }
            ].map((brand, idx) => (
              <div key={idx} className="brand-card cursor-pointer bg-white p-4 rounded-xl shadow-sm text-center">
                <img src={brand.logo} alt={brand.name} className="w-full h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Display Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Advanced Display Technologies</span>
            </h2>
            <p className="text-xl text-gray-600">Cutting-edge solutions for modern applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: "Interactive Touch Tables",
                tech: "DISPLAX + Interactive Scape",
                desc: "Multi-user collaboration with object recognition—detects hands, gestures, and smartphones placed on surface. Up to 100 simultaneous touches.",
                features: ["PCAP technology", "Object recognition", "BYOD ready"]
              },
              {
                icon: Monitor,
                title: "Fine Pitch LED Walls",
                tech: "Samsung / LG",
                desc: "Seamless indoor displays with ultra-fine pixel pitch. Perfect for lobbies, control rooms, and high-end retail environments.",
                features: ["0.9mm pixel pitch", "No visible seams", "4K/8K capable"]
              },
              {
                icon: Grid,
                title: "Transparent Displays",
                tech: "LG / Panasonic",
                desc: "See-through OLED and LCD displays for retail showcases, museum exhibits, and architectural integration.",
                features: ["40% transparency", "Interactive option", "Showcase integration"]
              },
              {
                icon: Zap,
                title: "Outdoor High-Brightness",
                tech: "Samsung / Philips",
                desc: "Weatherproof displays with 2,500-7,000 nits brightness for direct sunlight visibility.",
                features: ["IP65 rated", "Auto-brightness", "-30°C to 50°C"]
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="product-card rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#12428B] to-[#3B82F6] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-[#F97316] font-semibold mb-3">{item.tech}</p>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded-full text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Solutions by Industry</span>
            </h2>
            <p className="text-xl text-gray-600">Tailored digital signage for every sector</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Government */}
            <div className="industry-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#12428B]" />
                </div>
                <h3 className="text-xl font-bold">Government</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Public information displays</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Emergency notification systems</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Service queue management</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Interactive directories</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Legislative chamber displays</li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="industry-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#12428B]" />
                </div>
                <h3 className="text-xl font-bold">Corporate</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Lobby welcome walls</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Meeting room schedulers</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Employee communications</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>KPI dashboards</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Digital receptionists</li>
              </ul>
            </div>

            {/* Education */}
            <div className="industry-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <School className="w-6 h-6 text-[#12428B]" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Campus directories</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Event schedules</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Emergency alerts</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Digital bulletin boards</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Interactive learning stations</li>
              </ul>
            </div>

            {/* Retail */}
            <div className="industry-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-[#12428B]" />
                </div>
                <h3 className="text-xl font-bold">Retail</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Digital shelf labels</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Promotional displays</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Interactive catalogs</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Queue management</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Window-facing displays</li>
              </ul>
            </div>

            {/* Hospitality */}
            <div className="industry-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Hotel className="w-6 h-6 text-[#12428B]" />
                </div>
                <h3 className="text-xl font-bold">Hospitality</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Digital menu boards</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Event signage</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Wayfinding kiosks</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Room rate displays</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Conference room signs</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="industry-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-[#12428B]" />
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Patient check-in kiosks</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Wayfinding directories</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Room status boards</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Educational content</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#F97316] rounded-full"></span>Emergency notifications</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg text-white font-semibold inline-flex items-center gap-2">
              View All Industry Solutions <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Display Types by Application */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="brand-gradient">Display Types by Application</span>
            </h2>
            <p className="text-xl text-gray-600">The right display for every purpose</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Image,
                title: "Video Walls",
                types: ["LCD narrow-bezel (0.88mm)", "Fine-pitch LED", "Curved configurations", "Interactive video walls"],
                applications: ["Lobbies", "Control rooms", "Retail feature walls", "Broadcast sets"]
              },
              {
                icon: Monitor,
                title: "Interactive Kiosks",
                types: ["Self-service kiosks", "Touch directories", "Photo/print stations", "Check-in terminals"],
                applications: ["Government offices", "Hospitals", "Museums", "Airports"]
              },
              {
                icon: Layout,
                title: "Menu Boards",
                types: ["QSR drive-thru", "Full-service restaurant", "Cafeteria displays", "Digital price tags"],
                applications: ["Quick service", "Hotels", "Corporate cafeterias", "Food courts"]
              },
              {
                icon: MapPin,
                title: "Wayfinding",
                types: ["Interactive directories", "Static you-are-here", "Mobile-integrated", "AR wayfinding"],
                applications: ["Hospitals", "Malls", "Universities", "Convention centers"]
              },
              {
                icon: Video,
                title: "Specialty Displays",
                types: ["Transparent OLED", "Mirror displays", "Stretched bar screens", "Dual-sided displays"],
                applications: ["Retail showcases", "Museum exhibits", "Transportation", "Luxury brands"]
              },
              {
                icon: Award,
                title: "Outdoor Displays",
                types: ["High-brightness LCD", "Direct-view LED", "Weatherproof kiosks", "Digital billboards"],
                applications: ["Storefronts", "Bus shelters", "Gas stations", "Public spaces"]
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="product-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#F97316]" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#12428B] mb-2">Types:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {item.types.map((type, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#F97316] rounded-full"></span>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#12428B] mb-2">Applications:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {item.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#12428B] rounded-full"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <p className="text-xl text-gray-600">Ready to transform your visual communication?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Phone, title: "Call Us", info1: "+251 911 234 567", info2: "+251 116 789 012" },
              { icon: MapPinIcon, title: "Visit Us", info1: "Bole Road, Addis Ababa", info2: "Zewditu Tower, 4th Floor" },
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
              <Monitor size={20} />
              Book Free Consultation
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

export default DigitalSignagePage;