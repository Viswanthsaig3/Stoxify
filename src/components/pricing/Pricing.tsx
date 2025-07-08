'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const pricingPlans = [
  {
    name: "Basic",
    price: "₹999",
    period: "month",
    description: "Perfect for beginners starting their trading journey",
    features: [
      "Access to basic trading courses",
      "Community forum access",
      "Basic market insights",
      "Email support",
      "Mobile app access"
    ],
    popular: false,
    icon: Star
  },
  {
    name: "Professional",
    price: "₹2,999",
    period: "month",
    description: "Ideal for serious traders seeking advanced knowledge",
    features: [
      "All Basic features",
      "Advanced trading strategies",
      "Live trading sessions",
      "Premium analytics tools",
      "Priority support",
      "1-on-1 mentorship sessions",
      "Exclusive webinars"
    ],
    popular: true,
    icon: Crown
  },
  {
    name: "Elite",
    price: "₹5,999",
    period: "month",
    description: "Ultimate platform access for professional traders",
    features: [
      "All Professional features",
      "Personal trading coach",
      "Custom strategy development",
      "Real-time portfolio analysis",
      "VIP community access",
      "Direct expert consultation",
      "Advanced risk management tools"
    ],
    popular: false,
    icon: Zap
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
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
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Premium{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
            Choose the perfect plan to accelerate your trading journey with professional tools and expert guidance
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.popular ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-400/40 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/10 hover:border-white/20 hover:shadow-xl'
              }`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-br from-white/10 to-white/20'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-blue-400'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-body mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white font-display">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 font-body">
                      /{plan.period}
                    </span>
                  </div>
                  
                  <Button 
                    className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 font-body text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-white mb-4">
              Risk-Free 30-Day Trial
            </h3>
            <p className="text-gray-300 font-body mb-6">
              Try any plan risk-free for 30 days. Cancel anytime with full money-back guarantee.
            </p>
            <div className="text-sm text-gray-400 font-body">
              All plans include SEBI compliance guidelines and educational disclaimers
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}