import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiShieldCheck, 
  HiArrowRight,
  HiPhone,
  HiUserGroup,
  HiSparkles
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedStat from '../components/ui/AnimatedStat';
import CSSFlipCard from '../components/ui/CSSFlipCard';
import { 
  heroBannerData,
  overviewData,
  serviceCapabilitiesData,
  interactiveProtectionData,
  whyChooseData,
  finalCTAData
} from '../data/cyberRecoveryMonitoringData';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * CyberRecoveryMonitoring Component - 24/7 Threat Detection & Recovery
 * Aligned with Cyber Resilience Services Design Pattern
 * Following the uniform layout structure from other service pages
 */
export default function CyberRecoveryMonitoring() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const { width } = useWindowSize();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  }, []);

  // Auto-rotate interactive features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % interactiveProtectionData.features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation props - Banner animations are immediate, others use viewport
  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  };

  // Store the active icon component
  const ActiveIcon = interactiveProtectionData.features[activeFeature].icon;

  return (
    <div key="cyber-recovery-monitoring-page" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* 1. HERO BANNER SECTION - Aligned with Cyber Resilience Design */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden z-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-10" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/15 to-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiShieldCheck className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    {heroBannerData.badge}
                  </span>
                </motion.div>

                {/* Enhanced Main Heading */}
                <div className="space-y-6">
                  <motion.h1 
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">Cyber Recovery &</span>
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Monitoring
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <span className="text-primary-bgYellow font-semibold">{heroBannerData.subheading}</span> - {heroBannerData.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group"
                    onClick={openModal}
                  >
                    {heroBannerData.primaryCTA}
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="group"
                    onClick={openModal}
                  >
                    {heroBannerData.secondaryCTA}
                    <HiPhone className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden hero-right-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Enhanced Central Hub */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72' : isTablet ? 'w-80 h-80' : 'w-96 h-96'
                }`}>
                  
                  {/* Central Content Display */}
                  <div className="absolute inset-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-primary-bgYellow/50 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-primary-bgYellow/20 rounded-full flex items-center justify-center mb-4">
                      <ActiveIcon 
                        className="w-6 h-6" 
                        style={{ color: interactiveProtectionData.features[activeFeature].color }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-3">
                      {interactiveProtectionData.features[activeFeature].title}
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-4">
                      {interactiveProtectionData.features[activeFeature].description}
                    </p>
                  </div>

                  {/* Surrounding Feature Icons */}
                  {interactiveProtectionData.features.map((feature, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 140;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const isActive = index === activeFeature;

                    return (
                      <button
                        key={index}
                        className={`absolute w-16 h-16 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary-bgYellow/90 scale-110 shadow-lg' 
                            : 'bg-gray-700/70 hover:bg-gray-600/70 hover:scale-105'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 32px)`,
                          top: `calc(50% + ${y}px - 32px)`,
                          boxShadow: isActive ? `0 0 20px ${feature.color}60` : undefined
                        }}
                        onClick={() => setActiveFeature(index)}
                      >
                        <feature.icon 
                          className="w-7 h-7" 
                          style={{ color: isActive ? '#000' : feature.color }}
                        />
                      </button>
                    );
                  })}

                  {/* Connecting Lines */}
                  {/* <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {interactiveProtectionData.features.map((_, index) => {
                      const angle = (index * 90) - 45;
                      const startRadius = 120;
                      const endRadius = 160;
                      const x1 = Math.cos((angle * Math.PI) / 180) * startRadius + 192;
                      const y1 = Math.sin((angle * Math.PI) / 180) * startRadius + 192;
                      const x2 = Math.cos((angle * Math.PI) / 180) * endRadius + 192;
                      const y2 = Math.sin((angle * Math.PI) / 180) * endRadius + 192;
                      
                      return (
                        <line
                          key={index}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={index === activeFeature ? '#fbbf24' : '#374151'}
                          strokeWidth="2"
                          opacity={index === activeFeature ? 0.8 : 0.3}
                          className="transition-all duration-300"
                        />
                      );
                    })}
                  </svg> */}

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-primary-bgYellow/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1.4,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 left-2 w-2.5 h-2.5 bg-blue-400/50 rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.6,
                    }}
                  />
                </div>
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION - Flip Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {overviewData.heading.split('Cyber Disruption')[0]}
              <span className="text-primary-bgYellow">Cyber Disruption</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {overviewData.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {overviewData.features.map((feature, index) => (
              <CSSFlipCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICE CAPABILITIES SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {serviceCapabilitiesData.heading.split('Our')[0]}
              <span className="text-primary-bgYellow">Our Capabilities</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {serviceCapabilitiesData.highlights.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-primary-bgYellow/50 transition-all duration-300 group hover:-translate-y-2"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE COMPUZIGN SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {whyChooseData.heading.split('CompuZign')[0]}
              <span className="text-primary-bgYellow">CompuZign</span>?
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {whyChooseData.advantages.map((advantage, index) => {
              const iconColors = [
                { bg: 'bg-gradient-to-br from-green-400 to-green-500', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-blue-400 to-blue-500', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-purple-400 to-purple-500', icon: 'text-white' },
                { bg: 'bg-gradient-to-br from-yellow-400 to-yellow-500', icon: 'text-black' }
              ];
              const colorScheme = iconColors[index];
              
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/20 hover:shadow-2xl hover:shadow-primary-bgYellow/10 transition-all duration-500 hover:-translate-y-2"
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${colorScheme.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <advantage.icon className={`w-8 h-8 ${colorScheme.icon}`} />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-yellow-500 font-semibold text-base mb-4 italic">
                      {advantage.subtitle}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-primary-bgYellow/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {finalCTAData.heading.split('Cyber Threats')[0]}
              <span className="text-primary-bgYellow">Cyber Threats</span>?
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              {finalCTAData.description.split('Protect your business today')[0]}
              <span className="text-primary-bgYellow font-semibold">Protect your business today</span>
              {finalCTAData.description.split('Protect your business today')[1]}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                variant="primary" 
                size="xl"
                className="bg-primary-bgYellow hover:bg-yellow-400 text-black px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25 w-full sm:w-auto group"
                onClick={openModal}
              >
                {finalCTAData.primaryCTA}
                <HiUserGroup className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-200" />
              </Button>

              <Button 
                variant="secondary" 
                size="xl"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto group"
                onClick={openModal}
              >
                {finalCTAData.secondaryCTA}
                <HiSparkles className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-200" />
              </Button>
            </div>

            {/* CompuZign Contact Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/80 border border-gray-700/50 rounded-full text-gray-300 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <HiPhone className="w-5 h-5 text-primary-bgYellow" />
              <span className="font-medium">{finalCTAData.contactInfo}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ScrollToTop FAB */}
      <ScrollToTop />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isOpen}
        onClose={closeModal}
        serviceType={serviceType}
        pageName={pageName}
      />
    </div>
  );
} 