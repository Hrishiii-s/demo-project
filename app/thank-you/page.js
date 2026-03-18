'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircle, ArrowRight, Globe, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/figma/ui/button';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-300/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-300/50 via-transparent to-transparent" />

        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-purple-300/40 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 lg:p-10"
          >
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-5 shadow-lg">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Thank You for{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Reaching Out!
              </span>
            </h1>

            <p className="text-center text-gray-600 mb-6">
              We've received your message and will get back to you within 24
              hours.
            </p>

            <div className="w-24 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-10" />

            {/* While You Wait */}
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
              While You Wait
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Card 1 */}
              <a
                href="https://ecesistech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 transition hover:shadow-md group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-3 rounded-xl">
                    <Globe className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold group-hover:text-purple-600">
                      View Our Portfolio
                    </h4>
                    <p className="text-sm text-gray-500">
                      See what we've built for businesses like yours
                    </p>
                  </div>
                </div>
              </a>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 transition hover:shadow-md group">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-3 rounded-xl">
                    <Heart className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold group-hover:text-purple-600">
                      Need Immediate Help?
                    </h4>
                    <p className="text-sm text-gray-500">
                      Call us at{' '}
                      <a
                        href="tel:+919072310239"
                        className="text-purple-600 font-medium hover:text-purple-700"
                      >
                        +91 907 231 0239
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  BUTTON GRID  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Button 1 */}
              <a
                href="https://calendly.com/vishnu-vinayan-ecesistech/30-minute-meeting-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg px-6 py-3 shadow-md group">
                  Schedule Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </Button>
              </a>

              {/* Button 2 */}
              <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="w-full border-2 border-purple-400 text-purple-500 hover:text-purple-700  font-bold rounded-lg px-6 py-3 shadow-md group"
              >
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition" />
                Return Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
