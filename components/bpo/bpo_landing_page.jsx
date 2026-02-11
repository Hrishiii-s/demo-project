import { useState, useEffect } from 'react';
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
  Home
} from 'lucide-react';
import { ImageWithFallback } from '../bpo/figma/ImageWithFallback';

export default function BpoLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Sticky Navigation */}
      {/* <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/10' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <span className="font-bold text-white text-xl">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ecesis
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
              <a href="#support" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Support</a>
              <a href="#outcomes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Outcomes</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold">
                Build Your Team
              </button>
            </div>
          </div>
        </div>
      </nav> */}

{/* Hero Section */}
<section className="relative pt-32 pb-24 overflow-hidden">
  {/* Strong visible base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-indigo-300/40 to-purple-300/40 -z-10" />
  
  {/* More prominent gradient elements */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Large vibrant gradient circles */}
    <div className="absolute -top-20 -right-20 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/60 via-indigo-500/60 to-purple-600/60 rounded-full blur-3xl animate-pulse" style={{animationDuration: '7s'}} />
    <div className="absolute -bottom-20 -left-20 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/60 via-purple-500/60 to-pink-500/60 rounded-full blur-3xl animate-pulse" style={{animationDuration: '9s'}} />
    <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/50 via-blue-400/50 to-indigo-400/50 rounded-full blur-3xl" />
    
    {/* Diagonal gradient stripes */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/30 via-transparent to-purple-200/30" />
    
    {/* Center gradient accent */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/70 to-indigo-300/70 rounded-full blur-2xl opacity-70" />
  </div>
  
  {/* Enhanced gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-indigo-100/60 to-purple-100/80 -z-5" />
  
  {/* Radial gradient overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent -z-5" />
  
  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl text-left"
    >
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Powering Operations for <br />Growing Real Estate & Mortgage Companies
      </h1>
      
      <p className="text-2xl font-semibold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
        Scale Broker & Agent Operations Without Scaling Internal Overhead
      </p>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
        Ecesis partners with real estate brokerages, mortgage companies, and valuation firms to streamline operational workflows that support large networks of brokers and agents.
      </p>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
        With over 16 years of experience supporting the US real estate ecosystem, we help organizations improve turnaround time, maintain process consistency, and scale agent operations through dedicated offshore operational teams.
      </p>
      
      <p className="text-lg text-gray-800 mb-10 font-semibold">
        As your broker and agent network grows, your operations grow with it.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center group">
          Build Your Dedicated Operations Team
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 border-2 border-blue-200 rounded-full hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 font-semibold">
          Book a Strategy Consultation
        </button>
      </div>
      
      {/* Impact Snapshot with enhanced gradient */}
      <div className="relative bg-gradient-to-br from-white via-blue-50/80 to-indigo-50/80 rounded-3xl shadow-2xl shadow-blue-500/30 border border-blue-200 p-8 max-w-4xl overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/40 to-purple-100/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-300/50 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/50 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent" />
        
        <div className="relative z-10">
          <h3 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wider mb-6">
            Impact Snapshot
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                16+
              </div>
              <div className="text-sm text-gray-700 leading-tight font-medium">Years supporting US real estate workflows</div>
            </div>
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                300+
              </div>
              <div className="text-sm text-gray-700 leading-tight font-medium">Operational Experts powering transactions & valuations</div>
            </div>
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                1000s
              </div>
              <div className="text-sm text-gray-700 leading-tight font-medium">Property workflows processed annually</div>
            </div>
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-700 leading-tight font-medium">Operational Capability supporting nationwide teams</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  
  {/* Bottom fade gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-50/80 via-indigo-50/60 to-transparent -z-5" />
</section>

      {/* Industry Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-indigo-300/30 via-blue-300/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-300/20 via-indigo-300/20 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built on <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Real Estate Process Expertise</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                For over a decade, Ecesis has supported brokers, agents, valuation professionals, and mortgage service providers across the US real estate ecosystem.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Having worked closely with individual brokers and agents, we understand the operational workload behind property transactions. Today, we help brokerages and mortgage companies streamline operations across entire agent networks.
              </p>
              
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 border-2 border-blue-200 shadow-xl shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-300/40 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-300/40 to-transparent rounded-full blur-2xl" />
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4 relative">Operational Expertise Includes</h3>
                <div className="space-y-3 relative">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">Valuation and appraisal workflow support</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">Transaction coordination and processing support</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">Listing and property data workflows</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">Mortgage and lending support processes</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-800 font-semibold mt-8">
                Our teams understand real estate workflows, not just generic operations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-3xl blur-3xl" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-30 blur-lg" />
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDExNjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Real estate professionals"
                className="relative rounded-3xl shadow-2xl w-full border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Brokerage Growth Challenge Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-400/30 to-blue-400/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wider mb-3">The Brokerage Growth Challenge</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Scale Agent Networks With <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Operational Strength, Not Overhead</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
              As brokerages and mortgage firms grow, transaction volumes increase rapidly. Internal teams struggle with documentation, coordination, data processing, and turnaround commitments.
            </p>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium mb-6">
              Hiring internally slows growth and increases operational cost.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ecesis enables companies to scale operational support behind broker and agent networks, ensuring smoother transactions and faster execution.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl shadow-blue-500/20 border-2 border-blue-200 p-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-indigo-300/40 to-transparent rounded-full blur-2xl" />
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-2xl" />
              <h4 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-6 relative">Business Impact</h4>
              <div className="grid md:grid-cols-2 gap-6 relative">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">Faster transaction processing for brokers and agents</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">Reduced operational pressure on internal teams</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">Scalable operational support during market surges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">Consistent process execution across agent networks</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Gain <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Operational Strength Without Internal Expansion</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Brokerages and mortgage companies partner with Ecesis to strengthen operational capacity while maintaining control over delivery standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Dedicated teams supporting agent and broker workflows'
              },
              {
                title: 'Operational scalability as agent networks grow'
              },
              {
                title: 'Reduced operational overhead without quality compromise'
              },
              {
                title: 'Seamless integration with internal systems'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 flex items-start space-x-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-blue-500/50">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-800 text-lg font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-800 font-semibold">
              Operations no longer limit brokerage growth — clients gain operational strength without complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Support Section */}
      <section id="support" className="py-24 bg-gradient-to-br from-white via-indigo-50 to-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-400/30 via-indigo-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Supporting Workflows <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Behind Every Transaction</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our teams support real estate and mortgage companies handling high volumes of transactions and valuations across distributed agent networks.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: FileText,
                title: 'Transaction coordination support',
                gradient: 'from-blue-500 via-blue-600 to-indigo-600'
              },
              {
                icon: Home,
                title: 'Valuation and appraisal assistance',
                gradient: 'from-indigo-500 via-indigo-600 to-purple-600'
              },
              {
                icon: BarChart3,
                title: 'Property data and documentation workflows',
                gradient: 'from-purple-500 via-purple-600 to-pink-600'
              },
              {
                icon: Building2,
                title: 'Mortgage processing and support operations',
                gradient: 'from-blue-600 via-cyan-600 to-teal-600'
              },
              {
                icon: Target,
                title: 'Reporting and operational data workflows',
                gradient: 'from-teal-500 via-green-600 to-emerald-600'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 flex flex-col items-center text-center space-y-4 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg shadow-blue-500/50`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-gray-800 leading-relaxed relative z-10 font-medium">{service.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-gray-800 font-semibold">
              Teams align with client systems and processes, ensuring seamless collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure & Continuity Section */}
      <section id="outcomes" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
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
              Reliable Operations That <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Enable Broker Networks to Perform Better</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
              Real estate and mortgage businesses operate across time zones and market cycles. Operational downtime impacts transaction timelines and agent productivity.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ecesis delivery environments ensure stable and continuous operational support that enables brokers and agents to close transactions faster while leadership focuses on expansion and recruitment.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ">
            {[
              {
                icon: Shield,
                title: 'Business Continuity Plans ensuring uninterrupted delivery',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Globe,
                title: 'Multiple delivery centers ensuring operational resilience',
                gradient: 'from-indigo-500 to-purple-600'
              },
              {
                icon: Lock,
                title: 'Secure IT infrastructure maintaining workflow stability',
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                icon: Clock,
                title: 'Dedicated teams supporting extended operational hours',
                gradient: 'from-blue-600 to-cyan-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-100 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-800 leading-relaxed font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Trusted Industries Section */}
            <div className="mb-16">
              <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wider mb-6">Trusted By Industry Leaders</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                {[
                  { name: 'Real Estate Companies', icon: Building2 },
                  { name: 'Mortgage Lenders', icon: Users },
                  { name: 'Property Brokers', icon: Target },
                  { name: 'Valuation Portals', icon: BarChart3 },
                  { name: 'Banks & Financial Services', icon: Shield },
                  { name: 'Insurance Companies', icon: Lock }
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                        <industry.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs font-semibold text-gray-800 text-center leading-tight">{industry.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Strengthen Operations <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Behind Your Agent Network?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Let's build a dedicated operational team aligned with your brokerage or mortgage business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center group">
                Schedule a Free Consultation
                <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 border-2 border-blue-200 rounded-full hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 font-semibold">
                Talk to Our Real Estate Operations Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white">E</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Ecesis</span>
              </div>
              <p className="text-gray-400 text-sm">
                Powering operations for growing real estate and mortgage companies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Transaction Support</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Valuation Assistance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mortgage Processing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Data Workflows</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Delivery Centers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2026 Ecesis. All rights reserved. Powering operations for real estate and mortgage companies.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
