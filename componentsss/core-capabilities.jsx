import { CheckCircle2, FileCheck, Eye, GitCompare, ShieldCheck, ClipboardCheck } from "lucide-react";

const capabilities = [
  {
    icon: CheckCircle2,
    title: "Process Quality Assurance",
    description: "Across operational workflows"
  },
  {
    icon: FileCheck,
    title: "Data & Report Verification",
    description: "Accuracy and completeness validation"
  },
  {
    icon: Eye,
    title: "Vendor Output Monitoring",
    description: "Consistency checks and oversight"
  },
  {
    icon: GitCompare,
    title: "Transaction Validation",
    description: "Workflow verification and approval"
  },
  {
    icon: ShieldCheck,
    title: "Pre-Delivery Quality",
    description: "Final checks before handoff"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Validation",
    description: "Checklist and regulatory adherence"
  }
];

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Core Capabilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-purple-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <capability.icon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
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