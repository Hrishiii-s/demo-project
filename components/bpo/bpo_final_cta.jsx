"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

import { Input } from "../figma/ui/input";
import { Textarea } from "../figma/ui/textarea";
import { Label } from "../figma/ui/label";
import { Button } from "../figma/ui/button";

export default function BpoFinalCta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    source: "BPO",
  });

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async () => {
    const res = await fetch("/api/sendFinalCTAEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to send email");
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      await sendEmail();
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        source: "BPO",
      });
    } catch (err) {
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section  id="bpo_final_cta_form" className="py-24 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let’s Discuss Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mortgage Valuation Operations
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Schedule a 30-minute assessment call with our mortgage operations
            team. We'll review your current workflows and show you specific ways
            Ecesis can reduce turn-times, lower costs, and free up your team.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          {/* FORM — LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
              Request a Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "company"].map((field) => (
                <div key={field}>
                  <Label className="block mb-2 font-semibold capitalize">
                    {field} *
                  </Label>
                  <Input
                    required
                    disabled={isLoading}
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div>
                <Label className="block mb-2 font-semibold">
                  How can we help? *
                </Label>
                <Textarea
                  rows={4}
                  required
                  disabled={isLoading}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-xl transition-all ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Request Consultation →"
                )}
              </Button>
            </form>
          </motion.div>

          {/* CONTENT — RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center space-y-10 h-full lg:min-h-[560px]"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                What We’ll Cover
              </h3>
            </div>

            <ul className="space-y-5">
              {[
                "Your current valuation volumes and vendor relationships",
                "Specific pain points (turn-times, costs, compliance, scaling)",
                "How Ecesis integrates with your existing workflows",
                "Expected efficiency and cost improvements",
                "Transparent pricing and implementation timeline",
                "Clear next steps only if it makes sense",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg font-semibold text-gray-900">
              No sales pressure. Just a focused discussion on improving your
              operations and economics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
