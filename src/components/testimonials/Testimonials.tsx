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
    text: "Started with zero knowledge about trading. STOXIFY's step-by-step approach helped me learn chart reading and understand market cycles. Now I'm consistently profitable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    achievement: "Beginner to Pro"
  },
  {
    name: "Meera Joshi", 
    role: "Bank Employee",
    location: "Pune",
    rating: 5,
    text: "Even with my finance background, I was making emotional trades. STOXIFY taught me proper risk management and patience. My portfolio is finally growing steadily.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    achievement: "Disciplined Trader"
  },
  {
    name: "Karthik Reddy",
    role: "Business Owner", 
    location: "Bangalore",
    rating: 5,
    text: "I was losing money trying to day trade. The swing trading education here changed my perspective completely. Now I trade part-time and make consistent profits.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    achievement: "Swing Trading Pro"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    location: "Delhi",
    rating: 5,
    text: "The community support and educational content helped me build confidence in my trading decisions. I've learned to trust my analysis and stick to my strategy.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4b0?w=150&h=150&fit=crop&crop=face",
    achievement: "Confident Trader"
  },
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    location: "Chennai",
    rating: 5,
    text: "Learning technical analysis through STOXIFY's structured approach made complex concepts simple. I can now identify high-probability setups with confidence.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    achievement: "Technical Expert"
  },
  {
    name: "Sneha Patel",
    role: "Doctor",
    location: "Ahmedabad",
    rating: 5,
    text: "Despite my busy schedule, the flexible learning approach helped me master swing trading fundamentals. I trade during market hours and it's working great.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    achievement: "Part-time Success"
  },
  {
    name: "Vikram Singh",
    role: "Sales Manager",
    location: "Jaipur",
    rating: 5,
    text: "The risk management strategies taught here saved me from major losses. I learned position sizing and stop-loss placement that actually works in real markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    achievement: "Risk Master"
  },
  {
    name: "Anita Desai",
    role: "Teacher",
    location: "Surat",
    rating: 5,
    text: "As a beginner, I was overwhelmed by market complexity. STOXIFY's simple explanations and practical examples made everything clear. Now I trade confidently.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    achievement: "Clear Understanding"
  },
  {
    name: "Rohit Agarwal",
    role: "CA Student",
    location: "Kolkata",
    rating: 5,
    text: "The forex trading section was incredibly detailed. I learned currency pair analysis and now I'm making consistent profits in the forex market alongside my studies.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    achievement: "Forex Success"
  },
  {
    name: "Deepika Nair",
    role: "HR Executive",
    location: "Kochi",
    rating: 5,
    text: "The crypto trading insights were game-changing. I learned to analyze blockchain projects and time my entries perfectly. My crypto portfolio has grown 300%.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    achievement: "Crypto Expert"
  },
  {
    name: "Amit Gupta",
    role: "Pharmacist",
    location: "Indore",
    rating: 5,
    text: "The community discussions and live sessions helped me understand market psychology. I no longer panic during market volatility and stick to my trading plan.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    achievement: "Calm Trader"
  },
  {
    name: "Kavya Reddy",
    role: "Architect",
    location: "Hyderabad",
    rating: 5,
    text: "The options trading strategies taught here are phenomenal. I learned covered calls and protective puts that generate steady income from my stock holdings.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    achievement: "Options Pro"
  },
  {
    name: "Suresh Iyer",
    role: "Retired Banker",
    location: "Coimbatore",
    rating: 5,
    text: "At 58, I thought it was too late to learn trading. STOXIFY proved me wrong. The patient guidance helped me build a retirement income through smart investing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    achievement: "Never Too Late"
  },
  {
    name: "Pooja Malhotra",
    role: "Homemaker",
    location: "Chandigarh",
    rating: 5,
    text: "As a stay-at-home mom, I wanted to contribute financially. STOXIFY taught me to trade during school hours. I now earn more than my previous job.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    achievement: "Financial Freedom"
  },
  {
    name: "Manish Jain",
    role: "Textile Trader",
    location: "Ludhiana",
    rating: 5,
    text: "Coming from traditional business, stock market seemed risky. STOXIFY's systematic approach showed me how to trade with calculated risks and consistent profits.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
    achievement: "Calculated Risks"
  }
]

// Duplicate testimonials for seamless infinite scroll
const firstRowTestimonials = [...testimonials, ...testimonials]
const secondRowTestimonials = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]

// Testimonial Card Component - Better Layout with No Line Breaks
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[420px] mx-3">
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-white/30 transition-all duration-300 h-36">
      <div className="flex gap-4 h-full">
        {/* Left Side - User Info */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 w-20">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 mb-2">
            <Image
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(testimonial.rating)].map((_, starIndex) => (
              <Star key={starIndex} className="w-2.5 h-2.5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          {/* Quote and Text */}
          <div className="flex-1">
            <div className="flex items-start gap-2 mb-3">
              <Quote className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm leading-relaxed overflow-hidden">
                <span className="line-clamp-3">
                  {testimonial.text}
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-end justify-between mt-2">
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-bold text-sm truncate">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-xs truncate">
                {testimonial.role} • {testimonial.location}
              </p>
            </div>
            <div className="bg-blue-500/20 rounded-lg px-2 py-1 ml-2 flex-shrink-0">
              <div className="text-blue-400 font-semibold text-xs whitespace-nowrap">
                🏆 {testimonial.achievement}
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

        {/* Enhanced First Row - Left to Right */}
        <motion.div 
          className="relative mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex"
            animate={{
              x: [0, `-${(testimonials.length * 408)}px`]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {firstRowTestimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Second Row - Right to Left */}
        <motion.div 
          className="relative mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex"
            animate={{
              x: [`-${(testimonials.length * 408)}px`, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {secondRowTestimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}