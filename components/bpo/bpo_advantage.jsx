import { motion } from "framer-motion";
import {
  ShieldCheck,
  Layers3,
  UsersRound,
  PiggyBank,
  Repeat,
  Eye,
} from "lucide-react";


export const BpoAdvantage = () => {
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
{/* 
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Flexible operational support designed to reduce risk, control costs,
            and strengthen delivery performance across market cycles.
          </p> */}
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
  {
    icon: ShieldCheck,
    title: "Deep mortgage valuation expertise",
    desc: "16+ years focused on valuations means fewer compliance issues, faster issue resolution, and less rework.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Layers3,
    title: "Scalable support model",
    desc: "Capacity flexes with your pipeline so you only pay for the work you actually run.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: UsersRound,
    title: "Relief for internal teams",
    desc: "Your staff spends less time chasing orders and vendors and more time on borrowers and decisions.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: PiggyBank,
    title: "Cost efficiency by design",
    desc: "Convert fixed operational overhead into a variable, volume-based model that improves margins across cycles.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Repeat,
    title: "Consistency through market cycles",
    desc: "Manage refi surges and slowdowns without constant hiring, training, and downsizing.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Eye,
    title: "Operational visibility",
    desc: "Clear reporting, KPIs, and trend insights support continuous improvement and better decision-making.",
    gradient: "from-indigo-600 to-blue-700",
  },
].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group bg-white rounded-2xl p-6
                border border-gray-200
                shadow-md transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:border-indigo-300
                hover:bg-gradient-to-br hover:from-indigo-50 hover:via-white hover:to-blue-50
                hover:shadow-2xl hover:shadow-black/20
                flex flex-col items-center text-center
              "
            >
              <div
                className={`
                  w-16 h-16 rounded-2xl
                  bg-gradient-to-br ${item.gradient}
                  flex items-center justify-center mb-4
                  shadow-lg transition-all duration-300
                  group-hover:scale-110
                `}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition">
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
