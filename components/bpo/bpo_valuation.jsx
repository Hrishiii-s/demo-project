import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const BpoValuation = () => {
  const bullets = [
    { bold: "Rising expenses", text: "Overtime, temporary help, and per-unit costs that keep increasing" },
    { bold: "Cost pressure during peak volumes", text: "Forcing teams to scale quickly at higher expense" },
    { bold: "Volume unpredictability", text: "Refi booms, purchase surges, seasonal fluctuations require flexible staffing" },
    { bold: "Turn-time pressure", text: "Borrower expectations and closing deadlines don't wait" },
    { bold: "Vendor coordination overhead", text: "Time‑consuming vendor management across AMCs, appraisers, and BPO agents" },
    { bold: "Quality & compliance risk", text: "Documentation gaps that create compliance and audit risk" },
    // { bold: "Fixed cost structure", text: "Paying for full-time staff even when volumes drop" },
  ];

  return (
    <section className="relative h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/25 to-indigo-400/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-400/25 to-blue-400/25 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            The Growing Cost & Complexity of{" "}
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Valuation Operations
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2">
            Every mortgage transaction depends on accurate, timely property
            valuations. Whether you're originating loans, managing servicing
            portfolios, or working through defaults, BPOs and appraisals are
            mission-critical.
          </p>

          {/* <p className="text-base sm:text-lg font-medium text-gray-800 max-w-3xl mx-auto">
            Managing these workflows creates operational complexity and financial pressure.
          </p> */}
        </motion.div>

        {/* Pain Points Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-6 overflow-y-auto"
          style={{ maxHeight: "45vh" }}
        >
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl shadow-blue-500/15 border border-blue-200 p-6 relative">
            <h4 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
              Managing these workflows creates operational complexity and
              financial pressure :
            </h4>

            <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </span>
                  <p className="text-gray-800 text-sm sm:text-base leading-snug">
                    <span className="font-bold">{item.bold} – </span>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-base sm:text-lg text-gray-800 font-semibold mb-3">
            Operations teams are caught between demand, risk, and cost.
          </p>

          <button className="px-6 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all">
            Let’s talk about your specific volume and cost challenges
          </button>
        </motion.div>
      </div>
    </section>
  );
};
