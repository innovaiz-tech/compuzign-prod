import React from 'react';
import { motion } from 'framer-motion';

// ProcessTimeline - Modern timeline component inspired by Origin UI
// Props:
//   steps: Array of objects with { step, title, description, icon? }
// Features clean vertical timeline with icons, connecting line, and smooth animations
export default function ProcessTimeline({ steps = [] }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical connecting line */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-bgYellow/60 via-primary-bgYellow/40 to-transparent"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon/Step indicator */}
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-bgYellow to-yellow-400 text-black font-bold text-lg shadow-lg border-4 border-gray-900">
                {step.icon ? (
                  <step.icon className="w-6 h-6" />
                ) : (
                  step.step
                )}
              </div>
              
              {/* Connecting dot for the line - REMOVED TO FIX OVERLAP */}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-primary-bgYellow/30 transition-all duration-300">
                {/* Step number badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary-bgYellow/10 border border-primary-bgYellow/20 rounded-full text-xs font-medium text-primary-bgYellow mb-3">
                  Step {step.step}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 