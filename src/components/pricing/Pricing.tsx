'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react'
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
    icon: Star,
    color: "from-gray-50 to-gray-100",
    borderColor: "border-gray-200"
  },
  {
    name: "Professional",
    price: "₹2,999",
    period: "month",
    description: "Ideal for serious traders seeking advanced knowledge",
    features: [
      "All Basic features included",
      "Advanced technical analysis tools",
      "Live trading sessions",
      "Priority support",
      "Portfolio analytics",
      "Risk management tools",
      "Expert mentorship"
    ],
    popular: true,
    icon: Crown,
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-300"
  },
  {
    name: "Elite",
    price: "₹4,999",
    period: "month",
    description: "For professional traders who demand excellence",
    features: [
      "All Professional features",
      "Algorithmic trading strategies",
      "Personal trading coach",
      "VIP community access",
      "Custom indicators",
      "API access",
      "White-label solutions"
    ],
    popular: false,
    icon: Zap,
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-300"
  }
]

const features = [
  { icon: TrendingUp, text: "Advanced Analytics" },
  { icon: Shield, text: "Risk Management" },
  { icon: Users, text: "Expert Community" }
]

export default function Pricing() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Trading Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&crop=center" 
          alt="Trading background"
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20"
        >
          <Crown className="w-8 h-8 text-blue-400" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-16 w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/20"
        >
          <Zap className="w-10 h-10 text-purple-400" />
        </motion.div>
      </div>

      {/* Financial Chart Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="pricingGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="pricingChartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricingGrid)" />
          <motion.path 
            d="M0 600 Q300 400 600 450 T1200 300" 
            stroke="url(#pricingChartGradient)" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
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
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 mb-8"
          >
            <Crown className="w-4 h-4 text-blue-400" />
            <span className="text-white font-medium text-sm">Premium Plans</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-display text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Trading Plan
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Professional trading education designed for every level of expertise
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-body text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border ${plan.popular ? 'border-blue-400/50' : 'border-white/10'} rounded-3xl p-8 transition-all duration-300 group-hover:border-white/20 overflow-hidden`}>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? 'from-blue-500/10 to-purple-500/10' : 'from-white/0 to-white/0'} group-hover:opacity-100 transition-all duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <plan.icon className="w-8 h-8 text-gray-700" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 font-body text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold font-display text-white group-hover:text-blue-300 transition-colors duration-300">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 font-body">/{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Billed monthly</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/feature"
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mt-0.5 group-hover/feature:bg-blue-500/30 transition-colors duration-300">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300 font-body text-sm leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                          : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40'
                      } text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/button`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
              <path d="M0 100 Q100 50 200 100 T400 100" stroke="#3b82f6" strokeWidth="2" fill="none"/>
              <path d="M0 120 Q100 80 200 120 T400 120" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.6"/>
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-display text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact our team for enterprise solutions and custom pricing tailored to your organization's needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Contact Sales
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <motion.button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}