import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook for smooth scrolling
 * @param {Object} options - Configuration options
 * @param {number} [options.duration=300] - Duration of the scroll animation in ms
 * @param {boolean} [options.scrollOnMount=false] - Whether to scroll on component mount
 * @param {number} [options.mountDelay=50] - Delay before scrolling on mount in ms
 * @param {number} [options.offset=0] - Additional offset from the top of the target element
 * @returns {Object} - Object containing scrollTo and scrollToTop functions
 */
const useSmoothScroll = ({
  duration = 300,
  scrollOnMount = false,
  mountDelay = 50,
  offset = 0,
} = {}) => {
  const animationFrameId = useRef(null);

  const scrollTo = useCallback((target, options = {}) => {
    // Cancel any ongoing animation
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const {
      delay = 0,
      duration: customDuration = duration,
      offset: customOffset = offset,
    } = options;

    return new Promise((resolve) => {
      const startTime = performance.now();
      let startY = window.pageYOffset;
      let targetY = 0;

      // If target is an element, calculate its position
      if (target instanceof Element) {
        const elementRect = target.getBoundingClientRect();
        targetY = window.pageYOffset + elementRect.top - customOffset;
      } else if (typeof target === 'number') {
        // If target is a number, treat it as a pixel value
        targetY = target;
      } else {
        // Default to top of the page
        targetY = 0;
      }

      // If already at the target position, resolve immediately
      if (Math.abs(startY - targetY) < 1) {
        return resolve();
      }

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / customDuration, 1);
        
        // Ease in out cubic function
        const easeInOutCubic = t => t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        const newY = startY + (targetY - startY) * easeInOutCubic(progress);
        window.scrollTo(0, newY);
        
        if (progress < 1) {
          animationFrameId.current = window.requestAnimationFrame(animateScroll);
        } else {
          animationFrameId.current = null;
          resolve();
        }
      };
      
      // Start the animation after the specified delay
      setTimeout(() => {
        startY = window.pageYOffset; // Get fresh position after delay
        animationFrameId.current = window.requestAnimationFrame(animateScroll);
      }, delay);
    });
  }, [duration, offset]);

  // Alias for scrolling to top
  const scrollToTop = useCallback((options = {}) => 
    scrollTo(0, { ...options, offset: 0 })
  , [scrollTo]);

  // Handle initial scroll on mount if enabled
  useEffect(() => {
    if (scrollOnMount) {
      const timer = setTimeout(() => {
        scrollToTop({ delay: 0 });
      }, mountDelay);
      
      return () => {
        clearTimeout(timer);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [scrollOnMount, mountDelay, scrollToTop]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return { scrollTo, scrollToTop };
};

export default useSmoothScroll;
