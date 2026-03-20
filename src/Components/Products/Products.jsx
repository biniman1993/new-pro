import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Package,
  ArrowRight,
  X,
  Star,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";

// 1. Sub-component for individual cards to prevent whole-grid re-renders
const ProductCard = React.memo(({ product, index, hasAnimated, onOpenModal, discount }) => (
  <div
    onClick={() => onOpenModal(product)}
    className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-[transform,shadow,border-color] duration-500 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-300 ${
      hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${index * 50}ms` }} // Reduced delay for snappier feel
  >
    <div className="relative h-48 bg-[#ffffff] overflow-hidden">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy" // Performance: Lazy load images
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#96c4ee]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#f17719e5] to-[#f88228] text-white px-2 py-1 rounded-md text-sm font-semibold shadow-lg">
        {discount}%
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-[#2a5da5] transition-colors duration-500">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description || `High-performance ${product.name} with premium features.`}
      </p>

      <div className="mb-3 space-y-1">
        {(product.specs || ["Premium Quality", "1 Year Warranty"]).slice(0, 2).map((spec, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
            <Package size={14} className="text-[#2a5da5]" />
            <span>{spec}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-semibold text-green-600">In Stock</span>
        </div>
        <button
          className="flex items-center gap-2 bg-[#2a5da5] hover:bg-[#ff7b16] text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 group/btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
        >
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">View</span>
          <ArrowRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  </div>
));

const Products = React.forwardRef(
  ({ title = "Latest Products", productsData = [], className = "", onViewMore, category = "all" }, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showContactOptions, setShowContactOptions] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const discountPercentages = useMemo(() => ["20", "15", "10", "25", "5", "30", "12", "18"], []);

   const categoryDescriptions = {
  "Latest Laptops": "Modern, slim, and powerful laptops built for work, study, and life on the move.",
  
  "Latest Desktops": "High-performance desktop systems designed for speed, productivity, and reliability.",
  
  "Pupular Monitor": "Sharp, vibrant displays that elevate productivity, creativity, and entertainment.",
  
  "Printer Equipment": "Fast, reliable printing solutions for offices, businesses, and everyday tasks.",
  
  "Display Equipment": "Brilliant LED and digital display solutions built to capture attention.",
  
  "Networking Equipment": "Smart networking hardware delivering fast, stable, and secure connectivity.",
};

    // Get description based on title, or use a default
    const getCategoryDescription = () => {
      return categoryDescriptions[title] || "✨ Premium technology solutions tailored to your needs.";
    };

    // 2. Memoized Callback for opening modal
    const openProductModal = useCallback((product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
      setShowContactOptions(false);
    }, []);

    const closeProductModal = useCallback(() => {
      setIsModalOpen(false);
      setShowContactOptions(false);
      // Clean up after animation
      setTimeout(() => setSelectedProduct(null), 300);
    }, []);

const handleClick = useCallback(() => {
  onViewMore?.(category);
  
  // Map product page titles to catalog subcategories
  const titleToSubMap = {
    "Laptops": "BusinessLaptop",           // For /products/laptops page
    "Desktops": "BusinessDesktop",         // For /products/desktops page
    "Printers": "InkjetPrinter",           // For /products/printers page
    "Networking": "HomeNetworking",        // For /products/networking page
    "Latest Laptops": "BusinessLaptop",    // For home page
    "Latest Desktops": "BusinessDesktop",  // For home page
    "Pupular Monitor": "FullHDMonitor",    // For home page
    "Printer Equipment": "AllinOnePrinter", // For home page
    "Display Equipment": "DigitalSignage",  // For home page
    "Networking Equipment": "HomeNetworking", // For home page
  };
  
  const subcategory = titleToSubMap[title] || "BusinessDesktop";
  navigate(`/Catalog/${subcategory}`);
}, [category, navigate, onViewMore, title]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.1 }
      );

      const currentContainer = containerRef.current;
      if (currentContainer) observer.observe(currentContainer);

      return () => {
        if (currentContainer) observer.unobserve(currentContainer);
      };
    }, [hasAnimated]);

    return (
      <div className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#ffffff]" ref={ref}>
        <div className={`max-w-7xl mx-auto ${className}`} ref={containerRef}>
          {/* Title Section - UPDATED: Removed underline, added modern description */}
          <div className="text-center mb-12">
            {/* Main Title */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 transition-all duration-1000 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className="relative">
                <span className="bg-clip-text text-transparent  bg-gradient-to-r from-[#2a5da5] via-[#e67817] to-[#f58a39e5]">
                  {title}
                </span>
              </span>
            </h1>
            
            {/* NEW: Modern, eye-catching category description */}
            <p className={`max-w-2xl mx-auto text-gray-600 text-sm md:text-base font-medium leading-relaxed px-4 transition-all duration-1000 delay-300 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              {getCategoryDescription()}
            </p>
            
            {/* Decorative element - subtle gradient bar (optional, kept minimal) */}
            <div className="mt-6 flex justify-center gap-1.5">
              <span className="w-12 h-1 bg-[#2a5da5] rounded-full"></span>
              <span className="w-4 h-1 bg-[#ff7b16] rounded-full"></span>
              <span className="w-2 h-1 bg-[#ff7b16]/50 rounded-full"></span>
            </div>
          </div>

          {/* Optimized Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {productsData.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  hasAnimated={hasAnimated}
                  onOpenModal={openProductModal}
                  discount={discountPercentages[index % discountPercentages.length]}
                />
              ))}
            </div>
          </div>

          {/* Explore More Button */}
          <div className={`text-center pt-8 transition-all duration-1000 delay-500 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <button
              className="group relative px-8 py-3 bg-white border-2 border-[#2a5da5] text-[#2a5da5] font-bold rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onClick={handleClick}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                Explore More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Modal Logic remains the same - extracted for readability or kept inline based on your preference */}
        {isModalOpen && selectedProduct && (
           <ProductModal 
            product={selectedProduct} 
            onClose={closeProductModal} 
            discount={discountPercentages[selectedProduct.id % discountPercentages.length]}
            showContactOptions={showContactOptions}
            setShowContactOptions={setShowContactOptions}
           />
        )}
      </div>
    );
  }
);

// Performance: Extract Modal to separate component to keep main Products component clean
const ProductModal = ({ product, onClose, showContactOptions, setShowContactOptions }) => {
    const handleContactOption = (type) => {
        const phoneNumber = "1234567890";
        const message = encodeURIComponent(`Hello, I'm interested in ${product?.name}`);
        if (type === 'phone') window.location.href = `tel:${phoneNumber}`;
        else if (type === 'whatsapp') window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        else if (type === 'telegram') window.open(`https://t.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60  backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />
            <div className="relative bg-white max-w-4xl w-full max-h-[90vh] animate-modal-enter shadow-2xl flex flex-col rounded-2xl overflow-hidden">
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-[#ff7b16] rounded-full flex items-center justify-center shadow-lg"><X size={20}/></button>
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                    <div className="md:w-1/2 bg-gradient-to-br from-[#ffffff] to-[#f7faff] flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
                    </div>
                    <div className="md:w-1/2 flex flex-col overflow-hidden p-6 lg:p-8">
                        <div className="flex-1 overflow-y-auto space-y-4">
                            <h2 className="text-xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < 4 ? "text-[#ff7b16] fill-current" : "text-gray-300"} />)}
                                <span className="text-sm text-gray-600 ml-2">4.8 (1.2k+ reviews)</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{product.description || "High-performance product."}</p>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-gray-900">Specifications:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.specs?.map((spec, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-300">{spec}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                       <div className="pt-6 border-t border-gray-100 mt-auto">
  {!showContactOptions ? (
    <button 
      onClick={() => setShowContactOptions(true)} 
      className="group relative w-full overflow-hidden py-4 bg-[#2a5da5] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center gap-3"
    >
      <ShoppingCart size={20} className="group-hover:animate-bounce" />
      <span className="tracking-wide">Buy Now</span>
    </button>
  ) : (
    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Header for the options */}
      <div className="flex justify-between items-center mb-1 px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Choose Contact Method</span>
        <button onClick={() => setShowContactOptions(false)} className="text-xs text-gray-400 hover:text-gray-600">Cancel</button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Phone Button */}
        <button 
          onClick={() => handleContactOption('phone')} 
          className="flex flex-col items-center gap-1.5 py-3  bg-blue-50 text-orange-600 rounded-2xl border border-blue-100 transition-all hover:bg-orange-100 active:scale-95"
        >
          <Phone size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase">Call</span>
        </button>

        {/* WhatsApp Button */}
        <button 
          onClick={() => handleContactOption('whatsapp')} 
          className="flex flex-col items-center gap-1.5 py-3 bg-blue-50 text-green-600 rounded-2xl border border-blue-100 transition-all hover:bg-green-100 active:scale-95"
        >
          <MessageCircle size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase">WhatsApp</span>
        </button>

        {/* Telegram Button */}
        <button 
          onClick={() => handleContactOption('telegram')} 
          className="flex flex-col items-center gap-1.5 py-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 transition-all hover:bg-blue-100 active:scale-95"
        >
          <Send size={22} strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase">Telegram</span>
        </button>
      </div>
      
      {/* Optional: Simple phone number display below */}
      <p className="text-center text-[11px] text-gray-400 font-medium">
        Available 24/7 for support
      </p>
    </div>
  )}
</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;