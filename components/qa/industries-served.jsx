<<<<<<< HEAD
import { Building2, Landmark, TrendingUp, FileText, Globe, Home, Shield, Cpu } from "lucide-react";
=======
import {
  Building2,
  Landmark,
  TrendingUp,
  FileText,
  Globe,
  Home,
  Shield,
  Cpu,
} from "lucide-react";
import { useState } from "react";
>>>>>>> private/hrishi/dev

const industries = [
  {
    icon: Building2,
<<<<<<< HEAD
    title: "Banks & Financial Institutions"
  },
  {
    icon: Landmark,
    title: "Mortgage Lenders & Servicers"
  },
  {
    icon: TrendingUp,
    title: "Asset Management Companies"
  },
  {
    icon: FileText,
    title: "Valuation & Appraisal Firms"
  },
  {
    icon: Globe,
    title: "Real Estate Portals"
  },
  {
    icon: Home,
    title: "Property Management"
  },
  {
    icon: Shield,
    title: "Insurance & Title Companies"
  },
  {
    icon: Cpu,
    title: "PropTech Firms"
  }
];

export function IndustriesServed() {
  return (
    <section
      id="industries"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:border-emerald-400 hover:scale-105 transition-all duration-300 group text-center"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <industry.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-white leading-tight transition-colors duration-300">
=======
    title: "Banks & Financial Institutions",
  },
  {
    icon: Landmark,
    title: "Mortgage Lenders & Servicers",
  },
  {
    icon: TrendingUp,
    title: "Asset Management Companies",
  },
  {
    icon: FileText,
    title: "Valuation & Appraisal Firms",
  },
  {
    icon: Globe,
    title: "Real Estate Portals",
  },
  {
    icon: Home,
    title: "Property Management",
  },
  {
    icon: Shield,
    title: "Insurance & Title Companies",
  },
  {
    icon: Cpu,
    title: "PropTech Firms",
  },
];

export function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="industries"
      className="
        bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50
        px-4 sm:px-6 lg:px-12
        py-16 sm:py-20 lg:py-24
        lg:min-h-screen
        flex items-center
      "
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                bg-white border border-slate-200 rounded-xl
                p-6 lg:p-7
                transition-all duration-300
                group
                flex flex-col items-center justify-center
                text-center
                min-h-[220px]
                lg:hover:scale-105
                ${
                  activeIndex === index
                    ? "shadow-2xl border-emerald-400 bg-gradient-to-br from-emerald-500 to-teal-500 text-white"
                    : index === 0 && activeIndex === 0
                      ? "shadow-2xl border-emerald-400 bg-gradient-to-br from-emerald-500 to-teal-500 text-white"
                      : "hover:shadow-2xl hover:border-emerald-400 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white"
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
                <industry.icon
                  className={`
                    h-6 w-6 lg:h-7 lg:w-7
                    transition-colors duration-300
                    ${
                      activeIndex === index ||
                      (index === 0 && activeIndex === 0)
                        ? "text-white"
                        : "text-emerald-600 group-hover:text-white"
                    }
                  `}
                />
              </div>

              <h3
                className={`
                  text-lg lg:text-xl
                  font-bold leading-tight transition-colors duration-300
                  ${
                    activeIndex === index || (index === 0 && activeIndex === 0)
                      ? "text-white"
                      : "text-slate-900 group-hover:text-white"
                  }
                `}
              >
>>>>>>> private/hrishi/dev
                {industry.title}
              </h3>
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
