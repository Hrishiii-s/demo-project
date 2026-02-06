import { ArrowRight, Shield } from "lucide-react";
import { Counter } from "./counter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                Trusted by Leading Financial Institutions
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Quality Assurance Process & Verification{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              Strengthen operational quality with independent QA and
              verification support for real estate and financial workflows.
            </p>

            {/* Stats Counters */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <Counter end={16} duration={1200} suffix="+" />
                </div>
                <div className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                  Years of Expertise
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  <Counter end={300} duration={1200} suffix="+" />
                </div>
                <div className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                  Professionals
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2 group">
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="lg:flex lg:items-center lg:justify-end ">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl max-w-md transform hover:scale-[1.02] transition-transform duration-300">
              {/* Quote Icon */}
              <div className="text-5xl text-purple-600 mb-1 font-serif leading-none">
                "
              </div>

              {/* Testimonial */}
              <p className="text-slate-800 text-lg mb-6 leading-relaxed font-medium">
                Ecesis transformed our quality assurance process. Their team's
                deep understanding of real estate workflows and meticulous
                attention to detail helped us reduce errors by 40% while
                speeding up our delivery timelines.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    40%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    Error Reduction
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    25%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    Faster Delivery
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="pt-6 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-base">
                  Michael Chen
                </p>
                <p className="text-sm text-slate-600 mb-3">VP of Operations</p>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span className="font-semibold text-slate-700 text-sm">
                    National Property Valuations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}