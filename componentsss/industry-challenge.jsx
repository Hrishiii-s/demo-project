import { AlertCircle, TrendingUp, FileX, Database, Clock, Users, DollarSign } from "lucide-react";

const challenges = [
  {
    icon: TrendingUp,
    title: "Rising operational volumes"
  },
  {
    icon: FileX,
    title: "Inconsistent vendor quality"
  },
  {
    icon: AlertCircle,
    title: "Compliance pressures"
  },
  {
    icon: Database,
    title: "Data accuracy risks"
  },
  {
    icon: Clock,
    title: "Turnaround bottlenecks"
  },
  {
    icon: Users,
    title: "QA team scaling challenges"
  },
  {
    icon: DollarSign,
    title: "Cost pressures"
  }
];

export function IndustryChallenge() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Industry Challenge
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Increasing operational complexity requiring reliable quality assurance support
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:border-pink-400 hover:scale-105 transition-all duration-300 group text-center"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <challenge.icon className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white leading-tight transition-colors duration-300">
                {challenge.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}