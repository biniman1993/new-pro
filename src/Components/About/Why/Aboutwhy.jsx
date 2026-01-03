import { useRef, useState, useEffect } from 'react';
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

const Aboutwhy = () => {  // Changed component name to avoid confusion
  const whyRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);

  const whyChooseUs = [
    {
      icon: <TrendingUp size={28} />,
      title: 'Proven Track Record',
      description: 'Successfully serving 2000+ government and private organizations nationwide.'
    },
    {
      icon: <Award size={28} />,
      title: 'Quality & Genuine Products',
      description: 'Only authentic, certified products from trusted global manufacturers.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Customer-Centric Service',
      description: 'Personalized solutions tailored to your specific business needs.'
    },
    {
      icon: <Users size={28} />,
      title: 'Experienced Team',
      description: 'Skilled professionals with deep expertise in technology solutions.'
    },
    {
      icon: <Handshake size={28} />,
      title: 'Strong Partnerships',
      description: 'Direct relationships with leading technology manufacturers worldwide.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Diverse Expertise',
      description: 'Comprehensive solutions across finance, healthcare, education, and infrastructure.'
    },
    {
      icon: <Star size={28} />,
      title: 'Commitment to Excellence',
      description: 'Unwavering dedication to delivering superior quality and service.'
    },
    {
      icon: <Building2 size={28} />,
      title: 'Nationwide Impact',
      description: 'Building Ethiopia\'s technological infrastructure from the ground up.'
    }
  ];

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate cards one by one with delay
          whyChooseUs.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (whyRef.current) {
      observer.observe(whyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutwhy-container">  {/* Unique class */}
      <div className="aboutwhy-tech-background">  {/* Unique class */}
        <div className="aboutwhy-circuit-line aboutwhy-line-1"></div>
        <div className="aboutwhy-circuit-line aboutwhy-line-2"></div>
        <div className="aboutwhy-circuit-line aboutwhy-line-3"></div>
        <div className="aboutwhy-floating-dot aboutwhy-dot-1"></div>
        <div className="aboutwhy-floating-dot aboutwhy-dot-2"></div>
        <div className="aboutwhy-floating-dot aboutwhy-dot-3"></div>
        <div className="aboutwhy-floating-dot aboutwhy-dot-4"></div>
      </div>

      <main className="aboutwhy-content-wrapper">  {/* Unique class */}
        <section ref={whyRef} className="aboutwhy-content-section">  {/* Unique class */}
          <h2 className={`aboutwhy-section-title ${isVisible ? 'aboutwhy-visible' : ''}`}>  {/* Unique class */}
            Why Choose Proactive Trading?
          </h2>
          <div className="aboutwhy-section-content">  {/* Unique class */}
            <p className={`aboutwhy-intro-text ${isVisible ? 'aboutwhy-visible' : ''}`}>  {/* Unique class with text-specific styling */}
              When you partner with Proactive Trading, you're choosing more than a supplier—you're
              choosing a committed technology partner dedicated to your success. Here's what sets us apart:
            </p>
          </div>
          <div className="aboutwhy-choose-list">  {/* Unique class */}
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className={`aboutwhy-choose-item ${animatedCards.includes(index) ? 'aboutwhy-animate' : ''}`}  
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aboutwhy-icon-wrapper">  {/* Unique class */}
                  <div className="aboutwhy-icon">{item.icon}</div>
                  <div className="aboutwhy-icon-glow"></div>  {/* Unique class */}
                </div>
                <div className="aboutwhy-text">  {/* Unique class */}
                  <h3 className="aboutwhy-title">{item.title}</h3>
                  <p className="aboutwhy-description">{item.description}</p>
                </div>
                <div className="aboutwhy-card-hover-effect"></div>  {/* Unique class */}
              </div>
            ))}
          </div>
          <div className={`aboutwhy-highlight-box ${isVisible ? 'aboutwhy-animate' : ''}`}>  {/* Unique class */}
            <div className="aboutwhy-highlight-icon-wrapper">  {/* Unique class */}
              <CheckCircle size={24} className="aboutwhy-highlight-icon" />  {/* Unique class */}
            </div>
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

export default Aboutwhy;