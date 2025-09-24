import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/**
 * OrbitVisual Component - Mobile-responsive orbit design
 * On mobile: Displays as a stacked/grid layout
 * On desktop: Shows animated orbit with rotating rings and floating icons
 */
const OrbitVisual = ({ 
  features = [], 
  centralIcon: CentralIcon, 
  centralTitle = "Security Hub",
  isMobile = false, 
  isTablet = false,
  autoRotate = true,
  rotationInterval = 4000
}) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-switching logic for desktop
  useEffect(() => {
    if (isPaused || isMobile || !autoRotate) return;

    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, rotationInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isMobile, features.length, autoRotate, rotationInterval]);

  // Handle manual icon click
  const handleIconClick = (index) => {
    setActiveFeature(index);
    setIsPaused(true);
    
    // Resume auto-rotation after 8 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentFeature = features[activeFeature] || features[0];

  // Mobile layout - Stacked/Grid design
  if (isMobile) {
    return (
      <motion.div 
        className="w-full max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Central Feature Display */}
        <motion.div
          key={activeFeature}
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 mb-6 text-center backdrop-blur-sm border border-gray-700/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-bgYellow to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <currentFeature.icon className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{currentFeature.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{currentFeature.description}</p>
        </motion.div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === activeFeature
                  ? 'bg-primary-bgYellow/20 border-2 border-primary-bgYellow/50'
                  : 'bg-gray-800/50 border-2 border-gray-700/30 hover:border-gray-600/50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-8 h-8 mx-auto mb-2 ${
                index === activeFeature ? 'text-primary-bgYellow' : 'text-gray-400'
              }`}>
                <feature.icon className="w-full h-full" />
              </div>
              <span className={`text-xs font-medium ${
                index === activeFeature ? 'text-white' : 'text-gray-400'
              }`}>
                {feature.title.split(' ').slice(0, 2).join(' ')}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  }

  // Desktop layout - Orbit design
  return (
    <motion.div 
      className="relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      {/* Main Container */}
      <div className={`relative mx-auto flex items-center justify-center ${
        isTablet ? 'w-96 h-96' : 'w-[480px] h-[480px]'
      }`}>
        
        {/* Outer Rotating Ring */}
        <motion.div
          className={`absolute rounded-full border-2 border-primary-bgYellow/15 ${
            isTablet ? 'w-96 h-96' : 'w-[480px] h-[480px]'
          }`}
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className={`absolute rounded-full border border-gray-500/12 ${
            isTablet ? 'w-72 h-72' : 'w-96 h-96'
          }`}
          animate={{ 
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Central Content Circle */}
        <motion.div
          className={`relative bg-gradient-to-br ${currentFeature.bgColor || 'from-gray-800/25 via-gray-900/15 to-transparent'} rounded-full flex flex-col items-center justify-center border-4 ${currentFeature.borderColor || 'border-primary-bgYellow/60'} backdrop-blur-sm shadow-2xl ${
            isTablet ? 'w-72 h-72 p-8' : 'w-96 h-96 p-12'
          }`}
          key={activeFeature}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: [
              `0 0 30px ${currentFeature.color || '#ffda17'}40`,
              `0 0 50px ${currentFeature.color || '#ffda17'}60`,
              `0 0 30px ${currentFeature.color || '#ffda17'}40`
            ]
          }}
          transition={{ 
            duration: 0.6,
            boxShadow: { 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Central Icon */}
          <motion.div 
            className={`w-20 h-20 ${currentFeature.iconBg || 'bg-primary-bgYellow/20'} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {CentralIcon ? (
              <CentralIcon className="w-10 h-10 text-primary-bgYellow" />
            ) : (
              <currentFeature.icon className="w-10 h-10 text-primary-bgYellow" />
            )}
          </motion.div>

          {/* Central Content */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-3 leading-tight">
              {currentFeature.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              {currentFeature.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Feature Icons around the orbit */}
        {features.map((feature, index) => {
          // Calculate position around the circle
          const angle = (index / features.length) * 360;
          const radius = isTablet ? 180 : 220;
          const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
          const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

          return (
            <motion.button
              key={index}
              onClick={() => handleIconClick(index)}
              className={`absolute w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm border shadow-lg group transition-all duration-300 cursor-pointer ${
                index === activeFeature
                  ? 'bg-gradient-to-br from-primary-bgYellow/90 to-yellow-500/90 border-primary-bgYellow/50 scale-110'
                  : 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-primary-bgYellow/30 hover:scale-105'
              }`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: index === activeFeature ? 1.1 : 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: { delay: 1.2 + index * 0.2, duration: 0.5 },
                scale: { delay: 1.2 + index * 0.2, duration: 0.5 },
                y: { 
                  delay: 2.5 + index * 0.3, 
                  duration: 2 + index * 0.3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: index === activeFeature ? 1.15 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <feature.icon 
                className={`w-8 h-8 ${
                  index === activeFeature ? 'text-black' : 'text-primary-bgYellow'
                }`} 
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-gray-800 px-2 py-1 rounded">
                {feature.title.split(' ').slice(0, 2).join(' ')}
              </div>
            </motion.button>
          );
        })}

        {/* Scanning Animation Lines */}
        {[...Array(isTablet ? 4 : 6)].map((_, i) => (
          <motion.div
            key={`scan-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/40 to-transparent"
            style={{
              width: isTablet ? '70px' : '90px',
              top: `${30 + i * 8}%`,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OrbitVisual; 