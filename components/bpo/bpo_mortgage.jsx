import { motion} from "framer-motion";
import {
  DollarSign,
  Layers,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  FileText,
  Home,
  BarChart3,
} from "lucide-react";



export const BpoMortgage = () => {
 const outcomes = [
   {
     title: "Lower Processing Costs",
     description: "Specialized workflows reduce per-valuation expenses",
     icon: DollarSign,
   },
   {
     title: "Flexible Cost Structure",
     description: "Scale with volume without fixed staffing overhead",
     icon: Layers,
   },
   {
     title: "Reduced Overtime Spend",
     description: "Eliminate temporary staffing and peak-month burnout",
     icon: ArrowUpRight,
   },
   {
     title: "Faster Turn-Times",
     description: "Shorter pipelines improve close rates",
     icon: Clock,
   },
   {
     title: "Audit-Ready Compliance",
     description: "Stronger controls reduce remediation risk",
     icon: ShieldCheck,
   },
 ];
  const workflowCards = [
    {
      title: "For Mortgage Lenders",
      icon: FileText,
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      items: [
        "Coordinate purchase and refinance valuations from order to completion",
        "Manage rush appraisals and BPOs for time sensitive closings",
        "Track vendor performance with clear metrics and quality checks",
        "Add surge capacity for peak months without emergency hiring",
      ],
    },
    {
      title: "For Mortgage Servicers",
      icon: Home,
      gradient: "from-indigo-500 via-indigo-600 to-purple-600",
      items: [
        "Orchestrate BPOs for default, loss mitigation, and collections workflows",
        "Manage REO and disposition valuations end-to-end",
        "Support portfolio reviews and periodic valuations at scale",
        "Assist special servicing teams with complex workflows",
      ],
    },
    {
      title: "For Both",
      icon: BarChart3,
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      items: [
        "Multi-state, multi-vendor coordination from a single expert team",
        "Complete compliance documentation and audit-ready trails",
        "Turn-time SLA monitoring, alerts, and escalation paths",
        "Structured QC and review workflows to reduce rework",
        "Elastic capacity without long-term headcount commitments",
      ],
    },
  ];

  return (
    <section
      id="support"
      className="py-24 bg-gradient-to-br from-white via-indigo-50 to-blue-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Ecesis Supports{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mortgage Operations
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            For 16+ years, Ecesis has provided mortgage operations support and
            BPO operations support for lenders, servicers, and financial
            institutions across the US.
          </p>

          <p className="text-lg text-gray-700">
            We manage the operational backbone of your valuation workflows from
            order placement through final delivery so your teams can focus on
            underwriting, servicing decisions, and borrower relationships while
            reducing operational expenses.
          </p>
        </motion.div>

        {/* Upper Outcome Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-24"
        >
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl border border-gray-200 p-6 text-center
                shadow-sm transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-indigo-300
                hover:bg-gradient-to-br hover:from-indigo-50 hover:via-white hover:to-blue-50
                hover:shadow-md
              "
            >
              <div
                className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-blue-600 to-indigo-600
                  flex items-center justify-center mx-auto mb-4
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-lg
                "
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>

              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-700 transition">
                {item.title}
              </h4>

              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {workflowCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                group rounded-2xl border border-gray-200 bg-white p-6
                shadow-md transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:border-indigo-300
                hover:bg-gradient-to-br hover:from-indigo-50 hover:via-white hover:to-blue-50
                hover:shadow-xl
              "
            >
              <div
                className={`
                  w-14 h-14 rounded-xl
                  bg-gradient-to-br ${card.gradient}
                  flex items-center justify-center mx-auto mb-4
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-lg
                `}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-indigo-700 transition">
                {card.title}
              </h3>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-gray-800 font-semibold max-w-5xl mx-auto"
        >
          We don’t replace your AMCs or appraisal vendors, we make them work
          better by managing operational complexity on your behalf, more
          efficiently and affordably than in-house teams.
        </motion.p>
      </div>
    </section>
  );
};
