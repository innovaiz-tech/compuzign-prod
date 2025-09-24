import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { HiStar, HiTrendingUp, HiGlobe, HiUserGroup } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
// Import actual client logos from assets
import Client1 from '../../assets/client/client-1.png';
import Client2 from '../../assets/client/client-2.png';
import Client3 from '../../assets/client/client-3.png';
import Client4 from '../../assets/client/client-4.png';
import Client5 from '../../assets/client/client-5.png';

// Memoized Client Card Component for better performance
const ClientCard = memo(({ client, index, isHovered, onHover, onLeave, onClick }) => (
  <motion.div
    className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-2xl hover:border-primary-bgYellow/50 transition-all duration-300 cursor-pointer"
    onMouseEnter={() => onHover(index)}
    onMouseLeave={onLeave}
    whileHover={{ scale: 1.05, y: -5 }}
    onClick={() => onClick(index)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    
    <div className="relative z-10 flex flex-col items-center space-y-3">
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src={client.logo} 
          alt={client.name}
          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="text-center">
        <h4 className="text-xs font-semibold text-white group-hover:text-primary-bgYellow transition-colors">
          {client.name}
        </h4>
        <p className="text-xs text-gray-400 mt-1">{client.industry}</p>
      </div>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-20 pointer-events-none"
        >
          Click to view testimonial
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </motion.div>
      )}
    </div>
  </motion.div>
));

// Memoized Stat Card Component
const StatCard = memo(({ stat, index }) => (
  <motion.div
    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="flex justify-center mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <stat.icon className={`w-5 h-5 ${stat.color}`} />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
    <p className="text-sm font-medium text-gray-300">{stat.label}</p>
  </motion.div>
));

function ClientLogos() {
  const [hoveredClient, setHoveredClient] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Memoized client data to prevent unnecessary re-renders
  const clients = useMemo(() => [
    { 
      name: 'Whitney Corporation', 
      logo: Client1, 
      industry: 'Technology',
      testimonial: 'CompuZign transformed our IT infrastructure with seamless migration.',
      rating: 5
    },
    { 
      name: 'Stream Innovations', 
      logo: Client2, 
      industry: 'Healthcare',
      testimonial: 'Outstanding cloud transformation and 24/7 support services.',
      rating: 5
    },
    { 
      name: 'Sonexus Global', 
      logo: Client3, 
      industry: 'Finance',
      testimonial: 'Reliable cybersecurity solutions that protect our critical data.',
      rating: 5
    },
    { 
      name: 'Balfour Industries', 
      logo: Client4, 
      industry: 'Manufacturing',
      testimonial: 'Exceptional managed services with proactive monitoring.',
      rating: 5
    },
    { 
      name: 'Senior Care Solutions', 
      logo: Client5, 
      industry: 'Healthcare',
      testimonial: 'Comprehensive IT support that scales with our growing needs.',
      rating: 5
    }
  ], []);

  // Memoized stats to prevent unnecessary re-renders
  const stats = useMemo(() => [
    { icon: HiUserGroup, value: '500+', label: 'Satisfied Clients', color: 'text-blue-500' },
    { icon: HiTrendingUp, value: '99.9%', label: 'Uptime Guarantee', color: 'text-green-500' },
    { icon: HiGlobe, value: '50+', label: 'Countries Served', color: 'text-purple-500' },
    { icon: HiStar, value: '4.9/5', label: 'Client Rating', color: 'text-yellow-500' }
  ], []);

  // Optimized auto-rotate with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  // Memoized callbacks to prevent unnecessary re-renders
  const handleClientHover = useCallback((index) => setHoveredClient(index), []);
  const handleClientLeave = useCallback(() => setHoveredClient(null), []);
  const handleSlideChange = useCallback((index) => setCurrentSlide(index), []);

  // Memoized current client to prevent object recreation
  const currentClient = useMemo(() => clients[currentSlide], [clients, currentSlide]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Optimized Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-bgYellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-bgYellow/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-bgYellow/10 px-4 py-2 rounded-full mb-4">
            <HiStar className="w-5 h-5 text-primary-bgYellow" />
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Trusted Worldwide</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Trusted by Industry 
            <span className="text-primary-bgYellow"> Leaders</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking companies who trust CompuZign to power their digital transformation and drive measurable business results.
          </p>
        </motion.div>

        {/* Interactive Client Showcase */}
        <div className="mb-20">
          {/* Main Featured Client */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 lg:p-8 mb-10 relative overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Optimized shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-bgYellow/5 to-transparent -translate-x-full animate-pulse pointer-events-none" aria-hidden="true"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <div className="flex space-x-1" role="img" aria-label="5 star rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-300">5.0 Rating</span>
                </div>
                
                <blockquote className="text-xl lg:text-2xl font-medium text-white mb-6 leading-relaxed">
                  "{currentClient.testimonial}"
                </blockquote>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center p-2">
                    <img 
                      src={currentClient.logo} 
                      alt={`${currentClient.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{currentClient.name}</h4>
                    <p className="text-sm text-gray-300">{currentClient.industry} Industry</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-bgYellow/30 to-primary-bgYellow/10 rounded-2xl flex items-center justify-center p-6 max-w-sm mx-auto">
                  <motion.img 
                    key={currentSlide}
                    src={currentClient.logo}
                    alt={`${currentClient.name} featured logo`}
                    className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Slide indicators */}
                <div className="flex justify-center space-x-2 mt-6" role="tablist" aria-label="Client testimonial slides">
                  {clients.map((client, index) => (
                    <button
                      key={client.name}
                      onClick={() => handleSlideChange(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary-bgYellow scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      role="tab"
                      aria-selected={index === currentSlide}
                      aria-label={`View ${client.name} testimonial`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Optimized Client Logos Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {clients.map((client, index) => (
              <ClientCard
                key={client.name}
                client={client}
                index={index}
                isHovered={hoveredClient === index}
                onHover={handleClientHover}
                onLeave={handleClientLeave}
                onClick={handleSlideChange}
                currentSlide={currentSlide}
              />
            ))}
          </motion.div>
        </div>

        {/* Optimized Statistics Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Optimized Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-bgYellow via-yellow-400 to-primary-bgYellow rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-base text-gray-800 mb-6 max-w-2xl mx-auto">
              Transform your business with proven IT solutions trusted by industry leaders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => navigate('/contact')}
              >
                Start Your Project Today
              </motion.button>
              <motion.a 
                className="bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/case-studies"
              >
                View Case Studies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Export memoized component for better performance
export default memo(ClientLogos); 