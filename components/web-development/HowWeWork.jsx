import {
  Phone,
  Mail,
  Target,
  Timer,
  Handshake,
  Users,
  Search,
  FileText,
  Palette,
  Wrench,
  Gauge,
  Share2,
  Languages,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCardIndex, setActiveCardIndex] = useState(0); // First card active by default
  const [activeAddonIndex, setActiveAddonIndex] = useState(0); // First addon active by default

  const engagementModels = [
    {
      name: 'Project Based',
      tagline:
        'You have a clear goal and a defined scope. We take full ownership, deliver on time, and keep you informed at every stage.',
      description: 'Best for one-time builds and defined deliverables.',
      icon: Target,
    },
    {
      name: 'Pay As You Go',
      tagline:
        'Need flexibility without a long-term commitment? You get dedicated hours, weekly progress reports, and full transparency on where every hour goes.',
      description: 'Best for evolving projects and ongoing improvements.',
      icon: Timer,
    },
    {
      name: 'Retainer',
      tagline:
        'Your own dedicated development team on a fixed monthly arrangement. Continuous delivery, predictable costs, and a team that gets deeper into your business over time.',
      description: 'Best for businesses with ongoing development needs.',
      icon: Handshake,
    },
    {
      name: 'Equivalent Staffing',
      tagline:
        'Think of us as an extension of your in-house team. We embed our engineers into your workflow, follow your processes, and deliver like a team that has always been yours.',
      description:
        'Best for businesses looking to scale their tech capacity without the overhead of full-time hiring.',
      icon: Users,
    },
  ];

  const addons = [
    {
      name: 'SEO Booster Pack',
      description:
        'Keyword research, meta optimization and schema setup to give your site the best possible start in search rankings.',
      icon: Search,
    },
    {
      name: 'Content Writing',
      description:
        'Professional, conversion-focused copy written for every page of your website so you never have to worry about what to say.',
      icon: FileText,
    },
    {
      name: 'Logo and Brand Identity',
      description:
        'A complete brand starter kit including your logo, color palette and typography guide built to make a strong first impression.',
      icon: Palette,
    },
    {
      name: 'Monthly Maintenance',
      description:
        'Ongoing updates, security patches, backups and uptime monitoring so your site stays fast, secure and always online.',
      icon: Wrench,
    },
    {
      name: 'Speed Optimization',
      description:
        'Core Web Vitals tuning to improve your Google ranking, reduce bounce rates and deliver a faster experience for every visitor.',
      icon: Gauge,
    },
    {
      name: 'Social Media Integration',
      description:
        'Feed embeds, social share buttons and tracking pixel setup to connect your website to your wider digital presence.',
      icon: Share2,
    },
    {
      name: 'Multilingual Setup',
      description:
        'Additional language versions of your site to reach a broader audience and serve customers in their preferred language.',
      icon: Languages,
    },
    {
      name: 'Priority Support',
      description:
        'A dedicated support channel with guaranteed response times for businesses where downtime or delays are simply not an option.',
      icon: Shield,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
      id="how-we-work"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
            How We Work With You <br></br>And What You Can Add On
          </h2>
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-xs md:text-sm font-semibold text-white mb-3 md:mb-4">
            Everything Structured Around Your Business. Nothing You Do Not Need.
          </span>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-4 max-w-3xl mx-auto">
            Whether you are a startup launching your first product or an
            established business scaling your operations, we have an engagement
            model that fits how you work and a set of add-ons to make sure your
            solution is complete from day one.
          </p>
        </motion.div>

        {/* Engagement Models Section */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8 md:mb-10 lg:mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            How We Work With You
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {engagementModels.map((model, index) => {
              const IconComponent = model.icon;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveCardIndex(index)}
                  className={`rounded-xl p-5 md:p-6 border-2 transition-all duration-300 cursor-pointer text-center ${
                    activeCardIndex === index
                      ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500 shadow-xl shadow-purple-600/20 ring-1 ring-purple-500 ring-offset-1 ring-offset-black'
                      : 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-600/20'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.01, y: -3 }}
                >
                  <div className="relative z-10">
                    {/* Centered Icon */}
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                      {model.name}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-sm text-gray-300 mb-2 leading-relaxed">
                      {model.tagline}
                    </p>
                    <p className="text-xs sm:text-sm md:text-sm text-purple-400 font-semibold">
                      {model.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Add-Ons Section */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Power It Up With Add-Ons
          </h3>
          <p className="text-gray-300 text-center mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Every plan can be enhanced with the following. Just let us know what
            you need and we will build it into your project from the start.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 max-w-6xl mx-auto px-2">
            {addons.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveAddonIndex(index)}
                  className={`rounded-lg md:rounded-xl p-4 md:p-5 border-2 transition-all duration-300 cursor-pointer ${
                    activeAddonIndex === index
                      ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500 shadow-lg shadow-purple-600/20'
                      : 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-600/20'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent
                        className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                          activeAddonIndex === index
                            ? 'text-purple-400'
                            : 'text-gray-400'
                        }`}
                      />
                      <h4
                        className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                          activeAddonIndex === index
                            ? 'text-white'
                            : 'text-white'
                        }`}
                      >
                        {addon.name}
                      </h4>
                    </div>
                    <p
                      className={`text-xs leading-relaxed transition-colors duration-300 ${
                        activeAddonIndex === index
                          ? 'text-white/90'
                          : 'text-gray-400'
                      }`}
                    >
                      {addon.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
            Not Sure What You Need?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 md:mb-6 px-4">
            We will help you figure it out. Tell us about your business and we
            will put together a recommendation that fits your goals and your
            budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <motion.button
              className="group relative px-5 md:px-6 py-3 md:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow text-sm md:text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>Book a Free 30 Minute Consultation</span>
            </motion.button>

            <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
              <span>Or</span>
              <a
                href="mailto:info@ecesistech.com"
                className="group flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="border-b border-purple-400/30 group-hover:border-purple-300">
                  email us
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
