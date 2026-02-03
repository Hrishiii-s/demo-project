import { Search, CheckSquare, Users, BarChart3, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand Workflows",
    description: "Deep dive into operational requirements"
  },
  {
    icon: CheckSquare,
    title: "Define Quality Controls",
    description: "Establish comprehensive QA framework"
  },
  {
    icon: Users,
    title: "Deploy Specialists",
    description: "Onboard trained QA experts"
  },
  {
    icon: BarChart3,
    title: "Monitor & Report",
    description: "Real-time tracking and insights"
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Ongoing optimization and enhancement"
  }
];

export function DeliveryApproach() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Delivery Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* Desktop view - horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300"></div>
            
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white border-2 border-slate-200 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm hover:shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 transition-all duration-300 group">
                    <step.icon className="h-10 w-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet view - vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:border-orange-400 transition-all duration-300 group">
              <div className="flex-shrink-0 bg-slate-50 group-hover:bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300">
                <step.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-white mb-1 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}