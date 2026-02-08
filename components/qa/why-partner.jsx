import { Brain, Users, Zap, Target, DollarSign } from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    icon: Brain,
    title: "Deep Domain Expertise",
    description: "Specialized knowledge in valuation and transaction workflows",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Quality-focused professionals committed to excellence",
  },
  {
    icon: Zap,
    title: "Speed & Accuracy",
    description: "Faster turnaround without compromising precision",
  },
  // {
  //   icon: Target,
  //   title: "Independent QA",
  //   description: "Unbiased third-party quality control"
  // },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Optimize operations budget with scalable support",
  },
];

export function WhyPartner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="px-4 sm:px-6 lg:px-12
        py-16 sm:py-20 lg:py-24
        lg:min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 min-h-screen flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Why Partner with Ecesis
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                bg-white border border-slate-200 rounded-xl p-8 
                transition-all duration-300 group
                hover:scale-105
                ${
                  activeIndex === index
                    ? "shadow-2xl border-violet-400 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                    : index === 0 && activeIndex === 0
                      ? "shadow-2xl border-violet-400 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                      : "hover:shadow-2xl hover:border-violet-400 hover:bg-gradient-to-br hover:from-violet-500 hover:to-fuchsia-500 hover:text-white"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto 
                  transition-all duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "bg-white/20"
                      : "bg-slate-50 group-hover:bg-white/20"
                  }
                `}
              >
                <reason.icon
                  className={`
                    h-7 w-7 transition-colors duration-300
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-violet-600 group-hover:text-white"
                    }
                  `}
                />
              </div>

              <h3
                className={`
                  text-xl font-bold mb-3 transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "text-white"
                      : "text-slate-900 group-hover:text-white"
                  }
                `}
              >
                {reason.title}
              </h3>

              <p
                className={`
                  leading-relaxed text-sm transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "text-white/90"
                      : "text-slate-600 group-hover:text-white/90"
                  }
                `}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
