'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOverLightSection, setIsOverLightSection] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      
      // Hide/show navbar based on scroll direction
      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      setLastScrollY(scrollY)
      
      // Check if navbar is over light sections
      const communitySection = document.getElementById('community')
      const pricingSection = document.getElementById('pricing')
      const contactSection = document.getElementById('contact')
      
      let overLight = false
      
      // Check each light section
      const sections = [communitySection, pricingSection, contactSection]
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect()
          const navbarHeight = 64 // navbar height
          
          // Check if navbar overlaps with this section
          if (rect.top <= navbarHeight && rect.bottom >= 0) {
            overLight = true
          }
        }
      })
      
      setIsOverLightSection(overLight)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? isOverLightSection
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-200/20'
            : 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/images/StoXifyLogo.PNG"
                  alt="StoXify Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold font-display tracking-wide leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  StoXify
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isScrolled && isOverLightSection
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button 
              className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl group
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:w-full before:h-full before:translate-x-[-200%] before:skew-x-12 hover:before:translate-x-[200%] before:transition-transform before:duration-[1800ms] before:ease-out"
              onClick={() => {
              const pricingSection = document.getElementById('pricing')
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Join Community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative p-2 rounded-lg backdrop-blur transition-all duration-300 ${
                isScrolled && isOverLightSection
                  ? 'bg-gray-200/50 hover:bg-gray-200/70'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className={`w-5 h-5 ${
                      isScrolled && isOverLightSection ? 'text-gray-700' : 'text-white'
                    }`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={`w-5 h-5 ${
                      isScrolled && isOverLightSection ? 'text-gray-700' : 'text-white'
                    }`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-4 pt-4 pb-6 space-y-2 backdrop-blur-xl transition-all duration-500 ${
              isOverLightSection
                ? 'bg-white/95 border-t border-gray-200/50'
                : 'bg-black/95 border-t border-white/10'
            }`}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-4 rounded-lg font-medium transition-all duration-300 min-h-[44px] flex items-center ${
                    isOverLightSection
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <div className="pt-4 px-4">
                <motion.button 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}