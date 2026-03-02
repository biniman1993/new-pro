import { useEffect, useRef, useState, useCallback } from "react";
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
import hero1 from "../assets/hero/h1.png";
import hero2 from "../assets/hero/lsptop (2).png";
import hero3 from "../assets/hero/cisco.png";
import hero4 from "../assets/hero/disp.png";
import hero5 from "../assets/hero/tv.png";
import hero6 from "../assets/hero/server1.png";
interface SlideContent {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [animatingSlide, setAnimatingSlide] = useState(0);

  const slides: SlideContent[] = [
    {
      title: "Proactive for Modern World",
      description:
        "Proactive Trading: Your trusted partner for premium electronics and enterprise technology solutions across Ethiopia. Proud official distributors of leading global technology brands.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Modern Laptops and Gamming",
      description:
        "Powerful and reliable laptops designed for work and personal use, with next-gen Intel and Ryzen processors, premium 4K screens, and enterprise-level security from top brands.",
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      title: "Cisco Routers and Switches",
      description:
        "Complete Cisco networking solutions including enterprise routers, managed switches, high-performance access points, advanced firewalls, and essential accessories for secure business connectivity.",
      icon: <Wifi className="w-8 h-8" />,
    },
    {
      title: "Digital Display and Signage",
      description:
        "Premium interactive touch displays, dynamic digital signage, and professional presentation solutions for modern offices, retail spaces, educational institutions, and hospitality environments",
      icon: <Tv className="w-8 h-8" />,
    },
    {
      title: "Modern TV & Boards",
      description:
        "Smart conference room solutions with interactive whiteboards, large format 4K displays, and wireless presentation systems for seamless collaboration in modern workspaces and boardrooms.",
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: "Data Center Infrastructure",
      description:
        "Premium supplier of HPE ProLiant, Dell PowerEdge, and Cisco UCS servers - from rackmount and blade systems to storage arrays and virtualization solutions for modern data centers.",
      icon: <Settings className="w-8 h-8" />,
    },
  ];

  const productImages = [hero1, hero2, hero3, hero4, hero5, hero6];

  // Intersection Observer for performance - only animate when in view
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
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length, isInView]);

  // Handle slide change animation
  useEffect(() => {
    setAnimatingSlide(currentSlide);
  }, [currentSlide]);

  const handleSlideClick = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

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
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes heroDescFade {
          0% { 
            opacity: 0; 
            transform: translateY(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes heroImageSlide {
          0% { 
            opacity: 0; 
            transform: translateX(40px) scale(0.95);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        
       .hero-text-gradient {
  background: linear-gradient(135deg, 
    #2a5da5 0%,      /* hsl(221 83% 40%) */
    #3B82F6 25%,     /* hsl(217 91% 60%) */
    #F97316 50%,     /* hsl(24 95% 53%) */
    #E96D1C 75%,     /* hsl(21 90% 48%) */
    #12428B 100%     /* hsl(221 83% 40%) */
  );
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
        
 .hero-primary-btn {
  background: linear-gradient(135deg, 
    #2a5da5 20%,     /* Dark blue */
    #F97316 80%     /* Orange - appears at 80% for dramatic effect */
  );
}
        
        .hero-primary-btn:hover {
          box-shadow: 0 20px 40px -12px hsla(24, 95%, 53%, 0.4);
        }
        
        .hero-play-btn-icon {
          background: linear-gradient(135deg, 
            hsl(217 91% 60%) 0%, 
            hsl(24 95% 53%) 100%
          );
        }
        
        .hero-indicator-active {
          background: linear-gradient(90deg, 
            hsl(217 91% 50%) 0%, 
            hsl(24 95% 53%) 100%
          );
        }
        
        .hero-orb-blue {
          background: radial-gradient(circle, hsla(217, 91%, 60%, 0.15) 0%, transparent 70%);
        }
        
        .hero-orb-orange {
          background: radial-gradient(circle, hsla(24, 95%, 53%, 0.12) 0%, transparent 70%);
        }
        
        .hero-bottom-fade {
          background: linear-gradient(to top, hsl(30 80% 96%) 0%, transparent 100%);
        }
        
        .hero-badge-dot {
          background-color: hsl(142 71% 45%);
          box-shadow: 0 10px 15px -3px hsla(142, 71%, 45%, 0.5);
        }
        
        /* Fixed height containers to prevent layout shift */
        .title-container {
          min-height: 80px;
        }
        
        @media (min-width: 640px) {
          .title-container {
            min-height: 90px;
          }
        }
        
        @media (min-width: 1024px) {
          .title-container {
            min-height: 100px;
          }
        }
        
        .desc-container {
          min-height: 80px;
        }
        
        .image-container {
          min-height: 300px;
        }
        
        @media (min-width: 1024px) {
          .image-container {
            min-height: 400px;
          }
        }
      `}</style>

      {/* Static Background Elements - No animation for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Blue Orb - Very subtle */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            left: "-10%",
            top: "-20%",
            background: "#d3dce9",
            opacity: 0.15,
          }}
        />

        {/* Medium Blue Orb - Secondary */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            left: "20%",
            bottom: "10%",
            background: "#e0edff",
            opacity: 0.1,
          }}
        />

        {/* Large Orange Orb - Very subtle */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            right: "-5%",
            top: "10%",
            background: "#ffffff",
            opacity: 0.12,
          }}
        />

        {/* Medium Orange Orb - Bottom right */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            right: "15%",
            bottom: "0%",
            background: "#4275bd",
            opacity: 0.08,
          }}
        />

        {/* Small Center Orb - Very light blend */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            left: "10%",
            top: "10%",
            background: "#285594",
            opacity: 0.05,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Fixed Badge - No animation on slide change */}
            <div className="inline-flex items-center mt-4 gap-2 px-4 py-2 hero-glass-card rounded-full fade-in-up">
              <span className="w-3 h-3 rounded-full hero-badge-dot " />
              <span className="text-sm text-foreground/80 font-semibold">
                Official Authorized Distributor
              </span>
            </div>

            {/* Dynamic Title - Fixed height container */}
            <div className="space-y-4">
              <div className="title-container flex items-start">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight ">
                  <span
                    className="hero-text-gradient block hero-title-animate"
                    key={`title-${animatingSlide}`}
                  >
                    {slides[currentSlide].title}
                  </span>
                </h1>
              </div>

              <div className="desc-container">
                <p
                  className="text-lg text-muted-foreground max-w-xl leading-relaxed hero-desc-animate"
                  key={`desc-${animatingSlide}`}
                >
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* CTA Buttons - Fixed, no animation on slide change */}
            <div
              className="flex flex-wrap gap-4 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button className="group relative px-5 py-3.5 hero-primary-btn font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group flex items-center gap-3 px-5 py-3.5 hero-glass-card  font-semibold text-foreground transition-all duration-300 hover:bg-background/90 hover:scale-[1.02]">
                <div className="w-9 h-9 rounded-full hero-play-btn-icon flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 fill-current  text-white " />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Modern Slide Indicators - Minimalist */}
            <div
              className="flex gap-2 pt-2 justify-center lg:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideClick(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? "w-8 h-2 bg-gradient-to-r from-[#ff7b16] to-[#e47325] shadow-sm shadow-orange-500/50"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Image with fixed container */}
          <div
            className={`relative image-container flex items-center justify-center transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl mb-2 md:mt-2 lg:mt-10 xl:mt-10  ">
              <img
                src={productImages[currentSlide]}
                alt={slides[currentSlide].title}
                className="w-full h-auto max-h-[450px] md:max-h-[500px] lg:max-h-[400px] xl:max-h-[500px] object-contain hero-image-animate"
                key={`img-${animatingSlide}`}
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col min-h-[90vh]">
          {/* Fixed Badge */}
          <div
            className={`flex justify-center mb-6 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 hero-glass-card rounded-full">
              <span className="w-3 h-3 rounded-full hero-badge-dot" />
              <span className="text-sm text-foreground/80 font-bold">
                Official Authorized Distributor
              </span>
            </div>
          </div>

          {/* Image - MOVED UP: Now appears right after badge */}
          <div className="flex-1 flex items-center justify-center mb-1 sm:mb-4 md:mb-6 image-container">
            <img
              src={productImages[currentSlide]}
              alt={slides[currentSlide].title}
              className="w-full max-w-md h-auto max-h-[260px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[350px] object-contain hero-image-animate"
              key={`mobile-img-${animatingSlide}`}
            />
          </div>

          {/* Title - MOVED DOWN: Now appears after image */}
          <div className="text-center mb-2 sm:mb-0 md:mb-1  title-container flex items-start justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span
                className="hero-text-gradient block hero-title-animate"
                key={`mobile-title-${animatingSlide}`}
              >
                {slides[currentSlide].title}
              </span>
            </h1>
          </div>

          {/* Description - MOVED DOWN: Now appears after title */}
          <div className="text-center mb-2 sm:mb-1 md:mb-1  desc-container px-4">
            <p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed hero-desc-animate"
              key={`mobile-desc-${animatingSlide}`}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Buttons - Below image for mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 px-4">
            <button className="w-full sm:w-auto group relative px-6 py-3 hero-primary-btn rounded-xl font-semibold text-[#ffffff] overflow-hidden transition-all duration-300 hover:shadow-xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Products
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="w-full text-black sm:w-auto group flex items-center justify-center gap-3 px-5 py-3 hero-glass-card rounded-xl font-semibold text-foreground transition-all duration-300 hover:bg-background/90">
              <div className="w-9 h-9 rounded-full hero-play-btn-icon flex items-center justify-center text-primary-foreground">
                <Play className=" text-black w-4 h-4 fill-current" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Slide Indicators - Minimal & Clean */}
          <div className="flex justify-center items-center gap-2 pb-5 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideClick(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2.5 bg-gradient-to-r from-[#ff7b16] to-[#e47325] shadow-md shadow-orange-500/40"
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
