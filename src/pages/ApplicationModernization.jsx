import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiCode, 
  HiCog,
  HiLightningBolt,
  HiTrendingUp,
  HiDatabase,
  HiCloud,
  HiRefresh,
  HiShieldCheck,
  HiArrowRight,
  HiPhone,
  HiSparkles,
  HiCube,
  HiGlobe,
  HiAcademicCap,
  HiBeaker,
  HiDesktopComputer,
  HiSupport,
  HiDocumentReport,
  HiUserGroup,
  HiCurrencyDollar,
  HiServer,
  HiChip,
  HiScale,
  HiClock,
  HiClipboardCheck,
  HiEye,
  HiLockClosed,
  HiChat,
  HiPresentationChartLine,
  HiCalculator,
  HiCubeTransparent,
  HiArrowSmRight,
  HiCheckCircle
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import AnimatedStat from '../components/ui/AnimatedStat';
import CSSFlipCard from '../components/ui/CSSFlipCard';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * ApplicationModernization Component - Application Modernization & Orchestration Excellence
 * Unique design with modern card layouts and distinctive visual elements
 */
export default function ApplicationModernization() {
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

  // Data for the service capabilities
  const serviceCapabilities = [
    {
      title: "Code Refactoring",
      description: "Strategic re-engineering of legacy code into modern, maintainable, and scalable architectures that eliminate technical debt and enable rapid innovation.",
      icon: HiCode,
      color: "#3b82f6"
    },
    {
      title: "Containerization",
      description: "Modern containerization strategies using Docker and container platforms to ensure consistent deployment across environments and improved resource utilization.",
      icon: HiCube,
      color: "#10b981"
    },
    {
      title: "Microservices & Orchestration",
      description: "Design and implementation of scalable microservices architectures with Kubernetes orchestration for automated deployment, scaling, and seamless integration.",
      icon: HiCog,
      color: "#f59e0b"
    }
  ];

  // Statistics data
  const statsData = [
    {
      value: "80%",
      label: "Faster Deployments - Average deployment speed improvement"
    },
    {
      value: "60%",
      label: "Cost Reduction - Average infrastructure cost savings"
    },
    {
      value: "99.9%",
      label: "Uptime - Enhanced application reliability and availability"
    },
    {
      value: "10x",
      label: "Innovation Speed - Accelerated time-to-market capabilities"
    }
  ];

  // Benefits data with unique design
  const benefitsData = [
    {
      title: "Faster Deployments",
      description: "Accelerated deployment cycles through containerization and orchestration platforms like Kubernetes",
      icon: HiLightningBolt,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Superior Performance",
      description: "Enhanced application performance through microservices architecture and optimized resource utilization",
      icon: HiTrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Seamless Integration",
      description: "Frictionless integration with modern DevOps pipelines and cloud ecosystems for continuous delivery",
      icon: HiCube,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Technical Debt Reduction",
      description: "Strategic elimination of technical debt through code refactoring and modern architecture patterns",
      icon: HiShieldCheck,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  // Modernization Process Steps with unique design
  const modernizationProcess = [
    {
      phase: "01",
      title: "Legacy Assessment",
      icon: HiClipboardCheck,
      description: "Comprehensive analysis of existing applications, identifying modernization opportunities and technical debt.",
      details: "Code quality assessment, architecture review, performance analysis, and migration feasibility study.",
      color: "#3b82f6"
    },
    {
      phase: "02",
      title: "Architecture Design",
      icon: HiCog,
      description: "Design of cloud-native architecture with microservices, containerization, and orchestration strategies.",
      details: "Service decomposition, API design, container strategy, and orchestration platform selection.",
      color: "#10b981"
    },
    {
      phase: "03",
      title: "Implementation",
      icon: HiCode,
      description: "Phased implementation of modernized applications with continuous integration and deployment.",
      details: "Code refactoring, containerization, microservices development, and CI/CD pipeline setup.",
      color: "#f59e0b"
    },
    {
      phase: "04",
      title: "Orchestration & Optimization",
      icon: HiServer,
      description: "Kubernetes deployment, monitoring, and continuous optimization for peak performance.",
      details: "Cluster management, auto-scaling, monitoring, and performance tuning.",
      color: "#ef4444"
    }
  ];

  return (
    <div key="application-modernization-page" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      {/* 1. HERO BANNER SECTION - Redesigned Layout */}
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
          {/* Centered Layout Instead of Grid */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.div className="space-y-12" {...bannerFadeInUp}>
              
              {/* Enhanced Badge */}
              <motion.div 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full backdrop-blur-md shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 218, 23, 0.3)" }}
              >
                <HiCode className="w-6 h-6 text-primary-bgYellow mr-3" />
                <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                  Application Modernization Services
                </span>
              </motion.div>

              {/* Enhanced Main Heading */}
              <div className="text-center mx-auto">
                <motion.h1 
                  className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <span className="inline-block text-primary-bgYellow mb-4 relative">
                    Application
                  </span>
                  <motion.div
                    className="h-1 w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary-bgYellow/80 to-transparent rounded-full mb-4"
                    initial={{ scaleX: 0, originX: 0.5 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                  />
                  <span className="block text-white drop-shadow-2xl mx-auto">Modernization</span>
                </motion.h1>
              </div>

              {/* Enhanced Subheading */}
              <motion.p 
                className="text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <span className="text-white font-semibold text-3xl lg:text-4xl block mb-6 drop-shadow-lg">
                  Orchestration Excellence
                </span>
                Legacy systems can stifle innovation and agility. At CompuZign, we transform these barriers into opportunities by re-engineering applications into <span className="text-primary-bgYellow font-semibold">cloud-native, future-ready architectures</span>.
              </motion.p>

              {/* Enhanced Key Features - Horizontal Layout */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                {[
                  { name: "Cloud-Native", icon: HiCloud },
                  { name: "Microservices", icon: HiCube },
                  { name: "Kubernetes", icon: HiCog }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/70 to-gray-900/70 border border-gray-700/60 rounded-xl backdrop-blur-md shadow-lg"
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: '#ffda17',
                      boxShadow: "0 10px 25px rgba(255, 218, 23, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-5 h-5 text-primary-bgYellow mr-3" />
                    <span className="text-primary-bgYellow font-bold text-base">{feature.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
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
                  Start Your Modernization
                  <HiArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE CAPABILITIES SECTION - New Design */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Modernization <span className="text-primary-bgYellow bg-gradient-to-r from-primary-bgYellow to-yellow-400 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              Our modernization approach leverages code refactoring, containerization, microservices, and orchestration platforms like Kubernetes to deliver faster deployments, superior performance, and seamless integration with modern DevOps pipelines.
            </p>
          </motion.div>

          {/* Unique Card Design - Hexagonal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {serviceCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Hexagonal Background */}
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-md shadow-xl overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-primary-bgYellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with Unique Design */}
                  <div className="relative z-10">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      style={{ backgroundColor: capability.color + '20' }}
                    >
                      <capability.icon 
                        className="w-10 h-10" 
                        style={{ color: capability.color }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-center">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODERNIZATION PROCESS SECTION - Redesigned */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <div className="text-sm font-bold text-blue-600 flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
              STRATEGIC MODERNIZATION PROCESS
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">Strategic Leap Forward</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              This isn't just an upgrade—it's a strategic leap that slashes technical debt, accelerates time-to-market, and empowers frictionless innovation through our comprehensive modernization process.
            </p>
          </motion.div>
          
          {/* Timeline Design */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {modernizationProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-white font-bold text-lg">{step.phase}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 max-w-lg ${index % 2 === 0 ? 'lg:text-right lg:ml-12' : 'lg:text-left lg:mr-12'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                          style={{ backgroundColor: step.color + '20' }}
                        >
                          <step.icon className="w-6 h-6" style={{ color: step.color }} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <p className="text-sm text-gray-500 italic">{step.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION - Redesigned */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-primary-bgYellow bg-gradient-to-r from-primary-bgYellow to-yellow-400 bg-clip-text text-transparent">CompuZign</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Blending technical excellence with strategic innovation to deliver transformative modernization outcomes.
            </p>
          </motion.div>

          {/* Unique Benefits Grid - Diagonal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative bg-gradient-to-br from-gray-800/60 to-black/80 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-md shadow-xl overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon with Gradient */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiArrowSmRight className="w-6 h-6 text-primary-bgYellow" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION - Redesigned */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-purple-900/20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/50 rounded-full backdrop-blur-md shadow-2xl mb-8"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 218, 23, 0.3)" }}
            >
              <HiSparkles className="w-6 h-6 text-primary-bgYellow mr-3" />
              <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                Ready to Transform?
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Modernize Your <span className="text-primary-bgYellow bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">Applications?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Let's discuss how our modernization approach can transform your legacy systems into <span className="text-primary-bgYellow font-semibold">cloud-native, future-ready architectures</span> that deliver faster deployments, superior performance, and seamless integration with modern DevOps pipelines.
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
                size="lg"
                className="group shadow-2xl hover:shadow-primary-bgYellow/30 transform hover:scale-105 transition-all duration-300"
                onClick={openModal}
              >
                Start Your Modernization
                <HiArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Component */}
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