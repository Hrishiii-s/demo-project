import { AlertCircle, CheckSquare, BarChart3, FileText } from "lucide-react";

const benefits = [
  {
    icon: AlertCircle,
    title: "Reduce Data Errors",
    description: "Minimize costly mistakes with systematic property data validation and error detection."
  },
  {
    icon: CheckSquare,
    title: "Improve Compliance",
    description: "Ensure regulatory adherence with comprehensive QA checks aligned to industry standards."
  },
  {
    icon: BarChart3,
    title: "Scalable QA for Large Portfolios",
    description: "Handle thousands of properties efficiently with our proven QA infrastructure."
  },
  {
    icon: FileText,
    title: "Actionable QA Reports",
    description: "Get clear, detailed reports with prioritized findings and remediation guidance."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Property QA Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Protect your investments and regulatory standing with professional property quality assurance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-400 hover:text-white hover:border-purple-300 transition-all duration-300 group"
            >
              <div className="bg-blue-50 group-hover:bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}