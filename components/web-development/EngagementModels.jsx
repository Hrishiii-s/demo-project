import { ArrowRight, CheckCircle, Clock, Shield, DollarSign, Users as UsersIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function EngagementModels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Updated with your actual logo paths (without /public)
  const clients = [
    // { name: 'Smash Golf Lounge', logo: '/assets/img/brand/Safely.webp' },
    { name: 'Hera Clinic', logo: '/assets/img/brand/Hera.webp' },
    { name: 'TBDC', logo: '/assets/img/brand/TBDC.webp' },
    { name: 'ZapScale', logo: '/assets/img/brand/Zapscale.webp' },
    // { name: 'Family ID', logo: '/assets/img/brand/family-id.webp' },
    { name: 'Papa John', logo: '/assets/img/brand/Papa John.webp' },
    { name: 'Enchanteur', logo: '/assets/img/brand/Enchanteur.webp' },
    { name: 'Smart Dots', logo: '/assets/img/brand/SmartDots.webp' },
    { name: 'OINP', logo: '/assets/img/brand/OINP.webp' },
    { name: 'Safely', logo: '/assets/img/brand/Safely.webp' },
    { name: 'Trek', logo: '/assets/img/brand/Trek.webp' },
  ];

  const trustSignals = [
    { icon: CheckCircle, text: 'Agile & Scrum Delivery' },
    { icon: Shield, text: 'Enterprise-Grade Security' },
    { icon: UsersIcon, text: 'US Business Focused' },
    { icon: Clock, text: 'Flexible Engagement Models' },
    { icon: DollarSign, text: 'Post-Launch Support Included' },
  ];

  const models = [
    {
      title: 'Project-Based',
      description: 'Fixed scope, full accountability, on-time delivery',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      title: 'Pay-As-You-Go',
      description: 'Flexible hours with weekly transparent reporting',
      gradient: 'from-blue-600 to-teal-600',
    },
    {
      title: 'Retainer',
      description: 'Your dedicated team, continuous delivery, predictable cost',
      gradient: 'from-teal-600 to-purple-600',
    },
    {
      title: 'Equivalent Staffing',
      description: 'An extended engineering team working as your own',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  // Triple the clients for seamless infinite scroll
  const allClients = [...clients, ...clients, ...clients];

  // Component for client logo with error handling and uniform size
  const ClientLogo = ({ client }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
      return (
        <span className="text-base sm:text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap">
          {client.name}
        </span>
      );
    }

    return (
      <div className="w-28 h-24 sm:w-32 sm:h-28 md:w-36 md:h-32 lg:w-40 lg:h-32 flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
      id="engagement"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        {/* Soft gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 30' stroke='%239C92AC' strokeWidth='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Background decoration orbs - more subtle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 px-4">
            <span className="block leading-[1.3]">
              We Don't Just Build Websites
            </span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-2 sm:mt-3 lg:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl lg:whitespace-nowrap leading-[1.5] pb-1">
              We Change How Businesses Operate
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-4 max-w-5xl mx-auto">
            Every project we take on is treated as a partnership, with full
            transparency, Agile delivery, and a relentless focus on outcomes.
            We've built for gaming, healthcare, nonprofits, SaaS, and social
            services. Here's a glimpse of who we've worked with.
          </p>
        </motion.div>
        {/* Client Logo Slider - With uniform sized logos */}
        <motion.div
          className="mb-12 sm:mb-14 md:mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />

            {/* Auto-scrolling logo track */}
            <motion.div
              className="flex gap-8 sm:gap-12 md:gap-16 items-center py-4"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {allClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <ClientLogo client={client} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Signals Bar */}
        <motion.div
          className="mb-16 sm:mb-18 md:mb-20 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-x-8 md:gap-y-4">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 bg-white/50 px-3 py-2 rounded-lg sm:bg-transparent sm:px-0 sm:py-0"
                  whileHover={{ scale: 1.05, color: '#7C3AED' }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                    {signal.text}
                  </span>
                  {index < trustSignals.length - 1 && (
                    <span className="text-gray-300 mx-2 hidden lg:inline">
                      |
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Engagement Models Callout */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold shadow-sm border border-purple-200/50">
            How We Work With You
          </span>
        </motion.div>

        {/* Models Grid - 2x2 with improved card styling */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-purple-300 shadow-md hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group">
                {/* Subtle card gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-500" />

                <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                  {/* Gradient dot with glow effect */}
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 mt-1.5 sm:mt-2 rounded-full bg-gradient-to-r ${model.gradient} flex-shrink-0 shadow-lg shadow-purple-600/20`}
                  />

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {model.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {model.description}
                    </p>
                  </div>
                </div>

                {/* Subtle decorative element */}
                <div
                  className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r ${model.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 mx-auto shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-600/40 transition-all duration-300"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Free Technical Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
