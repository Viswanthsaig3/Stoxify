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
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
        {/* Glassmorphism orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
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

        {/* Ultra Pill-Shaped Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="relative inline-flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 shadow-2xl">
            {/* Sliding pill indicator */}
            <motion.div
              className="absolute top-2 h-[calc(100%-16px)] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-xl"
              animate={{
                left: activePeriod === 'quarterly' ? '8px' : '50%',
                width: activePeriod === 'quarterly' ? 'calc(50% - 8px)' : 'calc(50% - 8px)'
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            
            <button
              onClick={() => setActivePeriod('quarterly')}
              className={`relative z-10 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 min-w-[140px] ${
                activePeriod === 'quarterly'
                  ? 'text-white scale-105'
                  : 'text-gray-300 hover:text-white scale-100'
              }`}
            >
              Quarterly
            </button>
            
            <button
              onClick={() => setActivePeriod('annually')}
              className={`relative z-10 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 min-w-[140px] ${
                activePeriod === 'annually'
                  ? 'text-white scale-105'
                  : 'text-gray-300 hover:text-white scale-100'
              }`}
            >
              <span>Annually</span>
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                SAVE 30%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards - Equal Height Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4"
          {...containerAnimations.cardContainer}
        >
          
          {/* Stocks Card - Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full bg-white/8 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-4xl font-bold text-white">{pricingData.stocks[activePeriod].price}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 shadow-lg">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">STOCKS</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {pricingData.stocks[activePeriod].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:border-gray-300 transition-all duration-300">
                    <Check className="w-3 h-3 text-white font-bold stroke-[3]" />
                  </div>
                  <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-semibold text-green-400">Ideal For:</span> {pricingData.stocks[activePeriod].ideal}
              </p>
            </div>

            <motion.button 
              className="w-full mt-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold py-3 rounded-full transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm
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

          {/* Forex Card - Most Popular Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full bg-white/12 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-400/40 hover:border-blue-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
          >
            {/* Popular Badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
            </div>

            <div className="flex items-start justify-between mb-6 pt-1">
              <div>
                <span className="text-4xl font-bold text-white">{pricingData.forex[activePeriod].price}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 shadow-lg">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">FOREX</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {pricingData.forex[activePeriod].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:border-gray-300 transition-all duration-300">
                    <Check className="w-3 h-3 text-white font-bold stroke-[3]" />
                  </div>
                  <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-semibold text-blue-400">Ideal For:</span> {pricingData.forex[activePeriod].ideal}
              </p>
            </div>

            <motion.button 
              className="w-full mt-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold py-3 rounded-full transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm
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

          {/* Crypto Card - Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full bg-white/8 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-4xl font-bold text-white">{pricingData.crypto[activePeriod].price}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 shadow-lg">
                <Bitcoin className="w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">CRYPTO</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {pricingData.crypto[activePeriod].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:border-gray-300 transition-all duration-300">
                    <Check className="w-3 h-3 text-white font-bold stroke-[3]" />
                  </div>
                  <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <p className="text-sm text-gray-200 leading-relaxed">
                <span className="font-semibold text-orange-400">Ideal For:</span> {pricingData.crypto[activePeriod].ideal}
              </p>
            </div>

            <motion.button 
              className="w-full mt-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold py-3 rounded-full transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm
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