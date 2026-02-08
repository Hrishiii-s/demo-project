import { Server, Shield, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    icon: Server,
    title: "Robust IT Infrastructure",
    description:
      "Secure and scalable operations with business continuity planning",
  },
  {
    icon: Clock,
    title: "24/7 Service Capability",
    description: "Round-the-clock operations for global client support",
  },
  {
    icon: Shield,
    title: "Disaster Recovery",
    description: "Comprehensive plans ensuring uninterrupted service delivery",
  },
  {
    icon: TrendingUp,
    title: "Scalable Delivery",
    description: "Flexible model to handle peak operational volumes",
  },
];

export function BuiltForScale() {
  // ✅ default highlighted card (0 = first)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="built-for-scale"
      className="
        bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
        px-4 sm:px-6 lg:px-12
        py-16 sm:py-20 lg:py-24
        lg:min-h-screen
        flex items-center
      "
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="
              text-4xl sm:text-5xl lg:text-6xl
              font-bold text-slate-900 mb-4 tracking-tight
            "
          >
            Built for Scale – Ready 24/7
          </h2>

          <p
            className="
              text-base sm:text-lg
              text-slate-600 max-w-2xl mx-auto
            "
          >
            Infrastructure designed for uninterrupted delivery and high-volume
            scalability
          </p>

          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
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
                    ? "shadow-2xl border-blue-400 bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                    : index === 0 && activeIndex === 0
                      ? "shadow-2xl border-blue-400 bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                      : "hover:shadow-2xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }
              `}
            >
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
                <capability.icon
                  className={`
                    h-6 w-6 lg:h-7 lg:w-7
                    transition-colors duration-300 text-center
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-blue-600 group-hover:text-white"
                    }
                  `}
                />
              </div>

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
                {capability.title}
              </h3>

              <p
                className={`
                  text-sm lg:text-base
                  leading-relaxed transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "text-white/90"
                      : "text-slate-600 group-hover:text-white/90"
                  }
                `}
              >
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
