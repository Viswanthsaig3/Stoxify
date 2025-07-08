'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Shield, AlertTriangle, GraduationCap, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden scroll-mt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary-400/10 blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent-400/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-primary-400/10 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display text-white mb-6"
          >
            About <span className="gradient-text">Stoxify</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-body"
          >
            A vibrant educational community dedicated to empowering traders with knowledge and insights
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 font-body leading-relaxed">
                STOXIFY is a vibrant community and platform dedicated to offering educational content focused on swing trading in equities and stocks. Our mission is to equip individuals with valuable insights and knowledge to enhance their understanding of the stock market.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display text-white mb-2">
                    Important Notice
                  </h4>
                  <p className="text-gray-300 font-body">
                    STOXIFY is not registered with the Securities and Exchange Board of India (SEBI). We do not provide any buy or sell calls or recommendations. Our content is purely educational.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Educational Focus
              </h3>
              <p className="text-gray-300 font-body leading-relaxed mb-6">
                All information and analysis shared on STOXIFY is intended for educational purposes only. We emphasize that we do not take responsibility for any financial gains or losses resulting from actions taken based on our content.
              </p>
              <div className="bg-gradient-to-r from-secondary-900/30 to-secondary-800/30 p-4 rounded-lg border border-secondary-400/20">
                <p className="text-secondary-300 font-medium text-sm">
                  We strongly advise consulting with a qualified financial advisor before making any investment decisions.
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-300 font-body leading-relaxed">
                Join STOXIFY to delve deeper into the world of swing trading, expand your knowledge base, and connect with a community passionate about learning and trading in the stock market.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: BookOpen,
              title: "Educational Content",
              description: "High-quality educational materials focused on swing trading strategies and market analysis."
            },
            {
              icon: Users,
              title: "Community Learning",
              description: "Connect with passionate traders and learners in our vibrant educational community."
            },
            {
              icon: Shield,
              title: "Transparent Approach",
              description: "Clear about our educational focus with no investment advice or SEBI registration claims."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-4">
                {value.title}
              </h4>
              <p className="text-gray-300 font-body leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}