import { useEffect, useRef } from "react";
import {
  Award,
  Layers,
  Server,
  Headphones,
  Clock,
  ArrowRight,
} from "lucide-react";

const WhyChooseUs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simplified particle animation
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
      color: string;
    }> = [];

    // Brand colors - using your blue (#1c4c97) and orange (#ff7b16)
    const brandColors = ["rgba(28, 76, 151, 0.1)", "rgba(255, 123, 22, 0.08)"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.length = 0; // Clear particles
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: brandColors[Math.floor(Math.random() * brandColors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
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
      description:
        "Skilled professionals delivering reliable, high-performance solutions.",
      delay: 100,
    },
    {
      icon: Layers,
      title: "End-to-End Service",
      description: "From design to maintenance, everything handled seamlessly.",
      delay: 200,
    },
    {
      icon: Server,
      title: "Premium Partners",
      description: "Access to top global brands and future-ready systems.",
      delay: 300,
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Quick response times and ongoing service for maximum uptime.",
      delay: 400,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f9ff] py-16 lg:py-24">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-30"
        style={{ pointerEvents: "none" }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#2a5da5]/5 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-[#ff7b16]/5 to-transparent rounded-full blur-xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-6 lg:mb-10 text-start">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2a5da5]/10 to-[#ff7b16]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff7b16] animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-[#2a5da5] uppercase">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-[#0a0e27] md:text-4xl lg:text-5xl mb-3">
            Why{" "}
            <span className="relative ">
              <span className="relative z-10 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
                Proactive Trading
              </span>
            </span>{" "}
          </h2>
          <p className=" text-start text-3xl font-bold text-[#2a5da5] mb-2 ">
            The Right Choice
          </p>
          <p className="text-gray-600 ">
            Delivering excellence with our proven track record and
            customer-first approach
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Feature Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative cursor-pointer rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#ff7b16]/30 overflow-hidden"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a5da5]/5 via-white to-[#ff7b16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#ff7b16]/20 transition-all duration-500" />

                {/* Icon with animation */}
                <div className="relative mb-5">
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a5da5] to-[#0a0e27] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#2a5da5]/30">
                    <feature.icon
                      className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="relative mb-3 text-lg font-bold text-[#0a0e27] lg:text-xl transition-colors duration-300 group-hover:text-[#2a5da5]">
                  {feature.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-gray-600 lg:text-base">
                  {feature.description}
                </p>

                {/* Hover arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="h-5 w-5 text-[#ff7b16]" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0e27] via-[#2a5da5] to-[#0a0e27] p-6 shadow-2xl lg:row-span-2 lg:p-8">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b16] rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-[#2a5da5] rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              />
            </div>

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(#ff7b16 1px, transparent 1px), linear-gradient(90deg, #ff7b16 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              {/* Icon with glow effect */}
              <div className="mb-6 relative">
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Clock className="h-7 w-7 text-white" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                Leading the{" "}
                <span className="bg-gradient-to-r from-[#ff7b16] to-yellow-300 bg-clip-text text-transparent">
                  Future of IT
                </span>{" "}
                in Ethiopia
              </h3>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7b16]/20 to-transparent px-4 py-2 w-fit">
                <span className="text-sm font-semibold text-white">
                  Pioneering Innovation Since Day One
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-white/70 lg:text-base flex-grow">
                As Ethiopia's IT innovators, we've helped shape the nation's
                digital transformation with proven expertise and
                industry-defining solutions.
              </p>

              {/* Benefits list */}
              <ul className="mb-8 space-y-4">
                {[
                  "Decades of trusted IT leadership",
                  "Benchmark-setting innovation & reliability",
                  "Customer-first approach",
                  "Future-ready solutions",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#ff7b16] to-[#e47325] transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-[#ff7b16]/50">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-white/80 lg:text-base transition-colors duration-300 group-hover/item:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button with hover effects */}
              <button className="group/btn relative overflow-hidden rounded-full bg-gradient-to-r from-[#ff7b16] to-[#e47325] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-[#ff7b16]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff7b16]/40 hover:scale-[1.02] active:scale-[0.98]">
                {/* Shine effect */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  }}
                />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Visit Our Projects
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
