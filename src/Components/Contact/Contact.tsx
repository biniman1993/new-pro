import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
  useRef,
} from "react";

import emailjs from "@emailjs/browser";
import shopImage from "../../assets/shop/shop0.webp";
import shopImage2 from "../../assets/shop/shop1.webp";
import shopImage3 from "../../assets/shop/shop2.webp";
import shopImage4 from "../../assets/shop/shop8.webp";
import shopImage5 from "../../assets/shop/shop4.webp";
import shopImage6 from "../../assets/shop/shop9.webp";
import shopImage13 from "../../assets/shop/offic.webp";
import shopImage10 from "../../assets/shop/canon.webp";
import shopImage11 from "../../assets/shop/lap.webp";
import shopImage9 from "../../assets/shop/lap.webp";
import shopImage45 from "../../assets/shop/shop3.webp";
import shopImage44 from "../../assets/shop/pri.webp";

import {
  Mail,
  Phone,
  Compass,
  MapPin,
  Building2,
  Sparkles,
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
  Navigation,
  ArrowRight,
  Linkedin, // Make sure these exist
  ExternalLink, // Make sure these exist
} from "lucide-react";

const Contact = () => {
  const [activeSection, setActiveSection] = useState("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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

    try {
      // 1. Send Notification to YOUR TEAM (Contact Us)
      const sendToMe = emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_mrj1ad8", // Your Contact Us ID
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Send Auto-Reply to the CUSTOMER (Thank You)
      const sendToCustomer = emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_fiqudxe", // Your Auto-Reply ID
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // We wait for both requests to complete
      await Promise.all([sendToMe, sendToCustomer]);

      // If successful:
      alert("Message sent successfully! Check your email for a confirmation.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    { id: "Contact", label: "Contact", icon: Building2 },
    { id: "Office", label: "Office", icon: Building },
    { id: "support", label: "Support", icon: Mail },
    { id: "location", label: "Location", icon: MapPin },
    { id: "team", label: "Our Team", icon: Users },
    { id: "faq", label: "FAQ", icon: MessageCircle },
  ];

  const teamMembers = [
    {
      name: "Tibebu Seyoum",
      role: "CEO",
      email: "TibebuSeyoum@gmail.com",
      phone: "+251911517628",
    },
    {
      name: "Meselu G/Yohannes",
      role: "Manager",
      email: "MeseluGebreyohans@gmail.com",
      phone: "+251911145127",
    },
    {
      name: "Degim Tsegaye",
      role: "Customer Support",
      email: "DegimTsegaye@gmail.com",
      phone: "+251903712398",
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
    { value: "1000+", label: "Local Clients", icon: Globe },
  ];

  useEffect(() => {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-[#143057] via-[#2a5da5] to-[#143057]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a5da5]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff7b16]/5 to-[#2a5da5]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center -mt-8 sm:-mt-12 md:-mt-16 lg:mt-0">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-semibold text-sm uppercase tracking-wider mb-6 animate-fade-in">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-pulse">
              Amazing
            </span>{" "}
            Together
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-200">
            Your vision, our expertise. Let's create extraordinary solutions
            that drive your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#2a5da5] shadow-lg transform hover:rotate-12 transition-transform duration-300">
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
      <div>
        {/* Tab Navigation */}
        <div className="sticky top-20 z-40 mt-4 mb-4 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl" />
              <div className="relative flex flex-wrap justify-center gap-4 p-3 sm:p-4">
                {navigationButtons.map((button) => (
                  <button
                    key={button.id}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 lg:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                      activeSection === button.id
                        ? "text-white font-bold bg-gradient-to-r from-[#2a5da5] to-[#1d4680] shadow-lg"
                        : "text-gray-600 font-bold hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => scrollToSection(button.id)}
                  >
                    <button.icon
                      size={16}
                      className="sm:w-[20px] sm:h-[20px]"
                    />
                    <span>{button.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Information */}
        <section
          id="Contact"
          className={`mb-24 scroll-mt-20 transition-all duration-1000 ${
            visibleSections.has("Contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold uppercase tracking-widest text-[#2a5da5] mb-6 shadow-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7b16] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7b16]"></span>
              </span>
              Contact Center
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Let's{" "}
              <span className="text-[#2a5da5] animate-gradient">Connect</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Expert support is just a click away. Reach out through our
              dedicated channels for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2a5da5]/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a5da5]/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-[#2a5da5] text-white rounded-2xl shadow-lg shadow-[#2a5da5]/30 mb-8 transform group-hover:rotate-6 transition-transform duration-500">
                  <Phone size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Call Support
                </h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  24/7 Priority Hotline
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Primary", num: "+251 911 517 628", icon: "📞" },
                    { label: "Secondary", num: "+251 943 565 408", icon: "📱" },
                    { label: "Support", num: "+251 115 578 994", icon: "🛟" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={`tel:${item.num.replace(/\s/g, "")}`}
                      className="flex items-center justify-between p-4 bg-slate-50 hover:bg-[#2a5da5] hover:text-white rounded-2xl transition-all duration-300 group/item transform hover:scale-105"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                        {item.icon} {item.label}
                      </span>
                      <span className="font-bold text-sm tracking-tight">
                        {item.num}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff7b16]/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7b16]/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-[#ff7b16] text-white rounded-2xl shadow-lg shadow-[#ff7b16]/30 mb-8 transform group-hover:rotate-6 transition-transform duration-500">
                  <Mail size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Digital Inquiry
                </h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  Response within 2 hours
                </p>

                <div className="space-y-3">
                  {[
                    { label: "General", mail: "Pro2actives@gmail.com" },
                    { label: "Sales", mail: "proactivetradingplc@gmail.com" },
                    { label: "Support", mail: "support@proactive.et" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={`mailto:${item.mail}`}
                      className="flex flex-col p-4 bg-slate-50 hover:bg-[#ff7b16] hover:text-white rounded-2xl transition-all duration-300 group/item transform hover:scale-105"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">
                        {item.label}
                      </span>
                      <span className="font-bold text-xs truncate">
                        {item.mail}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="group relative bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-900/20 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[#2a5da5]/30">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex p-4 bg-white/10 text-white backdrop-blur-md rounded-2xl mb-8 self-start transform group-hover:rotate-6 transition-transform duration-500">
                  <MapPin size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Visit Office
                </h3>
                <p className="text-slate-400 text-sm mb-6 font-medium">
                  Headquarters
                </p>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6 backdrop-blur-sm">
                  <p className="text-white font-bold mb-1">
                    Garad Building, 1st Floor
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Shop #04, Kazanchis Area
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/ziocb8Wh4AhG7LkT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 rounded-2xl hover:bg-[#2a5da5] hover:text-white transition-all duration-300 font-bold text-sm transform hover:scale-105"
                >
                  Get Live Directions
                  <ArrowRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action Bar */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-6 bg-slate-50/50 backdrop-blur-sm rounded-[2rem] border border-slate-100 shadow-lg">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              Instant Connect:
            </span>
            <div className="h-px w-8 bg-slate-200 hidden sm:block" />
            <a
              href="tel:+251911517628"
              className="flex items-center gap-2 text-sm font-bold text-[#2a5da5] hover:opacity-70 transition-all transform hover:scale-110"
            >
              <Phone size={16} strokeWidth={3} /> Call Now
            </a>
            <a
              href="mailto:Pro2actives@gmail.com"
              className="flex items-center gap-2 text-sm font-bold text-[#ff7b16] hover:opacity-70 transition-all transform hover:scale-110"
            >
              <Mail size={16} strokeWidth={3} /> Send Email
            </a>
          </div>
        </section>
      </div>

      {/* Visit Our Shop - Gallery Section */}
      <section
        id="shop-gallery"
        className={`mb-20 scroll-mt-20 px-4 transition-all duration-1000 ${
          visibleSections.has("shop-gallery")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full mb-6 border border-slate-200/50 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7b16] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7b16]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
              Explore Proactive
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a5da5] to-[#ff7b16]">
              Shop
            </span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Take a virtual tour of our store and see our products in person
          </p>

          <div className="mt-8 flex justify-center gap-1">
            <div className="w-12 h-1 bg-[#2a5da5] rounded-full"></div>
            <div className="w-4 h-1 bg-[#ff7b16] rounded-full"></div>
            <div className="w-2 h-1 bg-[#ff7b16]/50 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              {
                img: shopImage13,
                title: "Our office",
                subtitle: "Addis Ababa",
              },
              { img: shopImage, title: "Our Shop", subtitle: "At Kazannchise" },
              { img: shopImage2, title: "Our Shop", subtitle: "Front view" },
              { img: shopImage3, title: "Our Shop", subtitle: "Accessories" },
              {
                img: shopImage4,
                title: "Store Front",
                subtitle: "Main Entrance",
              },
              {
                img: shopImage5,
                title: "Printers",
                subtitle: "Office & Production",
              },
              {
                img: shopImage6,
                title: "Desktops",
                subtitle: "All in one PCs",
              },
              { img: shopImage11, title: "Our Shop", subtitle: "Side View" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3] transform hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs opacity-90">{item.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#2a5da5] rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                img: shopImage10,
                title: "Printers",
                subtitle: "Canon Copy Machines",
              },
              {
                img: shopImage9,
                title: "Networking",
                subtitle: "Routers & Switches",
              },
              { img: shopImage45, title: "Monitors", subtitle: "4k monitors" },
              {
                img: shopImage44,
                title: "Printers",
                subtitle: "Store of Printers",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3] transform hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100">
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs opacity-90">{item.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff7b16] rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section
        id="Office"
        className={`mb-24 scroll-mt-20 px-4 transition-all duration-1000 ${
          visibleSections.has("Office")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-[#2a5da5]">Office</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Visit us at our headquarters in the heart of Addis Ababa
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-[#2a5da5]/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2a5da5]/10 to-transparent rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ff7b16]/10 to-transparent rounded-full blur-3xl -ml-20 -mb-20 transition-opacity group-hover:opacity-100 opacity-50" />

            <div className="relative z-10 p-8 md:p-14">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#2a5da5] to-[#1e467a] flex items-center justify-center text-white shadow-2xl transform group-hover:rotate-6 transition-transform duration-500">
                    <Building2 size={36} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-3xl font-black text-slate-900">
                        Addis Ababa
                      </h3>
                      <img
                        src="https://flagcdn.com/w320/et.png"
                        alt="Ethiopia"
                        className="w-8 h-5 rounded shadow-sm object-cover"
                      />
                    </div>
                    <p className="text-[#ff7b16] font-bold text-xs uppercase tracking-[0.3em]">
                      Global Headquarters
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl shadow-xl shadow-slate-900/20 transform hover:-translate-y-1 transition-transform">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-bold tracking-wide uppercase">
                    Open Now
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2a5da5] group-hover/item:bg-[#2a5da5] group-hover/item:text-white transition-all duration-300 transform group-hover/item:rotate-6">
                      <Compass size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-lg font-bold text-slate-800 leading-snug">
                        Ethiopia, Addis Ababa <br />
                        <span className="text-[#2a5da5]">East Africa</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2a5da5] group-hover/item:bg-[#2a5da5] group-hover/item:text-white transition-all duration-300 transform group-hover/item:rotate-6">
                      <MapPin size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-lg font-bold text-slate-800 leading-snug">
                        Kazanchis, Garad Building <br />
                        <span className="text-[#2a5da5]">
                          Next to ELEL Hotel
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2a5da5] group-hover/item:bg-[#2a5da5] group-hover/item:text-white transition-all duration-300 transform group-hover/item:rotate-6">
                      <Hash size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                        Floor & Unit
                      </p>
                      <p className="text-lg font-bold text-slate-800">
                        11th Floor, office #04
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-[2.5rem] p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <Clock
                        className="text-[#ff7b16]"
                        size={20}
                        strokeWidth={2.5}
                      />
                      <span className="font-bold text-slate-800">
                        Business Hours
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Mon — Sun
                    </span>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-3xl font-black text-slate-900">
                        08:00 AM
                      </p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Opening
                      </p>
                    </div>
                    <div className="h-px w-12 bg-slate-300 mb-4" />
                    <div className="text-right">
                      <p className="text-3xl font-black text-slate-900">
                        06:00 PM
                      </p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Closing
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      href="tel:+251911517628"
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#2a5da5] hover:shadow-md transition-all group/phone transform hover:scale-105"
                    >
                      <span className="font-bold text-slate-700 text-sm">
                        Primary Line
                      </span>
                      <span className="font-black text-[#2a5da5] text-sm">
                        +251 911 517 628
                      </span>
                    </a>
                    <a
                      href="tel:+251911517628"
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#2a5da5] hover:shadow-md transition-all group/phone transform hover:scale-105"
                    >
                      <span className="font-bold text-slate-700 text-sm">
                        Secondary Line
                      </span>
                      <span className="font-black text-[#2a5da5] text-sm">
                        +251 115 578 994
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.app.goo.gl/ziocb8Wh4AhG7LkT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-5 bg-[#2a5da5] text-white font-black rounded-2xl hover:bg-[#1e467a] hover:shadow-2xl hover:shadow-[#2a5da5]/30 transition-all duration-300 flex items-center justify-center gap-3 group/btn transform hover:scale-105"
                >
                  <MapPin
                    size={20}
                    strokeWidth={3}
                    className="group-hover/btn:animate-bounce"
                  />
                  GET DIRECTIONS ON MAPS
                </a>
                <a
                  href="tel:+251115578994"
                  className="flex-1 px-8 py-5 bg-white text-slate-900 border-2 border-slate-100 font-black rounded-2xl hover:bg-slate-50 hover:border-[#ff7b16] transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <Phone size={20} strokeWidth={3} className="text-[#ff7b16]" />
                  RECEPTION DESK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="support"
        className={`py-24 px-6 lg:px-12 scroll-mt-20 max-w-7xl mx-auto transition-all duration-1000 ${
          visibleSections.has("support")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-[#ff7b16]" size={24} />
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Get in <span className="text-[#2a5da5]">Touch</span>
                </h2>
              </div>
              <div className="flex gap-1 mb-6">
                <span className="h-1.5 w-12 bg-[#2a5da5] rounded-full"></span>
                <span className="h-1.5 w-4 bg-[#ff7b16] rounded-full"></span>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Have a project in mind? We'd love to hear from you. Send us a
                message and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "24/7 Technical Support",
                  desc: "Always here when you need us.",
                },
                {
                  title: "Dedicated Account Manager",
                  desc: "Personalized service for your goals.",
                },
                {
                  title: "Custom Solutions Available",
                  desc: "Tailored specifically for your needs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2a5da5]/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mt-1 p-2 rounded-xl bg-[#2a5da5]/5 text-[#2a5da5] group-hover:bg-[#2a5da5] group-hover:text-white transition-all duration-300">
                    <CheckCircle size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2a5da5]/20 to-[#ff7b16]/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000" />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white"
            >
              <div className="absolute top-0 left-16 right-16 h-1 bg-gradient-to-r from-transparent via-[#2a5da5] to-transparent opacity-40" />

              <div className="space-y-6">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    Ready to{" "}
                    <span className="text-[#2a5da5]">get started?</span>
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 font-medium">
                    Complete the form and we'll handle the rest.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2a5da5]/30 focus:ring-4 focus:ring-[#2a5da5]/5 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2a5da5]/30 focus:ring-4 focus:ring-[#2a5da5]/5 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2a5da5]/30 focus:ring-4 focus:ring-[#2a5da5]/5 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2a5da5]/30 focus:ring-4 focus:ring-[#2a5da5]/5 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-slate-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-[#2a5da5]/30 focus:ring-4 focus:ring-[#2a5da5]/5 transition-all outline-none text-slate-700 placeholder:text-slate-400 font-medium resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group/btn py-5 bg-[#2a5da5] hover:bg-[#1e467a] text-white font-bold rounded-2xl shadow-xl shadow-[#2a5da5]/20 transition-all duration-300 transform active:scale-[0.98] hover:scale-105 overflow-hidden flex items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span className="tracking-wide">Send Message</span>
                      <Send
                        size={18}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </>
                  )}
                </button>

                <div className="pt-2 text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                    Secure Data • Global Support
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section
        id="location"
        className={`py-24 px-4 scroll-mt-20 max-w-7xl mx-auto transition-all duration-1000 ${
          visibleSections.has("location")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full mb-6 border border-slate-200/50">
            <MapPin size={14} className="text-[#ff7b16]" strokeWidth={3} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
              Addis Ababa, Ethiopia
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Find Us{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a5da5] to-[#ff7b16]">
              Here
            </span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Visit our headquarters in{" "}
            <span className="text-slate-900 font-bold">Kazanchis</span> — the
            heart of Addis Ababa's business district.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2a5da5]/10 to-[#ff7b16]/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white p-2 bg-white/50 backdrop-blur-sm">
            <div className="relative w-full h-[500px] md:h-[650px] rounded-[2rem] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.5284379468535!2d38.768133!3d9.015469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a8b49bb4f1%3A0xc4d1598f5348111c!2sPro%20Active%20Trading!5e0!3m2!1sen!2set!4v1710000000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                title="Proactive Trading - Exact Location"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 z-10 whitespace-nowrap">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                  Operational Now
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-900/90 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2a5da5] to-[#ff7b16] flex items-center justify-center shrink-0 shadow-lg">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">
                      Garad Building, 11th Floor
                    </p>
                    <p className="text-slate-400 text-sm font-medium">
                      Kazanchis Area, Business District
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href="https://maps.app.goo.gl/ziocb8Wh4AhG7LkT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl hover:bg-[#2a5da5] hover:text-white transition-all duration-300 text-sm font-black uppercase tracking-widest shadow-xl transform hover:scale-105"
                  >
                    <Navigation size={18} strokeWidth={2.5} />
                    Directions
                  </a>

                  <a
                    href="tel:+251911517628"
                    className="w-14 h-14 flex items-center justify-center bg-[#ff7b16] text-white rounded-2xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-[#ff7b16]/20"
                  >
                    <Phone size={22} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className={`mb-20 scroll-mt-20 px-4 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("team")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
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
                <div
                  className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-r from-transparent via-transparent to-transparent
                        group-hover:from-[#2a5da5] group-hover:via-[#ff7b16] group-hover:to-[#2a5da5] opacity-0 group-hover:opacity-100
                        transition-opacity duration-700"
                >
                  <div className="absolute inset-0 rounded-3xl bg-white" />
                </div>

                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#2a5da5]/10 to-transparent rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#ff7b16]/10 to-transparent rounded-br-3xl" />

                <div className="relative mb-8 flex justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-75 group-hover:scale-110" />

                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2a5da5]/30 group-hover:border-[#ff7b16] group-hover:animate-[spin_8s_linear_infinite]" />

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

                    <div
                      className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white
                            animate-pulse shadow-lg"
                    />
                  </div>
                </div>

                <div className="relative text-center">
                  <h3
                    className="text-2xl font-bold text-slate-800 mb-2
                         bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text"
                  >
                    {member.name}
                  </h3>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#2a5da5]/30" />
                    <p className="text-[#2a5da5] font-semibold text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#ff7b16]/30" />
                  </div>

                  <div className="space-y-3 pt-6 border-t border-gray-100 relative">
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
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#2a5da5]/5 rounded-full blur-xl group-hover:bg-[#ff7b16]/10 transition-colors duration-700" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#ff7b16]/5 rounded-full blur-xl group-hover:bg-[#2a5da5]/10 transition-colors duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className={`scroll-mt-20 mb-10 px-4 transition-all duration-1000 ${
          visibleSections.has("faq")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 hover:border-[#2a5da5]/30"
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

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animate-gradient {
          background: linear-gradient(90deg, #2a5da5, #ff7b16, #2a5da5);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
