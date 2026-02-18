import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Activity,
} from "lucide-react";

export const BpoBrokerNetworks = () => {
  return (
    <section
      id="outcomes"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden min-h-screen"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-300/30 via-indigo-300/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-300/30 via-blue-300/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Ecesis{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Flexible operational support designed to reduce risk, control costs,
            and strengthen delivery performance across market cycles.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Shield,
              title: "Mortgage expertise that reduces risk",
              desc: "16+ years in valuations help prevent compliance gaps, rework, and costly processing delays.",
              gradient: "from-blue-500 to-indigo-600",
            },
            {
              icon: TrendingUp,
              title: "Scale without fixed cost burden",
              desc: "Support expands or contracts with your volumes so you only pay for what you actually need.",
              gradient: "from-indigo-500 to-purple-600",
            },
            {
              icon: Users,
              title: "Operational relief for internal teams",
              desc: "Less time spent on coordination and follow-ups, more focus on loans and borrower experience.",
              gradient: "from-purple-500 to-pink-600",
            },
            {
              icon: DollarSign,
              title: "Cost efficiency built into delivery",
              desc: "Turn fixed operational overhead into a flexible, volume-based model that improves margins.",
              gradient: "from-blue-600 to-cyan-600",
            },
            {
              icon: BarChart3,
              title: "Stable support across market cycles",
              desc: "Handle refi surges and slow markets without hiring stress or rising operational costs.",
              gradient: "from-cyan-500 to-blue-600",
            },
            {
              icon: Activity,
              title: "Data visibility & performance tracking",
              desc: "Clear reporting and measurable KPIs provide operational transparency and continuous improvement insights.",
              gradient: "from-indigo-600 to-blue-700",
            },
            
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 border border-gray-200 flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
