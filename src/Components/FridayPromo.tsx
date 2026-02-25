import { useEffect, useRef, useState, useCallback } from "react";
import { placeholderImages } from "./placeholder";

import {
  MessageCircle,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  ShoppingCart,
  Star,
  Phone,
  Send,
  Mail,
} from "lucide-react";

interface Product {
  id: string;
  title: string;
  discount: number;
  originalPrice: number;
  salePrice: number;
  specs: string[];
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
}

const FridayPromo = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 18,
    seconds: 20,
  });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "1",
      title: "AZTECH Digital Signage 55-inch Display",
      discount: 40,
      originalPrice: 89,
      salePrice: 53,
      specs: ["16K DPI", "Wireless", "RGB", "16K DPI", "Wireless", "RGB"],
      image: placeholderImages.gaming,
      description:
        "Professional gaming mouse with advanced optical sensor and customizable RGB lighting. Perfect for competitive gaming and professional use.",
      features: [
        "16,000 DPI optical sensor",
        "Wireless 2.4GHz connectivity",
        "Customizable RGB lighting",
        "8 programmable buttons",
        "50 million click durability",
        "Lightweight design (75g)",
      ],
      rating: 4.8,
      reviews: 1247,
    },
    {
      id: "2",
      title: "USB-C Hub Pro",
      discount: 35,
      originalPrice: 79,
      salePrice: 51,
      specs: [
        "7-in-1",
        "4K HDMI",
        "Fast Charge",
        "7-in-1",
        "4K HDMI",
        "Fast Charge",
      ],
      image: placeholderImages.hub,
      description:
        "Versatile 7-in-1 USB-C hub with 4K HDMI output and fast charging capabilities. Expand your connectivity options instantly.",
      features: [
        "4K HDMI @ 60Hz",
        "100W Power Delivery",
        "3x USB 3.0 ports",
        "SD/TF card readers",
        "Gigabit Ethernet",
        "Compact aluminum design",
      ],
      rating: 4.6,
      reviews: 892,
    },
    {
      id: "3",
      title: "Wireless Earbuds",
      discount: 45,
      originalPrice: 199,
      salePrice: 110,
      specs: [
        "Noise Cancel",
        "48hrs Battery",
        "Premium Sound",
        "Noise Cancel",
        "48hrs Battery",
        "Premium Sound",
      ],
      image: placeholderImages.earbuds,
      description:
        "Premium wireless earbuds with active noise cancellation and exceptional battery life. Immerse yourself in crystal-clear audio.",
      features: [
        "Active Noise Cancellation",
        "48 hours total battery life",
        "Bluetooth 5.3",
        "IPX7 water resistance",
        "Wireless charging case",
        "Transparency mode",
      ],
      rating: 4.9,
      reviews: 2156,
    },
    {
      id: "4",
      title: "Mechanical Keyboard",
      discount: 38,
      originalPrice: 169,
      salePrice: 105,
      specs: [
        "RGB Backlighting",
        "Gateron Switches",
        "Aluminum",
        "RGB Backlighting",
        "Gateron Switches",
        "Aluminum",
      ],
      image: placeholderImages.keyboard,
      description:
        "Mechanical keyboard with Gateron switches and full RGB backlighting. Built with aluminum frame for durability and style.",
      features: [
        "Gateron mechanical switches",
        "Full RGB backlighting",
        "Aluminum frame construction",
        "N-key rollover",
        "Detachable USB-C cable",
        "Magnetic wrist rest",
      ],
      rating: 4.7,
      reviews: 1678,
    },
    {
      id: "5",
      title: "USB-C Fast Charger",
      discount: 42,
      originalPrice: 59,
      salePrice: 34,
      specs: [
        "65W Power",
        "Multi-Device",
        "GaN Tech",
        "65W Power",
        "Multi-Device",
        "GaN Tech",
      ],
      image: placeholderImages.charger,
      description:
        "Compact 65W GaN fast charger with multiple ports. Charge your devices quickly and efficiently with advanced technology.",
      features: [
        "65W total power output",
        "GaN technology for efficiency",
        "2x USB-C + 1x USB-A ports",
        "Foldable plug design",
        "Over-current protection",
        "Compact and portable",
      ],
      rating: 4.5,
      reviews: 734,
    },
    {
      id: "6",
      title: "4K Webcam",
      discount: 33,
      originalPrice: 149,
      salePrice: 100,
      specs: [
        "4K Resolution",
        "Auto Focus",
        "Wide Angle",
        "4K Resolution",
        "Auto Focus",
        "Wide Angle",
      ],
      image: placeholderImages.webcam,
      description:
        "Professional 4K webcam with auto focus and wide-angle lens. Perfect for streaming, meetings, and content creation.",
      features: [
        "4K Ultra HD resolution",
        "Auto focus and exposure",
        "90° wide-angle lens",
        "Dual stereo microphones",
        "Privacy shutter",
        "Universal clip mount",
      ],
      rating: 4.4,
      reviews: 543,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 4;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 600);
    }, 5000);

    return () => clearInterval(pulseInterval);
  }, []);

  const nextProduct = () => {
    setCarouselIndex((prev) => (prev + 1) % (products.length - 2));
  };

  const prevProduct = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + (products.length - 2)) % (products.length - 2),
    );
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const scrollMobile = (direction: "left" | "right") => {
    if (mobileScrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      mobileScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Get 3 products for desktop view
  const getDesktopProducts = () => {
    const startIndex = carouselIndex;
    return [
      products[startIndex % products.length],
      products[(startIndex + 1) % products.length],
      products[(startIndex + 2) % products.length],
    ];
  };

  return (
    <div className="relative overflow-hidden">
      <style>{`
        .mobile-scroll-container {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        
        .mobile-scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(28, 76, 151, 0.2);
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeInOut 0.3s ease-out;
        }

        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-enter {
          animation: modalEnter 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeProductModal}
          />

          <div className="relative bg-white max-w-4xl w-full h-[90vh] animate-modal-enter shadow-2xl flex flex-col rounded-2xl overflow-hidden">
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Left side - Image */}
              <div className="md:w-1/2 flex-shrink-0">
                <div className="relative w-full h-64 md:h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#2a5da5] to-[#1c4c97] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                    -{selectedProduct.discount}%
                  </div>
                </div>
              </div>

              {/* Right side - Content with vertical scrolling */}
              <div className="md:w-1/2 flex flex-col overflow-hidden">
                <div className="p-4 md:p-6 lg:p-8 overflow-y-auto flex-1">
                  <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                      {selectedProduct.title}
                    </h2>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(selectedProduct.rating)
                                ? "text-[#ff7b16] fill-current"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {selectedProduct.rating} ({selectedProduct.reviews}{" "}
                        reviews)
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900">
                        ${selectedProduct.salePrice}
                      </span>
                      <span className="text-lg md:text-xl text-gray-500 line-through">
                        ${selectedProduct.originalPrice}
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-bold">
                        Save $
                        {selectedProduct.originalPrice -
                          selectedProduct.salePrice}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">
                        Key Features:
                      </h3>
                      <div className="grid gap-2">
                        {selectedProduct.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#1c4c97] rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">
                        Specifications:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.specs.map((spec, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons fixed at bottom */}
                <div className="p-4 md:p-6 lg:p-8 border-t border-gray-200 bg-white">
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                    <button className="flex-1 py-3 bg-gradient-to-r from-[#2a5da5] to-[#1c4c97] hover:from-[#ff7b16] hover:to-[#0a0e27] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm md:text-base">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     

      <div className="relative z-10">
        <div className="bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] border-b border-[#1c4c97]/30 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7b16]" />
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">
                FRIDAY SPECIAL DEALS!
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">
                Ends in
              </span>
              <div className="flex gap-1 bg-black/30 rounded-lg px-2 sm:px-3 py-1">
                {[
                  {
                    label: "H",
                    value: String(timeLeft.hours).padStart(2, "0"),
                  },
                  {
                    label: "M",
                    value: String(timeLeft.minutes).padStart(2, "0"),
                  },
                  {
                    label: "S",
                    value: String(timeLeft.seconds).padStart(2, "0"),
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="text-[#ff7b16] font-mono font-bold text-xs sm:text-sm">
                      {item.value}
                    </span>
                    {idx < 2 && (
                      <span className="text-[#ff7b16] text-xs">:</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:block text-white text-xs md:text-sm font-semibold">
              Limited Stock • Free Shipping
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-[#ff7b16] to-transparent rounded-full"></div>
              <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Friday Special Deals
              </h2>
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-[#1c4c97] to-transparent rounded-full"></div>
            </div>
            <p className="text-center text-gray-600 text-xs sm:text-sm">
              Save up to 45% on premium tech products
            </p>

            <div className="flex justify-center gap-2 mt-2 sm:mt-3">
              {[...Array(3)].map((_, i) => (
                <Sparkles key={i} size={14} className="text-[#1c4c97]" />
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Desktop/Laptop View (3 cards with arrows) */}
            <div className="hidden md:block">
              <div className="relative group">
                <div className="grid grid-cols-3 gap-6">
                  {getDesktopProducts().map((product) => (
                    <div key={product.id} className="animate-fade-in">
                      <div
                        onClick={() => openProductModal(product)}
                        className="bg-[#fafafa] border border-gray-200 rounded-2xl overflow-hidden card-hover group/card cursor-pointer h-full flex flex-col"
                      >
                        <div className="relative w-full h-56 bg-[#ffffff] flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain p-3"
                          />

                          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ff7b16] to-[#ff7b13] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                            -{product.discount}%
                          </div>

                          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] text-white font-semibold px-2 py-1 rounded-lg text-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                            New Arrival
                          </div>
                        </div>

                        <div className="flex-1 p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-bold text-gray-900 mb-2 text-center h-12 flex items-center justify-center group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-[#1c4c97] group-hover/card:to-[#ff7b16] group-hover/card:bg-clip-text transition-all duration-300">
                              {product.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-2 mb-4">
                              <div className="space-y-1">
                                {product.specs
                                  .slice(0, Math.ceil(product.specs.length / 2))
                                  .map((spec, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-1 text-gray-600 text-xs"
                                    >
                                      <div className="w-1 h-1 rounded-full bg-[#1c4c97] flex-shrink-0"></div>
                                      <span className="truncate">{spec}</span>
                                    </div>
                                  ))}
                              </div>

                              <div className="space-y-1 text-right">
                                {product.specs
                                  .slice(Math.ceil(product.specs.length / 2))
                                  .map((spec, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center justify-end gap-1 text-gray-600 text-xs"
                                    >
                                      <span className="truncate">{spec}</span>
                                      <div className="w-1 h-1 rounded-full bg-[#ff7b16] flex-shrink-0"></div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-3 pb-3 mb-3">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex gap-2 min-w-0">
                                <span className="text-lg font-bold text-gray-900">
                                  ${product.salePrice}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                  ${product.originalPrice}
                                </span>
                              </div>

                              <div
                                className="flex items-center gap-1 flex-shrink-0"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <a
                                  href="tel:+251911234567"
                                  className="p-2 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
                                  title="Call Now"
                                  aria-label="Call now"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>

                                <a
                                  href="https://wa.me/251911234567"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
                                  title="WhatsApp"
                                  aria-label="WhatsApp"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>

                                <a
                                  href="https://t.me/yourusername"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-500 transition-all duration-200 hover:shadow-sm"
                                  title="Telegram"
                                  aria-label="Telegram"
                                >
                                  <Send className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>

                          <button className="w-full py-2.5 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm">
                            Full Specifications
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevProduct}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Previous products"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextProduct}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Next products"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: products.length - 2 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === carouselIndex
                        ? "bg-gradient-to-r from-[#ff7b16] to-[#1c4c97] w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    aria-label={`Go to product set ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile View (Horizontal Scroll) */}
            <div className="md:hidden">
              <div className="relative">
                <button
                  onClick={() => scrollMobile("left")}
                  className="absolute left-0 top-1/4 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] text-white rounded-full flex items-center justify-center shadow-lg z-20"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>

                <div
                  ref={mobileScrollRef}
                  className="mobile-scroll-container flex gap-4 overflow-x-auto pb-4 px-2"
                  style={{ scrollPadding: "0 16px" }}
                >
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-[calc(100vw-4rem)] bg-white border border-gray-200 rounded-xl overflow-hidden card-hover group/card cursor-pointer"
                      onClick={() => openProductModal(product)}
                    >
                      <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain p-3"
                        />

                        <div className="absolute top-2 right-2 bg-gradient-to-r from-[#ff7b16] to-[#ff7b13] text-white font-bold px-2 py-1 rounded-full text-xs shadow-lg">
                          -{product.discount}%
                        </div>

                        <div className="absolute bottom-0 left-2 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] text-white font-semibold px-2 py-1 rounded-lg text-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                          New Arrival
                        </div>
                      </div>

                      <div className="flex-1 p-3 flex flex-col justify-between">
                        <div>
                          <h3 className="text-base font-bold text-gray-900 mb-2 text-center h-10 flex items-center justify-center">
                            {product.title}
                          </h3>

                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="space-y-1">
                              {product.specs
                                .slice(0, Math.ceil(product.specs.length / 2))
                                .map((spec, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-1 text-gray-600 text-sm"
                                  >
                                    <div className="w-1 h-1 rounded-full bg-[#1c4c97] flex-shrink-0"></div>
                                    <span className="truncate">{spec}</span>
                                  </div>
                                ))}
                            </div>

                            <div className="space-y-1 text-right">
                              {product.specs
                                .slice(Math.ceil(product.specs.length / 2))
                                .map((spec, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-end gap-1 text-gray-600 text-sm"
                                  >
                                    <span className="truncate">{spec}</span>
                                    <div className="w-1 h-1 rounded-full bg-[#ff7b16] flex-shrink-0"></div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-2 pb-2 mb-2">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-1 min-w-0">
                              <span className="text-base font-bold text-gray-900">
                                ${product.salePrice}
                              </span>
                              <span className="text-xs text-gray-500 line-through">
                                ${product.originalPrice}
                              </span>
                            </div>

                            <div
                              className="flex items-center gap-1 flex-shrink-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href="tel:+251911234567"
                                className="p-1.5 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
                                title="Call Now"
                                aria-label="Call now"
                              >
                                <Phone className="w-3 h-3" />
                              </a>
                              <a
                                href="https://wa.me/251911234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
                                title="WhatsApp"
                                aria-label="WhatsApp"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </a>
                              <a
                                href="https://t.me/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-500 transition-all duration-200 hover:shadow-sm"
                                title="Telegram"
                                aria-label="Telegram"
                              >
                                <Send className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <button className="w-full py-2 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm">
                          Full Specifications
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollMobile("right")}
                  className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-2 w-10 h-10 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] text-white rounded-full flex items-center justify-center shadow-lg z-20"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {products.map((_, idx) => (
                  <div
                    key={idx}
                    className="h-1 w-6 bg-orange-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FridayPromo;
