import { useEffect, useCallback } from 'react';

// Performance monitoring hook
export const usePerformance = () => {
  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    // Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const delay = entry.processingStart - entry.startTime;
          console.log('FID:', delay);
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Check if Performance Observer is supported
    if ('PerformanceObserver' in window) {
      measureFCP();
      measureLCP();
      measureCLS();
      measureFID();
    }
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalImages = [
      '/src/assets/client/client-1.png',
      '/src/assets/client/client-2.png',
      '/src/assets/client/client-3.png',
      '/src/assets/client/client-4.png',
      '/src/assets/client/client-5.png'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images with lazy loading
  const optimizeImages = useCallback(() => {
    // Add intersection observer for lazy loading
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => {
      lazyImages.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);

  // Debounce function for performance
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Throttle function for scroll events
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }, []);

  // Memory usage monitoring
  const monitorMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memInfo = performance.memory;
      console.log('Memory Usage:', {
        used: Math.round(memInfo.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memInfo.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Preload critical chunks
    const criticalChunks = [
      '/js/react-vendor',
      '/js/motion-vendor',
      '/js/ui-components'
    ];

    criticalChunks.forEach((chunk) => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = chunk;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    measureCoreWebVitals();
    preloadCriticalResources();
    optimizeImages();
    optimizeBundleLoading();

    // Monitor memory usage every 30 seconds in development
    if (process.env.NODE_ENV === 'development') {
      const memoryInterval = setInterval(monitorMemoryUsage, 30000);
      return () => clearInterval(memoryInterval);
    }
  }, [
    measureCoreWebVitals,
    preloadCriticalResources,
    optimizeImages,
    optimizeBundleLoading,
    monitorMemoryUsage
  ]);

  return {
    debounce,
    throttle,
    monitorMemoryUsage,
    preloadCriticalResources,
    optimizeImages
  };
};

// Export utility functions
export { usePerformance as default }; 