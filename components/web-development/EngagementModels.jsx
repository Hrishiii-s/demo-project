import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  Users as UsersIcon,
} from 'lucide-react';
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
        <span className="text-sm sm:text-base md:text-lg font-bold text-gray-400 whitespace-nowrap">
          {client.name}
        </span>
      );
    }

    return (
      <div className="w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 lg:w-36 lg:h-32 flex items-center justify-center">
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
      className="py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
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
      <div className="absolute top-1/4 right-0 w-80 h-80 lg:w-96 lg:h-96 bg-purple-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 lg:w-96 lg:h-96 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-10 sm:mb-12 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-2 px-4">
            <span className="block leading-[1.3]">
              We Don't Just Build Websites
            </span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:whitespace-nowrap leading-[1.4] pb-0.5">
              We Change How Businesses Operate
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed px-4 max-w-3xl mx-auto">
            Every project we take on is treated as a partnership, with full
            transparency, Agile delivery, and a relentless focus on outcomes.
            We've built for gaming, healthcare, nonprofits, SaaS, and social
            services. Here's a glimpse of who we've worked with.
          </p>
        </motion.div>

        {/* Client Logo Slider - With uniform sized logos */}
        <motion.div
          className="mb-10 sm:mb-12 md:mb-14 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-white via-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-white via-white to-transparent z-10" />

            {/* Auto-scrolling logo track */}
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center py-3"
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
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <ClientLogo client={client} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Signals Bar */}
        <motion.div
          className="mb-12 sm:mb-14 md:mb-16 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-x-6 md:gap-y-3">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-700 bg-white/50 px-2 py-1.5 rounded-lg sm:bg-transparent sm:px-0 sm:py-0"
                  whileHover={{ scale: 1.03, color: '#7C3AED' }}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-xs sm:text-xs md:text-sm font-medium whitespace-nowrap">
                    {signal.text}
                  </span>
                  {index < trustSignals.length - 1 && (
                    <span className="text-gray-300 mx-1 hidden lg:inline">
                      |
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Engagement Models Callout */}
        {/* <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-semibold shadow-sm border border-purple-200/50">
            How We Work With You
          </span>
        </motion.div> */}

        {/* Models Grid - 2x2 with improved card styling */}
        {/* <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 md:mb-14">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group"> */}
                {/* Subtle card gradient background on hover */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-500" />

                <div className="flex items-start gap-2 sm:gap-3 relative z-10"> */}
                  {/* Gradient dot with glow effect */}
                  {/* <div
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 rounded-full bg-gradient-to-r ${model.gradient} flex-shrink-0 shadow-sm shadow-purple-600/20`}
                  />

                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-purple-600 transition-colors duration-300">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {model.description}
                    </p>
                  </div>
                </div> */}

                {/* Subtle decorative element */}
                {/* <div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${model.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-lg transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))} */}
        {/* </div> */}

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2 mx-auto shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 transition-all duration-300"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get Free Technical Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
