import { useEffect, useRef } from "react";
import { Award, Layers, Server, Headphones, Clock, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 88, 12, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(234, 88, 12, ${0.08 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const features = [
    {
      icon: Award,
      title: "Certified Expertise",
      description: "Skilled AV professionals delivering reliable, high-performance solutions.",
    },
    {
      icon: Layers,
      title: "Complete End-to-End Service",
      description: "From design to maintenance, everything handled seamlessly.",
    },
    {
      icon: Server,
      title: "Premium Technology Partners",
      description: "Access to top global AV brands and future-ready systems.",
    },
    {
      icon: Headphones,
      title: "Fast, Dedicated Support",
      description: "Quick response times and ongoing service for maximum uptime.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 py-16 lg:py-24">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Decorative SVG Curves - matching the reference design */}
      <svg
        className="absolute left-0 top-0 h-full w-full"
        style={{ pointerEvents: "none" }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curveGradientOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Top curved dotted line */}
        <path
          d="M 200 80 Q 400 60 600 100 Q 800 140 1000 90 Q 1200 40 1400 120"
          fill="none"
          stroke="url(#curveGradientOrange)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="hidden md:block"
        />
        {/* Second curved line */}
        <path
          d="M 100 200 Q 300 250 500 180 Q 700 110 900 200"
          fill="none"
          stroke="url(#curveGradientOrange)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="hidden lg:block"
        />
      </svg>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest text-slate-700 uppercase">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Why{" "}
            <span className="relative inline-block text-orange-500">
              Unique
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 6 Q 50 0, 100 4 T 200 2"
                  stroke="#ea580c"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            is
            <br />
            The Right Choice
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Feature Cards - 2x2 Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 lg:p-8"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 transition-all duration-500 group-hover:bg-orange-500 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon
                    className="h-7 w-7 text-slate-700 transition-all duration-500 group-hover:text-white group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900 lg:text-xl transition-colors duration-300 group-hover:text-orange-600">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 lg:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dark CTA Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl lg:row-span-2 lg:p-8">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(234, 88, 12, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(234, 88, 12, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "25px 25px",
              }}
            />

            {/* Floating particles */}
            <div className="absolute right-4 top-4 h-2 w-2 animate-pulse rounded-full bg-orange-500/40" />
            <div className="absolute right-12 top-8 h-1 w-1 animate-ping rounded-full bg-orange-500/30" style={{ animationDuration: "2s" }} />
            <div className="absolute right-8 top-16 h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500/35" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-20 left-8 h-1 w-1 animate-ping rounded-full bg-orange-500/25" style={{ animationDuration: "3s" }} />
            <div className="absolute bottom-32 left-4 h-2 w-2 animate-pulse rounded-full bg-orange-500/20" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <Clock className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="mb-2 text-2xl font-bold leading-tight text-white lg:text-3xl">
                Leading the
                <br />
                <span className="text-orange-500">Future of IT</span>
                <br />
                in Bangladesh
              </h3>

              <p className="mb-4 text-lg font-semibold text-white">
                Pioneering Innovation Since Day One
              </p>

              <p className="mb-6 text-sm leading-relaxed text-white/60 lg:text-base flex-grow">
                As one of Bangladesh's earliest IT innovators, we've helped
                shape the nation's digital transformation with proven expertise
                and industry-defining solutions.
              </p>

              {/* Check list */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3 group/item">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 transition-transform duration-300 group-hover/item:scale-110">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/80 lg:text-base">
                    Decades of trusted IT leadership
                  </span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 transition-transform duration-300 group-hover/item:scale-110">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/80 lg:text-base">
                    Benchmark-setting innovation & reliability
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]">
                Visit Our Projects
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
