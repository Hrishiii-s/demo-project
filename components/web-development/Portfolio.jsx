import { ImageWithFallback } from '../figma/figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'FinTech Revolution',
      client: 'PayStream',
      category: 'Digital Banking Platform',
      description: 'Reimagining the future of digital banking with AI-powered financial insights and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNDc0OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      results: ['300% user growth', '50% faster transactions', '$2M ARR'],
      featured: true,
    },
    {
      title: 'Healthcare Hub',
      client: 'MediConnect',
      category: 'Telemedicine Platform',
      description: 'Connecting patients and doctors through an intuitive telehealth platform.',
      image: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc3MjQzNjM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      results: ['100K users', '98% satisfaction', '40 countries'],
    },
    {
      title: 'E-Commerce Scale',
      client: 'ShopNow',
      category: 'Retail Platform',
      description: 'Building a high-performance e-commerce platform that handles millions of transactions.',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyNTAyNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      results: ['5M monthly users', '99.9% uptime', '$50M GMV'],
    },
    {
      title: 'Smart Workspace',
      client: 'WorkFlow',
      category: 'Productivity Suite',
      description: 'A comprehensive workspace management tool for modern distributed teams.',
      image: 'https://images.unsplash.com/photo-1752170080635-db168448f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NzI0MzM5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      results: ['200K teams', '45% productivity boost', 'Series B funded'],
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-black text-white relative overflow-hidden" id="work">
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/20 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold">
              Case Studies
            </span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1]">
              Work that drives results
            </h2>
            <div className="flex justify-end">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-white/10">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[500px] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-purple-400 font-semibold mb-4">{projects[0].client}</span>
                <h3 className="text-4xl lg:text-5xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-gray-400 font-medium mb-6">{projects[0].category}</p>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {projects[0].description}
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {projects[0].results.map((result, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-white">{result.split(' ')[0]}</div>
                      <div className="text-sm text-gray-400">{result.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
                <motion.div
                  className="inline-flex items-center gap-2 text-white font-semibold group"
                  whileHover={{ x: 5 }}
                >
                  <span>View case study</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 h-80 bg-white/5">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </motion.div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-purple-400 text-sm font-semibold">{project.client}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500">{project.category}</p>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.results.map((result, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-gray-500"
                    >
                      {result}
                      {idx < project.results.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
