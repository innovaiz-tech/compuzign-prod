import React from 'react';
import { motion } from 'framer-motion';

// StepTimeline – reusable responsive timeline component
// Props:
//   steps: Array of objects with { step, title, description }
// This component automatically adapts between a vertical layout on mobile
// and a horizontal layout on larger screens. It also animates each step
// into view using Framer Motion.
export default function StepTimeline({ steps = [] }) {
  return (
    <div className="relative mx-auto">
      {/* Horizontal connector for large screens */}
      <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-bgYellow/20 via-primary-bgYellow/70 to-primary-bgYellow/20"></div>

      {/* Vertical connector for small screens */}
      <div className="lg:hidden absolute left-7 top-14 bottom-0 w-0.5 bg-primary-bgYellow/25"></div>

      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-start lg:items-center text-left lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Indicator & inline connector (mobile) */}
            <div className="flex items-center lg:flex-col lg:items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary-bgYellow to-yellow-400 text-black font-bold text-xl shadow-lg">
                {step.step}
              </div>
              {/* Inline connector for mobile (only if not last) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden ml-4 flex-1 h-0.5 bg-primary-bgYellow/40"></div>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-gray-400 leading-relaxed text-sm max-w-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 