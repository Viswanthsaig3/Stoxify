'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Shield, Award } from 'lucide-react'

const aboutStats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Traders",
    color: "text-blue-400"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    value: "SEBI",
    label: "Registered",
    color: "text-blue-400"
  },
  {
    icon: Award,
    value: "4.9★",
    label: "Rating",
    color: "text-blue-400"
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Trading Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop&crop=center" 
          alt="Trading floor background"
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Financial Chart Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M0 600 Q300 400 600 450 T1200 300" stroke="url(#chartGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M0 650 Q200 500 500 520 T1200 400" stroke="url(#chartGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
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
            <h2 className="text-5xl md:text-6xl font-bold font-display text-white mb-8 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Stoxify
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 font-body leading-relaxed">
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
            </div>
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
            <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop&crop=center" 
                alt="Trading analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center group hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold font-display text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-body text-sm">
                    {stat.label}
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