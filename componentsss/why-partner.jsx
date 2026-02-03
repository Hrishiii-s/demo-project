import { Brain, Users, Zap, Target, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Deep Domain Expertise",
    description: "Specialized knowledge in valuation and transaction workflows"
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Quality-focused professionals committed to excellence"
  },
  {
    icon: Zap,
    title: "Speed & Accuracy",
    description: "Faster turnaround without compromising precision"
  },
  {
    icon: Target,
    title: "Independent QA",
    description: "Unbiased third-party quality control"
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Optimize operations budget with scalable support"
  }
];

export function WhyPartner() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Why Partner with Ecesis
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-violet-500 hover:to-fuchsia-500 hover:text-white hover:border-violet-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <reason.icon className="h-7 w-7 text-violet-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}