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

      {/* Candlestick Background Image - Same as Hero */}
      <div
        className="absolute inset-0 opacity-10 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/candlesticks.png)'
        }}
      ></div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Professional Image */}
            <div className="relative flex justify-start">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/traders.png"
                  alt="Professional Traders"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
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
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BECOME A MEMBER
                </motion.button>

                <motion.button
                  className="bg-transparent border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  FOLLOW US ON X
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Profile Images */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=40&h=40&fit=crop&crop=face`}
                        alt={`Member ${i}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-white">
                  <span className="font-bold">3k+</span> in Followers on Twitter
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}