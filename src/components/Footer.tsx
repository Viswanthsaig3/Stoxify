'use client'

import { motion } from 'framer-motion'
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  TrendingUp
} from 'lucide-react'

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Contact", url: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Trading Guide", url: "#" },
      { name: "Market Analysis", url: "#" },
      { name: "Help Center", url: "#" },
      { name: "API Documentation", url: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Cookie Policy", url: "#" },
      { name: "Disclaimer", url: "#" }
    ]
  }
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" }
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary-950 to-black">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-futuristic text-white">Stoxify</h3>
                </div>
                
                <p className="text-gray-300 mb-6 max-w-md font-modern">
                  India&apos;s biggest trading community empowering traders with AI-powered insights, expert guidance, and proven strategies for financial success.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="font-modern">support@stoxify.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="font-modern">+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="font-modern">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold font-futuristic text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-colors duration-200 font-modern"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm font-modern"
            >
              © 2024 Stoxify. All rights reserved. | SEBI Registered Investment Advisor
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black/30 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-xs text-center font-modern">
            <strong>Risk Disclaimer:</strong> Trading in financial markets involves substantial risk and is not suitable for all investors. 
            Past performance does not guarantee future results. Please consider your financial situation and risk tolerance before trading.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}