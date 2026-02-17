import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  Clock,
  Target,
  BarChart3,
  Lock,
  Headphones,
  Calendar,
  FileText,
  Home,
} from "lucide-react";

export const BpoBrokerNetworks = () => {
  return (
    <section
      id="outcomes"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden min-h-screen">

    
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-300/30 via-indigo-300/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-300/30 via-blue-300/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reliable Operations That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Enable Broker Networks to Perform Better
            </span>
          </h2>
          {/* <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                Real estate and mortgage businesses operate across time zones and market cycles. Operational downtime impacts transaction timelines and agent productivity.
              </p> */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ecesis delivery environments ensure stable and continuous
            operational support that enables brokers and agents to close
            transactions faster while leadership focuses on expansion and
            recruitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ">
          {[
            {
              icon: Shield,
              title:
                "Business Continuity Plans ensuring uninterrupted delivery",
              gradient: "from-blue-500 to-indigo-600",
            },
            {
              icon: Globe,
              title:
                "Multiple delivery centers ensuring operational resilience",
              gradient: "from-indigo-500 to-purple-600",
            },
            {
              icon: Lock,
              title: "Secure IT infrastructure maintaining workflow stability",
              gradient: "from-purple-500 to-pink-600",
            },
            {
              icon: Clock,
              title: "Dedicated teams supporting extended operational hours",
              gradient: "from-blue-600 to-cyan-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-100 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-800 leading-relaxed font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
