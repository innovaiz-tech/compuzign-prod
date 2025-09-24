import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiClock, HiOfficeBuilding, HiCheckCircle, HiTrendingUp, HiShieldCheck } from 'react-icons/hi';
import studies from '../data/case-studies.json';
import thumbnailImage from '../assets/case-study-thumbnail.png';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = useMemo(() => studies.find(s => s.slug === slug) || null, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white pt-20">
        <div className="text-center max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h1 className="text-3xl font-bold mb-3">Case Study Not Found</h1>
            <p className="text-gray-400 mb-8 leading-relaxed">The requested case study might have been moved or doesn't exist.</p>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
              <HiArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section with proper top padding for navbar */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <HiArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-xs font-semibold text-gray-300">
                  <HiOfficeBuilding className="w-3 h-3 mr-1" />
                  {study.industry}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs font-semibold">
                  <HiClock className="w-3 h-3 mr-1" />
                  {study.service}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
              >
                {study.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2">
                  {study.headline}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {study.summary}
                </p>
              </motion.div>

              {/* Quick Stats */}
              {study.metrics && study.metrics.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 rounded-xl bg-gray-900/60 border border-gray-800">
                      <div className="text-2xl font-bold text-yellow-400">{metric.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={thumbnailImage} 
                  alt={`${study.title} case study`}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {study.tags?.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-xs font-medium text-gray-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive look at the challenges, solutions, and measurable outcomes of this engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-900/60 border border-gray-800"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                <HiShieldCheck className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Challenge</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complex technical and business obstacles that needed innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gray-900/60 border border-gray-800"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <HiCheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Solution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategic approach combining cutting-edge technology with proven methodologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-gray-900/60 border border-gray-800"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <HiTrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Results</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Measurable improvements in performance, security, and operational efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-4">
                    <HiShieldCheck className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold">The Challenge</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{study.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <HiCheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Solution</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{study.solution}</p>
              </motion.div>

              {/* Results */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                    <HiTrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Measurable Results</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">{study.result}</p>
                
                {/* Results Highlights */}
                {study.highlights && study.highlights.length > 0 && (
                  <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold mb-4 text-yellow-400">Key Achievements</h4>
                    <ul className="space-y-3">
                      {study.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <HiCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="rounded-2xl border border-white/10 bg-gray-900/80 p-6">
                  <h4 className="text-lg font-semibold mb-6">Project Details</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Industry</label>
                      <div className="mt-1 flex items-center">
                        <HiOfficeBuilding className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-white font-medium">{study.industry}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service</label>
                      <div className="mt-1 flex items-center">
                        <HiClock className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-white font-medium">{study.service}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                {study.metrics && study.metrics.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 mt-6">
                    <h4 className="text-lg font-semibold mb-6">Performance Metrics</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="rounded-xl bg-gray-800/60 border border-gray-700 p-4 text-center">
                          <div className="text-2xl font-extrabold text-yellow-400 mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {study.tags && study.tags.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 mt-6">
                    <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-gray-800/60 border border-gray-700/50 text-xs text-gray-300 hover:text-yellow-400 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                See how CompuZign can help you achieve similar results with our proven methodologies and expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                >
                  <HiArrowLeft className="w-4 h-4 mr-2" />
                  View More Cases
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


