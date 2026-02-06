import { Building2, Shield, Landmark, CheckCircle2 } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Asset Management Companies",
    description: "Validate property data integrity across your investment portfolios with independent QA reviews.",
    services: ["Portfolio validation", "Due diligence QA", "Risk assessment"]
  },
  {
    icon: Shield,
    title: "Insurance Companies",
    description: "Ensure accurate property valuations and risk assessments for underwriting and claims.",
    services: ["Claims validation", "Underwriting QA", "Property inspections"]
  },
  {
    icon: Landmark,
    title: "Financial Firms",
    description: "Support lending decisions with verified property data and comprehensive valuation reviews.",
    services: ["Loan collateral QA", "Valuation reviews", "Compliance checks"]
  }
];

export function WhoWeServe() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized QA services tailored for financial and insurance institutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-400 hover:to-purple-400 hover:text-white transition-all duration-300 group"
            >
              <div className="bg-blue-50 group-hover:bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <client.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-white mb-4 transition-colors duration-300">
                {client.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                {client.description}
              </p>
              <ul className="space-y-3">
                {client.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors duration-300" />
                    <span className="text-slate-700 group-hover:text-white/90 transition-colors duration-300">{service}</span>
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