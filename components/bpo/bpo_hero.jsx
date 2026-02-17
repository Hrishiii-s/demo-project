import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  Clock,
  Target,
  BarChart3,
  Lock,
  Headphones,
  Calendar,
  FileText,
  Home,
} from "lucide-react";

export const BpoHero = () => {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden bg-gradient-to-br from-blue-300/40 via-indigo-300/40 to-purple-300/40">
      {/* Base gradient */}
      <div className="absolute inset-0 -z-10" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/60 via-indigo-500/60 to-purple-600/60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/60 via-purple-500/60 to-pink-500/60 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* ===== TOP FULL-WIDTH HEADING ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Powering Operations for Growing <br className="hidden lg:block" />
          Real Estate & Mortgage Companies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent"
        >
          Scale Broker & Agent Operations Without Scaling Internal Overhead
        </motion.p>
      </div>

      {/* ===== CONTENT + TESTIMONIAL GRID ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
            Ecesis partners with real estate brokerages, mortgage companies, and
            valuation firms to streamline operational workflows supporting
            nationwide broker and agent networks.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
            With 16+ years of experience in the US real estate ecosystem, we
            help organizations improve turnaround times, enforce consistency,
            and scale operations through dedicated offshore teams.
          </p>

          <p className="text-lg font-semibold text-gray-900 mb-10">
            As your broker and agent network grows, your operations grow with
            it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center group">
              Build Your Dedicated Operations Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-5 py-2 bg-white/90 backdrop-blur text-gray-700 border-2 border-blue-200 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold">
              Book a Strategy Consultation
            </button>
          </div>
        </motion.div>

        {/* RIGHT TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200 p-8 max-w-md ml-auto"
        >
          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400/40 to-indigo-400/40 rounded-full blur-2xl" />

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">
              Client Testimonial
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              “Ecesis allowed us to scale broker operations rapidly without
              increasing internal headcount. Review turnaround times improved
              immediately, and operational consistency became effortless.”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <p className="font-semibold text-gray-900">John D.</p>
                <p className="text-sm text-gray-600">
                  VP Operations, National Brokerage
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-50/80 to-transparent -z-10" />
    </section>
  );}