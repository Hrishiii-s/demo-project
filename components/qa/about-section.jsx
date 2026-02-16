import { Award, Users, MapPin, Zap, Target } from "lucide-react";

const aboutPoints = [
  {
    icon: Award,
    title: "16+ Years of Expertise",
    description: "Supporting real estate and valuation operations globally since 2010"
  },
  {
    icon: Users,
    title: "300+ Professionals",
    description: "Growing workforce across multiple delivery centers in India"
  },
  {
    icon: Target,
    title: "Specialized Focus",
    description: "Transaction, valuation, and process workflows for global clients"
  },
  {
    icon: Zap,
    title: "Execution-Focused Culture",
    description: "Driven by speed, ownership, and innovation"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            About Ecesis
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-indigo-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <point.icon className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}