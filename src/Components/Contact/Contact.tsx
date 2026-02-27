import React, { useState, FormEvent, ChangeEvent } from "react";
import shopImage0 from "../../assets/shop/shop0.png";
import shopImage from "../../assets/shop/shop1.png";
import shopImage2 from "../../assets/shop/shop2.png";
import shopImage3 from "../../assets/shop/shop3.png";
import shopImage4 from "../../assets/shop/shop4.png";
import shopImage5 from "../../assets/shop/shop5.png";
import shopImage6 from "../../assets/shop/shop6.png";
import shopImage7 from "../../assets/shop/shop7.png";
import shopImage8 from "../../assets/shop/shop8.png";
import shopImage9 from "../../assets/shop/shop.png";

import {
  Mail,
  Phone,
  MapPin,
  Building2, // You have this
  Send,
  Clock,
  Users,
  MessageCircle,
  Globe,
  Award,
  CheckCircle,
  ChevronDown,
  Hash,
  Building, // Add this if you want to use Building instead of Building2
} from "lucide-react";

const Contact = () => {
  const [activeSection, setActiveSection] = useState("office");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigationButtons = [
    { id: "office", label: "Office", icon: Building2 },
    { id: "branches", label: "Branches", icon: MapPin },
    { id: "support", label: "Support", icon: Mail },
    { id: "location", label: "Location", icon: MapPin },
    { id: "team", label: "Our Team", icon: Users },
    { id: "faq", label: "FAQ", icon: MessageCircle },
  ];

  const teamMembers = [
    {
      name: "Tibebu Siyum",
      role: "CEO",
      email: "tibebusiyum@gmail.com",
      phone: "+251 123 456 789",
    },
    {
      name: "Meselu Gebreyohans",
      role: "Manager",
      email: "mike@proactive.com",
      phone: "+251 987 654 321",
    },
    {
      name: "Degim Girma",
      role: "Customer Support",
      email: "emma@proactive.com",
      phone: "+251 456 789 123",
    },
  ];

  const faqItems = [
    {
      question: "What are your business hours?",
      answer: "We are available Monday to Friday, 9:00 AM to 6:00 PM EAT.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer:
        "Yes, we provide 24/7 technical support for all our enterprise clients.",
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond within 2 hours during business hours.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Absolutely! We specialize in creating tailored solutions for our clients.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "98%", label: "Client Satisfaction", icon: Award },
    { value: "2h", label: "Avg Response Time", icon: CheckCircle },
    { value: "50+", label: "Countries Served", icon: Globe },
  ];

  // Brand colors
  const brandColors = {
    primaryBlue: "#1c4c97",
    primaryBlueDark: "#0a0e27",
    secondaryOrange: "#ff7b16",
    secondaryOrangeDark: "#e47325",
    white: "#ffffff",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-6 pt-32 pb-20 bg-gradient-to-br from-[#0a0e27] via-[#1c4c97] to-[#0a0e27]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c4c97]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff7b16]/5 to-[#1c4c97]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center -mt-8 sm:-mt-12 md:-mt-16 lg:mt-0">
          {" "}
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-pulse">
              Amazing
            </span>{" "}
            Together
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Your vision, our expertise. Let's create extraordinary solutions
            that drive your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#1c4c97] shadow-lg">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ChevronDown
              className="mx-auto text-white animate-bounce"
              size={32}
            />
          </div>
        </div>
      </section>

      {/* Tab Navigation - Inside content flow */}
      <div className="relative mt-7 mb-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background container */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl " />

            {/* Tab buttons */}
            <div className="relative flex flex-wrap justify-center gap-4 p-3 sm:p-4">
              {navigationButtons.map((button) => (
                <button
                  key={button.id}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 lg:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                    activeSection === button.id
                      ? "text-white bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] "
                      : "text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => scrollToSection(button.id)}
                >
                  <button.icon size={16} className="sm:w-[20px] sm:h-[20px]" />
                  <span>{button.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Office Information */}
        <section id="office" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Office{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Information
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Reach out to us through any of these channels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Phone",
                detail: "+251 911 517 628",
                tag: "Primary",
                icon: <Phone size={24} />,
                color: "from-blue-600 to-[#1c4c97]",
                lightColor: "bg-blue-50",
                tagColor: "bg-blue-500/10 text-blue-600",
                glowColor: "rgba(28,76,151,0.3)",
              },
              {
                title: "E-Mail",
                detail: "Pro2actives@gmail.com",
                tag: "Fast Response",
                icon: <Mail size={24} />,
                color: "from-[#1c4c97] to-[#ff7b16]",
                lightColor: "bg-indigo-50",
                tagColor: "bg-indigo-500/10 text-indigo-600",
                glowColor: "rgba(28,76,151,0.3)",
              },
              {
                title: "Address",
                detail: "Addis Ababa, Kazanchis, Garad Building, 11th Floor",
                tag: "Headquarters",
                icon: <MapPin size={24} />,
                color: "from-[#ff7b16] to-orange-600",
                lightColor: "bg-orange-50",
                tagColor: "bg-orange-500/10 text-orange-600",
                glowColor: "rgba(255,123,22,0.3)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 
                 shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]
                 transition-all duration-700 ease-out 
                 hover:-translate-y-3 cursor-pointer
                 before:absolute before:inset-0 
                 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                 before:translate-x-[-200%] hover:before:translate-x-[200%]
                 before:transition-transform before:duration-1000
                 before:rounded-3xl overflow-hidden
                 border border-gray-100/80 hover:border-transparent
                 after:absolute after:inset-0 
                 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
                 after:opacity-0 hover:after:opacity-100
                 after:transition-opacity after:duration-700"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#1c4c97]/20 group-hover:via-[#ff7b16]/20 group-hover:to-[#1c4c97]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-white" />
                </div>

                {/* Floating Glow Effect */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-1000 group-hover:scale-150"
                  style={{
                    background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Modern Icon Container with 3D effect */}
                <div className="relative mb-8">
                  <div
                    className={`absolute inset-0 ${item.lightColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} 
                        flex items-center justify-center text-white 
                        shadow-xl group-hover:shadow-2xl
                        transform group-hover:scale-110 group-hover:-rotate-3
                        transition-all duration-500 ease-out
                        before:absolute before:inset-0 before:rounded-2xl
                        before:bg-gradient-to-r before:from-white/30 before:to-transparent
                        before:opacity-0 group-hover:before:opacity-100
                        before:transition-opacity before:duration-500`}
                  >
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </span>
                  </div>

                  {/* Decorative Dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-[#ff7b16] animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                </div>

                {/* Content with enhanced typography */}
                <div className="relative">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3 tracking-tight
                       bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-6 leading-relaxed text-base font-medium
                      border-l-4 border-transparent group-hover:border-[#ff7b16]/30 pl-3
                      transition-all duration-500"
                  >
                    {item.detail}
                  </p>
                </div>

                {/* Modern Tag with Glass Effect */}
                <div className="flex items-center justify-between relative">
                  <span
                    className={`px-4 py-2 ${item.tagColor} text-xs uppercase tracking-wider 
                         font-bold rounded-full backdrop-blur-sm
                         border border-white/20 shadow-sm
                         group-hover:shadow-md transition-all duration-500
                         transform group-hover:scale-105`}
                  >
                    {item.tag}
                  </span>

                  {/* Animated Arrow Circle */}
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} 
                          opacity-0 group-hover:opacity-100 transition-all duration-500
                          flex items-center justify-center text-white text-sm
                          transform translate-x-0 group-hover:translate-x-1
                          shadow-lg`}
                    >
                      →
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 
                      bg-gradient-to-r ${item.color} rounded-full
                      group-hover:w-full transition-all duration-700 delay-300`}
                />
              </div>
            ))}
          </div>
        </section>
        {/* Visit Our Shop - Gallery Section */}
        <section id="shop-gallery" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Shop
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a virtual tour of our store and see our products in person
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            {/* First Row - 4 Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Image 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage}
                  alt="Store Front - Proactive Trading"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Store Front</p>
                    <p className="text-xs opacity-90">Main Entrance</p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage2}
                  alt="Laptop Display Section"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Laptops</p>
                    <p className="text-xs opacity-90">Gaming & Business</p>
                  </div>
                </div>
              </div>

              {/* Image 3 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage3}
                  alt="Desktop Computers"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Desktops</p>
                    <p className="text-xs opacity-90">Workstations & PCs</p>
                  </div>
                </div>
              </div>

              {/* Image 4 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage4}
                  alt="Server Room Setup"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Servers</p>
                    <p className="text-xs opacity-90">Enterprise Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 4 Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Image 5 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage5}
                  alt="Printer and Office Equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Printers</p>
                    <p className="text-xs opacity-90">Office & Production</p>
                  </div>
                </div>
              </div>

              {/* Image 6 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage6}
                  alt="Networking Equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Networking</p>
                    <p className="text-xs opacity-90">Routers & Switches</p>
                  </div>
                </div>
              </div>

              {/* Image 7 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage7}
                  alt="Computer Accessories"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Accessories</p>
                    <p className="text-xs opacity-90">Keyboards & Mice</p>
                  </div>
                </div>
              </div>

              {/* Image 8 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={shopImage8}
                  alt="Store Interior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Store Interior</p>
                    <p className="text-xs opacity-90">Showroom Display</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Office */}
        <section id="branches" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Visit us at our headquarters in the heart of Addis Ababa
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Addis Ababa Card - Single Office */}
            <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden backdrop-blur-sm">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c4c97]/5 via-transparent to-[#ff7b16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1c4c97]/10 to-[#ff7b16]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#1c4c97]/5 to-[#ff7b16]/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header with Flag and Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1c4c97] to-[#ff7b16] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Building2 size={28} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gray-900">
                        Addis Ababa
                      </span>
                      <img
                        src="/src/assets/ethiopia-flag.png"
                        alt="Ethiopian Flag"
                        className="w-10 h-7 rounded-md shadow-md object-cover border border-gray-200"
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement, Event>,
                        ) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "https://flagcdn.com/w320/et.png";
                        }}
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] rounded-full shadow-lg transform hover:scale-105 transition-transform">
                    <span className="text-sm font-bold text-white tracking-wide">
                      ★ HEADQUARTERS ★
                    </span>
                  </div>
                </div>

                {/* Main Content Grid - 2 columns on larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Location Details */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#1c4c97] to-[#ff7b16] rounded-full"></span>
                      Location Details
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-[#ff7b16]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} className="text-[#ff7b16]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Area</p>
                          <p className="font-bold text-gray-900">Kazanchise</p>
                          <p className="text-gray-600 text-sm">
                            Addis Ababa, Ethiopia
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-[#1c4c97]/10 flex items-center justify-center flex-shrink-0">
                          <Building size={18} className="text-[#1c4c97]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Building</p>
                          <p className="font-bold text-gray-900">
                            Garad Building
                          </p>
                          <p className="text-gray-600 text-sm">
                            Next to ELEL Hotel, 11th Floor
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gray-200/50 flex items-center justify-center flex-shrink-0">
                          <Hash size={18} className="text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Shop Number</p>
                          <p className="font-bold text-gray-900">#04</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Contact & Hours */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#ff7b16] to-[#1c4c97] rounded-full"></span>
                      Contact & Hours
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-green-50 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Phone size={18} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="text-[#1c4c97] font-bold text-lg">
                            +971 4 33 04 125
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-green-50 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Phone size={18} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="text-[#1c4c97] font-bold text-lg">
                            +971 4 33 04 125
                          </p>
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border border-blue-100">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                            <Clock size={18} className="text-[#1c4c97]" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">
                              Business Hours
                            </p>
                            <p className="font-bold text-gray-800">
                              Monday - Sunday
                            </p>
                            <p className="text-gray-700">8:00 AM - 6:00 PM</p>
                            <p className="text-xs text-gray-500 mt-1">
                              GST (Gulf Standard Time)
                            </p>
                          </div>
                        </div>
                        {/* Decorative stripe */}
                        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-[#1c4c97] to-[#ff7b16]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <MapPin size={18} />
                    Get Directions
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="support" className="mb-20 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <CheckCircle className="text-[#1c4c97]" size={20} />
                  <span className="font-medium text-gray-900">
                    24/7 Technical Support
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <CheckCircle className="text-[#1c4c97]" size={20} />
                  <span className="font-medium text-gray-900">
                    Dedicated Account Manager
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <CheckCircle className="text-[#1c4c97]" size={20} />
                  <span className="font-medium text-gray-900">
                    Custom Solutions Available
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4c97] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4c97] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4c97] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4c97] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-8">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4c97] focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Location Map */}
        <section id="location" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Come see us in person and discuss your project face-to-face
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63053.29898900213!2d38.74411241194516!3d8.987676755895356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1770816919908!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </section>
        {/* Team Section - Modern Glass Cards with Floating Effect */}
        <section
          id="team"
          className="mb-20 scroll-mt-20 relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#1c4c97]/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-80 h-80 bg-[#ff7b16]/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="text-center mb-12 relative">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#1c4c97]/10 to-[#ff7b16]/10 rounded-full text-sm font-semibold text-[#1c4c97] mb-4">
              ✦ Our Leadership ✦
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                  Dream Team
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#1c4c97]/20 to-[#ff7b16]/20 blur-xl" />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The talented professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                {/* Premium Card Design */}
                <div
                  className="relative bg-white rounded-3xl p-8 
                      shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_30px_70px_-15px_rgba(28,76,151,0.3)]
                      transition-all duration-700 ease-out
                      hover:-translate-y-4
                      border border-gray-100/50
                      backdrop-blur-sm
                      overflow-hidden
                      before:absolute before:inset-0 
                      before:bg-gradient-to-br before:from-[#1c4c97]/5 before:to-[#ff7b16]/5
                      before:opacity-0 before:group-hover:opacity-100
                      before:transition-opacity before:duration-700"
                >
                  {/* Animated Gradient Border */}
                  <div
                    className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-transparent via-transparent to-transparent 
                        group-hover:from-[#1c4c97] group-hover:via-[#ff7b16] group-hover:to-[#1c4c97] opacity-0 group-hover:opacity-100 
                        transition-opacity duration-700"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-white" />
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#1c4c97]/10 to-transparent rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#ff7b16]/10 to-transparent rounded-br-3xl" />

                  {/* Profile Image with Modern Design */}
                  <div className="relative mb-8 flex justify-center">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-75 group-hover:scale-110" />

                    {/* Avatar Container */}
                    <div className="relative w-28 h-28">
                      {/* Rotating Border */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#1c4c97]/30 group-hover:border-[#ff7b16] group-hover:animate-[spin_8s_linear_infinite]" />

                      {/* Avatar */}
                      <div
                        className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1c4c97] to-[#ff7b16] 
                            flex items-center justify-center text-white text-3xl font-bold
                            shadow-xl group-hover:shadow-2xl
                            transform group-hover:scale-105
                            transition-all duration-500
                            group-hover:rotate-6"
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      {/* Status Indicator */}
                      <div
                        className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white 
                            animate-pulse shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-2
                         bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text"
                    >
                      {member.name}
                    </h3>

                    {/* Role with decorative line */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#1c4c97]/30" />
                      <p className="text-[#1c4c97] font-semibold text-sm uppercase tracking-wider">
                        {member.role}
                      </p>
                      <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#ff7b16]/30" />
                    </div>

                    {/* Contact Info with Modern Design */}
                    <div className="space-y-3 pt-6 border-t border-gray-100 relative">
                      {/* Contact Items */}
                      <div className="flex items-center justify-center gap-3 group/item">
                        <div className="p-2 bg-[#1c4c97]/5 rounded-lg group-hover/item:bg-[#1c4c97] transition-colors duration-300">
                          <Mail
                            size={14}
                            className="text-[#1c4c97] group-hover/item:text-white transition-colors duration-300"
                          />
                        </div>
                        <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                          {member.email}
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-3 group/item">
                        <div className="p-2 bg-[#ff7b16]/5 rounded-lg group-hover/item:bg-[#ff7b16] transition-colors duration-300">
                          <Phone
                            size={14}
                            className="text-[#ff7b16] group-hover/item:text-white transition-colors duration-300"
                          />
                        </div>
                        <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                          {member.phone}
                        </span>
                      </div>

                      {/* Social Links Placeholder */}
                      <div className="flex justify-center gap-2 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1c4c97] flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                          <span className="text-xs">in</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#ff7b16] flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                          <span className="text-xs">tw</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particle Effects */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#1c4c97]/5 rounded-full blur-xl group-hover:bg-[#ff7b16]/10 transition-colors duration-700" />
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#ff7b16]/5 rounded-full blur-xl group-hover:bg-[#1c4c97]/10 transition-colors duration-700" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <MessageCircle
                    className="text-[#1c4c97] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <p className="text-gray-600 pl-10">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
