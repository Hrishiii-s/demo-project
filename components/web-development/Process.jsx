import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      phase: 'Discover',
      title: 'Understanding your vision',
      description:
        'We dive deep into your business goals, user needs, and market landscape to define a clear product strategy.',
      activities: [
        'Stakeholder interviews',
        'Market research',
        'User personas',
        'Competitive analysis',
      ],
    },
    {
      phase: 'Design',
      title: 'Crafting the experience',
      description:
        'Our design team creates intuitive interfaces and engaging experiences through iterative prototyping and testing.',
      activities: [
        'Wireframing',
        'Visual design',
        'Prototyping',
        'Usability testing',
      ],
    },
    {
      phase: 'Develop',
      title: 'Building with precision',
      description:
        'Using agile methodologies, we build robust, scalable solutions with clean code and best practices.',
      activities: [
        'Sprint planning',
        'Development',
        'Code reviews',
        'Quality assurance',
      ],
    },
    {
      phase: 'Deliver',
      title: 'Launching with confidence',
      description:
        'We ensure a smooth launch and provide ongoing support to optimize performance and drive continuous improvement.',
      activities: ['Deployment', 'Monitoring', 'Analytics', 'Optimization'],
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-6">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Our Approach
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A proven process for success
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From concept to launch, we follow a structured methodology that
            ensures quality, transparency, and results at every stage.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start bg-white border-2 border-gray-100 rounded-3xl p-8 lg:p-12 hover:border-purple-200 hover:shadow-2xl transition-all group">
                {/* Number */}
                <div className="lg:col-span-2">
                  <div className="text-8xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <div className="text-purple-600 font-bold text-sm uppercase tracking-wider mb-3">
                    {step.phase}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Activities */}
                <div className="lg:col-span-4">
                  <div className="space-y-3">
                    {step.activities.map((activity, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: index * 0.15 + idx * 0.05 + 0.3 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-600" />
                        <span>{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-purple-600 to-blue-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Want to learn more about how we work?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-xl shadow-purple-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
