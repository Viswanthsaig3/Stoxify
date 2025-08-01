'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import { 
  entranceAnimations, 
  hoverAnimations, 
  tapAnimations 
} from '@/lib/animations'

export default function CTA() {
  const handleJoinNow = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank')
  }

  const handleWatchStories = () => {
    const testimonialsSection = document.getElementById('testimonials')
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
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
        {/* Header */}
        <motion.div
          {...entranceAnimations.fadeInScale}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* Hero-style Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4"
            {...entranceAnimations.heroTitle}
            transition={{ ...entranceAnimations.heroTitle.transition, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900 font-extrabold tracking-tight">
              Let's Grow and{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Win Together
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to transform your trading journey? Join thousands of successful traders who've already 
            elevated their skills and profits with our proven strategies and supportive community.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Join Now Button */}
          <motion.button
            onClick={handleJoinNow}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            whileHover={hoverAnimations.cardHover}
            whileTap={tapAnimations.gentle}
          >
            <Users className="w-5 h-5" />
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          {/* Watch Members Stories Button */}
          <motion.button
            onClick={handleWatchStories}
            className="group relative bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-blue-500 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            whileHover={hoverAnimations.cardHover}
            whileTap={tapAnimations.gentle}
          >
            <span>Watch Members Stories</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}