import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import shopImage from "../../assets/shop/shop0.png";
import shopImage2 from "../../assets/shop/shop1.png";
import shopImage3 from "../../assets/shop/shop2.png";
import shopImage4 from "../../assets/shop/shop8.png";
import shopImage5 from "../../assets/shop/shop4.png";
import shopImage6 from "../../assets/shop/shop9.jpg";
import shopImage7 from "../../assets/shop/shop6.png";
import shopImage8 from "../../assets/shop/shop7.png";
import shopImage9 from "../../assets/shop/lap1.jpg";
import shopImage13 from "../../assets/shop/offic.jpg";
import shopImage10 from "../../assets/shop/canon.png";
import shopImage11 from "../../assets/shop/lap.jpg";
import shopImage45 from "../../assets/shop/shop3.png";
import shopImage44 from "../../assets/shop/pri.png";

import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
  Clock,
  Users,
  MessageCircle,
  Globe,
  Award,
  CheckCircle,
  ChevronDown,
  Hash,
  Building,
  Navigation, // ✅ Fixed: Added missing import
} from "lucide-react";

const Contact = () => {
  const [activeSection, setActiveSection] = useState("Contact");
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

  // ✅ Fixed: Removed duplicate MapPin, added unique icons
  const navigationButtons = [
    { id: "Contact", label: "Contact", icon: Building2 },
    { id: "Office", label: "Office", icon: Building }, // Changed from MapPin
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

  // Brand colors (kept for reference)
  const brandColors = {
    primaryBlue: "#2a5da5",
    primaryBlueDark: "#0a0e27",
    secondaryOrange: "#ff7b16",
    secondaryOrangeDark: "#e47325",
    white: "#ffffff",
  };

  useEffect(() => {
    // Check if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-6 pt-32 pb-20 bg-gradient-to-br from-[#143057] via-[#2a5da5] to-[#143057]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a5da5]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff7b16]/5 to-[#2a5da5]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center -mt-8 sm:-mt-12 md:-mt-16 lg:mt-0">
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
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#2a5da5] shadow-lg">
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
                      ? "text-white bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] "
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Contact Information */}
        <section id="Contact" className="mb-20 scroll-mt-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-sm font-semibold text-[#2a5da5] mb-4">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help 24/7. Choose your preferred way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card - Multiple Numbers */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2a5da5] to-blue-400 rounded-bl-full opacity-10"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-[#2a5da5] to-blue-400 rounded-2xl text-white shadow-lg">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Call Us</h3>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+251911517628"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 group/phone"
                >
                  <span className="font-semibold text-gray-700">
                    📞 Primary
                  </span>
                  <span className="text-[#2a5da5] font-bold group-hover/phone:scale-105 transition-transform">
                    +251911517628
                  </span>
                </a>

                <a
                  href="tel:+251911123456"
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group/phone"
                >
                  <span className="font-semibold text-gray-700">
                    📱 Secondary
                  </span>
                  <span className="text-[#2a5da5] font-bold group-hover/phone:scale-105 transition-transform">
                    +251 911 123 456
                  </span>
                </a>

                <a
                  href="tel:+251911789012"
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group/phone"
                >
                  <span className="font-semibold text-gray-700">
                    🛟 Support
                  </span>
                  <span className="text-[#2a5da5] font-bold group-hover/phone:scale-105 transition-transform">
                    +251911517628
                  </span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Click any number to call instantly
                </p>
              </div>
            </div>

            {/* Email Card - Multiple Emails */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff7b16] to-orange-400 rounded-bl-full opacity-10"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-[#ff7b16] to-orange-400 rounded-2xl text-white shadow-lg">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
                  <p className="text-sm text-gray-500">Fast response</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:Pro2actives@gmail.com?subject=Inquiry%20from%20Website"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-200 rounded-xl transition-all duration-300 group/email"
                >
                  <span className="font-semibold text-gray-700">
                    📧 General
                  </span>
                  <span className="text-[#ff7b16] font-bold group-hover/email:scale-105 transition-transform truncate ml-2">
                    Pro2actives@gmail.com
                  </span>
                </a>

                <a
                  href="mailto:sales@proactive.et?subject=Sales%20Inquiry"
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group/email"
                >
                  <span className="font-semibold text-gray-700">💰 Sales</span>
                  <span className="text-[#ff7b16] font-bold group-hover/email:scale-105 transition-transform truncate ml-2">
                    sales@proactive.et
                  </span>
                </a>

                <a
                  href="mailto:support@proactive.et?subject=Support%20Request"
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group/email"
                >
                  <span className="font-semibold text-gray-700">
                    🔧 Support
                  </span>
                  <span className="text-[#ff7b16] font-bold group-hover/email:scale-105 transition-transform truncate ml-2">
                    support@proactive.et
                  </span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Click any email to open your mail app
                </p>
              </div>
            </div>

            {/* Address Card with Google Maps */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] rounded-bl-full opacity-10"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] rounded-2xl text-white shadow-lg">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Visit Us</h3>
                  <p className="text-sm text-gray-500">Our headquarters</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border border-blue-100">
                  <p className="font-bold text-gray-800 mb-2 text-lg">
                    🏢 Headquarters
                  </p>
                  <p className="text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">📍</span>
                    <span>
                      Kazanchis, Garad Building
                      <br />
                      1th Floor, Shop Number #04
                      <br />
                      Addis Ababa, Ethiopia
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Clock size={20} className="text-[#2a5da5] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Working Hours</p>
                    <p className="text-sm text-gray-600">
                      Monday - Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/BYSKFBf8eSgNUqqf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold group/direction"
                >
                  <MapPin
                    size={20}
                    className="group-hover/direction:animate-bounce"
                  />
                  Get Directions on Google Maps
                  <span className="text-lg group-hover/direction:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

                <p className="text-xs text-center text-gray-400">
                  Click for live navigation • Free parking available
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
            <span className="text-gray-600 font-medium">Quick actions:</span>
            <a
              href="tel:+251911517628"
              className="px-4 py-2 bg-blue-50 text-[#2a5da5] rounded-full hover:bg-blue-100 transition-colors text-sm font-semibold flex items-center gap-1"
            >
              <Phone size={16} /> Call Primary
            </a>
            <a
              href="mailto:Pro2actives@gmail.com"
              className="px-4 py-2 bg-orange-50 text-[#ff7b16] rounded-full hover:bg-orange-100 transition-colors text-sm font-semibold flex items-center gap-1"
            >
              <Mail size={16} /> Email General
            </a>
            <a
              href="https://maps.app.goo.gl/BYSKFBf8eSgNUqqf7"
              target="_blank"
              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 text-gray-700 rounded-full hover:from-blue-100 hover:to-orange-100 transition-colors text-sm font-semibold flex items-center gap-1"
            >
              <MapPin size={16} /> Navigate
            </a>
          </div>
        </section>
      </div>

      {/* Visit Our Shop - Gallery Section */}
      <section id="shop-gallery" className="mb-20 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
              Shop
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our store and see our products in person
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First Row - 1 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
              <img
                src={shopImage13}
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
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
              <img
                src={shopImage2}
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
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
              <img
                src={shopImage3}
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
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]">
              <img
                src={shopImage4}
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
                src={shopImage5}
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
                src={shopImage6}
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
                src={shopImage11}
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
                src={shopImage10}
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
                src={shopImage9}
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
                src={shopImage45}
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
                src={shopImage44}
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
      <section id="Office" className="mb-20 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a5da5]/5 via-transparent to-[#ff7b16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2a5da5]/10 to-[#ff7b16]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#2a5da5]/5 to-[#ff7b16]/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header with Flag and Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
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
                <div className="px-4 py-2 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] rounded-full shadow-lg transform hover:scale-105 transition-transform">
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
                    <span className="w-1 h-6 bg-gradient-to-b from-[#2a5da5] to-[#ff7b16] rounded-full"></span>
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
                      <div className="w-10 h-10 rounded-lg bg-[#2a5da5]/10 flex items-center justify-center flex-shrink-0">
                        <Building size={18} className="text-[#2a5da5]" />
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
                        <p className="text-sm text-gray-500">Office Number</p>
                        <p className="font-bold text-gray-900">#04</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact & Hours */}
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#ff7b16] to-[#2a5da5] rounded-full"></span>
                    Contact & Hours
                  </h3>

                  <div className="space-y-4">
                    {/* First Phone - Now Clickable */}
                    <a
                      href="tel:+251911517628"
                      className="flex items-center gap-4 p-3 bg-[#f4faff] rounded-xl hover:bg-[#e8f0fe] transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#ff7b16] flex items-center justify-center">
                        <Phone size={18} className="text-[#ffffff]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-[#2a5da5] font-bold text-lg group-hover:underline">
                          +251911517628
                        </p>
                      </div>
                      <span className="text-[#2a5da5] opacity-0 group-hover:opacity-100 transition-opacity">
                        📞
                      </span>
                    </a>

                    {/* Second Phone - Now Clickable */}
                    <a
                      href="tel:+251115578994"
                      className="flex items-center gap-4 p-3 bg-[#f4faff] rounded-xl hover:bg-[#e8f0fe] transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#2a5da5] flex items-center justify-center">
                        <Phone size={18} className="text-[#ffffff]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-[#2a5da5] font-bold text-lg group-hover:underline">
                          +251115578994
                        </p>
                      </div>
                      <span className="text-[#2a5da5] opacity-0 group-hover:opacity-100 transition-opacity">
                        📞
                      </span>
                    </a>

                    {/* Hours - Unchanged */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border border-blue-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <Clock size={18} className="text-[#2a5da5]" />
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
                      <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-[#2a5da5] to-[#ff7b16]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons - Now Working with Links */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Get Directions - Now with Google Maps Link */}
                <a
                  href="https://maps.app.goo.gl/BYSKFBf8eSgNUqqf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>

                {/* Call Now - Now with Phone Link */}
                <a
                  href="tel:+251911517628"
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="support" className="py-20 px-6 lg:px-12 scroll-mt-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & Feature Cards */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                Get in <span className="text-[#2a5da5]">Touch</span>
                <span className="block h-1.5 w-20 bg-[#ff7b16] mt-4 rounded-full"></span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear from you. Send us a message and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Modern Feature Cards */}
            <div className="grid gap-4">
              {[
                { title: "24/7 Technical Support", icon: <CheckCircle /> },
                { title: "Dedicated Account Manager", icon: <CheckCircle /> },
                { title: "Custom Solutions Available", icon: <CheckCircle /> }
              ].map((item, index) => (
                <div key={index} className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#2a5da5]/30 hover:shadow-md transition-all duration-300">
                  <div className="p-2 rounded-lg bg-[#2a5da5]/5 text-[#2a5da5] group-hover:bg-[#2a5da5] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Simple Modern Form */}
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#2a5da5]/10 to-[#ff7b16]/10 rounded-3xl blur-2xl -z-10" />
            
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2a5da5] transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2a5da5] transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2a5da5] transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2a5da5] transition-all placeholder:text-gray-400"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#2a5da5] transition-all resize-none placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group py-4 bg-[#2a5da5] hover:bg-[#143a75] text-white font-bold rounded-2xl shadow-lg shadow-[#2a5da5]/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  By clicking send, you agree to our privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
{/* Location & Map Section */}
<section id="location" className="py-20 px-4 scroll-mt-20 max-w-7xl mx-auto">
  {/* Header */}
  <div className="text-center mb-12">
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a5da5]/10 rounded-full mb-4">
      <MapPin size={16} className="text-[#ff7b16]" />
      <span className="text-sm font-semibold text-[#2a5da5]">Addis Ababa, Ethiopia</span>
    </div>
    
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Find Us{" "}
      <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
        Here
      </span>
    </h2>
    
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Visit our headquarters in Kazanchis — the heart of Addis Ababa's business district
    </p>
  </div>

  {/* Map Container */}
  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
    {/* Location Badge */}
    
    {/* Map */}
    <div className="relative w-full h-[500px] md:h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.898440598319!2d38.7635!3d9.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f1c3c1c1c1%3A0x14182215173678829852!2sKazanchis%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Proactive Trading Location - Kazanchis, Addis Ababa"
        className="w-full h-full object-cover"
      />
      
      {/* Map Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
    </div>

    {/* Bottom Action Bar */}
    <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 rounded-2xl  p-4">
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-green-700">Open Now</span>
        </div>
        <span className="text-sm text-gray-600">📍 Kazanchis, Garad Building, 11th Floor</span>
      </div>
      
      <div className="flex gap-2">
        <a
          href="https://maps.app.goo.gl/BYSKFBf8eSgNUqqf7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#2a5da5] text-white rounded-xl hover:bg-[#143a75] transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl"
        >
          <Navigation size={18} />
          <span>Directions</span>
        </a>
        
        <a
          href="tel:+251911517628"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#ff7b16] text-white rounded-xl hover:bg-[#e66d12] transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>
      </div>
    </div>
  </div>

  {/* Quick Info Strip */}
  <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600">
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#2a5da5]"></div>
      <span>Kazanchis Area</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#ff7b16]"></div>
      <span>Garad Building</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
      <span>Open Daily: 8AM - 6PM</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
      <span>Free Parking</span>
    </div>
  </div>

  {/* Trust Badges */}
  <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-70">
    <span className="text-xs text-gray-400">📍 Premium Location</span>
    <span className="text-xs text-gray-400">•</span>
    <span className="text-xs text-gray-400">🚗 Easy Access</span>
    <span className="text-xs text-gray-400">•</span>
    <span className="text-xs text-gray-400">🏢 Business District</span>
    <span className="text-xs text-gray-400">•</span>
    <span className="text-xs text-gray-400">⭐ Landmark Building</span>
  </div>
</section>

      {/* Team Section - Modern Glass Cards with Floating Effect */}
      <section
        id="team"
        className="mb-20 scroll-mt-20 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#2a5da5]/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-[#ff7b16]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="text-center mb-12 relative">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#2a5da5]/10 to-[#ff7b16]/10 rounded-full text-sm font-semibold text-[#2a5da5] mb-4">
            ✦ Our Leadership ✦
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
                Dream Team
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#2a5da5]/20 to-[#ff7b16]/20 blur-xl" />
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
                      before:bg-gradient-to-br before:from-[#2a5da5]/5 before:to-[#ff7b16]/5
                      before:opacity-0 before:group-hover:opacity-100
                      before:transition-opacity before:duration-700"
              >
                {/* Animated Gradient Border */}
                <div
                  className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-transparent via-transparent to-transparent 
                        group-hover:from-[#2a5da5] group-hover:via-[#ff7b16] group-hover:to-[#2a5da5] opacity-0 group-hover:opacity-100 
                        transition-opacity duration-700"
                >
                  <div className="absolute inset-0 rounded-3xl bg-white" />
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#2a5da5]/10 to-transparent rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#ff7b16]/10 to-transparent rounded-br-3xl" />

                {/* Profile Image with Modern Design */}
                <div className="relative mb-8 flex justify-center">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-75 group-hover:scale-110" />

                  {/* Avatar Container */}
                  <div className="relative w-28 h-28">
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2a5da5]/30 group-hover:border-[#ff7b16] group-hover:animate-[spin_8s_linear_infinite]" />

                    {/* Avatar */}
                    <div
                      className="absolute inset-2 rounded-full bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] 
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
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#2a5da5]/30" />
                    <p className="text-[#2a5da5] font-semibold text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#ff7b16]/30" />
                  </div>

                  {/* Contact Info with Modern Design */}
                  <div className="space-y-3 pt-6 border-t border-gray-100 relative">
                    {/* Contact Items */}
                    <div className="flex items-center justify-center gap-3 group/item">
                      <div className="p-2 bg-[#2a5da5]/5 rounded-lg group-hover/item:bg-[#2a5da5] transition-colors duration-300">
                        <Mail
                          size={14}
                          className="text-[#2a5da5] group-hover/item:text-white transition-colors duration-300"
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
                      <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2a5da5] flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                        <span className="text-xs">in</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#ff7b16] flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                        <span className="text-xs">tw</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particle Effects */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#2a5da5]/5 rounded-full blur-xl group-hover:bg-[#ff7b16]/10 transition-colors duration-700" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#ff7b16]/5 rounded-full blur-xl group-hover:bg-[#2a5da5]/10 transition-colors duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">
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
                  className="text-[#2a5da5] mt-1 flex-shrink-0"
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
  );
};

export default Contact;