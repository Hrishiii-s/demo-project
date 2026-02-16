import { Inbox, Search, AlertTriangle, Eye, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Inbox,
    title: "Intake",
    description: "Secure data transfer and project scoping"
  },
  {
    icon: Search,
    title: "QA Checks",
    description: "Systematic validation and analysis"
  },
  {
    icon: AlertTriangle,
    title: "Issue Flagging",
    description: "Error detection and categorization"
  },
  {
    icon: Eye,
    title: "Review",
    description: "Expert verification and quality control"
  },
  {
    icon: FileCheck,
    title: "Final Report",
    description: "Comprehensive findings and recommendations"
  }
];

export function QAProcess() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our QA Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven five-step methodology delivering consistent, reliable results
          </p>
        </div>

        {/* Desktop view - horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-slate-200"></div>
            
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white border-4 border-slate-200 w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10">
                    <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center">
                      <step.icon className="h-9 w-9 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet view - vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className="pt-2">
                <h3 className="font-semibold text-xl text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}