import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiServer, 
  HiArrowRight,
  HiPhone,
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
  HiPause,
  HiEye,



  HiKey,
  HiFingerPrint,
  HiShieldExclamation,



  HiServer as HiInfrastructure
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';

/**
 * NetworkOperationsCenter Component - AI-Powered Network Mastery at Your Fingertips
 * Comprehensive NOC solutions following the provided content requirements
 */
export default function NetworkOperationsCenter() {
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

  // Auto-rotate NOC features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % nocFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate NOC process
  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % nocProcess.length);
    }, 4000);
    return () => clearInterval(processInterval);
  }, []);

  // Planet orbit features for banner animation
  const orbitFeatures = [
    { icon: HiEye, title: "Monitoring", color: "#3b82f6" },
    { icon: HiCog, title: "Automation", color: "#8b5cf6" },
    { icon: HiShieldCheck, title: "Security", color: "#f59e0b" },
    { icon: HiChartBar, title: "Analytics", color: "#ec4899" }
  ];

  // NOC features data
  const nocFeatures = [
    {
      icon: HiInfrastructure,
      title: "Network Infrastructure",
      description: "Full oversight of routers, switches, firewalls and connectivity.",
      fullDescription: "Comprehensive monitoring and management of your entire network infrastructure with real-time visibility and control.",
      features: [
        "Router monitoring",
        "Switch management",
        "Firewall oversight",
        "Connectivity tracking",
        "Real-time alerts",
        "Performance optimization",
        "Traffic analysis"
      ],
      fineprint: "24/7 monitoring across all network components.",
      cta: "Build Your Custom Solution",
      color: "#3b82f6",
      featured: true
    },
    {
      icon: HiDatabase,
      title: "Storage Systems",
      description: "Continuous monitoring for SANs, NAS and storage arrays.",
      fullDescription: "Proactive monitoring and management of all storage infrastructure to ensure data availability and performance.",
      color: "#8b5cf6"
    },
    {
      icon: HiServer,
      title: "Server Management",
      description: "Physical/virtual server supervision including OS monitoring.",
      fullDescription: "Comprehensive server monitoring across physical and virtual environments with OS-level insights.",
      color: "#f59e0b"
    },
    {
      icon: HiCloud,
      title: "Cloud Environments",
      description: "Comprehensive IaaS and virtual machine management.",
      fullDescription: "Full visibility and control over cloud infrastructure and virtual machine performance.",
      color: "#ec4899"
    }
  ];

  // Why Choose Compuzign NOC data
  const whyChooseData = [
    {
      icon: HiClock,
      title: "24/7 Predictive Monitoring",
      description: "Round-the-clock intelligent monitoring with AI-driven insights and proactive issue detection."
    },
    {
      icon: HiLightningBolt,
      title: "Instant Incident Detection & Resolution",
      description: "Real-time problem identification and automated resolution workflows."
    },
    {
      icon: HiScale,
      title: "Customizable Scaling",
      description: "Flexible solutions that grow with your business, from startups to enterprises."
    },
    {
      icon: HiSupport,
      title: "Expert Technical Support",
      description: "Dedicated support team available when you need it most."
    }
  ];

  // AI-Driven NOC Process data
  const nocProcess = [
    {
      phase: "1",
      title: "Strategic Planning",
      icon: HiClipboardCheck,
      description: "Infrastructure evaluation and monitoring blueprint.",
      details: "Comprehensive assessment of network infrastructure and development of monitoring strategy."
    },
    {
      phase: "2",
      title: "Precision Implementation",
      icon: HiCog,
      description: "AI tool deployment with custom configurations.",
      details: "Deployment of AI-powered monitoring tools with tailored configurations for your environment."
    },
    {
      phase: "3",
      title: "Active Guardianship",
      icon: HiEye,
      description: "Real-time monitoring with instant response.",
      details: "24/7 monitoring with immediate response to issues and automated resolution."
    },
    {
      phase: "4",
      title: "Continuous Enhancement",
      icon: HiTrendingUp,
      description: "Data-driven performance optimization.",
      details: "Ongoing optimization based on performance data and continuous improvement."
    }
  ];

  // ZENfra AI Advantage features
  const zenfraFeatures = [
    {
      category: "Smart Monitoring",
      icon: HiChip,
      color: "#3b82f6",
      features: [
        "Predictive issue detection",
        "Automated performance tuning",
        "Anomaly identification"
      ]
    },
    {
      category: "Ironclad Security",
      icon: HiShieldExclamation,
      color: "#f59e0b",
      features: [
        "Real-time threat detection",
        "Proactive vulnerability management",
        "Compliance assurance"
      ]
    },
    {
      category: "Universal Compatibility",
      icon: HiGlobe,
      color: "#8b5cf6",
      features: [
        "Seamless integration with AWS/Azure/Google Cloud",
        "Hybrid environment support",
        "Legacy system connectivity"
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
      
      {/* 1. HERO BANNER SECTION - Blue Theme */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/15 to-blue-400/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiServer className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                    Network Operations Center
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
                    <span className="block text-white mb-2">Network Operations Center:</span>
                    <span className="block text-blue-400 mb-2 relative">
                      AI-Powered Network Mastery
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">at Your Fingertips</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Transform your network management with our intelligent NOC solutions - where <span className="text-blue-400 font-semibold">proactive monitoring meets predictive problem-solving</span>.
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
                    Get Your Custom NOC Solution
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
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-blue-400/50 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center mb-3">
                      {React.createElement(orbitFeatures[activeFeature].icon, { 
                        className: "w-5 h-5", 
                        style: { color: orbitFeatures[activeFeature].color }
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {orbitFeatures[activeFeature].title}
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-3">
                      {nocFeatures[activeFeature].description.substring(0, 80)}...
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
                            ? 'bg-blue-400/90 scale-110 shadow-lg' 
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
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400/60 rounded-full"
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

      {/* 2. TOTAL NETWORK VISIBILITY SECTION - Blue Background */}
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
              Total Network Visibility & Control
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-6">
              NOC Excellence Redefined
            </h3>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto">
              Compuzign's AI-driven NOC delivers 24/7 vigilant monitoring and preemptive maintenance, ensuring maximum uptime and peak network performance across all your critical infrastructure.
            </p>
          </motion.div>

          {/* NOC Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            {...staggerChildren}
          >
            {nocFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Build Your Custom Solution
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE COMPUZIGN NOC SECTION - Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Your Always-On Network Guardian
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-6">
              Why Compuzign's NOC Stands Apart
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We provide more than monitoring - we deliver network peace of mind. Our AI-enhanced NOC combines:
            </p>
            <p className="text-lg text-blue-400 font-semibold mt-4">
              Focus on business growth while we ensure your network never sleeps.
            </p>
          </motion.div>

          {/* Why Choose Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...staggerChildren}
          >
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div className="text-center mt-16" {...fadeInUp}>
            <Button variant="primary" size="lg" className="group" onClick={openModal}>
              Start with a Free Network Assessment
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 4. AI-DRIVEN NOC PROCESS SECTION - Blue Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              AI-Driven Network Optimization
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-300 mb-6">
              Our Smart NOC Workflow
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Powered by ZENfra AI, our process ensures your network operates at peak efficiency:
            </p>
          </motion.div>

          {/* Process Timeline */}
          <motion.div className="relative" {...staggerChildren}>
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/30 via-blue-400/50 to-blue-400/30 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {nocProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                                     <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-0 border border-slate-700/50 hover:border-blue-400/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                     {/* Animated Background Pattern */}
                     <div className="absolute inset-0 opacity-20">
                       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10"></div>
                       <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
                       <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-400/5 rounded-full blur-xl"></div>
                     </div>
                     
                     {/* Header Section with Diagonal Design */}
                     <div className="relative bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 border-b border-blue-500/30">
                       <div className="flex items-center justify-between">
                         {/* Phase Number - Hexagonal Design */}
                         <div className="relative">
                           <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 transform rotate-45 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                             <span className="text-2xl font-bold text-white transform -rotate-45">{step.phase}</span>
                           </div>
                           <div className="absolute inset-0 w-16 h-16 border-2 border-blue-400/40 transform rotate-45 rounded-lg animate-ping"></div>
                         </div>
                         
                         {/* Icon - Floating Design */}
                         <div className="relative">
                           <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                             <step.icon className="w-6 h-6 text-blue-300" />
                           </div>
                           <div className="absolute inset-0 w-12 h-12 bg-blue-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                         </div>
                       </div>
                     </div>
                     
                     {/* Content Section */}
                     <div className="relative p-6">
                       <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">{step.title}</h3>
                       <p className="text-blue-100 leading-relaxed mb-4 text-sm">{step.description}</p>
                       
                       {/* Details in Glassmorphism Card */}
                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                         <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                           <p className="text-xs text-blue-200 leading-relaxed">{step.details}</p>
                         </div>
                       </div>
                     </div>
                     
                     {/* Bottom Accent Line */}
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. ZENFRA AI ADVANTAGE SECTION - Purple Light Background */}
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
              The ZENfra AI Advantage
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-purple-600 mb-6">
              Next-Generation Network Intelligence
            </h3>
          </motion.div>

          {/* ZENfra Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            {...staggerChildren}
          >
            {zenfraFeatures.map((category, index) => (
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
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready for Smarter Network Management?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-8">
              Experience the Compuzign Difference - Where AI meets enterprise-grade network expertise to keep your business always connected, always secure.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group" onClick={openModal}>
                Get Your Custom NOC Solution Today
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