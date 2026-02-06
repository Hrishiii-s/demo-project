import {
  AlertCircle,
  TrendingUp,
  FileX,
  Database,
  Clock,
  Users,
} from "lucide-react";

const challenges = [
  { icon: TrendingUp, title: "Rising operational volumes" },
  { icon: FileX, title: "Inconsistent vendor quality" },
  { icon: AlertCircle, title: "Compliance pressures" },
  { icon: Database, title: "Data accuracy risks" },
  { icon: Clock, title: "Turnaround bottlenecks" },
  { icon: Users, title: "QA team scaling challenges" },
];

export function IndustryChallenge() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50  min-h-screen">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Industry Challenge
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Increasing operational complexity requiring reliable quality
            assurance support
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8
                         hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500
                         hover:text-white hover:border-cyan-400 hover:scale-105
                         transition-all duration-300 group"
            >
              <div
                className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl
                              flex items-center justify-center mb-6
                              transition-colors duration-300"
              >
                <challenge.icon className="h-7 w-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                {challenge.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
