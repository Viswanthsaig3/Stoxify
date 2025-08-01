'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background - Same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>


      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center">
            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 text-center max-w-4xl"
            >
              {/* Main Heading */}
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Why Trade Alone When You Can{' '}
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Learn And Grow
                </span>{' '}
                With Top Traders?
              </motion.h1>

              {/* Description Text */}
              <motion.div
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg leading-relaxed">
                  Join our exclusive member's club and transform your trading journey. Learn proven strategies,
                  get market insights, and connect with successful traders who share their expertise.
                </p>

                <p className="text-lg leading-relaxed">
                  Stop trading in isolation. Start building wealth with a community that supports your growth
                  and helps you make smarter trading decisions every day.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BECOME A MEMBER
                </motion.button>

                <motion.button
                  className="bg-transparent border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE
                </motion.button>

              </motion.div>

              {/* Social Proof */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Profile Images - Real member avatars */}
                <div className="flex -space-x-3">
                  {[
                    { name: 'Arjun', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face' },
                    { name: 'Kavya', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=150&h=150&fit=crop&crop=face' },
                    { name: 'Rohit', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face' },
                    { name: 'Ananya', image: 'https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?w=150&h=150&fit=crop&crop=face' }
                  ].map((member, i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-3 border-white overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-white">
                  <span className="font-bold text-xl">10k+</span> <span className="text-gray-300">Active Members</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}