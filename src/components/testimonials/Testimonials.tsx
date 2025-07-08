'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Professional Trader",
    location: "Mumbai",
    rating: 5,
    text: "Stoxify transformed my trading approach completely. The educational content is top-notch and the community support is incredible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma", 
    role: "Investment Analyst",
    location: "Delhi",
    rating: 5,
    text: "The professional tools and analytics provided by Stoxify are exactly what I needed to enhance my trading strategies.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Arjun Patel",
    role: "Swing Trader",
    location: "Bangalore",
    rating: 5,
    text: "Best trading education platform in India. The mentorship and community have been invaluable for my growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sneha Reddy",
    role: "Day Trader",
    location: "Hyderabad",
    rating: 5,
    text: "The risk management tools and educational resources helped me become a more disciplined and profitable trader.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Vikram Singh",
    role: "Portfolio Manager",
    location: "Chennai",
    rating: 5,
    text: "Stoxify's premium platform offers institutional-grade tools accessible to individual traders. Highly recommended.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Anita Joshi",
    role: "Options Trader",
    location: "Pune",
    rating: 5,
    text: "The advanced analytics and expert community at Stoxify have significantly improved my trading performance.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Trading Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center" 
          alt="Financial success background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
            Trader{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            Discover how thousands of traders have transformed their journey with our professional platform
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-gray-200 hover:border-blue-300 rounded-2xl p-8 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 transition-all duration-300 h-full">
                
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 font-body leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 font-display">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-body">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 font-display mb-2">
                  50,000+
                </div>
                <div className="text-gray-600 font-body">
                  Happy Traders
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 font-display mb-2">
                  4.9★
                </div>
                <div className="text-gray-600 font-body">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 font-display mb-2">
                  95%
                </div>
                <div className="text-gray-600 font-body">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}