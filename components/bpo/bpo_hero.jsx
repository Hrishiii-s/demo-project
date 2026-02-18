

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "During the 2024 refi surge, Ecesis scaled with us seamlessly. We processed 3× our normal volume without adding headcount or missing SLAs.",
    author: "Chief Operations Officer",
    company: "Mid-Size Mortgage Lender",
  },
  {
    quote:
      "Ecesis took BPO coordination completely off our plate while improving turn-times and reducing per-unit costs by 35%.",
    author: "SVP of Servicing Operations",
    company: "National Servicer",
  },
  {
    quote:
      "We eliminated the equivalent of 1.5 FTEs in coordination work. The ROI was clear within 60 days.",
    author: "VP Operations",
    company: "Regional Mortgage Bank",
  },
];

const slideVariants = {
  enter: { x: 60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 },
};

export const BpoHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-24 min-h-screen overflow-hidden bg-gradient-to-br from-blue-300/40 via-indigo-300/40 to-purple-300/40">
      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/60 via-indigo-500/60 to-purple-600/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/60 via-purple-500/60 to-pink-500/60 rounded-full blur-3xl" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 max-w-5xl mx-auto mb-4">
          Mortgage Valuation Operations Without the Operational Burden
        </h1>
        <p className="text-xl font-semibold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
          Scale Broker & Agent Operations Without Scaling Internal Overhead
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-xl"
          >
            <p className="text-lg text-gray-700 mb-3 leading-relaxed">
              We manage coordination, quality control, and workflow behind your
              mortgage valuations—improving turn-times and lowering costs so
              your teams can focus on borrowers, not operational bottlenecks.
            </p>

            <p className="text-lg text-gray-700 mb-3 leading-relaxed">
              For over{" "}
              <span className="font-semibold text-gray-900">16 years</span>,
              Ecesis has delivered expert mortgage operations and BPO support to
              lenders nationwide.
            </p>

            <p className="text-lg font-semibold text-gray-900 mb-4">
              Our clients achieve:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              {[
                "Lower per-valuation costs through specialized workflows",
                "Flexible scaling with volume — no fixed staffing overhead",
                "Reduced overtime and temp staffing expenses",
                "Faster turn-times that increase close rates",
                "Stronger compliance controls to avoid audit remediation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold inline-flex items-center group shadow-lg"
          >
            Schedule your Free Operations Assessment
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* RIGHT TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-200 p-10 w-full max-w-xl xl:w-[580px] ml-auto overflow-hidden"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
            What Mortgage Leaders Say
          </p>

          <div className="relative h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <p className="text-xl text-gray-800 leading-relaxed mb-6">
                  “{testimonials[index].quote}”
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  — {testimonials[index].author}, {testimonials[index].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 mt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-indigo-600" : "w-2 bg-indigo-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
