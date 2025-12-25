import React, { useState, useEffect, useRef } from 'react';
import './CompanyStats.css';

const CompanyStats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const started = useRef(false);

  const stats = [
    {
      id: 1,
      target: 1000,
      suffix: '+',
      title: 'Suppliers & Clients',
      description: 'Trusted Supplier to Government & Non-Government Organizations',
      icon: '🏢',
      color: '#ff7b16'
    },
    {
      id: 2,
      target: 500,
      suffix: '+',
      title: 'Awards & Recognition',
      description: 'Awarded by Leading Companies Worldwide',
      icon: '🏆',
      color: '#2a5da5'
    },
    {
      id: 3,
      target: 50,
      suffix: '+',
      title: 'International Partners',
      description: 'Global Partnership Network',
      icon: '🌐',
      color: '#e67817'
    },
    {
      id: 4,
      target: 15,
      suffix: '+',
      title: 'Years of Excellence',
      description: 'Years of Industry Leadership',
      icon: '📅',
      color: '#2a5da5'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            setVisible(true);
            startCounting();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.target;
      const duration = 2000;
      const step = Math.ceil(end / 80);

      const counter = setInterval(() => {
        start += step;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start >= end ? end : start;
          return updated;
        });

        if (start >= end) clearInterval(counter);
      }, duration / (end / step));
    });
  };

  return (
    <section className={`acme-company-stats ${visible ? 'acme-section-visible' : ''}`} ref={sectionRef}>
      <div className="acme-stats-header">
        <h2 className="acme-stats-title">Our Achievements</h2>
        <p className="acme-stats-subtitle">Trusted by organizations worldwide</p>
      </div>

      <div className="acme-stats-grid">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`acme-stat-card ${visible ? 'acme-card-visible' : ''}`}
            style={{
              '--card-color': stat.color,
              animationDelay: `${index * 0.15}s`
            }}
          >
            <div className="acme-stat-icon">
              <span>{stat.icon}</span>
            </div>
            
            <div className="acme-stat-number">
              <span className="acme-number">{counts[index]}</span>
              <span className="acme-suffix">{stat.suffix}</span>
            </div>

            <h3 className="acme-stat-title">{stat.title}</h3>
            <p className="acme-stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
