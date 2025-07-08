'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Home, Star, Users, DollarSign, MessageCircle, BarChart3 } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Features', icon: Star, href: '#features' },
    { name: 'About', icon: Users, href: '#about' },
    { name: 'Pricing', icon: DollarSign, href: '#pricing' },
    { name: 'Testimonials', icon: MessageCircle, href: '#testimonials' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass border-b border-mediumslateblue-100/20 shadow-2xl shadow-mediumslateblue-100/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-mediumslateblue-100 to-royalblue-200 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-glass-dark p-2 rounded-xl border border-mediumslateblue-100/20">
                <Image
                  src="/images/StoxifyLogo.PNG"
                  alt="Stoxify Logo"
                  width={36}
                  height={36}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold font-display tracking-wider">
                <span className="gradient-text-premium">STOXIFY</span>
              </h1>
              <div className="flex items-center space-x-1 text-xs font-medium text-white-300">
                <BarChart3 className="w-3 h-3 text-mediumslateblue-100" />
                <span className="text-mediumslateblue-100">PREMIUM</span>
                <span className="text-royalblue-200">•</span>
                <span className="text-dodgerblue-100">TRADING</span>
                <span className="text-royalblue-200">•</span>
                <span className="text-slateblue-200">PLATFORM</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-glass-dark backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 text-white-300 group-hover:text-mediumslateblue-100 transition-colors duration-300" />
                  <span className="text-sm font-semibold font-display text-white-100 group-hover:text-mediumslateblue-100 transition-colors duration-300">
                    {item.name}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mediumslateblue-100 to-royalblue-200 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <button className="relative group btn-hover-glow">
              <div className="absolute -inset-1 bg-gradient-to-r from-mediumslateblue-100 to-royalblue-200 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gradient-to-r from-mediumslateblue-100 via-royalblue-200 to-royalblue-800 text-white-100 px-8 py-3 rounded-xl font-semibold font-display text-sm hover:shadow-xl shadow-mediumslateblue-100/30 transform hover:-translate-y-1 transition-all duration-300 border border-mediumslateblue-100/20">
                <span className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Join Premium</span>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-mediumslateblue-100 to-royalblue-200 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-glass-dark p-2 rounded-xl border border-mediumslateblue-100/20">
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white-100" />
                ) : (
                  <Menu className="w-5 h-5 text-white-100" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 glass-dark border-t border-mediumslateblue-100/20 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium font-display text-white-100 hover:text-mediumslateblue-100 hover:bg-glass transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-white-300 group-hover:text-mediumslateblue-100 transition-colors duration-300" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="pt-4">
              <button 
                className="w-full bg-gradient-to-r from-mediumslateblue-100 via-royalblue-200 to-royalblue-800 text-white-100 px-6 py-4 rounded-xl font-semibold font-display text-sm hover:shadow-xl shadow-mediumslateblue-100/30 transform hover:-translate-y-1 transition-all duration-300 border border-mediumslateblue-100/20 btn-hover-glow flex items-center justify-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Join Premium Platform</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}