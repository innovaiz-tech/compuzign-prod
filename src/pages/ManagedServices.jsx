import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiCog,
  HiArrowRight,
  HiPhone,
  HiServer,
  HiCloud,
  HiShieldCheck,
  HiEye,
  HiDatabase,
  HiChartBar,
  HiLightningBolt,
  HiSupport,
  HiGlobe,
  HiUserGroup,
  HiTrendingUp,
  HiCheckCircle,
  HiSparkles,
  HiChip,
  HiClock,
  HiScale,
  HiCurrencyDollar,
  HiDocumentReport,
  HiRefresh,
  HiLockClosed,
  HiCode,
  HiDesktopComputer,
  HiWifi,
  HiBeaker
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import React from 'react';

export default function ManagedServices() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % managedServicesOfferings.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Managed Services Offerings
  const managedServicesOfferings = [
    {
      icon: HiEye,
      title: "Network Operations Center (NOC)",
      description: "Keep your network running smoothly with 24/7 monitoring, fast issue resolution, and clear performance reports.",
      features: ["24/7 Network Monitoring", "Proactive Issue Detection", "Performance Optimization", "Real-time Alerts"],
      color: "#3b82f6",
      link: "/noc"
    },
    {
      icon: HiCloud,
      title: "Cloud Transformation",
      description: "Move to the cloud effortlessly with expert migration, resource optimization, and round-the-clock support.",
      features: ["Cloud Migration", "Resource Optimization", "24/7 Support", "Multi-cloud Management"],
      color: "#10b981",
      link: "/cloud-transformation"
    },
    {
      icon: HiChip,
      title: "AI Data Curation",
      description: "Unlock smarter insights, automate data management, and secure your information with AI-driven solutions.",
      features: ["Data Processing", "AI Analytics", "Automated Management", "Secure Storage"],
      color: "#f59e0b",
      link: "/application-manager"
    },
    {
      icon: HiCog,
      title: "Monitoring & Automation",
      description: "Streamline operations with automated monitoring, predictive analytics, and optimized IT resources.",
      features: ["Automated Monitoring", "Predictive Analytics", "Resource Optimization", "Workflow Automation"],
      color: "#8b5cf6",
      link: "/monitoring-automation"
    },
    {
      icon: HiShieldCheck,
      title: "Security Operations Center (SOC)",
      description: "Stay ahead of cyber threats with real-time monitoring, rapid threat detection, and expert response strategies.",
      features: ["24/7 Security Monitoring", "Threat Detection", "Incident Response", "Compliance Management"],
      color: "#ef4444",
      link: "/soc"
    }
  ];

  // Why Choose CompuZign data
  const whyChooseData = [
    {
      icon: HiLightningBolt,
      title: "Proactive Management",
      description: "Leverage AI-driven workflows to predict, prevent, and resolve issues before they affect your business operations. Stay ahead with continuous monitoring and real-time insights."
    },
    {
      icon: HiTrendingUp,
      title: "Enhanced Efficiency",
      description: "Boost productivity by streamlining your operations through intelligent automation and expert oversight. Simplify complex tasks and free up resources to focus on strategic growth."
    },
    {
      icon: HiScale,
      title: "Scalable Solutions",
      description: "Empower your business with adaptable services designed to evolve with your needs. From startups to enterprises, our solutions ensure scalability without compromising performance."
    }
  ];

  // Benefits of Managed Services
  const benefitsData = [
    {
      icon: HiCurrencyDollar,
      title: "Cost Savings",
      description: "Outsourcing IT management reduces overall expenses, improving efficiency and cutting operational costs."
    },
    {
      icon: HiServer,
      title: "System Reliability",
      description: "Continuous monitoring and proactive management ensure maximum uptime and optimized system performance."
    },
    {
      icon: HiChartBar,
      title: "IT Insights",
      description: "Gain actionable analytics and data-driven insights to continuously refine and drive your IT strategy."
    },
    {
      icon: HiShieldCheck,
      title: "Security & Compliance",
      description: "Strengthen data security and ensure regulatory compliance with constant monitoring and timely updates."
    }
  ];

  // ZENfra AI Features
  const zenfraFeatures = [
    {
      icon: HiEye,
      title: "Proactive Issue Detection",
      description: "ZENfra's AI identifies and addresses potential issues before they impact your operations."
    },
    {
      icon: HiChartBar,
      title: "Data-Driven Decision Making",
      description: "Utilize ZENfra's analytics to enhance strategic planning and operational efficiency."
    },
    {
      icon: HiCog,
      title: "Efficient Resource Management",
      description: "Optimize IT resources and workflows with AI-powered automation and insights."
    }
  ];

  // Cost Optimization Features
  const costOptimizationFeatures = [
    {
      icon: HiCurrencyDollar,
      title: "Lower Operational Costs",
      description: "Reduce labor and resource costs with AI-driven automation and streamlined processes."
    },
    {
      icon: HiLightningBolt,
      title: "Faster Issue Resolution",
      description: "Accelerate problem resolution with predictive analytics and automated monitoring."
    },
    {
      icon: HiScale,
      title: "Scalable Solutions",
      description: "Adapt our services to fit your evolving business needs with flexible, AI-enhanced solutions."
    }
  ];

  // Comprehensive Services Features
  const comprehensiveServices = [
    {
      icon: HiCheckCircle,
      title: "Compatibility & Integration",
      description: "We support a wide range of IT environments, including on-premises, cloud, and hybrid systems, ensuring seamless integration with your existing infrastructure."
    },
    {
      icon: HiCode,
      title: "Tools & Technology Stack",
      description: "CompuZign leverages cutting-edge technologies like ZENfra's AI platform to streamline IT management and enhance operational efficiency."
    },
    {
      icon: HiRefresh,
      title: "Post-Service Optimization",
      description: "Managed services don't end with implementation. Leverage CompuZign's expertise for ongoing monitoring and optimization to keep your IT operations efficient and effective."
    },
    {
      icon: HiGlobe,
      title: "Industries We Serve",
      description: "CompuZign offers managed services across various industries, including healthcare, finance, IT, retail, and more. We ensure compliance with industry regulations and deliver solutions tailored to specific business needs."
    }
  ];

  // Our Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Strategic Assessment & Planning",
      description: "Comprehensive evaluation of your current IT infrastructure, identifying optimization opportunities and developing a customized managed services strategy aligned with your business objectives.",
      icon: HiDocumentReport
    },
    {
      step: "02",
      title: "Implementation & Integration",
      description: "Seamless deployment of managed services solutions with minimal disruption to your operations. Our experts ensure smooth integration with existing systems and workflows.",
      icon: HiCog
    },
    {
      step: "03",
      title: "24/7 Monitoring & Management",
      description: "Round-the-clock monitoring and proactive management of your IT infrastructure using our AI-powered ZENfra platform for optimal performance and security.",
      icon: HiEye
    },
    {
      step: "04",
      title: "Continuous Optimization & Support",
      description: "Ongoing performance analysis, optimization recommendations, and dedicated support to ensure your managed services evolve with your business needs.",
      icon: HiTrendingUp
    }
  ];

  // Client success stories
  const clientStories = [
    {
      company: "Global Healthcare Provider",
      challenge: "Complex multi-location IT infrastructure management",
      solution: "Comprehensive managed services with 24/7 NOC support",
      result: "99.9% uptime achieved with 40% reduction in IT costs",
      industry: "Healthcare",
      slug: "healthcare-provider-managed-services"
    },
    {
      company: "Financial Services Firm",
      challenge: "Security compliance and data protection requirements",
      solution: "Integrated SOC and managed services with AI monitoring",
      result: "100% compliance maintained with zero security incidents",
      industry: "Finance",
      slug: "finance-zero-incidents"
    },
    {
      company: "Manufacturing Enterprise",
      challenge: "Legacy system modernization and cloud migration",
      solution: "Phased cloud transformation with managed support",
      result: "50% improvement in operational efficiency post-migration",
      industry: "Manufacturing",
      slug: "manufacturing-operational-efficiency"
    }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
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
      <ScrollToTop />

      {/* Hero Banner Section */}
      <section ref={heroRef} className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/10 via-transparent to-blue-500/10"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium backdrop-blur-md"
              >
                <HiCog className="w-4 h-4 mr-2" />
                Managed Services Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="block text-white mb-2">Comprehensive Solutions for</span>
                <span className="block text-primary-bgYellow mb-2">Seamless IT Management</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Transform your IT operations with CompuZign's AI-powered managed services. From 24/7 monitoring to cloud transformation, we deliver enterprise-grade solutions that scale with your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="lg" className="group">
                  Get a Customized Quote
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="secondary" size="lg" className="group">
                  <HiPhone className="mr-2 w-5 h-5" />
                  Schedule Free Consultation
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Hub */}
                <div className="relative w-80 h-80 mx-auto">
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary-bgYellow/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Inner rotating ring */}
                  <motion.div
                    className="absolute inset-8 rounded-full border border-blue-400/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Central icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-bgYellow to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                      <HiCog className="w-12 h-12 text-black" />
                    </div>
                  </div>

                  {/* Orbiting service icons */}
                  {managedServicesOfferings.map((service, index) => {
                    const angle = (index * 72) - 90; // 72 degrees apart for 5 services
                    const radius = 140;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className={`absolute w-16 h-16 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          index === activeService 
                            ? 'bg-white shadow-lg scale-110' 
                            : 'bg-gray-800/80 hover:bg-gray-700/80'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 32px)`,
                          top: `calc(50% + ${y}px - 32px)`,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        onClick={() => setActiveService(index)}
                        whileHover={{ scale: 1.1 }}
                      >
                        <service.icon 
                          className={`w-8 h-8 ${
                            index === activeService ? 'text-primary-bgYellow' : 'text-primary-bgYellow'
                          }`}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Service description */}
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {managedServicesOfferings[activeService].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {managedServicesOfferings[activeService].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Managed Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        {/* Beautiful background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/30"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="w-4 h-4 mr-2" />
              Expert Solutions
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Managed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage CompuZign's AI-powered solutions for robust IT management, ensuring reliability and efficiency across your operations. Customized to fit your business's unique needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {managedServicesOfferings.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Improved gradient border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-bgYellow/30 via-blue-400/30 to-primary-bgYellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                      border: `1px solid ${service.color}30`
                    }}
                  >
                    <service.icon 
                      className="w-8 h-8"
                      style={{ color: service.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(service.link)}
                      className="group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300 w-full"
                    >
                      Learn More
                      <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose CompuZign Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary-bgYellow/10 rounded-full blur-3xl"
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
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiUserGroup className="w-4 h-4 mr-2" />
              Your Partner in IT Excellence
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">
              Why Choose CompuZign?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your Partner in IT Excellence
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-primary-bgYellow/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Improved gradient border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-bgYellow/10 via-yellow-400/10 to-primary-bgYellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-bgYellow to-yellow-400 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-bgYellow/25 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-bgYellow transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits of Managed Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        {/* Beautiful background elements */}
        <div className="absolute inset-0">
          {/* Hexagonal pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
              <defs>
                <pattern id="hexagon" width="30" height="26" patternUnits="userSpaceOnUse">
                  <path d="M15 2 L25 8 L25 20 L15 26 L5 20 L5 8 Z" fill="none" stroke="#000" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagon)" />
            </svg>
          </div>
          {/* Floating tech-inspired shapes */}
          <motion.div
            className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-lg blur-xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-lg"
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Key Advantages
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Advantages of Comprehensive IT Management
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Benefits of Managed Services
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Improved hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ZENfra AI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary-bgYellow to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                POWERED BY ZENfra AI
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Optimized Managed Services: ZENfra's Comprehensive Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CompuZign's MANAGED SERVICES POWERED BY ZENfra AI.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {zenfraFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-primary-bgYellow/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Improved hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bgYellow to-orange-500 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-primary-bgYellow/25 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-primary-bgYellow transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cost Optimization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Maximize Efficiency
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Maximize Efficiency and Minimize Expenses
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cost Optimization with ZENfra and CompuZign's Expertise
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {costOptimizationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-pink-50 border border-pink-200 hover:border-purple-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Improved hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bgYellow to-orange-500 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-primary-bgYellow/25 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary-bgYellow to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Complete Coverage
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Integration, Ongoing Optimization, and Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Managed Services for Seamless IT Operations
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {comprehensiveServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary-bgYellow/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Improved hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bgYellow to-orange-500 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary-bgYellow/25 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <service.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 min-h-[3rem] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary-bgYellow/10 rounded-full blur-3xl"
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
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiCog className="w-4 h-4 mr-2" />
              Our Proven Process
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow bg-clip-text text-transparent">
              Our Managed Services Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering comprehensive managed services that scale with your business
            </p>
          </motion.div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiCheckCircle className="w-4 h-4 mr-2" />
              Success Stories
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from organizations that transformed their IT operations with CompuZign
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-bgYellow/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <span className="px-3 py-1 bg-primary-bgYellow/20 text-primary-bgYellow text-xs font-medium rounded-full">
                      {story.industry}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-gray-300">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-gray-300">{story.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Result</h4>
                      <p className="text-primary-bgYellow font-medium">{story.result}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700/50">
                    <Link to={`/case-studies/${story.slug}`} className="flex items-center text-primary-bgYellow font-medium">
                      <span>View Case Study</span>
                      <HiArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 via-transparent to-purple-600/50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Unlock Efficiency, Scalability, and Security
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Transform Your IT Management Today
            </p>

            <p className="text-lg text-blue-200 max-w-4xl mx-auto">
              Take the first step toward seamless IT management with CompuZign's managed services. Empower your business with AI-driven solutions tailored to your unique needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 group flex items-center justify-center"
                onClick={openModal}
              >
                Get Started with CompuZign Today
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/25 flex items-center justify-center"
                onClick={openModal}
              >
                <HiPhone className="mr-2 w-5 h-5" />
                Schedule Free Consultation
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