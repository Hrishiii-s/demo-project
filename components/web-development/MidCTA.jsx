import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function MidCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="w-full bg-white">
      <div className="w-full bg-black relative overflow-hidden">
        {/* Ultra-subtle animated background */}
        <div className="absolute inset-0">
          {/* Single large moving gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Floating orbs - Very faint */}
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
            animate={{
              y: [0, 100, 0],
              x: [0, 100, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Tiny sparkle effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
              >
                Not sure where to start?
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We'll tell you exactly what your business needs. Most projects
                kick off within 2 weeks.
              </motion.p>
            </div>

            {/* Right CTA */}
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold flex items-center gap-2 group shadow-lg whitespace-normal sm:whitespace-nowrap text-sm sm:text-base md:text-lg mx-4 sm:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Free Technical Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
