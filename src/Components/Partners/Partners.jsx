import React, { useState, useEffect } from 'react';
import './Partners.css';
import ethiopianLogo from '../../assets/awardlogo/ethoair.png';
import cbe from '../../assets/awardlogo/cbe1.png';
import aaw from '../../assets/awardlogo/addis.png';
import baw from '../../assets/awardlogo/helth.png';
import caw from '../../assets/awardlogo/prim.png';
import daw from '../../assets/awardlogo/trad.png';
import eaw from '../../assets/awardlogo/def.png';
import faw from '../../assets/awardlogo/insa.png';
import gaw from '../../assets/awardlogo/trad.png';



const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partners = [
    { 
      id: 1, 
      name: "Ethiopian Airlines", 
      description: "Aviation Electronics & IT Partner", 
      logo: ethiopianLogo, 
      modalTitle: "Reliable Electronics & IT Solutions for Aviation",
      modalBody: "We deliver a wide range of electronic devices and IT solutions to Ethiopian Airlines, including computers, laptops, printers, network tools, servers, switches, monitors, and cables. Our products ensure smooth operations and reliable performance for aviation technology needs."
    },
    { 
      id: 2, 
      name: "Ethiopian Commerce Bank", 
      description: "Banking Technology Solutions", 
      logo: cbe,
      modalTitle: "Comprehensive Computing & Networking Solutions",
      modalBody: "Supporting Ethiopian Commerce Bank with advanced computing tools and IT infrastructure, including servers, desktops, laptops, printers, switches, routers, and networking kits. Our solutions enhance banking operations and drive secure, high-performance systems."
    },
    { 
      id: 3, 
      name: "Minister of Health", 
      description: "Healthcare IT & Devices Partner", 
      logo: baw,
      modalTitle: "Enterprise Technology for Health Services",
      modalBody: "Providing the Ministry of Health with reliable IT solutions and electronic devices such as computers, laptops, servers, printers, monitors, and networking equipment. Our solutions ensure healthcare operations run efficiently and securely."
    },
    { 
      id: 4, 
      name: "Addis Ababa University", 
      description: "Academic Technology & Innovation Partner", 
      logo: aaw,
      modalTitle: "Innovative Technology Solutions for Education",
      modalBody: "Delivering laptops, desktops, servers, printers, monitors, networking kits, and digital displays to Addis Ababa University. Our technology supports research, learning, and administrative excellence in higher education."
    },
    { 
      id: 5, 
      name: "Office of the Prime Minister", 
      description: "Software, Cloud & IT Services", 
      logo: caw,
      modalTitle: "Digital Transformation Solutions",
      modalBody: "Providing the Office of the Prime Minister with software, cloud services, laptops, computers, printers, and networking equipment. Our solutions enable efficient digital operations, secure communication, and seamless workflow management."
    },
    { 
      id: 6, 
      name: "Minister of Trade", 
      description: "Imaging & Printing Solutions", 
      logo: daw,
      modalTitle: "Professional Imaging & Printing Devices",
      modalBody: "Delivering high-quality printers, scanners, computers, laptops, network switches, and related IT tools to the Ministry of Trade. Our products ensure reliable imaging and office productivity for trade operations."
    },
    { 
      id: 7, 
      name: "Defence Minister", 
      description: "Advanced Technology & Devices Partner", 
      logo: eaw,
      modalTitle: "Premium IT & Electronics for Defense",
      modalBody: "Supplying the Defence Ministry with premium devices and IT solutions including Apple products, laptops, computers, printers, networking tools, servers, and monitors. Our commitment ensures high performance and operational readiness."
    },
    { 
      id: 8, 
      name: "INSA", 
      description: "Processor & Computing Solutions Leader", 
      logo: faw,
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
      { threshold: 0.3 }
    );

    const section = document.querySelector('.partners-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const openModal = (partner) => {
    setSelectedPartner(partner);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPartner(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="partners-section">
    <div className="partners-grid partners-grid-4"></div>
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">
             <span className="title-accent">Clients We Served</span>
          </h2>
          <p className="partners-subtitle">
            Collaborating with industry leaders to deliver excellence and innovation
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`partner-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="logo-container">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150/e67817/FFFFFF?text=' + partner.name;
                  }}
                />
              </div>
              
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
              
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <button 
                className="read-more-btn"
                onClick={() => openModal(partner)}
              >
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedPartner && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <div className="modal-header">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="modal-logo"
              />
              <h2 className="modal-title">{selectedPartner.modalTitle}</h2>
            </div>
            
            <div className="modal-body">
              <p>{selectedPartner.modalBody}</p>
            </div>

            <div className="modal-footer">
              <div className="rating-stars modal-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
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
            {/* Explore More Button - NEW ROW BELOW CARDS */}
<div className="mt-18 mb-6 text-center">
  <button className="px-10 py-3 bg-white border-2 border-[0a0e27] text-[0a0e27] font-bold rounded-lg hover:bg-gradient-to-br hover:from-[#e67817] hover:to-[#2596be] hover:text-white transition-all duration-300">
    Explore More
  </button>
</div>
    </section>
  );
};

export default Partners;
