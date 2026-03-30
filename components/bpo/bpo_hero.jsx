'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Clock,
  Users,
  BarChart3,
  Building2,
} from 'lucide-react';

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
    <section className="relative min-h-screen flex pt-20 pb-12 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/30 via-indigo-500/30 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* HERO TITLE + SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Drive Higher BPO Volumes with <br />
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Reduced Costs and Operational Overhead
            </span>
          </h1>

          <p className="text-xl text-balance font-semibold bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent max-w-4xl mx-auto">
            Outsource mortgage operations to boost BPO order volumes at reduced
            costs leveraging a robust, interconnected broker network without
            increasing operational overhead.
          </p>
        </motion.div>

        {/* LEFT CONTENT + STATS CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-slate-200 mb-4 leading-relaxed">
              We manage the complete mortgage valuation process from order
              coordination and broker engagement to quality control and delivery
              enabling you to scale BPO volumes efficiently while reducing costs
              and operational overhead. Our optimized model leverages a highly
              connected broker network and streamlined workflows to deliver
              faster turnaround times, improved cost efficiency, and consistent
              output quality so your internal teams can stay focused on core
              lending priorities rather than operational execution.
            </p>

            <p className="text-base text-slate-200 leading-relaxed">
              Ecesis is a specialized mortgage operations and BPO partner with
              over{' '}
              <span className="text-blue-400 font-semibold">16+ years</span> of
              service excellence, delivering scalable, cost-efficient valuation
              solutions to{' '}
              <span className="text-blue-400 font-semibold">150+ clients</span>.
              With a proven track record across{' '}
              <span className="text-blue-400 font-semibold">
                50+ engagements
              </span>
              , Ecesis manages end-to-end valuation workflows supported by a
              network of{' '}
              <span className="text-blue-400 font-semibold">200+ realtors</span>{' '}
              across the U.S. and the capacity to process{' '}
              <span className="text-blue-400 font-semibold">
                20,000+ orders
              </span>{' '}
              per month. This enables lenders to achieve faster turnaround
              times, lower cost per valuation, and higher BPO volumes, all while
              operating with no additional operational overhead and maintaining
              strong compliance standards.
            </p>
          </motion.div>

          {/* RIGHT - STATS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start py-10"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              className="w-full bg-gradient-to-br from-white/10 via-white/5 to-purple-900/20 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-xl overflow-hidden group"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-5">
                  {/* Stat 1 */}
                  <div className="border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span className="text-2xl font-bold text-white">35%</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Average cost reduction
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-2xl font-bold text-white">
                        24-48
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Hour turnaround times
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div className="border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Users className="w-4 h-4 text-indigo-400" />
                      <span className="text-2xl font-bold text-white">
                        200+
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Nationwide realtor network
                    </p>
                  </div>

                  {/* Stat 4 */}
                  <div className="border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <BarChart3 className="w-4 h-4 text-pink-400" />
                      <span className="text-2xl font-bold text-white">
                        200+
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">Realtors across US</p>
                  </div>

                  <div className=" border-white/10 pb-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-2xl font-bold text-white">
                        20,000+
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Orders Processed Per Month
                    </p>
                  </div>

                  <div className=" border-white/10 pb-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-2xl font-bold text-white">
                        150+
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Trusted mortgage lenders & servicers
                    </p>
                  </div>

                  {/* stat 5 */}
                  {/* <div className="col-span-2 pt-1 mt-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-2xl font-bold text-white">
                        20,000+
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Orders Processed Per Month
                    </p>
                  </div>

                  <div className="col-span-2 pt-1 mt-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-2xl  font-bold text-white">
                        150+
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Trusted mortgage lenders & servicers
                    </p>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CLIENTS ACHIEVE + TESTIMONIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Our Clients Achieve Bullets */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Our Clients Achieve:
            </h2>

            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-3 text-base leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="font-semibold text-blue-300">
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
                className="flex items-start gap-3 text-base leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="font-semibold text-blue-300">
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
                className="flex items-start gap-3 text-base leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="font-semibold text-blue-300">
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
                className="flex items-start gap-3 text-base leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="font-semibold text-blue-300">
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
                className="flex items-start gap-3 text-base leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="font-semibold text-blue-300">
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
                className="flex items-start gap-3 text-base leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-200">
                  <span className="font-semibold text-blue-300">
                    Improved Compliance and Audit Readiness
                  </span>
                  {' with structured workflows and high-quality documentation.'}
                </span>
              </motion.li>
            </ul>
          </div>

          {/* RIGHT - Testimonial Slider */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-200 p-8 flex flex-col">
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
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-indigo-600' : 'w-2 bg-indigo-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <a
              href="https://calendly.com/vishnu-vinayan-ecesistech/30-minute-meeting-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white rounded-full font-semibold inline-flex items-center shadow-lg hover:shadow-xl transition-shadow"
              >
                Schedule your Free Operations Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
