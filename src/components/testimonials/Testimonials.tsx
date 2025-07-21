'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "IT Professional",
    location: "Mumbai",
    rating: 5,
    text: "Started with zero knowledge about trading. STOXIFY's step-by-step approach helped me learn chart reading and understand market cycles.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    achievement: "From Beginner to Confident"
  },
  {
    name: "Meera Joshi", 
    role: "Bank Employee",
    location: "Pune",
    rating: 5,
    text: "Even with my finance background, I was making emotional trades. STOXIFY taught me proper risk management and patience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    achievement: "Disciplined Trading Approach"
  },
  {
    name: "Karthik Reddy",
    role: "Small Business Owner", 
    location: "Bangalore",
    rating: 5,
    text: "I was losing money trying to day trade. The swing trading education here changed my perspective completely.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    achievement: "Profitable Swing Trader"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    location: "Delhi",
    rating: 5,
    text: "The community support and educational content helped me build confidence in my trading decisions.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?w=150&h=150&fit=crop&crop=face",
    achievement: "Confident Decision Maker"
  },
  {
    name: "Rajesh Kumar",
    role: "Engineer",
    location: "Chennai",
    rating: 5,
    text: "Learning technical analysis through STOXIFY's structured approach made complex concepts simple to understand.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    achievement: "Technical Analysis Expert"
  },
  {
    name: "Sneha Patel",
    role: "Doctor",
    location: "Ahmedabad",
    rating: 5,
    text: "Despite my busy schedule, the flexible learning approach helped me master swing trading fundamentals.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    achievement: "Time-Efficient Trader"
  }
]

// Duplicate testimonials for seamless infinite scroll
const firstRowTestimonials = [...testimonials, ...testimonials]
const secondRowTestimonials = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]

// Testimonial Card Component - Rectangular Layout
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-96 mx-3">
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300 h-32">
      <div className="flex gap-4 h-full">
        {/* Left Side - User Info */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 mb-2">
            <Image
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, starIndex) => (
              <Star key={starIndex} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Quote and Text */}
          <div>
            <div className="flex items-start gap-2 mb-2">
              <Quote className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                {testimonial.text}
              </p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold text-sm">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-xs">
                {testimonial.role} • {testimonial.location}
              </p>
            </div>
            <div className="bg-blue-500/20 rounded-lg px-2 py-1">
              <div className="text-blue-400 font-semibold text-xs">
                🏆 {testimonial.achievement.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnightblue-950/95 via-black/90 to-midnightblue-900/95" />
      </div>

      {/* Candlestick Background Image */}
      <div 
        className="absolute inset-0 opacity-10 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/candlesticks.png)'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-3 md:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-extrabold tracking-tight">
              Success{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Stories
            </span>
          </motion.h2>
        </motion.div>

        {/* First Row - Left to Right */}
        <div className="relative mb-8 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, `-${(testimonials.length * 408)}px`]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {firstRowTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative mb-12 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [`-${(testimonials.length * 408)}px`, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {secondRowTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  )
}