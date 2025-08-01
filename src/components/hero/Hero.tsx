'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3 } from 'lucide-react'
import { 
  entranceAnimations, 
  hoverAnimations, 
  tapAnimations, 
  containerAnimations 
} from '@/lib/animations'

// Premium animation variants using unified system

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Enhanced Background with Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </motion.div>

      {/* Animated Candlestick Background - Fixed for mobile */}
      <motion.div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/candlesticks.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-5 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-5 sm:bottom-40 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-blue-400/10 rounded-full blur-xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-[50] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-6 sm:py-8 md:py-12">
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            {...containerAnimations.staggerContainer}
          >

            {/* Enhanced Main Heading */}
            <motion.div
              {...entranceAnimations.slideUp}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-tight mb-3 md:mb-4 pt-20 sm:pt-16 md:pt-12"
                {...entranceAnimations.heroTitle}
              >
                <motion.span 
                  className="text-white font-extrabold tracking-tight"
                  {...entranceAnimations.slideInLeft}
                  transition={{ ...entranceAnimations.slideInLeft.transition, delay: 0.3 }}
                >
                  Join{' '}
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight"
                  {...entranceAnimations.scaleIn}
                  transition={{ ...entranceAnimations.scaleIn.transition, delay: 0.5 }}
                >
                  India's Largest
                </motion.span>
                <br />
                <motion.span 
                  className="text-white font-extrabold tracking-tight inline-block"
                  {...entranceAnimations.slideInRight}
                  transition={{ ...entranceAnimations.slideInRight.transition, delay: 0.7 }}
                >
                  Trading Community
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4"
                {...entranceAnimations.fadeInScale}
                transition={{ ...entranceAnimations.fadeInScale.transition, delay: 0.9 }}
              >
                Get ready to transform your trading & investing journey by joining India's most powerful group of traders.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-10 px-4"
              {...entranceAnimations.slideUp}
              transition={{ ...entranceAnimations.slideUp.transition, delay: 1.1 }}
            >
              <motion.button
                className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm sm:text-base
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
                after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                whileHover={hoverAnimations.buttonHover}
                whileTap={tapAnimations.scale}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Become a Member
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 backdrop-blur-sm group text-sm sm:text-base"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                whileHover={hoverAnimations.buttonHover}
                whileTap={tapAnimations.gentle}
              >
                <span className="flex items-center justify-center gap-2">
                  Become a Member
                  <motion.div
                    whileHover={hoverAnimations.iconHover}
                  >
                    <BarChart3 className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}