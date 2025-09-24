import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  HiShieldCheck, 
  HiClock,
  HiDatabase,
  HiCheckCircle,
  HiLightningBolt,
  HiGlobe,
  HiArrowRight,
  HiSparkles,
  HiPhone,
  HiRefresh,
  HiClipboardCheck,
  HiEye
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import AnimatedStat from '../components/ui/AnimatedStat';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import CSSFlipCard from '../components/ui/CSSFlipCard';
import { section1Cards, statsData, benefitsData } from '../data/disasterRecoveryData';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * DisasterRecovery Component - Aligned with Cyber Resilience Services Design
 * 
 * Following the exact content structure from disaster-recovery-business-data-continuity.md:
 * 1. Banner - Hero section with sophisticated animations (aligned with VulnerabilityAssessment design)
 * 2. Section 1 - Flip cards with 3 key points + paragraph
 * 3. Section 2 - Stats section + disaster recovery benefits
 * 4. Talk to Us - CTA section
 */
export default function DisasterRecovery() {
  // State management for responsive behavior
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { width } = useWindowSize();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  // Responsive breakpoint detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset any potential animation conflicts
    document.body.style.overflow = 'auto';
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

  return (
    <div key="disaster-recovery-page" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* 1. BANNER SECTION - Aligned with VulnerabilityAssessment Design */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden z-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
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
                    Disaster Recovery-as-a-Service (DRaaS) Solution
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
                    <span className="block text-white mb-2">Disaster Recovery,</span>
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Business Data
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white">Continuity</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Rapid, secure recovery of your data, applications, and systems with <span className="text-primary-bgYellow font-semibold">DRaaS</span> - A flexible and reliable cloud-based disaster-recovery-as-a-service solution.
                </motion.p>

                {/* Key Features */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  {[
                    { name: "Zerto Platform", icon: HiDatabase },
                    { name: "Multi-Cloud", icon: HiGlobe },
                    { name: "24/7 Support", icon: HiShieldCheck }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.05, borderColor: '#ffda17' }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-4 h-4 text-primary-bgYellow mr-2" />
                      <span className="text-primary-bgYellow font-bold text-sm">{feature.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                  className="pt-6"
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
                    Get Your DRaaS Strategy
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
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
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
                    <HiDatabase className={`text-primary-bgYellow drop-shadow-lg ${
                      isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-20 h-20'
                    }`} />
                  </motion.div>

                  {/* Enhanced Floating Security Elements */}
                  {!isMobile && [
                    { icon: HiShieldCheck, top: '8%', left: '18%', delay: 0, label: 'Protect' },
                    { icon: HiEye, top: '15%', right: '12%', delay: 0.5, label: 'Monitor' },
                    { icon: HiClipboardCheck, bottom: '15%', right: '18%', delay: 1, label: 'Backup' },
                    { icon: HiRefresh, bottom: '8%', left: '12%', delay: 1.5, label: 'Recover' },
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
                        opacity: { delay: 1.2 + item.delay, duration: 0.5, ease: "easeOut" },
                        scale: { delay: 1.2 + item.delay, duration: 0.5, ease: "easeOut" },
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

                  {/* Data Flow Animation Lines */}
                  {!isMobile && [...Array(isTablet ? 4 : 6)].map((_, i) => (
                    <motion.div
                      key={`data-line-${i}`}
                      className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/40 to-transparent"
                      style={{
                        width: isTablet ? '70px' : '90px',
                        top: `${30 + i * 8}%`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1 - FLIP CARDS */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffda17 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              DRaaS Capabilities You Can{' '}
              <span className="text-primary-bgYellow">Rely On</span>
            </h2>
          </motion.div>

          {/* Flip Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {section1Cards.map((card, index) => (
              <CSSFlipCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                index={index}
              />
            ))}
          </motion.div>

          {/* Enhanced Paragraph Content */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main content card */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-bgYellow/10 to-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-primary-bgYellow/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Section badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full text-primary-bgYellow text-sm font-semibold mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <HiDatabase className="w-4 h-4" />
                  CompuZign DRaaS Platform
                </motion.div>

                {/* Main content */}
                <div className="space-y-6">
                  <motion.p 
                    className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Your business-critical data, applications, and systems will be{' '}
                    <span className="text-primary-bgYellow font-bold">fully managed</span> across{' '}
                    <span className="font-semibold text-gray-900">on-premises, colocation, and cloud environments</span>{' '}
                    with CompuZign DRaaS.
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-primary-bgYellow/5 rounded-2xl border-l-4 border-primary-bgYellow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-12 h-12 bg-primary-bgYellow rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <HiLightningBolt className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Powered by Zerto's IT Resiliency Platform</h4>
                      <p className="text-gray-700 leading-relaxed">
                        DRaaS supports the requirements of your IT environment with{' '}
                        <span className="font-semibold text-blue-600">low recovery time objectives (RTOs)</span> and{' '}
                        <span className="font-semibold text-blue-600">recovery point objectives (RPOs)</span>.
                      </p>
                    </div>
                  </motion.div>

                  {/* Key benefits highlights */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {[
                      { icon: HiShieldCheck, text: "Enterprise-Grade Security", color: "from-green-500 to-green-600" },
                      { icon: HiClock, text: "Minimal Recovery Time", color: "from-blue-500 to-blue-600" },
                      { icon: HiGlobe, text: "Multi-Cloud Support", color: "from-purple-500 to-purple-600" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.text}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION 2 - STATS + BENEFITS */}
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-bgLightBlack to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Do You Need DRaaS?
            </h2>
            <p className="text-2xl text-primary-bgYellow font-semibold">
              Don't Gamble with Downtime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <AnimatedStat key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 mb-4">
              CompuZign DRaaS experts assesses your IT environment and designs a disaster recovery and availability 
              solution that best suits your business, technical, and operational needs.
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Disaster Recovery <span className="text-primary-bgYellow">Benefits</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-primary-bgYellow rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TALK TO US SECTION */}
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
              Talk to Us
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Protect{' '}
              <span className="text-primary-bgYellow">Your Business?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't wait for disaster to strike. Let our experts design a comprehensive disaster recovery 
              strategy tailored specifically for your business needs.
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
                Get Your Customized DRaaS Strategy
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
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-primary-bgYellow" />
                <span>Proven Expertise</span>
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