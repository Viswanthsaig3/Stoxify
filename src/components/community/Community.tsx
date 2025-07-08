'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, TrendingUp, Award, Shield, ArrowRight, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Image from 'next/image'

const communityFeatures = [
  {
    icon: Users,
    title: "Expert Traders",
    description: "Connect with professional traders and industry experts",
    color: "text-blue-600",
    stat: "500+",
    statLabel: "Experts"
  },
  {
    icon: MessageCircle,
    title: "Live Discussions",
    description: "Join real-time market discussions and analysis",
    color: "text-blue-600",
    stat: "24/7",
    statLabel: "Active"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Access exclusive market insights and trading strategies",
    color: "text-blue-600",
    stat: "Daily",
    statLabel: "Updates"
  },
  {
    icon: Award,
    title: "Premium Content",
    description: "Exclusive educational content and market research",
    color: "text-blue-600",
    stat: "1000+",
    statLabel: "Resources"
  },

  {
    icon: Shield,
    title: "Verified Members",
    description: "Curated community of verified trading professionals",
    color: "text-blue-600",
    stat: "100%",
    statLabel: "Verified"
  }
]

const communityStats = [
  { value: 50000, displayValue: "50,000+", label: "Active Members", icon: Users },
  { value: 10000, displayValue: "10K+", label: "Daily Messages", icon: MessageCircle },
  { value: 95, displayValue: "95%", label: "Success Rate", icon: TrendingUp },
  { value: 4.9, displayValue: "4.9★", label: "Community Rating", icon: Star, decimals: 1 }
]

export default function Community() {
  return (
    <section id="community" className="relative py-16 bg-white overflow-hidden">
      {/* Trading Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center" 
          alt="Financial data background"
          fill
          className="w-full h-full object-cover opacity-5"
        />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6"
          >
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Trading Community</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Trading Community
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto font-body leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Connect with professional traders and accelerate your trading journey through collaborative learning
          </motion.p>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl font-bold font-display text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                  {stat.label === "Community Rating" ? (
                    <AnimatedCounter 
                      end={stat.value} 
                      decimals={stat.decimals || 0}
                      suffix="★"
                      className="inline-block"
                    />
                  ) : stat.label === "Success Rate" ? (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix="%"
                      className="inline-block"
                    />
                  ) : stat.label === "Daily Messages" ? (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix="K+"
                      className="inline-block"
                    />
                  ) : (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix="+"
                      className="inline-block"
                    />
                  )}
                </div>
                <div className="text-sm text-gray-600 font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <Card className="h-full p-6 bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:via-blue-50/20 group-hover:to-blue-100/40 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-body leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 w-full group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-700 mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-xs text-blue-600">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>



        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                Ready to Connect with Elite Traders?
              </h3>
              <p className="text-gray-700 font-body mb-6 max-w-xl mx-auto leading-relaxed">
                Join thousands of successful traders in our premium community
              </p>
              
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Join Community
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}