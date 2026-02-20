"use client";;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight,Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "During the 2024 refinance surge, Ecesis scaled with us seamlessly. We processed 3× our normal volume without adding headcount or missing SLAs.",
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
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export const BpoHero = () => {
   const [[index, direction], setIndex] = useState([0, 0]);

   const paginate = (newDirection) => {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-5xl mx-auto mb-4">
          Outsource Mortgage Valuations Without{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Adding Operational Overhead
          </span>
        </h1>
        <p
          className="
  text-xl font-semibold
  bg-gradient-to-r from-indigo-700 via-slate-700 to-gray-800
  bg-clip-text text-transparent
"
        >
          Grow Broker and Agent Productivity Without Growing Internal Headcount
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
              mortgage valuations, improving turn times and lowering costs so
              your teams can focus on borrowers, not operational bottlenecks.
            </p>

            <p className="text-lg text-gray-700 mb-3 leading-relaxed">
              For over{" "}
              <span className="font-semibold text-gray-900">16 years</span>,
              Ecesis has delivered expert mortgage operations and BPO support to
              lenders nationwide.
            </p>

            <p className="text-lg font-semibold text-indigo-700 mb-3">
              Our clients achieve :
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              {[
                "Lower per-valuation costs through specialized workflows",
                "Flexible scaling with volume, no fixed staffing overhead",
                "Reduced overtime and  temporary staffing expenses",
                "Improve turn-times and closing rates with tighter SLA",
                "Strengthen compliance and audit readiness with clean documentation",
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

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              href="https://calendly.com/vishnu-vinayan-ecesistech/30-minute-meeting-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold inline-flex items-center group shadow-lg"
              >
                Schedule your Free Operations Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="
                  relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl
                  border border-blue-200
                  p-6 sm:p-8 lg:p-10
                  w-full max-w-md sm:max-w-lg lg:max-w-xl
                  mx-auto
                  mt-8 lg:mt-0
                  overflow-hidden
                "
        >
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
            What Mortgage Leaders Say
          </p>

          {/* Quote Icon */}
          <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-200" />

          {/* SLIDER WRAPPER */}
          <div className="relative min-h-[220px] sm:min-h-[200px] lg:h-[220px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -80) paginate(1);
                  if (offset.x > 80) paginate(-1);
                }}
                className="
          absolute inset-0
          flex flex-col justify-center
          cursor-grab active:cursor-grabbing
          px-1
        "
              >
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 break-words">
                  <span className="text-xl sm:text-2xl font-serif mr-1">“</span>
                  {testimonials[index].quote}
                  <span className="text-xl sm:text-2xl font-serif ml-1">”</span>
                </p>

                <p className="text-sm font-semibold text-amber-600">
                  — {testimonials[index].author}, {testimonials[index].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 mb-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i !== index) {
                    setIndex([i, i > index ? 1 : -1]);
                  }
                }}
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
