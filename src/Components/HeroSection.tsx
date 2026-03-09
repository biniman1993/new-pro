import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
  Monitor,
  Server,
  Wifi,
  Tv,
  Cpu,
  Settings,
  ChevronRight,
  Play,
} from "lucide-react";
import hero1 from "../assets/hero/h1.webp";
import hero2 from "../assets/hero/lsptop (2).webp";
import hero3 from "../assets/hero/cisco.webp";
import hero4 from "../assets/hero/disp.webp";
import hero5 from "../assets/hero/tv.webp";
import hero6 from "../assets/hero/server1.webp";
import { useNavigate } from "react-router-dom";

interface SlideContent {
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
}

// PERFORMANCE: Moved static data outside to prevent re-allocation on every render
const slides: SlideContent[] = [
  {
    title: "Proactive for Modern World",
    description: "Proactive Trading: Your trusted partner for premium electronics and enterprise technology solutions across Ethiopia. Proud official distributors of leading global technology brands.",
    icon: <Cpu className="w-8 h-8" />,
    route: "/Catalog/BusinessDesktop",
  },
  {
    title: "Modern Laptops and Gaming",
    description: "Powerful and reliable laptops designed for work and personal use, with next-gen Intel and Ryzen processors, premium 4K screens, and enterprise-level security from top brands.",
    icon: <Monitor className="w-8 h-8" />,
    route: "/Catalog/BusinessLaptop",
  },
  {
    title: "Cisco Routers and Switches",
    description: "Complete Cisco networking solutions including enterprise routers, managed switches, high-performance access points, advanced firewalls, and essential accessories for secure business connectivity.",
    icon: <Wifi className="w-8 h-8" />,
    route: "/Catalog/CommercialNetworking",
  },
  {
    title: "Digital Display and Signage",
    description: "Premium interactive touch displays, dynamic digital signage, and professional presentation solutions for modern offices, retail spaces, educational institutions, and hospitality environments",
    icon: <Tv className="w-8 h-8" />,
    route: "/Catalog/AdvertisingDisplay",
  },
  {
    title: "Modern TV & Boards",
    description: "Smart conference room solutions with interactive whiteboards, large format 4K displays, and wireless presentation systems for seamless collaboration in modern workspaces and boardrooms.",
    icon: <Server className="w-8 h-8" />,
    route: "/Catalog/Modern4KTVs",
  },
  {
    title: "Data Center Infrastructure",
    description: "Premium supplier of HPE ProLiant, Dell PowerEdge, and Cisco UCS servers - from rackmount and blade systems to storage arrays and virtualization solutions for modern data centers.",
    icon: <Settings className="w-8 h-8" />,
    route: "/Catalog/ApplicationServers",
  },
];

const productImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // PERFORMANCE: Track animation state to trigger CSS classes without unmounting components
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  // PERFORMANCE: Preload images as soon as the component mounts to prevent white flicker
  useEffect(() => {
    productImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initial visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide only when in view
  useEffect(() => {
    if (!isInView) return;

    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [isInView]);

  const handleNextSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Reset animation state after a short delay to allow re-triggering
    setTimeout(() => setIsAnimating(false), 50);
  }, []);

  const handleSlideClick = useCallback((idx: number) => {
    if (idx === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(idx);
    setTimeout(() => setIsAnimating(false), 50);
  }, [currentSlide]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden hero-gradient-bg"
    >
      <style>{`
        .hero-gradient-bg {
          background: linear-gradient(135deg, 
            hsl(210 40% 98%) 0%, 
            hsl(214 60% 96%) 50%, 
            hsl(30 80% 96%) 100%
          );
        }
        
        .hero-title-animate {
          animation: heroTitleSlide 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .hero-desc-animate {
          animation: heroDescFade 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
          opacity: 0;
        }
        
        .hero-image-animate {
          animation: heroImageSlide 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes heroTitleSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes heroDescFade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes heroImageSlide {
          0% { opacity: 0; transform: translateX(40px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        
        .hero-text-gradient {
          background: linear-gradient(135deg, #2a5da5 10%, #3b78ce 25%, #e27222 50%, #eb843f 75%, #12428B 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-glass-card {
          background: hsla(0, 0%, 100%, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid hsla(0, 0%, 100%, 0.5);
          box-shadow: 0 8px 32px 0 hsla(234, 59%, 33%, 0.1);
        }

        .hero-primary-btn:hover {
          box-shadow: 0 20px 40px -12px hsla(24, 95%, 53%, 0.4);
        }
        
        .hero-badge-dot {
          background-color: hsl(142 71% 45%);
          box-shadow: 0 10px 15px -3px hsla(142, 71%, 45%, 0.5);
        }
        
        .title-container { min-height: 80px; }
        @media (min-width: 640px) { .title-container { min-height: 90px; } }
        @media (min-width: 1024px) { .title-container { min-height: 100px; } }
        .desc-container { min-height: 80px; }
        .image-container { min-height: 300px; }
        @media (min-width: 1024px) { .image-container { min-height: 400px; } }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`space-y-6 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="inline-flex items-center mt-4 gap-2 px-4 py-2 hero-glass-card rounded-full fade-in-up">
              <span className="w-3 h-3 rounded-full hero-badge-dot " />
              <span className="text-sm text-[#2a5da5] font-semibold">Official Authorized Distributor</span>
            </div>

            <div className="space-y-4">
              <div className="title-container flex items-start">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight ">
                  <span className={`hero-text-gradient block ${!isAnimating ? 'hero-title-animate' : 'opacity-0'}`}>
                    {slides[currentSlide].title}
                  </span>
                </h1>
              </div>

              <div className="desc-container">
                <p className={`text-lg text-muted-foreground max-w-xl leading-relaxed ${!isAnimating ? 'hero-desc-animate' : 'opacity-0'}`}>
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={() => {
                  navigate(slides[currentSlide].route);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group relative px-8 py-3 border-2 border-[#2a5da5] text-[#2a5da5] font-bold rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#2a5da5] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Explore Products
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button
                onClick={() => navigate("/datacenter")}
                className="group flex items-center gap-3 px-5 py-3.5 font-semibold text-[#2a5da5] transition-all duration-300 hover:scale-[1.02] border-2 border-[#12428B] hover:border-[#F97316] hover:text-[#F97316] hover:bg-[rgba(249,115,22,0.05)] rounded-xl"
              >
                Read More
              </button>
            </div>

            <div className="flex gap-2 pt-2 justify-center lg:justify-start">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideClick(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? "w-8 h-2 bg-gradient-to-r from-[#2a5da5] to-[#3879d3] shadow-sm shadow-orange-500/50"
                      : "w-2 h-2 bg-[#7e9dc9] hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={`relative image-container flex items-center justify-center transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="relative w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl mb-2 md:mt-2 lg:mt-10 xl:mt-10">
              <img
                src={productImages[currentSlide]}
                alt={slides[currentSlide].title}
                className={`w-full h-auto max-h-[450px] md:max-h-[500px] lg:max-h-[400px] xl:max-h-[500px] object-contain ${!isAnimating ? 'hero-image-animate' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col min-h-[90vh]">
          <div className={`flex justify-center mb-6 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 hero-glass-card rounded-full">
              <span className="w-3 h-3 rounded-full hero-badge-dot" />
              <span className="text-sm text-foreground/80 font-bold">Official Authorized Distributor</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center mb-1 sm:mb-4 md:mb-6 image-container">
            <img
              src={productImages[currentSlide]}
              alt={slides[currentSlide].title}
              className={`w-full max-w-md h-auto max-h-[260px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[350px] object-contain ${!isAnimating ? 'hero-image-animate' : 'opacity-0'}`}
            />
          </div>

          <div className="text-center mb-2 sm:mb-0 md:mb-1 title-container flex items-start justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className={`hero-text-gradient block ${!isAnimating ? 'hero-title-animate' : 'opacity-0'}`}>
                {slides[currentSlide].title}
              </span>
            </h1>
          </div>

          <div className="text-center mb-2 sm:mb-1 md:mb-1 desc-container px-4">
            <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${!isAnimating ? 'hero-desc-animate' : 'opacity-0'}`}>
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 px-4">
            <button
              onClick={() => {
                navigate(slides[currentSlide].route);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-fit group relative px-6 py-3 border-2 border-[#2a5da5] text-[#2a5da5] font-bold rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#143057] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                Explore Products
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => navigate("/datacenter")}
              className="w-fit group flex items-center justify-center gap-3 px-7 py-1.5 font-semibold text-[#2a5da5] transition-all duration-300 border-2 border-[#12428B] rounded-full hover:border-[#F97316] hover:text-[#F97316] hover:bg-[rgba(249,115,22,0.05)] hover:shadow-xl"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-[#2a5da5] to-[#2a5da5] group-hover:from-[#F97316] group-hover:to-[#0a0e27] transition-all duration-300">
                <Play className="w-4 h-4 fill-current text-white" />
              </div>
              Read More
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 pb-5 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideClick(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2.5 bg-gradient-to-r from-[#2a5da5] to-[#e47325] shadow-md shadow-orange-500/40"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;