import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCard {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    number: '1',
    title: 'Installation & Integration',
    description: 'Seamless installation to guarantee optimal performance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    number: '4',
    title: 'Testing & Commissioning',
    description: 'Rigorous testing to guarantee optimal performance.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    number: '5',
    title: 'Support & Maintenance',
    description: 'Comprehensive support plans keep your AV ecosystem running.',
    image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    number: '6',
    title: 'Optimization & Upgrades',
    description: 'Continuous monitoring and upgrades for future-readiness.',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    number: '7',
    title: 'Consultation & Design',
    description: 'Expert consultation for tailored AV solutions.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;

    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 30,
        opacity: 1,
        cursor: 'default',
      };
    } else if (diff === -1) {
      return {
        transform: 'translateX(-85%) scale(0.85) rotateY(25deg)',
        zIndex: 20,
        opacity: 0.7,
        cursor: 'pointer',
      };
    } else if (diff === 1) {
      return {
        transform: 'translateX(85%) scale(0.85) rotateY(-25deg)',
        zIndex: 20,
        opacity: 0.7,
        cursor: 'pointer',
      };
    } else if (diff === -2) {
      return {
        transform: 'translateX(-170%) scale(0.7) rotateY(35deg)',
        zIndex: 10,
        opacity: 0.4,
        cursor: 'pointer',
      };
    } else if (diff === 2) {
      return {
        transform: 'translateX(170%) scale(0.7) rotateY(-35deg)',
        zIndex: 10,
        opacity: 0.4,
        cursor: 'pointer',
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.5)',
        zIndex: 0,
        opacity: 0,
        cursor: 'pointer',
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Title Section - Using your provided code */}
        <div className="text-center mb-9 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-[#ff7b16]/20 bg-[#ff7b16]/5 text-[#ff7b16] uppercase"
          >
            Workflow Ecosystem
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-[#0a0e27] tracking-tight"
          >
            End-to-End <span className="text-[#2a5da5]">AV</span><br/>
            <span className="bg-gradient-to-r from-[#2a5da5] to-[#ff7b16] bg-clip-text text-transparent">Integration</span>
          </motion.h1>
        </div>

        {/* Cards Section */}
        <div className="w-full max-w-7xl mx-auto mb-6" style={{ perspective: '2000px' }}>
          <div className="relative h-[550px] flex items-center justify-center">
            {services.map((service, index) => {
              const style = getCardStyle(index);
              const isCenterCard = index === currentIndex;

              return (
                <div
                  key={service.id}
                  className="absolute w-full max-w-md transition-all duration-700 ease-out"
                  style={style}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-b-4 border-orange-500 hover:shadow-orange-200/50 transition-shadow">
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-6 text-[120px] font-bold text-white/20 leading-none">
                        {service.number}
                      </div>
                    </div>

                    <div className="p-8 pb-10">
                      {/* Apply #1c4c97 color only to the center card's title */}
                      <h3 
                        className={`text-2xl font-bold mb-3 ${isCenterCard ? '' : 'text-gray-900'}`}
                        style={{ color: isCenterCard ? '#2a5da5' : '#1a1a1a' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-8">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
            style={{ color: '#2a5da5' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-3 h-3 bg-orange-500'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
            style={{ color: '#2a5da5' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;