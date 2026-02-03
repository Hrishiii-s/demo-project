import { Building2, Landmark, TrendingUp, FileText, Globe, Home, Shield, Cpu } from "lucide-react";

const industries = [
  {
    icon: Building2,
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
    <section id="industries" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
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
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-2xl hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:border-emerald-400 hover:scale-105 transition-all duration-300 group text-center"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <industry.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white leading-tight transition-colors duration-300">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}