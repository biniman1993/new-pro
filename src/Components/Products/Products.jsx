import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Package, ArrowRight, X, Star, Phone, MessageCircle, Send } from "lucide-react";

const Products = React.forwardRef(
  (
    {
      title = "Latest Products",
      productsData,
      className = "",
      onViewMore,
      category = "all",
    },
    ref,
  ) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showContactOptions, setShowContactOptions] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Map Products section titles to TopMenu subcategories
    const getTopMenuSubcategory = (title) => {
      const titleToSubcategoryMap = {
        "Printer Equipment": "InkjetPrinter",
        "Top-Rated Laptops": "BusinessLaptop",
        "Desktop Products": "BusinessDesktop",
        "Monitor Equipment": "FullHDMonitor",
        "Display Equipment": "LEDDigitalDisplay",
        "Latest Products": "BusinessDesktop",
      };
      return titleToSubcategoryMap[title] || "BusinessDesktop";
    };

    // Handle Explore More button
    const handleClick = () => {
      onViewMore && onViewMore(category);
      const subcategory = getTopMenuSubcategory(title);
      navigate(`/Catalog/${subcategory}`);
    };

    // Open product modal
    const openProductModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
      setShowContactOptions(false);
    };

    // Close product modal
    const closeProductModal = () => {
      setIsModalOpen(false);
      setShowContactOptions(false);
      setTimeout(() => setSelectedProduct(null), 300);
    };

    // Handle Buy Now click
    const handleBuyNow = () => {
      setShowContactOptions(true);
    };

    // Handle contact option selection
    const handleContactOption = (type) => {
      const phoneNumber = "1234567890"; // Replace with your actual phone number
      const whatsappMessage = encodeURIComponent(`Hello, I'm interested in ${selectedProduct?.name}`);
      const telegramMessage = encodeURIComponent(`Hello, I'm interested in ${selectedProduct?.name}`);
      
      switch(type) {
        case 'phone':
          window.location.href = `tel:${phoneNumber}`;
          break;
        case 'whatsapp':
          window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
          break;
        case 'telegram':
          window.open(`https://t.me/${phoneNumber}?text=${telegramMessage}`, '_blank');
          break;
        default:
          break;
      }
    };

// Intersection Observer for animation - FIXED VERSION
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // Only set to true if it's intersecting AND hasn't animated yet
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    },
    { threshold: 0.1 },
  );

  // Store the current ref value in a variable
  const currentContainer = containerRef.current;

  if (currentContainer) {
    observer.observe(currentContainer);
  }

  return () => {
    // Use the stored variable, not containerRef.current
    if (currentContainer) {
      observer.unobserve(currentContainer);
    }
  };
}, [hasAnimated]); // Only re-run if hasAnimated changes

    const discountPercentages = [
      "20", "15", "10", "25", "5", "30", "12", "18"
    ];

    return (
      <div className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#f9fbfd]" ref={ref}>
        <div className={`max-w-7xl mx-auto ${className}`} ref={containerRef}>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 transition-all duration-1000 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <span className="relative">
                <span
                  style={{
                    background: "linear-gradient(135deg, #1c4c97 0%, #ff7b16 50%, #0a0e27 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {title}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#1c4c97] to-[#ff7b16] transition-all duration-1000 group-hover:w-full" />
              </span>
            </h1>
            <div
              className={`h-1 w-24 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] mx-auto transition-all duration-1000 ${hasAnimated ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            ></div>
          </div>

          {/* Products Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
              {productsData.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => openProductModal(product)}
                  className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-300 ${
                    hasAnimated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 bg-[#ffffff] overflow-hidden">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#96c4ee]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#e47325] to-[#ff7b16] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {discountPercentages[index % discountPercentages.length]}% OFF
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-500">
                      {product.name}
                    </h3>

                    {product.description ? (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    ) : (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        High-performance {product.name} with premium features
                        and excellent reliability.
                      </p>
                    )}

                    {/* Show only first 2 specs on card */}
                    {product.specs ? (
                      <div className="mb-3 space-y-1">
                        {product.specs.slice(0, 2).map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <Package size={14} className="text-blue-600" />
                            <span>{spec}</span>
                          </div>
                        ))}
                        {product.specs.length > 2 && (
                          <p className="text-xs text-gray-500 mt-2">
                            + {product.specs.length - 2} more specs
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="mb-3 space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Package size={14} className="text-blue-600" />
                          <span>Premium Quality</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Package size={14} className="text-blue-600" />
                          <span>1 Year Warranty</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          + 3 more specs
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      {/* In Stock Indicator - Replaces price */}
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-green-600">In Stock</span>
                      </div>

                      <button
                        className="flex items-center gap-2 bg-gradient-to-r from-[#1c4c97] via-[#1c4c97] to-[#1c4c97] hover:from-[#ff7b16] hover:via-[#1c4c97] hover:to-[#0a0e27] text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(product);
                        }}
                      >
                        <ShoppingCart size={16} />
                        <span className="hidden sm:inline">View</span>
                        <ArrowRight
                          size={14}
                          className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore More Button */}
          <div 
            className={`text-center pt-8 transition-all duration-1000 delay-500 ${
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              className="px-10 py-3 bg-white border-2 border-[#0a0e27] text-[#0a0e27] font-bold hover:bg-gradient-to-br hover:from-[#1c4c97] hover:to-[#0a0e27] hover:text-white transition-all duration-300 hover:border-transparent"
              onClick={handleClick}
            >
              Explore More
            </button>
          </div>
        </div>

        {/* Product Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeProductModal}
            />

            <div className="relative bg-white w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] animate-modal-enter shadow-2xl flex flex-col rounded-xl sm:rounded-2xl overflow-hidden">
              <button
                onClick={closeProductModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Close modal"
              >
                <X size={18} className="sm:w-5 sm:h-5 text-gray-700" />
              </button>

              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Left side - Image */}
                <div className="md:w-1/2 flex-shrink-0">
                  <div className="relative w-full h-48 sm:h-56 md:h-full bg-gradient-to-br from-[#ffffff] to-[#f7faff] flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-r from-[#e47325] to-[#ff7b16] text-white font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-lg">
                      -{discountPercentages[selectedProduct.id % discountPercentages.length]}%
                    </div>
                  </div>
                </div>

                {/* Right side - Content with vertical scrolling */}
                <div className="md:w-1/2 flex flex-col overflow-hidden">
                  <div className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto flex-1">
                    <div className="space-y-3 sm:space-y-4">
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                        {selectedProduct.name}
                      </h2>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="sm:w-4 sm:h-4"
                              style={{
                                color: i < 4 ? "#ff7b16" : "#e5e7eb",
                                fill: i < 4 ? "#ff7b16" : "none"
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600">
                          4.8 (1.2k+ reviews)
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {selectedProduct.description || `High-performance ${selectedProduct.name} with premium features and excellent reliability.`}
                      </p>

                      {/* Full Description (if available) */}
                      {selectedProduct.fullDescription && (
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {selectedProduct.fullDescription}
                        </p>
                      )}

                      {/* Key Features Section */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          Key Features:
                        </h3>
                        <div className="grid gap-1.5 sm:gap-2">
                          {selectedProduct.specs.slice(0, 6).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2 sm:gap-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1c4c97] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs sm:text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* All Specifications */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          Specifications:
                        </h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {selectedProduct.specs.map((spec, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm border border-gray-300"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons fixed at bottom */}
                  <div className="p-3 sm:p-4 md:p-6 lg:p-8 border-t border-gray-200 bg-white">
                    {!showContactOptions ? (
                      <div className="flex gap-2 sm:gap-3">
                        <button className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                          <ShoppingCart size={16} className="sm:w-5 sm:h-5" />
                          Add to Cart
                        </button>
                        <button 
                          onClick={handleBuyNow}
                          className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-[#e47325] to-[#ff7b16] hover:from-[#ff7b16] hover:to-[#e47325] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-xs sm:text-sm md:text-base"
                        >
                          Buy Now
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2 sm:space-y-3">
                        <p className="text-xs sm:text-sm text-gray-600 text-center">Contact us via:</p>
                        <div className="flex gap-2 sm:gap-3">
                          <button
                            onClick={() => handleContactOption('phone')}
                            className="flex-1 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
                          >
                            <Phone size={16} className="sm:w-5 sm:h-5" />
                            <span className="hidden xs:inline">Phone</span>
                          </button>
                          <button
                            onClick={() => handleContactOption('whatsapp')}
                            className="flex-1 py-2 sm:py-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
                          >
                            <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                            <span className="hidden xs:inline">WhatsApp</span>
                          </button>
                          <button
                            onClick={() => handleContactOption('telegram')}
                            className="flex-1 py-2 sm:py-3 bg-[#0088cc] hover:bg-[#0077B5] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
                          >
                            <Send size={16} className="sm:w-5 sm:h-5" />
                            <span className="hidden xs:inline">Telegram</span>
                          </button>
                        </div>
                        <button
                          onClick={() => setShowContactOptions(false)}
                          className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 underline mt-1 w-full"
                        >
                          Back
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);

export default Products;