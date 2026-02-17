"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

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
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Strengthen Operations{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Behind Your Agent Network?
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Build a dedicated operations team aligned with your brokerage or
            mortgage business growth.
          </p>
        </motion.div>

        {/* FORM + INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* FORM */}
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
                    value={(formData)[field]}
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

          {/* LET'S TALK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-8 lg:pl-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Let’s Talk
              </h3>
              <p className="text-gray-700 max-w-md">
                Our quality assurance specialists are ready to discuss your
                operational needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-700">+91 9074002697</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-700">info@ecesistech.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
