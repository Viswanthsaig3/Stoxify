'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3 } from 'lucide-react'

// Animation variants for better reusability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 1.2
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.8
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

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

      {/* Animated Candlestick Background */}
      <motion.div 
        className="absolute inset-0 opacity-10 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/candlesticks.png)'
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
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
        className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Enhanced Main Heading */}
            <motion.div
              variants={itemVariants}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4 pt-20 sm:pt-16 md:pt-12"
                variants={textVariants}
              >
                <motion.span 
                  className="text-white font-extrabold tracking-tight inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                >
                  Join{' '}
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 100 }}
                >
                  India's Largest
                </motion.span>
                <br />
                <motion.span 
                  className="text-white font-extrabold tracking-tight inline-block"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                >
                  Trading Community
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              >
                Get ready to transform your trading & investing journey by joining India's most powerful group of traders.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-10 px-4"
              variants={itemVariants}
            >
              <motion.button
                className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/60 group text-sm sm:text-base
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out
                after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-400/0 after:via-blue-300/30 after:to-blue-400/0 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-[1500ms] after:delay-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
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
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarChart3 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
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