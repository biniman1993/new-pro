import { ArrowRight } from "lucide-react";
import "./Brand.css";

const Brand = () => {
 const brands = [
  // --- Major Tech & Computers ---
  { id: 1, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { id: 3, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
  { id: 4, name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  { id: 5, name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { id: 6, name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { id: 7, name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Acer-logo.svg" },
  { id: 8, name: "ASUS", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  { id: 9, name: "MSI", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MSI-Logo.svg" },
  { id: 10, name: "iBUYPOWER", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/IBUYPOWER_Logo.svg" },
  { id: 11, name: "CyberPowerPC", logo: "https://upload.wikimedia.org/wikipedia/en/b/b2/CyberPowerPC_logo.png" },
  { id: 12, name: "NZXT", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/NZXT_Logo.svg" },
  { id: 13, name: "Gigabyte", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/GIGABYTE_Logo.svg" },
  { id: 14, name: "Predator", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Acer_Predator_logo.svg/1024px-Acer_Predator_logo.svg.png" },
  { id: 15, name: "AORUS", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/AORUS_logo.svg" },
  { id: 16, name: "Meta Quest", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta_Quest_logo.svg" },

  // --- CPU, GPU, Motherboard ---
  { id: 17, name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
  { id: 18, name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" },
  { id: 19, name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { id: 20, name: "ASRock", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ASRock_logo.svg" },
  { id: 21, name: "EVGA", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/EVGA_Logo.svg" },
  { id: 22, name: "Sapphire", logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Sapphire_Technology_logo.png" },
  { id: 23, name: "PNY", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/PNY_Technologies_logo.svg" },
  { id: 24, name: "XFX", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/XFX-logo.svg" },
  { id: 25, name: "Zotac", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Zotac_logo.svg" },
  { id: 26, name: "Corsair", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Corsair_logo.svg" },
  { id: 27, name: "G.SKILL", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/G.Skill_logo.svg" },
  { id: 28, name: "Crucial", logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Crucial_Technology_logo.svg" },
  { id: 29, name: "Kingston", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Kingston_Technology_logo.svg" },
  { id: 30, name: "Patriot Memory", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Patriot_Memory_Logo.svg" },
  { id: 31, name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { id: 32, name: "SK hynix", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/SK_hynix_logo.svg" },
  { id: 33, name: "Team Group", logo: "https://www.teamgroupinc.com/upload/site_setting/1d4719c285926c04fdf807e37e95b00c.png" },
  { id: 34, name: "Seagate", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Seagate_logo.svg" },
  { id: 35, name: "Western Digital", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Western_Digital_logo.svg" },
  { id: 36, name: "SeaSonic", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Seasonic_logo.svg" },
  { id: 37, name: "Thermaltake", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Thermaltake_logo.svg" },
  { id: 38, name: "Fractal Design", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Fractal_Design_logo.svg" },
  { id: 39, name: "Lian Li", logo: "https://lian-li.com/wp-content/uploads/2018/03/logo_header.png" },
  { id: 40, name: "In Win", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/In_Win_Development_logo.svg" },
  { id: 41, name: "Cooler Master", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cooler_Master_logo.svg" },
  { id: 42, name: "be quiet!", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Be_quiet%21_logo.svg" },

  // --- Networking ---
  { id: 43, name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
  { id: 44, name: "Netgear", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Netgear_logo.svg" },
  { id: 45, name: "TP-Link", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/TP-Link_logo.svg" },
  { id: 46, name: "Ubiquiti", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Ubiquiti_Networks_logo.svg" },
  { id: 47, name: "Synology", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Synology_logo.svg" },
  { id: 48, name: "Grandstream", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Grandstream_logo.svg" },
  { id: 49, name: "APC", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/APC_by_Schneider_Electric_logo.svg" },

  // --- Printers & Scanners ---
  { id: 50, name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Canon_logo.svg" },
  { id: 51, name: "Epson", logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Epson_logo.svg" },
  { id: 52, name: "Brother", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Brother_industries_logo.svg" },
  { id: 53, name: "Kodak", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Kodak_logo.svg" },
  { id: 54, name: "Fujitsu", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Fujitsu_logo.svg" },

  // --- Accessories ---
  { id: 55, name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg" },
  { id: 56, name: "Razer", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Razer_snake_logo.svg" },
  { id: 57, name: "HyperX", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/HyperX_Logo.svg" },
  { id: 58, name: "Creative Labs", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Creative_Labs_logo.svg" },
  { id: 59, name: "Jabra", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Jabra_logo.svg" },
  { id: 60, name: "Beyerdynamic", logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Beyerdynamic-Logo.svg" },
  { id: 61, name: "Elgato", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Elgato_Logo.svg" },
  { id: 62, name: "ROCCAT", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Roccat_Logo.svg" },

  // --- Gaming & Consoles ---
  { id: 63, name: "PlayStation", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg" },
  { id: 64, name: "Nintendo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" },
  { id: 65, name: "Xbox", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/X_box_logo.svg" },
  { id: 66, name: "Bandai Namco", logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Bandai_Namco_logo.svg" },
  { id: 67, name: "Capcom", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Capcom_logo.svg" },
  { id: 68, name: "Ubisoft", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg" },

  // --- Software ---
  { id: 69, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_logo.svg" },
  { id: 70, name: "BitDefender", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Bitdefender_Logo.svg" },
  { id: 71, name: "Norton", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Norton_Logo_2021.svg" },
  { id: 72, name: "Acronis", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Acronis_Logo.svg" },
  { id: 73, name: "ESET", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/ESET_Logo.svg" },

  // --- Displays ---
  { id: 74, name: "Samsung Display", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { id: 75, name: "LG Display", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
  { id: 76, name: "AOC", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/AOC_logo.svg" },
  { id: 77, name: "BenQ", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/BenQ_logo.svg" }
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
            Discover the latest high-performance technology curated for
            professionals and enthusiasts.
          </p>
          
        </div>
        
      </header>

      <section>
        {/* Additional Container at Top */}
        <div className="brand-intro-container">
          <p className="brand-intro-text">
            <span className="text-orange-500 font-bold">
              Proactive Trading
            </span>{" "}
            has developed long-lasting partnerships with leading technology
            vendors, allowing us to provide best-in-class products and services
            to our clients. Spanning the entire technology spectrum, our vendors
            are market trailblazers in information technology, mobile, security,
            and networking solutions. We drive partner success through our
            expert on-the-ground vendor knowledge, leveraging our specialized
            pre-sales solution teams, as well as access to programs and
            resources.
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
                        e.target.style.display = "none";
                        e.target.parentElement.querySelector(
                          ".brand-logo-fallback",
                        ).style.display = "flex";
                      }}
                    />
                  ) : null}

                  <div
                    className="brand-logo-fallback"
                    style={{ backgroundColor: brand.color }}
                  >
                    <span className="brand-logo-initials">
                      {brand.initials}
                    </span>
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
          <h2 className="brand-cta-title">
            Let's Work Together & Boost Your Technology Success!
          </h2>
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
