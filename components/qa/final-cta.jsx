"use client";

import { Input } from "../figma/ui/input";
import { Textarea } from "../figma/ui/textarea";
import { Label } from "../figma/ui/label";
import {
  Phone,
  Mail,
  Download,
  Calendar,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../figma/ui/button";
import { scrollToSection } from "@/util/scrollToSection";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async () => {
    const res = await fetch("/api/sendFinalCTAEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to send email");
    }
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
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="final-cta"
      className="w-full px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready to Scale Your QA Operations?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mb-4 leading-relaxed">
            Stop letting QA capacity limit your growth.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed text-balance">
            Whether you need more review capacity, full appraisal production
            support, or help reducing operational overhead, Ecesis delivers the
            offshore support you need with the quality standards you demand.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto rounded-full" />
        </div>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* CARD 1 */}
          <div
            className={`group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer
              ${
                activeCardIndex === 0
                  ? "shadow-2xl -translate-y-2 bg-gradient-to-br from-blue-50 to-purple-50"
                  : "hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
              }`}
            onMouseEnter={() => setActiveCardIndex(0)}
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                ${
                  activeCardIndex === 0
                    ? "bg-gradient-to-br from-blue-500 to-purple-500"
                    : "bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-500 group-hover:to-purple-500"
                }`}
            >
              <Calendar
                className={`h-7 w-7 transition-colors duration-300 ${
                  activeCardIndex === 0
                    ? "text-white"
                    : "text-blue-600 group-hover:text-white"
                }`}
              />
            </div>

            <h3 className="text-xl font-bold mb-3 text-slate-900">
              For QA Scaling
            </h3>

            <p className="text-slate-600 mb-6 text-sm">
              30-minute call to analyze your current bottlenecks and capacity
              needs
            </p>

            <a
              href="https://calendly.com/vishnu-vinayan-ecesistech/30min"
              target="_blank"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl py-3">
                Schedule a Free QA Assessment
              </Button>
            </a>
          </div>

          {/* CARD 2 */}
          <div
            className={`group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer
              ${
                activeCardIndex === 1
                  ? "shadow-2xl -translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50"
                  : "hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50"
              }`}
            onMouseEnter={() => setActiveCardIndex(1)}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-500 to-pink-500">
              <FileText className="h-7 w-7 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-slate-900">
              For Appraisal Production
            </h3>

            <p className="text-slate-600 mb-6 text-sm">
              Get custom pricing based on your order types and monthly volume.
            </p>

            <Button
              onClick={() => scrollToSection("final-cta-form")}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl py-3"
            >
              Get Volume Pricing Quote
            </Button>
          </div>

          {/* CARD 3 */}
          <div
            className={`group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer
              ${
                activeCardIndex === 2
                  ? "shadow-2xl -translate-y-2 bg-gradient-to-br from-indigo-50 to-blue-50"
                  : "hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50"
              }`}
            onMouseEnter={() => setActiveCardIndex(2)}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-indigo-500 to-blue-500">
              <Download className="h-7 w-7 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Questions?
            </h3>

            <p className="text-slate-600 mb-6 text-sm">
              Detailed services guide and pricing models
            </p>

            <a
              href="https://calendly.com/vishnu-vinayan-ecesistech/30min"
              target="_blank"
            >
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-xl py-3">
                Talk to an Expert
              </Button>
            </a>
          </div>
        </div>

        {/* CONTACT + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 max-w-6xl mx-auto">
          {/* FORM */}
          <div
            id="final-cta-form"
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "company"].map((field) => (
                <div key={field}>
                  <Label className="block mb-2 font-semibold capitalize">
                    {field} *
                  </Label>
                  <Input
                    disabled={isLoading}
                    required
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
                  disabled={isLoading}
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full font-bold py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white ${
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
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Let's Talk
              </h3>
              <p className="text-slate-600">
                Our quality assurance specialists are ready to discuss your
                operational needs.
              </p>
            </div>

            {[
              { icon: Phone, title: "Phone", value: "+91 9074002697" },
              { icon: Mail, title: "Email", value: "info@ecesistech.com" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-slate-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
