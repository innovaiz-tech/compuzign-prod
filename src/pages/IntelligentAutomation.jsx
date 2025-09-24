import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import {
  HiCog,
  HiLightningBolt,
  HiTrendingUp,
  HiChip,
  HiCode,
  HiServer,
  HiArrowRight,
  HiPhone,
  HiSparkles,
  HiUserGroup,
  HiChartBar,
  HiDocumentReport,
  HiSearch,
  HiClipboardCheck,
  HiShieldCheck,
  HiClock
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function IntelligentAutomation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { width } = useWindowSize();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  useEffect(() => {
    setIsMobile(width <= 768);
    setIsTablet(width > 768 && width <= 1024);
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  }, []);

  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 }
  };
  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, staggerChildren: 0.1 }
  };

  const serviceCapabilities = [
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Deploy intelligent bots to automate repetitive tasks, reducing manual errors and increasing operational efficiency.',
      icon: HiChip
    },
    {
      title: 'Low-Code Platform Integration',
      description: 'Leverage low-code platforms to rapidly develop and deploy automation solutions without extensive coding.',
      icon: HiCode
    },
    {
      title: 'API-Driven Workflows',
      description: 'Create seamless integrations between systems using API-driven automation to streamline data flow and process execution.',
      icon: HiServer
    }
  ];

  const statsData = [
    { value: '85%', label: 'Process Efficiency - Average improvement in operational efficiency' },
    { value: '60%', label: 'Cost Reduction - Significant reduction in operational costs' },
    { value: '24/7', label: 'Continuous Operation - Automated processes running around the clock' },
    { value: '99.9%', label: 'Accuracy Rate - Near-perfect accuracy in automated operations' }
  ];

  const benefitsData = [
    {
      title: 'Operational Excellence',
      description: 'Streamlined workflows that eliminate bottlenecks and maximize productivity.',
      icon: HiTrendingUp
    },
    {
      title: 'Resource Liberation',
      description: 'Free up human resources from repetitive tasks to focus on strategic initiatives.',
      icon: HiUserGroup
    },
    {
      title: 'Scalable Solutions',
      description: 'Automation frameworks that grow with your business and adapt to changing needs.',
      icon: HiSparkles
    },
    {
      title: 'Measurable ROI',
      description: 'Clear KPIs and metrics that demonstrate the value and impact of automation.',
      icon: HiChartBar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      {/* HERO BANNER SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden z-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/8 via-transparent to-blue-500/8"></div>
          <motion.div 
            className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/15 to-transparent rounded-full blur-3xl"
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
          <motion.div 
            className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-10" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full backdrop-blur-md shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 218, 23, 0.3)" }}
                >
                  <HiCog className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Intelligent Automation & Process Transformation
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
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Intelligent Automation
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/80 via-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white drop-shadow-2xl">& Process Transformation</span>
                  </motion.h1>
                </div>

                {/* Enhanced Subheading */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <span className="text-white font-semibold text-2xl lg:text-3xl block mb-4 drop-shadow-lg">
                    Revolutionizing Workflows Through Intelligent Automation
                  </span>
                  We transform manual processes into intelligent, automated workflows that drive <span className="text-primary-bgYellow font-semibold">unmatched efficiency and scalability</span> across your entire organization.
                </motion.p>

                {/* Enhanced Key Features */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  {[
                    { name: "RPA Solutions", icon: HiChip },
                    { name: "Process Optimization", icon: HiCog },
                    { name: "API Integration", icon: HiServer }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800/70 to-gray-900/70 border border-gray-700/60 rounded-lg backdrop-blur-md shadow-lg"
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: '#ffda17',
                        boxShadow: "0 10px 25px rgba(255, 218, 23, 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-4 h-4 text-primary-bgYellow mr-2" />
                      <span className="text-primary-bgYellow font-bold text-sm">{feature.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group shadow-2xl hover:shadow-primary-bgYellow/25"
                  >
                    Start Your Automation Journey
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden hero-right-visual h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Background Glow Effects */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-bgYellow/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.2, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>

                {/* Enhanced Central Hub */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72 mt-16' : isTablet ? 'w-80 h-80 mt-20' : 'w-96 h-96 mt-24'
                }`}>
                  
                  {/* Outer Rotating Ring */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-dashed border-primary-bgYellow/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Middle Pulse Ring */}
                  <motion.div 
                    className="absolute inset-4 border border-primary-bgYellow/20 rounded-full"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Central Automation Hub */}
                  <motion.div 
                    className="absolute inset-8 bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 rounded-full flex flex-col items-center justify-center border-4 border-primary-bgYellow/60 backdrop-blur-sm shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 218, 23, 0.3)",
                        "0 0 40px rgba(255, 218, 23, 0.5)",
                        "0 0 20px rgba(255, 218, 23, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow/30 to-primary-bgYellow/10 rounded-full flex items-center justify-center mb-4 border-2 border-primary-bgYellow/40"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <HiCog className="w-8 h-8 text-primary-bgYellow" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white text-center mb-3">
                      Process Intelligence
                    </h3>
                    <p className="text-sm text-gray-300 text-center px-4 leading-relaxed">
                      Intelligent automation driving operational excellence
                    </p>
                  </motion.div>

                  {/* Enhanced Orbiting Elements */}
                  <div className="absolute inset-0 rounded-full">
                    {[
                      { icon: HiChip, angle: 0, color: "#3b82f6", label: "RPA" },
                      { icon: HiCode, angle: 72, color: "#10b981", label: "Low-Code" },
                      { icon: HiServer, angle: 144, color: "#f59e0b", label: "APIs" },
                      { icon: HiLightningBolt, angle: 216, color: "#ef4444", label: "Automation" },
                      { icon: HiTrendingUp, angle: 288, color: "#8b5cf6", label: "Efficiency" }
                    ].map((item, index) => {
                      const radius = isMobile ? 120 : 140;
                      const angleRad = (item.angle * Math.PI) / 180;
                      const x = Math.cos(angleRad) * radius;
                      const y = Math.sin(angleRad) * radius;
                      
                      return (
                        <motion.div
                          key={index}
                          className="absolute group"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                          }}
                          animate={{
                            transform: [
                              `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                              `translate(-50%, -50%) translate(${Math.cos(angleRad + Math.PI * 2) * radius}px, ${Math.sin(angleRad + Math.PI * 2) * radius}px)`
                            ]
                          }}
                          transition={{
                            duration: 25 + index * 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full border-2 flex items-center justify-center backdrop-blur-sm shadow-lg relative overflow-hidden"
                          style={{
                            borderColor: item.color + '40'
                          }}
                          whileHover={{ scale: 1.2, zIndex: 10 }}
                          animate={{
                            boxShadow: [
                              `0 0 10px ${item.color}30`,
                              `0 0 20px ${item.color}50`,
                              `0 0 10px ${item.color}30`
                            ]
                          }}
                          transition={{
                            boxShadow: {
                              duration: 2 + index * 0.3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          {/* Animated background */}
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-20"
                            style={{ backgroundColor: item.color }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.4
                            }}
                          />
                          
                          <item.icon className="w-7 h-7 relative z-10" style={{ color: item.color }} />
                          
                          {/* Tooltip */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-700/50">
                            {item.label}
                          </div>
                                                 </motion.div>
                       </motion.div>
                      );
                    })}
                   </div>

                  {/* Enhanced Connection Lines with Animation */}
                  <div className="absolute inset-0 rounded-full">
                    {[0, 72, 144, 216, 288].map((angle, index) => (
                      <motion.div
                        key={index}
                        className="absolute origin-top"
                        style={{
                          top: '50%',
                          left: '50%',
                          height: `${isMobile ? '120px' : '140px'}`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`
                        }}
                      >
                        <motion.div
                          className="w-0.5 h-full bg-gradient-to-t from-primary-bgYellow/60 via-primary-bgYellow/30 to-transparent"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scaleY: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Data Points */}
                  {[...Array(6)].map((_, index) => (
                    <motion.div
                      key={`floating-${index}`}
                      className="absolute w-2 h-2 bg-primary-bgYellow/60 rounded-full"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE CHALLENGE */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-100" />
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 bg-red-400/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8" {...fadeInUp}>
              <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-red-500/15 to-red-500/10 border border-red-500/40 rounded-full backdrop-blur-md shadow-xl mb-4">
                <HiLightningBolt className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">The Challenge</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                In a dynamic digital economy, <span className="text-red-400 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">manual processes are a liability</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Manual processes slow down operations, introduce human errors, and prevent organizations from scaling efficiently. In today's fast-paced digital landscape, relying on manual workflows means falling behind competitors who have embraced automation.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { name: 'Error-Prone', icon: HiShieldCheck },
                  { name: 'Time-Consuming', icon: HiClock },
                  { name: 'Non-Scalable', icon: HiTrendingUp }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-sm">
                    <feature.icon className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400 font-semibold text-sm">{feature.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-6" {...fadeInUp}>
              <div className="relative bg-[#4a1d1d] rounded-xl flex items-center justify-center h-40 shadow-lg">
                <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#7f2a2a]" style={{clipPath: 'polygon(0 0, 100% 0, 0 100%)'}}></div>
                </div>
                <HiLightningBolt className="w-12 h-12 text-white z-10" />
              </div>
              <div className="bg-[#4a1d1d] rounded-xl flex items-center justify-center h-40 shadow-lg">
                <HiCog className="w-12 h-12 text-white" />
              </div>
              <div className="bg-[#4a1d1d] rounded-xl flex items-center justify-center h-40 shadow-lg">
                <HiTrendingUp className="w-12 h-12 text-white" />
              </div>
              <div className="bg-[#4a1d1d] rounded-xl flex items-center justify-center h-40 shadow-lg">
                <HiShieldCheck className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SOLUTION */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-[#eaf6f0]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d2f1e1] via-[#eaf6f0] to-[#eaf6f0]"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#b6e5d0]/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#b6e5d0]/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-[#1e88e5] flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1e88e5] inline-block"></span>
              REVOLUTIONIZING IT AND BUSINESS WORKFLOWS
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              CompuZign's Automation and Process Optimization services <span className="text-primary-bgYellow">revolutionize IT and business workflows</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Driving unmatched efficiency and scalability through intelligent automation solutions that transform how your organization operates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1e88e5] flex items-center justify-center rounded-lg rotate-45">
                  <HiLightningBolt className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unmatched Efficiency</h3>
              <p className="text-gray-600">Streamlined processes that eliminate bottlenecks and maximize productivity</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1e88e5] flex items-center justify-center rounded-lg rotate-45">
                  <HiTrendingUp className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infinite Scalability</h3>
              <p className="text-gray-600">Automation frameworks that grow with your business demands</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1e88e5] flex items-center justify-center rounded-lg rotate-45">
                  <HiSparkles className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Operations</h3>
              <p className="text-gray-600">Smart automation that adapts and learns from your processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR APPROACH */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/90"></div>
          <motion.div 
            className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8" {...fadeInUp}>
              <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-500/15 to-blue-500/10 border border-blue-500/40 rounded-full backdrop-blur-md shadow-xl mb-4">
                <HiSearch className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Our Approach</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                We analyze your operations, <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">pinpoint automation opportunities</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our systematic approach begins with a comprehensive analysis of your current processes, identifying bottlenecks and automation opportunities. We then design and deploy tailored solutions that maximize efficiency and ROI.
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Analyze Operations', description: 'Comprehensive process assessment and opportunity identification' },
                  { step: '02', title: 'Pinpoint Opportunities', description: 'Strategic identification of automation potential and ROI' },
                  { step: '03', title: 'Deploy Solutions', description: 'Seamless implementation of tailored automation solutions' }
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50"
                    whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                    transition={{ duration: 0.2 }}>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="relative" {...fadeInUp}>
              <div className="bg-gradient-to-br from-gray-800/60 to-black/80 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-md shadow-xl">
                <div className="text-center">
                  <HiSearch className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Strategic Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our expert team conducts thorough process analysis to identify the highest-impact automation opportunities, ensuring maximum ROI and operational efficiency.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY STACK */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-[#f0f9ff]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#f0f9ff]"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#bae6fd]/40 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-[#0369a1] flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0369a1] inline-block"></span>
              CUTTING-EDGE AUTOMATION TECHNOLOGIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Robotic process automation (RPA), <span className="text-[#0369a1]">low-code platforms, scripting, and API-driven integrations</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage the latest automation technologies to create comprehensive solutions that integrate seamlessly with your existing systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'RPA', description: 'Intelligent bots for repetitive tasks', icon: HiChip, color: '#3b82f6' },
              { title: 'Low-Code', description: 'Rapid development platforms', icon: HiCode, color: '#10b981' },
              { title: 'Scripting', description: 'Custom automation scripts', icon: HiDocumentReport, color: '#f59e0b' },
              { title: 'API Integration', description: 'Seamless system connectivity', icon: HiServer, color: '#ef4444' }
            ].map((tech, index) => (
              <motion.div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}>
                <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg" style={{ backgroundColor: tech.color + '20' }}>
                    <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE OUTCOME */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/90"></div>
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-green-400/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.3, 0.1, 0.3],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-500/15 to-green-500/10 border border-green-500/40 rounded-full backdrop-blur-md shadow-xl mb-8"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(34, 197, 94, 0.25)" }}>
              <HiClipboardCheck className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                The Outcome
              </span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Purpose-built strategies, aligned with your objectives, <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">backed by KPIs</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Delivering resource liberation, operational agility, and precision across IT, customer service, and beyond.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" {...staggerChildren}>
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 rounded-2xl p-8 border border-green-500/30 text-center backdrop-blur-md shadow-xl group relative overflow-hidden"
                {...fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(34, 197, 94, 0.6)',
                  boxShadow: "0 25px 50px rgba(34, 197, 94, 0.15)"
                }}
                transition={{ duration: 0.3 }}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}>
                  <benefit.icon className="w-8 h-8 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgYellow/12 via-slate-900/40 to-blue-500/12 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-bgYellow/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.4, 1, 1.4],
              opacity: [0.4, 0.2, 0.4],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,218,23,0.05)_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/50 rounded-full backdrop-blur-md shadow-2xl mb-8"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 218, 23, 0.3)" }}
            >
              <HiSparkles className="w-5 h-5 text-primary-bgYellow mr-3" />
              <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                Ready to Get Started?
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your <span className="text-primary-bgYellow bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">Processes?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Let's discuss how our intelligent automation services can revolutionize your workflows and deliver measurable results through <span className="text-primary-bgYellow font-semibold">operational excellence and resource liberation</span>.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="primary" 
                size="xl"
                className="group shadow-2xl hover:shadow-primary-bgYellow/30 transform hover:scale-105 transition-all duration-300"
                onClick={openModal}
              >
                Schedule a Consultation
                <HiArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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