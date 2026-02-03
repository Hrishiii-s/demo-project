import { Server, Shield, Clock, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Robust IT Infrastructure",
    description: "Secure and scalable operations with business continuity planning"
  },
  {
    icon: Clock,
    title: "24/7 Service Capability",
    description: "Round-the-clock operations for global client support"
  },
  {
    icon: Shield,
    title: "Disaster Recovery",
    description: "Comprehensive plans ensuring uninterrupted service delivery"
  },
  {
    icon: TrendingUp,
    title: "Scalable Delivery",
    description: "Flexible model to handle peak operational volumes"
  }
];

export function BuiltForScale() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Built for Scale – Ready 24/7
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Infrastructure designed for uninterrupted delivery and high-volume scalability
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-blue-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <capability.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}