import {
  ShoppingCart,
  Package,
  ArrowRight,
  X,
  Star,
  Phone,
  MessageCircle,
  Send,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { Product } from "../data/catalogData";

interface ItemCardProps {
  product: Product;
}

const ItemCard = ({ product }: ItemCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  // Handle body scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openProductModal = () => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleContactOption = (
    type: "phone" | "whatsapp" | "telegram" | "email",
  ) => {
    if (type === "phone") {
      window.location.href = "tel:+251911517628";
    } else if (type === "whatsapp") {
      window.open("https://wa.me/251911517628", "_blank");
    } else if (type === "telegram") {
      window.open("https://t.me/tibe2581", "_blank");
    } else if (type === "email") {
      window.location.href = "mailto:info@yourcompany.com";
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg  transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-300">
        {/* Original image size restored - h-48 */}
        <div
          className="relative h-50  bg-white overflow-hidden"
          onClick={openProductModal}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover p-2 group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#96c4ee]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Original padding restored - p-4 */}
        <div className="p-4">
          {/* Original font size restored - text-lg */}
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-[#2a5da5] transition-colors">
            {product.name}
          </h3>

          {/* Original text size restored - text-sm */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {product.specs && product.specs.length > 0 && (
            // Original margin restored - mb-3
            <div className="mb-3 space-y-1">
              {product.specs.slice(0, 2).map((spec, idx) => (
                // Original gap and text size restored
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <Package size={14} className="text-[#2a5da5]" />
                  <span>{spec}</span>
                </div>
              ))}
              {product.specs.length > 2 && (
                // Original text size restored - text-xs
                <p className="text-xs text-gray-500 mt-2">
                  + {product.specs.length - 2} more specs
                </p>
              )}
            </div>
          )}

          {/* Original padding restored - pt-3 */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            {/* Contact Icons - preserved from updated version */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+251911517628"
                className="p-1.5 rounded-lg border border-gray-300 hover:border-[#ff7b16] hover:text-[#ff7b16] transition-all duration-200"
                title="Call Now"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/251911517628"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-200"
                title="WhatsApp"
                onClick={(e) => e.stopPropagation()}
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://t.me/tibe2581"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-gray-300 hover:border-[#2a5da5] hover:text-[#2a5da5] transition-all duration-200"
                title="Telegram"
                onClick={(e) => e.stopPropagation()}
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* View button with original styling */}
            <button
              onClick={openProductModal}
              className="flex items-center gap-2 bg-gradient-to-r from-[#2a5da5] to-[#143057] hover:from-[#ff7b16] hover:to-[#2a5da5] text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group/btn"
            >
              <span>View</span>
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop - separate div with onClick */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeProductModal}
          />

          {/* Modal content - relative positioning */}
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] shadow-2xl rounded-2xl overflow-hidden">
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-[#ff7b16] rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-700" />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-hidden">
              {/* Left side - Image */}
              <div className="md:w-1/2 bg-gradient-to-br from-[#ffffff] to-[#f7faff] flex items-center justify-center p-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full max-h-[200px] md:max-h-[500px] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Right side - Content */}
              <div className="md:w-1/2 p-6 lg:p-8 overflow-y-auto">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pr-8">
                    {selectedProduct.name}
                  </h2>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < 4
                            ? "text-[#ff7b16] fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      4.8 (1.2k+ reviews)
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.description ||
                      "High-performance product designed for professionals."}
                  </p>

                  {/* Specifications */}
                  {selectedProduct.specs &&
                    selectedProduct.specs.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">
                          Specifications:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.specs.map((spec, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs border border-gray-200"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Bottom Section - Call for pricing */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-base font-semibold text-[#2a5da5] mb-3">
                    Call for Pricing & Availability
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleContactOption("phone")}
                      className="flex flex-col items-center gap-1 p-2 bg-[#ff7b16] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                      title="Call Us"
                    >
                      <Phone size={16} />
                      <span className="text-[10px]">Call</span>
                    </button>
                    <button
                      onClick={() => handleContactOption("whatsapp")}
                      className="flex flex-col items-center gap-1 p-2 bg-[#20BA5C] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                      title="WhatsApp"
                    >
                      <MessageCircle size={16} />
                      <span className="text-[10px]">WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleContactOption("telegram")}
                      className="flex flex-col items-center gap-1 p-2 bg-[#2a5da5] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                      title="Telegram"
                    >
                      <Send size={16} />
                      <span className="text-[10px]">Telegram</span>
                    </button>
                    <button
                      onClick={() => handleContactOption("email")}
                      className="flex flex-col items-center gap-1 p-2 bg-gray-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                      title="Email"
                    >
                      <Mail size={16} />
                      <span className="text-[10px]">Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern added to cart toast notification */}
      {isAdded && (
        <div className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 py-3 rounded-xl shadow-2xl z-[99999] flex items-center gap-3 animate-slide-up backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700">
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="font-medium">Added to cart!</span>
          <button
            onClick={() => setIsAdded(false)}
            className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ItemCard;
