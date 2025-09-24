import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const AnimatedStat = ({ stat, index }) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  // Extract numeric value from stat.value
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
  const prefix = stat.value.includes('$') ? '$' : '';
  const suffix = stat.value.includes('%') ? '%' : '';

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
      
      const duration = 2000;
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (numericValue - startValue) * easeOutQuart);
        
        setDisplayValue(`${prefix}${currentValue.toLocaleString()}${suffix}`);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      setTimeout(() => animate(), index * 300);
    }
  }, [isInView, hasTriggered, numericValue, prefix, suffix, index]);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-primary-bgLightBlack to-gray-800 rounded-2xl p-8 text-center shadow-2xl border border-primary-bgYellow/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="text-5xl font-bold mb-4 text-primary-bgYellow">
        {displayValue}
      </div>
      <p className="text-gray-300 leading-relaxed">{stat.label}</p>
    </motion.div>
  );
};

export default AnimatedStat; 