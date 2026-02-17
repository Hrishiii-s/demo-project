import { motion } from "framer-motion";

import { 

  CheckCircle2,

} from 'lucide-react';

export const BpoBrokerage = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-400/30 to-blue-400/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wider mb-3">
            The Brokerage Growth Challenge
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Scale Agent Networks With{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Operational Strength, Not Overhead
            </span>
          </h3>
          {/* <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            As brokerages and mortgage firms grow, transaction volumes increase
            rapidly. Internal teams struggle with documentation, coordination,
            data processing, and turnaround commitments.
          </p> */}
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
            Hiring internally slows growth and increases operational cost.
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ecesis enables companies to scale operational support behind broker
            and agent networks, ensuring smoother transactions and faster
            execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl shadow-blue-500/20 border-2 border-blue-200 p-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-indigo-300/40 to-transparent rounded-full blur-2xl" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-2xl" />
            <h4 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-6 relative">
              Business Impact
            </h4>
            <div className="grid md:grid-cols-2 gap-6 relative">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">
                  Faster transaction processing for brokers and agents
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">
                  Reduced operational pressure on internal teams
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">
                  Scalable operational support during market surges
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">
                  Consistent process execution across agent networks
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-800 font-semibold">
            Operations no longer limit brokerage growth, clients gain
            operational strength without complexity.
          </p>
        </motion.div>
        {/* 
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
            >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Gain{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Operational Strength Without Internal Expansion
                </span>
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Brokerages and mortgage companies partner with Ecesis to strengthen
                operational capacity while maintaining control over delivery standards.
            </p>
            </motion.div> */}

        {/* <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
                {
                title: "Dedicated teams supporting agent and broker workflows",
                },
                {
                title: "Operational scalability as agent networks grow",
                },
                {
                title: "Reduced operational overhead without quality compromise",
                },
                {
                title: "Seamless integration with internal systems",
                },
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 flex items-start space-x-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-800 text-lg font-medium">{item.title}</p>
                </motion.div>
            ))}
            </div> */}
      </div>
    </section>
  );}