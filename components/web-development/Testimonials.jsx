import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Ecesis delivered our enterprise platform ahead of schedule and exceeded every expectation. Their technical expertise and project management skills are world-class.",
      author: "Michael Chen",
      role: "CTO",
      company: "FinanceHub",
      rating: 5,
    },
    {
      quote: "Working with Ecesis transformed our business. They didn't just build software – they became true partners in our success.",
      author: "Sarah Martinez",
      role: "VP of Operations",
      company: "RetailTech Solutions",
      rating: 5,
    },
    {
      quote: "The team's dedication to quality and their agile approach made our complex project smooth and successful. Highly recommended!",
      author: "David Park",
      role: "Product Director",
      company: "HealthCare Innovations",
      rating: 5,
    },
    {
      quote: "Exceptional communication, outstanding results. Ecesis is our go-to partner for all software development needs.",
      author: "Jennifer Wu",
      role: "CEO",
      company: "LogisticsPro",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-6">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Loved by industry leaders
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl p-12 lg:p-16 border-2 border-gray-100 shadow-2xl relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-purple-600 text-purple-600" />
                ))}
              </div>

              <p className="text-2xl lg:text-3xl text-gray-900 leading-relaxed mb-12 font-medium">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-xl text-gray-900">{testimonials[activeIndex].author}</div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex 
                          ? 'bg-purple-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-600" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote.slice(0, 120)}..."
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-purple-600 font-semibold">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { stat: '4.9/5', label: 'Average Rating' },
            { stat: '100+', label: 'Happy Clients' },
            { stat: '98%', label: 'Satisfaction Rate' },
            { stat: '95%', label: 'Repeat Business' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {item.stat}
              </div>
              <div className="text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}