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

// Import all client logos
import primeLogo from "../../assets/awardlogo/prim.png";
import financeLogo from "../../assets/awardlogo/Finac-1.png";
import defenceLogo from "../../assets/awardlogo/def.png";
import peaceLogo from "../../assets/awardlogo/Ministry of Peace.png";
import justiceLogo from "../../assets/awardlogo/Ministry of Justice.png";
import revenuesLogo from "../../assets/awardlogo/Ministry of Revenues.png";
import foreignAffairsLogo from "../../assets/awardlogo/Ministry of Foreign Affairs.png";
import tradeLogo from "../../assets/awardlogo/trad.png";
import transportLogo from "../../assets/awardlogo/Ministry of Transport and Logistics.png";
import waterLogo from "../../assets/awardlogo/Ministry of Water and Energy.png";
import worksLogo from "../../assets/awardlogo/Ministry of Works and Urban Development.png";
import urbanLogo from "../../assets/awardlogo/Ministry of Urban and Infrastructure Development.png";
import innovationLogo from "../../assets/awardlogo/Ministry of Innovation and Technology.png";
import minesLogo from "../../assets/awardlogo/Ministry of Mines and Petroleum.png";
import agricultureLogo from "../../assets/awardlogo/Ministry of Agriculture.png";
import educationLogo from "../../assets/awardlogo/Ministry of Education.png";
import healthLogo from "../../assets/awardlogo/helth.png";
import labourLogo from "../../assets/awardlogo/Ministry of Labour and Skills.png";
import womenLogo from "../../assets/awardlogo/Ministry of Women and Social Affairs.png";
import cultureLogo from "../../assets/awardlogo/Ministry of Culture and Tourism.png";
import ethiopianAirlinesLogo from "../../assets/awardlogo/ethoair.png";
import ethioTelecomLogo from "../../assets/awardlogo/Ethio-telecom.png";
import railwaysLogo from "../../assets/awardlogo/Ethiopian Railways Corporation.jpg";
import roadsLogo from "../../assets/awardlogo/Ethiopian Roads Authority.png";
import communicationAuthLogo from "../../assets/awardlogo/Ethiopian Communication Authority.png";
import insaLogo from "../../assets/awardlogo/insa.png";
import enterpriseDevLogo from "../../assets/awardlogo/Ethiopian Enterprise Development.png";
import cbeLogo from "../../assets/awardlogo/cbe1.png";
import devBankLogo from "../../assets/awardlogo/Development Bank of Ethiopia.png";
import awashBankLogo from "../../assets/awardlogo/Awash Bank.png";
import enatBankLogo from "../../assets/awardlogo/Enat Bank.png";
import hibretBankLogo from "../../assets/awardlogo/Hibret Bank.png";
import tsedeyBankLogo from "../../assets/awardlogo/Tsedey Bank.png";
import coopBankLogo from "../../assets/awardlogo/COOP Bank of Oromia.png";
import dashinBankLogo from "../../assets/awardlogo/Dashin Bank.png";
import abyssiniaBankLogo from "../../assets/awardlogo/Abyssinia Bank.png";
import zemenBankLogo from "../../assets/awardlogo/Zemen Bank.png";
import nibBankLogo from "../../assets/awardlogo/Nib International Bank.png";
import globalBankLogo from "../../assets/awardlogo/Global Bank.png";
import addisUniversityLogo from "../../assets/awardlogo/addis.png";
import haramayaUniversityLogo from "../../assets/awardlogo/Haramaya University.png";
import stPaulsLogo from "../../assets/awardlogo/St. Paul's Hospital.png";
import menelikLogo from "../../assets/awardlogo/menelik.png";
import tikurAnbesaLogo from "../../assets/awardlogo/tikure-anbsa.png";
import alertLogo from "../../assets/awardlogo/Alert.png";
import epssLogo from "../../assets/awardlogo/epss-logo.png";
import undpLogo from "../../assets/awardlogo/undp.png";
import unicefLogo from "../../assets/awardlogo/unicef-logos.png";
import whoLogo from "../../assets/awardlogo/who.png";
import wfpLogo from "../../assets/awardlogo/wfp.png";
import unhcrLogo from "../../assets/awardlogo/unhcr.png";
import faoLogo from "../../assets/awardlogo/fao.png";
import ifadLogo from "../../assets/awardlogo/ifad.png";
import ercsLogo from "../../assets/awardlogo/ercs.png";
import saveChildrenLogo from "../../assets/awardlogo/save-ch.png";
import cggcLogo from "../../assets/awardlogo/CGGC.png";
import chinawuyiLogo from "../../assets/awardlogo/China Wu Yi Co LTD.png";
import wolaittaLogo from "../../assets/awardlogo/Wolaitta Development Association.png";
import snvLogo from "../../assets/awardlogo/SNV Ethiopia.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [statCount, setStatCount] = useState(1000);
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
      if (count >= 1000) {
        count = 1000;
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

  // Top Government & Federal Institutions - FIXED: Using imported variables
  const clients = [
    // Top Federal Ministries
    { name: "Office of Prime Minister", logo: primeLogo },
    { name: "Ministry of Finance", logo: financeLogo },
    { name: "Ministry of Defence", logo: defenceLogo },
    { name: "Ministry of Peace", logo: peaceLogo },
    { name: "Ministry of Justice", logo: justiceLogo },
    { name: "Ministry of Revenues", logo: revenuesLogo },
    { name: "Ministry of Foreign Affairs", logo: foreignAffairsLogo },
    { name: "Ministry of Trade and Regional Integration", logo: tradeLogo },
    { name: "Ministry of Transport and Logistics", logo: transportLogo },
    { name: "Ministry of Water and Energy", logo: waterLogo },
    { name: "Ministry of Works and Urban Development", logo: worksLogo },
    { name: "Ministry of Urban and Infrastructure Development", logo: urbanLogo },
    { name: "Ministry of Innovation and Technology", logo: innovationLogo },
    { name: "Ministry of Mines and Petroleum", logo: minesLogo },
    { name: "Ministry of Agriculture", logo: agricultureLogo },
    { name: "Ministry of Education", logo: educationLogo },
    { name: "Ministry of Health", logo: healthLogo },
    { name: "Ministry of Labour and Skills", logo: labourLogo },
    { name: "Ministry of Women and Social Affairs", logo: womenLogo },
    { name: "Ministry of Culture and Tourism", logo: cultureLogo },

    // Top Corporations & Airlines
    { name: "Ethiopian Airlines", logo: ethiopianAirlinesLogo },
    { name: "Ethio-telecom", logo: ethioTelecomLogo },
    { name: "Ethiopian Railways Corporation", logo: railwaysLogo },
    { name: "Ethiopian Roads Authority", logo: roadsLogo },
    { name: "Ethiopian Communication Authority", logo: communicationAuthLogo },
    { name: "Information Network Security Agency", logo: insaLogo },
    { name: "Ethiopian Enterprise Development", logo: enterpriseDevLogo },

    // Top Banks
    { name: "Commercial Bank of Ethiopia", logo: cbeLogo },
    { name: "Development Bank of Ethiopia", logo: devBankLogo },
    { name: "Awash Bank", logo: awashBankLogo },
    { name: "Enat Bank", logo: enatBankLogo },
    { name: "Hibret Bank", logo: hibretBankLogo },
    { name: "Tsedey Bank", logo: tsedeyBankLogo },
    { name: "COOP Bank of Oromia", logo: coopBankLogo },
    { name: "Dashin Bank", logo: dashinBankLogo },
    { name: "Abyssinia Bank", logo: abyssiniaBankLogo },
    { name: "Zemen Bank", logo: zemenBankLogo },
    { name: "Nib International Bank", logo: nibBankLogo },
    { name: "Global Bank", logo: globalBankLogo },

    // Top Universities
    { name: "Addis Ababa University", logo: addisUniversityLogo },
    { name: "Haramaya University", logo: haramayaUniversityLogo },

    // Top Hospitals
    { name: "St. Paul's Hospital", logo: stPaulsLogo },
    { name: "Minilik Hospital", logo: menelikLogo },
    { name: "Tikur Anbesa Hospital", logo: tikurAnbesaLogo },
    { name: "Alert Hospital", logo: alertLogo },
    { name: "Ethiopian Pharmaceutical Supply Agency", logo: epssLogo },

    // UN & International Organizations
    { name: "UNDP", logo: undpLogo },
    { name: "UNICEF", logo: unicefLogo },
    { name: "WHO", logo: whoLogo },
    { name: "WFP", logo: wfpLogo },
    { name: "UNHCR", logo: unhcrLogo },
    { name: "FAO", logo: faoLogo },
    { name: "IFAD", logo: ifadLogo },
    { name: "ERCS", logo: ercsLogo },
    { name: "Save the Children", logo: saveChildrenLogo },
    { name: "CGGC", logo: cggcLogo },
    { name: "China Wu Yi Co LTD", logo: chinawuyiLogo },
    { name: "Wolaitta Development Association", logo: wolaittaLogo },
    { name: "SNV Ethiopia", logo: snvLogo },
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp size={24} />,
      title: "Proven Track Record",
      description:
        "Successfully serving 1000+ government and private organizations nationwide.",
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
      <section className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[75vh] xl:h-[75vh] pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[80px] xl:pt-[70px] bg-gradient-to-r from-[#2a5da5] to-[#0a0e27]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#143057] z-0" />

        {/* Decorative Elements - Responsive sizing */}
        <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 h-32 sm:h-40 md:h-48 lg:h-64 bg-[#e67817]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#2a5da5]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 text-center h-full flex flex-col justify-center">
          <div className="overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:100ms]">
              <span className="text-[#ff8419]">Proactive</span> Trading
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:300ms]">
              Driving <span className="text-[#ff8419]">Innovation</span>,
              Building Trust
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto font-light mb-4 sm:mb-6 md:mb-8 animate-[slideUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:500ms]">
              Leading supplier of advanced electronics, networking equipment, and IT solutions in Ethiopia
            </p>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-[bounce_2s_infinite] z-20">
            <ChevronDown size={32} color="#ffffff" />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="flex justify-center flex-wrap gap-3 p-6 bg-white/95 backdrop-blur-md z-10 rounded-2xl max-w-7xl mx-auto -mt-23">
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
                ? "bg-gradient-to-r from-[#2a5da5] to-[#143057] text-white shadow-[0_6px_20px_rgba(28,76,151,0.3)]"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#2a5da5] to-[#1d1f30] bg-clip-text text-transparent">
            Proactive Trading
          </h2>

          <div className="text-lg leading-relaxed text-gray-600 mb-8">
            <p className="mb-4">
              Founded in{" "}
              <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent font-bold">
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
                Serving over 1,000 government and private organizations
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
              { number: "5", label: "Years of Excellence" },
              { number: "100%", label: "Genuine Products" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl text-center shadow-md transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_12px_40px_rgba(28,76,151,0.2)] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e47325] to-[#2a5da5] transform scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
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
          <div className="mission-card bg-gradient-to-br from-[#2a5da5] to-[#143057] p-8 md:p-12 rounded-2xl text-white shadow-[0_10px_40px_rgba(28,76,151,0.3)] relative overflow-hidden">
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
          <div className="vision-card bg-gradient-to-br from-[#2a5da5] to-[#143057] p-8 md:p-12 rounded-2xl text-white shadow-[0_10px_40px_rgba(28,76,151,0.3)] relative overflow-hidden">
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
          className="values-section mb-16 animate-[fadeIn_0.6s_ease-out]"
        >
          <h2 className="values-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2a5da5] to-[#1d1f30] bg-clip-text text-transparent">
            Core Values
          </h2>

          <div className="values-description text-lg leading-relaxed text-gray-600 mb-8">
            <p>
              Our values define who we are and guide every decision we make.
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white p-8 rounded-xl shadow-md transition-all duration-500 hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0_20px_60px_rgba(28,76,151,0.2)] group cursor-pointer"
              >
                <div className="value-icon-wrapper w-[70px] h-[70px] bg-gradient-to-br from-[#2a5da5] to-[#143057] rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:from-[#ff7b16] group-hover:to-[#2a5da5] group-hover:[transform:rotate(360deg)]">
                  <div className="value-icon text-white">{value.icon}</div>
                </div>
                <h3 className="value-card-title text-2xl font-bold text-[#143057] mb-4">
                  {value.title}
                </h3>
                <p className="value-card-description text-gray-500 leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2a5da5] to-[#1d1f30] bg-clip-text text-transparent">
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
                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md transition-all duration-400 hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_15px_40px_rgba(28,76,151,0.2)] border-2 border-transparent flex flex-col items-center min-h-[180px] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
                <div className="w-[100px] h-[100px] mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Simple fallback - just hide broken images
                      e.currentTarget.style.display = "none";
                      // Add a simple text fallback
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 font-bold text-xl rounded-full";
                        fallback.textContent = client.name.charAt(0);
                        parent.appendChild(fallback);
                      }
                    }}
                  />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2a5da5] to-[#1d1f30] bg-clip-text text-transparent">
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
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border-l-4 border-[#2a5da5] shadow-md transition-all duration-300 hover:translate-x-2.5 hover:shadow-[0_8px_30px_rgba(28,76,151,0.15)] hover:border-l-[#ff7b16] flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] rounded-lg flex items-center justify-center flex-shrink-0">
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
              className="inline-block align-middle mr-2 text-[#2a5da5]"
            />
            <strong className="font-bold">Join 1000+ Organizations</strong> who
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