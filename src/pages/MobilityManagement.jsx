import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import ScrollToTop from "../components/ui/ScrollToTop";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import {
  HiArrowRight,
  HiCloud,
  HiServer,
  HiDatabase,
  HiChip,
  HiUsers,
  HiClock,
  HiCheckCircle,
  HiShieldCheck,
  HiChartBar,
  HiDatabase as HiHardDrive,
  HiChip as HiCpu,
  HiRefresh,
  HiLocationMarker,
  HiTrendingUp,
  HiCog,
  HiLightningBolt,
  HiGlobeAlt,
  HiChartBar as HiActivity,
  HiSparkles,
  HiPhone,
} from "react-icons/hi";

export default function MobilityManagement() {
  const [activeOrbitItem, setActiveOrbitItem] = React.useState(0);
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  const migrationServices = [
    {
      title: "Storage Migration",
      description:
        "Seamlessly migrate your storage infrastructure with zero data loss and minimal downtime using our proven methodologies.",
      icon: HiHardDrive,
      color: "from-blue-500 to-cyan-500",
      link: "/storage-migration",
      features: [
        "Backup Migration",
        "Block Migration",
        "Containerized Migration",
        "NAS Migration",
      ],
      stats: "99.9% Success Rate",
    },
    {
      title: "Compute Migration",
      description:
        "Transform your compute infrastructure from physical to virtual, cloud, and hybrid environments with expert precision.",
      icon: HiCpu,
      color: "from-green-500 to-emerald-500",
      link: "/compute-migration",
      features: [
        "P2V Migration",
        "P2C Migration",
        "V2C Migration",
        "C2C Migration",
        "V2V Migration",
      ],
      stats: "50% Faster Migration",
    },
    {
      title: "Cloud Migration",
      description:
        "Accelerate your digital transformation with strategic cloud migration services tailored to your business needs.",
      icon: HiCloud,
      color: "from-purple-500 to-pink-500",
      link: "/cloud-migration",
      features: [
        "On-Premises to Cloud",
        "Cloud-to-Cloud",
        "Hybrid Cloud Migration",
      ],
      stats: "60% Cost Reduction",
    },
  ];

  const whyChooseUs = [
    {
      icon: HiUsers,
      title: "Expert Team",
      description:
        "16+ years of experience with certified migration specialists and proven track record across 250+ successful projects",
      stat: "250+ Projects",
    },
    {
      icon: HiLocationMarker,
      title: "Global Reach",
      description:
        "Operating across 3 countries with 24/7 support and localized expertise for seamless international migrations",
      stat: "3 Countries",
    },
    {
      icon: HiClock,
      title: "Minimal Downtime",
      description:
        "Advanced AI-powered planning and execution techniques that reduce business disruption by up to 80%",
      stat: "80% Less Downtime",
    },
    {
      icon: HiShieldCheck,
      title: "Zero Data Loss",
      description:
        "Comprehensive backup and validation processes ensuring 100% data integrity throughout the migration process",
      stat: "100% Data Integrity",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Infrastructure Discovery & Analysis",
      description: "Deploy our AI-powered ZENfra platform for comprehensive asset discovery, dependency mapping, and performance analytics. Catalog all systems, applications, and data flows to create a complete migration blueprint.",
      icon: HiGlobeAlt,
    },
    {
      step: "02",
      title: "Migration Assessment & Planning",
      description: "Conduct detailed workload analysis, performance requirements evaluation, and compatibility assessments. Identify optimal migration paths, resource requirements, and potential challenges for each system component.",
      icon: HiChartBar,
    },
    {
      step: "03",
      title: "Strategic Design & Documentation",
      description: "Develop comprehensive migration strategy with detailed project timelines, resource allocation, and risk mitigation plans. Create centralized documentation and establish communication protocols.",
      icon: HiCog,
    },
    {
      step: "04",
      title: "Migration Execution & Monitoring",
      description: "Execute phased migration with real-time coordination, continuous security monitoring, and progress tracking. Implement automated rollback procedures and maintain 24/7 support throughout the process.",
      icon: HiLightningBolt,
    },
    {
      step: "05",
      title: "Validation & Knowledge Transfer",
      description: "Perform comprehensive performance validation, system testing, and optimization. Provide staff training, knowledge transfer sessions, and ongoing support for the new environment.",
      icon: HiCheckCircle,
    },
  ];

  const migrationTypes = [
    {
      title: "Live Migration",
      pros: ["No downtime", "No changes to OS/application"],
      cons: ["Requires L2 IP network extension"],
      icon: HiActivity,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Warm Migration",
      pros: ["Flexible", "Allows IP changes", "Hardware upgrades"],
      cons: ["Requires downtime"],
      icon: HiRefresh,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Cloud Migration",
      pros: ["Allows IP changes", "Hardware upgrades"],
      cons: ["Extended downtime required"],
      icon: HiCloud,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

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
                ease: "easeInOut",
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
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/15 to-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiLightningBolt className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                    AI-Powered Migration Solutions
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <span className="block text-white mb-2">
                      Mobility Management:
                    </span>
                    <span className="block text-yellow-400 mb-2 relative">
                      Streamlined Solutions
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/60 to-transparent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 1,
                          delay: 1.2,
                          ease: "easeOut",
                        }}
                      />
                    </span>
                    <span className="block text-white text-2xl lg:text-3xl xl:text-4xl">
                      for Every Migration Challenge
                    </span>
                  </motion.h1>
                </div>

                <motion.p
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Transform your IT infrastructure with{" "}
                  <span className="text-yellow-400 font-semibold">
                    seamless migration solutions
                  </span>{" "}
                  powered by AI and backed by 16+ years of expertise across
                  storage, compute, and cloud environments.
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
                        Start Your Migration
                        <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>

                    <Link
                      to="#solutions"
                      className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-300"
                    >
                      Explore Solutions
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Visual - Enhanced Planet Orbit Style - 5 columns */}
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
                        "0 0 20px rgba(251, 191, 36, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                      <HiServer className="w-7 h-7 text-black" />
                    </motion.div>

                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-3">
                        {[
                          "Storage Migration",
                          "Compute Migration", 
                          "Cloud Migration",
                          "Hybrid Solutions"
                        ][activeOrbitItem]}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300 text-center leading-relaxed px-4">
                        {[
                          "Seamless storage migration with zero data loss",
                          "Transform compute infrastructure efficiently", 
                          "Accelerate digital transformation",
                          "Flexible hybrid cloud solutions"
                        ][activeOrbitItem]}
                      </p>
                    </div>
                  </motion.div>

                  {/* Enhanced Orbiting Strategy Icons with Colors */}
                  {[
                    {
                      icon: HiDatabase,
                      title: "Storage",
                      color: "#10b981",
                      angle: 0,
                    },
                    {
                      icon: HiChip,
                      title: "Compute",
                      color: "#3b82f6",
                      angle: 90,
                    },
                    {
                      icon: HiCloud,
                      title: "Cloud",
                      color: "#8b5cf6",
                      angle: 180,
                    },
                    {
                      icon: HiServer,
                      title: "Hybrid",
                      color: "#f59e0b",
                      angle: 270,
                    },
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
                        onClick={() => setActiveOrbitItem(index)}
                        className={`absolute w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500 border-2 ${
                          isActive 
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 scale-110 shadow-2xl border-white/50' 
                            : 'bg-gradient-to-br from-gray-700/80 to-gray-800/80 hover:scale-105 border-gray-600/50 hover:border-white/30'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                          boxShadow: isActive ? `0 0 25px ${item.color}80, 0 0 50px ${item.color}40` : `0 0 25px ${item.color}60, 0 0 50px ${item.color}30`,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        whileHover={{ scale: isActive ? 1.15 : 1.1 }}
                      >
                        <IconComponent
                          className="w-5 h-5 drop-shadow-lg"
                          style={{ color: isActive ? '#000' : item.color }}
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

      {/* Why Choose CompuZign */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white overflow-hidden">
        {/* Beautiful background patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/40"></div>
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="#000"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg blur-xl"
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
            className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-500/20"
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
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-lg"
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
              <HiGlobeAlt className="w-4 h-4 mr-2" />
              Industry Leadership
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose CompuZign Mobility Management?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              AI-Powered Migration Excellence
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              CompuZign's mobility management solutions leverage advanced AI and proven methodologies to ensure seamless, secure, and efficient migrations. Our comprehensive approach minimizes downtime while maximizing performance and scalability.
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
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-green-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden h-full flex flex-col"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Improved hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1 }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
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

      {/* Our Migration Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Migration Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive migration services designed to accelerate your
              digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            {migrationServices.map((service, index) => (
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
                          <div className="text-sm text-gray-500">
                            Success Rate
                          </div>
                          <div className="text-lg font-bold text-primary-bgYellow">
                            {service.stats}
                          </div>
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
                          <div
                            key={idx}
                            className="flex items-center text-gray-300"
                          >
                            <HiCheckCircle
                              size={16}
                              className="text-primary-bgYellow mr-2 flex-shrink-0"
                            />
                            <span className="text-sm font-medium">
                              {feature}
                            </span>
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

      {/* AI-Powered ZENfra Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
        {/* Beautiful background elements */}
        <div className="absolute inset-0">
          {/* Diamond pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" viewBox="0 0 50 50" fill="none">
              <defs>
                <pattern id="diamond" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M12.5 0 L25 12.5 L12.5 25 L0 12.5 Z" fill="none" stroke="#000" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamond)" />
            </svg>
          </div>
          {/* Tech-inspired floating elements */}
          <div className="absolute top-12 right-12 w-24 h-24 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-lg rotate-45 blur-lg"></div>
          <div className="absolute bottom-12 left-12 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-lg"></div>
          <div className="absolute top-2/3 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-lg rotate-12 blur-sm"></div>
          {/* Data flow lines */}
          <div className="absolute top-1/3 left-1/5 w-40 h-0.5 bg-gradient-to-r from-transparent via-green-200/40 to-transparent rotate-30"></div>
          <div className="absolute bottom-1/4 right-1/5 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent -rotate-30"></div>
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
              ZENfra AI Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI-driven migration platform that transforms complex
              infrastructure challenges into streamlined solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HiGlobeAlt,
                title: "Automated Discovery",
                description:
                  "AI-powered asset discovery that maps your entire infrastructure in minutes, not weeks",
                color: "from-blue-500 to-cyan-500",
                stat: "10x Faster",
              },
              {
                icon: HiChartBar,
                title: "Intelligent Analysis",
                description:
                  "Advanced analytics provide actionable insights and predictive recommendations for optimal migration paths",
                color: "from-purple-500 to-pink-500",
                stat: "95% Accuracy",
              },
              {
                icon: HiTrendingUp,
                title: "Cost Optimization",
                description:
                  "Smart resource allocation and planning reduces migration costs while maximizing performance outcomes",
                color: "from-green-500 to-emerald-500",
                stat: "40% Savings",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary-bgYellow/30"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div
                    className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon size={32} className="text-white" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary-bgYellow">
                      {feature.stat}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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
              Experience ZENfra AI
              <HiArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Migration Approaches */}
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
              Migration Approaches
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the optimal migration strategy based on your business
              requirements and infrastructure needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {migrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/50 hover:border-primary-bgYellow/50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 bg-gradient-to-br ${type.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <type.icon size={32} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Best For</div>
                      <div className="text-sm font-semibold text-gray-300">
                        {index === 0
                          ? "Zero Downtime"
                          : index === 1
                          ? "Flexibility"
                          : "Major Upgrades"}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-6">
                    {type.title}
                  </h3>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center">
                        <HiCheckCircle className="w-5 h-5 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {type.pros.map((pro, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-orange-400 font-semibold mb-3 flex items-center">
                        <HiClock className="w-5 h-5 mr-2" />
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {type.cons.map((con, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic, AI-driven approach that ensures successful migration
              outcomes every time
            </p>
          </motion.div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from enterprises who trusted CompuZign with their
              critical migration projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "Global Financial Services",
                challenge: "Legacy data center migration",
                result: "Zero downtime migration of 500+ servers",
                metric: "100% Uptime",
                industry: "Financial Services",
                slug: "global-financial-services-uptime",
              },
              {
                company: "Healthcare Network",
                challenge: "Multi-cloud migration strategy",
                result: "Reduced infrastructure costs by 60%",
                metric: "60% Cost Savings",
                industry: "Healthcare",
                slug: "healthcare-network-cost-savings",
              },
              {
                company: "Manufacturing Giant",
                challenge: "Hybrid cloud transformation",
                result: "Improved performance by 3x",
                metric: "3x Performance",
                industry: "Manufacturing",
                slug: "manufacturing-giant-performance",
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
              Ready to Transform Your Infrastructure?
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Join leading organizations who trust CompuZign for seamless mobility and migration solutions. 
              Let's accelerate your digital transformation with AI-powered expertise.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              {[
                { number: "16+", label: "Years Experience" },
                { number: "99.9%", label: "Success Rate" },
                { number: "24/7", label: "Global Support" },
                { number: "3", label: "Countries" },
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
              <button
                onClick={openModal}
                className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Migration Journey
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              <button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 flex items-center justify-center"
              >
                <span className="flex items-center">
                  <HiPhone className="w-5 h-5 mr-2" />
                  Talk to Migration Experts
                </span>
              </button>
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
