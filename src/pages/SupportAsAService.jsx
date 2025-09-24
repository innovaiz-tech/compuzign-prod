import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';
import { 
  HiSupport,
  HiClock,
  HiShieldCheck,
  HiCog,
  HiDesktopComputer,
  HiPhone,
  HiChartBar,
  HiUsers,
  HiLightningBolt,
  HiGlobeAlt,
  HiCurrencyDollar,
  HiDatabase,
  HiCloud,
  HiArrowRight,
  HiCheckCircle,
  HiTicket,
  HiEye,
  HiRefresh,
  HiDocumentReport,
  HiUserGroup,
  HiAcademicCap,
  HiBeaker,
  HiCubeTransparent
} from 'react-icons/hi';
import Button from '../components/common/button';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import saasBanner from '../assets/saas-banner.png';
import saasImage from '../assets/saas-image.png';

export default function SupportAsAService() {
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

  // What We Offer data
  const serviceOfferings = [
    {
      icon: HiSupport,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance with expert support engineers available across all time zones."
    },
    {
      icon: HiEye,
      title: "Proactive Monitoring",
      description: "Continuous system monitoring with real-time alerts and automated incident detection."
    },
    {
      icon: HiTicket,
      title: "Advanced Ticketing System",
      description: "Streamlined ticket management with priority-based routing and automated escalation."
    },
    {
      icon: HiDesktopComputer,
      title: "Remote Desktop Support",
      description: "Secure remote access for quick issue resolution and system maintenance."
    },
    {
      icon: HiDatabase,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with rapid disaster recovery capabilities."
    },
    {
      icon: HiShieldCheck,
      title: "Security Management",
      description: "Comprehensive security monitoring, threat detection, and vulnerability management."
    },
    {
      icon: HiCloud,
      title: "Cloud Infrastructure Support",
      description: "Expert support for AWS, Azure, and Google Cloud platforms with optimization."
    },
    {
      icon: HiDocumentReport,
      title: "Performance Reporting",
      description: "Detailed analytics and reporting on system performance and support metrics."
    },
    {
      icon: HiUserGroup,
      title: "User Management",
      description: "Complete user lifecycle management including onboarding and access control."
    }
  ];

  // Why Choose CompuZign data
  const whyChooseData = [
    {
      icon: HiLightningBolt,
      title: "Rapid Response Time",
      description: "Average response time of under 15 minutes for critical issues with dedicated support teams."
    },
    {
      icon: HiUsers,
      title: "Expert Support Team",
      description: "Certified professionals with deep expertise across multiple technology stacks and platforms."
    },
    {
      icon: HiCurrencyDollar,
      title: "Cost-Effective Solutions",
      description: "Reduce IT operational costs by up to 40% with our comprehensive support services."
    },
    {
      icon: HiGlobeAlt,
      title: "Global Coverage",
      description: "24/7 support across multiple time zones with local language support capabilities."
    },
    {
      icon: HiChartBar,
      title: "Proactive Approach",
      description: "Prevent issues before they impact your business with predictive monitoring and maintenance."
    },
    {
      icon: HiShieldCheck,
      title: "Enterprise Security",
      description: "Bank-level security protocols with compliance to industry standards and regulations."
    }
  ];

  // Support Workflow steps - Updated for ProcessTimeline
  const workflowSteps = [
    {
      step: "01",
      title: "Issue Detection & Alert Generation",
      description: "Our automated monitoring systems continuously scan your infrastructure, detecting anomalies and issues in real-time. Multiple channels including email, chat, and phone ensure support requests are captured immediately.",
      icon: HiEye
    },
    {
      step: "02",
      title: "Intelligent Ticket Creation & Routing",
      description: "Advanced AI algorithms automatically create tickets with priority assignment based on severity and business impact. Smart routing ensures the right expert receives the ticket for optimal resolution time.",
      icon: HiTicket
    },
    {
      step: "03",
      title: "Expert Assignment & Initial Response",
      description: "Our AI-powered matching system assigns the most qualified engineer based on technical expertise, availability, and past performance. Initial response begins within 15 minutes for critical issues.",
      icon: HiUsers
    },
    {
      step: "04",
      title: "Rapid Issue Resolution & Implementation",
      description: "Certified engineers utilize advanced diagnostic tools, secure remote access, and proven methodologies to resolve issues efficiently. Real-time collaboration ensures complex problems are solved quickly.",
      icon: HiCog
    },
    {
      step: "05",
      title: "Quality Assurance & Validation Testing",
      description: "Comprehensive testing and validation procedures ensure complete issue resolution. Performance metrics are monitored to confirm system stability and optimal functionality before closure.",
      icon: HiCheckCircle
    },
    {
      step: "06",
      title: "Documentation & Proactive Follow-up",
      description: "Detailed incident reports are generated with root cause analysis and preventive recommendations. Proactive follow-up ensures long-term system health and prevents future occurrences.",
      icon: HiDocumentReport
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
            src={saasBanner} 
            alt="Support as a Service Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
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
            <span className="inline-block px-4 py-2 bg-blue-400 text-blue-900 text-sm font-semibold rounded-full mb-6">
              Support as a Service
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Focus on Your Business
              <span className="text-blue-400 block">Leave IT to the Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            You wouldn’t take your car to a plumber—so why handle IT on your own?
            Your business isn’t IT, but it’s ours. Bad actors know the risks—don’t let them win.
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
              className="bg-blue-400 hover:bg-blue-500 text-blue-900 font-semibold px-8 py-4 text-lg"
            >
              Start with CompuZign
              <HiArrowRight className="ml-2 w-5 h-5" />
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
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">&lt;15min</div>
              <div className="text-sm text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['what-we-offer'] ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive IT support services designed to keep your business operations running smoothly
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['what-we-offer'] ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Subtle background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 min-h-[3rem] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose CompuZign Section */}
      <section id="why-choose" className="py-20 bg-white relative overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible['why-choose'] ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Choose CompuZign for IT Support?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Experience the CompuZign difference with our proven expertise and commitment to excellence
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
                className="group h-full flex flex-col bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Improved background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/60 group-hover:to-blue-50/40 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 min-h-[3rem] flex items-center">
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

      {/* Support Workflow Section - Updated to use ProcessTimeline */}
      <section id="support-workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Support Workflow
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined support process ensures rapid issue resolution and minimal downtime
            </p>
          </motion.div>

          <ProcessTimeline steps={workflowSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-blue-400 text-blue-900 text-sm font-semibold rounded-full mb-6">
                Ready to Get Started?
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Transform Your IT Support with 
                <span className="text-blue-400 block">CompuZign SaaS</span>
              </h2>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join hundreds of businesses that trust CompuZign for their IT support needs. 
                Get started today and experience the difference expert support makes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-blue-400 hover:bg-blue-300 text-blue-900 font-semibold px-8 py-4 text-lg group"
                  onClick={openModal}
                >
                  <span className="flex items-center">
                    <HiPhone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Talk to Us
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                  onClick={openModal}
                >
                  Schedule Demo
                  <HiArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-white">
                  <HiCheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center text-white">
                  <HiCheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center text-white">
                  <HiCheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm">No Setup Fees</span>
                </div>
                <div className="flex items-center text-white">
                  <HiCheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm">Scalable Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src={saasImage} 
                  alt="Support as a Service" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>
          </div>
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