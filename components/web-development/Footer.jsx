import { Linkedin, Twitter, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <motion.div
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Ecesis
            </motion.div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Transforming ambitious ideas into exceptional digital products through innovation, design, and technology.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social, index) => {
                const Icon = social.Icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Strategy & Consulting',
                'Product Design',
                'Web Development',
                'Mobile Solutions',
                'Cloud Infrastructure',
                'AI & Machine Learning',
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                'About Us',
                'Our Work',
                'Careers',
                'Blog',
                'Press Kit',
                'Contact',
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {[
                'Case Studies',
                'Insights',
                'Documentation',
                'Help Center',
                'Community',
                'Partners',
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'GDPR Compliance',
                'Security',
                'Accessibility',
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© 2026 Ecesis. All rights reserved.</p>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <p>Crafted with passion in San Francisco</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                English
              </motion.a>
              <div className="w-px h-4 bg-white/20" />
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                USD
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}