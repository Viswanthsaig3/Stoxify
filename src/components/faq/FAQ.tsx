'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "What is STOXIFY?",
    answer: "STOXIFY is a platform dedicated to providing educational content about swing trading in equities and stocks. We aim to empower individuals with knowledge and insights to enhance their trading skills."
  },
  {
    question: "Is STOXIFY registered with SEBI?",
    answer: "No, STOXIFY is not registered with the Securities and Exchange Board of India (SEBI). We do not provide any buy or sell recommendations or investment advisory services."
  },
  {
    question: "What kind of content does STOXIFY provide?",
    answer: "STOXIFY offers a variety of educational content including articles, videos, webinars, and community discussions focused on swing trading strategies, market analysis, and trading psychology."
  },
  {
    question: "How can I benefit from STOXIFY?",
    answer: "By utilizing STOXIFY's resources, users can deepen their understanding of trading concepts, learn from industry insights, and engage with a community of like-minded traders."
  },
  {
    question: "Are there any fees to use STOXIFY?",
    answer: "Yes, STOXIFY charges fees for access to premium educational content. These fees are strictly for educational purposes and are non-refundable."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              Frequently Asked{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Questions
            </span>
          </motion.h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-400" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* More FAQs Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View More FAQs</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}