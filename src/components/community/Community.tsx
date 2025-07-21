'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Video, ClipboardList, Search, Zap, MessageCircle, BarChart3, Brain, Users } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: "Proven Trading Strategies",
    description: "Access to the same strategies I use to generate asymmetric returns with low risk",
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Target,
    title: "Fast-Moving Identification",
    description: "Learn to spot explosive stocks and perfect entry timing",
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Video,
    title: "Video Lessons",
    description: "Step-by-step breakdowns of real trades and execution",
    iconColor: "text-gray-700",
    bgColor: "bg-gray-100"
  },
  {
    icon: ClipboardList,
    title: "Exclusive Watchlist",
    description: "Get curated updates to stay ahead of the market",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Search,
    title: "Scanning Techniques",
    description: "Build your personalized watchlist with expert filters",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Swing Trading",
    description: "Master short-term profits while keeping your day job",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: MessageCircle,
    title: "Live Monthly Q&As",
    description: "Get your questions answered in interactive sessions",
    iconColor: "text-gray-600",
    bgColor: "bg-gray-50"
  },
  {
    icon: BarChart3,
    title: "Technical Analysis",
    description: "Learn to spot key setups and read charts effectively",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Brain,
    title: "Mindset & Discipline",
    description: "Build psychological resilience for long-term success",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded traders to grow together",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Target,
    title: "Market Analysis",
    description: "Master market conditions for optimal strategy selection",
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: BarChart3,
    title: "Technical Analysis",
    description: "Learn to spot key setups and read charts effectively",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  }
]

export default function Community() {
  return (
    <section id="community" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
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
        {/* Consistent Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* Hero-style Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900 font-extrabold tracking-tight">
              Why Choose{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Stoxify
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Get ready to level up your trading game.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Card with enhanced styling */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-white/40 h-full overflow-hidden">

                {/* Professional overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-blue-50/30 transition-all duration-500 rounded-3xl"></div>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Enhanced Icon */}
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}
                    whileHover={{ rotate: 8 }}
                  >
                    {/* Icon background glow */}
                    <div className={`absolute inset-0 ${feature.bgColor} opacity-50 blur-md group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <feature.icon className={`relative w-7 h-7 sm:w-8 sm:h-8 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>

                  {/* Enhanced Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Enhanced Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>

                  {/* Professional bottom accent */}
                  <div className="mt-4 w-10 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}