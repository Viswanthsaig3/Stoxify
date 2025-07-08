'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const aboutStats = [
  {
    icon: Users,
    value: "Community",
    label: "Driven",
    color: "text-blue-400",
    description: "Learning together"
  },
  {
    icon: TrendingUp,
    value: "Swing",
    label: "Trading",
    color: "text-blue-400",
    description: "Specialized focus"
  },
  {
    icon: Shield,
    value: "Educational",
    label: "Only",
    color: "text-blue-400",
    description: "No trading calls"
  },
  {
    icon: Award,
    value: "Expert",
    label: "Analysis",
    color: "text-blue-400",
    description: "Professional research"
  }
]

const achievements = [
  "Dedicated to educational content on swing trading",
  "Focus on equities and stock market learning",
  "Community-driven knowledge sharing",
  "No buy/sell recommendations - education only"
]

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Trading Background - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop&crop=center" 
          alt="Trading floor background"
          fill
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Financial Chart Pattern Overlay - Hidden on mobile */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="aboutGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="aboutChartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
          <motion.path 
            d="M0 600 Q300 400 600 450 T1200 300" 
            stroke="url(#aboutChartGradient)" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path 
            d="M0 650 Q200 500 500 520 T1200 400" 
            stroke="url(#aboutChartGradient)" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-white font-medium text-sm">About Stoxify</span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Stoxify
              </span>
            </motion.h2>
            
            <motion.div 
              className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 font-body leading-relaxed mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                STOXIFY is a vibrant community and platform dedicated to offering educational content 
                focused on swing trading in equities and stocks.
              </p>
              
              <p>
                We are not registered with SEBI and do not provide buy or sell calls. 
                Our content is purely educational and aims to empower users with the skills needed to make 
                informed trading decisions.
              </p>
              
              <p>
                All information is for educational purposes only. 
                We advise consulting with a qualified financial advisor before making any investment decisions.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2 mb-4 sm:mb-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Join Our Community
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Trading Chart Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <Image 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop" 
                  alt="About Stoxify"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Stats on Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2">
                  <div className="text-white font-bold text-sm">Educational</div>
                  <div className="text-gray-300 text-xs">Content Only</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-2">
                  <div className="text-white font-bold text-sm">Swing Trading</div>
                  <div className="text-gray-300 text-xs">Specialized</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-0">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-3 sm:p-4 text-center group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center mx-auto mb-2 sm:mb-3"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    <div className="text-lg sm:text-xl font-bold font-display text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-body text-xs mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-500 font-body text-xs">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}