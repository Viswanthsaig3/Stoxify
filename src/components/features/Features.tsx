'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Video, 
  BookOpen, 
  Users,
  Zap,
  Target,
  Globe
} from 'lucide-react'
import { Card } from '@/components/ui/Card'

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Educational Content",
    description: "Access detailed educational materials focused on swing trading strategies, market analysis, and risk management techniques.",
    color: "text-blue-400",
    gradient: "from-blue-500/10 to-blue-600/10"
  },
  {
    icon: TrendingUp,
    title: "Market Analysis Learning",
    description: "Learn to analyze market trends, chart patterns, and technical indicators through comprehensive educational resources.",
    color: "text-green-400",
    gradient: "from-green-500/10 to-green-600/10"
  },
  {
    icon: Shield,
    title: "Risk Management Education",
    description: "Understand risk management principles and learn to protect your capital through educational content and case studies.",
    color: "text-amber-400",
    gradient: "from-amber-500/10 to-amber-600/10"
  },
  {
    icon: Video,
    title: "Educational Webinars",
    description: "Join live educational sessions where experts share knowledge about swing trading concepts and market understanding.",
    color: "text-purple-400",
    gradient: "from-purple-500/10 to-purple-600/10"
  },
  {
    icon: Brain,
    title: "Strategy Learning Modules",
    description: "Master various swing trading strategies through structured learning modules designed for different skill levels.",
    color: "text-indigo-400",
    gradient: "from-indigo-500/10 to-indigo-600/10"
  },
  {
    icon: Users,
    title: "Learning Community",
    description: "Connect with 20,000+ passionate learners in our educational community for discussions and knowledge sharing.",
    color: "text-pink-400",
    gradient: "from-pink-500/10 to-pink-600/10"
  },
  {
    icon: Zap,
    title: "Quick Learning Tools",
    description: "Access quick reference guides, cheat sheets, and educational summaries for efficient learning.",
    color: "text-yellow-400",
    gradient: "from-yellow-500/10 to-yellow-600/10"
  },
  {
    icon: Target,
    title: "Goal-Oriented Learning",
    description: "Set learning goals and track your progress through structured educational pathways and assessments.",
    color: "text-red-400",
    gradient: "from-red-500/10 to-red-600/10"
  },
  {
    icon: Globe,
    title: "Global Market Education",
    description: "Learn about different markets including NSE, BSE, and international exchanges through educational content.",
    color: "text-cyan-400",
    gradient: "from-cyan-500/10 to-cyan-600/10"
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-8 leading-tight">
            Educational Features for{' '}
            <span className="bg-gradient-to-r from-secondary-600 via-secondary-700 to-accent-600 bg-clip-text text-transparent">
              Learning Traders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body font-light leading-relaxed">
            Comprehensive educational resources and learning tools designed to enhance your understanding of swing trading and market analysis.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className={`h-full p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:border-secondary-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary-500/10 group relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/50 via-transparent to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-display text-gray-900 mb-4 group-hover:text-secondary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8 font-body text-lg font-light">
            Ready to start your educational journey in swing trading?
          </p>
          <button className="bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white font-semibold font-premium px-12 py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-secondary-500/25 hover:shadow-secondary-500/50 border border-secondary-400/20">
            Begin Learning Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}