import {
  Zap,
  Target,
  DollarSign,
  TrendingUp,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const advantages = [
  {
    icon: DollarSign,
    title: "60% Cost Reduction",
    description:
      "Pay a fraction of typical QA salaries while maintaining enterprise-grade quality. Turn QA from a cost center into a competitive advantage.",
  },
  {
    icon: TrendingUp,
    title: "Scale in Weeks, Not Months",
    description:
      "Scale up for refinance booms and scale down when volumes normalize, without restructuring your internal team.",
  },
  {
    icon: CheckCircle2,
    title: "No Compromise on Quality",
    description:
      "GCC-standard processes, rigorous training, and continuous performance monitoring ensure consistent output across every file and every reviewer.",
  },
  {
    icon: Settings,
    title: "Flexible Engagement Models",
    description: [
      "Dedicated Teams - Your offshore QA department (Steady volume)",
      "Shared Capacity - Pay only for hours used (fluctuating volume)",
      "Per-Review Pricing - Fixed cost per order (projects and pilots)",
    ],
  },
  {
    icon: Zap,
    title: "We Work In Your Environment",
    description: [
      "Your appraisal software (a la mode, ACI, DataCourier, etc.)",
      "Your checklists, templates, and quality standards",
      "Your portals and communication channels",
      "No forced platform migration or disruptive tooling changes.",
    ],
  },
  {
    icon: Target,
    title: "Proven Results",
    description: [
      "Average 24-48 hour review turnaround",
      "40% reduction in revision cycles",
      "30-day time to measurable ROI",
      "95%+ client retention rate",
    ],
  },
];

export function WhyChooseEcesis() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            The Clear Advantage
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                bg-white border rounded-xl p-6
                transition-all duration-300 group flex flex-col h-full
                hover:-translate-y-1
                ${
                  activeIndex === index
                    ? "shadow-2xl border-transparent bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white"
                    : "border-slate-200 hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 hover:text-white"
                }
              `}
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    activeIndex === index
                      ? "bg-white/20"
                      : "bg-violet-50 group-hover:bg-white/20"
                  }`}
                >
                  <advantage.icon
                    className={`h-7 w-7 ${
                      activeIndex === index
                        ? "text-white"
                        : "text-violet-600 group-hover:text-white"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-3 ${
                    activeIndex === index
                      ? "text-white"
                      : "text-slate-900 group-hover:text-white"
                  }`}
                >
                  {advantage.title}
                </h3>

                {/* Description */}
                {Array.isArray(advantage.description) ? (
                  <ul
                    className={`text-sm leading-relaxed text-left list-disc pl-5 space-y-1 ${
                      activeIndex === index
                        ? "text-white/90"
                        : "text-slate-600 group-hover:text-white/90"
                    }`}
                  >
                    {advantage.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className={`text-sm leading-relaxed  ${
                      activeIndex === index
                        ? "text-white/90"
                        : "text-slate-600 group-hover:text-white/90"
                    }`}
                  >
                    {advantage.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
