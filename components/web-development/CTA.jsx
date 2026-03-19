'use client';

import { ArrowRight, Mail, Phone, Globe, Clock, Sparkles, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../figma/ui/input';
import { Textarea } from '../figma/ui/textarea';
import { Label } from '../figma/ui/label';
import { Button } from '../figma/ui/button';

export function CTA() {
  const router = useRouter();
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
    const res = await fetch('/api/sendFinalCTAEmail', {
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
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        source: 'Website CTA',
      });
      
      // Redirect to thank you page
      router.push('/thank-you');

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
      className="w-full px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Premium animated background with subtle accents */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />

        {/* Animated orbs with subtle colors - Optimized sizes */}
        <motion.div
          className="absolute top-20 right-20 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-purple-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-blue-200/40 rounded-full blur-3xl"
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

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-14"
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
            className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-xl border border-purple-200 rounded-full mb-5 sm:mb-6"
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600" />
            <span className="text-[10px] sm:text-xs font-medium text-purple-700">
              Limited Strategy Slots Available
            </span>
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-5 tracking-tight px-4 leading-[1.3]">
            Your Competitors Are Already{' '}
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-1 sm:mt-1.5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.4] pb-1.5">
              Investing in Better Technology
            </span>
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5">
            The Question Is - Will You?
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-5 sm:mb-6 md:mb-7 leading-relaxed px-4">
            Whether you're launching something new, rebuilding something that's
            broken, or scaling a product that's outgrown its current tech,
            ECESIS is the partner that gets it done right, on time, and within
            budget. Let's have a straight conversation about what you need. No
            jargon, no pressure, just real answers.
          </p>

          <div className="w-14 sm:w-16 lg:w-20 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5 sm:mt-6 lg:mt-7" />
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Primary CTA Card */}
          <motion.div
            onMouseEnter={() => setActiveCardIndex(0)}
            className={`group bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6 h-full flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden
              ${
                activeCardIndex === 0
                  ? 'shadow-xl -translate-y-1 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-300'
                  : 'hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-purple-50 to-blue-50 hover:border-purple-300'
              }`}
            whileHover={{ y: -3 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-blue-100/50 blur-xl" />
            </div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 bg-gradient-to-br from-purple-600 to-blue-600 shadow-md relative z-10">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 relative z-10">
              Book Your Free Strategy Call Today
            </h3>

            <p className="text-gray-500 mb-3 sm:mb-4 md:mb-5 text-xs sm:text-xs relative z-10">
              Limited consultation slots available each month
            </p>
            
            {/* Fixed button - full width */}
            <div className="w-full mt-auto relative z-10">
              <a
                href="https://calendly.com/vishnu-vinayan-ecesistech/30-minute-meeting-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm shadow-sm group/btn">
                  Schedule Your Call
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Secondary CTA Card */}
          <motion.div
            onMouseEnter={() => setActiveCardIndex(1)}
            className={`group bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6 h-full flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden
              ${
                activeCardIndex === 1
                  ? 'shadow-xl -translate-y-1 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300'
                  : 'hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-blue-50 to-indigo-50 hover:border-blue-300'
              }`}
            whileHover={{ y: -3 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 blur-xl" />
            </div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md relative z-10">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 relative z-10">
              View Our Full Portfolio
            </h3>

            <p className="text-gray-500 mb-3 sm:mb-4 md:mb-5 text-xs sm:text-xs relative z-10">
              See what we've built for businesses like yours
            </p>

            {/* Fixed button - full width */}
            <div className="w-full mt-auto relative z-10">
              <a 
                href="https://ecesistech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm shadow-sm group/btn">
                  ecesistech.com
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact + Form Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto px-0 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Form */}
          <div
            id="final-cta-form"
            className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-6 md:p-8 relative overflow-hidden group w-full"
          >
            {/* Form background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-purple-100/50 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 sm:w-48 h-40 sm:h-48 bg-blue-100/50 rounded-full blur-3xl" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 relative z-10 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              Get in Touch
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 relative z-10"
            >
              {['name', 'email', 'company'].map(field => (
                <div key={field}>
                  <Label className="block mb-2 font-semibold capitalize text-sm sm:text-base">
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
                    className="w-full"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}

              <div>
                <Label className="block mb-2 font-semibold text-sm sm:text-base">
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
                  className="w-full"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full font-bold py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm sm:text-base ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Request Consultation →'
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Let's Talk
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500">
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
                className="flex items-start gap-2 sm:gap-3 group"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center border border-purple-200 group-hover:scale-110 transition-transform">
                  <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 break-all sm:break-normal">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="pt-3 sm:pt-4 lg:pt-5"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="border-t border-gray-200 pt-3 sm:pt-4 lg:pt-5">
                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600 flex-shrink-0" />
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