import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50 to-transparent opacity-50" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="inline-block mb-6">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Trusted by Industry Leaders
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Proven track record of success
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading enterprises trust Ecesis to deliver mission-critical software solutions that drive business transformation.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '500+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Retention' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Logo grid */}
          <motion.div
            className="grid grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              'Stripe', 'Shopify', 'Slack',
              'Zoom', 'Notion', 'Figma',
              'Spotify', 'Adobe', 'Webflow'
            ].map((company, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center p-6 hover:border-purple-200 hover:shadow-lg transition-all cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}