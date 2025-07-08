'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Shield } from 'lucide-react'
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
          <path d="M0 600 Q300 400 600 450 T1200 300" stroke="url(#chartGradient)" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M0 650 Q200 500 500 520 T1200 400" stroke="url(#chartGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold font-display text-white mb-8 leading-tight">
              India's Largest{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Trading Community
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto font-body font-light leading-relaxed mb-12">
              Professional trading education platform trusted by thousands of traders across India
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold px-10 py-5 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/50 border border-blue-400/20">
                <TrendingUp className="w-6 h-6 mr-3" />
                Start Trading Journey
              </Button>
              
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold px-10 py-5 text-xl rounded-2xl transition-all duration-300 backdrop-blur">
                <BarChart3 className="w-6 h-6 mr-3" />
                View Platform
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-16">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="font-body text-sm">SEBI Registered</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-300">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="font-body text-sm">Premium Platform</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-300">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span className="font-body text-sm">Advanced Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}