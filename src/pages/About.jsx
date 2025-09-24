/*
README - Asset Requirements:
- Hero banner: homeBanner (existing asset)
- Team avatars: team-1.jpg, team-2.jpg, team-3.jpg, team-4.jpg, team-5.jpg, team-6.jpg (600×600px square, 2x retina)
- Trust logos: logo-1.png, logo-2.png, logo-3.png, logo-4.png (300×100px)
- World map background: world-map.svg (optional for locations section)

Placeholder content to replace:
- Team member bios: Replace with actual leadership team information
- Trust logos: Replace with actual client/partner logos
- Team member names and titles: Update with real data
*/

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HiUserGroup, 
  HiTrendingUp, 
  HiGlobe, 
  HiUsers,
  HiLightningBolt,
  HiStar,
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiCog,
  HiChartBar,
  HiHeart,
  HiServer,
  HiCube,
  HiOfficeBuilding,
  HiLocationMarker,
  HiGlobeAlt,
  HiCalendar,
  HiBriefcase,
  HiAcademicCap,
  HiSparkles,
  HiEye,
  HiCloud,
  HiPhone,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiX
} from 'react-icons/hi';
import Button from '../components/common/button';
import StepTimeline from '../components/ui/StepTimeline';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import aboutBanner from '../assets/about-banner.jpg';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';

export default function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  // Service navigation mapping
  const getServiceRoute = (title) => {
    const routeMap = {
      'Resource as a Service (RaaS)': '/raas',
      'Cloud Technology': '/managed-services',
      'Cloud Migration': '/cloud-migration',
      'IT Consulting': '/data-driven-consulting'
    };
    return routeMap[title] || '/services';
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };



  // Data arrays (keeping existing content)
  const stats = [
    { icon: HiStar, number: "25+", label: "Years of Experience", description: "Since 1998" },
    { icon: HiGlobe, number: "3", label: "Countries", description: "Global Presence" },
    { icon: HiUsers, number: "120+", label: "Talent Network", description: "Worldwide" },
    { icon: HiLightningBolt, number: "1000+", label: "Projects Completed", description: "Success Stories" }
  ];

  const expertise = [
    {
      icon: HiCog,
      title: "Support as a Service (SaaS)",
      description: "Comprehensive support operations with ZENfra-powered workflows",
      details: "24/7 monitoring, incident management, and automated resolution workflows powered by our proprietary ZENfra AI platform."
    },
    {
      icon: HiUsers,
      title: "Resource as a Service (RaaS)",
      description: "Flexible talent solutions for cloud, security, data and DevOps",
      details: "Access to specialized talent pools across cloud architecture, cybersecurity, data engineering, and DevOps practices."
    },
    {
      icon: HiCloud,
      title: "Cloud Technology",
      description: "Cutting-edge cloud solutions and managed services",
      details: "Multi-cloud strategy, infrastructure optimization, and cloud-native application development across AWS, Azure, and GCP."
    },
    {
      icon: HiServer,
      title: "Cloud Migration",
      description: "Seamless data center and workload transitions",
      details: "End-to-end migration services including assessment, planning, execution, and optimization with minimal downtime."
    },
    {
      icon: HiShieldCheck,
      title: "IT Consulting",
      description: "Strategic technology consulting and planning",
      details: "Technology roadmapping, digital transformation strategies, and IT governance frameworks tailored to your business needs."
    }
  ];

  const locations = [
    {
      name: "Mandeville, JM",
      type: "Primary",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mandeville%2C+Jamaica",
      description: "Headquarters",
      coordinates: { x: 45, y: 65 } // Percentage position on map
    },
    {
      name: "Jacksonville, FL",
      type: "Secondary",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jacksonville%2C+FL",
      description: "US Operations",
      coordinates: { x: 25, y: 45 }
    },
    {
      name: "Hyderabad, IN",
      type: "Secondary",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hyderabad%2C+Telangana%2C+India",
      description: "India Operations",
      coordinates: { x: 75, y: 55 }
    }
  ];

  const teamMembers = [
    {
      name: "Haniff Tingling",
      location: "Jamaica",
      title: "Director of Engineering – Cloud Technologies & SaaS Platform",
      bio: `With over 25 years of experience in engineering leadership, Haniff specializes in designing and delivering innovative cloud solutions across SaaS platforms. A certified PMP and accredited by Dell, AWS, GCP, and Azure, he brings deep expertise in scalable architectures and enterprise-grade deployments. Beyond technology, Haniff is Passionate about cricket and enjoys traveling to experience Formula 1 races worldwide
      Favorite driver: Lewis "The GOAT" Hamilton and Oscar Piastri.`,
      image: "/src/assets/team-haniff.jpg"
    },
    {
      name: "Vijay Krishnamoorthy",
      location: "India",
      title: "Director of Delivery – Legacy, Cloud, and Application Services (SaaS Platform)",
      bio: "Vijay brings 25 years of proven expertise in delivering complex legacy, cloud, and application transformation projects. As a strategic leader, he ensures seamless execution from planning to deployment, enabling clients to maximize value from their technology investments. His focus on quality, collaboration, and innovation has driven numerous successful global initiatives.",
      image: "/src/assets/team-vijay.jpg"
    }
  ];

  const trustLogos = [
    { name: "AWS", image: "/src/assets/logo-1.png" },
    { name: "Microsoft", image: "/src/assets/logo-2.png" },
    { name: "Google Cloud", image: "/src/assets/logo-3.png" },
    { name: "Cisco", image: "/src/assets/logo-4.png" }
  ];

  // Auto-rotate team carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 6000); // Increased interval for better reading time
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Counter animation trigger
  useEffect(() => {
    if (isStatsInView && !countersStarted) {
      setCountersStarted(true);
    }
  }, [isStatsInView, countersStarted]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Section - Left-aligned layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-16">
        {/* Background Image with Animated Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBanner} 
            alt="About Us Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/40"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-primary-bgYellow text-slate-900 text-sm font-semibold rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                About CompuZign
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Let's Innovate
                <span className="text-primary-bgYellow block">Together</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                With over 25 years expertise, our proven IT SaaS Delivery Model and or 
                {" "}<b>11 / 11</b>{" "}(eleven/eleven) Step-by-Step recovery plan approach not only protect against attackers, but also secure your critical data and ensure operational recovery in hours, not days, not weeks. Saving money, reputation and operational excellence.
              </motion.p>

              {/* Mobile Feature Chips */}
              <motion.div 
                className="flex flex-wrap gap-3 justify-center lg:hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {[
                  { name: "25+ Years Experience", icon: HiStar },
                  { name: "Global Presence", icon: HiGlobe },
                  { name: "Innovation Focus", icon: HiLightningBolt }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 text-primary-bgYellow mr-2" />
                    <span className="text-primary-bgYellow font-bold text-sm">{feature.name}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  className="group shadow-2xl hover:shadow-primary-bgYellow/25"
                  onClick={openModal}
                >
                  Get Started Today
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group shadow-lg hover:shadow-xl"
                  onClick={() => navigate('/partners')}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Wheel (Desktop Only) */}
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us</h3>
                  <div className="space-y-4">
                    {[
                      { name: "25+ Years Experience", icon: HiStar, desc: "Since 1998" },
                      { name: "Global Presence", icon: HiGlobe, desc: "3 Countries" },
                      { name: "Innovation Focus", icon: HiLightningBolt, desc: "AI-Powered" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-lg p-3 mr-4">
                          <feature.icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{feature.name}</h4>
                          <p className="text-gray-300 text-sm">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Our Story + Mission & Vision */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Our Story */}
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-primary-bgYellow">CompuZign</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              IT Services and IT Consulting
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              One stop for all solutions - Solutioning, Consultancy, Migration, Support and Documentation
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 mr-4">
                  <HiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses by providing seamless, reliable IT services that enhance productivity, 
                streamline operations, and foster growth through innovation and dedicated support.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-3 mr-4">
                  <HiEye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A world where businesses of all sizes can leverage top-tier IT solutions without barriers. 
                Through innovation and dedicated support, we aim to be the trusted partner for organizations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact / Stats Section */}
      <section className="py-20 bg-white/5 relative z-10" ref={statsRef}>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Backed by more than 20 years of hands-on experience, we've built a legacy of excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-bgYellow/30 hover:shadow-lg hover:shadow-primary-bgYellow/10 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-2xl p-4 mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-black mx-auto" />
                </div>
                <motion.div 
                  className="text-2xl lg:text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg font-semibold text-primary-bgYellow mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Services Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specializing in cutting-edge block-level data migration service under our PSaaS model
            </p>
          </motion.div>

          {/* Primary Service - SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="relative max-w-xl w-full">
              {/* Primary Service Badge */}
              
              <div className="bg-gradient-to-br from-primary-bgYellow/20 to-yellow-500/10 backdrop-blur-md rounded-3xl p-6 border-2 border-primary-bgYellow/40 hover:border-primary-bgYellow/60 transition-all duration-300 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,218,23,0.3)_0%,transparent_70%)]"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-2xl p-4 mb-4 inline-block">
                    <HiCog className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Support as a Service (SaaS)
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Comprehensive support operations with ZENfra-powered workflows
                  </p>
                  
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    24/7 monitoring, incident management, and automated resolution workflows powered by our proprietary ZENfra AI platform.
                  </p>
                  
                  <Button 
                    variant="primary"
                    size="md"
                    className="bg-primary-bgYellow hover:bg-yellow-400 text-black font-semibold px-6 py-2"
                    onClick={() => navigate('/support-as-a-service')}
                  >
                    Explore SaaS
                    <HiArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-px h-16 bg-gradient-to-b from-primary-bgYellow/60 to-primary-bgYellow/20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-bgYellow rounded-full"></div>
            </div>
          </div>

          {/* Child Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {expertise.slice(1).map((item, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.15) }}
                className="relative group"
              >
                {/* Connector Line for Desktop */}
                <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-px h-8 bg-gradient-to-b from-primary-bgYellow/40 to-transparent group-hover:from-primary-bgYellow/60 transition-colors duration-300"></div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-bgYellow/30 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl p-3 mb-4 inline-block group-hover:from-primary-bgYellow/20 group-hover:to-primary-bgYellow/10 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary-bgYellow" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div 
                    className="flex items-center text-primary-bgYellow text-sm font-medium hover:text-yellow-300 transition-colors cursor-pointer"
                    onClick={() => navigate(getServiceRoute(item.title))}
                  >
                    More Details
                    <HiArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <section className="py-20 bg-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-primary-bgYellow">Peoples</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence in IT services
            </p>
          </motion.div>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Team Avatars */}
              <div className="relative">
                <div className="flex flex-wrap justify-center gap-4">
                  {teamMembers.map((member, index) => (
                    <motion.button
                      key={index}
                      className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                        activeTeamMember === index 
                          ? 'border-primary-bgYellow scale-110 shadow-lg shadow-primary-bgYellow/30' 
                          : 'border-white/30 hover:border-white/60'
                      }`}
                      onClick={() => setActiveTeamMember(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffda17&color=000&size=200`;
                        }}
                      />
                      {activeTeamMember === index && (
                        <motion.div
                          className="absolute inset-0 bg-primary-bgYellow/20 backdrop-blur-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Team Member Details */}
              <motion.div
                key={activeTeamMember}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {teamMembers[activeTeamMember].name}
                  </h3>
                  <span className="px-3 py-1 bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40 rounded-full text-sm font-medium">
                    {teamMembers[activeTeamMember].location}
                  </span>
                </div>
                <p className="text-primary-bgYellow font-semibold mb-4 leading-relaxed">
                  {teamMembers[activeTeamMember].title}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {teamMembers[activeTeamMember].bio}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${activeTeamMember * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-bgYellow">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffda17&color=000&size=200`;
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <span className="px-2 py-1 bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40 rounded-full text-xs font-medium">
                          {member.location}
                        </span>
                      </div>
                      <p className="text-primary-bgYellow font-semibold mb-3 text-sm leading-relaxed">{member.title}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              {/* Mobile Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  onClick={() => setActiveTeamMember(prev => prev > 0 ? prev - 1 : teamMembers.length - 1)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Previous team member"
                >
                  <HiChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setActiveTeamMember(prev => (prev + 1) % teamMembers.length)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Next team member"
                >
                  <HiChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info / StepTimeline */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-blue-800/20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Company Information & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Discover the foundation of our success and the comprehensive capabilities that make CompuZign your trusted technology partner.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            {(() => {
              const companySteps = [
                { step: '01', title: 'Headquarters — Mandeville', description: 'Primary operations center and central hub for all operations.' },
                { step: '02', title: 'Company Type — Self‑Owned', description: 'Independent technology firm, privately held organization.' },
                { step: '03', title: 'Founded — 1998', description: 'Over 25 years of excellence and industry experience.' },
                { step: '04', title: 'Industry — IT Services & Consulting', description: 'Professional technology services, expert consulting and solutions.' },
                { step: '05', title: 'Specialties — SaaS, RaaS, Cloud & Consulting', description: 'IT Consulting, Primary SIEM integration partner, Cloud Technology & Migration, Support as a Service (SaaS), Resource as a Service (RaaS).' }
              ];
              return (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-10 backdrop-blur-sm">
                  <ProcessTimeline steps={companySteps} />
                </div>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* Interactive Locations */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary-bgYellow">Locations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving clients across multiple countries with local expertise
            </p>
          </motion.div>

          {/* Location Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-bgYellow/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl p-3 mr-3">
                    <HiLocationMarker className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      location.type === 'Primary' 
                        ? 'bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40' 
                        : 'bg-gray-700/50 text-gray-300 border border-gray-600/50'
                    }`}>
                      {location.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{location.description}</p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-bgYellow hover:text-yellow-400 transition-colors"
                >
                  Get directions
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-bgYellow/10 to-blue-500/10 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-primary-bgYellow">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're scaling up, consolidating, or future-proofing your IT strategy, 
              our experts take the guesswork out of migration planning and execution.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="primary"
                size="lg"
                className="group shadow-2xl hover:shadow-primary-bgYellow/25"
                onClick={openModal}
              >
                Get Started Today
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="group shadow-lg hover:shadow-xl"
                onClick={() => navigate('/partners')}
              >
                Learn More
                <HiPhone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Logos */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="border-t border-white/10 pt-8"
            >
              <p className="text-gray-400 mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
                {trustLogos.map((logo, index) => (
                  <div key={index} className="h-8 w-20 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white/60 text-xs font-medium">{logo.name}</span>
                  </div>
                ))}
              </div>
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