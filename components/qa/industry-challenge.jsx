import {
  AlertCircle,
  TrendingUp,
  FileX,
  Database,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    icon: TrendingUp,
    title: "Rising operational volumes",
    description: "Across operational workflows",
  },
  // {
  //   icon: FileX,
  //   title: "Inconsistent vendor quality",
  //   description: "Across operational workflows",
  // },
  {
    icon: AlertCircle,
    title: "Compliance pressures",
    description: "Across operational workflows",
  },
  {
    icon: Database,
    title: "Data accuracy risks",
    description: "Across operational workflows",
  },
  {
    icon: Clock,
    title: "Turnaround bottlenecks",
    description: "Across operational workflows",
  },
  // {
  //   icon: Clock,
  //   title: "Turnaround bottlenecks",
  //   description: "Across operational workflows",
  // },
];

export function IndustryChallenge() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50
        px-4 sm:px-6 lg:px-12
        py-16 sm:py-20 lg:py-24
        lg:min-h-screen
        flex items-center
      "
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Industry Challenge
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Increasing operational complexity requiring reliable quality
            assurance support
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                bg-white border border-slate-200 rounded-xl
                p-6 lg:p-7
                transition-all duration-300
                group
                flex flex-col
                items-center justify-center
                text-center
                min-h-[220px]
                lg:hover:scale-105
                ${
                  activeIndex === index
                    ? "shadow-2xl border-cyan-400 bg-gradient-to-br from-cyan-500 to-blue-500 text-white"
                    : index === 0 && activeIndex === 0
                      ? "shadow-2xl border-cyan-400 bg-gradient-to-br from-cyan-500 to-blue-500 text-white"
                      : "hover:shadow-2xl hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  w-12 h-12 lg:w-14 lg:h-14
                  rounded-xl flex items-center justify-center
                  mb-5 transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "bg-white/20"
                      : "bg-slate-50 group-hover:bg-white/20"
                  }
                `}
              >
                <challenge.icon
                  className={`
                    h-6 w-6 lg:h-7 lg:w-7
                    transition-colors duration-300
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-cyan-600 group-hover:text-white"
                    }
                  `}
                />
              </div>

              {/* Title */}
              <h3
                className={`
                  text-lg lg:text-xl
                  font-bold mb-2
                  transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "text-white"
                      : "text-slate-900 group-hover:text-white"
                  }
                `}
              >
                {challenge.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  text-sm lg:text-base
                  leading-relaxed
                  transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "text-white/90"
                      : "text-slate-600 group-hover:text-white/90"
                  }
                `}
              >
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
