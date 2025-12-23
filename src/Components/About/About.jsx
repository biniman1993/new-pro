import { useState, useEffect, useRef } from 'react';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Shield,
  Handshake,
  Headphones,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  Globe,
  Zap,
  Star,
  Building2,
  ChevronDown
} from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [statCount, setStatCount] = useState(2000);
  
  // Create refs for each section
  const profileRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const clientsRef = useRef(null);
  const whyRef = useRef(null);

  useEffect(() => {
    // Initialize stat counter
    let count = 0;
    const interval = setInterval(() => {
      count += 50;
      if (count >= 2000) {
        count = 2000;
        clearInterval(interval);
      }
      setStatCount(count);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Scroll to section when tab is clicked
  const scrollToSection = (sectionId) => {
    const refs = {
      profile: profileRef,
      mission: missionRef,
      vision: visionRef,
      values: valuesRef,
      clients: clientsRef,
      why: whyRef
    };
    
    if (refs[sectionId]?.current) {
      refs[sectionId].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    scrollToSection(tabId);
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'profile', ref: profileRef },
        { id: 'mission', ref: missionRef },
        { id: 'vision', ref: visionRef },
        { id: 'values', ref: valuesRef },
        { id: 'clients', ref: clientsRef },
        { id: 'why', ref: whyRef }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'Cutting-edge products setting industry benchmarks with the latest technology solutions.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Customer-Centricity',
      description: 'Exceeding client needs with lasting relationships built on trust and exceptional service.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Trust & Integrity',
      description: 'Transparency and highest ethical standards in every interaction and transaction.'
    },
    {
      icon: <Handshake size={32} />,
      title: 'Partnerships',
      description: 'Collaborating with leading manufacturers to deliver world-class technology solutions.'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Continuous Support',
      description: 'Dedicated teams ensuring smooth operations and reliable after-sales service.'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Expertise',
      description: 'Professional guidance for optimal solutions backed by years of industry experience.'
    }
  ];

  const clients = [
    'Ministry of Finance',
    'Commercial Bank of Ethiopia',
    'Ethiopian Airlines',
    'Addis Ababa University',
    'Black Lion Hospital',
    'Ministry of Education',
    'Awash Bank',
    'Ministry of Health',
    'Haramaya University',
    'Ethiopian Roads Authority',
    'Development Bank of Ethiopia',
    'St. Paul\'s Hospital',
    'Ministry of Transport and Logistics',
    'Ethiopia Enterprise Development',
    'Ministry of Defence',
    'Ethiopian Communication Authority',
    'Ministry of works and Urban Development',
    'Ethiopian Science and Technology Agency',
    'Oromia Land Bureau',
    'Tsedey Bank',
    'COOP Bank of Oromia',
    'Oromia Health Bureau',
    'Minilik Hospital',
    'Enat Bank',
    'Akaki Kality Sub City',
    'Ministry of Defense',
    'Ministry of Finance',
    'Yirgalem Construction',
    'Addis Ababa University School of',
    'Commerce',
    'Manufacturing Industry Development',
    'Institute',
    'City Government A.A Cleaning Agency',
    'Educational Material Production',
    'Distribution Enterprise',
    'Hibret Bank',
    'Ethiopian Mineral Water Share',
    'Company',
    'Wolaitta Development Association',
    'Wonj Showa Sugar Factory',
    'Ministry of Health',
    'Oromia Milisha Office',
    'CGGC',
    'Ministry of Resource Water Fund',
    'Project',
    'ERCA Dire Dawa Branch',
    'Ethiopian Railways Corporation',
    'Information Network Security Agency',
    'China Wu Yi Co LTD',
    'Yeka Sub City Capacity Building',
    'Ministry of Trade',
    'Hibret Bank',
    'Ethiopian Enterprise Development',
    'SNV Ethiopia',
    'Office of Prime Minister'
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp size={24} />,
      title: 'Proven Track Record',
      description: 'Successfully serving 2000+ government and private organizations nationwide.'
    },
    {
      icon: <Award size={24} />,
      title: 'Quality & Genuine Products',
      description: 'Only authentic, certified products from trusted global manufacturers.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Customer-Centric Service',
      description: 'Personalized solutions tailored to your specific business needs.'
    },
    {
      icon: <Users size={24} />,
      title: 'Experienced Team',
      description: 'Skilled professionals with deep expertise in technology solutions.'
    },
    {
      icon: <Handshake size={24} />,
      title: 'Strong Partnerships',
      description: 'Direct relationships with leading technology manufacturers worldwide.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Diverse Expertise',
      description: 'Comprehensive solutions across finance, healthcare, education, and infrastructure.'
    },
    {
      icon: <Star size={24} />,
      title: 'Commitment to Excellence',
      description: 'Unwavering dedication to delivering superior quality and service.'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Nationwide Impact',
      description: 'Building Ethiopia\'s technological infrastructure from the ground up.'
    }
  ];

  return (
    <div className="about-container">
      

<section className="relative overflow-hidden h-[80vh] pt-[120px] bg-gradient-to-r from-[#1c4c97] to-[#0a0e27]">

  <div className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] z-0" />
  
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b16]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c4c97]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
       <span className="text-[#e47325]">Proactive</span>  Trading
    </h1>
     <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
      Driving <span className="text-[#e47325]">Innovation</span>, Building Trust
    </h1>
    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light mb-8">
      Leading Ethiopia's Technology Revolution Since <span className="text-[#e47325] font-semibold">2022</span>
    </p>
    
    <div className="scroll-indicator">
      <ChevronDown size={32} color="#ffffffff" />
    </div>
  </div>
</section>
      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </button>
        <button
          className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
          onClick={() => handleTabClick('mission')}
        >
          Mission
        </button>
        <button
          className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
          onClick={() => handleTabClick('vision')}
        >
          Vision
        </button>
        <button
          className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
          onClick={() => handleTabClick('values')}
        >
          Values
        </button>
        <button
          className={`tab-button ${activeTab === 'clients' ? 'active' : ''}`}
          onClick={() => handleTabClick('clients')}
        >
          Clients
        </button>
        <button
          className={`tab-button ${activeTab === 'why' ? 'active' : ''}`}
          onClick={() => handleTabClick('why')}
        >
          Why Choose Us
        </button>
      </nav>

      <main className="content-wrapper vertical-layout">
        {/* Profile Section */}
        <section ref={profileRef} className="content-section">
<h2 className="about-section-title 
  bg-gradient-to-r from-[#1c4c97] to-[#1d1f30]
  bg-clip-text text-transparent 
  font-bold">
  Proactive Trading
</h2>

          <div className="section-content">
            <p>
              Founded in <span className="gradient-text" style={{ fontWeight: 700 }}>2022</span>,
              Proactive Trading has rapidly become Ethiopia's trusted partner for genuine office machines,
              IT equipment, and technology solutions. We pride ourselves on delivering excellence through
              innovation, integrity, and unwavering commitment to our clients' success.
            </p>
            <div className="highlight-box">
              <strong>Serving over 2,000 government and private organizations</strong> across multiple
              sectors including finance, healthcare, education, and infrastructure. Our comprehensive
              portfolio and dedicated service have made us the preferred technology supplier for
              Ethiopia's leading institutions.
            </div>
            <p>
              From cutting-edge office equipment to sophisticated IT infrastructure, we provide
              solutions that empower organizations to operate efficiently, grow sustainably, and
              lead confidently in their respective industries.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{statCount}+</div>
              <div className="stat-label">Trusted Organizations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Genuine Products</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="content-section">
          <div className="mission-vision-container">
            <div className="mission-card">
              <Target size={60} style={{ marginBottom: '25px' }} />
              <h2>Our Mission</h2>
              <p>
                We provide top-quality products and innovative solutions that empower our clients
                to grow, lead, and succeed. Through dedication, integrity, and smart technology,
                we build lasting value and strong partnerships across every industry we serve.
              </p>
              <p style={{ marginTop: '20px' }}>
                Our commitment extends beyond transactions—we forge relationships built on trust,
                reliability, and mutual growth, ensuring every client achieves their technological
                and operational goals.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section ref={visionRef} className="content-section">
          <div className="mission-vision-container">
            <div className="vision-card">
              <Eye size={60} style={{ marginBottom: '25px' }} />
              <h2>Our Vision</h2>
              <p>
                To lead the way in driving innovation and growth, empowering clients with advanced
                technology, building strong, lasting partnerships, and delivering solutions that
                truly put customers first.
              </p>
              <p style={{ marginTop: '20px' }}>
                We envision an Ethiopia where every organization—from government ministries to
                private enterprises—has access to world-class technology that transforms operations,
                enhances productivity, and drives national development.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="content-section">
        <h2 className="about-section-title 
  bg-gradient-to-r from-[#1c4c97] to-[#1d1f30]
  bg-clip-text text-transparent 
  font-bold"> 
  Core Values
</h2>

          <div className="section-content">
            <p>
              Our values define who we are and guide every decision we make. They are the
              foundation of our relationships with clients, partners, and team members.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section ref={clientsRef} className="content-section">
          <h2 className="about-section-title 
  bg-gradient-to-r from-[#1c4c97] to-[#1d1f30]
  bg-clip-text text-transparent 
  font-bold">Our Distinguished Clients</h2>
          <div className="section-content">
            <p>
              We are honored to serve Ethiopia's most prestigious organizations across government,
              banking, healthcare, education, and infrastructure sectors. Our clients trust us to
              deliver reliable, innovative technology solutions that power their operations.
            </p>
          </div>
          <div className="clients-section">
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-card">
                  <div className="client-name">{client}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <strong>Building Trust Since 2022:</strong> From government ministries to leading
            financial institutions, from premier hospitals to top universities—our clients
            represent the backbone of Ethiopia's development and progress.
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyRef} className="content-section">
         <h2 className="about-section-title 
  bg-gradient-to-r from-[#1c4c97] to-[#1d1f30]
  bg-clip-text text-transparent 
  font-bold">
  Proactive Trading
</h2>
          <div className="section-content">
            <p>
              When you partner with Proactive Trading, you're choosing more than a supplier—you're
              choosing a committed technology partner dedicated to your success. Here's what sets us apart:
            </p>
          </div>
          <div className="why-choose-list">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-icon">{item.icon}</div>
                <div className="why-text">
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ marginTop: '50px' }}>
            <CheckCircle size={24} style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '10px',
              color: '#1c4c97'
            }} />
            <strong>Join 2000+ Organizations</strong> who trust Proactive Trading as their
            technology partner. Experience the difference that quality, integrity, and
            innovation make in transforming your operations.
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;