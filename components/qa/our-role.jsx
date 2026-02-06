import { CheckSquare, FileCheck, Database, Eye, FileWarning, AlertTriangle } from "lucide-react";

const roles = [
  {
    icon: CheckSquare,
    title: "Quality Checks",
    description: "Across all operational processes"
  },
  {
    icon: FileCheck,
    title: "Process Validation",
    description: "Compliance and standards adherence"
  },
  {
    icon: Database,
    title: "Data Verification",
    description: "Report review and accuracy validation"
  },
  {
    icon: Eye,
    title: "Vendor Monitoring",
    description: "Third-party output oversight"
  },
  {
    icon: FileWarning,
    title: "Pre-Delivery Review",
    description: "Final quality checks before delivery"
  },
  {
    icon: AlertTriangle,
    title: "Exception Handling",
    description: "Issue identification and resolution"
  }
];

export function OurRole() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Role
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Independent quality assurance partner extending your teams for consistent, reliable output
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-cyan-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-slate-50 group-hover:bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <role.icon className="h-7 w-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {role.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}