import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      sector: "Energy Sector",
      title: "Security Breach Recovery",
      testimonial: "CompuZign helped an energy company recover from a security breach, reducing laptop deployment time by 67%, restoring operations in 24 hours, and saving $250,000.",
      logo: "energy",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      frameImage: "Frame 149"
    },
    {
      id: 2,
      sector: "Global Enterprise",
      title: "Seamless Server Migration",
      testimonial: "CompuZign executed a seamless server-level migration for a global industrial conglomerate, upgrading storage, reducing downtime by 30%, cutting costs by 20%, and boosting scalability by 50%.",
      logo: "enterprise",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      frameImage: "Frame 150"
    },
    {
      id: 3,
      sector: "Manufacturing Sector",
      title: "Data Migration Excellence",
      testimonial: "CompuZign successfully migrated 100+ TB of data for an electronics manufacturer, enhancing operational efficiency by 40%, ensuring 99% uptime, and future-proofing infrastructure with Dell PowerStore.",
      logo: "manufacturing",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      frameImage: "Frame 151"
    },
    {
      id: 4,
      sector: "IT Service Provider",
      title: "Infrastructure Transformation",
      testimonial: "CompuZign transformed a technology company's IT infrastructure, achieving 60% reduced downtime, 30% lower costs, 50% faster recovery, enhanced security, and improved operational efficiency.",
      logo: "technology",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-700",
      frameImage: "Frame 152"
    },
    {
      id: 5,
      sector: "Healthcare Sector",
      title: "Post-Cyberattack Recovery",
      testimonial: "CompuZign's Backup & Recovery and Amazon Workspaces solutions minimized downtime, saved $97M, improved remote productivity, and enhanced resilience for a hospitality client post-cyberattack.",
      logo: "healthcare",
      bgColor: "bg-gradient-to-br from-red-500 to-red-700",
      frameImage: "Frame 153"
    },
    {
      id: 6,
      sector: "Retail Provider",
      title: "IT Modernization Success",
      testimonial: "CompuZign's IT modernization for a commercial reduced downtime by 90%, cut costs by $5 million annually, and strengthened security, scalability, and operational efficiency.",
      logo: "retail",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
      frameImage: "Frame 154"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Empowering Businesses Through Proven Solutions
          </h2>
          <h3 className="text-lg lg:text-xl font-semibold text-primary-bgYellow mb-6">
            Client Success Stories
          </h3>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`${testimonials[currentIndex].bgColor} p-6 lg:p-12 text-white min-h-[350px] flex items-center`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                        {testimonials[currentIndex].sector}
                      </p>
                      <h4 className="text-xl lg:text-2xl font-bold mt-2">
                        {testimonials[currentIndex].title}
                      </h4>
                    </div>
                    
                    <blockquote className="text-base lg:text-lg leading-relaxed">
                      "{testimonials[currentIndex].testimonial}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">
                          {testimonials[currentIndex].sector.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          {testimonials[currentIndex].sector}
                        </p>
                        <p className="text-xs opacity-90">Industry Leader</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex items-center justify-center">
                    <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold">
                          {testimonials[currentIndex].id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <HiChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <HiChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-bgYellow scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-bgYellow text-black shadow-lg scale-105'
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="text-sm font-semibold">{testimonial.sector}</div>
              <div className="text-xs mt-1 opacity-70">{testimonial.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 