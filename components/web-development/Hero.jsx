import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { scrollToSection } from '@/util/scrollToSection';

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
          className="absolute top-0 left-1/4 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-600/30 rounded-full blur-3xl"
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

      {/* Hero Content*/}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-20 sm:pt-18 md:pt-20 lg:pt-20 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Main Headline*/}
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Your Business Has the Drive
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-1">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                We Build the Technology to Match It
              </span>
            </h2>
          </motion.div>

          {/* Left and Right Content - Equal Height Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <motion.div
              className="text-white space-y-5 sm:space-y-5 md:space-y-10 px-4 lg:px-0 h-full flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Sub-headline */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 font-medium leading-relaxed">
                We Design, Develop and Deliver Digital Solutions That Move Your
                Business Forward.
              </h3>

              <p className="text-sm sm:text-sm md:text-lg text-gray-300 leading-relaxed">
                If your current website isn't converting visitors into clients,
                or your team is running on outdated tools that slow everything
                down, you're losing ground to competitors every single day.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium flex-grow">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  ECESIS is a full-service software development company
                </span>{' '}
                with 15+ years of experience helping businesses launch faster,
                operate smarter, and scale with confidence.<br></br>From
                high-performance websites to complex enterprise applications, we
                turn your vision into a competitive advantage.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 w-full">
                <a
                  href="https://calendly.com/vishnu-vinayan-ecesistech/30-minute-meeting-clone"
                  target="_blank"
                  className="flex-1"
                >
                  <motion.button
                    className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/30 text-xs sm:text-sm md:text-sm whitespace-normal sm:whitespace-nowrap"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-center">
                      Let's Transform Your Business
                    </span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
                <motion.button
                  onClick={() => scrollToSection('engagement')}
                  className="flex-1 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 border border-white/20 text-white rounded-full font-semibold backdrop-blur-xl bg-white/5 transition-all flex items-center justify-center gap-2 group hover:border-white/40 text-xs sm:text-sm md:text-sm whitespace-normal sm:whitespace-nowrap"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0 text-purple-400" />
                  <span>See What We've Built →</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Stats Card */}
            <motion.div
              className="lg:flex lg:items-stretch px-4 lg:px-0 h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-4 lg:p-4 shadow-2xl max-w-md transform hover:scale-[1.02] transition-transform duration-300 border border-white/10 w-full h-full flex flex-col">
                {/* Stats Counters */}
                <div className="space-y-3 md:space-y-4 lg:space-y-5 flex flex-col h-full">
                  <div className="space-y-1 md:space-y-2">
                    <div className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-base md:text-lg lg:text-xl text-white font-medium">
                      Years of Excellence
                    </div>
                  </div>

                  <div className="pt-4 md:pt-5 lg:pt-6 border-t border-white/10 space-y-2 md:space-y-3">
                    <div className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      250+
                    </div>
                    <div className="text-base md:text-lg lg:text-xl text-white font-medium">
                      Global Professionals
                    </div>
                  </div>

                  <div className="pt-4 md:pt-5 lg:pt-6 border-t border-white/10 space-y-2 md:space-y-3">
                    <div className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      100+
                    </div>
                    <div className="text-base md:text-lg lg:text-xl text-white font-medium">
                      Projects Delivered
                    </div>
                  </div>

                  <div className="pt-4 md:pt-5 lg:pt-6 border-t border-white/10 space-y-2 md:space-y-3 ">
                    <div className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Trusted Worldwide
                    </div>
                    <p className="text-sm md:text-base text-gray-400">
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
