import React, { useState, FormEvent, ChangeEvent } from "react";
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
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
      <div className="relative -mt-10 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Background container */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl border " />

            {/* Tab buttons */}
            <div className="relative flex overflow-x-auto gap-2 p-2 scrollbar-hide">
              {navigationButtons.map((button) => (
                <button
                  key={button.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeSection === button.id
                      ? "text-white bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => scrollToSection(button.id)}
                >
                  <button.icon size={20} />
                  <span>{button.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 mb-6">+251 911 517 628</p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                Primary
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1c4c97] to-[#ff7b16] flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-Mail</h3>
              <p className="text-gray-600 mb-6">Pro2actives@gmail.com</p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                Fast Response
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600">
                Addis Ababa ,Kazanchis, Garad Building next to ELEL Hotel, 11st
                Floor, Shop No 04
              </p>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mt-4">
                Headquarters
              </span>
            </div>
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
                  src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop" 
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
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop" 
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
        {/* Global Presence */}
        <section id="branches" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Address
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serving clients worldwide with local expertise
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex justify-between items-start mb-6 ml-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white">
                  <Building2 size={28} />
                </div>
                <div className="text-4xl animate-bounce">Et</div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Addis Ababa
              </h3>

              <div className="space-y-2 mb-6">
                <p>
                  <strong className="text-gray-900">Kazanchise</strong>
                </p>
                <p className="text-gray-600"> Addis Ababa, Ethiopia </p>
                <p className="text-gray-600">
                  Kazanchis, Garad Building next to ELEL Hotel
                </p>
                <p className="text-gray-600">Shop Number #04</p>
                <p className="text-[#1c4c97] font-semibold mt-3">
                  Tel: +971 4 33 04 125
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 rounded-xl text-blue-800 font-medium">
                <Clock size={18} />
                <span> Monday up to sunday 8:00 AM - 6:00 PM GST</span>
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

        {/* Team Section */}
        <section id="team" className="mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The talented professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1c4c97] to-[#ff7b16] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#1c4c97] font-semibold mb-6">
                  {member.role}
                </p>
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Phone size={16} />
                    <span className="text-sm">{member.phone}</span>
                  </div>
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
