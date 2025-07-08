'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Shield, Users, BookOpen, Target } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Professional-grade charts and technical analysis tools for informed trading decisions",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Real-time market data and trends to keep you ahead of market movements",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment tools to protect your investment portfolio",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with experienced traders and learn from industry professionals",
    color: "text-blue-600"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Extensive library of trading courses and educational materials",
    color: "text-blue-600"
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Develop and execute winning trading strategies with our planning tools",
    color: "text-blue-600"
  }
]

export default function Features() {
  return (
    <section className="relative py-24 bg-white">
      {/* Trading Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center" 
          alt="Financial data background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
            Premium Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            Professional Trading Platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full p-8 bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}