import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiShieldCheck, 
  HiArrowRight,
  HiPhone,
  HiCloud,
  HiServer,
  HiCog,
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
  HiSparkles,
  HiClipboardCheck,
  HiClock,
  HiScale,
  HiChip,
  HiDatabase,
  HiWifi,
  HiDeviceMobile,
  HiTerminal,
  HiVariable,
  HiCurrencyDollar,
  HiExclamation,
  HiPlay,
  HiStop,
  HiPause,
  HiEye,
  HiKey,
  HiFingerPrint,
  HiShieldExclamation,
  HiServer as HiInfrastructure,
  HiShieldCheck as HiSecurity,
  HiEye as HiMonitoring,
  HiLightningBolt as HiResponse,
  HiDocumentReport as HiReporting,
  HiLockClosed as HiEncryption,
  HiGlobe as HiCompliance
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';

/**
 * SecurityOperationsCenter Component - AI-Powered Threat Defense for the Modern Enterprise
 * Comprehensive SOC solutions following the provided content requirements
 */
export default function SecurityOperationsCenter() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
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

  // Auto-rotate SOC features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % socFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate SOC process
  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % socProcess.length);
    }, 4000);
    return () => clearInterval(processInterval);
  }, []);

  // Planet orbit features for banner animation
  const orbitFeatures = [
    { icon: HiEye, title: "Monitoring", color: "#ef4444" },
    { icon: HiShieldCheck, title: "Protection", color: "#8b5cf6" },
    { icon: HiLightningBolt, title: "Response", color: "#f59e0b" },
    { icon: HiChartBar, title: "Analytics", color: "#10b981" }
  ];

  // SOC features data
  const socFeatures = [
    {
      icon: HiSecurity,
      title: "Managed SOC",
      description: "Full-service protection with complete oversight.",
      fullDescription: "Comprehensive security operations center with complete monitoring and response capabilities.",
      features: [
        "24/7 threat monitoring",
        "Complete incident response",
        "Full security oversight",
        "Expert security team",
        "Advanced threat detection",
        "Automated response",
        "Compliance reporting"
      ],
      fineprint: "Complete security management for your organization.",
      cta: "Explore SOC Options",
      color: "#ef4444",
      featured: true
    },
    {
      icon: HiUserGroup,
      title: "Co-Managed SOC",
      description: "Collaborative security with your internal team.",
      fullDescription: "Partnership approach combining your internal expertise with our advanced security capabilities.",
      color: "#8b5cf6"
    },
    {
      icon: HiSupport,
      title: "Consultative SOC",
      description: "Strategic guidance to strengthen your defenses.",
      fullDescription: "Expert consultation and strategic planning to enhance your security posture.",
      color: "#f59e0b"
    }
  ];

  // Why Choose Compuzign SOC data
  const whyChooseData = [
    {
      icon: HiClock,
      title: "24/7/365 Threat Detection & Response",
      description: "Round-the-clock monitoring and immediate response to security threats."
    },
    {
      icon: HiSparkles,
      title: "AI-Enhanced Predictive Protection",
      description: "Advanced AI algorithms predict and prevent threats before they impact your systems."
    },
    {
      icon: HiDocumentReport,
      title: "Compliance Assurance & Reporting",
      description: "Comprehensive compliance monitoring and detailed reporting for regulatory requirements."
    },
    {
      icon: HiScale,
      title: "Scalable Solutions",
      description: "Flexible security solutions that grow with your business, from startups to enterprises."
    }
  ];

  // Intelligent SOC Workflow data
  const socProcess = [
    {
      phase: "1",
      title: "Threat Intelligence",
      icon: HiChartBar,
      description: "Continuous threat landscape analysis.",
      details: "Real-time monitoring and analysis of emerging threats and attack patterns."
    },
    {
      phase: "2",
      title: "Vigilant Monitoring",
      icon: HiMonitoring,
      description: "Round-the-clock surveillance of all assets.",
      details: "24/7 monitoring of networks, systems, and applications for security threats."
    },
    {
      phase: "3",
      title: "Rapid Response",
      icon: HiResponse,
      description: "Immediate incident containment.",
      details: "Swift response and containment of security incidents to minimize impact."
    },
    {
      phase: "4",
      title: "Strategic Reporting",
      icon: HiReporting,
      description: "Actionable insights for continuous improvement.",
      details: "Comprehensive reporting and analysis for ongoing security enhancement."
    }
  ];

  // Compuzign Security Advantage features
  const securityAdvantages = [
    {
      category: "AI-Powered Protection",
      icon: HiChip,
      color: "#ef4444",
      features: [
        "Automated threat detection",
        "Predictive risk analytics",
        "Intelligent security automation"
      ]
    },
    {
      category: "Complete Coverage",
      icon: HiGlobe,
      color: "#8b5cf6",
      features: [
        "Cloud security monitoring",
        "On-premises infrastructure protection",
        "Hybrid environment management"
      ]
    },
    {
      category: "Compliance Assurance",
      icon: HiShieldCheck,
      color: "#10b981",
      features: [
        "Vulnerability assessments",
        "Data encryption standards",
        "Regulatory compliance support"
      ]
    }
  ];

  // Animation variants
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

  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack">
      <ScrollToTop />
      
      {/* 1. HERO BANNER SECTION - Red Theme */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-red-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-400/15 to-red-400/10 border border-red-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiShieldCheck className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Security Operations Center
                  </span>
                </motion.div>

                {/* Enhanced Main Heading */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">Security Operations Center:</span>
                    <span className="block text-red-400 mb-2 relative">
                      AI-Powered Threat Defense
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">for the Modern Enterprise</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Stay ahead of evolving cyber threats with Compuzign's intelligent SOC solutions - combining <span className="text-red-400 font-semibold">24/7 monitoring, predictive analytics, and rapid response</span> to protect your critical assets.
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
                    Secure Your Operations Today
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - Planet Orbit Style - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Central Hub */}
                <div className={`relative mx-auto flex items-center justify-center ${
                  isMobile ? 'w-64 h-64' : isTablet ? 'w-72 h-72' : 'w-80 h-80'
                }`}>
                  
                  {/* Central Content Display */}
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-red-400/50 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-red-400/20 rounded-full flex items-center justify-center mb-3">
                      {React.createElement(orbitFeatures[activeFeature].icon, { 
                        className: "w-5 h-5", 
                        style: { color: orbitFeatures[activeFeature].color }
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {orbitFeatures[activeFeature].title}
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-3">
                      {socFeatures[activeFeature].description.substring(0, 80)}...
                    </p>
                  </div>

                  {/* Orbiting Feature Icons */}
                  {orbitFeatures.map((feature, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const isActive = index === activeFeature;
                    const IconComponent = feature.icon;
                    
                    return (
                      <motion.button
                        key={index}
                        className={`absolute w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'bg-red-400/90 scale-110 shadow-lg' 
                            : 'bg-gray-700/70 hover:bg-gray-600/70 hover:scale-105'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 28px)`,
                          top: `calc(50% + ${y}px - 28px)`,
                          boxShadow: isActive ? `0 0 20px ${feature.color}60` : undefined
                        }}
                        onClick={() => setActiveFeature(index)}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          style={{ color: isActive ? '#000' : feature.color }}
                        />
                      </motion.button>
                    );
                  })}

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-red-400/60 rounded-full"
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
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE SOC PROTECTION SECTION - Red Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-red-50 via-red-100/30 to-pink-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive SOC Protection
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-red-600 mb-6">
              Tailored Security for Your Business Needs
            </h3>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto">
              Choose the perfect level of protection with our flexible SOC services, powered by cutting-edge technology and seasoned cybersecurity experts.
            </p>
          </motion.div>

          {/* SOC Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...staggerChildren}
          >
            {socFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div className="text-center mt-16" {...fadeInUp}>
            <Button variant="primary" size="lg" className="group" onClick={openModal}>
              Explore SOC Options
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE COMPUZIGN SOC SECTION - Green Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 via-emerald-100/30 to-teal-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Your 24/7 Cybersecurity Shield
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Why Compuzign's SOC Stands Out
            </h3>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto">
              We deliver more than monitoring - we provide security confidence:
            </p>
            <p className="text-lg text-gray-800 font-semibold mt-4">
              Sleep better knowing our security experts are always on watch.
            </p>
          </motion.div>

          {/* Why Choose Grid - Shuttering Animation Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 h-full"
            {...staggerChildren}
          >
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-r border-b border-gray-100 h-full min-h-[340px] relative overflow-hidden flex flex-col justify-between">
                  {/* Icon and Heading Container - Visible by default, hidden on hover */}
                  <div className="relative z-30 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 h-full flex flex-col justify-center">
                    {/* Icon Container */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mt-8 mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Heading - Always Visible */}
                    <h3 className="text-lg font-bold text-black text-center px-6 mb-6 leading-tight">{item.title}</h3>
                  </div>
                  
                  {/* Description - Hidden by default, revealed on hover */}
                  <div className="absolute inset-0 bg-white group-hover:bg-green-50 transition-all duration-500 opacity-0 group-hover:opacity-100 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center justify-center h-full px-6">
                      {/* Shuttering Animation Container */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Shutter Lines */}
                        <div className="absolute inset-0 flex flex-col">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="h-1/8 bg-green-600 origin-left"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: i * 0.05,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Content Overlay */}
                        <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                          <p className="text-gray-900 leading-relaxed text-sm font-semibold">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div className="text-center mt-16" {...fadeInUp}>
            <Button variant="primary" size="lg" className="group" onClick={openModal}>
              Request Your Security Assessment
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 4. INTELLIGENT SOC WORKFLOW SECTION - Light Blue Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-blue-100/30 to-indigo-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Our Intelligent SOC Workflow
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-6">
              Proactive Defense in Action
            </h3>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto">
              Our battle-tested process ensures complete protection:
            </p>
          </motion.div>

          {/* Process Timeline - Single Card Design */}
          <motion.div className="relative" {...staggerChildren}>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {socProcess.map((step, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        variants={fadeInUp}
                        whileHover={{ y: -3 }}
                      >
                        {/* Step Number */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {index + 1}
                        </div>
                        
                        {/* Icon */}
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <step.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center leading-tight">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-center text-sm">{step.description}</p>
                        
                        {/* Connector Line (except for last item) */}
                        {index < socProcess.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. COMPUZIGN SECURITY ADVANTAGE SECTION - Purple Light Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-purple-100/30 to-indigo-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              The Compuzign Security Advantage
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-purple-600 mb-6">
              Next-Generation Cyber Defense
            </h3>
          </motion.div>

          {/* Security Advantages Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            {...staggerChildren}
          >
            {securityAdvantages.map((category, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                  <ul className="space-y-3 text-left">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <HiCheckCircle className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION - Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready for <span className="text-yellow-400">Unbreakable Security</span>?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-300 mb-8">
              Experience the Compuzign Difference - Where AI meets elite security expertise to keep your business protected against today's sophisticated threats.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group" onClick={openModal}>
                Secure Your Operations Today
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button variant="secondary" size="lg" className="group" onClick={openModal}>
                <HiPhone className="mr-2 w-5 h-5" />
                Contact Us
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