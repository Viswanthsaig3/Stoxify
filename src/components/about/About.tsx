'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Shield, Award, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react'
import Image from 'next/image'

const aboutStats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Traders",
    color: "text-blue-400",
    description: "Active community members"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    color: "text-blue-400",
    description: "Proven track record"
  },
  {
    icon: Shield,
    value: "SEBI",
    label: "Registered",
    color: "text-blue-400",
    description: "Regulatory compliance"
  },
  {
    icon: Award,
    value: "4.9★",
    label: "Rating",
    color: "text-blue-400",
    description: "Customer satisfaction"
  }
]

const achievements = [
  "India's fastest-growing trading platform",
  "Advanced risk management algorithms",
  "Professional-grade analytics tools",
  "24/7 customer support excellence"
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Trading Background */}
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop&crop=center" 
          alt="Trading floor background"
          fill
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 right-16 w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20"
        >
          <Award className="w-10 h-10 text-blue-400" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 25, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-24 left-12 w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20"
        >
          <BarChart3 className="w-8 h-8 text-blue-500" />
        </motion.div>
      </div>

      {/* Financial Chart Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-white font-medium text-sm">About Stoxify</span>
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-6xl font-bold font-display text-white mb-8 leading-tight"
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
              className="space-y-6 text-lg text-gray-300 font-body leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                Stoxify is India's leading trading education platform, empowering traders with 
                professional-grade tools and comprehensive market insights.
              </p>
              
              <p>
                Our platform combines advanced analytics with educational resources, creating 
                a complete ecosystem for serious traders who want to master the markets.
              </p>
              
              <p>
                With SEBI registration and a community of over 50,000 traders, we maintain 
                the highest standards of compliance and professional excellence.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3 mb-8"
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
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
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
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3">
                  <div className="text-white font-bold text-lg">₹2.5B+</div>
                  <div className="text-gray-300 text-sm">Daily Volume</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3">
                  <div className="text-white font-bold text-lg">98.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    <div className="text-3xl font-bold font-display text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-body text-sm mb-1">
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