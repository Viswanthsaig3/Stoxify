'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, TrendingUp, Award, BookOpen, Shield } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const communityFeatures = [
  {
    icon: Users,
    title: "Expert Traders",
    description: "Connect with professional traders and industry experts",
    color: "text-blue-600"
  },
  {
    icon: MessageCircle,
    title: "Live Discussions",
    description: "Join real-time market discussions and analysis",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Access exclusive market insights and trading strategies",
    color: "text-blue-600"
  },
  {
    icon: Award,
    title: "Premium Content",
    description: "Educational content from certified trading professionals",
    color: "text-blue-600"
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Comprehensive trading guides and educational materials",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Moderated community with professional standards",
    color: "text-blue-600"
  }
]

export default function Community() {
  return (
    <section id="community" className="relative py-24 bg-white overflow-hidden">
      {/* Trading Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center" 
          alt="Trading community background"
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
            Trading{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
            Join India's most professional trading community and accelerate your learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center" 
                alt="Trading community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
              
              {/* Floating Stats */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Community Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Why Join Our Community?
              </h3>
              <p className="text-lg text-gray-600 font-body leading-relaxed mb-6">
                Connect with thousands of professional traders, access exclusive market insights, 
                and accelerate your trading journey through peer-to-peer learning.
              </p>
              <p className="text-lg text-gray-600 font-body leading-relaxed">
                Our community maintains high professional standards with SEBI compliance 
                and moderated discussions focused on education and market analysis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-display">
                Community Guidelines
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Educational content only • No investment advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>SEBI disclaimer applies • Professional standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Respectful discussions • Expert moderation</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
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
                  
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-4">
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