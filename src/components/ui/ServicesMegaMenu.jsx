import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { 
  HiUsers,
  HiSupport,
  HiDatabase,
  HiServer,
  HiCloud,
  HiShieldCheck,
  HiRefresh,
  HiEye,
  HiLockClosed,
  HiCode,
  HiCubeTransparent,
  HiChartBar,
  HiDesktopComputer,
  HiSparkles,
  HiCog,
  HiCurrencyDollar,
  HiArrowRight
} from 'react-icons/hi';

const ServicesMegaMenu = ({ onClose }) => {
  const menuRef = useRef(null);

  // Close menu when clicking outside and manage body scroll
  useEffect(() => {
    // Prevent background scroll when menu is open
    document.body.style.overflow = 'hidden';

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // Cleanup function to restore body scroll
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Featured services data
  const featuredServices = [
    {
      title: 'RaaS - Resource as a Service',
      description: 'Flexible talent solutions for IT demands with cloud platforms, networking, security, and AI/ML deployment',
      icon: HiUsers,
      href: '/raas',
      badge: 'Popular',
      gradientFrom: 'from-slate-800',
      gradientTo: 'to-slate-900',
      badgeColor: 'bg-yellow-400 text-slate-900',
      iconColor: 'text-yellow-400',
      textColor: 'text-white',
      hoverTextColor: 'group-hover:text-yellow-300',
      linkColor: 'text-yellow-400 hover:text-yellow-300'
    },
    {
      title: 'Support as a Service (SaaS)',
      description: 'Comprehensive support solutions for seamless IT operations and business continuity',
      icon: HiSupport,
      href: '/support-as-a-service',
      badge: 'Primary',
      gradientFrom: 'from-blue-800',
      gradientTo: 'to-blue-900',
      badgeColor: 'bg-blue-400 text-blue-900',
      iconColor: 'text-blue-300',
      textColor: 'text-white',
      hoverTextColor: 'group-hover:text-blue-300',
      linkColor: 'text-blue-300 hover:text-blue-200'
    }
  ];

  // Service categories data
  const serviceCategories = [
    {
      title: 'Mobility Management',
      description: 'Seamless migration and transformation solutions',
      href: '/mobility-management',
      items: [
        { name: 'Storage Migration', description: 'Migrate data with zero downtime', icon: HiDatabase, href: '/storage-migration' },
        { name: 'Compute Migration', description: 'Server and workload transitions', icon: HiServer, href: '/compute-migration' },
        { name: 'Cloud Migration', description: 'AWS, Azure, Google Cloud expertise', icon: HiCloud, href: '/cloud-migration' }
      ]
    },
    {
      title: 'Cyber Resilience',
      description: 'Advanced security and threat protection',
      href: '/cyber-resilience',
      items: [
        { name: 'Cyber Recovery & Monitoring', description: '24/7 threat detection and response', icon: HiShieldCheck, href: '/cyber-recovery-monitoring' },
        { name: 'Disaster Recovery & Business Continuity', description: 'Business continuity planning', icon: HiRefresh, href: '/disaster-recovery-business-continuity' },
        { name: 'Extended Threat Detection & Response', description: 'Advanced threat hunting and response', icon: HiEye, href: '/extended-threat-detection' },
        { name: 'Privileged Access Risk Assessment', description: 'Secure privileged access management', icon: HiLockClosed, href: '/privileged-access-strategies' }
      ]
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive IT operations support',
      href: '/managed-services',
      items: [
        { name: 'Application Manager', description: 'AI-Powered Data Curation & Management', icon: HiCode, href: '/application-manager' },
        { name: 'Cloud Transformation', description: 'End-to-end cloud adoption', icon: HiCubeTransparent, href: '/cloud-transformation' },
        { name: 'Monitoring & Automation', description: 'Automated infrastructure monitoring', icon: HiChartBar, href: '/monitoring-automation' },
        { name: 'Network Operations Centre', description: 'Infrastructure monitoring & support', icon: HiDesktopComputer, href: '/noc' },
        { name: 'Security Operations Center', description: '24/7 security monitoring and response', icon: HiEye, href: '/soc' }
      ]
    },
    {
      title: 'Data-Driven Consulting',
      description: 'Strategic IT consulting and optimization',
      href: '/data-driven-consulting',
      items: [
        { name: 'AI Infrastructure & HPC Assessment', description: 'High-performance computing solutions', icon: HiSparkles, href: '/ai-infrastructure' },
        { name: 'Application Modernization', description: 'Legacy system modernization', icon: HiRefresh, href: '/app-modernization' },
        { name: 'Automation', description: 'Process automation and optimization', icon: HiCog, href: '/automation' },
        { name: 'Cost Optimization', description: 'Reduce IT operational costs', icon: HiCurrencyDollar, href: '/cost-optimization' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={menuRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 right-0 z-[9998] mt-2"
      role="menu"
      aria-label="Services menu"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50">
          {/* Scrollable Container */}
          <div className="max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
            <div className="px-6 py-4">
              {/* Desktop: Two-column layout, Mobile: Stacked */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column - Featured Services (~30% width on desktop) */}
                <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Featured Solutions
                  </h3>
                  
                  <div className="space-y-4">
                    {featuredServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={index}
                          to={service.href}
                          onClick={onClose}
                          className="group block"
                        >
                          <div className={`bg-gradient-to-r ${service.gradientFrom} via-slate-700 ${service.gradientTo} p-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden border border-slate-600/50`}>
                            {/* Glassmorphic shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                            
                            <div className="relative z-10">
                              <div className="flex items-center space-x-3 mb-3">
                                <IconComponent className={`w-6 h-6 ${service.iconColor} group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300`} />
                                <span className={`px-3 py-1 text-sm font-semibold ${service.badgeColor} rounded-full group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                                  {service.badge}
                                </span>
                              </div>
                              
                              <h4 className={`text-lg font-bold ${service.textColor} mb-2 ${service.hoverTextColor} transition-colors duration-300`}>
                                {service.title}
                              </h4>
                              
                              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                                {service.description}
                              </p>
                              
                              <div className={`inline-flex items-center text-sm font-medium ${service.linkColor} hover:underline transition-all duration-300`}>
                                Learn more
                                <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Right Column - Service Categories (~70% width on desktop) */}
                <motion.div variants={itemVariants} className="lg:col-span-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      All Services
                    </h3>
                  </div>
                  
                  {/* Service Categories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {serviceCategories.map((category, categoryIndex) => (
                      <motion.div
                        key={categoryIndex}
                        variants={itemVariants}
                        className="space-y-4"
                      >
                        {/* Category Header */}
                        <Link
                          to={category.href}
                          onClick={onClose}
                          className="group block hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-lg p-3 -m-3 transition-all duration-200"
                        >
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider group-hover:text-yellow-600 transition-colors duration-200 mb-1">
                            {category.title}
                          </h4>
                          <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                            {category.description}
                          </p>
                        </Link>

                        {/* Category Items */}
                        <div className="space-y-2">
                          {category.items.map((item, itemIndex) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={itemIndex}
                                to={item.href}
                                onClick={onClose}
                                className="group flex items-start space-x-3 p-3 rounded-xl border border-transparent hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:backdrop-blur-md hover:shadow-xl hover:border-white/30 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 ease-out relative overflow-hidden"
                              >
                                {/* Glassmorphic shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                                
                                <div className="flex-shrink-0 relative z-10">
                                  <ItemIcon className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                                <div className="flex-1 min-w-0 relative z-10">
                                  <h5 className="text-sm font-medium text-gray-900 group-hover:text-gray-800 group-hover:font-semibold mb-1 transition-all duration-300">
                                    {item.name}
                                  </h5>
                                  <p className="text-xs text-gray-500 group-hover:text-gray-600 line-clamp-2 transition-colors duration-300">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesMegaMenu; 