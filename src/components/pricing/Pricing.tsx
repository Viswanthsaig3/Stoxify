'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, TrendingUp, Bitcoin, DollarSign } from 'lucide-react'
import { 
  hoverAnimations, 
  tapAnimations, 
  containerAnimations 
} from '@/lib/animations'

const pricingData = {
  stocks: {
    quarterly: {
      price: "₹2,999",
      period: "3 months",
      features: [
        "Daily Swing & Breakout Trade Ideas (Equity & Futures)",
        "Short, Medium & Long-Term Investment Ideas",
        "Pre-Market Watchlist + Weekly Market Outlook",
        "Access to Exclusive Stock Screeners",
        "Monthly Webinars & Group Discussions",
        "Upcoming News Events & Economic Calendars"
      ],
      ideal: "Traders & investors wanting to build consistency in stock swing trading using technical and fundamental insights."
    },
    annually: {
      price: "₹7,999",
      period: "12 months",
      features: [
        "Daily Swing & Breakout Trade Ideas (Equity & Futures)",
        "Short, Medium & Long-Term Investment Ideas",
        "Pre-Market Watchlist + Weekly Market Outlook",
        "Access to Exclusive Stock Screeners",
        "Monthly Webinars & Group Discussions",
        "Upcoming News Events & Economic Calendars"
      ],
      ideal: "Traders & investors wanting to build consistency in stock swing trading using technical and fundamental insights."
    }
  },
  forex: {
    quarterly: {
      price: "₹4,999",
      period: "3 months",
      features: [
        "20+ Weekly Forex Trade Setups (Major & Minor Pairs)",
        "Entry, Stop-Loss, and Target Price Details",
        "High Win-Rate Strategies (Up to 83%) – Educational Use Only",
        "Lot Sizing & Risk Management Guidance",
        "3500+ Pips Monthly Potential (For Tracking & Study)",
        "News Trading With the Community",
        "Weekly Market Review & Watchlist",
        "Monthly Webinars & Group Learning Sessions"
      ],
      ideal: "Beginners to intermediate traders who want structured forex learning through example-based trading plans."
    },
    annually: {
      price: "₹14,999",
      period: "12 months",
      features: [
        "20+ Weekly Forex Trade Setups (Major & Minor Pairs)",
        "Entry, Stop-Loss, and Target Price Details",
        "High Win-Rate Strategies (Up to 83%) – Educational Use Only",
        "Lot Sizing & Risk Management Guidance",
        "3500+ Pips Monthly Potential (For Tracking & Study)",
        "News Trading With the Community",
        "Weekly Market Review & Watchlist",
        "Monthly Webinars & Group Learning Sessions"
      ],
      ideal: "Beginners to intermediate traders who want structured forex learning through example-based trading plans."
    }
  },
  crypto: {
    quarterly: {
      price: "₹3,999",
      period: "3 months",
      features: [
        "20+ crypto setups weekly (scalping, swing, trend reversal patterns)",
        "Learning-focused breakdown of entries, SL, and target zones",
        "Weekly crypto market watchlists and sentiment analysis",
        "News-based strategy sessions with real-time community chat",
        "Monthly webinars on crypto trading strategies and market cycles",
        "Peer discussions, Q&A, and member-led analysis review"
      ],
      ideal: "Crypto enthusiasts looking to understand market patterns and develop structured trading approaches."
    },
    annually: {
      price: "₹11,999",
      period: "12 months",
      features: [
        "20+ crypto setups weekly (scalping, swing, trend reversal patterns)",
        "Learning-focused breakdown of entries, SL, and target zones",
        "Weekly crypto market watchlists and sentiment analysis",
        "News-based strategy sessions with real-time community chat",
        "Monthly webinars on crypto trading strategies and market cycles",
        "Peer discussions, Q&A, and member-led analysis review"
      ],
      ideal: "Crypto enthusiasts looking to understand market patterns and develop structured trading approaches."
    }
  }
}

export default function Pricing() {
  const [activePeriod, setActivePeriod] = useState<'quarterly' | 'annually'>('quarterly')

  return (
    <section id="pricing" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-2 md:mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-extrabold tracking-tight">
              Choose Your{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Plan
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join thousands of successful traders with proven strategies tailored to your trading style.
          </motion.p>
        </motion.div>

        {/* Modern Pill-Shaped Period Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700/50">
            <button
              onClick={() => setActivePeriod('quarterly')}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activePeriod === 'quarterly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setActivePeriod('annually')}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 relative ${
                activePeriod === 'annually'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Annually
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save 30%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4"
          {...containerAnimations.cardContainer}
        >
          
          {/* Stocks Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={hoverAnimations.cardHover}
            className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-sm rounded-xl p-5 sm:p-4 border border-slate-700/50 shadow-2xl shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 rounded-full px-2 py-1 mb-3">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-semibold">Stocks</span>
              </div>
              
              <div className="mb-3">
                <span className="text-3xl font-bold text-white">{pricingData.stocks[activePeriod].price}</span>
                <span className="text-gray-400 ml-2">/ {pricingData.stocks[activePeriod].period}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {pricingData.stocks[activePeriod].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <p className="text-xs text-gray-400 italic leading-tight">
                <span className="font-semibold text-blue-400">Ideal For:</span> {pricingData.stocks[activePeriod].ideal}
              </p>
            </div>

            <motion.button 
              className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold py-3 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
              onClick={() => {
                window.open('https://wa.me/917011957726?text=Hello%2C%20I%20want%20to%20join%20Stocks%20plan', '_blank')
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Become a Member</span>
            </motion.button>
          </motion.div>

          {/* Forex Card - Popular */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={hoverAnimations.cardHover}
            className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-400/60 transition-all duration-500 relative"
          >
            {/* Popular Badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-4 pt-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 rounded-full px-2 py-1 mb-3">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold">Forex</span>
              </div>
              
              <div className="mb-3">
                <span className="text-4xl font-bold text-white">{pricingData.forex[activePeriod].price}</span>
                <span className="text-gray-400 ml-2">/ {pricingData.forex[activePeriod].period}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {pricingData.forex[activePeriod].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <p className="text-xs text-gray-400 italic leading-tight">
                <span className="font-semibold text-blue-400">Ideal For:</span> {pricingData.forex[activePeriod].ideal}
              </p>
            </div>

            <motion.button 
              className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold py-3 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
              onClick={() => {
                window.open('https://wa.me/917011957726?text=Hello%2C%20I%20want%20to%20join%20Forex%20plan', '_blank')
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Become a Member</span>
            </motion.button>
          </motion.div>

          {/* Crypto Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={hoverAnimations.cardHover}
            className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl shadow-black/20 hover:shadow-orange-500/10 hover:border-orange-500/30 transition-all duration-500"
          >
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 rounded-full px-2 py-1 mb-3">
                <Bitcoin className="w-4 h-4" />
                <span className="text-xs font-semibold">Crypto</span>
              </div>
              
              <div className="mb-3">
                <span className="text-4xl font-bold text-white">{pricingData.crypto[activePeriod].price}</span>
                <span className="text-gray-400 ml-2">/ {pricingData.crypto[activePeriod].period}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {pricingData.crypto[activePeriod].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <p className="text-xs text-gray-400 italic leading-tight">
                <span className="font-semibold text-blue-400">Ideal For:</span> {pricingData.crypto[activePeriod].ideal}
              </p>
            </div>

            <motion.button 
              className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold py-3 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
              onClick={() => {
                window.open('https://wa.me/917011957726?text=Hello%2C%20I%20want%20to%20join%20Crypto%20plan', '_blank')
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Become a Member</span>
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}