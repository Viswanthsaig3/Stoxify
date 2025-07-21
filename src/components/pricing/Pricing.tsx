'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, TrendingUp, Bitcoin, DollarSign, Crown, Sparkles } from 'lucide-react'

const pricingData = {
  stocks: {
    quarterly: {
      price: "₹5,499",
      originalPrice: "₹7,999",
      period: "3 months",
      popular: false,
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
      originalPrice: "₹21,999",
      period: "12 months",
      popular: true,
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
      originalPrice: "$299",
      period: "3 months",
      popular: false,
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
      originalPrice: "$699",
      period: "12 months",
      popular: true,
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
      originalPrice: "$79",
      period: "3 months",
      popular: false,
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
      originalPrice: "$199",
      period: "12 months",
      popular: true,
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

  const currentData = pricingData[activeTab as keyof typeof pricingData]

  return (
    <section id="pricing" className="relative py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            <span className="text-gray-900 font-extrabold">Choose Your </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">
              Plan
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Join thousands of successful traders with proven strategies.
          </p>
        </motion.div>

        {/* Compact Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white rounded-xl p-1 shadow-md border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
                {tab.id === 'forex' && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    activeTab === tab.id ? 'bg-blue-400 text-white' : 'bg-blue-100 text-blue-700'
                  }`}>
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compact Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Quarterly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 mb-3">
                <Sparkles className="w-3 h-3 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">Quarterly</span>
              </div>
              
              <div className="mb-3">
                <span className="text-4xl font-bold text-gray-900">{currentData.quarterly.price}</span>
                <span className="text-gray-600 ml-2">/ {currentData.quarterly.period}</span>
              </div>
              
              {currentData.quarterly.originalPrice && (
                <div className="text-sm text-gray-500 mb-2">
                  <span className="line-through">{currentData.quarterly.originalPrice}</span>
                  <span className="ml-2 text-green-600 font-semibold">Save 31%</span>
                </div>
              )}
              
              <p className="text-sm text-gray-600">Perfect for getting started</p>
            </div>

            <div className="space-y-3 mb-6">
              {currentData.quarterly.features.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
              <div className="text-xs text-gray-500 pl-6">
                +{currentData.quarterly.features.length - 5} more features
              </div>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
              Get Started
            </button>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-200 relative hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Popular Badge */}
            {currentData.yearly.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-6 pt-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-3 py-1 mb-3">
                <Crown className="w-3 h-3" />
                <span className="text-xs font-semibold">Yearly - Best Value</span>
              </div>
              
              <div className="mb-3">
                <span className="text-4xl font-bold text-gray-900">{currentData.yearly.price}</span>
                <span className="text-gray-600 ml-2">/ {currentData.yearly.period}</span>
              </div>
              
              {currentData.yearly.originalPrice && (
                <div className="text-sm text-gray-500 mb-2">
                  <span className="line-through">{currentData.yearly.originalPrice}</span>
                  <span className="ml-2 text-green-600 font-semibold">Save 36%</span>
                </div>
              )}
              
              <p className="text-sm text-gray-600">Best value for serious traders</p>
            </div>

            <div className="space-y-3 mb-6">
              {currentData.yearly.features.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
              <div className="text-xs text-gray-500 pl-6">
                +{currentData.yearly.features.length - 5} more features
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}