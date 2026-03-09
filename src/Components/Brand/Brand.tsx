import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Import all brand logos
import appleLogo from "../../assets/brandslogo/Apple.png"; 
import microsoftLogo from "../../assets/brandslogo/Microsoft.png";
import googleLogo from "../../assets/brandslogo/Google.png";
import dellLogo from "../../assets/brandslogo/Dell.png";
import hpLogo from "../../assets/brandslogo/HP.png";
import lenovoLogo from "../../assets/brandslogo/Lenovo.png";
import acerLogo from "../../assets/brandslogo/Acer.png";
import asusLogo from "../../assets/brandslogo/ASUS.png";
import msiLogo from "../../assets/brandslogo/MSI.png";
import ibuypowerLogo from "../../assets/brandslogo/iBUYPOWER.png";
import cyberpowerpcLogo from "../../assets/brandslogo/CyberPowerPC.png";
import nzxtLogo from "../../assets/brandslogo/NZXT.png";
import gigabyteLogo from "../../assets/brandslogo/Gigabyte.png";
import predatorLogo from "../../assets/brandslogo/Predator.png";
import aorusLogo from "../../assets/brandslogo/AORUS.png";
import metaquestLogo from "../../assets/brandslogo/Meta Quest.png";
import intelLogo from "../../assets/brandslogo/Intel.png";
import amdLogo from "../../assets/brandslogo/AMD.png";
import nvidiaLogo from "../../assets/brandslogo/NVIDIA.png";
import asrockLogo from "../../assets/brandslogo/ASRock.png";
import evgaLogo from "../../assets/brandslogo/EVGA.png";
import sapphireLogo from "../../assets/brandslogo/Sapphire.png";
import pnyLogo from "../../assets/brandslogo/PNY.png";
import xfxLogo from "../../assets/brandslogo/XFX.png";
import zotacLogo from "../../assets/brandslogo/Zotac.png";
import corsairLogo from "../../assets/brandslogo/Corsair.png";
import gskillLogo from "../../assets/brandslogo/G.SKILL.png";
import crucialLogo from "../../assets/brandslogo/Crucial.png";
import kingstonLogo from "../../assets/brandslogo/Kingston.png";
import patriotLogo from "../../assets/brandslogo/Patriot Memory.png";
import samsungLogo from "../../assets/brandslogo/Samsung.png";
import skhynixLogo from "../../assets/brandslogo/SK hynix.png";
import teamgroupLogo from "../../assets/brandslogo/Team Group.png";
import seagateLogo from "../../assets/brandslogo/Seagate.png";
import westerndigitalLogo from "../../assets/brandslogo/Western Digital.png";
import seasonicLogo from "../../assets/brandslogo/SeaSonic.png";
import thermaltakeLogo from "../../assets/brandslogo/Thermaltake.png";
import fractaldesignLogo from "../../assets/brandslogo/Fractal Design.png";
import lianliLogo from "../../assets/brandslogo/Lian Li.png";
import inwinLogo from "../../assets/brandslogo/In Win.png";
import coolermasterLogo from "../../assets/brandslogo/Cooler Master.png";
import bequietLogo from "../../assets/brandslogo/be quiet!.png";
import ciscoLogo from "../../assets/brandslogo/Cisco.png";
import netgearLogo from "../../assets/brandslogo/Netgear.png";
import tplinkLogo from "../../assets/brandslogo/TP-Link.png";
import dlinkLogo from "../../assets/brandslogo/Dlink.png";
import transcendLogo from "../../assets/brandslogo/Transcend.png";
import grandstreamLogo from "../../assets/brandslogo/Grandstream.png";
import apcLogo from "../../assets/brandslogo/APC.png";
import canonLogo from "../../assets/brandslogo/Canon.png";
import epsonLogo from "../../assets/brandslogo/Epson.png";
import brotherLogo from "../../assets/brandslogo/Brother.png";
import kodakLogo from "../../assets/brandslogo/Kodak.png";
import fujitsuLogo from "../../assets/brandslogo/Fujitsu.png";
import logitechLogo from "../../assets/brandslogo/Logitech.png";
import razerLogo from "../../assets/brandslogo/Razer.png";
import hyperxLogo from "../../assets/brandslogo/HyperX.png";
import creativelabsLogo from "../../assets/brandslogo/Creative Labs.png";
import jabraLogo from "../../assets/brandslogo/Jabra.png";
import beyerdynamicLogo from "../../assets/brandslogo/Beyerdynamic.png";
import elgatoLogo from "../../assets/brandslogo/Elgato.png";
import roccatLogo from "../../assets/brandslogo/ROCCAT.png";
import playstationLogo from "../../assets/brandslogo/PlayStation.png";
import nintendoLogo from "../../assets/brandslogo/Nintendo.png";
import xboxLogo from "../../assets/brandslogo/Xbox.png";
import bandaigramcoLogo from "../../assets/brandslogo/Bandai Namco.png";
import capcomLogo from "../../assets/brandslogo/Capcom.png";
import ubisoftLogo from "../../assets/brandslogo/Ubisoft.png";
import adobeLogo from "../../assets/brandslogo/Adobe.png";
import bitdefenderLogo from "../../assets/brandslogo/BitDefender.png";
import nortonLogo from "../../assets/brandslogo/Norton.png";
import acronisLogo from "../../assets/brandslogo/Acronis.png";
import esetLogo from "../../assets/brandslogo/ESET.png";
import samsungdisplayLogo from "../../assets/brandslogo/Samsung Display.png";
import lgdisplayLogo from "../../assets/brandslogo/LG Display.png";
import aocLogo from "../../assets/brandslogo/AOC.png";
import benqLogo from "../../assets/brandslogo/BenQ.png";
import aztechLogo from "../../assets/brandslogo/Aztech.png";
import samsung2Logo from "../../assets/brandslogo/Samsung.png";
import lgLogo from "../../assets/brandslogo/LG.png";
import sonyLogo from "../../assets/brandslogo/Sony.png";
import hisenseLogo from "../../assets/brandslogo/Hisense.png";
import panasonicLogo from "../../assets/brandslogo/Panasonic.png";
import sharpLogo from "../../assets/brandslogo/Sharp.png";

// --- Major Tech & Computers ---
const brands = [
  { id: 1, name: "Apple", logo: appleLogo },
  { id: 2, name: "Microsoft", logo: microsoftLogo },
  { id: 3, name: "Google", logo: googleLogo },
  { id: 4, name: "Dell", logo: dellLogo },
  { id: 5, name: "HP", logo: hpLogo },
  { id: 6, name: "Lenovo", logo: lenovoLogo },
  { id: 7, name: "Acer", logo: acerLogo },
  { id: 8, name: "ASUS", logo: asusLogo },
  { id: 9, name: "MSI", logo: msiLogo },
  { id: 10, name: "iBUYPOWER", logo: ibuypowerLogo },
  { id: 11, name: "CyberPowerPC", logo: cyberpowerpcLogo },
  { id: 12, name: "NZXT", logo: nzxtLogo },
  { id: 13, name: "Gigabyte", logo: gigabyteLogo },
  { id: 14, name: "Predator", logo: predatorLogo },
  { id: 15, name: "AORUS", logo: aorusLogo },
  { id: 16, name: "Meta Quest", logo: metaquestLogo },
  { id: 17, name: "Intel", logo: intelLogo },
  { id: 18, name: "AMD", logo: amdLogo },
  { id: 19, name: "NVIDIA", logo: nvidiaLogo },
  { id: 20, name: "ASRock", logo: asrockLogo },
  { id: 21, name: "EVGA", logo: evgaLogo },
  { id: 22, name: "Sapphire", logo: sapphireLogo },
  { id: 23, name: "PNY", logo: pnyLogo },
  { id: 24, name: "XFX", logo: xfxLogo },
  { id: 25, name: "Zotac", logo: zotacLogo },
  { id: 26, name: "Corsair", logo: corsairLogo },
  { id: 27, name: "G.SKILL", logo: gskillLogo },
  { id: 28, name: "Crucial", logo: crucialLogo },
  { id: 29, name: "Kingston", logo: kingstonLogo },
  { id: 30, name: "Patriot Memory", logo: patriotLogo },
  { id: 31, name: "Samsung", logo: samsungLogo },
  { id: 32, name: "SK hynix", logo: skhynixLogo },
  { id: 33, name: "Team Group", logo: teamgroupLogo },
  { id: 34, name: "Seagate", logo: seagateLogo },
  { id: 35, name: "Western Digital", logo: westerndigitalLogo },
  { id: 36, name: "SeaSonic", logo: seasonicLogo },
  { id: 37, name: "Thermaltake", logo: thermaltakeLogo },
  { id: 38, name: "Fractal Design", logo: fractaldesignLogo },
  { id: 39, name: "Lian Li", logo: lianliLogo },
  { id: 40, name: "In Win", logo: inwinLogo },
  { id: 41, name: "Cooler Master", logo: coolermasterLogo },
  { id: 42, name: "be quiet!", logo: bequietLogo },
  { id: 43, name: "Cisco", logo: ciscoLogo },
  { id: 44, name: "Netgear", logo: netgearLogo },
  { id: 45, name: "TP-Link", logo: tplinkLogo },
  { id: 46, name: "Dlink", logo: dlinkLogo },
  { id: 47, name: "Transcend", logo: transcendLogo },
  { id: 48, name: "Grandstream", logo: grandstreamLogo },
  { id: 49, name: "APC", logo: apcLogo },
  { id: 50, name: "Canon", logo: canonLogo },
  { id: 51, name: "Epson", logo: epsonLogo },
  { id: 52, name: "Brother", logo: brotherLogo },
  { id: 53, name: "Kodak", logo: kodakLogo },
  { id: 54, name: "Fujitsu", logo: fujitsuLogo },
  { id: 55, name: "Logitech", logo: logitechLogo },
  { id: 56, name: "Razer", logo: razerLogo },
  { id: 57, name: "HyperX", logo: hyperxLogo },
  { id: 58, name: "Creative Labs", logo: creativelabsLogo },
  { id: 59, name: "Jabra", logo: jabraLogo },
  { id: 60, name: "Beyerdynamic", logo: beyerdynamicLogo },
  { id: 61, name: "Elgato", logo: elgatoLogo },
  { id: 62, name: "ROCCAT", logo: roccatLogo },
  { id: 63, name: "PlayStation", logo: playstationLogo },
  { id: 64, name: "Nintendo", logo: nintendoLogo },
  { id: 65, name: "Xbox", logo: xboxLogo },
  { id: 66, name: "Bandai Namco", logo: bandaigramcoLogo },
  { id: 67, name: "Capcom", logo: capcomLogo },
  { id: 68, name: "Ubisoft", logo: ubisoftLogo },
  { id: 69, name: "Adobe", logo: adobeLogo },
  { id: 70, name: "BitDefender", logo: bitdefenderLogo },
  { id: 71, name: "Norton", logo: nortonLogo },
  { id: 72, name: "Acronis", logo: acronisLogo },
  { id: 73, name: "ESET", logo: esetLogo },
  { id: 74, name: "Samsung Display", logo: samsungdisplayLogo },
  { id: 75, name: "LG Display", logo: lgdisplayLogo },
  { id: 76, name: "AOC", logo: aocLogo },
  { id: 77, name: "BenQ", logo: benqLogo },
  { id: 78, name: "Aztech", logo: aztechLogo },
  { id: 79, name: "Samsung", logo: samsung2Logo },
  { id: 80, name: "LG", logo: lgLogo },
  { id: 81, name: "Sony", logo: sonyLogo },
  { id: 82, name: "Hisense", logo: hisenseLogo },
  { id: 83, name: "Panasonic", logo: panasonicLogo },
  { id: 84, name: "Sharp", logo: sharpLogo },
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-[75px] h-[75px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] mb-3 md:mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
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