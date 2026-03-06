import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Add this import

// --- Major Tech & Computers ---

const brands = [
  { id: 1, name: "Apple", logo: "/src/assets/brandslogo/Apple.png" },
  { id: 2, name: "Microsoft", logo: "/src/assets/brandslogo/Microsoft.png" },
  { id: 3, name: "Google", logo: "/src/assets/brandslogo/Google.png" },
  { id: 4, name: "Dell", logo: "/src/assets/brandslogo/Dell.png" },
  { id: 5, name: "HP", logo: "/src/assets/brandslogo/HP.png" },
  { id: 6, name: "Lenovo", logo: "/src/assets/brandslogo/Lenovo.png" },
  { id: 7, name: "Acer", logo: "/src/assets/brandslogo/Acer.png" },
  { id: 8, name: "ASUS", logo: "/src/assets/brandslogo/ASUS.png" },
  { id: 9, name: "MSI", logo: "/src/assets/brandslogo/MSI.png" },
  { id: 10, name: "iBUYPOWER", logo: "/src/assets/brandslogo/iBUYPOWER.png" },
  {
    id: 11,
    name: "CyberPowerPC",
    logo: "/src/assets/brandslogo/CyberPowerPC.png",
  },
  { id: 12, name: "NZXT", logo: "/src/assets/brandslogo/NZXT.png" },
  { id: 13, name: "Gigabyte", logo: "/src/assets/brandslogo/Gigabyte.png" },
  { id: 14, name: "Predator", logo: "/src/assets/brandslogo/Predator.png" },
  { id: 15, name: "AORUS", logo: "/src/assets/brandslogo/AORUS.png" },
  { id: 16, name: "Meta Quest", logo: "/src/assets/brandslogo/Meta Quest.png" },
  { id: 17, name: "Intel", logo: "/src/assets/brandslogo/Intel.png" },
  { id: 18, name: "AMD", logo: "/src/assets/brandslogo/AMD.png" },
  { id: 19, name: "NVIDIA", logo: "/src/assets/brandslogo/NVIDIA.png" },
  { id: 20, name: "ASRock", logo: "/src/assets/brandslogo/ASRock.png" },
  { id: 21, name: "EVGA", logo: "/src/assets/brandslogo/EVGA.png" },
  { id: 22, name: "Sapphire", logo: "/src/assets/brandslogo/Sapphire.png" },
  { id: 23, name: "PNY", logo: "/src/assets/brandslogo/PNY.png" },
  { id: 24, name: "XFX", logo: "/src/assets/brandslogo/XFX.png" },
  { id: 25, name: "Zotac", logo: "/src/assets/brandslogo/Zotac.png" },
  { id: 26, name: "Corsair", logo: "/src/assets/brandslogo/Corsair.png" },
  { id: 27, name: "G.SKILL", logo: "/src/assets/brandslogo/G.SKILL.png" },
  { id: 28, name: "Crucial", logo: "/src/assets/brandslogo/Crucial.png" },
  { id: 29, name: "Kingston", logo: "/src/assets/brandslogo/Kingston.png" },
  {
    id: 30,
    name: "Patriot Memory",
    logo: "/src/assets/brandslogo/Patriot Memory.png",
  },
  { id: 31, name: "Samsung", logo: "/src/assets/brandslogo/Samsung.png" },
  { id: 32, name: "SK hynix", logo: "/src/assets/brandslogo/SK hynix.png" },
  { id: 33, name: "Team Group", logo: "/src/assets/brandslogo/Team Group.png" },
  { id: 34, name: "Seagate", logo: "/src/assets/brandslogo/Seagate.png" },
  {
    id: 35,
    name: "Western Digital",
    logo: "/src/assets/brandslogo/Western Digital.png",
  },
  { id: 36, name: "SeaSonic", logo: "/src/assets/brandslogo/SeaSonic.png" },
  {
    id: 37,
    name: "Thermaltake",
    logo: "/src/assets/brandslogo/Thermaltake.png",
  },
  {
    id: 38,
    name: "Fractal Design",
    logo: "/src/assets/brandslogo/Fractal Design.png",
  },
  { id: 39, name: "Lian Li", logo: "/src/assets/brandslogo/Lian Li.png" },
  { id: 40, name: "In Win", logo: "/src/assets/brandslogo/In Win.png" },
  {
    id: 41,
    name: "Cooler Master",
    logo: "/src/assets/brandslogo/Cooler Master.png",
  },
  { id: 42, name: "be quiet!", logo: "/src/assets/brandslogo/be quiet!.png" },
  { id: 43, name: "Cisco", logo: "/src/assets/brandslogo/Cisco.png" },
  { id: 44, name: "Netgear", logo: "/src/assets/brandslogo/Netgear.png" },
  { id: 45, name: "TP-Link", logo: "/src/assets/brandslogo/TP-Link.png" },
  { id: 46, name: "Dlink", logo: "/src/assets/brandslogo/Dlink.png" },
  { id: 47, name: "Transcend", logo: "/src/assets/brandslogo/Transcend.png" },
  {
    id: 48,
    name: "Grandstream",
    logo: "/src/assets/brandslogo/Grandstream.png",
  },
  { id: 49, name: "APC", logo: "/src/assets/brandslogo/APC.png" },
  { id: 50, name: "Canon", logo: "/src/assets/brandslogo/Canon.png" },
  { id: 51, name: "Epson", logo: "/src/assets/brandslogo/Epson.png" },
  { id: 52, name: "Brother", logo: "/src/assets/brandslogo/Brother.png" },
  { id: 53, name: "Kodak", logo: "/src/assets/brandslogo/Kodak.png" },
  { id: 54, name: "Fujitsu", logo: "/src/assets/brandslogo/Fujitsu.png" },
  { id: 55, name: "Logitech", logo: "/src/assets/brandslogo/Logitech.png" },
  { id: 56, name: "Razer", logo: "/src/assets/brandslogo/Razer.png" },
  { id: 57, name: "HyperX", logo: "/src/assets/brandslogo/HyperX.png" },
  {
    id: 58,
    name: "Creative Labs",
    logo: "/src/assets/brandslogo/Creative Labs.png",
  },
  { id: 59, name: "Jabra", logo: "/src/assets/brandslogo/Jabra.png" },
  {
    id: 60,
    name: "Beyerdynamic",
    logo: "/src/assets/brandslogo/Beyerdynamic.png",
  },
  { id: 61, name: "Elgato", logo: "/src/assets/brandslogo/Elgato.png" },
  { id: 62, name: "ROCCAT", logo: "/src/assets/brandslogo/ROCCAT.png" },
  {
    id: 63,
    name: "PlayStation",
    logo: "/src/assets/brandslogo/PlayStation.png",
  },
  { id: 64, name: "Nintendo", logo: "/src/assets/brandslogo/Nintendo.png" },
  { id: 65, name: "Xbox", logo: "/src/assets/brandslogo/Xbox.png" },
  {
    id: 66,
    name: "Bandai Namco",
    logo: "/src/assets/brandslogo/Bandai Namco.png",
  },
  { id: 67, name: "Capcom", logo: "/src/assets/brandslogo/Capcom.png" },
  { id: 68, name: "Ubisoft", logo: "/src/assets/brandslogo/Ubisoft.png" },
  { id: 69, name: "Adobe", logo: "/src/assets/brandslogo/Adobe.png" },
  {
    id: 70,
    name: "BitDefender",
    logo: "/src/assets/brandslogo/BitDefender.png",
  },
  { id: 71, name: "Norton", logo: "/src/assets/brandslogo/Norton.png" },
  { id: 72, name: "Acronis", logo: "/src/assets/brandslogo/Acronis.png" },
  { id: 73, name: "ESET", logo: "/src/assets/brandslogo/ESET.png" },
  {
    id: 74,
    name: "Samsung Display",
    logo: "/src/assets/brandslogo/Samsung Display.png",
  },
  { id: 75, name: "LG Display", logo: "/src/assets/brandslogo/LG Display.png" },
  { id: 76, name: "AOC", logo: "/src/assets/brandslogo/AOC.png" },
  { id: 77, name: "BenQ", logo: "/src/assets/brandslogo/BenQ.png" },
  { id: 78, name: "Aztech", logo: "/src/assets/brandslogo/Aztech.png" },
  { id: 79, name: "Samsung", logo: "/src/assets/brandslogo/Samsung.png" },
  { id: 80, name: "LG", logo: "/src/assets/brandslogo/LG.png" },
  { id: 81, name: "Sony", logo: "/src/assets/brandslogo/Sony.png" },
  { id: 82, name: "TCL", logo: "/src/assets/brandslogo/TCL.png" },
  { id: 83, name: "Hisense", logo: "/src/assets/brandslogo/Hisense.png" },
  { id: 84, name: "Panasonic", logo: "/src/assets/brandslogo/Panasonic.png" },
  { id: 85, name: "Sharp", logo: "/src/assets/brandslogo/Sharp.png" },
  { id: 86, name: "Vizio", logo: "/src/assets/brandslogo/Vizio.png" },
  { id: 87, name: "Philips", logo: "/src/assets/brandslogo/Philips.png" },
  { id: 88, name: "Xiaomi", logo: "/src/assets/brandslogo/Xiaomi.png" },
  { id: 89, name: "Team Group", logo: "/src/assets/brandslogo/Team Group.png" },
  { id: 90, name: "Seagate", logo: "/src/assets/brandslogo/Seagate.png" },
];

const Brands = () => {
  const navigate = useNavigate();
  const [visibleBrands, setVisibleBrands] = useState(brands.slice(0, 20));
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisibleBrands(brands);
        setShowAll(true);
      } else {
        setVisibleBrands(brands.slice(0, 20));
        setShowAll(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewAll = () => {
    setVisibleBrands(brands);
    setShowAll(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-[40px] md:pt-[60px] lg:pt-[90px] xl:pt-[90px] 2xl:pt-[90px]">
      {/* Header */}
      <header className="relative overflow-hidden mb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#143057] z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(28,76,151,0.2)] rounded-full blur-[3rem] -translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-[#ff8419] mb-4 tracking-tight"
          >
            Our <span className="text-[#ffffff]">Brands</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light mb-8"
          >
            Discover the latest high-performance technology curated for
            professionals and enthusiasts.
          </motion.p>
        </div>
      </header>

      {/* Intro */}
      <section className="bg-[#ffffff]">
        <div className="-mt-[6.375rem] bg-card backdrop-blur rounded-2xl p-6 md:p-8 max-w-[70rem] mx-auto shadow-lg">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            <span className="text-brand-orange font-bold">
              Proactive Trading
            </span>{" "}
            has developed long-lasting partnerships with leading technology
            vendors, allowing us to provide best-in-class products and services
            to our clients. Spanning the entire technology spectrum, our vendors
            are market trailblazers in information technology, mobile, security,
            and networking solutions. We drive partner success through our
            expert on-the-ground vendor knowledge, leveraging our specialized
            pre-sales solution teams, as well as access to programs and
            resources.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 px-5 bg-[#ffffff]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 md:gap-7">
            {visibleBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.03, 1),
                  type: "spring",
                }}
                className="group relative bg-[#ffffff] p-5 sm:p-6 rounded-2xl shadow-md border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-400 flex flex-col items-center min-h-[160px] md:min-h-[200px] cursor-pointer overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-[75px] h-[75px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] mb-3 md:mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    const fallback = document.createElement("div");
                    fallback.className =
                      "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] mb-3 md:mb-4 flex items-center justify-center bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] text-white font-bold text-xl rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-white/20";
                    fallback.textContent = brand.name
                      .substring(0, 2)
                      .toUpperCase();
                    parent?.appendChild(fallback);
                  }}
                />
                {/* Name */}
                <p className="text-sm md:text-base font-semibold text-foreground text-center mt-auto px-1">
                  {brand.name}
                </p>
                {/* Shine effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-[left] duration-500 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View All Button - Only show on mobile when not all brands are visible */}
          {!showAll && brands.length > 20 && (
            <div className="text-center mt-10">
              <button
                onClick={handleViewAll}
                className="px-8 py-3 bg-[#2a5da5] text-white font-semibold rounded-lg hover:bg-[#1a3a70] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                View All Brands
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 bg-[#ffffff] px-4 relative overflow-hidden">
        {/* Background Tech Elements - Low Opacity */}

        {/* Large Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Circuit Board Circles */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-1/4 w-32 h-32 border-2 border-blue-300 rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 border-2 border-blue-300 rounded-full" />
          <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-blue-200 rounded-full" />
          <div className="absolute bottom-1/3 left-10 w-40 h-40 border-2 border-blue-200 rounded-full" />

          {/* Small connection dots */}
          <div className="absolute top-20 left-1/3 w-2 h-2 bg-blue-400/30 rounded-full" />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full" />
          <div className="absolute top-40 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full" />
        </div>

        {/* Tech Lines - Horizontal */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        </div>

        {/* Tech Lines - Vertical */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
        </div>

        {/* Diagonal Tech Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-[10%] w-px h-full bg-blue-400/20 rotate-12 origin-top" />
            <div className="absolute top-0 right-[10%] w-px h-full bg-blue-400/20 -rotate-12 origin-top" />
          </div>
        </div>

        {/* Pulsing Dots - Like LEDs */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Wave Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 w-full opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#3b82f6"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-[900px] mx-auto text-center mt-10 py-14 px-6 md:px-10 bg-gradient-to-br from-primary/[0.08] via-brand-orange/[0.08] to-blue-400/[0.08] rounded-[40px] border border-primary/15 backdrop-blur-sm relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-8 md:mb-10 leading-tight tracking-tight">
            Let's Work Together & Boost Your Technology Success!
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-3 px-10 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold text-[#ffffff] bg-gradient-to-br from-[#2a5da5] to-[#0a0e27] rounded-full shadow-[0_15px_40px_rgba(28,76,151,0.4)] hover:shadow-[0_20px_50px_rgba(28,76,151,0.6)] hover:-translate-y-1 hover:from-brand-orange hover:to-brand-orange-dark transition-all duration-300 relative overflow-hidden"
          >
            <span className="tracking-wide">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Brands;
