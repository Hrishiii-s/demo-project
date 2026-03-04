import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from 'react';

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black min-h-screen overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Hero Content - No fade effects */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1400px] mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[1.1] lg:leading-[1.05] mb-4 sm:mb-6 md:mb-8 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent block sm:inline">
              Your Business Has the Drive.
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline">
              We Build the Technology
            </span>
            <br className="hidden sm:block" />
            <span className="text-white block sm:inline">to Match It.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-3 sm:mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We Design, Develop and Deliver Digital Solutions That Move Your
            Business Forward.
          </motion.h2>

          {/* Body Copy */}
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            If your current website isn't converting visitors into clients, or
            your team is running on outdated tools that slow everything down,
            you're losing ground to competitors every single day.
            <br />
            <br />
            ECESIS is a full service software development company with 15+ years
            of experience helping businesses launch faster, operate smarter, and
            scale with confidence. From high-performance websites to complex
            enterprise applications, we turn your vision into a competitive
            advantage.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-xs md:text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                250+
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Professionals
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Trusted
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                by Businesses Worldwide
              </div>
            </div>
          </motion.div>

          {/* CTAs - Responsive buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button
              className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 md:gap-3 group shadow-xl shadow-purple-500/30 text-xs sm:text-sm md:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project - Book a Free Strategy Call</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 border-2 border-white/20 text-white rounded-full font-semibold backdrop-blur-xl bg-white/5 transition-all flex items-center justify-center gap-2 md:gap-3 group hover:border-white/40 text-xs sm:text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span>See What We've Built</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}