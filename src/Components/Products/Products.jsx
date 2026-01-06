import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Package, ArrowRight } from "lucide-react";

const Products = React.forwardRef(({ 
  title = "Latest Products", 
  productsData,
  className = "", 
  onViewMore,
  category = "all"
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
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
      "Latest Products": "BusinessDesktop"
    };
    
    return titleToSubcategoryMap[title] || "BusinessDesktop";
  };

  // Handle Explore More button
  const handleClick = () => {
    onViewMore && onViewMore(category);
    const subcategory = getTopMenuSubcategory(title);
    navigate(`/Catalog/${subcategory}`);
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
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className={`max-w-7xl mx-auto ${className}`} ref={containerRef}>
        {/* Title Section with Animation */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {title}
          </h1>
          <div 
            className={`h-1 w-24 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          ></div>
        </div>
        
        {/* Products Grid - EXACT SAME as ItemCard */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container - EXACT SAME as ItemCard */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  {/* Your product image - kept as is */}
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  {/* Gradient overlay - EXACT SAME as ItemCard */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* DISCOUNT BADGE instead of stock count */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#e47325] to-[#ff7b16] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {discountPercentages[index] || "10%"} OFF
                  </div>
                </div>

                {/* Product Info - EXACT SAME layout as ItemCard */}
                <div className="p-4">
                  {/* Product Name - EXACT SAME */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Product Description - EXACT SAME */}
                  {product.description ? (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  ) : (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      High-performance {product.name} with premium features and excellent reliability.
                    </p>
                  )}

                  {/* SPECS SECTION - EXACT SAME as ItemCard */}
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
                    // Default specs if not provided
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

                  {/* Price and Add to Cart Button - EXACT SAME as ItemCard */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    {product.price && (
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                          {product.price}
                        </span>
                        <span className="text-xs text-gray-500">
                          Ask for bulk pricing
                        </span>
                      </div>
                    )}
                    <button 
                      className="flex items-center gap-2 bg-gradient-to-r from-[#1c4c97] via-[#1c4c97] to-[#1c4c97] hover:from-[#ff7b16] hover:via-[#1c4c97] hover:to-[#0a0e27] text-white px-3 py-2 rounded-lg font-medium transition-all duration-200 group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Added to cart:', product.name);
                      }}
                    >
                      <ShoppingCart size={16} />
                      <span className="hidden sm:inline">Add</span>
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Button - YOUR ORIGINAL BUTTON STYLE */}
        <div className="text-center pt-8">
          <button
            className="px-10 py-3 bg-white border-2 border-[#0a0e27] text-[#0a0e27] font-bold hover:bg-gradient-to-br hover:from-[#1c4c97] hover:to-[#0a0e27] hover:text-white transition-all duration-300 hover:border-transparent"
            onClick={handleClick}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
});

export default Products;