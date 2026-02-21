import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Shield,
  Handshake,
  Headphones,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  Globe,
  Zap,
  Star,
  Building2,
  ChevronDown,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [statCount, setStatCount] = useState(2000);
  const location = useLocation();

  // Create refs for each section
  const profileRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize stat counter
    let count = 0;
    const interval = setInterval(() => {
      count += 50;
      if (count >= 2000) {
        count = 2000;
        clearInterval(interval);
      }
      setStatCount(count);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Hash navigation
  useEffect(() => {
    if (location.hash === "#clients") {
      requestAnimationFrame(() => {
        if (clientsRef.current) {
          clientsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const refs = {
      profile: profileRef,
      mission: missionRef,
      vision: visionRef,
      values: valuesRef,
      clients: clientsRef,
      why: whyRef,
    };

    if (refs[sectionId as keyof typeof refs]?.current) {
      refs[sectionId as keyof typeof refs].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    scrollToSection(tabId);
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "profile", ref: profileRef },
        { id: "mission", ref: missionRef },
        { id: "vision", ref: visionRef },
        { id: "values", ref: valuesRef },
        { id: "clients", ref: clientsRef },
        { id: "why", ref: whyRef },
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.ref.current &&
          section.ref.current.offsetTop <= scrollPosition
        ) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description:
        "Cutting-edge products setting industry benchmarks with the latest technology solutions.",
    },
    {
      icon: <Heart size={32} />,
      title: "Customer-Centricity",
      description:
        "Exceeding client needs with lasting relationships built on trust and exceptional service.",
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Integrity",
      description:
        "Transparency and highest ethical standards in every interaction and transaction.",
    },
    {
      icon: <Handshake size={32} />,
      title: "Partnerships",
      description:
        "Collaborating with leading manufacturers to deliver world-class technology solutions.",
    },
    {
      icon: <Headphones size={32} />,
      title: "Continuous Support",
      description:
        "Dedicated teams ensuring smooth operations and reliable after-sales service.",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Expertise",
      description:
        "Professional guidance for optimal solutions backed by years of industry experience.",
    },
  ];

  const clients = [
    {
      name: "Ministry of Finance",
      logo: "/logos/ministry/ministry-finance.png",
      initials: "MoF",
    },
    {
      name: "Commercial Bank of Ethiopia",
      logo: "/logos/banks/cbe.png",
      initials: "CBE",
    },
    {
      name: "Ethiopian Airlines",
      logo: "/logos/transport/ethiopian-airlines.png",
      initials: "EA",
    },
    {
      name: "Addis Ababa University",
      logo: "/logos/education/aau.png",
      initials: "AAU",
    },
    {
      name: "Black Lion Hospital",
      logo: "/logos/health/black-lion-hospital.png",
      initials: "BLH",
    },
    {
      name: "Ministry of Education",
      logo: "/logos/ministry/ministry-education.png",
      initials: "MoE",
    },
    {
      name: "Awash Bank",
      logo: "/logos/banks/awash-bank.png",
      initials: "AB",
    },
    {
      name: "Ministry of Health",
      logo: "/logos/ministry/ministry-health.png",
      initials: "MoH",
    },
    {
      name: "Haramaya University",
      logo: "/logos/education/haramaya-university.png",
      initials: "HU",
    },
    {
      name: "Ethiopian Roads Authority",
      logo: "/logos/transport/ethiopian-roads-authority.png",
      initials: "ERA",
    },
    {
      name: "Development Bank of Ethiopia",
      logo: "/logos/banks/dbe.png",
      initials: "DBE",
    },
    {
      name: "St. Paul's Hospital",
      logo: "/logos/health/st-pauls-hospital.png",
      initials: "SPH",
    },
    {
      name: "Ministry of Transport and Logistics",
      logo: "/logos/ministry/ministry-transport.png",
      initials: "MTL",
    },
    {
      name: "Ethiopia Enterprise Development",
      logo: "/logos/government/enterprise-development.png",
      initials: "EED",
    },
    {
      name: "Ministry of Defence",
      logo: "/logos/ministry/ministry-defence.png",
      initials: "MoD",
    },
    {
      name: "Ethiopian Communication Authority",
      logo: "/logos/government/communication-authority.png",
      initials: "ECA",
    },
    {
      name: "Ministry of works and Urban Development",
      logo: "/logos/ministry/ministry-works.png",
      initials: "MWUD",
    },
    {
      name: "Ethiopian Science and Technology Agency",
      logo: "/logos/government/science-technology-agency.png",
      initials: "ESTA",
    },
    {
      name: "Oromia Land Bureau",
      logo: "/logos/regional/oromia-land-bureau.png",
      initials: "OLB",
    },
    {
      name: "Tsedey Bank",
      logo: "/logos/banks/tsedey-bank.png",
      initials: "TB",
    },
    {
      name: "COOP Bank of Oromia",
      logo: "/logos/banks/coop-bank-oromia.png",
      initials: "CBO",
    },
    {
      name: "Oromia Health Bureau",
      logo: "/logos/regional/oromia-health-bureau.png",
      initials: "OHB",
    },
    {
      name: "Minilik Hospital",
      logo: "/logos/health/minilik-hospital.png",
      initials: "MH",
    },
    {
      name: "Enat Bank",
      logo: "/logos/banks/enat-bank.png",
      initials: "EB",
    },
    {
      name: "Akaki Kality Sub City",
      logo: "/logos/municipal/akaki-kality.png",
      initials: "AKSC",
    },
    {
      name: "Ministry of Defense",
      logo: "/logos/ministry/ministry-defense.png",
      initials: "MoD",
    },
    {
      name: "Yirgalem Construction",
      logo: "/logos/construction/yirgalem-construction.png",
      initials: "YC",
    },
    {
      name: "Addis Ababa University School of Commerce",
      logo: "/logos/education/aau-commerce.png",
      initials: "AAU-SC",
    },
    {
      name: "Manufacturing Industry Development Institute",
      logo: "/logos/government/manufacturing-institute.png",
      initials: "MIDI",
    },
    {
      name: "City Government A.A Cleaning Agency",
      logo: "/logos/municipal/cleaning-agency.png",
      initials: "CAA",
    },
    {
      name: "Educational Material Production Distribution Enterprise",
      logo: "/logos/education/material-production.png",
      initials: "EMPD",
    },
    {
      name: "Hibret Bank",
      logo: "/logos/banks/hibret-bank.png",
      initials: "HB",
    },
    {
      name: "Ethiopian Mineral Water Share Company",
      logo: "/logos/companies/mineral-water.png",
      initials: "EMW",
    },
    {
      name: "Wolaitta Development Association",
      logo: "/logos/ngo/wolaitta-development.png",
      initials: "WDA",
    },
    {
      name: "Wonj Showa Sugar Factory",
      logo: "/logos/companies/sugar-factory.png",
      initials: "WSSF",
    },
    {
      name: "Oromia Milisha Office",
      logo: "/logos/regional/oromia-milisha.png",
      initials: "OMO",
    },
    {
      name: "CGGC",
      logo: "/logos/construction/cggc.png",
      initials: "CGGC",
    },
    {
      name: "Ministry of Resource Water Fund Project",
      logo: "/logos/ministry/water-fund-project.png",
      initials: "MRWF",
    },
    {
      name: "ERCA Dire Dawa Branch",
      logo: "/logos/government/erca-dire-dawa.png",
      initials: "ERCA",
    },
    {
      name: "Ethiopian Railways Corporation",
      logo: "/logos/transport/ethiopian-railways.png",
      initials: "ERC",
    },
    {
      name: "Information Network Security Agency",
      logo: "/logos/government/insa.png",
      initials: "INSA",
    },
    {
      name: "China Wu Yi Co LTD",
      logo: "/logos/construction/china-wu-yi.png",
      initials: "CWY",
    },
    {
      name: "Yeka Sub City Capacity Building",
      logo: "/logos/municipal/yeka-subcity.png",
      initials: "YSC",
    },
    {
      name: "Ministry of Trade",
      logo: "/logos/ministry/ministry-trade.png",
      initials: "MoT",
    },
    {
      name: "Ethiopian Enterprise Development",
      logo: "/logos/government/enterprise-development-eth.png",
      initials: "EED",
    },
    {
      name: "SNV Ethiopia",
      logo: "/logos/ngo/snv-ethiopia.png",
      initials: "SNV",
    },
    {
      name: "Office of Prime Minister",
      logo: "/logos/government/prime-minister-office.png",
      initials: "OPM",
    },
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp size={24} />,
      title: "Proven Track Record",
      description:
        "Successfully serving 2000+ government and private organizations nationwide.",
    },
    {
      icon: <Award size={24} />,
      title: "Quality & Genuine Products",
      description:
        "Only authentic, certified products from trusted global manufacturers.",
    },
    {
      icon: <Heart size={24} />,
      title: "Customer-Centric Service",
      description:
        "Personalized solutions tailored to your specific business needs.",
    },
    {
      icon: <Users size={24} />,
      title: "Experienced Team",
      description:
        "Skilled professionals with deep expertise in technology solutions.",
    },
    {
      icon: <Handshake size={24} />,
      title: "Strong Partnerships",
      description:
        "Direct relationships with leading technology manufacturers worldwide.",
    },
    {
      icon: <Globe size={24} />,
      title: "Diverse Expertise",
      description:
        "Comprehensive solutions across finance, healthcare, education, and infrastructure.",
    },
    {
      icon: <Star size={24} />,
      title: "Commitment to Excellence",
      description:
        "Unwavering dedication to delivering superior quality and service.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Nationwide Impact",
      description:
        "Building Ethiopia's technological infrastructure from the ground up.",
    },
  ];

  return (
    <div className="font-['Inter'] bg-white min-h-screen overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[75vh] xl:h-[75vh] pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[80px] xl:pt-[70px] bg-gradient-to-r from-[#1c4c97] to-[#0a0e27]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] z-0" />

        {/* Decorative Elements - Responsive sizing */}
        <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 h-32 sm:h-40 md:h-48 lg:h-64 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#1c4c97]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 text-center h-full flex flex-col justify-center">
          <div className="overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:100ms]">
              <span className="text-[#e47325]">Proactive</span> Trading
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:300ms]">
              Driving <span className="text-[#e47325]">Innovation</span>,
              Building Trust
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto font-light mb-4 sm:mb-6 md:mb-8 animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:500ms]">
              Leading Ethiopia's Technology Revolution Since{" "}
              <span className="text-[#e47325] font-semibold">2022</span>
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_infinite] z-20">
  <ChevronDown size={32} color="#ffffff" />
</div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="flex justify-center flex-wrap gap-3 p-6  bg-white/95 backdrop-blur-md z-10 rounded-2xl max-w-7xl mx-auto -mt-23 ">
        {[
          { id: "profile", label: "Profile" },
          { id: "mission", label: "Mission" },
          { id: "vision", label: "Vision" },
          { id: "values", label: "Values" },
          { id: "clients", label: "Clients" },
          { id: "why", label: "Why Choose Us" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-7 py-3 font-semibold rounded-full transition-all duration-300 relative overflow-hidden hover:translate-y-[-2px] hover:shadow-lg ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] text-white shadow-[0_6px_20px_rgba(28,76,151,0.3)]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-[0_4px_12px_rgba(28,76,151,0.15)]"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="relative z-10">{tab.label}</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 hover:left-full" />
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 relative z-0">
        {/* Profile Section */}
        <section
          ref={profileRef}
          className="mb-16 animate-[fadeIn_0.6s_ease-out]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#1c4c97] to-[#1d1f30] bg-clip-text text-transparent">
            Proactive Trading
          </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-8">
            <p className="mb-4">
              Founded in{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent font-bold">
                2022
              </span>
              , Proactive Trading has rapidly become Ethiopia's trusted partner
              for genuine office machines, IT equipment, and technology
              solutions. We pride ourselves on delivering excellence through
              innovation, integrity, and unwavering commitment to our clients'
              success.
            </p>
            <div className="bg-gradient-to-r from-[rgba(28,76,151,0.05)] to-[rgba(255,123,22,0.05)] border-l-4 border-[#ff7b16] p-6 rounded-lg my-6 text-gray-600">
              <strong className="font-bold">
                Serving over 2,000 government and private organizations
              </strong>{" "}
              across multiple sectors including finance, healthcare, education,
              and infrastructure. Our comprehensive portfolio and dedicated
              service have made us the preferred technology supplier for
              Ethiopia's leading institutions.
            </div>
            <p>
              From cutting-edge office equipment to sophisticated IT
              infrastructure, we provide solutions that empower organizations to
              operate efficiently, grow sustainably, and lead confidently in
              their respective industries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            {[
              { number: `${statCount}+`, label: "Trusted Organizations" },
              { number: "3", label: "Years of Excellence" },
              { number: "100%", label: "Genuine Products" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl text-center shadow-md transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_12px_40px_rgba(28,76,151,0.2)] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e47325] to-[#1a4892] transform scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
                <div className="text-5xl font-extrabold bg-gradient-to-r from-[#e47325] to-[#ff7b16] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section
          ref={missionRef}
          className="mb-16 animate-[fadeIn_0.6s_ease-out]"
        >
          <div className="mission-card bg-gradient-to-br from-[#1c4c97] to-[#0a0e27] p-8 md:p-12 rounded-2xl text-white shadow-[0_10px_40px_rgba(28,76,151,0.3)] relative overflow-hidden">
            <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,123,22,0.1)_0%,transparent_70%)] animate-[spin_20s_linear_infinite]" />
            <Target size={60} className="mb-6 relative z-10" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 relative z-10">
              We provide top-quality products and innovative solutions that
              empower our clients to grow, lead, and succeed. Through
              dedication, integrity, and smart technology, we build lasting
              value and strong partnerships across every industry we serve.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 mt-5 relative z-10">
              Our commitment extends beyond transactions—we forge relationships
              built on trust, reliability, and mutual growth, ensuring every
              client achieves their technological and operational goals.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section
          ref={visionRef}
          className="mb-16 animate-[fadeIn_0.6s_ease-out]"
        >
          <div className="vision-card bg-gradient-to-br from-[#1c4c97] to-[#0a0e27] p-8 md:p-12 rounded-2xl text-white shadow-[0_10px_40px_rgba(28,76,151,0.3)] relative overflow-hidden">
            <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,123,22,0.1)_0%,transparent_70%)] animate-[spin_20s_linear_infinite]" />
            <Eye size={60} className="mb-6 relative z-10" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 relative z-10">
              To lead the way in driving innovation and growth, empowering
              clients with advanced technology, building strong, lasting
              partnerships, and delivering solutions that truly put customers
              first.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 mt-5 relative z-10">
              We envision an Ethiopia where every organization—from government
              ministries to private enterprises—has access to world-class
              technology that transforms operations, enhances productivity, and
              drives national development.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section
          ref={valuesRef}
          className="mb-16 animate-[fadeIn_0.6s_ease-out]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1c4c97] to-[#1d1f30] bg-clip-text text-transparent">
            Core Values
          </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-8">
            <p>
              Our values define who we are and guide every decision we make.
              They are the foundation of our relationships with clients,
              partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md transition-all duration-400 hover:translate-y-[-10px] hover:scale-105 hover:shadow-[0_20px_60px_rgba(28,76,151,0.2)] relative border-2 border-transparent hover:border-gradient-to-r from-[#1c4c97] to-[#ff7b16] group cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />
                <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#1c4c97] to-[#0a0e27] rounded-xl flex items-center justify-center mb-5 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-[#ff7b16] group-hover:to-[#1c4c97] group-hover:rotate-360">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#0a0e27] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section
          ref={clientsRef}
          className="mb-16 animate-[fadeIn_0.6s_ease-out]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1c4c97] to-[#1d1f30] bg-clip-text text-transparent">
            Our Distinguished Clients
          </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-8">
            <p>
              We are honored to serve Ethiopia's most prestigious organizations
              across government, banking, healthcare, education, and
              infrastructure sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md transition-all duration-400 hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_15px_40px_rgba(28,76,151,0.2)] hover:border-[#1c4c97] border-2 border-transparent flex flex-col items-center min-h-[180px] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e47325] to-[#1a4892] transform scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
                <div className="w-[70px] h-[70px] mb-4 flex items-center justify-center bg-white rounded-full p-2 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain rounded-full"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback =
                        e.currentTarget.parentElement?.querySelector(
                          ".client-logo-fallback",
                        ) as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="client-logo-fallback hidden w-full h-full items-center justify-center bg-gradient-to-br from-[#1c4c97] to-[#0a0e27] text-white font-bold text-xl rounded-full">
                    {client.initials}
                  </div>
                </div>
                <div className="font-semibold text-gray-700 text-sm text-center leading-tight mt-auto px-1">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyRef} className="mb-16 animate-[fadeIn_0.6s_ease-out]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1c4c97] to-[#1d1f30] bg-clip-text text-transparent">
            Why Choose Proactive Trading
          </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-8">
            <p>
              When you partner with Proactive Trading, you're choosing more than
              a supplier—you're choosing a committed technology partner
              dedicated to your success. Here's what sets us apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border-l-4 border-[#1c4c97] shadow-md transition-all duration-300 hover:translate-x-2.5 hover:shadow-[0_8px_30px_rgba(28,76,151,0.15)] hover:border-l-[#ff7b16] flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1c4c97] to-[#ff7b16] rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-white">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0a0e27] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[rgba(28,76,151,0.05)] to-[rgba(255,123,22,0.05)] border-l-4 border-[#ff7b16] p-6 rounded-lg mt-12 text-gray-600">
            <CheckCircle
              size={24}
              className="inline-block align-middle mr-2 text-[#1c4c97]"
            />
            <strong className="font-bold">Join 2000+ Organizations</strong> who
            trust Proactive Trading as their technology partner. Experience the
            difference that quality, integrity, and innovation make in
            transforming your operations.
          </div>
        </section>
      </main>

      {/* Add keyframe animations to global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .group-hover\:rotate-360:hover {
          transform: rotate(360deg);
        }

        @media (max-width: 768px) {
          .sticky {
            top: 100px !important;
            margin-top: -20px !important;
            padding: 1rem !important;
            max-width: 95% !important;
          }
          
          nav button {
            padding: 0.5rem 1.25rem !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 640px) {
          nav {
            gap: 0.5rem !important;
          }
          
          nav button {
            padding: 0.4rem 1rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
