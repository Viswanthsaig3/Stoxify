'use client'

import { motion } from 'framer-motion'
import { Users, MessageSquare, BookOpen, TrendingUp, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Community() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-white to-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6"
          >
            Learning <span className="gradient-text">Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
          >
            Join thousands of passionate learners exploring the world of swing trading through educational content and community discussions
          </motion.p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Active Community",
              description: "Connect with 20,000+ passionate traders and learners",
              highlight: "20K+ Members"
            },
            {
              icon: MessageSquare,
              title: "Daily Discussions",
              description: "Engage in meaningful conversations about market trends",
              highlight: "1000+ Daily Posts"
            },
            {
              icon: BookOpen,
              title: "Educational Content",
              description: "Access comprehensive swing trading educational materials",
              highlight: "500+ Resources"
            },
            {
              icon: TrendingUp,
              title: "Market Analysis",
              description: "Learn from detailed market analysis and educational insights",
              highlight: "Educational Only"
            },
            {
              icon: Clock,
              title: "Real-time Learning",
              description: "Stay updated with live educational sessions and webinars",
              highlight: "Live Sessions"
            },
            {
              icon: Star,
              title: "Quality Content",
              description: "Curated educational content focused on swing trading",
              highlight: "4.8★ Rating"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl hover:border-secondary-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="mb-4">
                <span className="text-secondary-500 text-sm font-mono tracking-wide">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-200 p-8 rounded-2xl mb-12 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20,000+", label: "Learning Members" },
              { value: "5,000+", label: "Students Educated" },
              { value: "500+", label: "Educational Resources" },
              { value: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold font-display text-secondary-500">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-body text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-6">
            Ready to Start Your Learning Journey?
          </h3>
          <p className="text-gray-600 font-body mb-8 max-w-2xl mx-auto">
            Join our educational community and start learning about swing trading with comprehensive resources and expert insights.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white font-semibold font-premium px-12 py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-secondary-500/25 hover:shadow-secondary-500/50"
          >
            Join Learning Community
          </Button>
          <p className="text-gray-500 text-sm mt-4 font-body">
            Educational content only • No investment advice • SEBI disclaimer applies
          </p>
        </motion.div>
      </div>
    </section>
  )
}