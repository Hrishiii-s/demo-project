'use client';

import {
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Clock,
  Sparkles,
  Send,
  Briefcase,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Input } from '../figma/ui/input';
import { Textarea } from '../figma/ui/textarea';
import { Label } from '../figma/ui/label';
import { Button } from '../figma/ui/button';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    source: 'Website CTA',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const sendEmail = async () => {
    const res = await fetch('/api/sendCTAEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to send email');
    }
    return data;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      await sendEmail();
      alert("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        source: 'Website CTA',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="final-cta"
      className="w-full px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Premium animated background with subtle accents */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />

        {/* Animated orbs with subtle colors */}
        <motion.div
          className="absolute top-20 right-20 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-purple-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-xl border border-purple-200 rounded-full mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
            <span className="text-xs sm:text-sm font-medium text-purple-700">
              Limited Strategy Slots Available
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight px-4 leading-[1.3]">
            Your Competitors Are Already{' '}
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.4] pb-1">
              Investing in Better Technology
            </span>
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
            The Question Is - Will You?
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed px-4">
            Whether you're launching something new, rebuilding something that's
            broken, or scaling a product that's outgrown its current tech,
            ECESIS is the partner that gets it done right, on time, and within
            budget. Let's have a straight conversation about what you need. No
            jargon, no pressure, just real answers.
          </p>

          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6 sm:mt-7 lg:mt-8" />
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto mb-16 sm:mb-18 lg:mb-20 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Primary CTA Card */}
          <motion.div
            onMouseEnter={() => setActiveCardIndex(0)}
            className={`group bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 h-full flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden
              ${
                activeCardIndex === 0
                  ? 'shadow-2xl -translate-y-2 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-300'
                  : 'hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br from-purple-50 to-blue-50 hover:border-purple-300'
              }`}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-blue-100/50 blur-xl" />
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg relative z-10">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 relative z-10">
              Book Your Free Strategy Call Today
            </h3>

            <p className="text-gray-500 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm relative z-10">
              Limited consultation slots available each month
            </p>

            <Button className="mt-auto w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl py-3 sm:py-4 text-sm sm:text-base shadow-md relative z-10 group/btn">
              Schedule Your Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Secondary CTA Card */}
          <motion.div
            onMouseEnter={() => setActiveCardIndex(1)}
            className={`group bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 h-full flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden
              ${
                activeCardIndex === 1
                  ? 'shadow-2xl -translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300'
                  : 'hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br from-blue-50 to-indigo-50 hover:border-blue-300'
              }`}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 blur-xl" />
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg relative z-10">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 relative z-10">
              View Our Full Portfolio
            </h3>

            <p className="text-gray-500 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm relative z-10">
              See what we've built for businesses like yours
            </p>

            <Button className="mt-auto w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent font-bold rounded-xl py-3 sm:py-4 text-sm sm:text-base shadow-md relative z-10 group/btn transition-all duration-300">
              ecesistech.com
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact + Form Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Form */}
          <div
            id="final-cta-form"
            className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden group"
          >
            {/* Form background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-100/50 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-100/50 rounded-full blur-3xl" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-8 relative z-10 flex items-center gap-2">
              <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              Get in Touch
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10"
            >
              {['name', 'email', 'company'].map(field => (
                <div key={field}>
                  <Label className="block mb-1 sm:mb-2 font-semibold text-gray-700 capitalize text-sm sm:text-base">
                    {field} *
                  </Label>
                  <Input
                    required
                    disabled={isLoading}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field]}
                    onChange={e =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all text-sm sm:text-base"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}

              <div>
                <Label className="block mb-1 sm:mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                  How can we help? *
                </Label>
                <Textarea
                  required
                  disabled={isLoading}
                  rows={4}
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full font-bold py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-600/30 transition-all text-sm sm:text-base ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Request Consultation
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Let's Talk
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-500">
                No jargon, no pressure, just real answers about your project.
              </p>
            </motion.div>

            {[
              { icon: Phone, title: 'Phone', value: '+91 907 231 0239' },
              { icon: Mail, title: 'Email', value: 'info@ecesistech.com' },
              { icon: Globe, title: 'Website', value: 'ecesistech.com' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 sm:gap-4 group"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border border-purple-200 group-hover:scale-110 transition-transform">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-500 break-all sm:break-normal">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="pt-4 sm:pt-5 lg:pt-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="border-t border-gray-200 pt-4 sm:pt-5 lg:pt-6">
                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <span>Limited consultation slots available each month</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}