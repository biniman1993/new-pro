import { motion } from "framer-motion";
import { 
  Server, Shield, Cpu, HardDrive, Zap, ChevronRight, ArrowRight, 
  CheckCircle2, Phone, Mail, MapPin, Clock, Calendar, Users,
  Download, ExternalLink, Play, Layers, Activity, Database,
  Lock, Cloud, Wifi, Box, Grid, Cpu as CpuIcon, HardDrive as HddIcon
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const DataCenter = () => {
  // Brand Colors
  const brandColors = {
    darkBlue: "#12428B",
    mediumBlue: "#3B82F6",
    orange: "#F97316",
    darkOrange: "#E96D1C",
    lightBg: "#F8FAFC"
  };

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with brand gradient overlay */}
        <motion.img 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12428B]/95 via-[#12428B]/80 to-[#F97316]/70" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.span 
            {...fadeIn} 
            className="px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium mb-6 inline-block"
          >
            ⚡ Next-Generation Data Center Infrastructure
          </motion.span>
          <motion.h1 
            {...fadeIn} 
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Powering Ethiopia's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-200">
              Digital Future
            </span>
          </motion.h1>
          <motion.p 
            {...fadeIn} 
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            Enterprise-grade server solutions from HPE, Dell, Cisco, and Lenovo. 
            Built for AI workloads, cloud computing, and mission-critical operations.
          </motion.p>
          
          {/* Action Buttons - Hero */}
          <motion.div 
            {...fadeIn} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#F97316] hover:bg-[#E96D1C] text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group">
              Explore All Solutions 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2">
              <Play size={18} /> Watch Demo
            </button>
            <button className="px-8 py-4 bg-[#12428B] hover:bg-[#0e3675] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              <Phone size={18} /> Contact Sales
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-white"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-white/60 text-sm">Servers Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-white/60 text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/60 text-sm">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-white/60 text-sm">Global Brands</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <ChevronRight size={24} className="rotate-90" />
        </motion.div>
      </section>

      {/* --- IMPORTANCE SECTION - WHY SERVER INFRASTRUCTURE MATTERS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              {...fadeIn}
              className="px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-medium mb-4 inline-block"
            >
              Why It Matters
            </motion.span>
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              The Backbone of Modern <span className="text-[#12428B]">Business</span>
            </motion.h2>
            <motion.p 
              {...fadeIn}
              className="text-slate-600 text-lg max-w-3xl mx-auto"
            >
              In today's digital economy, your server infrastructure determines your competitive advantage. 
              Legacy systems create bottlenecks that cost time, money, and opportunities.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Zap className="w-8 h-8" />, 
                stat: "40%", 
                title: "Faster Processing", 
                desc: "Latest Intel Xeon and AMD EPYC processors handle complex transactions in milliseconds",
                color: "#12428B"
              },
              { 
                icon: <Shield className="w-8 h-8" />, 
                stat: "99.999%", 
                title: "Uptime Guarantee", 
                desc: "Mission-critical reliability means your operations never stop. No revenue loss from downtime",
                color: "#3B82F6"
              },
              { 
                icon: <Activity className="w-8 h-8" />, 
                stat: "3x", 
                title: "Scalability", 
                desc: "From 10 users to 10,000 - infrastructure that grows with you without replacing systems",
                color: "#F97316"
              },
              { 
                icon: <Database className="w-8 h-8" />, 
                stat: "30%", 
                title: "Lower TCO", 
                desc: "Energy-efficient architectures reduce power and cooling costs while delivering more performance",
                color: "#E96D1C"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white"
                  style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)` }}
                >
                  {item.icon}
                </div>
                <div className="text-3xl font-black mb-2" style={{ color: item.color }}>{item.stat}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Importance CTA */}
          <motion.div 
            {...fadeIn}
            className="mt-12 text-center"
          >
            <button className="px-8 py-4 bg-[#12428B] hover:bg-[#0e3675] text-white font-bold rounded-xl transition-all inline-flex items-center gap-2">
              Download Server Infrastructure Guide <Download size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- SUPPLIERS & VENDORS SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <motion.span 
                {...fadeIn}
                className="px-4 py-1.5 rounded-full bg-blue-100 text-[#12428B] text-sm font-medium mb-4 inline-block"
              >
                Our Partners
              </motion.span>
              <motion.h2 
                {...fadeIn}
                className="text-4xl font-black mb-4"
              >
                World-Class <span className="text-[#F97316]">Suppliers</span>
              </motion.h2>
              <motion.p 
                {...fadeIn}
                className="text-slate-600"
              >
                Official distributors of leading global server manufacturers with authentic products 
                and full warranty support across Ethiopia.
              </motion.p>
            </div>
            <motion.button 
              {...fadeIn}
              className="text-[#12428B] font-bold flex items-center gap-2 hover:text-[#F97316] transition-colors"
            >
              View All Partners <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Vendor Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              { name: "HPE", logo: "https://1000logos.net/wp-content/uploads/2017/05/HPE-logo.png", desc: "ProLiant Servers" },
              { name: "Dell", logo: "https://1000logos.net/wp-content/uploads/2017/05/Dell-Logo.png", desc: "PowerEdge" },
              { name: "Cisco", logo: "https://1000logos.net/wp-content/uploads/2016/10/Cisco-Logo.png", desc: "UCS Solutions" },
              { name: "Lenovo", logo: "https://1000logos.net/wp-content/uploads/2017/05/Lenovo-logo.png", desc: "ThinkSystem" },
              { name: "IBM", logo: "https://1000logos.net/wp-content/uploads/2020/03/IBM-Logo.png", desc: "Power Systems" }
            ].map((vendor, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center group cursor-pointer"
              >
                <img 
                  src={vendor.logo} 
                  alt={vendor.name}
                  className="h-16 object-contain mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <h3 className="font-bold text-lg">{vendor.name}</h3>
                <p className="text-sm text-slate-500">{vendor.desc}</p>
                <div className="mt-3 text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supplier Benefits */}
          <motion.div 
            {...fadeIn}
            className="bg-gradient-to-r from-[#12428B] to-[#3B82F6] rounded-3xl p-8 text-white"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">100% Authentic</h4>
                  <p className="text-white/70 text-sm">Direct from manufacturers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Full Warranty</h4>
                  <p className="text-white/70 text-sm">Valid across Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Local Support</h4>
                  <p className="text-white/70 text-sm">Certified engineers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVER SOLUTIONS GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              {...fadeIn}
              className="px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-medium mb-4 inline-block"
            >
              Comprehensive Portfolio
            </motion.span>
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Modern <span className="text-[#12428B]">Server Solutions</span>
            </motion.h2>
            <motion.p 
              {...fadeIn}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              12 different server architectures for every workload, from edge computing to AI training
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: <Server />, name: "Rack Servers", desc: "1U/2U/4U form factors", features: ["Intel Xeon/AMD EPYC", "Up to 32 DDR5 slots", "Hot-swap PSUs"], color: "#12428B" },
              { icon: <Grid />, name: "Blade Servers", desc: "Modular density", features: ["8 blades per chassis", "Shared infrastructure", "Virtualization ready"], color: "#3B82F6" },
              { icon: <HddIcon />, name: "Storage Servers", desc: "Petabyte-scale", features: ["SAS/SATA/NVMe", "Hot-swap drives", "Data archiving"], color: "#F97316" },
              { icon: <CpuIcon />, name: "GPU Servers", desc: "AI/ML acceleration", features: ["NVIDIA H100/A100", "Deep learning", "Scientific computing"], color: "#E96D1C" },
              { icon: <Wifi />, name: "Edge Servers", desc: "5G ready", features: ["Dust-proof design", "Remote sites", "Real-time processing"], color: "#12428B" },
              { icon: <Layers />, name: "Hyper-Converged", desc: "Compute + storage", features: ["Single management", "VMware/Nutanix", "Simplified scaling"], color: "#3B82F6" },
              { icon: <Box />, name: "Micro Servers", desc: "Low power", features: ["Compact form factor", "Small offices", "Quiet operation"], color: "#F97316" },
              { icon: <Activity />, name: "Telco Servers", desc: "Carrier-grade", features: ["NEBS Level 3", "5G core", "Redundant power"], color: "#E96D1C" },
              { icon: <Zap />, name: "Liquid Cooled", desc: "Eco-friendly", features: ["40% energy savings", "High density", "Quieter"], color: "#12428B" },
              { icon: <Lock />, name: "Mission-Critical", desc: "Fault-tolerant", features: ["99.999% uptime", "Redundant", "Banking/Healthcare"], color: "#3B82F6" },
              { icon: <Database />, name: "SAP HANA", desc: "In-memory", features: ["SAP certified", "Real-time analytics", "Large memory"], color: "#F97316" },
              { icon: <Cloud />, name: "Software-Defined", desc: "Virtualized", features: ["Dynamic resources", "Cloud management", "Auto provisioning"], color: "#E96D1C" }
            ].map((server, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: `linear-gradient(135deg, ${server.color} 0%, ${server.color}80 100%)` }}
                >
                  {server.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{server.name}</h3>
                <p className="text-sm font-medium" style={{ color: server.color }}>{server.desc}</p>
                <ul className="mt-3 space-y-1 mb-4">
                  {server.features.map((feature, i) => (
                    <li key={i} className="text-xs text-slate-500 flex items-center gap-1">
                      <span className="w-1 h-1 bg-[#F97316] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-[#12428B] text-sm font-bold group-hover:text-[#F97316] transition-colors">
                  View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solutions CTA */}
          <motion.div 
            {...fadeIn}
            className="mt-12 text-center"
          >
            <button className="px-8 py-4 bg-[#F97316] hover:bg-[#E96D1C] text-white font-bold rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-orange-500/30">
              Compare Server Models <ExternalLink size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE SECTION - WHY PROACTIVE --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#12428B] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div {...fadeIn}>
            <span className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Why Ethiopia's Top Enterprises <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                Trust Proactive Trading
              </span>
            </h2>
            
            <div className="space-y-6">
              {[
                { icon: <Shield />, text: "100% Authentic Products with Global Warranty", desc: "Direct from manufacturers with full traceability" },
                { icon: <Users />, text: "Certified Local Support Engineers", desc: "24/7 technical support and maintenance" },
                { icon: <MapPin />, text: "Nationwide Logistics & Installation", desc: "Warehouse in Addis Ababa, delivering across Ethiopia" },
                { icon: <Clock />, text: "Rapid Response Times", desc: "Onsite support within 24 hours for critical issues" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start group hover:bg-white/5 p-4 rounded-xl transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.text}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              {...fadeIn}
              className="mt-8 px-8 py-4 bg-[#F97316] hover:bg-[#E96D1C] text-white font-bold rounded-xl transition-all inline-flex items-center gap-2"
            >
              Learn More About Our Services <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-[#12428B]/30 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1000" 
              className="relative rounded-3xl shadow-2xl border border-white/10 object-cover aspect-video w-full"
              alt="Engineering support team"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold">50+</div>
                <div>
                  <p className="text-xs text-slate-500">Happy</p>
                  <p className="font-bold">Enterprise Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION - MEET WITH US --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              {...fadeIn}
              className="px-4 py-1.5 rounded-full bg-orange-100 text-[#F97316] text-sm font-medium mb-4 inline-block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Let's Discuss Your <span className="text-[#12428B]">Infrastructure Needs</span>
            </motion.h2>
            <motion.p 
              {...fadeIn}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Our technical experts are ready to help you design the perfect server solution for your business
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Call Card */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#12428B] to-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-slate-600 mb-2">+251 911 234 567</p>
              <p className="text-slate-600 mb-4">+251 116 789 012</p>
              <p className="text-sm text-[#F97316] font-semibold">24/7 Support Available</p>
              <button className="mt-6 text-[#12428B] font-bold flex items-center justify-center gap-2 hover:text-[#F97316] transition-colors w-full">
                Call Now <Phone size={16} />
              </button>
            </motion.div>

            {/* Visit Card */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#F97316] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-slate-600 mb-2">Bole Road, Addis Ababa</p>
              <p className="text-slate-600 mb-4">Zewditu Tower, 4th Floor</p>
              <p className="text-sm text-[#F97316] font-semibold">Mon-Fri: 8:30 - 5:30</p>
              <button className="mt-6 text-[#12428B] font-bold flex items-center justify-center gap-2 hover:text-[#F97316] transition-colors w-full">
                Get Directions <MapPin size={16} />
              </button>
            </motion.div>

            {/* Email Card */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#E96D1C] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-slate-600 mb-2">sales@proactive-trading.com</p>
              <p className="text-slate-600 mb-4">support@proactive-trading.com</p>
              <p className="text-sm text-[#F97316] font-semibold">Reply within 24hrs</p>
              <button className="mt-6 text-[#12428B] font-bold flex items-center justify-center gap-2 hover:text-[#F97316] transition-colors w-full">
                Send Message <Mail size={16} />
              </button>
            </motion.div>
          </div>

          {/* Main CTA - Book Consultation */}
          <motion.div
            {...fadeIn}
            className="bg-gradient-to-r from-[#12428B] to-[#F97316] rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to upgrade your infrastructure?</h3>
                <p className="text-white/80">Get a free technical consultation and quote within 24 hours</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-[#12428B] font-bold rounded-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Book Consultation
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Buttons */}
          <motion.div 
            {...fadeIn}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <button className="px-6 py-3 bg-[#12428B] text-white rounded-xl hover:bg-[#0e3675] transition-all flex items-center gap-2">
              <Phone size={16} /> Call Now
            </button>
            <button className="px-6 py-3 bg-[#F97316] text-white rounded-xl hover:bg-[#E96D1C] transition-all flex items-center gap-2">
              <Mail size={16} /> Send Email
            </button>
            <button className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all flex items-center gap-2">
              <Calendar size={16} /> Schedule Meeting
            </button>
            <button className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:border-[#12428B] hover:text-[#12428B] transition-all flex items-center gap-2">
              <Download size={16} /> Price List
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataCenter;