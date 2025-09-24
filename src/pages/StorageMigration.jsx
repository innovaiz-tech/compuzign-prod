import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiDatabase, 
  HiArrowRight,
  HiPhone,
  HiServer,
  HiCloud,
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
  HiCube
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';

// Vendor logo imports
import NetAppLogo from '../assets/cloud-vendors/netapp-1.svg';
import DellEMCLogo from '../assets/cloud-vendors/dell-emc-logo.svg';
import IBMLogo from '../assets/cloud-vendors/ibm.svg';
import HitachiLogo from '../assets/cloud-vendors/hitachi-3.svg';
import DXCLogo from '../assets/cloud-vendors/dxc-technology-1.svg';
import PureStorageLogo from '../assets/cloud-vendors/pure-storage-seeklogo.png';

/**
 * StorageMigration Component - Modernize, Migrate, and Move Without Disruption
 * Comprehensive storage migration solutions following storage-migration.md requirements
 */
export default function StorageMigration() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);
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

  // Auto-rotate migration approaches
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveApproach((prev) => (prev + 1) % migrationApproaches.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate migration process
  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % migrationProcess.length);
    }, 4000);
    return () => clearInterval(processInterval);
  }, []);

  // Planet orbit features for banner animation
  const orbitFeatures = [
    { icon: HiDatabase, title: "Block", color: "#facc15" },
    { icon: HiServer, title: "NAS", color: "#60a5fa" },
    { icon: HiShieldCheck, title: "Backup", color: "#34d399" },
    { icon: HiCubeTransparent, title: "Container", color: "#f59e0b" }
  ];

  // Migration approaches data (from requirements)
  const migrationApproaches = [
    {
      icon: HiDatabase,
      title: "Block Migration",
      description: "Focuses on moving data at the storage volume level, without necessarily analyzing or processing the data content itself.",
      fullDescription: "With over 20 years of Industry expertize, CompuZign offer Block Data Migration Service thru its PSaaS Organization. A full and comprehensive online, zero downtime, data migration offering to include:",
      features: [
        "On-prem to on-prem",
        "Tech-refresh", 
        "Replatforming",
        "Lift and shift",
        "Application consistent snapshots",
        "Online replication",
        "Data synchronization"
      ],
      fineprint: "We offer the best industry per TB cost block migration services.",
      cta: "Get Your Customized Block Migration Started",
      color: "#facc15",
      featured: true
    },
    {
      icon: HiServer,
      title: "NAS Migration",
      description: "NAS migration focus on moving data and configurations from one Network Attached Storage (NAS) system to another.",
      fullDescription: "Whether upgrading or moving to the cloud, no matter the complexity, CompuZign will do it for you.",
      color: "#60a5fa"
    },
    {
      icon: HiShieldCheck,
      title: "Backup Migration",
      description: "Migrate backups securely with zero risk of data loss.",
      fullDescription: "Maintain full backup continuity, ensuring your critical data is always accessible throughout the migration.",
      color: "#34d399"
    },
    {
      icon: HiCubeTransparent,
      title: "Containerized Migration",
      description: "Migrate applications to containers with minimal downtime.",
      fullDescription: "Scale easily with AI-driven automation, reducing complexity and optimizing costs for fast, efficient deployments.",
      color: "#f59e0b"
    }
  ];

  // Why Choose CompuZign data
  const whyChooseData = [
    {
      icon: HiLightningBolt,
      title: "Zero Downtime",
      description: "Advanced replication technology ensures continuous operations during migration with 99.99% uptime guarantee."
    },
    {
      icon: HiSparkles,
      title: "AI Optimization",
      description: "Machine learning algorithms optimize migration paths and predict potential issues before they occur."
    },
    {
      icon: HiShieldCheck,
      title: "Compliance Ready",
      description: "Built-in compliance for GDPR, HIPAA, SOX, and other regulatory frameworks with audit trails."
    },
    {
      icon: HiUserGroup,
      title: "Expert Support",
      description: "24/7 dedicated migration specialists with 20+ years of enterprise storage experience."
    },
    {
      icon: HiTrendingUp,
      title: "Cost Efficiency",
      description: "Up to 40% cost reduction through optimized migration strategies and automated processes."
    },
    {
      icon: HiGlobe,
      title: "Multi-Cloud Ready",
      description: "Seamless migration across AWS, Azure, Google Cloud, and hybrid environments."
    }
  ];

  // Risk Mitigation & Security data
  const securityFeatures = [
    {
      icon: HiLockClosed,
      title: "End-to-End Encryption",
      description: "AES-256 encryption in transit and at rest"
    },
    {
      icon: HiEye,
      title: "Continuous Monitoring",
      description: "Real-time migration monitoring and alerting"
    },
    {
      icon: HiShieldCheck,
      title: "Data Integrity Verification",
      description: "Checksums and validation at every stage"
    },
    {
      icon: HiDocumentReport,
      title: "Audit Trail Logging",
      description: "Complete migration history and compliance reporting"
    },
    {
      icon: HiRefresh,
      title: "Rollback Capability",
      description: "Instant rollback in case of migration issues"
    },
    {
      icon: HiCheckCircle,
      title: "Zero Data Loss Guarantee",
      description: "Comprehensive backup and validation processes"
    }
  ];

  // Migration Process (6-step timeline)
  const migrationProcess = [
    {
      phase: "1",
      title: "Assessment & Planning",
      icon: HiClipboardCheck,
      description: "Comprehensive analysis of current storage infrastructure and migration requirements.",
      details: "Environment discovery, dependency mapping, risk assessment, and migration strategy development."
    },
    {
      phase: "2",
      title: "Design & Architecture",
      icon: HiCog,
      description: "Design target architecture and create detailed migration blueprints.",
      details: "Performance optimization, security configuration, and capacity planning for target environment."
    },
    {
      phase: "3",
      title: "Testing & Validation",
      icon: HiEye,
      description: "Pilot migrations and validation of processes in controlled environments.",
      details: "Performance testing, data integrity validation, and rollback procedure verification."
    },
    {
      phase: "4",
      title: "Migration Execution",
      icon: HiServer,
      description: "Execute migration with real-time monitoring and minimal downtime.",
      details: "Automated migration tools, continuous monitoring, and immediate issue resolution."
    },
    {
      phase: "5",
      title: "Validation & Cutover",
      icon: HiCheckCircle,
      description: "Comprehensive validation and seamless production cutover.",
      details: "Performance validation, user acceptance testing, and production environment activation."
    },
    {
      phase: "6",
      title: "Optimization & Support",
      icon: HiTrendingUp,
      description: "Post-migration optimization and ongoing support services.",
      details: "Performance tuning, monitoring setup, and knowledge transfer to client teams."
    }
  ];

  // AI-Powered Analytics data
  const aiFeatures = [
    {
      icon: HiChartBar,
      title: "Predictive Analytics",
      description: "AI predicts migration bottlenecks and optimizes resource allocation automatically."
    },
    {
      icon: HiLightningBolt,
      title: "Real-time Optimization",
      description: "Machine learning adjusts migration parameters in real-time for optimal performance."
    },
    {
      icon: HiCode,
      title: "Automated Remediation",
      description: "AI-driven automatic resolution of common migration issues and conflicts."
    },
    {
      icon: HiTrendingUp,
      title: "Cost Optimization",
      description: "Intelligent cost analysis and optimization recommendations throughout migration."
    }
  ];

  // Multi-vendor support data with actual assets
  const vendorLogos = [
    { name: "DXC Technology", logo: DXCLogo, alt: "DXC Technology" },
    { name: "PureStorage", logo: PureStorageLogo, alt: "Pure Storage" },
    { name: "Hitachi Vantara", logo: HitachiLogo, alt: "Hitachi Vantara" },
    { name: "IBM", logo: IBMLogo, alt: "IBM" },
    { name: "Dell EMC", logo: DellEMCLogo, alt: "Dell EMC" },
    { name: "NetApp", logo: NetAppLogo, alt: "NetApp" }
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
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/15 to-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiDatabase className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                    Storage Migration Services
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
                    <span className="block text-white mb-2">Storage Migration:</span>
                    <span className="block text-yellow-400 mb-2 relative">
                      Modernize, Migrate, and Move
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">Without Disruption</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Platform-agnostic storage migration services with <span className="text-yellow-400 font-semibold">zero downtime</span>, complete data protection, and seamless cloud transitions for modern enterprises.
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
                  >
                    Get Your Storage Migration Plan
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
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-yellow-400/50 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3">
                      {React.createElement(orbitFeatures[activeApproach].icon, { 
                        className: "w-5 h-5", 
                        style: { color: orbitFeatures[activeApproach].color }
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {orbitFeatures[activeApproach].title} Migration
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-3">
                      {migrationApproaches[activeApproach].description.substring(0, 80)}...
                    </p>
                  </div>

                  {/* Orbiting Feature Icons */}
                  {orbitFeatures.map((feature, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const isActive = index === activeApproach;
                    const IconComponent = feature.icon;
                    
                    return (
                      <motion.button
                        key={index}
                        className={`absolute w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'bg-yellow-400/90 scale-110 shadow-lg' 
                            : 'bg-gray-700/70 hover:bg-gray-600/70 hover:scale-105'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 28px)`,
                          top: `calc(50% + ${y}px - 28px)`,
                          boxShadow: isActive ? `0 0 20px ${feature.color}60` : undefined
                        }}
                        onClick={() => setActiveApproach(index)}
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
                    className="absolute top-4 right-4 w-3 h-3 bg-yellow-400/60 rounded-full"
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

      {/* 2. CHOOSE THE RIGHT MIGRATION APPROACH SECTION - Amber Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-amber-100/30 to-yellow-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-40">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/15 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-amber-400/15 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose the Right <span className="text-yellow-400">Migration Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              for Your Business
            </p>
          </motion.div>

          {/* Block Migration - Featured Approach */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 mb-12"
            {...fadeInUp}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                    <HiDatabase className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Block Migration</h3>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full mt-2"></div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Focuses on moving data at the storage volume level, without necessarily analyzing or processing the data content itself.
                </p>
                
                <div className="bg-gray-800 rounded-2xl p-6 text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <HiSparkles className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Fineprint:</span>
          </div>
                  <p className="text-gray-300 mb-4">
                    We offer the best industry per TB cost block migration services.
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Try our <span className="text-yellow-400 font-semibold">"Migration Calculator"</span> then
                  </p>
                  
                  <Button 
                    variant="primary" 
                    size="md"
                    className="w-full group bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    <HiPhone className="w-5 h-5 mr-2" />
                    Get Your Customized Block Migration
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                      </div>
                    </div>

              {/* Right Features */}
                    <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-200/50">
                  <p className="text-gray-900 font-semibold mb-4">
                    With over 20 years of Industry expertize, CompuZign offer Block Data Migration Service thru its PSaaS Organization. A full and comprehensive online, zero downtime, data migration offering to include:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {migrationApproaches[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>

          {/* Other Migration Approaches */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {migrationApproaches.slice(1).map((approach, index) => (
              <motion.div
                key={index + 1}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${approach.color}20` }}>
                  <approach.icon className="w-7 h-7" style={{ color: approach.color }} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{approach.description}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{approach.fullDescription}</p>
              </motion.div>
            ))}
          </motion.div>
                        </div>
      </section>

      {/* 3. WHY CHOOSE COMPUZIGN SECTION - Simple 4-Step Layout */}
      <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                ● YOUR TRUSTED MIGRATION PARTNER
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-[#FACC15]">CompuZign</span>?
            </h2>
          </motion.div>

          {/* Desktop Horizontal Layout */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-between max-w-6xl mx-auto">
              
              {/* Step 1 */}
              <motion.div
                className="flex flex-col items-center text-center max-w-xs group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-4 shadow-2xl overflow-hidden group-hover:shadow-amber-500/50 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-amber-800 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-black transition-all duration-300">
                    <span className="text-white text-sm font-bold group-hover:text-black">01</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FACC15] transition-colors duration-300">Minimal Downtime</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  AI-driven workflows ensure continuous operations.
                </p>
              </motion.div>

              {/* Connector 1 - Enhanced Dotted Line */}
              <div className="flex-1 px-8">
                <motion.div
                  className="relative h-px bg-gradient-to-r from-transparent via-[#FACC15] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* Animated dotted line overlay */}
                  <div className="absolute inset-0 border-t-2 border-dashed border-[#FACC15] opacity-60"></div>
                </motion.div>
                <div className="flex justify-center -mt-1">
                  <motion.div 
                    className="w-4 h-4 border-2 border-[#FACC15] border-dashed rounded-full bg-black flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      borderColor: ['#FACC15', '#ffffff', '#FACC15']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-1 h-1 bg-[#FACC15] rounded-full animate-pulse"></div>
                  </motion.div>
                        </div>
                      </div>

              {/* Step 2 */}
              <motion.div
                className="flex flex-col items-center text-center max-w-xs group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mb-4 shadow-2xl overflow-hidden group-hover:shadow-red-500/50 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-red-900 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-black transition-all duration-300">
                    <span className="text-white text-sm font-bold group-hover:text-black">02</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FACC15] transition-colors duration-300">Zero Data Loss</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Advanced encryption with comprehensive data validation.
                </p>
              </motion.div>

              {/* Connector 2 - Enhanced Dotted Line */}
              <div className="flex-1 px-8">
                <motion.div
                  className="relative h-px bg-gradient-to-r from-transparent via-[#FACC15] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  {/* Animated dotted line overlay */}
                  <div className="absolute inset-0 border-t-2 border-dashed border-[#FACC15] opacity-60"></div>
                </motion.div>
                <div className="flex justify-center -mt-1">
                  <motion.div 
                    className="w-4 h-4 border-2 border-[#FACC15] border-dashed rounded-full bg-black flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      borderColor: ['#FACC15', '#ffffff', '#FACC15']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="w-1 h-1 bg-[#FACC15] rounded-full animate-pulse"></div>
                  </motion.div>
                    </div>
                  </div>

              {/* Step 3 */}
              <motion.div
                className="flex flex-col items-center text-center max-w-xs group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-2xl overflow-hidden group-hover:shadow-orange-500/50 transition-all duration-300">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-orange-500 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">HELP</span>
                </div>
              </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-black transition-all duration-300">
                    <span className="text-white text-sm font-bold group-hover:text-black">03</span>
            </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FACC15] transition-colors duration-300">Complete Assistance</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Expert assistance throughout the entire migration journey.
                </p>
          </motion.div>

              {/* Connector 3 - Enhanced Dotted Line */}
              <div className="flex-1 px-8">
          <motion.div 
                  className="relative h-px bg-gradient-to-r from-transparent via-[#FACC15] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  {/* Animated dotted line overlay */}
                  <div className="absolute inset-0 border-t-2 border-dashed border-[#FACC15] opacity-60"></div>
                </motion.div>
                <div className="flex justify-center -mt-1">
                  <motion.div 
                    className="w-4 h-4 border-2 border-[#FACC15] border-dashed rounded-full bg-black flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      borderColor: ['#FACC15', '#ffffff', '#FACC15']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="w-1 h-1 bg-[#FACC15] rounded-full animate-pulse"></div>
                  </motion.div>
                </div>
              </div>

              {/* Step 4 */}
              <motion.div
                className="flex flex-col items-center text-center max-w-xs group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center mb-4 shadow-2xl overflow-hidden group-hover:shadow-slate-500/50 transition-all duration-300">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-slate-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-black transition-all duration-300">
                    <span className="text-white text-sm font-bold group-hover:text-black">04</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FACC15] transition-colors duration-300">Scalable Solutions</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Built to grow alongside your evolving business needs.
                </p>
              </motion.div>

            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="md:hidden space-y-8">
            {[
                {
                title: "Minimal Downtime",
                description: "AI-driven workflows ensure continuous operations.",
                number: "01",
                bgColor: "from-gray-700 to-gray-800",
                iconBg: "from-amber-100 to-amber-200",
                iconColor: "text-amber-800"
              },
              {
                title: "Zero Data Loss", 
                description: "Advanced encryption with comprehensive data validation.",
                number: "02",
                bgColor: "from-red-800 to-red-900",
                iconBg: "from-red-400 to-red-500",
                iconColor: "text-red-900"
              },
              {
                title: "Complete Assistance",
                description: "Expert assistance throughout the entire migration journey.", 
                number: "03",
                bgColor: "from-orange-400 to-orange-500",
                iconBg: "bg-white",
                iconColor: "text-orange-500"
                },
                {
                title: "Scalable Solutions",
                description: "Built to grow alongside your evolving business needs.",
                number: "04", 
                bgColor: "from-slate-400 to-slate-500",
                iconBg: "bg-white",
                iconColor: "text-slate-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-6 bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.bgColor} rounded-full flex items-center justify-center shadow-xl`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.iconBg} rounded-full flex items-center justify-center`}>
                      {step.number === "03" ? (
                        <span className={`${step.iconColor} text-xs font-bold`}>HELP</span>
                      ) : (
                        <svg className={`w-8 h-8 ${step.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-[#FACC15] rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. RISK MITIGATION & SECURITY SECTION - Enhanced Design */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          {/* Security Shield Animation */}
          <motion.div 
            className="absolute top-10 right-10 w-20 h-20 opacity-5"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <HiShieldCheck className="w-full h-full text-blue-500" />
          </motion.div>
          
          {/* Lock Icons */}
          <motion.div 
            className="absolute bottom-20 left-10 w-16 h-16 opacity-5"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiLockClosed className="w-full h-full text-purple-500" />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Risk Mitigation & <span className="text-yellow-400">Security</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade security and risk mitigation throughout your migration journey
            </p>
          </motion.div>

          {/* Security Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {securityFeatures.map((feature, index) => {
              const gradients = [
                'from-yellow-400/20 to-yellow-400/10',
                'from-blue-400/20 to-blue-400/10',
                'from-green-400/20 to-green-400/10',
                'from-purple-400/20 to-purple-400/10',
                'from-pink-400/20 to-pink-400/10',
                'from-indigo-400/20 to-indigo-400/10'
              ];
              
              const iconColors = [
                'text-yellow-600',
                'text-blue-600',
                'text-green-600',
                'text-purple-600',
                'text-pink-600',
                'text-indigo-600'
              ];

              // Define more visible background colors for confidence dots
              const confidenceColors = [
                'bg-yellow-500',
                'bg-blue-500', 
                'bg-emerald-500',
                'bg-violet-500',
                'bg-rose-500',
                'bg-indigo-500'
              ];
              
              return (
                <motion.div
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Animated background glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon with animated background */}
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mx-auto shadow-lg border ${gradients[index]} mb-6`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotateX: 15,
                        rotateY: 15 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className={`w-8 h-8 ${iconColors[index]}`} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                      {feature.description}
                    </p>
                    
                    {/* AI Confidence Indicator */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                      <span className="text-sm font-medium text-gray-700">AI Confidence:</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-3 h-3 rounded-full ${confidenceColors[index]} shadow-sm`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          />
                        ))}
                        <span className="text-sm font-bold text-gray-800 ml-2">98%</span>
                    </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Security Compliance Badges */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Compliance Ready</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['GDPR', 'HIPAA', 'SOX', 'ISO 27001', 'PCI DSS'].map((compliance, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-gray-700 font-semibold text-sm">{compliance}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
                      
      {/* 5. OUR MIGRATION PROCESS SECTION - Improved Step Visualization */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/5"></div>
          
          {/* Process Flow Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M 0,50 Q 25,25 50,50 T 100,50" stroke="url(#flowGradient)" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Migration Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven 6-step methodology ensuring seamless storage migration with minimal risk
            </p>
          </motion.div>

          {/* Desktop Timeline Layout */}
          <div className="hidden lg:block">
                        <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 rounded-full"></div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-6 gap-4">
                {migrationProcess.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Step Number Circle */}
                    <motion.div 
                      className="relative z-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl mb-6"
                      whileHover={{ scale: 1.1 }}
                      animate={index === activeProcess ? { 
                        scale: [1, 1.1, 1],
                        boxShadow: ['0 0 20px rgba(251, 191, 36, 0.3)', '0 0 40px rgba(251, 191, 36, 0.6)', '0 0 20px rgba(251, 191, 36, 0.3)']
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-black font-bold text-xl">{phase.phase}</span>
                        </motion.div>
                    
                    {/* Process Card */}
                    <motion.div 
                      className={`bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border ${
                        index === activeProcess 
                          ? 'border-yellow-400/50 shadow-xl shadow-yellow-400/20' 
                          : 'border-gray-700/50'
                      } transition-all duration-300 hover:border-yellow-400/50 group hover:-translate-y-2`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <phase.icon className="w-5 h-5 text-yellow-400" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                        {phase.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {phase.description}
                      </p>

                      <p className="text-gray-400 text-xs leading-relaxed">
                        {phase.details}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
                      </div>

          {/* Mobile/Tablet Vertical Layout */}
          <div className="lg:hidden">
                      <motion.div 
              className="space-y-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {migrationProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  variants={{
                    initial: { opacity: 0, x: -30 },
                    whileInView: { opacity: 1, x: 0 }
                  }}
                >
                  {/* Step Number with Connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                      <span className="text-black font-bold">{phase.phase}</span>
                    </div>
                    {index < migrationProcess.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-yellow-400 to-gray-600 mt-4"></div>
                    )}
                  </div>
                  
                  {/* Process Card */}
                  <div className="flex-1 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <phase.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                      <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                  </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {phase.description}
                    </p>
                    
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {phase.details}
                    </p>
                </div>
                </motion.div>
              ))}
                      </motion.div>
                    </div>
                    
          {/* Process Metrics */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { metric: "99.99%", label: "Success Rate", icon: HiCheckCircle },
              { metric: "< 4hrs", label: "Average Downtime", icon: HiLightningBolt },
              { metric: "24/7", label: "Expert Support", icon: HiUserGroup }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. AI-POWERED ANALYTICS SECTION - Updated Coloring */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10"></div>
          
          {/* AI Brain Visualization */}
          <motion.div 
            className="absolute top-10 left-10 w-24 h-24 opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <HiBeaker className="w-full h-full text-cyan-400" />
          </motion.div>

          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            <circle cx="20%" cy="30%" r="3" fill="url(#aiGradient)"/>
            <circle cx="80%" cy="20%" r="2" fill="url(#aiGradient)"/>
            <circle cx="30%" cy="80%" r="4" fill="url(#aiGradient)"/>
            <circle cx="70%" cy="70%" r="2.5" fill="url(#aiGradient)"/>
            <line x1="20%" y1="30%" x2="80%" y2="20%" stroke="url(#aiGradient)" strokeWidth="1"/>
            <line x1="30%" y1="80%" x2="70%" y2="70%" stroke="url(#aiGradient)" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Analytics
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Leverage artificial intelligence to optimize your migration strategy and reduce costs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {aiFeatures.map((feature, index) => {
              const colorSchemes = [
                { 
                  bg: 'from-cyan-500/20 to-cyan-500/10',
                  border: 'border-cyan-400/30',
                  icon: 'bg-cyan-600',
                  gradient: 'hover:shadow-cyan-400/20'
                },
                { 
                  bg: 'from-purple-500/20 to-purple-500/10',
                  border: 'border-purple-400/30',
                  icon: 'bg-purple-600',
                  gradient: 'hover:shadow-purple-400/20'
                },
                { 
                  bg: 'from-pink-500/20 to-pink-500/10',
                  border: 'border-pink-400/30',
                  icon: 'bg-pink-600',
                  gradient: 'hover:shadow-pink-400/20'
                },
                { 
                  bg: 'from-indigo-500/20 to-indigo-500/10',
                  border: 'border-indigo-400/30',
                  icon: 'bg-indigo-600',
                  gradient: 'hover:shadow-indigo-400/20'
                }
              ];
              
              const scheme = colorSchemes[index];
              
              return (
                <motion.div
                  key={index}
                  className={`relative bg-gradient-to-br ${scheme.bg} backdrop-blur-sm rounded-2xl p-8 border ${scheme.border} hover:shadow-2xl ${scheme.gradient} transition-all duration-500 group hover:-translate-y-2`}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5
                  }}
                >
                  {/* Animated background glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${scheme.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon with 3D effect */}
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${scheme.bg} rounded-2xl flex items-center justify-center mx-auto shadow-lg border ${scheme.border}`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotateX: 15,
                        rotateY: 15 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className={`w-8 h-8`} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* AI Confidence Indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xs text-gray-400">AI Confidence:</span>
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full ${scheme.icon.replace('text-', 'bg-')}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">98%</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* AI Performance Metrics */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { metric: "40%", label: "Faster Migration", icon: HiLightningBolt, color: "text-cyan-400" },
              { metric: "85%", label: "Cost Reduction", icon: HiTrendingUp, color: "text-purple-400" },
              { metric: "99.7%", label: "Accuracy Rate", icon: HiSparkles, color: "text-pink-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. MULTI-VENDOR SUPPORT SECTION - Using Actual Assets */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Multi-Vendor <span className="text-yellow-400">Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our Platform-Agnostic Storage Migration Services Support
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {vendorLogos.map((vendor, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  whileInView: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center mx-auto shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/20 border border-gray-700/50 group-hover:border-yellow-400/30">
                  <img 
                    src={vendor.logo} 
                    alt={vendor.alt}
                    className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <p className="text-center text-gray-400 text-sm mt-4 group-hover:text-yellow-400 transition-colors duration-300 font-medium">
                  {vendor.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform Compatibility Note */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HiGlobe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Platform Agnostic Solutions</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're migrating from legacy systems or moving between modern cloud platforms, 
              our expertise spans across all major storage vendors and cloud environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-yellow-400/10 via-yellow-400/5 to-transparent relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/5"></div>
          
          {/* Trust Indicators Animation */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500/10 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl text-center relative z-10">
          <motion.div className="space-y-8" {...fadeInUp}>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">
                <span className="text-yellow-400">Get Your CompuZign</span>{' '}
                <span className="text-white">Customized Data Migration Strategy</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your storage infrastructure? Let our experts design a migration strategy tailored to your business needs.
              </p>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 py-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: HiShieldCheck, text: "99.99% Success Rate" },
                { icon: HiUserGroup, text: "24/7 Expert Support" },
                { icon: HiLightningBolt, text: "Zero Downtime Guarantee" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <item.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                variant="primary" 
                size="lg"
                className="group shadow-2xl"
                onClick={openModal}
              >
                Start Your Migration Journey
                <HiPhone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <motion.div 
              className="pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-400">
                Need immediate assistance? Call us at <span className="text-yellow-400 font-semibold">+1 (904) 685-2138</span>
              </p>
            </motion.div>
            
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