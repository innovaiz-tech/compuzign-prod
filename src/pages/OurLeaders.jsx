import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiLocationMarker,
  HiAcademicCap,
  HiStar,
  HiHeart
} from 'react-icons/hi';
import leadersBanner from '../assets/leaders-banner.jpg';

export default function OurLeaders() {
  const [activeLeader, setActiveLeader] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const leaders = [
    {
      id: 1,
      name: "Haniff Tingling",
      title: "Director of Engineering – Cloud Technologies & SaaS Platform",
      location: "Jamaica",
      experience: "25+ years",
      image: "/src/assets/team-haniff.jpg",
      bio: "With over 25 years of experience in engineering leadership, Haniff specializes in designing and delivering innovative cloud solutions across SaaS platforms. A certified PMP and accredited by Dell, AWS, GCP, and Azure, he brings deep expertise in scalable architectures and enterprise-grade deployments.",
      funFact: `Passionate about cricket and enjoys traveling to experience Formula 1 races worldwide
      Favorite driver: Lewis "The GOAT" Hamilton and Oscar Piastri.`,
      certifications: ["PMP Certified", "Dell Accredited", "AWS Certified", "GCP Certified", "Azure Certified"],
      specialties: ["Cloud Architecture", "SaaS Platforms", "Scalable Systems", "Enterprise Deployments"]
    },
    {
      id: 2,
      name: "Vijay Krishnamoorthy",
      title: "Director of Delivery – Legacy, Cloud, and Application Services (SaaS Platform)",
      location: "India",
      experience: "25+ years",
      image: "/src/assets/team-vijay.jpg",
      bio: "Vijay brings 25 years of proven expertise in delivering complex legacy, cloud, and application transformation projects. As a strategic leader, he ensures seamless execution from planning to deployment, enabling clients to maximize value from their technology investments.",
      funFact: "His focus on quality, collaboration, and innovation has driven numerous successful global initiatives",
      certifications: ["Strategic Leadership", "Project Management", "Cloud Transformation", "Application Modernization"],
      specialties: ["Legacy Migration", "Cloud Transformation", "Strategic Delivery", "Global Initiatives"]
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveLeader((prev) => (prev + 1) % leaders.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, leaders.length]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const nextLeader = () => {
    setActiveLeader((prev) => (prev + 1) % leaders.length);
    setIsAutoPlaying(false);
  };

  const prevLeader = () => {
    setActiveLeader((prev) => (prev - 1 + leaders.length) % leaders.length);
    setIsAutoPlaying(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,218,23,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,218,23,0.02)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={leadersBanner} 
            alt="Our Leaders Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/40"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-bgYellow/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet Our <span className="text-primary-bgYellow">Leaders</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Experienced visionaries driving innovation and excellence in cloud technologies, 
            with decades of combined expertise in delivering transformative solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
              
              {/* Leader Carousel */}
              <div className="relative">
                <div className="flex justify-center items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLeader}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="relative"
                    >
                      <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-primary-bgYellow/30 shadow-2xl shadow-primary-bgYellow/20 relative group">
                        <img 
                          src={leaders[activeLeader].image} 
                          alt={leaders[activeLeader].name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leaders[activeLeader].name)}&background=ffda17&color=000&size=400`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Floating badges */}
                      <motion.div 
                        className="absolute -top-4 -right-4 bg-primary-bgYellow text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {leaders[activeLeader].experience}
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <HiLocationMarker className="w-4 h-4" />
                        {leaders[activeLeader].location}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex justify-center mt-8 gap-4">
                  <button
                    onClick={prevLeader}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 backdrop-blur-sm border border-white/20"
                    aria-label="Previous leader"
                  >
                    <HiChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextLeader}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 backdrop-blur-sm border border-white/20"
                    aria-label="Next leader"
                  >
                    <HiChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 gap-2">
                  {leaders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveLeader(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        activeLeader === index 
                          ? 'bg-primary-bgYellow scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`View ${leaders[index].name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Leader Details */}
              <motion.div
                key={`details-${activeLeader}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-white">
                    {leaders[activeLeader].name}
                  </h2>
                </div>
                
                <p className="text-primary-bgYellow font-semibold text-lg mb-6 leading-relaxed">
                  {leaders[activeLeader].title}
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {leaders[activeLeader].bio}
                </p>

                {/* Fun Fact */}
                <div className="bg-white/5 rounded-xl p-4 mb-6 border-l-4 border-primary-bgYellow">
                  <div className="flex items-center gap-2 mb-2">
                    <HiHeart className="w-5 h-5 text-primary-bgYellow" />
                    <span className="text-primary-bgYellow font-semibold">Fun Fact</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {leaders[activeLeader].funFact}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <HiStar className="w-5 h-5 text-primary-bgYellow" />
                    <span className="text-white font-semibold">Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leaders[activeLeader].specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HiAcademicCap className="w-5 h-5 text-primary-bgYellow" />
                    <span className="text-white font-semibold">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leaders[activeLeader].certifications.map((cert, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                >
                  {/* Mobile Leader Image */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-6 border-primary-bgYellow/30 shadow-xl shadow-primary-bgYellow/20 mb-4">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=ffda17&color=000&size=400`;
                        }}
                      />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white text-center">{leader.name}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-full text-sm font-medium">
                        {leader.location}
                      </span>
                    </div>
                    
                    <span className="px-4 py-2 bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40 rounded-full text-sm font-bold">
                      {leader.experience}
                    </span>
                  </div>

                  {/* Mobile Leader Details */}
                  <div className="text-center">
                    <p className="text-primary-bgYellow font-semibold mb-4 leading-relaxed">
                      {leader.title}
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    {/* Fun Fact */}
                    <div className="bg-white/5 rounded-xl p-4 mb-6 border-l-4 border-primary-bgYellow text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <HiHeart className="w-4 h-4 text-primary-bgYellow" />
                        <span className="text-primary-bgYellow font-semibold text-sm">Fun Fact</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {leader.funFact}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6 text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <HiStar className="w-4 h-4 text-primary-bgYellow" />
                        <span className="text-white font-semibold text-sm">Specialties</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary-bgYellow/20 text-primary-bgYellow border border-primary-bgYellow/40 rounded-full text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <HiAcademicCap className="w-4 h-4 text-primary-bgYellow" />
                        <span className="text-white font-semibold text-sm">Certifications</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {leader.certifications.map((cert, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-full text-xs font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
