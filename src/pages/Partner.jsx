import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  HiCube
} from 'react-icons/hi';
import Button from '../components/common/button';
import partnerHeroBg from '../assets/partner-image.jpg';
import partnerBanner from '../assets/partner-banner.png';
import ContactModal from '../components/ui/ContactModal';
import useContactModal from '../hooks/useContactModal';

// Import cloud vendor logos
import awsLogo from '../assets/compute-assets/aws-2.svg';
import azureLogo from '../assets/compute-assets/azure-2.svg';
import googleCloudLogo from '../assets/compute-assets/google-cloud-1.svg';
import ibmCloudLogo from '../assets/compute-assets/ibm-cloud-1.svg';
import vmwareLogo from '../assets/compute-assets/vmware-1.svg';
import oracleLogo from '../assets/compute-assets/oracle-1.svg';
import nutanixLogo from '../assets/compute-assets/nutanix-logo.svg';
import proxmoxLogo from '../assets/compute-assets/proxmox.svg';

// Import vendor logos
import dellEmcLogo from '../assets/cloud-vendors/dell-emc-logo.svg';
import ibmLogo from '../assets/cloud-vendors/ibm.svg';
import netappLogo from '../assets/cloud-vendors/netapp-1.svg';
import hitachiLogo from '../assets/cloud-vendors/hitachi-3.svg';
import dxcLogo from '../assets/cloud-vendors/dxc-technology-1.svg';
import pureStorageLogo from '../assets/cloud-vendors/pure-storage-seeklogo.png';

export default function Partner() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [partnerSectionVisible, setPartnerSectionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const partnerRef = useRef(null);
  const cardsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);

  // Intersection Observer for animations

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    const observers = [
      { ref: partnerRef, setter: setPartnerSectionVisible },
      { ref: cardsRef, setter: setCardsVisible },
      { ref: testimonialsRef, setter: setTestimonialsVisible },
      { ref: partnersRef, setter: setPartnersVisible },
      { ref: ctaRef, setter: setCtaVisible }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      clearTimeout(heroTimer);
      observerInstances.forEach(observer => observer.disconnect());
    };
  }, []);

  // Partner benefits data
  const partnerBenefits = [
    {
      icon: HiLightningBolt,
      title: 'Technical Expertise',
      description: 'Leverage our certified professionals and proven methodologies for successful project delivery.',
      gradient: 'from-yellow-400 to-orange-500',
      delay: 0.1
    },
    {
      icon: HiChartBar,
      title: 'Business Intelligence',
      description: 'Access advanced analytics and reporting tools to make data-driven decisions and optimize your business performance.',
      gradient: 'from-indigo-500 to-purple-700',
      delay: 0.2
    },
    {
      icon: HiServer,
      title: 'Infrastructure Solutions',
      description: 'Comprehensive infrastructure management including cloud migration, hybrid solutions, and scalable architectures.',
      gradient: 'from-cyan-500 to-blue-700',
      delay: 0.3
    },
    {
      icon: HiUsers,
      title: 'Client Retention',
      description: 'Enhance client relationships with comprehensive IT solutions that address their evolving technology needs.',
      gradient: 'from-purple-500 to-pink-700',
      delay: 0.4
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Solutions',
      content: 'Partnering with Compuzign has transformed our business. Their expertise in cloud migration helped us deliver exceptional results to our clients.',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE9t43UR3fZHxjv7w6lgnrOotiXW2jiH64Q&s'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Digital Dynamics',
      content: 'The partnership has been incredibly valuable. Their security solutions and 24/7 support have given us a competitive edge in the market.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, CloudFirst',
      content: 'Compuzign\'s AI infrastructure solutions have helped us stay ahead of the curve. Their team is responsive, knowledgeable, and results-driven.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];


  // Technology partners
  const technologyPartners = [
    { name: 'AWS', logo: awsLogo, category: 'Cloud Computing' },
    { name: 'Microsoft Azure', logo: azureLogo, category: 'Cloud Platform' },
    { name: 'Google Cloud', logo: googleCloudLogo, category: 'Cloud Services' },
    { name: 'IBM Cloud', logo: ibmCloudLogo, category: 'Enterprise Cloud' },
    { name: 'VMware', logo: vmwareLogo, category: 'Virtualization' },
    { name: 'Oracle Cloud', logo: oracleLogo, category: 'Database & Cloud' },
    { name: 'Nutanix', logo: nutanixLogo, category: 'Hyperconverged' },
    { name: 'Proxmox', logo: proxmoxLogo, category: 'Open Source' }
  ];

  const vendorPartners = [
    { name: 'Dell EMC', logo: dellEmcLogo, category: 'Storage & Infrastructure' },
    { name: 'IBM', logo: ibmLogo, category: 'Enterprise Solutions' },
    { name: 'NetApp', logo: netappLogo, category: 'Data Management' },
    { name: 'Hitachi', logo: hitachiLogo, category: 'Storage Systems' },
    { name: 'DXC Technology', logo: dxcLogo, category: 'IT Services' },
    { name: 'Pure Storage', logo: pureStorageLogo, category: 'Flash Storage' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-white px-0 md:px-6 transition-all duration-700 ease-in-out overflow-hidden pt-16 md:pt-20 pb-8 md:pb-16"
      >
        {/* Background Image - spans full width and covers */}
        <div className="absolute inset-0 z-0 w-full">
          <img
            src={partnerBanner}
            alt="Partners Banner"
            className="min-w-[100vw] w-[100vw] h-full object-cover max-w-none"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 60, 0],
                opacity: [0.3, 0.8, 0.5, 0.3],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          className={`bg-black/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-4xl text-center transform transition duration-1000 ease-out z-20 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={heroVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <HiUserGroup className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={heroVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strategic <span className="text-yellow-400">Partnerships</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={heroVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Driving Business Success Through Collaborative Technology Solutions
          </motion.p>
          

        </motion.div>
      </section>

      {/* Why Partner Section */}
      <section ref={partnerRef} className="bg-[#0a0f2c] py-20 px-6">
        <div
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 transform transition-all duration-1000 ease-out ${
            partnerSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={partnerSectionVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={partnerSectionVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <HiGlobe className="w-12 h-12 text-yellow-400 mx-auto md:mx-0" />
            </motion.div>
            
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: 'rgb(255 218 23)' }}
            >
              Why Choose CompuZign as Your Partner
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Join forces with CompuZign to unlock unprecedented growth opportunities. Our strategic partnership program 
              provides you with cutting-edge technology solutions, comprehensive support, and the expertise needed to 
              dominate your market and exceed client expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { icon: HiCheckCircle, text: 'Strategic Partnership' },
                { icon: HiCheckCircle, text: 'Revenue Growth' },
                { icon: HiCheckCircle, text: '24/7 Support' },
                { icon: HiCheckCircle, text: 'Market Leadership' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={partnerSectionVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-yellow-400" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={partnerSectionVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={partnerHeroBg}
              alt="Partnership Illustration"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="bg-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={cardsVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <HiStar className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'rgb(255 218 23)' }}
          >
            Our Experience & Our Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage our comprehensive IT expertise and proven track record to accelerate your business growth and deliver exceptional value to your clients.
          </p>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${benefit.gradient} text-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[300px] flex flex-col justify-between group`}
              initial={{ opacity: 0, y: 50 }}
              animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: benefit.delay }}
              whileHover={{ y: -10 }}
            >
              <div>
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-100 leading-relaxed">{benefit.description}</p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Partners Section */}
      <section ref={partnersRef} className="bg-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={partnersVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <HiServer className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-300">
              We collaborate with leading technology providers to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={partnersVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-center text-white font-semibold mb-2">{partner.name}</h3>
                <p className="text-center text-gray-400 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16">
            <HiCube className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vendor Partners
            </h2>
            <p className="text-xl text-gray-300">
              Strategic partnerships with industry-leading hardware and software vendors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {vendorPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={partnersVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: (index + 8) * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-center text-white font-semibold mb-2">{partner.name}</h3>
                <p className="text-center text-gray-400 text-sm">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="bg-gradient-to-r from-[#1a1f3c] to-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={testimonialsVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <HiHeart className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-300">
              Hear from our successful partners about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="bg-[#0a0f2c] py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={ctaVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <HiUserGroup className="w-16 h-16 text-white mx-auto mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our network of successful partners and start growing your business with 
              cutting-edge technology solutions and unparalleled support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold" onClick={openModal}>
                Start Your Partnership Journey
              </Button>
            </div>
          </motion.div>
        </motion.div>
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
