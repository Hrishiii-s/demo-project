import {
  CheckCircle2,
  FileCheck,
  Eye,
  GitCompare,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    icon: CheckCircle2,
    title: "Process Quality Assurance",
    description: "Across operational workflows",
  },
  {
    icon: FileCheck,
    title: "Data & Report Verification",
    description: "Accuracy and completeness validation",
  },
  {
    icon: Eye,
    title: "Vendor Output Monitoring",
    description: "Consistency checks and oversight",
  },
  {
    icon: GitCompare,
    title: "Transaction Validation",
    description: "Workflow verification and approval",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Delivery Quality",
    description: "Final checks before handoff",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Validation",
    description: "Checklist and regulatory adherence",
  },
];

export function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="capabilities"
      className="
        bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50
        px-4 sm:px-6 lg:px-12
        pt-[96px] lg:pt-[112px] 
        py-16 sm:py-20 lg:py-24
        min-h-screen        
        flex items-center
      "
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Core Capabilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                ${
                  activeIndex === index
                    ? "shadow-2xl border-purple-400 bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                    : index === 0 && activeIndex === 0
                      ? "shadow-2xl border-purple-400 bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                      : "hover:shadow-2xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white"
                }
              `}
            >
              <div
                className={`
                  w-12 h-12 lg:w-14 lg:h-14
                  rounded-xl
                  flex items-center justify-center
                  mb-5
                  transition-all duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "bg-white/20"
                      : "bg-slate-50 group-hover:bg-white/20"
                  }
                `}
              >
                <capability.icon
                  className={`
                    h-7 w-7 
                    transition-colors duration-300
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-purple-600 group-hover:text-white"
                    }
                  `}
                />
              </div>

              <h3
                className={`
                  text-xl font-bold mb-3 
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
                  leading-relaxed text-sm 
                  transition-colors duration-300
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
