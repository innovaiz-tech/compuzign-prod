import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiClock, HiOfficeBuilding } from 'react-icons/hi';
import studies from '../data/case-studies.json';
import thumbnailImage from '../assets/case-study-thumbnail.png';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-sm font-semibold backdrop-blur-sm"
            >
              ✨ Success Stories
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
            >
              Client Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
            >
              Real results from enterprises who trusted CompuZign with their critical migration, security, and managed services projects
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {studies.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (idx * 0.08), duration: 0.4, ease: 'easeOut' }}
                whileInView={{ 
                  scale: [1, 1.02, 1],
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-900/60 border border-white/10 shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={thumbnailImage} 
                    alt={`${item.title} case study`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-xs font-semibold text-gray-300">
                      <HiOfficeBuilding className="w-3 h-3 mr-1" />
                      {item.industry}
                    </span>
                  </div>
                  
                  {/* Headline Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/90 backdrop-blur-sm text-xs font-bold text-black">
                      {item.headline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                  
                  {/* Service Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-800/60 border border-gray-700/50 text-xs font-medium text-gray-400">
                      <HiClock className="w-3 h-3 mr-1" />
                      {item.service}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags?.slice(0,3).map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-gray-800/40 border border-gray-700/30 text-xs text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link 
                    to={`/case-studies/${item.slug}`}
                    className="inline-flex items-center text-yellow-400 font-semibold text-sm hover:text-yellow-300 group-hover:gap-2 transition-all duration-300"
                  >
                    <span>View Case Study</span>
                    <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 via-transparent to-transparent" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}


