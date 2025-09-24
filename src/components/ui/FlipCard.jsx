import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const FlipCard = ({ title, description, icon: Icon, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      // On mobile, scroll the card into view when clicked
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Mobile layout - static card with all content visible
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className="relative w-full bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        onClick={handleClick}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 rounded-2xl">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #d97706 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Icon className="w-8 h-8 text-white drop-shadow-sm" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

  // Desktop layout - original flipping behavior
  return (
    <motion.div
      ref={ref}
      className="relative w-full h-80 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front of card */}
      <motion.div 
        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-yellow-600/30 flex flex-col items-center justify-center p-8 group hover:shadow-2xl transition-all duration-300 overflow-hidden ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        animate={{ 
          rotateY: isFlipped ? -15 : 0,
          scale: isFlipped ? 0.95 : 1,
          opacity: isFlipped ? 0 : 1
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #d97706 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 5 }}
          >
            <Icon className="w-10 h-10 text-white drop-shadow-sm" />
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 text-center leading-tight group-hover:text-yellow-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </motion.div>

      {/* Back of card */}
      <motion.div 
        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden ${isFlipped ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        animate={{ 
          rotateY: isFlipped ? 0 : 15,
          scale: isFlipped ? 1 : 0.95,
          opacity: isFlipped ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: isFlipped ? 0.1 : 0 }}
      >
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>
        
        <div className="relative z-30 flex flex-col items-center h-full justify-center text-center">
          <motion.div 
            className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg border-2 border-white/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isFlipped ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: isFlipped ? 0.3 : 0, duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-yellow-600 drop-shadow-sm" />
          </motion.div>
          <motion.p 
            className="text-center text-white font-bold leading-relaxed text-base max-w-xs drop-shadow-lg"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.3)' 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: isFlipped ? 0.4 : 0, duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-white/40 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-2 h-2 bg-white/30 rounded-full shadow-md"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard; 