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
  HiCube,
  HiDatabase,
  HiChip,
  HiScale,
  HiAcademicCap,
  HiPresentationChartLine,
  HiClock,
  HiCurrencyDollar
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import React from 'react';

// Vendor logo imports for AI/HPC platforms
import awsLogo from '../assets/compute-assets/aws-2.svg';
import azureLogo from '../assets/compute-assets/azure-2.svg';
import gcpLogo from '../assets/compute-assets/google-cloud-1.svg';
import ibmLogo from '../assets/compute-assets/ibm-cloud-1.svg';
import oracleLogo from '../assets/compute-assets/oracle-1.svg';
import vmwareLogo from '../assets/compute-assets/vmware-1.svg';

/**
 * AIInfrastructureHPC Component - AI Infrastructure & High-Performance Computing Optimization
 * Comprehensive AI/HPC assessment and optimization services
 */
export default function AIInfrastructureHPC() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  // Auto-rotate AI services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % aiServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate assessment process
  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % assessmentProcess.length);
    }, 4000);
    return () => clearInterval(processInterval);
  }, []);

  // AI/HPC orbit features for banner animation
  const orbitFeatures = [
    { icon: HiServer, title: "AI Training", color: "#8b5cf6" },
    { icon: HiServer, title: "HPC Clusters", color: "#06b6d4" },
    { icon: HiDatabase, title: "Data Processing", color: "#10b981" },
    { icon: HiCube, title: "Inference", color: "#f59e0b" }
  ];

  // AI Infrastructure Services data
  const aiServices = [
    {
      icon: HiServer,
      title: "AI Model Training Infrastructure",
      description: "Specialized infrastructure for training large-scale AI models with optimized compute resources.",
      fullDescription: "CompuZign delivers enterprise-grade AI training infrastructure designed for the most demanding machine learning workloads. Our solutions include:",
      features: [
        "GPU/TPU cluster optimization",
        "Distributed training frameworks", 
        "Model versioning and management",
        "Automated hyperparameter tuning",
        "Resource scaling and load balancing",
        "Training pipeline automation",
        "Cost optimization strategies"
      ],
      fineprint: "We offer industry-leading performance per dollar for AI training workloads.",
      cta: "Get Your AI Training Infrastructure Assessment",
      color: "#8b5cf6",
      featured: true
    },
    {
      icon: HiServer,
      title: "HPC Cluster Design",
      description: "High-performance computing clusters optimized for scientific computing and data-intensive workloads.",
      fullDescription: "From research institutions to enterprise analytics, our HPC solutions deliver maximum performance and efficiency.",
      color: "#06b6d4"
    },
    {
      icon: HiDatabase,
      title: "Data Pipeline Optimization",
      description: "Streamlined data processing pipelines for AI/ML workloads with real-time capabilities.",
      fullDescription: "Optimize your data workflows from ingestion to model serving with our comprehensive pipeline solutions.",
      color: "#10b981"
    },
    {
      icon: HiCube,
      title: "AI Inference Infrastructure",
      description: "Production-ready inference infrastructure for deploying AI models at scale.",
      fullDescription: "Deploy and serve AI models with low latency, high throughput, and cost-effective scaling.",
      color: "#f59e0b"
    }
  ];

  // Why Choose CompuZign for AI/HPC data
  const whyChooseData = [
    {
      icon: HiLightningBolt,
      title: "Performance Optimized",
      description: "AI-optimized infrastructure delivering up to 10x faster training times and 99.9% inference uptime."
    },
    {
      icon: HiSparkles,
      title: "AI-Native Design",
      description: "Infrastructure designed specifically for AI workloads with automated optimization and scaling."
    },
    {
      icon: HiShieldCheck,
      title: "Enterprise Security",
      description: "Bank-grade security with data encryption, access controls, and compliance for sensitive AI workloads."
    },
    {
      icon: HiUserGroup,
      title: "AI Experts",
      description: "Certified AI/ML engineers and HPC specialists with deep expertise in modern AI infrastructure."
    },
    {
      icon: HiTrendingUp,
      title: "Cost Efficiency",
      description: "Up to 60% cost reduction through intelligent resource allocation and workload optimization."
    },
    {
      icon: HiGlobe,
      title: "Multi-Cloud Ready",
      description: "Seamless AI workload deployment across AWS, Azure, Google Cloud, and hybrid environments."
    }
  ];

  // AI Infrastructure Assessment Process
  const assessmentProcess = [
    {
      phase: "1",
      title: "Infrastructure Assessment",
      icon: HiClipboardCheck,
      description: "Comprehensive evaluation of current IT infrastructure for AI readiness and HPC capabilities.",
      details: "Performance analysis, capacity planning, bottleneck identification, and technology stack assessment."
    },
    {
      phase: "2",
      title: "AI Workload Analysis",
      icon: HiServer,
      description: "Deep analysis of AI/ML workloads, training requirements, and inference patterns.",
      details: "Model complexity assessment, resource requirements, scaling needs, and performance optimization opportunities."
    },
    {
      phase: "3",
      title: "Architecture Design",
      icon: HiCog,
      description: "Design of optimized AI infrastructure architecture tailored to specific workloads.",
      details: "Compute resource planning, storage optimization, networking design, and security architecture."
    },
    {
      phase: "4",
      title: "Implementation & Testing",
      icon: HiServer,
      description: "Deployment of AI infrastructure with comprehensive testing and validation.",
      details: "Infrastructure deployment, performance testing, load testing, and optimization tuning."
    },
    {
      phase: "5",
      title: "Optimization & Tuning",
      icon: HiTrendingUp,
      description: "Fine-tuning of AI infrastructure for maximum performance and cost efficiency.",
      details: "Performance optimization, cost analysis, scaling strategies, and continuous improvement."
    },
    {
      phase: "6",
      title: "Monitoring & Support",
      icon: HiEye,
      description: "Ongoing monitoring, maintenance, and support for AI infrastructure operations.",
      details: "Performance monitoring, automated scaling, proactive maintenance, and 24/7 support."
    }
  ];

  // AI-Powered Analytics data
  const aiFeatures = [
    {
      icon: HiChartBar,
      title: "Predictive Scaling",
      description: "AI predicts infrastructure needs and automatically scales resources for optimal performance."
    },
    {
      icon: HiLightningBolt,
      title: "Real-time Optimization",
      description: "Machine learning continuously optimizes resource allocation and workload distribution."
    },
    {
      icon: HiCode,
      title: "Automated Management",
      description: "AI-driven automation for infrastructure provisioning, monitoring, and maintenance."
    },
    {
      icon: HiTrendingUp,
      title: "Cost Optimization",
      description: "Intelligent cost analysis and optimization recommendations for AI infrastructure."
    }
  ];

  // Multi-vendor support data with actual assets
  const vendorLogos = [
    { name: "AWS", logo: awsLogo, alt: "Amazon Web Services" },
    { name: "Azure", logo: azureLogo, alt: "Microsoft Azure" },
    { name: "Google Cloud", logo: gcpLogo, alt: "Google Cloud Platform" },
    { name: "IBM Cloud", logo: ibmLogo, alt: "IBM Cloud" },
    { name: "Oracle Cloud", logo: oracleLogo, alt: "Oracle Cloud" },
    { name: "VMware", logo: vmwareLogo, alt: "VMware" }
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-cyan-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div className="space-y-8" {...bannerFadeInUp}>
                
                {/* Enhanced Badge */}
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400/15 to-purple-400/10 border border-purple-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiServer className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                    AI Infrastructure & HPC Services
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
                    <span className="block text-white mb-2">AI Infrastructure &</span>
                    <span className="block text-purple-400 mb-2 relative">
                      High-Performance Computing
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">Optimization</span>
                  </motion.h1>
                </div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  As AI and machine learning redefine competitive landscapes, the need for robust, scalable infrastructure is paramount. CompuZign's AI Infrastructure and HPC Assessment services deliver a meticulous evaluation of your IT ecosystem, ensuring it's primed for cutting-edge workloads.
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
                    Get Your AI Infrastructure Assessment
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
                  <div className="absolute inset-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-purple-400/50 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center mb-3">
                      {React.createElement(orbitFeatures[activeService].icon, { 
                        className: "w-5 h-5", 
                        style: { color: orbitFeatures[activeService].color }
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {orbitFeatures[activeService].title}
                    </h3>
                    <p className="text-sm text-gray-300 text-center leading-relaxed px-3">
                      {aiServices[activeService].description.substring(0, 80)}...
                    </p>
                  </div>

                  {/* Orbiting Feature Icons */}
                  {orbitFeatures.map((feature, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const isActive = index === activeService;
                    const IconComponent = feature.icon;
                    
                    return (
                      <motion.button
                        key={index}
                        className={`absolute w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'bg-purple-400/90 scale-110 shadow-lg' 
                            : 'bg-gray-700/70 hover:bg-gray-600/70 hover:scale-105'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 28px)`,
                          top: `calc(50% + ${y}px - 28px)`,
                          boxShadow: isActive ? `0 0 20px ${feature.color}60` : undefined
                        }}
                        onClick={() => setActiveService(index)}
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
                    className="absolute top-4 right-4 w-3 h-3 bg-purple-400/60 rounded-full"
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
                    className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400/60 rounded-full"
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

      {/* 2. AI INFRASTRUCTURE SERVICES SECTION - Purple Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-purple-100/30 to-cyan-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              AI Infrastructure Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We architect bespoke infrastructure blueprints tailored for compute-intensive tasks like model training, inference, and large-scale data processing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Featured Service */}
            <motion.div 
              className="lg:col-span-2 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-purple-100"
              {...fadeInUp}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <HiServer className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {aiServices[0].title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {aiServices[0].fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {aiServices[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <HiCheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-purple-700 font-medium">
                      {aiServices[0].fineprint}
                    </p>
                  </div>

                  <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={openModal}>
                    {aiServices[0].cta}
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-2xl p-8 border border-purple-200">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <HiServer className="w-8 h-8 text-purple-500 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">GPU Clusters</span>
                        </div>
                        <span className="text-2xl font-bold text-purple-600">10x</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <HiDatabase className="w-8 h-8 text-cyan-500 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">Data Throughput</span>
                        </div>
                        <span className="text-2xl font-bold text-cyan-600">99.9%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <HiTrendingUp className="w-8 h-8 text-green-500 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">Cost Reduction</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Services */}
            {aiServices.slice(1).map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.fullDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE COMPUZIGN SECTION - Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Why Choose CompuZign for AI Infrastructure
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions prioritize speed, security, and scalability, enabling seamless AI adoption or enterprise-wide expansion.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...staggerChildren}
          >
            {whyChooseData.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. AI INFRASTRUCTURE ASSESSMENT PROCESS SECTION - Dark Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              AI Infrastructure Assessment Process
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              From foundational readiness to future-proof scalability, we build the backbone for your AI-driven success.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400 hidden lg:block"></div>

            <div className="space-y-12">
              {assessmentProcess.map((process, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Phase Number and Icon */}
                    <div className="lg:col-span-2 flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                        <span className="text-white font-bold text-lg">{process.phase}</span>
                      </div>
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                        <process.icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {process.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {process.description}
                      </p>
                      
                      {process.details && (
                        <div className="bg-gray-700/30 rounded-xl p-4">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {process.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI-POWERED ANALYTICS SECTION - Purple Background */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-purple-100/30 to-cyan-50/20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Infrastructure Analytics
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to optimize your infrastructure performance, costs, and operations.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...staggerChildren}
          >
            {aiFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* 7. CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your AI Infrastructure?
            </h2>
            <p className="text-lg lg:text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Get a comprehensive assessment of your AI infrastructure and discover how we can help you achieve maximum performance and cost efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={openModal}>
                <HiPhone className="w-5 h-5 mr-2" />
                Contact Our AI Experts
              </Button>
              <Button variant="primary" size="lg" onClick={openModal}>
                Get Free Assessment
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