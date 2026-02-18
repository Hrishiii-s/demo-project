import { motion } from "framer-motion";
import { FileText, Home, BarChart3 } from "lucide-react";

export const BpoSupportingWorkflows = () => {
  const workflowCards = [
    {
      title: "For Mortgage Lenders",
      icon: FileText,
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      items: [
        "Purchase and refinance valuation coordination",
        "Rush appraisal and BPO management for time-sensitive closings",
        "Vendor performance tracking and quality oversight",
        "Peak volume surge support without emergency staffing costs",
      ],
    },
    {
      title: "For Mortgage Servicers",
      icon: Home,
      gradient: "from-indigo-500 via-indigo-600 to-purple-600",
      items: [
        "Default and loss mitigation BPO coordination",
        "REO disposition valuation management",
        "Portfolio monitoring and periodic valuation support",
        "Special servicing workflow assistance",
      ],
    },
    {
      title: "For Both",
      icon: BarChart3,
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      items: [
        "Multi-state, multi-vendor coordination",
        "Compliance documentation and audit trail management",
        "Turn-time SLA monitoring and escalation",
        "Quality control and review workflows",
        "Scalable capacity without long-term commitments or fixed costs",
      ],
    },
  ];

  return (
    <section
      id="support"
      className="py-24 bg-gradient-to-br from-white via-indigo-50 to-blue-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How Ecesis Supports{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mortgage Operations
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our valuation workflow support includes:
          </p>
        </motion.div>

        {/* 3 Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {workflowCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                group rounded-2xl border border-gray-200 bg-white p-6
                shadow-md
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-2xl hover:shadow-black/20
              "
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient}
                flex items-center justify-center mx-auto mb-4
                shadow-lg
                group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {card.title}
              </h3>

              {/* Items */}
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-800 font-semibold">
            We don't replace your AMCs or appraisal vendors—we make them work
            better by managing the operational complexity on your behalf, more
            efficiently and affordably than in-house teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
