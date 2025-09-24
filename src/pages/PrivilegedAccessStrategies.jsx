import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  HiShieldCheck, 
  HiClock,
  HiLockClosed,
  HiCheckCircle,
  HiLightningBolt,
  HiGlobe,
  HiArrowRight,
  HiSparkles,
  HiPhone,
  HiKey,
  HiEye,
  HiUserGroup,
  HiCog,
  HiServer,
  HiCode,
  HiChartBar,
  HiClipboardCheck,
  HiRefresh,
  HiDocumentReport
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedStat from '../components/ui/AnimatedStat';
import FlipCard from '../components/ui/FlipCard';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { section1Cards, statsData, benefitsData, keyStrategies, partnerInfo, externalReference } from '../data/privilegedAccessData';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * PrivilegedAccessStrategies Component - Clean & Well-Aligned Design
 * Focus on proper spacing, alignment, and container structure
 */
export default function PrivilegedAccessStrategies() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
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
  }, []);

  // Simple animation props
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-10" {...fadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/15 to-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiLockClosed className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Privileged Access Security
                  </span>
                </motion.div>

                {/* Enhanced Main Heading */}
                <div className="space-y-6">
                  <motion.h1 
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="block text-white mb-2">Proactive</span>
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Privileged Access
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </span>
                    <span className="block text-white">Strategies</span>
                  </motion.h1>
                </div>


                
              </motion.div>
            </div>

            {/* Enhanced Right Visual - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden hero-right-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                
                {/* Enhanced Central Hub */}
                <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
                  isMobile ? 'w-72 h-72' : isTablet ? 'w-80 h-80' : 'w-96 h-96'
                }`}>
                  
                  {/* Outer Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border-2 border-primary-bgYellow/20 ${
                        isTablet ? 'w-72 h-72' : 'w-80 h-80'
                      }`}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  {/* Middle Ring */}
                  {!isMobile && (
                    <motion.div
                      className={`absolute rounded-full border border-blue-400/20 ${
                        isTablet ? 'w-56 h-56' : 'w-64 h-64'
                      }`}
                      animate={{ 
                        rotate: [360, 0]
                      }}
                      transition={{ 
                        duration: 15, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  {/* Central Shield */}
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
                    <HiShieldCheck className={`text-primary-bgYellow drop-shadow-lg ${
                      isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-20 h-20'
                    }`} />
                  </motion.div>

                  {/* Enhanced Floating Security Elements */}
                  {!isMobile && [
                    { icon: HiKey, top: '8%', left: '18%', delay: 0, label: 'Access Keys' },
                    { icon: HiEye, top: '15%', right: '12%', delay: 0.5, label: 'Monitoring' },
                    { icon: HiUserGroup, bottom: '15%', right: '18%', delay: 1, label: 'User Control' },
                    { icon: HiLockClosed, bottom: '8%', left: '12%', delay: 1.5, label: 'Secure Vault' },
                    ...(isTablet ? [] : [
                      { icon: HiCog, top: '38%', left: '5%', delay: 2, label: 'Policy Engine' },
                      { icon: HiDocumentReport, top: '42%', right: '5%', delay: 2.5, label: 'Audit Logs' }
                    ])
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute group cursor-pointer"
                      style={{ 
                        top: item.top, 
                        left: item.left, 
                        right: item.right, 
                        bottom: item.bottom 
                      }}
                      animate={{
                        y: [-8, 8, -8],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative">
                        <div className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg group-hover:border-primary-bgYellow/50 transition-all duration-300 ${
                          isTablet ? 'w-12 h-12' : 'w-14 h-14'
                        }`}>
                          <item.icon className={`text-primary-bgYellow group-hover:text-primary-bgYellow/80 transition-colors ${
                            isTablet ? 'w-6 h-6' : 'w-7 h-7'
                          }`} />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-primary-bgYellow/30">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  {!isMobile && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[
                      { x1: '50%', y1: '50%', x2: '25%', y2: '15%' },
                      { x1: '50%', y1: '50%', x2: '85%', y2: '22%' },
                      { x1: '50%', y1: '50%', x2: '82%', y2: '78%' },
                      { x1: '50%', y1: '50%', x2: '18%', y2: '85%' }
                    ].map((line, index) => (
                      <motion.line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1 + index * 0.2 }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffda17" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffda17" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  )}

                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-20 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-5xl mx-auto">
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed">
                You trust your <span className="text-primary-bgYellow font-semibold">privileged users</span> with elevated access to critical systems, data and functions, but their advanced entitlements need to be{' '}
                <span className="text-white font-medium">vetted, monitored and analyzed</span>{' '}
                to protect your resources from cybersecurity threats and credential abuse.
              </p>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent rounded-full"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary-bgYellow/60 to-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Industry Statistic Section */}
      <section className="py-16 bg-gradient-to-r from-red-500/5 via-red-500/10 to-red-500/5">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div className="text-center" {...fadeInUp}>
            <a 
              href={externalReference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-4xl mx-auto"
            >
              <div className="p-8 lg:p-12 bg-red-500/10 border-2 border-red-500/20 rounded-2xl hover:bg-red-500/15 hover:border-red-500/30 transition-all duration-300 cursor-pointer">
                
                {/* Main Statistic */}
                <div className="mb-6">
                  <div className="text-6xl lg:text-8xl font-bold text-red-400 group-hover:text-red-300 transition-colors mb-4">
                    40<span className="text-4xl lg:text-6xl">%</span>
                  </div>
                  <p className="text-2xl lg:text-3xl text-red-300 font-semibold group-hover:text-red-200 transition-colors leading-tight">
                    Research has found that as much as 40% of insider cyber attacks involved privileged users.
                  </p>
                </div>

                {/* Source Reference */}
                <div className="flex justify-center items-center text-gray-400 group-hover:text-primary-bgYellow transition-colors">
                  <span className="text-lg underline font-medium">{externalReference.title}</span>
                  <svg className="w-6 h-6 ml-3 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Subtle Call-to-Action */}
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-4">
                  Click to view the full IBM X-Force report
                </p>

              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Partner Information Section */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div className="text-center" {...fadeInUp}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Trusted <span className="text-primary-bgYellow">Global Partnerships</span>
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {partnerInfo.description}
              </p>
              
              {/* Partner Logos/Names */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-lg">IBM</span>
                  </div>
                  <span className="text-white font-semibold">IBM®</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-bgYellow/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-bgYellow font-bold text-sm">D</span>
                  </div>
                  <span className="text-white font-semibold">Delinea</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proactive Protection Philosophy Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgYellow/10 via-transparent to-blue-500/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary-bgYellow/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            
            {/* Icon Header */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/30 rounded-full flex items-center justify-center border-4 border-primary-bgYellow/40 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(255, 218, 23, 0.3)",
                    "0 0 30px rgba(255, 218, 23, 0.5)",
                    "0 0 20px rgba(255, 218, 23, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <HiShieldCheck className="w-10 h-10 text-primary-bgYellow" />
              </motion.div>
            </div>

            {/* Main Statement */}
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-8">
                <span className="text-primary-bgYellow">Proactive protection</span> for privileged accounts starts with
              </h2>
              
              {/* Key Components List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12">
                {[
                  { term: "Discovery", icon: HiEye },
                  { term: "Review", icon: HiDocumentReport },
                  { term: "Auditing", icon: HiClipboardCheck },
                  { term: "Vaulting", icon: HiLockClosed },
                  { term: "Control", icon: HiCog },
                  { term: "Enforcement", icon: HiShieldCheck },
                  { term: "Continuous", icon: HiRefresh },
                  { term: "Monitoring", icon: HiChartBar }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary-bgYellow/50 hover:bg-white/8 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-primary-bgYellow" />
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary-bgYellow transition-colors">
                          {item.term}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Flow Visualization */}
              <div className="mt-12">
                <motion.div 
                  className="flex justify-center items-center flex-wrap gap-2 text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <span className="text-primary-bgYellow font-semibold">Privileged Account Access</span>
                  <HiArrowRight className="w-5 h-5 text-primary-bgYellow mx-2" />
                  <span className="font-medium">Discovery, Review, Auditing</span>
                  <HiArrowRight className="w-5 h-5 text-primary-bgYellow mx-2" />
                  <span className="font-medium">Vaulting, Control, Enforcement</span>
                  <HiArrowRight className="w-5 h-5 text-primary-bgYellow mx-2" />
                  <span className="text-primary-bgYellow font-semibold">Continuous Monitoring</span>
                </motion.div>
              </div>

            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgLightBlack to-gray-900">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <motion.div className="text-center mb-16 lg:mb-20" {...fadeInUp}>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Privileged Access</span> Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive protection through discovery, review, auditing, vaulting, control, enforcement and continuous monitoring
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            {...staggerChildren}
          >
            {keyStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="group flex items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-bgYellow/30 hover:bg-white/8 transition-all duration-300"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 8 }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-bgYellow/20 to-primary-bgYellow/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <strategy.icon className="w-7 h-7 text-primary-bgYellow" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-white font-medium text-lg leading-relaxed group-hover:text-primary-bgYellow/90 transition-colors">
                    {strategy.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>



      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-bgYellow/10 to-transparent relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-primary-bgYellow/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center relative z-10">
          <motion.div {...fadeInUp}>
            
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-medium backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="w-4 h-4" />
              Secure Your Privileged Access
            </motion.div>
            
            {/* Enhanced Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Protect Your Most{' '}
              <span className="text-primary-bgYellow">Critical Assets</span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Don't let privileged account vulnerabilities expose your organization to insider threats. 
              Our comprehensive PAM solutions provide discovery, auditing, vaulting, and continuous monitoring 
              for complete privileged access protection.
            </p>
            
            {/* CTA Button */}
            <motion.div className="mb-16" whileHover={{ scale: 1.02 }}>
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-primary-bgYellow text-black hover:bg-yellow-400 px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-bgYellow/25"
                onClick={openModal}
              >
                Get Your Customized PAM Strategy
                <HiArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            {/* Enhanced Features */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-gray-400 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <HiLockClosed className="w-5 h-5 text-primary-bgYellow" />
                <span>Privileged Account Vaulting</span>
              </div>
              <div className="flex items-center gap-2">
                <HiEye className="w-5 h-5 text-primary-bgYellow" />
                <span>Continuous Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-5 h-5 text-primary-bgYellow" />
                <span>Access Control & Enforcement</span>
            </div>
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