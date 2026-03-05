import {
  Smartphone,
  Globe,
  Settings,
  ShoppingCart,
  Bot,
  Palette,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      headline: 'Websites Built to Rank, Convert and Impress.',
      description:
        'Your website is your number one sales asset. We design and develop fast, SEO-optimized, mobile-first websites that establish credibility and turn traffic into revenue. Built on WordPress, React, Angular, or a fully custom stack tailored to your business needs.',
      tags: ['WordPress', 'React', 'Angular', 'Umbraco', 'Ghost', 'CMS'],
    },
    {
      icon: Smartphone,
      title: 'Application Development',
      headline: 'Applications That Solve Real Business Problems.',
      description:
        "Got a process that's manual, clunky, or impossible to scale? We build web and mobile applications including booking systems, customer portals, and SaaS platforms engineered for performance and built to grow with you.",
      tags: ['Flutter', 'Node.js', 'ASP.NET', 'Firebase', 'Azure', 'AWS'],
    },
    {
      icon: Settings,
      title: 'Custom Software Development',
      headline: 'Off-the-Shelf Software Was Never Built for Your Business.',
      description:
        'When generic tools create more friction than they solve, custom software is the answer. We build bespoke ERP systems, CRMs, automation workflows, and enterprise tools designed precisely around how your organization works.',
      tags: ['Python', 'Django', 'C#', 'PostgreSQL', 'REST APIs', 'SOAP'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      headline: 'Sell More. 24/7. Without the Bottlenecks.',
      description:
        'We build high-converting online stores with seamless checkout experiences, smart inventory management, and integrations that work built specifically for US buyers and payment systems.',
      tags: ['WooCommerce', 'Custom Cart', 'Payment APIs', 'CMS Integration'],
    },
    {
      icon: Bot,
      title: 'AI & Chatbot Integration',
      headline: 'Put AI to Work Before Your Competitors Do.',
      description:
        'From our advanced AI chatbot TOB-E to AI-powered real estate valuation engines, we integrate intelligent automation into your products and workflows, reducing overhead and delivering experiences your customers will keep coming back for.',
      tags: [
        'AI Chatbot (TOB-E)',
        'Machine Learning',
        'NLP',
        'Process Automation',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design & QA',
      headline: "Beautiful Isn't Enough. It Has to Work Flawlessly Too.",
      description:
        'We design interfaces users actually want to use, backed by research and tested rigorously before launch. Our QA process catches what others miss so your product ships clean, stays reliable, and earns trust from day one.',
      tags: [
        'UI/UX Design',
        'Wireframing',
        'Usability Testing',
        'QA & Regression',
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden"
      id="services"
    >
      {/* Professional Animated Background */}
      <div className="absolute inset-0">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-gray-50 to-blue-50/50" />

        {/* Primary Orbs */}
        <motion.div
          className="absolute top-0 -left-20 w-[600px] h-[600px] bg-purple-400/70 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-sky-400/70 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary Orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-indigo-500/40 rounded-full blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-400/40 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Very subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 30' stroke='%239C92AC' strokeWidth='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-gray-50/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-transparent to-gray-50/50" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header - Centered */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-3 md:mb-4"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg shadow-purple-600/25">
              Our Services
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight px-4">
            <span className="block lg:whitespace-nowrap">
              Stop Settling for a Digital Presence
            </span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent lg:whitespace-nowrap">
              That Doesn't Perform
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Whether you need a website that ranks on Google and converts at
            scale, or a custom application that transforms how your business
            operates, ECESIS delivers end-to-end solutions built around your
            goals.
          </p>
        </motion.div>

        {/* Services Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all group cursor-pointer text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Icon - Properly sized */}
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg shadow-purple-600/20"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </motion.div>

                {/* Content - Better proportions */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-purple-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-purple-600 mb-2 sm:mb-3 px-1 leading-relaxed">
                  {service.headline}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 px-1 line-clamp-4">
                  {service.description}
                </p>

                {/* Tags - Properly sized */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  {service.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-[9px] sm:text-[10px] lg:text-xs font-medium border border-gray-200 hover:border-purple-300 transition-colors duration-150"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.15 },
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
