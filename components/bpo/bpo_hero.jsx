'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'During the 2024 refinance surge, Ecesis scaled with us seamlessly. We processed 3× our normal volume without adding headcount or missing SLAs.',
    author: 'Chief Operations Officer',
    company: 'Mid-Size Mortgage Lender',
  },
  {
    quote:
      'Ecesis took BPO coordination completely off our plate while improving turn-times and reducing per-unit costs by 35%.',
    author: 'SVP of Servicing Operations',
    company: 'National Servicer',
  },
  {
    quote:
      'We eliminated the equivalent of 1.5 FTEs in coordination work. The ROI was clear within 60 days.',
    author: 'VP Operations',
    company: 'Regional Mortgage Bank',
  },
];

const slideVariants = {
  enter: direction => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: direction => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export const BpoHero = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = newDirection => {
    setIndex([
      (index + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-blue-300/40 via-indigo-300/40 to-purple-300/40">
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/60 via-indigo-500/60 to-purple-600/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/60 via-purple-500/60 to-pink-500/60 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* HERO HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Drive Higher BPO Volumes with <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Reduced Costs and Operational Overhead
            </span>
          </h1>

          <p className="text-xl font-semibold bg-gradient-to-r from-indigo-700 via-slate-700 to-gray-800 bg-clip-text text-transparent">
            Outsource mortgage operations to boost BPO order volumes at reduced
            costs leveraging a robust, interconnected broker network without
            increasing operational overhead.
          </p>
        </motion.div>

        {/* FULL WIDTH CONTENT */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="text-base text-left text-gray-700 mb-4 leading-relaxed">
            We manage the complete mortgage valuation process from order
            coordination and broker engagement to quality control and delivery
            enabling you to scale BPO volumes efficiently while reducing costs
            and operational overhead.Our optimized model leverages a highly
            connected broker network and streamlined workflows to deliver faster
            turnaround times, improved cost efficiency, and consistent output
            quality so your internal teams can stay focused on core lending
            priorities rather than operational execution.
          </p>

          <p className="text-base text-left text-gray-700 leading-relaxed">
            Ecesis is a specialized mortgage operations and BPO partner with
            over <span className="font-semibold text-gray-900">16+ years</span>{' '}
            of service excellence, supporting <b>150+ clients</b> with scalable,
            cost-efficient valuation solutions. The company manages end-to-end
            workflows from order coordination and broker engagement to quality
            control and delivery leveraging a strong, connected broker network
            to ensure faster turnaround times and consistent output quality.
            With a proven track record across 50+ successful engagements, Ecesis
            helps lenders scale BPO volumes, reduce cost per valuation, and
            operate efficiently with no additional operational overhead, while
            maintaining high standards of compliance and audit readiness.
          </p>

          <div className="mt-8">
            <a
              href="https://calendly.com/vishnu-vinayan-ecesistech/30-minute-meeting-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold inline-flex items-center shadow-lg"
              >
                Schedule your Free Operations Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </a>
          </div>
        </div>

        {/* CLIENT RESULTS + TESTIMONIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-20 items-start">
          {/* LEFT - CLIENT RESULTS */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Clients Achieve:
              </span>
            </h2>

            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                <span>
                  <span className="font-semibold text-indigo-600">
                    Significant Reduction in Cost Per Valuation
                  </span>
                  {
                    ' through an optimized, execution-driven operating model which increases your profit by 50% reducing the current spend/order.'
                  }
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                <span>
                  <span className="font-semibold text-indigo-600">
                    Faster Turnaround Times of 24–48 Hours
                  </span>
                  {' with consistent quality and improved pipeline efficiency.'}
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                <span>
                  <span className="font-semibold text-indigo-600">
                    Higher BPO Order Volumes
                  </span>
                  {
                    ' enabled by a strong, well-connected broker network and higher rate of processing order with trained professionals.'
                  }
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                <span>
                  <span className="font-semibold text-indigo-600">
                    No Additional Operational Overhead
                  </span>
                  {
                    ' with a fully managed delivery structure with highly trained professionals.'
                  }
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                <span>
                  <span className="font-semibold text-indigo-600">
                    Flexible Scaling with Volume
                  </span>
                  {
                    ' through dedicated teams, shared capacity, or pay-per-order models.'
                  }
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                <span>
                  <span className="font-semibold text-indigo-600">
                    Improved Compliance and Audit Readiness
                  </span>
                  {' with structured workflows and high-quality documentation.'}
                </span>
              </motion.li>
            </ul>
          </div>

          {/* RIGHT - TESTIMONIAL */}
          <motion.div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-200 p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
              What Mortgage Leaders Say
            </p>

            <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-200" />

            <div className="relative min-h-[200px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    “{testimonials[index].quote}”
                  </p>

                  <p className="text-sm font-semibold text-amber-600">
                    — {testimonials[index].author},{' '}
                    {testimonials[index].company}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`h-2 rounded-full ${
                    i === index ? 'w-6 bg-indigo-600' : 'w-2 bg-indigo-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
