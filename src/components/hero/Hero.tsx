'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Shield, ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
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
          <motion.path 
            d="M0 600 Q300 400 600 450 T1200 300" 
            stroke="url(#chartGradient)" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0 650 Q200 500 500 520 T1200 400" 
            stroke="url(#chartGradient)" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Main Heading with stagger animation */}
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                India's Largest{' '}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Trading Community
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-body font-light leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Connect with like-minded traders, share strategies, and grow together in India's most trusted trading community
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold px-10 py-5 text-xl rounded-2xl transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/50 border border-blue-400/20 group">
                  <TrendingUp className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Join Community
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold px-10 py-5 text-xl rounded-2xl transition-all duration-300 backdrop-blur group">
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators with stagger animation */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: Shield, text: "SEBI Registered", delay: 0 },
                { icon: TrendingUp, text: "Premium Community", delay: 0.2 },
                { icon: BarChart3, text: "Expert Insights", delay: 0.4 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + item.delay }}
                  className="flex items-center gap-3 text-gray-300 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-body text-sm group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
              >
                <motion.div 
                  className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                  animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}