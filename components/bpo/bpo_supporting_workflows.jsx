import { motion } from "framer-motion";

import { Building2, CheckCircle2, Target, BarChart3, FileText, Home } from "lucide-react";

export const BpoSupportingWorkflows = () => {
  return (
    <section
      id="support"
      className="py-24 bg-gradient-to-br from-white via-indigo-50 to-blue-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-400/30 via-indigo-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Supporting Workflows{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Behind Every Transaction
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our teams support real estate and mortgage companies handling high
            volumes of transactions and valuations across distributed agent
            networks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {[
            {
              icon: FileText,
              title: "Transaction coordination support",
              gradient: "from-blue-500 via-blue-600 to-indigo-600",
            },
            {
              icon: Home,
              title: "Valuation and appraisal assistance",
              gradient: "from-indigo-500 via-indigo-600 to-purple-600",
            },
            {
              icon: BarChart3,
              title: "Property data and documentation workflows",
              gradient: "from-purple-500 via-purple-600 to-pink-600",
            },
            {
              icon: Building2,
              title: "Mortgage processing and support operations",
              gradient: "from-blue-600 via-cyan-600 to-teal-600",
            },
            {
              icon: Target,
              title: "Reporting and operational data workflows",
              gradient: "from-teal-500 via-green-600 to-emerald-600",
            },
            {
              icon: CheckCircle2,
              title: "Custom operational workflows aligned with client needs",
              gradient: "from-amber-500 via-orange-500 to-rose-500",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 flex flex-col items-center text-center space-y-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg shadow-blue-500/50`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-800 leading-relaxed relative z-10 font-medium">
                  {service.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-800 font-semibold">
            Teams align with client systems and processes, ensuring seamless
            collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
