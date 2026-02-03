import { Users, Zap, TrendingUp, Handshake, Lightbulb } from "lucide-react";

const models = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Fully aligned to your operations"
  },
  {
    icon: Zap,
    title: "On-Demand Support",
    description: "Flexible when you need it"
  },
  {
    icon: TrendingUp,
    title: "Overflow Handling",
    description: "Scale during peak periods"
  },
  {
    icon: Handshake,
    title: "Ongoing Partnerships",
    description: "Long-term collaborative engagement"
  },
  {
    icon: Lightbulb,
    title: "Process Improvement",
    description: "Continuous optimization"
  }
];

export function EngagementModels() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Engagement Models
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-fuchsia-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {models.map((model, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-rose-500 hover:to-fuchsia-500 hover:text-white hover:border-rose-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <model.icon className="h-7 w-7 text-rose-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {model.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}