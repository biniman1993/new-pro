import { useState, useEffect, useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import
import p1 from "../../assets/awardlogo/ethoair.png";
import p2 from "../../assets/awardlogo/image.png";
import p3 from "../../assets/awardlogo/helth.png";
import p4 from "../../assets/awardlogo/addis.png";
import p5 from "../../assets/awardlogo/prim.png";
import p6 from "../../assets/awardlogo/trad.png";
import p7 from "../../assets/awardlogo/def.png";
import p8 from "../../assets/awardlogo/insa.png";

interface Partner {
  id: number;
  name: string;
  description: string;
  logo: string;
  modalTitle: string;
  modalBody: string;
}

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate(); // Add this hook

  const partners: Partner[] = [
    {
      id: 1,
      name: "Ethiopian Airlines",
      description: "Aviation Electronics & IT Partner",
      logo: p1,
      modalTitle: "Reliable Electronics & IT Solutions for Aviation",
      modalBody:
        "We deliver a wide range of electronic devices and IT solutions to Ethiopian Airlines, including computers, laptops, printers, network tools, servers, switches, monitors, and cables. Our products ensure smooth operations and reliable performance for aviation technology needs.",
    },
    {
      id: 2,
      name: "Commerce Bank",
      description: "Banking Technology Solutions",
      logo: p2,
      modalTitle: "Comprehensive Computing & Networking Solutions",
      modalBody:
        "Supporting Ethiopian Commerce Bank with advanced computing tools and IT infrastructure, including servers, desktops, laptops, printers, switches, routers, and networking kits. Our solutions enhance banking operations and drive secure, high-performance systems.",
    },
    {
      id: 3,
      name: "Minister of Health",
      description: "Healthcare IT & Devices Partner",
      logo: p3,
      modalTitle: "Enterprise Technology for Health Services",
      modalBody:
        "Providing the Ministry of Health with reliable IT solutions and electronic devices such as computers, laptops, servers, printers, monitors, and networking equipment. Our solutions ensure healthcare operations run efficiently and securely.",
    },
    {
      id: 4,
      name: "Addis University",
      description: "Academic Technology & Innovation",
      logo: p4,
      modalTitle: "Innovative Technology Solutions for Education",
      modalBody:
        "Delivering laptops, desktops, servers, printers, monitors, networking kits, and digital displays to Addis Ababa University. Our technology supports research, learning, and administrative excellence in higher education.",
    },
    {
      id: 5,
      name: "Prime Minister Office",
      description: "Software, Cloud & IT Services",
      logo: p5,
      modalTitle: "Digital Transformation Solutions",
      modalBody:
        "Providing the Office of the Prime Minister with software, cloud services, laptops, computers, printers, and networking equipment. Our solutions enable efficient digital operations, secure communication, and seamless workflow management.",
    },
    {
      id: 6,
      name: "Minister of Trade",
      description: "Imaging & Printing Solutions",
      logo: p6,
      modalTitle: "Professional Imaging & Printing Devices",
      modalBody:
        "Delivering high-quality printers, scanners, computers, laptops, network switches, and related IT tools to the Ministry of Trade. Our products ensure reliable imaging and office productivity for trade operations.",
    },
    {
      id: 7,
      name: "Defence Minister",
      description: "Advanced Tech Partner",
      logo: p7,
      modalTitle: "Premium IT & Electronics for Defense",
      modalBody:
        "Supplying the Defence Ministry with premium devices and IT solutions including Apple products, laptops, computers, printers, networking tools, servers, and monitors. Our commitment ensures high performance and operational readiness.",
    },
    {
      id: 8,
      name: "INSA",
      description: "Computing Solutions Leader",
      logo: p8,
      modalTitle: "High-Performance Computing Solutions",
      modalBody:
        "Providing INSA with Intel-powered processors, laptops, desktops, servers, networking equipment, printers, monitors, and IT toolkits. Our solutions ensure optimal computing performance and reliable technology infrastructure.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = (partner: Partner) => setSelectedPartner(partner);
  const closeModal = () => setSelectedPartner(null);

  // Updated function to handle button click - Navigate to about page with #clients hash
  const handleViewAllClients = () => {
    // Navigate to about page with #clients hash
    navigate("/about#clients");
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-[#f3f6f8] w-full overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-4">
            Clients We <span className="text-[#2a5da5]">Served</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#2a5da5] to-[#e67817] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg">
            Empowering Ethiopia's leading institutions with world-class
            technology solutions.
          </p>
        </div>

        {/* Partners Grid: 2 per row mobile, 4 per row desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#2a5da5]/30 hover:-translate-y-2 overflow-hidden
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Logo Area */}
              <div className="relative aspect-[4/3] flex items-center justify-center p-4 md:p-8 bg-gray-50/50 group-hover:bg-white transition-colors duration-500">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-all duration-700"
                />
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#e67817]"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-4 md:p-6 flex flex-col flex-grow text-center md:text-left">
                <h3 className="text-sm md:text-lg font-bold text-[#1e293b] mb-1 line-clamp-1 group-hover:text-[#e67817] transition-colors">
                  {partner.name}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">
                  {partner.description}
                </p>

                {/* Fixed-height description for alignment */}
                <div className="mb-4 flex-grow">
                  <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed line-clamp-2 md:line-clamp-3 italic">
                    "Trusted partner in digital transformation and
                    infrastructure."
                  </p>
                </div>

                {/* Split Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-gray-50">
                  <button
                    onClick={() => openModal(partner)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] hover:bg-gradient-to-r hover:from-[#e67817] hover:to-[#0a0e27]
        text-white text-[10px] md:text-xs font-bold rounded-lg transition-all active:scale-95"
                  >
                    READ MORE <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Clients Button - Added here */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={handleViewAllClients}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#2a5da5] to-[#07162e] text-white font-bold rounded-full overflow-hidden shadow-lg transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center gap-2">
             View All Clients
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b16] to-[#07162e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#e67817] hover:text-white transition-all"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="p-8 md:p-12 text-center border-b border-gray-100 bg-gray-50/50">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="max-h-20 mx-auto mb-6 object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                {selectedPartner.modalTitle}
              </h2>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-gray-700">
                {selectedPartner.modalBody}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Partners;
