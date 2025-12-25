import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import { useNavigate } from "react-router-dom";

const Products = React.forwardRef(({ 
  title = "Latest Products", 
  productsData,
  className = "", 
  onViewMore
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Handle Explore More button
  const handleClick = () => {
    onViewMore && onViewMore("All"); // optional callback
    navigate("/Catalog"); // navigate to category page
  };

  // Intersection Observer for animation
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

  const discountPercentages = ["20%", "15%", "10%", "25%", "5%", "30%", "12%", "18%"];

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
                {/* Discount Badge */}
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

        {/* Explore More Button */}
        <div className="mt-10 pt-8 text-center">
          <button
            className="px-10 py-3 bg-white border-2 border-[#0a0e27] text-[#0a0e27] font-bold hover:bg-gradient-to-br hover:from-[#1c4c97] hover:to-[#0a0e27] hover:text-white transition-all duration-300 hover:border-transparent"
            onClick={handleClick}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Discount Badge CSS */}
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

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
});

export default Products;
