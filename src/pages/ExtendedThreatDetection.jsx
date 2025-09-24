import { motion } from 'framer-motion';
import { 
  HiShieldCheck, 
  HiCog, 
  HiEye, 
  HiLightningBolt, 
  HiCheckCircle,
  HiLocationMarker,
  HiSearch,
  HiExclamation,
  HiRefresh,
  HiArrowRight,
  HiSparkles
} from 'react-icons/hi';
import Button from '../components/common/button';
import { useState, useEffect } from 'react';
import ScrollToTop from '../components/ui/ScrollToTop';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';

export default function ExtendedThreatDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const rightStrategies = [
    {
      icon: HiShieldCheck,
      text: "The right cybersecurity architecture"
    },
    {
      icon: HiCog,
      text: "The right security tools, from endpoints to cloud"
    },
    {
      icon: HiEye,
      text: "The right threat detection systems across all layers of your IT environment"
    },
    {
      icon: HiLightningBolt,
      text: "The right correlation and analysis"
    },
    {
      icon: HiCheckCircle,
      text: "The right timely response to appropriate threats"
    }
  ];

  // Reduced animations for mobile and tablet
  const getAnimationProps = (index = 0) => {
    if (isMobile || isTablet) {
      return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.3, delay: index * 0.05 }
      };
    }
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: index * 0.1 }
    };
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Enhanced Right Visual */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-16">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack"></div>
          <div className="absolute inset-0 hero-bg-overlay"></div>
        </div>

        {/* Animated Tech Background - Conditional for performance */}
        {!isMobile && (
          <div className="absolute inset-0 z-5">
            {/* Floating Particles - Reduced for tablets */}
            {[...Array(isTablet ? 8 : 15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-bgYellow/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 50, -25, 0],
                  y: [0, -40, 30, 0],
                  opacity: [0.3, 0.8, 0.5, 0.3],
                }}
                transition={{
                  duration: isTablet ? 8 : 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Network Lines - Reduced for tablets */}
            {[...Array(isTablet ? 4 : 8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/30 to-transparent"
                style={{
                  width: isTablet ? '150px' : '200px',
                  top: `${20 + i * 15}%`,
                  left: '-200px',
                }}
                animate={{
                  x: ['0vw', '120vw'],
                }}
                transition={{
                  duration: isTablet ? 6 : 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8,
                }}
              />
            ))}

            {/* Data Flow Circles - Simplified for tablets */}
            {!isTablet && [...Array(6)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute border border-primary-bgYellow/40 rounded-full"
                style={{
                  width: '60px',
                  height: '60px',
                  right: '-60px',
                  top: `${15 + i * 15}%`,
                }}
                animate={{
                  x: ['-60px', '-120vw'],
                  scale: [0.5, 1, 0.5],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 12 + Math.random() * 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.2,
                }}
              />
            ))}

            {/* Tech Grid Pattern - Simplified for tablets */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 218, 23, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 218, 23, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: isTablet ? '100px 100px' : '80px 80px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', isTablet ? '100px 100px' : '80px 80px'],
              }}
              transition={{
                duration: isTablet ? 15 : 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        )}

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/15 to-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiEye className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Extended Threat Detection & Response
                  </span>
                </motion.div>

                {/* Enhanced Main Heading */}
                <div className="space-y-6">
                  <motion.h1 
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="block text-white mb-2">Advanced</span>
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Threat Detection
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </span>
                    <span className="block text-white">& Response</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Comprehensive <span className="text-primary-bgYellow font-semibold">XDR Strategy</span> with unified threat detection and response across all layers of your IT environment.
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group"
                    onClick={openModal}
                  >
                    Get Your Customized XDR Plan
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                
                {/* Enhanced Central Hub - Threat Detection Theme */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72' : isTablet ? 'w-80 h-80' : 'w-96 h-96'
                }`}>
                  
                  {/* Outer Detection Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border-2 border-primary-bgYellow/20 ${
                        isTablet ? 'w-72 h-72' : 'w-80 h-80'
                      }`}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 25, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  {/* Middle Scanning Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border border-blue-400/20 ${
                        isTablet ? 'w-56 h-56' : 'w-64 h-64'
                      }`}
                      animate={{ 
                        rotate: [360, 0]
                      }}
                      transition={{ 
                        duration: 18, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  {/* Central Detection Hub */}
                  <motion.div
                    className={`relative bg-gradient-to-br from-primary-bgYellow/25 via-primary-bgYellow/15 to-transparent rounded-full flex items-center justify-center border-4 border-primary-bgYellow/50 backdrop-blur-sm shadow-2xl ${
                      isMobile ? 'w-32 h-32' : isTablet ? 'w-36 h-36' : 'w-40 h-40'
                    }`}
                    animate={ !isMobile ? { 
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 20px rgba(255, 218, 23, 0.3)",
                        "0 0 40px rgba(255, 218, 23, 0.5)",
                        "0 0 20px rgba(255, 218, 23, 0.3)"
                      ]
                    } : {}}
                    transition={ !isMobile ? { 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                  >
                    <HiLocationMarker className={`text-primary-bgYellow drop-shadow-lg ${
                      isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-20 h-20'
                    }`} />
                  </motion.div>

                  {/* Enhanced Floating Threat Detection Elements */}
                  {!isMobile && [
                    { icon: HiEye, top: '8%', left: '18%', delay: 0, label: 'Monitor' },
                    { icon: HiSearch, top: '15%', right: '12%', delay: 0.5, label: 'Detect' },
                    { icon: HiExclamation, bottom: '15%', right: '18%', delay: 1, label: 'Alert' },
                    { icon: HiLightningBolt, bottom: '8%', left: '12%', delay: 1.5, label: 'Respond' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary-bgYellow/20 shadow-lg group ${
                        isTablet ? 'w-12 h-12' : 'w-16 h-16'
                      }`}
                      style={{ [item.top ? 'top' : 'bottom']: item.top || item.bottom, [item.left ? 'left' : 'right']: item.left || item.right }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        opacity: { delay: 1.5 + item.delay, duration: 0.5 },
                        scale: { delay: 1.5 + item.delay, duration: 0.5 },
                        y: { 
                          delay: 2.5 + item.delay, 
                          duration: 2 + index * 0.3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{ scale: 1.1, borderColor: '#ffda17' }}
                    >
                      <item.icon className={`text-primary-bgYellow ${
                        isTablet ? 'w-6 h-6' : 'w-8 h-8'
                      }`} />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}

                  {/* Threat Detection Scanning Lines */}
                  {!isMobile && [...Array(isTablet ? 6 : 8)].map((_, i) => (
                    <motion.div
                      key={`threat-line-${i}`}
                      className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/40 to-transparent"
                      style={{
                        width: isTablet ? '80px' : '100px',
                        top: `${25 + i * 6}%`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Radar Sweep Effect */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border-t-2 border-primary-bgYellow/60 ${
                        isTablet ? 'w-28 h-28' : 'w-36 h-36'
                      }`}
                      style={{
                        clipPath: 'polygon(50% 50%, 50% 0%, 100% 50%)',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Home Page Theme */}
      <div className="relative bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements - Simplified for mobile/tablet */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent opacity-15"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-bgYellow to-transparent opacity-15"></div>
          </div>
        )}

        <section className="py-16 lg:py-24 w-full relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction Text */}
            <motion.div
              {...getAnimationProps()}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive XDR Strategy
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                CompuZign Deploys The Right Extended Detection and Response (XDR) Strategy that fits your Organization needs:
              </p>
            </motion.div>

            {/* Right Strategies Grid - Responsive layout */}
            <div className={`grid gap-6 max-w-7xl mx-auto mb-20 ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {rightStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  {...getAnimationProps(index)}
                  className={`group bg-white/5 backdrop-blur-sm border border-primary-bgYellow/20 rounded-xl p-6 lg:p-8 transition-all duration-300 ${
                    !isMobile ? 'hover:bg-white/10 hover:border-primary-bgYellow/40 hover:transform hover:scale-105' : ''
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-primary-bgYellow rounded-full flex items-center justify-center mx-auto transition-transform duration-300 ${
                      !isMobile ? 'group-hover:scale-110' : ''
                    }`}>
                      {(() => {
                        const IconComponent = strategy.icon;
                        return <IconComponent className="w-8 h-8 text-black" />;
                      })()}
                    </div>
                    <p className={`text-lg text-gray-200 font-medium leading-relaxed transition-colors duration-300 ${
                      !isMobile ? 'group-hover:text-white' : ''
                    }`}>
                      {strategy.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* EDR Description - Professional Card Style */}
            <motion.div
              {...getAnimationProps()}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-primary-bgYellow/20 rounded-2xl p-6 lg:p-12">
                <div className={`gap-8 items-center ${
                  isMobile ? 'flex flex-col' : 'grid grid-cols-1 lg:grid-cols-2'
                }`}>
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      Unified Platform Approach
                    </h3>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        <strong className="text-primary-bgYellow">CompuZign EDR (Endpoint Detection)</strong> is designed to identify threats like zero-day exploits, 
                        ransomware, insider attacks, and fileless malware.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        We combine EDP with our <strong className="text-primary-bgYellow">XDR Solution</strong> to offer comprehensive unified platform 
                        for threat detection and response.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/5 rounded-full flex items-center justify-center">
                        <HiShieldCheck className="w-24 h-24 lg:w-32 lg:h-32 text-primary-bgYellow opacity-80" />
                      </div>
                      {/* Animated rings - Disabled on mobile/tablet */}
                      {!isMobile && !isTablet && (
                        <>
                          <div className="absolute inset-0 rounded-full border-2 border-primary-bgYellow/30 animate-ping"></div>
                          <div className="absolute inset-4 rounded-full border border-primary-bgYellow/20 animate-pulse"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section - TierPoint Style */}

        <section className="py-20 bg-gradient-to-br from-primary-bgLightBlack to-gray-800 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-primary-bgYellow/20 rounded-full"
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-medium backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="w-4 h-4" />
              Advanced Threat Protection
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Secure Your Digital{' '}
              <span className="text-primary-bgYellow">Infrastructure</span>
                </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't let cyber threats compromise your business. Our comprehensive XDR solution provides 
              advanced threat detection and response across all layers of your IT environment.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
                <Button 
                  variant="primary" 
                  size="lg" 
                className="group bg-primary-bgYellow text-black hover:bg-yellow-400 px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25"
                onClick={openModal}
                >
                Get Your Customized XDR Strategy
                <HiArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>

            </motion.div>

            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>Advanced Threat Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>Rapid Response</span>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

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