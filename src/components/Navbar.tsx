'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Star, DollarSign, BarChart3, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnLightSection, setIsOnLightSection] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      
      // Check which section we're on to adapt text color
      const sections = document.querySelectorAll('section')
      let onLightSection = false
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollY
        const sectionHeight = rect.height
        
        if (scrollY + 100 >= sectionTop && scrollY + 100 <= sectionTop + sectionHeight) {
          const bgColor = window.getComputedStyle(section).backgroundColor
          // Check if section has white/light background
          if (section.classList.contains('bg-white') || bgColor.includes('255, 255, 255')) {
            onLightSection = true
          }
        }
      })
      
      setIsOnLightSection(onLightSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', icon: Star, href: '#features' },
    { name: 'About', icon: BarChart3, href: '#about' },
    { name: 'Pricing', icon: DollarSign, href: '#pricing' }
  ]

  const textColorClass = isOnLightSection ? 'text-gray-900' : 'text-white'
  const iconColorClass = isOnLightSection ? 'text-gray-600' : 'text-gray-300'
  const hoverTextClass = isOnLightSection ? 'group-hover:text-blue-600' : 'group-hover:text-blue-400'
  const hoverIconClass = isOnLightSection ? 'group-hover:text-blue-600' : 'group-hover:text-blue-400'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? isOnLightSection
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-500/5'
          : 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <Image
                  src="/images/StoxifyLogo.PNG"
                  alt="Stoxify Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold font-display tracking-wider leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  STOXIFY
                </span>
              </h1>
              <div className={`flex items-center space-x-1 text-xs font-medium ${iconColorClass} leading-none`}>
                <span className="text-blue-600">STOCKS</span>
                <span className="text-gray-400">•</span>
                <span className="text-blue-600">CRYPTO</span>
                <span className="text-gray-400">•</span>
                <span className="text-blue-600">FOREX</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isOnLightSection 
                    ? 'hover:bg-blue-50/80' 
                    : 'hover:bg-white/10'
                } backdrop-blur-sm`}
              >
                <item.icon className={`w-4 h-4 transition-colors duration-300 ${iconColorClass} ${hoverIconClass}`} />
                <span className={`text-sm font-semibold font-display transition-colors duration-300 ${textColorClass} ${hoverTextClass}`}>
                  {item.name}
                </span>
                <div className="absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative group overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold font-display text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative group p-3"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className={`relative p-2 rounded-xl transition-all duration-300 ${
                isOnLightSection 
                  ? 'bg-gray-50 hover:bg-gray-100' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur'
              }`}>
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${textColorClass} transition-transform duration-300 rotate-90`} />
                ) : (
                  <Menu className={`w-5 h-5 ${textColorClass} transition-transform duration-300`} />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className={`px-4 pt-4 pb-6 space-y-3 border-t backdrop-blur-xl transition-all duration-300 ${
            isOnLightSection 
              ? 'bg-white/95 border-gray-200/50' 
              : 'bg-black/95 border-white/10'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-medium font-display transition-all duration-300 ${
                  textColorClass
                } ${hoverTextClass} ${
                  isOnLightSection ? 'hover:bg-blue-50' : 'hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isOnLightSection ? 'bg-blue-50 group-hover:bg-blue-100' : 'bg-white/10 group-hover:bg-white/20'
                }`}>
                  <item.icon className={`w-5 h-5 transition-colors duration-300 ${iconColorClass} ${hoverIconClass}`} />
                </div>
                <span>{item.name}</span>
              </a>
            ))}
            
            <div className="pt-4 px-4">
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold font-display text-sm transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}