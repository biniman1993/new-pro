import { useState, useEffect } from 'react';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  interface Partner {
    id: number;
    name: string;
    description: string;
    logo: string;
    modalTitle: string;
    modalBody: string;
  }

  useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedPartner]);

  const partners: Partner[] = [
    {
      id: 1,
      name: "Ethiopian Airlines",
      description: "Aviation Electronics & IT Partner",
      logo: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Reliable Electronics & IT Solutions for Aviation",
      modalBody: "We deliver a wide range of electronic devices and IT solutions to Ethiopian Airlines, including computers, laptops, printers, network tools, servers, switches, monitors, and cables. Our products ensure smooth operations and reliable performance for aviation technology needs."
    },
    {
      id: 2,
      name: "Ethiopian Commerce Bank",
      description: "Banking Technology Solutions",
      logo: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Comprehensive Computing & Networking Solutions",
      modalBody: "Supporting Ethiopian Commerce Bank with advanced computing tools and IT infrastructure, including servers, desktops, laptops, printers, switches, routers, and networking kits. Our solutions enhance banking operations and drive secure, high-performance systems."
    },
    {
      id: 3,
      name: "Minister of Health",
      description: "Healthcare IT & Devices Partner",
      logo: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Enterprise Technology for Health Services",
      modalBody: "Providing the Ministry of Health with reliable IT solutions and electronic devices such as computers, laptops, servers, printers, monitors, and networking equipment. Our solutions ensure healthcare operations run efficiently and securely."
    },
    {
      id: 4,
      name: "Addis Ababa University",
      description: "Academic Technology & Innovation Partner",
      logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Innovative Technology Solutions for Education",
      modalBody: "Delivering laptops, desktops, servers, printers, monitors, networking kits, and digital displays to Addis Ababa University. Our technology supports research, learning, and administrative excellence in higher education."
    },
    {
      id: 5,
      name: "Office of the Prime Minister",
      description: "Software, Cloud & IT Services",
      logo: "https://images.pexels.com/photos/1249158/pexels-photo-1249158.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Digital Transformation Solutions",
      modalBody: "Providing the Office of the Prime Minister with software, cloud services, laptops, computers, printers, and networking equipment. Our solutions enable efficient digital operations, secure communication, and seamless workflow management."
    },
    {
      id: 6,
      name: "Minister of Trade",
      description: "Imaging & Printing Solutions",
      logo: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Professional Imaging & Printing Devices",
      modalBody: "Delivering high-quality printers, scanners, computers, laptops, network switches, and related IT tools to the Ministry of Trade. Our products ensure reliable imaging and office productivity for trade operations."
    },
    {
      id: 7,
      name: "Defence Minister",
      description: "Advanced Technology & Devices Partner",
      logo: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "Premium IT & Electronics for Defense",
      modalBody: "Supplying the Defence Ministry with premium devices and IT solutions including Apple products, laptops, computers, printers, networking tools, servers, and monitors. Our commitment ensures high performance and operational readiness."
    },
    {
      id: 8,
      name: "INSA",
      description: "Processor & Computing Solutions Leader",
      logo: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      modalTitle: "High-Performance Computing Solutions",
      modalBody: "Providing INSA with Intel-powered processors, laptops, desktops, servers, networking equipment, printers, monitors, and IT toolkits. Our solutions ensure optimal computing performance and reliable technology infrastructure."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.partners-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const openModal = (partner: Partner) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  return (
    <section className="partners-section py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-[#2a5da5] to-[#2a5da5] bg-clip-text text-transparent">
              Clients We Served
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#2a5da5] to-[#e67817] mx-auto mb-3 sm:mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal px-2 sm:px-0">
            Collaborating with industry leaders to deliver excellence and innovation
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`partner-card bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-sm sm:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg sm:hover:shadow-xl hover:border-[#2a5da5] relative overflow-hidden ${
                isVisible ? 'animate-in' : ''
              }`}
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease`
              }}
            >
              {/* Logo Container */}
              <div className="w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] mx-auto mb-4 sm:mb-5 flex items-center justify-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 border border-gray-100 hover:border-[#e67817] hover:shadow-md">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/200x150/e67817/FFFFFF?text=${partner.name.replace(/\s+/g, '+')}`;
                  }}
                />
              </div>

              {/* Partner Name */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-1">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 min-h-[40px] sm:min-h-[45px] line-clamp-2">
                {partner.description}
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-0.5 sm:gap-1 md:gap-1.5 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Read More Button */}
              <button
                className="bg-gradient-to-r from-[#e67817] to-[#e67817] text-white border-none py-2 sm:py-3 px-4 sm:px-6 md:px-7 rounded-lg font-semibold text-xs sm:text-sm md:text-base inline-flex items-center gap-1 sm:gap-2 cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-md w-full justify-center"
                onClick={() => openModal(partner)}
              >
                Read More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-white border border-[#0a0e27] text-[#0a0e27] font-bold rounded-lg hover:bg-gradient-to-br hover:from-[#e67817] hover:to-[#2a5da5] hover:text-white hover:border-transparent transition-all duration-300 text-sm sm:text-base">
            Explore More
          </button>
        </div>

        {/* Modal Popup */}
        {selectedPartner && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-2 sm:p-4 md:p-5"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl w-full max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] overflow-y-auto relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#e67817] hover:text-white z-10"
                onClick={closeModal}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="pt-10 sm:pt-12 md:pt-14 px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-center border-b border-gray-100 bg-gradient-to-br from-[#e67817]/5 to-[#2596be]/5">
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="max-w-[120px] sm:max-w-[140px] md:max-w-[160px] max-h-[70px] sm:max-h-[80px] md:max-h-[90px] object-contain mx-auto mb-4 block"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug px-2">
                  {selectedPartner.modalTitle}
                </h2>
              </div>

              {/* Modal Body */}
              <div className="py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                  {selectedPartner.modalBody}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 text-center border-t border-gray-100">
                <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;