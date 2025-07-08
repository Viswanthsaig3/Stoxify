'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Shield, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Subtle Grid Pattern - Hidden on mobile */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-[50] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-6 sm:py-8 md:py-12">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4 pt-20 sm:pt-16 md:pt-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  India's Largest
                </span>
                <br />
                <span className="text-white">
                  Trading Community
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Join thousands of traders learning swing trading together
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-10 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 group text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Join Community
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <motion.button 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 backdrop-blur-sm group text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <BarChart3 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: Users, value: "50K+", label: "Members" },
                { icon: Shield, value: "Educational", label: "Only" },
                { icon: TrendingUp, value: "Swing Trading", label: "Focus" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3 text-center group hover:bg-white/10 transition-all duration-300 w-24 sm:w-28"
                >
                  <stat.icon className="w-4 h-4 text-blue-400 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm sm:text-base font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}