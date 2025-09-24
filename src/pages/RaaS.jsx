import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiUsers, 
  HiClock, 
  HiShieldCheck, 
  HiCurrencyDollar,
  HiLightningBolt,
  HiGlobeAlt,
  HiCode,
  HiDesktopComputer,
  HiDatabase,
  HiCog,
  HiChartBar,
  HiCloud,
  HiSupport,
  HiAcademicCap,
  HiBeaker,
  HiColorSwatch,
  HiCubeTransparent,
  HiArrowRight,
  HiCheckCircle,
  HiPhone
} from 'react-icons/hi';
import Button from '../components/common/button';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import raasBanner from '../assets/raas-banner.png';

export default function RaaS() {
  const [isVisible, setIsVisible] = useState({});
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();

  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Why Choose CompuZign data
  const whyChooseData = [
    {
      icon: HiLightningBolt,
      title: "Rapid Deployment",
      description: "Access skilled professionals in 48-72 hours, not weeks. Our extensive talent network ensures quick project kickoffs."
    },
    {
      icon: HiCurrencyDollar,
      title: "Cost Efficiency",
      description: "Pay only for what you need. Eliminate overhead costs of full-time hiring, training, and benefits."
    },
    {
      icon: HiUsers,
      title: "Global Talent Pool",
      description: "Access 50,000+ pre-vetted professionals across cloud platforms, networking, security, and AI/ML domains."
    },
    {
      icon: HiShieldCheck,
      title: "Quality Assurance",
      description: "All resources undergo rigorous screening and continuous performance monitoring to ensure excellence."
    },
    {
      icon: HiGlobeAlt,
      title: "24/7 Support",
      description: "Round-the-clock support across multiple time zones ensures seamless project continuity."
    },
    {
      icon: HiClock,
      title: "Flexible Engagement",
      description: "Scale resources up or down based on project demands with flexible short-term and long-term options."
    }
  ];

  // How It Works timeline data - Updated for ProcessTimeline
  const howItWorksSteps = [
    {
      step: "01",
      title: "Comprehensive Requirements Analysis",
      description: "Our expert consultants conduct in-depth analysis of your project requirements, technical specifications, skill needs, and timeline constraints. We identify the exact expertise required and define success criteria for optimal resource matching.",
      icon: HiChartBar
    },
    {
      step: "02", 
      title: "AI-Powered Talent Matching & Vetting",
      description: "Our advanced AI platform analyzes our global network of 50,000+ professionals, matching candidates based on technical skills, experience, availability, and cultural fit. Each candidate undergoes rigorous screening and technical assessments.",
      icon: HiUsers
    },
    {
      step: "03",
      title: "Rapid Resource Deployment & Integration",
      description: "Selected resources are seamlessly onboarded and integrated into your team within 48-72 hours. We provide comprehensive orientation, access setup, and ensure smooth collaboration from day one.",
      icon: HiLightningBolt
    },
    {
      step: "04",
      title: "Continuous Project Execution & Monitoring",
      description: "Our dedicated project managers provide ongoing support, performance monitoring, and quality assurance. Regular check-ins, progress tracking, and proactive issue resolution ensure optimal project success and client satisfaction.",
      icon: HiCog
    }
  ];

  // RaaS Roles data
  const raasRoles = [
    {
      category: "Cloud Platforms",
      icon: HiCloud,
      roles: [
        "AWS Solutions Architects",
        "Azure Cloud Engineers", 
        "Google Cloud Specialists",
        "Multi-Cloud Strategists"
      ]
    },
    {
      category: "Networking & Security",
      icon: HiShieldCheck,
      roles: [
        "Network Security Engineers",
        "Cybersecurity Analysts",
        "Firewall Specialists",
        "Zero Trust Architects"
      ]
    },
    {
      category: "AI/ML Deployment",
      icon: HiBeaker,
      roles: [
        "Machine Learning Engineers",
        "Data Scientists",
        "AI Solution Architects",
        "MLOps Engineers"
      ]
    },
    {
      category: "DevOps & Automation",
      icon: HiCog,
      roles: [
        "DevOps Engineers",
        "Infrastructure Automation",
        "CI/CD Pipeline Specialists",
        "Kubernetes Experts"
      ]
    },
    {
      category: "Database & Analytics",
      icon: HiDatabase,
      roles: [
        "Database Administrators",
        "Data Engineers",
        "Business Intelligence Analysts",
        "Big Data Specialists"
      ]
    },
    {
      category: "Software Development",
      icon: HiCode,
      roles: [
        "Full-Stack Developers",
        "Backend Engineers",
        "Frontend Specialists",
        "Mobile App Developers"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={raasBanner} 
            alt="RaaS Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: y1 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl py-8 md:py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 text-sm font-semibold rounded-full mb-6">
              Resource as a Service
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Flexible Talent Solutions for 
              <span className="text-yellow-400 block">IT Demands</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access skilled professionals on-demand with cloud platforms, networking, security, and AI/ML deployment expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="primary" 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 text-lg"
              onClick={openModal}
            >
              <span className="flex items-center">
                Get Started Today
                <HiArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">120+</div>
              <div className="text-sm text-gray-300">Global Talent Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">48-72h</div>
              <div className="text-sm text-gray-300">Deployment Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">16+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose CompuZign Section */}
      <section id="why-choose" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['why-choose'] ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full mb-4"
            >
              Why Choose CompuZign
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Choose CompuZign for RaaS?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Experience the CompuZign advantage with our proven track record of delivering exceptional talent solutions
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['why-choose'] ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Subtle background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/0 to-orange-50/0 group-hover:from-yellow-50/60 group-hover:to-orange-50/40 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300 min-h-[3rem] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Updated to use ProcessTimeline */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined process ensures you get the right talent at the right time
            </p>
          </motion.div>

          <ProcessTimeline steps={howItWorksSteps} />
        </div>
      </section>

      {/* RaaS Roles Section */}
      <section id="raas-roles" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          
          {/* Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
              <defs>
                <pattern id="techGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="#FFD60A"/>
                  <path d="M0 15h30M15 0v30" stroke="#FFD60A" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#techGrid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['raas-roles'] ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Expert Talent Categories
              </span>
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                RaaS Roles We
              </span>
              <span className="block text-yellow-400 mt-2">Provide</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Access specialized professionals across diverse technology domains with proven expertise and industry certifications
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['raas-roles'] ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {raasRoles.map((category, index) => {
              // Define unique gradient colors for each category
              const gradients = [
                { from: 'from-blue-500', to: 'to-cyan-500', iconBg: 'bg-blue-500', iconColor: 'text-white' },
                { from: 'from-green-500', to: 'to-emerald-500', iconBg: 'bg-green-500', iconColor: 'text-white' },
                { from: 'from-purple-500', to: 'to-pink-500', iconBg: 'bg-purple-500', iconColor: 'text-white' },
                { from: 'from-orange-500', to: 'to-red-500', iconBg: 'bg-orange-500', iconColor: 'text-white' },
                { from: 'from-indigo-500', to: 'to-blue-500', iconBg: 'bg-indigo-500', iconColor: 'text-white' },
                { from: 'from-yellow-500', to: 'to-orange-500', iconBg: 'bg-yellow-500', iconColor: 'text-black' },
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group h-full flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700/50 hover:border-yellow-400/30 hover:scale-[1.05] relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Enhanced Icon Section */}
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 ${gradient.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <category.icon className={`w-8 h-8 ${gradient.iconColor} drop-shadow-sm`} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                      {category.category}
                    </h3>
                    
                    {/* Enhanced Role List */}
                    <ul className="space-y-4 flex-grow">
                      {category.roles.map((role, roleIndex) => (
                        <motion.li 
                          key={roleIndex} 
                          className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: roleIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-sm">
                            <HiCheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium leading-relaxed hover:text-yellow-400 transition-colors duration-200">
                            {role}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Don't see the exact role you need? We have access to a broader network of professionals.
            </p>
            <Link to="/case-studies" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25 mx-auto">
              <HiUsers className="w-5 h-5 mr-2" />
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 text-sm font-semibold rounded-full mb-6">
              Ready to Get Started?
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Talk to Us: Get Your CompuZign 
              <span className="text-yellow-400 block">Talent Solution Started</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Transform your IT operations with our flexible Resource as a Service solutions. 
              Connect with our experts today and discover how we can accelerate your projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 text-lg group"
              >
                <a href="tel:+19046852138" className="flex items-center">
                  <HiPhone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule Consultation
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/20">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-white mb-2">US Headquarters</h4>
                <p className="text-gray-300 text-sm">
                  Mandeville, JM<br />
                  IT Services and IT Consulting<br />
                  <a href="tel:+19046852138" className="hover:text-yellow-400 transition-colors">+1 (904) 685-2138</a>
                </p>
              </div>
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                <p className="text-gray-300 text-sm">
                  Initial consultation within 24 hours<br />
                  Resource deployment in 48-72 hours<br />
                  24/7 ongoing support
                </p>
              </div>
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