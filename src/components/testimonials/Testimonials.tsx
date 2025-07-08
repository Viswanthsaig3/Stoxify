'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Award, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "IT Professional",
    location: "Mumbai",
    rating: 5,
    text: "Started with zero knowledge about trading. STOXIFY's step-by-step approach helped me learn chart reading and understand market cycles. The community discussions are genuinely helpful, not just hype.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    achievement: "From Beginner to Confident",
    timeAgo: "3 weeks ago"
  },
  {
    name: "Meera Joshi", 
    role: "Bank Employee",
    location: "Pune",
    rating: 5,
    text: "Even with my finance background, I was making emotional trades. STOXIFY taught me proper risk management and patience. Now I wait for the right setups instead of jumping into every opportunity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    achievement: "Disciplined Trading Approach",
    timeAgo: "1 month ago"
  },
  {
    name: "Karthik Reddy",
    role: "Small Business Owner", 
    location: "Bangalore",
    rating: 5,
    text: "I was losing money trying to day trade. The swing trading education here changed my perspective completely. Learning to hold positions for days instead of minutes has made all the difference.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    achievement: "Profitable Swing Trader",
    timeAgo: "6 weeks ago"
  }
]

const stats = [
  { value: "4.8/5", label: "Learning Rating", icon: Star },
  { value: "Community", label: "Driven Learning", icon: Users },
  { value: "Educational", label: "Content Focus", icon: TrendingUp },
  { value: "Quality", label: "Learning Support", icon: Award }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Trading Background - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=800&fit=crop&crop=center" 
          alt="Financial data background"
          fill
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
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
            <span className="text-blue-700 font-medium text-sm">Learning Stories</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Learning{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from our community members about their educational journey and learning experience with STOXIFY.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
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
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold font-display text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
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
              <div className="h-full bg-white border border-gray-200 hover:border-blue-300 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:via-blue-50/10 group-hover:to-blue-100/30 transition-all duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
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
                  <p className="text-sm sm:text-base text-gray-700 font-body leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Achievement Badge */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 mb-3 sm:mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="text-blue-700 font-semibold text-xs sm:text-sm text-center">
                      🏆 {testimonial.achievement}
                    </div>
                  </div>

                  {/* Time indicator */}
                  <div className="text-xs text-gray-500 mb-4 sm:mb-6 text-center">
                    💬 {testimonial.timeAgo}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={`Testimonial from ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 font-display group-hover:text-blue-700 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-body">
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
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto relative overflow-hidden">
            
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
                className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-3">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-gray-700 font-body mb-6 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                Join our educational community and enhance your understanding of swing trading and market analysis
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Start Learning
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
                
                <motion.button 
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 font-semibold px-6 py-3 rounded-xl transition-all duration-300 group text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Reviews
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm text-gray-600"
              >
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-500" />
                  <span>Community Learning</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3 text-green-500" />
                  <span>Educational Content</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}