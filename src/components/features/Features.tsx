'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Shield, Users, Target, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import Image from 'next/image'

const features = [
  {
    icon: BarChart3,
    title: "Technical Analysis Education",
    description: "Learn to read charts and identify swing trading opportunities through comprehensive technical analysis courses.",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "50+",
    statLabel: "Learning Modules"
  },
  {
    icon: TrendingUp,
    title: "Market Research & Insights",
    description: "Access detailed market analysis and research reports to understand market trends and patterns.",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "Daily",
    statLabel: "Market Updates"
  },
  {
    icon: Shield,
    title: "Risk Management Education",
    description: "Learn essential risk management principles and techniques to protect your capital while swing trading.",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "Essential",
    statLabel: "Skills Taught"
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Connect with fellow learners in our educational community focused on swing trading knowledge sharing.",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "Active",
    statLabel: "Community"
  },
  {
    icon: Target,
    title: "Educational Content",
    description: "Structured learning materials covering swing trading fundamentals, strategies, and market analysis.",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stat: "Comprehensive",
    statLabel: "Curriculum"
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      {/* Trading Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center" 
          alt="Financial data background"
          fill
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Learning Features</span>
          </motion.div>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-body leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive learning resources designed to enhance your understanding of swing trading and market analysis.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const isLastCard = index === features.length - 1;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative ${
                  isLastCard ? 'sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none' : ''
                }`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full p-4 sm:p-6 bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 relative overflow-hidden">
                  
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-blue-100/50 transition-all duration-500 rounded-lg"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Icon with enhanced animation */}
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-2 sm:p-3 w-full group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                      <div className="text-sm sm:text-lg font-bold text-blue-700 mb-1">
                        {feature.stat}
                      </div>
                      <div className="text-xs text-blue-600">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}