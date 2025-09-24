import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiCloud,
  HiArrowRight,
  HiPhone,
  HiServer,
  HiShieldCheck,
  HiCubeTransparent,
  HiCalculator,
  HiSparkles,
  HiClipboardCheck,
  HiCog,
  HiEye,
  HiLightningBolt,
  HiChartBar,
  HiCheckCircle,
  HiRefresh,
  HiGlobe,
  HiLockClosed,
  HiUserGroup,
  HiCode,
  HiTrendingUp,
  HiDocumentReport,
  HiSupport,
  HiChat,
  HiDesktopComputer,
  HiBeaker,
  HiCube,
  HiChip,
  HiCollection,
  HiFilter,
  HiKey,
  HiWifi,
  HiDeviceMobile,
  HiDatabase
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';

export default function CloudTransformation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFramework, setActiveFramework] = useState(0);
  const { width } = useWindowSize();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % transformationPaths.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate framework steps
  useEffect(() => {
    const frameworkInterval = setInterval(() => {
      setActiveFramework((prev) => (prev + 1) % transformationProcess.length);
    }, 4000);
    return () => clearInterval(frameworkInterval);
  }, []);

  // Transformation Paths
  const transformationPaths = [
    {
      icon: HiLockClosed,
      title: "Private Cloud",
      description: "Dedicated infrastructure for maximum security and control over sensitive workloads.",
      color: "#facc15"
    },
    {
      icon: HiGlobe,
      title: "Public Cloud",
      description: "Scalable, cost-efficient solutions to grow with your business demands.",
      color: "#60a5fa"
    },
    {
      icon: HiServer,
      title: "Hybrid Cloud",
      description: "The best of both worlds, blending on-premise and cloud environments for seamless agility.",
      color: "#34d399"
    }
  ];

  const whyChooseData = [
    {
      icon: HiSparkles,
      title: "AI-Powered Migration",
      description: "Automated cloud transformation with intelligent optimization."
    },
    {
      icon: HiShieldCheck,
      title: "Enterprise Security",
      description: "Bank-level security with compliance and governance built-in."
    },
    {
      icon: HiLightningBolt,
      title: "Zero Downtime",
      description: "Seamless migration with minimal business disruption."
    },
    {
      icon: HiUserGroup,
      title: "Expert Support",
      description: "24/7 dedicated cloud specialists with deep expertise."
    },
    {
      icon: HiTrendingUp,
      title: "Cost Optimization",
      description: "Pay-as-you-go models that scale with your business."
    },
    {
      icon: HiGlobe,
      title: "Multi-Cloud Strategy",
      description: "Flexible solutions across AWS, Azure, GCP, and more."
    }
  ];

  // Transformation Process
  const transformationProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "Evaluate your current setup and identify cloud-ready components.",
      icon: HiClipboardCheck,
      color: "#facc15"
    },
    {
      step: "2",
      title: "Planning",
      description: "Design a customized migration roadmap to minimize disruption.",
      icon: HiDocumentReport,
      color: "#60a5fa"
    },
    {
      step: "3",
      title: "Migration",
      description: "Automate and accelerate deployment with ZENfra AI.",
      icon: HiServer,
      color: "#34d399"
    },
    {
      step: "4",
      title: "Optimization",
      description: "Fine-tune performance post-migration for peak efficiency.",
      icon: HiEye,
      color: "#f59e0b"
    }
  ];

  // Cloud Services
  const cloudServices = [
    {
      icon: HiDatabase,
      title: "Infrastructure as a Service",
      description: "Scalable compute, storage, and networking resources",
      color: "#facc15"
    },
    {
      icon: HiCode,
      title: "Platform as a Service",
      description: "Development and deployment platforms",
      color: "#60a5fa"
    },
    {
      icon: HiCloud,
      title: "Software as a Service",
      description: "Cloud-based applications and services",
      color: "#34d399"
    },
    {
      icon: HiServer,
      title: "Hybrid Solutions",
      description: "Seamless on-premise and cloud integration",
      color: "#f59e0b"
    }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      <ScrollToTop />
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/15 to-blue-400/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiCloud className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                    Cloud Transformation
                  </span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">Accelerate Your</span>
                    <span className="block text-blue-400 mb-2 relative">
                      Cloud Journey
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">with AI-Driven Solutions</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Deliver unmatched scalability, robust security, and peak performance—effortlessly.
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  className="pt-4"
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
                    Get Free Consultation
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden hero-right-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                
                {/* Central Cloud Hub */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72' : isTablet ? 'w-80 h-80' : 'w-96 h-96'
                }`}>
                  
                  {/* Outer Cloud Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border-2 border-blue-400/20 ${
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

                  {/* Middle Processing Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border border-purple-400/20 ${
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

                  {/* Central Cloud Hub */}
                  <motion.div
                    className={`relative bg-gradient-to-br from-blue-400/25 via-blue-400/15 to-transparent rounded-full flex items-center justify-center border-4 border-blue-400/50 backdrop-blur-sm shadow-2xl ${
                      isMobile ? 'w-32 h-32' : isTablet ? 'w-36 h-36' : 'w-40 h-40'
                    }`}
                    animate={ !isMobile ? { 
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    } : {}}
                    transition={ !isMobile ? { 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                  >
                    <HiCloud className={`text-blue-400 drop-shadow-lg ${
                      isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-20 h-20'
                    }`} />
                  </motion.div>

                  {/* Floating Cloud Elements */}
                  {!isMobile && [
                    { icon: HiLockClosed, top: '8%', left: '18%', delay: 0, label: 'Private' },
                    { icon: HiGlobe, top: '15%', right: '12%', delay: 0.5, label: 'Public' },
                    { icon: HiServer, bottom: '15%', right: '18%', delay: 1, label: 'Hybrid' },
                    { icon: HiShieldCheck, bottom: '8%', left: '12%', delay: 1.5, label: 'Secure' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-400/20 shadow-lg group ${
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
                      whileHover={{ scale: 1.1, borderColor: '#3b82f6' }}
                    >
                      <item.icon className={`text-blue-400 ${
                        isTablet ? 'w-6 h-6' : 'w-8 h-8'
                      }`} />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Paths Section - Horizontal Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/40 rounded-full text-blue-400 text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiCloud className="w-4 h-4 mr-2" />
              Flexible Options
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Transformation Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every business has unique needs—choose a cloud transformation journey tailored to your goals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="space-y-6"
          >
            {transformationPaths.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                tabIndex={0}
                className="relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-100 focus:outline-none"
                initial={false}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 0 4px #3b82f633, 0 25px 50px -12px rgba(0,0,0,0.25)',
                  borderColor: '#3b82f6',
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: '0 0 0 4px #3b82f633, 0 25px 50px -12px rgba(0,0,0,0.25)',
                  borderColor: '#3b82f6',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                
                <div className="relative z-10 flex items-center space-x-6">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                      border: `1px solid ${feature.color}30`
                    }}
                  >
                    <feature.icon 
                      className="w-10 h-10"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-500/10 backdrop-blur-sm border border-blue-500/40 rounded-full text-blue-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="w-4 h-4 mr-2" />
              Trusted Partner
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Your Trusted Partner for Secure, Scalable & Seamless Cloud Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate Your Business with Compuzign: Cloud Transformation Made Simple
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Compuzign delivers AI-powered cloud transformation strategies, ensuring smooth migrations to public, private, or hybrid clouds with minimal downtime. Our solutions enhance scalability, reduce costs with pay-as-you-go models, and prioritize compliance for complete peace of mind.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-400/25">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZENfra AI Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                POWERED BY ZENfra AI
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transformation Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our cloud transformation begins with a thorough assessment of your infrastructure, followed by a strategic migration plan for a seamless transition.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {transformationProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 ${
                  index === activeFramework ? 'ring-2 ring-blue-400 shadow-blue-400/25' : ''
                }`}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      border: `2px solid ${step.color}40`
                    }}
                  >
                    <step.icon 
                      className="w-8 h-8"
                      style={{ color: step.color }}
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                End-to-End Services
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cyber Resilience Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We ensure your cloud environment operates at its highest potential with proactive management, continuous improvements, and unwavering security.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: `${service.color}20`,
                      border: `2px solid ${service.color}40`
                    }}
                  >
                    <service.icon 
                      className="w-8 h-8"
                      style={{ color: service.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Always-On Excellence Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Always-On Excellence
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              24/7 Cloud Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our focus? Maximizing efficiency while reducing costs for long-term success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: HiEye, title: "24/7 Monitoring & Support", description: "Round-the-clock oversight to keep your systems secure, optimized, and always available.", color: "#10b981" },
              { icon: HiTrendingUp, title: "Performance & Cost Optimization", description: "Regular assessments to boost efficiency and eliminate unnecessary spending.", color: "#3b82f6" },
              { icon: HiShieldCheck, title: "Compliance & Governance", description: "Full adherence to regulatory standards and security best practices.", color: "#f59e0b" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      border: `2px solid ${item.color}40`
                    }}
                  >
                    <item.icon 
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 via-transparent to-purple-600/50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Your Journey to the Cloud Starts Here
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to Elevate Your Business with Cloud Transformation?
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
              Compuzign's AI-powered expertise ensures a smooth, secure, and future-ready cloud transition. Unlock scalability, innovation, and growth—today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 group"
                onClick={openModal}
              >
                Get Free Consultation
                <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
                onClick={openModal}
              >
                Talk to Our Experts
                <HiPhone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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