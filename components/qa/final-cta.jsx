"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const sendEmail = async () => {
    const res = await fetch("/api/sendFinalCTAEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

    try {
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
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Strengthen Operational Quality with Ecesis
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto mb-6 leading-relaxed">
            Let our experienced teams become your extended quality assurance and
            verification partner, helping your organization maintain accuracy,
            efficiency, and compliance across operations.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <Label
                  htmlFor="name"
                  className="text-slate-900 mb-3 block font-semibold text-base"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full text-base"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-slate-900 mb-3 block font-semibold text-base"
                >
                  Work Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john.smith@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full text-base"
                />
              </div>

              <div>
                <Label
                  htmlFor="company"
                  className="text-slate-900 mb-3 block font-semibold text-base"
                >
                  Company Name *
                </Label>
                <Input
                  id="company"
                  type="text"
                  required
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full text-base"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-slate-900 mb-3 block font-semibold text-base"
                >
                  How can we help? *
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about your quality assurance needs..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-7 text-lg font-bold rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                Request Consultation →
              </Button>

              <p className="text-sm text-slate-500 text-center leading-relaxed">
                By submitting this form, you agree to our privacy policy. We'll
                never share your information.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-10 lg:pl-6">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Let's Talk
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our quality assurance specialists are ready to discuss your
                operational needs and provide tailored solutions for your
                organization.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base mb-1">
                    Phone
                  </p>
                  <p className="text-slate-600 text-base">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base mb-1">
                    Email
                  </p>
                  <p className="text-slate-600 text-base">qa@ecesis.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base mb-1">
                    Office
                  </p>
                  <p className="text-slate-600 text-base">
                    Multiple Delivery Centers in India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-slate-200">
              <p className="text-base text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-2">
                  Response Time:
                </span>
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
