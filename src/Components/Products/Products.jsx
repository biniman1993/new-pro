import React, { useState, useEffect, useRef } from 'react';
import './Products.css';

const Products = React.forwardRef(({ 
  title = "Latest Products", 
  productsData,
  className = "" 
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  // Discount percentages for each card - you can customize these
  const discountPercentages = ["20%", "15%", "10%", "25%", "5%", "30%", "12%", "18%"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);

  return (
    <div className={`prod-section-wrapper`} ref={ref}>
      <div className={`prod-container ${className}`} ref={containerRef}>
        <h1 className={`prod-title ${isVisible ? 'prod-title-animate' : ''}`}>
          {title}
        </h1>
        <div
          className="title-line2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "opacity 600ms ease 200ms, transform 600ms ease 200ms",
          }}
        ></div>
        
        <div className="prod-grid-wrapper">
          <div className="prod-grid">
            {productsData.map((product, index) => (
              <div
                key={product.id}
                className={`prod-card ${isVisible ? 'prod-card-animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Discount Badge - Top Right Corner */}
                <div className="discount-badge">
                  <span className="discount-text">{discountPercentages[index] || "10%"}</span>
                  
                </div>
                
                {product.image && (
                  <img
                    className="prod-img"
                    src={product.image}
                    alt={product.name}
                  />
                )}
                <div className="prod-info">
                  <h3 className="prod-name">{product.name}</h3>
                  <div className="prod-stock">
                    <span className="prod-stock-icon">✔</span>
                    <span className="prod-stock-text">{product.status}</span>
                  </div>
                  <p className="prod-price">{product.price}</p>
                </div>
                <button className="prod-cart-btn">Add To Cart</button>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Button - NEW ROW BELOW CARDS */}
        <div className="mt-10 pt-8 text-center">
          <button className="px-10 py-3 bg-white border-2 border-[#0a0e27] text-[#0a0e27] font-bold  hover:bg-gradient-to-br hover:from-[#1c4c97] hover:to-[#0a0e27] hover:text-white transition-all duration-300 hover:border-transparent">
            Explore More
          </button>
        </div>
      </div>
      
      {/* Add CSS styles for discount badge */}
      <style jsx>{`
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: linear-gradient(135deg, #e47325, #e47325);
          color: white;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-width: 50px;
          animation: pulse 2s infinite;
        }
        
        .discount-text {
          font-size: 1rem;
          font-weight: 900;
          line-height: 1;
        }
        
        .discount-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          opacity: 0.9;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .prod-card {
          position: relative;
          overflow: hidden;
        }
        
        /* Alternative style for discount badge */
        .discount-badge.alternative {
          background: linear-gradient(45deg, #dc2626, #ef4444, #f87171);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
          padding-top: 8px;
          padding-bottom: 12px;
        }
        
        /* Another style option */
        .discount-badge.circle {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, #ff0000, #cc0000);
        }
      `}</style>
    </div>
  );
});

export default Products;