'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Shield, Users, Target } from 'lucide-react'
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
          {/* Hero-style Title */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900 font-extrabold tracking-tight">
              Trade Like
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              The Institutions
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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 max-w-5xl mx-auto"
          >
            <Image 
              src="/images/Trade-like institutions.png" 
              alt="Trade Like Institutions"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
              quality={100}
              unoptimized
            />
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}