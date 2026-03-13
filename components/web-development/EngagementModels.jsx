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
    { name: 'Hera Clinic', logo: '/assets/img/brand/Hera.webp' },
    { name: 'Smash Golf Lounge', logo: '/assets/img/brand/SmashFactor.png' },
    { name: 'TBDC', logo: '/assets/img/brand/TBDC.webp' },
    { name: 'ZapScale', logo: '/assets/img/brand/Zapscale.webp' },
    { name: 'Family ID', logo: '/assets/img/brand/FamilyID.png' },
    { name: 'Papa John', logo: '/assets/img/brand/Papa John.webp' },
    { name: 'Enchanteur', logo: '/assets/img/brand/Enchanteur.webp' },
    { name: 'Smart Dots', logo: '/assets/img/brand/SmartDots.webp' },
    { name: '333suites', logo: '/assets/img/brand/333suites.png' },
    { name: 'OINP', logo: '/assets/img/brand/OINP.webp' },
    { name: 'Safely', logo: '/assets/img/brand/Safely.webp' },
    { name: 'Trek', logo: '/assets/img/brand/Trek.webp' },
    { name: 'Kimball', logo: '/assets/img/brand/Kimball.webp' },
    { name: 'EDST', logo: '/assets/img/brand/EDST.webp' },
    { name: 'Bpo Acceptor', logo: '/assets/img/brand/BPO.webp' },
    { name: 'ONDC', logo: '/assets/img/brand/ONDC.webp' },
    { name: 'Educait', logo: '/assets/img/brand/educait.png' },
  ];

  const trustSignals = [
    { icon: CheckCircle, text: 'Agile & Scrum Delivery' },
    { icon: Shield, text: 'Enterprise-Grade Security' },
    { icon: UsersIcon, text: 'US Business Focused' },
    { icon: Clock, text: 'Flexible Engagement Models' },
    { icon: DollarSign, text: 'Post-Launch Support Included' },
  ];

  // Triple the clients for seamless infinite scroll
  const allClients = [...clients, ...clients, ...clients];

  // Component for client logo with fixed height
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
      <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          style={{ maxHeight: '100%', width: 'auto' }}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
      id="engagement"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        {/* Soft gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-300/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 30' stroke='%239C92AC' strokeWidth='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Background decoration orbs  */}
      <div className="absolute top-1/4 right-0 w-80 h-80 lg:w-96 lg:h-96 bg-purple-200/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 lg:w-96 lg:h-96 bg-blue-200/50 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-2 px-4">
            <span className="block leading-[1.3]">
              We Don't Just Build Websites
            </span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:whitespace-nowrap leading-[1.4] pb-1.5">
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

        {/* Client Logo Slider */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 overflow-hidden"
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
                  className="flex-shrink-0 opacity-100 transition-all duration-300"
                >
                  <ClientLogo client={client} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Signals Bar */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-100"
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
      </div>
    </section>
  );
}