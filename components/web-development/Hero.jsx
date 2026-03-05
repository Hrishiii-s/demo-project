import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
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
      className="relative bg-black min-h-screen overflow-hidden z-0"
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

      {/* Hero Content - Left/Right Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Main Headline - Centered */}
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Your Business Has the Drive
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                We Build the Technology to Match It
              </span>
            </h2>
          </motion.div>

          {/* Left and Right Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Main message */}
            <motion.div
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Sub-headline - Now in left section without badge styling */}
              <h3 className="text-xl sm:text-2xl md:text-3xl text-purple-200 font-medium leading-relaxed">
                We Design, Develop and Deliver Digital Solutions That Move Your
                Business Forward.
              </h3>

              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                If your current website isn't converting visitors into clients,
                or your team is running on outdated tools that slow everything
                down, you're losing ground to competitors every single day.
              </p>

              <p className="text-lg lg:text-xl text-white leading-relaxed font-medium">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  ECESIS is a full-service software development company
                </span>{' '}
                with 15+ years of experience helping businesses launch faster,
                operate smarter, and scale with confidence. From
                high-performance websites to complex enterprise applications, we
                turn your vision into a competitive advantage.
              </p>


              {/* CTAs - Fully responsive */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                <motion.button
                  className="w-full sm:w-auto flex-1 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-purple-500/30 text-xs sm:text-sm md:text-base whitespace-normal sm:whitespace-nowrap"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-center">
                    Start Your Project - Book a Free Strategy Call
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="w-full sm:w-auto flex-1 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-white/20 text-white rounded-full font-semibold backdrop-blur-xl bg-white/5 transition-all flex items-center justify-center gap-2 group hover:border-white/40 text-xs sm:text-sm md:text-base whitespace-normal sm:whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-purple-400" />
                  <span>See What We've Built →</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Stats Card (KEPT EXACTLY THE SAME) */}
            <motion.div
              className="lg:flex lg:items-start lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl max-w-md transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
                {/* Stats Counters */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-xl text-white font-medium">
                      Years of Excellence
                    </div>
                    {/* <p className="text-sm text-gray-400">
                      Delivering enterprise-grade solutions since 2008 with
                      proven track record of success.
                    </p> */}
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      250+
                    </div>
                    <div className="text-xl text-white font-medium">
                      Global Professionals
                    </div>
                    {/* <p className="text-sm text-gray-400">
                      Expert developers, designers, and strategists ready to
                      bring your vision to life.
                    </p> */}
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      100+
                    </div>
                    <div className="text-lg text-white font-medium">
                      Projects Delivered
                    </div>
                    {/* <p className="text-sm text-gray-400">
                      From startups to enterprises, we've helped businesses
                      across industries scale successfully.
                    </p> */}
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Trusted Worldwide
                    </div>
                    <p className="text-sm text-gray-400">
                      Partnering with businesses across the globe to deliver
                      innovative software solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
