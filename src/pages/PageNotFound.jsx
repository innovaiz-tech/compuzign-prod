import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';

export default function PageNotFound() {
  const controls = useAnimation();

  // Scroll to top when component mounts
  useScrollToTop();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible');
      await controls.start('pulse');
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { 
        repeat: Infinity, 
        repeatType: 'reverse', 
        duration: 2 
      }
    }
  };

  const gearVariants = {
    hidden: { rotate: 0, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    rotate: {
      rotate: 360,
      transition: { 
        repeat: Infinity, 
        duration: 8, 
        ease: 'linear' 
      }
    }
  };

  const hammerVariants = {
    hidden: { rotate: -45, opacity: 0 },
    visible: { 
      rotate: -45, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    swing: {
      rotate: [0, -45],
      transition: { 
        repeat: Infinity, 
        repeatType: 'reverse', 
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <motion.div 
        className="w-full max-w-4xl mx-auto px-4 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex justify-center mb-8"
          variants={childVariants}
        >
          <div className="relative">
            <motion.div 
              className="absolute -left-28 top-4"
              variants={gearVariants}
              animate="rotate"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-primary">
                <path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute -right-24 top-2"
              variants={hammerVariants}
              animate="swing"
              style={{transformOrigin: 'bottom right'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-14 h-14 fill-secondary">
                <path d="M13 19h-2v-8H5v2h2v6H5v2h14v-2h-6v-6h2v-2h-6v6h2v2z" />
                <path d="M18.414 10.414l1.414-1.414-5-5-1.414 1.414 5 5z" />
              </svg>
            </motion.div>

            <motion.div 
              className="bg-primary text-white text-4xl md:text-6xl font-bold py-4 px-6 rounded-lg shadow-lg"
              variants={childVariants}
              animate={['visible', 'pulse']}
            >
              <span className="block">Under Construction</span>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-secondary text-xl mb-8 max-w-2xl mx-auto"
          variants={childVariants}
        >
          We're building something amazing! Our team is working hard to bring you a fantastic experience. Please check back soon.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          variants={childVariants}
        >
          <Link to="/">
            <motion.button 
              className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Return Home
            </motion.button>
          </Link>
          
          <Link to="/contact">
            <motion.button 
              className="bg-white border-2 border-primary text-secondary hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-gray-500 text-sm"
          variants={childVariants}
        >
          <p>© {new Date().getFullYear()} CompuZign. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}