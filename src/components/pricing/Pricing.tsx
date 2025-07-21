'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, TrendingUp, Bitcoin, DollarSign } from 'lucide-react'

const pricingData = {
  stocks: {
    quarterly: {
      price: "₹5,499",
      period: "3 months",
      features: [
        "Advanced stock analysis tools",
        "Real-time market data",
        "Portfolio tracking",
        "Expert stock picks",
        "Risk management tools",
        "Community access",
        "Email support"
      ]
    },
    yearly: {
      price: "₹14,449",
      period: "12 months",
      features: [
        "All quarterly features",
        "Priority support",
        "Advanced analytics",
        "Custom alerts",
        "One-on-one sessions",
        "Exclusive webinars",
        "Mobile app premium"
      ]
    }
  },
  crypto: {
    quarterly: {
      price: "$199",
      period: "3 months",
      features: [
        "Crypto market analysis",
        "DeFi opportunities",
        "NFT insights",
        "Portfolio tracking",
        "Risk assessment",
        "Community access",
        "Email support"
      ]
    },
    yearly: {
      price: "$449",
      period: "12 months",
      features: [
        "All quarterly features",
        "Priority support",
        "Advanced DeFi tools",
        "Custom alerts",
        "One-on-one sessions",
        "Exclusive research",
        "Mobile app premium"
      ]
    }
  },
  forex: {
    quarterly: {
      price: "$49",
      period: "3 months",
      features: [
        "Forex market analysis",
        "Currency pair insights",
        "Economic calendar",
        "Risk management",
        "Trading signals",
        "Community access",
        "Email support"
      ]
    },
    yearly: {
      price: "$129",
      period: "12 months",
      features: [
        "All quarterly features",
        "Priority support",
        "Advanced signals",
        "Custom alerts",
        "One-on-one sessions",
        "Exclusive analysis",
        "Mobile app premium"
      ]
    }
  }
}

const tabs = [
  { id: 'stocks', name: 'Stocks', icon: TrendingUp },
  { id: 'crypto', name: 'Crypto', icon: Bitcoin },
  { id: 'forex', name: 'Forex', icon: DollarSign }
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('forex')
  const [billingPeriod, setBillingPeriod] = useState('quarterly')

  const currentData = pricingData[activeTab as keyof typeof pricingData]

  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Blue Orbs Only */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900 font-extrabold tracking-tight">
              Pricing{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Plans
            </span>
          </motion.h2>
        </motion.div>

        {/* Market Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/20">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.name}
                  {tab.id === 'forex' && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/20">
            <div className="flex gap-1">
              <motion.button
                onClick={() => setBillingPeriod('quarterly')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${billingPeriod === 'quarterly'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Quarterly
              </motion.button>
              <motion.button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 30%
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Quarterly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative group"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-white/40 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-blue-50/30 transition-all duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Quarterly</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {currentData.quarterly.price}
                    </span>
                    <span className="text-gray-600 text-sm">/{currentData.quarterly.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {currentData.quarterly.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full relative overflow-hidden ${activeTab === 'forex'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    } text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative group"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-white/40 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-blue-50/30 transition-all duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Yearly</h3>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Best Value
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {currentData.yearly.price}
                    </span>
                    <span className="text-gray-600 text-sm">/{currentData.yearly.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {currentData.yearly.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}