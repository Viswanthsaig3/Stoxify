'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, TrendingUp, Award, BookOpen, Shield, ArrowRight, Zap, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'

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
    icon: BookOpen,
    title: "Learning Hub",
    description: "Comprehensive trading courses and skill development",
    color: "text-blue-600",
    stat: "50+",
    statLabel: "Courses"
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
  { value: "50,000+", label: "Active Members", icon: Users },
  { value: "10K+", label: "Daily Messages", icon: MessageCircle },
  { value: "95%", label: "Success Rate", icon: TrendingUp },
  { value: "4.9★", label: "Community Rating", icon: Star }
]

export default function Community() {
  return (
    <section id="community" className="relative py-24 bg-white overflow-hidden">
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
            y: [0, -12, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-24 right-24 w-18 h-18 bg-blue-100/60 rounded-full flex items-center justify-center"
        >
          <Users className="w-9 h-9 text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 18, 0],
            x: [0, -6, 0]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-24 left-20 w-14 h-14 bg-blue-50/80 rounded-full flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7 text-blue-600" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-16 w-12 h-12 bg-blue-200/50 rounded-full flex items-center justify-center"
        >
          <Award className="w-6 h-6 text-blue-700" />
        </motion.div>
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
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8"
          >
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Trading Community</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join India's Elite{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Trading Community
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Connect with professional traders, share insights, and accelerate your trading journey through collaborative learning
          </motion.p>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold font-display text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
              <Card className="h-full p-8 bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-100 relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:via-blue-50/20 group-hover:to-blue-100/40 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
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

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left - Image */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center" 
                alt="Trading community"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Floating Stats on Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4">
                  <div className="text-white font-bold text-lg">Live Now</div>
                  <div className="text-gray-300 text-sm">Market Discussion</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4">
                  <div className="text-white font-bold text-lg">2,547</div>
                  <div className="text-gray-300 text-sm">Online Members</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold font-display text-gray-900 leading-tight">
              Experience the Power of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Collaborative Trading
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              Join a vibrant community where knowledge flows freely, strategies are shared, and success is celebrated together. Our platform brings together traders of all levels to learn, grow, and prosper.
            </p>

            <div className="space-y-4">
              {[
                "Real-time market discussions with experts",
                "Peer-to-peer learning and mentorship",
                "Exclusive trading strategies and insights",
                "24/7 community support and guidance"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Zap className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-700 font-body group-hover:text-gray-900 transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Join Community Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                <path d="M0 100 Q100 50 200 100 T400 100" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                <path d="M0 120 Q100 80 200 120 T400 120" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.6"/>
                <circle cx="100" cy="80" r="2" fill="#3b82f6" opacity="0.6"/>
                <circle cx="300" cy="120" r="3" fill="#3b82f6" opacity="0.4"/>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Ready to Connect with Elite Traders?
              </h3>
              <p className="text-gray-700 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful traders who share knowledge, strategies, and celebrate wins together in our premium community
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Join Premium Community
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
                
                <motion.button 
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}