import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Shield,
  Truck,
  RefreshCw,
  Clock,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  CheckCircle,
  XCircle,
  FileText,
  Lock,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Zap,
  Info,
} from "lucide-react";

const TermsPage = () => {
  const location = useLocation();

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Navigation tabs
  const sections = [
    { id: "terms", label: "Terms", icon: FileText },
    { id: "privacy", label: "Privacy", icon: Lock },
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "warranty", label: "Warranty", icon: Shield },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-10        
  sm:mt-12     
  md:mt-16     
  lg:mt-20     
  xl:mt-24    
  2xl:mt-24  ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2a5da5] to-[#143057] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Please read our policies carefully. By using our services, you agree to these terms.
        </p>
      </div>

      {/* Simple Tab Navigation */}
      <div className="sticky top-0 bg-white border-b shadow-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex overflow-x-auto gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-[#2a5da5] whitespace-nowrap"
              >
                <Icon size={16} />
                {section.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        
        {/* Terms Section */}
        <section id="terms" className="bg-white rounded-xl p-6 shadow-sm scroll-mt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#2a5da5] text-white flex items-center justify-center">
              <FileText size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p className="text-gray-700 leading-relaxed">
  Welcome to Proactive Trading. By accessing or using our services, you agree to be bound by these Terms and Conditions.
</p>

<p className="text-gray-700 leading-relaxed mt-4">
  Proactive Trading offers a range of warranty options for our products, designed to provide flexible coverage tailored to your specific needs. Our warranties are structured to:
</p>

<ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
  <li>Enhance customer confidence through comprehensive protection against hardware issues</li>
  <li>Minimize operational downtime with prompt service and support</li>
  <li>Deliver peace of mind, allowing you to focus on your core business without technical disruptions</li>
</ul>

<p className="text-gray-700 leading-relaxed mt-4">
  Whether you require basic coverage or more advanced support, our warranty solutions are designed to maximize the performance and longevity of your equipment.
</p>
            
            <div>
              <h3 className="font-bold text-[#2a5da5] mb-2">1. Introduction</h3>
              <p>Proactive Trading provides electronics and IT solutions across Ethiopia.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#2a5da5] mb-2">2. User Responsibilities</h3>
              <p>You are responsible for providing accurate information.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#2a5da5] mb-2">3. Limitation of Liability</h3>
              <p>We are not liable for technical disruptions beyond our control.</p>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" className="bg-white rounded-xl p-6 shadow-sm scroll-mt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#2a5da5] text-white flex items-center justify-center">
              <Lock size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          
         <div className="space-y-6 text-gray-700">
  <div>
    <h3 className="text-lg font-bold text-[#2a5da5] mb-3">Data Collection and Privacy</h3>
    <p className="leading-relaxed">
      At Proactive Trading, we prioritize the privacy and protection of your personal information. 
      When you interact with us through our website, social media channels, or Facebook Messenger, 
      we collect only the data necessary to enhance your experience and deliver our services effectively.
    </p>
  </div>

  <div>
    <h4 className="font-bold text-[#2a5da5] mb-2">1. Data Collected</h4>
    <p className="leading-relaxed">
      We may collect basic profile information when you interact with us, including:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>Your name and contact details</li>
      <li>Communication preferences</li>
      <li>Order and service history</li>
      <li>Information provided through Facebook Messenger or related services</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold text-[#2a5da5] mb-2">2. Purpose of Data Collection</h4>
    <p className="leading-relaxed">
      Your information is used solely for legitimate business purposes, including:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>Processing your orders and inquiries</li>
      <li>Providing customer support and after-sales service</li>
      <li>Improving our products and services</li>
      <li>Communicating important updates and information</li>
    </ul>
    <p className="mt-2">We do not use your data for any unauthorized or secondary purposes.</p>
  </div>

  <div>
    <h4 className="font-bold text-[#2a5da5] mb-2">3. Data Sharing and Protection</h4>
    <p className="leading-relaxed">
      We are committed to maintaining your trust through strict data protection practices:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>We do not share, sell, or rent your personal information to third parties</li>
      <li>Your data is never used for purposes other than those explicitly stated</li>
      <li>Information is only shared with your explicit consent or as required by Ethiopian law</li>
      <li>All communications are encrypted to prevent unauthorized access</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#2a5da5] mt-4">
    <p className="text-sm text-gray-700">
      <span className="font-bold">Our Commitment:</span> We adhere to applicable data protection laws 
      and continuously review our practices to ensure your information remains secure and confidential.
    </p>
  </div>
</div>
        </section>

        {/* Shipping Section */}
        <section id="shipping" className="bg-white rounded-xl p-6 shadow-sm scroll-mt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#2a5da5] text-white flex items-center justify-center">
              <Truck size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Shipping & Returns</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-[#2a5da5] mb-2 flex items-center gap-2">
                <CheckCircle size={16} /> Shipping
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Nationwide delivery across Ethiopia</li>
                <li>• Orders processed in 24-48 hours</li>
                <li>• Free delivery in Addis Ababa</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-[#2a5da5] mb-2 flex items-center gap-2">
                <RefreshCw size={16} /> Returns
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 7 days return for defective items</li>
                <li>• Original packaging required</li>
                <li>• Contact support to initiate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warranty Overview - Simple Table */}
        <section id="warranty" className="bg-white rounded-xl p-6 shadow-sm scroll-mt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#2a5da5] text-white flex items-center justify-center">
              <Shield size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Warranty Options</h2>
          </div>

          <p className="text-gray-600 mb-4">Three warranty tiers for your needs:</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-[#2a5da5] text-white">
                <tr>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Standard</th>
                  <th className="p-3 text-left">Collect & Return</th>
                  <th className="p-3 text-left">On-Site</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Response</td>
                  <td className="p-3">Next day</td>
                  <td className="p-3">4 hours</td>
                  <td className="p-3">2 hours</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Service</td>
                  <td className="p-3">Bring to center</td>
                  <td className="p-3">We pick up</td>
                  <td className="p-3">We come to you</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Repair Time</td>
                  <td className="p-3">Up to 15 days</td>
                  <td className="p-3">Up to 15 days</td>
                  <td className="p-3">1-5 days</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Area</td>
                  <td className="p-3">Ethiopia-wide</td>
                  <td className="p-3">Major cities</td>
                  <td className="p-3">Addis Ababa</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-[#2a5da5] px-3 py-1 rounded-full text-sm">3 Years Standard</span>
            <span className="bg-orange-100 text-[#ff7b16] px-3 py-1 rounded-full text-sm">1-5 Years Extended</span>
          </div>
        </section>

        {/* Simple Warranty Details */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="text-green-600" size={20} />
              <h3 className="font-bold">Standard</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">3 years coverage</p>
            <p className="text-xs text-gray-500">Bring to our center</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw className="text-orange-600" size={20} />
              <h3 className="font-bold">Collect & Return</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">1-5 years coverage</p>
            <p className="text-xs text-gray-500">We pick up from you</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-yellow-600" size={20} />
              <h3 className="font-bold">On-Site</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">1-5 years coverage</p>
            <p className="text-xs text-gray-500">Technician visits you</p>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-xl p-6 shadow-sm scroll-mt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#2a5da5] text-white flex items-center justify-center">
              <Phone size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <Phone className="mx-auto text-[#2a5da5] mb-2" size={24} />
              <p className="font-semibold">Call</p>
              <p className="text-sm text-gray-600">+251 911 517 628</p>
            </div>
            
            <div className="text-center p-4">
              <Mail className="mx-auto text-[#2a5da5] mb-2" size={24} />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600">Pro2actives@gmail.com</p>
            </div>
            
            <div className="text-center p-4">
              <MapPin className="mx-auto text-[#2a5da5] mb-2" size={24} />
              <p className="font-semibold">Visit</p>
              <p className="text-sm text-gray-600">Kazanchis, Garad Bldg</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-2">Follow us</p>
            <div className="flex justify-center gap-3">
              <Facebook className="text-gray-400 hover:text-[#2a5da5] cursor-pointer" size={20} />
              <Twitter className="text-gray-400 hover:text-[#2a5da5] cursor-pointer" size={20} />
              <Linkedin className="text-gray-400 hover:text-[#2a5da5] cursor-pointer" size={20} />
              <Instagram className="text-gray-400 hover:text-[#2a5da5] cursor-pointer" size={20} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 pt-4">
          <p>© 2024 Proactive Trading. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;