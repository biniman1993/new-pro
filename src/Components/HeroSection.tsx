import { useEffect, useRef, useState } from 'react';
import { Monitor, Server, Wifi, Tv, Cpu, Settings, ChevronRight, Play, Smartphone, Headphones, Camera, HardDrive } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface SlideContent {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const slides: SlideContent[] = [
    {
      title: "Proactive Trading",
      description: "Your trusted partner for premium electronics and technology solutions across Ethiopia. Official distributors of leading global brands.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Modern Laptops",
      description: "High-performance laptops for business and personal use. Latest processors, premium displays, and enterprise-grade security features.",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Cisco Products",
      description: "Enterprise networking solutions, security systems, and collaboration tools. Certified Cisco products with full warranty support.",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Digital Display",
      description: "Interactive displays, digital signage, and presentation solutions for modern offices, retail spaces, and educational institutions.",
      icon: <Tv className="w-8 h-8" />
    },
    {
      title: "Modern TV & Boards",
      description: "Smart conference room solutions, interactive whiteboards, and large format displays for collaborative workspaces.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Advanced Tech Solutions",
      description: "Complete technology ecosystems - from installation to maintenance, ensuring seamless integration and optimal performance.",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  const stats: StatItem[] = [
    { value: 2500, suffix: '+', label: 'Products Delivered' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Partner Brands' }
  ];

  const products = [
    { name: 'Dell Laptop', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop', rotation: 0 },
    { name: 'HP Server', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop', rotation: 72 },
    { name: 'Cisco Router', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop', rotation: 144 },
    { name: 'Smart Display', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop', rotation: 216 },
    { name: 'Printer Pro', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop', rotation: 288 }
  ];

  const featureCards = [
    {
      title: "Modern Laptops",
      description: "High-performance laptops for business and personal use. Latest processors, premium displays, and enterprise-grade security features.",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cisco Products",
      description: "Enterprise networking solutions, security systems, and collaboration tools. Certified Cisco products with full warranty support.",
      icon: <Wifi className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Digital Display",
      description: "Interactive displays, digital signage, and presentation solutions for modern offices, retail spaces, and educational institutions.",
      icon: <Tv className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Smart Servers",
      description: "Enterprise-grade servers with cloud integration, AI-powered monitoring, and 24/7 support for mission-critical operations.",
      icon: <Server className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Devices",
      description: "Latest smartphones and tablets with cutting-edge technology, stunning displays, and seamless ecosystem integration.",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Audio Systems",
      description: "Premium audio equipment from headphones to conference systems. Crystal-clear sound for every environment.",
      icon: <Headphones className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Security Cameras",
      description: "Advanced surveillance systems with AI detection, cloud storage, and 4K resolution for complete security coverage.",
      icon: <Camera className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const slideInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length, isPaused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateStats();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 16);
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProductHover = (index: number) => {
    setHoveredProduct(index);
    setIsPaused(true);
    setCurrentSlide(index);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
    setIsPaused(false);
  };

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <style>{`
      @keyframes text-glide {
  0% { 
    opacity: 0; 
    transform: translateX(-20px) translateY(0);
    letter-spacing: -0.5px;
  }
  100% { 
    opacity: 1; 
    transform: translateX(0) translateY(0);
    letter-spacing: normal;
  }
}

@keyframes slide-in-left-smooth {
  0% { 
    opacity: 0; 
    transform: translateX(-30px); 
    filter: blur(5px);
  }
  100% { 
    opacity: 1; 
    transform: translateX(0); 
    filter: blur(0);
  }
}

@keyframes slide-out-left {
  0% { 
    opacity: 1; 
    transform: translateX(0); 
  }
  100% { 
    opacity: 0; 
    transform: translateX(-30px); 
  }
}

@keyframes slide-out-right {
  0% { 
    opacity: 1; 
    transform: translateX(0); 
  }
  100% { 
    opacity: 0; 
    transform: translateX(30px); 
  }
}
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(240px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(240px) rotate(-360deg); }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.3; }
        }

        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-40px) translateY(0); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0) translateY(0); 
          }
        }

        @keyframes slide-in-left-smooth {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
            filter: blur(5px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
            filter: blur(0);
          }
        }

        @keyframes slide-in-right-smooth {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
            filter: blur(5px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
            filter: blur(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fade-zoom {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes orbit-smooth {
          from { transform: rotate(0deg) translateX(240px) rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) translateX(240px) rotate(-180deg) scale(1.1); }
          to { transform: rotate(360deg) translateX(240px) rotate(-360deg) scale(1); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes text-glide {
          0% { 
            opacity: 0; 
            transform: translateX(-20px) translateY(0);
            letter-spacing: -0.5px;
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) translateY(0);
            letter-spacing: normal;
          }
        }

        @keyframes button-slide {
          0% { 
            opacity: 0; 
            transform: translateX(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }

        @keyframes badge-enter {
          0% { 
            opacity: 0; 
            transform: translateX(-25px) scale(0.95);
          }
          70% { 
            transform: translateX(5px) scale(1.02);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
        .animate-orbit { animation: orbit-smooth 20s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-zoom-in { animation: zoom-in 0.8s ease-out forwards; }
        .animate-fade-zoom { animation: fade-zoom 0.8s ease-out forwards; }

        .animate-orbit.paused {
          animation-play-state: paused;
        }

        .scroll-container {
          animation: scroll-left 40s linear infinite;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        .text-gradient {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #f97316 50%, #ea580c 75%, #1e40af 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }

        .glass-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card-hover:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 60px -12px rgba(249, 115, 22, 0.3);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #3b82f6, #f97316) border-box;
          border: 2px solid transparent;
        }

        /* Add for better performance */
        .orbit-item {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - Removed mouse movement but keep glow animation */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full "
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            left: '10%',  // Fixed position
            top: '5%',    // Fixed position
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full "
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
            right: '5%',    // Fixed position
            bottom: '10%',  // Fixed position
            animationDelay: '2s',
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 9px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 6px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* Left Content - Updated with smooth left-to-right animations */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Badge - Smooth left-to-right with bounce */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full"
              style={{ 
                animation: 'badge-enter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              <span className="text-sm text-gray-700 font-semibold">Official Authorized Distributor</span>
            </div>

            {/* Dynamic Title - Animated for ALL slides */}
<div className="space-y-5">
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
    <span 
      className="text-gray-800 block"
      style={{
        animation: 'text-glide 0.8s ease-out forwards',
        animationDelay: '0.2s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >
      Welcome to
    </span>
    <span 
      className="text-gradient block mt-2"
      key={`title-${currentSlide}`} // Add key to trigger animation on slide change
      style={{
        animation: 'text-glide 0.8s ease-out forwards',
        animationDelay: '0.4s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >
      {slides[currentSlide].title}
    </span>
  </h1>

  <p 
    className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
    key={`desc-${currentSlide}`} // Add key to trigger animation on slide change
    style={{
      animation: 'slide-in-left-smooth 0.8s ease-out forwards',
      animationDelay: '0.6s',
      opacity: 0,
      animationFillMode: 'forwards'
    }}
  >
    {slides[currentSlide].description}
  </p>
</div>

            {/* CTA Buttons - Smooth right-to-left slide */}
            <div className="flex flex-wrap gap-4">
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105"
                style={{
                  animation: 'button-slide 0.8s ease-out forwards',
                  animationDelay: '0.8s',
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button 
                className="group flex items-center gap-3 px-6 py-4 glass-card rounded-xl font-semibold text-gray-800 transition-all duration-300 hover:bg-white/90 hover:scale-105"
                style={{
                  animation: 'button-slide 0.8s ease-out forwards',
                  animationDelay: '0.9s',
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Slide Indicators - Fade in from left */}
            <div 
              className="flex gap-2 pt-4"
              style={{
                animation: 'slide-in-left-smooth 0.8s ease-out forwards',
                animationDelay: '1s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide
                      ? 'w-10 bg-gradient-to-r from-blue-600 to-orange-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - 3D Product Showcase */}
          <div className={`relative h-[500px] lg:h-[700px] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Central Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-orange-400/20 blur-3xl animate-pulse" />
            </div>

            {/* Orbiting Products */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[480px] h-[480px] md:w-[600px] md:h-[600px]">
                {/* Enhanced Orbit Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-200/20 animate-pulse-ring" />
                <div className="absolute inset-8 rounded-full border border-orange-200/15 animate-pulse-ring" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-16 rounded-full border border-blue-100/10" />

                {/* Enhanced Center Product */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative w-60 h-60 md:w-72 md:h-72 glass-card rounded-3xl p-6 transition-all duration-500 cursor-pointer hover:scale-105 shadow-2xl overflow-hidden group"
                    key={currentSlide}
                    style={{
                      animation: 'fade-zoom 0.8s ease-out forwards'
                    }}
                  >
                    <img
                      src={products[currentSlide % products.length].image}
                      alt="Featured Product"
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2 glass-card rounded-full shadow-lg backdrop-blur-lg border border-white/20">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                        {products[currentSlide % products.length].name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Orbiting Items */}
                {products.map((product, idx) => {
                  const angle = (idx * 72) * (Math.PI / 180);
                  const radius = 240;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={idx}
                      className={`absolute w-24 h-24 md:w-28 md:h-28 glass-card rounded-2xl p-3 cursor-pointer transition-all duration-700 ${
                        !isPaused ? 'animate-orbit' : ''
                      } hover:!scale-150 hover:!shadow-2xl hover:!z-50 hover:!border-orange-400/50`}
                      style={{
                        top: 'calc(50% - 48px)',
                        left: 'calc(50% - 48px)',
                        transform: `translate(${x}px, ${y}px)`,
                        animationDelay: `${idx * -4}s`,
                        animationDuration: '20s',
                        transformOrigin: 'center',
                        willChange: 'transform, z-index',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={() => handleProductHover(idx)}
                      onMouseLeave={handleProductLeave}
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-xl group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-3">
                          <span className="text-xs text-white font-bold text-center drop-shadow-lg">{product.name}</span>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white">
                        {idx + 1}
                      </div>
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 blur-md" />
                      </div>
                    </div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <circle 
                    cx="50%" 
                    cy="50%" 
                    r="240" 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="0.5" 
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-8 text-center group cursor-pointer"
              style={{
                animation: 'slide-in-left-smooth 0.8s ease-out forwards',
                animationDelay: `${0.6 + (idx * 0.1)}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-3">
                {counts[idx].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Feature Cards */}
        <div className="mt-24 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span 
              className="text-gradient"
              style={{
                animation: 'text-glide 0.8s ease-out forwards',
                animationDelay: '0.2s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              Our Product Range
            </span>
          </h2>

          <div className="relative">
            <div className="flex gap-6 scroll-container">
              {[...featureCards, ...featureCards].map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[320px] md:w-[380px] glass-card glass-card-hover rounded-3xl p-8 cursor-pointer group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gradient transition-all">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.description}</p>
                  <div className="flex items-center gap-2 text-orange-600 text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50 to-transparent" />
    </section>
  );
};

export default HeroSection;