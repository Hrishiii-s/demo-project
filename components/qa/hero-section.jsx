"use client";

import { ArrowRight } from "lucide-react";

export function HeroSection() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-1">
        {/* <div className="inline-block mb-10">
          <span className="px-4 py-2 text-white bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
            Trusted by Leading Financial Institutions
          </span>
        </div> */}

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 -mt-3 sm:-mt-5 px-4">
          <h1
            className="
                font-bold tracking-tight leading-[1.1]
                text-[clamp(2rem,5vw,3.5rem)]
                bg-gradient-to-r from-white/80 via-white to-white
                bg-clip-text text-transparent
              "
          >
            Scale Your Appraisal QA Capacity
          </h1>

          <h2
            className="
                font-bold tracking-tight leading-[1.1]
                text-[clamp(2rem,5vw,3.5rem)]
                bg-gradient-to-r from-purple-400 to-pink-400
                bg-clip-text text-transparent
              "
          >
            Without Scaling Your Costs
          </h2>
        </div>

        {/* Left and Right Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                Trusted by Leading Financial Institutions
              </span>
            </div>

            <p className="text-xl lg:text-3xl font-semibold text-slate-100 leading-relaxed max-w-2xl">
              Are rising volumes stretching your appraisal QA team to the limit?
            </p>

            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl">
              Recruiting, training, and retaining qualified reviewers is slow,
              expensive, and hard to flex as demand shifts. You shouldn’t have
              to turn away orders, compromise on quality, or carry excess
              headcount just to stay prepared for peak months
            </p>

            <p className="text-lg text-slate-100 leading-relaxed max-w-2xl">
              <strong>
                Ecesis powers your QA operations with dedicated teams at 60%
                lower cost,
              </strong>{" "}
              delivering enterprise-grade quality without the premium price tag.
            </p>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              Whether you're processing 500 or 5,000 appraisals monthly, get the
              review capacity you need in weeks, not months.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("final-cta")}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
              >
                Scale Your QA Team Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-200">
                See Pricing Models
              </button>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:flex lg:items-start lg:justify-end">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl max-w-md transform hover:scale-[1.02] transition-transform duration-300">
              {/* Stats Counters */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    60%
                  </div>
                  <div className="text-lg  text-slate-800 font-medium">
                    Cost Reduction
                  </div>
                  <p className="text-sm text-slate-700">
                    Pay a fraction of onshore QA salaries while maintaining the
                    same quality standards.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    24-48h
                  </div>
                  <div className="text-lg text-slate-800 font-medium">
                    Faster Turnaround
                  </div>
                  <p className="text-sm text-slate-700">
                    Average turnaround time with consistent quality.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    3 types
                  </div>
                  <div className="text-lg text-slate-800 font-medium">
                    Flexible Models
                  </div>
                  <p className="text-sm text-slate-700">
                    Dedicated Teams, Shared Capacity, Per-Review Pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
