import { Target, ShieldCheck, Award, Clock, Users, TrendingUp } from "lucide-react";

const impacts = [
  {
    icon: Target,
    title: "Improved Accuracy",
    description: "Higher quality outputs across processes"
  },
  {
    icon: ShieldCheck,
    title: "Reduced Risk",
    description: "Minimized compliance and operational risks"
  },
  {
    icon: Award,
    title: "Vendor Consistency",
    description: "Enhanced third-party performance"
  },
  {
    icon: Clock,
    title: "Faster Delivery",
    description: "Optimized turnaround times"
  },
  {
    icon: Users,
    title: "Freed Internal Resources",
    description: "Teams focus on strategic work"
  },
  {
    icon: TrendingUp,
    title: "Peak Volume Support",
    description: "Scale during demand spikes"
  }
];

export function BusinessImpact() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Business Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-sky-500 hover:to-indigo-500 hover:text-white hover:border-sky-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <impact.icon className="h-7 w-7 text-sky-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {impact.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}