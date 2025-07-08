'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Shield, Users, Target, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Professional-grade charts and technical analysis tools for informed trading decisions",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "99.9%",
    statLabel: "Accuracy"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Real-time market data and trends to keep you ahead of market movements",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "24/7",
    statLabel: "Market Coverage"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment tools to protect your investment portfolio",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "98%",
    statLabel: "Protection Rate"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with experienced traders and learn from industry professionals",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "50K+",
    statLabel: "Active Traders"
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Develop and execute winning trading strategies with our planning tools",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "95%",
    statLabel: "Success Rate"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Features() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Trading Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center" 
          alt="Financial data background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-blue-100/60 rounded-full flex items-center justify-center"
        >
          <Zap className="w-8 h-8 text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 left-16 w-12 h-12 bg-blue-50/80 rounded-full flex items-center justify-center"
        >
          <BarChart3 className="w-6 h-6 text-blue-600" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8"
          >
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Premium Features</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Professional Trading{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Platform
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Advanced tools and features designed for serious traders who demand professional-grade analytics
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full p-8 bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-blue-100/50 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-body leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 w-full group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-700 mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-blue-600">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}