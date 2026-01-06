import { ArrowRight } from 'lucide-react';
import './Brand.css';

const Brand = () => {
 const brands = [
  // --- Major Tech & Computers ---
  { 
    id: 1, 
    name: 'Apple', 
    color: '#555555',
    logo: '/brand-logos/apple.png',
    initials: 'AP'
  },
  { 
    id: 2, 
    name: 'Microsoft', 
    color: '#00A4EF',
    logo: '/brand-logos/microsoft.png',
    initials: 'MS'
  },
  { 
    id: 3, 
    name: 'Google', 
    color: '#4285F4',
    logo: '/brand-logos/google.png',
    initials: 'GO'
  },
  { 
    id: 4, 
    name: 'Dell', 
    color: '#0066B2',
    logo: '/brand-logos/dell.png',
    initials: 'DE'
  },
  { 
    id: 5, 
    name: 'HP', 
    color: '#0096D6',
    logo: '/brand-logos/hp.png',
    initials: 'HP'
  },
  { 
    id: 6, 
    name: 'Lenovo', 
    color: '#E10000',
    logo: '/brand-logos/lenovo.png',
    initials: 'LE'
  },
  { 
    id: 7, 
    name: 'Acer', 
    color: '#83B81A',
    logo: '/brand-logos/acer.png',
    initials: 'AC'
  },
  { 
    id: 8, 
    name: 'ASUS', 
    color: '#0F4C81',
    logo: '/brand-logos/asus.png',
    initials: 'AS'
  },
  { 
    id: 9, 
    name: 'MSI', 
    color: '#CC0000',
    logo: '/brand-logos/msi.png',
    initials: 'MS'
  },
  { 
    id: 10, 
    name: 'iBUYPOWER', 
    color: '#D50000',
    logo: '/brand-logos/ibuypower.png',
    initials: 'IB'
  },
  { 
    id: 11, 
    name: 'CyberPowerPC', 
    color: '#FF4F00',
    logo: '/brand-logos/cyberpowerpc.png',
    initials: 'CP'
  },
  { 
    id: 12, 
    name: 'NZXT', 
    color: '#6E00FF',
    logo: '/brand-logos/nzxt.png',
    initials: 'NZ'
  },
  { 
    id: 13, 
    name: 'Gigabyte', 
    color: '#0066FF',
    logo: '/brand-logos/gigabyte.png',
    initials: 'GI'
  },
  { 
    id: 14, 
    name: 'Predator', 
    color: '#00BCD4',
    logo: '/brand-logos/predator.png',
    initials: 'PR'
  },
  { 
    id: 15, 
    name: 'AORUS', 
    color: '#FF6600',
    logo: '/brand-logos/aorus.png',
    initials: 'AO'
  },
  { 
    id: 16, 
    name: 'Meta Quest', 
    color: '#123456',
    logo: '/brand-logos/meta-quest.png',
    initials: 'MQ'
  },

  // --- CPU, GPU, Motherboard, PC Components ---
  { 
    id: 17, 
    name: 'Intel', 
    color: '#0071C5',
    logo: '/brand-logos/intel.png',
    initials: 'IN'
  },
  { 
    id: 18, 
    name: 'AMD', 
    color: '#ED1C24',
    logo: '/brand-logos/amd.png',
    initials: 'AM'
  },
  { 
    id: 19, 
    name: 'NVIDIA', 
    color: '#76B900',
    logo: '/brand-logos/nvidia.png',
    initials: 'NV'
  },
  { 
    id: 20, 
    name: 'ASRock', 
    color: '#B30000',
    logo: '/brand-logos/asrock.png',
    initials: 'AR'
  },
  { 
    id: 21, 
    name: 'EVGA', 
    color: '#333333',
    logo: '/brand-logos/evga.png',
    initials: 'EV'
  },
  { 
    id: 22, 
    name: 'Sapphire', 
    color: '#0033A0',
    logo: '/brand-logos/sapphire.png',
    initials: 'SA'
  },
  { 
    id: 23, 
    name: 'PNY', 
    color: '#FFD700',
    logo: '/brand-logos/pny.png',
    initials: 'PN'
  },
  { 
    id: 24, 
    name: 'XFX', 
    color: '#222222',
    logo: '/brand-logos/xfx.png',
    initials: 'XF'
  },
  { 
    id: 25, 
    name: 'Zotac', 
    color: '#FFCC00',
    logo: '/brand-logos/zotac.png',
    initials: 'ZO'
  },
  { 
    id: 26, 
    name: 'Corsair', 
    color: '#FFD700',
    logo: '/brand-logos/corsair.png',
    initials: 'CO'
  },
  { 
    id: 27, 
    name: 'G.SKILL', 
    color: '#E60012',
    logo: '/brand-logos/gskill.png',
    initials: 'GS'
  },
  { 
    id: 28, 
    name: 'Crucial', 
    color: '#0096D6',
    logo: '/brand-logos/crucial.png',
    initials: 'CR'
  },
  { 
    id: 29, 
    name: 'Kingston', 
    color: '#CC0000',
    logo: '/brand-logos/kingston.png',
    initials: 'KI'
  },
  { 
    id: 30, 
    name: 'Patriot Memory', 
    color: '#003399',
    logo: '/brand-logos/patriot.png',
    initials: 'PM'
  },
  { 
    id: 31, 
    name: 'Samsung', 
    color: '#1428A0',
    logo: '/brand-logos/samsung.png',
    initials: 'SA'
  },
  { 
    id: 32, 
    name: 'SK hynix', 
    color: '#FF6600',
    logo: '/brand-logos/skhynix.png',
    initials: 'SK'
  },
  { 
    id: 33, 
    name: 'Team Group', 
    color: '#333333',
    logo: '/brand-logos/teamgroup.png',
    initials: 'TG'
  },
  { 
    id: 34, 
    name: 'Seagate', 
    color: '#00A3E0',
    logo: '/brand-logos/seagate.png',
    initials: 'SE'
  },
  { 
    id: 35, 
    name: 'Western Digital', 
    color: '#005195',
    logo: '/brand-logos/westerndigital.png',
    initials: 'WD'
  },
  { 
    id: 36, 
    name: 'SeaSonic', 
    color: '#004C99',
    logo: '/brand-logos/seasonic.png',
    initials: 'SS'
  },
  { 
    id: 37, 
    name: 'Thermaltake', 
    color: '#FF6600',
    logo: '/brand-logos/thermaltake.png',
    initials: 'TT'
  },
  { 
    id: 38, 
    name: 'Fractal Design', 
    color: '#000000',
    logo: '/brand-logos/fractal.png',
    initials: 'FD'
  },
  { 
    id: 39, 
    name: 'Lian Li', 
    color: '#666666',
    logo: '/brand-logos/lianli.png',
    initials: 'LL'
  },
  { 
    id: 40, 
    name: 'In Win', 
    color: '#CC0000',
    logo: '/brand-logos/inwin.png',
    initials: 'IW'
  },
  { 
    id: 41, 
    name: 'Cooler Master', 
    color: '#7014E8',
    logo: '/brand-logos/coolermaster.png',
    initials: 'CM'
  },
  { 
    id: 42, 
    name: 'be quiet!', 
    color: '#FFA500',
    logo: '/brand-logos/bequiet.png',
    initials: 'BQ'
  },

  // --- Networking ---
  { 
    id: 43, 
    name: 'Cisco', 
    color: '#1BA0D7',
    logo: '/brand-logos/cisco.png',
    initials: 'CI'
  },
  { 
    id: 44, 
    name: 'Netgear', 
    color: '#5225A0',
    logo: '/brand-logos/netgear.png',
    initials: 'NG'
  },
  { 
    id: 45, 
    name: 'TP-Link', 
    color: '#00BFA5',
    logo: '/brand-logos/tplink.png',
    initials: 'TP'
  },
  { 
    id: 46, 
    name: 'Ubiquiti', 
    color: '#0099FF',
    logo: '/brand-logos/ubiquiti.png',
    initials: 'UB'
  },
  { 
    id: 47, 
    name: 'Synology', 
    color: '#222222',
    logo: '/brand-logos/synology.png',
    initials: 'SY'
  },
  { 
    id: 48, 
    name: 'Grandstream', 
    color: '#0047AB',
    logo: '/brand-logos/grandstream.png',
    initials: 'GR'
  },
  { 
    id: 49, 
    name: 'APC', 
    color: '#008000',
    logo: '/brand-logos/apc.png',
    initials: 'AP'
  },

  // --- Printers & Scanners ---
  { 
    id: 50, 
    name: 'Canon', 
    color: '#CC0000',
    logo: '/brand-logos/canon.png',
    initials: 'CA'
  },
  { 
    id: 51, 
    name: 'Epson', 
    color: '#003399',
    logo: '/brand-logos/epson.png',
    initials: 'EP'
  },
  { 
    id: 52, 
    name: 'Brother', 
    color: '#0000AA',
    logo: '/brand-logos/brother.png',
    initials: 'BR'
  },
  { 
    id: 53, 
    name: 'Kodak', 
    color: '#FFCC00',
    logo: '/brand-logos/kodak.png',
    initials: 'KO'
  },
  { 
    id: 54, 
    name: 'Fujitsu', 
    color: '#C70039',
    logo: '/brand-logos/fujitsu.png',
    initials: 'FU'
  },

  // --- Accessories ---
  { 
    id: 55, 
    name: 'Logitech', 
    color: '#00B8FC',
    logo: '/brand-logos/logitech.png',
    initials: 'LO'
  },
  { 
    id: 56, 
    name: 'Razer', 
    color: '#00FF00',
    logo: '/brand-logos/razer.png',
    initials: 'RA'
  },
  { 
    id: 57, 
    name: 'HyperX', 
    color: '#CC0000',
    logo: '/brand-logos/hyperx.png',
    initials: 'HX'
  },
  { 
    id: 58, 
    name: 'Creative Labs', 
    color: '#000000',
    logo: '/brand-logos/creative.png',
    initials: 'CL'
  },
  { 
    id: 59, 
    name: 'Jabra', 
    color: '#FFCC00',
    logo: '/brand-logos/jabra.png',
    initials: 'JA'
  },
  { 
    id: 60, 
    name: 'Beyerdynamic', 
    color: '#003399',
    logo: '/brand-logos/beyerdynamic.png',
    initials: 'BE'
  },
  { 
    id: 61, 
    name: 'Elgato', 
    color: '#2244FF',
    logo: '/brand-logos/elgato.png',
    initials: 'EL'
  },
  { 
    id: 62, 
    name: 'ROCCAT', 
    color: '#00ADEF',
    logo: '/brand-logos/roccat.png',
    initials: 'RO'
  },

  // --- Gaming & Consoles ---
  { 
    id: 63, 
    name: 'PlayStation', 
    color: '#003791',
    logo: '/brand-logos/playstation.png',
    initials: 'PS'
  },
  { 
    id: 64, 
    name: 'Nintendo', 
    color: '#E60012',
    logo: '/brand-logos/nintendo.png',
    initials: 'NI'
  },
  { 
    id: 65, 
    name: 'Xbox', 
    color: '#107C10',
    logo: '/brand-logos/xbox.png',
    initials: 'XB'
  },
  { 
    id: 66, 
    name: 'Bandai Namco', 
    color: '#FF4C00',
    logo: '/brand-logos/bandai.png',
    initials: 'BN'
  },
  { 
    id: 67, 
    name: 'Capcom', 
    color: '#001F5B',
    logo: '/brand-logos/capcom.png',
    initials: 'CA'
  },
  { 
    id: 68, 
    name: 'Ubisoft', 
    color: '#000000',
    logo: '/brand-logos/ubisoft.png',
    initials: 'UB'
  },

  // --- Software ---
  { 
    id: 69, 
    name: 'Adobe', 
    color: '#FF0000',
    logo: '/brand-logos/adobe.png',
    initials: 'AD'
  },
  { 
    id: 70, 
    name: 'BitDefender', 
    color: '#B80000',
    logo: '/brand-logos/bitdefender.png',
    initials: 'BD'
  },
  { 
    id: 71, 
    name: 'Norton', 
    color: '#FFD100',
    logo: '/brand-logos/norton.png',
    initials: 'NO'
  },
  { 
    id: 72, 
    name: 'Acronis', 
    color: '#00285C',
    logo: '/brand-logos/acronis.png',
    initials: 'AC'
  },
  { 
    id: 73, 
    name: 'ESET', 
    color: '#00A3CC',
    logo: '/brand-logos/eset.png',
    initials: 'ES'
  },

  // --- Displays & Digital Signage ---
  { 
    id: 74, 
    name: 'Samsung Display', 
    color: '#1428A0',
    logo: '/brand-logos/samsung-display.png',
    initials: 'SD'
  },
  { 
    id: 75, 
    name: 'LG Display', 
    color: '#A50034',
    logo: '/brand-logos/lg-display.png',
    initials: 'LD'
  },
  { 
    id: 76, 
    name: 'Azetec Display', 
    color: '#444444',
    logo: '/brand-logos/azetec.png',
    initials: 'AD'
  },
  { 
    id: 77, 
    name: 'Digital Signage', 
    color: '#222222',
    logo: '/brand-logos/digital-signage.png',
    initials: 'DS'
  }
];

  return (
    <div className="brand-page">
      {/* New TechCatalog-style Header */}
      <header className="brand-header">
        <div className="brand-header-bg" />
        
        {/* Decorative Elements */}
        <div className="brand-header-decoration" />

        <div className="brand-header-content">
          <h1 className="brand-title">
            Our <span className="brand-title-accent">Brands</span>
          </h1>
          <p className="brand-subtitle">
            Discover the latest high-performance technology curated for professionals and enthusiasts.
          </p>
        </div>
      </header>

      <section>
        {/* Additional Container at Top */}
        <div className="brand-intro-container">
          <p className="brand-intro-text">
            MBUZZ has developed long-lasting partnerships with leading technology vendors, allowing us to provide best-in-class products and services to our clients. Spanning the entire technology spectrum, our vendors are market trailblazers in information technology, mobile, security, and networking solutions. We drive partner success through our expert on-the-ground vendor knowledge, leveraging our specialized pre-sales solution teams, as well as access to programs and resources.
          </p>
        </div>
      </section>

      {/* Brands Section with Logos */}
      <section className="brands-section">
        <div className="brands-container">
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.id} className="brand-card">
                <div className="brand-logo-container">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="brand-logo-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.brand-logo-fallback').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  <div 
                    className="brand-logo-fallback"
                    style={{ backgroundColor: brand.color }}
                  >
                    <span className="brand-logo-initials">{brand.initials}</span>
                  </div>
                </div>
                <p className="brand-name">{brand.name}</p>
                <div className="brand-card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-cta-section">
        <div className="brand-cta-content">
          <h2 className="brand-cta-title">Let's Work Together & Boost Your Technology Success!</h2>
          <button className="brand-cta-button">
            <span className="brand-button-text">Get Started</span>
            <ArrowRight className="brand-button-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Brand;