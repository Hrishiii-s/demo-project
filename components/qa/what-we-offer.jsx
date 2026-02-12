import { Server, Shield, Clock, TrendingUp, CheckCircle2, FileCheck, BarChart3 } from "lucide-react";
import { useState } from "react";

export function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen py-16 lg:py-20 px-4 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Power Your Quality Assurance Operations
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
            Scale with Experts Who Think and Work Like Your Core Team
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="mb-6 max-w-4xl mx-auto">
          <p className="text-sm lg:text-base text-slate-600 leading-relaxed text-center">
            Stop turning away business because your QA team is maxed out,
            sacrificing quality because you can't afford enough reviewers, or
            trapped in the endless cycle of recruiting, training, and managing
            QA staff. Eliminate these constraints holding your business back—you
            no longer have to turn away business because your Quality Assurance
            (QA) team is overwhelmed, compromise on quality due to a lack of
            affordable reviewers, or endure the perpetual cycle of recruiting,
            training, and managing expensive QA personnel.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Comprehensive Appraisal Review */}
          <div 
            onMouseEnter={() => setActiveIndex(0)}
            className={`
              bg-white/90 backdrop-blur-sm border rounded-2xl p-6
              transition-all duration-300 group
              hover:-translate-y-1
              ${
                activeIndex === 0
                  ? "shadow-xl border-blue-500 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                  : "border-slate-200 hover:shadow-xl hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white"
              }
            `}
          >
            <div 
              className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300
                ${
                  activeIndex === 0
                    ? "bg-white/20"
                    : "bg-blue-50 group-hover:bg-white/20"
                }
              `}
            >
              <CheckCircle2 
                className={`
                  h-7 w-7 transition-colors duration-300
                  ${
                    activeIndex === 0
                      ? "text-white"
                      : "text-blue-600 group-hover:text-white"
                  }
                `} 
              />
            </div>
            <h3 
              className={`
                text-xl lg:text-2xl font-bold mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 0
                    ? "text-white"
                    : "text-slate-900 group-hover:text-white"
                }
              `}
            >
              Comprehensive Appraisal Review
            </h3>
            <p 
              className={`
                leading-relaxed text-xs lg:text-sm mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 0
                    ? "text-white/90"
                    : "text-slate-600 group-hover:text-white/90"
                }
              `}
            >
              Our QA specialists handle:
            </p>
            <ul className="space-y-1.5 text-xs lg:text-sm max-w-md mx-auto">
              {[
                "URAR (1004), Condo (1073), 2-4 Unit (1025), Land (1004C)",
                "Desktop appraisals, BPO reviews, AVM validations",
                "USPAP compliance verification",
                "Fannie Mae, Freddie Mac guideline checks",
                "Comparable analysis validation",
                "Quality Control & Compliance",
                "Scalable Review Capacity"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span 
                    className={`
                      mt-0.5 transition-colors duration-300
                      ${
                        activeIndex === 0
                          ? "text-white/90"
                          : "text-blue-600 group-hover:text-white/90"
                      }
                    `}
                  >
                    •
                  </span>
                  <span 
                    className={`
                      transition-colors duration-300
                      ${
                        activeIndex === 0
                          ? "text-white/90"
                          : "group-hover:text-white/90"
                      }
                    `}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p 
              className={`
                text-xs lg:text-sm font-semibold mt-3 text-center transition-colors duration-300
                ${
                  activeIndex === 0
                    ? "text-white/90"
                    : "text-blue-700 group-hover:text-white/90"
                }
              `}
            >
              You get trained QA professionals who understand valuation workflows — not general document reviewers.
            </p>
          </div>

          {/* Card 2: Full Appraisal & Valuation Production Services */}
          <div 
            onMouseEnter={() => setActiveIndex(1)}
            className={`
              bg-white/90 backdrop-blur-sm border rounded-2xl p-6
              transition-all duration-300 group
              hover:-translate-y-1
              ${
                activeIndex === 1
                  ? "shadow-xl border-purple-500 bg-gradient-to-br from-purple-600 to-purple-700 text-white"
                  : "border-slate-200 hover:shadow-xl hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 hover:text-white"
              }
            `}
          >
            <div 
              className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300
                ${
                  activeIndex === 1
                    ? "bg-white/20"
                    : "bg-purple-50 group-hover:bg-white/20"
                }
              `}
            >
              <FileCheck 
                className={`
                  h-7 w-7 transition-colors duration-300
                  ${
                    activeIndex === 1
                      ? "text-white"
                      : "text-purple-600 group-hover:text-white"
                  }
                `} 
              />
            </div>
            <h3 
              className={`
                text-xl lg:text-2xl font-bold mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 1
                    ? "text-white"
                    : "text-slate-900 group-hover:text-white"
                }
              `}
            >
              Full Appraisal & Valuation Production
            </h3>
            <p 
              className={`
                leading-relaxed text-xs lg:text-sm mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 1
                    ? "text-white/90"
                    : "text-slate-600 group-hover:text-white/90"
                }
              `}
            >
              Complete Order Processing From Assignment to Delivery
            </p>
            <p 
              className={`
                leading-relaxed text-xs lg:text-sm mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 1
                    ? "text-white/90"
                    : "text-slate-600 group-hover:text-white/90"
                }
              `}
            >
              If you're a portal looking to outsource entire appraisal production, we handle complete order fulfillment:
            </p>
            <ul className="space-y-1.5 text-xs lg:text-sm max-w-md mx-auto">
              {[
                "Residential appraisals (URAR, 1004, 1025, 1073, 2055)",
                "Desktop valuations and BPOs",
                "Property data research and comparable analysis",
                "Report compilation and compliance checks",
                "Photo editing and sketch creation",
                "Final delivery in your required format"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span 
                    className={`
                      mt-0.5 transition-colors duration-300
                      ${
                        activeIndex === 1
                          ? "text-white/90"
                          : "text-purple-600 group-hover:text-white/90"
                      }
                    `}
                  >
                    •
                  </span>
                  <span 
                    className={`
                      transition-colors duration-300
                      ${
                        activeIndex === 1
                          ? "text-white/90"
                          : "group-hover:text-white/90"
                      }
                    `}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p 
              className={`
                text-xs lg:text-sm font-semibold mt-3 text-center transition-colors duration-300
                ${
                  activeIndex === 1
                    ? "text-white/90"
                    : "text-purple-700 group-hover:text-white/90"
                }
              `}
            >
              Pricing: 30-50% below typical appraisal costs with consistent quality and on-time delivery.
            </p>
            <button 
              className={`
                mt-3 text-xs lg:text-sm font-semibold underline mx-auto block transition-colors duration-300
                ${
                  activeIndex === 1
                    ? "text-white"
                    : "text-purple-600 group-hover:text-white"
                }
              `}
            >
              Request Volume Pricing →
            </button>
          </div>

          {/* Card 3: Operational Support for AMCs */}
          <div 
            onMouseEnter={() => setActiveIndex(2)}
            className={`
              bg-white/90 backdrop-blur-sm border rounded-2xl p-6
              transition-all duration-300 group
              hover:-translate-y-1
              ${
                activeIndex === 2
                  ? "shadow-xl border-cyan-500 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white"
                  : "border-slate-200 hover:shadow-xl hover:border-cyan-500 hover:bg-gradient-to-br hover:from-cyan-600 hover:to-cyan-700 hover:text-white"
              }
            `}
          >
            <div 
              className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300
                ${
                  activeIndex === 2
                    ? "bg-white/20"
                    : "bg-cyan-50 group-hover:bg-white/20"
                }
              `}
            >
              <BarChart3 
                className={`
                  h-7 w-7 transition-colors duration-300
                  ${
                    activeIndex === 2
                      ? "text-white"
                      : "text-cyan-600 group-hover:text-white"
                  }
                `} 
              />
            </div>
            <h3 
              className={`
                text-xl lg:text-2xl font-bold mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 2
                    ? "text-white"
                    : "text-slate-900 group-hover:text-white"
                }
              `}
            >
              Operational Support for AMCs
            </h3>
            <p 
              className={`
                leading-relaxed text-xs lg:text-sm mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 2
                    ? "text-white/90"
                    : "text-slate-600 group-hover:text-white/90"
                }
              `}
            >
              Reduce Administrative Burden, Increase Throughput
            </p>
            <p 
              className={`
                leading-relaxed text-xs lg:text-sm mb-3 text-center transition-colors duration-300
                ${
                  activeIndex === 2
                    ? "text-white/90"
                    : "text-slate-600 group-hover:text-white/90"
                }
              `}
            >
              Free your team from time-consuming tasks that don't require licensed expertise:
            </p>
            <ul className="space-y-1.5 text-xs lg:text-sm max-w-md mx-auto">
              {[
                "Order coordination and appraiser assignment",
                "Property data research and MLS pulls",
                "Client communication and status updates",
                "Document processing and file management",
                "Revision coordination and resubmission tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span 
                    className={`
                      mt-0.5 transition-colors duration-300
                      ${
                        activeIndex === 2
                          ? "text-white/90"
                          : "text-cyan-600 group-hover:text-white/90"
                      }
                    `}
                  >
                    •
                  </span>
                  <span 
                    className={`
                      transition-colors duration-300
                      ${
                        activeIndex === 2
                          ? "text-white/90"
                          : "group-hover:text-white/90"
                      }
                    `}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p 
              className={`
                text-xs lg:text-sm font-semibold mt-3 text-center transition-colors duration-300
                ${
                  activeIndex === 2
                    ? "text-white/90"
                    : "text-cyan-700 group-hover:text-white/90"
                }
              `}
            >
              Let your internal team focus on client relationships and complex cases while we handle production operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}