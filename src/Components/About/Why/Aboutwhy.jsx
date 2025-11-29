import { useRef } from 'react';
import {
  TrendingUp,
  Award,
  Heart,
  Users,
  Handshake,
  Globe,
  Star,
  Building2,
  CheckCircle
} from 'lucide-react';
import './Aboutwhy.css';

const About = () => {
  const whyRef = useRef(null);

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
      <div className="tech-background">
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
        <div className="floating-dot dot-4"></div>
      </div>

      <main className="content-wrapper">
        <section ref={whyRef} className="content-section">
          <h2 className="section-title">Why Choose Proactive Trading?</h2>
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
          <div className="highlight-box">
            <CheckCircle size={24} className="highlight-icon" />
            <span>
              <strong>Join 2000+ Organizations</strong> who trust Proactive Trading as their
              technology partner. Experience the difference that quality, integrity, and
              innovation make in transforming your operations.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
