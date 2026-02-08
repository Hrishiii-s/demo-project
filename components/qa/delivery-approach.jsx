<<<<<<< HEAD
import { Search, CheckSquare, Users, BarChart3, TrendingUp } from "lucide-react";
=======
import {
  Search,
  CheckSquare,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
>>>>>>> private/hrishi/dev

const steps = [
  {
    icon: Search,
    title: "Understand Workflows",
<<<<<<< HEAD
    description: "Deep dive into operational requirements"
=======
    description: "Deep dive into operational requirements",
>>>>>>> private/hrishi/dev
  },
  {
    icon: CheckSquare,
    title: "Define Quality Controls",
<<<<<<< HEAD
    description: "Establish comprehensive QA framework"
=======
    description: "Establish comprehensive QA framework",
>>>>>>> private/hrishi/dev
  },
  {
    icon: Users,
    title: "Deploy Specialists",
<<<<<<< HEAD
    description: "Onboard trained QA experts"
=======
    description: "Onboard trained QA experts",
>>>>>>> private/hrishi/dev
  },
  {
    icon: BarChart3,
    title: "Monitor & Report",
<<<<<<< HEAD
    description: "Real-time tracking and insights"
=======
    description: "Real-time tracking and insights",
>>>>>>> private/hrishi/dev
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
<<<<<<< HEAD
    description: "Ongoing optimization and enhancement"
  }
];

export function DeliveryApproach() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 min-h-screen flex items-center">
=======
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
>>>>>>> private/hrishi/dev
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
<<<<<<< HEAD
            
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white border-2 border-slate-200 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm hover:shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 transition-all duration-300 group">
                    <step.icon className="h-10 w-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
=======

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
>>>>>>> private/hrishi/dev
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
<<<<<<< HEAD
            <div key={index} className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:border-orange-400 transition-all duration-300 group">
              <div className="flex-shrink-0 bg-slate-50 group-hover:bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300">
                <step.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-white mb-1 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
=======
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
>>>>>>> private/hrishi/dev
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> private/hrishi/dev
