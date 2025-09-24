import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import ScrollToTop from "../components/ui/ScrollToTop";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import { 
  HiShieldCheck, 
  HiLockClosed, 
  HiEye, 
  HiExclamation, 
  HiLightningBolt, 
  HiUsers, 
  HiClock, 
  HiCheckCircle,
  HiArrowRight,
  HiCog,
  HiLocationMarker,
  HiShieldCheck as HiShield,
  HiChartBar,
  HiGlobeAlt,
  HiServer,
  HiDatabase,
  HiChip,
  HiDeviceMobile,
  HiDesktopComputer,
  HiSparkles,
  HiPhone,
} from 'react-icons/hi';

export default function CyberResilience() {
  const [activeOrbitItem, setActiveOrbitItem] = React.useState(0);
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  const services = [
    {
      title: "Cyber Recovery & Monitoring",
      description: "24/7 monitoring and rapid recovery solutions to ensure business continuity with real-time threat detection",
      icon: HiShield,
      color: "from-blue-500 to-cyan-500",
      link: "/cyber-recovery-monitoring",
      features: ["24/7 SOC Monitoring", "Incident Response", "Recovery Automation", "Threat Intelligence"],
      stats: "99.9% Uptime"
    },
    {
      title: "Disaster Recovery & Business Continuity",
      description: "Comprehensive disaster recovery strategies ensuring minimal downtime and maximum business resilience",
      icon: HiExclamation,
      color: "from-orange-500 to-red-500",
      link: "/disaster-recovery-business-continuity",
      features: ["RTO < 4 Hours", "RPO < 1 Hour", "Automated Failover", "Business Impact Analysis"],
      stats: "< 4hr RTO"
    },
    {
      title: "Extended Threat Detection & Response",
      description: "Advanced AI-powered threat detection and automated response systems for proactive security",
      icon: HiEye,
      color: "from-purple-500 to-pink-500",
      link: "/extended-threat-detection",
      features: ["AI Threat Detection", "Behavioral Analytics", "Automated Response", "Threat Hunting"],
      stats: "95% Threat Detection"
    },
    {
      title: "Privileged Access Management",
      description: "Comprehensive assessment and management of privileged access risks with zero-trust principles",
      icon: HiUsers,
      color: "from-green-500 to-emerald-500",
      link: "/privileged-access-strategies",
      features: ["Zero Trust Access", "PAM Solutions", "Identity Governance", "Access Analytics"],
      stats: "Zero Breach Record"
    },
    {
      title: "Ransomware Response & Recovery",
      description: "Specialized rapid response team ready to contain, investigate, and recover from ransomware attacks",
      icon: HiLockClosed,
      color: "from-red-500 to-pink-500",
      link: "/ransomware-response",
      features: ["Rapid Response Team", "Forensic Analysis", "Data Recovery", "Prevention Strategies"],
      stats: "< 1hr Response Time"
    },
    {
      title: "Vulnerability Assessment & Remediation",
      description: "Proactive identification and remediation of security vulnerabilities with continuous monitoring",
      icon: HiLocationMarker,
      color: "from-indigo-500 to-blue-500",
      link: "/vulnerability-assessment-remediation",
      features: ["Continuous Scanning", "Risk Prioritization", "Automated Patching", "Compliance Reporting"],
      stats: "98% Vulnerability Coverage"
    }
  ];

  const whyChooseUs = [
    {
      icon: HiShieldCheck,
      title: "Enterprise-Grade Security",
      description: "16+ years of cybersecurity expertise protecting Fortune 500 companies with zero-breach track record",
      stat: "Zero Breaches"
    },
    {
      icon: HiCog,
      title: "AI-Powered Defense",
      description: "Advanced AI and machine learning algorithms for predictive threat detection and automated response",
      stat: "95% Threat Detection"
    },
    {
      icon: HiClock,
      title: "24/7 Global SOC",
      description: "Round-the-clock security operations center with expert analysts across 3 countries",
      stat: "24/7 Monitoring"
    },
    {
      icon: HiLightningBolt,
      title: "Rapid Response",
      description: "Industry-leading incident response times with automated containment and recovery procedures",
      stat: "< 1hr Response"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Asset Analysis",
      description: "Deploy our AI-powered ZENfra platform to conduct comprehensive asset discovery, network mapping, and security analytics. Identify all endpoints, vulnerabilities, and potential attack vectors across your entire infrastructure.",
      icon: HiGlobeAlt
    },
    {
      step: "02",
      title: "Risk Assessment & Evaluation",
      description: "Perform thorough security posture evaluation including vulnerability scanning, compliance gap analysis, and threat modeling. Assess current security controls and identify critical areas requiring immediate attention.",
      icon: HiShieldCheck
    },
    {
      step: "03",
      title: "Strategic Planning & Design",
      description: "Develop customized cybersecurity roadmap with detailed implementation plans, security architecture design, and compliance frameworks. Create comprehensive documentation and project timelines.",
      icon: HiCog
    },
    {
      step: "04",
      title: "Security Implementation",
      description: "Execute security measures deployment including advanced threat protection, access controls, monitoring systems, and incident response procedures. Provide continuous oversight and progress tracking.",
      icon: HiLightningBolt
    },
    {
      step: "05",
      title: "Validation & Optimization",
      description: "Conduct comprehensive security testing, penetration testing, and performance validation. Provide staff training, knowledge transfer, and ongoing optimization recommendations.",
      icon: HiCheckCircle
    }
  ];

  const cyberSolutions = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced AI algorithms continuously monitor and detect potential threats in real-time",
      icon: HiCog,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zero-Trust Security Framework",
      description: "Implement comprehensive zero-trust architecture for enhanced security posture",
      icon: HiShield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Incident Response Automation",
      description: "Automated response systems that react instantly to security incidents",
      icon: HiLightningBolt,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated monitoring and reporting",
      icon: HiCheckCircle,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
          
          {/* Floating security particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400/30 rounded-full"
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
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/15 to-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiShieldCheck className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Enterprise Cybersecurity Solutions
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">Cyber Resilience:</span>
                    <span className="block text-primary-bgYellow mb-2 relative">
                      Strengthen Your Defenses
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">Stay Resilient</span>
                  </motion.h1>
                </div>

                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Protect your business with <span className="text-primary-bgYellow font-semibold">AI-powered cybersecurity solutions</span>, 24/7 monitoring, and rapid incident response backed by 16+ years of security expertise.
                </motion.p>

                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={openModal}
                      className="group relative px-8 py-4 bg-primary-bgYellow text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-bgYellow/25"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Secure Your Business
                        <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                    
                    <Link
                      to="#services"
                      className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-primary-bgYellow/50 hover:text-primary-bgYellow transition-all duration-300"
                    >
                      Explore Services
                    </Link>
                  </div>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Right Visual - Enhanced Security Shield - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                
                <div className="relative mx-auto flex items-center justify-center w-96 md:w-96 lg:w-[27rem] h-96 md:h-96 lg:h-[27rem]">
                  
                  {/* Enhanced Central Shield */}
                  <motion.div 
                    className="absolute inset-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full flex flex-col items-center justify-center border-4 border-red-400/50 backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(248, 113, 113, 0.3)",
                        "0 0 40px rgba(248, 113, 113, 0.5)",
                        "0 0 20px rgba(248, 113, 113, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6"
                    >
                      <HiShieldCheck className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-3">
                        {[
                          "Cyber Defense",
                          "Threat Detection", 
                          "Data Protection",
                          "Incident Response",
                          "Access Control"
                        ][activeOrbitItem]}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300 text-center leading-relaxed px-4">
                        {[
                          "AI-powered protection with 24/7 monitoring",
                          "Advanced threat detection and analysis", 
                          "Comprehensive data security solutions",
                          "Rapid incident response and recovery",
                          "Secure access management and control"
                        ][activeOrbitItem]}
                      </p>
                    </div>
                  </motion.div>

                  {/* Enhanced Orbiting Security Icons */}
                  {[
                    { icon: HiShieldCheck, title: "Defense", color: "#ef4444", angle: 0 },
                    { icon: HiEye, title: "Detection", color: "#8b5cf6", angle: 72 },
                    { icon: HiLockClosed, title: "Protection", color: "#3b82f6", angle: 144 },
                    { icon: HiLightningBolt, title: "Response", color: "#f59e0b", angle: 216 },
                    { icon: HiUsers, title: "Access", color: "#10b981", angle: 288 }
                  ].map((item, index) => {
                    const angle = item.angle - 45;
                    const radius = 160;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    const IconComponent = item.icon;
                    const isActive = index === activeOrbitItem;
                    
                    return (
                      <motion.button
                        key={index}
                        className={`absolute w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500 border-2 ${
                          isActive 
                            ? 'bg-gradient-to-br from-red-500 to-red-600 scale-110 shadow-2xl border-white/50' 
                            : 'bg-gradient-to-br from-gray-700/80 to-gray-800/80 hover:scale-105 border-gray-600/50 hover:border-white/30'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                          boxShadow: isActive ? `0 0 25px ${item.color}80, 0 0 50px ${item.color}40` : `0 0 25px ${item.color}60, 0 0 50px ${item.color}30`
                        }}
                        onClick={() => setActiveOrbitItem(index)}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        whileHover={{ scale: isActive ? 1.15 : 1.1 }}
                      >
                        <IconComponent 
                          className="w-5 h-5 drop-shadow-lg" 
                          style={{ color: isActive ? '#fff' : item.color }}
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

      {/* Why Choose CompuZign Cyber Resilience */}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-bgYellow/20 to-primary-bgYellow/10 border border-primary-bgYellow/40 rounded-full text-primary-bgYellow text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiShieldCheck className="w-4 h-4 mr-2" />
              Industry Leadership
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose CompuZign Cyber Resilience?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Advanced AI-Powered Security Solutions
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              CompuZign's cyber resilience solutions combine cutting-edge AI technology with proven security frameworks to deliver comprehensive protection against evolving threats. Our proactive approach ensures your business stays secure, compliant, and operational.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyber Resilience Solutions */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Cyber Resilience Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your digital assets and ensure business continuity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-visible"
              >
                <Link to={service.link}>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-gray-700/50 hover:border-primary-bgYellow/50 h-full">
                    <div className="flex flex-col h-full">
                      {/* Icon and Stats */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div 
                          className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl transition-transform duration-300`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <service.icon size={32} className="text-white" />
                        </motion.div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Performance</div>
                          <div className="text-lg font-bold text-primary-bgYellow">{service.stats}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary-bgYellow transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <HiCheckCircle size={16} className="text-primary-bgYellow mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-primary-bgYellow group-hover:translate-x-1 transition-transform duration-300 font-semibold">
                        <span>Learn More</span>
                        <HiArrowRight size={20} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered ZENfra Platform */}
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
          {/* Animated floating elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-lg rotate-45 blur-sm"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-sm"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-lg rotate-12 blur-sm"></div>
          {/* Circuit-like lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent -rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-bgYellow/10 border border-primary-bgYellow/20 rounded-full text-sm font-medium text-primary-bgYellow mb-6">
              <HiChip className="w-4 h-4 text-primary-bgYellow mr-2" />
              Powered by AI Technology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ZENfra AI Security Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI-driven cybersecurity platform that transforms threat detection and response capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cyberSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary-bgYellow/30"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className={`p-4 bg-gradient-to-br ${solution.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA for ZENfra */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 bg-primary-bgYellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Experience ZENfra Security
              <HiArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Security Implementation Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic, AI-driven approach to building comprehensive cyber resilience for your organization
            </p>
          </motion.div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Security Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from enterprises who trusted CompuZign with their critical cybersecurity needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "Global Financial Institution",
                challenge: "Advanced persistent threat detection",
                result: "Prevented 99.7% of cyber attacks with zero data breaches",
                metric: "Zero Breaches",
                industry: "Financial Services",
                slug: "financial-institution-zero-breaches",
              },
              {
                company: "Healthcare Network",
                challenge: "HIPAA compliance and ransomware protection",
                result: "Achieved 100% compliance with sub-1-hour incident response",
                metric: "100% Compliance",
                industry: "Healthcare",
                slug: "healthcare-100-compliance",
              },
              {
                company: "Manufacturing Enterprise",
                challenge: "Industrial IoT security implementation",
                result: "Secured 10,000+ IoT devices with 24/7 monitoring",
                metric: "10K+ Devices Secured",
                industry: "Manufacturing",
                slug: "manufacturing-10k-devices-secured",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/50 hover:border-primary-bgYellow/50"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-medium">
                      {story.industry}
                    </div>
                    <div className="text-2xl font-bold text-primary-bgYellow">
                      {story.metric}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {story.company}
                    </h3>
                    <p className="text-gray-400 mb-4">{story.challenge}</p>
                    <p className="text-gray-300 font-medium">{story.result}</p>
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
              Ready to Strengthen Your Cyber Defenses?
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of enterprises who trust CompuZign for comprehensive cybersecurity protection. 
              Let's build your cyber resilience together with AI-powered security solutions.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              {[
                { number: "16+", label: "Years Security Expertise" },
                { number: "99.9%", label: "Threat Detection Rate" },
                { number: "24/7", label: "Security Monitoring" },
                { number: "< 1hr", label: "Incident Response" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-black">
                    {stat.number}
                  </div>
                  <div className="text-sm text-black/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Security Assessment
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 flex items-center justify-center"
              >
                <a href="tel:+19046852138" className="flex items-center">
                  <HiPhone className="w-5 h-5 mr-2" />
                  Talk to Security Experts
                </a>
              </Link>
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