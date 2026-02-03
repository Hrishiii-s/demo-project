import { Award, Lock, Zap, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Enterprise Credibility",
    description: "Proven track record with Fortune 500 financial institutions and major insurance carriers."
  },
  {
    icon: FileCheck,
    title: "Structured QA Framework",
    description: "ISO-aligned methodology with consistent, repeatable processes for reliable results."
  },
  {
    icon: Lock,
    title: "Data Security & Confidentiality",
    description: "Bank-grade security, SOC 2 compliance, and strict NDA protocols for all engagements."
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient workflows and dedicated teams ensure quick delivery without compromising quality."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Industry-leading expertise and proven methodologies you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex gap-6 bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-400 hover:text-white hover:border-cyan-300 transition-all duration-300 group"
            >
              <div className="bg-blue-50 group-hover:bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <reason.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}