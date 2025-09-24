import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HiEye, 
  HiArrowRight,
  HiPhone,
  HiServer,
  HiCloud,
  HiShieldCheck,
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
  HiPause
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';

/**
 * MonitoringAutomation Component - Unlock Peak Efficiency & Security
 * Comprehensive monitoring and automation solutions following the provided content requirements
 */
export default function MonitoringAutomation() {
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

  // Auto-rotate monitoring features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % monitoringFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate monitoring process
  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % monitoringProcess.length);
    }, 4000);
    return () => clearInterval(processInterval);
  }, []);

  // Planet orbit features for banner animation
  const orbitFeatures = [
    { icon: HiEye, title: "Real-time", color: "#06b6d4" },
    { icon: HiCog, title: "Automation", color: "#8b5cf6" },
    { icon: HiShieldCheck, title: "Security", color: "#f59e0b" },
    { icon: HiChartBar, title: "Analytics", color: "#ec4899" }
  ];

  // Monitoring features data
  const monitoringFeatures = [
    {
      icon: HiCloud,
      title: "Cloud & Hybrid Monitoring",
      description: "Unified oversight for cloud and on-prem systems with seamless integration across all environments.",
      fullDescription: "Get full visibility into your infrastructure—whether cloud, hybrid, or on-premises. Our solutions integrate effortlessly, keeping your systems optimized, compliant, and secure.",
      features: [
        "Multi-cloud monitoring",
        "Hybrid environment visibility",
        "Unified dashboard",
        "Cross-platform analytics",
        "Real-time alerts",
        "Performance optimization",
        "Cost tracking"
      ],
      fineprint: "Works seamlessly with AWS, Azure, Google Cloud, and more.",
      cta: "Explore Seamless Integration",
      color: "#3b82f6",
      featured: true
    },
    {
      icon: HiShieldCheck,
      title: "Security Compliance",
      description: "Stay aligned with industry regulations effortlessly with built-in compliance monitoring.",
      fullDescription: "Automated compliance monitoring and reporting to ensure your systems meet industry standards and regulatory requirements.",
      color: "#f59e0b"
    },
    {
      icon: HiGlobe,
      title: "Multi-Vendor Support",
      description: "Comprehensive monitoring across all major cloud providers and platforms.",
      fullDescription: "Seamless integration with AWS, Azure, Google Cloud, and other leading platforms for complete infrastructure visibility.",
      color: "#8b5cf6"
    },
    {
      icon: HiCog,
      title: "Automated Operations",
      description: "Reduce manual work and prevent downtime with intelligent automation.",
      fullDescription: "AI-powered automation that handles routine tasks, predicts issues, and optimizes performance automatically.",
      color: "#10b981"
    }
  ];

  // Why Choose Compuzign data
  const whyChooseData = [
    {
      icon: HiLightningBolt,
      title: "24/7 AI-Powered Monitoring",
      description: "Round-the-clock intelligent monitoring with AI-driven insights and proactive issue detection."
    },
    {
      icon: HiSparkles,
      title: "Smarter IT Operations",
      description: "Reduce manual work, prevent downtime, and optimize costs with intelligent automation."
    },
    {
      icon: HiShieldCheck,
      title: "Fewer Headaches",
      description: "Peace of mind with automated issue resolution and comprehensive system protection."
    },
    {
      icon: HiUserGroup,
      title: "Scalable Solutions",
      description: "Perfect fit for startups to enterprises with flexible, growth-ready monitoring infrastructure."
    },
    {
      icon: HiTrendingUp,
      title: "Higher Efficiency",
      description: "Boost operational efficiency with automated workflows and intelligent resource optimization."
    },
    {
      icon: HiCurrencyDollar,
      title: "Lower Costs",
      description: "Reduce operational costs through automation and intelligent resource management."
    }
  ];

  // AI-Driven Monitoring Process data
  const monitoringProcess = [
    {
      phase: "1",
      title: "Planning",
      icon: HiClipboardCheck,
      description: "Assess infrastructure and define monitoring goals.",
      details: "Infrastructure analysis, requirement gathering, and monitoring strategy development."
    },
    {
      phase: "2",
      title: "Setup",
      icon: HiCog,
      description: "Deploy customized dashboards and alerts.",
      details: "Dashboard configuration, alert setup, and monitoring tool deployment."
    },
    {
      phase: "3",
      title: "Monitoring",
      icon: HiEye,
      description: "24/7 real-time tracking of systems, networks, and apps.",
      details: "Continuous monitoring, performance tracking, and real-time data collection."
    },
    {
      phase: "4",
      title: "Issue Resolution",
      icon: HiCog,
      description: "Instant detection and rapid fixes.",
      details: "Automated issue detection, rapid response, and resolution workflows."
    },
    {
      phase: "5",
      title: "Ongoing Optimization",
      icon: HiTrendingUp,
      description: "Continuous improvements for peak performance.",
      details: "Performance tuning, optimization recommendations, and continuous enhancement."
    }
  ];

  // Cost Optimization features
  const costOptimizationFeatures = [
    {
      icon: HiCurrencyDollar,
      title: "Lower Labor Costs",
      description: "Minimize manual tasks with intelligent automation."
    },
    {
      icon: HiExclamation,
      title: "Faster Incident Response",
      description: "Detect and resolve issues before they escalate."
    },
    {
      icon: HiTrendingUp,
      title: "Grow Without Limits",
      description: "Scale effortlessly with no costly infrastructure upgrades."
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
      
      {/* 1. HERO BANNER SECTION - Improved with Planet Orbit Style */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-cyan-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400/15 to-cyan-400/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiEye className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    Monitoring & Automation Services
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
                    <span className="block text-white mb-2">Monitoring & Automation:</span>
                    <span className="block text-cyan-400 mb-2 relative">
                      Unlock Peak Efficiency
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">& Security</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Gain real-time, scalable monitoring solutions tailored to your business—ensuring <span className="text-yellow-400 font-semibold">performance, security, and proactive issue resolution</span>.
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
                    Get Your Monitoring Solution
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
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-cyan-400/50 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mb-3">
                      {React.createElement(orbitFeatures[activeFeature].icon, { 
                        className: "w-5 h-5", 
                        style: { color: orbitFeatures[activeFeature].color }
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {orbitFeatures[activeFeature].title} Monitoring
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-3">
                      {monitoringFeatures[activeFeature].description.substring(0, 80)}...
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
                            ? 'bg-cyan-400/90 scale-110 shadow-lg' 
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
                    className="absolute top-4 right-4 w-3 h-3 bg-cyan-400/60 rounded-full"
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
                    className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400/60 rounded-full"
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

      {/* 2. SEAMLESS INTEGRATION SECTION - Cyan Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-cyan-50 via-cyan-100/30 to-blue-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Seamless Integration Across Every Environment
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive Monitoring Solutions
            </p>
            <p className="text-lg text-gray-800 max-w-4xl mx-auto mt-4">
              Get full visibility into your infrastructure—whether cloud, hybrid, or on-premises. Our solutions integrate effortlessly, keeping your systems optimized, compliant, and secure.
            </p>
          </motion.div>

          {/* Monitoring Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            {...staggerChildren}
          >
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Explore Seamless Integration
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE COMPUZIGN SECTION - Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Your Trusted Partner for Scalable, Automated IT
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-green-400 mb-6">
              Why Choose Compuzign? Smarter IT, Fewer Headaches
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Compuzign keeps your IT operations running smoothly with 24/7 AI-powered monitoring and automation. We reduce manual work, prevent downtime, and optimize costs—so you can focus on growth. Whether you're a startup or an enterprise, our scalable solutions fit your needs perfectly.
            </p>
            <p className="text-lg text-green-400 font-semibold mt-4">
              Result? Higher efficiency, lower costs, and peace of mind.
            </p>
          </motion.div>

          {/* Why Choose Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...staggerChildren}
          >
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/30 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. AI-DRIVEN MONITORING PROCESS SECTION - Blue Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              AI-Driven Monitoring & Automation
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-6">
              Our Proactive Monitoring Process
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We don't just watch your systems—we predict and prevent issues before they impact you.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <motion.div className="relative" {...staggerChildren}>
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400/30 via-green-400/50 to-green-400/30 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {monitoringProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 text-center">
                    {/* Phase Number */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.phase}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-400/20 rounded-xl mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{step.description}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. COST OPTIMIZATION SECTION - Pink Light Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Automate More, Worry Less
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-pink-500 mb-6">
              Cost Optimization Through Smart Automation
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Compuzign's AI-driven automation cuts costs while boosting efficiency—freeing up resources and reducing downtime.
            </p>
          </motion.div>

          {/* Cost Optimization Features */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            {...staggerChildren}
          >
            {costOptimizationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Operations?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-green-400 mb-8">
              Let Compuzign Optimize Your Monitoring & Automation
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Proactive insights. Fewer outages. Lower costs. Get started today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group" onClick={openModal}>
                Get Started Today
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