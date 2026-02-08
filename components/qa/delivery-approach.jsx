"use client";
import { Search, CheckSquare, Users, BarChart3, TrendingUp } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Understand Workflows",
    description: "Deep dive into operational requirements",
  },
  {
    icon: CheckSquare,
    title: "Define Quality Controls",
    description: "Establish comprehensive QA framework",
  },
  {
    icon: Users,
    title: "Deploy Specialists",
    description: "Onboard trained QA experts",
  },
  {
    icon: BarChart3,
    title: "Monitor & Report",
    description: "Real-time tracking and insights",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Ongoing optimization and enhancement",
  },
];

export function DeliveryApproach() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="px-4 sm:px-6 lg:px-12
        py-16 sm:py-20 lg:py-24
        lg:min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 min-h-screen flex items-center "
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Delivery Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* Desktop view - horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300"></div>

            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(0)} // Reset to first card when mouse leaves
                >
                  <div
                    className={`
                      w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm
                      transition-all duration-300 group
                      border-2
                      ${
                        activeIndex === index
                          ? "border-orange-400 bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl text-white"
                          : index === 0 && activeIndex === 0
                            ? "border-orange-400 bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl text-white"
                            : "border-slate-200 bg-white hover:border-orange-400 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:text-white"
                      }
                    `}
                  >
                    <step.icon
                      className={`
                        h-10 w-10 transition-colors duration-300
                        ${
                          activeIndex === index ||
                          (index === 0 && activeIndex === 0)
                            ? "text-white"
                            : "text-orange-600 group-hover:text-white"
                        }
                      `}
                    />
                  </div>
                  <div className="text-center">
                    <h3
                      className={`
                        font-bold text-lg mb-2 leading-snug
                        ${
                          activeIndex === index ||
                          (index === 0 && activeIndex === 0)
                            ? "text-slate-900" // Keep default color
                            : "text-slate-900 group-hover:text-slate-900" // Keep default color even on hover
                        }
                      `}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`
                        text-sm leading-relaxed
                        ${
                          activeIndex === index ||
                          (index === 0 && activeIndex === 0)
                            ? "text-slate-600" // Keep default color
                            : "text-slate-600 group-hover:text-slate-600" // Keep default color even on hover
                        }
                      `}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet view - vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)} // Reset to first card when mouse leaves
              className={`
                flex gap-4 items-start rounded-xl p-6 shadow-sm 
                transition-all duration-300 group
                border
                ${
                  activeIndex === index
                    ? "border-orange-400 bg-gradient-to-r from-amber-500 to-orange-500 shadow-xl text-white"
                    : index === 0 && activeIndex === 0
                      ? "border-orange-400 bg-gradient-to-r from-amber-500 to-orange-500 shadow-xl text-white"
                      : "border-slate-200 bg-white hover:border-orange-400 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:text-white"
                }
              `}
            >
              <div
                className={`
                  flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center 
                  transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "bg-white/20"
                      : "bg-slate-50 group-hover:bg-white/20"
                  }
                `}
              >
                <step.icon
                  className={`
                    h-8 w-8 transition-colors duration-300
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-orange-600 group-hover:text-white"
                    }
                  `}
                />
              </div>
              <div className="pt-1">
                <h3
                  className={`
                    font-bold text-lg mb-1
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-slate-900 group-hover:text-slate-900"
                    }
                  `}
                >
                  {step.title}
                </h3>
                <p
                  className={`
                    text-sm leading-relaxed
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white/90"
                        : "text-slate-600 group-hover:text-slate-600"
                    }
                  `}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
