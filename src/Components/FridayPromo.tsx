import { useEffect, useRef, useState } from "react";
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
  const [isAdded, setIsAdded] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0); // Add state for mobile index
  const products: Product[] = [
    {
      id: "1",
      title: "AZTECH Digital Signage 55-inch Display",
      discount: 40,
      originalPrice: 89,
      salePrice: 53,
      specs: [
        "Android 11",
        "Refresh Rate: 60Hz",
        "Panel Type:DLED",
        "55 Inches",
        " RAM: 4GB",
        "4K UHD",
      ],
      image: placeholderImages.gaming,
      description:
        " AZTECH Digital Signage Display. This 55-inch digital signage display is perfect for businesses looking to engage customers with vibrant visuals and interactive content. With Android 11, it offers a user-friendly interface and access to a wide range of apps for dynamic advertising and information sharing.",
      features: [
        "55-inch 4K UHD (3840×2160) DLED display",
        "400 nits brightness, 1200:1 contrast",
        "60Hz refresh rate, 8ms response time",
        "178° wide viewing angle",
        "RK3568 CPU, 4GB RAM, 64GB storage",
        "Android 11 OS",
        "20-point infrared touch (3mm tempered glass)",
        "2×5W speakers",
        "AC 100–240V power, 155W typical usage",
        "Includes remote, power supply & WiFi antenna",
      ],
      rating: 4.8,
      reviews: 1247,
    },
    {
      id: "2",
      title: "HPE ProLiant ML30 Gen10 Server",
      discount: 35,
      originalPrice: 79,
      salePrice: 51,
      specs: [
        "Intel® Xeon® E-2314",
        "Memory: 64GB ",
        "Storage: 4× 1TB",
        "Graphics: NVIDIA RTX",
        " Power Supply: 350W",
        "Tower Server",
      ],
      image: placeholderImages.hub,
      description:
        "Experience reliable performance and scalability for your business with the latest HPE ProLiant ML30 Gen10 Tower Server.",
      features: [
        "Intel Xeon E-2314 processor",
        "64GB DDR4 (2666 MT/s) memory",
        '4× 1TB SATA 3.5" HDD storage',
        "NVIDIA RTX 3050 (8GB) graphics",
        "Up to 4 PCIe Gen3 expansion slots",
        "Dual-port 1GbE networking",
        "350W power supply",
        "Tower server form factor",
      ],
      rating: 4.6,
      reviews: 892,
    },
    {
      id: "3",
      title: "Dell PowerEdge R440/340 Server",
      discount: 45,
      originalPrice: 199,
      salePrice: 110,
      specs: [
        "Dual Intel Xeon",
        "20 Cores Tota",
        "RAM: 32GB RDIMM",
        " Storage: 2TB x 2",
        "Dual Power Supply",
        "RAID: PERC H330",
      ],
      image: placeholderImages.earbuds,
      description:
        " Dell PowerEdge R440 Server – Enterprise Performance! The Dell PowerEdge R440 is a powerful 1U rack server designed for enterprise workloads. With dual Intel Xeon processors, up to 20 cores total, and support for 32GB RDIMM memory, it delivers exceptional performance for demanding applications. The server features 2TB x 2 storage capacity, dual power supplies for reliability, and RAID support with PERC H330. Ideal for data centers and businesses seeking high-performance computing solutions.",
      features: [
        "Dual Intel Xeon Silver 4210R – 2.4GHz, 10 Cores Each (20 Cores Total)n",
        "Storage: 2TB x 2 (7.2K RPM, NLSAS, 12Gbps)",
        "RAM: 32GB RDIMM, 2666MT/s",
        "Remote Management: iDRAC9 Express",
        "Rails & Cable Management Arm (RK & CM) included",
        "Power Supply: Dual (1+1) 550W",
      ],
      rating: 4.9,
      reviews: 2156,
    },
    {
      id: "4",
      title: "Canon imageRUNNER 2945",
      discount: 38,
      originalPrice: 169,
      salePrice: 105,
      specs: [
        "All-in-One",
        "Up to 45 PPM",
        "Ultra-clear prints",
        "Double-sided printing",
        "Large 7” Touchscreen",
        "Wi-Fi & Mobile Printing",
      ],
      image: placeholderImages.keyboard,
      description:
        "Perfect for offices, schools, and businesses that need high-volume, sharp, and secure printing every day.",
      features: [
        "Print / Copy / Scan / Send – All-in-One",
        "Speed: Up to 45 pages per minute (A4)",
        "First page out in just 5.3 seconds",
        "Ultra-clear prints – Up to 1200 × 1200 dpi",
        "Double-sided printing & scanning",
        " Massive paper capacity",
      ],
      rating: 4.7,
      reviews: 1678,
    },
    {
      id: "5",
      title: "Canon imageRUNNER 2425",
      discount: 42,
      originalPrice: 59,
      salePrice: 34,
      specs: [
        " Print|Copy|Scan|Send",
        "Up to 25 pages PPM",
        "1GHz Dual-Core",
        "2GB RAM",
        "Wi-Fi + LAN + USB",
        " Up to 580 sheets",
      ],
      image: placeholderImages.charger,
      description: "High-performance A3 Monochrome Laser Multifunction Printer",
      features: [
        "Functions: Print | Copy | Scan | Send | Optional Fax",
        "️ Speed: Up to 25 pages per minute (A4)",
        "Processor: 1GHz Dual-Core + 2GB RAM",
        "Display: 7” Color Touchscreen",
        "Connectivity: Wi-Fi + LAN + USB",
        "Paper Capacity: Up to 580 sheets",
        "Toner Yield: Up to 10,200 pages (Black)",
      ],
      rating: 4.5,
      reviews: 734,
    },
    {
      id: "6",
      title: "EcoTank L3252 Printer",
      discount: 33,
      originalPrice: 149,
      salePrice: 100,
      specs: [
        "All-in-One",
        "Ultra-low-cost printing",
        "Hassle-free ink tank system",
        "4 colour ",
        "Duplex: Manual",
        "USB, WiFi, Wi-Fi Direct  ",
      ],
      image: placeholderImages.webcam,
      description:
        "The Epson EcoTank L3252 is a Wi-Fi All-in-One Ink Tank Printer designed for home and small office use. Here are some key features:",
      features: [
        "Technology: Epson Micro Piezo™, Dye Ink",
        "Functions: Print, Scan, Copy (All-in-One)",
        "Resolution: Up to 5760 × 1440 DPI",
        "Colors: 4 (Black, Cyan, Magenta, Yellow)",
        "Print Speed: Up to 33 ppm (B/W), 15 ppm (Color)",
        "Paper Capacity: 100 sheets (30-sheet output)",
        "Connectivity: USB, WiFi, Wi-Fi Direct",
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
  // Add scroll listener for mobile
  useEffect(() => {
    const scrollContainer = mobileScrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollLeft;
      const cardWidth = window.innerWidth - 64; // 100vw - 4rem (from w-[calc(100vw-4rem)])
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex >= 0 && newIndex < products.length) {
        setMobileIndex(newIndex);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [products.length]);
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
  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    // Add your actual add to cart logic here
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
            className="absolute inset-0 bg-[black/60] backdrop-blur-sm transition-opacity duration-300"
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
                <div className="relative w-full h-64 md:h-full bg-gradient-to-br from-[#ffffff] to-[#f7faff] flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#2a5da5] to-[#2a5da5] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
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
                                ? "text-[#F97316] fill-current"
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
                            <div className="w-2 h-2 bg-[#2a5da5] rounded-full mt-1.5 flex-shrink-0"></div>
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
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base ${
                        isAdded
                          ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                          : "bg-gradient-to-r from-[#2a5da5] to-[#143057] hover:from-[#F97316] hover:to-[#2a5da5] text-white"
                      }`}
                    >
                      {isAdded ? (
                        "Added to Cart ✓"
                      ) : (
                        <>
                          <ShoppingCart size={20} />
                          Add to Cart
                        </>
                      )}
                    </button>
                    <button
                      onClick={() =>
                        (window.location.href = "tel:+251911517628")
                      }
                      className="flex-1 py-3 bg-gradient-to-r from-[#2a5da5] to-[#2a5da5] hover:from-[#ff7b16] hover:to-[#0a0e27] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm md:text-base"
                    >
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
        <div className="bg-gradient-to-r from-[#2a5da5] to-[#143057] border-b border-[#2a5da5]/30 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
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
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-[#2a5da5] to-transparent rounded-full"></div>
              <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2a5da5]">
                Friday Special Deals
              </h2>
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-[#2a5da5] to-transparent rounded-full"></div>
            </div>
            <p className="text-center text-gray-600 text-xs sm:text-sm">
              Save up to 45% on premium tech products
            </p>

            <div className="flex justify-center gap-2 mt-2 sm:mt-3">
              {[...Array(3)].map((_, i) => (
                <Sparkles key={i} size={14} className="text-[#2a5da5]" />
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
                        className="bg-[#fcfeff] border border-gray-200 rounded-2xl overflow-hidden card-hover group/card cursor-pointer h-full flex flex-col"
                      >
                        <div className="relative w-full h-56 bg-[#ffffff] flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain p-3"
                          />

                          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ff7b16] to-[#f88126] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                            -{product.discount}%
                          </div>

                          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-[#2a5da5] to-[#143057] text-white font-semibold px-2 py-1 rounded-lg text-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                            New Arrival
                          </div>
                        </div>

                        <div className="flex-1 p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-bold text-gray-900 mb-2 text-center h-12 flex items-center justify-center group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-[#2a5da5] group-hover/card:to-[#ff7b16] group-hover/card:bg-clip-text transition-all duration-300">
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
                                      <div className="w-1 h-1 rounded-full bg-[#2a5da5] flex-shrink-0"></div>
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
                                <p className="text-sm font-bold text-gray-500">
                                  Call Us Now
                                </p>
                              </div>

                              <div
                                className="flex items-center gap-1 flex-shrink-0"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <a
                                  href="tel:+251911517628"
                                  className="p-2 rounded-lg border border-gray-300 hover:border-[#ff7b16] hover:text-[#ff7b16] transition-all duration-200 hover:shadow-sm"
                                  title="Call Now"
                                  aria-label="Call now"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>

                                <a
                                  href="https://wa.me/251911517628"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
                                  title="WhatsApp"
                                  aria-label="WhatsApp"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>

                                <a
                                  href="https://t.me/@tibe2581"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg border border-gray-300 hover:border-[#2a5da5] hover:text-[#2a5da5] transition-all duration-200 hover:shadow-sm"
                                  title="Telegram"
                                  aria-label="Telegram"
                                >
                                  <Send className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>

                          <button className="w-full py-2.5 bg-gradient-to-r from-[#2a5da5] to-[#143057] hover:from-[#ff7b16] hover:to-[#2a5da5] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm">
                            Full Specifications
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevProduct}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#2a5da5] to-[#143057] hover:from-[#ff7b16] hover:to-[#2a5da5] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Previous products"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextProduct}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#2a5da5] to-[#143057] hover:from-[#ff7b16] hover:to-[#2a5da5] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
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
                        ? "bg-gradient-to-r from-[#ff7b16] to-[#2a5da5] w-8"
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
                  className="absolute left-0 top-1/4 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-gradient-to-r from-[#2a5da5] to-[#143057] text-white rounded-full flex items-center justify-center shadow-lg z-20"
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
                      <div className="relative w-full h-40 bg-[#ffffff] flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain p-3"
                        />

                        <div className="absolute top-2 right-2 bg-gradient-to-r from-[#ff7b16] to-[#ff7b13] text-white font-bold px-2 py-1 rounded-full text-xs shadow-lg">
                          -{product.discount}%
                        </div>

                        <div className="absolute bottom-0 left-2 bg-gradient-to-r from-[#2a5da5] to-[#143057] text-white font-semibold px-2 py-1 rounded-lg text-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
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
                                    <div className="w-1 h-1 rounded-full bg-[#2a5da5] flex-shrink-0"></div>
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
                                href="tel:+251911517628"
                                className="p-1.5 rounded-lg border border-gray-300 hover:[border]-green-500 hover:[#ff7b16] transition-all duration-200 hover:shadow-sm"
                                title="Call Now"
                                aria-label="Call now"
                              >
                                <Phone className="w-3 h-3" />
                              </a>
                              <a
                                href="https://wa.me/251911517628"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200 hover:shadow-sm"
                                title="WhatsApp"
                                aria-label="WhatsApp"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </a>
                              <a
                                href="https://t.me/@tibe2581"
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

                        <button className="w-full py-2 bg-gradient-to-r from-[#2a5da5] to-[#143057] hover:from-[#ff7b16] hover:to-[#2a5da5] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg text-sm">
                          Full Specifications
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollMobile("right")}
                  className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-2 w-10 h-10 bg-gradient-to-r from-[#2a5da5] to-[#143057] text-white rounded-full flex items-center justify-center shadow-lg z-20"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slide Indicators - Now Working */}
              <div className="flex justify-center gap-2 mt-4">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (mobileScrollRef.current) {
                        const cardWidth = window.innerWidth - 64; // matches w-[calc(100vw-4rem)]
                        mobileScrollRef.current.scrollTo({
                          left: cardWidth * idx,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === mobileIndex
                        ? "bg-gradient-to-r from-[#ff7b16] to-[#2a5da5] w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    aria-label={`Go to product ${idx + 1}`}
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
