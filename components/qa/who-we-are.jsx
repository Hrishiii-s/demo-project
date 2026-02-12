import {
  AlertCircle,
  TrendingUp,
  FileX,
  Database,
  Clock,
  Users,
  DollarSign,
  Award,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useState } from "react";

const expertise = [
  {
    icon: Award,
    title: "Appraisal methodologies and USPAP standards",
  },
  {
    icon: TrendingUp,
    title: "AMC workflow requirements and portal integrations",
  },
  {
    icon: FileX,
    title: "Lender-specific quality guidelines",
  },
  {
    icon: CheckCircle2,
    title: "Compliance requirements (Fannie Mae, Freddie Mac, FHA, VA)",
  },
  {
    icon: Clock,
    title: "The production pressure of tight turnarounds",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster onboarding (2-3 weeks vs. 2-3 months)",
  },
  {
    icon: AlertCircle,
    title: "Fewer errors and less rework",
  },
  {
    icon: Users,
    title: "Teams that operate as true extensions of your organization",
  },
  {
    icon: CheckCircle2,
    title: "No steep learning curves or constant hand-holding",
  },
];

export function WhoWeAre() {
  const [activeExpertiseIndex, setActiveExpertiseIndex] = useState(0);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  return (
    <section className="min-h-screen py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight px-2">
            Built on Real Estate Valuation Expertise
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Ecesis isn't a generic offshore vendor. We're valuation operations
            specialists.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Expertise Section */}
        <div className="mb-10 lg:mb-12 max-w-6xl mx-auto">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 text-center px-2">
            Our team understands:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveExpertiseIndex(index)}
                className={`
                  bg-white/90 backdrop-blur-sm border rounded-xl p-4 sm:p-5
                  transition-all duration-300 group flex flex-col h-full
                  hover:-translate-y-1
                  ${
                    activeExpertiseIndex === index
                      ? "shadow-xl border-pink-500 bg-gradient-to-br from-pink-600 to-rose-600 text-white"
                      : "border-slate-200 hover:shadow-xl hover:border-pink-500 hover:bg-gradient-to-br hover:from-pink-600 hover:to-rose-600 hover:text-white"
                  }
                `}
              >
                <div className="flex flex-col items-center h-full">
                  <div
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 
                      transition-all duration-300 flex-shrink-0
                      ${
                        activeExpertiseIndex === index
                          ? "bg-white/20"
                          : "bg-pink-50 group-hover:bg-white/20"
                      }
                    `}
                  >
                    <item.icon
                      className={`
                        h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300
                        ${
                          activeExpertiseIndex === index
                            ? "text-white"
                            : "text-pink-600 group-hover:text-white"
                        }
                      `}
                    />
                  </div>
                  <h4
                    className={`
                      text-xs sm:text-sm font-semibold text-center leading-snug transition-colors duration-300
                      ${
                        activeExpertiseIndex === index
                          ? "text-white"
                          : "text-slate-900 group-hover:text-white"
                      }
                    `}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto mb-8 lg:mb-10">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 text-center px-2">
            This means:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveBenefitIndex(index)}
                className={`
                  bg-white/90 backdrop-blur-sm border rounded-xl p-4 sm:p-5
                  transition-all duration-300 group flex flex-col h-full
                  hover:-translate-y-1
                  ${
                    activeBenefitIndex === index
                      ? "shadow-xl border-rose-500 bg-gradient-to-br from-rose-600 to-purple-600 text-white"
                      : "border-slate-200 hover:shadow-xl hover:border-rose-500 hover:bg-gradient-to-br hover:from-rose-600 hover:to-purple-600 hover:text-white"
                  }
                `}
              >
                <div className="flex flex-col items-center h-full">
                  <div
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 
                      transition-all duration-300 flex-shrink-0
                      ${
                        activeBenefitIndex === index
                          ? "bg-white/20"
                          : "bg-rose-50 group-hover:bg-white/20"
                      }
                    `}
                  >
                    <item.icon
                      className={`
                        h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300
                        ${
                          activeBenefitIndex === index
                            ? "text-white"
                            : "text-rose-600 group-hover:text-white"
                        }
                      `}
                    />
                  </div>
                  <h4
                    className={`
                      text-xs sm:text-sm font-semibold text-center leading-snug transition-colors duration-300
                      ${
                        activeBenefitIndex === index
                          ? "text-white"
                          : "text-slate-900 group-hover:text-white"
                      }
                    `}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-12 text-center">
          <p className="text-xl font-bold text-slate-900 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent py-4 px-8 rounded-2xl inline-block">
            We deliver GCC-grade quality (Global Capability Center standards) at
            offshore pricing.
          </p>
        </div>
      </div>
    </section>
  );
}