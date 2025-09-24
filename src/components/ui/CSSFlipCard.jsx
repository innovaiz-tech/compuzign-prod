import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const CSSFlipCard = ({ title, description, icon: Icon, index }) => {
  const [isFirefox, setIsFirefox] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Detect Firefox for fallback handling
    const userAgent = navigator.userAgent.toLowerCase();
    const isFirefoxBrowser = userAgent.includes('firefox');
    setIsFirefox(isFirefoxBrowser);
    
    // Check if mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Debug log for testing
    if (isFirefoxBrowser) {
      console.log('Firefox detected - using opacity-based flip animation');
    }

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
        className="relative w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl border-2 border-gray-700 p-6 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        onClick={handleClick}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 rounded-2xl">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #ffda17 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow via-yellow-500 to-primary-bgYellow rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Icon className="w-8 h-8 text-black drop-shadow-sm" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
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
      className="flip-card-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // Firefox-specific styles
        ...(isFirefox && {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        })
      }}
    >
              <div className={isFirefox ? "flip-card-firefox" : "flip-card"}>
        <div className={isFirefox ? "flip-card-firefox-inner" : "flip-card-inner"} style={{
          // Firefox uses different approach - no 3D transforms
          ...(isFirefox ? {
            position: 'relative',
            width: '100%',
            height: '100%'
          } : {
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            MozTransformStyle: 'preserve-3d'
          })
        }}>
          {/* Front of card */}
          <div className={isFirefox ? "flip-card-firefox-front" : "flip-card-front"} style={{
            // Firefox-specific opacity-based approach
            ...(isFirefox ? {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isHovered ? 0 : 1,
              transition: 'opacity 0.6s ease-in-out',
              zIndex: isHovered ? 1 : 2
            } : {
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              MozBackfaceVisibility: 'hidden',
              transform: 'rotateY(0deg) translateZ(1px)',
              WebkitTransform: 'rotateY(0deg) translateZ(1px)',
              MozTransform: 'rotateY(0deg) translateZ(1px)'
            })
          }}>
            <div className="h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl border-2 border-gray-700 flex flex-col items-center justify-center p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, #ffda17 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)`
                }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-bgYellow via-yellow-500 to-primary-bgYellow rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-black drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  {title}
                </h3>
                <p className="text-primary-bgYellow text-sm font-medium">
                  Hover to learn more
                </p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className={isFirefox ? "flip-card-firefox-back" : "flip-card-back"} style={{
            // Firefox-specific opacity-based approach
            ...(isFirefox ? {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
              zIndex: isHovered ? 2 : 1
            } : {
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              MozBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(1px)',
              WebkitTransform: 'rotateY(180deg) translateZ(1px)',
              MozTransform: 'rotateY(180deg) translateZ(1px)'
            })
          }}>
            <div className="h-full bg-gradient-to-br from-primary-bgYellow via-yellow-500 to-primary-bgYellow rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
              {/* Subtle background pattern */}
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
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 shadow-lg border-2 border-black/50">
                  <Icon className="w-8 h-8 text-primary-bgYellow drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-center text-black font-bold leading-relaxed text-base" 
                   style={{ 
                     textShadow: '1px 1px 2px rgba(255,255,255,0.3)' 
                   }}>
                  {description}
                </p>
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-black/30 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-2 h-2 bg-black/20 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CSSFlipCard; 