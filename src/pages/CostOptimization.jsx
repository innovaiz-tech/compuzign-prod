import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import {
  HiCurrencyDollar,
  HiChartBar,
  HiTrendingUp,
  HiClipboardCheck,
  HiCloud,
  HiDocumentReport,
  HiArrowRight,
  HiPhone,
  HiCog,
  HiServer,
  HiUserGroup,
  HiLightningBolt,
  HiSearch,
  HiShieldCheck,
  HiEye,
  HiCheckCircle,
  HiRefresh,
  HiGlobe,
  HiLockClosed,
  HiCode,
  HiBeaker,
  HiCube,
  HiDatabase,
  HiChip,
  HiScale,
  HiAcademicCap,
  HiPresentationChartLine,
  HiClock,
  HiSparkles
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function CostOptimization() {
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
                  <HiCurrencyDollar className="w-5 h-5 text-primary-bgYellow mr-3" />
                  <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                    Cost Optimization & IT Financial Mastery
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
                      Cost Optimization
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/80 via-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white drop-shadow-2xl">& Strategic IT Financial Mastery</span>
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
                    Transform Your IT Spending into Strategic Value
                  </span>
                  Unoptimized IT spending erodes value and stifles growth. CompuZign's Cost Optimization and IT Financial Strategy services deliver transformative savings through deep analytics and domain expertise.
                </motion.p>

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
                    onClick={openModal}
                  >
                    Start Your Cost Optimization Journey
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Right Visual - Modern Cost Dashboard - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                {/* Main Dashboard Container */}
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 border border-primary-bgYellow/30 backdrop-blur-md shadow-2xl">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-bgYellow/20 rounded-lg flex items-center justify-center">
                        <HiCurrencyDollar className="w-5 h-5 text-primary-bgYellow" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Cost Optimization</h3>
                        <p className="text-gray-400 text-sm">Real-time savings tracker</p>
                      </div>
                    </div>
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Central Chart Area */}
                  <div className="relative h-32 mb-6 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 flex items-center justify-center">
                    {/* Animated Chart Bars */}
                    <div className="flex items-end space-x-2 h-20">
                      {[60, 80, 45, 90, 70, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          className="w-3 bg-gradient-to-t from-primary-bgYellow to-yellow-400 rounded-t"
                          style={{ height: `${height}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      ))}
                    </div>
                    
                    {/* Trend Line */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 200 80">
                        <motion.path
                          d="M20 60 Q50 40 80 20 T140 10 T200 15"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#facc15" />
                            <stop offset="100%" stopColor="#fbbf24" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Cost Savings Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { 
                        title: "Cloud Optimization", 
                        value: "Optimize", 
                        icon: HiCloud, 
                        color: "from-blue-500 to-blue-600"
                      },
                      { 
                        title: "Infrastructure", 
                        value: "Analyze", 
                        icon: HiServer, 
                        color: "from-green-500 to-green-600"
                      },
                      { 
                        title: "Licensing Review", 
                        value: "Audit", 
                        icon: HiDocumentReport, 
                        color: "from-amber-500 to-amber-600"
                      },
                      { 
                        title: "ROI Tracking", 
                        value: "Monitor", 
                        icon: HiTrendingUp, 
                        color: "from-purple-500 to-purple-600"
                      }
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-4 border border-gray-600/30 hover:border-primary-bgYellow/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="flex items-center justify-center mb-2">
                          <card.icon className={`w-5 h-5 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} />
                        </div>
                        <div className="text-lg font-bold text-white mb-1">{card.value}</div>
                        <div className="text-xs text-gray-400">{card.title}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Status Bar */}
                  <motion.div 
                    className="mt-6 flex items-center justify-between text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-400">Optimization Active</span>
                    </div>
                    <div className="text-primary-bgYellow font-semibold">
                      Track Savings
                    </div>
                  </motion.div>


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
                Unoptimized IT spending <span className="text-red-400 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">erodes value and stifles growth</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                In today's competitive landscape, inefficient IT spending directly impacts your bottom line and ability to innovate. Without proper cost optimization strategies, organizations waste valuable resources that could be invested in growth and transformation initiatives.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { name: 'Value Erosion', icon: HiTrendingUp },
                  { name: 'Growth Stifling', icon: HiLightningBolt },
                  { name: 'Resource Waste', icon: HiCurrencyDollar }
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
                <HiCurrencyDollar className="w-12 h-12 text-white z-10" />
              </div>
              <div className="bg-[#4a1d1d] rounded-xl flex items-center justify-center h-40 shadow-lg">
                <HiTrendingUp className="w-12 h-12 text-white" />
              </div>
              <div className="bg-[#4a1d1d] rounded-xl flex items-center justify-center h-40 shadow-lg">
                <HiLightningBolt className="w-12 h-12 text-white" />
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
              TRANSFORMATIVE SAVINGS THROUGH DEEP ANALYTICS
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              CompuZign's Cost Optimization and IT Financial Strategy services deliver <span className="text-green-600">transformative savings</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Through deep analytics and domain expertise, we uncover hidden cost efficiencies and optimize your IT investments for maximum value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1e88e5] flex items-center justify-center rounded-lg rotate-45">
                  <HiChartBar className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Analytics</h3>
              <p className="text-gray-600">Comprehensive analysis of your IT spending patterns and optimization opportunities</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1e88e5] flex items-center justify-center rounded-lg rotate-45">
                  <HiLightningBolt className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Domain Expertise</h3>
              <p className="text-gray-600">Specialized knowledge in IT financial management and cost optimization</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1e88e5] flex items-center justify-center rounded-lg rotate-45">
                  <HiSparkles className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transformative Results</h3>
              <p className="text-gray-600">Measurable cost savings and value creation from optimization efforts</p>
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
                We scrutinize your infrastructure, licensing, cloud utilization, and contracts to <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">uncover sustainable cost efficiencies</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our comprehensive approach examines every aspect of your IT spending to identify optimization opportunities and implement sustainable cost reduction strategies.
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Infrastructure Analysis', description: 'Comprehensive evaluation of infrastructure utilization and optimization opportunities' },
                  { step: '02', title: 'Licensing Review', description: 'Audit of software licensing and contract optimization potential' },
                  { step: '03', title: 'Cloud Optimization', description: 'Analysis of cloud utilization and rightsizing recommendations' },
                  { step: '04', title: 'Contract Negotiation', description: 'Strategic vendor contract review and renegotiation support' }
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
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our expert team conducts thorough analysis across all IT domains to identify the highest-impact cost optimization opportunities, ensuring maximum savings and value creation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY & TOOLS */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-[#f0f9ff]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#f0f9ff]"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#bae6fd]/40 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-[#0369a1] flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0369a1] inline-block"></span>
              FROM RIGHTSIZING TO RENEGOTIATION
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              From rightsizing cloud deployments to renegotiating vendor agreements, we <span className="text-[#0369a1]">maximize ROI</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We transform cost centers into engines of value through strategic optimization and efficient resource management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Cloud Rightsizing', description: 'Optimize cloud resource allocation', icon: HiCloud, color: '#3b82f6' },
              { title: 'Vendor Negotiation', description: 'Strategic contract renegotiation', icon: HiDocumentReport, color: '#10b981' },
              { title: 'ROI Maximization', description: 'Transform costs into value', icon: HiTrendingUp, color: '#f59e0b' },
              { title: 'Value Engineering', description: 'Cost centers to value engines', icon: HiSparkles, color: '#ef4444' }
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
              Whether navigating hybrid environments or managing SaaS sprawl, we empower you to <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">master your IT budget</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              With precision and foresight, we help you achieve sustainable cost optimization and transform your IT investments into strategic value drivers.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" {...staggerChildren}>
            {[
              {
                title: 'Proven Savings',
                description: 'Comprehensive cost reduction strategies across infrastructure, cloud, and licensing with measurable ROI.',
                icon: HiLightningBolt
              },
              {
                title: 'Strategic Approach',
                description: 'Cost optimization strategies aligned with business objectives and long-term growth plans.',
                icon: HiSparkles
              },
              {
                title: 'Risk Mitigation',
                description: 'Comprehensive risk assessment and mitigation strategies for cost optimization initiatives.',
                icon: HiShieldCheck
              },
              {
                title: 'Sustainable Results',
                description: 'Long-term cost optimization strategies that deliver ongoing savings and value creation.',
                icon: HiTrendingUp
              }
            ].map((benefit, index) => (
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
              Ready to Master Your <span className="text-primary-bgYellow bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">IT Budget?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Let's discuss how our cost optimization services can transform your IT spending and deliver measurable savings through <span className="text-primary-bgYellow font-semibold">strategic financial mastery and precision optimization</span>.
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
                Schedule a Cost Analysis
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