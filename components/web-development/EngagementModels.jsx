import {
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  Users as UsersIcon,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function EngagementModels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const allClients = [...clients, ...clients, ...clients];

  const ClientLogo = ({ client }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
      return (
        <span className="text-sm font-bold text-gray-400 whitespace-nowrap">
          {client.name}
        </span>
      );
    }

    return (
      <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full object-contain"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section
      ref={ref}
      id="engagement"
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        bg-gradient-to-b from-white via-gray-50/30 to-white
        
        px-4 sm:px-6 lg:px-8   /* ✅ FORCE SIDE SPACING */
        overflow-x-hidden      /* ✅ PREVENT HORIZONTAL CUT */
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-300/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-7xl mx-auto relative z-10 py-12 sm:py-16 md:py-20">
        {/* HEADER */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span className="block leading-snug">
              We Don't Just Build Websites
            </span>

            <span
              className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent 
              leading-snug sm:leading-normal mt-2 break-words"
            >
              We Change How
              Businesses Operate
            </span>
          </h2>

          {/* ✅ BULLETPROOF PARAGRAPH */}
          <p
            className="
            text-xs sm:text-sm md:text-base lg:text-lg
            text-gray-600 leading-relaxed
            mt-4 text-center
            
            w-full
            max-w-[95%] sm:max-w-2xl md:max-w-3xl
            mx-auto
            
            px-2 sm:px-0
            break-words
          "
          >
            Every project we take on is treated as a partnership, with full
            transparency, Agile delivery, and a relentless focus on outcomes.
            We've built for gaming, healthcare, nonprofits, SaaS, and social
            services.
          </p>
        </motion.div>

        {/* LOGO SLIDER */}
        <motion.div
          className="mb-10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex gap-6 sm:gap-8 items-center py-3"
              animate={{ x: [0, -2000] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {allClients.map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <ClientLogo client={client} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* TRUST SIGNALS */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-3 md:gap-x-6">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-700"
                >
                  <Icon className="w-4 h-4 text-purple-600" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                    {signal.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
