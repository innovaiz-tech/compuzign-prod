import { motion } from 'framer-motion';
import { useCallback } from 'react';

const AnimatedBackground = ({ isMobile }) => {
  const backgroundElements = useCallback(() => {
    if (isMobile) return null;

    return (
      <div className="absolute inset-0 z-5" aria-hidden="true">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary-bgYellow/60 rounded-full"
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

        {/* Network Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-bgYellow/30 to-transparent"
            style={{
              width: '200px',
              top: `${20 + i * 10}%`,
              left: '-200px',
            }}
            animate={{
              x: ['0vw', '120vw'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Data Flow Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute border border-primary-bgYellow/40 rounded-full"
            style={{
              width: '60px',
              height: '60px',
              right: '-60px',
              top: `${15 + i * 15}%`,
            }}
            animate={{
              x: ['-60px', '-120vw'],
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}

        {/* Tech Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 218, 23, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 218, 23, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Professional Data Waves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary-bgYellow/20 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              left: '-100%',
            }}
            animate={{
              x: ['0%', '200%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Hexagonal Tech Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute w-8 h-8 border border-primary-bgYellow/30"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              right: `${10 + i * 20}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Subtle Data Packet Squares */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute bg-primary-bgYellow/40"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${-10 - Math.random() * 20}%`,
            }}
            animate={{
              y: ['0%', '120vh'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${i === 0 ? '#ffda17' : i === 1 ? '#3b82f6' : '#8b5cf6'} 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              x: [0, 50, -25, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }, [isMobile]);

  return backgroundElements();
};

export default AnimatedBackground; 