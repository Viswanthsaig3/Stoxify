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
  TrendingUp,
  BarChart3,
  Shield,
  Award,
  Globe,
  Clock,
  Users,
  Zap
} from 'lucide-react'

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Trading Dashboard", url: "#", icon: BarChart3 },
      { name: "Portfolio Analytics", url: "#", icon: TrendingUp },
      { name: "Risk Management", url: "#", icon: Shield },
      { name: "Live Signals", url: "#", icon: Zap }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Market Research", url: "#", icon: Globe },
      { name: "Trading Academy", url: "#", icon: Award },
      { name: "API Documentation", url: "#", icon: Users },
      { name: "24/7 Support", url: "#", icon: Clock }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Stoxify", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Investor Relations", url: "#" },
      { name: "Press & Media", url: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Regulatory Compliance", url: "#" },
      { name: "Risk Disclosure", url: "#" }
    ]
  }
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, url: "#", color: "hover:bg-blue-500" },
  { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:bg-blue-600" },
  { name: "Instagram", icon: Instagram, url: "#", color: "hover:bg-royalblue-500" },
  { name: "YouTube", icon: Youtube, url: "#", color: "hover:bg-red-600" }
]

const trustBadges = [
  { name: "SEBI Registered", description: "Investment Advisor" },
  { name: "SSL Secured", description: "256-bit Encryption" },
  { name: "24/7 Support", description: "Round-the-clock Service" },
  { name: "ISO Certified", description: "Quality Assured" }
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-midnightblue-950 to-black overflow-hidden">
      {/* Trading Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop&crop=center" 
          alt="Financial data background"
          className="w-full h-full object-cover opacity-5 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-midnightblue-950/95 to-black/95" />
      </div>

      {/* Chart Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <path d="M0 300 Q200 200 400 250 T800 200 Q1000 150 1200 180" 
                stroke="url(#footerGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M0 400 Q150 350 350 380 T700 340 Q900 320 1200 300" 
                stroke="url(#footerGradient)" strokeWidth="1.5" fill="none" opacity="0.4"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl animate-float" />
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-royalblue-500/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-dodgerblue-500/10 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Stay Ahead of the{' '}
              <span className="bg-gradient-to-r from-blue-400 via-royalblue-400 to-dodgerblue-400 bg-clip-text text-transparent">
                Markets
              </span>
            </h3>
            <p className="text-lightgray-300 text-lg font-body max-w-2xl mx-auto">
              Get exclusive market insights, trading signals, and financial analysis delivered to your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl text-white placeholder-lightgray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-body"
            />
            <button className="bg-gradient-to-r from-royalblue-600 via-blue-600 to-dodgerblue-600 hover:from-royalblue-700 hover:via-blue-700 hover:to-dodgerblue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/50 font-body">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-royalblue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-white">Stoxify</h3>
                </div>
                
                <p className="text-lightgray-300 mb-8 max-w-sm font-body leading-relaxed">
                  India&apos;s premier algorithmic trading platform, empowering professional traders with 
                  institutional-grade tools and real-time market intelligence.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-lightgray-300 group hover:text-white transition-colors duration-200">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-body">support@stoxify.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-lightgray-300 group hover:text-white transition-colors duration-200">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-body">+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-3 text-lightgray-300 group hover:text-white transition-colors duration-200">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-body">Mumbai Financial District, India</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur border border-white/10 rounded-xl p-3 group hover:border-white/20 transition-all duration-300">
                      <div className="text-blue-400 font-semibold text-xs font-body">{badge.name}</div>
                      <div className="text-lightgray-400 text-xs font-body">{badge.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold font-display text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="flex items-center gap-3 text-lightgray-300 hover:text-white transition-colors duration-200 group font-body"
                      >
                        {link.icon && (
                          <link.icon className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors duration-200" />
                        )}
                        <span>{link.name}</span>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4 text-lightgray-400 text-sm font-body"
            >
              <span>© 2024 Stoxify Technologies Pvt. Ltd. All rights reserved.</span>
              <div className="hidden sm:block w-1 h-1 bg-lightgray-400 rounded-full"></div>
              <span>SEBI Registered Investment Advisor | REG NO: INA000015450</span>
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
                  className={`w-12 h-12 bg-white/10 hover:bg-white/20 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-lightgray-300 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Risk Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-black/50 to-midnightblue-950/50 backdrop-blur py-6 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-lightgray-400 text-sm leading-relaxed font-body">
              <strong className="text-white">Risk Disclosure:</strong> Trading and investing in financial markets carries substantial risk of loss and is not suitable for all investors. 
              Past performance does not guarantee future results. The value of investments may go down as well as up. 
              Please ensure you understand the risks involved and seek independent financial advice if necessary. 
              Stoxify does not provide investment advice or recommendations.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}