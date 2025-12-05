import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Zap, Sparkles, ChevronLeft, ChevronRight, X, ShoppingCart, Star } from 'lucide-react';

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
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 20 });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPulsing, setIsPulsing] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      title: 'Pro Gaming Mouse',
      discount: 40,
      originalPrice: 89,
      salePrice: 53,
      specs: ['16K DPI', 'Wireless', 'RGB'],
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Professional gaming mouse with advanced optical sensor and customizable RGB lighting. Perfect for competitive gaming and professional use.',
      features: [
        '16,000 DPI optical sensor',
        'Wireless 2.4GHz connectivity',
        'Customizable RGB lighting',
        '8 programmable buttons',
        '50 million click durability',
        'Lightweight design (75g)'
      ],
      rating: 4.8,
      reviews: 1247
    },
    {
      id: '2',
      title: 'USB-C Hub Pro',
      discount: 35,
      originalPrice: 79,
      salePrice: 51,
      specs: ['7-in-1', '4K HDMI', 'Fast Charge'],
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Versatile 7-in-1 USB-C hub with 4K HDMI output and fast charging capabilities. Expand your connectivity options instantly.',
      features: [
        '4K HDMI @ 60Hz',
        '100W Power Delivery',
        '3x USB 3.0 ports',
        'SD/TF card readers',
        'Gigabit Ethernet',
        'Compact aluminum design'
      ],
      rating: 4.6,
      reviews: 892
    },
    {
      id: '3',
      title: 'Wireless Earbuds',
      discount: 45,
      originalPrice: 199,
      salePrice: 110,
      specs: ['Noise Cancel', '48hrs Battery', 'Premium Sound'],
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Premium wireless earbuds with active noise cancellation and exceptional battery life. Immerse yourself in crystal-clear audio.',
      features: [
        'Active Noise Cancellation',
        '48 hours total battery life',
        'Bluetooth 5.3',
        'IPX7 water resistance',
        'Wireless charging case',
        'Transparency mode'
      ],
      rating: 4.9,
      reviews: 2156
    },
    {
      id: '4',
      title: 'Mechanical Keyboard',
      discount: 38,
      originalPrice: 169,
      salePrice: 105,
      specs: ['RGB Backlighting', 'Gateron Switches', 'Aluminum'],
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      description: 'Mechanical keyboard with Gateron switches and full RGB backlighting. Built with aluminum frame for durability and style.',
      features: [
        'Gateron mechanical switches',
        'Full RGB backlighting',
        'Aluminum frame construction',
        'N-key rollover',
        'Detachable USB-C cable',
        'Magnetic wrist rest'
      ],
      rating: 4.7,
      reviews: 1678
    },
    {
      id: '5',
      title: 'USB-C Fast Charger',
      discount: 42,
      originalPrice: 59,
      salePrice: 34,
      specs: ['65W Power', 'Multi-Device', 'GaN Tech'],
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Compact 65W GaN fast charger with multiple ports. Charge your devices quickly and efficiently with advanced technology.',
      features: [
        '65W total power output',
        'GaN technology for efficiency',
        '2x USB-C + 1x USB-A ports',
        'Foldable plug design',
        'Over-current protection',
        'Compact and portable'
      ],
      rating: 4.5,
      reviews: 734
    },
    {
      id: '6',
      title: '4K Webcam',
      discount: 33,
      originalPrice: 149,
      salePrice: 100,
      specs: ['4K Resolution', 'Auto Focus', 'Wide Angle'],
      image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Professional 4K webcam with auto focus and wide-angle lens. Perfect for streaming, meetings, and content creation.',
      features: [
        '4K Ultra HD resolution',
        'Auto focus and exposure',
        '90° wide-angle lens',
        'Dual stereo microphones',
        'Privacy shutter',
        'Universal clip mount'
      ],
      rating: 4.4,
      reviews: 543
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
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
    const carouselInterval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, [products.length]);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 600);
    }, 5000);

    return () => clearInterval(pulseInterval);
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStart('clientX' in e ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = 'clientX' in e ? e.clientX : (e as React.TouchEvent).changedTouches[0].clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCarouselIndex(prev => (prev + 1) % products.length);
      } else {
        setCarouselIndex(prev => (prev - 1 + products.length) % products.length);
      }
    }
  };

  const nextProduct = () => {
    setCarouselIndex(prev => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCarouselIndex(prev => (prev - 1 + products.length) % products.length);
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="relative bg-gradient-to-br from-[#f8f9fa] via-white to-[#e9ecef] overflow-hidden">
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(28, 76, 151, 0.3); }
          50% { box-shadow: 0 0 40px rgba(28, 76, 151, 0.6); }
        }

        @keyframes tilt {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          50% { transform: rotateY(5deg) rotateX(2deg); }
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
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

        .animate-slide-in-down {
          animation: slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-tilt {
          perspective: 1000px;
          animation: tilt 4s ease-in-out infinite;
        }

        .animate-count-up {
          animation: countUp 0.5s ease-out;
        }

        .animate-modal-enter {
          animation: modalEnter 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-hover:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow: 0 20px 40px rgba(28, 76, 151, 0.3);
        }

        .pulse-ring {
          animation: pulse 2s infinite;
        }

        .group:hover .product-discount {
          animation: slideInDown 0.3s ease-out;
        }

        .carousel-container {
          scroll-behavior: smooth;
          scrollbar-width: none;
        }

        .carousel-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeProductModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-modal-enter shadow-2xl">
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="grid md:grid-cols-2 gap-0 h-full">
              {/* Product Image */}
              <div className="relative h-80 md:h-full bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#ff7b16] to-[#1c4c97] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                  -{selectedProduct.discount}%
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedProduct.title}</h2>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(selectedProduct.rating) 
                            ? "text-[#ff7b16] fill-current" 
                            : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">${selectedProduct.salePrice}</span>
                    <span className="text-xl text-gray-500 line-through">${selectedProduct.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-bold">
                      Save ${selectedProduct.originalPrice - selectedProduct.salePrice}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Key Features:</h3>
                    <div className="grid gap-2">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1c4c97] rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Specifications:</h3>
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

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 py-3 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-[#1c4c97]/30 flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                    <button className="flex-1 py-3 bg-gradient-to-r from-[#ff7b16] to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-[#ff7b16]/30">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff7b16]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1c4c97]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#0a0e27]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="h-1 bg-gradient-to-r from-[#ff7b16] via-[#1c4c97] to-[#0a0e27] animate-pulse"></div>

        <div className="bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] backdrop-blur-md border-b border-[#1c4c97]/30 py-2 px-4 sm:px-6 lg:px-8 animate-slide-in-down">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#ff7b16] animate-bounce" />
              <span className="text-white font-bold text-sm md:text-base">FRIDAY SPECIAL DEALS!</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-sm md:text-base">Ends in</span>
              <div className="flex gap-1 bg-black/30 rounded-lg px-3 py-1">
                {[
                  { label: 'H', value: String(timeLeft.hours).padStart(2, '0') },
                  { label: 'M', value: String(timeLeft.minutes).padStart(2, '0') },
                  { label: 'S', value: String(timeLeft.seconds).padStart(2, '0') }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="text-[#ff7b16] font-mono font-bold text-xs md:text-sm">{item.value}</span>
                    {idx < 2 && <span className="text-[#ff7b16] text-xs">:</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:block text-white text-xs md:text-sm font-semibold">
              Limited Stock • Free Shipping
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white/40 to-gray-100/40 backdrop-blur-sm border-b border-gray-300/50 py-6 px-4 sm:px-6 lg:px-8 animate-slide-in-up">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#ff7b16] to-transparent rounded-full"></div>
              <h2 className="text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1c4c97] via-[#0a0e27] to-[#ff7b16] bg-clip-text text-transparent">
                Friday Special Deals
              </h2>
              <div className="w-1 h-6 bg-gradient-to-b from-[#1c4c97] to-transparent rounded-full"></div>
            </div>
            <p className="text-center text-gray-600 text-sm">Save up to 45% on premium tech products</p>

            <div className="flex justify-center gap-2 mt-3">
              {[...Array(3)].map((_, i) => (
                <Sparkles
                  key={i}
                  size={16}
                  className="text-[#ff7b16] animate-shimmer"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              ref={carouselRef}
              className="relative group"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
                {[0, 1, 2].map((offset) => {
                  const idx = (carouselIndex + offset) % products.length;
                  const product = products[idx];

                  return (
                    <div
                      key={product.id}
                      className="transform transition-all duration-500 scale-100 opacity-100"
                    >
                      <div 
                        onClick={() => openProductModal(product)}
                        className="bg-gradient-to-br from-white to-gray-100 backdrop-blur-sm border border-gray-300/50 rounded-2xl overflow-hidden card-hover group/card cursor-pointer h-full flex flex-col transition-all duration-300"
                      >
                        <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                          <div className="absolute top-6 right-3 bg-gradient-to-r from-[#ff7b16] to-[#ff7b13] text-white  font-bold px-2 py-1 rounded-1xl text-sm md:text-base shadow-lg transform -translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300">
                            -{product.discount}%
                          </div>

                          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] text-white font-100W px-1 py-1 rounded-lg text-xs md:text-sm opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300">
                            New Arrival
                          </div>
                        </div>

                        <div className="flex-1 p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-[#1c4c97] group-hover/card:to-[#ff7b16] group-hover/card:bg-clip-text transition-all duration-300">
                              {product.title}
                            </h3>

                            <div className="space-y-1 mb-4">
                              {product.specs.map((spec, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-gray-600 text-xs md:text-sm"
                                >
                                  <div className="w-1 h-1 rounded-full bg-[#1c4c97]"></div>
                                  <span>{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t border-gray-300/50 pt-3 pb-3 mb-3">
                            <div className="flex items-center gap-2 justify-between">
                              <div className="flex gap-2">
                                <span className="text-xl font-bold text-gray-900">
                                  ${product.salePrice}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                  ${product.originalPrice}
                                </span>
                              </div>
                              <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">
                                Save ${product.originalPrice - product.salePrice}
                              </div>
                            </div>
                          </div>

                          <button className="w-full py-2.5 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-[#1c4c97]/30 text-sm md:text-base">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={prevProduct}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextProduct}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#1c4c97] to-[#0a0e27] hover:from-[#ff7b16] hover:to-[#1c4c97] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === carouselIndex
                      ? 'bg-gradient-to-r from-[#ff7b16] to-[#1c4c97] w-8'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-3">
        <button
          className={`group relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isPulsing ? 'animate-pulse' : ''
          }`}
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat on WhatsApp
          </div>
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
        </button>

        <button className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1c4c97] to-[#0a0e27] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat on Telegram
          </div>
          <div className="absolute inset-0 rounded-full bg-[#1c4c97] opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
        </button>

        <button className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-[#ff7b16] to-[#1c4c97] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
          <Zap className="w-7 h-7 text-white" />
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Best Price Alert
          </div>
          <div className="absolute inset-0 rounded-full bg-[#ff7b16] opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
        </button>
      </div>
    </div>
  );
};

export default FridayPromo;