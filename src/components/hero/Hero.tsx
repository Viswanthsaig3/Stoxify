'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { StockCandleAnimation } from './StockCandleAnimation'
import { TrendingUp, Users, BookOpen, GraduationCap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary-400/10 blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent-400/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-primary-400/10 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-8 leading-tight">
                India&apos;s{' '}
                <span className="bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600 bg-clip-text text-transparent">
                  Largest
                </span>{' '}
                Trading Community
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-body font-light leading-relaxed">
                Join our vibrant educational community focused on swing trading. Learn from experts with purely educational content designed to enhance your understanding of the stock market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white font-semibold font-premium px-12 py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-secondary-500/25 hover:shadow-secondary-500/50 border border-secondary-400/20"
                >
                  Join Learning Community
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-12 py-4 rounded-full transition-all duration-300 font-premium backdrop-blur-sm"
                >
                  Explore Content
                </Button>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Users, value: '20K+', label: 'Learning Community' },
                { icon: BookOpen, value: '500+', label: 'Educational Resources' },
                { icon: GraduationCap, value: '5000+', label: 'Students Educated' },
                { icon: TrendingUp, value: '4.8★', label: 'Community Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-full bg-gradient-to-r from-secondary-500/20 to-accent-500/20 backdrop-blur-sm border border-white/10 group-hover:border-secondary-400/30 transition-all duration-300">
                      <stat.icon className="w-5 h-5 text-secondary-400 group-hover:text-secondary-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-display text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-premium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Content - 2D Stock Candle Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <StockCandleAnimation />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse mt-2" />
        </div>
      </motion.div>
    </section>
  )
}