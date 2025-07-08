'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Award, Users, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Professional Trader",
    location: "Mumbai",
    rating: 5,
    text: "Stoxify transformed my trading approach completely. The educational content is top-notch and the community support is incredible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    achievement: "₹50L+ Portfolio"
  },
  {
    name: "Priya Sharma", 
    role: "Investment Analyst",
    location: "Delhi",
    rating: 5,
    text: "The professional tools and analytics provided by Stoxify are exactly what I needed to enhance my trading strategies.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face",
    achievement: "95% Success Rate"
  },
  {
    name: "Amit Patel",
    role: "Risk Manager", 
    location: "Bangalore",
    rating: 5,
    text: "Outstanding platform with comprehensive risk management tools. The community discussions have been invaluable for my growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    achievement: "Expert Trader"
  },
  {
    name: "Sneha Reddy",
    role: "Equity Trader",
    location: "Hyderabad", 
    rating: 5,
    text: "Best trading education platform in India. The structured courses and mentorship have accelerated my learning tremendously.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    achievement: "Top 1% Performer"
  },
  {
    name: "Vikram Singh",
    role: "Portfolio Manager",
    location: "Pune",
    rating: 5,
    text: "Stoxify's analytics and insights have been game-changing for my portfolio management. Highly recommend to serious traders.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    achievement: "₹1Cr+ Managed"
  },
  {
    name: "Kavya Nair",
    role: "Day Trader",
    location: "Kochi",
    rating: 5,
    text: "The real-time market insights and community support make Stoxify stand out from other platforms. Exceptional value.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    achievement: "Daily Profits"
  }
]

const stats = [
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "50,000+", label: "Happy Traders", icon: Users },
  { value: "95%", label: "Success Stories", icon: TrendingUp },
  { value: "Premium", label: "Support Quality", icon: Award }
]

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop&crop=center" 
          alt="Success background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-blue-100/60 rounded-full flex items-center justify-center"
        >
          <Quote className="w-8 h-8 text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 left-16 w-12 h-12 bg-blue-50/80 rounded-full flex items-center justify-center"
        >
          <Star className="w-6 h-6 text-blue-600" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute top-1/2 right-12 w-14 h-14 bg-yellow-100/60 rounded-full flex items-center justify-center"
        >
          <Award className="w-7 h-7 text-yellow-600" />
        </motion.div>
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
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Success Stories</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Successful Traders
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from thousands of traders who have transformed their trading journey with our platform
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl font-bold font-display text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full bg-white border border-gray-200 hover:border-blue-300 rounded-3xl p-8 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:via-blue-50/10 group-hover:to-blue-100/30 transition-all duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + starIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 font-body leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Achievement Badge */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="text-blue-700 font-semibold text-sm text-center">
                      🏆 {testimonial.achievement}
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 group-hover:border-blue-200 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 font-display group-hover:text-blue-700 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 font-body">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 font-body">
                        📍 {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                <path d="M0 100 Q100 50 200 100 T400 100" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                <path d="M0 120 Q100 80 200 120 T400 120" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.6"/>
                <circle cx="80" cy="70" r="2" fill="#3b82f6" opacity="0.6"/>
                <circle cx="320" cy="130" r="3" fill="#3b82f6" opacity="0.4"/>
                <circle cx="200" cy="90" r="1.5" fill="#3b82f6" opacity="0.5"/>
              </svg>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </motion.div>

              <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-gray-700 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
                Start your trading journey today and become part of India's most successful trading community
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
                
                <motion.button 
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Stories
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>50,000+ Members</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-500" />
                  <span>SEBI Registered</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}