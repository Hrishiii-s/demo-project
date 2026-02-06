import { Database, ClipboardCheck, Building } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Property Data QA",
    description: "Comprehensive validation of property information including addresses, attributes, ownership records, and tax data.",
    features: [
      "Data accuracy verification",
      "Completeness checks",
      "Cross-reference validation",
      "Error reporting & remediation"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Valuation Review QA",
    description: "Independent review of property valuations to ensure methodology compliance and accuracy of final values.",
    features: [
      "Methodology compliance",
      "Comparable analysis review",
      "Adjustment verification",
      "Final value reconciliation"
    ]
  },
  {
    icon: Building,
    title: "Property Validation",
    description: "Physical and document-based validation to confirm property characteristics and condition assessments.",
    features: [
      "Condition verification",
      "Document review",
      "Site characteristic validation",
      "Risk flag identification"
    ]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our QA Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end quality assurance for every aspect of property data and valuation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl p-8 hover:border-pink-300 hover:bg-gradient-to-br hover:from-pink-400 hover:to-purple-400 hover:text-white transition-all duration-300 bg-white hover:shadow-2xl group"
            >
              <div className="bg-blue-50 group-hover:bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-white mt-2 flex-shrink-0 transition-colors duration-300"></div>
                    <span className="text-slate-700 group-hover:text-white/90 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}