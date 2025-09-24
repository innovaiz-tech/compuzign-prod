import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  HiShieldCheck, 
  HiEye,
  HiLightningBolt,
  HiRefresh,
  HiExclamation,
  HiClock,
  HiLockClosed,
  HiUserGroup
} from 'react-icons/hi';

/**
 * IRRVisualComponent - Enhanced circular layout with automatic switching
 * Features automatic rotation and manual icon click functionality
 */
const IRRVisualComponent = ({ isMobile, isTablet }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Feature data with updated content
  const features = [
    {
      title: "Real-time Threat Detection",
      description: "We intervene live to eliminate threat actors before damage spreads.",
      icon: HiExclamation,
      color: "#f87171",
      bgColor: "from-red-500/25 via-red-400/15 to-transparent",
      borderColor: "border-red-400/60",
      iconBg: "bg-red-500/20"
    },
    {
      title: "Rapid Recovery",
      description: "Automated and manual restoration processes to get your systems back online.",
      icon: HiClock,
      color: "#fde047",
      bgColor: "from-yellow-500/25 via-yellow-400/15 to-transparent",
      borderColor: "border-yellow-400/60",
      iconBg: "bg-yellow-500/20"
    },
    {
      title: "Global Multi-language Support",
      description: "Available 24/7 in 6 languages worldwide, both onsite and remote.",
      icon: HiUserGroup,
      color: "#34d399",
      bgColor: "from-green-500/25 via-green-400/15 to-transparent",
      borderColor: "border-green-400/60",
      iconBg: "bg-green-500/20"
    },
    {
      title: "Security Hardening",
      description: "Reinforce your environment post-recovery to prevent future threats.",
      icon: HiLockClosed,
      color: "#60a5fa",
      bgColor: "from-blue-500/25 via-blue-400/15 to-transparent",
      borderColor: "border-blue-400/60",
      iconBg: "bg-blue-500/20"
    }
  ];

  // Outer floating icons positioned around the circle
  const floatingIcons = [
    { 
      position: { top: '8%', left: '18%' }, 
      index: 0,
      icon: HiExclamation,
      label: 'Detection'
    },
    { 
      position: { top: '15%', right: '12%' }, 
      index: 1,
      icon: HiClock,
      label: 'Recovery'
    },
    { 
      position: { bottom: '15%', right: '18%' }, 
      index: 2,
      icon: HiUserGroup,
      label: 'Support'
    },
    { 
      position: { bottom: '8%', left: '12%' }, 
      index: 3,
      icon: HiLockClosed,
      label: 'Security'
    },
  ];

  // Auto-switching logic
  useEffect(() => {
    if (isPaused || isMobile) return;

    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isMobile, features.length]);

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

  const currentFeature = features[activeFeature];

  return (
    <motion.div 
      className="relative overflow-hidden hero-right-visual"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      
      {/* Main Container - Scaled up by 25% */}
      <div className={`relative mx-auto flex items-center justify-center hero-central-hub ${
        isMobile ? 'w-80 h-80' : isTablet ? 'w-96 h-96' : 'w-[480px] h-[480px]'
      }`}>
        
        {/* Outer Rotating Ring - Scaled up */}
        {!isMobile && (
          <motion.div
            className={`absolute rounded-full border-2 border-red-500/15 ${
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
        )}

        {/* Middle Ring - Scaled up */}
        {!isMobile && (
          <motion.div
            className={`absolute rounded-full border border-primary-bgYellow/12 ${
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
        )}

        {/* Central Content Circle - Scaled up and enhanced */}
        <motion.div
          className={`relative bg-gradient-to-br ${currentFeature.bgColor} rounded-full flex flex-col items-center justify-center border-4 ${currentFeature.borderColor} backdrop-blur-sm shadow-2xl ${
            isMobile ? 'w-56 h-56 p-5' : isTablet ? 'w-72 h-72 p-8' : 'w-96 h-96 p-12'
          }`}
          key={activeFeature} // Force re-render for smooth transitions
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: [
              `0 0 30px ${currentFeature.color}40`,
              `0 0 50px ${currentFeature.color}60`,
              `0 0 30px ${currentFeature.color}40`
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
          {/* Icon - Enhanced size */}
          <motion.div
            className={`${currentFeature.iconBg} rounded-full flex items-center justify-center mb-4 ${
              isMobile ? 'w-12 h-12' : isTablet ? 'w-16 h-16' : 'w-20 h-20'
            }`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <currentFeature.icon 
              className={`${
                isMobile ? 'w-6 h-6' : isTablet ? 'w-8 h-8' : 'w-10 h-10'
              }`}
              style={{ color: currentFeature.color }}
            />
          </motion.div>

          {/* Title - Enhanced typography */}
          <motion.h3 
            className={`font-bold text-white text-center leading-tight mb-4 ${
              isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {currentFeature.title}
          </motion.h3>

          {/* Description - Enhanced typography */}
          <motion.p 
            className={`text-gray-200 text-center leading-relaxed ${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {currentFeature.description}
          </motion.p>

          {/* Progress Indicator */}
          {!isMobile && (
            <motion.div 
              className={`flex gap-2 ${isTablet ? 'mt-6' : 'mt-8'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`${isTablet ? 'w-2 h-2' : 'w-3 h-3'} rounded-full transition-all duration-500 ${
                    index === activeFeature 
                      ? 'scale-150' 
                      : 'scale-100 opacity-40'
                  }`}
                  style={{ 
                    backgroundColor: index === activeFeature ? currentFeature.color : '#ffffff60'
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Floating Icons Around the Circle - Enhanced with glow effects */}
        {!isMobile && floatingIcons.map((item, index) => {
          const isActive = item.index === activeFeature;
          const feature = features[item.index];
          
          return (
            <motion.div
              key={index}
              className={`absolute rounded-xl flex items-center justify-center backdrop-blur-sm border shadow-lg group cursor-pointer transition-all duration-300 ${
                isTablet ? 'w-16 h-16' : 'w-24 h-24'
              } ${
                isActive 
                  ? `border-2 bg-gradient-to-br from-gray-800/90 to-gray-900/90 shadow-2xl` 
                  : 'bg-[#1f2937]/50 hover:bg-[#1f2937]/80 border-gray-700/30 hover:border-primary-bgYellow/50 shadow-md hover:shadow-lg'
              }`}
              style={{ 
                ...item.position,
                borderColor: isActive ? feature.color : undefined,
                boxShadow: isActive 
                  ? `0 0 25px ${feature.color}60, 0 0 50px ${feature.color}30` 
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: isActive ? 1.15 : 1,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { delay: 1.2 + index * 0.2, duration: 0.5 },
                scale: { duration: 0.3 },
                y: { 
                  delay: 2.5 + index * 0.3, 
                  duration: 3 + index * 0.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.2,
                boxShadow: isActive 
                  ? `0 0 30px ${feature.color}70, 0 0 60px ${feature.color}40`
                  : `0 0 20px ${feature.color}40, 0 10px 25px -5px rgba(0, 0, 0, 0.25)`
              }}
              onClick={() => handleIconClick(item.index)}
            >
              {/* Pulsing ring for active icon */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 opacity-60"
                  style={{ borderColor: feature.color }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              
              {/* Subtle glow for non-active icons */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`
                  }}
                />
              )}
              
              <item.icon 
                className={`${
                  isTablet ? 'w-8 h-8' : 'w-12 h-12'
                } transition-all duration-300 ${
                  isActive ? 'drop-shadow-lg' : 'group-hover:drop-shadow-md'
                }`}
                style={{ 
                  color: isActive ? feature.color : '#9CA3AF',
                  filter: isActive ? `drop-shadow(0 0 8px ${feature.color}60)` : undefined
                }}
              />
              
              {/* Enhanced Tooltip */}
              <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap px-3 py-2 bg-gray-900/95 rounded-lg backdrop-blur-sm border shadow-lg ${
                isActive ? 'text-white border-gray-600' : 'text-gray-300 border-gray-700'
              }`}>
                {item.label}
                <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 border-l border-t border-gray-700"></div>
              </div>
            </motion.div>
          );
        })}

        {/* Enhanced Connecting Lines */}
        {/* {!isMobile && [...Array(isTablet ? 4 : 6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent to-transparent"
            style={{
              width: isTablet ? '70px' : '100px',
              top: `${30 + i * 8}%`,
              left: '50%',
              transform: 'translateX(-50%)',
              background: `linear-gradient(90deg, transparent, ${currentFeature.color}40, transparent)`
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))} */}

        {/* Auto-rotation pause indicator */}
        {isPaused && !isMobile && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 bg-gray-900/80 px-3 py-1 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Auto-rotation paused
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default IRRVisualComponent; 