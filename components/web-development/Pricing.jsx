import { Check, Star, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeCardIndex, setActiveCardIndex] = useState(2); // Center card active by default on load
  const [activeAddonIndex, setActiveAddonIndex] = useState(0); // SEO Booster Pack (index 0) active by default

  const plans = [
    {
      name: 'Starter',
      tagline:
        'Best for: New businesses, freelancers, and anyone who needs a clean professional online presence quickly.',
      description: 'Clean professional online presence quickly',
      popular: false,
      monthlyPrice: 2999,
      yearlyPrice: 2499,
      features: [
        'CMS-based website (WordPress or similar)',
        'Pre-built premium theme',
        '3 Pages - Home, About, Contact',
        'Mobile responsive',
        'Basic on-page SEO setup',
        'Contact form integration',
        '1 round of revisions',
        'Delivery in 7 to 10 business days',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Starter Plus',
      tagline:
        'Best for: Businesses that want the speed of a CMS but with a design that actually looks like their brand.',
      description: 'Speed of CMS with a design that looks like your brand',
      popular: false,
      monthlyPrice: 3999,
      yearlyPrice: 3399,
      features: [
        'CMS-based website (WordPress or similar)',
        'Custom design tailored to your brand',
        '3 Pages - Home, About, Contact',
        'Mobile responsive',
        'On-page SEO setup',
        'Contact form integration',
        '2 rounds of revisions',
        'Delivery in 12 to 15 business days',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      tagline:
        'Best for: Established businesses that need more pages to tell their full story and convert different audiences.',
      description: 'More pages to tell your full story',
      popular: true,
      monthlyPrice: 5999,
      yearlyPrice: 4999,
      features: [
        'CMS-based website (WordPress or similar)',
        'Pre-built premium theme',
        'Up to 7 Pages (Home, About, Services, Blog, Portfolio, FAQ, Contact)',
        'Mobile responsive',
        'Full on-page SEO setup',
        'Contact form and newsletter integration',
        'Google Analytics setup',
        '2 rounds of revisions',
        'Delivery in 15 to 20 business days',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth Pro',
      tagline:
        'Best for: Businesses that need a multi-page website that looks completely unique and stands apart from the competition.',
      description: 'Multi-page website that stands apart',
      popular: false,
      monthlyPrice: 7999,
      yearlyPrice: 6799,
      features: [
        'CMS-based website (WordPress or similar)',
        'Fully custom design tailored to your brand',
        'Up to 7 Pages (Home, About, Services, Blog, Portfolio, FAQ, Contact)',
        'Mobile responsive',
        'Full on-page SEO setup',
        'Contact form and newsletter integration',
        'Google Analytics and Search Console setup',
        '3 rounds of revisions',
        'Delivery in 20 to 25 business days',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Bespoke',
      tagline:
        "Best for: Businesses with specific technical requirements, complex workflows, or a product that doesn't fit into a standard template.",
      description: 'Enterprise / Ultimate solution',
      popular: false,
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Fully custom design and development',
        'Unlimited pages (TBD)',
        'Custom features and functionality built to your brief',
        'Advanced integrations (CRM, ERP, third-party APIs)',
        'Full SEO foundation',
        'Performance and security optimization',
        'Dedicated project manager',
        'Priority support and hyper care post-launch',
        'Timeline and pricing based on project scope',
      ],
      cta: 'Book a Discovery Call',
    },
  ];
  const addons = [
    {
      name: 'SEO Booster Pack',
      description: 'Keyword research, meta optimization, schema setup',
    },
    {
      name: 'Content Writing',
      description: 'Professional copy written for all pages',
    },
    {
      name: 'Logo & Brand Identity',
      description: 'Logo, color palette and typography guide',
    },
    {
      name: 'Monthly Maintenance',
      description: 'Updates, backups and uptime monitoring',
    },
    {
      name: 'Speed Optimization',
      description: 'Core Web Vitals tuning for Google ranking',
    },
    {
      name: 'Social Media Integration',
      description: 'Feed embeds, share buttons and pixel setup',
    },
    {
      name: 'Multilingual Setup',
      description: 'Additional language versions of your site',
    },
    {
      name: 'Priority Support',
      description: 'Dedicated support with guaranteed response times',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
      id="pricing"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl"
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
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            Know Exactly What You're Getting Before You Even Reach Out.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
            No hidden fees, no surprise invoices. We believe pricing
            transparency builds trust so here's a clear breakdown of what we
            offer and what each plan includes. Pick what fits your business
            today and scale up when you're ready.
          </p>

          {/* WEB PRESENCE PLANS Subhead */}
          <div className="mt-8 md:mt-10 mb-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold text-white">
              WEB PRESENCE PLANS
            </span>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            For businesses that need a professional online presence fast.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <span
              className={`text-xs md:text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className="relative w-12 h-6 md:w-14 md:h-7 bg-white/20 rounded-full transition-colors hover:bg-white/30"
            >
              <motion.div
                className="absolute top-1 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                animate={{
                  left: billingCycle === 'monthly' ? 4 : 28,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-xs md:text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}
            >
              Yearly{' '}
              <span className="text-green-400 hidden sm:inline">
                (Save up to 17%)
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative pt-6 md:pt-8"
              onMouseEnter={() => setActiveCardIndex(index)}
              // Removed onMouseLeave - last hovered card stays active
            >
              {/* Popular Tag - Only show for Growth card (index 2) */}
              {index === 2 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 md:px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center gap-1 whitespace-nowrap z-30 shadow-lg">
                  <Star className="w-2 h-2 md:w-3 md:h-3 fill-white" />
                  <span className="text-[10px] md:text-xs font-bold text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <motion.div
                className={`rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 transition-all h-full flex flex-col relative overflow-hidden group ${
                  activeCardIndex === index
                    ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500 shadow-xl shadow-purple-600/20 ring-2 ring-purple-500 ring-offset-2 ring-offset-black'
                    : index === 2 && activeCardIndex !== 2
                      ? 'bg-white/5 backdrop-blur-xl border-white/10'
                      : 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-600/20 hover:ring-2 hover:ring-purple-500 hover:ring-offset-2 hover:ring-offset-black'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Neon shadow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl md:rounded-2xl blur-md group-hover:blur-xl transition-all duration-300" />
                </div>

                {/* Card content with higher z-index */}
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-xs text-purple-400 mb-1 md:mb-2 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-4 md:mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          $
                          {(billingCycle === 'monthly'
                            ? plan.monthlyPrice
                            : plan.yearlyPrice
                          ).toLocaleString()}
                        </div>
                        <p className="text-xs sm:text-sm md:text-xs text-gray-400 mt-1">
                          One-time project price
                        </p>
                        {billingCycle === 'yearly' && (
                          <p className="text-xs sm:text-sm md:text-xs text-green-400 mt-1">
                            Save $
                            {(
                              plan.monthlyPrice - plan.yearlyPrice
                            ).toLocaleString()}
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        Let's Talk
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-2 md:py-3 rounded-full font-semibold mb-4 md:mb-6 lg:mb-8 flex items-center justify-center gap-2 group/btn text-sm sm:text-base md:text-sm ${
                      activeCardIndex === index
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : index === 2 && activeCardIndex !== 2
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xs sm:text-sm md:text-xs text-white">
                      {plan.cta}
                    </span>

                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform text-white" />
                  </motion.button>

                  {/* Features */}
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    <div className="text-xs sm:text-sm md:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 md:mb-4">
                      What's Included
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5 md:gap-2"
                      >
                        {feature.includes('Delivery') ||
                        feature.includes('Timeline') ? (
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-xs sm:text-sm md:text-sm text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Optional Add-Ons Section - With hover effects and last hovered stays active */}
        <motion.div
          className="my-20 md:my-24 lg:my-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Optional Add-Ons
          </h3>
          <p className="text-gray-300 text-center mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg">
            Enhance your plan with these professional upgrades
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveAddonIndex(index)}
                // No onMouseLeave - last hovered addon stays active
                className={`rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeAddonIndex === index
                    ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500 shadow-xl shadow-purple-600/20'
                    : 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-600/20'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="relative z-10">
                  <h4
                    className={`font-bold text-base md:text-lg mb-2 transition-colors duration-300 ${
                      activeAddonIndex === index ? 'text-white' : 'text-white'
                    }`}
                  >
                    {addon.name}
                  </h4>
                  <p
                    className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                      activeAddonIndex === index
                        ? 'text-white/90'
                        : 'text-gray-400'
                    }`}
                  >
                    {addon.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-8 md:mt-12 text-gray-400 border-t border-white/10 pt-6 md:pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs sm:text-sm md:text-sm text-gray-300 px-4 leading-relaxed">
            All plans include mobile responsive design, SEO foundation, and
            quality assurance. Custom enterprise solutions available for complex
            requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
