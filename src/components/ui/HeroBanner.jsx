import { motion } from 'framer-motion';
import Button from '../common/button';
import homeBanner from '../../assets/home_banner.png';
import useContactModal from '../../hooks/useContactModal';
import ContactModal from './ContactModal';
import { useNavigate } from 'react-router-dom';

export default function HeroBanner() {
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          <img
            src={homeBanner}
            alt="Technology Solutions Background"
            className="w-full h-full object-cover"
          />
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 hero-bg-overlay"></div>
        </div>

        {/* Impressive Animated Tech Background */}
        <div className="absolute inset-0 z-5">
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
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
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Headline */}
            <h1 className="hero-title font-bold text-white leading-tight text-center">
              Transforming Your IT Landscape with{' '}
              <span className="text-primary-bgYellow text-highlight">Expert Solutions</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
              Building the Future with Expertise and Innovation. Empowering businesses
              <br className="hidden sm:block" />
              by providing seamless, reliable IT services that enhance productivity,
              <br className="hidden sm:block" />
              streamline operations, and foster growth
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 lg:pt-8">
              <Button
                variant="primary"
                size="lg"
                className="bg-primary-bgYellow text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                onClick={openModal}
              >
                Book a Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => navigate('/partners')}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Tech Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-primary-bgYellow/30 rounded-full tech-pulse"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-2 border border-primary-bgYellow/20 rounded-full">
              <div className="absolute inset-2 bg-primary-bgYellow/10 rounded-full blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-white/20 rounded-full"
            animate={{
              rotate: [360, 0],
              y: [20, -20, 20],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="absolute inset-1 bg-white/5 rounded-full blur-md"></div>
          </motion.div>

          {/* Pulse Rings */}
          <motion.div
            className="absolute top-1/2 left-1/3 w-32 h-32"
            animate={{
              scale: [0.8, 1.5, 0.8],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <div className="w-full h-full border border-primary-bgYellow/40 rounded-full"></div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
          <p className="text-white/70 text-sm mt-2">Scroll</p>
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