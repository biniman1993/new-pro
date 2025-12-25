import { useState } from 'react';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Headphones, 
  Shield, 
  Zap, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Building2, 
  ShoppingBag, 
  Navigation, 
  ChevronDown,
  ArrowRight 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#ffffff] pt-24">
      {/* Hero Section */}
      <section className="relative h-[55vh] pt-20 pb-60 overflow-hidden bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] ">
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="text-[#e47325]">Get</span> In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We're here to help with all your technology needs
          </p>
         <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown size={32} color="#ffffffff" />
    </div>
        </div>
      </section>

{/* contactsection */ }
<section className="pt-18 bg-white/5 ">
<div className="-mt-[50px] bg-white backdrop-blur-sm  rounded-2xl p-6 md:p-8 max-w-5xl mx-auto "> 
<div>
      <p className="text-gray-800 text-base md:text-lg leading-relaxed">
        MBUZZ has developed long-lasting partnerships 
        with leading technology vendors, 
        allowing us to provide best-in-class products and services to our clients. 
        leveraging our specialized pre-sales solution teams, as well as access to 
        
      </p>
    </div>
  </div>
</section>
{/* Contact Details Section */}
<section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Title */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        <span className="bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] bg-clip-text text-transparent">
          Proactive Trading
        </span>
        <span className="text-[#e47325]"> - Where Innovation Meets Reliability</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
        "Your trusted partner in technology solutions — bridging innovation with excellence across Ethiopia"
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
      
      {/* Head Office Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
        <div className="p-6 md:p-8">
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0f3168] to-[#0a0e27] rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Head Office</h3>
              <p className="text-sm text-gray-500">Corporate Headquarters</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0f3168] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Addis Ababa, Ethiopia</p>
                <p className="text-gray-600 text-sm mt-1">
                  Kasanchis, near Elilly Hotel, Garad Building, 11th Floor, Office No. 04
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            {/* Phone Numbers */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:+251911517628" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0f3168] rounded-lg hover:bg-blue-100 transition-colors group/item">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+251 911 517 628</span>
              </a>
              <a href="tel:+251943565408" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0f3168] rounded-lg hover:bg-blue-100 transition-colors group/item">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+251 943 565 408</span>
              </a>
              <a href="tel:+251115578994" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0f3168] rounded-lg hover:bg-blue-100 transition-colors group/item">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+251 115 578 994</span>
              </a>
            </div>

            {/* Email */}
            <a href="mailto:Pro2actives@gmail.com" className="flex items-center gap-3 p-3 bg-orange-50 text-gray-800 rounded-lg hover:bg-orange-100 transition-colors">
              <Mail className="w-5 h-5 text-[#ff7b16]" />
              <span className="font-medium">Pro2actives@gmail.com</span>
            </a>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3 bg-gradient-to-r from-[#0f3168] to-[#0a0e27] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/btn overflow-hidden">
            <span className="relative z-10">Go to Head Office →</span>
            <MapPin className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3168] via-[#ff7b16] to-[#0a0e27] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Shop Address Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
        <div className="p-6 md:p-8">
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff7b16] to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Showroom & Shop</h3>
              <p className="text-sm text-gray-500">Visit Our Retail Store</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#ff7b16] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Addis Ababa, Ethiopia</p>
                <p className="text-gray-600 text-sm mt-1">
                  Kasanchis, Garad Building, 1st Floor, Shop Number 04
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            {/* Phone Numbers */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:+251911517628" className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-[#ff7b16] rounded-lg hover:bg-orange-100 transition-colors group/item">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+251 911 517 628</span>
              </a>
              <a href="tel:+251943565408" className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-[#ff7b16] rounded-lg hover:bg-orange-100 transition-colors group/item">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+251 943 565 408</span>
              </a>
            </div>

            {/* Email */}
            <a href="mailto:Pro2actives@gmail.com" className="flex items-center gap-3 p-3 bg-blue-50 text-gray-800 rounded-lg hover:bg-blue-100 transition-colors">
              <Mail className="w-5 h-5 text-[#0f3168]" />
              <span className="font-medium">Pro2actives@gmail.com</span>
            </a>
          </div>

          {/* Inspirational Quote */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-600 to-[#0a0e27] rounded-xl text-white">
            <p className="text-lg font-medium italic mb-2">"Let's meet and transform your vision into reality"</p>
            <p className="text-sm opacity-90">Experience technology that empowers your business growth</p>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3 bg-gradient-to-r from-[#ff7b16] to-orange-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/btn overflow-hidden">
            <span className="relative z-10">Visit Our Showroom →</span>
            <ShoppingBag className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b16] via-[#0f3168] to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>

    {/* Google Maps & Directions */}
    <div className="mt-12 md:mt-16">
      <div className="bg-gradient-to-r from-[#0f3168] to-[#0a0e27] rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Find Us Easily</h3>
            <p className="text-blue-100 mb-6">
              Located in the heart of Kasanchis business district, we're easily accessible from all parts of Addis Ababa
            </p>
            <button className="px-6 py-3 bg-white text-[#0f3168] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 group/dir">
              <Navigation className="w-5 h-5" />
              <span>Get Directions on Google Maps</span>
              <ArrowRight className="w-4 h-4 group-hover/dir:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="lg:w-1/2">
            {/* Google Maps Placeholder */}
            <div className="h-48 md:h-64 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                <p className="font-medium">Proactive Trading Location</p>
                <p className="text-sm text-blue-200 mt-2">Kasanchis, Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* Contact Info Section */}
              <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    
    {/* Top Row - Contact Cards (Full Width) */}
    <div className="space-y-8 mb-16">
<div className="text-center mb-6">
  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0f3168] via-[#ff7b16] to-[#0a0e27] bg-clip-text text-transparent mb-2">
    Call Us
  </h3>
  <div className="w-20 h-1 bg-gradient-to-r from-[#0f3168] to-[#ff7b16] rounded-full mx-auto"></div>
  <p className="text-gray-600 mt-4 text-sm md:text-base">
    We're available 24/7 for your inquiries
  </p>
</div>      {/* 3 Cards in a row */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Phone Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
          <div className="space-y-3">
            <p className="text-gray-700 font-medium">+ (251) 911 517 628</p>
            <p className="text-gray-700 font-medium">+ (251) 911 234 567</p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium">Available 24/7</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
          <div className="space-y-3">
            <p className="text-gray-700 font-medium">Pro2actives@gmail.com</p>
            <p className="text-gray-700 font-medium">support@proactivetrading.com</p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium">Response within 24h</p>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
          <div className="space-y-3">
            <p className="text-gray-700 font-medium">Addis Ababa, Ethiopia</p>
            <p className="text-gray-700 font-medium">Bole, Near Atlas Hotel</p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium">Mon-Fri: 8AM-6PM</p>
          </div>
        </div>
      </div>

      {/* Social Media Card (Full Width) */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl group overflow-hidden relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Follow Us</h3>
            <p className="text-blue-100">Stay connected for updates, news and exclusive offers</p>
          </div>
          
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Google Maps Section */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us on Map</h3>
      
      {/* Actual Google Maps Embed from your location */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.308710108349!2d38.781857176145386!3d9.037872689483308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e6cbfe1f2d%3A0xad1b0c2e55a40c2c!2sProactive%20Trading%20Plc!5e0!3m2!1sen!2set!4v1700900382250!5m2!1sen!2set"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Proactive Trading Plc Location"
          className="w-full h-96"
        ></iframe>
      </div>
      
      {/* Map Info Card */}
      <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-gray-800">Proactive Trading Plc</h4>
            <p className="text-gray-600 mt-1">📍 Bole, Addis Ababa, Ethiopia</p>
            <p className="text-sm text-gray-500 mt-2">Near Atlas Hotel, Bole Road</p>
          </div>
          <a 
            href="https://maps.app.goo.gl/rQn9kwR4zd3fcCx79" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>

  </div>
               </section>

      {/* Contact Form Section */}
              <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
               <div className="max-w-4xl mx-auto">
               <div className="text-center mb-10 md:mb-12">
                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-[#0f3168] to-[#0a0e27] bg-clip-text text-transparent">
             Send Us a Message
           </h2>
             <p className="text-gray-600">
        Fill out the form below and we'll get back to you within 24 hours
          </p>
            </div>

         <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 lg:p-10">
               <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-6">
        <div className="relative group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#0f3168] focus:ring-2 focus:ring-[#0f3168]/20 transition-all group-hover:border-[#0f3168]/50"
            placeholder=" "
          />
          <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === 'name' || formData.name 
              ? 'top-0 text-xs text-[#0f3168] bg-white px-2 -translate-y-1/2 font-medium' 
              : 'top-1/2 -translate-y-1/2 text-gray-500'
          }`}>
            Your Name
          </label>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f3168] to-[#ff7b16] transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
        </div>

        <div className="relative group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#0f3168] focus:ring-2 focus:ring-[#0f3168]/20 transition-all group-hover:border-[#0f3168]/50"
            placeholder=" "
          />
          <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === 'email' || formData.email 
              ? 'top-0 text-xs text-[#0f3168] bg-white px-2 -translate-y-1/2 font-medium' 
              : 'top-1/2 -translate-y-1/2 text-gray-500'
          }`}>
            Email Address
          </label>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f3168] to-[#ff7b16] transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-6">
        <div className="relative group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField('')}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#0f3168] focus:ring-2 focus:ring-[#0f3168]/20 transition-all group-hover:border-[#0f3168]/50"
            placeholder=" "
          />
          <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === 'phone' || formData.phone 
              ? 'top-0 text-xs text-[#0f3168] bg-white px-2 -translate-y-1/2 font-medium' 
              : 'top-1/2 -translate-y-1/2 text-gray-500'
          }`}>
            Phone Number
          </label>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f3168] to-[#ff7b16] transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
        </div>

        <div className="relative group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#0f3168] focus:ring-2 focus:ring-[#0f3168]/20 transition-all group-hover:border-[#0f3168]/50"
            placeholder=" "
          />
          <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === 'subject' || formData.subject 
              ? 'top-0 text-xs text-[#0f3168] bg-white px-2 -translate-y-1/2 font-medium' 
              : 'top-1/2 -translate-y-1/2 text-gray-500'
          }`}>
            Subject
          </label>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f3168] to-[#ff7b16] transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
        </div>
      </div>

      <div className="relative group mb-8">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField('')}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#0f3168] focus:ring-2 focus:ring-[#0f3168]/20 transition-all resize-none group-hover:border-[#0f3168]/50"
          placeholder=" "
        />
        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          focusedField === 'message' || formData.message 
            ? 'top-0 text-xs text-[#0f3168] bg-white px-2 -translate-y-1/2 font-medium' 
            : 'top-4 text-gray-500'
        }`}>
          Your Message
        </label>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f3168] to-[#ff7b16] transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
      </div>

      <button
        type="submit"
        className="w-full py-3 md:py-4 bg-gradient-to-r from-[#0f3168] to-[#0a0e27] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#0f3168]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
      >
        <span className="relative z-10">Send Message</span>
        <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3168] via-[#ff7b16] to-[#0a0e27] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        By submitting this form, you agree to our Privacy Policy
      </p>
    </form>
  </div>
</section>

    {/* Why Choose Section */}
<section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-[#0f3168] to-[#0a0e27] bg-clip-text text-transparent">
        Why Choose Proactive Trading?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We stand out from the competition with our commitment to excellence and customer satisfaction
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {[
        { 
          icon: Headphones, 
          title: '24/7 Support', 
          desc: 'Round-the-clock assistance for all your tech needs with dedicated support team',
          color: 'from-blue-600 to-blue-800',
          hoverColor: 'hover:border-blue-600'
        },
        { 
          icon: Shield, 
          title: 'Warranty Protection', 
          desc: 'Comprehensive coverage on all products with genuine manufacturer warranties',
          color: 'from-[#0f3168] to-[#0a0e27]',
          hoverColor: 'hover:border-[#0f3168]'
        },
        { 
          icon: Zap, 
          title: 'Fast Delivery', 
          desc: 'Quick and secure shipping across Ethiopia with real-time tracking',
          color: 'from-[#ff7b16] to-orange-600',
          hoverColor: 'hover:border-[#ff7b16]'
        }
      ].map((feature, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 relative overflow-hidden"
        >
          {/* Background Gradient Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
          
          {/* Icon Container */}
          <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <feature.icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0f3168] transition-colors duration-300">
            {feature.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {feature.desc}
          </p>
          
          {/* Bottom Indicator */}
          <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
            <div className="w-8 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto group-hover:from-[#0f3168] group-hover:to-[#ff7b16] transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 md:mt-16 text-center">
      <div className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl px-6 py-4 shadow-sm border border-gray-200">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-gray-700 font-medium">
          <span className="text-[#0f3168] font-bold">2,000+</span> organizations trust us for their technology needs
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default ContactPage;