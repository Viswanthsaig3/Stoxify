'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

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
    <section id="faq" className="py-12 bg-gradient-to-br from-aliceblue-100 to-white-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-3">
            <span className="text-gray-900 font-extrabold tracking-tight">
              Frequently Asked{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
              Questions
            </span>
          </h2>
          <p className="text-gray-700">
            Quick answers to common questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === index 
                  ? 'border-blue-500 shadow-blue-100' 
                  : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-5 py-4 text-left flex items-center justify-between transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0 ${
                  openIndex === index ? 'bg-transparent' : 'hover:bg-gray-50'
                }`}
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-4 h-4 text-gray-700" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4">
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}