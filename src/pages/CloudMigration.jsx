import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import React from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiCloud, 
  HiServer,
  HiRefresh,
  HiShoppingCart,
  HiTrash,
  HiPause,
  HiArrowRight,
  HiSparkles,
  HiPhone,
  HiUsers,
  HiClipboardCheck,
  HiCog,
  HiEye,
  HiCheckCircle,
  HiLightningBolt,
  HiShieldCheck,
  HiChartBar,
  HiGlobe,
  HiTrendingUp,
  HiSupport,
  HiChevronLeft,
  HiChevronRight,
  HiPlay
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * CloudMigration Component - Transform with AWS, Azure & GCP
 * Comprehensive cloud migration solutions using the 6Rs strategy framework
 */
export default function CloudMigration() {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { width } = useWindowSize();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate 6R strategies
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStrategy((prev) => (prev + 1) % sixRStrategies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // 6R Cloud Migration Strategies (exact client content) with modern visual enhancements
  const sixRStrategies = [
    {
      id: 'rehost',
      icon: HiServer,
      title: "Rehost",
      subtitle: "(Lift-and-Shift)",
      emoji: "🟢",
      description: "Move applications to the cloud with little or no modification.",
      useWhen: "You need to migrate quickly or temporarily.",
      pros: "Fast, low risk, minimal change.",
      cons: "Doesn't take full advantage of cloud-native features.",
      example: "Migrating a VM from on-prem VMware to AWS EC2 or Azure VM.",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "emerald",
      bgPattern: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 'replatform',
      icon: HiCog,
      title: "Replatform",
      subtitle: "(Lift-tinker-and-shift)",
      emoji: "🔵",
      description: "Move to the cloud with minor optimizations—no major code changes.",
      useWhen: "You want modest improvements (e.g., cost or performance) during migration.",
      pros: "Improves efficiency; moderate time investment.",
      cons: "Still not fully cloud-native.",
      example: "Moving an app to AWS and switching the database from self-managed MySQL to Amazon RDS.",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      glowColor: "blue",
      bgPattern: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: 'refactor',
      icon: HiRefresh,
      title: "Refactor",
      subtitle: "/ Rearchitect",
      emoji: "🟠",
      description: "Rebuild or redesign the app to leverage cloud-native capabilities.",
      useWhen: "You want to improve scalability, agility, or resilience.",
      pros: "Fully optimized for cloud.",
      cons: "Time-consuming, higher cost, complex.",
      example: "Breaking a monolithic app into microservices and deploying it on Kubernetes in GCP or AWS.",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      glowColor: "orange",
      bgPattern: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 'repurchase',
      icon: HiShoppingCart,
      title: "Repurchase",
      subtitle: "(Drop and Shop)",
      emoji: "🟣",
      description: "Abandon the legacy application and replace it with a SaaS product.",
      useWhen: "A SaaS offering can meet your business needs more effectively.",
      pros: "Fast, cost-effective, low maintenance.",
      cons: "Loss of customization; possible retraining.",
      example: "Replacing a legacy CRM with Salesforce or an internal HR system with Workday.",
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      glowColor: "purple",
      bgPattern: "from-purple-500/20 to-violet-500/20"
    },
    {
      id: 'retire',
      icon: HiTrash,
      title: "Retire",
      subtitle: "",
      emoji: "🔴",
      description: "Decommission or archive applications that are no longer useful.",
      useWhen: "Legacy apps are obsolete or duplicated elsewhere.",
      pros: "Reduces cost and complexity.",
      cons: "Requires thorough analysis and stakeholder buy-in.",
      example: "Shutting down an old reporting tool no longer used after Power BI is adopted.",
      gradient: "from-red-400 via-rose-500 to-red-600",
      glowColor: "red",
      bgPattern: "from-red-500/20 to-rose-500/20"
    },
    {
      id: 'retain',
      icon: HiPause,
      title: "Retain",
      subtitle: "(Revisit)",
      emoji: "🟡",
      description: "Keep some applications on-premises due to technical, regulatory, or business reasons.",
      useWhen: "Migration isn't feasible or justified now.",
      pros: "Avoids unnecessary cost.",
      cons: "Adds hybrid complexity.",
      example: "Keeping a latency-sensitive legacy system on-premises while moving others to Azure, GCP or AWS.",
      gradient: "from-yellow-600 via-amber-500 to-orange-600",
      glowColor: "yellow",
      bgPattern: "from-yellow-500/20 to-amber-500/20"
    }
  ];

  // Strategy Selection Chart (exact client content)
  const strategyChart = [
    { goal: "Speed & simplicity", strategy: "Rehost", color: "#10b981" },
    { goal: "Minor cloud optimization", strategy: "Replatform", color: "#3b82f6" },
    { goal: "Long-term cloud-native gain", strategy: "Refactor", color: "#f59e0b" },
    { goal: "SaaS preference", strategy: "Repurchase", color: "#8b5cf6" },
    { goal: "Reduce cost/complexity", strategy: "Retire", color: "#ef4444" },
    { goal: "Can't move it (yet)", strategy: "Retain", color: "#eab308" }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Navigation handlers
  const nextStrategy = () => {
    setActiveStrategy((prev) => (prev + 1) % sixRStrategies.length);
  };

  const prevStrategy = () => {
    setActiveStrategy((prev) => (prev - 1 + sixRStrategies.length) % sixRStrategies.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack">
      <ScrollToTop />
      
      {/* 1. HERO BANNER SECTION - Enhanced with Animations */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-500/5"></div>
          
          {/* Animated floating orbs */}
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/15 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/15 to-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiCloud className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                    AWS, Azure and GCP Services
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">Cloud Migration:</span>
                    <span className="block text-yellow-400 mb-2 relative">
                      Transform with AWS, Azure & GCP
                    </span>
                  </motion.h1>
                </div>

                <motion.p 
                  className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Expert cloud migration with <span className="text-yellow-400 font-semibold">6R strategies</span>, zero downtime, and multi-cloud flexibility for modern enterprises.
                </motion.p>

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
                  >
                    Get Your Cloud Migration Strategy
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Right Visual - Enhanced Planet Orbit - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                <div className="relative mx-auto flex items-center justify-center w-96 md:w-96 lg:w-[27rem] h-96 md:h-96 lg:h-[27rem]">
                  
                  {/* Enhanced Central Content */}
                  <motion.div 
                    className="absolute inset-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-yellow-400/50 backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(251, 191, 36, 0.3)",
                        "0 0 40px rgba(251, 191, 36, 0.5)",
                        "0 0 20px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <HiCloud className="w-7 h-7 text-black" />
                    </motion.div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStrategy}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-3">
                          {sixRStrategies[activeStrategy].title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-300 text-center leading-relaxed px-4">
                          {sixRStrategies[activeStrategy].description.length > 60 
                            ? `${sixRStrategies[activeStrategy].description.substring(0, 60)}...`
                            : sixRStrategies[activeStrategy].description
                          }
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Enhanced Orbiting Strategy Icons with Colors */}
                  {sixRStrategies.map((strategy, index) => {
                    const angle = (index * 60) - 30;
                    const radius = 160; // Increased radius to accommodate larger circle
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const isActive = index === activeStrategy;
                    const IconComponent = strategy.icon;
                    
                    // Enhanced color mapping for each strategy
                    const strategyColors = {
                      0: { bg: 'from-emerald-500 to-green-600', icon: '#10b981', glow: 'emerald' }, // Rehost
                      1: { bg: 'from-blue-500 to-indigo-600', icon: '#3b82f6', glow: 'blue' }, // Replatform
                      2: { bg: 'from-orange-500 to-red-600', icon: '#f59e0b', glow: 'orange' }, // Refactor
                      3: { bg: 'from-purple-500 to-violet-600', icon: '#8b5cf6', glow: 'purple' }, // Repurchase
                      4: { bg: 'from-red-500 to-pink-600', icon: '#ef4444', glow: 'red' }, // Retire
                      5: { bg: 'from-yellow-500 to-amber-600', icon: '#eab308', glow: 'yellow' }, // Retain
                    };
                    
                    const colors = strategyColors[index];
                    
                    return (
                      <motion.button
                        key={index}
                        className={`absolute w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500 border-2 ${
                          isActive 
                            ? `bg-gradient-to-br ${colors.bg} scale-110 shadow-2xl border-white/50` 
                            : `bg-gradient-to-br from-gray-700/80 to-gray-800/80 hover:${colors.bg.replace('to-', 'hover:to-')} hover:scale-105 border-gray-600/50 hover:border-white/30`
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                          boxShadow: isActive ? `0 0 25px ${colors.icon}60, 0 0 50px ${colors.icon}30` : undefined
                        }}
                        onClick={() => setActiveStrategy(index)}
                        animate={{
                          rotate: isActive ? [0, 360] : 0,
                          y: isActive ? [0, -3, 0] : 0,
                        }}
                        transition={{
                          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ scale: isActive ? 1.15 : 1.1 }}
                      >
                        <IconComponent 
                          className="w-5 h-5 drop-shadow-lg" 
                          style={{ color: isActive ? '#ffffff' : colors.icon }}
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODERN 6R STRATEGIES CAROUSEL SECTION */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Dynamic Gradient Background with Mesh Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-800/10 to-indigo-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,0,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Ultra-Modern Header with Massive Typography */}
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-8xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent leading-none block">
                6R's
              </span>
              <motion.div
                className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Cloud Migration <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">Strategies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              CompuZign breaks out the 6 Cloud Migration Strategies to choose the right approach for your business
            </p>
          </motion.div>

          {/* CAROUSEL NAVIGATION CONTROLS */}
          <motion.div 
            className="flex items-center justify-center mb-12 space-x-6"
            {...fadeInUp}
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevStrategy}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiChevronLeft className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
            </motion.button>

            {/* Strategy Indicators */}
            <div className="flex items-center space-x-3">
              {sixRStrategies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStrategy(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStrategy 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <motion.button
              onClick={toggleAutoPlay}
              className={`w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center border transition-all duration-300 group ${
                isAutoPlay 
                  ? 'bg-yellow-400/20 border-yellow-400/50 text-yellow-400' 
                  : 'bg-white/10 border-white/20 text-white hover:border-yellow-400/50 hover:text-yellow-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlay ? (
                <HiPause className="w-5 h-5" />
              ) : (
                <HiPlay className="w-5 h-5" />
              )}
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextStrategy}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiChevronRight className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
            </motion.button>
          </motion.div>

          {/* UNIFORM STRATEGY CARDS CAROUSEL */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStrategy}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                {/* Current Strategy Card */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${sixRStrategies[activeStrategy].bgPattern} rounded-3xl blur-xl`}></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Left Content */}
                      <div className="space-y-8">
                        {/* Header with Icon and Title */}
                        <div className="flex items-center space-x-6">
                          <motion.div 
                            className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${sixRStrategies[activeStrategy].gradient} flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${sixRStrategies[activeStrategy].gradient} opacity-50 rounded-2xl blur-lg`}></div>
                            {React.createElement(sixRStrategies[activeStrategy].icon, { className: "w-10 h-10 text-white relative z-10" })}
                          </motion.div>
                          
                          <div>
                            <div className="flex items-center space-x-3 mb-3">
                              {/* <span className="text-5xl">{sixRStrategies[activeStrategy].emoji}</span> */}
                              <h3 className="text-4xl lg:text-5xl font-black text-white">
                                {sixRStrategies[activeStrategy].title}
                              </h3>
                            </div>
                            {sixRStrategies[activeStrategy].subtitle && (
                              <p className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                {sixRStrategies[activeStrategy].subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                          {sixRStrategies[activeStrategy].description}
                        </p>

                        {/* Info Cards Grid */}
                        <div className="space-y-6">
                          {/* Use When */}
                          <motion.div 
                            className={`bg-gradient-to-br ${sixRStrategies[activeStrategy].gradient} bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white/20`}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <h4 className="font-bold text-yellow-400 mb-3 text-lg flex items-center">
                              <HiLightningBolt className="w-5 h-5 mr-2" />
                              Use When:
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                              {sixRStrategies[activeStrategy].useWhen}
                            </p>
                          </motion.div>
                          
                          {/* Pros and Cons Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div 
                              className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <h4 className="font-bold text-green-400 mb-3 flex items-center">
                                <HiCheckCircle className="w-5 h-5 mr-2" />
                                Pros:
                              </h4>
                              <p className="text-gray-300">{sixRStrategies[activeStrategy].pros}</p>
                            </motion.div>
                            
                            <motion.div 
                              className="bg-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <h4 className="font-bold text-orange-400 mb-3 flex items-center">
                                <HiShieldCheck className="w-5 h-5 mr-2" />
                                Cons:
                              </h4>
                              <p className="text-gray-300">{sixRStrategies[activeStrategy].cons}</p>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Example and CTA */}
                      <div className="space-y-8">
                        {/* Example Card */}
                        <motion.div 
                          className="relative group"
                          whileHover={{ rotateY: 5, rotateX: 5 }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${sixRStrategies[activeStrategy].bgPattern} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                          <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl p-8 border border-white/30 backdrop-blur-sm">
                            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                            <div className="flex items-center mb-6">
                              <HiClipboardCheck className="w-8 h-8 text-yellow-400 mr-3" />
                              <h4 className="text-2xl font-bold text-white">Real-World Example</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {sixRStrategies[activeStrategy].example}
                            </p>
                          </div>
                        </motion.div>
                        
                        {/* CTA Button */}
                        <Button 
                          variant="primary" 
                          size="lg"
                          className={`w-full group bg-gradient-to-r ${sixRStrategies[activeStrategy].gradient} text-white border-0 shadow-xl hover:shadow-2xl`}
                        >
                          <HiPhone className="w-6 h-6 mr-3" />
                          Start Your {sixRStrategies[activeStrategy].title} Migration
                          <HiArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>

                        {/* Strategy Counter */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Strategy Tabs for Quick Navigation */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12"
            {...fadeInUp}
          >
            {sixRStrategies.map((strategy, index) => (
              <motion.button
                key={strategy.id}
                onClick={() => setActiveStrategy(index)}
                className={`p-4 rounded-xl border transition-all duration-300 group ${
                  index === activeStrategy
                    ? 'bg-white/20 border-yellow-400/50 scale-105'
                    : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">{strategy.emoji}</span>
                  {React.createElement(strategy.icon, { className: `w-6 h-6 transition-colors duration-300 ${
                    index === activeStrategy ? 'text-yellow-400' : 'text-gray-400 group-hover:text-white'
                  }` })}
                  <span className={`text-sm font-semibold transition-colors duration-300 ${
                    index === activeStrategy ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {strategy.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. VERTICAL STEPPER STRATEGY SELECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-primary-bgLightBlack to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/3 via-transparent to-purple-500/3"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Section Header */}
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <div className="flex items-center justify-center mb-8">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-3xl">🧭</span>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Strategy Selection <span className="text-yellow-400">Guide</span>
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Follow our step-by-step guide to discover the perfect cloud migration strategy for your business goals
            </p>
          </motion.div>

          {/* Stepper Interface */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            {...fadeInUp}
          >
            <div className="flex flex-col lg:flex-row min-h-[700px]">
              
              {/* Left Side - Vertical Stepper */}
              <div className="lg:w-2/5 bg-white/5 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Select Your Primary Goal
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Choose the objective that best aligns with your migration needs
                  </p>
                </div>

                {/* Vertical Steps */}
                <div className="space-y-4">
                  {strategyChart.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Connecting Line */}
                      {index < strategyChart.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-gray-600 to-gray-700 hidden lg:block"></div>
                      )}
                      
                      {/* Step Button */}
                      <motion.button
                        className={`w-full flex items-center p-4 rounded-2xl border-2 transition-all duration-300 group ${
                          selectedGoal === index
                            ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400 shadow-lg'
                            : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                        }`}
                        onClick={() => setSelectedGoal(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Step Number */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-300 ${
                          selectedGoal === index
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-white'
                        }`}>
                          {selectedGoal === index ? (
                            <HiCheckCircle className="w-6 h-6" />
                          ) : (
                            <span className="font-bold text-lg">{index + 1}</span>
                          )}
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1 text-left">
                          <h4 className={`font-bold text-base lg:text-lg mb-1 transition-colors duration-300 ${
                            selectedGoal === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {item.goal}
                          </h4>
                          <p className={`text-sm transition-colors duration-300 ${
                            selectedGoal === index ? 'text-yellow-200' : 'text-gray-400 group-hover:text-gray-300'
                          }`}>
                            {selectedGoal === index ? 'Selected' : 'Click to select'}
                          </p>
                        </div>

                        {/* Arrow Indicator */}
                        <motion.div
                          className={`transition-all duration-300 ${
                            selectedGoal === index ? 'text-yellow-400' : 'text-gray-500 group-hover:text-gray-300'
                          }`}
                          animate={{ x: selectedGoal === index ? 5 : 0 }}
                        >
                          <HiArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{selectedGoal !== null ? '100%' : '0%'}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: selectedGoal !== null ? '100%' : '0%' }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content Cards */}
              <div className="lg:w-3/5 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {selectedGoal !== null ? (
                    <motion.div
                      key={selectedGoal}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="h-full p-6 lg:p-8 flex flex-col justify-center"
                    >
                      {/* Simplified Strategy Content - Center Aligned */}
                      <div className="text-center space-y-8">
                        <div className="flex flex-col items-center space-y-6">
                          <div 
                            className="w-20 h-20 rounded-3xl flex items-center justify-center"
                            style={{ backgroundColor: strategyChart[selectedGoal].color + '20' }}
                          >
                            <HiSparkles className="w-10 h-10" style={{ color: strategyChart[selectedGoal].color }} />
                          </div>
                          
                          <div className="space-y-3">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white">
                              {strategyChart[selectedGoal].strategy}
                            </h3>
                            <p className="text-yellow-400 font-semibold text-lg">
                              Recommended Strategy
                            </p>
                          </div>
                          
                          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-2xl">
                            <p className="text-gray-300 leading-relaxed text-lg">
                              Perfect for organizations focused on "<strong className="text-white">{strategyChart[selectedGoal].goal}</strong>". 
                              This approach provides optimal results for your specific migration requirements.
                            </p>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                          <Button 
                            variant="primary" 
                            size="lg"
                            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 font-bold shadow-xl hover:shadow-2xl px-8 py-4"
                          >
                            <HiPhone className="w-5 h-5 mr-3" />
                            Get Your {strategyChart[selectedGoal].strategy} Strategy Plan
                            <HiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex items-center justify-center p-8"
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <HiEye className="w-12 h-12 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Choose Your Goal
                        </h3>
                        <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
                          Select your primary migration objective from the steps on the left to see our AI-powered strategy recommendation.
                        </p>
                        <div className="mt-8">
                          <motion.div
                            className="inline-flex items-center space-x-2 text-yellow-400"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <HiArrowRight className="w-5 h-5 rotate-180" />
                            <span className="text-sm font-medium">Start by selecting a goal</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Successful Migrations", icon: HiCheckCircle },
                { number: "99.9%", label: "Uptime Guarantee", icon: HiShieldCheck },
                { number: "24/7", label: "Expert Support", icon: HiSupport },
                { number: "30+", label: "Industry Certifications", icon: HiSparkles }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-yellow-400/10 via-transparent to-purple-500/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgLightBlack/95 to-gray-900/95"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div 
            className="text-center space-y-8"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your<br />
              <span className="text-yellow-400">Cloud Infrastructure?</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Would you like help creating a <span className="text-yellow-400 font-semibold">cloud migration roadmap</span> or a <span className="text-yellow-400 font-semibold">migration wave plan</span> tailored to your organization or use case (e.g., data center to AWS, legacy ERP to SaaS, etc.)?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
                onClick={openModal}
              >
                <HiPhone className="w-5 h-5 mr-2" />
                Get Your Migration Started Today
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                onClick={openModal}
              >
                <HiSupport className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
            </div>
            
            <div className="pt-8">
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <HiShieldCheck className="w-5 h-5 text-yellow-400" />
                  <span>Zero Downtime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiUsers className="w-5 h-5 text-yellow-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiGlobe className="w-5 h-5 text-yellow-400" />
                  <span>Multi-Cloud</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

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