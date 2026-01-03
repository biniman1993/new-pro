import { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Server,
  Wifi,
  Tv,
  Cpu,
  Settings,
  ChevronRight,
  Play,
  Smartphone,
  Headphones,
  Camera,
} from "lucide-react";

interface SlideContent {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);

  const slides: SlideContent[] = [
    {
      title: "Proactive Trading",
      description:
        "Your trusted partner for premium electronics and technology solutions across Ethiopia. Official distributors of leading global brands.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Modern Laptops",
      description:
        "High-performance laptops for business and personal use. Latest processors, premium displays, and enterprise-grade security features.",
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      title: "Cisco Products",
      description:
        "Enterprise networking solutions, security systems, and collaboration tools. Certified Cisco products with full warranty support.",
      icon: <Wifi className="w-8 h-8" />,
    },
    {
      title: "Digital Display",
      description:
        "Interactive displays, digital signage, and presentation solutions for modern offices, retail spaces, and educational institutions.",
      icon: <Tv className="w-8 h-8" />,
    },
    {
      title: "Modern TV & Boards",
      description:
        "Smart conference room solutions, interactive whiteboards, and large format displays for collaborative workspaces.",
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: "Advanced Tech Solutions",
      description:
        "Complete technology ecosystems - from installation to maintenance, ensuring seamless integration and optimal performance.",
      icon: <Settings className="w-8 h-8" />,
    },
  ];

  // Product images corresponding to each slide
  const productImages = [
    "/pro.png", // Proactive Trading
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&auto=format", // Modern Laptops
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w-800&h=600&fit=crop&auto=format", // Cisco Products
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop&auto=format", // Digital Display
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop&auto=format", // TV & Boards
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format", // Tech Solutions
  ];

  const featureCards = [
    {
      title: "Modern Laptops",
      description:
        "High-performance laptops for business and personal use. Latest processors, premium displays, and enterprise-grade security features.",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cisco Products",
      description:
        "Enterprise networking solutions, security systems, and collaboration tools. Certified Cisco products with full warranty support.",
      icon: <Wifi className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Digital Display",
      description:
        "Interactive displays, digital signage, and presentation solutions for modern offices, retail spaces, and educational institutions.",
      icon: <Tv className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Smart Servers",
      description:
        "Enterprise-grade servers with cloud integration, AI-powered monitoring, and 24/7 support for mission-critical operations.",
      icon: <Server className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile Devices",
      description:
        "Latest smartphones and tablets with cutting-edge technology, stunning displays, and seamless ecosystem integration.",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Audio Systems",
      description:
        "Premium audio equipment from headphones to conference systems. Crystal-clear sound for every environment.",
      icon: <Headphones className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Security Cameras",
      description:
        "Advanced surveillance systems with AI detection, cloud storage, and 4K resolution for complete security coverage.",
      icon: <Camera className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const slideInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length, isPaused]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50"
    >
      <style>{`
      @keyframes slide-in-right-to-left {
  0% { 
    opacity: 0; 
    transform: translateX(100px) scale(0.95);
  }
  70% {
    opacity: 1;
    transform: translateX(-10px) scale(1.02);
  }
  100% { 
    opacity: 1; 
    transform: translateX(0) scale(1);
  }
}

@keyframes fade-out {
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  100% { 
    opacity: 0; 
    transform: scale(0.95);
  }
}

.animate-slide-in-right { 
  animation: slide-in-right-to-left 0.8s ease-out forwards; 
}
.animate-fade-out { 
  animation: fade-out 0.5s ease-out forwards; 
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

        @keyframes slide-in-right-smooth {
          0% { 
            opacity: 0; 
            transform: translateX(30px); 
            filter: blur(5px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
            filter: blur(0);
          }
        }

        @keyframes slide-image-right-to-left {
          0% { 
            opacity: 0; 
            transform: translateX(80px) translateY(20px) scale(0.9);
            filter: blur(10px);
          }
          50% { 
            opacity: 0.7; 
            transform: translateX(20px) translateY(5px) scale(1.05);
            filter: blur(2px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes image-zoom-in {
          0% { 
            opacity: 0; 
            transform: scale(0.85) translateX(40px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.3; }
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

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        @keyframes slide-in-from-right {
          0% { 
            opacity: 0; 
            transform: translateX(100px) scale(0.8);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-zoom-in { animation: zoom-in 0.8s ease-out forwards; }
        .animate-fade-zoom { animation: fade-zoom 0.8s ease-out forwards; }
        .animate-slide-from-right { animation: slide-in-from-right 0.8s ease-out forwards; }

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
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            left: "5%",
            top: "5%",
          }}
        />

        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
            right: "5%",
            bottom: "10%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
            right: "5%",
            top: "20%",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full"
              style={{
                animation:
                  "badge-enter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              <span className="text-sm text-gray-700 font-semibold">
                Official Authorized Distributor
              </span>
            </div>

            {/* Dynamic Title */}
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span
                  className="text-gray-800 block"
                  style={{
                    animation: "text-glide 0.8s ease-out forwards",
                    animationDelay: "0.2s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  Welcome to
                </span>
                <span
                  className="text-gradient block mt-2"
                  key={`title-${currentSlide}`}
                  style={{
                    animation: "text-glide 0.8s ease-out forwards",
                    animationDelay: "0.4s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  {slides[currentSlide].title}
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
                key={`desc-${currentSlide}`}
                style={{
                  animation: "slide-in-left-smooth 0.8s ease-out forwards",
                  animationDelay: "0.6s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105"
                style={{
                  animation: "button-slide 0.8s ease-out forwards",
                  animationDelay: "0.8s",
                  opacity: 0,
                  animationFillMode: "forwards",
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
                  animation: "button-slide 0.8s ease-out forwards",
                  animationDelay: "0.9s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Slide Indicators */}
            <div
              className="flex gap-2 pt-4"
              style={{
                animation: "slide-in-left-smooth 0.8s ease-out forwards",
                animationDelay: "1s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide
                      ? "w-10 bg-gradient-to-r from-blue-600 to-orange-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Single Animated Image */}
          <div
            className={`relative h-[500px] lg:h-[700px] flex items-center justify-end ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Main Product Image Container */}
              <div
                key={currentSlide}
                className="relative glass-card rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group cursor-pointer animate-slide-in-right"
                style={{
                  width: "100%",
                  height: "500px",
                  maxHeight: "600px",
                }}
              >
                {/* Product Image */}
                <img
                  src={productImages[currentSlide]}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                      {slides[currentSlide].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-gray-200 text-sm max-w-md">
                        {slides[currentSlide].description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}

                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 -left-8 -bottom-8 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/20 to-orange-100/20 rounded-3xl blur-xl" />

              {/* Subtle Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-blue-300/20 to-orange-300/20 animate-pulse" />
              <div
                className="absolute -bottom-8 -left-6 w-40 h-40 rounded-full bg-gradient-to-br from-orange-300/20 to-blue-300/20 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50 to-transparent" />
    </section>
  );
};

export default HeroSection;
